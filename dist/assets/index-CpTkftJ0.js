(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Lo="187",Ji={ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dd=0,bl=1,ud=2,ws=1,fd=2,ys=3,Ei=0,nn=1,Ft=2,Qi=0,Ts=1,El=2,wl=3,Tl=4,pd=5,qi=100,md=101,gd=102,_d=103,vd=104,xd=200,Md=201,Sd=202,yd=203,zc=204,Hc=205,bd=206,Ed=207,wd=208,Td=209,Ad=210,Rd=211,Cd=212,Pd=213,Ld=214,Ra=0,Ca=1,Pa=2,Ls=3,La=4,Da=5,Ia=6,Na=7,Gc=0,Dd=1,Id=2,$n=0,Vc=1,Wc=2,Xc=3,Do=4,$c=5,qc=6,Yc=7,Zc=300,is=301,Ds=302,Kr=303,Jr=304,Ua=1e3,Xn=1001,Fa=1002,$t=1003,Nd=1004,Xs=1005,an=1006,Qr=1007,ri=1008,dn=1009,Kc=1010,Jc=1011,Is=1012,Io=1013,Nn=1014,Ln=1015,Un=1016,No=1017,Uo=1018,ss=1020,Qc=35902,jc=35899,eh=1021,th=1022,Dn=1023,ci=1026,ai=1027,nh=1028,Fo=1029,wi=1030,Oo=1031,Bo=1033,vr=33776,xr=33777,Mr=33778,Sr=33779,Oa=35840,Ba=35841,ka=35842,za=35843,Ha=36196,Ga=37492,Va=37496,Wa=37488,Xa=37489,Er=37490,$a=37491,qa=37808,Ya=37809,Za=37810,Ka=37811,Ja=37812,Qa=37813,ja=37814,eo=37815,to=37816,no=37817,io=37818,so=37819,ro=37820,ao=37821,oo=36492,lo=36494,co=36495,ho=36283,uo=36284,wr=36285,fo=36286,Ud=3200,po=0,Fd=1,si="",Qt="srgb",Tr="srgb-linear",Ar="linear",gt="srgb",jr=7680,Od=519,Bd=512,kd=513,zd=514,ih=515,Hd=516,Gd=517,sh=518,rh=519,Vd=35044,Al="300 es",An=2e3,Ns=2001;function Wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xd(){const i=Rr("canvas");return i.style.display="block",i}const Rl={};function Cl(...i){const e="THREE."+i.shift();console.log(e,...i)}function ah(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=ah(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ht(...i){i=ah(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ji(...i){const e=i.join(" ");e in Rl||(Rl[e]=!0,We(...i))}function $d(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const qd={[Ra]:Ra,[Pa]:Ia,[La]:La,[Ls]:Da,[Ca]:Ca,[Ia]:Pa,[Na]:Na,[Da]:Ls};class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,mo=180/Math.PI;function ls(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Yd(i,e){return(i%e+e)%e}function ea(i,e,t){return(1-t)*i+t*e}function Zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ko(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kd(i,e){if(e.constructor===Float32Array)return i;const t=ko(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Jd(i,e){if(e.constructor===Float32Array)return i;const t=ko(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Qd={DEG2RAD:yr},ll=class ll{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ll.prototype.isVector2=!0;let oe=ll;class hi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],_=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*x;m<0&&(u=-u,f=-f,_=-_,x=-x,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),w=Math.sin(y);p=Math.sin(p*y)/w,o=Math.sin(o*y)/w,l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+x*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+x*o;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*f-c*u,e[t+1]=l*_+h*u+c*d-o*f,e[t+2]=c*_+h*f+o*u-l*d,e[t+3]=h*_-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cl=class cl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cl.prototype.isVector3=!0;let P=cl;const ta=new P,Pl=new hi,hl=class hl{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],x=s[0],m=s[3],p=s[6],y=s[1],w=s[4],M=s[7],T=s[2],E=s[5],g=s[8];return r[0]=a*x+o*y+l*T,r[3]=a*m+o*w+l*E,r[6]=a*p+o*M+l*g,r[1]=c*x+h*y+d*T,r[4]=c*m+h*w+d*E,r[7]=c*p+h*M+d*g,r[2]=u*x+f*y+_*T,r[5]=u*m+f*w+_*E,r[8]=u*p+f*M+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=t*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(na.makeScale(e,t)),this}rotate(e){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(na.makeRotation(-e)),this}translate(e,t){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hl.prototype.isMatrix3=!0;let $e=hl;const na=new $e,Ll=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){const i={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?Ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tr]:{primaries:e,whitePoint:n,transfer:Ar,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}const ot=jd();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class eu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ii===void 0&&(Ii=Rr("canvas")),Ii.width=e.width,Ii.height=e.height;const s=Ii.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tu=0;class zo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ia(s[a].image)):r.push(ia(s[a]))}else r=ia(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let nu=0;const sa=new P;class jt extends mi{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Xn,s=Xn,r=an,a=ri,o=Dn,l=dn,c=jt.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=ls(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Zc;jt.DEFAULT_ANISOTROPY=1;const dl=class dl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(f+1)/2,T=(p+1)/2,E=(h+u)/4,g=(d+x)/4,b=(_+m)/4;return w>M&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=g/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=g/r,s=b/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dl.prototype.isVector4=!0;let wt=dl;class iu extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new zo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends iu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oh extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class su extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Br=class Br{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,_,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,_,x,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Br().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,_=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,_=c*h,x=c*d;t[0]=u+x*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,_=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,_=o*h,x=o*d;t[0]=l*h,t[4]=_*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=_*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+_,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*l,f=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ru,e,au)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),jn.crossVectors(n,cn),jn.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),jn.crossVectors(n,cn)),jn.normalize(),$s.crossVectors(cn,jn),s[0]=jn.x,s[4]=$s.x,s[8]=cn.x,s[1]=jn.y,s[5]=$s.y,s[9]=cn.y,s[2]=jn.z,s[6]=$s.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],x=n[6],m=n[10],p=n[14],y=n[3],w=n[7],M=n[11],T=n[15],E=s[0],g=s[4],b=s[8],U=s[12],R=s[1],I=s[5],F=s[9],z=s[13],L=s[2],G=s[6],$=s[10],B=s[14],se=s[3],W=s[7],ee=s[11],ne=s[15];return r[0]=a*E+o*R+l*L+c*se,r[4]=a*g+o*I+l*G+c*W,r[8]=a*b+o*F+l*$+c*ee,r[12]=a*U+o*z+l*B+c*ne,r[1]=h*E+d*R+u*L+f*se,r[5]=h*g+d*I+u*G+f*W,r[9]=h*b+d*F+u*$+f*ee,r[13]=h*U+d*z+u*B+f*ne,r[2]=_*E+x*R+m*L+p*se,r[6]=_*g+x*I+m*G+p*W,r[10]=_*b+x*F+m*$+p*ee,r[14]=_*U+x*z+m*B+p*ne,r[3]=y*E+w*R+M*L+T*se,r[7]=y*g+w*I+M*G+T*W,r[11]=y*b+w*F+M*$+T*ee,r[15]=y*U+w*z+M*B+T*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],x=e[7],m=e[11],p=e[15],y=l*f-c*u,w=o*f-c*d,M=o*u-l*d,T=a*f-c*h,E=a*u-l*h,g=a*d-o*h;return t*(x*y-m*w+p*M)-n*(_*y-m*T+p*E)+s*(_*w-x*T+p*g)-r*(_*M-x*E+m*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],x=e[13],m=e[14],p=e[15],y=t*o-n*a,w=t*l-s*a,M=t*c-r*a,T=n*l-s*o,E=n*c-r*o,g=s*c-r*l,b=h*x-d*_,U=h*m-u*_,R=h*p-f*_,I=d*m-u*x,F=d*p-f*x,z=u*p-f*m,L=y*z-w*F+M*I+T*R-E*U+g*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(o*z-l*F+c*I)*G,e[1]=(s*F-n*z-r*I)*G,e[2]=(x*g-m*E+p*T)*G,e[3]=(u*E-d*g-f*T)*G,e[4]=(l*R-a*z-c*U)*G,e[5]=(t*z-s*R+r*U)*G,e[6]=(m*M-_*g-p*w)*G,e[7]=(h*g-u*M+f*w)*G,e[8]=(a*F-o*R+c*b)*G,e[9]=(n*R-t*F-r*b)*G,e[10]=(_*E-x*M+p*y)*G,e[11]=(d*M-h*E-f*y)*G,e[12]=(o*U-a*I-l*b)*G,e[13]=(t*I-n*U+s*b)*G,e[14]=(x*w-_*T-m*y)*G,e[15]=(h*T-d*w+u*y)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,x=a*h,m=a*d,p=o*d,y=l*c,w=l*h,M=l*d,T=n.x,E=n.y,g=n.z;return s[0]=(1-(x+p))*T,s[1]=(f+M)*T,s[2]=(_-w)*T,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(u+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(_+w)*g,s[9]=(m-y)*g,s[10]=(1-(u+x))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);const c=1/a,h=1/o,d=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=An,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let _,x;if(l)_=r/(a-r),x=a*r/(a-r);else if(o===An)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ns)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let _,x;if(l)_=1/(a-r),x=a/(a-r);else if(o===An)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ns)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Br.prototype.isMatrix4=!0;let Mt=Br;const Ni=new P,yn=new Mt,ru=new P(0,0,0),au=new P(1,1,1),jn=new P,$s=new P,cn=new P,Il=new Mt,Nl=new hi;class di{constructor(e=0,t=0,n=0,s=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ou=0;const Ul=new P,Ui=new hi,kn=new Mt,qs=new P,ms=new P,lu=new P,cu=new hi,Fl=new P(1,0,0),Ol=new P(0,1,0),Bl=new P(0,0,1),kl={type:"added"},hu={type:"removed"},Fi={type:"childadded",child:null},ra={type:"childremoved",child:null};class Vt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new P,t=new di,n=new hi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new $e}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Ol,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Ol,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(ms,qs,this.up):kn.lookAt(qs,ms,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(kn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kl),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kl),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vt.DEFAULT_UP=new P(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class He extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const du={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(du)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new He;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function oa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Yd(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=oa(a,r,e+1/3),this.g=oa(a,r,e),this.b=oa(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=lh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return ot.workingToColorSpace(Jt.copy(this),e),Math.round(Qe(Jt.r*255,0,255))*65536+Math.round(Qe(Jt.g*255,0,255))*256+Math.round(Qe(Jt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Jt.copy(this),t);const n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Qt){ot.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,s=Jt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Ys);const n=ea(ei.h,Ys.h,t),s=ea(ei.s,Ys.s,t),r=ea(ei.l,Ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ne;Ne.NAMES=lh;class Go{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Go(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uu extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new P,zn=new P,la=new P,Hn=new P,Oi=new P,Bi=new P,zl=new P,ca=new P,ha=new P,da=new P,ua=new wt,fa=new wt,pa=new wt;class wn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bn.subVectors(s,t),zn.subVectors(n,t),la.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(zn),l=bn.dot(la),c=zn.dot(zn),h=zn.dot(la),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ua.setScalar(0),fa.setScalar(0),pa.setScalar(0),ua.fromBufferAttribute(e,t),fa.fromBufferAttribute(e,n),pa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ua,r.x),a.addScaledVector(fa,r.y),a.addScaledVector(pa,r.z),a}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),zn.subVectors(e,t),bn.cross(zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),bn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Oi.subVectors(s,n),Bi.subVectors(r,n),ca.subVectors(e,n);const l=Oi.dot(ca),c=Bi.dot(ca);if(l<=0&&c<=0)return t.copy(n);ha.subVectors(e,s);const h=Oi.dot(ha),d=Bi.dot(ha);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Oi,a);da.subVectors(e,r);const f=Oi.dot(da),_=Bi.dot(da);if(_>=0&&f<=_)return t.copy(r);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Bi,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return zl.subVectors(r,s),o=(d-h)/(d-h+(f-_)),t.copy(s).addScaledVector(zl,o);const p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hs{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Ks.subVectors(this.max,gs),ki.subVectors(e.a,gs),zi.subVectors(e.b,gs),Hi.subVectors(e.c,gs),ti.subVectors(zi,ki),ni.subVectors(Hi,zi),xi.subVectors(ki,Hi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-xi.z,xi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,xi.z,0,-xi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-xi.y,xi.x,0];return!ma(t,ki,zi,Hi,Ks)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,ki,zi,Hi,Ks))?!1:(Js.crossVectors(ti,ni),t=[Js.x,Js.y,Js.z],ma(t,ki,zi,Hi,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new P,new P,new P,new P,new P,new P,new P,new P],En=new P,Zs=new Hs,ki=new P,zi=new P,Hi=new P,ti=new P,ni=new P,xi=new P,gs=new P,Ks=new P,Js=new P,Mi=new P;function ma(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);const o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lt=new P,Qs=new oe;let fu=0;class Yn extends mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vd,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=e!==void 0?ko(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kd(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jd(e,this.array)}}class ch extends Yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hh extends Yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const pu=new Hs,_s=new P,ga=new P;class kr{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(ga)),this.expandByPoint(_s.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mu=0;const un=new Mt,_a=new Vt,Gi=new P,hn=new Hs,vs=new Hs,Gt=new P;class Wt extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?hh:ch)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(hn.min,vs.min),hn.expandByPoint(Gt),Gt.addVectors(hn.max,vs.max),hn.expandByPoint(Gt)):(hn.expandByPoint(vs.min),hn.expandByPoint(vs.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Gt.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(e,c),Gt.add(Gi)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new P,l[U]=new P;const h=new P,d=new P,u=new P,f=new oe,_=new oe,x=new oe,m=new P,p=new P;function y(U,R,I){c[U]=c[R]=c[I]=1,h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,U),_.fromBufferAttribute(r,R),x.fromBufferAttribute(r,I),d.sub(h),u.sub(h),_.sub(f),x.sub(f);const F=1/(_.x*x.y-x.x*_.y);isFinite(F)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-_.y).multiplyScalar(F),p.copy(u).multiplyScalar(_.x).addScaledVector(d,-x.x).multiplyScalar(F),o[U].add(m),o[R].add(m),o[I].add(m),l[U].add(p),l[R].add(p),l[I].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,R=w.length;U<R;++U){const I=w[U],F=I.start,z=I.count;for(let L=F,G=F+z;L<G;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new P,T=new P,E=new P,g=new P;function b(U){E.fromBufferAttribute(s,U),g.copy(E);const R=o[U];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),T.crossVectors(g,R);const F=T.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,F)}for(let U=0,R=n.count;U<R;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new Yn(u,h,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const va=new P,gu=new P,_u=new $e;class Wn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=va.subVectors(n,t).cross(gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(va),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_u.getNormalMatrix(e),s=this.coplanarPoint(va).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let vu=0;class cs extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Ts,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vn=new P,xa=new P,js=new P,er=new P;class zr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xa.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),er.copy(this.origin).sub(xa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(js),o=er.dot(this.direction),l=-er.dot(js),c=er.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xa).addScaledVector(js,u),f}intersectSphere(e,t){if(e.radius<0)return null;Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,_=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=n.x-a.x,y=n.y-a.y,w=n.z-a.z,M=Math.abs(l),T=Math.abs(c),E=Math.abs(h);let g,b,U,R,I,F,z,L,G,$,B,se;if(M>=T&&M>=E?(U=l,F=d,G=_,se=p,l>=0?(g=c,b=h,R=u,I=f,z=x,L=m,$=y,B=w):(g=h,b=c,R=f,I=u,z=m,L=x,$=w,B=y)):T>=E?(U=c,F=u,G=x,se=y,c>=0?(g=h,b=l,R=f,I=d,z=m,L=_,$=w,B=p):(g=l,b=h,R=d,I=f,z=_,L=m,$=p,B=w)):(U=h,F=f,G=m,se=w,h>=0?(g=l,b=c,R=d,I=u,z=_,L=x,$=p,B=y):(g=c,b=l,R=u,I=d,z=x,L=_,$=y,B=p)),U===0)return null;const W=g/U,ee=b/U,ne=1/U,Ae=R-W*F,Ge=I-ee*F,q=z-W*G,Me=L-ee*G,Re=$-W*se,Oe=B-ee*se,Se=Re*Me-Oe*q,Be=Ae*Oe-Ge*Re,St=q*Ge-Me*Ae;if(s){if(Se<0||Be<0||St<0)return null}else if((Se<0||Be<0||St<0)&&(Se>0||Be>0||St>0))return null;const Ve=Se+Be+St;if(Ve===0)return null;const je=ne*(Se*F+Be*G+St*se);return(Ve>0?je<0:je>0)?null:this.at(je/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hl=new Mt,Si=new zr,tr=new kr,Gl=new P,nr=new P,ir=new P,sr=new P,Ma=new P,rr=new P,Vl=new P,ar=new P;class Ee extends Vt{constructor(e=new Wt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ma.fromBufferAttribute(d,e),a?rr.addScaledVector(Ma,h):rr.addScaledVector(Ma.sub(t),h))}t.add(rr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(tr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(tr,Gl)===null||Si.origin.distanceToSquared(Gl)>(e.far-e.near)**2))&&(Hl.copy(r).invert(),Si.copy(e.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){const m=u[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,T=w;M<T;M+=3){const E=o.getX(M),g=o.getX(M+1),b=o.getX(M+2);s=or(this,p,e,n,c,h,d,E,g,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const y=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);s=or(this,a,e,n,c,h,d,y,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){const m=u[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,T=w;M<T;M+=3){const E=M,g=M+1,b=M+2;s=or(this,p,e,n,c,h,d,E,g,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const y=m,w=m+1,M=m+2;s=or(this,a,e,n,c,h,d,y,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function xu(i,e,t,n,s,r,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ei,o),l===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ar);return c<t.near||c>t.far?null:{distance:c,point:ar.clone(),object:i}}function or(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,nr),i.getVertexPosition(l,ir),i.getVertexPosition(c,sr);const h=xu(i,e,t,n,nr,ir,sr,Vl);if(h){const d=new P;wn.getBarycoord(Vl,nr,ir,sr,d),s&&(h.uv=wn.getInterpolatedAttribute(s,o,l,c,d,new oe)),r&&(h.uv1=wn.getInterpolatedAttribute(r,o,l,c,d,new oe)),a&&(h.normal=wn.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};wn.getNormal(nr,ir,sr,u.normal),h.face=u,h.barycoord=d}return h}class Mu extends jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=$t,h=$t,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yi=new kr,Su=new oe(.5,.5),lr=new P;class Us{constructor(e=new Wn,t=new Wn,n=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],x=r[9],m=r[10],p=r[11],y=r[12],w=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,p-_,T-y).normalize(),s[1].setComponents(c+a,f+h,p+_,T+y).normalize(),s[2].setComponents(c+o,f+d,p+x,T+w).normalize(),s[3].setComponents(c-o,f-d,p-x,T-w).normalize(),n)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,p-m,T-M).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-M).normalize(),t===An)s[5].setComponents(c+l,f+u,p+m,T+M).normalize();else if(t===Ns)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=Su.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(lr.x=s.normal.x>0?e.max.x:e.min.x,lr.y=s.normal.y>0?e.max.y:e.min.y,lr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Wl=new Mt;class Vo{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Wl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Us),n[s].setFromProjectionMatrix(Wl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Us),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Vo().copy(this)}}class Wo extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xl=new Mt,go=new zr,cr=new kr,hr=new P;class dh extends Vt{constructor(e=new Wt,t=new Wo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;Xl.copy(s).invert(),go.copy(e.ray).applyMatrix4(Xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=u,x=f;_<x;_++){const m=c.getX(_);hr.fromBufferAttribute(d,m),$l(hr,m,l,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,x=f;_<x;_++)hr.fromBufferAttribute(d,_),$l(hr,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $l(i,e,t,n,s,r,a){const o=go.distanceSqToPoint(i);if(o<t){const l=new P;go.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class uh extends jt{constructor(e=[],t=is,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xo extends jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rs extends jt{constructor(e,t,n=Nn,s,r,a,o=$t,l=$t,c,h=ci,d=1){if(h!==ci&&h!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class fh extends rs{constructor(e,t=Nn,n=is,s,r,a=$t,o=$t,l,c=ci){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ph extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zn extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2));function _(x,m,p,y,w,M,T,E,g,b,U){const R=M/g,I=T/b,F=M/2,z=T/2,L=E/2,G=g+1,$=b+1;let B=0,se=0;const W=new P;for(let ee=0;ee<$;ee++){const ne=ee*I-z;for(let Ae=0;Ae<G;Ae++){const Ge=Ae*R-F;W[x]=Ge*y,W[m]=ne*w,W[p]=L,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(Ae/g),d.push(1-ee/b),B+=1}}for(let ee=0;ee<b;ee++)for(let ne=0;ne<g;ne++){const Ae=u+ne+G*ee,Ge=u+ne+G*(ee+1),q=u+(ne+1)+G*(ee+1),Me=u+(ne+1)+G*ee;l.push(Ae,Ge,Me),l.push(Ge,q,Me),se+=6}o.addGroup(f,se,U),f+=se,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zi extends Wt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,_=n*2+r,x=s+1,m=new P,p=new P;for(let y=0;y<=_;y++){let w=0,M=0,T=0,E=0;if(y<=n){const U=y/n,R=U*Math.PI/2;M=-h-e*Math.cos(R),T=e*Math.sin(R),E=-e*Math.cos(R),w=U*d}else if(y<=n+r){const U=(y-n)/r;M=-h+U*t,T=e,E=0,w=d+U*u}else{const U=(y-n-r)/n,R=U*Math.PI/2;M=h+e*Math.sin(R),T=e*Math.cos(R),E=e*Math.sin(R),w=d+u+U*d}const g=Math.max(0,Math.min(1,w/f));let b=0;y===0?b=.5/s:y===_&&(b=-.5/s);for(let U=0;U<=s;U++){const R=U/s,I=R*Math.PI*2,F=Math.sin(I),z=Math.cos(I);p.x=-T*z,p.y=M,p.z=T*F,o.push(p.x,p.y,p.z),m.set(-T*z,E,T*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+b,g)}if(y>0){const U=(y-1)*x;for(let R=0;R<s;R++){const I=U+R,F=U+R+1,z=y*x+R,L=y*x+R+1;a.push(I,F,z),a.push(F,L,z)}}}this.setIndex(a),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ti extends Wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,h=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class on extends Wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let _=0;const x=[],m=n/2;let p=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function y(){const M=new P,T=new P;let E=0;const g=(t-e)/n;for(let b=0;b<=r;b++){const U=[],R=b/r,I=R*(t-e)+e;for(let F=0;F<=s;F++){const z=F/s,L=z*l+o,G=Math.sin(L),$=Math.cos(L);T.x=I*G,T.y=-R*n+m,T.z=I*$,d.push(T.x,T.y,T.z),M.set(G,g,$).normalize(),u.push(M.x,M.y,M.z),f.push(z,1-R),U.push(_++)}x.push(U)}for(let b=0;b<s;b++)for(let U=0;U<r;U++){const R=x[U][b],I=x[U+1][b],F=x[U+1][b+1],z=x[U][b+1];(e>0||U!==0)&&(h.push(R,I,z),E+=3),(t>0||U!==r-1)&&(h.push(I,F,z),E+=3)}c.addGroup(p,E,0),p+=E}function w(M){const T=_,E=new oe,g=new P;let b=0;const U=M===!0?e:t,R=M===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),_++;const I=_;for(let F=0;F<=s;F++){const L=F/s*l+o,G=Math.cos(L),$=Math.sin(L);g.x=U*$,g.y=m*R,g.z=U*G,d.push(g.x,g.y,g.z),u.push(0,R,0),E.x=G*.5+.5,E.y=$*.5*R+.5,f.push(E.x,E.y),_++}for(let F=0;F<s;F++){const z=T+F,L=I+F;M===!0?h.push(L,L+1,z):h.push(L+1,L,z),b+=3}c.addGroup(p,b,M===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ui extends on{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ui(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new oe:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new Mt;for(let f=0;f<=e;f++){const _=f/e;s[f]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class $o extends On{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yu extends $o{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function qo(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const ql=new P,Yl=new P,Sa=new qo,ya=new qo,ba=new qo;class bu extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Yl.subVectors(s[0],s[1]).add(s[0]),c=Yl);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ql.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ql),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Sa.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,x,m),ya.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,x,m),ba.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ya.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ba.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Sa.calc(l),ya.calc(l),ba.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zl(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Eu(i,e){const t=1-i;return t*t*e}function wu(i,e){return 2*(1-i)*i*e}function Tu(i,e){return i*i*e}function As(i,e,t,n){return Eu(i,e)+wu(i,t)+Tu(i,n)}function Au(i,e){const t=1-i;return t*t*t*e}function Ru(i,e){const t=1-i;return 3*t*t*i*e}function Cu(i,e){return 3*(1-i)*i*i*e}function Pu(i,e){return i*i*i*e}function Rs(i,e,t,n,s){return Au(i,e)+Ru(i,t)+Cu(i,n)+Pu(i,s)}class mh extends On{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(e,s.x,r.x,a.x,o.x),Rs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lu extends On{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(e,s.x,r.x,a.x,o.x),Rs(e,s.y,r.y,a.y,o.y),Rs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gh extends On{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Du extends On{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _h extends On{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(As(e,s.x,r.x,a.x),As(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iu extends On{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(As(e,s.x,r.x,a.x),As(e,s.y,r.y,a.y),As(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vh extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Zl(o,l.x,c.x,h.x,d.x),Zl(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new oe().fromArray(s))}return this}}var _o=Object.freeze({__proto__:null,ArcCurve:yu,CatmullRomCurve3:bu,CubicBezierCurve:mh,CubicBezierCurve3:Lu,EllipseCurve:$o,LineCurve:gh,LineCurve3:Du,QuadraticBezierCurve:_h,QuadraticBezierCurve3:Iu,SplineCurve:vh});class Nu extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _o[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new _o[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Kl extends Nu{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gh(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new _h(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new mh(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new vh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new $o(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cr extends Kl{constructor(e){super(e),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Kl().fromJSON(s))}return this}}function Uu(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=xh(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=zu(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){const f=i[u],_=i[u+1];f<o&&(o=f),_<l&&(l=_),f>h&&(h=f),_>d&&(d=_)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Fs(r,a,t,o,l,c,0),a}function xh(i,e,t,n,s){let r;if(s===Ju(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Jl(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Jl(a/n|0,i[a],i[a+1],r);return r&&as(r,r.next)&&(Bs(r),r=r.next),r}function Ai(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(as(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Bs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fs(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Xu(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Ou(i,n,s,r):Fu(i)){e.push(l.i,i.i,c.i),Bs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Bu(Ai(i),e),Fs(i,e,t,n,s,r,2)):a===2&&ku(i,e,t,n,s,r):Fs(Ai(i),e,t,n,s,r,1);break}}}function Fu(i){const e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=f&&bs(s,o,r,l,a,c,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Ou(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Tt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),_=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),p=vo(f,_,e,t,n),y=vo(x,m,e,t,n);let w=i.prevZ,M=i.nextZ;for(;w&&w.z>=p&&M&&M.z<=y;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=m&&w!==s&&w!==a&&bs(o,h,l,d,c,u,w.x,w.y)&&Tt(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=f&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&bs(o,h,l,d,c,u,M.x,M.y)&&Tt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=m&&w!==s&&w!==a&&bs(o,h,l,d,c,u,w.x,w.y)&&Tt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&bs(o,h,l,d,c,u,M.x,M.y)&&Tt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Bu(i,e){let t=i;do{const n=t.prev,s=t.next.next;!as(n,s)&&Sh(n,t,t.next,s)&&Os(n,s)&&Os(s,n)&&(e.push(n.i,t.i,s.i),Bs(t),Bs(t.next),t=i=s),t=t.next}while(t!==i);return Ai(t)}function ku(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Yu(a,o)){let l=yh(a,o);a=Ai(a,a.next),l=Ai(l,l.next),Fs(a,e,t,n,s,r,0),Fs(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function zu(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=xh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(qu(c))}s.sort(Hu);for(let r=0;r<s.length;r++)t=Gu(s[r],t);return t}function Hu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Gu(i,e){const t=Vu(i,e);if(!t)return e;const n=yh(t,i);return Ai(n,n.next),Ai(t,t.next)}function Vu(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(as(i,t))return t;do{if(as(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Mh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);Os(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Wu(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Wu(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function Xu(i,e,t,n){let s=i;do s.z===0&&(s.z=vo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$u(s)}function $u(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function vo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function qu(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function bs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Mh(i,e,t,n,s,r,a,o)}function Yu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Zu(i,e)&&(Os(i,e)&&Os(e,i)&&Ku(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||as(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function as(i,e){return i.x===e.x&&i.y===e.y}function Sh(i,e,t,n){const s=ur(Tt(i,e,t)),r=ur(Tt(i,e,n)),a=ur(Tt(t,n,i)),o=ur(Tt(t,n,e));return!!(s!==r&&a!==o||s===0&&dr(i,t,e)||r===0&&dr(i,n,e)||a===0&&dr(t,i,n)||o===0&&dr(t,e,n))}function dr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ur(i){return i>0?1:i<0?-1:0}function Zu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Sh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Os(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function Ku(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function yh(i,e){const t=xo(i.i,i.x,i.y),n=xo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jl(i,e,t,n){const s=xo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ju(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Qu{static triangulate(e,t,n=2){return Uu(e,t,n)}}class Ki{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ki.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ql(e),jl(n,e);let a=e.length;t.forEach(Ql);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,jl(n,t[l]);const o=Qu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ql(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function jl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ks extends Wt{constructor(e=new Cr([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:ju;let w,M=!1,T,E,g,b;if(p){w=p.getSpacedPoints(h),M=!0,u=!1;const te=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,te),E=new P,g=new P,b=new P}u||(m=0,f=0,_=0,x=0);const U=o.extractPoints(c);let R=U.shape;const I=U.holes;if(!Ki.isClockWise(R)){R=R.reverse();for(let te=0,ue=I.length;te<ue;te++){const ce=I[te];Ki.isClockWise(ce)&&(I[te]=ce.reverse())}}function z(te){const ce=10000000000000001e-36;let Te=te[0];for(let xe=1;xe<=te.length;xe++){const Ye=xe%te.length,Ie=te[Ye],nt=Ie.x-Te.x,it=Ie.y-Te.y,dt=nt*nt+it*it,N=Math.max(Math.abs(Ie.x),Math.abs(Ie.y),Math.abs(Te.x),Math.abs(Te.y)),Ct=ce*N*N;if(dt<=Ct){te.splice(Ye,1),xe--;continue}Te=Ie}}z(R),I.forEach(z);const L=I.length,G=R;for(let te=0;te<L;te++){const ue=I[te];R=R.concat(ue)}function $(te,ue,ce){return ue||ht("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ue,ce)}const B=R.length;function se(te,ue,ce){let Te,xe,Ye;const Ie=te.x-ue.x,nt=te.y-ue.y,it=ce.x-te.x,dt=ce.y-te.y,N=Ie*Ie+nt*nt,Ct=Ie*dt-nt*it;if(Math.abs(Ct)>Number.EPSILON){const et=Math.sqrt(N),_t=Math.sqrt(it*it+dt*dt),ge=ue.x-nt/et,At=ue.y+Ie/et,ke=ce.x-dt/_t,Xe=ce.y+it/_t,A=((ke-ge)*dt-(Xe-At)*it)/(Ie*dt-nt*it);Te=ge+Ie*A-te.x,xe=At+nt*A-te.y;const v=Te*Te+xe*xe;if(v<=2)return new oe(Te,xe);Ye=Math.sqrt(v/2)}else{let et=!1;Ie>Number.EPSILON?it>Number.EPSILON&&(et=!0):Ie<-Number.EPSILON?it<-Number.EPSILON&&(et=!0):Math.sign(nt)===Math.sign(dt)&&(et=!0),et?(Te=-nt,xe=Ie,Ye=Math.sqrt(N)):(Te=Ie,xe=nt,Ye=Math.sqrt(N/2))}return new oe(Te/Ye,xe/Ye)}const W=[];for(let te=0,ue=G.length,ce=ue-1,Te=te+1;te<ue;te++,ce++,Te++)ce===ue&&(ce=0),Te===ue&&(Te=0),W[te]=se(G[te],G[ce],G[Te]);const ee=[];let ne,Ae=W.concat();for(let te=0,ue=L;te<ue;te++){const ce=I[te];ne=[];for(let Te=0,xe=ce.length,Ye=xe-1,Ie=Te+1;Te<xe;Te++,Ye++,Ie++)Ye===xe&&(Ye=0),Ie===xe&&(Ie=0),ne[Te]=se(ce[Te],ce[Ye],ce[Ie]);ee.push(ne),Ae=Ae.concat(ne)}let Ge;if(m===0)Ge=Ki.triangulateShape(G,I);else{const te=[],ue=[];for(let ce=0;ce<m;ce++){const Te=ce/m,xe=f*Math.cos(Te*Math.PI/2),Ye=_*Math.sin(Te*Math.PI/2)+x;for(let Ie=0,nt=G.length;Ie<nt;Ie++){const it=$(G[Ie],W[Ie],Ye);Be(it.x,it.y,-xe),Te===0&&te.push(it)}for(let Ie=0,nt=L;Ie<nt;Ie++){const it=I[Ie];ne=ee[Ie];const dt=[];for(let N=0,Ct=it.length;N<Ct;N++){const et=$(it[N],ne[N],Ye);Be(et.x,et.y,-xe),Te===0&&dt.push(et)}Te===0&&ue.push(dt)}}Ge=Ki.triangulateShape(te,ue)}const q=Ge.length,Me=_+x;for(let te=0;te<B;te++){const ue=u?$(R[te],Ae[te],Me):R[te];M?(g.copy(T.normals[0]).multiplyScalar(ue.x),E.copy(T.binormals[0]).multiplyScalar(ue.y),b.copy(w[0]).add(g).add(E),Be(b.x,b.y,b.z)):Be(ue.x,ue.y,0)}for(let te=1;te<=h;te++)for(let ue=0;ue<B;ue++){const ce=u?$(R[ue],Ae[ue],Me):R[ue];M?(g.copy(T.normals[te]).multiplyScalar(ce.x),E.copy(T.binormals[te]).multiplyScalar(ce.y),b.copy(w[te]).add(g).add(E),Be(b.x,b.y,b.z)):Be(ce.x,ce.y,d/h*te)}for(let te=m-1;te>=0;te--){const ue=te/m,ce=f*Math.cos(ue*Math.PI/2),Te=_*Math.sin(ue*Math.PI/2)+x;for(let xe=0,Ye=G.length;xe<Ye;xe++){const Ie=$(G[xe],W[xe],Te);Be(Ie.x,Ie.y,d+ce)}for(let xe=0,Ye=I.length;xe<Ye;xe++){const Ie=I[xe];ne=ee[xe];for(let nt=0,it=Ie.length;nt<it;nt++){const dt=$(Ie[nt],ne[nt],Te);M?Be(dt.x,dt.y+w[h-1].y,w[h-1].x+ce):Be(dt.x,dt.y,d+ce)}}}Re(),Oe();function Re(){const te=s.length/3;if(u){let ue=0,ce=B*ue;for(let Te=0;Te<q;Te++){const xe=Ge[Te];St(xe[2]+ce,xe[1]+ce,xe[0]+ce)}ue=h+m*2,ce=B*ue;for(let Te=0;Te<q;Te++){const xe=Ge[Te];St(xe[0]+ce,xe[1]+ce,xe[2]+ce)}}else{for(let ue=0;ue<q;ue++){const ce=Ge[ue];St(ce[2],ce[1],ce[0])}for(let ue=0;ue<q;ue++){const ce=Ge[ue];St(ce[0]+B*h,ce[1]+B*h,ce[2]+B*h)}}n.addGroup(te,s.length/3-te,0)}function Oe(){const te=s.length/3;let ue=0;Se(G,ue),ue+=G.length;for(let ce=0,Te=I.length;ce<Te;ce++){const xe=I[ce];Se(xe,ue),ue+=xe.length}n.addGroup(te,s.length/3-te,1)}function Se(te,ue){let ce=te.length;for(;--ce>=0;){const Te=ce;let xe=ce-1;xe<0&&(xe=te.length-1);for(let Ye=0,Ie=h+m*2;Ye<Ie;Ye++){const nt=B*Ye,it=B*(Ye+1),dt=ue+Te+nt,N=ue+xe+nt,Ct=ue+xe+it,et=ue+Te+it;Ve(dt,N,Ct,et)}}}function Be(te,ue,ce){l.push(te),l.push(ue),l.push(ce)}function St(te,ue,ce){je(te),je(ue),je(ce);const Te=s.length/3,xe=y.generateTopUV(n,s,Te-3,Te-2,Te-1);tt(xe[0]),tt(xe[1]),tt(xe[2])}function Ve(te,ue,ce,Te){je(te),je(ue),je(Te),je(ue),je(ce),je(Te);const xe=s.length/3,Ye=y.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);tt(Ye[0]),tt(Ye[1]),tt(Ye[3]),tt(Ye[1]),tt(Ye[2]),tt(Ye[3])}function je(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function tt(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ef(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new _o[s.type]().fromJSON(s)),new ks(n,e.options)}}const ju={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],_=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-d),new oe(u,1-_),new oe(x,1-p)]:[new oe(o,1-l),new oe(h,1-d),new oe(f,1-_),new oe(m,1-p)]}};function ef(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class qt extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],_=[],x=[],m=[];for(let p=0;p<h;p++){const y=p*u-a;for(let w=0;w<c;w++){const M=w*d-r;_.push(M,-y,0),x.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const w=y+c*p,M=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;f.push(w,M,E),f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.widthSegments,e.heightSegments)}}class hs extends Wt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/s,f=new P,_=new oe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}d+=u}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const y=p+m,w=y,M=y+n+1,T=y+n+2,E=y+1;o.push(w,M,E),o.push(M,T,E)}}this.setIndex(o),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xn extends Wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new P,u=new P,f=[],_=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],w=p/n,M=a+w*o,T=e*Math.cos(M),E=Math.sqrt(e*e-T*T);let g=0;p===0&&a===0?g=.5/t:p===n&&l===Math.PI&&(g=-.5/t);for(let b=0;b<=t;b++){const U=b/t,R=s+U*r;d.x=-E*Math.cos(R),d.y=T,d.z=E*Math.sin(R),_.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(U+g,1-w),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const w=h[p][y+1],M=h[p][y],T=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(w,M,E),(p!==n-1||l<Math.PI)&&f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ri extends Wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new P,f=new P,_=new P;for(let x=0;x<=n;x++){const m=a+x/n*o;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(p/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){const p=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,M=(s+1)*x+m;l.push(p,y,M),l.push(y,w,M)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(ec(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ec(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=os(i[t]);for(const s in n)e[s]=n[s]}return e}function ec(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const nf={clone:os,merge:tn};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class af extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hr extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends Hr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ji('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ji('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class of extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lf extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gr extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class cf extends Gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ea=new Mt,tc=new P,nc=new P;class Eh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ea,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ns||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fr=new P,pr=new hi,Rn=new P;class wh extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fr,pr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fr,pr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ii=new P,ic=new oe,sc=new oe;class pn extends wh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,ic,sc),t.subVectors(sc,ic)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hf extends Eh{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}}class Vr extends Gr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Th extends wh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class df extends Eh{constructor(){super(new Th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pr extends Gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new df}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class uf extends Gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vi=-90,Wi=1;class Mo extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Vi,Wi,e,t);s.layers=this.layers,this.add(s);const r=new pn(Vi,Wi,e,t);r.layers=this.layers,this.add(r);const a=new pn(Vi,Wi,e,t);a.layers=this.layers,this.add(a);const o=new pn(Vi,Wi,e,t);o.layers=this.layers,this.add(o);const l=new pn(Vi,Wi,e,t);l.layers=this.layers,this.add(l);const c=new pn(Vi,Wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ff extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const rc=new Mt;class pf{constructor(e,t,n=0,s=1/0){this.ray=new zr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rc),this}intersectObject(e,t=!0,n=[]){return So(e,this,n,t),n.sort(ac),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)So(e[s],this,n,t);return n.sort(ac),n}}function ac(i,e){return i.distance-e.distance}function So(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)So(r[a],e,t,!0)}}class mf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,We("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class oc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gf extends mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function lc(i,e,t,n){const s=_f(n);switch(t){case eh:return i*e;case nh:return i*e/s.components*s.byteLength;case Fo:return i*e/s.components*s.byteLength;case wi:return i*e*2/s.components*s.byteLength;case Oo:return i*e*2/s.components*s.byteLength;case th:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case Bo:return i*e*4/s.components*s.byteLength;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:case za:return Math.max(i,16)*Math.max(e,8)/4;case Oa:case ka:return Math.max(i,8)*Math.max(e,8)/2;case Ha:case Ga:case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Va:case Er:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oo:case lo:case co:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ho:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wr:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _f(i){switch(i){case dn:case Kc:return{byteLength:1,components:1};case Is:case Jc:case Un:return{byteLength:2,components:1};case No:case Uo:return{byteLength:2,components:4};case Nn:case Io:case Ln:return{byteLength:4,components:1};case Qc:case jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);function Ah(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vf(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],x=d[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,If=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_p=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ym=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:xf,alphahash_pars_fragment:Mf,alphamap_fragment:Sf,alphamap_pars_fragment:yf,alphatest_fragment:bf,alphatest_pars_fragment:Ef,aomap_fragment:wf,aomap_pars_fragment:Tf,batching_pars_vertex:Af,batching_vertex:Rf,begin_vertex:Cf,beginnormal_vertex:Pf,bsdfs:Lf,iridescence_fragment:Df,bumpmap_pars_fragment:If,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Of,color_fragment:Bf,color_pars_fragment:kf,color_pars_vertex:zf,color_vertex:Hf,common:Gf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Wf,displacementmap_vertex:Xf,emissivemap_fragment:$f,emissivemap_pars_fragment:qf,colorspace_fragment:Yf,colorspace_pars_fragment:Zf,envmap_fragment:Kf,envmap_common_pars_fragment:Jf,envmap_pars_fragment:Qf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:hp,envmap_vertex:ep,fog_vertex:tp,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_pars_fragment:ap,lights_lambert_fragment:op,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:dp,lights_toon_pars_fragment:up,lights_phong_fragment:fp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:_p,lights_fragment_maps:vp,lights_fragment_end:xp,lightprobes_pars_fragment:Mp,logdepthbuf_fragment:Sp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Ep,map_fragment:wp,map_pars_fragment:Tp,map_particle_fragment:Ap,map_particle_pars_fragment:Rp,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Pp,morphinstance_vertex:Lp,morphcolor_vertex:Dp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Np,morphtarget_vertex:Up,normal_fragment_begin:Fp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:kp,normal_vertex:zp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:$p,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Kp,dithering_pars_fragment:Jp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:hm,tonemapping_pars_fragment:dm,transmission_fragment:um,transmission_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:_m,background_vert:vm,background_frag:xm,backgroundCube_vert:Mm,backgroundCube_frag:Sm,cube_vert:ym,cube_frag:bm,depth_vert:Em,depth_frag:wm,distance_vert:Tm,distance_frag:Am,equirect_vert:Rm,equirect_frag:Cm,linedashed_vert:Pm,linedashed_frag:Lm,meshbasic_vert:Dm,meshbasic_frag:Im,meshlambert_vert:Nm,meshlambert_frag:Um,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:km,meshphong_vert:zm,meshphong_frag:Hm,meshphysical_vert:Gm,meshphysical_frag:Vm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:$m,points_frag:qm,shadow_vert:Ym,shadow_frag:Zm,sprite_vert:Km,sprite_frag:Jm},be={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Pn={basic:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:tn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:tn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:tn([be.points,be.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:tn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:tn([be.common,be.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:tn([be.sprite,be.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:tn([be.common,be.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:tn([be.lights,be.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Pn.physical={uniforms:tn([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const mr={r:0,b:0,g:0},Qm=new Mt,Rh=new $e;Rh.set(-1,0,0,0,1,0,0,0,1);function jm(i,e,t,n,s,r){const a=new Ne(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const M=y.backgroundBlurriness>0;w=e.get(w,M)}return w}function _(y){let w=!1;const M=f(y);M===null?m(a,o):M&&M.isColor&&(m(M,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,w){const M=f(w);M&&M.isCubeTexture?(c===void 0&&(c=new Ee(new Zn(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:os(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rh),c.material.toneMapped=ot.getTransfer(M.colorSpace)!==gt,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ee(new qt(2,2),new fi({name:"BackgroundMaterial",uniforms:os(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ot.getTransfer(M.colorSpace)!==gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(mr,bh(i)),t.buffers.color.setClear(mr.r,mr.g,mr.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:_,addToRenderList:x,dispose:p}}function e0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(I,F,z,L,G){let $=!1;const B=d(I,L,z,F);r!==B&&(r=B,c(r.object)),$=f(I,L,z,G),$&&_(I,L,z,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(I,F,z,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,F,z,L){const G=L.wireframe===!0;let $=n[F.id];$===void 0&&($={},n[F.id]=$);const B=I.isInstancedMesh===!0?I.id:0;let se=$[B];se===void 0&&(se={},$[B]=se);let W=se[z.id];W===void 0&&(W={},se[z.id]=W);let ee=W[G];return ee===void 0&&(ee=u(l()),W[G]=ee),ee}function u(I){const F=[],z=[],L=[];for(let G=0;G<t;G++)F[G]=0,z[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,F,z,L){const G=r.attributes,$=F.attributes;let B=0;const se=z.getAttributes();for(const W in se)if(se[W].location>=0){const ne=G[W];let Ae=$[W];if(Ae===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Ae=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Ae=I.instanceColor)),ne===void 0||ne.attribute!==Ae||Ae&&ne.data!==Ae.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function _(I,F,z,L){const G={},$=F.attributes;let B=0;const se=z.getAttributes();for(const W in se)if(se[W].location>=0){let ne=$[W];ne===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const Ae={};Ae.attribute=ne,ne&&ne.data&&(Ae.data=ne.data),G[W]=Ae,B++}r.attributes=G,r.attributesNum=B,r.index=L}function x(){const I=r.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const z=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;z[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),G[I]!==F&&(i.vertexAttribDivisor(I,F),G[I]=F)}function y(){const I=r.newAttributes,F=r.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==I[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function w(I,F,z,L,G,$,B){B===!0?i.vertexAttribIPointer(I,F,z,G,$):i.vertexAttribPointer(I,F,z,L,G,$)}function M(I,F,z,L){x();const G=L.attributes,$=z.getAttributes(),B=F.defaultAttributeValues;for(const se in $){const W=$[se];if(W.location>=0){let ee=G[se];if(ee===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const ne=ee.normalized,Ae=ee.itemSize,Ge=e.get(ee);if(Ge===void 0)continue;const q=Ge.buffer,Me=Ge.type,Re=Ge.bytesPerElement,Oe=Me===i.INT||Me===i.UNSIGNED_INT||ee.gpuType===Io;if(ee.isInterleavedBufferAttribute){const Se=ee.data,Be=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,St=ee.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ve=0;Ve<W.locationSize;Ve++)p(W.location+Ve,Se.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ve=0;Ve<W.locationSize;Ve++)m(W.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ve=0;Ve<W.locationSize;Ve++)w(W.location+Ve,Ae/W.locationSize,Me,ne,Be*Re,(St+Ae/W.locationSize*Ve)*Re,Oe)}else{if(ee.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)p(W.location+Se,ee.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Se=0;Se<W.locationSize;Se++)w(W.location+Se,Ae/W.locationSize,Me,ne,Ae*Re,Ae/W.locationSize*Se*Re,Oe)}}else if(B!==void 0){const ne=B[se];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(W.location,ne);break;case 3:i.vertexAttrib3fv(W.location,ne);break;case 4:i.vertexAttrib4fv(W.location,ne);break;default:i.vertexAttrib1fv(W.location,ne)}}}}y()}function T(){U();for(const I in n){const F=n[I];for(const z in F){const L=F[z];for(const G in L){const $=L[G];for(const B in $)h($[B].object),delete $[B];delete L[G]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const z in F){const L=F[z];for(const G in L){const $=L[G];for(const B in $)h($[B].object),delete $[B];delete L[G]}}delete n[I.id]}function g(I){for(const F in n){const z=n[F];for(const L in z){const G=z[L];if(G[I.id]===void 0)continue;const $=G[I.id];for(const B in $)h($[B].object),delete $[B];delete G[I.id]}}}function b(I){for(const F in n){const z=n[F],L=I.isInstancedMesh===!0?I.id:0,G=z[L];if(G!==void 0){for(const $ in G){const B=G[$];for(const se in B)h(B[se].object),delete B[se];delete G[$]}delete z[L],Object.keys(z).length===0&&delete n[F]}}}function U(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function t0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function n0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Dn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const b=g===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==dn&&g!==Ln&&!b&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,maxSamples:T,samples:E}}function i0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Wn,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,w=y*4;let M=p.clippingState||null;l.value=M,M=h(_,u,w,f);for(let T=0;T!==w;++T)M[T]=t[T];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=f;w!==x;++w,M+=4)a.copy(d[w]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}class Yo extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new uh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zn(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Qi});r.uniforms.tEquirect.value=t;const a=new Ee(s,r),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=an),new Mo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const cc=256,s0=3,r0=20,Ch=256,Ph=16,a0=3,o0=new P,l0=new Ne;class Lr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Mo(1,10,null),this._boxMesh=new Ee(new Zn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=o0}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(l0));const m=new Mo(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=_,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cc,Zd(e))}_fromTexture(e,t){e.mapping===is||e.mapping===Ds?this._setSize(e.image.length===0?cc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=hc(e,!1,!1),n=Math.log2(e)-s0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===is||e.mapping===Ds?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=c0(),this._integrationMaterial=h0());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ph);for(let a=0;a<=n;a++){const o=Lr.lodToRoughness(a,n);if(a>n-a0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Ch*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=d0());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function hc(i,e,t){return new Yo(i,{minFilter:ri,generateMipmaps:e,type:Un,colorSpace:Tr,depthBuffer:t})}function Gs(i,e,t){return new fi({name:i,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:nn,blending:Qi,depthTest:!1,depthWrite:!1})}function c0(){return Gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ch}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function h0(){return Gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ph}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function d0(){return Gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${r0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function dc(){return Gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function uc(){return Gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function u0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Kr||f===Jr)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const x=new Yo(_.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,_=f===Kr||f===Jr,x=f===is||f===Ds;if(_||x){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Lr(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return _&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Lr(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Kr?u.mapping=is:f===Jr&&(u.mapping=Ds),u}function l(u){let f=0;const _=6;for(let x=0;x<_;x++)u[x]!==void 0&&f++;return f===_}function c(u){const f=u.target;f.removeEventListener("dispose",c);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function f0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ji("WebGLRenderer: "+n+" extension not supported."),s}}}function p0(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const x=r.get(_);x&&(e.remove(x),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(_){const x=_.attributes;for(const m in x)e.update(x[m],i.ARRAY_BUFFER)}function d(_){const x=_.index,m=_.attributes.position;let p=0;if(m===void 0)return;const y=x!==null?x.array.length:m.array.length/3-1,w=m.count>=65535?hh:ch,M=new w(Math.ceil(y/3)*6,1),T=M.array;if(x!==null){const g=x.array;p=x.version;for(let b=0,U=0;b<y;b+=3){const R=g[b+0],I=g[b+1],F=g[b+2];T[U++]=R,T[U++]=I,T[U++]=I,T[U++]=F,T[U++]=F,T[U++]=R}}else{p=m.version;for(let g=0,b=0;g<y;g+=3){const U=g+0,R=g+1,I=g+2;T[b++]=U,T[b++]=R,T[b++]=R,T[b++]=I,T[b++]=I,T[b++]=U}}M.version=p;const E=r.get(_);E&&e.remove(E),r.set(_,M)}function u(_){const x=r.get(_);if(x){const m=_.index;m!==null&&x.version<m.version&&d(_)}else d(_);return r.get(_)}function f(){for(const _ in s){const x=s[_].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function m0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function g0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _0(i,e,t){const n=new WeakMap,s=new wt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let R=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var f=R;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let T=o.attributes.position.count*M,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const g=new Float32Array(T*E*4*d),b=new oh(g,T,E,d);b.type=Ln,b.needsUpdate=!0;const U=M*4;for(let I=0;I<d;I++){const F=p[I],z=y[I],L=w[I],G=T*E*4*I;for(let $=0;$<F.count;$++){const B=$*U;_===!0&&(s.fromBufferAttribute(F,$),g[G+B+0]=s.x,g[G+B+1]=s.y,g[G+B+2]=s.z,g[G+B+3]=0),x===!0&&(s.fromBufferAttribute(z,$),g[G+B+4]=s.x,g[G+B+5]=s.y,g[G+B+6]=s.z,g[G+B+7]=0),m===!0&&(s.fromBufferAttribute(L,$),g[G+B+8]=s.x,g[G+B+9]=s.y,g[G+B+10]=s.z,g[G+B+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new oe(T,E)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function v0(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const x0={[Vc]:"LINEAR_TONE_MAPPING",[Wc]:"REINHARD_TONE_MAPPING",[Xc]:"CINEON_TONE_MAPPING",[Do]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[Yc]:"NEUTRAL_TONE_MAPPING",[$c]:"CUSTOM_TONE_MAPPING"};function M0(i,e,t,n,s,r){const a=new In(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Wt;h.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pt([0,2,0,0,2,0],2));const d=new af({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ee(h,d),f=new Th(-1,1,1,-1,0,1);let _=null,x=null,m=!1,p,y=null,w=[],M=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let g=0;g<w.length;g++){const b=w[g];b.setSize&&b.setSize(T,E)}},this.setEffects=function(T){w=T,M=w.length>0&&w[0].isRenderPass===!0;const E=a.width,g=a.height;w.length>0&&o===null&&(o=new In(E,g,{type:Un,depthBuffer:!1,stencilBuffer:!1}),l=new In(E,g,{type:Un,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&w.some(U=>U.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new rs(E,g),r===!0&&(c.format=ai,c.type=ss)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let U=0;U<w.length;U++){const R=w[U];R.setSize&&R.setSize(E,g),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,E){if(m||T.toneMapping===$n&&w.length===0)return!1;if(y=E,E!==null){const g=E.width,b=E.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return M===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=$n,!0},this.hasRenderPass=function(){return M},this.end=function(T,E){T.toneMapping=p,m=!0;let g=a,b=o;for(let U=0;U<w.length;U++){const R=w[U];R.enabled!==!1&&(R.render(T,b,g,E),R.needsSwap!==!1&&(g=b,b=b===o?l:o))}if(_!==T.outputColorSpace||x!==T.toneMapping){_=T.outputColorSpace,x=T.toneMapping,d.defines={},ot.getTransfer(_)===gt&&(d.defines.SRGB_TRANSFER="");const U=x0[x];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(y),T.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Lh=new jt,Dh=new rs(1,1),Ih=new fh(1),Nh=new oh,Uh=new su,Fh=new uh,fc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),_c=new Float32Array(4);function ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=fc[s];if(r===void 0&&(r=new Float32Array(s),fc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wr(i,e){let t=pc[e];t===void 0&&(t=new Int32Array(e),pc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function S0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function E0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function w0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;_c.set(n),i.uniformMatrix2fv(this.addr,!1,_c),kt(t,n)}}function T0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;gc.set(n),i.uniformMatrix3fv(this.addr,!1,gc),kt(t,n)}}function A0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;mc.set(n),i.uniformMatrix4fv(this.addr,!1,mc),kt(t,n)}}function R0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function D0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function I0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Xr(i){return i.version===0&&(i.compareFunction=rh,i.needsUpdate=!0),i}function F0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Xr(Dh):r=Lh,t.setTexture2D(e||r,s)}function O0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uh,s)}function B0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Xr(Ih):r=Fh,t.setTextureCube(e||r,s)}function k0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nh,s)}function z0(i){switch(i){case 5126:return S0;case 35664:return y0;case 35665:return b0;case 35666:return E0;case 35674:return w0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return D0;case 36294:return I0;case 36295:return N0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return k0}}function H0(i,e){i.uniform1fv(this.addr,e)}function G0(i,e){const t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function V0(i,e){const t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function W0(i,e){const t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function X0(i,e){const t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $0(i,e){const t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function q0(i,e){const t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Y0(i,e){i.uniform1iv(this.addr,e)}function Z0(i,e){i.uniform2iv(this.addr,e)}function K0(i,e){i.uniform3iv(this.addr,e)}function J0(i,e){i.uniform4iv(this.addr,e)}function Q0(i,e){i.uniform1uiv(this.addr,e)}function j0(i,e){i.uniform2uiv(this.addr,e)}function eg(i,e){i.uniform3uiv(this.addr,e)}function tg(i,e){i.uniform4uiv(this.addr,e)}function ng(i,e,t){const n=this.cache,s=e.length,r=Wr(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xr(Dh):a=Lh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ig(i,e,t){const n=this.cache,s=e.length,r=Wr(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uh,r[a])}function sg(i,e,t){const n=this.cache,s=e.length,r=Wr(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Xr(Ih):a=Fh;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function rg(i,e,t){const n=this.cache,s=e.length,r=Wr(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nh,r[a])}function ag(i){switch(i){case 5126:return H0;case 35664:return G0;case 35665:return V0;case 35666:return W0;case 35674:return X0;case 35675:return $0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return K0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return j0;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}class og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=z0(t.type)}}class lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ag(t.type)}}class cg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function vc(i,e){i.seq.push(e),i.map[e.id]=e}function hg(i,e,t){const n=i.name,s=n.length;for(wa.lastIndex=0;;){const r=wa.exec(n),a=wa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vc(t,c===void 0?new og(o,i,e):new lg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new cg(o),vc(t,d)),t=d}}}class br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);hg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function xc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const dg=37297;let ug=0;function fg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Mc=new $e;function pg(i){ot._getMatrix(Mc,ot.workingColorSpace,i);const e=`mat3( ${Mc.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Ar:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fg(i.getShaderSource(e),o)}else return r}function mg(i,e){const t=pg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const gg={[Vc]:"Linear",[Wc]:"Reinhard",[Xc]:"Cineon",[Do]:"ACESFilmic",[qc]:"AgX",[Yc]:"Neutral",[$c]:"Custom"};function _g(i,e){const t=gg[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gr=new P;function vg(){ot.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),e=gr.y.toFixed(4),t=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Mg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Es(i){return i!==""}function yc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function bc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(i){return i.replace(yg,bg)}function bg(i,e){const t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return yo(t)}const Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(i){return i.replace(Eg,wg)}function wg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Tg={[ws]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function Ag(i){return Tg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Rg={[Ds]:"ENVMAP_MODE_REFRACTION"};function Cg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pg={[Gc]:"ENVMAP_BLENDING_MULTIPLY",[Dd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function Lg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pg[i.combine]||"ENVMAP_BLENDING_NONE"}function Dg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ag(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Cg(t),d=Lg(t),u=xg(t),f=Mg(r),_=s.createProgram();let x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Es).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Es).join(`
`),m.length>0&&(m+=`
`)):(x=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),m=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Je.tonemapping_pars_fragment:"",t.toneMapping!==$n?_g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,mg("linearToOutputTexel",t.outputColorSpace),vg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=yo(a),a=yc(a,t),a=bc(a,t),o=yo(o),o=yc(o,t),o=bc(o,t),a=Ec(a),o=Ec(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=p+x+a,w=p+m+o,M=xc(s,s.VERTEX_SHADER,y),T=xc(s,s.FRAGMENT_SHADER,w);s.attachShader(_,M),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(M)||"",z=s.getShaderInfoLog(T)||"",L=I.trim(),G=F.trim(),$=z.trim();let B=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,T);else{const W=Sc(s,M,"vertex"),ee=Sc(s,T,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+W+`
`+ee)}else L!==""?We("WebGLProgram: Program Info Log:",L):(G===""||$==="")&&(se=!1);se&&(R.diagnostics={runnable:B,programLog:L,vertexShader:{log:G,prefix:x},fragmentShader:{log:$,prefix:m}})}s.deleteShader(M),s.deleteShader(T),g=new br(s,_),b=Sg(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,dg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ug++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}let Ig=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ug(e),t.set(e,n)),n}}class Ug{constructor(e){this.id=Ig++,this.code=e,this.usedTimes=0}}function Fg(i){return i===wi||i===Er||i===wr}function Og(i,e,t,n,s,r){const a=new Ho,o=new Ng,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,b,U,R,I,F){const z=R.fog,L=I.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=e.get(g.envMap||G,$),se=u[g.type];let W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&We("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));const ee=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ne=ee!==void 0?ee.length:0;let Ae=0;L.morphAttributes.position!==void 0&&(Ae=1),L.morphAttributes.normal!==void 0&&(Ae=2),L.morphAttributes.color!==void 0&&(Ae=3);let Ge,q,Me,Re;if(se){const ye=Pn[se];Ge=ye.vertexShader,q=ye.fragmentShader}else{Ge=g.vertexShader,q=g.fragmentShader;const ye=o.getVertexShaderStage(g),mt=o.getFragmentShaderStage(g);o.update(g,ye,mt),Me=ye.id,Re=mt.id}const Oe=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Be=I.isInstancedMesh===!0,St=I.isBatchedMesh===!0,Ve=!!g.map,je=!!g.matcap,tt=!!B,te=tt&&B.isPMREMTexture===!0,ue=!!g.aoMap,ce=!!g.lightMap,Te=!!g.bumpMap&&g.wireframe===!1,xe=!!g.normalMap,Ye=!!g.displacementMap,Ie=!!g.emissiveMap,nt=!!g.metalnessMap,it=!!g.roughnessMap,dt=g.anisotropy>0,N=g.clearcoat>0,Ct=g.diffuseRoughness>0,et=g.dispersion>0,_t=g.retroreflectivity>0,ge=g.iridescence>0,At=g.sheen>0,ke=g.transmission>0,Xe=dt&&!!g.anisotropyMap,A=N&&!!g.clearcoatMap,v=N&&!!g.clearcoatNormalMap,k=N&&!!g.clearcoatRoughnessMap,re=Ct&&!!g.diffuseRoughnessMap,Q=ge&&!!g.iridescenceMap,he=ge&&!!g.iridescenceThicknessMap,_e=At&&!!g.sheenColorMap,Y=At&&!!g.sheenRoughnessMap,Z=!!g.specularMap,fe=!!g.specularColorMap,C=!!g.specularIntensityMap,K=ke&&!!g.transmissionMap,X=ke&&!!g.thicknessMap,pe=!!g.gradientMap,le=!!g.alphaMap,de=g.alphaTest>0,Ue=!!g.alphaHash,Ke=!!g.extensions;let ae=$n;g.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Fe=te?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Ze={shaderID:se,shaderType:g.type,shaderName:g.name,vertexShader:Ge,fragmentShader:q,defines:g.defines,customVertexShaderID:Me,customFragmentShaderID:Re,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:St,batchingColor:St&&I._colorsTexture!==null,instancing:Be,instancingColor:Be&&I.instanceColor!==null,instancingMorph:Be&&I.morphTexture!==null,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ve,matcap:je,envMap:tt,envMapMode:tt&&B.mapping,envMapPMREM:te,envMapMaxLod:te?Fe.length-1:null,envMapSize:te?Fe[0].width:null,aoMap:ue,lightMap:ce,bumpMap:Te,normalMap:xe,displacementMap:Ye,emissiveMap:Ie,normalMapObjectSpace:xe&&g.normalMapType===Fd,normalMapTangentSpace:xe&&g.normalMapType===po,packedNormalMap:xe&&g.normalMapType===po&&Fg(g.normalMap.format),metalnessMap:nt,roughnessMap:it,anisotropy:dt,anisotropyMap:Xe,clearcoat:N,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:k,diffuseRoughness:Ct,diffuseRoughnessMap:re,dispersion:et,retroreflection:_t,iridescence:ge,iridescenceMap:Q,iridescenceThicknessMap:he,sheen:At,sheenColorMap:_e,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:fe,specularIntensityMap:C,transmission:ke,transmissionMap:K,thicknessMap:X,gradientMap:pe,opaque:g.transparent===!1&&g.blending===Ts&&g.alphaToCoverage===!1,alphaMap:le,alphaTest:de,alphaHash:Ue,combine:g.combine,mapUv:Ve&&f(g.map.channel),aoMapUv:ue&&f(g.aoMap.channel),lightMapUv:ce&&f(g.lightMap.channel),bumpMapUv:Te&&f(g.bumpMap.channel),normalMapUv:xe&&f(g.normalMap.channel),displacementMapUv:Ye&&f(g.displacementMap.channel),emissiveMapUv:Ie&&f(g.emissiveMap.channel),metalnessMapUv:nt&&f(g.metalnessMap.channel),roughnessMapUv:it&&f(g.roughnessMap.channel),anisotropyMapUv:Xe&&f(g.anisotropyMap.channel),clearcoatMapUv:A&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:he&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(g.sheenRoughnessMap.channel),specularMapUv:Z&&f(g.specularMap.channel),specularColorMapUv:fe&&f(g.specularColorMap.channel),specularIntensityMapUv:C&&f(g.specularIntensityMap.channel),transmissionMapUv:K&&f(g.transmissionMap.channel),thicknessMapUv:X&&f(g.thicknessMap.channel),alphaMapUv:le&&f(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xe||dt),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Ve||le),fog:!!z,useFog:g.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&xe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ae,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ve&&g.map.isVideoTexture===!0&&ot.getTransfer(g.map.colorSpace)===gt,decodeVideoTextureEmissive:Ie&&g.emissiveMap.isVideoTexture===!0&&ot.getTransfer(g.emissiveMap.colorSpace)===gt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ft,flipSided:g.side===nn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ke&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&g.extensions.multiDraw===!0||St)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function x(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)b.push(U),b.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(m(b,g),p(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function m(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function p(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function y(g){const b=u[g.type];let U;if(b){const R=Pn[b];U=nf.clone(R.uniforms)}else U=g.uniforms;return U}function w(g,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new Dg(i,b,g,s),c.push(U),h.set(b,U)),U}function M(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:E}}function Bg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Tc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ac(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,x,m,p){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=_,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=p),e++,y}function l(u,f,_,x,m,p,y){y.reversedDepth===!0&&(m=-m);const w=o(u,f,_,x,m,p);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function c(u,f,_,x,m,p){const y=o(u,f,_,x,m,p);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||kg),n.length>1&&n.sort(f||Tc),s.length>1&&s.sort(f||Tc)}function d(){for(let u=e,f=i.length;u<f;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function zg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ac,i.set(n,[a])):s>=r.length?(a=new Ac,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ne};break;case"SpotLight":t={position:new P,direction:new P,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Gg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vg=0;function Wg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xg(i){const e=new Hg,t=Gg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new Mt,a=new Mt;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,_=0,x=0,m=0,p=0,y=0,w=0,M=0,T=0,E=0,g=0,b=0,U=0,R=0;c.sort(Wg);for(let F=0,z=c.length;F<z;F++){const L=c[F],G=L.color,$=L.intensity,B=L.distance;let se=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===wi?se=L.shadow.map.texture:se=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*$,d+=G.g*$,u+=G.b*$;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],$);R++}else if(L.isSunLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[_]=ne,n.sunShadowMap[_]=se;const Ae=ee.getViewportCount();for(let Ge=0;Ge<Ae;Ge++)n.sunShadowMatrix[x+Ge]=ee.getMatrix(Ge),n.sunShadowCascade[x+Ge]=ee._cascadeData[Ge];x+=Ae,_++}n.sun[f]=W,f++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=L.shadow.matrix,T++}n.directional[m]=W,m++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(G).multiplyScalar($),W.distance=B,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[y]=W;const ee=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,ee.updateMatrices(L),L.castShadow&&U++),n.spotLightMatrix[y]=ee.matrix,L.castShadow){const ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.spotShadow[y]=ne,n.spotShadowMap[y]=se,g++}y++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(G).multiplyScalar($),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=W,w++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=L.shadow.matrix,E++}n.point[p]=W,p++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar($),W.groundColor.copy(L.groundColor).multiplyScalar($),n.hemi[M]=W,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==w||I.hemiLength!==M||I.numSunShadows!==_||I.numDirectionalShadows!==T||I.numPointShadows!==E||I.numSpotShadows!==g||I.numSpotMaps!==b||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=p,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=R,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=y,I.rectAreaLength=w,I.hemiLength=M,I.numSunShadows=_,I.numDirectionalShadows=T,I.numPointShadows=E,I.numSpotShadows=g,I.numSpotMaps=b,I.numLightProbes=R,n.version=Vg++)}function l(c,h){let d=0,u=0,f=0,_=0,x=0,m=0;const p=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const M=c[y];if(M.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(M.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Rc(i){const e=new Xg(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $g(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Rc(i),e.set(s,[o])):r>=a.length?(o=new Rc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Kg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Cc=new Mt,xs=new P,Ta=new P;function Jg(i,e,t){let n=new Us;const s=new oe,r=new oe,a=new wt,o=new of,l=new lf,c={},h=t.maxTextureSize,d={[Ei]:nn,[nn]:Ei,[Ft]:Ft},u=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Wt;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ee(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let p=this.type;this.render=function(E,g,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===fd&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);const U=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Qi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==this.type;z&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=E.length;L<G;L++){const $=E[L],B=$.shadow;if(B===void 0){We("WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const se=B.getFrameExtents();s.multiply(se),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,B.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ys){if($.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new In(s.x,s.y,{format:wi,type:Un,minFilter:an,magFilter:an,generateMipmaps:!1}),B.map.texture.name=$.name+".shadowMap",B.map.depthTexture=new rs(s.x,s.y,Ln),B.map.depthTexture.name=$.name+".shadowMapDepth",B.map.depthTexture.format=ci,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=$t,B.map.depthTexture.magFilter=$t}else $.isPointLight?(B.map=new Yo(s.x),B.map.depthTexture=new fh(s.x,Nn)):(B.map=new In(s.x,s.y),B.map.depthTexture=new rs(s.x,s.y,Nn)),B.map.depthTexture.name=$.name+".shadowMap",B.map.depthTexture.format=ci,this.type===ws?(B.map.depthTexture.compareFunction=W?sh:ih,B.map.depthTexture.minFilter=an,B.map.depthTexture.magFilter=an):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=$t,B.map.depthTexture.magFilter=$t);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const ee=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();$.isPointLight!==!0&&B.updateMatrices($,b);const ne=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:b.layers;for(let Ae=0;Ae<ee;Ae++){const Ge=B.getCamera(Ae);if($.isPointLight){const q=B.camera,Me=B.matrix,Re=$.distance||q.far;Re!==q.far&&(q.far=Re,q.updateProjectionMatrix()),xs.setFromMatrixPosition($.matrixWorld),q.position.copy(xs),Ta.copy(q.position),Ta.add(Zg[Ae]),q.up.copy(Kg[Ae]),q.lookAt(Ta),q.updateMatrixWorld(),Me.makeTranslation(-xs.x,-xs.y,-xs.z),Cc.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Cc,q.coordinateSystem,q.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Ae),i.clear();else{Ae===0&&(i.setRenderTarget(B.map),i.clear());const q=B.getViewport(Ae);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),F.viewport(a)}n=B.getFrustum(Ae),M(g,b,Ge,$,ne,this.type)}B.isPointLightShadow!==!0&&this.type===ys&&y(B,b),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(U,R,I)};function y(E,g){const b=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new In(s.x,s.y,{format:wi,type:Un}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,b,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,b,f,x,null)}function w(E,g,b,U){let R=null;const I=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=b.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const F=R.uuid,z=g.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let G=L[z];G===void 0&&(G=R.clone(),L[z]=G,g.addEventListener("dispose",T)),R=G}if(R.visible=g.visible,R.wireframe=g.wireframe,U===ys?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=i.properties.get(R);F.light=b}return R}function M(E,g,b,U,R,I){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===ys)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const L=e.update(E),G=E.material;if(Array.isArray(G)){const $=L.groups;for(let B=0,se=$.length;B<se;B++){const W=$[B],ee=G[W.materialIndex];if(ee&&ee.visible){const ne=w(E,ee,U,I);E.onBeforeShadow(i,E,g,b,L,ne,W),i.renderBufferDirect(b,null,L,ne,E,W),E.onAfterShadow(i,E,g,b,L,ne,W)}}}else if(G.visible){const $=w(E,G,U,I);E.onBeforeShadow(i,E,g,b,L,$,null),i.renderBufferDirect(b,null,L,$,E,null),E.onAfterShadow(i,E,g,b,L,$,null)}}const z=E.children;for(let L=0,G=z.length;L<G;L++)M(z[L],g,b,U,R,I)}function T(E){E.target.removeEventListener("dispose",T);for(const b in c){const U=c[b],R=E.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}function Qg(i,e){function t(){let C=!1;const K=new wt;let X=null;const pe=new wt(0,0,0,0);return{setMask:function(le){X!==le&&!C&&(i.colorMask(le,le,le,le),X=le)},setLocked:function(le){C=le},setClear:function(le,de,Ue,Ke,ae){ae===!0&&(le*=Ke,de*=Ke,Ue*=Ke),K.set(le,de,Ue,Ke),pe.equals(K)===!1&&(i.clearColor(le,de,Ue,Ke),pe.copy(K))},reset:function(){C=!1,X=null,pe.set(-1,0,0,0)}}}function n(){let C=!1,K=!1,X=null,pe=null,le=null;return{setReversed:function(de){if(K!==de){const Ue=e.get("EXT_clip_control");de?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),K=de;const Ke=le;le=null,this.setClear(Ke)}},getReversed:function(){return K},setTest:function(de){de?Se(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(de){X!==de&&!C&&(i.depthMask(de),X=de)},setFunc:function(de){if(K&&(de=qd[de]),pe!==de){switch(de){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=de}},setLocked:function(de){C=de},setClear:function(de){le!==de&&(le=de,K&&(de=1-de),i.clearDepth(de))},reset:function(){C=!1,X=null,pe=null,le=null,K=!1}}}function s(){let C=!1,K=null,X=null,pe=null,le=null,de=null,Ue=null,Ke=null,ae=null;return{setTest:function(Fe){C||(Fe?Se(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(Fe){K!==Fe&&!C&&(i.stencilMask(Fe),K=Fe)},setFunc:function(Fe,Ze,ye){(X!==Fe||pe!==Ze||le!==ye)&&(i.stencilFunc(Fe,Ze,ye),X=Fe,pe=Ze,le=ye)},setOp:function(Fe,Ze,ye){(de!==Fe||Ue!==Ze||Ke!==ye)&&(i.stencilOp(Fe,Ze,ye),de=Fe,Ue=Ze,Ke=ye)},setLocked:function(Fe){C=Fe},setClear:function(Fe){ae!==Fe&&(i.clearStencil(Fe),ae=Fe)},reset:function(){C=!1,K=null,X=null,pe=null,le=null,de=null,Ue=null,Ke=null,ae=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,_=[],x=null,m=!1,p=null,y=null,w=null,M=null,T=null,E=null,g=null,b=new Ne(0,0,0),U=0,R=!1,I=null,F=null,z=null,L=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,se=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=se>=1):W.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=se>=2);let ee=null,ne={};const Ae=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),q=new wt().fromArray(Ae),Me=new wt().fromArray(Ge);function Re(C,K,X,pe){const le=new Uint8Array(4),de=i.createTexture();i.bindTexture(C,de),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<X;Ue++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(K+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return de}const Oe={};Oe[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(i.DEPTH_TEST),a.setFunc(Ls),Te(!1),xe(bl),Se(i.CULL_FACE),ue(Qi);function Se(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Be(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function St(C,K){return u[C]!==K?(i.bindFramebuffer(C,K),u[C]=K,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Ve(C,K){let X=_,pe=!1;if(C){X=f.get(K),X===void 0&&(X=[],f.set(K,X));const le=C.textures;if(X.length!==le.length||X[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ue=le.length;de<Ue;de++)X[de]=i.COLOR_ATTACHMENT0+de;X.length=le.length,pe=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,pe=!0);pe&&i.drawBuffers(X)}function je(C){return x!==C?(i.useProgram(C),x=C,!0):!1}const tt={[qi]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};tt[_d]=i.MIN,tt[vd]=i.MAX;const te={[xd]:i.ZERO,[Md]:i.ONE,[Sd]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[wd]:i.DST_COLOR,[bd]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[Td]:i.ONE_MINUS_DST_COLOR,[Ed]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Cd]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(C,K,X,pe,le,de,Ue,Ke,ae,Fe){if(C===Qi){m===!0&&(Be(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),C!==pd){if(C!==p||Fe!==R){if((y!==qi||T!==qi)&&(i.blendEquation(i.FUNC_ADD),y=qi,T=qi),Fe)switch(C){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ht("WebGLState: Invalid blending: ",C);break}else switch(C){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wl:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tl:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",C);break}w=null,M=null,E=null,g=null,b.set(0,0,0),U=0,p=C,R=Fe}return}le=le||K,de=de||X,Ue=Ue||pe,(K!==y||le!==T)&&(i.blendEquationSeparate(tt[K],tt[le]),y=K,T=le),(X!==w||pe!==M||de!==E||Ue!==g)&&(i.blendFuncSeparate(te[X],te[pe],te[de],te[Ue]),w=X,M=pe,E=de,g=Ue),(Ke.equals(b)===!1||ae!==U)&&(i.blendColor(Ke.r,Ke.g,Ke.b,ae),b.copy(Ke),U=ae),p=C,R=!1}function ce(C,K){C.side===Ft?Be(i.CULL_FACE):Se(i.CULL_FACE);let X=C.side===nn;K&&(X=!X),Te(X),C.blending===Ts&&C.transparent===!1?ue(Qi):ue(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const pe=C.stencilWrite;o.setTest(pe),pe&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ie(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(C){I!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),I=C)}function xe(C){C!==dd?(Se(i.CULL_FACE),C!==F&&(C===bl?i.cullFace(i.BACK):C===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),F=C}function Ye(C){C!==z&&(B&&i.lineWidth(C),z=C)}function Ie(C,K,X){C?(Se(i.POLYGON_OFFSET_FILL),(L!==K||G!==X)&&(L=K,G=X,a.getReversed()&&(K=-K,X=-X),i.polygonOffset(K,X))):Be(i.POLYGON_OFFSET_FILL)}function nt(C){C?Se(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function it(C){C===void 0&&(C=i.TEXTURE0+$-1),ee!==C&&(i.activeTexture(C),ee=C)}function dt(C,K,X){X===void 0&&(ee===null?X=i.TEXTURE0+$-1:X=ee);let pe=ne[X];pe===void 0&&(pe={type:void 0,texture:void 0},ne[X]=pe),(pe.type!==C||pe.texture!==K)&&(ee!==X&&(i.activeTexture(X),ee=X),i.bindTexture(C,K||Oe[C]),pe.type=C,pe.texture=K)}function N(){const C=ne[ee];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Ct(){try{i.compressedTexImage2D(...arguments)}catch(C){ht("WebGLState:",C)}}function et(){try{i.compressedTexImage3D(...arguments)}catch(C){ht("WebGLState:",C)}}function _t(){try{i.texSubImage2D(...arguments)}catch(C){ht("WebGLState:",C)}}function ge(){try{i.texSubImage3D(...arguments)}catch(C){ht("WebGLState:",C)}}function At(){try{i.compressedTexSubImage2D(...arguments)}catch(C){ht("WebGLState:",C)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(C){ht("WebGLState:",C)}}function Xe(){try{i.texStorage2D(...arguments)}catch(C){ht("WebGLState:",C)}}function A(){try{i.texStorage3D(...arguments)}catch(C){ht("WebGLState:",C)}}function v(){try{i.texImage2D(...arguments)}catch(C){ht("WebGLState:",C)}}function k(){try{i.texImage3D(...arguments)}catch(C){ht("WebGLState:",C)}}function re(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function Q(C,K){d[C]!==K&&(i.pixelStorei(C,K),d[C]=K)}function he(C){q.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),q.copy(C))}function _e(C){Me.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Me.copy(C))}function Y(C,K){let X=c.get(K);X===void 0&&(X=new WeakMap,c.set(K,X));let pe=X.get(C);pe===void 0&&(pe=i.getUniformBlockIndex(K,C.name),i.uniformBlockBinding(K,pe,pe),X.set(C,pe))}function Z(C,K,X){const le=c.get(K).get(C);l[le]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,le,X),l[le]=X)}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ee=null,ne={},u={},l={},f=new WeakMap,_=[],x=null,m=!1,p=null,y=null,w=null,M=null,T=null,E=null,g=null,b=new Ne(0,0,0),U=0,R=!1,I=null,F=null,z=null,L=null,G=null,q.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:Be,bindFramebuffer:St,drawBuffers:Ve,useProgram:je,setBlending:ue,setMaterial:ce,setFlipSided:Te,setCullFace:xe,setLineWidth:Ye,setPolygonOffset:Ie,setScissorTest:nt,activeTexture:it,bindTexture:dt,unbindTexture:N,compressedTexImage2D:Ct,compressedTexImage3D:et,texImage2D:v,texImage3D:k,pixelStorei:Q,getParameter:re,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Xe,texStorage3D:A,texSubImage2D:_t,texSubImage3D:ge,compressedTexSubImage2D:At,compressedTexSubImage3D:ke,scissor:he,viewport:_e,reset:fe}}function jg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d=new Set;let u;const f=new WeakMap,_=new Set,x=new FinalizationRegistry(A=>_.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return m?new OffscreenCanvas(A,v):Rr("canvas")}function y(A,v,k){let re=1;const Q=Xe(A);if((Q.width>k||Q.height>k)&&(re=k/Math.max(Q.width,Q.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const he=Math.floor(re*Q.width),_e=Math.floor(re*Q.height);u===void 0&&(u=p(he,_e));const Y=v?p(he,_e):u;return Y.width=he,Y.height=_e,Y.getContext("2d").drawImage(A,0,0,he,_e),We("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+he+"x"+_e+")."),Y}else return"data"in A&&We("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function w(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,v,k,re,Q,he=!1){if(A!==null){if(i[A]!==void 0)return i[A];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _e;re&&(_e=e.get("EXT_texture_norm16"),_e||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8),k===i.UNSIGNED_SHORT&&_e&&(Y=_e.R16_EXT),k===i.SHORT&&_e&&(Y=_e.R16_SNORM_EXT)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8),k===i.UNSIGNED_SHORT&&_e&&(Y=_e.RG16_EXT),k===i.SHORT&&_e&&(Y=_e.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_SHORT&&_e&&(Y=_e.RGB16_EXT),k===i.SHORT&&_e&&(Y=_e.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){const Z=he?Ar:ot.getTransfer(Q);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=Z===gt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&_e&&(Y=_e.RGBA16_EXT),k===i.SHORT&&_e&&(Y=_e.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function g(A,v){let k;return A?v===null||v===Nn||v===ss?k=i.DEPTH24_STENCIL8:v===Ln?k=i.DEPTH32F_STENCIL8:v===Is&&(k=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Nn||v===ss?k=i.DEPTH_COMPONENT24:v===Ln?k=i.DEPTH_COMPONENT32F:v===Is&&(k=i.DEPTH_COMPONENT16),k}function b(A,v){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function U(A){const v=new WeakRef(A);n.get(A).__ref=v,_.add(v),x.register(A,v,v)}function R(A){const v=n.get(A).__ref;v!==void 0&&(_.delete(v),x.unregister(v))}function I(A){z(A.target)}function F(A){L(A.target)}function z(A){A.removeEventListener("dispose",I),R(A),$(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function L(A){A.removeEventListener("dispose",F),R(A),se(A)}function G(){for(const A of _){const v=A.deref();v!==void 0&&(v.isRenderTarget===!0?L(v):z(v))}_.clear(),d.clear()}function $(A){const v=n.get(A);if(v.__webglInit===void 0)return;const k=A.source,re=f.get(k);if(re){const Q=re[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&B(A),Object.keys(re).length===0&&f.delete(k)}n.remove(A)}function B(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const k=A.source,re=f.get(k);delete re[v.__cacheKey],a.memory.textures--}function se(A){const v=n.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();const k=A.depthTexture;if(k&&k.renderTarget===A&&z(k),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let he=0;he<v.__webglFramebuffer[Q].length;he++)i.deleteFramebuffer(v.__webglFramebuffer[Q][he]);else i.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const re=A.textures;for(let Q=0,he=re.length;Q<he;Q++){const _e=n.get(re[Q]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(re[Q])}n.remove(A)}let W=0;function ee(){W=0}function ne(){return W}function Ae(A){W=A}function Ge(){const A=W;return A>=s.maxTextures&&We("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function q(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function Me(A,v){const k=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const re=A.image;if(re===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(k,A,v);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function Re(A,v){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ce(k,A,v);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function Oe(A,v){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ce(k,A,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function Se(A,v){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Te(k,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const Be={[Ua]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},St={[$t]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},Ve={[Bd]:i.NEVER,[rh]:i.ALWAYS,[kd]:i.LESS,[ih]:i.LEQUAL,[zd]:i.EQUAL,[sh]:i.GEQUAL,[Hd]:i.GREATER,[Gd]:i.NOTEQUAL};function je(A,v){if(v.type===Ln&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===Qr||v.magFilter===Xs||v.magFilter===ri||v.minFilter===an||v.minFilter===Qr||v.minFilter===Xs||v.minFilter===ri)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Be[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Be[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Be[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,St[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,St[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$t||v.minFilter!==Xs&&v.minFilter!==ri||v.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function tt(A,v){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",I),U(v));const re=v.source;let Q=f.get(re);Q===void 0&&(Q={},f.set(re,Q));const he=q(v);if(he!==A.__cacheKey){Q[he]===void 0&&(Q[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[he].usedTimes++;const _e=Q[A.__cacheKey];_e!==void 0&&(Q[A.__cacheKey].usedTimes--,_e.usedTimes===0&&B(v)),A.__cacheKey=he,A.__webglTexture=Q[he].texture}return k}function te(A,v,k){return Math.floor(Math.floor(A/k)/v)}function ue(A,v,k,re){const he=A.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,re,v.data);else{he.sort((C,K)=>C.start-K.start);let _e=0;for(let C=1;C<he.length;C++){const K=he[_e],X=he[C],pe=K.start+K.count,le=te(X.start,v.width,4),de=te(K.start,v.width,4);X.start<=pe+1&&le===de&&te(X.start+X.count-1,v.width,4)===le?K.count=Math.max(K.count,X.start+X.count-K.start):(++_e,he[_e]=X)}he.length=_e+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let C=0,K=he.length;C<K;C++){const X=he[C],pe=Math.floor(X.start/4),le=Math.ceil(X.count/4),de=pe%v.width,Ue=Math.floor(pe/v.width),Ke=le,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ue),t.texSubImage2D(i.TEXTURE_2D,0,de,Ue,Ke,ae,k,re,v.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function ce(A,v,k){let re=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(re=i.TEXTURE_3D);const Q=tt(A,v),he=v.source;t.bindTexture(re,A.__webglTexture,i.TEXTURE0+k);const _e=n.get(he);if(he.version!==_e.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ae=ot.getPrimaries(ot.workingColorSpace),Fe=v.colorSpace===si?null:ot.getPrimaries(v.colorSpace),Ze=v.colorSpace===si||ae===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=y(v.image,!1,s.maxTextureSize);Z=ke(v,Z);const fe=r.convert(v.format,v.colorSpace),C=r.convert(v.type);let K=E(v.internalFormat,fe,C,v.normalized,v.colorSpace,v.isVideoTexture);je(re,v);let X;const pe=v.mipmaps,le=v.isVideoTexture!==!0,de=_e.__version===void 0||Q===!0,Ue=he.dataReady,Ke=b(v,Z);if(v.isDepthTexture)K=g(v.format===ai,v.type),de&&(le?t.texStorage2D(i.TEXTURE_2D,1,K,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,K,Z.width,Z.height,0,fe,C,null));else if(v.isDataTexture)if(pe.length>0){le&&de&&t.texStorage2D(i.TEXTURE_2D,Ke,K,pe[0].width,pe[0].height);for(let ae=0,Fe=pe.length;ae<Fe;ae++)X=pe[ae],le?Ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,X.width,X.height,fe,C,X.data):t.texImage2D(i.TEXTURE_2D,ae,K,X.width,X.height,0,fe,C,X.data);v.generateMipmaps=!1}else le?(de&&t.texStorage2D(i.TEXTURE_2D,Ke,K,Z.width,Z.height),Ue&&ue(v,Z,fe,C)):t.texImage2D(i.TEXTURE_2D,0,K,Z.width,Z.height,0,fe,C,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){le&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,K,pe[0].width,pe[0].height,Z.depth);for(let ae=0,Fe=pe.length;ae<Fe;ae++)if(X=pe[ae],v.format!==Dn)if(fe!==null)if(le){if(Ue)if(v.layerUpdates.size>0){const Ze=lc(X.width,X.height,v.format,v.type);for(const ye of v.layerUpdates){const mt=X.data.subarray(ye*Ze/X.data.BYTES_PER_ELEMENT,(ye+1)*Ze/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ye,X.width,X.height,1,fe,mt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,X.width,X.height,Z.depth,fe,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,K,X.width,X.height,Z.depth,0,X.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,X.width,X.height,Z.depth,fe,C,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,K,X.width,X.height,Z.depth,0,fe,C,X.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{le&&de&&t.texStorage2D(i.TEXTURE_2D,Ke,K,pe[0].width,pe[0].height);for(let ae=0,Fe=pe.length;ae<Fe;ae++)X=pe[ae],v.format!==Dn?fe!==null?le?Ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,X.width,X.height,fe,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,K,X.width,X.height,0,X.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,X.width,X.height,fe,C,X.data):t.texImage2D(i.TEXTURE_2D,ae,K,X.width,X.height,0,fe,C,X.data)}else if(v.isDataArrayTexture)if(le){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,K,Z.width,Z.height,Z.depth),Ue)if(v.layerUpdates.size>0){const ae=lc(Z.width,Z.height,v.format,v.type);for(const Fe of v.layerUpdates){const Ze=Z.data.subarray(Fe*ae/Z.data.BYTES_PER_ELEMENT,(Fe+1)*ae/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,Z.width,Z.height,1,fe,C,Ze)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,fe,C,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,Z.width,Z.height,Z.depth,0,fe,C,Z.data);else if(v.isData3DTexture)le?(de&&t.texStorage3D(i.TEXTURE_3D,Ke,K,Z.width,Z.height,Z.depth),Ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,fe,C,Z.data)):t.texImage3D(i.TEXTURE_3D,0,K,Z.width,Z.height,Z.depth,0,fe,C,Z.data);else if(v.isFramebufferTexture){if(de)if(le)t.texStorage2D(i.TEXTURE_2D,Ke,K,Z.width,Z.height);else{let ae=Z.width,Fe=Z.height;for(let Ze=0;Ze<Ke;Ze++)t.texImage2D(i.TEXTURE_2D,Ze,K,ae,Fe,0,fe,C,null),ae>>=1,Fe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Z.parentNode!==ae){ae.appendChild(Z),d.add(v),ae.onpaint=Fe=>{const Ze=Fe.changedElements;for(const ye of d)Ze.includes(ye.image)&&(ye.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{const Ze=i.RGBA,ye=i.RGBA,mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ze,ye,mt,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pe.length>0){if(le&&de){const ae=Xe(pe[0]);t.texStorage2D(i.TEXTURE_2D,Ke,K,ae.width,ae.height)}for(let ae=0,Fe=pe.length;ae<Fe;ae++)X=pe[ae],le?Ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,fe,C,X):t.texImage2D(i.TEXTURE_2D,ae,K,fe,C,X);v.generateMipmaps=!1}else if(le){if(de){const ae=Xe(Z);t.texStorage2D(i.TEXTURE_2D,Ke,K,ae.width,ae.height)}Ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,C,Z)}else t.texImage2D(i.TEXTURE_2D,0,K,fe,C,Z);w(v)&&v.mipmapsAutoUpdate===!0&&M(re),_e.__version=he.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Te(A,v,k){if(v.image.length!==6)return;const re=tt(A,v),Q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const he=n.get(Q);if(Q.version!==he.__version||re===!0){t.activeTexture(i.TEXTURE0+k);const _e=ot.getPrimaries(ot.workingColorSpace),Y=v.colorSpace===si?null:ot.getPrimaries(v.colorSpace),Z=v.colorSpace===si||_e===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const fe=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,K=[];for(let ye=0;ye<6;ye++)!fe&&!C?K[ye]=y(v.image[ye],!0,s.maxCubemapSize):K[ye]=C?v.image[ye].image:v.image[ye],K[ye]=ke(v,K[ye]);const X=K[0],pe=r.convert(v.format,v.colorSpace),le=r.convert(v.type);let de=E(v.internalFormat,pe,le,v.normalized,v.colorSpace);const Ue=v.isVideoTexture!==!0,Ke=he.__version===void 0||re===!0,ae=Q.dataReady;let Fe=b(v,X);je(i.TEXTURE_CUBE_MAP,v);let Ze;if(v.isDepthTexture){if(de=g(v.format===ai,v.type),Ke)if(Ue)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,de,X.width,X.height);else for(let ye=0;ye<6;ye++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,X.width,X.height,0,pe,le,null)}else if(fe){Ue&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,de,X.width,X.height);for(let ye=0;ye<6;ye++){Ze=K[ye].mipmaps;for(let mt=0;mt<Ze.length;mt++){const zt=Ze[mt];v.format!==Dn?pe!==null?Ue?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,0,0,zt.width,zt.height,pe,zt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,de,zt.width,zt.height,0,zt.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,0,0,zt.width,zt.height,pe,le,zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt,de,zt.width,zt.height,0,pe,le,zt.data)}}}else{if(Ze=v.mipmaps,Ue&&Ke){Ze.length>0&&Fe++;const ye=Xe(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,de,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(C){Ue?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,K[ye].width,K[ye].height,pe,le,K[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,K[ye].width,K[ye].height,0,pe,le,K[ye].data);for(let mt=0;mt<Ze.length;mt++){const Jn=Ze[mt].image[ye].image;Ue?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,0,0,Jn.width,Jn.height,pe,le,Jn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,de,Jn.width,Jn.height,0,pe,le,Jn.data)}}else{Ue?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,pe,le,K[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,pe,le,K[ye]);for(let mt=0;mt<Ze.length;mt++){const zt=Ze[mt];Ue?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,0,0,pe,le,zt.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,mt+1,de,pe,le,zt.image[ye])}}}w(v)&&v.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),he.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function xe(A,v,k,re,Q,he){const _e=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),Z=E(k.internalFormat,_e,Y,k.normalized,k.colorSpace),fe=n.get(v),C=n.get(k);if(C.__renderTarget=v,!fe.__hasExternalTextures){const K=Math.max(1,v.width>>he),X=Math.max(1,v.height>>he);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,he,Z,K,X,v.depth,0,_e,Y,null):t.texImage2D(Q,he,Z,K,X,0,_e,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ge(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,Q,C.__webglTexture,0,_t(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,Q,C.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(A,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const re=v.depthTexture,Q=re&&re.isDepthTexture?re.type:null,he=g(v.stencilBuffer,Q),_e=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(v),he,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(v),he,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,he,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,A)}else{const re=v.textures;for(let Q=0;Q<re.length;Q++){const he=re[Q],_e=r.convert(he.format,he.colorSpace),Y=r.convert(he.type),Z=E(he.internalFormat,_e,Y,he.normalized,he.colorSpace);ge(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(v),Z,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(v),Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(A,v,k){const re=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(v.depthTexture);Q.__renderTarget=v;const he=re?v.depthTexture.image[0]:v.depthTexture.image;(!Q.__webglTexture||he.width!==v.width||he.height!==v.height)&&(he.width=v.width,he.height=v.height,v.depthTexture.needsUpdate=!0),re?Se(v.depthTexture,0):Me(v.depthTexture,0);const _e=Q.__webglTexture,Y=_t(v),Z=re?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,fe=v.depthTexture.format===ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ci)ge(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,Z,_e,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,fe,Z,_e,0);else if(v.depthTexture.format===ai)ge(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,Z,_e,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,fe,Z,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){const v=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const re=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),re){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,re.removeEventListener("dispose",Q)};re.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=re}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let re=0;re<6;re++)Ie(v.__webglFramebuffer[re],A,re);else A.texture.mipmaps.length>0?Ie(v.__webglFramebuffer[0],A,0):Ie(v.__webglFramebuffer,A,0);else if(k){v.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[re]),v.__webglDepthbuffer[re]===void 0)v.__webglDepthbuffer[re]=i.createRenderbuffer(),Ye(v.__webglDepthbuffer[re],A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,he)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ye(v.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(A,v,k){const re=n.get(A);v!==void 0&&xe(re.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&nt(A)}function dt(A){const v=A.texture,k=n.get(A),re=n.get(v);A.addEventListener("dispose",F),U(A);const Q=A.textures,he=A.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=v.version,a.memory.textures++),he){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let Z=0;Z<v.mipmaps.length;Z++)k.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else k.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)k.__webglFramebuffer[Y]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(_e)for(let Y=0,Z=Q.length;Y<Z;Y++){const fe=n.get(Q[Y]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ge(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){const Z=Q[Y];k.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const fe=r.convert(Z.format,Z.colorSpace),C=r.convert(Z.type),K=E(Z.internalFormat,fe,C,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),X=_t(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,K,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),je(i.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)xe(k.__webglFramebuffer[Y][Z],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else xe(k.__webglFramebuffer[Y],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);w(v)?M(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let Y=0,Z=Q.length;Y<Z;Y++){const fe=Q[Y],C=n.get(fe);let K=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,C.__webglTexture),je(K,fe),xe(k.__webglFramebuffer,A,fe,i.COLOR_ATTACHMENT0+Y,K,0),w(fe)&&M(K)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,re.__webglTexture),je(Y,v),v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)xe(k.__webglFramebuffer[Z],A,v,i.COLOR_ATTACHMENT0,Y,Z);else xe(k.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,Y,0);w(v)?M(Y):v.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&nt(A)}function N(A){const v=A.textures;for(let k=0,re=v.length;k<re;k++){const Q=v[k];if(w(Q)&&Q.mipmapsAutoUpdate===!0){const he=T(A),_e=n.get(Q).__webglTexture;t.bindTexture(he,_e),M(he),t.unbindTexture()}}}const Ct=[];function et(A){if(A.samples>0){if(ge(A)===!1){const v=A.textures,k=A.width,re=A.height;let Q=i.COLOR_BUFFER_BIT;const he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(A),Y=v.length>1;if(Y)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);const C=n.get(v[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,k,re,0,0,k,re,Q,i.NEAREST),l===!0&&(Ct.length=0,Ct.push(i.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ct.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);const C=n.get(v[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function _t(A){return Math.min(s.maxSamples,A.samples)}function ge(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function ke(A,v){const k=A.colorSpace,re=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Tr&&k!==si&&(ot.getTransfer(k)===gt?(re!==Dn||Q!==dn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",k)),v}function Xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ge,this.resetTextureUnits=ee,this.getTextureUnits=ne,this.setTextureUnits=Ae,this.setTexture2D=Me,this.setTexture2DArray=Re,this.setTexture3D=Oe,this.setTextureCube=Se,this.rebindTextures=it,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ge,this.dispose=G}function e_(i,e){function t(n,s=si){let r;const a=ot.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return i.BYTE;if(n===Jc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Io)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===th)return i.RGB;if(n===Dn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===ai)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===Fo)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===Oo)return i.RG_INTEGER;if(n===Bo)return i.RGBA_INTEGER;if(n===vr||n===xr||n===Mr||n===Sr)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===ka||n===za)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Er||n===$a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Ga)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wa)return r.COMPRESSED_R11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Er)return r.COMPRESSED_RG11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===Ya||n===Za||n===Ka||n===Ja||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===to)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===no)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===io)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ao)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===lo||n===co)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ho||n===uo||n===wr||n===fo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ph(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fi({vertexShader:t_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s_ extends mi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const x=typeof XRWebGLBinding<"u",m=new i_,p={},y=t.getContextAttributes();let w=null,M=null;const T=[],E=[],g=new oe;let b=null,U=null;const R=new pn;R.viewport=new wt;const I=new pn;I.viewport=new wt;const F=[R,I],z=new ff;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Me=T[q];return Me===void 0&&(Me=new aa,T[q]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(q){let Me=T[q];return Me===void 0&&(Me=new aa,T[q]=Me),Me.getGripSpace()},this.getHand=function(q){let Me=T[q];return Me===void 0&&(Me=new aa,T[q]=Me),Me.getHandSpace()};function $(q){const Me=E.indexOf(q.inputSource);if(Me===-1)return;const Re=T[Me];Re!==void 0&&(Re.update(q.inputSource,q.frame,c||a),Re.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",se);for(let q=0;q<T.length;q++){const Me=E[q];Me!==null&&(E[q]=null,T[q].disconnect(Me))}L=null,G=null,m.reset();for(const q in p)delete p[q];if(e.setRenderTarget(w),f=null,u=null,d=null,s=null,M=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),U!==null){const q=U.camera;q.fov=U.fov,q.zoom=U.zoom,q.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",B),s.addEventListener("inputsourceschange",se),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Oe=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=y.stencil?ai:ci,Oe=y.stencil?ss:Nn);const Be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new In(u.textureWidth,u.textureHeight,{format:Dn,type:dn,depthTexture:new rs(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new In(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(q){for(let Me=0;Me<q.removed.length;Me++){const Re=q.removed[Me],Oe=E.indexOf(Re);Oe>=0&&(E[Oe]=null,T[Oe].disconnect(Re))}for(let Me=0;Me<q.added.length;Me++){const Re=q.added[Me];let Oe=E.indexOf(Re);if(Oe===-1){for(let Be=0;Be<T.length;Be++)if(Be>=E.length){E.push(Re),Oe=Be;break}else if(E[Be]===null){E[Be]=Re,Oe=Be;break}if(Oe===-1)break}const Se=T[Oe];Se&&Se.connect(Re)}}function W(q,Me){Me===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Me.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Me=q.near,Re=q.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),z.near=I.near=R.near=Me,z.far=I.far=R.far=Re,(L!==z.near||G!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,G=z.far),z.layers.mask=q.layers.mask|6,R.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;const Oe=q.parent,Se=z.cameras;W(z,Oe);for(let Be=0;Be<Se.length;Be++)W(Se[Be],Oe);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),U===null&&q.isPerspectiveCamera&&(U={camera:q,fov:q.fov,zoom:q.zoom}),ee(q,z,Oe)};function ee(q,Me,Re){Re===null?q.matrix.copy(Me.matrixWorld):(q.matrix.copy(Re.matrixWorld),q.matrix.invert(),q.matrix.multiply(Me.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Me.projectionMatrix),q.projectionMatrixInverse.copy(Me.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=mo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return p[q]};let ne=null;function Ae(q,Me){if(h=Me.getViewerPose(c||a),_=Me,h!==null){const Re=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Oe=!1;Re.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let Ve=0;Ve<Re.length;Ve++){const je=Re[Ve];let tt=null;if(f!==null)tt=f.getViewport(je);else{const ue=d.getViewSubImage(u,je);tt=ue.viewport,Ve===0&&(e.setRenderTargetTextures(M,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(M))}let te=F[Ve];te===void 0&&(te=new pn,te.layers.enable(Ve),te.viewport=new wt,F[Ve]=te),te.matrix.fromArray(je.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(je.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(tt.x,tt.y,tt.width,tt.height),Ve===0&&(z.matrix.copy(te.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(te)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Ve=d.getDepthInformation(Re[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,s.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ve=0;Ve<Re.length;Ve++){const je=Re[Ve].camera;if(je){let tt=p[je];tt||(tt=new ph,p[je]=tt);const te=d.getCameraImage(je);tt.sourceTexture=te}}}}for(let Re=0;Re<T.length;Re++){const Oe=E[Re],Se=T[Re];Oe!==null&&Se!==void 0&&Se.update(Oe,Me,c||a)}ne&&ne(q,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),_=null}const Ge=new Ah;Ge.setAnimationLoop(Ae),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const r_=new Mt,Oh=new $e;Oh.set(-1,0,0,0,1,0,0,0,1);function a_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),w=y.envMap,M=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(r_.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Oh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function o_(i,e,t,n){let s={},r={};function a(y,w){const M=w.program;n.uniformBlockBinding(y,M,s[y.id])}function o(y,w){let M=s[y.id];M===void 0&&(_(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",m));const T=w.program;n.updateUBOMapping(y,T);const E=e.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){const w=i.createBuffer(),M=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(y){const w=s[y.id],M=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,g=M.length;E<g;E++){const b=M[E];if(Array.isArray(b))for(let U=0,R=b.length;U<R;U++)h(b[U],E,U,T);else h(b,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,w,M,T){if(u(y,w,M,T)===!0){const E=y.__offset,g=y.value;if(Array.isArray(g)){let b=0;for(let U=0;U<g.length;U++){const R=g[U],I=x(R,!0);d(R,y.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,y.__data)}}function d(y,w,M){typeof y=="number"||typeof y=="boolean"?w[M]=y:y.isMatrix3?(w[M]=y.elements[0],w[M+1]=y.elements[1],w[M+2]=y.elements[2],w[M+3]=0,w[M+4]=y.elements[3],w[M+5]=y.elements[4],w[M+6]=y.elements[5],w[M+7]=0,w[M+8]=y.elements[6],w[M+9]=y.elements[7],w[M+10]=y.elements[8],w[M+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-M),M):y.toArray(w,M)}function u(y,w,M,T){const E=y.value,g=w+"_"+M;if(Array.isArray(E)){T[g]===void 0&&(T[g]=[]);const b=T[g];let U=!1;for(let R=0;R<E.length;R++)f(E[R],b,R)===!0&&(U=!0);return U}return f(E,T,g)}function f(y,w,M){if(w[M]===void 0)return typeof y=="number"||typeof y=="boolean"?w[M]=y:ArrayBuffer.isView(y)?w[M]=y.slice():w[M]=y.clone(),!0;{const T=w[M];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return w[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function _(y){const w=y.uniforms;let M=0;const T=16;for(let g=0,b=w.length;g<b;g++){const U=Array.isArray(w[g])?w[g]:[w[g]];for(let R=0,I=U.length;R<I;R++){const F=U[R],z=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(w[g])||Array.isArray(F.value);let G=M;for(let B=0,se=z.length;B<se;B++){const W=z[B],ee=x(W,L),ne=M%T,Ae=ne%ee.boundary,Ge=ne+Ae;M+=Ae,Ge!==0&&T-Ge<ee.storage&&(M+=T-Ge),B===0&&(G=M),M+=ee.storage}const $=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new $((M-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}const E=M%T;return E>0&&(M+=T-E),y.__size=M,y.__cache={},this}function x(y,w){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):We("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){const w=y.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:p}}const l_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function c_(){return Cn===null&&(Cn=new Mu(l_,16,16,wi,Un),Cn.name="DFG_LUT",Cn.minFilter=an,Cn.magFilter=an,Cn.wrapS=Xn,Cn.wrapT=Xn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class h_{constructor(e={}){const{canvas:t=Xd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const x=f,m=new Set([Bo,Oo,Fo]),p=new Set([dn,Nn,Is,ss,No,Uo]),y=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let T=null,E=null;const g=[],b=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,F=null,z=null,L=null,G=null;this._outputColorSpace=Qt;let $=0,B=0,se=null,W=-1,ee=null;const ne=new wt,Ae=new wt;let Ge=null;const q=new Ne(0);let Me=0,Re=t.width,Oe=t.height,Se=1,Be=null,St=null;const Ve=new wt(0,0,Re,Oe),je=new wt(0,0,Re,Oe);let tt=!1;const te=new Us,ue=new Vo;let ce=!1,Te=!1;const xe=new Mt,Ye=new P,Ie=new wt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function dt(){return se===null?Se:1}let N=n;function Ct(S,D){return t.getContext(S,D)}let et,_t,ge,At,ke,Xe,A,v,k,re,Q,he,_e,Y,Z,fe,C,K,X,pe,le,de,Ue;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",ye,!1),N===null){const D="webgl2";if(N=Ct(D,S),N===null)throw Ct(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(S){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ht("WebGLRenderer: "+S.message),S}function Ke(){et=new f0(N),et.init(),le=new e_(N,et),_t=new n0(N,et,e,le),ge=new Qg(N,et),_t.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),z=N.createFramebuffer(),L=N.createFramebuffer(),G=N.createFramebuffer(),At=new g0(N),ke=new Bg,Xe=new jg(N,et,ge,ke,_t,le,At),A=new u0(R),v=new vf(N),de=new e0(N,v),k=new p0(N,v,At,de),re=new v0(N,k,v,de,At),K=new _0(N,_t,Xe),Z=new i0(ke),Q=new Og(R,A,et,_t,de,Z),he=new a_(R,ke),_e=new zg,Y=new $g(et),C=new jm(R,A,ge,re,_,l),fe=new Jg(R,re,_t),Ue=new o_(N,At,_t,ge),X=new t0(N,et,At),pe=new m0(N,et,At),At.programs=Q.programs,R.capabilities=_t,R.extensions=et,R.properties=ke,R.renderLists=_e,R.shadowMap=fe,R.state=ge,R.info=At}x!==dn&&(U=new M0(x,t.width,t.height,o,s,r));const ae=new s_(R,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(S){S!==void 0&&(Se=S,this.setSize(Re,Oe,!1))},this.getSize=function(S){return S.set(Re,Oe)},this.setSize=function(S,D,V=!0){if(ae.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=S,Oe=D,t.width=Math.floor(S*Se),t.height=Math.floor(D*Se),V===!0&&(t.style.width=S+"px",t.style.height=D+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(Re*Se,Oe*Se).floor()},this.setDrawingBufferSize=function(S,D,V){Re=S,Oe=D,Se=V,t.width=Math.floor(S*V),t.height=Math.floor(D*V),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(x===dn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ne)},this.getViewport=function(S){return S.copy(Ve)},this.setViewport=function(S,D,V,O){S.isVector4?Ve.set(S.x,S.y,S.z,S.w):Ve.set(S,D,V,O),ge.viewport(ne.copy(Ve).multiplyScalar(dt()).round())},this.getScissor=function(S){return S.copy(je)},this.setScissor=function(S,D,V,O){S.isVector4?je.set(S.x,S.y,S.z,S.w):je.set(S,D,V,O),ge.scissor(Ae.copy(je).multiplyScalar(dt()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){ge.setScissorTest(tt=S)},this.setOpaqueSort=function(S){Be=S},this.setTransparentSort=function(S){St=S},this.getClearColor=function(S){return S.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,V=!0){let O=0;if(S){let H=!1;if(se!==null){const ve=se.texture.format;H=m.has(ve)}if(H){const ve=se.texture.type,Ce=p.has(ve),me=C.getClearColor(),we=C.getClearAlpha(),De=me.r,qe=me.g,st=me.b;Ce?(y[0]=De,y[1]=qe,y[2]=st,y[3]=we,N.clearBufferuiv(N.COLOR,0,y)):(w[0]=De,w[1]=qe,w[2]=st,w[3]=we,N.clearBufferiv(N.COLOR,0,w))}else O|=N.COLOR_BUFFER_BIT}D&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),C.dispose(),_e.dispose(),Y.dispose(),Xe.dispose(),ke.dispose(),A.dispose(),re.dispose(),k.dispose(),de.dispose(),Ue.dispose(),Q.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",fl),ae.removeEventListener("sessionend",pl),gi.stop()};function Fe(S){S.preventDefault(),Cl("WebGLRenderer: Context Lost."),I=!0}function Ze(){Cl("WebGLRenderer: Context Restored."),I=!1;const S=At.autoReset,D=fe.enabled,V=fe.autoUpdate,O=fe.needsUpdate,H=fe.type;Ke(),At.autoReset=S,fe.enabled=D,fe.autoUpdate=V,fe.needsUpdate=O,fe.type=H}function ye(S){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function mt(S){const D=S.target;D.removeEventListener("dispose",mt),zt(D)}function zt(S){Jn(S),ke.remove(S)}function Jn(S){const D=ke.get(S).programs;D!==void 0&&(D.forEach(function(V){Q.releaseProgram(V)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,V,O,H,ve){D===null&&(D=nt);const Ce=H.isMesh&&H.matrixWorld.determinantAffine()<0,me=ld(S,D,V,O,H);ge.setMaterial(O,Ce);let we=V.index,De=1;if(O.wireframe===!0){if(we=k.getWireframeAttribute(V),we===void 0)return;De=2}const qe=V.drawRange,st=V.attributes.position;let Pe=qe.start*De,rt=(qe.start+qe.count)*De;ve!==null&&(Pe=Math.max(Pe,ve.start*De),rt=Math.min(rt,(ve.start+ve.count)*De)),we!==null?(Pe=Math.max(Pe,0),rt=Math.min(rt,we.count)):st!=null&&(Pe=Math.max(Pe,0),rt=Math.min(rt,st.count));const Pt=rt-Pe;if(Pt<0||Pt===1/0)return;de.setup(H,O,me,V,we);let xt,vt=X;if(we!==null&&(xt=v.get(we),vt=pe,vt.setIndex(xt)),H.isMesh)O.wireframe===!0?(ge.setLineWidth(O.wireframeLinewidth*dt()),vt.setMode(N.LINES)):vt.setMode(N.TRIANGLES);else if(H.isLine){let Yt=O.linewidth;Yt===void 0&&(Yt=1),ge.setLineWidth(Yt*dt()),H.isLineSegments?vt.setMode(N.LINES):H.isLineLoop?vt.setMode(N.LINE_LOOP):vt.setMode(N.LINE_STRIP)}else H.isPoints?vt.setMode(N.POINTS):H.isSprite&&vt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(et.get("WEBGL_multi_draw"))vt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Yt=H._multiDrawStarts,Le=H._multiDrawCounts,en=H._multiDrawCount,ut=we?v.get(we).bytesPerElement:1,_i=ke.get(O).currentProgram.getUniforms();for(let Zt=0;Zt<en;Zt++)_i.setValue(N,"_gl_DrawID",Zt),vt.render(Yt[Zt]/ut,Le[Zt])}else if(H.isInstancedMesh)vt.renderInstances(Pe,Pt,H.count);else if(V.isInstancedBufferGeometry){const Yt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Le=Math.min(V.instanceCount,Yt);vt.renderInstances(Pe,Pt,Le)}else vt.render(Pe,Pt)};function ul(S,D,V,O){F!==null&&S.isNodeMaterial&&F.setObject(O,S),ce===!0&&Z.setState(S,V,!1),S.transparent===!0&&S.side===Ft&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,ps(S,D,O),S.side=Ei,S.needsUpdate=!0,ps(S,D,O),S.side=Ft):ps(S,D,O)}this.compile=function(S,D,V=null){V===null&&(V=S),F!==null&&F.renderStart(S,D,V),E=Y.get(V),E.init(D),b.push(E),V.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),S!==V&&S.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),Te=this.localClippingEnabled,ce=Z.init(this.clippingPlanes,Te),ce===!0&&Z.setGlobalState(this.clippingPlanes,D),F!==null&&fe.render(E.state.shadowsArray,V,D);const O=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ve=H.material;if(ve)if(Array.isArray(ve))for(let Ce=0;Ce<ve.length;Ce++){const me=ve[Ce];ul(me,V,D,H),O.add(me)}else ul(ve,V,D,H),O.add(ve)}),E=b.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(S,D,V=null){const O=this.compile(S,D,V);return new Promise(H=>{function ve(){if(O.forEach(function(Ce){const we=ke.get(Ce).currentProgram;(we===void 0||we.isReady())&&O.delete(Ce)}),O.size===0){H(S);return}setTimeout(ve,10)}et.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Yr=null;function ad(S){Yr&&Yr(S)}function fl(){gi.stop()}function pl(){gi.start()}const gi=new Ah;gi.setAnimationLoop(ad),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(S){Yr=S,ae.setAnimationLoop(S),S===null?gi.stop():gi.start()},ae.addEventListener("sessionstart",fl),ae.addEventListener("sessionend",pl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(S,D);const V=ae.enabled===!0&&ae.isPresenting===!0,O=U!==null&&(se===null||V)&&U.begin(R,se);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(D),D=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,D,se),E=Y.get(S,b.length),E.init(D),E.state.textureUnits=Xe.getTextureUnits(),b.push(E),xe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ue.setFromArrayCamera(D):te.setFromProjectionMatrix(xe,An,D.reversedDepth),Te=this.localClippingEnabled,ce=Z.init(this.clippingPlanes,Te),T=_e.get(S,g.length),T.init(),g.push(T),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&Zr(Ce,D,-1/0,R.sortObjects)}Zr(S,D,0,R.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(Be,St),it=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,it&&C.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),ce===!0&&Z.beginShadows();const H=E.state.shadowsArray;if(fe.render(H,S,D),ce===!0&&Z.endShadows(),(O&&U.hasRenderPass())===!1){const Ce=T.opaque,me=T.transmissive;if(E.setupLights(),D.isArrayCamera){const we=D.cameras;if(me.length>0)for(let De=0,qe=we.length;De<qe;De++){const st=we[De];gl(Ce,me,S,st)}it&&C.render(S);for(let De=0,qe=we.length;De<qe;De++){const st=we[De];ml(T,S,st,st.viewport)}}else me.length>0&&gl(Ce,me,S,D),it&&C.render(S),ml(T,S,D)}se!==null&&B===0&&(Xe.updateMultisampleRenderTarget(se),Xe.updateRenderTargetMipmap(se)),O&&U.end(R),S.isScene===!0&&S.onAfterRender(R,S,D),de.resetDefaultState(),W=-1,ee=null,b.pop(),b.length>0?(E=b[b.length-1],Xe.setTextureUnits(E.state.textureUnits),ce===!0&&Z.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,F!==null&&F.renderEnd()};function Zr(S,D,V,O){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){const Ce=D.isArrayCamera?ue:te;if(!S.frustumCulled||S.intersectsFrustum(Ce)){O&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xe);const me=re.update(S),we=S.material;we.visible&&T.push(S,me,we,V,Ie.z,null,D)}}else if(S.isMesh||S.isLine||S.isPoints){const Ce=D.isArrayCamera?ue:te;if(!S.frustumCulled||S.intersectsFrustum(Ce)){const me=re.update(S),we=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ie.copy(me.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(xe)),Array.isArray(we)){const De=me.groups;for(let qe=0,st=De.length;qe<st;qe++){const Pe=De[qe],rt=we[Pe.materialIndex];rt&&rt.visible&&T.push(S,me,rt,V,Ie.z,Pe,D)}}else we.visible&&T.push(S,me,we,V,Ie.z,null,D)}}}const ve=S.children;for(let Ce=0,me=ve.length;Ce<me;Ce++)Zr(ve[Ce],D,V,O)}function ml(S,D,V,O){const{opaque:H,transmissive:ve,transparent:Ce}=S;E.setupLightsView(V),ce===!0&&Z.setGlobalState(R.clippingPlanes,V),O&&ge.viewport(ne.copy(O)),H.length>0&&Vs(H,D,V),ve.length>0&&Vs(ve,D,V),Ce.length>0&&Vs(Ce,D,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function gl(S,D,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){const Pe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new In(1,1,{generateMipmaps:!0,type:Pe?Un:dn,minFilter:ri,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const ve=E.state.transmissionRenderTarget[O.id],Ce=O.viewport||ne;ve.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const me=R.getRenderTarget(),we=R.getActiveCubeFace(),De=R.getActiveMipmapLevel();R.setRenderTarget(ve),R.getClearColor(q),Me=R.getClearAlpha(),Me<1&&R.setClearColor(16777215,.5),R.clear(),it&&C.render(V);const qe=R.toneMapping;R.toneMapping=$n;const st=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),ce===!0&&Z.setGlobalState(R.clippingPlanes,O),Vs(S,V,O),Xe.updateMultisampleRenderTarget(ve),Xe.updateRenderTargetMipmap(ve),et.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let rt=0,Pt=D.length;rt<Pt;rt++){const xt=D[rt],{object:vt,geometry:Yt,material:Le,group:en}=xt;if(Le.side===Ft&&vt.layers.test(O.layers)){const ut=Le.side;Le.side=nn,Le.needsUpdate=!0,_l(vt,V,O,Yt,Le,en),Le.side=ut,Le.needsUpdate=!0,Pe=!0}}Pe===!0&&(Xe.updateMultisampleRenderTarget(ve),Xe.updateRenderTargetMipmap(ve))}R.setRenderTarget(me,we,De),R.setClearColor(q,Me),st!==void 0&&(O.viewport=st),R.toneMapping=qe}function Vs(S,D,V){const O=D.isScene===!0?D.overrideMaterial:null;for(let H=0,ve=S.length;H<ve;H++){const Ce=S[H],{object:me,geometry:we,group:De}=Ce;let qe=Ce.material;qe.allowOverride===!0&&O!==null&&(qe=O),me.layers.test(V.layers)&&_l(me,D,V,we,qe,De)}}function _l(S,D,V,O,H,ve){F!==null&&H.isNodeMaterial&&F.setObject(S,H),S.onBeforeRender(R,D,V,O,H,ve),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(R,D,V,O,S,ve),H.transparent===!0&&H.side===Ft&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,R.renderBufferDirect(V,D,O,H,S,ve),H.side=Ei,H.needsUpdate=!0,R.renderBufferDirect(V,D,O,H,S,ve),H.side=Ft):R.renderBufferDirect(V,D,O,H,S,ve),S.onAfterRender(R,D,V,O,H,ve)}function vl(S){let D=0;for(const V of S)V.texture!==null&&D++;return D}function ps(S,D,V){D.isScene!==!0&&(D=nt);const O=ke.get(S),H=E.state.lights,ve=E.state.shadowsArray,Ce=H.state.version,me=Q.getParameters(S,H.state,ve,D,V,E.state.lightProbeGridArray),we=Q.getProgramCacheKey(me);let De=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,O.fog=D.fog;const qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=A.get(S.envMap||O.environment,qe),O.envMapRotation=O.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,De===void 0&&(S.addEventListener("dispose",mt),De=new Map,O.programs=De,O.programVariants=new Map);let st=De.get(we);if(st!==void 0){if(O.currentProgram===st&&O.lightsStateVersion===Ce)return Ml(S,me),st}else me.uniforms=Q.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,me),S.onBeforeCompile(me,R),st=Q.acquireProgram(me,we),De.set(we,st),O.uniforms=me.uniforms;const Pe=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=Z.uniform),Ml(S,me),O.needsLights=hd(S),O.lightsStateVersion=Ce,O.needsLights&&(Pe.ambientLightColor.value=H.state.ambient,Pe.lightProbe.value=H.state.probe,Pe.sunLights.value=H.state.sun,Pe.sunLightShadows.value=H.state.sunShadow,Pe.directionalLights.value=H.state.directional,Pe.directionalLightShadows.value=H.state.directionalShadow,Pe.spotLights.value=H.state.spot,Pe.spotLightShadows.value=H.state.spotShadow,Pe.rectAreaLights.value=H.state.rectArea,Pe.ltc_1.value=H.state.rectAreaLTC1,Pe.ltc_2.value=H.state.rectAreaLTC2,Pe.pointLights.value=H.state.point,Pe.pointLightShadows.value=H.state.pointShadow,Pe.hemisphereLights.value=H.state.hemi,Pe.sunShadowMatrix.value=H.state.sunShadowMatrix,Pe.sunShadowCascade.value=H.state.sunShadowCascade,Pe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pe.spotLightMatrix.value=H.state.spotLightMatrix,Pe.spotLightMap.value=H.state.spotLightMap,Pe.pointShadowMatrix.value=H.state.pointShadowMatrix),O.numLightProbeGrids=vl(E.state.lightProbeGridArray),O.currentProgram=st,O.uniformsList=null,st}function od(S,D,V,O,H){const ve=ke.get(S),Ce=ve.currentProgram.id+","+O+","+H;let me=ve.programVariants.get(Ce);return me===void 0?(me=ps(S,D,V),ve.programVariants.set(Ce,me)):(ve.currentProgram=me,ve.uniformsList=null,ve.outputColorSpace=O,ve.toneMapping=H),me}function xl(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=br.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Ml(S,D){const V=ke.get(S);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function ld(S,D,V,O,H){D.isScene!==!0&&(D=nt),Xe.resetTextureUnits();const ve=D.fog,Ce=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?D.environment:null,me=se===null?R.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ot.workingColorSpace,we=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,De=A.get(O.envMap||Ce,we),qe=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,st=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Pe=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,Pt=!!V.morphAttributes.color;let xt=$n;O.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(xt=R.toneMapping);const vt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Yt=vt!==void 0?vt.length:0,Le=ke.get(O),en=E.state.lights;if(ce===!0&&(Te===!0||S!==ee)){const Et=S===ee&&O.id===W;Z.setState(O,S,Et)}let ut=!1,_i=!1;O.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==en.state.version||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==De||O.fog===!0&&Le.fog!==ve||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Z.numPlanes||Le.numIntersection!==Z.numIntersection)||Le.vertexAlphas!==qe||Le.vertexTangents!==st||Le.morphTargets!==Pe||Le.morphNormals!==rt||Le.morphColors!==Pt||Le.morphTargetsCount!==Yt||Le.numLightProbeGrids!==vl(E.state.lightProbeGridArray)?ut=!0:(Le.outputColorSpace!==me||Le.toneMapping!==xt)&&(_i=!0):(ut=!0,Le.__version=O.version);let Zt=Le.currentProgram;(ut===!0||_i===!0)&&(Zt=_i===!0?od(O,D,H,me,xt):ps(O,D,H),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Zt,Le));let Ws=!1,Qn=!1,vi=!1;const ct=Zt.getUniforms(),Xt=Le.uniforms;if(ge.useProgram(Zt.program)&&(Ws=!0,Qn=!0,vi=!0),O.id!==W&&(W=O.id,Qn=!0),Ws||ee!==S){ge.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ct.setValue(N,"projectionMatrix",S.projectionMatrix),ct.setValue(N,"viewMatrix",S.matrixWorldInverse);const Ht=ct.map.cameraPosition;Ht!==void 0&&Ht.setValue(N,Ye.setFromMatrixPosition(S.matrixWorld)),_t.logarithmicDepthBuffer&&ct.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ct.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,Qn=!0,vi=!0)}if(Le.needsLights&&(en.state.sunShadowMap.length>0&&ct.setValue(N,"sunShadowMap",en.state.sunShadowMap,Xe),en.state.directionalShadowMap.length>0&&ct.setValue(N,"directionalShadowMap",en.state.directionalShadowMap,Xe),en.state.spotShadowMap.length>0&&ct.setValue(N,"spotShadowMap",en.state.spotShadowMap,Xe),en.state.pointShadowMap.length>0&&ct.setValue(N,"pointShadowMap",en.state.pointShadowMap,Xe)),H.isSkinnedMesh){ct.setOptional(N,H,"bindMatrix"),ct.setOptional(N,H,"bindMatrixInverse");const Et=H.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ct.setValue(N,"boneTexture",Et.boneTexture,Xe))}H.isBatchedMesh&&(ct.setOptional(N,H,"batchingTexture"),ct.setValue(N,"batchingTexture",H._matricesTexture,Xe),ct.setOptional(N,H,"batchingIdTexture"),ct.setValue(N,"batchingIdTexture",H._indirectTexture,Xe),ct.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&ct.setValue(N,"batchingColorTexture",H._colorsTexture,Xe));const Sn=V.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&K.update(H,V,Zt),(Qn||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,ct.setValue(N,"receiveShadow",H.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&D.environment!==null&&(Xt.envMapIntensity.value=D.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=c_()),Qn){if(ct.setValue(N,"toneMappingExposure",R.toneMappingExposure),Le.needsLights&&cd(Xt,vi),ve&&O.fog===!0&&he.refreshFogUniforms(Xt,ve),he.refreshMaterialUniforms(Xt,O,Se,Oe,E.state.transmissionRenderTarget[S.id]),Le.needsLights&&Le.numLightProbeGrids>0){const Et=M;let Ht=0;for(const Bn of E.state.lightProbeGridArray)Bn.texture!==null&&(Et.textures[Ht]=Bn.texture,Et.min[Ht]=Bn.boundingBox.min,Et.max[Ht]=Bn.boundingBox.max,Et.resolution[Ht]=Bn.resolution,Ht++);for(const Bn in Et)Et[Bn].length=Ht;Xt.probesSH.value=Et.textures,Xt.probesMin.value=Et.min,Xt.probesMax.value=Et.max,Xt.probesResolution.value=Et.resolution}br.upload(N,xl(Le),Xt,Xe)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(br.upload(N,xl(Le),Xt,Xe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ct.setValue(N,"center",H.center),ct.setValue(N,"modelViewMatrix",H.modelViewMatrix),ct.setValue(N,"normalMatrix",H.normalMatrix),ct.setValue(N,"modelMatrix",H.matrixWorld),O.uniformsGroups!==void 0){const Et=O.uniformsGroups;for(let Ht=0,Bn=Et.length;Ht<Bn;Ht++){const yl=Et[Ht];Ue.update(yl,Zt),Ue.bind(yl,Zt)}}return Zt}function cd(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function hd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(S,D,V){const O=ke.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ke.get(S.texture).__webglTexture=D,ke.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const V=ke.get(S);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,V=0){se=S,$=D,B=V;let O=null,H=!1,ve=!1;if(S){const me=ke.get(S);if(me.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),ne.copy(S.viewport),Ae.copy(S.scissor),Ge=S.scissorTest,ge.viewport(ne),ge.scissor(Ae),ge.setScissorTest(Ge),W=-1;return}else if(me.__webglFramebuffer===void 0)Xe.setupRenderTarget(S);else if(me.__hasExternalTextures)Xe.rebindTextures(S,ke.get(S.texture).__webglTexture,ke.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qe=S.depthTexture;if(me.__boundDepthTexture!==qe){if(qe!==null&&ke.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(S)}}const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);const De=ke.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[D])?O=De[D][V]:O=De[D],H=!0):S.samples>0&&Xe.useMultisampledRTT(S)===!1?O=ke.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?O=De[V]:O=De,ne.copy(S.viewport),Ae.copy(S.scissor),Ge=S.scissorTest}else ne.copy(Ve).multiplyScalar(Se).floor(),Ae.copy(je).multiplyScalar(Se).floor(),Ge=tt;if(V!==0&&(O=z),ge.bindFramebuffer(N.FRAMEBUFFER,O)&&ge.drawBuffers(S,O),ge.viewport(ne),ge.scissor(Ae),ge.setScissorTest(Ge),H){const me=ke.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,V)}else if(ve){const me=D;for(let we=0;we<S.textures.length;we++){const De=ke.get(S.textures[we]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+we,De.__webglTexture,V,me)}}else if(S!==null&&V!==0){const me=ke.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,V)}W=-1};function Sl(S){const D=ke.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=_t.textureFormatReadable(S.format),D.__typeReadable=_t.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,V,O,H,ve,Ce,me=0){if(!(S&&S.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ke.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we){ge.bindFramebuffer(N.FRAMEBUFFER,we);try{const De=S.textures[me],qe=De.format,st=De.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);const Pe=Sl(De);if(Pe.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-O&&V>=0&&V<=S.height-H&&N.readPixels(D,V,O,H,le.convert(qe),le.convert(st),ve)}finally{const De=se!==null?ke.get(se).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(S,D,V,O,H,ve,Ce,me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ke.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we)if(D>=0&&D<=S.width-O&&V>=0&&V<=S.height-H){ge.bindFramebuffer(N.FRAMEBUFFER,we);const De=S.textures[me],qe=De.format,st=De.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);const Pe=Sl(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,rt),N.bufferData(N.PIXEL_PACK_BUFFER,ve.byteLength,N.STREAM_READ),N.readPixels(D,V,O,H,le.convert(qe),le.convert(st),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Pt=se!==null?ke.get(se).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,Pt);const xt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await $d(N,xt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,rt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ve),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(rt),N.deleteSync(xt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,V=0){const O=Math.pow(2,-V),H=Math.floor(S.image.width*O),ve=Math.floor(S.image.height*O),Ce=D!==null?D.x:0,me=D!==null?D.y:0;Xe.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,Ce,me,H,ve),ge.unbindTexture()},this.copyTextureToTexture=function(S,D,V=null,O=null,H=0,ve=0){let Ce,me,we,De,qe,st,Pe,rt,Pt;const xt=S.isCompressedTexture?S.mipmaps[ve]:S.image;if(V!==null)Ce=V.max.x-V.min.x,me=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,De=V.min.x,qe=V.min.y,st=V.isBox3?V.min.z:0;else{const ct=Math.pow(2,-H);Ce=Math.floor(xt.width*ct),me=Math.floor(xt.height*ct),S.isDataArrayTexture?we=xt.depth:S.isData3DTexture?we=Math.floor(xt.depth*ct):we=1,De=0,qe=0,st=0}O!==null?(Pe=O.x,rt=O.y,Pt=O.z):(Pe=0,rt=0,Pt=0);const vt=le.convert(D.format),Yt=le.convert(D.type);let Le;D.isData3DTexture?(Xe.setTexture3D(D,0),Le=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Xe.setTexture2DArray(D,0),Le=N.TEXTURE_2D_ARRAY):(Xe.setTexture2D(D,0),Le=N.TEXTURE_2D),ge.activeTexture(N.TEXTURE0),ge.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),ge.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ge.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const en=ge.getParameter(N.UNPACK_ROW_LENGTH),ut=ge.getParameter(N.UNPACK_IMAGE_HEIGHT),_i=ge.getParameter(N.UNPACK_SKIP_PIXELS),Zt=ge.getParameter(N.UNPACK_SKIP_ROWS),Ws=ge.getParameter(N.UNPACK_SKIP_IMAGES);ge.pixelStorei(N.UNPACK_ROW_LENGTH,xt.width),ge.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt.height),ge.pixelStorei(N.UNPACK_SKIP_PIXELS,De),ge.pixelStorei(N.UNPACK_SKIP_ROWS,qe),ge.pixelStorei(N.UNPACK_SKIP_IMAGES,st);const Qn=S.isDataArrayTexture||S.isData3DTexture,vi=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const ct=ke.get(S),Xt=ke.get(D),Sn=ke.get(ct.__renderTarget),Et=ke.get(Xt.__renderTarget);ge.bindFramebuffer(N.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ht=0;Ht<we;Ht++)Qn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.get(S).__webglTexture,H,st+Ht),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.get(D).__webglTexture,ve,Pt+Ht)),N.blitFramebuffer(De,qe,De+Ce,qe+me,Pe,rt,Pe+Ce,rt+me,N.DEPTH_BUFFER_BIT,N.NEAREST);ge.bindFramebuffer(N.READ_FRAMEBUFFER,null),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||ke.has(S)){const ct=ke.get(S),Xt=ke.get(D);ge.bindFramebuffer(N.READ_FRAMEBUFFER,L),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let Sn=0;Sn<we;Sn++)Qn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ct.__webglTexture,H,st+Sn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ct.__webglTexture,H),vi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xt.__webglTexture,ve,Pt+Sn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xt.__webglTexture,ve),H!==0?N.blitFramebuffer(De,qe,De+Ce,qe+me,Pe,rt,Pe+Ce,rt+me,N.COLOR_BUFFER_BIT,N.NEAREST):vi?N.copyTexSubImage3D(Le,ve,Pe,rt,Pt+Sn,De,qe,Ce,me):N.copyTexSubImage2D(Le,ve,Pe,rt,De,qe,Ce,me);ge.bindFramebuffer(N.READ_FRAMEBUFFER,null),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else vi?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Le,ve,Pe,rt,Pt,Ce,me,we,vt,Yt,xt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Le,ve,Pe,rt,Pt,Ce,me,we,vt,xt.data):N.texSubImage3D(Le,ve,Pe,rt,Pt,Ce,me,we,vt,Yt,xt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ve,Pe,rt,Ce,me,vt,Yt,xt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ve,Pe,rt,xt.width,xt.height,vt,xt.data):N.texSubImage2D(N.TEXTURE_2D,ve,Pe,rt,Ce,me,vt,Yt,xt);ge.pixelStorei(N.UNPACK_ROW_LENGTH,en),ge.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),ge.pixelStorei(N.UNPACK_SKIP_PIXELS,_i),ge.pixelStorei(N.UNPACK_SKIP_ROWS,Zt),ge.pixelStorei(N.UNPACK_SKIP_IMAGES,Ws),ve===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&N.generateMipmap(Le),ge.unbindTexture()},this.initRenderTarget=function(S){ke.get(S).__webglFramebuffer===void 0&&Xe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Xe.setTextureCube(S,0):S.isData3DTexture?Xe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Xe.setTexture2DArray(S,0):Xe.setTexture2D(S,0),ge.unbindTexture()},this.resetState=function(){$=0,B=0,se=null,ge.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const Pc={type:"change"},Zo={type:"start"},Bh={type:"end"},_r=new zr,Lc=new Wn,d_=Math.cos(70*Qd.DEG2RAD),Ut=new P,sn=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Aa=1e-6;class u_ extends gf{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new hi,this._lastTargetPosition=new P,this._quat=new hi().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oc,this._sphericalDelta=new oc,this._scale=1,this._panOffset=new P,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new P,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=p_.bind(this),this._onPointerDown=f_.bind(this),this._onPointerUp=m_.bind(this),this._onContextMenu=y_.bind(this),this._onMouseWheel=v_.bind(this),this._onKeyDown=x_.bind(this),this._onTouchStart=M_.bind(this),this._onTouchMove=S_.bind(this),this._onMouseDown=g_.bind(this),this._onMouseMove=__.bind(this),this._interceptControlDown=b_.bind(this),this._interceptControlUp=E_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pc),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ut.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_r.origin.copy(this.object.position),_r.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_r.direction))<d_?this.object.lookAt(this.target):(Lc.setFromNormalAndCoplanarPoint(this.object.up,this.target),_r.intersectPlane(Lc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Aa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Aa||this._lastTargetPosition.distanceToSquared(this.target)>Aa?(this.dispatchEvent(Pc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function f_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function p_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function m_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bh),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function g_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case Ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case Ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Zo)}function __(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function v_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Zo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Bh))}function x_(i){this.enabled!==!1&&this._handleKeyDown(i)}function M_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Yi.ROTATE:if(this.enableRotate===!1){this.state=ft.NONE;break}this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case Yi.PAN:if(this.enablePan===!1){this.state=ft.NONE;break}this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Zo)}function S_(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function y_(i){this.enabled!==!1&&i.preventDefault()}function b_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function E_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ms=new P;function fn(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ms.copy(e),Ms[n]=0,Ms.normalize();const c=.5*a/(a+o),h=1-Ms.angleTo(i)/l;return Math.sign(Ms[t])===1?h*c:o/(a+o)+c+c*(1-h)}class $r extends Zn{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,_=d.length/6,x=new P,m=.5/a;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/_)){case 0:x.set(1,0,0),f[y+0]=fn(x,c,"z","y",r,n),f[y+1]=1-fn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-fn(x,c,"z","y",r,n),f[y+1]=1-fn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-fn(x,c,"x","z",r,e),f[y+1]=fn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-fn(x,c,"x","z",r,e),f[y+1]=1-fn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-fn(x,c,"x","y",r,e),f[y+1]=1-fn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=fn(x,c,"x","y",r,e),f[y+1]=1-fn(x,c,"y","x",r,t);break}}static fromJSON(e){return new $r(e.width,e.height,e.depth,e.segments,e.radius)}}const Mn=Math.PI*2;function j(i,e=.82,t=0,n={}){return new Hr({color:i,roughness:e,metalness:t,...n})}function Ko(i=11129812){return new Fn({color:i,roughness:.08,metalness:.05,transparent:!0,opacity:.19,side:Ft,depthWrite:!1})}function J(i,e,t,n,s=0,r=0,a=0,o=!0){const l=new Ee(new Zn(i,e,t),n);return l.position.set(s,r,a),l.castShadow=o,l.receiveShadow=!0,l}function yt(i,e,t,n,s,r=0,a=0,o=0,l=!0){const c=new Ee(new $r(i,e,t,3,n),s);return c.position.set(r,a,o),c.castShadow=l,c.receiveShadow=!0,c}function It(i,e,t,n,s,r=0,a=0,o=0,l=!0){const c=new Ee(new on(i,e,t,n),s);return c.position.set(r,a,o),c.castShadow=l,c.receiveShadow=!0,c}function rn(i,e,t=0,n=0,s=0,r=16){const a=new Ee(new xn(i,r,Math.max(8,r/2)),e);return a.position.set(t,n,s),a.castShadow=!0,a.receiveShadow=!0,a}function kh(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e;const s=n.getContext("2d");t(s,i,e);const r=new Xo(n);return r.colorSpace=Qt,r.anisotropy=4,r}function Dr(i,e=1){return kh(300,220,(t,n,s)=>{t.fillStyle=i[0],t.fillRect(0,0,n,s);let r=e*9187;const a=()=>(r=r*16807%2147483647,(r-1)/2147483646);for(let o=0;o<17;o++){t.globalAlpha=.35+a()*.5,t.fillStyle=i[1+Math.floor(a()*(i.length-1))],t.beginPath();const l=a()*n,c=a()*s,h=20+a()*150,d=6+a()*90;a()>.5?t.ellipse(l,c,h/2,d/2,a()*3,0,Mn):t.rect(l,c,h,d),t.fill()}t.globalAlpha=.18,t.strokeStyle="#fff",t.lineWidth=1.5;for(let o=0;o<12;o++)t.beginPath(),t.moveTo(a()*n,0),t.lineTo(a()*n,s),t.stroke()})}function zh(i,e){return kh(512,512,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s),t.strokeStyle=e,t.lineWidth=3,t.globalAlpha=.4;for(let r=-s;r<n+s;r+=26)t.beginPath(),t.moveTo(r,0),t.lineTo(r+s,s),t.stroke();t.globalAlpha=.8,t.lineWidth=5,t.strokeRect(24,24,n-48,s-48)})}function Ir(i,e,t,n,s,r,a,o=0){const l=new Ee(new qt(t,n),new Ot({map:e,toneMapped:!1}));l.position.set(s,r,a),l.rotation.y=o,i.add(l);const c=J(t+.12,n+.12,.045,j(2827808,.6,.2),s,r,a-.03,!1);c.rotation.y=o,i.add(c)}function Cs(i,e,t,n,s=16760437){i.add(It(.02,.02,.6,8,j(7166791,.5,.5),e,t+.3,n)),i.add(It(.14,.12,.05,16,j(7166791,.5,.5),e,t+.02,n));const r=new Ee(new on(.13,.2,.26,16,1,!0),new Hr({color:15983039,emissive:s,emissiveIntensity:.8,side:Ft}));r.position.set(e,t+.64,n),i.add(r)}function ts(i,e,t,n,s=1){const r=It(.16*s,.13*s,.28*s,12,j(14271392,.85),e,t+.14*s,n);i.add(r);const a=j(4088392,.75);for(let o=0;o<7;o++){const l=new Ee(new xn(.14*s,8,6),a),c=o/7*Mn;l.scale.set(.55,1.6,.55),l.position.set(e+Math.cos(c)*.12*s,t+(.35+o%3*.1)*s,n+Math.sin(c)*.12*s),l.rotation.z=Math.cos(c)*.7,l.rotation.x=Math.sin(c)*.7,l.castShadow=!0,i.add(l)}}function Jo(i,e,t,n,s,r=2.2,a=0){const o=new He,l=j(s,.95),c=yt(r,.24,.8,.07,l,0,.32,0),h=yt(r,.62,.2,.08,l,0,.58,-.31);o.add(c,h),o.add(yt(.2,.52,.82,.08,l,-r/2+.08,.4,0)),o.add(yt(.2,.52,.82,.08,l,r/2-.08,.4,0));for(let d=0;d<2;d++)o.add(yt(r*.4,.12,.68,.06,j(16777215,1,0,{color:s}),-r*.23+d*r*.46,.47,.03,!1));return o.position.set(e,t,n),o.rotation.y=a,i.add(o),o}function Qo(i,e,t,n,s=7164475){const r=new He;r.add(J(1.3,.08,.7,j(s,.5,.1),0,.37,0)),[-.55,.55].forEach(a=>[-.25,.25].forEach(o=>r.add(J(.06,.36,.06,j(3944228,.5),a,.18,o)))),r.position.set(e,t,n),i.add(r)}function jo(i,e,t,n,s=2.3,r=7100485,a=15919578){const o=new He;return o.add(yt(s,.3,2.05,.08,j(a,.95),0,.32,0)),o.add(yt(s,.18,1.3,.08,j(14207671,.95),0,.49,.2)),o.add(yt(s+.15,.85,.18,.08,j(r,.9),0,.55,-1)),[-.48,.48].forEach(l=>o.add(yt(s*.33,.16,.5,.08,j(16777215,.9),l,.58,-.63))),o.position.set(e,t,n),i.add(o),o}function el(i,e,t,n,s=7098681,r=6){const a=new He,o=new Ee(new on(.95,.95,.08,28),j(s,.4,.1));o.position.y=.75,o.castShadow=!0,a.add(o),a.add(It(.13,.24,.72,12,j(3944228,.5),0,.37,0));const l=j(10191461,.9);for(let c=0;c<r;c++){const h=c/r*Mn,d=new He;d.add(yt(.4,.1,.4,.05,l,0,.45,0)),d.add(yt(.4,.52,.08,.05,l,0,.62,-.18)),[-.14,.14].forEach(u=>[-.14,.14].forEach(f=>d.add(J(.04,.45,.04,j(5587503,.5),u,.22,f)))),d.position.set(Math.cos(h)*1.3,0,Math.sin(h)*1.3),d.rotation.y=-h+Math.PI/2,a.add(d)}return a.position.set(e,t,n),i.add(a),a}function mn(i,e,t,n,s,r,a,o=4012080,l=0){const c=new He,h=j(o,.45,.55);c.add(J(e,.07,.08,h,0,t/2,0)),c.add(J(e,.07,.08,h,0,-t/2,0)),c.add(J(.07,t,.08,h,-e/2,0,0)),c.add(J(.07,t,.08,h,e/2,0,0)),c.add(J(.045,t,.05,h,0,0,.01)),c.add(J(e,.05,.05,h,0,0,.01));const d=new Ee(new qt(e-.08,t-.08),Ko(a));return d.position.z=0,c.add(d),c.position.set(n,s,r),c.rotation.y=l,i.add(c),c}function Nr(i,e,t,n,s,r=0,a=4867131){const o=new He,l=new Ee(new qt(s,.72),Ko(11984864));l.position.y=.36,o.add(l),o.add(J(s,.06,.06,j(a,.35,.7),0,.74,0));for(let c=0;c<=5;c++)o.add(J(.04,.75,.04,j(a,.35,.7),-s/2+s/5*c,.38,0));o.position.set(e,t,n),o.rotation.y=r,i.add(o)}function ns(i,e,t,n,s=0,r=15787733){const a=new He;a.add(yt(.72,.13,1.8,.07,j(r,.95),0,.42,0));const o=yt(.72,.1,.95,.05,j(r,.95),0,.74,-.65);o.rotation.x=-.65,a.add(o),a.add(J(.7,.06,1.7,j(7295543,.7),0,.31,0)),[-.65,.65].forEach(l=>a.add(J(.06,.34,.06,j(7295543,.7),0,.16,l))),a.position.set(e,t,n),a.rotation.y=s,i.add(a)}function bo(i,e,t,n,s=15327180){const r=new He;r.add(It(.025,.025,2.2,8,j(6179382,.8),0,1.1,0,!1));const a=new Ee(new ui(1.35,.34,14,1,!0),j(s,.95,0,{side:Ft}));a.position.y=2.2,a.castShadow=!0,r.add(a),r.add(It(.26,.38,.1,12,j(5722186,.7),0,.05,0,!1)),r.position.set(e,t,n),i.add(r)}function w_(i,e){const n=[],s=[];for(let a=0;a<=6;a++){const o=a/6,l=e*(.18+Math.sin(Math.PI*Math.min(.96,o+.04))*.52)*(1-o*.82),c=-i*.34*o*o,h=i*o;if(n.push(-l,c,h,l,c,h),a<6){const d=a*2;s.push(d,d+1,d+2,d+1,d+3,d+2)}}const r=new Wt;return r.setAttribute("position",new pt(n,3)),r.setIndex(s),r.computeVertexNormals(),r}function T_(i,e,t,n,s=1,r=null){const a=new He,o=j(8479556,.95);let l=0;for(let u=0;u<8;u++){const f=It(.075*s,.115*s,.48*s,7,o,l,(.24+u*.44)*s,0,!1);f.rotation.z=-.035-u*.012,a.add(f),l+=(.025+u*.008)*s}const c=new He;c.position.set(l,3.7*s,0);const h=j(4352838,.82,0,{side:Ft}),d=j(5406034,.82,0,{side:Ft});for(let u=0;u<10;u++){const f=new He,_=u/10*Mn+u%2*.08,x=new Ee(w_((1.65+u%3*.22)*s,.52*s),u%3===0?d:h);x.rotation.x=-.15-u%4*.055,x.rotation.z=u%2?.06:-.06,x.castShadow=!0,f.add(x),f.rotation.y=_,c.add(f)}c.add(rn(.16*s,j(5130798,.95),0,.02,0,8));for(let u=0;u<3;u++)c.add(rn(.075*s,j(7035444,.9),Math.cos(u*2.1)*.14,-.12,Math.sin(u*2.1)*.14,8));return a.add(c),a.position.set(e,t,n),i.add(a),r&&r.push({object:c,phase:Math.random()*Mn,amp:.025}),a}function A_(i,e,t,n,s=1,r=null){const a=new He;a.add(It(.12*s,.22*s,1.9*s,8,j(7164216,.95),0,.95*s,0));const o=[j(4613193,.9),j(5403991,.9),j(4021057,.9)];for(let l=0;l<7;l++){const c=l/7*Mn,h=o[l%3],d=rn((.7+l%3*.15)*s,h,Math.cos(c)*.55*s,(2+l%2*.35)*s,Math.sin(c)*.55*s,12);a.add(d)}return a.add(rn(.95*s,o[1],0,2.5*s,0,12)),a.position.set(e,t,n),i.add(a),r&&r.push({object:a,phase:Math.random()*Mn,amp:.012}),a}function Xi(i,e,t,n,s,r=.6,a=.7){const o=j(4087875,.92),l=yt(s,a,r,Math.min(.25,a/3),o,e,t+a/2,n);return i.add(l),l}function Ur(i,e,t,n,s,r=14066522){i.add(yt(s,.14,.7,.05,j(5915697,1),e,t+.07,n));const a=j(r,.8);for(let o=0;o<Math.max(4,Math.floor(s*4));o++){const l=e-s/2+.22+(s-.44)/Math.max(1,Math.floor(s*4)-1)*o;i.add(rn(.055,a,l,t+.2+o%2*.03,n+(o%3-1)*.12,6)),i.add(It(.012,.012,.16,4,j(4942658,.8),l,t+.12,n+(o%3-1)*.12,!1))}}function tl(i,e,t){const n=new He,s=i.age<15,r=s?.76:1,a=j(i.skin,.85),o=j(i.top,.88),l=j(i.bottom,.9),c=j(i.hair,.92),h=j(3090724,.85),d=new He;if(d.scale.setScalar(r),[-.105,.105].forEach(T=>{const E=new Ee(new Zi(.085,.48,4,8),l);E.position.set(T,.42,0),E.castShadow=!0,d.add(E);const g=yt(.2,.12,.32,.05,h,T,.075,.06);d.add(g)}),i.style==="gown"){const T=new Ee(new on(.22,.43,1.02,16,1,!1),o);T.position.y=.47,T.castShadow=!0,d.add(T)}else d.add(yt(.4,.22,.26,.07,l,0,.74,0));const u=new Ee(new Zi(.2,.38,4,10),o);u.position.y=1.06,u.castShadow=!0,d.add(u),(i.style==="suit"||i.style==="tailored")&&(d.add(J(.37,.54,.08,j(15986146,.85),0,1.08,.16,!1)),d.add(J(.08,.54,.1,o,.02,1.08,.17,!1)),i.style==="suit"&&d.add(J(.08,.28,.08,j(8863809,.7),0,1.2,.18,!1)));const f=[];[-1,1].forEach(T=>{const E=new He;E.position.set(T*.26,1.27,0);const g=new Ee(new Zi(.065,.42,4,8),o);g.position.y=-.22,g.castShadow=!0,E.add(g);const b=rn(.065,a,0,-.47,0,8);E.add(b),E.rotation.z=T*.14,d.add(E),f.push({pivot:E,side:T,base:T*.14})});const _=It(.06,.07,.1,8,a,0,1.46,0,!1);d.add(_);const x=rn(s?.175:.17,a,0,1.65,0,18);d.add(x),[-.063,.063].forEach(T=>d.add(rn(.018,j(2366745,.5),T,1.68,.158,6))),d.add(rn(.016,j(9263690,.5),0,1.625,.168,6));const m=new Ee(new Ri(.035,.008,4,8,Math.PI),j(7620157,.5));m.position.set(0,1.59,.164),m.rotation.z=Math.PI,d.add(m);const p=new Ee(new xn(s?.185:.18,16,10,0,Mn,0,Math.PI*.58),c);if(p.position.set(0,1.692,-.008),p.castShadow=!0,d.add(p),i.style==="gown"){const T=rn(.09,c,0,1.76,-.11,10);d.add(T)}if(i.name==="Ivy"||i.name==="Celine"){const T=new Ee(new Zi(.055,.35,4,8),c);T.position.set(0,1.48,-.16),T.castShadow=!0,d.add(T)}d.position.y=0,n.add(d),n.scale.setScalar(s?1.06:1.1);const y=new Ot({color:new Ne(t),transparent:!0,opacity:.34,side:Ft,depthWrite:!1}),w=new Ee(new hs(.29,.34,28),y);w.rotation.x=-Math.PI/2,w.position.y=.035,n.add(w);const M=new Ee(new xn(.42,8,6),new Ot({transparent:!0,opacity:0,depthWrite:!1}));return M.position.y=.92,M.userData.memberIndex=e,n.add(M),n.userData.memberIndex=e,n.userData.ring=w,n.userData.person=d,n.userData.arms=f,n.userData.phase=e*1.7+Math.random()*2,n}function nl(i){const e=new He,t=new Fn({color:i.color,roughness:.25,metalness:.52,clearcoat:1,clearcoatRoughness:.16}),n=j(1514269,.32,.2),s=j(13351061,.24,.9),r=new Fn({color:2241081,roughness:.05,metalness:.5,transparent:!0,opacity:.8}),a=i.length||3.9,o=i.width||1.65,l=i.height||.6;e.add(yt(a,l,o,.21,t,0,.5,0)),e.add(yt(a*.53,i.cabinH||.55,o*.86,.18,i.kind==="suv"?t:r,-a*.02,.9,0)),i.kind!=="suv"?(e.add(yt(a*.47,.12,o*.88,.06,t,-a*.02,1.17,0)),e.add(J(.04,.5,o*.8,t,-a*.02,.92,0,!1))):e.add(yt(a*.53,.08,o*.87,.04,n,-a*.02,1.2,0,!1));const c=j(1053204,.7,.2),h=s;return[-a*.32,a*.32].forEach(d=>[-o/2,o/2].forEach(u=>{const f=new Ee(new on(.31,.31,.16,18),c);f.rotation.x=Math.PI/2,f.position.set(d,.31,u),f.castShadow=!0,e.add(f);const _=new Ee(new on(.17,.17,.17,12),h);_.rotation.x=Math.PI/2,_.position.set(d,.31,u),e.add(_)})),[-1,1].forEach(d=>{const u=yt(.13,.13,.3,.03,j(16773579,.2,0,{emissive:16764037,emissiveIntensity:1.5}),a/2-.04,.57,d*o*.29,!1);e.add(u),e.add(J(.06,.08,o*.55,s,a/2+.02,.37,0,!1))}),e.add(J(a*.4,.03,.03,s,0,.72,o/2+.01,!1)),i.kind==="luxury"&&(e.add(J(.52,.34,.05,s,-a*.2,.8,o/2+.03,!1)),e.add(It(.1,.1,.05,12,s,-a*.2,.62,o/2+.03,!1))),e}function Hh(i=1,e=14201460){const t=new He,n=new Fn({color:15855334,roughness:.28,metalness:.35,clearcoat:.7}),s=j(2568244,.4,.5),r=j(e,.4,.3),a=new Fn({color:8366007,roughness:.03,metalness:.6,transparent:!0,opacity:.7}),o=rn(1,n,0,1.4,0,20);o.scale.set(1.2,.72,.85),t.add(o);const l=rn(.6,a,0,1.38,.65,16);l.scale.set(.92,.65,.7),t.add(l),t.add(It(.12,.28,2.9,8,n,0,1.55,-2.1).rotateX(Math.PI/2)),t.add(J(.08,1.25,.05,r,0,1.95,-3.6,!1)),t.add(J(.06,.05,1.75,r,0,1.9,-3.5,!1));const c=j(3225402,.4,.6);[-.42,.42].forEach(u=>{t.add(It(.045,.045,2.65,8,c,0,.52,u).rotateZ(Math.PI/2)),[-.8,.8].forEach(f=>t.add(J(.05,.45,.05,c,f,.75,u,!1)))});const h=new He;h.position.set(0,2.35,0),h.add(It(.12,.12,.25,12,s));for(let u=0;u<4;u++){const f=J(.09,.025,3.4,s,0,0,1.7,!1);f.rotation.y=u/4*Mn,h.add(f)}t.add(h);const d=new He;d.position.set(.34,1.75,-3.62);for(let u=0;u<3;u++){const f=J(.04,1.3,.06,s,0,0,0,!1);f.rotation.z=u/3*Mn,d.add(f)}return t.add(d),t.scale.setScalar(i),t.userData.rotor=h,t.userData.tailRotor=d,t}function Gh(i,e,t,n,s=3.3){const r=It(s,s,.12,48,j(4540484,.9,.05),e,.08,t);i.add(r);const a=new Ee(new hs(s*.76,s*.83,48),new Ot({color:n,transparent:!0,opacity:.9}));a.rotation.x=-Math.PI/2,a.position.set(e,.15,t),i.add(a);const o=new Ot({color:15920866});i.add(J(.34,.02,1.7,o,e-.72,.155,t,!1)),i.add(J(.34,.02,1.7,o,e+.72,.155,t,!1)),i.add(J(1.15,.02,.34,o,e,.155,t,!1))}function R_(i,e,t,n,s,r,a=12576997){const o=[];for(let l=0;l<4;l++){const c=new Ot({color:a,transparent:!0,opacity:.2,side:Ft,depthWrite:!1}),h=new Ee(new hs(.15,.18,32),c);h.rotation.x=-Math.PI/2,h.position.set(e+(Math.random()-.5)*s*.7,t,n+(Math.random()-.5)*r*.7),i.add(h),o.push({mesh:h,phase:Math.random()*4,max:1.8+Math.random()})}return o}function Vh(i,e,t,n,s,r,a,o=2984593){const l=new He;l.add(J(s+2.2,.16,.95,a,0,.08,-r/2-.55,!1)),l.add(J(s+2.2,.16,.95,a,0,.08,r/2+.55,!1)),l.add(J(.95,.16,r+.15,a,-s/2-.62,.08,0,!1)),l.add(J(.95,.16,r+.15,a,s/2+.62,.08,0,!1)),l.add(J(s,.32,r,j(2381146,.65,.1),0,-.12,0,!1));const c=new Ee(new qt(s-.16,r-.16),new Fn({color:o,roughness:.08,metalness:.08,transparent:!0,opacity:.95,clearcoat:.95,clearcoatRoughness:.08,side:Ft}));c.rotation.x=-Math.PI/2,c.position.y=.205,c.receiveShadow=!0,l.add(c),l.add(J(s+.32,.16,.26,j(14207150,.85),0,.19,-r/2-.04,!1)),l.add(J(s+.32,.16,.26,j(14207150,.85),0,.19,r/2+.04,!1)),l.add(J(.26,.16,r+.1,j(14207150,.85),-s/2-.04,.19,0,!1)),l.add(J(.26,.16,r+.1,j(14207150,.85),s/2+.04,.19,0,!1)),l.add(J(s-.7,.03,.08,new Ot({color:9433832,transparent:!0,opacity:.55}),0,.05,r/2-.3,!1)),l.position.set(e,t,n),i.add(l);const h=R_(i,e,t+.23,n,s,r),d=new Vr(5228750,2.2,11,2);return d.position.set(e,t+.75,n),i.add(d),{group:l,ripples:h,water:c}}function C_(i,e){const t=new He;t.name=`estate-${i.id}`;const n=i.id==="ultra",s=i.id==="average",r=e.palette,a={people:[],rings:[],rotors:[],ripples:[],sway:[],lights:[]},o=new He,l=j(s?4999742:5131072,.96),c=It(n?22:20,n?19.2:17.5,1.2,64,l,0,-.62,0,!1);c.receiveShadow=!0,o.add(c);const h=new Ee(new Ti(n?21.8:19.8,64),j(r.lawn,.98));h.rotation.x=-Math.PI/2,h.position.y=.005,h.receiveShadow=!0,o.add(h);for(let M=0;M<12;M++){const T=M/12*Mn+.3,E=12+M%4*1.5,g=new Ee(new Ti(1.8+M%3*.65,7),j(r.lawnAlt,.98));g.rotation.x=-Math.PI/2,g.position.set(Math.cos(T)*E,.012,Math.sin(T)*E),g.scale.set(1.5,1,.75),g.receiveShadow=!0,o.add(g)}const d=j(r.stone,.86);if(o.add(J(n?27:22,.18,10,d,0,.1,6.8,!1)),!s)for(let M=0;M<5;M++){const T=J(n?25:20,.02,.05,j(r.stoneAlt,.9),0,.2,3.2+M*1.8,!1);o.add(T)}const u=j(s?11115910:9142123,.9);for(let M=0;M<4;M++)o.add(J(2.4-M*.12,.1,1.2,u,0,.07,12.5+M*1.35,!1));const f=J(s?6.6:8.4,.09,5.8,j(4868677,.94),s?-6.1:-8.5,.055,8.9,!1);f.rotation.y=s?.1:-.16,o.add(f),s?(Xi(o,-8.8,.1,7.3,.5,4,.5),Xi(o,8.8,.1,7.3,.5,4,.5)):(Xi(o,-12.5,.1,.8,4.2,.6,.7),Xi(o,13.3,.1,-2.2,.55,3.6,.55),Xi(o,10.8,.1,11.5,4.6,.55,.6),Xi(o,-9.7,.1,12.3,3,.55,.55)),(n?[[-14.5,-3],[15.5,11.5],[-15.4,12.6],[12.9,-12.7],[-7.5,-13.4],[17.6,-7]]:s?[[-10.5,1.2],[10.2,4.4],[-8.4,11.4],[7.5,12.1]]:[[-10.8,-5.3],[12.1,-7.2],[-12.2,11.9],[8.8,13.4]]).forEach(([M,T],E)=>{E%3===0||s?A_(o,M,0,T,s?.85:1,a.sway):T_(o,M,0,T,n?1:.86,a.sway)}),Ur(o,n?-14.1:-10.8,.04,10.8,2.8,s?13666923:14857052),Ur(o,n?14.5:10.3,.04,8.4,2.3,14394788),t.add(o),n?P_(t,i,r,a):s?D_(t,i,r,a):L_(t,i,r,a);const x=80,m=new Float32Array(x*3);for(let M=0;M<x;M++){const T=Math.random()*Mn,E=8+Math.random()*18;m[M*3]=Math.cos(T)*E,m[M*3+1]=.6+Math.random()*8,m[M*3+2]=Math.sin(T)*E}const p=new Wt;p.setAttribute("position",new Yn(m,3));const y=new dh(p,new Wo({color:16768941,size:.055,transparent:!0,opacity:.55,depthWrite:!1}));t.add(y),a.motes=y;const w=new Ot({color:16770480,transparent:!0,opacity:.35,side:Ft,depthWrite:!1});for(let M=0;M<5;M++){const T=new Ee(new qt(1.4+M*.25,.03),w);T.rotation.x=-Math.PI/2,T.position.set(3.5+M*.7,.255,8.2+M%2*.7),t.add(T)}return{root:t,anim:a}}function P_(i,e,t,n){const s=j(t.wall,.86),r=j(t.wallAlt,.82),a=j(2501419,.72,.1),o=j(7033144,.4,.65),l=j(9332037,.78),c=j(13547929,.7),h=j(t.stone,.88);Ko();const d=new He;d.position.set(0,0,-2);const u=Vh(i,5.4,.17,7.1,9.2,4.3,h);n.ripples.push(...u.ripples),ns(i,1.4,.2,10.1,.18),ns(i,2.4,.2,10.1,.18),bo(i,3,.2,10.4,15721680),d.add(J(18.8,.35,10.8,h,0,.18,0,!1)),d.add(J(17.5,.2,9.6,c,0,.43,0,!1));const f=.43;d.add(J(17.4,.18,9.5,c,0,f+.06,0,!1)),d.add(J(17.4,3,.28,s,0,f+1.5,-4.62,!1)),d.add(J(.28,3,9.4,s,-8.56,f+1.5,0,!1)),d.add(J(.28,3,9.4,s,8.56,f+1.5,0,!1)),d.add(J(17.7,.22,9.8,r,0,f+3,0,!1)),[-8.56,-4.4,0,4.4,8.56].forEach(E=>d.add(J(.18,3,.18,a,E,f+1.5,4.6,!1))),[-6.5,-3.2,6.5].forEach(E=>mn(d,2.3,2.55,E,f+1.48,4.62,10144203,3880237)),mn(d,1.6,2.55,3.1,f+1.48,4.62,10144203,3880237);const _=new Ee(new Zn(9.2,.035,.25),new Ot({color:16765325}));_.position.set(2.4,f+2.8,-1.8),d.add(_),d.add(J(5.3,.04,4,c,2,f+.18,-1.25,!1));const x=new Ee(new qt(4.8,3.3),new Ot({map:zh("#a39076","#e5d9c5"),toneMapped:!0}));x.rotation.x=-Math.PI/2,x.position.set(2.1,f+.21,-1.2),d.add(x),Jo(d,2.2,f+.2,-3.2,14602683,2.8,0),Qo(d,2.2,f+.2,-1.55,6047283),Ir(d,Dr(["#13332e","#c07c5b","#e2b86f","#e8dcc6"],3),2.15,1.15,2.2,f+1.82,-4.44),Cs(d,.2,f+.2,-3.9),ts(d,7.4,f+.2,-3.7,1.3),el(d,-5.7,f+.2,-1.5,5981746,6),d.add(J(2,.65,.36,l,-7.1,f+.52,-4.2));const m=4.15;d.add(J(14.4,.24,8.5,r,-1.2,m,-.4,!1)),d.add(J(14,.18,8.1,c,-1.2,m+.15,-.4,!1)),d.add(J(14,2.8,.25,s,-1.2,m+1.55,-4.35,!1)),d.add(J(.25,2.8,8.1,s,-8.35,m+1.55,-.4,!1)),d.add(J(.25,2.8,8.1,r,5.9,m+1.55,-.4,!1)),d.add(J(14.5,.22,8.7,s,-1.2,m+2.84,-.4,!1)),mn(d,5.2,2.2,-4,m+1.5,3.64,10144203,4142893),mn(d,2.9,2.2,2.7,m+1.5,3.64,10144203,4142893),d.add(J(4,.18,8,h,6.2,m+.16,-.4,!1)),Nr(d,6.2,m+.25,3.54,3.7,0,4800823),Nr(d,8.15,m+.25,-.4,7.6,Math.PI/2,4800823),jo(d,-4.4,m+.2,-2.3,2.75,6048570,15919578),Eo(d,-4.4,m+.19,-1.3,3.8,2,11574658),mn(d,2.5,1.8,-1.8,m+1.7,-4.44,11194320,4931635),Ir(d,Dr(["#211f26","#c98262","#f1d4a3"],9),1.45,1,-2.05,m+1.9,-4.45),Cs(d,-7.1,m+.2,-3.5),ns(d,6.2,m+.3,.6,Math.PI/2,15260356),bo(d,6.3,m+.3,-1.4,15326405);const p=7.35;d.add(J(9.4,.22,7.4,s,2,p,-.7,!1)),d.add(J(9,.16,7,c,2,p+.15,-.7,!1)),d.add(J(9,2.65,.24,r,2,p+1.5,-4.1,!1)),d.add(J(.24,2.65,7,s,-2.5,p+1.5,-.7,!1)),d.add(J(.24,2.65,7,r,6.5,p+1.5,-.7,!1)),d.add(J(10.2,.3,8,r,2,p+2.9,-.7,!1)),mn(d,5.2,2.1,2,p+1.45,2.8,10144203,4011566),d.add(J(2.3,.11,1,l,2.1,p+.82,-2.4)),[-1.3,-.75,-.2,.35].forEach(E=>d.add(J(.06,.72,.06,a,2.1+E,p+.45,-2.4,!1))),d.add(J(.52,.38,.04,j(988696,.3,.2),2.1,p+1.02,-3.9,!1)),Cs(d,.5,p+.2,-2.6);for(let E=0;E<7;E++)d.add(J(.08,.08,3.4,o,-2.4+E*.52,p+3.4,.1,!1));d.add(J(4.85,.08,.08,o,.16,p+3.4,-1.55,!1)),d.add(J(4.85,.08,.08,o,.16,p+3.4,1.75,!1));for(let E=0;E<4;E++)ts(d,-1.6+E*1.2,p+.2,1.1,.8);for(let E=0;E<9;E++)d.add(J(.08,2.8,.4,o,-8.3,m+1.55,-4.15+E*.95,!1));i.add(d),Gh(i,12.4,3,14201460,3.4);const y=Hh(.82,14201460);y.position.set(12.4,.2,3),y.rotation.y=1.28,i.add(y),n.rotors.push(y.userData.rotor,y.userData.tailRotor);const w=nl({color:15328214,length:4.25,width:1.78,height:.62,cabinH:.62,kind:"luxury"});w.position.set(-8.5,.11,8.8),w.rotation.y=-.28,i.add(w),i.add(J(2.4,.3,1.6,h,-4,.26,10.1,!1));const M=new Vr(16747843,3,7,2);M.position.set(-4,.9,10.1),i.add(M),n.lights.push({light:M,phase:0}),[[4.1,.2,4.7,-.35,"Aurelia"],[1,.2,3.4,-.15,"Julian"],[-2,4.35,2,-.2,"Celine"],[3.2,.2,9,.65,"Felix"]].forEach(([E,g,b,U,R],I)=>{const F=e.members.findIndex(L=>L.name===R);if(F<0)return;const z=tl(e.members[F],F,e.accent);z.position.set(E,g,b),z.rotation.y=U,i.add(z),n.people.push(z),n.rings.push(z.userData.ring)})}function Eo(i,e,t,n,s,r,a){const o=new Ee(new qt(s,r),j(a,1));o.rotation.x=-Math.PI/2,o.position.set(e,t+.02,n),i.add(o)}function L_(i,e,t,n){const s=j(t.wall,.86),r=j(t.wallAlt,.8),a=j(9133886,.8),o=j(3157032,.7,.1),l=j(t.stone,.88),c=j(13349262,.76),h=new He;h.position.set(-.5,0,-1.4);const d=Vh(i,6.4,.17,7.6,6.3,3.6,l,3116941);n.ripples.push(...d.ripples),ns(i,8.9,.2,9.6,Math.PI/2+.1),bo(i,9.2,.2,8.2,15193789),h.add(J(14.7,.3,9.4,l,0,.15,0,!1)),h.add(J(13.7,.18,8.4,c,0,.37,0,!1));const u=.37;h.add(J(13.6,2.9,.25,s,0,u+1.45,-4.1,!1)),h.add(J(.25,2.9,8.3,s,-6.68,u+1.45,0,!1)),h.add(J(.25,2.9,8.3,r,6.68,u+1.45,0,!1)),h.add(J(14,.2,8.7,s,0,u+2.9,0,!1)),[-6.68,-2,3.1,6.68].forEach(p=>h.add(J(.2,2.8,.2,o,p,u+1.42,4.15,!1))),mn(h,3.7,2.3,-3.8,u+1.42,4.17,11062475,4930351),mn(h,2,2.3,4.8,u+1.42,4.17,11062475,4930351);for(let p=0;p<15;p++)h.add(J(.055,2.7,.36,a,.4+p*.16,u+1.45,4.3,!1));Jo(h,1.6,u+.16,-2.9,13218970,2.7,0),Qo(h,1.6,u+.16,-1.4,6112818),Ir(h,Dr(["#292d2b","#c38a66","#e6c185","#ddcbb3"],11),2.1,1.25,1.6,u+1.62,-3.94),Eo(h,1.6,u+.2,-1.45,4.2,2.8,11113592),el(h,-4.5,u+.16,-1.2,7427131,5),ts(h,5.8,u+.16,-3.4,1.1),Cs(h,-6,u+.16,-3.4);const f=3.75;h.add(J(9.9,.2,7.5,r,3,f,-.4,!1)),h.add(J(9.5,.16,7.1,c,3,f+.14,-.4,!1)),h.add(J(9.6,2.55,.24,s,3,f+1.4,-3.95,!1)),h.add(J(.24,2.55,7.1,s,-1.8,f+1.4,-.4,!1)),h.add(J(.24,2.55,7.1,r,7.8,f+1.4,-.4,!1)),h.add(J(10.1,.22,7.7,s,3,f+2.68,-.4,!1)),mn(h,4.4,1.9,2,f+1.3,3.34,11062475,4930351),mn(h,1.9,1.9,6.1,f+1.3,3.34,11062475,4930351),h.add(J(2.3,.09,1,a,3.8,f+.79,-2.5)),[-1.25,.75].forEach(p=>h.add(J(.07,.7,.07,o,3.8+p,f+.42,-2.5,!1))),h.add(J(.55,.38,.04,j(1054232,.3,.2),3.8,f+1,-3.85,!1)),jo(h,5.8,f+.18,-1.7,2.4,7428676,16050907),Eo(h,5.8,f+.2,-.65,3.4,1.7,10850166),h.add(J(4.2,.16,6.9,l,-4,f+.12,-.4,!1)),Nr(h,-6.1,f+.2,-.4,6.7,Math.PI/2,5063223),Nr(h,-4,f+.2,3,4,0,5063223),ns(h,-4.1,f+.22,.8,Math.PI/2,14272427);for(let p=0;p<5;p++)ts(h,-5.6+p*.7,f+.2,2.5,.55);for(let p=0;p<4;p++)ts(h,.7+p*1.2,f+2.8,-.4,.75);i.add(h);const _=nl({color:2568507,length:4.35,width:1.82,height:.78,cabinH:.8,kind:"suv"});_.position.set(-7.8,.11,8.9),_.rotation.y=.32,i.add(_),Gh(i,11,2.1,13602676,2.5);const x=Hh(.56,13602676);x.position.set(11,.15,2.1),x.rotation.y=-1.35,i.add(x),n.rotors.push(x.userData.rotor,x.userData.tailRotor),ns(i,-7.2,.2,10,.4,13285274),[[4.8,.2,5.15,-.35,"Naomi"],[7,.2,5.7,-.2,"Marcus"],[9.1,.2,8.55,.55,"Ivy"],[-3,.2,4.9,.1,"Leo"]].forEach(([p,y,w,M,T])=>{const E=e.members.findIndex(b=>b.name===T);if(E<0)return;const g=tl(e.members[E],E,e.accent);g.position.set(p,y,w),g.rotation.y=M,i.add(g),n.people.push(g),n.rings.push(g.userData.ring)})}function D_(i,e,t,n){const s=j(14207920,.94),r=j(13154197,.94),a=j(15788248,.9),o=j(5982782,.9),l=j(8479557,.9),c=j(12164471,.88),h=new He;h.position.set(0,0,-1.4),h.add(J(9.7,.3,7.4,j(12759704,.94),0,.15,0,!1)),h.add(J(9.3,.18,7,c,0,.36,0,!1));const d=.36;h.add(J(9.3,2.8,.2,s,0,d+1.4,-3.42,!1)),h.add(J(.22,2.8,6.9,r,-4.55,d+1.4,0,!1)),h.add(J(.22,2.8,6.9,r,4.55,d+1.4,0,!1));const u=new Cr;u.moveTo(-5.25,0),u.lineTo(5.25,0),u.lineTo(0,2.35),u.closePath();const f=new ks(u,{depth:7.8,bevelEnabled:!1}),_=new Ee(f,o);_.position.set(0,d+2.72,-3.9),_.castShadow=!0,_.receiveShadow=!0,h.add(_);const x=J(5.7,.12,.15,a,-2.55,d+3.86,3.9,!1);x.rotation.z=-.418,h.add(x);const m=J(5.7,.12,.15,a,2.55,d+3.86,3.9,!1);m.rotation.z=.418,h.add(m),h.add(J(.6,1.6,.6,j(10191208,.9),2.8,d+3.85,-2.3)),mn(h,1.5,1.25,-2.8,d+1.5,3.44,10338241,15788248),mn(h,1.5,1.25,2.8,d+1.5,3.44,10338241,15788248),h.add(J(1.05,2.1,.12,j(4811378,.8),0,d+1.06,3.5,!1)),h.add(J(1.22,.12,.18,a,0,d+2.16,3.51,!1)),h.add(rn(.05,j(13214035,.4,.7),.36,d+1,3.59,8)),h.add(J(9.7,.17,2.2,j(11836021,.9),0,.22,4.55,!1)),[-4.4,4.4].forEach(g=>{h.add(It(.1,.12,2.5,8,a,g,1.45,5.15,!1)),h.add(J(.32,.12,.32,a,g,2.72,5.15,!1))});const p=J(10,.18,2.5,o,0,2.83,4.63,!1);p.rotation.x=.07,h.add(p);for(let g=0;g<3;g++)h.add(J(2.2,.14,.6,j(11772297,.9),0,.12+g*.12,5.8+g*.42,!1));h.add(J(1.4,.1,.5,l,-2.6,1.18,5.45)),[-.55,.55].forEach(g=>h.add(It(.018,.018,1.2,6,j(5918014,.5,.4),-2.6+g,1.65,5.4,!1)));const y=new Ee(new qt(4.1,2.8),new Ot({map:zh("#8e6d58","#d9c3a4"),toneMapped:!0}));y.rotation.x=-Math.PI/2,y.position.set(1.2,d+.2,-1.1),h.add(y),Jo(h,1.2,d+.17,-2.7,7241072,2.5,0),Qo(h,1.2,d+.17,-1.2,7295033),h.add(J(2.2,1.2,.08,j(1383197,.3,.3),1.2,d+1.7,-3.3,!1)),Ir(h,Dr(["#4c5a50","#d3a36d","#947662","#f0dfc1"],4),.9,.7,-2.8,d+1.85,-3.3),h.add(J(3.2,.95,.62,j(13616820,.8),3,d+.55,-3.04,!1)),h.add(J(3.2,.09,.75,j(6640710,.6),3,d+1.06,-3,!1)),h.add(J(.58,2,.58,j(13616820,.8),4,d+1.15,-3.04,!1)),el(h,-3,d+.17,-1.45,7755066,4);for(let g=0;g<4;g++)h.add(J(.45+g%2*.14,.38,.04,j(15129801,.8),-3.9+g*.5,d+1.75+g%2*.12,-3.3,!1));Cs(h,-4.05,d+.17,-2.4),ts(h,4.1,d+.17,1.1,.85),h.add(J(.18,2.2,3.5,r,-.6,d+1.3,-1.8,!1)),h.add(J(1,.1,3.3,r,-3.1,d+2.5,-1.7,!1)),jo(h,-3.2,d+.17,-2.2,1.75,8084548,15326660),i.add(h);const w=j(15261903,.9);for(let g=0;g<17;g++){const b=-8.2+g*1.025;b>-1.1&&b<1.1||i.add(J(.07,.78,.07,w,b,.42,9.9,!1))}i.add(J(17.3,.06,.06,w,0,.6,9.9,!1)),i.add(J(17.3,.06,.06,w,0,.28,9.9,!1)),i.add(It(.035,.045,1.15,6,j(5917242,.8),2.2,.62,11)),i.add(yt(.55,.3,.32,.05,j(4152163,.8),2.2,1.22,11)),[[-6.2,7.3],[-5.4,7.15]].forEach(([g,b],U)=>{const R=new He,I=j(2237478,.6);[-.42,.42].forEach(F=>{const z=new Ee(new Ri(.24,.028,6,16),I);z.position.set(F,.26,0),z.rotation.y=Math.PI/2,R.add(z)}),R.add(J(.05,.05,.85,j(U?9325387:4745845,.6,.2),0,.48,0)),R.add(J(.05,.35,.05,j(2895922,.6),-.4,.35,0)),R.position.set(g,0,b),R.rotation.y=.2,i.add(R)}),Ur(i,5.8,.04,7.1,3.2,11034456),Ur(i,-6.8,.04,5.4,2.2,13803598),i.add(yt(3.1,.18,1.7,.05,j(6113590,1),6.4,.08,10.4));for(let g=0;g<8;g++)i.add(rn(.1,j(g%2?4942659:7508059,.9),5.2+g%4*.8,.26,9.9+Math.floor(g/4)*.8,6));const M=nl({color:11449778,length:3.45,width:1.54,height:.56,cabinH:.62,kind:"compact"});M.position.set(-7,.11,8.4),M.rotation.y=.18,M.scale.setScalar(.92),i.add(M),i.add(It(.055,.065,2.6,8,j(5331548,.5,.3),8,1.3,7.9)),i.add(J(.05,.7,1.1,j(14275527,.9),7.85,2.55,7.9,!1));const T=new Ee(new Ri(.2,.035,6,12),j(11821625,.6,.4));T.rotation.x=Math.PI/2,T.position.set(7.7,2.1,7.9),i.add(T),[[-1.7,.4,4.35,-.2,"Elena"],[1.1,.4,4.5,.1,"Theo"],[-2.6,.4,5.2,.5,"Maya"],[1.9,.4,5.4,-.3,"Sam"]].forEach(([g,b,U,R,I])=>{const F=e.members.findIndex(L=>L.name===I);if(F<0)return;const z=tl(e.members[F],F,e.accent);z.position.set(g,b,U),z.rotation.y=R,i.add(z),n.people.push(z),n.rings.push(z.userData.ring)})}function I_(i,e){return C_(i,e)}function N_(i,e,t){i&&(i.people?.forEach((n,s)=>{const r=n.userData.phase;n.userData.person.position.y=Math.sin(e*1.25+r)*.012,n.userData.person.rotation.z=Math.sin(e*.8+r)*.008,n.userData.arms.forEach(({pivot:a,side:o,base:l},c)=>{a.rotation.z=l+Math.sin(e*1.05+r+c)*.035,a.rotation.x=Math.sin(e*.7+r+c*2)*.02}),n.userData.ring.material.opacity=.28+Math.sin(e*1.8+r)*.09,n.userData.ring.scale.setScalar(1+Math.sin(e*1.4+s)*.05)}),i.rings?.forEach(n=>{n?.material}),i.rotors?.forEach((n,s)=>{s%2===0?n.rotation.y+=t*8.5:n.rotation.z+=t*14}),i.sway?.forEach(({object:n,phase:s,amp:r})=>{n.rotation.z=Math.sin(e*.7+s)*r,n.rotation.x=Math.cos(e*.52+s)*r*.6}),i.ripples?.forEach(({mesh:n,phase:s,max:r})=>{const a=(e*.21+s)%1;n.scale.setScalar(1+a*r*4.5),n.material.opacity=.23*(1-a)}),i.motes&&(i.motes.rotation.y=e*.018,i.motes.position.y=Math.sin(e*.34)*.16),i.lights?.forEach(({light:n,phase:s})=>{n.intensity=2.2+Math.sin(e*8+s)*.45+Math.sin(e*13.7)*.2}))}function U_(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})})}const oi=Math.PI*2;function ze(i,e=.8,t=0,n={}){return new Hr({color:i,roughness:e,metalness:Math.min(t,.16),...n})}function Dc(i,e,t,n,s,r=0,a=0,o=0){const l=new Ee(new $r(i,e,t,3,n),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}function at(i,e,t,n,s=0,r=0,a=0){const o=new Ee(new Zn(i,e,t),n);return o.position.set(s,r,a),o.castShadow=!0,o.receiveShadow=!0,o}function Nt(i,e,t,n,s,r=0,a=0,o=0){const l=new Ee(new on(i,e,t,n),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}function gn(i,e,t=0,n=0,s=0,r=14){const a=new Ee(new xn(i,r,Math.max(6,Math.floor(r/2))),e);return a.position.set(t,n,s),a.castShadow=!0,a.receiveShadow=!0,a}function F_(i,e="#f4ead8",t="rgba(0,0,0,0)",n=700){const s=document.createElement("canvas");s.width=1024,s.height=256;const r=s.getContext("2d");r.clearRect(0,0,s.width,s.height),t!=="rgba(0,0,0,0)"&&(r.fillStyle=t,r.fillRect(0,0,s.width,s.height)),r.fillStyle=e,r.font=`800 ${n}px Manrope, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,s.width/2,s.height/2);const a=new Xo(s);return a.colorSpace=Qt,a.anisotropy=4,a}function O_(i){const e=new He,t=new Fn({color:i.id==="average"?15856627:16183784,roughness:.23,metalness:.38,clearcoat:.85}),n=ze(2238250,.4,.4),s=new Fn({color:2440006,metalness:.75,roughness:.02,transparent:!0,opacity:.88}),r=new Ee(new on(.72,.62,12.5,24),t);r.rotation.x=Math.PI/2,r.castShadow=!0,e.add(r);const a=gn(.72,t,0,0,6.45,20);a.scale.set(1,1,1.55),e.add(a);const o=new Ee(new on(.35,.62,2,18),t);o.rotation.x=Math.PI/2,o.position.set(0,.1,-7),e.add(o);for(let m=0;m<8;m++)[-1,1].forEach(p=>{const y=at(.05,.2,.28,s,p*.69,.25,-3.4+m*.85);e.add(y)});const l=gn(.55,s,0,.3,5.9,16);l.scale.set(1.1,.7,1.1),e.add(l);const c=new Cr;c.moveTo(-.9,0),c.lineTo(8.3,-1.15),c.lineTo(8.5,.3),c.lineTo(1.2,1.5),c.closePath();const h=new ks(c,{depth:.2,bevelEnabled:!1});[-1,1].forEach(m=>{const p=new Ee(h,t);p.rotation.x=-Math.PI/2,p.rotation.z=m<0?Math.PI:0,p.position.set(0,-.05,.4),p.scale.x=m,p.castShadow=!0,e.add(p);const y=new Ee(new on(.34,.4,1.3,16),t);y.rotation.x=Math.PI/2,y.position.set(m*3.4,-.35,1.7),y.castShadow=!0,e.add(y);const w=new Ee(new on(.26,.3,.06,16),n);w.rotation.x=Math.PI/2,w.position.set(m*3.4,-.35,2.37),e.add(w)});const d=new Cr;d.moveTo(0,0),d.lineTo(0,2.5),d.lineTo(2,.28),d.lineTo(2,0),d.closePath();const u=new ks(d,{depth:.14,bevelEnabled:!1}),f=new Ee(u,t);f.position.set(0,.2,-7),f.rotation.y=Math.PI/2,f.castShadow=!0,e.add(f);const _=at(5.3,.13,1,t,0,.1,-6.85);e.add(_);const x=new Vr(16769197,1,12,2);return x.position.set(0,-.4,4.2),e.add(x),e.userData={light:x},e}function wo(i,e,t,n,s,r=.42){const a=new He,o=new Ot({color:16773090,transparent:!0,opacity:r,depthWrite:!1});return[[0,0,0,1],[1.05,.14,.1,.78],[-1.15,-.08,.06,.68],[.35,.37,-.2,.72],[-.45,.28,.18,.6]].forEach(([c,h,d,u])=>{const f=gn(1,o,c,h,d,10);f.scale.set(1.25*u,.45*u,.9*u),f.castShadow=!1,a.add(f)}),a.position.set(e,t,n),a.scale.setScalar(s),i.add(a),a}function B_(){const i=document.createElement("canvas");i.width=512,i.height=512;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#1d4a74"),t.addColorStop(.32,"#477ba3"),t.addColorStop(.47,"#8fb3c8"),t.addColorStop(.54,"#f5c79d"),t.addColorStop(.6,"#e8b58f"),t.addColorStop(.76,"#c49378"),t.addColorStop(1,"#7a675a"),e.fillStyle=t,e.fillRect(0,0,512,512);const n=e.createRadialGradient(362,250,0,362,250,190);n.addColorStop(0,"rgba(255,248,222,0.95)"),n.addColorStop(.12,"rgba(255,230,180,0.6)"),n.addColorStop(.45,"rgba(255,214,158,0.18)"),n.addColorStop(1,"rgba(255,210,150,0)"),e.fillStyle=n,e.beginPath(),e.arc(362,250,190,0,Math.PI*2),e.fill();const s=new Xo(i);s.colorSpace=Qt;const r=new Ot({map:s,toneMapped:!1,depthWrite:!1,fog:!1}),a=new Ee(new qt(900,400),r);return a.position.set(0,16,-140),a.renderOrder=-10,a}function k_(i,e){const t=new He;t.name="flight-world",t.add(B_());const n=new He;t.add(n),new Ot({color:16771285,transparent:!0,opacity:.5,depthWrite:!1});for(let r=0;r<44;r++){const a=(Math.random()-.5)*110,o=-6.5+Math.random()*7,l=-72+Math.random()*64,c=2.4+Math.random()*5.4,h=wo(n,a,o,l,c,.22+Math.random()*.3);h.rotation.y=Math.random()*oi,h.userData.speed=.4+Math.random()*.8}for(let r=0;r<10;r++){const a=r%2?1:-1,o=wo(n,a*(32+Math.random()*32),1.5+Math.random()*5,-55+Math.random()*35,3.2+Math.random()*3.4,.2);o.rotation.y=Math.random()*oi,o.userData.speed=.3+Math.random()*.5}const s=O_(i);return s.traverse(r=>{r.castShadow=!1,r.receiveShadow=!1}),s.position.set(0,2.8,0),s.rotation.y=0,s.rotation.z=.045,t.add(s),{root:t,kind:"flight",destination:e,family:i,anim:{plane:s,clouds:n,time:0,update(r,a){this.time+=a,s.position.y=3.1+Math.sin(r*.9)*.12,s.rotation.z=.07+Math.sin(r*.7)*.025,n.children.forEach(o=>{o.position.z+=a*o.userData.speed*1.6,o.position.z>6&&(o.position.z=-78)})}}}}function z_(i,e){const t=ze(4938322,.9),n=Nt(17,15.5,1.5,64,t,0,-1.1,0);i.add(n);const s=new Ee(new Ti(16.6,64),ze(e[1],.91));s.rotation.x=-Math.PI/2,s.position.y=-.34,s.receiveShadow=!0,i.add(s);const r=new Ee(new hs(17.1,30,64),new Fn({color:3238515,roughness:.2,metalness:.08,transparent:!0,opacity:.75}));r.rotation.x=-Math.PI/2,r.position.y=-.4,i.add(r)}function To(i,e,t,n,s,r,a=16765323,o=4){const l=new Ot({color:a});for(let c=0;c<o;c++)for(let h=0;h<Math.max(2,Math.floor(e*2));h++){if((c+h)%3===0)continue;const d=new Ee(new qt(.16,.13),l);d.position.set(n-e/2+.22+h*.31,s-t/2+.38+c*.42,r),i.add(d)}}function H_(i,e,t){const n=ze(6846592,.72,.12),s=ze(7635080,.68,.12);t.forEach(([r,a,o,l,c,h],d)=>{const u=d%3===0?s:n,f=at(o,l,c,u,r,-.3+l/2,a);if(i.add(f),h){const _=at(o+.04,.16,c+.04,ze(e[2],.4,.2),r,-.28+l*.72,a);i.add(_)}To(i,o,l,r,-.3+l/2,a+c/2+.01,16765068,Math.max(2,Math.floor(l/2.2)))})}function G_(i,e,t,n=1){const s=new He,r=ze(9402457,.6,.2),a=ze(13935711,.5,.25,{emissive:11958832,emissiveIntensity:.15}),o=[{y:.15,spread:3.25,h:.25},{y:2.1,spread:2.25,h:.3},{y:5.5,spread:1.3,h:.28},{y:8.7,spread:.55,h:.22}];return[[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([l,c])=>{for(let h=0;h<3;h++){const d=o[h],u=o[h+1],f=new P(l*d.spread,d.y,c*d.spread),_=new P(l*u.spread,u.y,c*u.spread),x=_.clone().sub(f),m=x.length(),p=Nt(.1,.13,m,8,h===2?a:r,(f.x+_.x)/2,(f.y+_.y)/2,(f.z+_.z)/2);p.quaternion.setFromUnitVectors(new P(0,1,0),x.normalize()),s.add(p)}}),o.forEach(l=>{const c=new Ee(new Ri(l.spread,.08,6,22),a);c.rotation.x=Math.PI/2,c.position.y=l.y,s.add(c),s.add(at(l.spread*2.1,l.h,.22,a,0,l.y+.1,0)),s.add(at(.22,l.h,l.spread*2.1,a,0,l.y+.1,0))}),s.add(at(4.8,.32,4.8,a,0,.42,0)),s.add(at(3.2,.25,3.2,a,0,2.35,0)),s.add(Nt(.1,.24,4.2,8,a,0,11,0)),s.add(Nt(.04,.06,2.4,6,a,0,14.2,0)),s.add(gn(.11,ze(16766348,.2,.1,{emissive:16756292,emissiveIntensity:2}),0,15.4,0,8)),s.position.set(e,-.3,t),s.scale.setScalar(n),i.add(s),s}function V_(i,e,t,n=1){const s=new He,r=ze(13087636,.85),a=ze(6511184,.7),o=ze(13938794,.4,.3);s.add(at(2,10.5,2,r,0,5.25,0));for(let f=0;f<4;f++)s.add(at(.12,9.2,.12,a,-.85+f*.56,5.2,1.02));s.add(at(2.1,.25,2.1,o,0,10.55,0)),s.add(at(1.8,1.7,1.8,r,0,11.4,0));const l=new Ee(new Ti(.62,24),ze(15982510,.6,.1,{emissive:15779439,emissiveIntensity:.25}));l.position.set(0,11.45,.93),s.add(l);const c=new He;c.position.set(0,11.45,.96);const h=at(.05,.43,.02,a,0,.18,0),d=at(.32,.05,.02,a,.13,0,0);c.add(h,d),s.add(c);const u=new Ee(new ui(1.35,2.3,4),a);return u.position.y=13.4,u.rotation.y=Math.PI/4,s.add(u),s.add(Nt(.03,.05,1.3,6,o,0,15,0)),s.position.set(e,-.3,t),s.scale.setScalar(n),i.add(s),{group:s,hands:c}}function W_(i,e,t,n=1){const s=new He,r=ze(14209216,.5,.4),a=new Ee(new Ri(4.1,.1,6,48),r);a.position.y=4.5,a.rotation.y=.1,s.add(a);for(let o=0;o<16;o++){const l=o/16*oi,c=at(.05,4,.05,r,0,2.5,0);c.position.set(Math.cos(l)*2,4.5+Math.sin(l)*2,0),c.rotation.z=l+Math.PI/2,s.add(c);const h=new Ee(new xn(.22,8,6),ze(15326406,.7));h.position.set(Math.cos(l)*4.1,4.5+Math.sin(l)*4.1,0),h.scale.z=.65,s.add(h)}return[-2.2,2.2].forEach(o=>{const l=Nt(.08,.14,5.5,8,r,o*.7,2.2,0);l.rotation.z=o>0?-.36:.36,s.add(l)}),s.position.set(e,-.3,t),s.scale.setScalar(n),i.add(s),{group:s,wheel:a,pods:s.children.filter(o=>o.geometry?.type==="SphereGeometry")}}function X_(i,e,t,n=1){const s=new He,r=ze(10135210,.35,.3),a=ze(14148324,.2,.3,{emissive:3557711,emissiveIntensity:.2}),o=[[2.2,8,0],[1.55,7,8],[1.1,6.5,15],[.72,5.2,21.5],[.4,4.5,26.7]];let l=-.3;return o.forEach(([c,h,d],u)=>{s.add(Nt(c*1.02,c,h,8,u===4?a:r,0,l+h/2,0)),l+=h,s.add(Nt(c*1.18,c*1.18,.12,8,ze(16765580,.4,.2,{emissive:13145151,emissiveIntensity:.55}),0,l,0))}),s.add(Nt(.05,.18,3.4,6,r,0,l+1.7,0)),s.add(gn(.11,ze(16770209,.2,.1,{emissive:16754487,emissiveIntensity:2}),0,l+3.5,0,8)),s.position.set(e,0,t),s.scale.setScalar(n),i.add(s),s}function $_(i,e,t,n=1){const s=new He,r=ze(8294034,.4,.4);[-3.4,0,3.4].forEach((o,l)=>{const c=Dc(2,10.5,2.2,.12,r,o,5.2,0);s.add(c);for(let h=0;h<10;h++)s.add(at(2.05,.06,2.24,ze(8889764,.5,.2,{emissive:2574921,emissiveIntensity:.2}),o,1.1+h,0));s.add(at(2.06,.1,2.26,ze(13150574,.4,.4),o,10.8,0))});const a=Dc(9.4,.7,2.8,.28,ze(5004117,.6),0,11.2,-.1);s.add(a);for(let o=0;o<7;o++)s.add(gn(.55,ze(4814164,.9),-3.5+o*1.15,11.75,.3,8));return s.position.set(e,-.3,t),s.scale.setScalar(n),i.add(s),s}function q_(i,e,t,n=1){const s=new He,r=ze(13195849,.6,.3),a=ze(14707280,.5,.4,{emissive:6100495,emissiveIntensity:.25}),o=[[3,.2],[2.1,4],[1.35,7.4],[.75,10.2],[.32,12.2]];return[[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([l,c])=>{for(let h=0;h<o.length-1;h++){const[d,u]=o[h],[f,_]=o[h+1],x=new P(l*d,u,c*d),m=new P(l*f,_,c*f),p=m.clone().sub(x),y=p.length(),w=Nt(.055,.09,y,6,h%2?a:r,(x.x+m.x)/2,(x.y+m.y)/2,(x.z+m.z)/2);w.quaternion.setFromUnitVectors(new P(0,1,0),p.normalize()),s.add(w)}}),o.forEach(([l,c],h)=>{s.add(at(l*2.2,.09,l*2.2,a,0,c,0)),h<3&&(s.add(at(l*2,.12,.16,r,0,c,0)),s.add(at(.16,.12,l*2,r,0,c,0)))}),s.add(Nt(.06,.12,3.2,6,r,0,14,0)),s.add(gn(.14,ze(16765566,.2,.1,{emissive:16752439,emissiveIntensity:2}),0,15.7,0,8)),s.position.set(e,-.3,t),s.scale.setScalar(n),i.add(s),s}function Y_(i,e,t,n=1){const s=new He,r=ze(9080980,.5,.15),a=ze(14727288,.3,.2,{emissive:10710830,emissiveIntensity:.45});return s.add(at(4.6,8,4.6,r,0,3.7,0)),s.add(at(3.4,5.2,3.4,r,0,10.3,0)),s.add(at(2.2,4.1,2.2,r,0,14.8,0)),s.add(at(1.2,3,1.2,a,0,18.3,0)),s.add(Nt(.12,.3,4.5,8,r,0,22,0)),s.add(Nt(.03,.07,3,6,r,0,25.7,0)),[2,4,6].forEach(o=>{s.add(at(4.62,.08,4.62,a,0,o,0))}),To(s,4.2,7.5,0,3.7,2.31,16766875,5),To(s,3,4.8,0,10.3,1.71,16766875,4),s.position.set(e,-.3,t),s.scale.setScalar(n),i.add(s),s}function Z_(i,e,t,n=1){const s=new He,r=ze(14866372,.8),a=ze(11901564,.7);s.add(at(7.2,5.4,7.2,r,0,2.7,0)),s.add(at(7.35,.35,7.35,a,0,5.35,0)),s.add(at(3.2,4,5.2,r,0,6.7,0));const o=new Ee(new ui(2.7,3.2,4),a);o.position.y=10.3,o.rotation.y=Math.PI/4,s.add(o);for(let l=0;l<14;l++){const c=-3+l%7*1,h=l<7?-3.3:3.3;s.add(Nt(.04,.1,1.8+l%3*.5,4,a,c,6.4+l%3*.25,h))}for(let l=0;l<5;l++)s.add(Nt(.04,.09,2.3,4,a,-2+l*1,6.6,3.7));return s.add(at(1.1,2.2,.25,ze(4932153,.8),0,4,3.66)),s.position.set(e,-.3,t),s.scale.setScalar(n),i.add(s),s}function K_(i,e,t,n=1){const s=new He,r=ze(14207404,.85),a=ze(7179152,.3,.16);s.add(at(5.4,2,5.4,r,0,1,0)),s.add(at(4.6,2.6,4.6,r,0,3.3,0)),s.add(at(3.1,3.4,3.1,a,0,6.3,0)),s.add(at(3.3,.25,3.3,r,0,8,0));const o=new Ee(new xn(2.3,20,10,0,oi,0,Math.PI/2),r);return o.position.y=8.1,s.add(o),s.add(gn(.18,ze(13477230,.3,.7),0,10.5,0,8)),s.position.set(e,-.3,t),s.scale.setScalar(n),i.add(s),s}function J_(i,e){const t=new He,n=ze(7302479,.95);for(let l=0;l<6;l++){const c=new Ee(new xn(7+l%3*2,18,10),n);c.position.set(-17+l*7,-1,-17-l%2*2),c.scale.set(1.5,.34,.8),c.receiveShadow=!0,t.add(c)}i.add(t);const s=new Ee(new qt(9.5,2.1),new Ot({map:F_("HOLLYWOOD","#f3e9d5"),transparent:!0,toneMapped:!1}));s.position.set(-4,6.3,-13.1),s.rotation.x=-.08,i.add(s);const r=at(9.8,2.35,.18,ze(14143419,.9),-4,6.3,-13.25);i.add(r);const a=ze(7296573,.9),o=ze(4350534,.85);[[-9.5,2.5],[9.4,2],[-7.2,-5.4],[7.8,-4.8]].forEach(([l,c],h)=>{const d=new He;for(let u=0;u<6;u++)d.add(Nt(.09,.15,.7,6,a,u*.05,.35+u*.64,0));for(let u=0;u<8;u++){const f=new Ee(new ui(.14,2.2,3),o),_=u/8*oi;f.position.set(Math.cos(_)*.7,4.15,Math.sin(_)*.7),f.rotation.z=Math.PI/2,f.rotation.y=-_,f.scale.set(.5,1,.25),d.add(f)}d.position.set(l,-.3,c),d.scale.setScalar(h%2?1.1:.9),i.add(d)})}function Q_(i,e){const t=ze(7175024,.95);for(let r=0;r<5;r++){const a=new Ee(new ui(6+r*1.2,12+r%3*4,5),t);a.position.set(-18+r*9,3.5,-16-r%2*4),a.rotation.y=r*.6,i.add(a);const o=new Ee(new ui((6+r*1.2)*.34,(12+r%3*4)*.3,5),ze(15262421,.8));o.position.set(-18+r*9,8.4+r%3*.6,-16-r%2*4),o.rotation.y=r*.6,i.add(o)}const n=new Ee(new Ti(13,32),ze(4486011,.2,.1,{transparent:!0,opacity:.8}));n.rotation.x=-Math.PI/2,n.position.set(0,-.2,5.5),n.scale.set(1,.6,1),i.add(n);const s=new He;s.add(at(2.2,5.5,2.2,ze(13813165,.85),0,2.5,0)),s.add(Nt(.02,.7,3,4,ze(4938324,.7),0,6.7,0)),s.add(gn(.08,ze(14069092,.3,.7),0,8.3,0,6)),s.position.set(7.5,-.3,-3.2),i.add(s)}function j_(i){const e=new He;e.name="destination-world";const t=i.palette,n={kind:"city",destination:i,elapsed:0,eyes:[]};z_(e,t);for(let h=0;h<16;h++){const d=h/16*oi,u=wo(e,Math.cos(d)*24,-4-h%3,Math.sin(d)*24,5+h%4*2,.18);u.rotation.y=d}H_(e,t,{singapore:[[-11,-2,2.3,7,3,1],[10,-4,3,9,3,0],[-9,7,2,5,2,0],[8,8,2,4.5,2,1],[12,3,1.5,6,2,0]],tokyo:[[-10,-3,2.4,6,2.4,1],[-7,6,2,4,2,0],[9,-4,2.8,8,2.6,1],[12,5,2,5,2,0],[7,8,1.6,3.8,2,0]],losangeles:[[-11,-1,2.5,4.5,2.5,0],[-8,7,1.7,3,2,1],[10,-2,3,6,2.8,1],[8,8,2,3.6,2,0]],doha:[[-10,2,2,6,2,1],[-7,-4,2.5,4,2.4,0],[10,-1,2.4,7,2.3,1],[8,8,2,4,2,0]],dubai:[[-11,2,2.4,7,2.5,1],[-8,-5,2,5,2,0],[11,-3,2.7,8,2.7,1],[9,7,2.2,5.5,2.2,0],[13,4,1.8,4,1.8,0]],london:[[-10,-1,3.5,4,3,0],[-7,7,2.2,3.5,2.2,1],[9,-4,3,5,2.8,0],[12,5,2.4,4,2.2,0]],paris:[[-10,0,3.6,4,3.2,0],[-8,8,2.2,3.5,2.2,0],[10,-3,3.4,4.5,3,1],[12,6,2.2,3.8,2.2,0]],milan:[[-10,0,3.4,4.5,3,0],[-8,8,2.2,3.6,2,1],[10,-4,3,5,2.8,0],[12,5,2.4,4,2.2,0]],newyork:[[-11,-2,2.6,6,2.6,1],[-7,6,2.4,5,2.4,0],[10,-3,3,7,3,1],[13,5,2.2,5,2.2,0],[7,9,1.8,4,1.8,0]],zurich:[[-9,4,2.8,4,2.6,0],[10,0,2.4,4.5,2.2,1],[12,7,2,3.4,2,0]]}[i.id]||[]);const r=ze(7033144,.9),a=[ze(5206869,.9),ze(6192989,.9),ze(4350792,.9)];for(let h=0;h<24;h++){const d=h/24*oi+h%3*.08,u=13.4+h*7%5*.55,f=.9+h*5%4*.26,_=new He;_.add(Nt(.06,.09,f*.75,6,r,0,f*.375,0));const x=gn(.42+h%3*.08,a[h%3],0,f*.85,0,8);x.scale.set(1,1.18,1),_.add(x),h%4===0&&_.add(gn(.28,a[(h+1)%3],.28,f*.68,.1,7)),_.position.set(Math.cos(d)*u,-.34,Math.sin(d)*u),_.rotation.y=d,e.add(_)}if(i.id==="singapore"&&(n.landmark=$_(e,0,-1.2,1)),i.id==="tokyo"&&(n.landmark=q_(e,0,-1.8,1)),i.id==="losangeles"&&J_(e),i.id==="doha"&&(n.landmark=K_(e,0,-1.8,1)),i.id==="dubai"&&(n.landmark=X_(e,0,-1.8,.52)),i.id==="london"){const h=V_(e,0,-2,1);n.landmark=h.group,n.clock=h.hands;const d=W_(e,9.5,4,.9);n.eye=d}i.id==="paris"&&(n.landmark=G_(e,0,-1.5,.76)),i.id==="milan"&&(n.landmark=Z_(e,0,-1.8,1)),i.id==="newyork"&&(n.landmark=Y_(e,0,-2.2,.62)),i.id==="zurich"&&Q_(e);const o=new He;o.add(at(7,.25,1.8,ze(10258282,.8),0,0,10.5));for(let h=0;h<4;h++)o.add(Nt(.06,.08,1.1,6,ze(5524288,.5,.3),-3.2+h*2.1,.5,10.5));e.add(o),[[-8.8,8.9],[8.8,8.9]].forEach(([h,d])=>{const u=new Vr(16761717,2.2,13,2);u.position.set(h,2.2,d),e.add(u),e.add(Nt(.04,.06,2.6,6,ze(4012596,.5,.4),h,1.3,d)),e.add(gn(.16,ze(16765323,.4,0,{emissive:16756053,emissiveIntensity:2}),h,2.7,d,8))}),e.add(new uf(16767408,.4));const l=new Pr(16766628,1.9);l.position.set(24,17,28),e.add(l);const c=new Pr(10470622,.7);return c.position.set(-20,11,-24),e.add(c),{root:e,kind:"destination",destination:i,anim:{...n,update(h,d){this.elapsed+=d,this.clock&&(this.clock.rotation.z=-h*.06),this.eye&&(this.eye.wheel.rotation.z=h*.08,this.eye.pods.forEach((u,f)=>{const _=f/16*oi+h*.08;u.position.x=Math.cos(_)*4.1,u.position.y=4.5+Math.sin(_)*4.1})),e.position.y=Math.sin(h*.3)*.04}}}}function ev(i){return j_(i)}function Ic(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})})}const Nc={ultra:{lawn:6124615,lawnAlt:6848590,wall:15853526,wallAlt:14996923,stone:13943460,stoneAlt:12956308},rich:{lawn:5928005,lawnAlt:6651980,wall:14337704,wallAlt:13217159,stone:13350802,stoneAlt:12231807},average:{lawn:7111758,lawnAlt:7769684,wall:14207920,wallAlt:13154197,stone:11443328,stoneAlt:10456434}},Uc={sunset:{top:new Ne(3296091),horizon:new Ne(15970941),sun:new Ne(16764559),fog:14132348,sunLight:16761478,sunIntensity:2.55,hemiSky:16766381,hemiGround:3426111,hemiIntensity:1.1,exposure:1.03},day:{top:new Ne(4879768),horizon:new Ne(16242605),sun:new Ne(16773319),fog:14271650,sunLight:16773328,sunIntensity:2.7,hemiSky:13624304,hemiGround:4149053,hemiIntensity:1.25,exposure:1},dusk:{top:new Ne(1385528),horizon:new Ne(12283750),sun:new Ne(16756848),fog:10186345,sunLight:16756340,sunIntensity:1.65,hemiSky:10270415,hemiGround:2634029,hemiIntensity:.85,exposure:1.08},travel:{top:new Ne(6129318),horizon:new Ne(16767153),sun:new Ne(16773057),fog:14924179,sunLight:16768946,sunIntensity:2.9,hemiSky:14674415,hemiGround:6188128,hemiIntensity:1.35,exposure:1.02},destination:{top:new Ne(4154242),horizon:new Ne(16173466),sun:new Ne(16769976),fog:14267023,sunLight:16765600,sunIntensity:2.85,hemiSky:16769216,hemiGround:4478280,hemiIntensity:1.7,exposure:1.16}};function tv(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function nv(){const i={topColor:{value:new Ne(3296091)},horizonColor:{value:new Ne(15970941)},sunColor:{value:new Ne(16764559)},sunDir:{value:new P(-.55,.22,.58).normalize()},haze:{value:.2}},e=new fi({uniforms:i,side:nn,depthWrite:!1,vertexShader:`
      varying vec3 vPos;
      void main() {
        vPos = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 sunColor;
      uniform vec3 sunDir;
      uniform float haze;
      varying vec3 vPos;
      void main() {
        float h = clamp(vPos.y * 0.9 + 0.08, -0.1, 1.0);
        vec3 col = mix(horizonColor, topColor, smoothstep(0.0, 0.72, h));
        float sunDot = max(dot(normalize(vPos), normalize(sunDir)), 0.0);
        float disk = pow(sunDot, 900.0);
        float glow = pow(sunDot, 8.0) * 0.22 + pow(sunDot, 70.0) * 0.45;
        col += sunColor * glow;
        col += sunColor * disk * 1.7;
        float band = smoothstep(0.0, 0.08, h) * (1.0 - smoothstep(0.15, 0.55, h));
        col += horizonColor * band * haze;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),t=new Ee(new xn(160,40,22),e);return t.frustumCulled=!1,t.renderOrder=-20,{mesh:t,uniforms:i}}function iv(){const e=new Float32Array(270);for(let s=0;s<90;s++){const r=Math.random()*Math.PI*2,a=5+Math.random()*55;e[s*3]=Math.cos(r)*a,e[s*3+1]=1+Math.random()*14,e[s*3+2]=Math.sin(r)*a}const t=new Wt;t.setAttribute("position",new Yn(e,3));const n=new Wo({color:16767136,size:.1,transparent:!0,opacity:.6,depthWrite:!1,sizeAttenuation:!0});return new dh(t,n)}class sv{constructor(e){this.canvas=e,this.renderer=new h_({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Qt,this.renderer.toneMapping=Do,this.renderer.toneMappingExposure=1.03,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ws,this.scene=new uu,this.scene.fog=new Go(14132348,.0048),this.camera=new pn(33,1,.1,340),this.camera.position.set(26,16,32),this.controls=new u_(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=76,this.controls.minPolarAngle=.6,this.controls.maxPolarAngle=1.42,this.controls.rotateSpeed=.5,this.controls.zoomSpeed=.7,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.28,this.controls.target.set(0,3.5,0),this.clock=new mf,this.time=0,this.mode="select",this.family=null,this.homeRoot=null,this.homeAnim=null,this.travel=null,this.tween=null,this.mood="sunset",this.raycaster=new pf,this.pointer=new oe,this.members=[],this.onSelectMember=null,this.running=!1,this._buildStage(),this._bindResize(),this.resize()}_buildStage(){const e=nv();this.sky=e,this.scene.add(e.mesh);const t=new Fn({color:3695724,roughness:.24,metalness:.16,transparent:!0,opacity:.9}),n=new Ee(new qt(500,500),t);n.rotation.x=-Math.PI/2,n.position.y=-.9,n.receiveShadow=!0,this.water=n,this.scene.add(n);const s=new He,r=new Ot({color:6186584});for(let o=0;o<8;o++){const l=o/8*Math.PI*2+.3,c=55+o%3*8,h=new Ee(new xn(8+o%3*3,16,8),r);h.position.set(Math.cos(l)*c,-4.4,Math.sin(l)*c),h.scale.set(1.8,.28,1),s.add(h)}this.scene.add(s),this.far=s,this.hemi=new cf(16766381,3426111,1.1),this.scene.add(this.hemi),this.sun=new Pr(16761478,2.55),this.sun.position.set(-22,26,15),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(window.innerWidth>900?2048:1024,window.innerWidth>900?2048:1024),this.sun.shadow.camera.left=-27,this.sun.shadow.camera.right=27,this.sun.shadow.camera.top=27,this.sun.shadow.camera.bottom=-24,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=90,this.sun.shadow.bias=-35e-5,this.sun.shadow.normalBias=.025,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new Pr(8894159,.65),this.fill.position.set(18,12,-18),this.scene.add(this.fill),this.motes=iv(),this.scene.add(this.motes);const a=new Ot({color:16768942,transparent:!0,opacity:.22,side:Ft,depthWrite:!1});this.glints=new He;for(let o=0;o<18;o++){const l=new Ee(new qt(1.6+Math.random()*4.5,.035),a);l.rotation.x=-Math.PI/2,l.position.set((Math.random()-.5)*70,-.87,(Math.random()-.5)*70),this.glints.add(l)}this.scene.add(this.glints)}_bindResize(){this.onResize=()=>this.resize(),window.addEventListener("resize",this.onResize,{passive:!0}),window.addEventListener("orientationchange",this.onResize,{passive:!0})}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e/t<.75?42:33,this.camera.updateProjectionMatrix();const s=e/t<.82;this.mode==="select"&&this.controls.target.set(0,s?4.6:3.6,0),this.tween&&(this.tween=null),(this.mode==="select"||this.mode==="home")&&(this.controls.autoRotate||this._frameEstate(!1))}_cameraFor(e){const n=this.camera.aspect<.85,s=window.innerWidth<760,r=n?1.44:s?1.08:1;return e==="select"?{pos:new P(31*r,18*r,38*r),target:new P(-1.4,n?3.9:3.1,0)}:e==="home"?{pos:new P(28*r,16.4*r,35*r),target:new P(-1,n?3.9:3.3,0)}:e==="flight"?{pos:new P(18*r,9.4*r,25*r),target:new P(0,3.3,0)}:e==="destination"?{pos:new P(30*r,18*r,38*r),target:new P(0,n?5:4.4,0)}:{pos:new P(25,15,31),target:new P(0,3.5,0)}}_frameEstate(e=!0){const t=this._cameraFor(this.mode==="select"?"select":"home");this._moveCamera(t.pos,t.target,e?1.1:0)}_moveCamera(e,t,n=1.1){if(n<=0){this.camera.position.copy(e),this.controls.target.copy(t),this.controls.update();return}this.tween={p0:this.camera.position.clone(),p1:e.clone(),t0:this.controls.target.clone(),t1:t.clone(),elapsed:0,duration:n},this.controls.enabled=!1}setFamily(e,t="select",n=!1){this.homeRoot&&(this.scene.remove(this.homeRoot),U_(this.homeRoot),this.homeRoot=null,this.homeAnim=null,this.members=[]),this.family=e,this.mode=t;const s=I_(e,{palette:Nc[e.id]||Nc.average});this.homeRoot=s.root,this.homeAnim=s.anim,this.scene.add(this.homeRoot),this.members=s.anim.people||[],this.controls.autoRotate=t==="select",this.controls.autoRotateSpeed=.24,this._setGroundVisible(!0),this.controls.minDistance=t==="select"?13:10,this.controls.maxDistance=t==="select"?76:62,this.mood="sunset",this._applyMood("sunset");const r=this._cameraFor(t);n?this._moveCamera(r.pos,r.target,1.1):(this.camera.position.copy(r.pos),this.controls.target.copy(r.target),this.controls.update())}setMode(e,t=!0){this.mode=e,this.controls.autoRotate=e==="select";const n=this._cameraFor(e);this._moveCamera(n.pos,n.target,t?1.2:0)}_applyMood(e){const t=Uc[e]||Uc.sunset;this.sky.uniforms.topColor.value.copy(t.top),this.sky.uniforms.horizonColor.value.copy(t.horizon),this.sky.uniforms.sunColor.value.copy(t.sun),this.sky.uniforms.haze.value=e==="dusk"?.32:.2,this.scene.fog.color.setHex(t.fog),this.sun.color.setHex(t.sunLight),this.sun.intensity=t.sunIntensity,this.hemi.color.setHex(t.hemiSky),this.hemi.groundColor.setHex(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.renderer.toneMappingExposure=t.exposure,e==="dusk"?(this.sun.position.set(-18,10,17),this.scene.fog.density=.007):(this.sun.position.set(-22,26,15),this.scene.fog.density=.0048),this.mood=e}setDayMood(e){const t=["sunset","day","dusk"],n=t[(Math.max(1,e)-1)%t.length];this._applyMood(n)}get isTraveling(){return!!this.travel}showFlight(e,t){this.homeRoot&&(this.homeRoot.visible=!1),this._setGroundVisible(!1),this._clearTravel();const n=k_(e,t);n.anim.plane.rotation.y=-.62,n.anim.plane.position.set(0,3.2,-1),this.travel=n,this.scene.add(n.root),this.mode="flight",this.controls.autoRotate=!1,this._applyMood("travel");const s=this._cameraFor("flight");this._moveCamera(s.pos,s.target,1.4)}showDestination(e){this._setGroundVisible(!1),this.travel&&(this.scene.remove(this.travel.root),Ic(this.travel.root),this.travel=null);const t=ev(e);this.travel=t,this.scene.add(t.root),this.mode="destination",this._applyMood("destination");const n=this._cameraFor("destination");this._moveCamera(n.pos,n.target,1.6),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.18}_clearTravel(){this.travel&&(this.scene.remove(this.travel.root),Ic(this.travel.root),this.travel=null)}_setGroundVisible(e){this.water&&(this.water.visible=e),this.far&&(this.far.visible=e),this.glints&&(this.glints.visible=e),this.motes&&(this.motes.visible=e)}returnHome(e=!0){this._clearTravel(),this._setGroundVisible(!0),this.homeRoot&&(this.homeRoot.visible=!0),this.mode="home",this.controls.autoRotate=!1,this._applyMood(this.mood==="travel"?"sunset":this.mood);const t=this._cameraFor("home");this._moveCamera(t.pos,t.target,e?1.4:0)}pick(e,t){if(!this.homeRoot||this.mode!=="home")return null;const n=this.canvas.getBoundingClientRect();this.pointer.x=(e-n.left)/n.width*2-1,this.pointer.y=-((t-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const s=this.raycaster.intersectObjects(this.members,!0);for(const r of s){let a=r.object;for(;a;){if(typeof a.userData?.memberIndex=="number")return a.userData.memberIndex;a=a.parent}}return null}start(){if(this.running)return;this.running=!0,this.clock.start();const e=()=>{requestAnimationFrame(e);const t=Math.min(.05,this.clock.getDelta());if(this.time+=t,this.tween){this.tween.elapsed+=t;const n=Math.min(1,this.tween.elapsed/this.tween.duration),s=tv(n);this.camera.position.lerpVectors(this.tween.p0,this.tween.p1,s),this.controls.target.lerpVectors(this.tween.t0,this.tween.t1,s),n>=1&&(this.tween=null,this.controls.enabled=!0)}this.controls.update(),(this.mode==="home"||this.mode==="select")&&N_(this.homeAnim,this.time,t),this.travel&&this.travel.anim.update(this.time,t),this.motes.rotation.y=this.time*.01,this.glints.children.forEach((n,s)=>{n.material.opacity=.1+(Math.sin(this.time*.5+s)*.5+.5)*.2,n.position.x+=Math.sin(this.time*.1+s)*.001}),this.renderer.render(this.scene,this.camera)};e()}}const Ci=[{id:"ultra",tier:"Ultra Wealth",tierShort:"ULTRA",order:"01",surname:"Vandermere",familyName:"The Vandermeres",crest:"V",accent:"#d8b274",accentSoft:"#f3dfb8",tagline:"Old money. New horizons.",intro:"Three generations of quiet influence, one impossible house, and a calendar with more cities than days.",philosophy:"Privacy is the ultimate luxury.",connections:"Global — boards, galleries, governments",cash:845e5,netWorth:284e7,dailyIncome:142e4,happiness:88,prestige:99,privacy:96,house:{name:"Casa Solara",location:"Bel Air, Los Angeles",style:"Contemporary Mediterranean",value:684e5,beds:12,baths:9,area:"18,400 sq ft",staff:14,blurb:"A cantilevered limestone villa wrapped around a 30-metre infinity pool. The west wing holds the art; the east wing holds the sunset."},members:[{name:"Aurelia",age:48,role:"Chairwoman, Halcyon Capital",outfit:"Ivory silk suit · Gia Couture",hair:"#4a3024",skin:"#c58d67",top:"#f6efe2",bottom:"#e9ddc7",style:"tailored"},{name:"Julian",age:51,role:"Managing Partner, Vandermere Estates",outfit:"Midnight bespoke wool · Savile Row",hair:"#2e2722",skin:"#a96f4c",top:"#1e2b36",bottom:"#18212b",style:"suit"},{name:"Celine",age:22,role:"Curator & heir apparent",outfit:"Emerald column gown · Atelier Vernier",hair:"#271d19",skin:"#c9916b",top:"#1d5a4e",bottom:"#17483f",style:"gown"},{name:"Felix",age:17,role:"Student, St. Aubyn Academy",outfit:"Sea-island cotton polo · cashmere",hair:"#6b4b31",skin:"#c58d67",top:"#e4d4b7",bottom:"#e9e4d9",style:"casual"}],jobs:[{member:"Aurelia",title:"Chairwoman",company:"Halcyon Capital",salary:"$18.4M / yr"},{member:"Julian",title:"Managing Partner",company:"Vandermere Estates",salary:"$9.2M / yr"},{member:"Celine",title:"Curator at large",company:"Solara Foundation",salary:"$420K / yr"}],businesses:[{name:"Halcyon Capital",sector:"Private equity",value:"$1.42B",daily:"$780,000",share:"Controlling"},{name:"Maison Aurelia",sector:"Boutique hotels",value:"$310M",daily:"$290,000",share:"100%"},{name:"Solara Vineyards",sector:"Napa Valley wine",value:"$84M",daily:"$96,000",share:"100%"}],vehicles:{car:"Bespoke Rolls-Royce Phantom",carMeta:"Two-tone Andalusian White / Palais Nemesis · private chauffeur",vehicles:"3 cars — Phantom, Range Rover SV, 1962 250 GT",helicopter:"Airbus ACH160",helicopterMeta:"On-site helipad · pilot on call",plane:"Gulfstream G700",planeMeta:"Private hangar at Van Nuys · crew of 4",boat:"Aurelia II — 74m superyacht"},insurance:[{name:"Sovereign Platinum Umbrella",cover:"$50M liability",detail:"Worldwide, all households"},{name:"Fine Art & Jewels",cover:"$126M collection",detail:"Transit and exhibition cover"},{name:"Private Aviation",cover:"Hull & crew",detail:"Global, including medevac"}],signature:[{label:"Timepiece",value:"Patek Philippe Grand Complications"},{label:"Art",value:"Basquiat · Untitled (1982)"},{label:"Wardrobe",value:"Bespoke couture, private atelier"},{label:"Club",value:"The Aurelia Society · founding seat"},{label:"Cellar",value:"4,200 bottles · Burgundy focus"},{label:"Philanthropy",value:"Solara Arts Fund · $240M endowed"}],travel:{defaultCabin:"first",aircraft:"Gulfstream G700",terminal:"Private terminal"},mood:"The estate is dressed for sunset. The staff have been given the evening off."},{id:"rich",tier:"Rich",tierShort:"RICH",order:"02",surname:"Sato",familyName:"The Satos",crest:"S",accent:"#cf8f74",accentSoft:"#f3d9cd",tagline:"Built fast. Lived beautifully.",intro:"A biotech founder, a design studio, and a family learning how to slow down in a house that never stops moving.",philosophy:"Make the work matter; make the weekends count.",connections:"Strong — founders, collectors, one very good architect",cash:218e4,netWorth:286e5,dailyIncome:46800,happiness:82,prestige:84,privacy:71,house:{name:"Linden House",location:"Greenwich, Connecticut",style:"Warm modern",value:625e4,beds:5,baths:4,area:"4,800 sq ft",staff:2,blurb:"Cedar, travertine and a long view of the water. A serious house that still wants you to put your feet up."},members:[{name:"Naomi",age:43,role:"Founder & CEO, Lumen Bio",outfit:"Camel wool blazer · The Row",hair:"#1f1a17",skin:"#d9a982",top:"#c18f6e",bottom:"#2e2b2a",style:"tailored"},{name:"Marcus",age:45,role:"Creative Director, Atelier Sato",outfit:"Black merino turtleneck · APC denim",hair:"#2d2520",skin:"#b17b58",top:"#232323",bottom:"#354052",style:"casual"},{name:"Ivy",age:16,role:"Student & competitive swimmer",outfit:"Cherry knit cardigan · vintage denim",hair:"#31221b",skin:"#d4a17c",top:"#a2484c",bottom:"#49657b",style:"casual"},{name:"Leo",age:10,role:"Student & junior chess champion",outfit:"Indigo denim jacket · striped tee",hair:"#211b18",skin:"#c7916b",top:"#42627c",bottom:"#596b7b",style:"child"}],jobs:[{member:"Naomi",title:"Founder & CEO",company:"Lumen Bio",salary:"$2.4M / yr"},{member:"Marcus",title:"Creative Director",company:"Atelier Sato",salary:"$380K / yr"},{member:"Ivy",title:"Junior lifeguard",company:"Greenwich Beach Club",salary:"$6.8K / season"}],businesses:[{name:"Lumen Bio",sector:"Diagnostics",value:"$88M",daily:"$31,000",share:"38% founder stake"},{name:"Atelier Sato",sector:"Architecture & design",value:"$6.4M",daily:"$8,200",share:"Co-founder"},{name:"Two rental properties",sector:"Residential real estate",value:"$3.1M",daily:"$7,600",share:"100%"}],vehicles:{car:"Mercedes-Maybach GLS 600",carMeta:"Obsidian black · family car, weekends only",vehicles:"2 cars — Maybach GLS, restored Porsche 911",helicopter:"Shared helicopter · 8 hours / month",helicopterMeta:"Blade-style membership · Manhattan transfers",plane:"Citation CJ4 · fractional share",planeMeta:"1/16 share · 25 hours per year",boat:"No yacht — summer charter in Maine"},insurance:[{name:"Executive Elite Family Plan",cover:"$10M umbrella",detail:"Health, travel and disability"},{name:"Business Owner Liability",cover:"$5M",detail:"Lumen Bio D&O top-up"},{name:"Home & Auto Premier",cover:"Full replacement",detail:"Art and wine riders included"}],signature:[{label:"Timepiece",value:"Omega Speedmaster Moonwatch"},{label:"Art",value:"Two editions by Hiroshi Sugimoto"},{label:"Wardrobe",value:"The Row, APC, and one perfect vintage coat"},{label:"Club",value:"Greenwich Beach Club · family membership"},{label:"Cellar",value:"310 bottles · Oregon and Champagne"},{label:"Philanthropy",value:"Lumen Access Fund · $1.2M pledged"}],travel:{defaultCabin:"business",aircraft:"Citation CJ4 · fractional",terminal:"Executive aviation"},mood:"The pool is still. From the studio, a half-finished model catches the last light."},{id:"average",tier:"Average",tierShort:"AVERAGE",order:"03",surname:"Bennett",familyName:"The Bennetts",crest:"B",accent:"#9db69f",accentSoft:"#dfe9dc",tagline:"No connections. Plenty of heart.",intro:"A nurse, a teacher, two kids and a house on Maple Row. Every trip is saved for, and every trip means something.",philosophy:"We do not have it all. We have enough.",connections:"None — built from scratch",cash:8450,netWorth:94500,dailyIncome:485,happiness:74,prestige:41,privacy:58,house:{name:"14 Maple Row",location:"Dayton, Ohio",style:"Post-war bungalow",value:186e3,beds:3,baths:1.5,area:"1,420 sq ft",staff:0,blurb:"A blue front door, a porch swing, and tomatoes that finally came in. Small rooms, loud dinners, good bones."},members:[{name:"Elena",age:39,role:"ICU Nurse, Mercy General",outfit:"Teal scrubs · worn-in cardigan",hair:"#4b3327",skin:"#b98263",top:"#3c7e7b",bottom:"#315e63",style:"casual"},{name:"Theo",age:41,role:"History Teacher, Northside High",outfit:"Olive crewneck · corduroy trousers",hair:"#372b23",skin:"#d0a07a",top:"#65704f",bottom:"#5b4b3a",style:"casual"},{name:"Maya",age:14,role:"Student & bakery apprentice",outfit:"Mustard tee · patched jeans",hair:"#3e2b20",skin:"#c08a65",top:"#c39a42",bottom:"#52718c",style:"child"},{name:"Sam",age:8,role:"Student & dinosaur expert",outfit:"Striped tee · hand-me-down shorts",hair:"#6b4a31",skin:"#c08a65",top:"#c96a54",bottom:"#455a6e",style:"child"}],jobs:[{member:"Elena",title:"ICU Nurse",company:"Mercy General",salary:"$86K / yr"},{member:"Theo",title:"History Teacher",company:"Northside High",salary:"$62K / yr"},{member:"Maya",title:"Weekend baker",company:"Bennett Bakes",salary:"$90 / wk"}],businesses:[{name:"Bennett Bakes",sector:"Home bakery · Saturdays",value:"$12K",daily:"$74",share:"100% — Elena & Maya"}],vehicles:{car:"2014 Honda Fit",carMeta:"Silver · 148,000 miles · very good brakes",vehicles:"1 car & 3 bicycles",helicopter:"None",helicopterMeta:"Not in the household budget",plane:"Commercial only",planeMeta:"Economy is the family default",boat:"A borrowed canoe at the lake"},insurance:[{name:"Mercy General Family HMO",cover:"Family health",detail:"Employer subsidised"},{name:"Renters & Auto Standard",cover:"$300K liability",detail:"Monthly, carefully budgeted"},{name:"Term Life",cover:"$250K each",detail:"20-year level term"}],signature:[{label:"Timepiece",value:"Casio Illuminator · a wedding gift"},{label:"Art",value:"Family photographs, taped and framed"},{label:"Wardrobe",value:"Target, thrifted Levi’s, one good coat"},{label:"Club",value:"Community pool · $120 summer pass"},{label:"Cellar",value:"Six bottles, mostly for birthdays"},{label:"Philanthropy",value:"Saturday food bank shift"}],travel:{defaultCabin:"economy",aircraft:"Commercial airline",terminal:"Main terminal"},mood:"Casserole in the oven. Sam is winning at Monopoly. The porch light is on."}],li={economy:{id:"economy",label:"Economy",kicker:"SMART VALUE",multiplier:1,perks:["Standard seat","23kg checked bag","Complimentary meal"],detail:"Every dollar goes further. Still a window seat if you ask kindly."},business:{id:"business",label:"Business",kicker:"LIE-FLAT COMFORT",multiplier:2.8,perks:["Lie-flat suite","Lounge access","Priority boarding"],detail:"Arrive rested. The upgrade that changes the first day of a trip."},first:{id:"first",label:"First",kicker:"THE FULL CEREMONY",multiplier:6.2,perks:["Private suite","Chauffeur transfer","Caviar & vintage Champagne"],detail:"The airport disappears. A suite, a steward, and a car at the other end."}},Ao=[{id:"singapore",city:"Singapore",country:"Singapore",code:"SIN",base:1960,hours:"17h 20m",tag:"Garden city",note:"Supertrees, supper clubs and a rooftop infinity pool above the bay.",palette:["#193b39","#69a58c","#e5c284"],icon:"singapore",hotel:"The Fullerton Bay · Bay View Suite",signature:"Gardens by the Bay at blue hour",restaurant:"Odette · chef’s table"},{id:"tokyo",city:"Tokyo",country:"Japan",code:"HND",base:1760,hours:"11h 05m",tag:"Quiet precision",note:"A city that rewards curiosity: tiny bars, perfect fish, midnight design.",palette:["#2a2238","#d6747f","#f0c9a0"],icon:"tokyo",hotel:"Aman Tokyo · Premier King",signature:"TeamLab Planets, after dark",restaurant:"Sushi Saito · counter seat"},{id:"losangeles",city:"Los Angeles",country:"United States",code:"LAX",base:420,hours:"2h 10m",tag:"Endless summer",note:"Palm-lined boulevards, canyon light and a long lunch that becomes dinner.",palette:["#442d34","#e39b74","#f3d69d"],icon:"losangeles",hotel:"Chateau Marmont · Garden Cottage",signature:"The Getty at golden hour",restaurant:"Bestia · patio table"},{id:"doha",city:"Doha",country:"Qatar",code:"DOH",base:1680,hours:"13h 40m",tag:"Desert modern",note:"Pearl divers’ history, a razor-sharp skyline and the best majlis hospitality.",palette:["#3b2a2f","#c99167","#efcf9d"],icon:"doha",hotel:"Mandarin Oriental · Msheireb Suite",signature:"Souq Waqif at dusk",restaurant:"Parisa · courtyard"},{id:"dubai",city:"Dubai",country:"United Arab Emirates",code:"DXB",base:1590,hours:"13h 10m",tag:"Vertical ambition",note:"Record-breaking towers, warm water and a skyline that behaves like theatre.",palette:["#322937","#d09a74","#f0c98e"],icon:"dubai",hotel:"Atlantis The Royal · Sky Pool Suite",signature:"Burj Khalifa · Level 148",restaurant:"Ossiano · below the sea"},{id:"london",city:"London",country:"United Kingdom",code:"LHR",base:1460,hours:"9h 45m",tag:"Grey elegance",note:"Museums in the morning, a members’ club at noon, theatre after the rain.",palette:["#27323b","#8b9a83","#d8c49a"],icon:"london",hotel:"The Connaught · Butler Suite",signature:"A private view at the Tate",restaurant:"Rochelle Canteen · garden"},{id:"paris",city:"Paris",country:"France",code:"CDG",base:1380,hours:"9h 20m",tag:"The art of living",note:"A morning market, a long museum, and one perfect table by a window.",palette:["#3b3037","#b79a92","#e9cfa6"],icon:"paris",hotel:"Le Bristol · Parisian Suite",signature:"Musée Rodin before opening",restaurant:"Septime · lunch"},{id:"milan",city:"Milan",country:"Italy",code:"MXP",base:1290,hours:"9h 05m",tag:"Beautifully made",note:"Design showrooms, aperitivo hour and a tailor who remembers your name.",palette:["#373029","#ad8964","#ead3a5"],icon:"milan",hotel:"Mandarin Oriental · Duomo Suite",signature:"Private after-hours Duomo terrace",restaurant:"Ratanà · garden room"},{id:"newyork",city:"New York",country:"United States",code:"JFK",base:980,hours:"5h 30m",tag:"The main event",note:"A corner suite, a matinee, and dinner somewhere too loud to hear each other.",palette:["#2c3037","#8d7c70","#dfc190"],icon:"newyork",hotel:"The Greenwich · Corner Suite",signature:"MoMA before the crowds",restaurant:"Via Carota · corner table"},{id:"zurich",city:"Zurich",country:"Switzerland",code:"ZRH",base:1520,hours:"9h 55m",tag:"Alpine calm",note:"Lake air, a long swim, and a train that climbs into the quiet.",palette:["#243538","#8a9c8d","#e7d6b0"],icon:"zurich",hotel:"Baur au Lac · Lake Suite",signature:"Private boat to Rapperswil",restaurant:"Kronenhalle · corner banquette"}],Wh=["MON","TUE","WED","THU","FRI","SAT","SUN"];function bt(i,e=!1){return e&&Math.abs(i)>=1e6?`$${(i/1e6).toFixed(i>=1e7?0:1)}M`:e&&Math.abs(i)>=1e4?`$${(i/1e3).toFixed(0)}K`:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(i)}function Fr(i){return Ci.find(e=>e.id===i)||Ci[0]}const lt=(i,e="0 0 24 24")=>`<svg viewBox="${e}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${i}</svg>`,Fc={home:lt('<path d="M3.5 10.5 12 3l8.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9.5v10h13v-10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 19.5v-5h5v5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),users:lt('<circle cx="9" cy="8" r="3" stroke="currentColor"/><path d="M3.5 19.5c.4-3.2 2.5-5.1 5.5-5.1s5.1 1.9 5.5 5.1" stroke="currentColor" stroke-linecap="round"/><path d="M15.2 5.4a3 3 0 0 1 0 5.4" stroke="currentColor" stroke-linecap="round"/><path d="M17.2 14.8c1.9.7 3 2.3 3.3 4.7" stroke="currentColor" stroke-linecap="round"/>'),diamond:lt('<path d="m4 9 3-5h10l3 5-8 11L4 9Z" stroke="currentColor" stroke-linejoin="round"/><path d="M4 9h16M8 4l4 16 4-16" stroke="currentColor" stroke-linejoin="round"/>'),plane:lt('<path d="M21 12.4 14.2 15l-1.5 5.2-1.9.8-1-5.1-5-2 .9-1.7 4.8.8L13 7.3 9.6 5.2l1-1.4 4.7 1.7 2.6-2.4c.7-.6 1.7-.6 2.3.1.6.7.6 1.7-.1 2.3l-2.4 2.6 1.7 4.7-1.4 1-2.1-3.4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),book:lt('<path d="M4 5.5c3.2-1 5.6-.5 8 1.2 2.4-1.7 4.8-2.2 8-1.2v13c-3.2-1-5.6-.5-8 1.2-2.4-1.7-4.8-2.2-8-1.2v-13Z" stroke="currentColor" stroke-linejoin="round"/><path d="M12 6.7v13" stroke="currentColor"/>'),car:lt('<path d="m5 10 1.5-4h11L19 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 10h16v7h-2.2M4 17V10m2.2 7H8m5.5 0h2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7.2" cy="17" r="1.8" stroke="currentColor"/><circle cx="17.3" cy="17" r="1.8" stroke="currentColor"/>'),helicopter:lt('<path d="M4 4.5h16M12 4.5v3" stroke="currentColor" stroke-linecap="round"/><path d="M6.5 14.5c0-3.3 2.4-5.5 5.7-5.5h3.2c2.2 0 3.6 1.4 3.6 3.4v2.1c0 1.7-1.2 2.8-2.9 2.8H9.3c-1.7 0-2.8-1.1-2.8-2.8Z" stroke="currentColor" stroke-linejoin="round"/><path d="m15.2 11.5 4.3-.4M6.2 18.2h11.6M8.1 17.5v1.9m7.8-1.9v1.9" stroke="currentColor" stroke-linecap="round"/>'),jet:lt('<path d="M3 13.2c3.7-.8 7.6-1.2 11.8-1.2l3-1.2c1.2-.5 2.5.6 2 1.9l-.8 1.4c-.4.7-1.1 1.1-1.9 1.1L15 15l-4.6 4.1-2 .1 2.5-4.4-4.2.3-1.8 1.8-1.6.1.9-3.2L2.8 12l.2-.8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),shield:lt('<path d="M12 3 5 5.8v5.7c0 3.7 2.5 6.9 7 9.5 4.5-2.6 7-5.8 7-9.5V5.8L12 3Z" stroke="currentColor" stroke-linejoin="round"/><path d="m9 11.8 2 2 4-4.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),sparkle:lt('<path d="m12 3 1.4 4.2L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.3L12 3Z" stroke="currentColor" stroke-linejoin="round"/><path d="m18.5 14 .7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" stroke="currentColor" stroke-linejoin="round"/>'),clock:lt('<circle cx="12" cy="12" r="8.5" stroke="currentColor"/><path d="M12 7.5V12l3 2" stroke="currentColor" stroke-linecap="round"/>'),heart:lt('<path d="M12 20s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.9C19.5 15.4 12 20 12 20Z" stroke="currentColor" stroke-linejoin="round"/>'),star:lt('<path d="m12 3 2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.9-5.3 2.9 1-6L3.3 9.4l6-.9L12 3Z" stroke="currentColor" stroke-linejoin="round"/>'),map:lt('<path d="M9 4 3 6.4v14L9 18l6 2.4 6-2.4v-14L15 6.4 9 4Z" stroke="currentColor" stroke-linejoin="round"/><path d="M9 4v14m6-11.6v14" stroke="currentColor"/>'),check:lt('<path d="m5 12.5 4.5 4.5L19 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),sun:lt('<circle cx="12" cy="12" r="3.5" stroke="currentColor"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" stroke="currentColor" stroke-linecap="round"/>'),moon:lt('<path d="M20 15.3A8.7 8.7 0 0 1 8.7 4 8.8 8.8 0 1 0 20 15.3Z" stroke="currentColor" stroke-linejoin="round"/>'),chevron:lt('<path d="m8 10 4 4 4-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),pin:lt('<path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Z" stroke="currentColor" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.2" stroke="currentColor"/>'),building:lt('<path d="M4 21V6l8-3v18M12 8h8v13M4 21h16" stroke="currentColor" stroke-linejoin="round"/><path d="M7.5 8.5h1M7.5 12h1M7.5 15.5h1M15.5 12h1M15.5 15.5h1" stroke="currentColor" stroke-linecap="round"/>'),briefcase:lt('<rect x="3.5" y="7.5" width="17" height="12" rx="2" stroke="currentColor"/><path d="M9 7.5V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8v1.7M3.5 12.5h17" stroke="currentColor" stroke-linecap="round"/>'),boat:lt('<path d="M4 14.5h16l-2.5 5h-11L4 14.5Z" stroke="currentColor" stroke-linejoin="round"/><path d="M12 14.5V5m0 0-4.5 6.5H12M12 5l4.5 6.5H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),watch:lt('<circle cx="12" cy="12" r="4.5" stroke="currentColor"/><path d="M9.4 7.8 10 4h4l.6 3.8M9.4 16.2 10 20h4l.6-3.8M12 9.8V12l1.7 1" stroke="currentColor" stroke-linecap="round"/>'),art:lt('<rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor"/><path d="m6.5 16.5 3.5-4 2.5 2.6 2.4-2.8 2.6 4.2M9.2 9h.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),globe:lt('<circle cx="12" cy="12" r="8.5" stroke="currentColor"/><path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.1-3.3-8.5S9.8 5.8 12 3.5Z" stroke="currentColor"/>'),calendar:lt('<rect x="3.5" y="5.5" width="17" height="15" rx="2" stroke="currentColor"/><path d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17" stroke="currentColor" stroke-linecap="round"/>'),arrow:lt('<path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),soundOn:lt('<path d="M4 9.5h3l4-3.3v11.6l-4-3.3H4v-5Z" stroke="currentColor" stroke-linejoin="round"/><path d="M15 9a4 4 0 0 1 0 6m2.5-8.5a7 7 0 0 1 0 11" stroke="currentColor" stroke-linecap="round"/>'),soundOff:lt('<path d="M4 9.5h3l4-3.3v11.6l-4-3.3H4v-5Z" stroke="currentColor" stroke-linejoin="round"/><path d="m16 9.5 4 4m0-4-4 4" stroke="currentColor" stroke-linecap="round"/>'),key:lt('<circle cx="8" cy="12" r="4" stroke="currentColor"/><path d="M12 12h8m-3 0v3m-2-3v2" stroke="currentColor" stroke-linecap="round"/>'),trophy:lt('<path d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z" stroke="currentColor" stroke-linejoin="round"/><path d="M8 5.5H4.8V7A3.8 3.8 0 0 0 8.6 10.8M16 5.5h3.2V7a3.8 3.8 0 0 1-3.8 3.8M12 12.5V17m-3 3h6m-5 0 .4-2.2h3.2L15 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),wallet:lt('<rect x="3.5" y="6" width="17" height="13" rx="2" stroke="currentColor"/><path d="M3.5 9.5h17M15.5 13.5h2.6" stroke="currentColor" stroke-linecap="round"/>'),crown:lt('<path d="M4 18h16M5 6l3.6 4L12 5l3.4 5L19 6l-1.3 9H6.3L5 6Z" stroke="currentColor" stroke-linejoin="round"/>'),close:lt('<path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-linecap="round"/>')};function us(i){return Fc[i]||Fc.sparkle}const Oc={singapore:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><rect x="27" y="20" width="15" height="52" rx="3" stroke="currentColor" stroke-width="1.4"/><rect x="52" y="14" width="16" height="58" rx="3" stroke="currentColor" stroke-width="1.4"/><rect x="78" y="22" width="15" height="50" rx="3" stroke="currentColor" stroke-width="1.4"/><path d="M22 22h76c4 0 7 3 7 7v3H20v-4c0-3 1-6 2-6Z" stroke="currentColor" stroke-width="1.4"/><circle cx="14" cy="62" r="10" stroke="currentColor" stroke-width="1.2"/><path d="M14 62 8 54m6 8 8 5M4 62h20M14 52v20" stroke="currentColor" stroke-width=".8" opacity=".7"/></svg>',tokyo:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M60 12v58M38 70h44M60 18 40 70M60 18l20 52M60 18 49 70M60 18l11 52M44 44h32M36 58h48M33 70h54" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M52 82h16M56 76h8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="60" cy="12" r="2" fill="currentColor"/><path d="M18 82c8-7 16-7 24 0M78 82c8-7 16-7 24 0" stroke="currentColor" stroke-width="1" opacity=".5"/></svg>',losangeles:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M2 68c15-10 27-12 44-6 17 6 33 6 50-2 9-4 16-4 22-2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M38 68V35m0 0c-5-6-8-10-13-12m13 12c4-8 8-13 14-16m-14 16c-2-9-4-14-9-18M38 35c7-4 13-5 19-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M84 68V41m0 0c-3-5-5-8-9-10m9 10c3-6 6-10 10-12m-10 12c-1-7-3-11-7-14M84 41c5-3 9-3 13-2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M6 30c8 2 12 7 12 14M110 36c-6 1-9 4-10 8" stroke="currentColor" stroke-width=".9" opacity=".55"/><path d="M54 57h23v11H54zM58 57v-9h5v9M69 57v-7h5v7" stroke="currentColor" stroke-width="1.1"/></svg>',doha:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M39 48h42v26H39z" stroke="currentColor" stroke-width="1.4"/><path d="M46 48V35c0-5 4-9 9-9h10c5 0 9 4 9 9v13" stroke="currentColor" stroke-width="1.4"/><path d="M48 74V59c0-4 3-7 7-7h10c4 0 7 3 7 7v15M60 35v-8" stroke="currentColor" stroke-width="1.1"/><path d="M34 74h52M66 27c2-4 5-6 9-6M24 74c4-10 11-15 20-16M97 74c-4-10-11-15-20-16" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>',dubai:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M60 8v66M60 20l-7 54M60 20l7 54M53 74l-6 0M67 74h6M60 34l-4 40M60 34l4 40M46 74h28" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M31 74V51l9-6v29M80 74V45l10 7v22M25 74h70M94 74V58l5 3v13" stroke="currentColor" stroke-width="1.1"/><circle cx="60" cy="8" r="1.6" fill="currentColor"/><path d="M17 74c7-6 13-7 20-2M83 74c7-5 13-5 20 1" stroke="currentColor" stroke-width="1" opacity=".5"/></svg>',london:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M30 74V22h14v52M24 22h26M27 28h20M27 35h20M34 15l3-5 3 5v7h-6v-7Z" stroke="currentColor" stroke-width="1.3"/><circle cx="37" cy="35" r="5" stroke="currentColor" stroke-width="1.1"/><path d="M37 35v-3M37 35l2 1" stroke="currentColor" stroke-width=".8"/><circle cx="86" cy="45" r="20" stroke="currentColor" stroke-width="1.1"/><path d="M86 45 78 29m8 16 13 10M66 45h40M86 25v40M71 31l30 28M101 31 71 59" stroke="currentColor" stroke-width=".7" opacity=".7"/><path d="M53 74h44" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',paris:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M60 10v66M38 76h44M60 18 40 76M60 18l20 58M60 18 52 76M60 18l8 58M46 49h28M36 63h48M31 76h58" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M52 76c2-8 5-12 8-12s6 4 8 12" stroke="currentColor" stroke-width="1.1"/><circle cx="60" cy="10" r="1.7" fill="currentColor"/><path d="M18 76c7-4 13-4 20 0M82 76c7-4 13-4 20 0" stroke="currentColor" stroke-width="1" opacity=".5"/></svg>',milan:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M32 74V44h56v30M26 44h68M38 44V29l6-8 6 8v15M70 44V27l6-6 6 6v17M56 44V22l5-7 5 7v22M50 29l-5-8m26 8 5-8M60 15V7" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M45 74V57c0-4 3-7 7-7h16c4 0 7 3 7 7v17M20 74h80" stroke="currentColor" stroke-width="1.2"/><circle cx="60" cy="7" r="1.6" fill="currentColor"/></svg>',newyork:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M30 74V29h16v45M27 29h22M30 36h16M30 43h16M30 50h16M30 57h16M54 74V43h12v31M80 74V19h11v55M77 19h17M80 27h11M80 34h11M80 41h11M80 48h11M94 74V52h9v22M18 74h88" stroke="currentColor" stroke-width="1.2"/><path d="M33 15v14M60 35V24M85 8v11" stroke="currentColor" stroke-width="1" stroke-linecap="round"/><circle cx="85" cy="7" r="1.6" fill="currentColor"/></svg>',zurich:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M2 70 26 28l18 28 12-18 16 24 10-14 20 22" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="m18 46 8-9 7 9M47 50l7-10 7 10M83 54l6-7 7 8M12 67h28M73 67h30" stroke="currentColor" stroke-width="1" opacity=".65"/><path d="M54 74V58h12v16M48 74h24M60 58v-6" stroke="currentColor" stroke-width="1.2"/><path d="M6 78c18-5 37-5 58 0 18 4 35 4 50-1" stroke="currentColor" stroke-width="1" opacity=".5"/><circle cx="60" cy="49" r="7" stroke="currentColor" stroke-width="1" opacity=".65"/></svg>'};function rv(i){return Oc[i]||Oc.paris}class av{constructor(){this.ctx=null,this.enabled=!0,this.master=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.42:0,this.master.connect(this.ctx.destination))}setEnabled(e){this.enabled=e,this.master&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.linearRampToValueAtTime(e?.42:0,this.ctx.currentTime+.12))}tone(e,t=.2,n="sine",s=.08,r=0){if(!this.ctx||!this.enabled)return;const a=this.ctx.currentTime+r,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=n,o.frequency.setValueAtTime(e,a),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(s,a+.015),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(this.master),o.start(a),o.stop(a+t+.05)}click(){this.init(),this.tone(620,.08,"triangle",.035),this.tone(930,.08,"sine",.022,.025)}chime(){this.init(),this.tone(392,.5,"sine",.05),this.tone(523.25,.6,"sine",.038,.08),this.tone(659.25,.9,"sine",.03,.16)}cash(){this.init(),this.tone(880,.18,"triangle",.04),this.tone(1174.66,.32,"triangle",.03,.08),this.tone(1567.98,.4,"sine",.018,.16)}swoosh(){if(this.ctx||this.init(),!this.ctx||!this.enabled)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(100,e),t.frequency.exponentialRampToValueAtTime(760,e+1.1),s.type="lowpass",s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(1800,e+1.1),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.035,e+.18),n.gain.exponentialRampToValueAtTime(1e-4,e+1.5),t.connect(s),s.connect(n),n.connect(this.master),t.start(e),t.stop(e+1.6)}arrival(){this.init(),[523.25,659.25,783.99,1046.5].forEach((e,t)=>this.tone(e,.7,"sine",.04,t*.09))}}const ie=i=>document.getElementById(i),ov=ie("app"),Rt=new sv(ie("scene"));window.__heirloomWorld=Rt;const Dt=new av,il=()=>window.matchMedia("(max-width: 560px)").matches,Xh=i=>il()?`Enter ${i.surname} <span class="btn-arrow">→</span>`:`Enter the ${i.surname} life <span class="btn-arrow">→</span>`,$h="heirloom-estate-save-v1",qh="heirloom-muted-v1",Ro={ultra:{code:"LAX",city:"Los Angeles"},rich:{code:"JFK",city:"New York"},average:{code:"DAY",city:"Dayton"}},Bc=["GOLDEN HOUR","MORNING LIGHT","BLUE HOUR"],Pi=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let _n="ultra",Ps={},sl=!1,vn=null,Co=0,kc=null,Ss=lv();const Tn={panel:null,selectedDestination:null,selectedCabin:null};Rt.start();function Yh(i){return{familyId:i.id,cash:i.cash,day:1,happiness:i.happiness,prestige:i.prestige,lastMomentDay:0,trips:[],history:[{day:1,title:"The house is ready",detail:`${i.house.name} prepared for the family.`}]}}function Zh(i){return Ps[i]||(Ps[i]=Yh(Fr(i))),Ps[i]}function lv(){try{const i=localStorage.getItem($h);if(!i)return null;const e=JSON.parse(i);return!e||!e.states?null:e}catch{return null}}function cv(){Ss&&(Ci.some(i=>i.id===Ss.activeId)&&(_n=Ss.activeId),Ci.forEach(i=>{const e=Ss.states?.[i.id];e&&(Ps[i.id]={...Yh(i),...e,trips:e.trips||[],history:e.history||[]})}),Ss.started&&(sl=!0,ie("resume-btn").classList.remove("hidden"),ie("resume-btn").textContent=il()?`Resume ${Fr(_n).surname}`:`Resume the ${Fr(_n).surname} story`))}function pi(){try{localStorage.setItem($h,JSON.stringify({v:1,activeId:_n,started:sl,states:Ps,savedAt:Date.now()}))}catch{}}function Kn(){return Zh(_n)}function ln(){return Fr(_n)}function qr(i){return Math.abs(i)>=1e9?`$${(i/1e9).toFixed(2).replace(/\.?0+$/,"")}B`:Math.abs(i)>=1e6?`$${(i/1e6).toFixed(i>=1e7?1:2).replace(/\.?0+$/,"")}M`:Math.abs(i)>=1e4?`$${Math.round(i/1e3)}K`:bt(i)}function Kh(i){const e=parseFloat(String(i).replace(/[^0-9.]/g,""))||0;return/B/i.test(i)?e*1e9:/M/i.test(i)?e*1e6:/K/i.test(i)?e*1e3:e}function hv(i){return`${Wh[(Math.max(1,i.day)-1)%7]} · DAY ${i.day}`}function rl(i){return Bc[(Math.max(1,i.day)-1)%Bc.length]}function Po(i,e){const t=li[e]||li.economy;return Math.round(i.base*t.multiplier/10)*10}function Jh(i=document){i.querySelectorAll("[data-icon]").forEach(e=>{e.dataset.iconReady||(e.innerHTML=us(e.dataset.icon),e.dataset.iconReady="1")})}Jh();function Qh(){const i=ie("sound-btn");i&&(i.innerHTML=us(Dt.enabled?"soundOn":"soundOff"))}function Li(i,e="",t="✦"){const n=ie("toast-stack"),s=document.createElement("div");s.className="toast",s.innerHTML=`<div class="toast-icon">${t}</div><div><b>${i}</b>${e?`<p>${e}</p>`:""}</div>`,n.appendChild(s),setTimeout(()=>{s.classList.add("leaving"),setTimeout(()=>s.remove(),380)},4300)}function jh(){const i=ie("family-picker");i.innerHTML=Ci.map(e=>`
    <button class="family-option ${e.id===_n?"active":""}" data-family="${e.id}" role="listitem" style="--family-accent:${e.accent}">
      <span class="family-index">${e.order}</span>
      <span class="family-option-copy">
        <b>${e.familyName}</b>
        <small><span class="tier-dot" style="--family-accent:${e.accent}"></span>${e.tier}${e.id==="average"?" · NO CONNECTIONS":""}</small>
      </span>
      <span class="family-money"><b>${qr(e.cash)}</b><small>available</small></span>
    </button>`).join(""),i.querySelectorAll(".family-option").forEach(e=>{e.addEventListener("click",()=>dv(e.dataset.family))})}function dv(i){if(!Ci.some(t=>t.id===i)||i===_n)return;_n=i;const e=ln();jh(),ie("enter-btn").innerHTML=Xh(e),ie("preview-label").innerHTML=`<span class="preview-index">${e.order}</span><span class="preview-copy"><b>${e.house.name}</b><small>${e.house.location}</small></span>`,ie("scene").style.opacity="0.25",setTimeout(()=>{Rt.setFamily(e,"select",!1),requestAnimationFrame(()=>{ie("scene").style.opacity="1"})},70)}function uv(){cv(),jh();const i=ln();ie("enter-btn").innerHTML=Xh(i),ie("preview-label").innerHTML=`<span class="preview-index">${i.order}</span><span class="preview-copy"><b>${i.house.name}</b><small>${i.house.location}</small></span>`,Rt.setFamily(i,"select",!1),ie("select-screen").classList.remove("hidden"),setTimeout(()=>ie("loader").classList.add("ready"),700),setTimeout(()=>ie("loader").classList.add("hidden"),1450)}function fs(){const i=ln(),e=Kn();ie("crest").textContent=i.crest,ie("family-name").textContent=il()?i.surname:i.familyName,ie("family-tier").textContent=i.tier.toUpperCase(),ie("cash-value").textContent=bt(e.cash),ie("income-value").textContent=`+${qr(i.dailyIncome)} / day`,ie("day-label").textContent=hv(e),ie("time-label").textContent=rl(e),ie("house-name").textContent=i.house.name,ie("house-location").textContent=i.house.location,ie("mood-line").textContent=i.mood,ie("happy-value").textContent=e.happiness,ie("prestige-value").textContent=e.prestige,ie("happy-bar").style.width=`${e.happiness}%`,ie("prestige-bar").style.width=`${e.prestige}%`,ie("game-ui").style.setProperty("--family-accent",i.accent);const t=e.lastMomentDay===e.day,n=ie("moment-btn");n.disabled=t,n.querySelector("b").textContent=t?"A quiet moment taken":"Take in the sunset",n.querySelector("small").textContent=t?"Come back tomorrow":"+5 happiness · once a day",document.title=`${i.house.name} · Heirloom`}function fv(i){const e=ie("intro");ie("intro-crest").textContent=i.crest,ie("intro-name").textContent=i.house.name,ie("intro-tier").textContent=`${i.familyName.toUpperCase()} · ${i.tier.toUpperCase()}`,e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",setTimeout(()=>e.classList.add("hidden"),Pi?500:2600)}function pv(){const i=ie("tutorial");i.classList.remove("hide"),clearTimeout(kc),kc=setTimeout(()=>i.classList.add("hide"),9e3)}function ed({resume:i=!1}={}){const e=ln(),t=Kn();sl=!0,pi(),ie("select-screen").classList.add("leaving"),setTimeout(()=>ie("select-screen").classList.add("hidden"),420),ie("game-ui").classList.remove("hidden"),Rt.setFamily(e,"home",!0),Rt.setDayMood(t.day),fs(),Rt.controls.autoRotate=!1,Rt.controls.enabled=!0,i||fv(e),pv(),Dt.chime(),i&&Li("Welcome back",`${e.house.name} has been kept exactly as you left it.`,"⌂")}function al(){if(vn)return;Di();const i=ln(),e=Kn(),t=i.dailyIncome;e.cash+=t,e.day+=1,e.lastMomentDay=0,e.happiness=Math.max(42,e.happiness-1),e.history.unshift({day:e.day,title:"Daily income collected",detail:`${bt(t)} from salary, businesses and investments.`}),e.history.length>18&&(e.history.length=18),Rt.setDayMood(e.day),fs(),pi(),Dt.cash(),mv(e.day,t,i),Li(`Day ${e.day} · income collected`,`+${bt(t)} added to available funds.`,"↻")}function mv(i,e,t){const n=document.createElement("div");n.className="day-transition",n.innerHTML=`
    <div class="day-break-kicker">${Wh[(i-1)%7]} · DAY ${i}</div>
    <div class="day-break-title">A new day at<br><em>${t.house.name}</em></div>
    <div class="day-break-income">+${bt(e)}</div>
    <div class="day-break-sub">collected from the household portfolio</div>`,ov.appendChild(n),setTimeout(()=>n.classList.add("leaving"),Pi?350:1900),setTimeout(()=>n.remove(),Pi?700:2500)}function td(){const i=Kn();if(i.lastMomentDay===i.day){Li("Already taken","This moment belongs to today. A new one arrives tomorrow.","☀");return}i.happiness=Math.min(100,i.happiness+5),i.lastMomentDay=i.day,i.history.unshift({day:i.day,title:"A moment at home",detail:"The family took in the last light together. +5 happiness."}),fs(),pi(),Dt.chime(),Li("Happiness +5","The terrace was quiet. Nobody reached for a phone.","☀"),Tn.panel==="estate"&&Or("estate")}const gv={estate:{kicker:"BACK AT THE HOUSE",title:null,subtitle:"A private world, arranged exactly so."},family:{kicker:"THE HOUSEHOLD",title:null,subtitle:"The people behind the name."},assets:{kicker:"THE PORTFOLIO",title:"Everything, preselected",subtitle:"A complete life, chosen for this family."},travel:{kicker:"THE GETAWAY",title:"Where to next?",subtitle:"Ten cities. Three ways to arrive."},ledger:{kicker:"THE BOOKS",title:"Quietly managed",subtitle:"Income, work and the cost of a life."}};function ol(i="estate"){if(vn)return;Tn.panel=i;const e=ln(),t=gv[i];ie("panel-kicker").innerHTML=`<span class="eyebrow-line"></span>${t.kicker}`,ie("panel-title").textContent=i==="family"?e.familyName:i==="estate"?e.house.name:t.title,ie("panel-subtitle").textContent=i==="estate"?`${e.house.location} · ${e.house.style}`:t.subtitle,ie("panel").classList.remove("hidden"),ie("panel").setAttribute("aria-hidden","false"),ie("panel-body").scrollTop=0,Rt.controls.enabled=!1,Or(i),document.querySelectorAll(".dock-item").forEach(n=>n.classList.toggle("active",n.dataset.view===i)),Dt.click()}function Di(){ie("panel").classList.contains("hidden")||(ie("panel").classList.add("hidden"),ie("panel").setAttribute("aria-hidden","true"),Tn.panel=null,Rt.controls.enabled=!0,document.querySelectorAll(".dock-item").forEach(i=>i.classList.toggle("active",i.dataset.view==="estate")))}function Or(i){const e=ie("panel-body"),t=ln(),n=Kn();i==="estate"&&(e.innerHTML=vv(t,n)),i==="family"&&(e.innerHTML=xv(t,n)),i==="assets"&&(e.innerHTML=Mv(t)),i==="travel"&&(e.innerHTML=yv(t,n)),i==="ledger"&&(e.innerHTML=bv(t,n)),Jh(e),_v(i)}function _v(i){const e=ie("panel-body"),t=e.querySelector("#panel-moment");t&&t.addEventListener("click",td);const n=e.querySelector("#switch-household-btn");n&&n.addEventListener("click",rd);const s=e.querySelector("#panel-end-day");if(s&&s.addEventListener("click",al),i==="travel"){e.querySelectorAll("[data-destination]").forEach(a=>{a.addEventListener("click",()=>{Tn.selectedDestination=a.dataset.destination,Tn.selectedCabin=ln().travel.defaultCabin,Or("travel"),requestAnimationFrame(()=>{document.getElementById("destination-detail")?.scrollIntoView({behavior:Pi?"auto":"smooth",block:"nearest"})})})}),e.querySelectorAll("[data-cabin]").forEach(a=>{a.addEventListener("click",()=>{Tn.selectedCabin=a.dataset.cabin,Or("travel"),requestAnimationFrame(()=>{document.getElementById("destination-detail")?.scrollIntoView({behavior:Pi?"auto":"smooth",block:"nearest"})})})});const r=e.querySelector("#book-trip");r&&r.addEventListener("click",()=>{const a=ln(),o=Kn(),l=Ao.find(d=>d.id===Tn.selectedDestination);if(!l)return;const c=Tn.selectedCabin||a.travel.defaultCabin,h=Po(l,c);if(o.cash<h){Li("Not quite yet",`You need ${bt(h-o.cash)} more. End a few days to collect income.`,"◷");return}Ev(l,c,h)})}}function nd(i){return`
    <article class="member-card" style="--m-top:${i.top};--m-bottom:${i.bottom}">
      <div class="member-top">
        <div class="member-avatar">${i.name[0]}</div>
        <div class="member-name"><b>${i.name}</b><small>${i.age} years old</small></div>
      </div>
      <p class="member-role">${i.role}</p>
      <div class="member-outfit">${i.outfit}</div>
      <span class="member-chip">${i.style==="child"?"Youngest generation":i.style==="gown"?"Heir apparent":"Household"}</span>
    </article>`}function id(i){return`
    <div class="house-visual">
      <div class="hv-kicker">THE RESIDENCE · ${i.house.value>1e6?qr(i.house.value):bt(i.house.value)}</div>
      <h3>${i.house.name}</h3>
      <p>${i.house.blurb}</p>
      <div class="house-specs">
        <div class="spec"><small>Location</small><b>${i.house.location}</b></div>
        <div class="spec"><small>Interior</small><b>${i.house.area}</b></div>
        <div class="spec"><small>Bedrooms</small><b>${i.house.beds} · ${i.house.baths} baths</b></div>
        <div class="spec"><small>Staff</small><b>${i.house.staff===0?"The family itself":`${i.house.staff} in residence`}</b></div>
      </div>
    </div>`}function vv(i,e){return`
    <section class="panel-section">
      ${id(i)}
    </section>
    <section class="panel-section split">
      <div class="panel-card">
        <span class="section-label">HOUSEHOLD PULSE</span>
        <div class="stat-big-grid">
          <div class="stat-big"><small>HAPPINESS</small><b>${e.happiness}</b><i>at home</i></div>
          <div class="stat-big"><small>STANDING</small><b>${e.prestige}</b><i>in the world</i></div>
          <div class="stat-big"><small>PRIVACY</small><b>${i.privacy}</b><i>very protected</i></div>
          <div class="stat-big"><small>TRIPS</small><b>${e.trips.length}</b><i>taken together</i></div>
        </div>
        <button id="panel-moment" class="moment-btn" ${e.lastMomentDay===e.day?"disabled":""} style="margin-top:14px">
          <span class="moment-icon">☀</span>
          <span><b>${e.lastMomentDay===e.day?"A quiet moment taken":"Take in the sunset"}</b><small>${e.lastMomentDay===e.day?"Come back tomorrow":"+5 happiness · once a day"}</small></span>
        </button>
      </div>
      <div class="panel-card warm">
        <span class="section-label">THE FAMILY CREED</span>
        <p class="profile-quote">“${i.philosophy}”</p>
        <div style="margin-top:16px">
          <div class="profile-line"><span>Connections</span><b>${i.connections}</b></div>
          <div class="profile-line"><span>Household</span><b>${i.members.length} people</b></div>
          <div class="profile-line"><span>Today</span><b>${rl(e)}</b></div>
          <div class="profile-line"><span>Liquid funds</span><b>${bt(e.cash)}</b></div>
        </div>
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>The household</h3><p>Tap Family in the dock for every detail</p></div>
      <div class="member-grid">${i.members.map(nd).join("")}</div>
    </section>`}function xv(i,e){return`
    <section class="panel-section">
      <div class="stat-big-grid">
        <div class="stat-big"><small>HAPPINESS</small><b>${e.happiness}</b><i>household mood</i></div>
        <div class="stat-big"><small>STANDING</small><b>${e.prestige}</b><i>prestige</i></div>
        <div class="stat-big"><small>CONNECTIONS</small><b>${i.id==="average"?"0":i.id==="rich"?"Strong":"Global"}</b><i>${i.id==="average"?"no shortcuts":"doors open"}</i></div>
        <div class="stat-big"><small>TOGETHER</small><b>${e.trips.length}</b><i>journeys taken</i></div>
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>${i.familyName}</h3><p>${i.tagline}</p></div>
      <p style="margin:0 0 17px;max-width:720px;font-family:'Cormorant',serif;font-size:21px;line-height:1.35;color:rgba(243,235,221,.72)">${i.intro}</p>
      <div class="member-grid">${i.members.map(nd).join("")}</div>
    </section>
    <section class="panel-section split">
      <div class="panel-card warm">
        <span class="section-label">WHAT THEY BELIEVE</span>
        <p class="profile-quote">“${i.philosophy}”</p>
      </div>
      <div class="panel-card">
        <span class="section-label">THE FINE PRINT</span>
        <div class="profile-line"><span>Network</span><b>${i.connections}</b></div>
        <div class="profile-line"><span>Privacy</span><b>${i.privacy} / 100</b></div>
        <div class="profile-line"><span>Daily inflow</span><b>${bt(i.dailyIncome)}</b></div>
        <div class="profile-line"><span>Household clothing</span><b>${i.id==="average"?"High street & hand-me-downs":i.id==="rich"?"Designer, quietly worn":"Bespoke & couture"}</b></div>
      </div>
    </section>
    <div class="switch-household">
      <div><b>Curious about another life?</b><p>Switch households without losing this family's money, days or memories.</p></div>
      <button id="switch-household-btn" class="btn btn-quiet small">Choose another family</button>
    </div>`}function $i(i,e,t,n){return`
    <div class="asset-item">
      <div class="asset-icon">${us(i)}</div>
      <div class="asset-copy"><small>${e}</small><b>${t}</b><p>${n}</p></div>
    </div>`}function Mv(i,e){const t=i.businesses.reduce((n,s)=>n+Kh(s.daily),0);return`
    <section class="panel-section">
      ${id(i)}
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>House & transport</h3><p>Every object was preselected for this family</p></div>
      <div class="asset-grid">
        ${$i("home","RESIDENCE",i.house.name,`${i.house.location} · ${i.house.area} · ${bt(i.house.value)}`)}
        ${$i("car","CAR",i.vehicles.car,i.vehicles.carMeta)}
        ${$i("helicopter","HELICOPTER",i.vehicles.helicopter,i.vehicles.helicopterMeta)}
        ${$i("jet","PLANE",i.vehicles.plane,i.vehicles.planeMeta)}
        ${$i("boat","WATER",i.vehicles.boat,i.id==="average"?"A borrowed canoe at the lake":i.id==="rich"?"Chartered each August":"Crew of 18 · Mediterranean summer")}
        ${$i("watch","SIGNATURE",i.signature[0].value,"The object that says the most with the least noise.")}
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Businesses & work</h3><p>${bt(t)} distributed each day</p></div>
      <div class="list-card">
        ${i.businesses.map((n,s)=>`
          <div class="list-row">
            <div class="list-num">${String(s+1).padStart(2,"0")}</div>
            <div class="list-copy"><b>${n.name}</b><small>${n.sector} · ${n.share}</small></div>
            <div class="list-value"><b>${n.daily}</b><small>${n.value} value</small></div>
          </div>`).join("")}
      </div>
    </section>
    <section class="panel-section split-even">
      <div>
        <div class="section-head"><h3>Insurance</h3></div>
        <div class="list-card">
          ${i.insurance.map(n=>`
            <div class="list-row">
              <div class="asset-icon" style="width:28px;height:28px;border-radius:8px">${us("shield")}</div>
              <div class="list-copy"><b>${n.name}</b><small>${n.detail}</small></div>
              <div class="list-value"><b>${n.cover}</b><small>active</small></div>
            </div>`).join("")}
        </div>
      </div>
      <div>
        <div class="section-head"><h3>Other things</h3></div>
        <div class="sig-grid">
          ${i.signature.map(n=>`
            <div class="sig-item"><small>${n.label}</small><b>${n.value}</b></div>`).join("")}
        </div>
      </div>
    </section>
    <section class="panel-section">
      <div class="panel-card">
        <span class="section-label">WARDROBE, PRESELECTED</span>
        <div style="display:flex;flex-wrap:wrap;gap:7px;margin-top:2px">
          ${i.members.map(n=>`<span class="insurance-tag">${n.name}: ${n.outfit}</span>`).join("")}
        </div>
      </div>
    </section>`}function Sv(i,e){return`
    <button class="destination-card ${e?"selected":""}" data-destination="${i.id}" style="--dest-a:${i.palette[0]};--dest-b:${i.palette[1]}">
      <span class="dest-art">${rv(i.id)}</span>
      <span class="dest-content">
        <span class="dest-code">${i.code} · ${i.country.toUpperCase()}</span>
        <b>${i.city}</b>
        <small>${i.tag}</small>
        <span class="dest-price"><span>ECONOMY, ROUND TRIP</span><b>${bt(i.base)}</b></span>
      </span>
    </button>`}function yv(i,e){const t=Ao.find(r=>r.id===Tn.selectedDestination),n=Tn.selectedCabin||i.travel.defaultCabin;let s="";if(t){const r=Po(t,n),a=e.cash>=r,o=r-e.cash;s=`
      <div class="destination-detail" id="destination-detail">
        <div class="dd-head">
          <div><h3>${t.city}</h3><p>${t.note}</p></div>
          <span class="dd-tag">${t.tag}</span>
        </div>
        <div class="class-grid">
          ${Object.values(li).map(l=>`
            <button class="class-card ${l.id===n?"selected":""}" data-cabin="${l.id}">
              ${l.id===i.travel.defaultCabin?'<span class="recommend">SUGGESTED</span>':""}
              <b>${l.label}</b>
              <span class="class-kicker">${l.kicker}</span>
              <span class="class-price">${bt(Po(t,l.id))}</span>
              <small>${l.detail}</small>
              <span class="class-perks">${l.perks.map(c=>`<span>${c}</span>`).join("")}</span>
            </button>`).join("")}
        </div>
        <div class="booking-bar">
          <div class="booking-total"><small>ROUND TRIP · ${i.members.length} GUESTS</small><b>${bt(r)}</b></div>
          <button id="book-trip" class="btn btn-gold" ${a?"":"disabled"}>${a?`Book ${li[n].label}`:`Need ${bt(o)} more`} <span class="btn-arrow">→</span></button>
        </div>
        <p class="booking-note ${a?"":"warn"}">${a?`Charged to available funds. ${i.travel.aircraft} · ${t.hours} flight.`:`End a few days to collect income, then come back. You are ${bt(o)} short.`}</p>
      </div>`}return`
    <section class="panel-section">
      <div class="travel-intro">
        <div><span class="section-label">TEN DESTINATIONS</span><p style="margin:0;color:var(--muted);font-size:9px;line-height:1.5">Choose a city, then choose how you arrive. Economy, Business or First.</p></div>
        <div class="aircraft-chip">${us("jet")}${i.travel.aircraft}</div>
      </div>
      <div class="destination-grid">${Ao.map(r=>Sv(r,r.id===Tn.selectedDestination)).join("")}</div>
      ${s||`<div class="panel-card" style="margin-top:18px;text-align:center;padding:28px"><p style="margin:0;font-family:'Cormorant',serif;font-size:20px;color:rgba(243,235,221,.7)">Pick a city above to see Economy, Business and First Class.</p></div>`}
    </section>
    <section class="panel-section split-even">
      <div class="panel-card"><span class="section-label">YOUR TERMINAL</span><div class="profile-line"><span>Departure</span><b>${Ro[i.id].city} · ${Ro[i.id].code}</b></div><div class="profile-line"><span>Arrival</span><b>${i.travel.terminal}</b></div></div>
      <div class="panel-card warm"><span class="section-label">HOW YOU FLY</span><div class="profile-line"><span>Aircraft</span><b>${i.travel.aircraft}</b></div><div class="profile-line"><span>Suggested cabin</span><b>${li[i.travel.defaultCabin].label}</b></div></div>
    </section>`}function bv(i,e){const t=i.businesses.reduce((s,r)=>s+Kh(r.daily),0),n=Math.max(0,i.dailyIncome-t);return`
    <section class="panel-section">
      <div class="ledger-hero">
        <div><small>AVAILABLE FUNDS</small><span class="big-money">${bt(e.cash)}</span></div>
        <div class="ledger-hero-right"><b>+${bt(i.dailyIncome)} / day</b><small>Net worth ${bt(i.netWorth)}</small></div>
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Income</h3><p>Day ${e.day} · ${rl(e)}</p></div>
      <div class="list-card income-list">
        ${i.businesses.map(s=>`<div class="list-row"><div class="list-copy"><b>${s.name}</b><small>${s.sector} · ${s.share}</small></div><div class="list-value"><b>${s.daily}</b><small>daily</small></div></div>`).join("")}
        <div class="list-row"><div class="list-copy"><b>Salaries & investments</b><small>After tax and household costs</small></div><div class="list-value"><b>${bt(n)}</b><small>daily</small></div></div>
        <div class="list-row"><div class="list-copy"><b style="color:var(--gold-bright)">Total collected each day</b><small>Added when you end the day</small></div><div class="list-value"><b style="color:var(--gold-bright)">${bt(i.dailyIncome)}</b><small>net</small></div></div>
      </div>
      <div class="ledger-actions"><button id="panel-end-day" class="btn btn-gold">End the day · collect income <span class="btn-arrow">→</span></button></div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Jobs</h3><p>Work is part of the story</p></div>
      <div class="list-card">
        ${i.jobs.map(s=>`<div class="list-row"><div class="list-copy"><b>${s.member} · ${s.title}</b><small>${s.company}</small></div><div class="list-value"><b>${s.salary}</b><small>annual</small></div></div>`).join("")}
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Recent activity</h3><p>The household ledger</p></div>
      <div class="list-card">
        ${e.history.slice(0,8).map(s=>`<div class="list-row"><div class="list-num">${String(s.day).padStart(2,"0")}</div><div class="list-copy"><b>${s.title}</b><small>${s.detail}</small></div></div>`).join("")}
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Insurance & protection</h3></div>
      <div class="list-card">
        ${i.insurance.map(s=>`<div class="list-row"><div class="asset-icon" style="width:27px;height:27px;border-radius:8px">${us("shield")}</div><div class="list-copy"><b>${s.name}</b><small>${s.detail}</small></div><div class="list-value"><b>${s.cover}</b><small>active</small></div></div>`).join("")}
      </div>
    </section>`}function Ev(i,e,t){const n=ln(),s=Kn(),r=li[e],a=e==="first"?16:e==="business"?12:8,o=e==="first"?6:e==="business"?3:1;s.cash-=t,s.happiness=Math.min(100,s.happiness+a),s.prestige=Math.min(100,s.prestige+o),s.history.unshift({day:s.day,title:`${r.label} to ${i.city}`,detail:`${bt(t)} · ${n.travel.aircraft} · +${a} happiness.`}),s.history.length>18&&(s.history.length=18),s.trips.unshift({destination:i.id,cabin:e,price:t,day:s.day,happiness:a,standing:o}),s.trips.length>12&&(s.trips.length=12),vn={dest:i,cabinId:e,price:t,happiness:a,standing:o,origin:Ro[n.id]},fs(),pi(),Di(),ie("game-ui").classList.add("hidden"),ie("vacation-screen").classList.add("hidden"),wv()}function wv(){if(!vn)return;const i=vn,e=ln(),t=li[i.cabinId];Rt.showFlight(e,i.dest),ie("flight-screen").classList.remove("hidden"),ie("flight-class-label").textContent=`${t.label.toUpperCase()} CLASS`,ie("flight-from").textContent=i.origin.code,ie("flight-to").textContent=i.dest.code,ie("flight-route-label").textContent=`${i.origin.city.toUpperCase()} → ${i.dest.city.toUpperCase()}`,ie("flight-duration").textContent=i.dest.hours,ie("flight-perks").innerHTML=t.perks.map(l=>`<span>${l}</span>`).join(""),ie("flight-status-text").textContent="Wheels up.",ie("flight-percent").textContent="0%",ie("flight-progress-bar").style.width="0%";const n=document.querySelector(".route-plane");n&&(n.style.left="0%");const s=++Co,r=Pi?1200:6200,a=performance.now();Dt.swoosh();const o=l=>{if(s!==Co||!vn)return;const c=Math.min(1,(l-a)/r),h=Math.round(c*100);ie("flight-progress-bar").style.width=`${h}%`,ie("flight-percent").textContent=`${h}%`,n&&(n.style.left=`${h}%`);let d="Wheels up.";h>16&&(d="Climbing to cruise."),h>36&&(d="Somewhere over the ocean."),h>58&&(d="Cabin lights dim. Dinner is served."),h>78&&(d="Beginning the descent."),h>93&&(d=`Arriving in ${i.dest.city}.`),ie("flight-status-text").textContent=d,c<1?requestAnimationFrame(o):sd()};requestAnimationFrame(o)}function sd(){if(!vn)return;Co++;const i=vn;ln();const e=li[i.cabinId];ie("flight-screen").classList.add("hidden"),Rt.showDestination(i.dest),ie("vacation-class").textContent=`${e.label.toUpperCase()} CLASS`,ie("vacation-city").textContent=i.dest.city,ie("vacation-country").textContent=`${i.dest.country} · ${i.dest.code}`,ie("vacation-note").textContent=i.dest.note,ie("vacation-hotel").textContent=i.dest.hotel,ie("vacation-signature").textContent=i.dest.signature,ie("vacation-restaurant").textContent=i.dest.restaurant,ie("vacation-flight-meta").textContent=`${e.label.toUpperCase()} · ${i.dest.hours} · ${bt(i.price)}`,ie("vacation-bonus").textContent=`+${i.happiness} happiness · +${i.standing} standing`,ie("vacation-screen").classList.remove("hidden"),Dt.arrival(),pi()}function Tv(){if(!vn)return;const i=vn,e=ln(),t=Kn();ie("vacation-screen").classList.add("hidden"),ie("game-ui").classList.remove("hidden"),vn=null,Rt.returnHome(!0),Rt.setDayMood(t.day),fs(),pi(),Dt.chime(),Li("Home again",`${e.house.name} is exactly where you left it. ${i.dest.city} is already a memory.`,"⌂")}function rd(){vn||(Di(),ie("switch-options").innerHTML=Ci.map(i=>{const e=Zh(i.id);return`
      <button class="switch-option ${i.id===_n?"current":""}" data-switch="${i.id}">
        <span class="switch-option-left"><span class="mini-crest">${i.crest}</span><span><b>${i.familyName}</b><small>${i.tier} · day ${e.day}</small></span></span>
        <span class="so-money">${qr(e.cash)}</span>
      </button>`}).join(""),ie("switch-modal").classList.remove("hidden"),ie("switch-options").querySelectorAll("[data-switch]").forEach(i=>{i.addEventListener("click",()=>Av(i.dataset.switch))}),Dt.click())}function zs(){ie("switch-modal").classList.add("hidden")}function Av(i){if(i===_n){zs();return}zs(),pi(),_n=i;const e=ln(),t=Kn();Rt.setFamily(e,"home",!0),Rt.setDayMood(t.day),Rt.controls.autoRotate=!1,fs(),pi(),Dt.chime(),Li(`Now playing ${e.familyName}`,`${e.house.name} · ${bt(t.cash)} available · day ${t.day}.`,e.crest),document.querySelectorAll(".dock-item").forEach(n=>n.classList.toggle("active",n.dataset.view==="estate"))}ie("enter-btn").addEventListener("click",()=>ed());ie("resume-btn").addEventListener("click",()=>ed({resume:!0}));ie("sound-btn").addEventListener("click",()=>{Dt.setEnabled(!Dt.enabled);try{localStorage.setItem(qh,Dt.enabled?"0":"1")}catch{}Qh(),Dt.enabled&&Dt.chime()});ie("tutorial-close").addEventListener("click",()=>ie("tutorial").classList.add("hide"));ie("day-chip").addEventListener("click",al);ie("next-day-btn").addEventListener("click",al);ie("wealth-btn").addEventListener("click",()=>ol("ledger"));ie("house-btn").addEventListener("click",rd);ie("moment-btn").addEventListener("click",td);document.querySelectorAll(".dock-item").forEach(i=>{i.addEventListener("click",()=>{if(i.dataset.view==="estate"){Di();return}ol(i.dataset.view)})});ie("panel-close").addEventListener("click",Di);document.querySelector(".panel-backdrop").addEventListener("click",Di);ie("skip-flight").addEventListener("click",sd);ie("return-home").addEventListener("click",Tv);ie("switch-cancel").addEventListener("click",zs);document.querySelector(".switch-backdrop").addEventListener("click",zs);document.addEventListener("keydown",i=>{i.key==="Escape"&&(ie("switch-modal").classList.contains("hidden")?ie("panel").classList.contains("hidden")||Di():zs())});document.addEventListener("pointerdown",i=>{Dt.ctx||Dt.init(),i.target.closest("button")&&Dt.enabled&&Dt.click()});let bi=null;ie("scene").addEventListener("pointerdown",i=>{bi={x:i.clientX,y:i.clientY,t:performance.now(),pointerId:i.pointerId}});ie("scene").addEventListener("pointerup",i=>{if(!bi||bi.pointerId!==i.pointerId)return;const e=Math.hypot(i.clientX-bi.x,i.clientY-bi.y),t=performance.now()-bi.t;if(bi=null,e>9||t>700||ie("game-ui").classList.contains("hidden")||!ie("panel").classList.contains("hidden")||!ie("switch-modal").classList.contains("hidden"))return;const n=Rt.pick(i.clientX,i.clientY);if(n!==null){ol("family");const s=document.querySelectorAll(".member-card")[n];s&&(s.style.borderColor="rgba(216,178,116,.6)",s.scrollIntoView({behavior:Pi?"auto":"smooth",block:"center"}),setTimeout(()=>s.style.borderColor="",1700))}});window.addEventListener("resize",()=>{ie("panel").classList.contains("hidden")&&(Rt.controls.enabled=!0)});try{Dt.enabled=localStorage.getItem(qh)!=="1"}catch{}Qh();Rt.controls.enabled=!0;uv();
