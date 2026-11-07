import './style.css';
import { World } from './three/world.js';
import { FAMILIES, CABINS, DESTINATIONS, WEEKDAYS, formatMoney, familyById } from './data.js';
import { icon, cityIcon } from './icons.js';
import { Sound } from './audio.js';

const $ = (id) => document.getElementById(id);
const app = $('app');
const world = new World($('scene'));
window.__heirloomWorld = world;
const sound = new Sound();
const compactLabel = () => window.matchMedia('(max-width: 560px)').matches;
const enterLabel = (f) =>
  compactLabel()
    ? `Enter ${f.surname} <span class="btn-arrow">→</span>`
    : `Enter the ${f.surname} life <span class="btn-arrow">→</span>`;

const SAVE_KEY = 'heirloom-estate-save-v1';
const MUTE_KEY = 'heirloom-muted-v1';
const ORIGINS = {
  ultra: { code: 'LAX', city: 'Los Angeles' },
  rich: { code: 'JFK', city: 'New York' },
  average: { code: 'DAY', city: 'Dayton' },
};
const MOOD_LABELS = ['GOLDEN HOUR', 'MORNING LIGHT', 'BLUE HOUR'];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let activeId = 'ultra';
let states = {};
let started = false;
let currentTrip = null;
let flightToken = 0;
let tutorialTimer = null;
let saveData = loadSave();

const ui = {
  panel: null,
  selectedDestination: null,
  selectedCabin: null,
};

world.start();

/* ── State & storage ─────────────────────────────────────── */
function createState(family) {
  return {
    familyId: family.id,
    cash: family.cash,
    day: 1,
    happiness: family.happiness,
    prestige: family.prestige,
    lastMomentDay: 0,
    trips: [],
    history: [
      {
        day: 1,
        title: 'The house is ready',
        detail: `${family.house.name} prepared for the family.`,
      },
    ],
  };
}

function getState(id) {
  if (!states[id]) states[id] = createState(familyById(id));
  return states[id];
}

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.states) return null;
    return parsed;
  } catch {
    return null;
  }
}

function hydrateFromSave() {
  if (!saveData) return;
  if (FAMILIES.some((f) => f.id === saveData.activeId)) activeId = saveData.activeId;
  FAMILIES.forEach((f) => {
    const saved = saveData.states?.[f.id];
    if (saved) {
      states[f.id] = { ...createState(f), ...saved, trips: saved.trips || [], history: saved.history || [] };
    }
  });
  if (saveData.started) {
    started = true;
    $('resume-btn').classList.remove('hidden');
    $('resume-btn').textContent = compactLabel()
      ? `Resume ${familyById(activeId).surname}`
      : `Resume the ${familyById(activeId).surname} story`;
  }
}

function saveGame() {
  try {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify({
        v: 1,
        activeId,
        started,
        states,
        savedAt: Date.now(),
      })
    );
  } catch {
    /* private-mode storage is allowed to fail silently */
  }
}

function state() {
  return getState(activeId);
}

function family() {
  return familyById(activeId);
}

/* ── Formatting helpers ──────────────────────────────────── */
function formatCompact(n) {
  if (Math.abs(n) >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2).replace(/\.?0+$/, '')}B`;
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(n >= 10_000_000 ? 1 : 2).replace(/\.?0+$/, '')}M`;
  if (Math.abs(n) >= 10_000) return `$${Math.round(n / 1_000)}K`;
  return formatMoney(n);
}

function parseLoose(str) {
  const value = parseFloat(String(str).replace(/[^0-9.]/g, '')) || 0;
  if (/B/i.test(str)) return value * 1_000_000_000;
  if (/M/i.test(str)) return value * 1_000_000;
  if (/K/i.test(str)) return value * 1_000;
  return value;
}

function dayLabel(s) {
  return `${WEEKDAYS[(Math.max(1, s.day) - 1) % 7]} · DAY ${s.day}`;
}

function moodLabel(s) {
  return MOOD_LABELS[(Math.max(1, s.day) - 1) % MOOD_LABELS.length];
}

function tripPrice(dest, cabinId) {
  const cabin = CABINS[cabinId] || CABINS.economy;
  return Math.round((dest.base * cabin.multiplier) / 10) * 10;
}

/* ── Icons and static UI ─────────────────────────────────── */
function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    if (!el.dataset.iconReady) {
      el.innerHTML = icon(el.dataset.icon);
      el.dataset.iconReady = '1';
    }
  });
}
hydrateIcons();

function setSoundButton() {
  const btn = $('sound-btn');
  if (btn) btn.innerHTML = icon(sound.enabled ? 'soundOn' : 'soundOff');
}

function toast(title, message = '', glyph = '✦') {
  const stack = $('toast-stack');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<div class="toast-icon">${glyph}</div><div><b>${title}</b>${message ? `<p>${message}</p>` : ''}</div>`;
  stack.appendChild(el);
  setTimeout(() => {
    el.classList.add('leaving');
    setTimeout(() => el.remove(), 380);
  }, 4300);
}

/* ── Selection screen ────────────────────────────────────── */
function renderPicker() {
  const picker = $('family-picker');
  picker.innerHTML = FAMILIES.map(
    (f) => `
    <button class="family-option ${f.id === activeId ? 'active' : ''}" data-family="${f.id}" role="listitem" style="--family-accent:${f.accent}">
      <span class="family-index">${f.order}</span>
      <span class="family-option-copy">
        <b>${f.familyName}</b>
        <small><span class="tier-dot" style="--family-accent:${f.accent}"></span>${f.tier}${f.id === 'average' ? ' · NO CONNECTIONS' : ''}</small>
      </span>
      <span class="family-money"><b>${formatCompact(f.cash)}</b><small>available</small></span>
    </button>`
  ).join('');

  picker.querySelectorAll('.family-option').forEach((btn) => {
    btn.addEventListener('click', () => previewFamily(btn.dataset.family));
  });
}

function previewFamily(id) {
  if (!FAMILIES.some((f) => f.id === id) || id === activeId) return;
  activeId = id;
  const f = family();
  renderPicker();
  $('enter-btn').innerHTML = enterLabel(f);
  $('preview-label').innerHTML = `<span class="preview-index">${f.order}</span><span class="preview-copy"><b>${f.house.name}</b><small>${f.house.location}</small></span>`;
  $('scene').style.opacity = '0.25';
  setTimeout(() => {
    world.setFamily(f, 'select', false);
    requestAnimationFrame(() => {
      $('scene').style.opacity = '1';
    });
  }, 70);
}

function initSelection() {
  hydrateFromSave();
  renderPicker();
  const f = family();
  $('enter-btn').innerHTML = enterLabel(f);
  $('preview-label').innerHTML = `<span class="preview-index">${f.order}</span><span class="preview-copy"><b>${f.house.name}</b><small>${f.house.location}</small></span>`;
  world.setFamily(f, 'select', false);
  $('select-screen').classList.remove('hidden');
  setTimeout(() => $('loader').classList.add('ready'), 700);
  setTimeout(() => $('loader').classList.add('hidden'), 1450);
}

/* ── HUD ─────────────────────────────────────────────────── */
function renderHUD() {
  const f = family();
  const s = state();
  $('crest').textContent = f.crest;
  $('family-name').textContent = compactLabel() ? f.surname : f.familyName;
  $('family-tier').textContent = f.tier.toUpperCase();
  $('cash-value').textContent = formatMoney(s.cash);
  $('income-value').textContent = `+${formatCompact(f.dailyIncome)} / day`;
  $('day-label').textContent = dayLabel(s);
  $('time-label').textContent = moodLabel(s);
  $('house-name').textContent = f.house.name;
  $('house-location').textContent = f.house.location;
  $('mood-line').textContent = f.mood;
  $('happy-value').textContent = s.happiness;
  $('prestige-value').textContent = s.prestige;
  $('happy-bar').style.width = `${s.happiness}%`;
  $('prestige-bar').style.width = `${s.prestige}%`;
  $('game-ui').style.setProperty('--family-accent', f.accent);

  const used = s.lastMomentDay === s.day;
  const moment = $('moment-btn');
  moment.disabled = used;
  moment.querySelector('b').textContent = used ? 'A quiet moment taken' : 'Take in the sunset';
  moment.querySelector('small').textContent = used ? 'Come back tomorrow' : '+5 happiness · once a day';

  document.title = `${f.house.name} · Heirloom`;
}

function showIntro(f) {
  const intro = $('intro');
  $('intro-crest').textContent = f.crest;
  $('intro-name').textContent = f.house.name;
  $('intro-tier').textContent = `${f.familyName.toUpperCase()} · ${f.tier.toUpperCase()}`;
  intro.classList.remove('hidden');
  intro.style.animation = 'none';
  void intro.offsetWidth;
  intro.style.animation = '';
  setTimeout(() => intro.classList.add('hidden'), reducedMotion ? 500 : 2600);
}

function showTutorial() {
  const tutorial = $('tutorial');
  tutorial.classList.remove('hide');
  clearTimeout(tutorialTimer);
  tutorialTimer = setTimeout(() => tutorial.classList.add('hide'), 9000);
}

function startGame({ resume = false } = {}) {
  const f = family();
  const s = state();
  started = true;
  saveGame();
  $('select-screen').classList.add('leaving');
  setTimeout(() => $('select-screen').classList.add('hidden'), 420);
  $('game-ui').classList.remove('hidden');
  world.setFamily(f, 'home', true);
  world.setDayMood(s.day);
  renderHUD();
  world.controls.autoRotate = false;
  world.controls.enabled = true;
  if (!resume) showIntro(f);
  showTutorial();
  sound.chime();
  if (resume) toast('Welcome back', `${f.house.name} has been kept exactly as you left it.`, '⌂');
}

/* ── Day & moment ────────────────────────────────────────── */
function advanceDay() {
  if (currentTrip) return;
  closePanel();
  const f = family();
  const s = state();
  const income = f.dailyIncome;
  s.cash += income;
  s.day += 1;
  s.lastMomentDay = 0;
  s.happiness = Math.max(42, s.happiness - 1);
  s.history.unshift({
    day: s.day,
    title: 'Daily income collected',
    detail: `${formatMoney(income)} from salary, businesses and investments.`,
  });
  if (s.history.length > 18) s.history.length = 18;
  world.setDayMood(s.day);
  renderHUD();
  saveGame();
  sound.cash();
  showDayBreak(s.day, income, f);
  toast(`Day ${s.day} · income collected`, `+${formatMoney(income)} added to available funds.`, '↻');
}

function showDayBreak(day, income, f) {
  const el = document.createElement('div');
  el.className = 'day-transition';
  el.innerHTML = `
    <div class="day-break-kicker">${WEEKDAYS[(day - 1) % 7]} · DAY ${day}</div>
    <div class="day-break-title">A new day at<br><em>${f.house.name}</em></div>
    <div class="day-break-income">+${formatMoney(income)}</div>
    <div class="day-break-sub">collected from the household portfolio</div>`;
  app.appendChild(el);
  setTimeout(() => el.classList.add('leaving'), reducedMotion ? 350 : 1900);
  setTimeout(() => el.remove(), reducedMotion ? 700 : 2500);
}

function takeMoment() {
  const s = state();
  if (s.lastMomentDay === s.day) {
    toast('Already taken', 'This moment belongs to today. A new one arrives tomorrow.', '☀');
    return;
  }
  s.happiness = Math.min(100, s.happiness + 5);
  s.lastMomentDay = s.day;
  s.history.unshift({ day: s.day, title: 'A moment at home', detail: 'The family took in the last light together. +5 happiness.' });
  renderHUD();
  saveGame();
  sound.chime();
  toast('Happiness +5', 'The terrace was quiet. Nobody reached for a phone.', '☀');
  if (ui.panel === 'estate') renderPanelBody('estate');
}

/* ── Panels ──────────────────────────────────────────────── */
const PANEL_META = {
  estate: { kicker: 'BACK AT THE HOUSE', title: null, subtitle: 'A private world, arranged exactly so.' },
  family: { kicker: 'THE HOUSEHOLD', title: null, subtitle: 'The people behind the name.' },
  assets: { kicker: 'THE PORTFOLIO', title: 'Everything, preselected', subtitle: 'A complete life, chosen for this family.' },
  travel: { kicker: 'THE GETAWAY', title: 'Where to next?', subtitle: 'Ten cities. Three ways to arrive.' },
  ledger: { kicker: 'THE BOOKS', title: 'Quietly managed', subtitle: 'Income, work and the cost of a life.' },
};

function openPanel(view = 'estate') {
  if (currentTrip) return;
  ui.panel = view;
  const f = family();
  const meta = PANEL_META[view];
  $('panel-kicker').innerHTML = `<span class="eyebrow-line"></span>${meta.kicker}`;
  $('panel-title').textContent = view === 'family' ? f.familyName : view === 'estate' ? f.house.name : meta.title;
  $('panel-subtitle').textContent = view === 'estate' ? `${f.house.location} · ${f.house.style}` : meta.subtitle;
  $('panel').classList.remove('hidden');
  $('panel').setAttribute('aria-hidden', 'false');
  $('panel-body').scrollTop = 0;
  world.controls.enabled = false;
  renderPanelBody(view);
  document.querySelectorAll('.dock-item').forEach((b) => b.classList.toggle('active', b.dataset.view === view));
  sound.click();
}

function closePanel() {
  if ($('panel').classList.contains('hidden')) return;
  $('panel').classList.add('hidden');
  $('panel').setAttribute('aria-hidden', 'true');
  ui.panel = null;
  world.controls.enabled = true;
  document.querySelectorAll('.dock-item').forEach((b) => b.classList.toggle('active', b.dataset.view === 'estate'));
}

function renderPanelBody(view) {
  const body = $('panel-body');
  const f = family();
  const s = state();
  if (view === 'estate') body.innerHTML = estatePanel(f, s);
  if (view === 'family') body.innerHTML = familyPanel(f, s);
  if (view === 'assets') body.innerHTML = assetsPanel(f, s);
  if (view === 'travel') body.innerHTML = travelPanel(f, s);
  if (view === 'ledger') body.innerHTML = ledgerPanel(f, s);
  hydrateIcons(body);
  bindPanelActions(view);
}

function bindPanelActions(view) {
  const body = $('panel-body');
  const momentBtn = body.querySelector('#panel-moment');
  if (momentBtn) momentBtn.addEventListener('click', takeMoment);

  const switchBtn = body.querySelector('#switch-household-btn');
  if (switchBtn) switchBtn.addEventListener('click', openSwitch);

  const endDay = body.querySelector('#panel-end-day');
  if (endDay) endDay.addEventListener('click', advanceDay);

  if (view === 'travel') {
    body.querySelectorAll('[data-destination]').forEach((btn) => {
      btn.addEventListener('click', () => {
        ui.selectedDestination = btn.dataset.destination;
        ui.selectedCabin = family().travel.defaultCabin;
        renderPanelBody('travel');
        requestAnimationFrame(() => {
          document.getElementById('destination-detail')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
        });
      });
    });

    body.querySelectorAll('[data-cabin]').forEach((btn) => {
      btn.addEventListener('click', () => {
        ui.selectedCabin = btn.dataset.cabin;
        renderPanelBody('travel');
        requestAnimationFrame(() => {
          document.getElementById('destination-detail')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
        });
      });
    });

    const book = body.querySelector('#book-trip');
    if (book) {
      book.addEventListener('click', () => {
        const f = family();
        const s = state();
        const dest = DESTINATIONS.find((d) => d.id === ui.selectedDestination);
        if (!dest) return;
        const cabinId = ui.selectedCabin || f.travel.defaultCabin;
        const price = tripPrice(dest, cabinId);
        if (s.cash < price) {
          toast('Not quite yet', `You need ${formatMoney(price - s.cash)} more. End a few days to collect income.`, '◷');
          return;
        }
        startTrip(dest, cabinId, price);
      });
    }
  }
}

function memberCard(m) {
  return `
    <article class="member-card" style="--m-top:${m.top};--m-bottom:${m.bottom}">
      <div class="member-top">
        <div class="member-avatar">${m.name[0]}</div>
        <div class="member-name"><b>${m.name}</b><small>${m.age} years old</small></div>
      </div>
      <p class="member-role">${m.role}</p>
      <div class="member-outfit">${m.outfit}</div>
      <span class="member-chip">${m.style === 'child' ? 'Youngest generation' : m.style === 'gown' ? 'Heir apparent' : 'Household'}</span>
    </article>`;
}

function houseVisual(f) {
  return `
    <div class="house-visual">
      <div class="hv-kicker">THE RESIDENCE · ${f.house.value > 1_000_000 ? formatCompact(f.house.value) : formatMoney(f.house.value)}</div>
      <h3>${f.house.name}</h3>
      <p>${f.house.blurb}</p>
      <div class="house-specs">
        <div class="spec"><small>Location</small><b>${f.house.location}</b></div>
        <div class="spec"><small>Interior</small><b>${f.house.area}</b></div>
        <div class="spec"><small>Bedrooms</small><b>${f.house.beds} · ${f.house.baths} baths</b></div>
        <div class="spec"><small>Staff</small><b>${f.house.staff === 0 ? 'The family itself' : `${f.house.staff} in residence`}</b></div>
      </div>
    </div>`;
}

function estatePanel(f, s) {
  return `
    <section class="panel-section">
      ${houseVisual(f)}
    </section>
    <section class="panel-section split">
      <div class="panel-card">
        <span class="section-label">HOUSEHOLD PULSE</span>
        <div class="stat-big-grid">
          <div class="stat-big"><small>HAPPINESS</small><b>${s.happiness}</b><i>at home</i></div>
          <div class="stat-big"><small>STANDING</small><b>${s.prestige}</b><i>in the world</i></div>
          <div class="stat-big"><small>PRIVACY</small><b>${f.privacy}</b><i>very protected</i></div>
          <div class="stat-big"><small>TRIPS</small><b>${s.trips.length}</b><i>taken together</i></div>
        </div>
        <button id="panel-moment" class="moment-btn" ${s.lastMomentDay === s.day ? 'disabled' : ''} style="margin-top:14px">
          <span class="moment-icon">☀</span>
          <span><b>${s.lastMomentDay === s.day ? 'A quiet moment taken' : 'Take in the sunset'}</b><small>${s.lastMomentDay === s.day ? 'Come back tomorrow' : '+5 happiness · once a day'}</small></span>
        </button>
      </div>
      <div class="panel-card warm">
        <span class="section-label">THE FAMILY CREED</span>
        <p class="profile-quote">“${f.philosophy}”</p>
        <div style="margin-top:16px">
          <div class="profile-line"><span>Connections</span><b>${f.connections}</b></div>
          <div class="profile-line"><span>Household</span><b>${f.members.length} people</b></div>
          <div class="profile-line"><span>Today</span><b>${moodLabel(s)}</b></div>
          <div class="profile-line"><span>Liquid funds</span><b>${formatMoney(s.cash)}</b></div>
        </div>
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>The household</h3><p>Tap Family in the dock for every detail</p></div>
      <div class="member-grid">${f.members.map(memberCard).join('')}</div>
    </section>`;
}

function familyPanel(f, s) {
  return `
    <section class="panel-section">
      <div class="stat-big-grid">
        <div class="stat-big"><small>HAPPINESS</small><b>${s.happiness}</b><i>household mood</i></div>
        <div class="stat-big"><small>STANDING</small><b>${s.prestige}</b><i>prestige</i></div>
        <div class="stat-big"><small>CONNECTIONS</small><b>${f.id === 'average' ? '0' : f.id === 'rich' ? 'Strong' : 'Global'}</b><i>${f.id === 'average' ? 'no shortcuts' : 'doors open'}</i></div>
        <div class="stat-big"><small>TOGETHER</small><b>${s.trips.length}</b><i>journeys taken</i></div>
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>${f.familyName}</h3><p>${f.tagline}</p></div>
      <p style="margin:0 0 17px;max-width:720px;font-family:'Cormorant',serif;font-size:21px;line-height:1.35;color:rgba(243,235,221,.72)">${f.intro}</p>
      <div class="member-grid">${f.members.map(memberCard).join('')}</div>
    </section>
    <section class="panel-section split">
      <div class="panel-card warm">
        <span class="section-label">WHAT THEY BELIEVE</span>
        <p class="profile-quote">“${f.philosophy}”</p>
      </div>
      <div class="panel-card">
        <span class="section-label">THE FINE PRINT</span>
        <div class="profile-line"><span>Network</span><b>${f.connections}</b></div>
        <div class="profile-line"><span>Privacy</span><b>${f.privacy} / 100</b></div>
        <div class="profile-line"><span>Daily inflow</span><b>${formatMoney(f.dailyIncome)}</b></div>
        <div class="profile-line"><span>Household clothing</span><b>${f.id === 'average' ? 'High street & hand-me-downs' : f.id === 'rich' ? 'Designer, quietly worn' : 'Bespoke & couture'}</b></div>
      </div>
    </section>
    <div class="switch-household">
      <div><b>Curious about another life?</b><p>Switch households without losing this family's money, days or memories.</p></div>
      <button id="switch-household-btn" class="btn btn-quiet small">Choose another family</button>
    </div>`;
}

function assetItem(iconName, label, title, meta) {
  return `
    <div class="asset-item">
      <div class="asset-icon">${icon(iconName)}</div>
      <div class="asset-copy"><small>${label}</small><b>${title}</b><p>${meta}</p></div>
    </div>`;
}

function assetsPanel(f, s) {
  const totalBusiness = f.businesses.reduce((sum, b) => sum + parseLoose(b.daily), 0);
  return `
    <section class="panel-section">
      ${houseVisual(f)}
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>House & transport</h3><p>Every object was preselected for this family</p></div>
      <div class="asset-grid">
        ${assetItem('home', 'RESIDENCE', f.house.name, `${f.house.location} · ${f.house.area} · ${formatMoney(f.house.value)}`)}
        ${assetItem('car', 'CAR', f.vehicles.car, f.vehicles.carMeta)}
        ${assetItem('helicopter', 'HELICOPTER', f.vehicles.helicopter, f.vehicles.helicopterMeta)}
        ${assetItem('jet', 'PLANE', f.vehicles.plane, f.vehicles.planeMeta)}
        ${assetItem('boat', 'WATER', f.vehicles.boat, f.id === 'average' ? 'A borrowed canoe at the lake' : f.id === 'rich' ? 'Chartered each August' : 'Crew of 18 · Mediterranean summer')}
        ${assetItem('watch', 'SIGNATURE', f.signature[0].value, 'The object that says the most with the least noise.')}
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Businesses & work</h3><p>${formatMoney(totalBusiness)} distributed each day</p></div>
      <div class="list-card">
        ${f.businesses
          .map(
            (b, i) => `
          <div class="list-row">
            <div class="list-num">${String(i + 1).padStart(2, '0')}</div>
            <div class="list-copy"><b>${b.name}</b><small>${b.sector} · ${b.share}</small></div>
            <div class="list-value"><b>${b.daily}</b><small>${b.value} value</small></div>
          </div>`
          )
          .join('')}
      </div>
    </section>
    <section class="panel-section split-even">
      <div>
        <div class="section-head"><h3>Insurance</h3></div>
        <div class="list-card">
          ${f.insurance
            .map(
              (ins) => `
            <div class="list-row">
              <div class="asset-icon" style="width:28px;height:28px;border-radius:8px">${icon('shield')}</div>
              <div class="list-copy"><b>${ins.name}</b><small>${ins.detail}</small></div>
              <div class="list-value"><b>${ins.cover}</b><small>active</small></div>
            </div>`
            )
            .join('')}
        </div>
      </div>
      <div>
        <div class="section-head"><h3>Other things</h3></div>
        <div class="sig-grid">
          ${f.signature
            .map(
              (item) => `
            <div class="sig-item"><small>${item.label}</small><b>${item.value}</b></div>`
            )
            .join('')}
        </div>
      </div>
    </section>
    <section class="panel-section">
      <div class="panel-card">
        <span class="section-label">WARDROBE, PRESELECTED</span>
        <div style="display:flex;flex-wrap:wrap;gap:7px;margin-top:2px">
          ${f.members.map((m) => `<span class="insurance-tag">${m.name}: ${m.outfit}</span>`).join('')}
        </div>
      </div>
    </section>`;
}

function destinationCard(d, selected) {
  return `
    <button class="destination-card ${selected ? 'selected' : ''}" data-destination="${d.id}" style="--dest-a:${d.palette[0]};--dest-b:${d.palette[1]}">
      <span class="dest-art">${cityIcon(d.id)}</span>
      <span class="dest-content">
        <span class="dest-code">${d.code} · ${d.country.toUpperCase()}</span>
        <b>${d.city}</b>
        <small>${d.tag}</small>
        <span class="dest-price"><span>ECONOMY, ROUND TRIP</span><b>${formatMoney(d.base)}</b></span>
      </span>
    </button>`;
}

function travelPanel(f, s) {
  const selected = DESTINATIONS.find((d) => d.id === ui.selectedDestination);
  const cabinId = ui.selectedCabin || f.travel.defaultCabin;
  let detail = '';
  if (selected) {
    const price = tripPrice(selected, cabinId);
    const canAfford = s.cash >= price;
    const missing = price - s.cash;
    detail = `
      <div class="destination-detail" id="destination-detail">
        <div class="dd-head">
          <div><h3>${selected.city}</h3><p>${selected.note}</p></div>
          <span class="dd-tag">${selected.tag}</span>
        </div>
        <div class="class-grid">
          ${Object.values(CABINS)
            .map(
              (c) => `
            <button class="class-card ${c.id === cabinId ? 'selected' : ''}" data-cabin="${c.id}">
              ${c.id === f.travel.defaultCabin ? '<span class="recommend">SUGGESTED</span>' : ''}
              <b>${c.label}</b>
              <span class="class-kicker">${c.kicker}</span>
              <span class="class-price">${formatMoney(tripPrice(selected, c.id))}</span>
              <small>${c.detail}</small>
              <span class="class-perks">${c.perks.map((p) => `<span>${p}</span>`).join('')}</span>
            </button>`
            )
            .join('')}
        </div>
        <div class="booking-bar">
          <div class="booking-total"><small>ROUND TRIP · ${f.members.length} GUESTS</small><b>${formatMoney(price)}</b></div>
          <button id="book-trip" class="btn btn-gold" ${canAfford ? '' : 'disabled'}>${canAfford ? `Book ${CABINS[cabinId].label}` : `Need ${formatMoney(missing)} more`} <span class="btn-arrow">→</span></button>
        </div>
        <p class="booking-note ${canAfford ? '' : 'warn'}">${canAfford ? `Charged to available funds. ${f.travel.aircraft} · ${selected.hours} flight.` : `End a few days to collect income, then come back. You are ${formatMoney(missing)} short.`}</p>
      </div>`;
  }

  return `
    <section class="panel-section">
      <div class="travel-intro">
        <div><span class="section-label">TEN DESTINATIONS</span><p style="margin:0;color:var(--muted);font-size:9px;line-height:1.5">Choose a city, then choose how you arrive. Economy, Business or First.</p></div>
        <div class="aircraft-chip">${icon('jet')}${f.travel.aircraft}</div>
      </div>
      <div class="destination-grid">${DESTINATIONS.map((d) => destinationCard(d, d.id === ui.selectedDestination)).join('')}</div>
      ${detail || `<div class="panel-card" style="margin-top:18px;text-align:center;padding:28px"><p style="margin:0;font-family:'Cormorant',serif;font-size:20px;color:rgba(243,235,221,.7)">Pick a city above to see Economy, Business and First Class.</p></div>`}
    </section>
    <section class="panel-section split-even">
      <div class="panel-card"><span class="section-label">YOUR TERMINAL</span><div class="profile-line"><span>Departure</span><b>${ORIGINS[f.id].city} · ${ORIGINS[f.id].code}</b></div><div class="profile-line"><span>Arrival</span><b>${f.travel.terminal}</b></div></div>
      <div class="panel-card warm"><span class="section-label">HOW YOU FLY</span><div class="profile-line"><span>Aircraft</span><b>${f.travel.aircraft}</b></div><div class="profile-line"><span>Suggested cabin</span><b>${CABINS[f.travel.defaultCabin].label}</b></div></div>
    </section>`;
}

function ledgerPanel(f, s) {
  const totalBusiness = f.businesses.reduce((sum, b) => sum + parseLoose(b.daily), 0);
  const other = Math.max(0, f.dailyIncome - totalBusiness);
  return `
    <section class="panel-section">
      <div class="ledger-hero">
        <div><small>AVAILABLE FUNDS</small><span class="big-money">${formatMoney(s.cash)}</span></div>
        <div class="ledger-hero-right"><b>+${formatMoney(f.dailyIncome)} / day</b><small>Net worth ${formatMoney(f.netWorth)}</small></div>
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Income</h3><p>Day ${s.day} · ${moodLabel(s)}</p></div>
      <div class="list-card income-list">
        ${f.businesses
          .map(
            (b) => `<div class="list-row"><div class="list-copy"><b>${b.name}</b><small>${b.sector} · ${b.share}</small></div><div class="list-value"><b>${b.daily}</b><small>daily</small></div></div>`
          )
          .join('')}
        <div class="list-row"><div class="list-copy"><b>Salaries & investments</b><small>After tax and household costs</small></div><div class="list-value"><b>${formatMoney(other)}</b><small>daily</small></div></div>
        <div class="list-row"><div class="list-copy"><b style="color:var(--gold-bright)">Total collected each day</b><small>Added when you end the day</small></div><div class="list-value"><b style="color:var(--gold-bright)">${formatMoney(f.dailyIncome)}</b><small>net</small></div></div>
      </div>
      <div class="ledger-actions"><button id="panel-end-day" class="btn btn-gold">End the day · collect income <span class="btn-arrow">→</span></button></div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Jobs</h3><p>Work is part of the story</p></div>
      <div class="list-card">
        ${f.jobs
          .map(
            (j) => `<div class="list-row"><div class="list-copy"><b>${j.member} · ${j.title}</b><small>${j.company}</small></div><div class="list-value"><b>${j.salary}</b><small>annual</small></div></div>`
          )
          .join('')}
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Recent activity</h3><p>The household ledger</p></div>
      <div class="list-card">
        ${s.history
          .slice(0, 8)
          .map(
            (h) => `<div class="list-row"><div class="list-num">${String(h.day).padStart(2, '0')}</div><div class="list-copy"><b>${h.title}</b><small>${h.detail}</small></div></div>`
          )
          .join('')}
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Insurance & protection</h3></div>
      <div class="list-card">
        ${f.insurance
          .map(
            (ins) => `<div class="list-row"><div class="asset-icon" style="width:27px;height:27px;border-radius:8px">${icon('shield')}</div><div class="list-copy"><b>${ins.name}</b><small>${ins.detail}</small></div><div class="list-value"><b>${ins.cover}</b><small>active</small></div></div>`
          )
          .join('')}
      </div>
    </section>`;
}

/* ── Travel ──────────────────────────────────────────────── */
function startTrip(dest, cabinId, price) {
  const f = family();
  const s = state();
  const cabin = CABINS[cabinId];
  const happiness = cabinId === 'first' ? 16 : cabinId === 'business' ? 12 : 8;
  const standing = cabinId === 'first' ? 6 : cabinId === 'business' ? 3 : 1;
  s.cash -= price;
  s.happiness = Math.min(100, s.happiness + happiness);
  s.prestige = Math.min(100, s.prestige + standing);
  s.history.unshift({
    day: s.day,
    title: `${cabin.label} to ${dest.city}`,
    detail: `${formatMoney(price)} · ${f.travel.aircraft} · +${happiness} happiness.`,
  });
  if (s.history.length > 18) s.history.length = 18;
  s.trips.unshift({ destination: dest.id, cabin: cabinId, price, day: s.day, happiness, standing });
  if (s.trips.length > 12) s.trips.length = 12;
  currentTrip = { dest, cabinId, price, happiness, standing, origin: ORIGINS[f.id] };
  renderHUD();
  saveGame();
  closePanel();
  $('game-ui').classList.add('hidden');
  $('vacation-screen').classList.add('hidden');
  beginFlight();
}

function beginFlight() {
  if (!currentTrip) return;
  const trip = currentTrip;
  const f = family();
  const cabin = CABINS[trip.cabinId];
  world.showFlight(f, trip.dest);

  $('flight-screen').classList.remove('hidden');
  $('flight-class-label').textContent = `${cabin.label.toUpperCase()} CLASS`;
  $('flight-from').textContent = trip.origin.code;
  $('flight-to').textContent = trip.dest.code;
  $('flight-route-label').textContent = `${trip.origin.city.toUpperCase()} → ${trip.dest.city.toUpperCase()}`;
  $('flight-duration').textContent = trip.dest.hours;
  $('flight-perks').innerHTML = cabin.perks.map((p) => `<span>${p}</span>`).join('');
  $('flight-status-text').textContent = 'Wheels up.';
  $('flight-percent').textContent = '0%';
  $('flight-progress-bar').style.width = '0%';
  const plane = document.querySelector('.route-plane');
  if (plane) plane.style.left = '0%';

  const token = ++flightToken;
  const duration = reducedMotion ? 1200 : 6200;
  const start = performance.now();
  sound.swoosh();

  const frame = (now) => {
    if (token !== flightToken || !currentTrip) return;
    const p = Math.min(1, (now - start) / duration);
    const percent = Math.round(p * 100);
    $('flight-progress-bar').style.width = `${percent}%`;
    $('flight-percent').textContent = `${percent}%`;
    if (plane) plane.style.left = `${percent}%`;

    let status = 'Wheels up.';
    if (percent > 16) status = 'Climbing to cruise.';
    if (percent > 36) status = 'Somewhere over the ocean.';
    if (percent > 58) status = 'Cabin lights dim. Dinner is served.';
    if (percent > 78) status = 'Beginning the descent.';
    if (percent > 93) status = `Arriving in ${trip.dest.city}.`;
    $('flight-status-text').textContent = status;

    if (p < 1) requestAnimationFrame(frame);
    else finishFlight();
  };
  requestAnimationFrame(frame);
}

function finishFlight() {
  if (!currentTrip) return;
  flightToken++;
  const trip = currentTrip;
  const f = family();
  const cabin = CABINS[trip.cabinId];

  $('flight-screen').classList.add('hidden');
  world.showDestination(trip.dest);

  $('vacation-class').textContent = `${cabin.label.toUpperCase()} CLASS`;
  $('vacation-city').textContent = trip.dest.city;
  $('vacation-country').textContent = `${trip.dest.country} · ${trip.dest.code}`;
  $('vacation-note').textContent = trip.dest.note;
  $('vacation-hotel').textContent = trip.dest.hotel;
  $('vacation-signature').textContent = trip.dest.signature;
  $('vacation-restaurant').textContent = trip.dest.restaurant;
  $('vacation-flight-meta').textContent = `${cabin.label.toUpperCase()} · ${trip.dest.hours} · ${formatMoney(trip.price)}`;
  $('vacation-bonus').textContent = `+${trip.happiness} happiness · +${trip.standing} standing`;
  $('vacation-screen').classList.remove('hidden');
  sound.arrival();
  saveGame();
}

function returnHome() {
  if (!currentTrip) return;
  const trip = currentTrip;
  const f = family();
  const s = state();
  $('vacation-screen').classList.add('hidden');
  $('game-ui').classList.remove('hidden');
  currentTrip = null;
  world.returnHome(true);
  world.setDayMood(s.day);
  renderHUD();
  saveGame();
  sound.chime();
  toast('Home again', `${f.house.name} is exactly where you left it. ${trip.dest.city} is already a memory.`, '⌂');
}

/* ── Family switching ────────────────────────────────────── */
function openSwitch() {
  if (currentTrip) return;
  closePanel();
  $('switch-options').innerHTML = FAMILIES.map((f) => {
    const s = getState(f.id);
    return `
      <button class="switch-option ${f.id === activeId ? 'current' : ''}" data-switch="${f.id}">
        <span class="switch-option-left"><span class="mini-crest">${f.crest}</span><span><b>${f.familyName}</b><small>${f.tier} · day ${s.day}</small></span></span>
        <span class="so-money">${formatCompact(s.cash)}</span>
      </button>`;
  }).join('');
  $('switch-modal').classList.remove('hidden');
  $('switch-options').querySelectorAll('[data-switch]').forEach((btn) => {
    btn.addEventListener('click', () => switchFamily(btn.dataset.switch));
  });
  sound.click();
}

function closeSwitch() {
  $('switch-modal').classList.add('hidden');
}

function switchFamily(id) {
  if (id === activeId) {
    closeSwitch();
    return;
  }
  closeSwitch();
  saveGame();
  activeId = id;
  const f = family();
  const s = state();
  world.setFamily(f, 'home', true);
  world.setDayMood(s.day);
  world.controls.autoRotate = false;
  renderHUD();
  saveGame();
  sound.chime();
  toast(`Now playing ${f.familyName}`, `${f.house.name} · ${formatMoney(s.cash)} available · day ${s.day}.`, f.crest);
  document.querySelectorAll('.dock-item').forEach((b) => b.classList.toggle('active', b.dataset.view === 'estate'));
}

/* ── Events ──────────────────────────────────────────────── */
$('enter-btn').addEventListener('click', () => startGame());
$('resume-btn').addEventListener('click', () => startGame({ resume: true }));
$('sound-btn').addEventListener('click', () => {
  sound.setEnabled(!sound.enabled);
  try {
    localStorage.setItem(MUTE_KEY, sound.enabled ? '0' : '1');
  } catch {}
  setSoundButton();
  if (sound.enabled) sound.chime();
});

$('tutorial-close').addEventListener('click', () => $('tutorial').classList.add('hide'));
$('day-chip').addEventListener('click', advanceDay);
$('next-day-btn').addEventListener('click', advanceDay);
$('wealth-btn').addEventListener('click', () => openPanel('ledger'));
$('house-btn').addEventListener('click', openSwitch);
$('moment-btn').addEventListener('click', takeMoment);

document.querySelectorAll('.dock-item').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.view === 'estate') {
      closePanel();
      return;
    }
    openPanel(btn.dataset.view);
  });
});

$('panel-close').addEventListener('click', closePanel);
document.querySelector('.panel-backdrop').addEventListener('click', closePanel);
$('skip-flight').addEventListener('click', finishFlight);
$('return-home').addEventListener('click', returnHome);
$('switch-cancel').addEventListener('click', closeSwitch);
document.querySelector('.switch-backdrop').addEventListener('click', closeSwitch);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!$('switch-modal').classList.contains('hidden')) closeSwitch();
    else if (!$('panel').classList.contains('hidden')) closePanel();
  }
});

document.addEventListener('pointerdown', (e) => {
  if (!sound.ctx) sound.init();
  if (e.target.closest('button') && sound.enabled) sound.click();
});

// A tap on a family member opens the household.
let down = null;
$('scene').addEventListener('pointerdown', (e) => {
  down = { x: e.clientX, y: e.clientY, t: performance.now(), pointerId: e.pointerId };
});
$('scene').addEventListener('pointerup', (e) => {
  if (!down || down.pointerId !== e.pointerId) return;
  const dist = Math.hypot(e.clientX - down.x, e.clientY - down.y);
  const elapsed = performance.now() - down.t;
  down = null;
  if (dist > 9 || elapsed > 700) return;
  if ($('game-ui').classList.contains('hidden')) return;
  if (!$('panel').classList.contains('hidden') || !$('switch-modal').classList.contains('hidden')) return;
  const index = world.pick(e.clientX, e.clientY);
  if (index !== null) {
    openPanel('family');
    const card = document.querySelectorAll('.member-card')[index];
    if (card) {
      card.style.borderColor = 'rgba(216,178,116,.6)';
      card.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
      setTimeout(() => (card.style.borderColor = ''), 1700);
    }
  }
});

window.addEventListener('resize', () => {
  if ($('panel').classList.contains('hidden')) world.controls.enabled = true;
});

/* ── Boot ────────────────────────────────────────────────── */
try {
  sound.enabled = localStorage.getItem(MUTE_KEY) !== '1';
} catch {}
setSoundButton();
world.controls.enabled = true;
initSelection();
