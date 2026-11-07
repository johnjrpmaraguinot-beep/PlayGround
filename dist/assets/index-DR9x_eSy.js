(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Co="187",Qi={ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ud=0,Sl=1,fd=2,xr=1,kc=2,Es=3,wi=0,an=1,jt=2,ji=0,As=1,yl=2,bl=3,El=4,pd=5,Yi=100,md=101,gd=102,_d=103,vd=104,xd=200,Md=201,Sd=202,yd=203,zc=204,Hc=205,bd=206,Ed=207,wd=208,Td=209,Ad=210,Rd=211,Cd=212,Pd=213,Ld=214,Aa=0,Ra=1,Ca=2,Ds=3,Pa=4,La=5,Da=6,Ia=7,Gc=0,Dd=1,Id=2,Yn=0,Vc=1,Wc=2,Xc=3,Po=4,$c=5,qc=6,Yc=7,Zc=300,ss=301,Is=302,Zr=303,Kr=304,Na=1e3,qn=1001,Ua=1002,$t=1003,Nd=1004,$s=1005,ln=1006,Jr=1007,oi=1008,dn=1009,Kc=1010,Jc=1011,Ns=1012,Lo=1013,Fn=1014,In=1015,On=1016,Do=1017,Io=1018,rs=1020,Qc=35902,jc=35899,eh=1021,th=1022,Nn=1023,hi=1026,li=1027,nh=1028,No=1029,Ti=1030,Uo=1031,Fo=1033,Mr=33776,Sr=33777,yr=33778,br=33779,Fa=35840,Oa=35841,Ba=35842,ka=35843,za=36196,Ha=37492,Ga=37496,Va=37488,Wa=37489,Tr=37490,Xa=37491,$a=37808,qa=37809,Ya=37810,Za=37811,Ka=37812,Ja=37813,Qa=37814,ja=37815,eo=37816,to=37817,no=37818,io=37819,so=37820,ro=37821,ao=36492,oo=36494,lo=36495,co=36283,ho=36284,Ar=36285,uo=36286,Ud=3200,fo=0,Fd=1,ai="",sn="srgb",Rr="srgb-linear",Cr="linear",_t="srgb",Qr=7680,Od=519,Bd=512,kd=513,zd=514,ih=515,Hd=516,Gd=517,sh=518,rh=519,Vd=35044,wl="300 es",An=2e3,Us=2001;function Wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xd(){const i=Pr("canvas");return i.style.display="block",i}const Tl={};function Al(...i){const e="THREE."+i.shift();console.log(e,...i)}function ah(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=ah(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ut(...i){i=ah(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function es(...i){const e=i.join(" ");e in Tl||(Tl[e]=!0,$e(...i))}function $d(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const qd={[Aa]:Aa,[Ca]:Da,[Pa]:Pa,[Ds]:La,[Ra]:Ra,[Da]:Ca,[Ia]:Ia,[La]:Ds};class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,po=180/Math.PI;function hs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Yd(i,e){return(i%e+e)%e}function jr(i,e,t){return(1-t)*i+t*e}function Zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Oo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kd(i,e){if(e.constructor===Float32Array)return i;const t=Oo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Jd(i,e){if(e.constructor===Float32Array)return i;const t=Oo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Qd={DEG2RAD:Er},al=class al{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};al.prototype.isVector2=!0;let ce=al;class di{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,l){let c=n[r+0],h=n[r+1],d=n[r+2],u=n[r+3],p=a[o+0],m=a[o+1],x=a[o+2],y=a[o+3];if(u!==y||c!==p||h!==m||d!==x){let _=c*p+h*m+d*x+u*y;_<0&&(p=-p,m=-m,x=-x,y=-y,_=-_);let g=1-l;if(_<.9995){const E=Math.acos(_),R=Math.sin(E);g=Math.sin(g*E)/R,l=Math.sin(l*E)/R,c=c*g+p*l,h=h*g+m*l,d=d*g+x*l,u=u*g+y*l}else{c=c*g+p*l,h=h*g+m*l,d=d*g+x*l,u=u*g+y*l;const E=1/Math.sqrt(c*c+h*h+d*d+u*u);c*=E,h*=E,d*=E,u*=E}}e[t]=c,e[t+1]=h,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,a,o){const l=n[r],c=n[r+1],h=n[r+2],d=n[r+3],u=a[o],p=a[o+1],m=a[o+2],x=a[o+3];return e[t]=l*x+d*u+c*m-h*p,e[t+1]=c*x+d*p+h*u-l*m,e[t+2]=h*x+d*m+l*p-c*u,e[t+3]=d*x-l*u-c*p-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,l=Math.cos,c=Math.sin,h=l(n/2),d=l(r/2),u=l(a/2),p=c(n/2),m=c(r/2),x=c(a/2);switch(o){case"XYZ":this._x=p*d*u+h*m*x,this._y=h*m*u-p*d*x,this._z=h*d*x+p*m*u,this._w=h*d*u-p*m*x;break;case"YXZ":this._x=p*d*u+h*m*x,this._y=h*m*u-p*d*x,this._z=h*d*x-p*m*u,this._w=h*d*u+p*m*x;break;case"ZXY":this._x=p*d*u-h*m*x,this._y=h*m*u+p*d*x,this._z=h*d*x+p*m*u,this._w=h*d*u-p*m*x;break;case"ZYX":this._x=p*d*u-h*m*x,this._y=h*m*u+p*d*x,this._z=h*d*x-p*m*u,this._w=h*d*u+p*m*x;break;case"YZX":this._x=p*d*u+h*m*x,this._y=h*m*u+p*d*x,this._z=h*d*x-p*m*u,this._w=h*d*u-p*m*x;break;case"XZY":this._x=p*d*u-h*m*x,this._y=h*m*u-p*d*x,this._z=h*d*x+p*m*u,this._w=h*d*u+p*m*x;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],l=t[5],c=t[9],h=t[2],d=t[6],u=t[10],p=n+l+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(a-h)*m,this._z=(o-r)*m}else if(n>l&&n>u){const m=2*Math.sqrt(1+n-l-u);this._w=(d-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+h)/m}else if(l>u){const m=2*Math.sqrt(1+l-n-u);this._w=(a-h)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-n-l);this._w=(o-r)/m,this._x=(a+h)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,l=t._x,c=t._y,h=t._z,d=t._w;return this._x=n*d+o*l+r*h-a*c,this._y=r*d+o*c+a*l-n*h,this._z=a*d+o*h+n*c-r*l,this._w=o*d-n*l-r*c-a*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,a=-a,o=-o,l=-l);let c=1-t;if(l<.9995){const h=Math.acos(l),d=Math.sin(h);c=Math.sin(c*h)/d,t=Math.sin(t*h)/d,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ol=class ol{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,l=e.z,c=e.w,h=2*(o*r-l*n),d=2*(l*t-a*r),u=2*(a*n-o*t);return this.x=t+c*h+o*u-l*d,this.y=n+c*d+l*h-a*u,this.z=r+c*u+a*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,l=t.y,c=t.z;return this.x=r*c-a*l,this.y=a*o-n*c,this.z=n*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ol.prototype.isVector3=!0;let D=ol;const ea=new D,Rl=new di,ll=class ll{constructor(e,t,n,r,a,o,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,l,c,h)}set(e,t,n,r,a,o,l,c,h){const d=this.elements;return d[0]=e,d[1]=r,d[2]=l,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],l=n[3],c=n[6],h=n[1],d=n[4],u=n[7],p=n[2],m=n[5],x=n[8],y=r[0],_=r[3],g=r[6],E=r[1],R=r[4],S=r[7],A=r[2],w=r[5],v=r[8];return a[0]=o*y+l*E+c*A,a[3]=o*_+l*R+c*w,a[6]=o*g+l*S+c*v,a[1]=h*y+d*E+u*A,a[4]=h*_+d*R+u*w,a[7]=h*g+d*S+u*v,a[2]=p*y+m*E+x*A,a[5]=p*_+m*R+x*w,a[8]=p*g+m*S+x*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8];return t*o*d-t*l*h-n*a*d+n*l*c+r*a*h-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=d*o-l*h,p=l*c-d*a,m=h*a-o*c,x=t*u+n*p+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=u*y,e[1]=(r*h-d*n)*y,e[2]=(l*n-r*o)*y,e[3]=p*y,e[4]=(d*t-r*c)*y,e[5]=(r*a-l*t)*y,e[6]=m*y,e[7]=(n*c-h*t)*y,e[8]=(o*t-n*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,l){const c=Math.cos(a),h=Math.sin(a);return this.set(n*c,n*h,-n*(c*o+h*l)+o+e,-r*h,r*c,-r*(-h*o+c*l)+l+t,0,0,1),this}scale(e,t){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ta.makeScale(e,t)),this}rotate(e){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ll.prototype.isMatrix3=!0;let Ye=ll;const ta=new Ye,Cl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){const i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(r,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===_t&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=ts(r.r),r.g=ts(r.g),r.b=ts(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?Cr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const ct=jd();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class eu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Pr("canvas")),Ni.width=e.width,Ni.height=e.height;const r=Ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Zn(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tu=0;class Bo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?a.push(na(r[o].image)):a.push(na(r[o]))}else a=na(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let nu=0;const ia=new D;class en extends mi{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=qn,r=qn,a=ln,o=oi,l=Nn,c=dn,h=en.DEFAULT_ANISOTROPY,d=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=hs(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Na:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Na:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Zc;en.DEFAULT_ANISOTROPY=1;const cl=class cl{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,h=c[0],d=c[4],u=c[8],p=c[1],m=c[5],x=c[9],y=c[2],_=c[6],g=c[10];if(Math.abs(d-p)<.01&&Math.abs(u-y)<.01&&Math.abs(x-_)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+y)<.1&&Math.abs(x+_)<.1&&Math.abs(h+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,S=(m+1)/2,A=(g+1)/2,w=(d+p)/4,v=(u+y)/4,T=(x+_)/4;return R>S&&R>A?R<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(R),r=w/n,a=v/n):S>A?S<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),n=w/r,a=T/r):A<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),n=v/a,r=T/a),this.set(n,r,a,t),this}let E=Math.sqrt((_-x)*(_-x)+(u-y)*(u-y)+(p-d)*(p-d));return Math.abs(E)<.001&&(E=1),this.x=(_-x)/E,this.y=(u-y)/E,this.z=(p-d)/E,this.w=Math.acos((h+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cl.prototype.isVector4=!0;let At=cl;class iu extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=new en({width:e,height:t,depth:n.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends iu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oh extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class su extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Br=class Br{constructor(e,t,n,r,a,o,l,c,h,d,u,p,m,x,y,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,l,c,h,d,u,p,m,x,y,_)}set(e,t,n,r,a,o,l,c,h,d,u,p,m,x,y,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=a,g[5]=o,g[9]=l,g[13]=c,g[2]=h,g[6]=d,g[10]=u,g[14]=p,g[3]=m,g[7]=x,g[11]=y,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Br().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),a=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r),d=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const p=o*d,m=o*u,x=l*d,y=l*u;t[0]=c*d,t[4]=-c*u,t[8]=h,t[1]=m+x*h,t[5]=p-y*h,t[9]=-l*c,t[2]=y-p*h,t[6]=x+m*h,t[10]=o*c}else if(e.order==="YXZ"){const p=c*d,m=c*u,x=h*d,y=h*u;t[0]=p+y*l,t[4]=x*l-m,t[8]=o*h,t[1]=o*u,t[5]=o*d,t[9]=-l,t[2]=m*l-x,t[6]=y+p*l,t[10]=o*c}else if(e.order==="ZXY"){const p=c*d,m=c*u,x=h*d,y=h*u;t[0]=p-y*l,t[4]=-o*u,t[8]=x+m*l,t[1]=m+x*l,t[5]=o*d,t[9]=y-p*l,t[2]=-o*h,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const p=o*d,m=o*u,x=l*d,y=l*u;t[0]=c*d,t[4]=x*h-m,t[8]=p*h+y,t[1]=c*u,t[5]=y*h+p,t[9]=m*h-x,t[2]=-h,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,m=o*h,x=l*c,y=l*h;t[0]=c*d,t[4]=y-p*u,t[8]=x*u+m,t[1]=u,t[5]=o*d,t[9]=-l*d,t[2]=-h*d,t[6]=m*u+x,t[10]=p-y*u}else if(e.order==="XZY"){const p=o*c,m=o*h,x=l*c,y=l*h;t[0]=c*d,t[4]=-u,t[8]=h*d,t[1]=p*u+y,t[5]=o*d,t[9]=m*u-x,t[2]=x*u-m,t[6]=l*d,t[10]=y*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ru,e,au)}lookAt(e,t,n){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ti.crossVectors(n,cn),ti.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ti.crossVectors(n,cn)),ti.normalize(),qs.crossVectors(cn,ti),r[0]=ti.x,r[4]=qs.x,r[8]=cn.x,r[1]=ti.y,r[5]=qs.y,r[9]=cn.y,r[2]=ti.z,r[6]=qs.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],l=n[4],c=n[8],h=n[12],d=n[1],u=n[5],p=n[9],m=n[13],x=n[2],y=n[6],_=n[10],g=n[14],E=n[3],R=n[7],S=n[11],A=n[15],w=r[0],v=r[4],T=r[8],O=r[12],P=r[1],N=r[5],B=r[9],W=r[13],I=r[2],V=r[6],Y=r[10],z=r[14],ae=r[3],$=r[7],ee=r[11],se=r[15];return a[0]=o*w+l*P+c*I+h*ae,a[4]=o*v+l*N+c*V+h*$,a[8]=o*T+l*B+c*Y+h*ee,a[12]=o*O+l*W+c*z+h*se,a[1]=d*w+u*P+p*I+m*ae,a[5]=d*v+u*N+p*V+m*$,a[9]=d*T+u*B+p*Y+m*ee,a[13]=d*O+u*W+p*z+m*se,a[2]=x*w+y*P+_*I+g*ae,a[6]=x*v+y*N+_*V+g*$,a[10]=x*T+y*B+_*Y+g*ee,a[14]=x*O+y*W+_*z+g*se,a[3]=E*w+R*P+S*I+A*ae,a[7]=E*v+R*N+S*V+A*$,a[11]=E*T+R*B+S*Y+A*ee,a[15]=E*O+R*W+S*z+A*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],l=e[5],c=e[9],h=e[13],d=e[2],u=e[6],p=e[10],m=e[14],x=e[3],y=e[7],_=e[11],g=e[15],E=c*m-h*p,R=l*m-h*u,S=l*p-c*u,A=o*m-h*d,w=o*p-c*d,v=o*u-l*d;return t*(y*E-_*R+g*S)-n*(x*E-_*A+g*w)+r*(x*R-y*A+g*v)-a*(x*S-y*w+_*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10];return t*(o*d-l*h)-n*(a*d-l*c)+r*(a*h-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=e[9],p=e[10],m=e[11],x=e[12],y=e[13],_=e[14],g=e[15],E=t*l-n*o,R=t*c-r*o,S=t*h-a*o,A=n*c-r*l,w=n*h-a*l,v=r*h-a*c,T=d*y-u*x,O=d*_-p*x,P=d*g-m*x,N=u*_-p*y,B=u*g-m*y,W=p*g-m*_,I=E*W-R*B+S*N+A*P-w*O+v*T;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return e[0]=(l*W-c*B+h*N)*V,e[1]=(r*B-n*W-a*N)*V,e[2]=(y*v-_*w+g*A)*V,e[3]=(p*w-u*v-m*A)*V,e[4]=(c*P-o*W-h*O)*V,e[5]=(t*W-r*P+a*O)*V,e[6]=(_*S-x*v-g*R)*V,e[7]=(d*v-p*S+m*R)*V,e[8]=(o*B-l*P+h*T)*V,e[9]=(n*P-t*B-a*T)*V,e[10]=(x*w-y*S+g*E)*V,e[11]=(u*S-d*w-m*E)*V,e[12]=(l*O-o*N-c*T)*V,e[13]=(t*N-n*O+r*T)*V,e[14]=(y*R-x*A-_*E)*V,e[15]=(d*A-u*R+p*E)*V,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,l=e.y,c=e.z,h=a*o,d=a*l;return this.set(h*o+n,h*l-r*c,h*c+r*l,0,h*l+r*c,d*l+n,d*c-r*o,0,h*c-r*l,d*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,l=t._z,c=t._w,h=a+a,d=o+o,u=l+l,p=a*h,m=a*d,x=a*u,y=o*d,_=o*u,g=l*u,E=c*h,R=c*d,S=c*u,A=n.x,w=n.y,v=n.z;return r[0]=(1-(y+g))*A,r[1]=(m+S)*A,r[2]=(x-R)*A,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(p+g))*w,r[6]=(_+E)*w,r[7]=0,r[8]=(x+R)*v,r[9]=(_-E)*v,r[10]=(1-(p+y))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let o=Ui.set(r[0],r[1],r[2]).length();const l=Ui.set(r[4],r[5],r[6]).length(),c=Ui.set(r[8],r[9],r[10]).length();a<0&&(o=-o),yn.copy(this);const h=1/o,d=1/l,u=1/c;return yn.elements[0]*=h,yn.elements[1]*=h,yn.elements[2]*=h,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,r,a,o,l=An,c=!1){const h=this.elements,d=2*a/(t-e),u=2*a/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let x,y;if(c)x=a/(o-a),y=o*a/(o-a);else if(l===An)x=-(o+a)/(o-a),y=-2*o*a/(o-a);else if(l===Us)x=-o/(o-a),y=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=u,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,o,l=An,c=!1){const h=this.elements,d=2/(t-e),u=2/(n-r),p=-(t+e)/(t-e),m=-(n+r)/(n-r);let x,y;if(c)x=1/(o-a),y=o/(o-a);else if(l===An)x=-2/(o-a),y=-(o+a)/(o-a);else if(l===Us)x=-1/(o-a),y=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=u,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Br.prototype.isMatrix4=!0;let yt=Br;const Ui=new D,yn=new yt,ru=new D(0,0,0),au=new D(1,1,1),ti=new D,qs=new D,cn=new D,Ll=new yt,Dl=new di;class ui{constructor(e=0,t=0,n=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],l=r[8],c=r[1],h=r[5],d=r[9],u=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ou=0;const Il=new D,Fi=new di,Hn=new yt,Ys=new D,_s=new D,lu=new D,cu=new di,Nl=new D(1,0,0),Ul=new D(0,1,0),Fl=new D(0,0,1),Ol={type:"added"},hu={type:"removed"},Oi={type:"childadded",child:null},sa={type:"childremoved",child:null};class Vt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new D,t=new ui,n=new di,r=new D(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ye}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Ul,e)}rotateZ(e){return this.rotateOnAxis(Fl,e)}translateOnAxis(e,t){return Il.copy(e).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Ul,e)}translateZ(e){return this.translateOnAxis(Fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(_s,Ys,this.up):Hn.lookAt(Ys,_s,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ol),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu),sa.child=e,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ol),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let o=0,l=a.length;o<l;o++)a[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const u=c[h];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(e.materials,this.material[c]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(a(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),h=o(e.textures),d=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(l){const c=[];for(const h in l){const d=l[h];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vt.DEFAULT_UP=new D(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class We extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const du={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const l=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const y of e.hand.values()){const _=t.getJointPose(y,n),g=this._getHandJoint(h,y);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const d=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],p=d.position.distanceTo(u.position),m=.02,x=.005;h.inputState.pinching&&p>m+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=m-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(du)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new We;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=Yd(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=aa(o,a,e+1/3),this.g=aa(o,a,e),this.b=aa(o,a,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=sn){function n(a){a!==void 0&&parseFloat(a)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=lh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return ct.workingToColorSpace(Qt.copy(this),e),Math.round(et(Qt.r*255,0,255))*65536+Math.round(et(Qt.g*255,0,255))*256+Math.round(et(Qt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,a=Qt.b,o=Math.max(n,r,a),l=Math.min(n,r,a);let c,h;const d=(l+o)/2;if(l===o)c=0,h=0;else{const u=o-l;switch(h=d<=.5?u/(o+l):u/(2-o-l),o){case n:c=(r-a)/u+(r<a?6:0);break;case r:c=(a-n)/u+2;break;case a:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=h,e.l=d,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=sn){ct.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Zs);const n=jr(ni.h,Zs.h,t),r=jr(ni.s,Zs.s,t),a=jr(ni.l,Zs.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Oe;Oe.NAMES=lh;class zo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uu extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new D,Gn=new D,oa=new D,Vn=new D,Bi=new D,ki=new D,Bl=new D,la=new D,ca=new D,ha=new D,da=new At,ua=new At,fa=new At;class wn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){bn.subVectors(r,t),Gn.subVectors(n,t),oa.subVectors(e,t);const o=bn.dot(bn),l=bn.dot(Gn),c=bn.dot(oa),h=Gn.dot(Gn),d=Gn.dot(oa),u=o*h-l*l;if(u===0)return a.set(0,0,0),null;const p=1/u,m=(h*c-l*d)*p,x=(o*d-l*c)*p;return a.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,a,o,l,c){return this.getBarycoord(e,t,n,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(l,Vn.z),c)}static getInterpolatedAttribute(e,t,n,r,a,o){return da.setScalar(0),ua.setScalar(0),fa.setScalar(0),da.fromBufferAttribute(e,t),ua.fromBufferAttribute(e,n),fa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(da,a.x),o.addScaledVector(ua,a.y),o.addScaledVector(fa,a.z),o}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),Gn.subVectors(e,t),bn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),bn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,l;Bi.subVectors(r,n),ki.subVectors(a,n),la.subVectors(e,n);const c=Bi.dot(la),h=ki.dot(la);if(c<=0&&h<=0)return t.copy(n);ca.subVectors(e,r);const d=Bi.dot(ca),u=ki.dot(ca);if(d>=0&&u<=d)return t.copy(r);const p=c*u-d*h;if(p<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(n).addScaledVector(Bi,o);ha.subVectors(e,a);const m=Bi.dot(ha),x=ki.dot(ha);if(x>=0&&m<=x)return t.copy(a);const y=m*h-c*x;if(y<=0&&h>=0&&x<=0)return l=h/(h-x),t.copy(n).addScaledVector(ki,l);const _=d*x-m*u;if(_<=0&&u-d>=0&&m-x>=0)return Bl.subVectors(a,r),l=(u-d)/(u-d+(m-x)),t.copy(r).addScaledVector(Bl,l);const g=1/(_+y+p);return o=y*g,l=p*g,t.copy(n).addScaledVector(Bi,o).addScaledVector(ki,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gs{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,l=a.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(a,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Js.subVectors(this.max,vs),zi.subVectors(e.a,vs),Hi.subVectors(e.b,vs),Gi.subVectors(e.c,vs),ii.subVectors(Hi,zi),si.subVectors(Gi,Hi),Mi.subVectors(zi,Gi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ii.z,0,-ii.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ii.y,ii.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!pa(t,zi,Hi,Gi,Js)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,zi,Hi,Gi,Js))?!1:(Qs.crossVectors(ii,si),t=[Qs.x,Qs.y,Qs.z],pa(t,zi,Hi,Gi,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new D,new D,new D,new D,new D,new D,new D,new D],En=new D,Ks=new Gs,zi=new D,Hi=new D,Gi=new D,ii=new D,si=new D,Mi=new D,vs=new D,Js=new D,Qs=new D,Si=new D;function pa(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){Si.fromArray(i,a);const l=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),c=e.dot(Si),h=t.dot(Si),d=n.dot(Si);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>l)return!1}return!0}const Dt=new D,js=new ce;let fu=0;class Kn extends mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vd,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=e!==void 0?Oo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kd(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jd(e,this.array)}}class ch extends Kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hh extends Kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends Kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const pu=new Gs,xs=new D,ma=new D;class kr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pu.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(ma)),this.expandByPoint(xs.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mu=0;const pn=new yt,ga=new Vt,Vi=new D,hn=new Gs,Ms=new Gs,Gt=new D;class Yt extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?hh:ch)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ye().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];hn.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];Ms.setFromBufferAttribute(l),this.morphTargetsRelative?(Gt.addVectors(hn.min,Ms.min),hn.expandByPoint(Gt),Gt.addVectors(hn.max,Ms.max),hn.expandByPoint(Gt)):(hn.expandByPoint(Ms.min),hn.expandByPoint(Ms.max))}hn.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Gt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Gt));if(t)for(let a=0,o=t.length;a<o;a++){const l=t[a],c=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Gt.fromBufferAttribute(l,h),c&&(Vi.fromBufferAttribute(e,h),Gt.add(Vi)),r=Math.max(r,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Kn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const l=[],c=[],h=new Uint8Array(n.count);for(let O=0;O<n.count;O++)l[O]=new D,c[O]=new D;const d=new D,u=new D,p=new D,m=new ce,x=new ce,y=new ce,_=new D,g=new D;function E(O,P,N){h[O]=h[P]=h[N]=1,d.fromBufferAttribute(n,O),u.fromBufferAttribute(n,P),p.fromBufferAttribute(n,N),m.fromBufferAttribute(a,O),x.fromBufferAttribute(a,P),y.fromBufferAttribute(a,N),u.sub(d),p.sub(d),x.sub(m),y.sub(m);const B=1/(x.x*y.y-y.x*x.y);isFinite(B)&&(_.copy(u).multiplyScalar(y.y).addScaledVector(p,-x.y).multiplyScalar(B),g.copy(p).multiplyScalar(x.x).addScaledVector(u,-y.x).multiplyScalar(B),l[O].add(_),l[P].add(_),l[N].add(_),c[O].add(g),c[P].add(g),c[N].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let O=0,P=R.length;O<P;++O){const N=R[O],B=N.start,W=N.count;for(let I=B,V=B+W;I<V;I+=3)E(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const S=new D,A=new D,w=new D,v=new D;function T(O){w.fromBufferAttribute(r,O),v.copy(w);const P=l[O];S.copy(P),S.sub(w.multiplyScalar(w.dot(P))).normalize(),A.crossVectors(v,P);const B=A.dot(c[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,B)}for(let O=0,P=n.count;O<P;++O)h[O]&&T(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D,u=new D;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),y=e.getX(p+1),_=e.getX(p+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,y),o.fromBufferAttribute(t,_),d.subVectors(o,a),u.subVectors(r,a),d.cross(u),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,_),l.add(d),c.add(d),h.add(d),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,a),u.subVectors(r,a),d.cross(u),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(l,c){const h=l.array,d=l.itemSize,u=l.normalized,p=new h.constructor(c.length*d);let m=0,x=0;for(let y=0,_=c.length;y<_;y++){l.isInterleavedBufferAttribute?m=c[y]*l.data.stride+l.offset:m=c[y]*d;for(let g=0;g<d;g++)p[x++]=h[m++]}return new Kn(p,d,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],h=e(c,n);t.setAttribute(l,h)}const a=this.morphAttributes;for(const l in a){const c=[],h=a[l];for(let d=0,u=h.length;d<u;d++){const p=h[d],m=e(p,n);c.push(m)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let u=0,p=h.length;u<p;u++){const m=h[u];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(t))}const a=e.morphAttributes;for(const h in a){const d=[],u=a[h];for(let p=0,m=u.length;p<m;p++)d.push(u[p].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _a=new D,gu=new D,_u=new Ye;class $n{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_a.subVectors(n,t).cross(gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(_a),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_u.getNormalMatrix(e),r=this.coplanarPoint(_a).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let vu=0;class ds extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=As,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new $n().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xn=new D,va=new D,er=new D,tr=new D;class zr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){va.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(va);const a=e.distanceTo(t)*.5,o=-this.direction.dot(er),l=tr.dot(this.direction),c=-tr.dot(er),h=tr.lengthSq(),d=Math.abs(1-o*o);let u,p,m,x;if(d>0)if(u=o*c-l,p=o*l-c,x=a*d,u>=0)if(p>=-x)if(p<=x){const y=1/d;u*=y,p*=y,m=u*(u+o*p+2*l)+p*(o*u+p+2*c)+h}else p=a,u=Math.max(0,-(o*p+l)),m=-u*u+p*(p+2*c)+h;else p=-a,u=Math.max(0,-(o*p+l)),m=-u*u+p*(p+2*c)+h;else p<=-x?(u=Math.max(0,-(-o*a+l)),p=u>0?-a:Math.min(Math.max(-a,-c),a),m=-u*u+p*(p+2*c)+h):p<=x?(u=0,p=Math.min(Math.max(-a,-c),a),m=p*(p+2*c)+h):(u=Math.max(0,-(o*a+l)),p=u>0?a:Math.min(Math.max(-a,-c),a),m=-u*u+p*(p+2*c)+h);else p=o>0?-a:a,u=Math.max(0,-(o*p+l)),m=-u*u+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(va).addScaledVector(er,p),m}intersectSphere(e,t){if(e.radius<0)return null;Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,l,c;const h=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,r=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,r=(e.min.x-p.x)*h),d>=0?(a=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(a=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),u>=0?(l=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(l=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,r,a){const o=this.origin,l=this.direction,c=l.x,h=l.y,d=l.z,u=e.x-o.x,p=e.y-o.y,m=e.z-o.z,x=t.x-o.x,y=t.y-o.y,_=t.z-o.z,g=n.x-o.x,E=n.y-o.y,R=n.z-o.z,S=Math.abs(c),A=Math.abs(h),w=Math.abs(d);let v,T,O,P,N,B,W,I,V,Y,z,ae;if(S>=A&&S>=w?(O=c,B=u,V=x,ae=g,c>=0?(v=h,T=d,P=p,N=m,W=y,I=_,Y=E,z=R):(v=d,T=h,P=m,N=p,W=_,I=y,Y=R,z=E)):A>=w?(O=h,B=p,V=y,ae=E,h>=0?(v=d,T=c,P=m,N=u,W=_,I=x,Y=R,z=g):(v=c,T=d,P=u,N=m,W=x,I=_,Y=g,z=R)):(O=d,B=m,V=_,ae=R,d>=0?(v=c,T=h,P=u,N=p,W=x,I=y,Y=g,z=E):(v=h,T=c,P=p,N=u,W=y,I=x,Y=E,z=g)),O===0)return null;const $=v/O,ee=T/O,se=1/O,Ce=P-$*B,Ge=N-ee*B,Z=W-$*V,ye=I-ee*V,Pe=Y-$*ae,ke=z-ee*ae,be=Pe*ye-ke*Z,ze=Ce*ke-Ge*Pe,bt=Z*Ge-ye*Ce;if(r){if(be<0||ze<0||bt<0)return null}else if((be<0||ze<0||bt<0)&&(be>0||ze>0||bt>0))return null;const Ve=be+ze+bt;if(Ve===0)return null;const tt=se*(be*B+ze*V+bt*ae);return(Ve>0?tt<0:tt>0)?null:this.at(tt/Ve,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kl=new yt,yi=new zr,nr=new kr,zl=new D,ir=new D,sr=new D,rr=new D,xa=new D,ar=new D,Hl=new D,or=new D;class Te extends Vt{constructor(e=new Yt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(a&&l){ar.set(0,0,0);for(let c=0,h=a.length;c<h;c++){const d=l[c],u=a[c];d!==0&&(xa.fromBufferAttribute(u,e),o?ar.addScaledVector(xa,d):ar.addScaledVector(xa.sub(t),d))}t.add(ar)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(a),yi.copy(e.ray).recast(e.near),!(nr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(nr,zl)===null||yi.origin.distanceToSquared(zl)>(e.far-e.near)**2))&&(kl.copy(a).invert(),yi.copy(e.ray).applyMatrix4(kl),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,l=a.index,c=a.attributes.position,h=a.attributes.uv,d=a.attributes.uv1,u=a.attributes.normal,p=a.groups,m=a.drawRange;if(l!==null)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const _=p[x],g=o[_.materialIndex],E=Math.max(_.start,m.start),R=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let S=E,A=R;S<A;S+=3){const w=l.getX(S),v=l.getX(S+1),T=l.getX(S+2);r=lr(this,g,e,n,h,d,u,w,v,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let _=x,g=y;_<g;_+=3){const E=l.getX(_),R=l.getX(_+1),S=l.getX(_+2);r=lr(this,o,e,n,h,d,u,E,R,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const _=p[x],g=o[_.materialIndex],E=Math.max(_.start,m.start),R=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let S=E,A=R;S<A;S+=3){const w=S,v=S+1,T=S+2;r=lr(this,g,e,n,h,d,u,w,v,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let _=x,g=y;_<g;_+=3){const E=_,R=_+1,S=_+2;r=lr(this,o,e,n,h,d,u,E,R,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function xu(i,e,t,n,r,a,o,l){let c;if(e.side===an?c=n.intersectTriangle(o,a,r,!0,l):c=n.intersectTriangle(r,a,o,e.side===wi,l),c===null)return null;or.copy(l),or.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(or);return h<t.near||h>t.far?null:{distance:h,point:or.clone(),object:i}}function lr(i,e,t,n,r,a,o,l,c,h){i.getVertexPosition(l,ir),i.getVertexPosition(c,sr),i.getVertexPosition(h,rr);const d=xu(i,e,t,n,ir,sr,rr,Hl);if(d){const u=new D;wn.getBarycoord(Hl,ir,sr,rr,u),r&&(d.uv=wn.getInterpolatedAttribute(r,l,c,h,u,new ce)),a&&(d.uv1=wn.getInterpolatedAttribute(a,l,c,h,u,new ce)),o&&(d.normal=wn.getInterpolatedAttribute(o,l,c,h,u,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:c,c:h,normal:new D,materialIndex:0};wn.getNormal(ir,sr,rr,p.normal),d.face=p,d.barycoord=u}return d}class Mu extends en{constructor(e=null,t=1,n=1,r,a,o,l,c,h=$t,d=$t,u,p){super(null,o,l,c,h,d,r,a,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bi=new kr,Su=new ce(.5,.5),cr=new D;class Fs{constructor(e=new $n,t=new $n,n=new $n,r=new $n,a=new $n,o=new $n){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){const r=this.planes,a=e.elements,o=a[0],l=a[1],c=a[2],h=a[3],d=a[4],u=a[5],p=a[6],m=a[7],x=a[8],y=a[9],_=a[10],g=a[11],E=a[12],R=a[13],S=a[14],A=a[15];if(r[0].setComponents(h-o,m-d,g-x,A-E).normalize(),r[1].setComponents(h+o,m+d,g+x,A+E).normalize(),r[2].setComponents(h+l,m+u,g+y,A+R).normalize(),r[3].setComponents(h-l,m-u,g-y,A-R).normalize(),n)r[4].setComponents(c,p,_,S).normalize(),r[5].setComponents(h-c,m-p,g-_,A-S).normalize();else if(r[4].setComponents(h-c,m-p,g-_,A-S).normalize(),t===An)r[5].setComponents(h+c,m+p,g+_,A+S).normalize();else if(t===Us)r[5].setComponents(c,p,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=Su.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(cr.x=r.normal.x>0?e.max.x:e.min.x,cr.y=r.normal.y>0?e.max.y:e.min.y,cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Gl=new yt;class Ho{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const a=t[r];Gl.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),n[r]===void 0&&(n[r]=new Fs),n[r].setFromProjectionMatrix(Gl,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Fs),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Ho().copy(this)}}class Go extends ds{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vl=new yt,mo=new zr,hr=new kr,dr=new D;class dh extends Vt{constructor(e=new Yt,t=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),hr.radius+=a,e.ray.intersectsSphere(hr)===!1)return;Vl.copy(r).invert(),mo.copy(e.ray).applyMatrix4(Vl);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=p,y=m;x<y;x++){const _=h.getX(x);dr.fromBufferAttribute(u,_),Wl(dr,_,c,r,e,t,this)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,y=m;x<y;x++)dr.fromBufferAttribute(u,x),Wl(dr,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Wl(i,e,t,n,r,a,o){const l=mo.distanceSqToPoint(i);if(l<t){const c=new D;mo.closestPointToPoint(i,c),c.applyMatrix4(n);const h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class uh extends en{constructor(e=[],t=ss,n,r,a,o,l,c,h,d){super(e,t,n,r,a,o,l,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fh extends en{constructor(e,t,n,r,a,o,l,c,h){super(e,t,n,r,a,o,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class as extends en{constructor(e,t,n=Fn,r,a,o,l=$t,c=$t,h,d=hi,u=1){if(d!==hi&&d!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,r,a,o,l,c,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ph extends as{constructor(e,t=Fn,n=ss,r,a,o=$t,l=$t,c,h=hi){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,r,a,o,l,c,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mh extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qn extends Yt{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const l=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],h=[],d=[],u=[];let p=0,m=0;x("z","y","x",-1,-1,n,t,e,o,a,0),x("z","y","x",1,-1,n,t,-e,o,a,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(u,2));function x(y,_,g,E,R,S,A,w,v,T,O){const P=S/v,N=A/T,B=S/2,W=A/2,I=w/2,V=v+1,Y=T+1;let z=0,ae=0;const $=new D;for(let ee=0;ee<Y;ee++){const se=ee*N-W;for(let Ce=0;Ce<V;Ce++){const Ge=Ce*P-B;$[y]=Ge*E,$[_]=se*R,$[g]=I,h.push($.x,$.y,$.z),$[y]=0,$[_]=0,$[g]=w>0?1:-1,d.push($.x,$.y,$.z),u.push(Ce/v),u.push(1-ee/T),z+=1}}for(let ee=0;ee<T;ee++)for(let se=0;se<v;se++){const Ce=p+se+V*ee,Ge=p+se+V*(ee+1),Z=p+(se+1)+V*(ee+1),ye=p+(se+1)+V*ee;c.push(Ce,Ge,ye),c.push(Ge,Z,ye),ae+=6}l.addGroup(m,ae,O),m+=ae,p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ki extends Yt{constructor(e=1,t=1,n=4,r=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),a=Math.max(1,Math.floor(a));const o=[],l=[],c=[],h=[],d=t/2,u=Math.PI/2*e,p=t,m=2*u+p,x=n*2+a,y=r+1,_=new D,g=new D;for(let E=0;E<=x;E++){let R=0,S=0,A=0,w=0;if(E<=n){const O=E/n,P=O*Math.PI/2;S=-d-e*Math.cos(P),A=e*Math.sin(P),w=-e*Math.cos(P),R=O*u}else if(E<=n+a){const O=(E-n)/a;S=-d+O*t,A=e,w=0,R=u+O*p}else{const O=(E-n-a)/n,P=O*Math.PI/2;S=d+e*Math.sin(P),A=e*Math.cos(P),w=e*Math.sin(P),R=u+p+O*u}const v=Math.max(0,Math.min(1,R/m));let T=0;E===0?T=.5/r:E===x&&(T=-.5/r);for(let O=0;O<=r;O++){const P=O/r,N=P*Math.PI*2,B=Math.sin(N),W=Math.cos(N);g.x=-A*W,g.y=S,g.z=A*B,l.push(g.x,g.y,g.z),_.set(-A*W,w,A*B),_.normalize(),c.push(_.x,_.y,_.z),h.push(P+T,v)}if(E>0){const O=(E-1)*y;for(let P=0;P<r;P++){const N=O+P,B=O+P+1,W=E*y+P,I=E*y+P+1;o.push(N,B,W),o.push(B,I,W)}}}this.setIndex(o),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ai extends Yt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],o=[],l=[],c=[],h=new D,d=new ce;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){const m=n+u/t*r;h.x=e*Math.cos(m),h.y=e*Math.sin(m),o.push(h.x,h.y,h.z),l.push(0,0,1),d.x=(o[p]/e+1)/2,d.y=(o[p+1]/e+1)/2,c.push(d.x,d.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rn extends Yt{constructor(e=1,t=1,n=1,r=32,a=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:l,thetaLength:c};const h=this;r=Math.floor(r),a=Math.floor(a);const d=[],u=[],p=[],m=[];let x=0;const y=[],_=n/2;let g=0;E(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(p,3)),this.setAttribute("uv",new vt(m,2));function E(){const S=new D,A=new D;let w=0;const v=(t-e)/n;for(let T=0;T<=a;T++){const O=[],P=T/a,N=P*(t-e)+e;for(let B=0;B<=r;B++){const W=B/r,I=W*c+l,V=Math.sin(I),Y=Math.cos(I);A.x=N*V,A.y=-P*n+_,A.z=N*Y,u.push(A.x,A.y,A.z),S.set(V,v,Y).normalize(),p.push(S.x,S.y,S.z),m.push(W,1-P),O.push(x++)}y.push(O)}for(let T=0;T<r;T++)for(let O=0;O<a;O++){const P=y[O][T],N=y[O+1][T],B=y[O+1][T+1],W=y[O][T+1];(e>0||O!==0)&&(d.push(P,N,W),w+=3),(t>0||O!==a-1)&&(d.push(N,B,W),w+=3)}h.addGroup(g,w,0),g+=w}function R(S){const A=x,w=new ce,v=new D;let T=0;const O=S===!0?e:t,P=S===!0?1:-1;for(let B=1;B<=r;B++)u.push(0,_*P,0),p.push(0,P,0),m.push(.5,.5),x++;const N=x;for(let B=0;B<=r;B++){const I=B/r*c+l,V=Math.cos(I),Y=Math.sin(I);v.x=O*Y,v.y=_*P,v.z=O*V,u.push(v.x,v.y,v.z),p.push(0,P,0),w.x=V*.5+.5,w.y=Y*.5*P+.5,m.push(w.x,w.y),x++}for(let B=0;B<r;B++){const W=A+B,I=N+B;S===!0?d.push(I,I+1,W):d.push(I+1,I,W),T+=3}h.addGroup(g,T,S===!0?1:2),g+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn extends rn{constructor(e=1,t=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(0,e,t,n,r,a,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l}}static fromJSON(e){return new Jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const a=n.length;let o;t?o=t:o=e*n[a-1];let l=0,c=a-1,h;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),h=n[r]-o,h<0)l=r+1;else if(h>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(a-1);const d=n[r],p=n[r+1]-d,m=(o-d)/p;return(r+m)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),l=this.getPoint(a),c=t||(o.isVector2?new ce:new D);return c.copy(l).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,r=[],a=[],o=[],l=new D,c=new yt;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new D)}a[0]=new D,o[0]=new D;let h=Number.MAX_VALUE;const d=Math.abs(r[0].x),u=Math.abs(r[0].y),p=Math.abs(r[0].z);d<=h&&(h=d,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),p<=h&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],l),o[0].crossVectors(r[0],a[0]);for(let m=1;m<=e;m++){if(a[m]=a[m-1].clone(),o[m]=o[m-1].clone(),l.crossVectors(r[m-1],r[m]),l.length()>Number.EPSILON){l.normalize();const x=Math.acos(et(r[m-1].dot(r[m]),-1,1));a[m].applyMatrix4(c.makeRotationAxis(l,x))}o[m].crossVectors(r[m],a[m])}if(t===!0){let m=Math.acos(et(a[0].dot(a[e]),-1,1));m/=e,r[0].dot(l.crossVectors(a[0],a[e]))>0&&(m=-m);for(let x=1;x<=e;x++)a[x].applyMatrix4(c.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],a[x])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Vo extends kn{constructor(e=0,t=0,n=1,r=1,a=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new ce){const n=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);const l=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,m=h-this.aY;c=p*d-m*u+this.aX,h=p*u+m*d+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yu extends Vo{constructor(e,t,n,r,a,o){super(e,t,n,n,r,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wo(){let i=0,e=0,t=0,n=0;function r(a,o,l,c){i=a,e=l,t=-3*a+3*o-2*l-c,n=2*a-2*o+l+c}return{initCatmullRom:function(a,o,l,c,h){r(o,l,h*(l-a),h*(c-o))},initNonuniformCatmullRom:function(a,o,l,c,h,d,u){let p=(o-a)/h-(l-a)/(h+d)+(l-o)/d,m=(l-o)/d-(c-o)/(d+u)+(c-l)/u;p*=d,m*=d,r(o,l,p,m)},calc:function(a){const o=a*a,l=o*a;return i+e*a+t*o+n*l}}}const Xl=new D,$l=new D,Ma=new Wo,Sa=new Wo,ya=new Wo;class bu extends kn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:c===0&&l===a-1&&(l=a-2,c=1);let h,d;this.closed||l>0?h=r[(l-1)%a]:($l.subVectors(r[0],r[1]).add(r[0]),h=$l);const u=r[l%a],p=r[(l+1)%a];if(this.closed||l+2<a?d=r[(l+2)%a]:(Xl.subVectors(r[a-1],r[a-2]).add(r[a-1]),d=Xl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(h.distanceToSquared(u),m),y=Math.pow(u.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(d),m);y<1e-4&&(y=1),x<1e-4&&(x=y),_<1e-4&&(_=y),Ma.initNonuniformCatmullRom(h.x,u.x,p.x,d.x,x,y,_),Sa.initNonuniformCatmullRom(h.y,u.y,p.y,d.y,x,y,_),ya.initNonuniformCatmullRom(h.z,u.z,p.z,d.z,x,y,_)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(h.x,u.x,p.x,d.x,this.tension),Sa.initCatmullRom(h.y,u.y,p.y,d.y,this.tension),ya.initCatmullRom(h.z,u.z,p.z,d.z,this.tension));return n.set(Ma.calc(c),Sa.calc(c),ya.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ql(i,e,t,n,r){const a=(n-e)*.5,o=(r-t)*.5,l=i*i,c=i*l;return(2*t-2*n+a+o)*c+(-3*t+3*n-2*a-o)*l+a*i+t}function Eu(i,e){const t=1-i;return t*t*e}function wu(i,e){return 2*(1-i)*i*e}function Tu(i,e){return i*i*e}function Rs(i,e,t,n){return Eu(i,e)+wu(i,t)+Tu(i,n)}function Au(i,e){const t=1-i;return t*t*t*e}function Ru(i,e){const t=1-i;return 3*t*t*i*e}function Cu(i,e){return 3*(1-i)*i*i*e}function Pu(i,e){return i*i*i*e}function Cs(i,e,t,n,r){return Au(i,e)+Ru(i,t)+Cu(i,n)+Pu(i,r)}class gh extends kn{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){const n=t,r=this.v0,a=this.v1,o=this.v2,l=this.v3;return n.set(Cs(e,r.x,a.x,o.x,l.x),Cs(e,r.y,a.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lu extends kn{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,a=this.v1,o=this.v2,l=this.v3;return n.set(Cs(e,r.x,a.x,o.x,l.x),Cs(e,r.y,a.y,o.y,l.y),Cs(e,r.z,a.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _h extends kn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Du extends kn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vh extends kn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,r=this.v0,a=this.v1,o=this.v2;return n.set(Rs(e,r.x,a.x,o.x),Rs(e,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iu extends kn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,a=this.v1,o=this.v2;return n.set(Rs(e,r.x,a.x,o.x),Rs(e,r.y,a.y,o.y),Rs(e,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xh extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,r=this.points,a=(r.length-1)*e,o=Math.floor(a),l=a-o,c=r[o===0?o:o-1],h=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(ql(l,c.x,h.x,d.x,u.x),ql(l,c.y,h.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ce().fromArray(r))}return this}}var go=Object.freeze({__proto__:null,ArcCurve:yu,CatmullRomCurve3:bu,CubicBezierCurve:gh,CubicBezierCurve3:Lu,EllipseCurve:Vo,LineCurve:_h,LineCurve3:Du,QuadraticBezierCurve:vh,QuadraticBezierCurve3:Iu,SplineCurve:xh});class Nu extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new go[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=n){const o=r[a]-n,l=this.curves[a],c=l.getLength(),h=c===0?0:1-o/c;return l.getPointAt(h,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,a=this.curves;r<a.length;r++){const o=a[r],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(l);for(let h=0;h<c.length;h++){const d=c[h];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new go[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class Yl extends Nu{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new _h(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const a=new vh(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(a),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,a,o){const l=new gh(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(a,o));return this.curves.push(l),this.currentPoint.set(a,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new xh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,a,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,r,a,o),this}absarc(e,t,n,r,a,o){return this.absellipse(e,t,n,n,r,a,o),this}ellipse(e,t,n,r,a,o,l,c){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+h,t+d,n,r,a,o,l,c),this}absellipse(e,t,n,r,a,o,l,c){const h=new Vo(e,t,n,r,a,o,l,c);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Lr extends Yl{constructor(e){super(e),this.uuid=hs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Yl().fromJSON(r))}return this}}function Uu(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let a=Mh(i,0,r,t,!0);const o=[];if(!a||a.next===a.prev)return o;let l,c,h;if(n&&(a=zu(i,e,a,t)),i.length>80*t){l=i[0],c=i[1];let d=l,u=c;for(let p=t;p<r;p+=t){const m=i[p],x=i[p+1];m<l&&(l=m),x<c&&(c=x),m>d&&(d=m),x>u&&(u=x)}h=Math.max(d-l,u-c),h=h!==0?32767/h:0}return Os(a,o,t,l,c,h,0),o}function Mh(i,e,t,n,r){let a;if(r===Ju(i,e,t,n)>0)for(let o=e;o<t;o+=n)a=Zl(o/n|0,i[o],i[o+1],a);else for(let o=t-n;o>=e;o-=n)a=Zl(o/n|0,i[o],i[o+1],a);return a&&os(a,a.next)&&(ks(a),a=a.next),a}function Ri(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(os(t,t.next)||Rt(t.prev,t,t.next)===0)){if(ks(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Os(i,e,t,n,r,a,o){if(!i)return;!o&&a&&Xu(i,n,r,a);let l=i;for(;i.prev!==i.next;){const c=i.prev,h=i.next;if(a?Ou(i,n,r,a):Fu(i)){e.push(c.i,i.i,h.i),ks(i),i=h.next,l=h.next;continue}if(i=h,i===l){o?o===1?(i=Bu(Ri(i),e),Os(i,e,t,n,r,a,2)):o===2&&ku(i,e,t,n,r,a):Os(Ri(i),e,t,n,r,a,1);break}}}function Fu(i){const e=i.prev,t=i,n=i.next;if(Rt(e,t,n)>=0)return!1;const r=e.x,a=t.x,o=n.x,l=e.y,c=t.y,h=n.y,d=Math.min(r,a,o),u=Math.min(l,c,h),p=Math.max(r,a,o),m=Math.max(l,c,h);let x=n.next;for(;x!==e;){if(x.x>=d&&x.x<=p&&x.y>=u&&x.y<=m&&ws(r,l,a,c,o,h,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Ou(i,e,t,n){const r=i.prev,a=i,o=i.next;if(Rt(r,a,o)>=0)return!1;const l=r.x,c=a.x,h=o.x,d=r.y,u=a.y,p=o.y,m=Math.min(l,c,h),x=Math.min(d,u,p),y=Math.max(l,c,h),_=Math.max(d,u,p),g=_o(m,x,e,t,n),E=_o(y,_,e,t,n);let R=i.prevZ,S=i.nextZ;for(;R&&R.z>=g&&S&&S.z<=E;){if(R.x>=m&&R.x<=y&&R.y>=x&&R.y<=_&&R!==r&&R!==o&&ws(l,d,c,u,h,p,R.x,R.y)&&Rt(R.prev,R,R.next)>=0||(R=R.prevZ,S.x>=m&&S.x<=y&&S.y>=x&&S.y<=_&&S!==r&&S!==o&&ws(l,d,c,u,h,p,S.x,S.y)&&Rt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;R&&R.z>=g;){if(R.x>=m&&R.x<=y&&R.y>=x&&R.y<=_&&R!==r&&R!==o&&ws(l,d,c,u,h,p,R.x,R.y)&&Rt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;S&&S.z<=E;){if(S.x>=m&&S.x<=y&&S.y>=x&&S.y<=_&&S!==r&&S!==o&&ws(l,d,c,u,h,p,S.x,S.y)&&Rt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Bu(i,e){let t=i;do{const n=t.prev,r=t.next.next;!os(n,r)&&yh(n,t,t.next,r)&&Bs(n,r)&&Bs(r,n)&&(e.push(n.i,t.i,r.i),ks(t),ks(t.next),t=i=r),t=t.next}while(t!==i);return Ri(t)}function ku(i,e,t,n,r,a){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Yu(o,l)){let c=bh(o,l);o=Ri(o,o.next),c=Ri(c,c.next),Os(o,e,t,n,r,a,0),Os(c,e,t,n,r,a,0);return}l=l.next}o=o.next}while(o!==i)}function zu(i,e,t,n){const r=[];for(let a=0,o=e.length;a<o;a++){const l=e[a]*n,c=a<o-1?e[a+1]*n:i.length,h=Mh(i,l,c,n,!1);h===h.next&&(h.steiner=!0),r.push(qu(h))}r.sort(Hu);for(let a=0;a<r.length;a++)t=Gu(r[a],t);return t}function Hu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Gu(i,e){const t=Vu(i,e);if(!t)return e;const n=bh(t,i);return Ri(n,n.next),Ri(t,t.next)}function Vu(i,e){let t=e;const n=i.x,r=i.y;let a=-1/0,o;if(os(i,t))return t;do{if(os(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>a&&(a=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const l=o,c=o.x,h=o.y;let d=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Sh(r<h?n:a,r,c,h,r<h?a:n,r,t.x,t.y)){const u=Math.abs(r-t.y)/(n-t.x);Bs(t,i)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&Wu(o,t)))&&(o=t,d=u)}t=t.next}while(t!==l);return o}function Wu(i,e){return Rt(i.prev,i,e.prev)<0&&Rt(e.next,i,i.next)<0}function Xu(i,e,t,n){let r=i;do r.z===0&&(r.z=_o(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,$u(r)}function $u(i){let e,t=1;do{let n=i,r;i=null;let a=null;for(e=0;n;){e++;let o=n,l=0;for(let h=0;h<t&&(l++,o=o.nextZ,!!o);h++);let c=t;for(;l>0||c>0&&o;)l!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,l--):(r=o,o=o.nextZ,c--),a?a.nextZ=r:i=r,r.prevZ=a,a=r;n=o}a.nextZ=null,t*=2}while(e>1);return i}function _o(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function qu(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Sh(i,e,t,n,r,a,o,l){return(r-o)*(e-l)>=(i-o)*(a-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(a-l)>=(r-o)*(n-l)}function ws(i,e,t,n,r,a,o,l){return!(i===o&&e===l)&&Sh(i,e,t,n,r,a,o,l)}function Yu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Zu(i,e)&&(Bs(i,e)&&Bs(e,i)&&Ku(i,e)&&(Rt(i.prev,i,e.prev)||Rt(i,e.prev,e))||os(i,e)&&Rt(i.prev,i,i.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function os(i,e){return i.x===e.x&&i.y===e.y}function yh(i,e,t,n){const r=fr(Rt(i,e,t)),a=fr(Rt(i,e,n)),o=fr(Rt(t,n,i)),l=fr(Rt(t,n,e));return!!(r!==a&&o!==l||r===0&&ur(i,t,e)||a===0&&ur(i,n,e)||o===0&&ur(t,i,n)||l===0&&ur(t,e,n))}function ur(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fr(i){return i>0?1:i<0?-1:0}function Zu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Bs(i,e){return Rt(i.prev,i,i.next)<0?Rt(i,e,i.next)>=0&&Rt(i,i.prev,e)>=0:Rt(i,e,i.prev)<0||Rt(i,i.next,e)<0}function Ku(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bh(i,e){const t=vo(i.i,i.x,i.y),n=vo(e.i,e.x,e.y),r=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Zl(i,e,t,n){const r=vo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ju(i,e,t,n){let r=0;for(let a=e,o=t-n;a<t;a+=n)r+=(i[o]-i[a])*(i[a+1]+i[o+1]),o=a;return r}class Qu{static triangulate(e,t,n=2){return Uu(e,t,n)}}class Ji{static area(e){const t=e.length;let n=0;for(let r=t-1,a=0;a<t;r=a++)n+=e[r].x*e[a].y-e[a].x*e[r].y;return n*.5}static isClockWise(e){return Ji.area(e)<0}static triangulateShape(e,t){const n=[],r=[],a=[];Kl(e),Jl(n,e);let o=e.length;t.forEach(Kl);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Jl(n,t[c]);const l=Qu.triangulate(n,r);for(let c=0;c<l.length;c+=3)a.push(l.slice(c,c+3));return a}}function Kl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Jl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class zs extends Yt{constructor(e=new Lr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],a=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];o(h)}this.setAttribute("position",new vt(r,3)),this.setAttribute("uv",new vt(a,2)),this.computeVertexNormals();function o(l){const c=[],h=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:ju;let R,S=!1,A,w,v,T;if(g){R=g.getSpacedPoints(d),S=!0,p=!1;const te=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(d,te),w=new D,v=new D,T=new D}p||(_=0,m=0,x=0,y=0);const O=l.extractPoints(h);let P=O.shape;const N=O.holes;if(!Ji.isClockWise(P)){P=P.reverse();for(let te=0,pe=N.length;te<pe;te++){const de=N[te];Ji.isClockWise(de)&&(N[te]=de.reverse())}}function W(te){const de=10000000000000001e-36;let Re=te[0];for(let Se=1;Se<=te.length;Se++){const Ke=Se%te.length,Ue=te[Ke],rt=Ue.x-Re.x,at=Ue.y-Re.y,ft=rt*rt+at*at,F=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(Re.x),Math.abs(Re.y)),Pt=de*F*F;if(ft<=Pt){te.splice(Ke,1),Se--;continue}Re=Ue}}W(P),N.forEach(W);const I=N.length,V=P;for(let te=0;te<I;te++){const pe=N[te];P=P.concat(pe)}function Y(te,pe,de){return pe||ut("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(pe,de)}const z=P.length;function ae(te,pe,de){let Re,Se,Ke;const Ue=te.x-pe.x,rt=te.y-pe.y,at=de.x-te.x,ft=de.y-te.y,F=Ue*Ue+rt*rt,Pt=Ue*ft-rt*at;if(Math.abs(Pt)>Number.EPSILON){const nt=Math.sqrt(F),xt=Math.sqrt(at*at+ft*ft),ve=pe.x-rt/nt,Ct=pe.y+Ue/nt,He=de.x-ft/xt,qe=de.y+at/xt,C=((He-ve)*ft-(qe-Ct)*at)/(Ue*ft-rt*at);Re=ve+Ue*C-te.x,Se=Ct+rt*C-te.y;const M=Re*Re+Se*Se;if(M<=2)return new ce(Re,Se);Ke=Math.sqrt(M/2)}else{let nt=!1;Ue>Number.EPSILON?at>Number.EPSILON&&(nt=!0):Ue<-Number.EPSILON?at<-Number.EPSILON&&(nt=!0):Math.sign(rt)===Math.sign(ft)&&(nt=!0),nt?(Re=-rt,Se=Ue,Ke=Math.sqrt(F)):(Re=Ue,Se=rt,Ke=Math.sqrt(F/2))}return new ce(Re/Ke,Se/Ke)}const $=[];for(let te=0,pe=V.length,de=pe-1,Re=te+1;te<pe;te++,de++,Re++)de===pe&&(de=0),Re===pe&&(Re=0),$[te]=ae(V[te],V[de],V[Re]);const ee=[];let se,Ce=$.concat();for(let te=0,pe=I;te<pe;te++){const de=N[te];se=[];for(let Re=0,Se=de.length,Ke=Se-1,Ue=Re+1;Re<Se;Re++,Ke++,Ue++)Ke===Se&&(Ke=0),Ue===Se&&(Ue=0),se[Re]=ae(de[Re],de[Ke],de[Ue]);ee.push(se),Ce=Ce.concat(se)}let Ge;if(_===0)Ge=Ji.triangulateShape(V,N);else{const te=[],pe=[];for(let de=0;de<_;de++){const Re=de/_,Se=m*Math.cos(Re*Math.PI/2),Ke=x*Math.sin(Re*Math.PI/2)+y;for(let Ue=0,rt=V.length;Ue<rt;Ue++){const at=Y(V[Ue],$[Ue],Ke);ze(at.x,at.y,-Se),Re===0&&te.push(at)}for(let Ue=0,rt=I;Ue<rt;Ue++){const at=N[Ue];se=ee[Ue];const ft=[];for(let F=0,Pt=at.length;F<Pt;F++){const nt=Y(at[F],se[F],Ke);ze(nt.x,nt.y,-Se),Re===0&&ft.push(nt)}Re===0&&pe.push(ft)}}Ge=Ji.triangulateShape(te,pe)}const Z=Ge.length,ye=x+y;for(let te=0;te<z;te++){const pe=p?Y(P[te],Ce[te],ye):P[te];S?(v.copy(A.normals[0]).multiplyScalar(pe.x),w.copy(A.binormals[0]).multiplyScalar(pe.y),T.copy(R[0]).add(v).add(w),ze(T.x,T.y,T.z)):ze(pe.x,pe.y,0)}for(let te=1;te<=d;te++)for(let pe=0;pe<z;pe++){const de=p?Y(P[pe],Ce[pe],ye):P[pe];S?(v.copy(A.normals[te]).multiplyScalar(de.x),w.copy(A.binormals[te]).multiplyScalar(de.y),T.copy(R[te]).add(v).add(w),ze(T.x,T.y,T.z)):ze(de.x,de.y,u/d*te)}for(let te=_-1;te>=0;te--){const pe=te/_,de=m*Math.cos(pe*Math.PI/2),Re=x*Math.sin(pe*Math.PI/2)+y;for(let Se=0,Ke=V.length;Se<Ke;Se++){const Ue=Y(V[Se],$[Se],Re);ze(Ue.x,Ue.y,u+de)}for(let Se=0,Ke=N.length;Se<Ke;Se++){const Ue=N[Se];se=ee[Se];for(let rt=0,at=Ue.length;rt<at;rt++){const ft=Y(Ue[rt],se[rt],Re);S?ze(ft.x,ft.y+R[d-1].y,R[d-1].x+de):ze(ft.x,ft.y,u+de)}}}Pe(),ke();function Pe(){const te=r.length/3;if(p){let pe=0,de=z*pe;for(let Re=0;Re<Z;Re++){const Se=Ge[Re];bt(Se[2]+de,Se[1]+de,Se[0]+de)}pe=d+_*2,de=z*pe;for(let Re=0;Re<Z;Re++){const Se=Ge[Re];bt(Se[0]+de,Se[1]+de,Se[2]+de)}}else{for(let pe=0;pe<Z;pe++){const de=Ge[pe];bt(de[2],de[1],de[0])}for(let pe=0;pe<Z;pe++){const de=Ge[pe];bt(de[0]+z*d,de[1]+z*d,de[2]+z*d)}}n.addGroup(te,r.length/3-te,0)}function ke(){const te=r.length/3;let pe=0;be(V,pe),pe+=V.length;for(let de=0,Re=N.length;de<Re;de++){const Se=N[de];be(Se,pe),pe+=Se.length}n.addGroup(te,r.length/3-te,1)}function be(te,pe){let de=te.length;for(;--de>=0;){const Re=de;let Se=de-1;Se<0&&(Se=te.length-1);for(let Ke=0,Ue=d+_*2;Ke<Ue;Ke++){const rt=z*Ke,at=z*(Ke+1),ft=pe+Re+rt,F=pe+Se+rt,Pt=pe+Se+at,nt=pe+Re+at;Ve(ft,F,Pt,nt)}}}function ze(te,pe,de){c.push(te),c.push(pe),c.push(de)}function bt(te,pe,de){tt(te),tt(pe),tt(de);const Re=r.length/3,Se=E.generateTopUV(n,r,Re-3,Re-2,Re-1);st(Se[0]),st(Se[1]),st(Se[2])}function Ve(te,pe,de,Re){tt(te),tt(pe),tt(Re),tt(pe),tt(de),tt(Re);const Se=r.length/3,Ke=E.generateSideWallUV(n,r,Se-6,Se-3,Se-2,Se-1);st(Ke[0]),st(Ke[1]),st(Ke[3]),st(Ke[1]),st(Ke[2]),st(Ke[3])}function tt(te){r.push(c[te*3+0]),r.push(c[te*3+1]),r.push(c[te*3+2])}function st(te){a.push(te.x),a.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ef(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,o=e.shapes.length;a<o;a++){const l=t[e.shapes[a]];n.push(l)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new go[r.type]().fromJSON(r)),new zs(n,e.options)}}const ju={generateTopUV:function(i,e,t,n,r){const a=e[t*3],o=e[t*3+1],l=e[n*3],c=e[n*3+1],h=e[r*3],d=e[r*3+1];return[new ce(a,o),new ce(l,c),new ce(h,d)]},generateSideWallUV:function(i,e,t,n,r,a){const o=e[t*3],l=e[t*3+1],c=e[t*3+2],h=e[n*3],d=e[n*3+1],u=e[n*3+2],p=e[r*3],m=e[r*3+1],x=e[r*3+2],y=e[a*3],_=e[a*3+1],g=e[a*3+2];return Math.abs(l-d)<Math.abs(o-h)?[new ce(o,1-c),new ce(h,1-u),new ce(p,1-x),new ce(y,1-g)]:[new ce(l,1-c),new ce(d,1-u),new ce(m,1-x),new ce(_,1-g)]}};function ef(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class qt extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,l=Math.floor(n),c=Math.floor(r),h=l+1,d=c+1,u=e/l,p=t/c,m=[],x=[],y=[],_=[];for(let g=0;g<d;g++){const E=g*p-o;for(let R=0;R<h;R++){const S=R*u-a;x.push(S,-E,0),y.push(0,0,1),_.push(R/l),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let E=0;E<l;E++){const R=E+h*g,S=E+h*(g+1),A=E+1+h*(g+1),w=E+1+h*g;m.push(R,S,w),m.push(S,A,w)}this.setIndex(m),this.setAttribute("position",new vt(x,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.widthSegments,e.heightSegments)}}class us extends Yt{constructor(e=.5,t=1,n=32,r=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const l=[],c=[],h=[],d=[];let u=e;const p=(t-e)/r,m=new D,x=new ce;for(let y=0;y<=r;y++){for(let _=0;_<=n;_++){const g=a+_/n*o;m.x=u*Math.cos(g),m.y=u*Math.sin(g),c.push(m.x,m.y,m.z),h.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,d.push(x.x,x.y)}u+=p}for(let y=0;y<r;y++){const _=y*(n+1);for(let g=0;g<n;g++){const E=g+_,R=E,S=E+n+1,A=E+n+2,w=E+1;l.push(R,S,w),l.push(S,A,w)}}this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xn extends Yt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+l,Math.PI);let h=0;const d=[],u=new D,p=new D,m=[],x=[],y=[],_=[];for(let g=0;g<=n;g++){const E=[],R=g/n,S=o+R*l,A=e*Math.cos(S),w=Math.sqrt(e*e-A*A);let v=0;g===0&&o===0?v=.5/t:g===n&&c===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const O=T/t,P=r+O*a;u.x=-w*Math.cos(P),u.y=A,u.z=w*Math.sin(P),x.push(u.x,u.y,u.z),p.copy(u).normalize(),y.push(p.x,p.y,p.z),_.push(O+v,1-R),E.push(h++)}d.push(E)}for(let g=0;g<n;g++)for(let E=0;E<t;E++){const R=d[g][E+1],S=d[g][E],A=d[g+1][E],w=d[g+1][E+1];(g!==0||o>0)&&m.push(R,S,w),(g!==n-1||c<Math.PI)&&m.push(S,A,w)}this.setIndex(m),this.setAttribute("position",new vt(x,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ci extends Yt{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a,thetaStart:o,thetaLength:l},n=Math.floor(n),r=Math.floor(r);const c=[],h=[],d=[],u=[],p=new D,m=new D,x=new D;for(let y=0;y<=n;y++){const _=o+y/n*l;for(let g=0;g<=r;g++){const E=g/r*a;m.x=(e+t*Math.cos(_))*Math.cos(E),m.y=(e+t*Math.cos(_))*Math.sin(E),m.z=t*Math.sin(_),h.push(m.x,m.y,m.z),p.x=e*Math.cos(E),p.y=e*Math.sin(E),x.subVectors(m,p).normalize(),d.push(x.x,x.y,x.z),u.push(g/r),u.push(y/n)}}for(let y=1;y<=n;y++)for(let _=1;_<=r;_++){const g=(r+1)*y+_-1,E=(r+1)*(y-1)+_-1,R=(r+1)*(y-1)+_,S=(r+1)*y+_;c.push(g,E,S),c.push(E,R,S)}this.setIndex(c),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ls(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Ql(r))r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ql(r[0])){const a=[];for(let o=0,l=r.length;o<l;o++)a[o]=r[o].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=ls(i[t]);for(const r in n)e[r]=n[r]}return e}function Ql(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const nf={clone:ls,merge:nn};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(r.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new At().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(r.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class af extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hr extends ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rn extends Hr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return es('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){es('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class of extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lf extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xo extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class cf extends Xo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ba=new yt,jl=new D,ec=new D;class wh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(jl),ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ec),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ba,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,o=r?r.z/a.x:1,l=r?r.w/a.y:1,c=r?r.x/a.x:0,h=r?r.y/a.y:0;e.coordinateSystem===Us||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),t.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pr=new D,mr=new di,Pn=new D;class Th extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pr,mr,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pr,mr,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pr,mr,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pr,mr,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new D,tc=new ce,nc=new ce;class gn extends Th{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,tc,nc),t.subVectors(nc,tc)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*n/h,r*=o.width/c,n*=o.height/h}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hf extends wh{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class Gr extends Xo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new hf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ah extends Th{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,o=a+h*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class df extends wh{constructor(){super(new Ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ic extends Xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new df}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Wi=-90,Xi=1;class xo extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const a=new gn(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new gn(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const l=new gn(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new gn(Wi,Xi,e,t);c.layers=this.layers,this.add(c);const h=new gn(Wi,Xi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,l,c]=t;for(const h of t)this.remove(h);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,c,h,d]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,p,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class uf extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const sc=new yt;class ff{constructor(e,t,n=0,r=1/0){this.ray=new zr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sc),this}intersectObject(e,t=!0,n=[]){return Mo(e,this,n,t),n.sort(rc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Mo(e[r],this,n,t);return n.sort(rc),n}}function rc(i,e){return i.distance-e.distance}function Mo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let o=0,l=a.length;o<l;o++)Mo(a[o],e,t,!0)}}class pf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class ac{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mf extends mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function oc(i,e,t,n){const r=gf(n);switch(t){case eh:return i*e;case nh:return i*e/r.components*r.byteLength;case No:return i*e/r.components*r.byteLength;case Ti:return i*e*2/r.components*r.byteLength;case Uo:return i*e*2/r.components*r.byteLength;case th:return i*e*3/r.components*r.byteLength;case Nn:return i*e*4/r.components*r.byteLength;case Fo:return i*e*4/r.components*r.byteLength;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:case ka:return Math.max(i,16)*Math.max(e,8)/4;case Fa:case Ba:return Math.max(i,8)*Math.max(e,8)/2;case za:case Ha:case Va:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Tr:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ao:case oo:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case co:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ar:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gf(i){switch(i){case dn:case Kc:return{byteLength:1,components:1};case Ns:case Jc:case On:return{byteLength:2,components:1};case Do:case Io:return{byteLength:2,components:4};case Fn:case Lo:case In:return{byteLength:4,components:1};case Qc:case jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);function Rh(){let i=null,e=!1,t=null,n=null;function r(a,o){n=i.requestAnimationFrame(r),t(a,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function _f(i){const e=new WeakMap;function t(l,c){const h=l.array,d=l.usage,u=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,d),l.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,c,h){const d=c.array,u=c.updateRanges;if(i.bindBuffer(h,l),u.length===0)i.bufferSubData(h,0,d);else{u.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<u.length;m++){const x=u[p],y=u[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++p,u[p]=y)}u.length=p+1;for(let m=0,x=u.length;m<x;m++){const y=u[m];i.bufferSubData(h,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:r,remove:a,update:o}}var vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ef=`#ifdef USE_AOMAP
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
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
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
#endif`,Af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hf=`#define PI 3.141592653589793
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
} // validated`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`uniform sampler2D dfgLUT;
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
}`,gp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
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
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform float backgroundBlurriness;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
}`,wm=`#define DISTANCE
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
}`,Tm=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Nm=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,zm=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 color;
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
}`,Zm=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:vf,alphahash_pars_fragment:xf,alphamap_fragment:Mf,alphamap_pars_fragment:Sf,alphatest_fragment:yf,alphatest_pars_fragment:bf,aomap_fragment:Ef,aomap_pars_fragment:wf,batching_pars_vertex:Tf,batching_vertex:Af,begin_vertex:Rf,beginnormal_vertex:Cf,bsdfs:Pf,iridescence_fragment:Lf,bumpmap_pars_fragment:Df,clipping_planes_fragment:If,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Ff,color_fragment:Of,color_pars_fragment:Bf,color_pars_vertex:kf,color_vertex:zf,common:Hf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:$f,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:Zf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:Jf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:cp,envmap_vertex:jf,fog_vertex:ep,fog_pars_vertex:tp,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:dp,lights_phong_fragment:up,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:vp,lightprobes_pars_fragment:xp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:bp,map_fragment:Ep,map_pars_fragment:wp,map_particle_fragment:Tp,map_particle_pars_fragment:Ap,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Pp,morphcolor_vertex:Lp,morphnormal_vertex:Dp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Np,normal_fragment_begin:Up,normal_fragment_maps:Fp,normal_pars_fragment:Op,normal_pars_vertex:Bp,normal_vertex:kp,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:$p,premultiplied_alpha_fragment:qp,project_vertex:Yp,dithering_fragment:Zp,dithering_pars_fragment:Kp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:em,shadowmap_vertex:tm,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:sm,skinning_vertex:rm,skinnormal_vertex:am,specularmap_fragment:om,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:hm,transmission_fragment:dm,transmission_pars_fragment:um,uv_pars_fragment:fm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:_m,background_frag:vm,backgroundCube_vert:xm,backgroundCube_frag:Mm,cube_vert:Sm,cube_frag:ym,depth_vert:bm,depth_frag:Em,distance_vert:wm,distance_frag:Tm,equirect_vert:Am,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Lm,meshbasic_frag:Dm,meshlambert_vert:Im,meshlambert_frag:Nm,meshmatcap_vert:Um,meshmatcap_frag:Fm,meshnormal_vert:Om,meshnormal_frag:Bm,meshphong_vert:km,meshphong_frag:zm,meshphysical_vert:Hm,meshphysical_frag:Gm,meshtoon_vert:Vm,meshtoon_frag:Wm,points_vert:Xm,points_frag:$m,shadow_vert:qm,shadow_frag:Ym,sprite_vert:Zm,sprite_frag:Km},we={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Dn={basic:{uniforms:nn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:nn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:nn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:nn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:nn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:nn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:nn([we.points,we.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:nn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:nn([we.common,we.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:nn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:nn([we.sprite,we.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:nn([we.common,we.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:nn([we.lights,we.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Dn.physical={uniforms:nn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const gr={r:0,b:0,g:0},Jm=new yt,Ch=new Ye;Ch.set(-1,0,0,0,1,0,0,0,1);function Qm(i,e,t,n,r,a){const o=new Oe(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function m(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){const S=E.backgroundBlurriness>0;R=e.get(R,S)}return R}function x(E){let R=!1;const S=m(E);S===null?_(o,l):S&&S.isColor&&(_(S,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,R){const S=m(R);S&&S.isCubeTexture?(h===void 0&&(h=new Te(new Qn(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:ls(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ch),h.material.toneMapped=ct.getTransfer(S.colorSpace)!==_t,(d!==S||u!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Te(new qt(2,2),new fi({name:"BackgroundMaterial",uniforms:ls(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=ct.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function _(E,R){E.getRGB(gr,Eh(i)),t.buffers.color.setClear(gr.r,gr.g,gr.b,R,a)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,R=1){o.set(E),l=R,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,_(o,l)},render:x,addToRenderList:y,dispose:g}}function jm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let a=r,o=!1;function l(N,B,W,I,V){let Y=!1;const z=u(N,I,W,B);a!==z&&(a=z,h(a.object)),Y=m(N,I,W,V),Y&&x(N,I,W,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(N,B,W,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function h(N){return i.bindVertexArray(N)}function d(N){return i.deleteVertexArray(N)}function u(N,B,W,I){const V=I.wireframe===!0;let Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);const z=N.isInstancedMesh===!0?N.id:0;let ae=Y[z];ae===void 0&&(ae={},Y[z]=ae);let $=ae[W.id];$===void 0&&($={},ae[W.id]=$);let ee=$[V];return ee===void 0&&(ee=p(c()),$[V]=ee),ee}function p(N){const B=[],W=[],I=[];for(let V=0;V<t;V++)B[V]=0,W[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:I,object:N,attributes:{},index:null}}function m(N,B,W,I){const V=a.attributes,Y=B.attributes;let z=0;const ae=W.getAttributes();for(const $ in ae)if(ae[$].location>=0){const se=V[$];let Ce=Y[$];if(Ce===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(Ce=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(Ce=N.instanceColor)),se===void 0||se.attribute!==Ce||Ce&&se.data!==Ce.data)return!0;z++}return a.attributesNum!==z||a.index!==I}function x(N,B,W,I){const V={},Y=B.attributes;let z=0;const ae=W.getAttributes();for(const $ in ae)if(ae[$].location>=0){let se=Y[$];se===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(se=N.instanceColor));const Ce={};Ce.attribute=se,se&&se.data&&(Ce.data=se.data),V[$]=Ce,z++}a.attributes=V,a.attributesNum=z,a.index=I}function y(){const N=a.newAttributes;for(let B=0,W=N.length;B<W;B++)N[B]=0}function _(N){g(N,0)}function g(N,B){const W=a.newAttributes,I=a.enabledAttributes,V=a.attributeDivisors;W[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),V[N]!==B&&(i.vertexAttribDivisor(N,B),V[N]=B)}function E(){const N=a.newAttributes,B=a.enabledAttributes;for(let W=0,I=B.length;W<I;W++)B[W]!==N[W]&&(i.disableVertexAttribArray(W),B[W]=0)}function R(N,B,W,I,V,Y,z){z===!0?i.vertexAttribIPointer(N,B,W,V,Y):i.vertexAttribPointer(N,B,W,I,V,Y)}function S(N,B,W,I){y();const V=I.attributes,Y=W.getAttributes(),z=B.defaultAttributeValues;for(const ae in Y){const $=Y[ae];if($.location>=0){let ee=V[ae];if(ee===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const se=ee.normalized,Ce=ee.itemSize,Ge=e.get(ee);if(Ge===void 0)continue;const Z=Ge.buffer,ye=Ge.type,Pe=Ge.bytesPerElement,ke=ye===i.INT||ye===i.UNSIGNED_INT||ee.gpuType===Lo;if(ee.isInterleavedBufferAttribute){const be=ee.data,ze=be.isInterleavedBuffer===!0?be.stride:be.itemSize,bt=ee.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let Ve=0;Ve<$.locationSize;Ve++)g($.location+Ve,be.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ve=0;Ve<$.locationSize;Ve++)_($.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ve=0;Ve<$.locationSize;Ve++)R($.location+Ve,Ce/$.locationSize,ye,se,ze*Pe,(bt+Ce/$.locationSize*Ve)*Pe,ke)}else{if(ee.isInstancedBufferAttribute){for(let be=0;be<$.locationSize;be++)g($.location+be,ee.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let be=0;be<$.locationSize;be++)_($.location+be);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let be=0;be<$.locationSize;be++)R($.location+be,Ce/$.locationSize,ye,se,Ce*Pe,Ce/$.locationSize*be*Pe,ke)}}else if(z!==void 0){const se=z[ae];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv($.location,se);break;case 3:i.vertexAttrib3fv($.location,se);break;case 4:i.vertexAttrib4fv($.location,se);break;default:i.vertexAttrib1fv($.location,se)}}}}E()}function A(){O();for(const N in n){const B=n[N];for(const W in B){const I=B[W];for(const V in I){const Y=I[V];for(const z in Y)d(Y[z].object),delete Y[z];delete I[V]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;const B=n[N.id];for(const W in B){const I=B[W];for(const V in I){const Y=I[V];for(const z in Y)d(Y[z].object),delete Y[z];delete I[V]}}delete n[N.id]}function v(N){for(const B in n){const W=n[B];for(const I in W){const V=W[I];if(V[N.id]===void 0)continue;const Y=V[N.id];for(const z in Y)d(Y[z].object),delete Y[z];delete V[N.id]}}}function T(N){for(const B in n){const W=n[B],I=N.isInstancedMesh===!0?N.id:0,V=W[I];if(V!==void 0){for(const Y in V){const z=V[Y];for(const ae in z)d(z[ae].object),delete z[ae];delete V[Y]}delete W[I],Object.keys(W).length===0&&delete n[B]}}}function O(){P(),o=!0,a!==r&&(a=r,h(a.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:O,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:T,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:_,disableUnusedAttributes:E}}function e0(i,e,t){let n;function r(c){n=c}function a(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function l(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];t.update(p,n,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=l}function t0(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==Nn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(v){const T=v===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==dn&&v!==In&&!T&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=c(h);d!==h&&($e("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:S,maxSamples:A,samples:w}}function n0(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new $n,l=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||r;return r=p,n=u.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,p){t=d(u,p,0)},this.setState=function(u,p,m){const x=u.clippingPlanes,y=u.clipIntersection,_=u.clipShadows,g=i.get(u);if(!r||x===null||x.length===0||a&&!_)a?d(null):h();else{const E=a?0:n,R=E*4;let S=g.clippingState||null;c.value=S,S=d(x,p,R,m);for(let A=0;A!==R;++A)S[A]=t[A];g.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,p,m,x){const y=u!==null?u.length:0;let _=null;if(y!==0){if(_=c.value,x!==!0||_===null){const g=m+y*4,E=p.matrixWorldInverse;l.getNormalMatrix(E),(_===null||_.length<g)&&(_=new Float32Array(g));for(let R=0,S=m;R!==y;++R,S+=4)o.copy(u[R]).applyMatrix4(E,l),o.normal.toArray(_,S),_[S+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}class $o extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qn(5,5,5),a=new fi({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ji});a.uniforms.tEquirect.value=t;const o=new Te(r,a),l=t.minFilter;return t.minFilter===oi&&(t.minFilter=ln),new xo(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const lc=256,i0=3,s0=20,Ph=256,Lh=16,r0=3,a0=new D,o0=new Oe;class Dr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xo(1,10,null),this._boxMesh=new Te(new Qn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:o=256,position:l=a0}=a,c=this._renderer;this._setSize(o);const h=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const u=c.autoClear,p=c.autoClearColor,m=c.autoClearDepth,x=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(o0));const _=new xo(n,r,d);return _.position.copy(l),_.update(c,e),c.autoClear=u,c.autoClearColor=p,c.autoClearDepth=m,c.autoClearStencil=x,e.background=y,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(lc,Zd(e))}_fromTexture(e,t){e.mapping===ss||e.mapping===Is?this._setSize(e.image.length===0?lc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=cc(e,!1,!1),n=Math.log2(e)-i0;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=cc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,a=this._cubeCamera;r.material=n,a.renderTarget=e,a.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),a.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ss||e.mapping===Is?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=l0(),this._integrationMaterial=c0());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/Lh);for(let o=0;o<=n;o++){const l=Dr.lodToRoughness(o,n);if(o>n-r0)a.roughness.value=l,this._renderCube(e,o,this._integrationMaterial);else{const c=l>0?Math.log2(t)+.5*Math.log2(6/(Ph*Math.pow(l,4)))+.5:0;r.roughness.value=l,r.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=h0());const n=this._blurMaterial,r=n.uniforms,a=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=a.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(a,0,n)}}function cc(i,e,t){return new $o(i,{minFilter:oi,generateMipmaps:e,type:On,colorSpace:Rr,depthBuffer:t})}function Vs(i,e,t){return new fi({name:i,uniforms:e,vertexShader:je.cube_vert,fragmentShader:t,side:an,blending:ji,depthTest:!1,depthWrite:!1})}function l0(){return Vs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ph}u

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
	`)}function c0(){return Vs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lh}},`

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
	`)}function h0(){return Vs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${s0}
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
	`)}function hc(){return Vs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function dc(){return Vs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function d0(i){let e=new WeakMap,t=new WeakMap,n=null;function r(p,m=!1){return p==null?null:m?o(p):a(p)}function a(p){if(p&&p.isTexture){const m=p.mapping;if(m===Zr||m===Kr)if(e.has(p)){const x=e.get(p).texture;return l(x,p.mapping)}else{const x=p.image;if(x&&x.height>0){const y=new $o(x.height);return y.fromEquirectangularTexture(i,p),e.set(p,y),p.addEventListener("dispose",h),l(y.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){const m=p.mapping,x=m===Zr||m===Kr,y=m===ss||m===Is;if(x||y){let _=t.get(p);const g=_!==void 0?_.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==g)return n===null&&(n=new Dr(i)),_=x?n.fromEquirectangular(p,_):n.fromCubemap(p,_),_.texture.pmremVersion=p.pmremVersion,t.set(p,_),_.texture;if(_!==void 0)return _.texture;{const E=p.image;return x&&E&&E.height>0||y&&E&&c(E)?(n===null&&(n=new Dr(i)),_=x?n.fromEquirectangular(p):n.fromCubemap(p),_.texture.pmremVersion=p.pmremVersion,t.set(p,_),p.addEventListener("dispose",d),_.texture):null}}}return p}function l(p,m){return m===Zr?p.mapping=ss:m===Kr&&(p.mapping=Is),p}function c(p){let m=0;const x=6;for(let y=0;y<x;y++)p[y]!==void 0&&m++;return m===x}function h(p){const m=p.target;m.removeEventListener("dispose",h);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function d(p){const m=p.target;m.removeEventListener("dispose",d);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function u0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&es("WebGLRenderer: "+n+" extension not supported."),r}}}function f0(i,e,t,n){const r={},a=new WeakMap,o=new FinalizationRegistry(x=>delete r[x]);function l(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(const _ in x.attributes)e.remove(x.attributes[_]);x.removeEventListener("dispose",l),delete r[x.id],o.unregister(x);const y=a.get(x);y&&(e.remove(y),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(x,y){return r[y.id]!==void 0||(y.addEventListener("dispose",l),r[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function d(x){const y=x.attributes;for(const _ in y)e.update(y[_],i.ARRAY_BUFFER)}function u(x){const y=x.index,_=x.attributes.position;let g=0;if(_===void 0)return;const E=y!==null?y.array.length:_.array.length/3-1,R=_.count>=65535?hh:ch,S=new R(Math.ceil(E/3)*6,1),A=S.array;if(y!==null){const v=y.array;g=y.version;for(let T=0,O=0;T<E;T+=3){const P=v[T+0],N=v[T+1],B=v[T+2];A[O++]=P,A[O++]=N,A[O++]=N,A[O++]=B,A[O++]=B,A[O++]=P}}else{g=_.version;for(let v=0,T=0;v<E;v+=3){const O=v+0,P=v+1,N=v+2;A[T++]=O,A[T++]=P,A[T++]=P,A[T++]=N,A[T++]=N,A[T++]=O}}S.version=g;const w=a.get(x);w&&e.remove(w),a.set(x,S)}function p(x){const y=a.get(x);if(y){const _=x.index;_!==null&&y.version<_.version&&u(x)}else u(x);return a.get(x)}function m(){for(const x in r){const y=r[x].deref();y!==void 0&&c(y)}}return{get:h,update:d,getWireframeAttribute:p,dispose:m}}function p0(i,e,t){let n;function r(u){n=u}let a,o;function l(u){a=u.type,o=u.bytesPerElement}function c(u,p){i.drawElements(n,p,a,u*o),t.update(p,n,1)}function h(u,p,m){m!==0&&(i.drawElementsInstanced(n,p,a,u*o,m),t.update(p,n,m))}function d(u,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,u,0,m);let y=0;for(let _=0;_<m;_++)y+=p[_];t.update(y,n,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function m0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function g0(i,e,t){const n=new WeakMap,r=new At;function a(o,l,c){const h=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=d!==void 0?d.length:0;let p=n.get(l);if(p===void 0||p.count!==u){let P=function(){T.dispose(),n.delete(l),l.removeEventListener("dispose",P)};var m=P;p!==void 0&&p.texture.dispose();const x=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],E=l.morphAttributes.normal||[],R=l.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),_===!0&&(S=3);let A=l.attributes.position.count*S,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const v=new Float32Array(A*w*4*u),T=new oh(v,A,w,u);T.type=In,T.needsUpdate=!0;const O=S*4;for(let N=0;N<u;N++){const B=g[N],W=E[N],I=R[N],V=A*w*4*N;for(let Y=0;Y<B.count;Y++){const z=Y*O;x===!0&&(r.fromBufferAttribute(B,Y),v[V+z+0]=r.x,v[V+z+1]=r.y,v[V+z+2]=r.z,v[V+z+3]=0),y===!0&&(r.fromBufferAttribute(W,Y),v[V+z+4]=r.x,v[V+z+5]=r.y,v[V+z+6]=r.z,v[V+z+7]=0),_===!0&&(r.fromBufferAttribute(I,Y),v[V+z+8]=r.x,v[V+z+9]=r.y,v[V+z+10]=r.z,v[V+z+11]=I.itemSize===4?r.w:1)}}p={count:u,texture:T,size:new ce(A,w)},n.set(l,p),l.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let _=0;_<h.length;_++)x+=h[_];const y=l.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:a}}function _0(i,e,t,n,r){let a=new WeakMap;function o(h){const d=r.render.frame,u=h.geometry,p=e.get(h,u);if(a.get(p)!==d&&(e.update(p),a.set(p,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),a.set(h,d))),h.isSkinnedMesh){const m=h.skeleton;a.get(m)!==d&&(m.update(),a.set(m,d))}return p}function l(){a=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:l}}const v0={[Vc]:"LINEAR_TONE_MAPPING",[Wc]:"REINHARD_TONE_MAPPING",[Xc]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[Yc]:"NEUTRAL_TONE_MAPPING",[$c]:"CUSTOM_TONE_MAPPING"};function x0(i,e,t,n,r,a){const o=new Un(e,t,{type:i,depthBuffer:r,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null,h=null;const d=new Yt;d.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new vt([0,2,0,0,2,0],2));const u=new af({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Te(d,u),m=new Ah(-1,1,1,-1,0,1);let x=null,y=null,_=!1,g,E=null,R=[],S=!1;this.setSize=function(A,w){o.setSize(A,w),l!==null&&l.setSize(A,w),c!==null&&c.setSize(A,w);for(let v=0;v<R.length;v++){const T=R[v];T.setSize&&T.setSize(A,w)}},this.setEffects=function(A){R=A,S=R.length>0&&R[0].isRenderPass===!0;const w=o.width,v=o.height;R.length>0&&l===null&&(l=new Un(w,v,{type:On,depthBuffer:!1,stencilBuffer:!1}),c=new Un(w,v,{type:On,depthBuffer:!1,stencilBuffer:!1}));const T=r===!0&&R.some(O=>O.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&h===null&&(h=new as(w,v),a===!0&&(h.format=li,h.type=rs)),o.dispose(),o.depthTexture=T?h:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let O=0;O<R.length;O++){const P=R[O];P.setSize&&P.setSize(w,v),T&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(h)}},this.begin=function(A,w){if(_||A.toneMapping===Yn&&R.length===0)return!1;if(E=w,w!==null){const v=w.width,T=w.height;(o.width!==v||o.height!==T)&&this.setSize(v,T)}return S===!1&&A.setRenderTarget(o),g=A.toneMapping,A.toneMapping=Yn,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=g,_=!0;let v=o,T=l;for(let O=0;O<R.length;O++){const P=R[O];P.enabled!==!1&&(P.render(A,T,v,w),P.needsSwap!==!1&&(v=T,T=T===l?c:l))}if(x!==A.outputColorSpace||y!==A.toneMapping){x=A.outputColorSpace,y=A.toneMapping,u.defines={},ct.getTransfer(x)===_t&&(u.defines.SRGB_TRANSFER="");const O=v0[y];O&&(u.defines[O]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(E),A.render(p,m),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),d.dispose(),u.dispose()}}const Dh=new en,Ih=new as(1,1),Nh=new ph(1),Uh=new oh,Fh=new su,Oh=new uh,uc=[],fc=[],pc=new Float32Array(16),mc=new Float32Array(9),gc=new Float32Array(4);function fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=uc[r];if(a===void 0&&(a=new Float32Array(r),uc[r]=a),e!==0){n.toArray(a,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(a,l)}return a}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vr(i,e){let t=fc[e];t===void 0&&(t=new Int32Array(e),fc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function M0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function E0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;gc.set(n),i.uniformMatrix2fv(this.addr,!1,gc),kt(t,n)}}function w0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;mc.set(n),i.uniformMatrix3fv(this.addr,!1,mc),kt(t,n)}}function T0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;pc.set(n),i.uniformMatrix4fv(this.addr,!1,pc),kt(t,n)}}function A0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function L0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function D0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function I0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Wr(i){return i.version===0&&(i.compareFunction=rh,i.needsUpdate=!0),i}function U0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?a=Wr(Ih):a=Dh,t.setTexture2D(e||a,r)}function F0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Fh,r)}function O0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Wr(Nh):a=Oh,t.setTextureCube(e||a,r)}function B0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Uh,r)}function k0(i){switch(i){case 5126:return M0;case 35664:return S0;case 35665:return y0;case 35666:return b0;case 35674:return E0;case 35675:return w0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return D0;case 36295:return I0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return B0}}function z0(i,e){i.uniform1fv(this.addr,e)}function H0(i,e){const t=fs(e,this.size,2);i.uniform2fv(this.addr,t)}function G0(i,e){const t=fs(e,this.size,3);i.uniform3fv(this.addr,t)}function V0(i,e){const t=fs(e,this.size,4);i.uniform4fv(this.addr,t)}function W0(i,e){const t=fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function X0(i,e){const t=fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $0(i,e){const t=fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function q0(i,e){i.uniform1iv(this.addr,e)}function Y0(i,e){i.uniform2iv(this.addr,e)}function Z0(i,e){i.uniform3iv(this.addr,e)}function K0(i,e){i.uniform4iv(this.addr,e)}function J0(i,e){i.uniform1uiv(this.addr,e)}function Q0(i,e){i.uniform2uiv(this.addr,e)}function j0(i,e){i.uniform3uiv(this.addr,e)}function eg(i,e){i.uniform4uiv(this.addr,e)}function tg(i,e,t){const n=this.cache,r=e.length,a=Vr(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wr(Ih):o=Dh;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||o,a[l])}function ng(i,e,t){const n=this.cache,r=e.length,a=Vr(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Fh,a[o])}function ig(i,e,t){const n=this.cache,r=e.length,a=Vr(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Wr(Nh):o=Oh;for(let l=0;l!==r;++l)t.setTextureCube(e[l]||o,a[l])}function sg(i,e,t){const n=this.cache,r=e.length,a=Vr(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Uh,a[o])}function rg(i){switch(i){case 5126:return z0;case 35664:return H0;case 35665:return G0;case 35666:return V0;case 35674:return W0;case 35675:return X0;case 35676:return $0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return K0;case 5125:return J0;case 36294:return Q0;case 36295:return j0;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}class ag{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k0(t.type)}}class og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rg(t.type)}}class lg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const l=r[a];l.setValue(e,t[l.id],n)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function _c(i,e){i.seq.push(e),i.map[e.id]=e}function cg(i,e,t){const n=i.name,r=n.length;for(Ea.lastIndex=0;;){const a=Ea.exec(n),o=Ea.lastIndex;let l=a[1];const c=a[2]==="]",h=a[3];if(c&&(l=l|0),h===void 0||h==="["&&o+2===r){_c(t,h===void 0?new ag(l,i,e):new og(l,i,e));break}else{let u=t.map[l];u===void 0&&(u=new lg(l),_c(t,u)),t=u}}}class wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);cg(l,c,this)}const r=[],a=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):a.push(o);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const l=t[a],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function vc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hg=37297;let dg=0;function ug(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const xc=new Ye;function fg(i){ct._getMatrix(xc,ct.workingColorSpace,i);const e=`mat3( ${xc.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+ug(i.getShaderSource(e),l)}else return a}function pg(i,e){const t=fg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const mg={[Vc]:"Linear",[Wc]:"Reinhard",[Xc]:"Cineon",[Po]:"ACESFilmic",[qc]:"AgX",[Yc]:"Neutral",[$c]:"Custom"};function gg(i,e){const t=mg[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _r=new D;function _g(){ct.getLuminanceCoefficients(_r);const i=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function xg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function Ts(i){return i!==""}function Sc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function yc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(i){return i.replace(Sg,yg)}function yg(i,e){const t=je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return So(t)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(i){return i.replace(bg,Eg)}function Eg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ec(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const wg={[xr]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function Tg(i){return wg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ag={[Is]:"ENVMAP_MODE_REFRACTION"};function Rg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ag[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cg={[Gc]:"ENVMAP_BLENDING_MULTIPLY",[Dd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function Pg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cg[i.combine]||"ENVMAP_BLENDING_NONE"}function Lg(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=Tg(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Rg(t),u=Pg(t),p=vg(t),m=xg(a),x=r.createProgram();let y,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ts).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ts).join(`
`),_.length>0&&(_+=`
`)):(y=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),_=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?je.tonemapping_pars_fragment:"",t.toneMapping!==Yn?gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,pg("linearToOutputTexel",t.outputColorSpace),_g(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=So(o),o=Sc(o,t),o=yc(o,t),l=So(l),l=Sc(l,t),l=yc(l,t),o=bc(o),l=bc(l),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=g+y+o,R=g+_+l,S=vc(r,r.VERTEX_SHADER,E),A=vc(r,r.FRAGMENT_SHADER,R);r.attachShader(x,S),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(P){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(x)||"",B=r.getShaderInfoLog(S)||"",W=r.getShaderInfoLog(A)||"",I=N.trim(),V=B.trim(),Y=W.trim();let z=!0,ae=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,S,A);else{const $=Mc(r,S,"vertex"),ee=Mc(r,A,"fragment");ut("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+$+`
`+ee)}else I!==""?$e("WebGLProgram: Program Info Log:",I):(V===""||Y==="")&&(ae=!1);ae&&(P.diagnostics={runnable:z,programLog:I,vertexShader:{log:V,prefix:y},fragmentShader:{log:Y,prefix:_}})}r.deleteShader(S),r.deleteShader(A),v=new wr(r,x),T=Mg(r,x)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(x,hg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=A,this}let Dg=0;class Ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ng(e),t.set(e,n)),n}}class Ng{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}}function Ug(i){return i===Ti||i===Tr||i===Ar}function Fg(i,e,t,n,r,a){const o=new ko,l=new Ig,c=new Set,h=[],d=new Map,u=n.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,T,O,P,N,B){const W=P.fog,I=N.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,z=e.get(v.envMap||V,Y),ae=p[v.type];let $=n.precision;v.precision!==null&&($=n.getMaxPrecision(v.precision),$!==v.precision&&$e("WebGLProgram.getParameters:",v.precision,"not supported, using",$,"instead."));const ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,se=ee!==void 0?ee.length:0;let Ce=0;I.morphAttributes.position!==void 0&&(Ce=1),I.morphAttributes.normal!==void 0&&(Ce=2),I.morphAttributes.color!==void 0&&(Ce=3);let Ge,Z,ye,Pe;if(ae){const Ee=Dn[ae];Ge=Ee.vertexShader,Z=Ee.fragmentShader}else{Ge=v.vertexShader,Z=v.fragmentShader;const Ee=l.getVertexShaderStage(v),gt=l.getFragmentShaderStage(v);l.update(v,Ee,gt),ye=Ee.id,Pe=gt.id}const ke=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,bt=N.isBatchedMesh===!0,Ve=!!v.map,tt=!!v.matcap,st=!!z,te=st&&z.isPMREMTexture===!0,pe=!!v.aoMap,de=!!v.lightMap,Re=!!v.bumpMap&&v.wireframe===!1,Se=!!v.normalMap,Ke=!!v.displacementMap,Ue=!!v.emissiveMap,rt=!!v.metalnessMap,at=!!v.roughnessMap,ft=v.anisotropy>0,F=v.clearcoat>0,Pt=v.diffuseRoughness>0,nt=v.dispersion>0,xt=v.retroreflectivity>0,ve=v.iridescence>0,Ct=v.sheen>0,He=v.transmission>0,qe=ft&&!!v.anisotropyMap,C=F&&!!v.clearcoatMap,M=F&&!!v.clearcoatNormalMap,H=F&&!!v.clearcoatRoughnessMap,oe=Pt&&!!v.diffuseRoughnessMap,j=ve&&!!v.iridescenceMap,ue=ve&&!!v.iridescenceThicknessMap,xe=Ct&&!!v.sheenColorMap,K=Ct&&!!v.sheenRoughnessMap,J=!!v.specularMap,me=!!v.specularColorMap,L=!!v.specularIntensityMap,Q=He&&!!v.transmissionMap,q=He&&!!v.thicknessMap,ge=!!v.gradientMap,he=!!v.alphaMap,fe=v.alphaTest>0,Fe=!!v.alphaHash,Qe=!!v.extensions;let le=Yn;v.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(le=i.toneMapping);const Be=te?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Je={shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:Ge,fragmentShader:Z,defines:v.defines,customVertexShaderID:ye,customFragmentShaderID:Pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:$,batching:bt,batchingColor:bt&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:ke===null?i.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:tt,envMap:st,envMapMode:st&&z.mapping,envMapPMREM:te,envMapMaxLod:te?Be.length-1:null,envMapSize:te?Be[0].width:null,aoMap:pe,lightMap:de,bumpMap:Re,normalMap:Se,displacementMap:Ke,emissiveMap:Ue,normalMapObjectSpace:Se&&v.normalMapType===Fd,normalMapTangentSpace:Se&&v.normalMapType===fo,packedNormalMap:Se&&v.normalMapType===fo&&Ug(v.normalMap.format),metalnessMap:rt,roughnessMap:at,anisotropy:ft,anisotropyMap:qe,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:H,diffuseRoughness:Pt,diffuseRoughnessMap:oe,dispersion:nt,retroreflection:xt,iridescence:ve,iridescenceMap:j,iridescenceThicknessMap:ue,sheen:Ct,sheenColorMap:xe,sheenRoughnessMap:K,specularMap:J,specularColorMap:me,specularIntensityMap:L,transmission:He,transmissionMap:Q,thicknessMap:q,gradientMap:ge,opaque:v.transparent===!1&&v.blending===As&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:fe,alphaHash:Fe,combine:v.combine,mapUv:Ve&&m(v.map.channel),aoMapUv:pe&&m(v.aoMap.channel),lightMapUv:de&&m(v.lightMap.channel),bumpMapUv:Re&&m(v.bumpMap.channel),normalMapUv:Se&&m(v.normalMap.channel),displacementMapUv:Ke&&m(v.displacementMap.channel),emissiveMapUv:Ue&&m(v.emissiveMap.channel),metalnessMapUv:rt&&m(v.metalnessMap.channel),roughnessMapUv:at&&m(v.roughnessMap.channel),anisotropyMapUv:qe&&m(v.anisotropyMap.channel),clearcoatMapUv:C&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&m(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&m(v.diffuseRoughnessMap.channel),iridescenceMapUv:j&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:K&&m(v.sheenRoughnessMap.channel),specularMapUv:J&&m(v.specularMap.channel),specularColorMapUv:me&&m(v.specularColorMap.channel),specularIntensityMapUv:L&&m(v.specularIntensityMap.channel),transmissionMapUv:Q&&m(v.transmissionMap.channel),thicknessMapUv:q&&m(v.thicknessMap.channel),alphaMapUv:he&&m(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Se||ft),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ve||he),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&Se===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ce,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:Ue&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jt,flipSided:v.side===an,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Qe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&v.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function y(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)T.push(O),T.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(_(T,v),g(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function _(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapPMREM),v.push(T.envMapMaxLod),v.push(T.envMapSize),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.diffuseRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.numLightProbeGrids),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function g(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){const T=p[v.type];let O;if(T){const P=Dn[T];O=nf.clone(P.uniforms)}else O=v.uniforms;return O}function R(v,T){let O=d.get(T);return O!==void 0?++O.usedTimes:(O=new Lg(i,T,v,r),h.push(O),d.set(T,O)),O}function S(v){if(--v.usedTimes===0){const T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),d.delete(v.cacheKey),v.destroy()}}function A(v){l.remove(v)}function w(){l.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:E,acquireProgram:R,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:w}}function Og(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,c){i.get(o)[l]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function l(p,m,x,y,_,g){let E=i[e];return E===void 0?(E={id:p.id,object:p,geometry:m,material:x,materialVariant:o(p),groupOrder:y,renderOrder:p.renderOrder,z:_,group:g},i[e]=E):(E.id=p.id,E.object=p,E.geometry=m,E.material=x,E.materialVariant=o(p),E.groupOrder=y,E.renderOrder=p.renderOrder,E.z=_,E.group=g),e++,E}function c(p,m,x,y,_,g,E){E.reversedDepth===!0&&(_=-_);const R=l(p,m,x,y,_,g);x.transmission>0?n.push(R):x.transparent===!0?r.push(R):t.push(R)}function h(p,m,x,y,_,g){const E=l(p,m,x,y,_,g);x.transmission>0?n.unshift(E):x.transparent===!0?r.unshift(E):t.unshift(E)}function d(p,m){t.length>1&&t.sort(p||Bg),n.length>1&&n.sort(m||wc),r.length>1&&r.sort(m||wc)}function u(){for(let p=e,m=i.length;p<m;p++){const x=i[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:h,finish:u,sort:d}}function kg(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new Tc,i.set(n,[o])):r>=a.length?(o=new Tc,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Hg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Gg=0;function Vg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Wg(i){const e=new zg,t=Hg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const r=new D,a=new yt,o=new yt;function l(h){let d=0,u=0,p=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let m=0,x=0,y=0,_=0,g=0,E=0,R=0,S=0,A=0,w=0,v=0,T=0,O=0,P=0;h.sort(Vg);for(let B=0,W=h.length;B<W;B++){const I=h[B],V=I.color,Y=I.intensity,z=I.distance;let ae=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ti?ae=I.shadow.map.texture:ae=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=V.r*Y,u+=V.g*Y,p+=V.b*Y;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],Y);P++}else if(I.isSunLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,se=t.get(I);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[x]=se,n.sunShadowMap[x]=ae;const Ce=ee.getViewportCount();for(let Ge=0;Ge<Ce;Ge++)n.sunShadowMatrix[y+Ge]=ee.getMatrix(Ge),n.sunShadowCascade[y+Ge]=ee._cascadeData[Ge];y+=Ce,x++}n.sun[m]=$,m++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,se=t.get(I);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,n.directionalShadow[_]=se,n.directionalShadowMap[_]=ae,n.directionalShadowMatrix[_]=I.shadow.matrix,A++}n.directional[_]=$,_++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(V).multiplyScalar(Y),$.distance=z,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[E]=$;const ee=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,ee.updateMatrices(I),I.castShadow&&O++),n.spotLightMatrix[E]=ee.matrix,I.castShadow){const se=t.get(I);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,n.spotShadow[E]=se,n.spotShadowMap[E]=ae,v++}E++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(V).multiplyScalar(Y),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=$,R++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const ee=I.shadow,se=t.get(I);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,se.shadowCameraNear=ee.camera.near,se.shadowCameraFar=ee.camera.far,n.pointShadow[g]=se,n.pointShadowMap[g]=ae,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=$,g++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(Y),$.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[S]=$,S++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=p;const N=n.hash;(N.sunLength!==m||N.directionalLength!==_||N.pointLength!==g||N.spotLength!==E||N.rectAreaLength!==R||N.hemiLength!==S||N.numSunShadows!==x||N.numDirectionalShadows!==A||N.numPointShadows!==w||N.numSpotShadows!==v||N.numSpotMaps!==T||N.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=_,n.spot.length=E,n.rectArea.length=R,n.point.length=g,n.hemi.length=S,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+T-O,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=P,N.sunLength=m,N.directionalLength=_,N.pointLength=g,N.spotLength=E,N.rectAreaLength=R,N.hemiLength=S,N.numSunShadows=x,N.numDirectionalShadows=A,N.numPointShadows=w,N.numSpotShadows=v,N.numSpotMaps=T,N.numLightProbes=P,n.version=Gg++)}function c(h,d){let u=0,p=0,m=0,x=0,y=0,_=0;const g=d.matrixWorldInverse;for(let E=0,R=h.length;E<R;E++){const S=h[E];if(S.isSunLight){const A=n.sun[u];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),u++}else if(S.isDirectionalLight){const A=n.directional[p];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),p++}else if(S.isSpotLight){const A=n.spot[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),x++}else if(S.isRectAreaLight){const A=n.rectArea[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),o.identity(),a.copy(S.matrixWorld),a.premultiply(g),o.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const A=n.point[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const A=n.hemi[_];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),_++}}}return{setup:l,setupView:c,state:n}}function Ac(i){const e=new Wg(i),t=[],n=[],r=[];function a(u){d.camera=u,t.length=0,n.length=0,r.length=0}function o(u){u.isLightProbeGrid?r.push(u):t.push(u)}function l(u){n.push(u)}function c(){e.setup(t),r.sort((u,p)=>u.priority-p.priority||u.id-p.id)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:l}}function Xg(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new Ac(i),e.set(r,[l])):a>=o.length?(l=new Ac(i),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
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
}`,Yg=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Zg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Rc=new yt,Ss=new D,wa=new D;function Kg(i,e,t){let n=new Fs;const r=new ce,a=new ce,o=new At,l=new of,c=new lf,h={},d=t.maxTextureSize,u={[wi]:an,[an]:wi,[jt]:jt},p=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:$g,fragmentShader:qg}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new Yt;x.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Te(x,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let g=this.type;this.render=function(w,v,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===kc&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);const O=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ji),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=g!==this.type;W&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=w.length;I<V;I++){const Y=w[I],z=Y.shadow;if(z===void 0){$e("WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ae=z.getFrameExtents();r.multiply(ae),a.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ae.x),r.x=a.x*ae.x,z.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ae.y),r.y=a.y*ae.y,z.mapSize.y=a.y));const $=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=$,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Es){if(Y.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Un(r.x,r.y,{format:Ti,type:On,minFilter:ln,magFilter:ln,generateMipmaps:!1}),z.map.texture.name=Y.name+".shadowMap",z.map.depthTexture=new as(r.x,r.y,In),z.map.depthTexture.name=Y.name+".shadowMapDepth",z.map.depthTexture.format=hi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=$t,z.map.depthTexture.magFilter=$t}else Y.isPointLight?(z.map=new $o(r.x),z.map.depthTexture=new ph(r.x,Fn)):(z.map=new Un(r.x,r.y),z.map.depthTexture=new as(r.x,r.y,Fn)),z.map.depthTexture.name=Y.name+".shadowMap",z.map.depthTexture.format=hi,this.type===xr?(z.map.depthTexture.compareFunction=$?sh:ih,z.map.depthTexture.minFilter=ln,z.map.depthTexture.magFilter=ln):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=$t,z.map.depthTexture.magFilter=$t);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);const ee=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Y.isPointLight!==!0&&z.updateMatrices(Y,T);const se=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:T.layers;for(let Ce=0;Ce<ee;Ce++){const Ge=z.getCamera(Ce);if(Y.isPointLight){const Z=z.camera,ye=z.matrix,Pe=Y.distance||Z.far;Pe!==Z.far&&(Z.far=Pe,Z.updateProjectionMatrix()),Ss.setFromMatrixPosition(Y.matrixWorld),Z.position.copy(Ss),wa.copy(Z.position),wa.add(Yg[Ce]),Z.up.copy(Zg[Ce]),Z.lookAt(wa),Z.updateMatrixWorld(),ye.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Rc.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Rc,Z.coordinateSystem,Z.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Ce),i.clear();else{Ce===0&&(i.setRenderTarget(z.map),i.clear());const Z=z.getViewport(Ce);o.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),B.viewport(o)}n=z.getFrustum(Ce),S(v,T,Ge,Y,se,this.type)}z.isPointLightShadow!==!0&&this.type===Es&&E(z,T),z.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(O,P,N)};function E(w,v){const T=e.update(y);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Un(r.x,r.y,{format:Ti,type:On}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),p.uniforms.shadow_pass.value=w.map.depthTexture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(v,null,T,p,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(v,null,T,m,y,null)}function R(w,v,T,O){let P=null;const N=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)P=N;else if(P=T.isPointLight===!0?c:l,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const B=P.uuid,W=v.uuid;let I=h[B];I===void 0&&(I={},h[B]=I);let V=I[W];V===void 0&&(V=P.clone(),I[W]=V,v.addEventListener("dispose",A)),P=V}if(P.visible=v.visible,P.wireframe=v.wireframe,O===Es?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:u[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const B=i.properties.get(P);B.light=T}return P}function S(w,v,T,O,P,N){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Es)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const I=e.update(w),V=w.material;if(Array.isArray(V)){const Y=I.groups;for(let z=0,ae=Y.length;z<ae;z++){const $=Y[z],ee=V[$.materialIndex];if(ee&&ee.visible){const se=R(w,ee,O,N);w.onBeforeShadow(i,w,v,T,I,se,$),i.renderBufferDirect(T,null,I,se,w,$),w.onAfterShadow(i,w,v,T,I,se,$)}}}else if(V.visible){const Y=R(w,V,O,N);w.onBeforeShadow(i,w,v,T,I,Y,null),i.renderBufferDirect(T,null,I,Y,w,null),w.onAfterShadow(i,w,v,T,I,Y,null)}}const W=w.children;for(let I=0,V=W.length;I<V;I++)S(W[I],v,T,O,P,N)}function A(w){w.target.removeEventListener("dispose",A);for(const T in h){const O=h[T],P=w.target.uuid;P in O&&(O[P].dispose(),delete O[P])}}}function Jg(i,e){function t(){let L=!1;const Q=new At;let q=null;const ge=new At(0,0,0,0);return{setMask:function(he){q!==he&&!L&&(i.colorMask(he,he,he,he),q=he)},setLocked:function(he){L=he},setClear:function(he,fe,Fe,Qe,le){le===!0&&(he*=Qe,fe*=Qe,Fe*=Qe),Q.set(he,fe,Fe,Qe),ge.equals(Q)===!1&&(i.clearColor(he,fe,Fe,Qe),ge.copy(Q))},reset:function(){L=!1,q=null,ge.set(-1,0,0,0)}}}function n(){let L=!1,Q=!1,q=null,ge=null,he=null;return{setReversed:function(fe){if(Q!==fe){const Fe=e.get("EXT_clip_control");fe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Q=fe;const Qe=he;he=null,this.setClear(Qe)}},getReversed:function(){return Q},setTest:function(fe){fe?be(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(fe){q!==fe&&!L&&(i.depthMask(fe),q=fe)},setFunc:function(fe){if(Q&&(fe=qd[fe]),ge!==fe){switch(fe){case Aa:i.depthFunc(i.NEVER);break;case Ra:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=fe}},setLocked:function(fe){L=fe},setClear:function(fe){he!==fe&&(he=fe,Q&&(fe=1-fe),i.clearDepth(fe))},reset:function(){L=!1,q=null,ge=null,he=null,Q=!1}}}function r(){let L=!1,Q=null,q=null,ge=null,he=null,fe=null,Fe=null,Qe=null,le=null;return{setTest:function(Be){L||(Be?be(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Be){Q!==Be&&!L&&(i.stencilMask(Be),Q=Be)},setFunc:function(Be,Je,Ee){(q!==Be||ge!==Je||he!==Ee)&&(i.stencilFunc(Be,Je,Ee),q=Be,ge=Je,he=Ee)},setOp:function(Be,Je,Ee){(fe!==Be||Fe!==Je||Qe!==Ee)&&(i.stencilOp(Be,Je,Ee),fe=Be,Fe=Je,Qe=Ee)},setLocked:function(Be){L=Be},setClear:function(Be){le!==Be&&(i.clearStencil(Be),le=Be)},reset:function(){L=!1,Q=null,q=null,ge=null,he=null,fe=null,Fe=null,Qe=null,le=null}}}const a=new t,o=new n,l=new r;let c={};const h=new WeakMap;let d={},u={},p={},m=new WeakMap,x=[],y=null,_=!1,g=null,E=null,R=null,S=null,A=null,w=null,v=null,T=new Oe(0,0,0),O=0,P=!1,N=null,B=null,W=null,I=null,V=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ae=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec($)[1]),z=ae>=1):$.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=ae>=2);let ee=null,se={};const Ce=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),Z=new At().fromArray(Ce),ye=new At().fromArray(Ge);function Pe(L,Q,q,ge){const he=new Uint8Array(4),fe=i.createTexture();i.bindTexture(L,fe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<q;Fe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(Q+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return fe}const ke={};ke[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),ke[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ke[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ke[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),be(i.DEPTH_TEST),o.setFunc(Ds),Re(!1),Se(Sl),be(i.CULL_FACE),pe(ji);function be(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function ze(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function bt(L,Q){return p[L]!==Q?(i.bindFramebuffer(L,Q),p[L]=Q,L===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Q),L===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ve(L,Q){let q=x,ge=!1;if(L){q=m.get(Q),q===void 0&&(q=[],m.set(Q,q));const he=L.textures;if(q.length!==he.length||q[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Fe=he.length;fe<Fe;fe++)q[fe]=i.COLOR_ATTACHMENT0+fe;q.length=he.length,ge=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ge=!0);ge&&i.drawBuffers(q)}function tt(L){return y!==L?(i.useProgram(L),y=L,!0):!1}const st={[Yi]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};st[_d]=i.MIN,st[vd]=i.MAX;const te={[xd]:i.ZERO,[Md]:i.ONE,[Sd]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[wd]:i.DST_COLOR,[bd]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[Td]:i.ONE_MINUS_DST_COLOR,[Ed]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Cd]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(L,Q,q,ge,he,fe,Fe,Qe,le,Be){if(L===ji){_===!0&&(ze(i.BLEND),_=!1);return}if(_===!1&&(be(i.BLEND),_=!0),L!==pd){if(L!==g||Be!==P){if((E!==Yi||A!==Yi)&&(i.blendEquation(i.FUNC_ADD),E=Yi,A=Yi),Be)switch(L){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFunc(i.ONE,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case El:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ut("WebGLState: Invalid blending: ",L);break}else switch(L){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bl:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case El:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",L);break}R=null,S=null,w=null,v=null,T.set(0,0,0),O=0,g=L,P=Be}return}he=he||Q,fe=fe||q,Fe=Fe||ge,(Q!==E||he!==A)&&(i.blendEquationSeparate(st[Q],st[he]),E=Q,A=he),(q!==R||ge!==S||fe!==w||Fe!==v)&&(i.blendFuncSeparate(te[q],te[ge],te[fe],te[Fe]),R=q,S=ge,w=fe,v=Fe),(Qe.equals(T)===!1||le!==O)&&(i.blendColor(Qe.r,Qe.g,Qe.b,le),T.copy(Qe),O=le),g=L,P=!1}function de(L,Q){L.side===jt?ze(i.CULL_FACE):be(i.CULL_FACE);let q=L.side===an;Q&&(q=!q),Re(q),L.blending===As&&L.transparent===!1?pe(ji):pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),a.setMask(L.colorWrite);const ge=L.stencilWrite;l.setTest(ge),ge&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function Se(L){L!==ud?(be(i.CULL_FACE),L!==B&&(L===Sl?i.cullFace(i.BACK):L===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),B=L}function Ke(L){L!==W&&(z&&i.lineWidth(L),W=L)}function Ue(L,Q,q){L?(be(i.POLYGON_OFFSET_FILL),(I!==Q||V!==q)&&(I=Q,V=q,o.getReversed()&&(Q=-Q,q=-q),i.polygonOffset(Q,q))):ze(i.POLYGON_OFFSET_FILL)}function rt(L){L?be(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function at(L){L===void 0&&(L=i.TEXTURE0+Y-1),ee!==L&&(i.activeTexture(L),ee=L)}function ft(L,Q,q){q===void 0&&(ee===null?q=i.TEXTURE0+Y-1:q=ee);let ge=se[q];ge===void 0&&(ge={type:void 0,texture:void 0},se[q]=ge),(ge.type!==L||ge.texture!==Q)&&(ee!==q&&(i.activeTexture(q),ee=q),i.bindTexture(L,Q||ke[L]),ge.type=L,ge.texture=Q)}function F(){const L=se[ee];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Pt(){try{i.compressedTexImage2D(...arguments)}catch(L){ut("WebGLState:",L)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(L){ut("WebGLState:",L)}}function xt(){try{i.texSubImage2D(...arguments)}catch(L){ut("WebGLState:",L)}}function ve(){try{i.texSubImage3D(...arguments)}catch(L){ut("WebGLState:",L)}}function Ct(){try{i.compressedTexSubImage2D(...arguments)}catch(L){ut("WebGLState:",L)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(L){ut("WebGLState:",L)}}function qe(){try{i.texStorage2D(...arguments)}catch(L){ut("WebGLState:",L)}}function C(){try{i.texStorage3D(...arguments)}catch(L){ut("WebGLState:",L)}}function M(){try{i.texImage2D(...arguments)}catch(L){ut("WebGLState:",L)}}function H(){try{i.texImage3D(...arguments)}catch(L){ut("WebGLState:",L)}}function oe(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function j(L,Q){u[L]!==Q&&(i.pixelStorei(L,Q),u[L]=Q)}function ue(L){Z.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function xe(L){ye.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ye.copy(L))}function K(L,Q){let q=h.get(Q);q===void 0&&(q=new WeakMap,h.set(Q,q));let ge=q.get(L);ge===void 0&&(ge=i.getUniformBlockIndex(Q,L.name),i.uniformBlockBinding(Q,ge,ge),q.set(L,ge))}function J(L,Q,q){const he=h.get(Q).get(L);c[he]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,he,q),c[he]=q)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},ee=null,se={},p={},c={},m=new WeakMap,x=[],y=null,_=!1,g=null,E=null,R=null,S=null,A=null,w=null,v=null,T=new Oe(0,0,0),O=0,P=!1,N=null,B=null,W=null,I=null,V=null,Z.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:be,disable:ze,bindFramebuffer:bt,drawBuffers:Ve,useProgram:tt,setBlending:pe,setMaterial:de,setFlipSided:Re,setCullFace:Se,setLineWidth:Ke,setPolygonOffset:Ue,setScissorTest:rt,activeTexture:at,bindTexture:ft,unbindTexture:F,compressedTexImage2D:Pt,compressedTexImage3D:nt,texImage2D:M,texImage3D:H,pixelStorei:j,getParameter:oe,updateUBOMapping:K,uniformBlockBinding:J,texStorage2D:qe,texStorage3D:C,texSubImage2D:xt,texSubImage3D:ve,compressedTexSubImage2D:Ct,compressedTexSubImage3D:He,scissor:ue,viewport:xe,reset:me}}function Qg(i,e,t,n,r,a,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ce,d=new WeakMap,u=new Set;let p;const m=new WeakMap,x=new Set,y=new FinalizationRegistry(C=>x.delete(C));let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return _?new OffscreenCanvas(C,M):Pr("canvas")}function E(C,M,H){let oe=1;const j=qe(C);if((j.width>H||j.height>H)&&(oe=H/Math.max(j.width,j.height)),oe<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ue=Math.floor(oe*j.width),xe=Math.floor(oe*j.height);p===void 0&&(p=g(ue,xe));const K=M?g(ue,xe):p;return K.width=ue,K.height=xe,K.getContext("2d").drawImage(C,0,0,ue,xe),$e("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ue+"x"+xe+")."),K}else return"data"in C&&$e("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function R(C){return C.generateMipmaps}function S(C){i.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,M,H,oe,j,ue=!1){if(C!==null){if(i[C]!==void 0)return i[C];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe;oe&&(xe=e.get("EXT_texture_norm16"),xe||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8),H===i.UNSIGNED_SHORT&&xe&&(K=xe.R16_EXT),H===i.SHORT&&xe&&(K=xe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),M===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8),H===i.UNSIGNED_SHORT&&xe&&(K=xe.RG16_EXT),H===i.SHORT&&xe&&(K=xe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),M===i.RGB&&(H===i.UNSIGNED_SHORT&&xe&&(K=xe.RGB16_EXT),H===i.SHORT&&xe&&(K=xe.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),M===i.RGBA){const J=ue?Cr:ct.getTransfer(j);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=J===_t?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&xe&&(K=xe.RGBA16_EXT),H===i.SHORT&&xe&&(K=xe.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(C,M){let H;return C?M===null||M===Fn||M===rs?H=i.DEPTH24_STENCIL8:M===In?H=i.DEPTH32F_STENCIL8:M===Ns&&(H=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fn||M===rs?H=i.DEPTH_COMPONENT24:M===In?H=i.DEPTH_COMPONENT32F:M===Ns&&(H=i.DEPTH_COMPONENT16),H}function T(C,M){return R(C)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function O(C){const M=new WeakRef(C);n.get(C).__ref=M,x.add(M),y.register(C,M,M)}function P(C){const M=n.get(C).__ref;M!==void 0&&(x.delete(M),y.unregister(M))}function N(C){W(C.target)}function B(C){I(C.target)}function W(C){C.removeEventListener("dispose",N),P(C),Y(C),C.isVideoTexture&&d.delete(C),C.isHTMLTexture&&u.delete(C)}function I(C){C.removeEventListener("dispose",B),P(C),ae(C)}function V(){for(const C of x){const M=C.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):W(M))}x.clear(),u.clear()}function Y(C){const M=n.get(C);if(M.__webglInit===void 0)return;const H=C.source,oe=m.get(H);if(oe){const j=oe[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&z(C),Object.keys(oe).length===0&&m.delete(H)}n.remove(C)}function z(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const H=C.source,oe=m.get(H);delete oe[M.__cacheKey],o.memory.textures--}function ae(C){const M=n.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();const H=C.depthTexture;if(H&&H.renderTarget===C&&W(H),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let ue=0;ue<M.__webglFramebuffer[j].length;ue++)i.deleteFramebuffer(M.__webglFramebuffer[j][ue]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const oe=C.textures;for(let j=0,ue=oe.length;j<ue;j++){const xe=n.get(oe[j]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(oe[j])}n.remove(C)}let $=0;function ee(){$=0}function se(){return $}function Ce(C){$=C}function Ge(){const C=$;return C>=r.maxTextures&&$e("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),$+=1,C}function Z(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ye(C,M){const H=n.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const oe=C.image;if(oe===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{de(H,C,M);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function Pe(C,M){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){de(H,C,M);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function ke(C,M){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){de(H,C,M);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function be(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Re(H,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const ze={[Na]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},bt={[$t]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},Ve={[Bd]:i.NEVER,[rh]:i.ALWAYS,[kd]:i.LESS,[ih]:i.LEQUAL,[zd]:i.EQUAL,[sh]:i.GEQUAL,[Hd]:i.GREATER,[Gd]:i.NOTEQUAL};function tt(C,M){if(M.type===In&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===Jr||M.magFilter===$s||M.magFilter===oi||M.minFilter===ln||M.minFilter===Jr||M.minFilter===$s||M.minFilter===oi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ze[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ze[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ze[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,bt[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,bt[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$t||M.minFilter!==$s&&M.minFilter!==oi||M.type===In&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function st(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",N),O(M));const oe=M.source;let j=m.get(oe);j===void 0&&(j={},m.set(oe,j));const ue=Z(M);if(ue!==C.__cacheKey){j[ue]===void 0&&(j[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),j[ue].usedTimes++;const xe=j[C.__cacheKey];xe!==void 0&&(j[C.__cacheKey].usedTimes--,xe.usedTimes===0&&z(M)),C.__cacheKey=ue,C.__webglTexture=j[ue].texture}return H}function te(C,M,H){return Math.floor(Math.floor(C/H)/M)}function pe(C,M,H,oe){const ue=C.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,H,oe,M.data);else{ue.sort((L,Q)=>L.start-Q.start);let xe=0;for(let L=1;L<ue.length;L++){const Q=ue[xe],q=ue[L],ge=Q.start+Q.count,he=te(q.start,M.width,4),fe=te(Q.start,M.width,4);q.start<=ge+1&&he===fe&&te(q.start+q.count-1,M.width,4)===he?Q.count=Math.max(Q.count,q.start+q.count-Q.start):(++xe,ue[xe]=q)}ue.length=xe+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let L=0,Q=ue.length;L<Q;L++){const q=ue[L],ge=Math.floor(q.start/4),he=Math.ceil(q.count/4),fe=ge%M.width,Fe=Math.floor(ge/M.width),Qe=he,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(i.TEXTURE_2D,0,fe,Fe,Qe,le,H,oe,M.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function de(C,M,H){let oe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=i.TEXTURE_3D);const j=st(C,M),ue=M.source;t.bindTexture(oe,C.__webglTexture,i.TEXTURE0+H);const xe=n.get(ue);if(ue.version!==xe.__version||j===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const le=ct.getPrimaries(ct.workingColorSpace),Be=M.colorSpace===ai?null:ct.getPrimaries(M.colorSpace),Je=M.colorSpace===ai||le===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let J=E(M.image,!1,r.maxTextureSize);J=He(M,J);const me=a.convert(M.format,M.colorSpace),L=a.convert(M.type);let Q=w(M.internalFormat,me,L,M.normalized,M.colorSpace,M.isVideoTexture);tt(oe,M);let q;const ge=M.mipmaps,he=M.isVideoTexture!==!0,fe=xe.__version===void 0||j===!0,Fe=ue.dataReady,Qe=T(M,J);if(M.isDepthTexture)Q=v(M.format===li,M.type),fe&&(he?t.texStorage2D(i.TEXTURE_2D,1,Q,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,me,L,null));else if(M.isDataTexture)if(ge.length>0){he&&fe&&t.texStorage2D(i.TEXTURE_2D,Qe,Q,ge[0].width,ge[0].height);for(let le=0,Be=ge.length;le<Be;le++)q=ge[le],he?Fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,q.width,q.height,me,L,q.data):t.texImage2D(i.TEXTURE_2D,le,Q,q.width,q.height,0,me,L,q.data);M.generateMipmaps=!1}else he?(fe&&t.texStorage2D(i.TEXTURE_2D,Qe,Q,J.width,J.height),Fe&&pe(M,J,me,L)):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,me,L,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){he&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,Q,ge[0].width,ge[0].height,J.depth);for(let le=0,Be=ge.length;le<Be;le++)if(q=ge[le],M.format!==Nn)if(me!==null)if(he){if(Fe)if(M.layerUpdates.size>0){const Je=oc(q.width,q.height,M.format,M.type);for(const Ee of M.layerUpdates){const gt=q.data.subarray(Ee*Je/q.data.BYTES_PER_ELEMENT,(Ee+1)*Je/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,Ee,q.width,q.height,1,me,gt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,q.width,q.height,J.depth,me,q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Q,q.width,q.height,J.depth,0,q.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,q.width,q.height,J.depth,me,L,q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Q,q.width,q.height,J.depth,0,me,L,q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{he&&fe&&t.texStorage2D(i.TEXTURE_2D,Qe,Q,ge[0].width,ge[0].height);for(let le=0,Be=ge.length;le<Be;le++)q=ge[le],M.format!==Nn?me!==null?he?Fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,q.width,q.height,me,q.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Q,q.width,q.height,0,q.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,q.width,q.height,me,L,q.data):t.texImage2D(i.TEXTURE_2D,le,Q,q.width,q.height,0,me,L,q.data)}else if(M.isDataArrayTexture)if(he){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,Q,J.width,J.height,J.depth),Fe)if(M.layerUpdates.size>0){const le=oc(J.width,J.height,M.format,M.type);for(const Be of M.layerUpdates){const Je=J.data.subarray(Be*le/J.data.BYTES_PER_ELEMENT,(Be+1)*le/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,J.width,J.height,1,me,L,Je)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,me,L,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,me,L,J.data);else if(M.isData3DTexture)he?(fe&&t.texStorage3D(i.TEXTURE_3D,Qe,Q,J.width,J.height,J.depth),Fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,me,L,J.data)):t.texImage3D(i.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,me,L,J.data);else if(M.isFramebufferTexture){if(fe)if(he)t.texStorage2D(i.TEXTURE_2D,Qe,Q,J.width,J.height);else{let le=J.width,Be=J.height;for(let Je=0;Je<Qe;Je++)t.texImage2D(i.TEXTURE_2D,Je,Q,le,Be,0,me,L,null),le>>=1,Be>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),J.parentNode!==le){le.appendChild(J),u.add(M),le.onpaint=Be=>{const Je=Be.changedElements;for(const Ee of u)Je.includes(Ee.image)&&(Ee.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const Je=i.RGBA,Ee=i.RGBA,gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Je,Ee,gt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(he&&fe){const le=qe(ge[0]);t.texStorage2D(i.TEXTURE_2D,Qe,Q,le.width,le.height)}for(let le=0,Be=ge.length;le<Be;le++)q=ge[le],he?Fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,me,L,q):t.texImage2D(i.TEXTURE_2D,le,Q,me,L,q);M.generateMipmaps=!1}else if(he){if(fe){const le=qe(J);t.texStorage2D(i.TEXTURE_2D,Qe,Q,le.width,le.height)}Fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,L,J)}else t.texImage2D(i.TEXTURE_2D,0,Q,me,L,J);R(M)&&M.mipmapsAutoUpdate===!0&&S(oe),xe.__version=ue.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Re(C,M,H){if(M.image.length!==6)return;const oe=st(C,M),j=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const ue=n.get(j);if(j.version!==ue.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);const xe=ct.getPrimaries(ct.workingColorSpace),K=M.colorSpace===ai?null:ct.getPrimaries(M.colorSpace),J=M.colorSpace===ai||xe===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let Ee=0;Ee<6;Ee++)!me&&!L?Q[Ee]=E(M.image[Ee],!0,r.maxCubemapSize):Q[Ee]=L?M.image[Ee].image:M.image[Ee],Q[Ee]=He(M,Q[Ee]);const q=Q[0],ge=a.convert(M.format,M.colorSpace),he=a.convert(M.type);let fe=w(M.internalFormat,ge,he,M.normalized,M.colorSpace);const Fe=M.isVideoTexture!==!0,Qe=ue.__version===void 0||oe===!0,le=j.dataReady;let Be=T(M,q);tt(i.TEXTURE_CUBE_MAP,M);let Je;if(M.isDepthTexture){if(fe=v(M.format===li,M.type),Qe)if(Fe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,fe,q.width,q.height);else for(let Ee=0;Ee<6;Ee++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,fe,q.width,q.height,0,ge,he,null)}else if(me){Fe&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,fe,q.width,q.height);for(let Ee=0;Ee<6;Ee++){Je=Q[Ee].mipmaps;for(let gt=0;gt<Je.length;gt++){const zt=Je[gt];M.format!==Nn?ge!==null?Fe?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,gt,0,0,zt.width,zt.height,ge,zt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,gt,fe,zt.width,zt.height,0,zt.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,gt,0,0,zt.width,zt.height,ge,he,zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,gt,fe,zt.width,zt.height,0,ge,he,zt.data)}}}else{if(Je=M.mipmaps,Fe&&Qe){Je.length>0&&Be++;const Ee=qe(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,fe,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(L){Fe?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Q[Ee].width,Q[Ee].height,ge,he,Q[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,fe,Q[Ee].width,Q[Ee].height,0,ge,he,Q[Ee].data);for(let gt=0;gt<Je.length;gt++){const jn=Je[gt].image[Ee].image;Fe?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,gt+1,0,0,jn.width,jn.height,ge,he,jn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,gt+1,fe,jn.width,jn.height,0,ge,he,jn.data)}}else{Fe?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ge,he,Q[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,fe,ge,he,Q[Ee]);for(let gt=0;gt<Je.length;gt++){const zt=Je[gt];Fe?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,gt+1,0,0,ge,he,zt.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,gt+1,fe,ge,he,zt.image[Ee])}}}R(M)&&M.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),ue.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Se(C,M,H,oe,j,ue){const xe=a.convert(H.format,H.colorSpace),K=a.convert(H.type),J=w(H.internalFormat,xe,K,H.normalized,H.colorSpace),me=n.get(M),L=n.get(H);if(L.__renderTarget=M,!me.__hasExternalTextures){const Q=Math.max(1,M.width>>ue),q=Math.max(1,M.height>>ue);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ue,J,Q,q,M.depth,0,xe,K,null):t.texImage2D(j,ue,J,Q,q,0,xe,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ve(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,j,L.__webglTexture,0,xt(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,j,L.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(C,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){const oe=M.depthTexture,j=oe&&oe.isDepthTexture?oe.type:null,ue=v(M.stencilBuffer,j),xe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(M),ue,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(M),ue,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ue,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,C)}else{const oe=M.textures;for(let j=0;j<oe.length;j++){const ue=oe[j],xe=a.convert(ue.format,ue.colorSpace),K=a.convert(ue.type),J=w(ue.internalFormat,xe,K,ue.normalized,ue.colorSpace);ve(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(M),J,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(M),J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(C,M,H){const oe=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(M.depthTexture);j.__renderTarget=M;const ue=oe?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||ue.width!==M.width||ue.height!==M.height)&&(ue.width=M.width,ue.height=M.height,M.depthTexture.needsUpdate=!0),oe?be(M.depthTexture,0):ye(M.depthTexture,0);const xe=j.__webglTexture,K=xt(M),J=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,me=M.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===hi)ve(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,J,xe,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,me,J,xe,0);else if(M.depthTexture.format===li)ve(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,J,xe,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,me,J,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(C){const M=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const oe=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),oe){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,oe.removeEventListener("dispose",j)};oe.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=oe}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let oe=0;oe<6;oe++)Ue(M.__webglFramebuffer[oe],C,oe);else C.texture.mipmaps.length>0?Ue(M.__webglFramebuffer[0],C,0):Ue(M.__webglFramebuffer,C,0);else if(H){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]===void 0)M.__webglDepthbuffer[oe]=i.createRenderbuffer(),Ke(M.__webglDepthbuffer[oe],C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ue)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ke(M.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(C,M,H){const oe=n.get(C);M!==void 0&&Se(oe.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&rt(C)}function ft(C){const M=C.texture,H=n.get(C),oe=n.get(M);C.addEventListener("dispose",B),O(C);const j=C.textures,ue=C.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=M.version,o.memory.textures++),ue){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let J=0;J<M.mipmaps.length;J++)H.__webglFramebuffer[K][J]=i.createFramebuffer()}else H.__webglFramebuffer[K]=i.createFramebuffer()}else{if(M.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)H.__webglFramebuffer[K]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(xe)for(let K=0,J=j.length;K<J;K++){const me=n.get(j[K]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ve(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){const J=j[K];H.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[K]);const me=a.convert(J.format,J.colorSpace),L=a.convert(J.type),Q=w(J.internalFormat,me,L,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),q=xt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,Q,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,H.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),tt(i.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Se(H.__webglFramebuffer[K][J],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else Se(H.__webglFramebuffer[K],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);R(M)?S(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let K=0,J=j.length;K<J;K++){const me=j[K],L=n.get(me);let Q=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,L.__webglTexture),tt(Q,me),Se(H.__webglFramebuffer,C,me,i.COLOR_ATTACHMENT0+K,Q,0),R(me)&&S(Q)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,oe.__webglTexture),tt(K,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Se(H.__webglFramebuffer[J],C,M,i.COLOR_ATTACHMENT0,K,J);else Se(H.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,K,0);R(M)?S(K):M.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&rt(C)}function F(C){const M=C.textures;for(let H=0,oe=M.length;H<oe;H++){const j=M[H];if(R(j)&&j.mipmapsAutoUpdate===!0){const ue=A(C),xe=n.get(j).__webglTexture;t.bindTexture(ue,xe),S(ue),t.unbindTexture()}}}const Pt=[];function nt(C){if(C.samples>0){if(ve(C)===!1){const M=C.textures,H=C.width,oe=C.height;let j=i.COLOR_BUFFER_BIT;const ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(C),K=M.length>1;if(K)for(let me=0;me<M.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let me=0;me<M.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);const L=n.get(M[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,H,oe,0,0,H,oe,j,i.NEAREST),c===!0&&(Pt.length=0,Pt.push(i.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Pt.push(ue),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let me=0;me<M.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);const L=n.get(M[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function xt(C){return Math.min(r.maxSamples,C.samples)}function ve(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(C){const M=o.render.frame;d.get(C)!==M&&(d.set(C,M),C.update())}function He(C,M){const H=C.colorSpace,oe=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Rr&&H!==ai&&(ct.getTransfer(H)===_t?(oe!==Nn||j!==dn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",H)),M}function qe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=Ge,this.resetTextureUnits=ee,this.getTextureUnits=se,this.setTextureUnits=Ce,this.setTexture2D=ye,this.setTexture2DArray=Pe,this.setTexture3D=ke,this.setTextureCube=be,this.rebindTextures=at,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ve,this.dispose=V}function jg(i,e){function t(n,r=ai){let a;const o=ct.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return i.BYTE;if(n===Jc)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===Lo)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===th)return i.RGB;if(n===Nn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===No)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===Uo)return i.RG_INTEGER;if(n===Fo)return i.RGBA_INTEGER;if(n===Mr||n===Sr||n===yr||n===br)if(o===_t)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Mr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Mr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===ka)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Fa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Tr||n===Xa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===za||n===Ha)return o===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ga)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return a.COMPRESSED_R11_EAC;if(n===Wa)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Tr)return a.COMPRESSED_RG11_EAC;if(n===Xa)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===qa||n===Ya||n===Za||n===Ka||n===Ja||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===so||n===ro)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===$a)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===no)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===io)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===so)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===oo||n===lo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ao)return o===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===co||n===ho||n===Ar||n===uo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===co)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ar)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
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

}`;class n_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fi({vertexShader:e_,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i_ extends mi{constructor(e,t){super();const n=this;let r=null,a=1,o=null,l="local-floor",c=1,h=null,d=null,u=null,p=null,m=null,x=null;const y=typeof XRWebGLBinding<"u",_=new n_,g={},E=t.getContextAttributes();let R=null,S=null;const A=[],w=[],v=new ce;let T=null,O=null;const P=new gn;P.viewport=new At;const N=new gn;N.viewport=new At;const B=[P,N],W=new uf;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ye=A[Z];return ye===void 0&&(ye=new ra,A[Z]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(Z){let ye=A[Z];return ye===void 0&&(ye=new ra,A[Z]=ye),ye.getGripSpace()},this.getHand=function(Z){let ye=A[Z];return ye===void 0&&(ye=new ra,A[Z]=ye),ye.getHandSpace()};function Y(Z){const ye=w.indexOf(Z.inputSource);if(ye===-1)return;const Pe=A[ye];Pe!==void 0&&(Pe.update(Z.inputSource,Z.frame,h||o),Pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",ae);for(let Z=0;Z<A.length;Z++){const ye=w[Z];ye!==null&&(w[Z]=null,A[Z].disconnect(ye))}I=null,V=null,_.reset();for(const Z in g)delete g[Z];if(e.setRenderTarget(R),m=null,p=null,u=null,r=null,S=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(v.width,v.height,!1),O!==null){const Z=O.camera;Z.fov=O.fov,Z.zoom=O.zoom,Z.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",z),r.addEventListener("inputsourceschange",ae),E.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,ke=null,be=null;E.depth&&(be=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=E.stencil?li:hi,ke=E.stencil?rs:Fn);const ze={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};u=this.getBinding(),p=u.createProjectionLayer(ze),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new Un(p.textureWidth,p.textureHeight,{format:Nn,type:dn,depthTexture:new as(p.textureWidth,p.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const Pe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,Pe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Un(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await r.requestReferenceSpace(l),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(Z){for(let ye=0;ye<Z.removed.length;ye++){const Pe=Z.removed[ye],ke=w.indexOf(Pe);ke>=0&&(w[ke]=null,A[ke].disconnect(Pe))}for(let ye=0;ye<Z.added.length;ye++){const Pe=Z.added[ye];let ke=w.indexOf(Pe);if(ke===-1){for(let ze=0;ze<A.length;ze++)if(ze>=w.length){w.push(Pe),ke=ze;break}else if(w[ze]===null){w[ze]=Pe,ke=ze;break}if(ke===-1)break}const be=A[ke];be&&be.connect(Pe)}}function $(Z,ye){ye===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ye.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ye=Z.near,Pe=Z.far;_.texture!==null&&(_.depthNear>0&&(ye=_.depthNear),_.depthFar>0&&(Pe=_.depthFar)),W.near=N.near=P.near=ye,W.far=N.far=P.far=Pe,(I!==W.near||V!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,V=W.far),W.layers.mask=Z.layers.mask|6,P.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;const ke=Z.parent,be=W.cameras;$(W,ke);for(let ze=0;ze<be.length;ze++)$(be[ze],ke);W.projectionMatrix.copy(P.projectionMatrix),W.projectionMatrixInverse.copy(P.projectionMatrixInverse),O===null&&Z.isPerspectiveCamera&&(O={camera:Z,fov:Z.fov,zoom:Z.zoom}),ee(Z,W,ke)};function ee(Z,ye,Pe){Pe===null?Z.matrix.copy(ye.matrixWorld):(Z.matrix.copy(Pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ye.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ye.projectionMatrix),Z.projectionMatrixInverse.copy(ye.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=po*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(W)},this.getCameraTexture=function(Z){return g[Z]};let se=null;function Ce(Z,ye){if(d=ye.getViewerPose(h||o),x=ye,d!==null){const Pe=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ke=!1;Pe.length!==W.cameras.length&&(W.cameras.length=0,ke=!0);for(let Ve=0;Ve<Pe.length;Ve++){const tt=Pe[Ve];let st=null;if(m!==null)st=m.getViewport(tt);else{const pe=u.getViewSubImage(p,tt);st=pe.viewport,Ve===0&&(e.setRenderTargetTextures(S,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(S))}let te=B[Ve];te===void 0&&(te=new gn,te.layers.enable(Ve),te.viewport=new At,B[Ve]=te),te.matrix.fromArray(tt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(tt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(st.x,st.y,st.width,st.height),Ve===0&&(W.matrix.copy(te.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ke===!0&&W.cameras.push(te)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=n.getBinding();const Ve=u.getDepthInformation(Pe[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(Ve,r.renderState)}if(be&&be.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Ve=0;Ve<Pe.length;Ve++){const tt=Pe[Ve].camera;if(tt){let st=g[tt];st||(st=new mh,g[tt]=st);const te=u.getCameraImage(tt);st.sourceTexture=te}}}}for(let Pe=0;Pe<A.length;Pe++){const ke=w[Pe],be=A[Pe];ke!==null&&be!==void 0&&be.update(ke,ye,h||o)}se&&se(Z,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),x=null}const Ge=new Rh;Ge.setAnimationLoop(Ce),this.setAnimationLoop=function(Z){se=Z},this.dispose=function(){}}}const s_=new yt,Bh=new Ye;Bh.set(-1,0,0,0,1,0,0,0,1);function r_(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,Eh(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,E,R,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?a(_,g):g.isMeshLambertMaterial?(a(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(a(_,g),u(_,g)):g.isMeshPhongMaterial?(a(_,g),d(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(a(_,g),p(_,g),g.isMeshPhysicalMaterial&&m(_,g,S)):g.isMeshMatcapMaterial?(a(_,g),x(_,g)):g.isMeshDepthMaterial?a(_,g):g.isMeshDistanceMaterial?(a(_,g),y(_,g)):g.isMeshNormalMaterial?a(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&l(_,g)):g.isPointsMaterial?c(_,g,E,R):g.isSpriteMaterial?h(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===an&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===an&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const E=e.get(g),R=E.envMap,S=E.envMapRotation;R&&(_.envMap.value=R,_.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Bh),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function l(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,E,R){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*E,_.scale.value=R*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function d(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function u(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function p(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,E){_.ior.value=g.ior,g.diffuseRoughness>0&&(_.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===an&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.retroreflectivity>0&&(_.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}function y(_,g){const E=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function a_(i,e,t,n){let r={},a={};function o(E,R){const S=R.program;n.uniformBlockBinding(E,S,r[E.id])}function l(E,R){let S=r[E.id];S===void 0&&(x(E),S=c(E),r[E.id]=S,E.addEventListener("dispose",_));const A=R.program;n.updateUBOMapping(E,A);const w=e.render.frame;a[E.id]!==w&&(h(E),a[E.id]=w)}function c(E){const R=i.createBuffer(),S=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function h(E){const R=r[E.id],S=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let w=0,v=S.length;w<v;w++){const T=S[w];if(Array.isArray(T))for(let O=0,P=T.length;O<P;O++)d(T[O],w,O,A);else d(T,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,R,S,A){if(p(E,R,S,A)===!0){const w=E.__offset,v=E.value;if(Array.isArray(v)){let T=0;for(let O=0;O<v.length;O++){const P=v[O],N=y(P,!0);u(P,E.__data,T),T+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,E.__data)}}function u(E,R,S){typeof E=="number"||typeof E=="boolean"?R[S]=E:E.isMatrix3?(R[S]=E.elements[0],R[S+1]=E.elements[1],R[S+2]=E.elements[2],R[S+3]=0,R[S+4]=E.elements[3],R[S+5]=E.elements[4],R[S+6]=E.elements[5],R[S+7]=0,R[S+8]=E.elements[6],R[S+9]=E.elements[7],R[S+10]=E.elements[8],R[S+11]=0):ArrayBuffer.isView(E)?R.set(E.subarray(0,R.length-S),S):E.toArray(R,S)}function p(E,R,S,A){const w=E.value,v=R+"_"+S;if(Array.isArray(w)){A[v]===void 0&&(A[v]=[]);const T=A[v];let O=!1;for(let P=0;P<w.length;P++)m(w[P],T,P)===!0&&(O=!0);return O}return m(w,A,v)}function m(E,R,S){if(R[S]===void 0)return typeof E=="number"||typeof E=="boolean"?R[S]=E:ArrayBuffer.isView(E)?R[S]=E.slice():R[S]=E.clone(),!0;{const A=R[S];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return R[S]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(A.equals(E)===!1)return A.copy(E),!0}}return!1}function x(E){const R=E.uniforms;let S=0;const A=16;for(let v=0,T=R.length;v<T;v++){const O=Array.isArray(R[v])?R[v]:[R[v]];for(let P=0,N=O.length;P<N;P++){const B=O[P],W=Array.isArray(B.value)?B.value:[B.value],I=Array.isArray(R[v])||Array.isArray(B.value);let V=S;for(let z=0,ae=W.length;z<ae;z++){const $=W[z],ee=y($,I),se=S%A,Ce=se%ee.boundary,Ge=se+Ce;S+=Ce,Ge!==0&&A-Ge<ee.storage&&(S+=A-Ge),z===0&&(V=S),S+=ee.storage}const Y=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Y((S-V)/Float32Array.BYTES_PER_ELEMENT),B.__offset=V}}const w=S%A;return w>0&&(S+=A-w),E.__size=S,E.__cache={},this}function y(E,R){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=16,S.storage=48):E.isMatrix4?(S.boundary=16,S.storage=64):E.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(S.boundary=16,S.storage=E.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",E),R===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function _(E){const R=E.target;R.removeEventListener("dispose",_),i.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function g(){for(const E in r)i.deleteBuffer(r[E]);r={},a={}}return{bind:o,update:l,dispose:g}}const o_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function l_(){return Ln===null&&(Ln=new Mu(o_,16,16,Ti,On),Ln.name="DFG_LUT",Ln.minFilter=ln,Ln.magFilter=ln,Ln.wrapS=qn,Ln.wrapT=qn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class c_{constructor(e={}){const{canvas:t=Xd(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:m=dn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const y=m,_=new Set([Fo,Uo,No]),g=new Set([dn,Fn,Ns,rs,Do,Io]),E=new Uint32Array(4),R=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let A=null,w=null;const v=[],T=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,B=null,W=null,I=null,V=null;this._outputColorSpace=sn;let Y=0,z=0,ae=null,$=-1,ee=null;const se=new At,Ce=new At;let Ge=null;const Z=new Oe(0);let ye=0,Pe=t.width,ke=t.height,be=1,ze=null,bt=null;const Ve=new At(0,0,Pe,ke),tt=new At(0,0,Pe,ke);let st=!1;const te=new Fs,pe=new Ho;let de=!1,Re=!1;const Se=new yt,Ke=new D,Ue=new At,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function ft(){return ae===null?be:1}let F=n;function Pt(b,U){return t.getContext(b,U)}let nt,xt,ve,Ct,He,qe,C,M,H,oe,j,ue,xe,K,J,me,L,Q,q,ge,he,fe,Fe;try{const b={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),F===null){const U="webgl2";if(F=Pt(U,b),F===null)throw Pt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(b){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),ut("WebGLRenderer: "+b.message),b}function Qe(){nt=new u0(F),nt.init(),he=new jg(F,nt),xt=new t0(F,nt,e,he),ve=new Jg(F,nt),xt.reversedDepthBuffer&&p&&ve.buffers.depth.setReversed(!0),W=F.createFramebuffer(),I=F.createFramebuffer(),V=F.createFramebuffer(),Ct=new m0(F),He=new Og,qe=new Qg(F,nt,ve,He,xt,he,Ct),C=new d0(P),M=new _f(F),fe=new jm(F,M),H=new f0(F,M,Ct,fe),oe=new _0(F,H,M,fe,Ct),Q=new g0(F,xt,qe),J=new n0(He),j=new Fg(P,C,nt,xt,fe,J),ue=new r_(P,He),xe=new kg,K=new Xg(nt),L=new Qm(P,C,ve,oe,x,c),me=new Kg(P,oe,xt),Fe=new a_(F,Ct,xt,ve),q=new e0(F,nt,Ct),ge=new p0(F,nt,Ct),Ct.programs=j.programs,P.capabilities=xt,P.extensions=nt,P.properties=He,P.renderLists=xe,P.shadowMap=me,P.state=ve,P.info=Ct}y!==dn&&(O=new x0(y,t.width,t.height,l,r,a));const le=new i_(P,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(b){b!==void 0&&(be=b,this.setSize(Pe,ke,!1))},this.getSize=function(b){return b.set(Pe,ke)},this.setSize=function(b,U,X=!0){if(le.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=b,ke=U,t.width=Math.floor(b*be),t.height=Math.floor(U*be),X===!0&&(t.style.width=b+"px",t.style.height=U+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Pe*be,ke*be).floor()},this.setDrawingBufferSize=function(b,U,X){Pe=b,ke=U,be=X,t.width=Math.floor(b*X),t.height=Math.floor(U*X),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(y===dn){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(se)},this.getViewport=function(b){return b.copy(Ve)},this.setViewport=function(b,U,X,k){b.isVector4?Ve.set(b.x,b.y,b.z,b.w):Ve.set(b,U,X,k),ve.viewport(se.copy(Ve).multiplyScalar(ft()).round())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,U,X,k){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,U,X,k),ve.scissor(Ce.copy(tt).multiplyScalar(ft()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(b){ve.setScissorTest(st=b)},this.setOpaqueSort=function(b){ze=b},this.setTransparentSort=function(b){bt=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,X=!0){let k=0;if(b){let G=!1;if(ae!==null){const Me=ae.texture.format;G=_.has(Me)}if(G){const Me=ae.texture.type,Le=g.has(Me),_e=L.getClearColor(),Ae=L.getClearAlpha(),Ne=_e.r,Ze=_e.g,ot=_e.b;Le?(E[0]=Ne,E[1]=Ze,E[2]=ot,E[3]=Ae,F.clearBufferuiv(F.COLOR,0,E)):(R[0]=Ne,R[1]=Ze,R[2]=ot,R[3]=Ae,F.clearBufferiv(F.COLOR,0,R))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),L.dispose(),xe.dispose(),K.dispose(),qe.dispose(),He.dispose(),C.dispose(),oe.dispose(),H.dispose(),fe.dispose(),Fe.dispose(),j.dispose(),le.dispose(),le.removeEventListener("sessionstart",dl),le.removeEventListener("sessionend",ul),_i.stop()};function Be(b){b.preventDefault(),Al("WebGLRenderer: Context Lost."),N=!0}function Je(){Al("WebGLRenderer: Context Restored."),N=!1;const b=Ct.autoReset,U=me.enabled,X=me.autoUpdate,k=me.needsUpdate,G=me.type;Qe(),Ct.autoReset=b,me.enabled=U,me.autoUpdate=X,me.needsUpdate=k,me.type=G}function Ee(b){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gt(b){const U=b.target;U.removeEventListener("dispose",gt),zt(U)}function zt(b){jn(b),He.remove(b)}function jn(b){const U=He.get(b).programs;U!==void 0&&(U.forEach(function(X){j.releaseProgram(X)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,X,k,G,Me){U===null&&(U=rt);const Le=G.isMesh&&G.matrixWorld.determinantAffine()<0,_e=cd(b,U,X,k,G);ve.setMaterial(k,Le);let Ae=X.index,Ne=1;if(k.wireframe===!0){if(Ae=H.getWireframeAttribute(X),Ae===void 0)return;Ne=2}const Ze=X.drawRange,ot=X.attributes.position;let De=Ze.start*Ne,lt=(Ze.start+Ze.count)*Ne;Me!==null&&(De=Math.max(De,Me.start*Ne),lt=Math.min(lt,(Me.start+Me.count)*Ne)),Ae!==null?(De=Math.max(De,0),lt=Math.min(lt,Ae.count)):ot!=null&&(De=Math.max(De,0),lt=Math.min(lt,ot.count));const Lt=lt-De;if(Lt<0||Lt===1/0)return;fe.setup(G,k,_e,X,Ae);let St,Mt=q;if(Ae!==null&&(St=M.get(Ae),Mt=ge,Mt.setIndex(St)),G.isMesh)k.wireframe===!0?(ve.setLineWidth(k.wireframeLinewidth*ft()),Mt.setMode(F.LINES)):Mt.setMode(F.TRIANGLES);else if(G.isLine){let Zt=k.linewidth;Zt===void 0&&(Zt=1),ve.setLineWidth(Zt*ft()),G.isLineSegments?Mt.setMode(F.LINES):G.isLineLoop?Mt.setMode(F.LINE_LOOP):Mt.setMode(F.LINE_STRIP)}else G.isPoints?Mt.setMode(F.POINTS):G.isSprite&&Mt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Zt=G._multiDrawStarts,Ie=G._multiDrawCounts,tn=G._multiDrawCount,pt=Ae?M.get(Ae).bytesPerElement:1,vi=He.get(k).currentProgram.getUniforms();for(let Kt=0;Kt<tn;Kt++)vi.setValue(F,"_gl_DrawID",Kt),Mt.render(Zt[Kt]/pt,Ie[Kt])}else if(G.isInstancedMesh)Mt.renderInstances(De,Lt,G.count);else if(X.isInstancedBufferGeometry){const Zt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ie=Math.min(X.instanceCount,Zt);Mt.renderInstances(De,Lt,Ie)}else Mt.render(De,Lt)};function hl(b,U,X,k){B!==null&&b.isNodeMaterial&&B.setObject(k,b),de===!0&&J.setState(b,X,!1),b.transparent===!0&&b.side===jt&&b.forceSinglePass===!1?(b.side=an,b.needsUpdate=!0,gs(b,U,k),b.side=wi,b.needsUpdate=!0,gs(b,U,k),b.side=jt):gs(b,U,k)}this.compile=function(b,U,X=null){X===null&&(X=b),B!==null&&B.renderStart(b,U,X),w=K.get(X),w.init(U),T.push(w),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),Re=this.localClippingEnabled,de=J.init(this.clippingPlanes,Re),de===!0&&J.setGlobalState(this.clippingPlanes,U),B!==null&&me.render(w.state.shadowsArray,X,U);const k=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Le=0;Le<Me.length;Le++){const _e=Me[Le];hl(_e,X,U,G),k.add(_e)}else hl(Me,X,U,G),k.add(Me)}),w=T.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(b,U,X=null){const k=this.compile(b,U,X);return new Promise(G=>{function Me(){if(k.forEach(function(Le){const Ae=He.get(Le).currentProgram;(Ae===void 0||Ae.isReady())&&k.delete(Le)}),k.size===0){G(b);return}setTimeout(Me,10)}nt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let qr=null;function od(b){qr&&qr(b)}function dl(){_i.stop()}function ul(){_i.start()}const _i=new Rh;_i.setAnimationLoop(od),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(b){qr=b,le.setAnimationLoop(b),b===null?_i.stop():_i.start()},le.addEventListener("sessionstart",dl),le.addEventListener("sessionend",ul),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(b,U);const X=le.enabled===!0&&le.isPresenting===!0,k=O!==null&&(ae===null||X)&&O.begin(P,ae);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,U,ae),w=K.get(b,T.length),w.init(U),w.state.textureUnits=qe.getTextureUnits(),T.push(w),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?pe.setFromArrayCamera(U):te.setFromProjectionMatrix(Se,An,U.reversedDepth),Re=this.localClippingEnabled,de=J.init(this.clippingPlanes,Re),A=xe.get(b,v.length),A.init(),v.push(A),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){const Le=P.xr.getDepthSensingMesh();Le!==null&&Yr(Le,U,-1/0,P.sortObjects)}Yr(b,U,0,P.sortObjects),A.finish(),B!==null&&B.updateLights(w.state.lightsArray),P.sortObjects===!0&&A.sort(ze,bt),at=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,at&&L.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),de===!0&&J.beginShadows();const G=w.state.shadowsArray;if(me.render(G,b,U),de===!0&&J.endShadows(),(k&&O.hasRenderPass())===!1){const Le=A.opaque,_e=A.transmissive;if(w.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(_e.length>0)for(let Ne=0,Ze=Ae.length;Ne<Ze;Ne++){const ot=Ae[Ne];pl(Le,_e,b,ot)}at&&L.render(b);for(let Ne=0,Ze=Ae.length;Ne<Ze;Ne++){const ot=Ae[Ne];fl(A,b,ot,ot.viewport)}}else _e.length>0&&pl(Le,_e,b,U),at&&L.render(b),fl(A,b,U)}ae!==null&&z===0&&(qe.updateMultisampleRenderTarget(ae),qe.updateRenderTargetMipmap(ae)),k&&O.end(P),b.isScene===!0&&b.onAfterRender(P,b,U),fe.resetDefaultState(),$=-1,ee=null,T.pop(),T.length>0?(w=T[T.length-1],qe.setTextureUnits(w.state.textureUnits),de===!0&&J.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,B!==null&&B.renderEnd()};function Yr(b,U,X,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){const Le=U.isArrayCamera?pe:te;if(!b.frustumCulled||b.intersectsFrustum(Le)){k&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Se);const _e=oe.update(b),Ae=b.material;Ae.visible&&A.push(b,_e,Ae,X,Ue.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){const Le=U.isArrayCamera?pe:te;if(!b.frustumCulled||b.intersectsFrustum(Le)){const _e=oe.update(b),Ae=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ue.copy(_e.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(Se)),Array.isArray(Ae)){const Ne=_e.groups;for(let Ze=0,ot=Ne.length;Ze<ot;Ze++){const De=Ne[Ze],lt=Ae[De.materialIndex];lt&&lt.visible&&A.push(b,_e,lt,X,Ue.z,De,U)}}else Ae.visible&&A.push(b,_e,Ae,X,Ue.z,null,U)}}}const Me=b.children;for(let Le=0,_e=Me.length;Le<_e;Le++)Yr(Me[Le],U,X,k)}function fl(b,U,X,k){const{opaque:G,transmissive:Me,transparent:Le}=b;w.setupLightsView(X),de===!0&&J.setGlobalState(P.clippingPlanes,X),k&&ve.viewport(se.copy(k)),G.length>0&&Ws(G,U,X),Me.length>0&&Ws(Me,U,X),Le.length>0&&Ws(Le,U,X),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function pl(b,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const De=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Un(1,1,{generateMipmaps:!0,type:De?On:dn,minFilter:oi,samples:Math.max(4,xt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Me=w.state.transmissionRenderTarget[k.id],Le=k.viewport||se;Me.setSize(Le.z*P.transmissionResolutionScale,Le.w*P.transmissionResolutionScale);const _e=P.getRenderTarget(),Ae=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Me),P.getClearColor(Z),ye=P.getClearAlpha(),ye<1&&P.setClearColor(16777215,.5),P.clear(),at&&L.render(X);const Ze=P.toneMapping;P.toneMapping=Yn;const ot=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),de===!0&&J.setGlobalState(P.clippingPlanes,k),Ws(b,X,k),qe.updateMultisampleRenderTarget(Me),qe.updateRenderTargetMipmap(Me),nt.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let lt=0,Lt=U.length;lt<Lt;lt++){const St=U[lt],{object:Mt,geometry:Zt,material:Ie,group:tn}=St;if(Ie.side===jt&&Mt.layers.test(k.layers)){const pt=Ie.side;Ie.side=an,Ie.needsUpdate=!0,ml(Mt,X,k,Zt,Ie,tn),Ie.side=pt,Ie.needsUpdate=!0,De=!0}}De===!0&&(qe.updateMultisampleRenderTarget(Me),qe.updateRenderTargetMipmap(Me))}P.setRenderTarget(_e,Ae,Ne),P.setClearColor(Z,ye),ot!==void 0&&(k.viewport=ot),P.toneMapping=Ze}function Ws(b,U,X){const k=U.isScene===!0?U.overrideMaterial:null;for(let G=0,Me=b.length;G<Me;G++){const Le=b[G],{object:_e,geometry:Ae,group:Ne}=Le;let Ze=Le.material;Ze.allowOverride===!0&&k!==null&&(Ze=k),_e.layers.test(X.layers)&&ml(_e,U,X,Ae,Ze,Ne)}}function ml(b,U,X,k,G,Me){B!==null&&G.isNodeMaterial&&B.setObject(b,G),b.onBeforeRender(P,U,X,k,G,Me),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(P,U,X,k,b,Me),G.transparent===!0&&G.side===jt&&G.forceSinglePass===!1?(G.side=an,G.needsUpdate=!0,P.renderBufferDirect(X,U,k,G,b,Me),G.side=wi,G.needsUpdate=!0,P.renderBufferDirect(X,U,k,G,b,Me),G.side=jt):P.renderBufferDirect(X,U,k,G,b,Me),b.onAfterRender(P,U,X,k,G,Me)}function gl(b){let U=0;for(const X of b)X.texture!==null&&U++;return U}function gs(b,U,X){U.isScene!==!0&&(U=rt);const k=He.get(b),G=w.state.lights,Me=w.state.shadowsArray,Le=G.state.version,_e=j.getParameters(b,G.state,Me,U,X,w.state.lightProbeGridArray),Ae=j.getProgramCacheKey(_e);let Ne=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=C.get(b.envMap||k.environment,Ze),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",gt),Ne=new Map,k.programs=Ne,k.programVariants=new Map);let ot=Ne.get(Ae);if(ot!==void 0){if(k.currentProgram===ot&&k.lightsStateVersion===Le)return vl(b,_e),ot}else _e.uniforms=j.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,X,_e),b.onBeforeCompile(_e,P),ot=j.acquireProgram(_e,Ae),Ne.set(Ae,ot),k.uniforms=_e.uniforms;const De=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=J.uniform),vl(b,_e),k.needsLights=dd(b),k.lightsStateVersion=Le,k.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.sunLights.value=G.state.sun,De.sunLightShadows.value=G.state.sunShadow,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.sunShadowMatrix.value=G.state.sunShadowMatrix,De.sunShadowCascade.value=G.state.sunShadowCascade,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=gl(w.state.lightProbeGridArray),k.currentProgram=ot,k.uniformsList=null,ot}function ld(b,U,X,k,G){const Me=He.get(b),Le=Me.currentProgram.id+","+k+","+G;let _e=Me.programVariants.get(Le);return _e===void 0?(_e=gs(b,U,X),Me.programVariants.set(Le,_e)):(Me.currentProgram=_e,Me.uniformsList=null,Me.outputColorSpace=k,Me.toneMapping=G),_e}function _l(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=wr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function vl(b,U){const X=He.get(b);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function cd(b,U,X,k,G){U.isScene!==!0&&(U=rt),qe.resetTextureUnits();const Me=U.fog,Le=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,_e=ae===null?P.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ct.workingColorSpace,Ae=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ne=C.get(k.envMap||Le,Ae),Ze=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ot=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),De=!!X.morphAttributes.position,lt=!!X.morphAttributes.normal,Lt=!!X.morphAttributes.color;let St=Yn;k.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(St=P.toneMapping);const Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Zt=Mt!==void 0?Mt.length:0,Ie=He.get(k),tn=w.state.lights;if(de===!0&&(Re===!0||b!==ee)){const Tt=b===ee&&k.id===$;J.setState(k,b,Tt)}let pt=!1,vi=!1;k.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==tn.state.version||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isBatchedMesh&&Ie.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ie.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==Ne||k.fog===!0&&Ie.fog!==Me||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==J.numPlanes||Ie.numIntersection!==J.numIntersection)||Ie.vertexAlphas!==Ze||Ie.vertexTangents!==ot||Ie.morphTargets!==De||Ie.morphNormals!==lt||Ie.morphColors!==Lt||Ie.morphTargetsCount!==Zt||Ie.numLightProbeGrids!==gl(w.state.lightProbeGridArray)?pt=!0:(Ie.outputColorSpace!==_e||Ie.toneMapping!==St)&&(vi=!0):(pt=!0,Ie.__version=k.version);let Kt=Ie.currentProgram;(pt===!0||vi===!0)&&(Kt=vi===!0?ld(k,U,G,_e,St):gs(k,U,G),B&&k.isNodeMaterial&&B.onUpdateProgram(k,Kt,Ie));let Xs=!1,ei=!1,xi=!1;const dt=Kt.getUniforms(),Xt=Ie.uniforms;if(ve.useProgram(Kt.program)&&(Xs=!0,ei=!0,xi=!0),k.id!==$&&($=k.id,ei=!0),Xs||ee!==b){ve.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),dt.setValue(F,"projectionMatrix",b.projectionMatrix),dt.setValue(F,"viewMatrix",b.matrixWorldInverse);const Ht=dt.map.cameraPosition;Ht!==void 0&&Ht.setValue(F,Ke.setFromMatrixPosition(b.matrixWorld)),xt.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&dt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),ee!==b&&(ee=b,ei=!0,xi=!0)}if(Ie.needsLights&&(tn.state.sunShadowMap.length>0&&dt.setValue(F,"sunShadowMap",tn.state.sunShadowMap,qe),tn.state.directionalShadowMap.length>0&&dt.setValue(F,"directionalShadowMap",tn.state.directionalShadowMap,qe),tn.state.spotShadowMap.length>0&&dt.setValue(F,"spotShadowMap",tn.state.spotShadowMap,qe),tn.state.pointShadowMap.length>0&&dt.setValue(F,"pointShadowMap",tn.state.pointShadowMap,qe)),G.isSkinnedMesh){dt.setOptional(F,G,"bindMatrix"),dt.setOptional(F,G,"bindMatrixInverse");const Tt=G.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),dt.setValue(F,"boneTexture",Tt.boneTexture,qe))}G.isBatchedMesh&&(dt.setOptional(F,G,"batchingTexture"),dt.setValue(F,"batchingTexture",G._matricesTexture,qe),dt.setOptional(F,G,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",G._indirectTexture,qe),dt.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",G._colorsTexture,qe));const Sn=X.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Q.update(G,X,Kt),(ei||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,dt.setValue(F,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Xt.envMapIntensity.value=U.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=l_()),ei){if(dt.setValue(F,"toneMappingExposure",P.toneMappingExposure),Ie.needsLights&&hd(Xt,xi),Me&&k.fog===!0&&ue.refreshFogUniforms(Xt,Me),ue.refreshMaterialUniforms(Xt,k,be,ke,w.state.transmissionRenderTarget[b.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){const Tt=S;let Ht=0;for(const zn of w.state.lightProbeGridArray)zn.texture!==null&&(Tt.textures[Ht]=zn.texture,Tt.min[Ht]=zn.boundingBox.min,Tt.max[Ht]=zn.boundingBox.max,Tt.resolution[Ht]=zn.resolution,Ht++);for(const zn in Tt)Tt[zn].length=Ht;Xt.probesSH.value=Tt.textures,Xt.probesMin.value=Tt.min,Xt.probesMax.value=Tt.max,Xt.probesResolution.value=Tt.resolution}wr.upload(F,_l(Ie),Xt,qe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(wr.upload(F,_l(Ie),Xt,qe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&dt.setValue(F,"center",G.center),dt.setValue(F,"modelViewMatrix",G.modelViewMatrix),dt.setValue(F,"normalMatrix",G.normalMatrix),dt.setValue(F,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const Tt=k.uniformsGroups;for(let Ht=0,zn=Tt.length;Ht<zn;Ht++){const Ml=Tt[Ht];Fe.update(Ml,Kt),Fe.bind(Ml,Kt)}}return Kt}function hd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function dd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(b,U,X){const k=He.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),He.get(b.texture).__webglTexture=U,He.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const X=He.get(b);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,X=0){ae=b,Y=U,z=X;let k=null,G=!1,Me=!1;if(b){const _e=He.get(b);if(_e.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(F.FRAMEBUFFER,_e.__webglFramebuffer),se.copy(b.viewport),Ce.copy(b.scissor),Ge=b.scissorTest,ve.viewport(se),ve.scissor(Ce),ve.setScissorTest(Ge),$=-1;return}else if(_e.__webglFramebuffer===void 0)qe.setupRenderTarget(b);else if(_e.__hasExternalTextures)qe.rebindTextures(b,He.get(b.texture).__webglTexture,He.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ze=b.depthTexture;if(_e.__boundDepthTexture!==Ze){if(Ze!==null&&He.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(b)}}const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Me=!0);const Ne=He.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?k=Ne[U][X]:k=Ne[U],G=!0):b.samples>0&&qe.useMultisampledRTT(b)===!1?k=He.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[X]:k=Ne,se.copy(b.viewport),Ce.copy(b.scissor),Ge=b.scissorTest}else se.copy(Ve).multiplyScalar(be).floor(),Ce.copy(tt).multiplyScalar(be).floor(),Ge=st;if(X!==0&&(k=W),ve.bindFramebuffer(F.FRAMEBUFFER,k)&&ve.drawBuffers(b,k),ve.viewport(se),ve.scissor(Ce),ve.setScissorTest(Ge),G){const _e=He.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,X)}else if(Me){const _e=U;for(let Ae=0;Ae<b.textures.length;Ae++){const Ne=He.get(b.textures[Ae]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ae,Ne.__webglTexture,X,_e)}}else if(b!==null&&X!==0){const _e=He.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_e.__webglTexture,X)}$=-1};function xl(b){const U=He.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=xt.textureFormatReadable(b.format),U.__typeReadable=xt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,X,k,G,Me,Le,_e=0){if(!(b&&b.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=He.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Ae=Ae[Le],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){ve.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const Ne=b.textures[_e],Ze=Ne.format,ot=Ne.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_e);const De=xl(Ne);if(De.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&X>=0&&X<=b.height-G&&F.readPixels(U,X,k,G,he.convert(Ze),he.convert(ot),Me)}finally{const Ne=ae!==null?He.get(ae).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,U,X,k,G,Me,Le,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=He.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Ae=Ae[Le],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(U>=0&&U<=b.width-k&&X>=0&&X<=b.height-G){ve.bindFramebuffer(F.FRAMEBUFFER,Ae);const Ne=b.textures[_e],Ze=Ne.format,ot=Ne.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_e);const De=xl(Ne);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),F.readPixels(U,X,k,G,he.convert(Ze),he.convert(ot),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Lt=ae!==null?He.get(ae).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Lt);const St=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $d(F,St,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(lt),F.deleteSync(St),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,X=0){const k=Math.pow(2,-X),G=Math.floor(b.image.width*k),Me=Math.floor(b.image.height*k),Le=U!==null?U.x:0,_e=U!==null?U.y:0;qe.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Le,_e,G,Me),ve.unbindTexture()},this.copyTextureToTexture=function(b,U,X=null,k=null,G=0,Me=0){let Le,_e,Ae,Ne,Ze,ot,De,lt,Lt;const St=b.isCompressedTexture?b.mipmaps[Me]:b.image;if(X!==null)Le=X.max.x-X.min.x,_e=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,Ze=X.min.y,ot=X.isBox3?X.min.z:0;else{const dt=Math.pow(2,-G);Le=Math.floor(St.width*dt),_e=Math.floor(St.height*dt),b.isDataArrayTexture?Ae=St.depth:b.isData3DTexture?Ae=Math.floor(St.depth*dt):Ae=1,Ne=0,Ze=0,ot=0}k!==null?(De=k.x,lt=k.y,Lt=k.z):(De=0,lt=0,Lt=0);const Mt=he.convert(U.format),Zt=he.convert(U.type);let Ie;U.isData3DTexture?(qe.setTexture3D(U,0),Ie=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(qe.setTexture2DArray(U,0),Ie=F.TEXTURE_2D_ARRAY):(qe.setTexture2D(U,0),Ie=F.TEXTURE_2D),ve.activeTexture(F.TEXTURE0),ve.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),ve.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ve.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const tn=ve.getParameter(F.UNPACK_ROW_LENGTH),pt=ve.getParameter(F.UNPACK_IMAGE_HEIGHT),vi=ve.getParameter(F.UNPACK_SKIP_PIXELS),Kt=ve.getParameter(F.UNPACK_SKIP_ROWS),Xs=ve.getParameter(F.UNPACK_SKIP_IMAGES);ve.pixelStorei(F.UNPACK_ROW_LENGTH,St.width),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St.height),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,ot);const ei=b.isDataArrayTexture||b.isData3DTexture,xi=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const dt=He.get(b),Xt=He.get(U),Sn=He.get(dt.__renderTarget),Tt=He.get(Xt.__renderTarget);ve.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ht=0;Ht<Ae;Ht++)ei&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(b).__webglTexture,G,ot+Ht),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(U).__webglTexture,Me,Lt+Ht)),F.blitFramebuffer(Ne,Ze,Ne+Le,Ze+_e,De,lt,De+Le,lt+_e,F.DEPTH_BUFFER_BIT,F.NEAREST);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||He.has(b)){const dt=He.get(b),Xt=He.get(U);ve.bindFramebuffer(F.READ_FRAMEBUFFER,I),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let Sn=0;Sn<Ae;Sn++)ei?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dt.__webglTexture,G,ot+Sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dt.__webglTexture,G),xi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.__webglTexture,Me,Lt+Sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xt.__webglTexture,Me),G!==0?F.blitFramebuffer(Ne,Ze,Ne+Le,Ze+_e,De,lt,De+Le,lt+_e,F.COLOR_BUFFER_BIT,F.NEAREST):xi?F.copyTexSubImage3D(Ie,Me,De,lt,Lt+Sn,Ne,Ze,Le,_e):F.copyTexSubImage2D(Ie,Me,De,lt,Ne,Ze,Le,_e);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xi?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Ie,Me,De,lt,Lt,Le,_e,Ae,Mt,Zt,St.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,Me,De,lt,Lt,Le,_e,Ae,Mt,St.data):F.texSubImage3D(Ie,Me,De,lt,Lt,Le,_e,Ae,Mt,Zt,St):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,De,lt,Le,_e,Mt,Zt,St.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,De,lt,St.width,St.height,Mt,St.data):F.texSubImage2D(F.TEXTURE_2D,Me,De,lt,Le,_e,Mt,Zt,St);ve.pixelStorei(F.UNPACK_ROW_LENGTH,tn),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,vi),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Kt),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,Xs),Me===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Ie),ve.unbindTexture()},this.initRenderTarget=function(b){He.get(b).__webglFramebuffer===void 0&&qe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?qe.setTextureCube(b,0):b.isData3DTexture?qe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?qe.setTexture2DArray(b,0):qe.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){Y=0,z=0,ae=null,ve.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const Cc={type:"change"},qo={type:"start"},kh={type:"end"},vr=new zr,Pc=new $n,h_=Math.cos(70*Qd.DEG2RAD),Ft=new D,on=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ta=1e-6;class d_ extends mf{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new di,this._lastTargetPosition=new D,this._quat=new di().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ac,this._sphericalDelta=new ac,this._scale=1,this._panOffset=new D,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new D,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=f_.bind(this),this._onPointerDown=u_.bind(this),this._onPointerUp=p_.bind(this),this._onContextMenu=S_.bind(this),this._onMouseWheel=__.bind(this),this._onKeyDown=v_.bind(this),this._onTouchStart=x_.bind(this),this._onTouchMove=M_.bind(this),this._onMouseDown=m_.bind(this),this._onMouseMove=g_.bind(this),this._interceptControlDown=y_.bind(this),this._interceptControlUp=b_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=mt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cc),this.update(),this.state=mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=Ft.length();o=this._clampDistance(l*this._scale);const c=l-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const h=new D(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<h_?this.object.lookAt(this.target):(Pc.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane(Pc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ta||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ta||this._lastTargetPosition.distanceToSquared(this.target)>Ta?(this.dispatchEvent(Cc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ft.copy(r).sub(this.target);let a=Ft.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,o=n.width,l=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(a/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function u_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function f_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function p_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kh),this.state=mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function m_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=mt.DOLLY;break;case Qi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}break;case Qi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(qo)}function g_(i){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function __(i){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(i.preventDefault(),this.dispatchEvent(qo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(kh))}function v_(i){this.enabled!==!1&&this._handleKeyDown(i)}function x_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1){this.state=mt.NONE;break}this._handleTouchStartRotate(i),this.state=mt.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1){this.state=mt.NONE;break}this._handleTouchStartPan(i),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=mt.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(qo)}function M_(i){switch(this._trackPointer(i),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=mt.NONE}}function S_(i){this.enabled!==!1&&i.preventDefault()}function y_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function b_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ys=new D;function mn(i,e,t,n,r,a){const o=2*Math.PI*r/4,l=Math.max(a-2*r,0),c=Math.PI/4;ys.copy(e),ys[n]=0,ys.normalize();const h=.5*o/(o+l),d=1-ys.angleTo(i)/c;return Math.sign(ys[t])===1?d*h:l/(o+l)+h+h*(1-d)}class Xr extends Qn{constructor(e=1,t=1,n=1,r=2,a=.1){const o=r*2+1;if(a=Math.min(e/2,t/2,n/2,a),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:a},o===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const c=new D,h=new D,d=new D(e,t,n).divideScalar(2).subScalar(a),u=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,x=u.length/6,y=new D,_=.5/o;for(let g=0,E=0;g<u.length;g+=3,E+=2)switch(c.fromArray(u,g),h.copy(c),h.x-=Math.sign(h.x)*_,h.y-=Math.sign(h.y)*_,h.z-=Math.sign(h.z)*_,h.normalize(),u[g+0]=d.x*Math.sign(c.x)+h.x*a,u[g+1]=d.y*Math.sign(c.y)+h.y*a,u[g+2]=d.z*Math.sign(c.z)+h.z*a,p[g+0]=h.x,p[g+1]=h.y,p[g+2]=h.z,Math.floor(g/x)){case 0:y.set(1,0,0),m[E+0]=mn(y,h,"z","y",a,n),m[E+1]=1-mn(y,h,"y","z",a,t);break;case 1:y.set(-1,0,0),m[E+0]=1-mn(y,h,"z","y",a,n),m[E+1]=1-mn(y,h,"y","z",a,t);break;case 2:y.set(0,1,0),m[E+0]=1-mn(y,h,"x","z",a,e),m[E+1]=mn(y,h,"z","x",a,n);break;case 3:y.set(0,-1,0),m[E+0]=1-mn(y,h,"x","z",a,e),m[E+1]=1-mn(y,h,"z","x",a,n);break;case 4:y.set(0,0,1),m[E+0]=1-mn(y,h,"x","y",a,e),m[E+1]=1-mn(y,h,"y","x",a,t);break;case 5:y.set(0,0,-1),m[E+0]=mn(y,h,"x","y",a,e),m[E+1]=1-mn(y,h,"y","x",a,t);break}}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.segments,e.radius)}}const Mn=Math.PI*2;function ie(i,e=.82,t=0,n={}){return new Hr({color:i,roughness:e,metalness:t,...n})}function Yo(i=11129812){return new Rn({color:i,roughness:.08,metalness:.05,transparent:!0,opacity:.19,side:jt,depthWrite:!1})}function ne(i,e,t,n,r=0,a=0,o=0,l=!0){const c=new Te(new Qn(i,e,t),n);return c.position.set(r,a,o),c.castShadow=l,c.receiveShadow=!0,c}function Et(i,e,t,n,r,a=0,o=0,l=0,c=!0){const h=new Te(new Xr(i,e,t,3,n),r);return h.position.set(a,o,l),h.castShadow=c,h.receiveShadow=!0,h}function Nt(i,e,t,n,r,a=0,o=0,l=0,c=!0){const h=new Te(new rn(i,e,t,n),r);return h.position.set(a,o,l),h.castShadow=c,h.receiveShadow=!0,h}function un(i,e,t=0,n=0,r=0,a=16){const o=new Te(new xn(i,a,Math.max(8,a/2)),e);return o.position.set(t,n,r),o.castShadow=!0,o.receiveShadow=!0,o}function zh(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e;const r=n.getContext("2d");t(r,i,e);const a=new fh(n);return a.colorSpace=sn,a.anisotropy=4,a}function Ir(i,e=1){return zh(300,220,(t,n,r)=>{t.fillStyle=i[0],t.fillRect(0,0,n,r);let a=e*9187;const o=()=>(a=a*16807%2147483647,(a-1)/2147483646);for(let l=0;l<17;l++){t.globalAlpha=.35+o()*.5,t.fillStyle=i[1+Math.floor(o()*(i.length-1))],t.beginPath();const c=o()*n,h=o()*r,d=20+o()*150,u=6+o()*90;o()>.5?t.ellipse(c,h,d/2,u/2,o()*3,0,Mn):t.rect(c,h,d,u),t.fill()}t.globalAlpha=.18,t.strokeStyle="#fff",t.lineWidth=1.5;for(let l=0;l<12;l++)t.beginPath(),t.moveTo(o()*n,0),t.lineTo(o()*n,r),t.stroke()})}function Hh(i,e){return zh(512,512,(t,n,r)=>{t.fillStyle=i,t.fillRect(0,0,n,r),t.strokeStyle=e,t.lineWidth=3,t.globalAlpha=.4;for(let a=-r;a<n+r;a+=26)t.beginPath(),t.moveTo(a,0),t.lineTo(a+r,r),t.stroke();t.globalAlpha=.8,t.lineWidth=5,t.strokeRect(24,24,n-48,r-48)})}function Nr(i,e,t,n,r,a,o,l=0){const c=new Te(new qt(t,n),new Wt({map:e,toneMapped:!1}));c.position.set(r,a,o),c.rotation.y=l,i.add(c);const h=ne(t+.12,n+.12,.045,ie(2827808,.6,.2),r,a,o-.03,!1);h.rotation.y=l,i.add(h)}function Ps(i,e,t,n,r=16760437){i.add(Nt(.02,.02,.6,8,ie(7166791,.5,.5),e,t+.3,n)),i.add(Nt(.14,.12,.05,16,ie(7166791,.5,.5),e,t+.02,n));const a=new Te(new rn(.13,.2,.26,16,1,!0),new Hr({color:15983039,emissive:r,emissiveIntensity:.8,side:jt}));a.position.set(e,t+.64,n),i.add(a)}function ns(i,e,t,n,r=1){const a=Nt(.16*r,.13*r,.28*r,12,ie(14271392,.85),e,t+.14*r,n);i.add(a);const o=ie(4088392,.75);for(let l=0;l<7;l++){const c=new Te(new xn(.14*r,8,6),o),h=l/7*Mn;c.scale.set(.55,1.6,.55),c.position.set(e+Math.cos(h)*.12*r,t+(.35+l%3*.1)*r,n+Math.sin(h)*.12*r),c.rotation.z=Math.cos(h)*.7,c.rotation.x=Math.sin(h)*.7,c.castShadow=!0,i.add(c)}}function Zo(i,e,t,n,r,a=2.2,o=0){const l=new We,c=ie(r,.95),h=Et(a,.24,.8,.07,c,0,.32,0),d=Et(a,.62,.2,.08,c,0,.58,-.31);l.add(h,d),l.add(Et(.2,.52,.82,.08,c,-a/2+.08,.4,0)),l.add(Et(.2,.52,.82,.08,c,a/2-.08,.4,0));for(let u=0;u<2;u++)l.add(Et(a*.4,.12,.68,.06,ie(16777215,1,0,{color:r}),-a*.23+u*a*.46,.47,.03,!1));return l.position.set(e,t,n),l.rotation.y=o,i.add(l),l}function Ko(i,e,t,n,r=7164475){const a=new We;a.add(ne(1.3,.08,.7,ie(r,.5,.1),0,.37,0)),[-.55,.55].forEach(o=>[-.25,.25].forEach(l=>a.add(ne(.06,.36,.06,ie(3944228,.5),o,.18,l)))),a.position.set(e,t,n),i.add(a)}function Jo(i,e,t,n,r=2.3,a=7100485,o=15919578){const l=new We;return l.add(Et(r,.3,2.05,.08,ie(o,.95),0,.32,0)),l.add(Et(r,.18,1.3,.08,ie(14207671,.95),0,.49,.2)),l.add(Et(r+.15,.85,.18,.08,ie(a,.9),0,.55,-1)),[-.48,.48].forEach(c=>l.add(Et(r*.33,.16,.5,.08,ie(16777215,.9),c,.58,-.63))),l.position.set(e,t,n),i.add(l),l}function Qo(i,e,t,n,r=7098681,a=6){const o=new We,l=new Te(new rn(.95,.95,.08,28),ie(r,.4,.1));l.position.y=.75,l.castShadow=!0,o.add(l),o.add(Nt(.13,.24,.72,12,ie(3944228,.5),0,.37,0));const c=ie(10191461,.9);for(let h=0;h<a;h++){const d=h/a*Mn,u=new We;u.add(Et(.4,.1,.4,.05,c,0,.45,0)),u.add(Et(.4,.52,.08,.05,c,0,.62,-.18)),[-.14,.14].forEach(p=>[-.14,.14].forEach(m=>u.add(ne(.04,.45,.04,ie(5587503,.5),p,.22,m)))),u.position.set(Math.cos(d)*1.3,0,Math.sin(d)*1.3),u.rotation.y=-d+Math.PI/2,o.add(u)}return o.position.set(e,t,n),i.add(o),o}function _n(i,e,t,n,r,a,o,l=4012080,c=0){const h=new We,d=ie(l,.45,.55);h.add(ne(e,.07,.08,d,0,t/2,0)),h.add(ne(e,.07,.08,d,0,-t/2,0)),h.add(ne(.07,t,.08,d,-e/2,0,0)),h.add(ne(.07,t,.08,d,e/2,0,0)),h.add(ne(.045,t,.05,d,0,0,.01)),h.add(ne(e,.05,.05,d,0,0,.01));const u=new Te(new qt(e-.08,t-.08),Yo(o));return u.position.z=0,h.add(u),h.position.set(n,r,a),h.rotation.y=c,i.add(h),h}function Ur(i,e,t,n,r,a=0,o=4867131){const l=new We,c=new Te(new qt(r,.72),Yo(11984864));c.position.y=.36,l.add(c),l.add(ne(r,.06,.06,ie(o,.35,.7),0,.74,0));for(let h=0;h<=5;h++)l.add(ne(.04,.75,.04,ie(o,.35,.7),-r/2+r/5*h,.38,0));l.position.set(e,t,n),l.rotation.y=a,i.add(l)}function is(i,e,t,n,r=0,a=15787733){const o=new We;o.add(Et(.72,.13,1.8,.07,ie(a,.95),0,.42,0));const l=Et(.72,.1,.95,.05,ie(a,.95),0,.74,-.65);l.rotation.x=-.65,o.add(l),o.add(ne(.7,.06,1.7,ie(7295543,.7),0,.31,0)),[-.65,.65].forEach(c=>o.add(ne(.06,.34,.06,ie(7295543,.7),0,.16,c))),o.position.set(e,t,n),o.rotation.y=r,i.add(o)}function yo(i,e,t,n,r=15327180){const a=new We;a.add(Nt(.03,.03,2.2,8,ie(6179382,.8),0,1.1,0));const o=new Te(new Jn(1.8,.38,14,1,!0),ie(r,.95,0,{side:jt}));o.position.y=2.2,o.castShadow=!0,a.add(o),a.add(Nt(.35,.5,.12,12,ie(5722186,.7),0,.05,0)),a.position.set(e,t,n),i.add(a)}function E_(i,e,t,n,r=1,a=null){const o=new We,l=ie(8217156,.95);let c=0;for(let u=0;u<7;u++){const p=Nt(.08*r,.12*r,.52*r,7,l,c,(.26+u*.46)*r,0,!1);p.rotation.z=.03*u,o.add(p),c+=.03*u*r}const h=new We;h.position.set(c,3.55*r,0);const d=ie(4418373,.82);for(let u=0;u<9;u++){const p=new Te(new Jn(.15*r,2*r,3),d),m=u/9*Mn;p.position.set(Math.cos(m)*.65*r,-.1,Math.sin(m)*.65*r),p.rotation.z=Math.PI/2,p.rotation.y=-m,p.rotation.x=.28,p.scale.set(.45,1,.22),p.castShadow=!0,h.add(p)}return h.add(un(.16*r,ie(3494191,.9),0,.05,0,10)),o.add(h),o.position.set(e,t,n),i.add(o),a&&a.push({object:h,phase:Math.random()*Mn,amp:.035}),o}function w_(i,e,t,n,r=1,a=null){const o=new We;o.add(Nt(.12*r,.22*r,1.9*r,8,ie(7164216,.95),0,.95*r,0));const l=[ie(4613193,.9),ie(5403991,.9),ie(4021057,.9)];for(let c=0;c<7;c++){const h=c/7*Mn,d=l[c%3],u=un((.7+c%3*.15)*r,d,Math.cos(h)*.55*r,(2+c%2*.35)*r,Math.sin(h)*.55*r,12);o.add(u)}return o.add(un(.95*r,l[1],0,2.5*r,0,12)),o.position.set(e,t,n),i.add(o),a&&a.push({object:o,phase:Math.random()*Mn,amp:.012}),o}function $i(i,e,t,n,r,a=.6,o=.7){const l=ie(4087875,.92),c=Et(r,o,a,Math.min(.25,o/3),l,e,t+o/2,n);return i.add(c),c}function Fr(i,e,t,n,r,a=14066522){i.add(Et(r,.14,.7,.05,ie(5915697,1),e,t+.07,n));const o=ie(a,.8);for(let l=0;l<Math.max(4,Math.floor(r*4));l++){const c=e-r/2+.22+(r-.44)/Math.max(1,Math.floor(r*4)-1)*l;i.add(un(.055,o,c,t+.2+l%2*.03,n+(l%3-1)*.12,6)),i.add(Nt(.012,.012,.16,4,ie(4942658,.8),c,t+.12,n+(l%3-1)*.12,!1))}}function jo(i,e,t){const n=new We,r=i.age<15,a=r?.76:1,o=ie(i.skin,.85),l=ie(i.top,.88),c=ie(i.bottom,.9),h=ie(i.hair,.92),d=ie(3090724,.85),u=new We;if(u.scale.setScalar(a),[-.105,.105].forEach(A=>{const w=new Te(new Ki(.085,.48,4,8),c);w.position.set(A,.42,0),w.castShadow=!0,u.add(w);const v=Et(.2,.12,.32,.05,d,A,.075,.06);u.add(v)}),i.style==="gown"){const A=new Te(new rn(.22,.43,1.02,16,1,!1),l);A.position.y=.47,A.castShadow=!0,u.add(A)}else u.add(Et(.4,.22,.26,.07,c,0,.74,0));const p=new Te(new Ki(.2,.38,4,10),l);p.position.y=1.06,p.castShadow=!0,u.add(p),(i.style==="suit"||i.style==="tailored")&&(u.add(ne(.37,.54,.08,ie(15986146,.85),0,1.08,.16,!1)),u.add(ne(.08,.54,.1,l,.02,1.08,.17,!1)),i.style==="suit"&&u.add(ne(.08,.28,.08,ie(8863809,.7),0,1.2,.18,!1)));const m=[];[-1,1].forEach(A=>{const w=new We;w.position.set(A*.26,1.27,0);const v=new Te(new Ki(.065,.42,4,8),l);v.position.y=-.22,v.castShadow=!0,w.add(v);const T=un(.065,o,0,-.47,0,8);w.add(T),w.rotation.z=A*.14,u.add(w),m.push({pivot:w,side:A,base:A*.14})});const x=Nt(.06,.07,.1,8,o,0,1.46,0,!1);u.add(x);const y=un(r?.175:.17,o,0,1.65,0,18);u.add(y),[-.063,.063].forEach(A=>u.add(un(.018,ie(2366745,.5),A,1.68,.158,6))),u.add(un(.016,ie(9263690,.5),0,1.625,.168,6));const _=new Te(new Ci(.035,.008,4,8,Math.PI),ie(7620157,.5));_.position.set(0,1.59,.164),_.rotation.z=Math.PI,u.add(_);const g=new Te(new xn(r?.185:.18,16,10,0,Mn,0,Math.PI*.58),h);if(g.position.set(0,1.692,-.008),g.castShadow=!0,u.add(g),i.style==="gown"){const A=un(.09,h,0,1.76,-.11,10);u.add(A)}if(i.name==="Ivy"||i.name==="Celine"){const A=new Te(new Ki(.055,.35,4,8),h);A.position.set(0,1.48,-.16),A.castShadow=!0,u.add(A)}u.position.y=0,n.add(u),n.scale.setScalar(r?1.06:1.1);const E=new Wt({color:new Oe(t),transparent:!0,opacity:.34,side:jt,depthWrite:!1}),R=new Te(new us(.29,.34,28),E);R.rotation.x=-Math.PI/2,R.position.y=.035,n.add(R);const S=new Te(new xn(.42,8,6),new Wt({transparent:!0,opacity:0,depthWrite:!1}));return S.position.y=.92,S.userData.memberIndex=e,n.add(S),n.userData.memberIndex=e,n.userData.ring=R,n.userData.person=u,n.userData.arms=m,n.userData.phase=e*1.7+Math.random()*2,n}function el(i){const e=new We,t=new Rn({color:i.color,roughness:.25,metalness:.52,clearcoat:1,clearcoatRoughness:.16}),n=ie(1514269,.32,.2),r=ie(13351061,.24,.9),a=new Rn({color:2241081,roughness:.05,metalness:.5,transparent:!0,opacity:.8}),o=i.length||3.9,l=i.width||1.65,c=i.height||.6;e.add(Et(o,c,l,.21,t,0,.5,0)),e.add(Et(o*.53,i.cabinH||.55,l*.86,.18,i.kind==="suv"?t:a,-o*.02,.9,0)),i.kind!=="suv"?(e.add(Et(o*.47,.12,l*.88,.06,t,-o*.02,1.17,0)),e.add(ne(.04,.5,l*.8,t,-o*.02,.92,0,!1))):e.add(Et(o*.53,.08,l*.87,.04,n,-o*.02,1.2,0,!1));const h=ie(1053204,.7,.2),d=r;return[-o*.32,o*.32].forEach(u=>[-l/2,l/2].forEach(p=>{const m=new Te(new rn(.31,.31,.16,18),h);m.rotation.x=Math.PI/2,m.position.set(u,.31,p),m.castShadow=!0,e.add(m);const x=new Te(new rn(.17,.17,.17,12),d);x.rotation.x=Math.PI/2,x.position.set(u,.31,p),e.add(x)})),[-1,1].forEach(u=>{const p=Et(.13,.13,.3,.03,ie(16773579,.2,0,{emissive:16764037,emissiveIntensity:1.5}),o/2-.04,.57,u*l*.29,!1);e.add(p),e.add(ne(.06,.08,l*.55,r,o/2+.02,.37,0,!1))}),e.add(ne(o*.4,.03,.03,r,0,.72,l/2+.01,!1)),i.kind==="luxury"&&(e.add(ne(.52,.34,.05,r,-o*.2,.8,l/2+.03,!1)),e.add(Nt(.1,.1,.05,12,r,-o*.2,.62,l/2+.03,!1))),e}function Gh(i=1,e=14201460){const t=new We,n=new Rn({color:15855334,roughness:.28,metalness:.35,clearcoat:.7}),r=ie(2568244,.4,.5),a=ie(e,.4,.3),o=new Rn({color:8366007,roughness:.03,metalness:.6,transparent:!0,opacity:.7}),l=un(1,n,0,1.4,0,20);l.scale.set(1.2,.72,.85),t.add(l);const c=un(.6,o,0,1.38,.65,16);c.scale.set(.92,.65,.7),t.add(c),t.add(Nt(.12,.28,2.9,8,n,0,1.55,-2.1).rotateX(Math.PI/2)),t.add(ne(.08,1.25,.05,a,0,1.95,-3.6,!1)),t.add(ne(.06,.05,1.75,a,0,1.9,-3.5,!1));const h=ie(3225402,.4,.6);[-.42,.42].forEach(p=>{t.add(Nt(.045,.045,2.65,8,h,0,.52,p).rotateZ(Math.PI/2)),[-.8,.8].forEach(m=>t.add(ne(.05,.45,.05,h,m,.75,p,!1)))});const d=new We;d.position.set(0,2.35,0),d.add(Nt(.12,.12,.25,12,r));for(let p=0;p<4;p++){const m=ne(.09,.025,3.4,r,0,0,1.7,!1);m.rotation.y=p/4*Mn,d.add(m)}t.add(d);const u=new We;u.position.set(.34,1.75,-3.62);for(let p=0;p<3;p++){const m=ne(.04,1.3,.06,r,0,0,0,!1);m.rotation.z=p/3*Mn,u.add(m)}return t.add(u),t.scale.setScalar(i),t.userData.rotor=d,t.userData.tailRotor=u,t}function Vh(i,e,t,n,r=3.3){const a=Nt(r,r,.12,48,ie(4540484,.9,.05),e,.08,t);i.add(a);const o=new Te(new us(r*.76,r*.83,48),new Wt({color:n,transparent:!0,opacity:.9}));o.rotation.x=-Math.PI/2,o.position.set(e,.15,t),i.add(o);const l=new Wt({color:15920866});i.add(ne(.34,.02,1.7,l,e-.72,.155,t,!1)),i.add(ne(.34,.02,1.7,l,e+.72,.155,t,!1)),i.add(ne(1.15,.02,.34,l,e,.155,t,!1))}function T_(i,e,t,n,r,a,o=12576997){const l=[];for(let c=0;c<4;c++){const h=new Wt({color:o,transparent:!0,opacity:.2,side:jt,depthWrite:!1}),d=new Te(new us(.15,.18,32),h);d.rotation.x=-Math.PI/2,d.position.set(e+(Math.random()-.5)*r*.7,t,n+(Math.random()-.5)*a*.7),i.add(d),l.push({mesh:d,phase:Math.random()*4,max:1.8+Math.random()})}return l}function Wh(i,e,t,n,r,a,o,l=2984593){const c=new We;c.add(ne(r+2,.18,a+1.8,o,0,.09,0,!1)),c.add(ne(r,.5,a,ie(9344396,.9),0,.04,0,!1));const h=new Te(new qt(r-.2,a-.2),new Rn({color:l,roughness:.13,metalness:.06,transparent:!0,opacity:.91,clearcoat:.85,clearcoatRoughness:.12}));h.rotation.x=-Math.PI/2,h.position.y=.14,h.receiveShadow=!0,c.add(h),c.add(ne(r+.35,.16,.3,ie(14207150,.85),0,.18,-a/2-.04,!1)),c.add(ne(r+.35,.16,.3,ie(14207150,.85),0,.18,a/2+.04,!1)),c.position.set(e,t,n),i.add(c);const d=T_(i,e,t+.16,n,r,a),u=new Gr(5228750,1.8,10,2);return u.position.set(e,t+.8,n),i.add(u),{group:c,ripples:d,water:h}}function A_(i,e){const t=new We;t.name=`estate-${i.id}`;const n=i.id==="ultra",r=i.id==="average",a=e.palette,o={people:[],rings:[],rotors:[],ripples:[],sway:[],lights:[]},l=new We,c=ie(r?4999742:5131072,.96),h=Nt(n?22:20,n?19.2:17.5,1.2,64,c,0,-.62,0,!1);h.receiveShadow=!0,l.add(h);const d=new Te(new Ai(n?21.8:19.8,64),ie(a.lawn,.98));d.rotation.x=-Math.PI/2,d.position.y=.005,d.receiveShadow=!0,l.add(d);for(let S=0;S<12;S++){const A=S/12*Mn+.3,w=12+S%4*1.5,v=new Te(new Ai(1.8+S%3*.65,7),ie(a.lawnAlt,.98));v.rotation.x=-Math.PI/2,v.position.set(Math.cos(A)*w,.012,Math.sin(A)*w),v.scale.set(1.5,1,.75),v.receiveShadow=!0,l.add(v)}const u=ie(a.stone,.86);if(l.add(ne(n?27:22,.18,10,u,0,.1,6.8,!1)),!r)for(let S=0;S<5;S++){const A=ne(n?25:20,.02,.05,ie(a.stoneAlt,.9),0,.2,3.2+S*1.8,!1);l.add(A)}const p=ie(r?11115910:9142123,.9);for(let S=0;S<4;S++)l.add(ne(2.4-S*.12,.1,1.2,p,0,.07,12.5+S*1.35,!1));const m=ne(r?6.6:8.4,.09,5.8,ie(4868677,.94),r?-6.1:-8.5,.055,8.9,!1);m.rotation.y=r?.1:-.16,l.add(m),r?($i(l,-8.8,.1,7.3,.5,4,.5),$i(l,8.8,.1,7.3,.5,4,.5)):($i(l,-12.5,.1,.8,4.2,.6,.7),$i(l,13.3,.1,-2.2,.55,3.6,.55),$i(l,10.8,.1,11.5,4.6,.55,.6),$i(l,-9.7,.1,12.3,3,.55,.55)),(n?[[-14.5,-3],[15.5,11.5],[-15.4,12.6],[12.9,-12.7],[-7.5,-13.4],[17.6,-7]]:r?[[-10.5,1.2],[10.2,4.4],[-8.4,11.4],[7.5,12.1]]:[[-10.8,-5.3],[12.1,-7.2],[-12.2,11.9],[8.8,13.4]]).forEach(([S,A],w)=>{w%3===0||r?w_(l,S,0,A,r?.85:1,o.sway):E_(l,S,0,A,n?1:.86,o.sway)}),Fr(l,n?-14.1:-10.8,.04,10.8,2.8,r?13666923:14857052),Fr(l,n?14.5:10.3,.04,8.4,2.3,14394788),t.add(l),n?R_(t,i,a,o):r?P_(t,i,a,o):C_(t,i,a,o);const y=80,_=new Float32Array(y*3);for(let S=0;S<y;S++){const A=Math.random()*Mn,w=8+Math.random()*18;_[S*3]=Math.cos(A)*w,_[S*3+1]=.6+Math.random()*8,_[S*3+2]=Math.sin(A)*w}const g=new Yt;g.setAttribute("position",new Kn(_,3));const E=new dh(g,new Go({color:16768941,size:.055,transparent:!0,opacity:.55,depthWrite:!1}));t.add(E),o.motes=E;const R=new Wt({color:16770480,transparent:!0,opacity:.35,side:jt,depthWrite:!1});for(let S=0;S<5;S++){const A=new Te(new qt(1.4+S*.25,.03),R);A.rotation.x=-Math.PI/2,A.position.set(3.5+S*.7,.24,8.2+S%2*.7),t.add(A)}return{root:t,anim:o}}function R_(i,e,t,n){const r=ie(t.wall,.86),a=ie(t.wallAlt,.82),o=ie(2501419,.72,.1),l=ie(7033144,.4,.65),c=ie(9332037,.78),h=ie(13547929,.7),d=ie(t.stone,.88);Yo();const u=new We;u.position.set(0,0,-2);const p=Wh(i,5.4,.17,7.1,9.2,4.3,d);n.ripples.push(...p.ripples),is(i,1.4,.2,10.1,.18),is(i,2.4,.2,10.1,.18),yo(i,3,.2,10.4,15721680),u.add(ne(18.8,.35,10.8,d,0,.18,0,!1)),u.add(ne(17.5,.2,9.6,h,0,.43,0,!1));const m=.43;u.add(ne(17.4,.18,9.5,h,0,m+.06,0,!1)),u.add(ne(17.4,3,.28,r,0,m+1.5,-4.62,!1)),u.add(ne(.28,3,9.4,r,-8.56,m+1.5,0,!1)),u.add(ne(.28,3,9.4,r,8.56,m+1.5,0,!1)),u.add(ne(17.7,.22,9.8,a,0,m+3,0,!1)),[-8.56,-4.4,0,4.4,8.56].forEach(w=>u.add(ne(.18,3,.18,o,w,m+1.5,4.6,!1))),[-6.5,-3.2,6.5].forEach(w=>_n(u,2.3,2.55,w,m+1.48,4.62,10144203,3880237)),_n(u,1.6,2.55,3.1,m+1.48,4.62,10144203,3880237);const x=new Te(new Qn(9.2,.035,.25),new Wt({color:16765325}));x.position.set(2.4,m+2.8,-1.8),u.add(x),u.add(ne(5.3,.04,4,h,2,m+.18,-1.25,!1));const y=new Te(new qt(4.8,3.3),new Wt({map:Hh("#a39076","#e5d9c5"),toneMapped:!0}));y.rotation.x=-Math.PI/2,y.position.set(2.1,m+.21,-1.2),u.add(y),Zo(u,2.2,m+.2,-3.2,14602683,2.8,0),Ko(u,2.2,m+.2,-1.55,6047283),Nr(u,Ir(["#13332e","#c07c5b","#e2b86f","#e8dcc6"],3),2.15,1.15,2.2,m+1.82,-4.44),Ps(u,.2,m+.2,-3.9),ns(u,7.4,m+.2,-3.7,1.3),Qo(u,-5.7,m+.2,-1.5,5981746,6),u.add(ne(2,.65,.36,c,-7.1,m+.52,-4.2));const _=4.15;u.add(ne(14.4,.24,8.5,a,-1.2,_,-.4,!1)),u.add(ne(14,.18,8.1,h,-1.2,_+.15,-.4,!1)),u.add(ne(14,2.8,.25,r,-1.2,_+1.55,-4.35,!1)),u.add(ne(.25,2.8,8.1,r,-8.35,_+1.55,-.4,!1)),u.add(ne(.25,2.8,8.1,a,5.9,_+1.55,-.4,!1)),u.add(ne(14.5,.22,8.7,r,-1.2,_+2.84,-.4,!1)),_n(u,5.2,2.2,-4,_+1.5,3.64,10144203,4142893),_n(u,2.9,2.2,2.7,_+1.5,3.64,10144203,4142893),u.add(ne(4,.18,8,d,6.2,_+.16,-.4,!1)),Ur(u,6.2,_+.25,3.54,3.7,0,4800823),Ur(u,8.15,_+.25,-.4,7.6,Math.PI/2,4800823),Jo(u,-4.4,_+.2,-2.3,2.75,6048570,15919578),bo(u,-4.4,_+.19,-1.3,3.8,2,11574658),_n(u,2.5,1.8,-1.8,_+1.7,-4.44,11194320,4931635),Nr(u,Ir(["#211f26","#c98262","#f1d4a3"],9),1.45,1,-2.05,_+1.9,-4.45),Ps(u,-7.1,_+.2,-3.5),is(u,6.2,_+.3,.6,Math.PI/2,15260356),yo(u,6.3,_+.3,-1.4,15326405);const g=7.35;u.add(ne(9.4,.22,7.4,r,2,g,-.7,!1)),u.add(ne(9,.16,7,h,2,g+.15,-.7,!1)),u.add(ne(9,2.65,.24,a,2,g+1.5,-4.1,!1)),u.add(ne(.24,2.65,7,r,-2.5,g+1.5,-.7,!1)),u.add(ne(.24,2.65,7,a,6.5,g+1.5,-.7,!1)),u.add(ne(10.2,.3,8,a,2,g+2.9,-.7,!1)),_n(u,5.2,2.1,2,g+1.45,2.8,10144203,4011566),u.add(ne(2.3,.11,1,c,2.1,g+.82,-2.4)),[-1.3,-.75,-.2,.35].forEach(w=>u.add(ne(.06,.72,.06,o,2.1+w,g+.45,-2.4,!1))),u.add(ne(.52,.38,.04,ie(988696,.3,.2),2.1,g+1.02,-3.9,!1)),Ps(u,.5,g+.2,-2.6);for(let w=0;w<7;w++)u.add(ne(.08,.08,3.4,l,-2.4+w*.52,g+3.4,.1,!1));u.add(ne(4.85,.08,.08,l,.16,g+3.4,-1.55,!1)),u.add(ne(4.85,.08,.08,l,.16,g+3.4,1.75,!1));for(let w=0;w<4;w++)ns(u,-1.6+w*1.2,g+.2,1.1,.8);for(let w=0;w<9;w++)u.add(ne(.08,2.8,.4,l,-8.3,_+1.55,-4.15+w*.95,!1));i.add(u),Vh(i,12.4,3,14201460,3.4);const E=Gh(.82,14201460);E.position.set(12.4,.2,3),E.rotation.y=.5,i.add(E),n.rotors.push(E.userData.rotor,E.userData.tailRotor);const R=el({color:15328214,length:4.25,width:1.78,height:.62,cabinH:.62,kind:"luxury"});R.position.set(-8.5,.11,8.8),R.rotation.y=-.28,i.add(R),i.add(ne(2.4,.3,1.6,d,-4,.26,10.1,!1));const S=new Gr(16747843,3,7,2);S.position.set(-4,.9,10.1),i.add(S),n.lights.push({light:S,phase:0}),[[4.1,.2,4.7,-.35,"Aurelia"],[1,.2,3.4,-.15,"Julian"],[-2,4.35,2,-.2,"Celine"],[3.2,.2,9,.65,"Felix"]].forEach(([w,v,T,O,P],N)=>{const B=e.members.findIndex(I=>I.name===P);if(B<0)return;const W=jo(e.members[B],B,e.accent);W.position.set(w,v,T),W.rotation.y=O,i.add(W),n.people.push(W),n.rings.push(W.userData.ring)})}function bo(i,e,t,n,r,a,o){const l=new Te(new qt(r,a),ie(o,1));l.rotation.x=-Math.PI/2,l.position.set(e,t+.02,n),i.add(l)}function C_(i,e,t,n){const r=ie(t.wall,.86),a=ie(t.wallAlt,.8),o=ie(9133886,.8),l=ie(3157032,.7,.1),c=ie(t.stone,.88),h=ie(13349262,.76),d=new We;d.position.set(-.5,0,-1.4);const u=Wh(i,6.4,.17,7.6,6.3,3.6,c,3116941);n.ripples.push(...u.ripples),is(i,8.9,.2,9.6,Math.PI/2+.1),yo(i,9.2,.2,8.2,15193789),d.add(ne(14.7,.3,9.4,c,0,.15,0,!1)),d.add(ne(13.7,.18,8.4,h,0,.37,0,!1));const p=.37;d.add(ne(13.6,2.9,.25,r,0,p+1.45,-4.1,!1)),d.add(ne(.25,2.9,8.3,r,-6.68,p+1.45,0,!1)),d.add(ne(.25,2.9,8.3,a,6.68,p+1.45,0,!1)),d.add(ne(14,.2,8.7,r,0,p+2.9,0,!1)),[-6.68,-2,3.1,6.68].forEach(g=>d.add(ne(.2,2.8,.2,l,g,p+1.42,4.15,!1))),_n(d,3.7,2.3,-3.8,p+1.42,4.17,11062475,4930351),_n(d,2,2.3,4.8,p+1.42,4.17,11062475,4930351);for(let g=0;g<15;g++)d.add(ne(.055,2.7,.36,o,.4+g*.16,p+1.45,4.3,!1));Zo(d,1.6,p+.16,-2.9,13218970,2.7,0),Ko(d,1.6,p+.16,-1.4,6112818),Nr(d,Ir(["#292d2b","#c38a66","#e6c185","#ddcbb3"],11),2.1,1.25,1.6,p+1.62,-3.94),bo(d,1.6,p+.2,-1.45,4.2,2.8,11113592),Qo(d,-4.5,p+.16,-1.2,7427131,5),ns(d,5.8,p+.16,-3.4,1.1),Ps(d,-6,p+.16,-3.4);const m=3.75;d.add(ne(9.9,.2,7.5,a,3,m,-.4,!1)),d.add(ne(9.5,.16,7.1,h,3,m+.14,-.4,!1)),d.add(ne(9.6,2.55,.24,r,3,m+1.4,-3.95,!1)),d.add(ne(.24,2.55,7.1,r,-1.8,m+1.4,-.4,!1)),d.add(ne(.24,2.55,7.1,a,7.8,m+1.4,-.4,!1)),d.add(ne(10.1,.22,7.7,r,3,m+2.68,-.4,!1)),_n(d,4.4,1.9,2,m+1.3,3.34,11062475,4930351),_n(d,1.9,1.9,6.1,m+1.3,3.34,11062475,4930351),d.add(ne(2.3,.09,1,o,3.8,m+.79,-2.5)),[-1.25,.75].forEach(g=>d.add(ne(.07,.7,.07,l,3.8+g,m+.42,-2.5,!1))),d.add(ne(.55,.38,.04,ie(1054232,.3,.2),3.8,m+1,-3.85,!1)),Jo(d,5.8,m+.18,-1.7,2.4,7428676,16050907),bo(d,5.8,m+.2,-.65,3.4,1.7,10850166),d.add(ne(4.2,.16,6.9,c,-4,m+.12,-.4,!1)),Ur(d,-6.1,m+.2,-.4,6.7,Math.PI/2,5063223),Ur(d,-4,m+.2,3,4,0,5063223),is(d,-4.1,m+.22,.8,Math.PI/2,14272427);for(let g=0;g<5;g++)ns(d,-5.6+g*.7,m+.2,2.5,.55);for(let g=0;g<4;g++)ns(d,.7+g*1.2,m+2.8,-.4,.75);i.add(d);const x=el({color:2568507,length:4.35,width:1.82,height:.78,cabinH:.8,kind:"suv"});x.position.set(-7.8,.11,8.9),x.rotation.y=.32,i.add(x),Vh(i,11,2.1,13602676,2.5);const y=Gh(.56,13602676);y.position.set(11,.15,2.1),y.rotation.y=-.4,i.add(y),n.rotors.push(y.userData.rotor,y.userData.tailRotor),is(i,-7.2,.2,10,.4,13285274),[[4.8,.2,5.15,-.35,"Naomi"],[7,.2,5.7,-.2,"Marcus"],[9.1,.2,8.55,.55,"Ivy"],[-3,.2,4.9,.1,"Leo"]].forEach(([g,E,R,S,A])=>{const w=e.members.findIndex(T=>T.name===A);if(w<0)return;const v=jo(e.members[w],w,e.accent);v.position.set(g,E,R),v.rotation.y=S,i.add(v),n.people.push(v),n.rings.push(v.userData.ring)})}function P_(i,e,t,n){const r=ie(14207920,.94),a=ie(13154197,.94),o=ie(15788248,.9),l=ie(5982782,.9),c=ie(8479557,.9),h=ie(12164471,.88),d=new We;d.position.set(0,0,-1.4),d.add(ne(9.7,.3,7.4,ie(12759704,.94),0,.15,0,!1)),d.add(ne(9.3,.18,7,h,0,.36,0,!1));const u=.36;d.add(ne(9.3,2.8,.2,r,0,u+1.4,-3.42,!1)),d.add(ne(.22,2.8,6.9,a,-4.55,u+1.4,0,!1)),d.add(ne(.22,2.8,6.9,a,4.55,u+1.4,0,!1));const p=new Lr;p.moveTo(-5.25,0),p.lineTo(5.25,0),p.lineTo(0,2.35),p.closePath();const m=new zs(p,{depth:7.8,bevelEnabled:!1}),x=new Te(m,l);x.position.set(0,u+2.72,-3.9),x.castShadow=!0,x.receiveShadow=!0,d.add(x);const y=ne(5.7,.12,.15,o,-2.55,u+3.86,3.9,!1);y.rotation.z=-.418,d.add(y);const _=ne(5.7,.12,.15,o,2.55,u+3.86,3.9,!1);_.rotation.z=.418,d.add(_),d.add(ne(.6,1.6,.6,ie(10191208,.9),2.8,u+3.85,-2.3)),_n(d,1.5,1.25,-2.8,u+1.5,3.44,10338241,15788248),_n(d,1.5,1.25,2.8,u+1.5,3.44,10338241,15788248),d.add(ne(1.05,2.1,.12,ie(4811378,.8),0,u+1.06,3.5,!1)),d.add(ne(1.22,.12,.18,o,0,u+2.16,3.51,!1)),d.add(un(.05,ie(13214035,.4,.7),.36,u+1,3.59,8)),d.add(ne(9.7,.17,2.2,ie(11836021,.9),0,.22,4.55,!1)),[-4.4,4.4].forEach(w=>{d.add(Nt(.1,.12,2.5,8,o,w,1.45,5.15,!1)),d.add(ne(.32,.12,.32,o,w,2.72,5.15,!1))});const g=ne(10,.18,2.5,l,0,2.83,4.63,!1);g.rotation.x=.07,d.add(g);for(let w=0;w<3;w++)d.add(ne(2.2,.14,.6,ie(11772297,.9),0,.12+w*.12,5.8+w*.42,!1));d.add(ne(1.4,.1,.5,c,-2.6,1.18,5.45)),[-.55,.55].forEach(w=>d.add(Nt(.018,.018,1.2,6,ie(5918014,.5,.4),-2.6+w,1.65,5.4,!1)));const E=new Te(new qt(4.1,2.8),new Wt({map:Hh("#8e6d58","#d9c3a4"),toneMapped:!0}));E.rotation.x=-Math.PI/2,E.position.set(1.2,u+.2,-1.1),d.add(E),Zo(d,1.2,u+.17,-2.7,7241072,2.5,0),Ko(d,1.2,u+.17,-1.2,7295033),d.add(ne(2.2,1.2,.08,ie(1383197,.3,.3),1.2,u+1.7,-3.3,!1)),Nr(d,Ir(["#4c5a50","#d3a36d","#947662","#f0dfc1"],4),.9,.7,-2.8,u+1.85,-3.3),d.add(ne(3.2,.95,.62,ie(13616820,.8),3,u+.55,-3.04,!1)),d.add(ne(3.2,.09,.75,ie(6640710,.6),3,u+1.06,-3,!1)),d.add(ne(.58,2,.58,ie(13616820,.8),4,u+1.15,-3.04,!1)),Qo(d,-3,u+.17,-1.45,7755066,4);for(let w=0;w<4;w++)d.add(ne(.45+w%2*.14,.38,.04,ie(15129801,.8),-3.9+w*.5,u+1.75+w%2*.12,-3.3,!1));Ps(d,-4.05,u+.17,-2.4),ns(d,4.1,u+.17,1.1,.85),d.add(ne(.18,2.2,3.5,a,-.6,u+1.3,-1.8,!1)),d.add(ne(1,.1,3.3,a,-3.1,u+2.5,-1.7,!1)),Jo(d,-3.2,u+.17,-2.2,1.75,8084548,15326660),i.add(d);const R=ie(15261903,.9);for(let w=0;w<17;w++){const v=-8.2+w*1.025;v>-1.1&&v<1.1||i.add(ne(.07,.78,.07,R,v,.42,9.9,!1))}i.add(ne(17.3,.06,.06,R,0,.6,9.9,!1)),i.add(ne(17.3,.06,.06,R,0,.28,9.9,!1)),i.add(Nt(.035,.045,1.15,6,ie(5917242,.8),2.2,.62,11)),i.add(Et(.55,.3,.32,.05,ie(4152163,.8),2.2,1.22,11)),[[-6.2,7.3],[-5.4,7.15]].forEach(([w,v],T)=>{const O=new We,P=ie(2237478,.6);[-.42,.42].forEach(N=>{const B=new Te(new Ci(.24,.028,6,16),P);B.position.set(N,.26,0),B.rotation.y=Math.PI/2,O.add(B)}),O.add(ne(.05,.05,.85,ie(T?9325387:4745845,.6,.2),0,.48,0)),O.add(ne(.05,.35,.05,ie(2895922,.6),-.4,.35,0)),O.position.set(w,0,v),O.rotation.y=.2,i.add(O)}),Fr(i,5.8,.04,7.1,3.2,11034456),Fr(i,-6.8,.04,5.4,2.2,13803598),i.add(Et(3.1,.18,1.7,.05,ie(6113590,1),6.4,.08,10.4));for(let w=0;w<8;w++)i.add(un(.1,ie(w%2?4942659:7508059,.9),5.2+w%4*.8,.26,9.9+Math.floor(w/4)*.8,6));const S=el({color:11449778,length:3.45,width:1.54,height:.56,cabinH:.62,kind:"compact"});S.position.set(-7,.11,8.4),S.rotation.y=.18,S.scale.setScalar(.92),i.add(S),i.add(Nt(.055,.065,2.6,8,ie(5331548,.5,.3),8,1.3,7.9)),i.add(ne(.05,.7,1.1,ie(14275527,.9),7.85,2.55,7.9,!1)),i.add(new Te(new Ci(.2,.035,6,12),ie(11821625,.6,.4)).rotateX(Math.PI/2)),[[-1.7,.4,4.35,-.2,"Elena"],[1.1,.4,4.5,.1,"Theo"],[-2.6,.4,5.2,.5,"Maya"],[1.9,.4,5.4,-.3,"Sam"]].forEach(([w,v,T,O,P])=>{const N=e.members.findIndex(W=>W.name===P);if(N<0)return;const B=jo(e.members[N],N,e.accent);B.position.set(w,v,T),B.rotation.y=O,i.add(B),n.people.push(B),n.rings.push(B.userData.ring)})}function L_(i,e){return A_(i,e)}function D_(i,e,t){i&&(i.people?.forEach((n,r)=>{const a=n.userData.phase;n.userData.person.position.y=Math.sin(e*1.25+a)*.012,n.userData.person.rotation.z=Math.sin(e*.8+a)*.008,n.userData.arms.forEach(({pivot:o,side:l,base:c},h)=>{o.rotation.z=c+Math.sin(e*1.05+a+h)*.035,o.rotation.x=Math.sin(e*.7+a+h*2)*.02}),n.userData.ring.material.opacity=.28+Math.sin(e*1.8+a)*.09,n.userData.ring.scale.setScalar(1+Math.sin(e*1.4+r)*.05)}),i.rings?.forEach(n=>{n?.material}),i.rotors?.forEach((n,r)=>{r%2===0?n.rotation.y+=t*8.5:n.rotation.z+=t*14}),i.sway?.forEach(({object:n,phase:r,amp:a})=>{n.rotation.z=Math.sin(e*.7+r)*a,n.rotation.x=Math.cos(e*.52+r)*a*.6}),i.ripples?.forEach(({mesh:n,phase:r,max:a})=>{const o=(e*.21+r)%1;n.scale.setScalar(1+o*a*4.5),n.material.opacity=.23*(1-o)}),i.motes&&(i.motes.rotation.y=e*.018,i.motes.position.y=Math.sin(e*.34)*.16),i.lights?.forEach(({light:n,phase:r})=>{n.intensity=2.2+Math.sin(e*8+r)*.45+Math.sin(e*13.7)*.2}))}function I_(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})})}const cs=Math.PI*2;function Xe(i,e=.8,t=0,n={}){return new Hr({color:i,roughness:e,metalness:t,...n})}function Lc(i,e,t,n,r,a=0,o=0,l=0){const c=new Te(new Xr(i,e,t,3,n),r);return c.position.set(a,o,l),c.castShadow=!0,c.receiveShadow=!0,c}function it(i,e,t,n,r=0,a=0,o=0){const l=new Te(new Qn(i,e,t),n);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}function Ot(i,e,t,n,r,a=0,o=0,l=0){const c=new Te(new rn(i,e,t,n),r);return c.position.set(a,o,l),c.castShadow=!0,c.receiveShadow=!0,c}function Bn(i,e,t=0,n=0,r=0,a=14){const o=new Te(new xn(i,a,Math.max(6,Math.floor(a/2))),e);return o.position.set(t,n,r),o.castShadow=!0,o.receiveShadow=!0,o}function N_(i,e="#f4ead8",t="rgba(0,0,0,0)",n=700){const r=document.createElement("canvas");r.width=1024,r.height=256;const a=r.getContext("2d");a.clearRect(0,0,r.width,r.height),t!=="rgba(0,0,0,0)"&&(a.fillStyle=t,a.fillRect(0,0,r.width,r.height)),a.fillStyle=e,a.font=`800 ${n}px Manrope, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(i,r.width/2,r.height/2);const o=new fh(r);return o.colorSpace=sn,o.anisotropy=4,o}function U_(i){const e=new We,t=new Oe(i.accent),n=new Rn({color:i.id==="average"?15856627:16183784,roughness:.23,metalness:.38,clearcoat:.85}),r=new Rn({color:t,roughness:.28,metalness:.5,clearcoat:.5}),a=Xe(2238250,.4,.4),o=new Rn({color:2440006,metalness:.75,roughness:.02,transparent:!0,opacity:.88}),l=new Te(new rn(.72,.62,12.5,24),n);l.rotation.x=Math.PI/2,l.castShadow=!0,e.add(l);const c=Bn(.72,n,0,0,6.45,20);c.scale.set(1,1,1.55),e.add(c);const h=new Te(new rn(.35,.62,2,18),n);h.rotation.x=Math.PI/2,h.position.set(0,.1,-7),e.add(h);const d=new Te(new rn(.725,.725,.22,24,1,!0,-.6,1.2),r);d.rotation.x=Math.PI/2,d.position.z=.2,d.scale.z=12.4,e.add(d);for(let S=0;S<8;S++)[-1,1].forEach(A=>{const w=it(.05,.2,.28,o,A*.69,.25,-3.4+S*.85);e.add(w)});const u=Bn(.55,o,0,.3,5.9,16);u.scale.set(1.1,.7,1.1),e.add(u);const p=new Lr;p.moveTo(-.9,0),p.lineTo(8.3,-1.15),p.lineTo(8.5,.3),p.lineTo(1.2,1.5),p.closePath();const m=new zs(p,{depth:.12,bevelEnabled:!1});[-1,1].forEach(S=>{const A=new Te(m,n);A.rotation.x=-Math.PI/2,A.rotation.z=S<0?Math.PI:0,A.position.set(0,-.05,.4),A.scale.x=S,A.castShadow=!0,e.add(A);const w=it(.25,.22,1.4,r,S*8.4,0,.1);e.add(w);const v=new Te(new rn(.34,.4,1.3,16),n);v.rotation.x=Math.PI/2,v.position.set(S*3.4,-.35,1.7),v.castShadow=!0,e.add(v);const T=new Te(new rn(.26,.3,.06,16),a);T.rotation.x=Math.PI/2,T.position.set(S*3.4,-.35,2.37),e.add(T)});const x=new Lr;x.moveTo(0,0),x.lineTo(0,2.5),x.lineTo(2,.28),x.lineTo(2,0),x.closePath();const y=new zs(x,{depth:.14,bevelEnabled:!1}),_=new Te(y,n);_.position.set(0,.2,-7),_.rotation.y=Math.PI/2,_.castShadow=!0,e.add(_);const g=it(.16,1.9,.1,r,0,1.45,-7.1);g.rotation.z=-.18,e.add(g);const E=it(5.3,.13,1,n,0,.1,-6.85);e.add(E);const R=new Gr(16769197,1,12,2);return R.position.set(0,-.4,4.2),e.add(R),e.userData={light:R},e}function Xh(i,e,t,n,r,a=.42){const o=new We,l=new Wt({color:16773090,transparent:!0,opacity:a,depthWrite:!1});return[[0,0,0,1],[1.05,.14,.1,.78],[-1.15,-.08,.06,.68],[.35,.37,-.2,.72],[-.45,.28,.18,.6]].forEach(([h,d,u,p])=>{const m=Bn(1,l,h,d,u,10);m.scale.set(1.25*p,.45*p,.9*p),m.castShadow=!1,o.add(m)}),o.position.set(e,t,n),o.scale.setScalar(r),i.add(o),o}function F_(i,e){const t=new We;t.name="flight-world";const n=new We;t.add(n),new Wt({color:16771285,transparent:!0,opacity:.5,depthWrite:!1});for(let o=0;o<46;o++){const l=(Math.random()-.5)*75,c=-5+Math.random()*7,h=-55+Math.random()*75,d=2.7+Math.random()*6.5,u=Xh(n,l,c,h,d,.22+Math.random()*.3);u.rotation.y=Math.random()*cs,u.userData.speed=.4+Math.random()*.8}const r=new Te(new qt(250,250,1,1),new Wt({color:16112070,transparent:!0,opacity:.2,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=-7,t.add(r);const a=U_(i);return a.position.set(0,2.8,0),a.rotation.y=0,a.rotation.z=.045,t.add(a),{root:t,kind:"flight",destination:e,family:i,anim:{plane:a,clouds:n,time:0,update(o,l){this.time+=l,a.position.y=2.8+Math.sin(o*.9)*.12,a.rotation.z=.045+Math.sin(o*.7)*.025,n.children.forEach(c=>{c.position.z+=l*c.userData.speed*2.2,c.position.z>45&&(c.position.z=-70)})}}}}function O_(i,e){const t=Xe(3622207,.9),n=Ot(17,15.5,1.5,64,t,0,-1.1,0);i.add(n);const r=new Te(new Ai(16.6,64),Xe(e[1],.91));r.rotation.x=-Math.PI/2,r.position.y=-.34,r.receiveShadow=!0,i.add(r);const a=new Te(new us(17.1,30,64),new Rn({color:3238515,roughness:.2,metalness:.08,transparent:!0,opacity:.75}));a.rotation.x=-Math.PI/2,a.position.y=-.4,i.add(a)}function Eo(i,e,t,n,r,a,o=16765323,l=4){const c=new Wt({color:o});for(let h=0;h<l;h++)for(let d=0;d<Math.max(2,Math.floor(e*2));d++){if((h+d)%3===0)continue;const u=new Te(new qt(.16,.13),c);u.position.set(n-e/2+.22+d*.31,r-t/2+.38+h*.42,a),i.add(u)}}function B_(i,e,t){const n=Xe(2765882,.74,.1),r=Xe(4015432,.7,.1);t.forEach(([a,o,l,c,h,d],u)=>{const p=u%3===0?r:n,m=it(l,c,h,p,a,-.3+c/2,o);if(i.add(m),d){const x=it(l+.04,.16,h+.04,Xe(e[2],.4,.2),a,-.28+c*.72,o);i.add(x)}Eo(i,l,c,a,-.3+c/2,o+h/2+.01,16765068,Math.max(2,Math.floor(c/2.2)))})}function k_(i,e,t,n=1){const r=new We,a=Xe(7100999,.6,.35),o=Xe(12949332,.5,.4,{emissive:11958832,emissiveIntensity:.15}),l=[{y:.15,spread:3.25,h:.25},{y:2.1,spread:2.25,h:.3},{y:5.5,spread:1.3,h:.28},{y:8.7,spread:.55,h:.22}];return[[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([c,h])=>{for(let d=0;d<3;d++){const u=l[d],p=l[d+1],m=new D(c*u.spread,u.y,h*u.spread),x=new D(c*p.spread,p.y,h*p.spread),y=x.clone().sub(m),_=y.length(),g=Ot(.1,.13,_,8,d===2?o:a,(m.x+x.x)/2,(m.y+x.y)/2,(m.z+x.z)/2);g.quaternion.setFromUnitVectors(new D(0,1,0),y.normalize()),r.add(g)}}),l.forEach(c=>{const h=new Te(new Ci(c.spread,.08,6,22),o);h.rotation.x=Math.PI/2,h.position.y=c.y,r.add(h),r.add(it(c.spread*2.1,c.h,.22,o,0,c.y+.1,0)),r.add(it(.22,c.h,c.spread*2.1,o,0,c.y+.1,0))}),r.add(it(4.8,.32,4.8,o,0,.42,0)),r.add(it(3.2,.25,3.2,o,0,2.35,0)),r.add(Ot(.1,.24,4.2,8,o,0,11,0)),r.add(Ot(.04,.06,2.4,6,o,0,14.2,0)),r.add(Bn(.11,Xe(16766348,.2,.1,{emissive:16756292,emissiveIntensity:2}),0,15.4,0,8)),r.position.set(e,-.3,t),r.scale.setScalar(n),i.add(r),r}function z_(i,e,t,n=1){const r=new We,a=Xe(11770748,.85),o=Xe(5063996,.7),l=Xe(12952158,.4,.6);r.add(it(2,10.5,2,a,0,5.25,0));for(let m=0;m<4;m++)r.add(it(.12,9.2,.12,o,-.85+m*.56,5.2,1.02));r.add(it(2.1,.25,2.1,l,0,10.55,0)),r.add(it(1.8,1.7,1.8,a,0,11.4,0));const c=new Te(new Ai(.62,24),Xe(15982510,.6,.1,{emissive:15779439,emissiveIntensity:.25}));c.position.set(0,11.45,.93),r.add(c);const h=new We;h.position.set(0,11.45,.96);const d=it(.05,.43,.02,o,0,.18,0),u=it(.32,.05,.02,o,.13,0,0);h.add(d,u),r.add(h);const p=new Te(new Jn(1.35,2.3,4),o);return p.position.y=13.4,p.rotation.y=Math.PI/4,r.add(p),r.add(Ot(.03,.05,1.3,6,l,0,15,0)),r.position.set(e,-.3,t),r.scale.setScalar(n),i.add(r),{group:r,hands:h}}function H_(i,e,t,n=1){const r=new We,a=Xe(14209216,.5,.4),o=new Te(new Ci(4.1,.1,6,48),a);o.position.y=4.5,o.rotation.y=.1,r.add(o);for(let l=0;l<16;l++){const c=l/16*cs,h=it(.05,4,.05,a,0,2.5,0);h.position.set(Math.cos(c)*2,4.5+Math.sin(c)*2,0),h.rotation.z=c+Math.PI/2,r.add(h);const d=new Te(new xn(.22,8,6),Xe(15326406,.7));d.position.set(Math.cos(c)*4.1,4.5+Math.sin(c)*4.1,0),d.scale.z=.65,r.add(d)}return[-2.2,2.2].forEach(l=>{const c=Ot(.08,.14,5.5,8,a,l*.7,2.2,0);c.rotation.z=l>0?-.36:.36,r.add(c)}),r.position.set(e,-.3,t),r.scale.setScalar(n),i.add(r),{group:r,wheel:o,pods:r.children.filter(l=>l.geometry?.type==="SphereGeometry")}}function G_(i,e,t,n=1){const r=new We,a=Xe(9148315,.35,.65),o=Xe(13161686,.2,.7,{emissive:3557711,emissiveIntensity:.2}),l=[[2.2,8,0],[1.55,7,8],[1.1,6.5,15],[.72,5.2,21.5],[.4,4.5,26.7]];let c=-.3;return l.forEach(([h,d,u],p)=>{r.add(Ot(h*1.02,h,d,8,p===4?o:a,0,c+d/2,0)),c+=d,r.add(Ot(h*1.18,h*1.18,.12,8,Xe(16765580,.4,.2,{emissive:13145151,emissiveIntensity:.55}),0,c,0))}),r.add(Ot(.05,.18,3.4,6,a,0,c+1.7,0)),r.add(Bn(.11,Xe(16770209,.2,.1,{emissive:16754487,emissiveIntensity:2}),0,c+3.5,0,8)),r.position.set(e,0,t),r.scale.setScalar(n),i.add(r),r}function V_(i,e,t,n=1){const r=new We,a=Xe(5991021,.4,.4);[-3.4,0,3.4].forEach((l,c)=>{const h=Lc(2,10.5,2.2,.12,a,l,5.2,0);r.add(h);for(let d=0;d<10;d++)r.add(it(2.05,.06,2.24,Xe(8889764,.5,.2,{emissive:2574921,emissiveIntensity:.2}),l,1.1+d,0));r.add(it(2.06,.1,2.26,Xe(13150574,.4,.4),l,10.8,0))});const o=Lc(9.4,.7,2.8,.28,Xe(5004117,.6),0,11.2,-.1);r.add(o);for(let l=0;l<7;l++)r.add(Bn(.55,Xe(4814164,.9),-3.5+l*1.15,11.75,.3,8));return r.position.set(e,-.3,t),r.scale.setScalar(n),i.add(r),r}function W_(i,e,t,n=1){const r=new We,a=Xe(11946813,.6,.3),o=Xe(14048322,.5,.4,{emissive:6100495,emissiveIntensity:.25}),l=[[3,.2],[2.1,4],[1.35,7.4],[.75,10.2],[.32,12.2]];return[[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([c,h])=>{for(let d=0;d<l.length-1;d++){const[u,p]=l[d],[m,x]=l[d+1],y=new D(c*u,p,h*u),_=new D(c*m,x,h*m),g=_.clone().sub(y),E=g.length(),R=Ot(.055,.09,E,6,d%2?o:a,(y.x+_.x)/2,(y.y+_.y)/2,(y.z+_.z)/2);R.quaternion.setFromUnitVectors(new D(0,1,0),g.normalize()),r.add(R)}}),l.forEach(([c,h],d)=>{r.add(it(c*2.2,.09,c*2.2,o,0,h,0)),d<3&&(r.add(it(c*2,.12,.16,a,0,h,0)),r.add(it(.16,.12,c*2,a,0,h,0)))}),r.add(Ot(.06,.12,3.2,6,a,0,14,0)),r.add(Bn(.14,Xe(16765566,.2,.1,{emissive:16752439,emissiveIntensity:2}),0,15.7,0,8)),r.position.set(e,-.3,t),r.scale.setScalar(n),i.add(r),r}function X_(i,e,t,n=1){const r=new We,a=Xe(7304311,.5,.4),o=Xe(14267251,.3,.3,{emissive:10710830,emissiveIntensity:.35});return r.add(it(4.6,8,4.6,a,0,3.7,0)),r.add(it(3.4,5.2,3.4,a,0,10.3,0)),r.add(it(2.2,4.1,2.2,a,0,14.8,0)),r.add(it(1.2,3,1.2,o,0,18.3,0)),r.add(Ot(.12,.3,4.5,8,a,0,22,0)),r.add(Ot(.03,.07,3,6,a,0,25.7,0)),[2,4,6].forEach(l=>{r.add(it(4.62,.08,4.62,o,0,l,0))}),Eo(r,4.2,7.5,0,3.7,2.31,16766875,5),Eo(r,3,4.8,0,10.3,1.71,16766875,4),r.position.set(e,-.3,t),r.scale.setScalar(n),i.add(r),r}function $_(i,e,t,n=1){const r=new We,a=Xe(14010288,.8),o=Xe(11046256,.7);r.add(it(7.2,5.4,7.2,a,0,2.7,0)),r.add(it(7.35,.35,7.35,o,0,5.35,0)),r.add(it(3.2,4,5.2,a,0,6.7,0));const l=new Te(new Jn(2.7,3.2,4),o);l.position.y=10.3,l.rotation.y=Math.PI/4,r.add(l);for(let c=0;c<14;c++){const h=-3+c%7*1,d=c<7?-3.3:3.3;r.add(Ot(.04,.1,1.8+c%3*.5,4,o,h,6.4+c%3*.25,d))}for(let c=0;c<5;c++)r.add(Ot(.04,.09,2.3,4,o,-2+c*1,6.6,3.7));return r.add(it(1.1,2.2,.25,Xe(4932153,.8),0,4,3.66)),r.position.set(e,-.3,t),r.scale.setScalar(n),i.add(r),r}function q_(i,e,t,n=1){const r=new We,a=Xe(12891287,.85),o=Xe(4086625,.3,.4);r.add(it(5.4,2,5.4,a,0,1,0)),r.add(it(4.6,2.6,4.6,a,0,3.3,0)),r.add(it(3.1,3.4,3.1,o,0,6.3,0)),r.add(it(3.3,.25,3.3,a,0,8,0));const l=new Te(new xn(2.3,20,10,0,cs,0,Math.PI/2),a);return l.position.y=8.1,r.add(l),r.add(Bn(.18,Xe(13477230,.3,.7),0,10.5,0,8)),r.position.set(e,-.3,t),r.scale.setScalar(n),i.add(r),r}function Y_(i,e){const t=new We,n=Xe(7302479,.95);for(let c=0;c<6;c++){const h=new Te(new xn(7+c%3*2,18,10),n);h.position.set(-17+c*7,-1,-17-c%2*2),h.scale.set(1.5,.34,.8),h.receiveShadow=!0,t.add(h)}i.add(t);const r=new Te(new qt(9.5,2.1),new Wt({map:N_("HOLLYWOOD","#f3e9d5"),transparent:!0,toneMapped:!1}));r.position.set(-4,6.3,-13.1),r.rotation.x=-.08,i.add(r);const a=it(9.8,2.35,.18,Xe(14143419,.9),-4,6.3,-13.25);i.add(a);const o=Xe(7296573,.9),l=Xe(4350534,.85);[[-9.5,2.5],[9.4,2],[-7.2,-5.4],[7.8,-4.8]].forEach(([c,h],d)=>{const u=new We;for(let p=0;p<6;p++)u.add(Ot(.09,.15,.7,6,o,p*.05,.35+p*.64,0));for(let p=0;p<8;p++){const m=new Te(new Jn(.14,2.2,3),l),x=p/8*cs;m.position.set(Math.cos(x)*.7,4.15,Math.sin(x)*.7),m.rotation.z=Math.PI/2,m.rotation.y=-x,m.scale.set(.5,1,.25),u.add(m)}u.position.set(c,-.3,h),u.scale.setScalar(d%2?1.1:.9),i.add(u)})}function Z_(i,e){const t=Xe(7175024,.95);for(let a=0;a<5;a++){const o=new Te(new Jn(6+a*1.2,12+a%3*4,5),t);o.position.set(-18+a*9,3.5,-16-a%2*4),o.rotation.y=a*.6,i.add(o);const l=new Te(new Jn((6+a*1.2)*.34,(12+a%3*4)*.3,5),Xe(15262421,.8));l.position.set(-18+a*9,8.4+a%3*.6,-16-a%2*4),l.rotation.y=a*.6,i.add(l)}const n=new Te(new Ai(13,32),Xe(4486011,.2,.1,{transparent:!0,opacity:.8}));n.rotation.x=-Math.PI/2,n.position.set(0,-.2,5.5),n.scale.set(1,.6,1),i.add(n);const r=new We;r.add(it(2.2,5.5,2.2,Xe(13813165,.85),0,2.5,0)),r.add(Ot(.02,.7,3,4,Xe(4938324,.7),0,6.7,0)),r.add(Bn(.08,Xe(14069092,.3,.7),0,8.3,0,6)),r.position.set(7.5,-.3,-3.2),i.add(r)}function K_(i){const e=new We;e.name="destination-world";const t=i.palette,n={kind:"city",destination:i,elapsed:0,eyes:[]};O_(e,t);for(let o=0;o<16;o++){const l=o/16*cs,c=Xh(e,Math.cos(l)*24,-4-o%3,Math.sin(l)*24,5+o%4*2,.18);c.rotation.y=l}if(B_(e,t,{singapore:[[-11,-2,2.3,7,3,1],[10,-4,3,9,3,0],[-9,7,2,5,2,0],[8,8,2,4.5,2,1],[12,3,1.5,6,2,0]],tokyo:[[-10,-3,2.4,6,2.4,1],[-7,6,2,4,2,0],[9,-4,2.8,8,2.6,1],[12,5,2,5,2,0],[7,8,1.6,3.8,2,0]],losangeles:[[-11,-1,2.5,4.5,2.5,0],[-8,7,1.7,3,2,1],[10,-2,3,6,2.8,1],[8,8,2,3.6,2,0]],doha:[[-10,2,2,6,2,1],[-7,-4,2.5,4,2.4,0],[10,-1,2.4,7,2.3,1],[8,8,2,4,2,0]],dubai:[[-11,2,2.4,7,2.5,1],[-8,-5,2,5,2,0],[11,-3,2.7,8,2.7,1],[9,7,2.2,5.5,2.2,0],[13,4,1.8,4,1.8,0]],london:[[-10,-1,3.5,4,3,0],[-7,7,2.2,3.5,2.2,1],[9,-4,3,5,2.8,0],[12,5,2.4,4,2.2,0]],paris:[[-10,0,3.6,4,3.2,0],[-8,8,2.2,3.5,2.2,0],[10,-3,3.4,4.5,3,1],[12,6,2.2,3.8,2.2,0]],milan:[[-10,0,3.4,4.5,3,0],[-8,8,2.2,3.6,2,1],[10,-4,3,5,2.8,0],[12,5,2.4,4,2.2,0]],newyork:[[-11,-2,2.6,6,2.6,1],[-7,6,2.4,5,2.4,0],[10,-3,3,7,3,1],[13,5,2.2,5,2.2,0],[7,9,1.8,4,1.8,0]],zurich:[[-9,4,2.8,4,2.6,0],[10,0,2.4,4.5,2.2,1],[12,7,2,3.4,2,0]]}[i.id]||[]),i.id==="singapore"&&(n.landmark=V_(e,0,-1.2,1)),i.id==="tokyo"&&(n.landmark=W_(e,0,-1.8,1)),i.id==="losangeles"&&Y_(e),i.id==="doha"&&(n.landmark=q_(e,0,-1.8,1)),i.id==="dubai"&&(n.landmark=G_(e,0,-1.8,1)),i.id==="london"){const o=z_(e,0,-2,1);n.landmark=o.group,n.clock=o.hands;const l=H_(e,9.5,4,.9);n.eye=l}i.id==="paris"&&(n.landmark=k_(e,0,-1.5,.76)),i.id==="milan"&&(n.landmark=$_(e,0,-1.8,1)),i.id==="newyork"&&(n.landmark=X_(e,0,-2.2,.76)),i.id==="zurich"&&Z_(e);const a=new We;a.add(it(7,.25,1.8,Xe(10258282,.8),0,0,10.5));for(let o=0;o<4;o++)a.add(Ot(.06,.08,1.1,6,Xe(5524288,.5,.3),-3.2+o*2.1,.5,10.5));return e.add(a),[[-8.8,8.9],[8.8,8.9]].forEach(([o,l])=>{const c=new Gr(16761717,2.2,13,2);c.position.set(o,2.2,l),e.add(c),e.add(Ot(.04,.06,2.6,6,Xe(4012596,.5,.4),o,1.3,l)),e.add(Bn(.16,Xe(16765323,.4,0,{emissive:16756053,emissiveIntensity:2}),o,2.7,l,8))}),{root:e,kind:"destination",destination:i,anim:{...n,update(o,l){this.elapsed+=l,this.clock&&(this.clock.rotation.z=-o*.06),this.eye&&(this.eye.wheel.rotation.z=o*.08,this.eye.pods.forEach((c,h)=>{const d=h/16*cs+o*.08;c.position.x=Math.cos(d)*4.1,c.position.y=4.5+Math.sin(d)*4.1})),e.position.y=Math.sin(o*.3)*.04}}}}function J_(i){return K_(i)}function Dc(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})})}const Ic={ultra:{lawn:6124615,lawnAlt:6848590,wall:15853526,wallAlt:14996923,stone:13943460,stoneAlt:12956308},rich:{lawn:5928005,lawnAlt:6651980,wall:14337704,wallAlt:13217159,stone:13350802,stoneAlt:12231807},average:{lawn:7111758,lawnAlt:7769684,wall:14207920,wallAlt:13154197,stone:11443328,stoneAlt:10456434}},Nc={sunset:{top:new Oe(3296091),horizon:new Oe(15970941),sun:new Oe(16764559),fog:14132348,sunLight:16761478,sunIntensity:2.55,hemiSky:16766381,hemiGround:3426111,hemiIntensity:1.1,exposure:1.03},day:{top:new Oe(4879768),horizon:new Oe(16242605),sun:new Oe(16773319),fog:14271650,sunLight:16773328,sunIntensity:2.7,hemiSky:13624304,hemiGround:4149053,hemiIntensity:1.25,exposure:1},dusk:{top:new Oe(1385528),horizon:new Oe(12283750),sun:new Oe(16756848),fog:10186345,sunLight:16756340,sunIntensity:1.65,hemiSky:10270415,hemiGround:2634029,hemiIntensity:.85,exposure:1.08},travel:{top:new Oe(6129318),horizon:new Oe(16767153),sun:new Oe(16773057),fog:14924179,sunLight:16768946,sunIntensity:2.9,hemiSky:14674415,hemiGround:6188128,hemiIntensity:1.35,exposure:1.02}};function Q_(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function j_(){const i={topColor:{value:new Oe(3296091)},horizonColor:{value:new Oe(15970941)},sunColor:{value:new Oe(16764559)},sunDir:{value:new D(-.55,.22,.58).normalize()},haze:{value:.2}},e=new fi({uniforms:i,side:an,depthWrite:!1,vertexShader:`
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
    `}),t=new Te(new xn(160,40,22),e);return t.frustumCulled=!1,{mesh:t,uniforms:i}}function ev(){const e=new Float32Array(270);for(let r=0;r<90;r++){const a=Math.random()*Math.PI*2,o=5+Math.random()*55;e[r*3]=Math.cos(a)*o,e[r*3+1]=1+Math.random()*14,e[r*3+2]=Math.sin(a)*o}const t=new Yt;t.setAttribute("position",new Kn(e,3));const n=new Go({color:16767136,size:.1,transparent:!0,opacity:.6,depthWrite:!1,sizeAttenuation:!0});return new dh(t,n)}class tv{constructor(e){this.canvas=e,this.renderer=new c_({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=sn,this.renderer.toneMapping=Po,this.renderer.toneMappingExposure=1.03,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kc,this.scene=new uu,this.scene.fog=new zo(14132348,.0055),this.camera=new gn(33,1,.1,340),this.camera.position.set(26,16,32),this.controls=new d_(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=48,this.controls.minPolarAngle=.6,this.controls.maxPolarAngle=1.42,this.controls.rotateSpeed=.5,this.controls.zoomSpeed=.7,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.28,this.controls.target.set(0,3.5,0),this.clock=new pf,this.time=0,this.mode="select",this.family=null,this.homeRoot=null,this.homeAnim=null,this.travel=null,this.tween=null,this.mood="sunset",this.raycaster=new ff,this.pointer=new ce,this.members=[],this.onSelectMember=null,this.running=!1,this._buildStage(),this._bindResize(),this.resize()}_buildStage(){const e=j_();this.sky=e,this.scene.add(e.mesh);const t=new Rn({color:3695724,roughness:.24,metalness:.16,transparent:!0,opacity:.9}),n=new Te(new qt(500,500),t);n.rotation.x=-Math.PI/2,n.position.y=-.9,n.receiveShadow=!0,this.water=n,this.scene.add(n);const r=new We,a=new Wt({color:6186584});for(let l=0;l<8;l++){const c=l/8*Math.PI*2+.3,h=55+l%3*8,d=new Te(new xn(8+l%3*3,16,8),a);d.position.set(Math.cos(c)*h,-4.4,Math.sin(c)*h),d.scale.set(1.8,.28,1),r.add(d)}this.scene.add(r),this.hemi=new cf(16766381,3426111,1.1),this.scene.add(this.hemi),this.sun=new ic(16761478,2.55),this.sun.position.set(-22,26,15),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(window.innerWidth>900?2048:1024,window.innerWidth>900?2048:1024),this.sun.shadow.camera.left=-27,this.sun.shadow.camera.right=27,this.sun.shadow.camera.top=27,this.sun.shadow.camera.bottom=-24,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=90,this.sun.shadow.bias=-35e-5,this.sun.shadow.normalBias=.025,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new ic(8894159,.65),this.fill.position.set(18,12,-18),this.scene.add(this.fill),this.motes=ev(),this.scene.add(this.motes);const o=new Wt({color:16768942,transparent:!0,opacity:.22,side:jt,depthWrite:!1});this.glints=new We;for(let l=0;l<18;l++){const c=new Te(new qt(1.6+Math.random()*4.5,.035),o);c.rotation.x=-Math.PI/2,c.position.set((Math.random()-.5)*70,-.87,(Math.random()-.5)*70),this.glints.add(c)}this.scene.add(this.glints)}_bindResize(){this.onResize=()=>this.resize(),window.addEventListener("resize",this.onResize,{passive:!0}),window.addEventListener("orientationchange",this.onResize,{passive:!0})}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e/t<.75?42:33,this.camera.updateProjectionMatrix();const r=e/t<.82;this.mode==="select"&&this.controls.target.set(0,r?4.6:3.6,0),this.tween&&(this.tween=null),(this.mode==="select"||this.mode==="home")&&(this.controls.autoRotate||this._frameEstate(!1))}_cameraFor(e){const n=this.camera.aspect<.85,r=window.innerWidth<760,a=n?1.55:r?1.18:1;return e==="select"?{pos:new D(25*a,15.2*a,31*a),target:new D(0,n?4.4:3.5,0)}:e==="home"?{pos:new D(20*a,11.8*a,27*a),target:new D(0,n?4:3.2,0)}:e==="flight"?{pos:new D(17*a,8.8*a,23*a),target:new D(0,3.3,0)}:e==="destination"?{pos:new D(17*a,12.8*a,25*a),target:new D(0,n?4.8:4.2,0)}:{pos:new D(25,15,31),target:new D(0,3.5,0)}}_frameEstate(e=!0){const t=this._cameraFor(this.mode==="select"?"select":"home");this._moveCamera(t.pos,t.target,e?1.1:0)}_moveCamera(e,t,n=1.1){if(n<=0){this.camera.position.copy(e),this.controls.target.copy(t),this.controls.update();return}this.tween={p0:this.camera.position.clone(),p1:e.clone(),t0:this.controls.target.clone(),t1:t.clone(),elapsed:0,duration:n},this.controls.enabled=!1}setFamily(e,t="select",n=!1){this.homeRoot&&(this.scene.remove(this.homeRoot),I_(this.homeRoot),this.homeRoot=null,this.homeAnim=null,this.members=[]),this.family=e,this.mode=t;const r=L_(e,{palette:Ic[e.id]||Ic.average});this.homeRoot=r.root,this.homeAnim=r.anim,this.scene.add(this.homeRoot),this.members=r.anim.people||[],this.controls.autoRotate=t==="select",this.controls.autoRotateSpeed=.24,this.controls.minDistance=t==="select"?13:10,this.controls.maxDistance=t==="select"?52:44,this.mood="sunset",this._applyMood("sunset");const a=this._cameraFor(t);n?this._moveCamera(a.pos,a.target,1.1):(this.camera.position.copy(a.pos),this.controls.target.copy(a.target),this.controls.update())}setMode(e,t=!0){this.mode=e,this.controls.autoRotate=e==="select";const n=this._cameraFor(e);this._moveCamera(n.pos,n.target,t?1.2:0)}_applyMood(e){const t=Nc[e]||Nc.sunset;this.sky.uniforms.topColor.value.copy(t.top),this.sky.uniforms.horizonColor.value.copy(t.horizon),this.sky.uniforms.sunColor.value.copy(t.sun),this.sky.uniforms.haze.value=e==="dusk"?.32:.2,this.scene.fog.color.setHex(t.fog),this.sun.color.setHex(t.sunLight),this.sun.intensity=t.sunIntensity,this.hemi.color.setHex(t.hemiSky),this.hemi.groundColor.setHex(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.renderer.toneMappingExposure=t.exposure,e==="dusk"?(this.sun.position.set(-18,10,17),this.scene.fog.density=.007):(this.sun.position.set(-22,26,15),this.scene.fog.density=.0055),this.mood=e}setDayMood(e){const t=["sunset","day","dusk"],n=t[(Math.max(1,e)-1)%t.length];this._applyMood(n)}get isTraveling(){return!!this.travel}showFlight(e,t){this.homeRoot&&(this.homeRoot.visible=!1),this._clearTravel();const n=F_(e,t);n.anim.plane.rotation.y=-.95,n.anim.plane.position.set(0,3.1,-1),this.travel=n,this.scene.add(n.root),this.mode="flight",this.controls.autoRotate=!1,this._applyMood("travel");const r=this._cameraFor("flight");this._moveCamera(r.pos,r.target,1.4)}showDestination(e){this.travel&&(this.scene.remove(this.travel.root),Dc(this.travel.root),this.travel=null);const t=J_(e);this.travel=t,this.scene.add(t.root),this.mode="destination";const n=this._cameraFor("destination");this._moveCamera(n.pos,n.target,1.6),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.18}_clearTravel(){this.travel&&(this.scene.remove(this.travel.root),Dc(this.travel.root),this.travel=null)}returnHome(e=!0){this._clearTravel(),this.homeRoot&&(this.homeRoot.visible=!0),this.mode="home",this.controls.autoRotate=!1,this._applyMood(this.mood==="travel"?"sunset":this.mood);const t=this._cameraFor("home");this._moveCamera(t.pos,t.target,e?1.4:0)}pick(e,t){if(!this.homeRoot||this.mode!=="home")return null;const n=this.canvas.getBoundingClientRect();this.pointer.x=(e-n.left)/n.width*2-1,this.pointer.y=-((t-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const r=this.raycaster.intersectObjects(this.members,!0);for(const a of r){let o=a.object;for(;o;){if(typeof o.userData?.memberIndex=="number")return o.userData.memberIndex;o=o.parent}}return null}start(){if(this.running)return;this.running=!0,this.clock.start();const e=()=>{requestAnimationFrame(e);const t=Math.min(.05,this.clock.getDelta());if(this.time+=t,this.tween){this.tween.elapsed+=t;const n=Math.min(1,this.tween.elapsed/this.tween.duration),r=Q_(n);this.camera.position.lerpVectors(this.tween.p0,this.tween.p1,r),this.controls.target.lerpVectors(this.tween.t0,this.tween.t1,r),n>=1&&(this.tween=null,this.controls.enabled=!0)}this.controls.update(),(this.mode==="home"||this.mode==="select")&&D_(this.homeAnim,this.time,t),this.travel&&this.travel.anim.update(this.time,t),this.motes.rotation.y=this.time*.01,this.glints.children.forEach((n,r)=>{n.material.opacity=.1+(Math.sin(this.time*.5+r)*.5+.5)*.2,n.position.x+=Math.sin(this.time*.1+r)*.001}),this.renderer.render(this.scene,this.camera)};e()}}const Pi=[{id:"ultra",tier:"Ultra Wealth",tierShort:"ULTRA",order:"01",surname:"Vandermere",familyName:"The Vandermeres",crest:"V",accent:"#d8b274",accentSoft:"#f3dfb8",tagline:"Old money. New horizons.",intro:"Three generations of quiet influence, one impossible house, and a calendar with more cities than days.",philosophy:"Privacy is the ultimate luxury.",connections:"Global — boards, galleries, governments",cash:845e5,netWorth:284e7,dailyIncome:142e4,happiness:88,prestige:99,privacy:96,house:{name:"Casa Solara",location:"Bel Air, Los Angeles",style:"Contemporary Mediterranean",value:684e5,beds:12,baths:9,area:"18,400 sq ft",staff:14,blurb:"A cantilevered limestone villa wrapped around a 30-metre infinity pool. The west wing holds the art; the east wing holds the sunset."},members:[{name:"Aurelia",age:48,role:"Chairwoman, Halcyon Capital",outfit:"Ivory silk suit · Gia Couture",hair:"#4a3024",skin:"#c58d67",top:"#f6efe2",bottom:"#e9ddc7",style:"tailored"},{name:"Julian",age:51,role:"Managing Partner, Vandermere Estates",outfit:"Midnight bespoke wool · Savile Row",hair:"#2e2722",skin:"#a96f4c",top:"#1e2b36",bottom:"#18212b",style:"suit"},{name:"Celine",age:22,role:"Curator & heir apparent",outfit:"Emerald column gown · Atelier Vernier",hair:"#271d19",skin:"#c9916b",top:"#1d5a4e",bottom:"#17483f",style:"gown"},{name:"Felix",age:17,role:"Student, St. Aubyn Academy",outfit:"Sea-island cotton polo · cashmere",hair:"#6b4b31",skin:"#c58d67",top:"#e4d4b7",bottom:"#e9e4d9",style:"casual"}],jobs:[{member:"Aurelia",title:"Chairwoman",company:"Halcyon Capital",salary:"$18.4M / yr"},{member:"Julian",title:"Managing Partner",company:"Vandermere Estates",salary:"$9.2M / yr"},{member:"Celine",title:"Curator at large",company:"Solara Foundation",salary:"$420K / yr"}],businesses:[{name:"Halcyon Capital",sector:"Private equity",value:"$1.42B",daily:"$780,000",share:"Controlling"},{name:"Maison Aurelia",sector:"Boutique hotels",value:"$310M",daily:"$290,000",share:"100%"},{name:"Solara Vineyards",sector:"Napa Valley wine",value:"$84M",daily:"$96,000",share:"100%"}],vehicles:{car:"Bespoke Rolls-Royce Phantom",carMeta:"Two-tone Andalusian White / Palais Nemesis · private chauffeur",vehicles:"3 cars — Phantom, Range Rover SV, 1962 250 GT",helicopter:"Airbus ACH160",helicopterMeta:"On-site helipad · pilot on call",plane:"Gulfstream G700",planeMeta:"Private hangar at Van Nuys · crew of 4",boat:"Aurelia II — 74m superyacht"},insurance:[{name:"Sovereign Platinum Umbrella",cover:"$50M liability",detail:"Worldwide, all households"},{name:"Fine Art & Jewels",cover:"$126M collection",detail:"Transit and exhibition cover"},{name:"Private Aviation",cover:"Hull & crew",detail:"Global, including medevac"}],signature:[{label:"Timepiece",value:"Patek Philippe Grand Complications"},{label:"Art",value:"Basquiat · Untitled (1982)"},{label:"Wardrobe",value:"Bespoke couture, private atelier"},{label:"Club",value:"The Aurelia Society · founding seat"},{label:"Cellar",value:"4,200 bottles · Burgundy focus"},{label:"Philanthropy",value:"Solara Arts Fund · $240M endowed"}],travel:{defaultCabin:"first",aircraft:"Gulfstream G700",terminal:"Private terminal"},mood:"The estate is dressed for sunset. The staff have been given the evening off."},{id:"rich",tier:"Rich",tierShort:"RICH",order:"02",surname:"Sato",familyName:"The Satos",crest:"S",accent:"#cf8f74",accentSoft:"#f3d9cd",tagline:"Built fast. Lived beautifully.",intro:"A biotech founder, a design studio, and a family learning how to slow down in a house that never stops moving.",philosophy:"Make the work matter; make the weekends count.",connections:"Strong — founders, collectors, one very good architect",cash:218e4,netWorth:286e5,dailyIncome:46800,happiness:82,prestige:84,privacy:71,house:{name:"Linden House",location:"Greenwich, Connecticut",style:"Warm modern",value:625e4,beds:5,baths:4,area:"4,800 sq ft",staff:2,blurb:"Cedar, travertine and a long view of the water. A serious house that still wants you to put your feet up."},members:[{name:"Naomi",age:43,role:"Founder & CEO, Lumen Bio",outfit:"Camel wool blazer · The Row",hair:"#1f1a17",skin:"#d9a982",top:"#c18f6e",bottom:"#2e2b2a",style:"tailored"},{name:"Marcus",age:45,role:"Creative Director, Atelier Sato",outfit:"Black merino turtleneck · APC denim",hair:"#2d2520",skin:"#b17b58",top:"#232323",bottom:"#354052",style:"casual"},{name:"Ivy",age:16,role:"Student & competitive swimmer",outfit:"Cherry knit cardigan · vintage denim",hair:"#31221b",skin:"#d4a17c",top:"#a2484c",bottom:"#49657b",style:"casual"},{name:"Leo",age:10,role:"Student & junior chess champion",outfit:"Indigo denim jacket · striped tee",hair:"#211b18",skin:"#c7916b",top:"#42627c",bottom:"#596b7b",style:"child"}],jobs:[{member:"Naomi",title:"Founder & CEO",company:"Lumen Bio",salary:"$2.4M / yr"},{member:"Marcus",title:"Creative Director",company:"Atelier Sato",salary:"$380K / yr"},{member:"Ivy",title:"Junior lifeguard",company:"Greenwich Beach Club",salary:"$6.8K / season"}],businesses:[{name:"Lumen Bio",sector:"Diagnostics",value:"$88M",daily:"$31,000",share:"38% founder stake"},{name:"Atelier Sato",sector:"Architecture & design",value:"$6.4M",daily:"$8,200",share:"Co-founder"},{name:"Two rental properties",sector:"Residential real estate",value:"$3.1M",daily:"$7,600",share:"100%"}],vehicles:{car:"Mercedes-Maybach GLS 600",carMeta:"Obsidian black · family car, weekends only",vehicles:"2 cars — Maybach GLS, restored Porsche 911",helicopter:"Shared helicopter · 8 hours / month",helicopterMeta:"Blade-style membership · Manhattan transfers",plane:"Citation CJ4 · fractional share",planeMeta:"1/16 share · 25 hours per year",boat:"No yacht — summer charter in Maine"},insurance:[{name:"Executive Elite Family Plan",cover:"$10M umbrella",detail:"Health, travel and disability"},{name:"Business Owner Liability",cover:"$5M",detail:"Lumen Bio D&O top-up"},{name:"Home & Auto Premier",cover:"Full replacement",detail:"Art and wine riders included"}],signature:[{label:"Timepiece",value:"Omega Speedmaster Moonwatch"},{label:"Art",value:"Two editions by Hiroshi Sugimoto"},{label:"Wardrobe",value:"The Row, APC, and one perfect vintage coat"},{label:"Club",value:"Greenwich Beach Club · family membership"},{label:"Cellar",value:"310 bottles · Oregon and Champagne"},{label:"Philanthropy",value:"Lumen Access Fund · $1.2M pledged"}],travel:{defaultCabin:"business",aircraft:"Citation CJ4 · fractional",terminal:"Executive aviation"},mood:"The pool is still. From the studio, a half-finished model catches the last light."},{id:"average",tier:"Average",tierShort:"AVERAGE",order:"03",surname:"Bennett",familyName:"The Bennetts",crest:"B",accent:"#9db69f",accentSoft:"#dfe9dc",tagline:"No connections. Plenty of heart.",intro:"A nurse, a teacher, two kids and a house on Maple Row. Every trip is saved for, and every trip means something.",philosophy:"We do not have it all. We have enough.",connections:"None — built from scratch",cash:8450,netWorth:94500,dailyIncome:485,happiness:74,prestige:41,privacy:58,house:{name:"14 Maple Row",location:"Dayton, Ohio",style:"Post-war bungalow",value:186e3,beds:3,baths:1.5,area:"1,420 sq ft",staff:0,blurb:"A blue front door, a porch swing, and tomatoes that finally came in. Small rooms, loud dinners, good bones."},members:[{name:"Elena",age:39,role:"ICU Nurse, Mercy General",outfit:"Teal scrubs · worn-in cardigan",hair:"#4b3327",skin:"#b98263",top:"#3c7e7b",bottom:"#315e63",style:"casual"},{name:"Theo",age:41,role:"History Teacher, Northside High",outfit:"Olive crewneck · corduroy trousers",hair:"#372b23",skin:"#d0a07a",top:"#65704f",bottom:"#5b4b3a",style:"casual"},{name:"Maya",age:14,role:"Student & bakery apprentice",outfit:"Mustard tee · patched jeans",hair:"#3e2b20",skin:"#c08a65",top:"#c39a42",bottom:"#52718c",style:"child"},{name:"Sam",age:8,role:"Student & dinosaur expert",outfit:"Striped tee · hand-me-down shorts",hair:"#6b4a31",skin:"#c08a65",top:"#c96a54",bottom:"#455a6e",style:"child"}],jobs:[{member:"Elena",title:"ICU Nurse",company:"Mercy General",salary:"$86K / yr"},{member:"Theo",title:"History Teacher",company:"Northside High",salary:"$62K / yr"},{member:"Maya",title:"Weekend baker",company:"Bennett Bakes",salary:"$90 / wk"}],businesses:[{name:"Bennett Bakes",sector:"Home bakery · Saturdays",value:"$12K",daily:"$74",share:"100% — Elena & Maya"}],vehicles:{car:"2014 Honda Fit",carMeta:"Silver · 148,000 miles · very good brakes",vehicles:"1 car & 3 bicycles",helicopter:"None",helicopterMeta:"Not in the household budget",plane:"Commercial only",planeMeta:"Economy is the family default",boat:"A borrowed canoe at the lake"},insurance:[{name:"Mercy General Family HMO",cover:"Family health",detail:"Employer subsidised"},{name:"Renters & Auto Standard",cover:"$300K liability",detail:"Monthly, carefully budgeted"},{name:"Term Life",cover:"$250K each",detail:"20-year level term"}],signature:[{label:"Timepiece",value:"Casio Illuminator · a wedding gift"},{label:"Art",value:"Family photographs, taped and framed"},{label:"Wardrobe",value:"Target, thrifted Levi’s, one good coat"},{label:"Club",value:"Community pool · $120 summer pass"},{label:"Cellar",value:"Six bottles, mostly for birthdays"},{label:"Philanthropy",value:"Saturday food bank shift"}],travel:{defaultCabin:"economy",aircraft:"Commercial airline",terminal:"Main terminal"},mood:"Casserole in the oven. Sam is winning at Monopoly. The porch light is on."}],ci={economy:{id:"economy",label:"Economy",kicker:"SMART VALUE",multiplier:1,perks:["Standard seat","23kg checked bag","Complimentary meal"],detail:"Every dollar goes further. Still a window seat if you ask kindly."},business:{id:"business",label:"Business",kicker:"LIE-FLAT COMFORT",multiplier:2.8,perks:["Lie-flat suite","Lounge access","Priority boarding"],detail:"Arrive rested. The upgrade that changes the first day of a trip."},first:{id:"first",label:"First",kicker:"THE FULL CEREMONY",multiplier:6.2,perks:["Private suite","Chauffeur transfer","Caviar & vintage Champagne"],detail:"The airport disappears. A suite, a steward, and a car at the other end."}},wo=[{id:"singapore",city:"Singapore",country:"Singapore",code:"SIN",base:1960,hours:"17h 20m",tag:"Garden city",note:"Supertrees, supper clubs and a rooftop infinity pool above the bay.",palette:["#193b39","#69a58c","#e5c284"],icon:"singapore",hotel:"The Fullerton Bay · Bay View Suite",signature:"Gardens by the Bay at blue hour",restaurant:"Odette · chef’s table"},{id:"tokyo",city:"Tokyo",country:"Japan",code:"HND",base:1760,hours:"11h 05m",tag:"Quiet precision",note:"A city that rewards curiosity: tiny bars, perfect fish, midnight design.",palette:["#2a2238","#d6747f","#f0c9a0"],icon:"tokyo",hotel:"Aman Tokyo · Premier King",signature:"TeamLab Planets, after dark",restaurant:"Sushi Saito · counter seat"},{id:"losangeles",city:"Los Angeles",country:"United States",code:"LAX",base:420,hours:"2h 10m",tag:"Endless summer",note:"Palm-lined boulevards, canyon light and a long lunch that becomes dinner.",palette:["#442d34","#e39b74","#f3d69d"],icon:"losangeles",hotel:"Chateau Marmont · Garden Cottage",signature:"The Getty at golden hour",restaurant:"Bestia · patio table"},{id:"doha",city:"Doha",country:"Qatar",code:"DOH",base:1680,hours:"13h 40m",tag:"Desert modern",note:"Pearl divers’ history, a razor-sharp skyline and the best majlis hospitality.",palette:["#3b2a2f","#c99167","#efcf9d"],icon:"doha",hotel:"Mandarin Oriental · Msheireb Suite",signature:"Souq Waqif at dusk",restaurant:"Parisa · courtyard"},{id:"dubai",city:"Dubai",country:"United Arab Emirates",code:"DXB",base:1590,hours:"13h 10m",tag:"Vertical ambition",note:"Record-breaking towers, warm water and a skyline that behaves like theatre.",palette:["#322937","#d09a74","#f0c98e"],icon:"dubai",hotel:"Atlantis The Royal · Sky Pool Suite",signature:"Burj Khalifa · Level 148",restaurant:"Ossiano · below the sea"},{id:"london",city:"London",country:"United Kingdom",code:"LHR",base:1460,hours:"9h 45m",tag:"Grey elegance",note:"Museums in the morning, a members’ club at noon, theatre after the rain.",palette:["#27323b","#8b9a83","#d8c49a"],icon:"london",hotel:"The Connaught · Butler Suite",signature:"A private view at the Tate",restaurant:"Rochelle Canteen · garden"},{id:"paris",city:"Paris",country:"France",code:"CDG",base:1380,hours:"9h 20m",tag:"The art of living",note:"A morning market, a long museum, and one perfect table by a window.",palette:["#3b3037","#b79a92","#e9cfa6"],icon:"paris",hotel:"Le Bristol · Parisian Suite",signature:"Musée Rodin before opening",restaurant:"Septime · lunch"},{id:"milan",city:"Milan",country:"Italy",code:"MXP",base:1290,hours:"9h 05m",tag:"Beautifully made",note:"Design showrooms, aperitivo hour and a tailor who remembers your name.",palette:["#373029","#ad8964","#ead3a5"],icon:"milan",hotel:"Mandarin Oriental · Duomo Suite",signature:"Private after-hours Duomo terrace",restaurant:"Ratanà · garden room"},{id:"newyork",city:"New York",country:"United States",code:"JFK",base:980,hours:"5h 30m",tag:"The main event",note:"A corner suite, a matinee, and dinner somewhere too loud to hear each other.",palette:["#2c3037","#8d7c70","#dfc190"],icon:"newyork",hotel:"The Greenwich · Corner Suite",signature:"MoMA before the crowds",restaurant:"Via Carota · corner table"},{id:"zurich",city:"Zurich",country:"Switzerland",code:"ZRH",base:1520,hours:"9h 55m",tag:"Alpine calm",note:"Lake air, a long swim, and a train that climbs into the quiet.",palette:["#243538","#8a9c8d","#e7d6b0"],icon:"zurich",hotel:"Baur au Lac · Lake Suite",signature:"Private boat to Rapperswil",restaurant:"Kronenhalle · corner banquette"}],$h=["MON","TUE","WED","THU","FRI","SAT","SUN"];function wt(i,e=!1){return e&&Math.abs(i)>=1e6?`$${(i/1e6).toFixed(i>=1e7?0:1)}M`:e&&Math.abs(i)>=1e4?`$${(i/1e3).toFixed(0)}K`:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(i)}function tl(i){return Pi.find(e=>e.id===i)||Pi[0]}const ht=(i,e="0 0 24 24")=>`<svg viewBox="${e}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${i}</svg>`,Uc={home:ht('<path d="M3.5 10.5 12 3l8.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9.5v10h13v-10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 19.5v-5h5v5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),users:ht('<circle cx="9" cy="8" r="3" stroke="currentColor"/><path d="M3.5 19.5c.4-3.2 2.5-5.1 5.5-5.1s5.1 1.9 5.5 5.1" stroke="currentColor" stroke-linecap="round"/><path d="M15.2 5.4a3 3 0 0 1 0 5.4" stroke="currentColor" stroke-linecap="round"/><path d="M17.2 14.8c1.9.7 3 2.3 3.3 4.7" stroke="currentColor" stroke-linecap="round"/>'),diamond:ht('<path d="m4 9 3-5h10l3 5-8 11L4 9Z" stroke="currentColor" stroke-linejoin="round"/><path d="M4 9h16M8 4l4 16 4-16" stroke="currentColor" stroke-linejoin="round"/>'),plane:ht('<path d="M21 12.4 14.2 15l-1.5 5.2-1.9.8-1-5.1-5-2 .9-1.7 4.8.8L13 7.3 9.6 5.2l1-1.4 4.7 1.7 2.6-2.4c.7-.6 1.7-.6 2.3.1.6.7.6 1.7-.1 2.3l-2.4 2.6 1.7 4.7-1.4 1-2.1-3.4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),book:ht('<path d="M4 5.5c3.2-1 5.6-.5 8 1.2 2.4-1.7 4.8-2.2 8-1.2v13c-3.2-1-5.6-.5-8 1.2-2.4-1.7-4.8-2.2-8-1.2v-13Z" stroke="currentColor" stroke-linejoin="round"/><path d="M12 6.7v13" stroke="currentColor"/>'),car:ht('<path d="m5 10 1.5-4h11L19 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 10h16v7h-2.2M4 17V10m2.2 7H8m5.5 0h2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7.2" cy="17" r="1.8" stroke="currentColor"/><circle cx="17.3" cy="17" r="1.8" stroke="currentColor"/>'),helicopter:ht('<path d="M4 4.5h16M12 4.5v3" stroke="currentColor" stroke-linecap="round"/><path d="M6.5 14.5c0-3.3 2.4-5.5 5.7-5.5h3.2c2.2 0 3.6 1.4 3.6 3.4v2.1c0 1.7-1.2 2.8-2.9 2.8H9.3c-1.7 0-2.8-1.1-2.8-2.8Z" stroke="currentColor" stroke-linejoin="round"/><path d="m15.2 11.5 4.3-.4M6.2 18.2h11.6M8.1 17.5v1.9m7.8-1.9v1.9" stroke="currentColor" stroke-linecap="round"/>'),jet:ht('<path d="M3 13.2c3.7-.8 7.6-1.2 11.8-1.2l3-1.2c1.2-.5 2.5.6 2 1.9l-.8 1.4c-.4.7-1.1 1.1-1.9 1.1L15 15l-4.6 4.1-2 .1 2.5-4.4-4.2.3-1.8 1.8-1.6.1.9-3.2L2.8 12l.2-.8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),shield:ht('<path d="M12 3 5 5.8v5.7c0 3.7 2.5 6.9 7 9.5 4.5-2.6 7-5.8 7-9.5V5.8L12 3Z" stroke="currentColor" stroke-linejoin="round"/><path d="m9 11.8 2 2 4-4.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),sparkle:ht('<path d="m12 3 1.4 4.2L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.3L12 3Z" stroke="currentColor" stroke-linejoin="round"/><path d="m18.5 14 .7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" stroke="currentColor" stroke-linejoin="round"/>'),clock:ht('<circle cx="12" cy="12" r="8.5" stroke="currentColor"/><path d="M12 7.5V12l3 2" stroke="currentColor" stroke-linecap="round"/>'),heart:ht('<path d="M12 20s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.9C19.5 15.4 12 20 12 20Z" stroke="currentColor" stroke-linejoin="round"/>'),star:ht('<path d="m12 3 2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.9-5.3 2.9 1-6L3.3 9.4l6-.9L12 3Z" stroke="currentColor" stroke-linejoin="round"/>'),map:ht('<path d="M9 4 3 6.4v14L9 18l6 2.4 6-2.4v-14L15 6.4 9 4Z" stroke="currentColor" stroke-linejoin="round"/><path d="M9 4v14m6-11.6v14" stroke="currentColor"/>'),check:ht('<path d="m5 12.5 4.5 4.5L19 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),sun:ht('<circle cx="12" cy="12" r="3.5" stroke="currentColor"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" stroke="currentColor" stroke-linecap="round"/>'),moon:ht('<path d="M20 15.3A8.7 8.7 0 0 1 8.7 4 8.8 8.8 0 1 0 20 15.3Z" stroke="currentColor" stroke-linejoin="round"/>'),chevron:ht('<path d="m8 10 4 4 4-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),pin:ht('<path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Z" stroke="currentColor" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.2" stroke="currentColor"/>'),building:ht('<path d="M4 21V6l8-3v18M12 8h8v13M4 21h16" stroke="currentColor" stroke-linejoin="round"/><path d="M7.5 8.5h1M7.5 12h1M7.5 15.5h1M15.5 12h1M15.5 15.5h1" stroke="currentColor" stroke-linecap="round"/>'),briefcase:ht('<rect x="3.5" y="7.5" width="17" height="12" rx="2" stroke="currentColor"/><path d="M9 7.5V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8v1.7M3.5 12.5h17" stroke="currentColor" stroke-linecap="round"/>'),boat:ht('<path d="M4 14.5h16l-2.5 5h-11L4 14.5Z" stroke="currentColor" stroke-linejoin="round"/><path d="M12 14.5V5m0 0-4.5 6.5H12M12 5l4.5 6.5H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),watch:ht('<circle cx="12" cy="12" r="4.5" stroke="currentColor"/><path d="M9.4 7.8 10 4h4l.6 3.8M9.4 16.2 10 20h4l.6-3.8M12 9.8V12l1.7 1" stroke="currentColor" stroke-linecap="round"/>'),art:ht('<rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor"/><path d="m6.5 16.5 3.5-4 2.5 2.6 2.4-2.8 2.6 4.2M9.2 9h.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),globe:ht('<circle cx="12" cy="12" r="8.5" stroke="currentColor"/><path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.1-3.3-8.5S9.8 5.8 12 3.5Z" stroke="currentColor"/>'),calendar:ht('<rect x="3.5" y="5.5" width="17" height="15" rx="2" stroke="currentColor"/><path d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17" stroke="currentColor" stroke-linecap="round"/>'),arrow:ht('<path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),soundOn:ht('<path d="M4 9.5h3l4-3.3v11.6l-4-3.3H4v-5Z" stroke="currentColor" stroke-linejoin="round"/><path d="M15 9a4 4 0 0 1 0 6m2.5-8.5a7 7 0 0 1 0 11" stroke="currentColor" stroke-linecap="round"/>'),soundOff:ht('<path d="M4 9.5h3l4-3.3v11.6l-4-3.3H4v-5Z" stroke="currentColor" stroke-linejoin="round"/><path d="m16 9.5 4 4m0-4-4 4" stroke="currentColor" stroke-linecap="round"/>'),key:ht('<circle cx="8" cy="12" r="4" stroke="currentColor"/><path d="M12 12h8m-3 0v3m-2-3v2" stroke="currentColor" stroke-linecap="round"/>'),trophy:ht('<path d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z" stroke="currentColor" stroke-linejoin="round"/><path d="M8 5.5H4.8V7A3.8 3.8 0 0 0 8.6 10.8M16 5.5h3.2V7a3.8 3.8 0 0 1-3.8 3.8M12 12.5V17m-3 3h6m-5 0 .4-2.2h3.2L15 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'),wallet:ht('<rect x="3.5" y="6" width="17" height="13" rx="2" stroke="currentColor"/><path d="M3.5 9.5h17M15.5 13.5h2.6" stroke="currentColor" stroke-linecap="round"/>'),crown:ht('<path d="M4 18h16M5 6l3.6 4L12 5l3.4 5L19 6l-1.3 9H6.3L5 6Z" stroke="currentColor" stroke-linejoin="round"/>'),close:ht('<path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-linecap="round"/>')};function ps(i){return Uc[i]||Uc.sparkle}const Fc={singapore:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><rect x="27" y="20" width="15" height="52" rx="3" stroke="currentColor" stroke-width="1.4"/><rect x="52" y="14" width="16" height="58" rx="3" stroke="currentColor" stroke-width="1.4"/><rect x="78" y="22" width="15" height="50" rx="3" stroke="currentColor" stroke-width="1.4"/><path d="M22 22h76c4 0 7 3 7 7v3H20v-4c0-3 1-6 2-6Z" stroke="currentColor" stroke-width="1.4"/><circle cx="14" cy="62" r="10" stroke="currentColor" stroke-width="1.2"/><path d="M14 62 8 54m6 8 8 5M4 62h20M14 52v20" stroke="currentColor" stroke-width=".8" opacity=".7"/></svg>',tokyo:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M60 12v58M38 70h44M60 18 40 70M60 18l20 52M60 18 49 70M60 18l11 52M44 44h32M36 58h48M33 70h54" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M52 82h16M56 76h8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="60" cy="12" r="2" fill="currentColor"/><path d="M18 82c8-7 16-7 24 0M78 82c8-7 16-7 24 0" stroke="currentColor" stroke-width="1" opacity=".5"/></svg>',losangeles:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M2 68c15-10 27-12 44-6 17 6 33 6 50-2 9-4 16-4 22-2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M38 68V35m0 0c-5-6-8-10-13-12m13 12c4-8 8-13 14-16m-14 16c-2-9-4-14-9-18M38 35c7-4 13-5 19-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M84 68V41m0 0c-3-5-5-8-9-10m9 10c3-6 6-10 10-12m-10 12c-1-7-3-11-7-14M84 41c5-3 9-3 13-2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M6 30c8 2 12 7 12 14M110 36c-6 1-9 4-10 8" stroke="currentColor" stroke-width=".9" opacity=".55"/><path d="M54 57h23v11H54zM58 57v-9h5v9M69 57v-7h5v7" stroke="currentColor" stroke-width="1.1"/></svg>',doha:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M39 48h42v26H39z" stroke="currentColor" stroke-width="1.4"/><path d="M46 48V35c0-5 4-9 9-9h10c5 0 9 4 9 9v13" stroke="currentColor" stroke-width="1.4"/><path d="M48 74V59c0-4 3-7 7-7h10c4 0 7 3 7 7v15M60 35v-8" stroke="currentColor" stroke-width="1.1"/><path d="M34 74h52M66 27c2-4 5-6 9-6M24 74c4-10 11-15 20-16M97 74c-4-10-11-15-20-16" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>',dubai:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M60 8v66M60 20l-7 54M60 20l7 54M53 74l-6 0M67 74h6M60 34l-4 40M60 34l4 40M46 74h28" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M31 74V51l9-6v29M80 74V45l10 7v22M25 74h70M94 74V58l5 3v13" stroke="currentColor" stroke-width="1.1"/><circle cx="60" cy="8" r="1.6" fill="currentColor"/><path d="M17 74c7-6 13-7 20-2M83 74c7-5 13-5 20 1" stroke="currentColor" stroke-width="1" opacity=".5"/></svg>',london:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M30 74V22h14v52M24 22h26M27 28h20M27 35h20M34 15l3-5 3 5v7h-6v-7Z" stroke="currentColor" stroke-width="1.3"/><circle cx="37" cy="35" r="5" stroke="currentColor" stroke-width="1.1"/><path d="M37 35v-3M37 35l2 1" stroke="currentColor" stroke-width=".8"/><circle cx="86" cy="45" r="20" stroke="currentColor" stroke-width="1.1"/><path d="M86 45 78 29m8 16 13 10M66 45h40M86 25v40M71 31l30 28M101 31 71 59" stroke="currentColor" stroke-width=".7" opacity=".7"/><path d="M53 74h44" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',paris:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M60 10v66M38 76h44M60 18 40 76M60 18l20 58M60 18 52 76M60 18l8 58M46 49h28M36 63h48M31 76h58" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M52 76c2-8 5-12 8-12s6 4 8 12" stroke="currentColor" stroke-width="1.1"/><circle cx="60" cy="10" r="1.7" fill="currentColor"/><path d="M18 76c7-4 13-4 20 0M82 76c7-4 13-4 20 0" stroke="currentColor" stroke-width="1" opacity=".5"/></svg>',milan:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M32 74V44h56v30M26 44h68M38 44V29l6-8 6 8v15M70 44V27l6-6 6 6v17M56 44V22l5-7 5 7v22M50 29l-5-8m26 8 5-8M60 15V7" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M45 74V57c0-4 3-7 7-7h16c4 0 7 3 7 7v17M20 74h80" stroke="currentColor" stroke-width="1.2"/><circle cx="60" cy="7" r="1.6" fill="currentColor"/></svg>',newyork:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M30 74V29h16v45M27 29h22M30 36h16M30 43h16M30 50h16M30 57h16M54 74V43h12v31M80 74V19h11v55M77 19h17M80 27h11M80 34h11M80 41h11M80 48h11M94 74V52h9v22M18 74h88" stroke="currentColor" stroke-width="1.2"/><path d="M33 15v14M60 35V24M85 8v11" stroke="currentColor" stroke-width="1" stroke-linecap="round"/><circle cx="85" cy="7" r="1.6" fill="currentColor"/></svg>',zurich:'<svg viewBox="0 0 120 90" fill="none" aria-hidden="true"><path d="M2 70 26 28l18 28 12-18 16 24 10-14 20 22" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="m18 46 8-9 7 9M47 50l7-10 7 10M83 54l6-7 7 8M12 67h28M73 67h30" stroke="currentColor" stroke-width="1" opacity=".65"/><path d="M54 74V58h12v16M48 74h24M60 58v-6" stroke="currentColor" stroke-width="1.2"/><path d="M6 78c18-5 37-5 58 0 18 4 35 4 50-1" stroke="currentColor" stroke-width="1" opacity=".5"/><circle cx="60" cy="49" r="7" stroke="currentColor" stroke-width="1" opacity=".65"/></svg>'};function nv(i){return Fc[i]||Fc.paris}class iv{constructor(){this.ctx=null,this.enabled=!0,this.master=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.42:0,this.master.connect(this.ctx.destination))}setEnabled(e){this.enabled=e,this.master&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.linearRampToValueAtTime(e?.42:0,this.ctx.currentTime+.12))}tone(e,t=.2,n="sine",r=.08,a=0){if(!this.ctx||!this.enabled)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(e,o),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(r,o+.015),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+t+.05)}click(){this.init(),this.tone(620,.08,"triangle",.035),this.tone(930,.08,"sine",.022,.025)}chime(){this.init(),this.tone(392,.5,"sine",.05),this.tone(523.25,.6,"sine",.038,.08),this.tone(659.25,.9,"sine",.03,.16)}cash(){this.init(),this.tone(880,.18,"triangle",.04),this.tone(1174.66,.32,"triangle",.03,.08),this.tone(1567.98,.4,"sine",.018,.16)}swoosh(){if(this.ctx||this.init(),!this.ctx||!this.enabled)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),r=this.ctx.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(100,e),t.frequency.exponentialRampToValueAtTime(760,e+1.1),r.type="lowpass",r.frequency.setValueAtTime(400,e),r.frequency.exponentialRampToValueAtTime(1800,e+1.1),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.035,e+.18),n.gain.exponentialRampToValueAtTime(1e-4,e+1.5),t.connect(r),r.connect(n),n.connect(this.master),t.start(e),t.stop(e+1.6)}arrival(){this.init(),[523.25,659.25,783.99,1046.5].forEach((e,t)=>this.tone(e,.7,"sine",.04,t*.09))}}const re=i=>document.getElementById(i),sv=re("app"),Ut=new tv(re("scene")),It=new iv,qh="heirloom-estate-save-v1",Yh="heirloom-muted-v1",To={ultra:{code:"LAX",city:"Los Angeles"},rich:{code:"JFK",city:"New York"},average:{code:"DAY",city:"Dayton"}},Oc=["GOLDEN HOUR","MORNING LIGHT","BLUE HOUR"],Li=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let Cn="ultra",Ls={},nl=!1,vn=null,Ao=0,Bc=null,bs=rv();const Tn={panel:null,selectedDestination:null,selectedCabin:null};Ut.start();function Zh(i){return{familyId:i.id,cash:i.cash,day:1,happiness:i.happiness,prestige:i.prestige,lastMomentDay:0,trips:[],history:[{day:1,title:"The house is ready",detail:`${i.house.name} prepared for the family.`}]}}function Kh(i){return Ls[i]||(Ls[i]=Zh(tl(i))),Ls[i]}function rv(){try{const i=localStorage.getItem(qh);if(!i)return null;const e=JSON.parse(i);return!e||!e.states?null:e}catch{return null}}function av(){bs&&(Pi.some(i=>i.id===bs.activeId)&&(Cn=bs.activeId),Pi.forEach(i=>{const e=bs.states?.[i.id];e&&(Ls[i.id]={...Zh(i),...e,trips:e.trips||[],history:e.history||[]})}),bs.started&&(nl=!0,re("resume-btn").classList.remove("hidden"),re("resume-btn").textContent=`Resume the ${tl(Cn).surname} story`))}function pi(){try{localStorage.setItem(qh,JSON.stringify({v:1,activeId:Cn,started:nl,states:Ls,savedAt:Date.now()}))}catch{}}function gi(){return Kh(Cn)}function fn(){return tl(Cn)}function $r(i){return Math.abs(i)>=1e9?`$${(i/1e9).toFixed(2).replace(/\.?0+$/,"")}B`:Math.abs(i)>=1e6?`$${(i/1e6).toFixed(i>=1e7?1:2).replace(/\.?0+$/,"")}M`:Math.abs(i)>=1e4?`$${Math.round(i/1e3)}K`:wt(i)}function Jh(i){const e=parseFloat(String(i).replace(/[^0-9.]/g,""))||0;return/B/i.test(i)?e*1e9:/M/i.test(i)?e*1e6:/K/i.test(i)?e*1e3:e}function ov(i){return`${$h[(Math.max(1,i.day)-1)%7]} · DAY ${i.day}`}function il(i){return Oc[(Math.max(1,i.day)-1)%Oc.length]}function Ro(i,e){const t=ci[e]||ci.economy;return Math.round(i.base*t.multiplier/10)*10}function Qh(i=document){i.querySelectorAll("[data-icon]").forEach(e=>{e.dataset.iconReady||(e.innerHTML=ps(e.dataset.icon),e.dataset.iconReady="1")})}Qh();function jh(){const i=re("sound-btn");i&&(i.innerHTML=ps(It.enabled?"soundOn":"soundOff"))}function Di(i,e="",t="✦"){const n=re("toast-stack"),r=document.createElement("div");r.className="toast",r.innerHTML=`<div class="toast-icon">${t}</div><div><b>${i}</b>${e?`<p>${e}</p>`:""}</div>`,n.appendChild(r),setTimeout(()=>{r.classList.add("leaving"),setTimeout(()=>r.remove(),380)},4300)}function ed(){const i=re("family-picker");i.innerHTML=Pi.map(e=>`
    <button class="family-option ${e.id===Cn?"active":""}" data-family="${e.id}" role="listitem" style="--family-accent:${e.accent}">
      <span class="family-index">${e.order}</span>
      <span class="family-option-copy">
        <b>${e.familyName}</b>
        <small><span class="tier-dot" style="--family-accent:${e.accent}"></span>${e.tier}${e.id==="average"?" · NO CONNECTIONS":""}</small>
      </span>
      <span class="family-money"><b>${$r(e.cash)}</b><small>available</small></span>
    </button>`).join(""),i.querySelectorAll(".family-option").forEach(e=>{e.addEventListener("click",()=>lv(e.dataset.family))})}function lv(i){if(!Pi.some(t=>t.id===i)||i===Cn)return;Cn=i;const e=fn();ed(),re("enter-btn").innerHTML=`Enter the ${e.surname} life <span class="btn-arrow">→</span>`,re("preview-label").innerHTML=`<span class="preview-index">${e.order}</span><span class="preview-copy"><b>${e.house.name}</b><small>${e.house.location}</small></span>`,re("scene").style.opacity="0.25",setTimeout(()=>{Ut.setFamily(e,"select",!1),requestAnimationFrame(()=>{re("scene").style.opacity="1"})},70)}function cv(){av(),ed();const i=fn();re("enter-btn").innerHTML=`Enter the ${i.surname} life <span class="btn-arrow">→</span>`,re("preview-label").innerHTML=`<span class="preview-index">${i.order}</span><span class="preview-copy"><b>${i.house.name}</b><small>${i.house.location}</small></span>`,Ut.setFamily(i,"select",!1),re("select-screen").classList.remove("hidden"),setTimeout(()=>re("loader").classList.add("ready"),700),setTimeout(()=>re("loader").classList.add("hidden"),1450)}function ms(){const i=fn(),e=gi();re("crest").textContent=i.crest,re("family-name").textContent=i.familyName,re("family-tier").textContent=i.tier.toUpperCase(),re("cash-value").textContent=wt(e.cash),re("income-value").textContent=`+${$r(i.dailyIncome)} / day`,re("day-label").textContent=ov(e),re("time-label").textContent=il(e),re("house-name").textContent=i.house.name,re("house-location").textContent=i.house.location,re("mood-line").textContent=i.mood,re("happy-value").textContent=e.happiness,re("prestige-value").textContent=e.prestige,re("happy-bar").style.width=`${e.happiness}%`,re("prestige-bar").style.width=`${e.prestige}%`,re("game-ui").style.setProperty("--family-accent",i.accent);const t=e.lastMomentDay===e.day,n=re("moment-btn");n.disabled=t,n.querySelector("b").textContent=t?"A quiet moment taken":"Take in the sunset",n.querySelector("small").textContent=t?"Come back tomorrow":"+5 happiness · once a day",document.title=`${i.house.name} · Heirloom`}function hv(i){const e=re("intro");re("intro-crest").textContent=i.crest,re("intro-name").textContent=i.house.name,re("intro-tier").textContent=`${i.familyName.toUpperCase()} · ${i.tier.toUpperCase()}`,e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",setTimeout(()=>e.classList.add("hidden"),Li?500:2600)}function dv(){const i=re("tutorial");i.classList.remove("hide"),clearTimeout(Bc),Bc=setTimeout(()=>i.classList.add("hide"),9e3)}function td({resume:i=!1}={}){const e=fn(),t=gi();nl=!0,pi(),re("select-screen").classList.add("leaving"),setTimeout(()=>re("select-screen").classList.add("hidden"),420),re("game-ui").classList.remove("hidden"),Ut.setFamily(e,"home",!0),Ut.setDayMood(t.day),ms(),Ut.controls.autoRotate=!1,Ut.controls.enabled=!0,i||hv(e),dv(),It.chime(),i&&Di("Welcome back",`${e.house.name} has been kept exactly as you left it.`,"⌂")}function sl(){if(vn)return;Ii();const i=fn(),e=gi(),t=i.dailyIncome;e.cash+=t,e.day+=1,e.lastMomentDay=0,e.happiness=Math.max(42,e.happiness-1),e.history.unshift({day:e.day,title:"Daily income collected",detail:`${wt(t)} from salary, businesses and investments.`}),e.history.length>18&&(e.history.length=18),Ut.setDayMood(e.day),ms(),pi(),It.cash(),uv(e.day,t,i),Di(`Day ${e.day} · income collected`,`+${wt(t)} added to available funds.`,"↻")}function uv(i,e,t){const n=document.createElement("div");n.className="day-transition",n.innerHTML=`
    <div class="day-break-kicker">${$h[(i-1)%7]} · DAY ${i}</div>
    <div class="day-break-title">A new day at<br><em>${t.house.name}</em></div>
    <div class="day-break-income">+${wt(e)}</div>
    <div class="day-break-sub">collected from the household portfolio</div>`,sv.appendChild(n),setTimeout(()=>n.classList.add("leaving"),Li?350:1900),setTimeout(()=>n.remove(),Li?700:2500)}function nd(){const i=gi();if(i.lastMomentDay===i.day){Di("Already taken","This moment belongs to today. A new one arrives tomorrow.","☀");return}i.happiness=Math.min(100,i.happiness+5),i.lastMomentDay=i.day,i.history.unshift({day:i.day,title:"A moment at home",detail:"The family took in the last light together. +5 happiness."}),ms(),pi(),It.chime(),Di("Happiness +5","The terrace was quiet. Nobody reached for a phone.","☀"),Tn.panel==="estate"&&Or("estate")}const fv={estate:{kicker:"BACK AT THE HOUSE",title:null,subtitle:"A private world, arranged exactly so."},family:{kicker:"THE HOUSEHOLD",title:null,subtitle:"The people behind the name."},assets:{kicker:"THE PORTFOLIO",title:"Everything, preselected",subtitle:"A complete life, chosen for this family."},travel:{kicker:"THE GETAWAY",title:"Where to next?",subtitle:"Ten cities. Three ways to arrive."},ledger:{kicker:"THE BOOKS",title:"Quietly managed",subtitle:"Income, work and the cost of a life."}};function rl(i="estate"){if(vn)return;Tn.panel=i;const e=fn(),t=fv[i];re("panel-kicker").innerHTML=`<span class="eyebrow-line"></span>${t.kicker}`,re("panel-title").textContent=i==="family"?e.familyName:i==="estate"?e.house.name:t.title,re("panel-subtitle").textContent=i==="estate"?`${e.house.location} · ${e.house.style}`:t.subtitle,re("panel").classList.remove("hidden"),re("panel").setAttribute("aria-hidden","false"),re("panel-body").scrollTop=0,Ut.controls.enabled=!1,Or(i),document.querySelectorAll(".dock-item").forEach(n=>n.classList.toggle("active",n.dataset.view===i)),It.click()}function Ii(){re("panel").classList.contains("hidden")||(re("panel").classList.add("hidden"),re("panel").setAttribute("aria-hidden","true"),Tn.panel=null,Ut.controls.enabled=!0,document.querySelectorAll(".dock-item").forEach(i=>i.classList.toggle("active",i.dataset.view==="estate")))}function Or(i){const e=re("panel-body"),t=fn(),n=gi();i==="estate"&&(e.innerHTML=mv(t,n)),i==="family"&&(e.innerHTML=gv(t,n)),i==="assets"&&(e.innerHTML=_v(t)),i==="travel"&&(e.innerHTML=xv(t,n)),i==="ledger"&&(e.innerHTML=Mv(t,n)),Qh(e),pv(i)}function pv(i){const e=re("panel-body"),t=e.querySelector("#panel-moment");t&&t.addEventListener("click",nd);const n=e.querySelector("#switch-household-btn");n&&n.addEventListener("click",ad);const r=e.querySelector("#panel-end-day");if(r&&r.addEventListener("click",sl),i==="travel"){e.querySelectorAll("[data-destination]").forEach(o=>{o.addEventListener("click",()=>{Tn.selectedDestination=o.dataset.destination,Tn.selectedCabin=fn().travel.defaultCabin,Or("travel"),requestAnimationFrame(()=>{document.getElementById("destination-detail")?.scrollIntoView({behavior:Li?"auto":"smooth",block:"nearest"})})})}),e.querySelectorAll("[data-cabin]").forEach(o=>{o.addEventListener("click",()=>{Tn.selectedCabin=o.dataset.cabin,Or("travel"),requestAnimationFrame(()=>{document.getElementById("destination-detail")?.scrollIntoView({behavior:Li?"auto":"smooth",block:"nearest"})})})});const a=e.querySelector("#book-trip");a&&a.addEventListener("click",()=>{const o=wo.find(h=>h.id===Tn.selectedDestination);if(!o)return;const l=Tn.selectedCabin||f.travel.defaultCabin,c=Ro(o,l);if(s.cash<c){Di("Not quite yet",`You need ${wt(c-s.cash)} more. End a few days to collect income.`,"◷");return}Sv(o,l,c)})}}function id(i){return`
    <article class="member-card" style="--m-top:${i.top};--m-bottom:${i.bottom}">
      <div class="member-top">
        <div class="member-avatar">${i.name[0]}</div>
        <div class="member-name"><b>${i.name}</b><small>${i.age} years old</small></div>
      </div>
      <p class="member-role">${i.role}</p>
      <div class="member-outfit">${i.outfit}</div>
      <span class="member-chip">${i.style==="child"?"Youngest generation":i.style==="gown"?"Heir apparent":"Household"}</span>
    </article>`}function sd(i){return`
    <div class="house-visual">
      <div class="hv-kicker">THE RESIDENCE · ${i.house.value>1e6?$r(i.house.value):wt(i.house.value)}</div>
      <h3>${i.house.name}</h3>
      <p>${i.house.blurb}</p>
      <div class="house-specs">
        <div class="spec"><small>Location</small><b>${i.house.location}</b></div>
        <div class="spec"><small>Interior</small><b>${i.house.area}</b></div>
        <div class="spec"><small>Bedrooms</small><b>${i.house.beds} · ${i.house.baths} baths</b></div>
        <div class="spec"><small>Staff</small><b>${i.house.staff===0?"The family itself":`${i.house.staff} in residence`}</b></div>
      </div>
    </div>`}function mv(i,e){return`
    <section class="panel-section">
      ${sd(i)}
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
          <div class="profile-line"><span>Today</span><b>${il(e)}</b></div>
          <div class="profile-line"><span>Liquid funds</span><b>${wt(e.cash)}</b></div>
        </div>
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>The household</h3><p>Tap Family in the dock for every detail</p></div>
      <div class="member-grid">${i.members.map(id).join("")}</div>
    </section>`}function gv(i,e){return`
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
      <div class="member-grid">${i.members.map(id).join("")}</div>
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
        <div class="profile-line"><span>Daily inflow</span><b>${wt(i.dailyIncome)}</b></div>
        <div class="profile-line"><span>Household clothing</span><b>${i.id==="average"?"High street & hand-me-downs":i.id==="rich"?"Designer, quietly worn":"Bespoke & couture"}</b></div>
      </div>
    </section>
    <div class="switch-household">
      <div><b>Curious about another life?</b><p>Switch households without losing this family's money, days or memories.</p></div>
      <button id="switch-household-btn" class="btn btn-quiet small">Choose another family</button>
    </div>`}function qi(i,e,t,n){return`
    <div class="asset-item">
      <div class="asset-icon">${ps(i)}</div>
      <div class="asset-copy"><small>${e}</small><b>${t}</b><p>${n}</p></div>
    </div>`}function _v(i,e){const t=i.businesses.reduce((n,r)=>n+Jh(r.daily),0);return`
    <section class="panel-section">
      ${sd(i)}
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>House & transport</h3><p>Every object was preselected for this family</p></div>
      <div class="asset-grid">
        ${qi("home","RESIDENCE",i.house.name,`${i.house.location} · ${i.house.area} · ${wt(i.house.value)}`)}
        ${qi("car","CAR",i.vehicles.car,i.vehicles.carMeta)}
        ${qi("helicopter","HELICOPTER",i.vehicles.helicopter,i.vehicles.helicopterMeta)}
        ${qi("jet","PLANE",i.vehicles.plane,i.vehicles.planeMeta)}
        ${qi("boat","WATER",i.vehicles.boat,i.id==="average"?"A borrowed canoe at the lake":i.id==="rich"?"Chartered each August":"Crew of 18 · Mediterranean summer")}
        ${qi("watch","SIGNATURE",i.signature[0].value,"The object that says the most with the least noise.")}
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Businesses & work</h3><p>${wt(t)} distributed each day</p></div>
      <div class="list-card">
        ${i.businesses.map((n,r)=>`
          <div class="list-row">
            <div class="list-num">${String(r+1).padStart(2,"0")}</div>
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
              <div class="asset-icon" style="width:28px;height:28px;border-radius:8px">${ps("shield")}</div>
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
    </section>`}function vv(i,e){return`
    <button class="destination-card ${e?"selected":""}" data-destination="${i.id}" style="--dest-a:${i.palette[0]};--dest-b:${i.palette[1]}">
      <span class="dest-art">${nv(i.id)}</span>
      <span class="dest-content">
        <span class="dest-code">${i.code} · ${i.country.toUpperCase()}</span>
        <b>${i.city}</b>
        <small>${i.tag}</small>
        <span class="dest-price"><span>ECONOMY, ROUND TRIP</span><b>${wt(i.base)}</b></span>
      </span>
    </button>`}function xv(i,e){const t=wo.find(a=>a.id===Tn.selectedDestination),n=Tn.selectedCabin||i.travel.defaultCabin;let r="";if(t){const a=Ro(t,n),o=e.cash>=a,l=a-e.cash;r=`
      <div class="destination-detail" id="destination-detail">
        <div class="dd-head">
          <div><h3>${t.city}</h3><p>${t.note}</p></div>
          <span class="dd-tag">${t.tag}</span>
        </div>
        <div class="class-grid">
          ${Object.values(ci).map(c=>`
            <button class="class-card ${c.id===n?"selected":""}" data-cabin="${c.id}">
              ${c.id===i.travel.defaultCabin?'<span class="recommend">SUGGESTED</span>':""}
              <b>${c.label}</b>
              <span class="class-kicker">${c.kicker}</span>
              <span class="class-price">${wt(Ro(t,c.id))}</span>
              <small>${c.detail}</small>
              <span class="class-perks">${c.perks.map(h=>`<span>${h}</span>`).join("")}</span>
            </button>`).join("")}
        </div>
        <div class="booking-bar">
          <div class="booking-total"><small>ROUND TRIP · ${i.members.length} GUESTS</small><b>${wt(a)}</b></div>
          <button id="book-trip" class="btn btn-gold" ${o?"":"disabled"}>${o?`Book ${ci[n].label}`:`Need ${wt(l)} more`} <span class="btn-arrow">→</span></button>
        </div>
        <p class="booking-note ${o?"":"warn"}">${o?`Charged to available funds. ${i.travel.aircraft} · ${t.hours} flight.`:`End a few days to collect income, then come back. You are ${wt(l)} short.`}</p>
      </div>`}return`
    <section class="panel-section">
      <div class="travel-intro">
        <div><span class="section-label">TEN DESTINATIONS</span><p style="margin:0;color:var(--muted);font-size:9px;line-height:1.5">Choose a city, then choose how you arrive. Economy, Business or First.</p></div>
        <div class="aircraft-chip">${ps("jet")}${i.travel.aircraft}</div>
      </div>
      <div class="destination-grid">${wo.map(a=>vv(a,a.id===Tn.selectedDestination)).join("")}</div>
      ${r||`<div class="panel-card" style="margin-top:18px;text-align:center;padding:28px"><p style="margin:0;font-family:'Cormorant',serif;font-size:20px;color:rgba(243,235,221,.7)">Pick a city above to see Economy, Business and First Class.</p></div>`}
    </section>
    <section class="panel-section split-even">
      <div class="panel-card"><span class="section-label">YOUR TERMINAL</span><div class="profile-line"><span>Departure</span><b>${To[i.id].city} · ${To[i.id].code}</b></div><div class="profile-line"><span>Arrival</span><b>${i.travel.terminal}</b></div></div>
      <div class="panel-card warm"><span class="section-label">HOW YOU FLY</span><div class="profile-line"><span>Aircraft</span><b>${i.travel.aircraft}</b></div><div class="profile-line"><span>Suggested cabin</span><b>${ci[i.travel.defaultCabin].label}</b></div></div>
    </section>`}function Mv(i,e){const t=i.businesses.reduce((r,a)=>r+Jh(a.daily),0),n=Math.max(0,i.dailyIncome-t);return`
    <section class="panel-section">
      <div class="ledger-hero">
        <div><small>AVAILABLE FUNDS</small><span class="big-money">${wt(e.cash)}</span></div>
        <div class="ledger-hero-right"><b>+${wt(i.dailyIncome)} / day</b><small>Net worth ${wt(i.netWorth)}</small></div>
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Income</h3><p>Day ${e.day} · ${il(e)}</p></div>
      <div class="list-card income-list">
        ${i.businesses.map(r=>`<div class="list-row"><div class="list-copy"><b>${r.name}</b><small>${r.sector} · ${r.share}</small></div><div class="list-value"><b>${r.daily}</b><small>daily</small></div></div>`).join("")}
        <div class="list-row"><div class="list-copy"><b>Salaries & investments</b><small>After tax and household costs</small></div><div class="list-value"><b>${wt(n)}</b><small>daily</small></div></div>
        <div class="list-row"><div class="list-copy"><b style="color:var(--gold-bright)">Total collected each day</b><small>Added when you end the day</small></div><div class="list-value"><b style="color:var(--gold-bright)">${wt(i.dailyIncome)}</b><small>net</small></div></div>
      </div>
      <div class="ledger-actions"><button id="panel-end-day" class="btn btn-gold">End the day · collect income <span class="btn-arrow">→</span></button></div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Jobs</h3><p>Work is part of the story</p></div>
      <div class="list-card">
        ${i.jobs.map(r=>`<div class="list-row"><div class="list-copy"><b>${r.member} · ${r.title}</b><small>${r.company}</small></div><div class="list-value"><b>${r.salary}</b><small>annual</small></div></div>`).join("")}
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Recent activity</h3><p>The household ledger</p></div>
      <div class="list-card">
        ${e.history.slice(0,8).map(r=>`<div class="list-row"><div class="list-num">${String(r.day).padStart(2,"0")}</div><div class="list-copy"><b>${r.title}</b><small>${r.detail}</small></div></div>`).join("")}
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head"><h3>Insurance & protection</h3></div>
      <div class="list-card">
        ${i.insurance.map(r=>`<div class="list-row"><div class="asset-icon" style="width:27px;height:27px;border-radius:8px">${ps("shield")}</div><div class="list-copy"><b>${r.name}</b><small>${r.detail}</small></div><div class="list-value"><b>${r.cover}</b><small>active</small></div></div>`).join("")}
      </div>
    </section>`}function Sv(i,e,t){const n=fn(),r=gi(),a=ci[e],o=e==="first"?16:e==="business"?12:8,l=e==="first"?6:e==="business"?3:1;r.cash-=t,r.happiness=Math.min(100,r.happiness+o),r.prestige=Math.min(100,r.prestige+l),r.history.unshift({day:r.day,title:`${a.label} to ${i.city}`,detail:`${wt(t)} · ${n.travel.aircraft} · +${o} happiness.`}),r.history.length>18&&(r.history.length=18),r.trips.unshift({destination:i.id,cabin:e,price:t,day:r.day,happiness:o,standing:l}),r.trips.length>12&&(r.trips.length=12),vn={dest:i,cabinId:e,price:t,happiness:o,standing:l,origin:To[n.id]},ms(),pi(),Ii(),re("game-ui").classList.add("hidden"),re("vacation-screen").classList.add("hidden"),yv()}function yv(){if(!vn)return;const i=vn,e=fn(),t=ci[i.cabinId];Ut.showFlight(e,i.dest),re("flight-screen").classList.remove("hidden"),re("flight-class-label").textContent=`${t.label.toUpperCase()} CLASS`,re("flight-from").textContent=i.origin.code,re("flight-to").textContent=i.dest.code,re("flight-route-label").textContent=`${i.origin.city.toUpperCase()} → ${i.dest.city.toUpperCase()}`,re("flight-duration").textContent=i.dest.hours,re("flight-perks").innerHTML=t.perks.map(c=>`<span>${c}</span>`).join(""),re("flight-status-text").textContent="Wheels up.",re("flight-percent").textContent="0%",re("flight-progress-bar").style.width="0%";const n=document.querySelector(".route-plane");n&&(n.style.left="0%");const r=++Ao,a=Li?1200:6200,o=performance.now();It.swoosh();const l=c=>{if(r!==Ao||!vn)return;const h=Math.min(1,(c-o)/a),d=Math.round(h*100);re("flight-progress-bar").style.width=`${d}%`,re("flight-percent").textContent=`${d}%`,n&&(n.style.left=`${d}%`);let u="Wheels up.";d>16&&(u="Climbing to cruise."),d>36&&(u="Somewhere over the ocean."),d>58&&(u="Cabin lights dim. Dinner is served."),d>78&&(u="Beginning the descent."),d>93&&(u=`Arriving in ${i.dest.city}.`),re("flight-status-text").textContent=u,h<1?requestAnimationFrame(l):rd()};requestAnimationFrame(l)}function rd(){if(!vn)return;Ao++;const i=vn;fn();const e=ci[i.cabinId];re("flight-screen").classList.add("hidden"),Ut.showDestination(i.dest),re("vacation-class").textContent=`${e.label.toUpperCase()} CLASS`,re("vacation-city").textContent=i.dest.city,re("vacation-country").textContent=`${i.dest.country} · ${i.dest.code}`,re("vacation-note").textContent=i.dest.note,re("vacation-hotel").textContent=i.dest.hotel,re("vacation-signature").textContent=i.dest.signature,re("vacation-restaurant").textContent=i.dest.restaurant,re("vacation-flight-meta").textContent=`${e.label.toUpperCase()} · ${i.dest.hours} · ${wt(i.price)}`,re("vacation-bonus").textContent=`+${i.happiness} happiness · +${i.standing} standing`,re("vacation-screen").classList.remove("hidden"),It.arrival(),pi()}function bv(){if(!vn)return;const i=vn,e=fn(),t=gi();re("vacation-screen").classList.add("hidden"),re("game-ui").classList.remove("hidden"),vn=null,Ut.returnHome(!0),Ut.setDayMood(t.day),ms(),pi(),It.chime(),Di("Home again",`${e.house.name} is exactly where you left it. ${i.dest.city} is already a memory.`,"⌂")}function ad(){vn||(Ii(),re("switch-options").innerHTML=Pi.map(i=>{const e=Kh(i.id);return`
      <button class="switch-option ${i.id===Cn?"current":""}" data-switch="${i.id}">
        <span class="switch-option-left"><span class="mini-crest">${i.crest}</span><span><b>${i.familyName}</b><small>${i.tier} · day ${e.day}</small></span></span>
        <span class="so-money">${$r(e.cash)}</span>
      </button>`}).join(""),re("switch-modal").classList.remove("hidden"),re("switch-options").querySelectorAll("[data-switch]").forEach(i=>{i.addEventListener("click",()=>Ev(i.dataset.switch))}),It.click())}function Hs(){re("switch-modal").classList.add("hidden")}function Ev(i){if(i===Cn){Hs();return}Hs(),pi(),Cn=i;const e=fn(),t=gi();Ut.setFamily(e,"home",!0),Ut.setDayMood(t.day),Ut.controls.autoRotate=!1,ms(),pi(),It.chime(),Di(`Now playing ${e.familyName}`,`${e.house.name} · ${wt(t.cash)} available · day ${t.day}.`,e.crest),document.querySelectorAll(".dock-item").forEach(n=>n.classList.toggle("active",n.dataset.view==="estate"))}re("enter-btn").addEventListener("click",()=>td());re("resume-btn").addEventListener("click",()=>td({resume:!0}));re("sound-btn").addEventListener("click",()=>{It.setEnabled(!It.enabled);try{localStorage.setItem(Yh,It.enabled?"0":"1")}catch{}jh(),It.enabled&&It.chime()});re("tutorial-close").addEventListener("click",()=>re("tutorial").classList.add("hide"));re("day-chip").addEventListener("click",sl);re("next-day-btn").addEventListener("click",sl);re("wealth-btn").addEventListener("click",()=>rl("ledger"));re("house-btn").addEventListener("click",ad);re("moment-btn").addEventListener("click",nd);document.querySelectorAll(".dock-item").forEach(i=>{i.addEventListener("click",()=>{if(i.dataset.view==="estate"){Ii();return}rl(i.dataset.view)})});re("panel-close").addEventListener("click",Ii);document.querySelector(".panel-backdrop").addEventListener("click",Ii);re("skip-flight").addEventListener("click",rd);re("return-home").addEventListener("click",bv);re("switch-cancel").addEventListener("click",Hs);document.querySelector(".switch-backdrop").addEventListener("click",Hs);document.addEventListener("keydown",i=>{i.key==="Escape"&&(re("switch-modal").classList.contains("hidden")?re("panel").classList.contains("hidden")||Ii():Hs())});document.addEventListener("pointerdown",i=>{It.ctx||It.init(),i.target.closest("button")&&It.enabled&&It.click()});let Ei=null;re("scene").addEventListener("pointerdown",i=>{Ei={x:i.clientX,y:i.clientY,t:performance.now(),pointerId:i.pointerId}});re("scene").addEventListener("pointerup",i=>{if(!Ei||Ei.pointerId!==i.pointerId)return;const e=Math.hypot(i.clientX-Ei.x,i.clientY-Ei.y),t=performance.now()-Ei.t;if(Ei=null,e>9||t>700||re("game-ui").classList.contains("hidden")||!re("panel").classList.contains("hidden")||!re("switch-modal").classList.contains("hidden"))return;const n=Ut.pick(i.clientX,i.clientY);if(n!==null){rl("family");const r=document.querySelectorAll(".member-card")[n];r&&(r.style.borderColor="rgba(216,178,116,.6)",r.scrollIntoView({behavior:Li?"auto":"smooth",block:"center"}),setTimeout(()=>r.style.borderColor="",1700))}});window.addEventListener("resize",()=>{re("panel").classList.contains("hidden")&&(Ut.controls.enabled=!0)});try{It.enabled=localStorage.getItem(Yh)!=="1"}catch{}jh();Ut.controls.enabled=!0;cv();
