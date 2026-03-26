var qv=Object.defineProperty;var Kv=(n,e,t)=>e in n?qv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var dt=(n,e,t)=>Kv(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sf(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Rt={},Lr=[],Si=()=>{},zm=()=>!1,Ll=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Pl=n=>n.startsWith("onUpdate:"),Yt=Object.assign,bf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zv=Object.prototype.hasOwnProperty,gt=(n,e)=>Zv.call(n,e),Ge=Array.isArray,Pr=n=>sa(n)==="[object Map]",Wm=n=>sa(n)==="[object Set]",Ph=n=>sa(n)==="[object Date]",qe=n=>typeof n=="function",Bt=n=>typeof n=="string",Ai=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Xm=n=>(xt(n)||qe(n))&&qe(n.then)&&qe(n.catch),$m=Object.prototype.toString,sa=n=>$m.call(n),Jv=n=>sa(n).slice(8,-1),jm=n=>sa(n)==="[object Object]",Tf=n=>Bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ro=Sf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Il=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Qv=/-\w/g,vn=Il(n=>n.replace(Qv,e=>e.slice(1).toUpperCase())),e0=/\B([A-Z])/g,ir=Il(n=>n.replace(e0,"-$1").toLowerCase()),Dl=Il(n=>n.charAt(0).toUpperCase()+n.slice(1)),Jl=Il(n=>n?`on${Dl(n)}`:""),Ei=(n,e)=>!Object.is(n,e),Ql=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ym=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},t0=n=>{const e=parseFloat(n);return isNaN(e)?n:e},n0=n=>{const e=Bt(n)?Number(n):NaN;return isNaN(e)?n:e};let Ih;const Nl=()=>Ih||(Ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function An(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Bt(i)?o0(i):An(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Bt(n)||xt(n))return n}const i0=/;(?![^(]*\))/g,s0=/:([^]+)/,r0=/\/\*[^]*?\*\//g;function o0(n){const e={};return n.replace(r0,"").split(i0).forEach(t=>{if(t){const i=t.split(s0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ei(n){let e="";if(Bt(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=ei(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const a0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",l0=Sf(a0);function qm(n){return!!n||n===""}function c0(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Af(n[i],e[i]);return t}function Af(n,e){if(n===e)return!0;let t=Ph(n),i=Ph(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Ai(n),i=Ai(e),t||i)return n===e;if(t=Ge(n),i=Ge(e),t||i)return t&&i?c0(n,e):!1;if(t=xt(n),i=xt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Af(n[o],e[o]))return!1}}return String(n)===String(e)}const Km=n=>!!(n&&n.__v_isRef===!0),ye=n=>Bt(n)?n:n==null?"":Ge(n)||xt(n)&&(n.toString===$m||!qe(n.toString))?Km(n)?ye(n.value):JSON.stringify(n,Zm,2):String(n),Zm=(n,e)=>Km(e)?Zm(n,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ec(i,r)+" =>"]=s,t),{})}:Wm(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ec(t))}:Ai(e)?ec(e):xt(e)&&!Ge(e)&&!jm(e)?String(e):e,ec=(n,e="")=>{var t;return Ai(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tn;class Jm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Tn;try{return Tn=this,e()}finally{Tn=t}}}on(){++this._on===1&&(this.prevScope=Tn,Tn=this)}off(){this._on>0&&--this._on===0&&(Tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function u0(n){return new Jm(n)}function f0(){return Tn}let wt;const tc=new WeakSet;class Qm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tn&&Tn.active&&Tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tc.has(this)&&(tc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dh(this),ng(this);const e=wt,t=oi;wt=this,oi=!0;try{return this.fn()}finally{ig(this),wt=e,oi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cf(e);this.deps=this.depsTail=void 0,Dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){su(this)&&this.run()}get dirty(){return su(this)}}let eg=0,Co,Lo;function tg(n,e=!1){if(n.flags|=8,e){n.next=Lo,Lo=n;return}n.next=Co,Co=n}function wf(){eg++}function Rf(){if(--eg>0)return;if(Lo){let e=Lo;for(Lo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Co;){let e=Co;for(Co=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ng(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ig(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Cf(i),h0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function su(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function sg(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ho)||(n.globalVersion=Ho,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!su(n))))return;n.flags|=2;const e=n.dep,t=wt,i=oi;wt=n,oi=!0;try{ng(n);const s=n.fn(n._value);(e.version===0||Ei(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{wt=t,oi=i,ig(n),n.flags&=-3}}function Cf(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Cf(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function h0(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let oi=!0;const rg=[];function Ji(){rg.push(oi),oi=!1}function Qi(){const n=rg.pop();oi=n===void 0?!0:n}function Dh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=wt;wt=void 0;try{e()}finally{wt=t}}}let Ho=0;class d0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!wt||!oi||wt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==wt)t=this.activeLink=new d0(wt,this),wt.deps?(t.prevDep=wt.depsTail,wt.depsTail.nextDep=t,wt.depsTail=t):wt.deps=wt.depsTail=t,og(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=wt.depsTail,t.nextDep=void 0,wt.depsTail.nextDep=t,wt.depsTail=t,wt.deps===t&&(wt.deps=i)}return t}trigger(e){this.version++,Ho++,this.notify(e)}notify(e){wf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Rf()}}}function og(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)og(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ru=new WeakMap,qs=Symbol(""),ou=Symbol(""),Vo=Symbol("");function an(n,e,t){if(oi&&wt){let i=ru.get(n);i||ru.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Lf),s.map=i,s.key=t),s.track()}}function $i(n,e,t,i,s,r){const o=ru.get(n);if(!o){Ho++;return}const a=l=>{l&&l.trigger()};if(wf(),e==="clear")o.forEach(a);else{const l=Ge(n),c=l&&Tf(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Vo||!Ai(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Vo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(qs)),Pr(n)&&a(o.get(ou)));break;case"delete":l||(a(o.get(qs)),Pr(n)&&a(o.get(ou)));break;case"set":Pr(n)&&a(o.get(qs));break}}Rf()}function or(n){const e=ct(n);return e===n?e:(an(e,"iterate",Vo),Xn(n)?e:e.map(li))}function Ol(n){return an(n=ct(n),"iterate",Vo),n}function vi(n,e){return es(n)?kr(Ks(n)?li(e):e):li(e)}const p0={__proto__:null,[Symbol.iterator](){return nc(this,Symbol.iterator,n=>vi(this,n))},concat(...n){return or(this).concat(...n.map(e=>Ge(e)?or(e):e))},entries(){return nc(this,"entries",n=>(n[1]=vi(this,n[1]),n))},every(n,e){return Ii(this,"every",n,e,void 0,arguments)},filter(n,e){return Ii(this,"filter",n,e,t=>t.map(i=>vi(this,i)),arguments)},find(n,e){return Ii(this,"find",n,e,t=>vi(this,t),arguments)},findIndex(n,e){return Ii(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ii(this,"findLast",n,e,t=>vi(this,t),arguments)},findLastIndex(n,e){return Ii(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ii(this,"forEach",n,e,void 0,arguments)},includes(...n){return ic(this,"includes",n)},indexOf(...n){return ic(this,"indexOf",n)},join(n){return or(this).join(n)},lastIndexOf(...n){return ic(this,"lastIndexOf",n)},map(n,e){return Ii(this,"map",n,e,void 0,arguments)},pop(){return co(this,"pop")},push(...n){return co(this,"push",n)},reduce(n,...e){return Nh(this,"reduce",n,e)},reduceRight(n,...e){return Nh(this,"reduceRight",n,e)},shift(){return co(this,"shift")},some(n,e){return Ii(this,"some",n,e,void 0,arguments)},splice(...n){return co(this,"splice",n)},toReversed(){return or(this).toReversed()},toSorted(n){return or(this).toSorted(n)},toSpliced(...n){return or(this).toSpliced(...n)},unshift(...n){return co(this,"unshift",n)},values(){return nc(this,"values",n=>vi(this,n))}};function nc(n,e,t){const i=Ol(n),s=i[e]();return i!==n&&!Xn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const m0=Array.prototype;function Ii(n,e,t,i,s,r){const o=Ol(n),a=o!==n&&!Xn(n),l=o[e];if(l!==m0[e]){const f=l.apply(n,r);return a?li(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,vi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Nh(n,e,t,i){const s=Ol(n),r=s!==n&&!Xn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=vi(n,c)),t.call(this,c,vi(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?vi(n,l):l}function ic(n,e,t){const i=ct(n);an(i,"iterate",Vo);const s=i[e](...t);return(s===-1||s===!1)&&Df(t[0])?(t[0]=ct(t[0]),i[e](...t)):s}function co(n,e,t=[]){Ji(),wf();const i=ct(n)[e].apply(n,t);return Rf(),Qi(),i}const g0=Sf("__proto__,__v_isRef,__isVue"),ag=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ai));function _0(n){Ai(n)||(n=String(n));const e=ct(this);return an(e,"has",n),e.hasOwnProperty(n)}class lg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?w0:hg:r?fg:ug).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!s){let l;if(o&&(l=p0[t]))return l;if(t==="hasOwnProperty")return _0}const a=Reflect.get(e,t,tn(e)?e:i);if((Ai(t)?ag.has(t):g0(t))||(s||an(e,"get",t),r))return a;if(tn(a)){const l=o&&Tf(t)?a:a.value;return s&&xt(l)?Go(l):l}return xt(a)?s?Go(a):Ul(a):a}}class cg extends lg{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ge(e)&&Tf(t);if(!this._isShallow){const c=es(r);if(!Xn(i)&&!es(i)&&(r=ct(r),i=ct(i)),!o&&tn(r)&&!tn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:gt(e,t),l=Reflect.set(e,t,i,tn(e)?e:s);return e===ct(s)&&(a?Ei(i,r)&&$i(e,"set",t,i):$i(e,"add",t,i)),l}deleteProperty(e,t){const i=gt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&$i(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Ai(t)||!ag.has(t))&&an(e,"has",t),i}ownKeys(e){return an(e,"iterate",Ge(e)?"length":qs),Reflect.ownKeys(e)}}class v0 extends lg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const x0=new cg,y0=new v0,E0=new cg(!0);const au=n=>n,va=n=>Reflect.getPrototypeOf(n);function M0(n,e,t){return function(...i){const s=this.__v_raw,r=ct(s),o=Pr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?au:e?kr:li;return!e&&an(r,"iterate",l?ou:qs),Yt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function xa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function S0(n,e){const t={get(s){const r=this.__v_raw,o=ct(r),a=ct(s);n||(Ei(s,a)&&an(o,"get",s),an(o,"get",a));const{has:l}=va(o),c=e?au:n?kr:li;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&an(ct(s),"iterate",qs),s.size},has(s){const r=this.__v_raw,o=ct(r),a=ct(s);return n||(Ei(s,a)&&an(o,"has",s),an(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ct(a),c=e?au:n?kr:li;return!n&&an(l,"iterate",qs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Yt(t,n?{add:xa("add"),set:xa("set"),delete:xa("delete"),clear:xa("clear")}:{add(s){const r=ct(this),o=va(r),a=ct(s),l=!e&&!Xn(s)&&!es(s)?a:s;return o.has.call(r,l)||Ei(s,l)&&o.has.call(r,s)||Ei(a,l)&&o.has.call(r,a)||(r.add(l),$i(r,"add",l,l)),this},set(s,r){!e&&!Xn(r)&&!es(r)&&(r=ct(r));const o=ct(this),{has:a,get:l}=va(o);let c=a.call(o,s);c||(s=ct(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ei(r,u)&&$i(o,"set",s,r):$i(o,"add",s,r),this},delete(s){const r=ct(this),{has:o,get:a}=va(r);let l=o.call(r,s);l||(s=ct(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&$i(r,"delete",s,void 0),c},clear(){const s=ct(this),r=s.size!==0,o=s.clear();return r&&$i(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=M0(s,n,e)}),t}function Pf(n,e){const t=S0(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(gt(t,s)&&s in i?t:i,s,r)}const b0={get:Pf(!1,!1)},T0={get:Pf(!1,!0)},A0={get:Pf(!0,!1)};const ug=new WeakMap,fg=new WeakMap,hg=new WeakMap,w0=new WeakMap;function R0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function C0(n){return n.__v_skip||!Object.isExtensible(n)?0:R0(Jv(n))}function Ul(n){return es(n)?n:If(n,!1,x0,b0,ug)}function dg(n){return If(n,!1,E0,T0,fg)}function Go(n){return If(n,!0,y0,A0,hg)}function If(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=C0(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Ks(n){return es(n)?Ks(n.__v_raw):!!(n&&n.__v_isReactive)}function es(n){return!!(n&&n.__v_isReadonly)}function Xn(n){return!!(n&&n.__v_isShallow)}function Df(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function L0(n){return!gt(n,"__v_skip")&&Object.isExtensible(n)&&Ym(n,"__v_skip",!0),n}const li=n=>xt(n)?Ul(n):n,kr=n=>xt(n)?Go(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function tt(n){return mg(n,!1)}function pg(n){return mg(n,!0)}function mg(n,e){return tn(n)?n:new P0(n,e)}class P0{constructor(e,t){this.dep=new Lf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:li(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Xn(e)||es(e);e=i?e:ct(e),Ei(e,t)&&(this._rawValue=e,this._value=i?e:li(e),this.dep.trigger())}}function Ue(n){return tn(n)?n.value:n}const I0={get:(n,e,t)=>e==="__v_raw"?n:Ue(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return tn(s)&&!tn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function gg(n){return Ks(n)?n:new Proxy(n,I0)}class D0{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Lf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ho-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return tg(this,!0),!0}get value(){const e=this.dep.track();return sg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function N0(n,e,t=!1){let i,s;return qe(n)?i=n:(i=n.get,s=n.set),new D0(i,s,t)}const ya={},fl=new WeakMap;let Gs;function O0(n,e=!1,t=Gs){if(t){let i=fl.get(t);i||fl.set(t,i=[]),i.push(n)}}function U0(n,e,t=Rt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=v=>s?v:Xn(v)||s===!1||s===0?_s(v,1):_s(v);let u,f,h,p,g=!1,_=!1;if(tn(n)?(f=()=>n.value,g=Xn(n)):Ks(n)?(f=()=>c(n),g=!0):Ge(n)?(_=!0,g=n.some(v=>Ks(v)||Xn(v)),f=()=>n.map(v=>{if(tn(v))return v.value;if(Ks(v))return c(v);if(qe(v))return l?l(v,2):v()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ji();try{h()}finally{Qi()}}const v=Gs;Gs=u;try{return l?l(n,3,[p]):n(p)}finally{Gs=v}}:f=Si,e&&s){const v=f,C=s===!0?1/0:s;f=()=>_s(v(),C)}const m=f0(),d=()=>{u.stop(),m&&m.active&&bf(m.effects,u)};if(r&&e){const v=e;e=(...C)=>{v(...C),d()}}let x=_?new Array(n.length).fill(ya):ya;const M=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const C=u.run();if(s||g||(_?C.some((L,A)=>Ei(L,x[A])):Ei(C,x))){h&&h();const L=Gs;Gs=u;try{const A=[C,x===ya?void 0:_&&x[0]===ya?[]:x,p];x=C,l?l(e,3,A):e(...A)}finally{Gs=L}}}else u.run()};return a&&a(M),u=new Qm(f),u.scheduler=o?()=>o(M,!1):M,p=v=>O0(v,!1,u),h=u.onStop=()=>{const v=fl.get(u);if(v){if(l)l(v,4);else for(const C of v)C();fl.delete(u)}},e?i?M(!0):x=u.run():o?o(M.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function _s(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,tn(n))_s(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)_s(n[i],e,t);else if(Wm(n)||Pr(n))n.forEach(i=>{_s(i,e,t)});else if(jm(n)){for(const i in n)_s(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&_s(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ra(n,e,t,i){try{return i?n(...i):n()}catch(s){Fl(s,e,t)}}function ci(n,e,t,i){if(qe(n)){const s=ra(n,e,t,i);return s&&Xm(s)&&s.catch(r=>{Fl(r,e,t)}),s}if(Ge(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ci(n[r],e,t,i));return s}}function Fl(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Rt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Ji(),ra(r,null,10,[n,l,c]),Qi();return}}F0(n,t,s,i,o)}function F0(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const gn=[];let gi=-1;const Ir=[];let ps=null,br=0;const _g=Promise.resolve();let hl=null;function vg(n){const e=hl||_g;return n?e.then(this?n.bind(this):n):e}function k0(n){let e=gi+1,t=gn.length;for(;e<t;){const i=e+t>>>1,s=gn[i],r=zo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Nf(n){if(!(n.flags&1)){const e=zo(n),t=gn[gn.length-1];!t||!(n.flags&2)&&e>=zo(t)?gn.push(n):gn.splice(k0(e),0,n),n.flags|=1,xg()}}function xg(){hl||(hl=_g.then(Eg))}function B0(n){Ge(n)?Ir.push(...n):ps&&n.id===-1?ps.splice(br+1,0,n):n.flags&1||(Ir.push(n),n.flags|=1),xg()}function Oh(n,e,t=gi+1){for(;t<gn.length;t++){const i=gn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;gn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function yg(n){if(Ir.length){const e=[...new Set(Ir)].sort((t,i)=>zo(t)-zo(i));if(Ir.length=0,ps){ps.push(...e);return}for(ps=e,br=0;br<ps.length;br++){const t=ps[br];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ps=null,br=0}}const zo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Eg(n){try{for(gi=0;gi<gn.length;gi++){const e=gn[gi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ra(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gi<gn.length;gi++){const e=gn[gi];e&&(e.flags&=-2)}gi=-1,gn.length=0,yg(),hl=null,(gn.length||Ir.length)&&Eg()}}let si=null,Mg=null;function dl(n){const e=si;return si=n,Mg=n&&n.type.__scopeId||null,e}function Ct(n,e=si,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&gl(-1);const r=dl(e);let o;try{o=n(...s)}finally{dl(r),i._d&&gl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ps(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ji(),ci(l,t,8,[n.el,a,n,e]),Qi())}}function Qa(n,e){if(cn){let t=cn.provides;const i=cn.parent&&cn.parent.provides;i===t&&(t=cn.provides=Object.create(i)),t[n]=e}}function $n(n,e,t=!1){const i=kf();if(i||Dr){let s=Dr?Dr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const H0=Symbol.for("v-scx"),V0=()=>$n(H0);function Zs(n,e,t){return Sg(n,e,t)}function Sg(n,e,t=Rt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Yt({},t),l=e&&i||!e&&r!=="post";let c;if($o){if(r==="sync"){const p=V0();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Si,p.resume=Si,p.pause=Si,p}}const u=cn;a.call=(p,g,_)=>ci(p,u,g,_);let f=!1;r==="post"?a.scheduler=p=>{bn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Nf(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=U0(n,e,a);return $o&&(c?c.push(h):l&&h()),h}function G0(n,e,t){const i=this.proxy,s=Bt(n)?n.includes(".")?bg(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=la(this),a=Sg(s,r.bind(i),t);return o(),a}function bg(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const z0=Symbol("_vte"),Tg=n=>n.__isTeleport,_i=Symbol("_leaveCb"),uo=Symbol("_enterCb");function W0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return no(()=>{n.isMounted=!0}),Dg(()=>{n.isUnmounting=!0}),n}const Hn=[Function,Array],Ag={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Hn,onEnter:Hn,onAfterEnter:Hn,onEnterCancelled:Hn,onBeforeLeave:Hn,onLeave:Hn,onAfterLeave:Hn,onLeaveCancelled:Hn,onBeforeAppear:Hn,onAppear:Hn,onAfterAppear:Hn,onAppearCancelled:Hn},wg=n=>{const e=n.subTree;return e.component?wg(e.component):e},X0={name:"BaseTransition",props:Ag,setup(n,{slots:e}){const t=kf(),i=W0();return()=>{const s=e.default&&Lg(e.default(),!0);if(!s||!s.length)return;const r=Rg(s),o=ct(n),{mode:a}=o;if(i.isLeaving)return sc(r);const l=Uh(r);if(!l)return sc(r);let c=lu(l,o,i,t,f=>c=f);l.type!==_n&&Wo(l,c);let u=t.subTree&&Uh(t.subTree);if(u&&u.type!==_n&&!Ws(u,l)&&wg(t).type!==_n){let f=lu(u,o,i,t);if(Wo(u,f),a==="out-in"&&l.type!==_n)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},sc(r);a==="in-out"&&l.type!==_n?f.delayLeave=(h,p,g)=>{const _=Cg(i,u);_[String(u.key)]=u,h[_i]=()=>{p(),h[_i]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Rg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==_n){e=t;break}}return e}const $0=X0;function Cg(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function lu(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:d,onAfterAppear:x,onAppearCancelled:M}=e,v=String(n.key),C=Cg(t,n),L=(T,b)=>{T&&ci(T,i,9,b)},A=(T,b)=>{const F=b[1];L(T,b),Ge(T)?T.every(V=>V.length<=1)&&F():T.length<=1&&F()},H={mode:o,persisted:a,beforeEnter(T){let b=l;if(!t.isMounted)if(r)b=m||l;else return;T[_i]&&T[_i](!0);const F=C[v];F&&Ws(n,F)&&F.el[_i]&&F.el[_i](),L(b,[T])},enter(T){if(C[v]===n)return;let b=c,F=u,V=f;if(!t.isMounted)if(r)b=d||c,F=x||u,V=M||f;else return;let z=!1;T[uo]=ae=>{z||(z=!0,ae?L(V,[T]):L(F,[T]),H.delayedLeave&&H.delayedLeave(),T[uo]=void 0)};const ne=T[uo].bind(null,!1);b?A(b,[T,ne]):ne()},leave(T,b){const F=String(n.key);if(T[uo]&&T[uo](!0),t.isUnmounting)return b();L(h,[T]);let V=!1;T[_i]=ne=>{V||(V=!0,b(),ne?L(_,[T]):L(g,[T]),T[_i]=void 0,C[F]===n&&delete C[F])};const z=T[_i].bind(null,!1);C[F]=n,p?A(p,[T,z]):z()},clone(T){const b=lu(T,e,t,i,s);return s&&s(b),b}};return H}function sc(n){if(kl(n))return n=Ts(n),n.children=null,n}function Uh(n){if(!kl(n))return Tg(n.type)&&n.children?Rg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function Wo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Wo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Lg(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Xt?(o.patchFlag&128&&s++,i=i.concat(Lg(o.children,e,a))):(e||o.type!==_n)&&i.push(a!=null?Ts(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function oa(n,e){return qe(n)?Yt({name:n.name},e,{setup:n}):n}function Pg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const pl=new WeakMap;function Po(n,e,t,i,s=!1){if(Ge(n)){n.forEach((_,m)=>Po(_,e&&(Ge(e)?e[m]:e),t,i,s));return}if(Io(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Po(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Bf(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Rt?a.refs={}:a.refs,f=a.setupState,h=ct(f),p=f===Rt?zm:_=>Fh(u,_)?!1:gt(h,_),g=(_,m)=>!(m&&Fh(u,m));if(c!=null&&c!==l){if(kh(e),Bt(c))u[c]=null,p(c)&&(f[c]=null);else if(tn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(qe(l))ra(l,a,12,[o,u]);else{const _=Bt(l),m=tn(l);if(_||m){const d=()=>{if(n.f){const x=_?p(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ge(x)&&bf(x,r);else if(Ge(x))x.includes(r)||x.push(r);else if(_)u[l]=[r],p(l)&&(f[l]=u[l]);else{const M=[r];g(l,n.k)&&(l.value=M),n.k&&(u[n.k]=M)}}else _?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{d(),pl.delete(n)};x.id=-1,pl.set(n,x),bn(x,t)}else kh(n),d()}}}function kh(n){const e=pl.get(n);e&&(e.flags|=8,pl.delete(n))}Nl().requestIdleCallback;Nl().cancelIdleCallback;const Io=n=>!!n.type.__asyncLoader,kl=n=>n.type.__isKeepAlive;function j0(n,e){Ig(n,"a",e)}function Y0(n,e){Ig(n,"da",e)}function Ig(n,e,t=cn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Bl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)kl(s.parent.vnode)&&q0(i,e,t,s),s=s.parent}}function q0(n,e,t,i){const s=Bl(e,n,i,!0);bs(()=>{bf(i[e],s)},t)}function Bl(n,e,t=cn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ji();const a=la(t),l=ci(e,t,n,o);return a(),Qi(),l});return i?s.unshift(r):s.push(r),r}}const is=n=>(e,t=cn)=>{(!$o||n==="sp")&&Bl(n,(...i)=>e(...i),t)},K0=is("bm"),no=is("m"),Z0=is("bu"),J0=is("u"),Dg=is("bum"),bs=is("um"),Q0=is("sp"),ex=is("rtg"),tx=is("rtc");function nx(n,e=cn){Bl("ec",n,e)}const ix="components";function Ng(n,e){return rx(ix,n,!0,e)||n}const sx=Symbol.for("v-ndc");function rx(n,e,t=!0,i=!1){const s=si||cn;if(s){const r=s.type;{const a=zx(r,!1);if(a&&(a===e||a===vn(e)||a===Dl(vn(e))))return r}const o=Bh(s[n]||r[n],e)||Bh(s.appContext[n],e);return!o&&i?r:o}}function Bh(n,e){return n&&(n[e]||n[vn(e)]||n[Dl(vn(e))])}function Og(n,e,t,i){let s;const r=t&&t[i],o=Ge(n);if(o||Bt(n)){const a=o&&Ks(n);let l=!1,c=!1;a&&(l=!Xn(n),c=es(n),n=Ol(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?kr(li(n[u])):li(n[u]):n[u],u,void 0,r&&r[u])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(xt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r&&r[l]));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r&&r[l])}}else s=[];return t&&(t[i]=s),s}const cu=n=>n?t_(n)?Bf(n):cu(n.parent):null,Do=Yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>cu(n.parent),$root:n=>cu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fg(n),$forceUpdate:n=>n.f||(n.f=()=>{Nf(n.update)}),$nextTick:n=>n.n||(n.n=vg.bind(n.proxy)),$watch:n=>G0.bind(n)}),rc=(n,e)=>n!==Rt&&!n.__isScriptSetup&&gt(n,e),ox={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(rc(i,e))return o[e]=1,i[e];if(s!==Rt&&gt(s,e))return o[e]=2,s[e];if(gt(r,e))return o[e]=3,r[e];if(t!==Rt&&gt(t,e))return o[e]=4,t[e];uu&&(o[e]=0)}}const c=Do[e];let u,f;if(c)return e==="$attrs"&&an(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Rt&&gt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return rc(s,e)?(s[e]=t,!0):i!==Rt&&gt(i,e)?(i[e]=t,!0):gt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Rt&&a[0]!=="$"&&gt(n,a)||rc(e,a)||gt(r,a)||gt(i,a)||gt(Do,a)||gt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:gt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hh(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let uu=!0;function ax(n){const e=Fg(n),t=n.proxy,i=n.ctx;uu=!1,e.beforeCreate&&Vh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:x,destroyed:M,unmounted:v,render:C,renderTracked:L,renderTriggered:A,errorCaptured:H,serverPrefetch:T,expose:b,inheritAttrs:F,components:V,directives:z,filters:ne}=e;if(c&&lx(c,i,null),o)for(const oe in o){const Y=o[oe];qe(Y)&&(i[oe]=Y.bind(t))}if(s){const oe=s.call(t,t);xt(oe)&&(n.data=Ul(oe))}if(uu=!0,r)for(const oe in r){const Y=r[oe],ge=qe(Y)?Y.bind(t,t):qe(Y.get)?Y.get.bind(t,t):Si,ce=!qe(Y)&&qe(Y.set)?Y.set.bind(t):Si,ue=un({get:ge,set:ce});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>ue.value,set:Ee=>ue.value=Ee})}if(a)for(const oe in a)Ug(a[oe],i,t,oe);if(l){const oe=qe(l)?l.call(t):l;Reflect.ownKeys(oe).forEach(Y=>{Qa(Y,oe[Y])})}u&&Vh(u,n,"c");function Q(oe,Y){Ge(Y)?Y.forEach(ge=>oe(ge.bind(t))):Y&&oe(Y.bind(t))}if(Q(K0,f),Q(no,h),Q(Z0,p),Q(J0,g),Q(j0,_),Q(Y0,m),Q(nx,H),Q(tx,L),Q(ex,A),Q(Dg,x),Q(bs,v),Q(Q0,T),Ge(b))if(b.length){const oe=n.exposed||(n.exposed={});b.forEach(Y=>{Object.defineProperty(oe,Y,{get:()=>t[Y],set:ge=>t[Y]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Si&&(n.render=C),F!=null&&(n.inheritAttrs=F),V&&(n.components=V),z&&(n.directives=z),T&&Pg(n)}function lx(n,e,t=Si){Ge(n)&&(n=fu(n));for(const i in n){const s=n[i];let r;xt(s)?"default"in s?r=$n(s.from||i,s.default,!0):r=$n(s.from||i):r=$n(s),tn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Vh(n,e,t){ci(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ug(n,e,t,i){let s=i.includes(".")?bg(t,i):()=>t[i];if(Bt(n)){const r=e[n];qe(r)&&Zs(s,r)}else if(qe(n))Zs(s,n.bind(t));else if(xt(n))if(Ge(n))n.forEach(r=>Ug(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&Zs(s,r,n)}}function Fg(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ml(l,c,o,!0)),ml(l,e,o)),xt(e)&&r.set(e,l),l}function ml(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ml(n,r,t,!0),s&&s.forEach(o=>ml(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=cx[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const cx={data:Gh,props:zh,emits:zh,methods:To,computed:To,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:To,directives:To,watch:fx,provide:Gh,inject:ux};function Gh(n,e){return e?n?function(){return Yt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function ux(n,e){return To(fu(n),fu(e))}function fu(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function dn(n,e){return n?[...new Set([].concat(n,e))]:e}function To(n,e){return n?Yt(Object.create(null),n,e):e}function zh(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:Yt(Object.create(null),Hh(n),Hh(e??{})):e}function fx(n,e){if(!n)return e;if(!e)return n;const t=Yt(Object.create(null),n);for(const i in e)t[i]=dn(n[i],e[i]);return t}function kg(){return{app:null,config:{isNativeTag:zm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hx=0;function dx(n,e){return function(i,s=null){qe(i)||(i=Yt({},i)),s!=null&&!xt(s)&&(s=null);const r=kg(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:hx++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xx,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Ke(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Bf(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ci(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Dr;Dr=c;try{return u()}finally{Dr=f}}};return c}}let Dr=null;const px=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${vn(e)}Modifiers`]||n[`${ir(e)}Modifiers`];function mx(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Rt;let s=t;const r=e.startsWith("update:"),o=r&&px(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Bt(u)?u.trim():u)),o.number&&(s=t.map(t0)));let a,l=i[a=Jl(e)]||i[a=Jl(vn(e))];!l&&r&&(l=i[a=Jl(ir(e))]),l&&ci(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ci(c,n,6,s)}}const gx=new WeakMap;function Bg(n,e,t=!1){const i=t?gx:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=Bg(c,e,!0);u&&(a=!0,Yt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(xt(n)&&i.set(n,null),null):(Ge(r)?r.forEach(l=>o[l]=null):Yt(o,r),xt(n)&&i.set(n,o),o)}function Hl(n,e){return!n||!Ll(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(n,e[0].toLowerCase()+e.slice(1))||gt(n,ir(e))||gt(n,e))}function Wh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:_}=n,m=dl(n);let d,x;try{if(t.shapeFlag&4){const v=s||i,C=v;d=xi(c.call(C,v,u,f,p,h,g)),x=a}else{const v=e;d=xi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),x=e.props?a:_x(a)}}catch(v){No.length=0,Fl(v,n,1),d=Ke(_n)}let M=d;if(x&&_!==!1){const v=Object.keys(x),{shapeFlag:C}=M;v.length&&C&7&&(r&&v.some(Pl)&&(x=vx(x,r)),M=Ts(M,x,!1,!0))}return t.dirs&&(M=Ts(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Wo(M,t.transition),d=M,dl(m),d}const _x=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ll(t))&&((e||(e={}))[t]=n[t]);return e},vx=(n,e)=>{const t={};for(const i in n)(!Pl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function xx(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Xh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Hg(o,i,h)&&!Hl(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Xh(i,o,c):!0:!!o;return!1}function Xh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Hg(e,n,r)&&!Hl(t,r))return!0}return!1}function Hg(n,e,t){const i=n[t],s=e[t];return t==="style"&&xt(i)&&xt(s)?!Af(i,s):i!==s}function yx({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Vg={},Gg=()=>Object.create(Vg),zg=n=>Object.getPrototypeOf(n)===Vg;function Ex(n,e,t,i=!1){const s={},r=Gg();n.propsDefaults=Object.create(null),Wg(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:dg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Mx(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ct(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Hl(n.emitsOptions,h))continue;const p=e[h];if(l)if(gt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=vn(h);s[g]=hu(l,a,g,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{Wg(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!gt(e,f)&&((u=ir(f))===f||!gt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=hu(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!gt(e,f))&&(delete r[f],c=!0)}c&&$i(n.attrs,"set","")}function Wg(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ro(l))continue;const c=e[l];let u;s&&gt(s,u=vn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Hl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ct(t),c=a||Rt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=hu(s,l,f,c[f],n,!gt(c,f))}}return o}function hu(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=la(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ir(t))&&(i=!0))}return i}const Sx=new WeakMap;function Xg(n,e,t=!1){const i=t?Sx:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=f=>{l=!0;const[h,p]=Xg(f,e,!0);Yt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return xt(n)&&i.set(n,Lr),Lr;if(Ge(r))for(let u=0;u<r.length;u++){const f=vn(r[u]);$h(f)&&(o[f]=Rt)}else if(r)for(const u in r){const f=vn(u);if($h(f)){const h=r[u],p=o[f]=Ge(h)||qe(h)?{type:h}:Yt({},h),g=p.type;let _=!1,m=!0;if(Ge(g))for(let d=0;d<g.length;++d){const x=g[d],M=qe(x)&&x.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(m=!1)}else _=qe(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||gt(p,"default"))&&a.push(f)}}const c=[o,a];return xt(n)&&i.set(n,c),c}function $h(n){return n[0]!=="$"&&!Ro(n)}const Of=n=>n==="_"||n==="_ctx"||n==="$stable",Uf=n=>Ge(n)?n.map(xi):[xi(n)],bx=(n,e,t)=>{if(e._n)return e;const i=Ct((...s)=>Uf(e(...s)),t);return i._c=!1,i},$g=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Of(s))continue;const r=n[s];if(qe(r))e[s]=bx(s,r,i);else if(r!=null){const o=Uf(r);e[s]=()=>o}}},jg=(n,e)=>{const t=Uf(e);n.slots.default=()=>t},Yg=(n,e,t)=>{for(const i in e)(t||!Of(i))&&(n[i]=e[i])},Tx=(n,e,t)=>{const i=n.slots=Gg();if(n.vnode.shapeFlag&32){const s=e._;s?(Yg(i,e,t),t&&Ym(i,"_",s,!0)):$g(e,i)}else e&&jg(n,e)},Ax=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Rt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Yg(s,e,t):(r=!e.$stable,$g(e,s)),o=e}else e&&(jg(n,e),o={default:1});if(r)for(const a in s)!Of(a)&&o[a]==null&&delete s[a]},bn=Px;function wx(n){return Rx(n)}function Rx(n,e){const t=Nl();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Si,insertStaticContent:g}=n,_=(I,O,S,re=null,J=null,K=null,w=void 0,P=null,k=!!O.dynamicChildren)=>{if(I===O)return;I&&!Ws(I,O)&&(re=U(I),Ee(I,J,K,!0),I=null),O.patchFlag===-2&&(k=!1,O.dynamicChildren=null);const{type:y,ref:E,shapeFlag:N}=O;switch(y){case aa:m(I,O,S,re);break;case _n:d(I,O,S,re);break;case ac:I==null&&x(O,S,re,w);break;case Xt:V(I,O,S,re,J,K,w,P,k);break;default:N&1?C(I,O,S,re,J,K,w,P,k):N&6?z(I,O,S,re,J,K,w,P,k):(N&64||N&128)&&y.process(I,O,S,re,J,K,w,P,k,de)}E!=null&&J?Po(E,I&&I.ref,K,O||I,!O):E==null&&I&&I.ref!=null&&Po(I.ref,null,K,I,!0)},m=(I,O,S,re)=>{if(I==null)i(O.el=a(O.children),S,re);else{const J=O.el=I.el;O.children!==I.children&&c(J,O.children)}},d=(I,O,S,re)=>{I==null?i(O.el=l(O.children||""),S,re):O.el=I.el},x=(I,O,S,re)=>{[I.el,I.anchor]=g(I.children,O,S,re,I.el,I.anchor)},M=({el:I,anchor:O},S,re)=>{let J;for(;I&&I!==O;)J=h(I),i(I,S,re),I=J;i(O,S,re)},v=({el:I,anchor:O})=>{let S;for(;I&&I!==O;)S=h(I),s(I),I=S;s(O)},C=(I,O,S,re,J,K,w,P,k)=>{if(O.type==="svg"?w="svg":O.type==="math"&&(w="mathml"),I==null)L(O,S,re,J,K,w,P,k);else{const y=I.el&&I.el._isVueCE?I.el:null;try{y&&y._beginPatch(),T(I,O,J,K,w,P,k)}finally{y&&y._endPatch()}}},L=(I,O,S,re,J,K,w,P)=>{let k,y;const{props:E,shapeFlag:N,transition:D,dirs:B}=I;if(k=I.el=o(I.type,K,E&&E.is,E),N&8?u(k,I.children):N&16&&H(I.children,k,null,re,J,oc(I,K),w,P),B&&Ps(I,null,re,"created"),A(k,I,I.scopeId,w,re),E){for(const he in E)he!=="value"&&!Ro(he)&&r(k,he,null,E[he],K,re);"value"in E&&r(k,"value",null,E.value,K),(y=E.onVnodeBeforeMount)&&di(y,re,I)}B&&Ps(I,null,re,"beforeMount");const $=Cx(J,D);$&&D.beforeEnter(k),i(k,O,S),((y=E&&E.onVnodeMounted)||$||B)&&bn(()=>{try{y&&di(y,re,I),$&&D.enter(k),B&&Ps(I,null,re,"mounted")}finally{}},J)},A=(I,O,S,re,J)=>{if(S&&p(I,S),re)for(let K=0;K<re.length;K++)p(I,re[K]);if(J){let K=J.subTree;if(O===K||Jg(K.type)&&(K.ssContent===O||K.ssFallback===O)){const w=J.vnode;A(I,w,w.scopeId,w.slotScopeIds,J.parent)}}},H=(I,O,S,re,J,K,w,P,k=0)=>{for(let y=k;y<I.length;y++){const E=I[y]=P?Xi(I[y]):xi(I[y]);_(null,E,O,S,re,J,K,w,P)}},T=(I,O,S,re,J,K,w)=>{const P=O.el=I.el;let{patchFlag:k,dynamicChildren:y,dirs:E}=O;k|=I.patchFlag&16;const N=I.props||Rt,D=O.props||Rt;let B;if(S&&Is(S,!1),(B=D.onVnodeBeforeUpdate)&&di(B,S,O,I),E&&Ps(O,I,S,"beforeUpdate"),S&&Is(S,!0),(N.innerHTML&&D.innerHTML==null||N.textContent&&D.textContent==null)&&u(P,""),y?b(I.dynamicChildren,y,P,S,re,oc(O,J),K):w||Y(I,O,P,null,S,re,oc(O,J),K,!1),k>0){if(k&16)F(P,N,D,S,J);else if(k&2&&N.class!==D.class&&r(P,"class",null,D.class,J),k&4&&r(P,"style",N.style,D.style,J),k&8){const $=O.dynamicProps;for(let he=0;he<$.length;he++){const pe=$[he],ve=N[pe],De=D[pe];(De!==ve||pe==="value")&&r(P,pe,ve,De,J,S)}}k&1&&I.children!==O.children&&u(P,O.children)}else!w&&y==null&&F(P,N,D,S,J);((B=D.onVnodeUpdated)||E)&&bn(()=>{B&&di(B,S,O,I),E&&Ps(O,I,S,"updated")},re)},b=(I,O,S,re,J,K,w)=>{for(let P=0;P<O.length;P++){const k=I[P],y=O[P],E=k.el&&(k.type===Xt||!Ws(k,y)||k.shapeFlag&198)?f(k.el):S;_(k,y,E,null,re,J,K,w,!0)}},F=(I,O,S,re,J)=>{if(O!==S){if(O!==Rt)for(const K in O)!Ro(K)&&!(K in S)&&r(I,K,O[K],null,J,re);for(const K in S){if(Ro(K))continue;const w=S[K],P=O[K];w!==P&&K!=="value"&&r(I,K,P,w,J,re)}"value"in S&&r(I,"value",O.value,S.value,J)}},V=(I,O,S,re,J,K,w,P,k)=>{const y=O.el=I?I.el:a(""),E=O.anchor=I?I.anchor:a("");let{patchFlag:N,dynamicChildren:D,slotScopeIds:B}=O;B&&(P=P?P.concat(B):B),I==null?(i(y,S,re),i(E,S,re),H(O.children||[],S,E,J,K,w,P,k)):N>0&&N&64&&D&&I.dynamicChildren&&I.dynamicChildren.length===D.length?(b(I.dynamicChildren,D,S,J,K,w,P),(O.key!=null||J&&O===J.subTree)&&qg(I,O,!0)):Y(I,O,S,E,J,K,w,P,k)},z=(I,O,S,re,J,K,w,P,k)=>{O.slotScopeIds=P,I==null?O.shapeFlag&512?J.ctx.activate(O,S,re,w,k):ne(O,S,re,J,K,w,k):ae(I,O,k)},ne=(I,O,S,re,J,K,w)=>{const P=I.component=kx(I,re,J);if(kl(I)&&(P.ctx.renderer=de),Bx(P,!1,w),P.asyncDep){if(J&&J.registerDep(P,Q,w),!I.el){const k=P.subTree=Ke(_n);d(null,k,O,S),I.placeholder=k.el}}else Q(P,I,O,S,J,K,w)},ae=(I,O,S)=>{const re=O.component=I.component;if(xx(I,O,S))if(re.asyncDep&&!re.asyncResolved){oe(re,O,S);return}else re.next=O,re.update();else O.el=I.el,re.vnode=O},Q=(I,O,S,re,J,K,w)=>{const P=()=>{if(I.isMounted){let{next:N,bu:D,u:B,parent:$,vnode:he}=I;{const Te=Kg(I);if(Te){N&&(N.el=he.el,oe(I,N,w)),Te.asyncDep.then(()=>{bn(()=>{I.isUnmounted||y()},J)});return}}let pe=N,ve;Is(I,!1),N?(N.el=he.el,oe(I,N,w)):N=he,D&&Ql(D),(ve=N.props&&N.props.onVnodeBeforeUpdate)&&di(ve,$,N,he),Is(I,!0);const De=Wh(I),_e=I.subTree;I.subTree=De,_(_e,De,f(_e.el),U(_e),I,J,K),N.el=De.el,pe===null&&yx(I,De.el),B&&bn(B,J),(ve=N.props&&N.props.onVnodeUpdated)&&bn(()=>di(ve,$,N,he),J)}else{let N;const{el:D,props:B}=O,{bm:$,m:he,parent:pe,root:ve,type:De}=I,_e=Io(O);Is(I,!1),$&&Ql($),!_e&&(N=B&&B.onVnodeBeforeMount)&&di(N,pe,O),Is(I,!0);{ve.ce&&ve.ce._hasShadowRoot()&&ve.ce._injectChildStyle(De,I.parent?I.parent.type:void 0);const Te=I.subTree=Wh(I);_(null,Te,S,re,I,J,K),O.el=Te.el}if(he&&bn(he,J),!_e&&(N=B&&B.onVnodeMounted)){const Te=O;bn(()=>di(N,pe,Te),J)}(O.shapeFlag&256||pe&&Io(pe.vnode)&&pe.vnode.shapeFlag&256)&&I.a&&bn(I.a,J),I.isMounted=!0,O=S=re=null}};I.scope.on();const k=I.effect=new Qm(P);I.scope.off();const y=I.update=k.run.bind(k),E=I.job=k.runIfDirty.bind(k);E.i=I,E.id=I.uid,k.scheduler=()=>Nf(E),Is(I,!0),y()},oe=(I,O,S)=>{O.component=I;const re=I.vnode.props;I.vnode=O,I.next=null,Mx(I,O.props,re,S),Ax(I,O.children,S),Ji(),Oh(I),Qi()},Y=(I,O,S,re,J,K,w,P,k=!1)=>{const y=I&&I.children,E=I?I.shapeFlag:0,N=O.children,{patchFlag:D,shapeFlag:B}=O;if(D>0){if(D&128){ce(y,N,S,re,J,K,w,P,k);return}else if(D&256){ge(y,N,S,re,J,K,w,P,k);return}}B&8?(E&16&&Me(y,J,K),N!==y&&u(S,N)):E&16?B&16?ce(y,N,S,re,J,K,w,P,k):Me(y,J,K,!0):(E&8&&u(S,""),B&16&&H(N,S,re,J,K,w,P,k))},ge=(I,O,S,re,J,K,w,P,k)=>{I=I||Lr,O=O||Lr;const y=I.length,E=O.length,N=Math.min(y,E);let D;for(D=0;D<N;D++){const B=O[D]=k?Xi(O[D]):xi(O[D]);_(I[D],B,S,null,J,K,w,P,k)}y>E?Me(I,J,K,!0,!1,N):H(O,S,re,J,K,w,P,k,N)},ce=(I,O,S,re,J,K,w,P,k)=>{let y=0;const E=O.length;let N=I.length-1,D=E-1;for(;y<=N&&y<=D;){const B=I[y],$=O[y]=k?Xi(O[y]):xi(O[y]);if(Ws(B,$))_(B,$,S,null,J,K,w,P,k);else break;y++}for(;y<=N&&y<=D;){const B=I[N],$=O[D]=k?Xi(O[D]):xi(O[D]);if(Ws(B,$))_(B,$,S,null,J,K,w,P,k);else break;N--,D--}if(y>N){if(y<=D){const B=D+1,$=B<E?O[B].el:re;for(;y<=D;)_(null,O[y]=k?Xi(O[y]):xi(O[y]),S,$,J,K,w,P,k),y++}}else if(y>D)for(;y<=N;)Ee(I[y],J,K,!0),y++;else{const B=y,$=y,he=new Map;for(y=$;y<=D;y++){const Se=O[y]=k?Xi(O[y]):xi(O[y]);Se.key!=null&&he.set(Se.key,y)}let pe,ve=0;const De=D-$+1;let _e=!1,Te=0;const Oe=new Array(De);for(y=0;y<De;y++)Oe[y]=0;for(y=B;y<=N;y++){const Se=I[y];if(ve>=De){Ee(Se,J,K,!0);continue}let We;if(Se.key!=null)We=he.get(Se.key);else for(pe=$;pe<=D;pe++)if(Oe[pe-$]===0&&Ws(Se,O[pe])){We=pe;break}We===void 0?Ee(Se,J,K,!0):(Oe[We-$]=y+1,We>=Te?Te=We:_e=!0,_(Se,O[We],S,null,J,K,w,P,k),ve++)}const Ve=_e?Lx(Oe):Lr;for(pe=Ve.length-1,y=De-1;y>=0;y--){const Se=$+y,We=O[Se],Ye=O[Se+1],yt=Se+1<E?Ye.el||Zg(Ye):re;Oe[y]===0?_(null,We,S,yt,J,K,w,P,k):_e&&(pe<0||y!==Ve[pe]?ue(We,S,yt,2):pe--)}}},ue=(I,O,S,re,J=null)=>{const{el:K,type:w,transition:P,children:k,shapeFlag:y}=I;if(y&6){ue(I.component.subTree,O,S,re);return}if(y&128){I.suspense.move(O,S,re);return}if(y&64){w.move(I,O,S,de);return}if(w===Xt){i(K,O,S);for(let N=0;N<k.length;N++)ue(k[N],O,S,re);i(I.anchor,O,S);return}if(w===ac){M(I,O,S);return}if(re!==2&&y&1&&P)if(re===0)P.beforeEnter(K),i(K,O,S),bn(()=>P.enter(K),J);else{const{leave:N,delayLeave:D,afterLeave:B}=P,$=()=>{I.ctx.isUnmounted?s(K):i(K,O,S)},he=()=>{K._isLeaving&&K[_i](!0),N(K,()=>{$(),B&&B()})};D?D(K,$,he):he()}else i(K,O,S)},Ee=(I,O,S,re=!1,J=!1)=>{const{type:K,props:w,ref:P,children:k,dynamicChildren:y,shapeFlag:E,patchFlag:N,dirs:D,cacheIndex:B,memo:$}=I;if(N===-2&&(J=!1),P!=null&&(Ji(),Po(P,null,S,I,!0),Qi()),B!=null&&(O.renderCache[B]=void 0),E&256){O.ctx.deactivate(I);return}const he=E&1&&D,pe=!Io(I);let ve;if(pe&&(ve=w&&w.onVnodeBeforeUnmount)&&di(ve,O,I),E&6)fe(I.component,S,re);else{if(E&128){I.suspense.unmount(S,re);return}he&&Ps(I,null,O,"beforeUnmount"),E&64?I.type.remove(I,O,S,de,re):y&&!y.hasOnce&&(K!==Xt||N>0&&N&64)?Me(y,O,S,!1,!0):(K===Xt&&N&384||!J&&E&16)&&Me(k,O,S),re&&Be(I)}const De=$!=null&&B==null;(pe&&(ve=w&&w.onVnodeUnmounted)||he||De)&&bn(()=>{ve&&di(ve,O,I),he&&Ps(I,null,O,"unmounted"),De&&(I.el=null)},S)},Be=I=>{const{type:O,el:S,anchor:re,transition:J}=I;if(O===Xt){ee(S,re);return}if(O===ac){v(I);return}const K=()=>{s(S),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(I.shapeFlag&1&&J&&!J.persisted){const{leave:w,delayLeave:P}=J,k=()=>w(S,K);P?P(I.el,K,k):k()}else K()},ee=(I,O)=>{let S;for(;I!==O;)S=h(I),s(I),I=S;s(O)},fe=(I,O,S)=>{const{bum:re,scope:J,job:K,subTree:w,um:P,m:k,a:y}=I;jh(k),jh(y),re&&Ql(re),J.stop(),K&&(K.flags|=8,Ee(w,I,O,S)),P&&bn(P,O),bn(()=>{I.isUnmounted=!0},O)},Me=(I,O,S,re=!1,J=!1,K=0)=>{for(let w=K;w<I.length;w++)Ee(I[w],O,S,re,J)},U=I=>{if(I.shapeFlag&6)return U(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const O=h(I.anchor||I.el),S=O&&O[z0];return S?h(S):O};let Z=!1;const ie=(I,O,S)=>{let re;I==null?O._vnode&&(Ee(O._vnode,null,null,!0),re=O._vnode.component):_(O._vnode||null,I,O,null,null,null,S),O._vnode=I,Z||(Z=!0,Oh(re),yg(),Z=!1)},de={p:_,um:Ee,m:ue,r:Be,mt:ne,mc:H,pc:Y,pbc:b,n:U,o:n};return{render:ie,hydrate:void 0,createApp:dx(ie)}}function oc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Is({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Cx(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function qg(n,e,t=!1){const i=n.children,s=e.children;if(Ge(i)&&Ge(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Xi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&qg(o,a)),a.type===aa&&(a.patchFlag===-1&&(a=s[r]=Xi(a)),a.el=o.el),a.type===_n&&!a.el&&(a.el=o.el)}}function Lx(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Kg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kg(e)}function jh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Zg(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Zg(e.subTree):null}const Jg=n=>n.__isSuspense;function Px(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):B0(n)}const Xt=Symbol.for("v-fgt"),aa=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),ac=Symbol.for("v-stc"),No=[];let In=null;function nt(n=!1){No.push(In=n?null:[])}function Ix(){No.pop(),In=No[No.length-1]||null}let Xo=1;function gl(n,e=!1){Xo+=n,n<0&&In&&e&&(In.hasOnce=!0)}function Qg(n){return n.dynamicChildren=Xo>0?In||Lr:null,Ix(),Xo>0&&In&&In.push(n),n}function _t(n,e,t,i,s,r){return Qg(q(n,e,t,i,s,r,!0))}function Qs(n,e,t,i,s){return Qg(Ke(n,e,t,i,s,!0))}function _l(n){return n?n.__v_isVNode===!0:!1}function Ws(n,e){return n.type===e.type&&n.key===e.key}const e_=({key:n})=>n??null,el=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Bt(n)||tn(n)||qe(n)?{i:si,r:n,k:e,f:!!t}:n:null);function q(n,e=null,t=null,i=0,s=null,r=n===Xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&e_(e),ref:e&&el(e),scopeId:Mg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:si};return a?(Ff(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Bt(t)?8:16),Xo>0&&!o&&In&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&In.push(l),l}const Ke=Dx;function Dx(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===sx)&&(n=_n),_l(n)){const a=Ts(n,e,!0);return t&&Ff(a,t),Xo>0&&!r&&In&&(a.shapeFlag&6?In[In.indexOf(n)]=a:In.push(a)),a.patchFlag=-2,a}if(Wx(n)&&(n=n.__vccOpts),e){e=Nx(e);let{class:a,style:l}=e;a&&!Bt(a)&&(e.class=ei(a)),xt(l)&&(Df(l)&&!Ge(l)&&(l=Yt({},l)),e.style=An(l))}const o=Bt(n)?1:Jg(n)?128:Tg(n)?64:xt(n)?4:qe(n)?2:0;return q(n,e,t,i,s,o,r,!0)}function Nx(n){return n?Df(n)||zg(n)?Yt({},n):n:null}function Ts(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Ox(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&e_(c),ref:e&&e.ref?t&&r?Ge(r)?r.concat(el(e)):[r,el(e)]:el(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Xt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ts(n.ssContent),ssFallback:n.ssFallback&&Ts(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Wo(u,l.clone(u)),u}function Pn(n=" ",e=0){return Ke(aa,null,n,e)}function Dt(n="",e=!1){return e?(nt(),Qs(_n,null,n)):Ke(_n,null,n)}function xi(n){return n==null||typeof n=="boolean"?Ke(_n):Ge(n)?Ke(Xt,null,n.slice()):_l(n)?Xi(n):Ke(aa,null,String(n))}function Xi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ts(n)}function Ff(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ff(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!zg(e)?e._ctx=si:s===3&&si&&(si.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:si},t=32):(e=String(e),i&64?(t=16,e=[Pn(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ox(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ei([e.class,i.class]));else if(s==="style")e.style=An([e.style,i.style]);else if(Ll(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ge(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Pl(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function di(n,e,t,i=null){ci(n,e,7,[t,i])}const Ux=kg();let Fx=0;function kx(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Ux,r={uid:Fx++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xg(i,s),emitsOptions:Bg(i,s),emit:null,emitted:null,propsDefaults:Rt,inheritAttrs:i.inheritAttrs,ctx:Rt,data:Rt,props:Rt,attrs:Rt,slots:Rt,refs:Rt,setupState:Rt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=mx.bind(null,r),n.ce&&n.ce(r),r}let cn=null;const kf=()=>cn||si;let vl,du;{const n=Nl(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};vl=e("__VUE_INSTANCE_SETTERS__",t=>cn=t),du=e("__VUE_SSR_SETTERS__",t=>$o=t)}const la=n=>{const e=cn;return vl(n),n.scope.on(),()=>{n.scope.off(),vl(e)}},Yh=()=>{cn&&cn.scope.off(),vl(null)};function t_(n){return n.vnode.shapeFlag&4}let $o=!1;function Bx(n,e=!1,t=!1){e&&du(e);const{props:i,children:s}=n.vnode,r=t_(n);Ex(n,i,r,e),Tx(n,s,t||e);const o=r?Hx(n,e):void 0;return e&&du(!1),o}function Hx(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ox);const{setup:i}=t;if(i){Ji();const s=n.setupContext=i.length>1?Gx(n):null,r=la(n),o=ra(i,n,0,[n.props,s]),a=Xm(o);if(Qi(),r(),(a||n.sp)&&!Io(n)&&Pg(n),a){if(o.then(Yh,Yh),e)return o.then(l=>{qh(n,l)}).catch(l=>{Fl(l,n,0)});n.asyncDep=o}else qh(n,o)}else n_(n)}function qh(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=gg(e)),n_(n)}function n_(n,e,t){const i=n.type;n.render||(n.render=i.render||Si);{const s=la(n);Ji();try{ax(n)}finally{Qi(),s()}}}const Vx={get(n,e){return an(n,"get",""),n[e]}};function Gx(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Vx),slots:n.slots,emit:n.emit,expose:e}}function Bf(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(gg(L0(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Do)return Do[t](n)},has(e,t){return t in e||t in Do}})):n.proxy}function zx(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function Wx(n){return qe(n)&&"__vccOpts"in n}const un=(n,e)=>N0(n,e,$o);function ca(n,e,t){try{gl(-1);const i=arguments.length;return i===2?xt(e)&&!Ge(e)?_l(e)?Ke(n,null,[e]):Ke(n,e):Ke(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&_l(t)&&(t=[t]),Ke(n,e,t))}finally{gl(1)}}const Xx="3.5.31";/**
* @vue/runtime-dom v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pu;const Kh=typeof window<"u"&&window.trustedTypes;if(Kh)try{pu=Kh.createPolicy("vue",{createHTML:n=>n})}catch{}const i_=pu?n=>pu.createHTML(n):n=>n,$x="http://www.w3.org/2000/svg",jx="http://www.w3.org/1998/Math/MathML",zi=typeof document<"u"?document:null,Zh=zi&&zi.createElement("template"),Yx={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?zi.createElementNS($x,n):e==="mathml"?zi.createElementNS(jx,n):t?zi.createElement(n,{is:t}):zi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>zi.createTextNode(n),createComment:n=>zi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Zh.innerHTML=i_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Zh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ss="transition",fo="animation",jo=Symbol("_vtc"),s_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qx=Yt({},Ag,s_),Kx=n=>(n.displayName="Transition",n.props=qx,n),er=Kx((n,{slots:e})=>ca($0,Zx(n),e)),Ds=(n,e=[])=>{Ge(n)?n.forEach(t=>t(...e)):n&&n(...e)},Jh=n=>n?Ge(n)?n.some(e=>e.length>1):n.length>1:!1;function Zx(n){const e={};for(const V in n)V in s_||(e[V]=n[V]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=Jx(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:x,onEnterCancelled:M,onLeave:v,onLeaveCancelled:C,onBeforeAppear:L=d,onAppear:A=x,onAppearCancelled:H=M}=e,T=(V,z,ne,ae)=>{V._enterCancelled=ae,Ns(V,z?u:a),Ns(V,z?c:o),ne&&ne()},b=(V,z)=>{V._isLeaving=!1,Ns(V,f),Ns(V,p),Ns(V,h),z&&z()},F=V=>(z,ne)=>{const ae=V?A:x,Q=()=>T(z,V,ne);Ds(ae,[z,Q]),Qh(()=>{Ns(z,V?l:r),Di(z,V?u:a),Jh(ae)||ed(z,i,_,Q)})};return Yt(e,{onBeforeEnter(V){Ds(d,[V]),Di(V,r),Di(V,o)},onBeforeAppear(V){Ds(L,[V]),Di(V,l),Di(V,c)},onEnter:F(!1),onAppear:F(!0),onLeave(V,z){V._isLeaving=!0;const ne=()=>b(V,z);Di(V,f),V._enterCancelled?(Di(V,h),id(V)):(id(V),Di(V,h)),Qh(()=>{V._isLeaving&&(Ns(V,f),Di(V,p),Jh(v)||ed(V,i,m,ne))}),Ds(v,[V,ne])},onEnterCancelled(V){T(V,!1,void 0,!0),Ds(M,[V])},onAppearCancelled(V){T(V,!0,void 0,!0),Ds(H,[V])},onLeaveCancelled(V){b(V),Ds(C,[V])}})}function Jx(n){if(n==null)return null;if(xt(n))return[lc(n.enter),lc(n.leave)];{const e=lc(n);return[e,e]}}function lc(n){return n0(n)}function Di(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[jo]||(n[jo]=new Set)).add(e)}function Ns(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[jo];t&&(t.delete(e),t.size||(n[jo]=void 0))}function Qh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Qx=0;function ed(n,e,t,i){const s=n._endId=++Qx,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=ey(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function ey(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${ss}Delay`),r=i(`${ss}Duration`),o=td(s,r),a=i(`${fo}Delay`),l=i(`${fo}Duration`),c=td(a,l);let u=null,f=0,h=0;e===ss?o>0&&(u=ss,f=o,h=r.length):e===fo?c>0&&(u=fo,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?ss:fo:null,h=u?u===ss?r.length:l.length:0);const p=u===ss&&/\b(?:transform|all)(?:,|$)/.test(i(`${ss}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function td(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>nd(t)+nd(n[i])))}function nd(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function id(n){return(n?n.ownerDocument:document).body.offsetHeight}function ty(n,e,t){const i=n[jo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const sd=Symbol("_vod"),ny=Symbol("_vsh"),iy=Symbol(""),sy=/(?:^|;)\s*display\s*:/;function ry(n,e,t){const i=n.style,s=Bt(t);let r=!1;if(t&&!s){if(e)if(Bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&tl(i,a,"")}else for(const o in e)t[o]==null&&tl(i,o,"");for(const o in t)o==="display"&&(r=!0),tl(i,o,t[o])}else if(s){if(e!==t){const o=i[iy];o&&(t+=";"+o),i.cssText=t,r=sy.test(t)}}else e&&n.removeAttribute("style");sd in n&&(n[sd]=r?i.display:"",n[ny]&&(i.display="none"))}const rd=/\s*!important$/;function tl(n,e,t){if(Ge(t))t.forEach(i=>tl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=oy(n,e);rd.test(t)?n.setProperty(ir(i),t.replace(rd,""),"important"):n[i]=t}}const od=["Webkit","Moz","ms"],cc={};function oy(n,e){const t=cc[e];if(t)return t;let i=vn(e);if(i!=="filter"&&i in n)return cc[e]=i;i=Dl(i);for(let s=0;s<od.length;s++){const r=od[s]+i;if(r in n)return cc[e]=r}return e}const ad="http://www.w3.org/1999/xlink";function ld(n,e,t,i,s,r=l0(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ad,e.slice(6,e.length)):n.setAttributeNS(ad,e,t):t==null||r&&!qm(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Ai(t)?String(t):t)}function cd(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?i_(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=qm(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function ay(n,e,t,i){n.addEventListener(e,t,i)}function ly(n,e,t,i){n.removeEventListener(e,t,i)}const ud=Symbol("_vei");function cy(n,e,t,i,s=null){const r=n[ud]||(n[ud]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=uy(e);if(i){const c=r[e]=dy(i,s);ay(n,a,c,l)}else o&&(ly(n,a,o,l),r[e]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function uy(n){let e;if(fd.test(n)){e={};let i;for(;i=n.match(fd);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ir(n.slice(2)),e]}let uc=0;const fy=Promise.resolve(),hy=()=>uc||(fy.then(()=>uc=0),uc=Date.now());function dy(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ci(py(i,t.value),e,5,[i])};return t.value=n,t.attached=hy(),t}function py(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const hd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,my=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?ty(n,i,o):e==="style"?ry(n,t,i):Ll(e)?Pl(e)||cy(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gy(n,e,i,o))?(cd(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ld(n,e,i,o,r,e!=="value")):n._isVueCE&&(_y(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Bt(i)))?cd(n,vn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ld(n,e,i,o))};function gy(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&hd(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hd(e)&&Bt(t)?!1:e in n}function _y(n,e){const t=n._def.props;if(!t)return!1;const i=vn(e);return Array.isArray(t)?t.some(s=>vn(s)===i):Object.keys(t).some(s=>vn(s)===i)}const vy=["ctrl","shift","alt","meta"],xy={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>vy.some(t=>n[`${t}Key`]&&!e.includes(t))},yy=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=xy[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},Ey=Yt({patchProp:my},Yx);let dd;function My(){return dd||(dd=wx(Ey))}const Sy=((...n)=>{const e=My().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Ty(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,by(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function by(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ty(n){return Bt(n)?document.querySelector(n):n}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const Tr=typeof document<"u";function r_(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ay(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&r_(n.default)}const pt=Object.assign;function fc(n,e){const t={};for(const i in e){const s=e[i];t[i]=ui(s)?s.map(n):n(s)}return t}const Oo=()=>{},ui=Array.isArray;function pd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}let Ut=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const o_=Symbol("");Ut.MATCHER_NOT_FOUND+"",Ut.NAVIGATION_GUARD_REDIRECT+"",Ut.NAVIGATION_ABORTED+"",Ut.NAVIGATION_CANCELLED+"",Ut.NAVIGATION_DUPLICATED+"";function Br(n,e){return pt(new Error,{type:n,[o_]:!0},e)}function Ni(n,e){return n instanceof Error&&o_ in n&&(e==null||!!(n.type&e))}const wy=["params","query","hash"];function Ry(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of wy)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}const Cy=Symbol(""),md=Symbol(""),Vl=Symbol(""),Hf=Symbol(""),mu=Symbol("");function Vf(){return $n(Vl)}function a_(n){return $n(Hf)}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const l_=/#/g,Ly=/&/g,Py=/\//g,Iy=/=/g,Dy=/\?/g,c_=/\+/g,Ny=/%5B/g,Oy=/%5D/g,u_=/%5E/g,Uy=/%60/g,f_=/%7B/g,Fy=/%7C/g,h_=/%7D/g,ky=/%20/g;function Gf(n){return n==null?"":encodeURI(""+n).replace(Fy,"|").replace(Ny,"[").replace(Oy,"]")}function By(n){return Gf(n).replace(f_,"{").replace(h_,"}").replace(u_,"^")}function gu(n){return Gf(n).replace(c_,"%2B").replace(ky,"+").replace(l_,"%23").replace(Ly,"%26").replace(Uy,"`").replace(f_,"{").replace(h_,"}").replace(u_,"^")}function Hy(n){return gu(n).replace(Iy,"%3D")}function Vy(n){return Gf(n).replace(l_,"%23").replace(Dy,"%3F")}function Gy(n){return Vy(n).replace(Py,"%2F")}function Yo(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const zy=/\/$/,Wy=n=>n.replace(zy,"");function hc(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=n(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Yy(i??e,t),{fullPath:i+r+o,path:i,query:s,hash:Yo(o)}}function Xy(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function gd(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function $y(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Hr(e.matched[i],t.matched[s])&&d_(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Hr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function d_(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!jy(n[t],e[t]))return!1;return!0}function jy(n,e){return ui(n)?_d(n,e):ui(e)?_d(e,n):(n&&n.valueOf())===(e&&e.valueOf())}function _d(n,e){return ui(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Yy(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const rs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let _u=(function(n){return n.pop="pop",n.push="push",n})({}),dc=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function qy(n){if(!n)if(Tr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Wy(n)}const Ky=/^[^#]+#/;function Zy(n,e){return n.replace(Ky,"#")+e}function Jy(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Gl=()=>({left:window.scrollX,top:window.scrollY});function Qy(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Jy(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vd(n,e){return(history.state?history.state.position-e:-1)+n}const vu=new Map;function eE(n,e){vu.set(n,e)}function tE(n){const e=vu.get(n);return vu.delete(n),e}function nE(n){return typeof n=="string"||n&&typeof n=="object"}function p_(n){return typeof n=="string"||typeof n=="symbol"}function iE(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const s=t[i].replace(c_," "),r=s.indexOf("="),o=Yo(r<0?s:s.slice(0,r)),a=r<0?null:Yo(s.slice(r+1));if(o in e){let l=e[o];ui(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function xd(n){let e="";for(let t in n){const i=n[t];if(t=Hy(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ui(i)?i.map(s=>s&&gu(s)):[i&&gu(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function sE(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ui(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}function ho(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ms(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Br(Ut.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):nE(h)?l(Br(Ut.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function pc(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(r_(l)){const c=(l.__vccOpts||l)[e];c&&r.push(ms(c,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Ay(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&ms(h,t,i,o,a,s)()}))}}return r}function rE(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Hr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Hr(c,l))||s.push(l))}return[t,i,s]}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */let oE=()=>location.protocol+"//"+location.host;function m_(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),gd(a,"")}return gd(t,n)+i+s}function aE(n,e,t,i){let s=[],r=[],o=null;const a=({state:h})=>{const p=m_(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(p);s.forEach(d=>{d(t.value,g,{delta:m,type:_u.pop,direction:m?m>0?dc.forward:dc.back:dc.unknown})})};function l(){o=t.value}function c(h){s.push(h);const p=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(pt({},h.state,{scroll:Gl()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function yd(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Gl():null}}function lE(n){const{history:e,location:t}=window,i={value:m_(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:oE()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){r(l,pt({},e.state,yd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=pt({},s.value,e.state,{forward:l,scroll:Gl()});r(u.current,u,!0),r(l,pt({},yd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function cE(n){n=qy(n);const e=lE(n),t=aE(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=pt({location:"",base:n,go:i,createHref:Zy.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let js=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Wt=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Wt||{});const uE={type:js.Static,value:""},fE=/[a-zA-Z0-9_]/;function hE(n){if(!n)return[[]];if(n==="/")return[[uE]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=Wt.Static,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===Wt.Static?r.push({type:js.Static,value:c}):t===Wt.Param||t===Wt.ParamRegExp||t===Wt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:js.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==Wt.ParamRegExp){i=t,t=Wt.EscapeNext;continue}switch(t){case Wt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),t=Wt.Param):h();break;case Wt.EscapeNext:h(),t=i;break;case Wt.Param:l==="("?t=Wt.ParamRegExp:fE.test(l)?h():(f(),t=Wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Wt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Wt.ParamRegExpEnd:u+=l;break;case Wt.ParamRegExpEnd:f(),t=Wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===Wt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const Ed="[^/]+?",dE={sensitive:!1,strict:!1,start:!0,end:!0};var mn=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(mn||{});const pE=/[.+*?^${}()[\]/\\]/g;function mE(n,e){const t=pt({},dE,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[mn.Root];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=mn.Segment+(t.sensitive?mn.BonusCaseSensitive:0);if(h.type===js.Static)f||(s+="/"),s+=h.value.replace(pE,"\\$&"),p+=mn.Static;else if(h.type===js.Param){const{value:g,repeatable:_,optional:m,regexp:d}=h;r.push({name:g,repeatable:_,optional:m});const x=d||Ed;if(x!==Ed){p+=mn.BonusCustomRegExp;try{new RegExp(`(${x})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+v.message)}}let M=_?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,p+=mn.Dynamic,m&&(p+=mn.BonusOptional),_&&(p+=mn.BonusRepeatable),x===".*"&&(p+=mn.BonusWildcard)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=mn.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=r[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===js.Static)u+=p.value;else if(p.type===js.Param){const{value:g,repeatable:_,optional:m}=p,d=g in c?c[g]:"";if(ui(d)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=ui(d)?d.join("/"):d;if(!x)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function gE(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===mn.Static+mn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===mn.Static+mn.Segment?1:-1:0}function g_(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=gE(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Md(i))return 1;if(Md(s))return-1}return s.length-i.length}function Md(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const _E={strict:!1,end:!0,sensitive:!1};function vE(n,e,t){const i=mE(hE(n.path),t),s=pt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function xE(n,e){const t=[],i=new Map;e=pd(_E,e);function s(f){return i.get(f)}function r(f,h,p){const g=!p,_=bd(f);_.aliasOf=p&&p.record;const m=pd(e,f),d=[_];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of v)d.push(bd(pt({},_,{components:p?p.record.components:_.components,path:C,aliasOf:p?p.record:_})))}let x,M;for(const v of d){const{path:C}=v;if(h&&C[0]!=="/"){const L=h.record.path,A=L[L.length-1]==="/"?"":"/";v.path=h.record.path+(C&&A+C)}if(x=vE(v,h,m),p?p.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),g&&f.name&&!Td(x)&&o(f.name)),__(x)&&l(x),_.children){const L=_.children;for(let A=0;A<L.length;A++)r(L[A],x,p&&p.children[A])}p=p||x}return M?()=>{o(M)}:Oo}function o(f){if(p_(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=ME(f,t);t.splice(h,0,f),f.record.name&&!Td(f)&&i.set(f.record.name,f)}function c(f,h){let p,g={},_,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Br(Ut.MATCHER_NOT_FOUND,{location:f});m=p.record.name,g=pt(Sd(h.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&Sd(f.params,p.keys.map(M=>M.name))),_=p.stringify(g)}else if(f.path!=null)_=f.path,p=t.find(M=>M.re.test(_)),p&&(g=p.parse(_),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(M=>M.re.test(h.path)),!p)throw Br(Ut.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,g=pt({},h.params,f.params),_=p.stringify(g)}const d=[];let x=p;for(;x;)d.unshift(x.record),x=x.parent;return{name:m,path:_,params:g,matched:d,meta:EE(d)}}n.forEach(f=>r(f));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Sd(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function bd(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:yE(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function yE(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Td(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function EE(n){return n.reduce((e,t)=>pt(e,t.meta),{})}function ME(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;g_(n,e[r])<0?i=r:t=r+1}const s=SE(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function SE(n){let e=n;for(;e=e.parent;)if(__(e)&&g_(n,e)===0)return e}function __({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Ad(n){const e=$n(Vl),t=$n(Hf),i=un(()=>{const l=Ue(n.to);return e.resolve(l)}),s=un(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Hr.bind(null,u));if(h>-1)return h;const p=wd(l[c-2]);return c>1&&wd(u)===p&&f[f.length-1].path!==p?f.findIndex(Hr.bind(null,l[c-2])):h}),r=un(()=>s.value>-1&&wE(t.params,i.value.params)),o=un(()=>s.value>-1&&s.value===t.matched.length-1&&d_(t.params,i.value.params));function a(l={}){if(AE(l)){const c=e[Ue(n.replace)?"replace":"push"](Ue(n.to)).catch(Oo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:un(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function bE(n){return n.length===1?n[0]:n}const TE=oa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ad,setup(n,{slots:e}){const t=Ul(Ad(n)),{options:i}=$n(Vl),s=un(()=>({[Rd(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Rd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&bE(e.default(t));return n.custom?r:ca("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),ds=TE;function AE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function wE(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!ui(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function wd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Rd=(n,e,t)=>n??e??t,RE=oa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=$n(mu),s=un(()=>n.route||i.value),r=$n(md,0),o=un(()=>{let c=Ue(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=un(()=>s.value.matched[o.value]);Qa(md,un(()=>o.value+1)),Qa(Cy,a),Qa(mu,s);const l=tt();return Zs(()=>[l.value,a.value,n.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Hr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Cd(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=ca(h,pt({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Cd(t.default,{Component:m,route:c})||m}}});function Cd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const CE=RE;function LE(n){const e=xE(n.routes,n),t=n.parseQuery||iE,i=n.stringifyQuery||xd,s=n.history,r=ho(),o=ho(),a=ho(),l=pg(rs);let c=rs;Tr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fc.bind(null,U=>""+U),f=fc.bind(null,Gy),h=fc.bind(null,Yo);function p(U,Z){let ie,de;return p_(U)?(ie=e.getRecordMatcher(U),de=Z):de=U,e.addRoute(de,ie)}function g(U){const Z=e.getRecordMatcher(U);Z&&e.removeRoute(Z)}function _(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function d(U,Z){if(Z=pt({},Z||l.value),typeof U=="string"){const S=hc(t,U,Z.path),re=e.resolve({path:S.path},Z),J=s.createHref(S.fullPath);return pt(S,re,{params:h(re.params),hash:Yo(S.hash),redirectedFrom:void 0,href:J})}let ie;if(U.path!=null)ie=pt({},U,{path:hc(t,U.path,Z.path).path});else{const S=pt({},U.params);for(const re in S)S[re]==null&&delete S[re];ie=pt({},U,{params:f(S)}),Z.params=f(Z.params)}const de=e.resolve(ie,Z),Re=U.hash||"";de.params=u(h(de.params));const I=Xy(i,pt({},U,{hash:By(Re),path:de.path})),O=s.createHref(I);return pt({fullPath:I,hash:Re,query:i===xd?sE(U.query):U.query||{}},de,{redirectedFrom:void 0,href:O})}function x(U){return typeof U=="string"?hc(t,U,l.value.path):pt({},U)}function M(U,Z){if(c!==U)return Br(Ut.NAVIGATION_CANCELLED,{from:Z,to:U})}function v(U){return A(U)}function C(U){return v(pt(x(U),{replace:!0}))}function L(U,Z){const ie=U.matched[U.matched.length-1];if(ie&&ie.redirect){const{redirect:de}=ie;let Re=typeof de=="function"?de(U,Z):de;return typeof Re=="string"&&(Re=Re.includes("?")||Re.includes("#")?Re=x(Re):{path:Re},Re.params={}),pt({query:U.query,hash:U.hash,params:Re.path!=null?{}:U.params},Re)}}function A(U,Z){const ie=c=d(U),de=l.value,Re=U.state,I=U.force,O=U.replace===!0,S=L(ie,de);if(S)return A(pt(x(S),{state:typeof S=="object"?pt({},Re,S.state):Re,force:I,replace:O}),Z||ie);const re=ie;re.redirectedFrom=Z;let J;return!I&&$y(i,de,ie)&&(J=Br(Ut.NAVIGATION_DUPLICATED,{to:re,from:de}),ue(de,de,!0,!1)),(J?Promise.resolve(J):b(re,de)).catch(K=>Ni(K)?Ni(K,Ut.NAVIGATION_GUARD_REDIRECT)?K:ce(K):Y(K,re,de)).then(K=>{if(K){if(Ni(K,Ut.NAVIGATION_GUARD_REDIRECT))return A(pt({replace:O},x(K.to),{state:typeof K.to=="object"?pt({},Re,K.to.state):Re,force:I}),Z||re)}else K=V(re,de,!0,O,Re);return F(re,de,K),K})}function H(U,Z){const ie=M(U,Z);return ie?Promise.reject(ie):Promise.resolve()}function T(U){const Z=ee.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(U):U()}function b(U,Z){let ie;const[de,Re,I]=rE(U,Z);ie=pc(de.reverse(),"beforeRouteLeave",U,Z);for(const S of de)S.leaveGuards.forEach(re=>{ie.push(ms(re,U,Z))});const O=H.bind(null,U,Z);return ie.push(O),Me(ie).then(()=>{ie=[];for(const S of r.list())ie.push(ms(S,U,Z));return ie.push(O),Me(ie)}).then(()=>{ie=pc(Re,"beforeRouteUpdate",U,Z);for(const S of Re)S.updateGuards.forEach(re=>{ie.push(ms(re,U,Z))});return ie.push(O),Me(ie)}).then(()=>{ie=[];for(const S of I)if(S.beforeEnter)if(ui(S.beforeEnter))for(const re of S.beforeEnter)ie.push(ms(re,U,Z));else ie.push(ms(S.beforeEnter,U,Z));return ie.push(O),Me(ie)}).then(()=>(U.matched.forEach(S=>S.enterCallbacks={}),ie=pc(I,"beforeRouteEnter",U,Z,T),ie.push(O),Me(ie))).then(()=>{ie=[];for(const S of o.list())ie.push(ms(S,U,Z));return ie.push(O),Me(ie)}).catch(S=>Ni(S,Ut.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function F(U,Z,ie){a.list().forEach(de=>T(()=>de(U,Z,ie)))}function V(U,Z,ie,de,Re){const I=M(U,Z);if(I)return I;const O=Z===rs,S=Tr?history.state:{};ie&&(de||O?s.replace(U.fullPath,pt({scroll:O&&S&&S.scroll},Re)):s.push(U.fullPath,Re)),l.value=U,ue(U,Z,ie,O),ce()}let z;function ne(){z||(z=s.listen((U,Z,ie)=>{if(!fe.listening)return;const de=d(U),Re=L(de,fe.currentRoute.value);if(Re){A(pt(Re,{replace:!0,force:!0}),de).catch(Oo);return}c=de;const I=l.value;Tr&&eE(vd(I.fullPath,ie.delta),Gl()),b(de,I).catch(O=>Ni(O,Ut.NAVIGATION_ABORTED|Ut.NAVIGATION_CANCELLED)?O:Ni(O,Ut.NAVIGATION_GUARD_REDIRECT)?(A(pt(x(O.to),{force:!0}),de).then(S=>{Ni(S,Ut.NAVIGATION_ABORTED|Ut.NAVIGATION_DUPLICATED)&&!ie.delta&&ie.type===_u.pop&&s.go(-1,!1)}).catch(Oo),Promise.reject()):(ie.delta&&s.go(-ie.delta,!1),Y(O,de,I))).then(O=>{O=O||V(de,I,!1),O&&(ie.delta&&!Ni(O,Ut.NAVIGATION_CANCELLED)?s.go(-ie.delta,!1):ie.type===_u.pop&&Ni(O,Ut.NAVIGATION_ABORTED|Ut.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),F(de,I,O)}).catch(Oo)}))}let ae=ho(),Q=ho(),oe;function Y(U,Z,ie){ce(U);const de=Q.list();return de.length?de.forEach(Re=>Re(U,Z,ie)):console.error(U),Promise.reject(U)}function ge(){return oe&&l.value!==rs?Promise.resolve():new Promise((U,Z)=>{ae.add([U,Z])})}function ce(U){return oe||(oe=!U,ne(),ae.list().forEach(([Z,ie])=>U?ie(U):Z()),ae.reset()),U}function ue(U,Z,ie,de){const{scrollBehavior:Re}=n;if(!Tr||!Re)return Promise.resolve();const I=!ie&&tE(vd(U.fullPath,0))||(de||!ie)&&history.state&&history.state.scroll||null;return vg().then(()=>Re(U,Z,I)).then(O=>O&&Qy(O)).catch(O=>Y(O,U,Z))}const Ee=U=>s.go(U);let Be;const ee=new Set,fe={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:d,options:n,push:v,replace:C,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:ge,install(U){U.component("RouterLink",ds),U.component("RouterView",CE),U.config.globalProperties.$router=fe,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Ue(l)}),Tr&&!Be&&l.value===rs&&(Be=!0,v(s.location).catch(de=>{}));const Z={};for(const de in rs)Object.defineProperty(Z,de,{get:()=>l.value[de],enumerable:!0});U.provide(Vl,fe),U.provide(Hf,dg(Z)),U.provide(mu,l);const ie=U.unmount;ee.add(U),U.unmount=function(){ee.delete(U),ee.size<1&&(c=rs,z&&z(),z=null,l.value=rs,Be=!1,oe=!1),ie()}}};function Me(U){return U.reduce((Z,ie)=>Z.then(()=>T(ie)),Promise.resolve())}return fe}/*!
  * shared v11.3.0
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function PE(n,e){typeof console<"u"&&(console.warn("[intlify] "+n),e&&console.warn(e.stack))}const xl=typeof window<"u",As=(n,e=!1)=>e?Symbol.for(n):Symbol(n),IE=(n,e,t)=>DE({l:n,k:e,s:t}),DE=n=>JSON.stringify(n).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Gt=n=>typeof n=="number"&&isFinite(n),v_=n=>zf(n)==="[object Date]",Vr=n=>zf(n)==="[object RegExp]",zl=n=>rt(n)&&Object.keys(n).length===0,$t=Object.assign,NE=Object.create,At=(n=null)=>NE(n);let Ld;const Ys=()=>Ld||(Ld=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:At());function Pd(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Id(n){return n.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OE(n){return n=n.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,s,r)=>`${s}="${Id(r)}"`),n=n.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,s,r)=>`${s}='${Id(r)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(n)&&(n=n.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{n=n.replace(i,"$1javascript&#58;")}),n}const UE=Object.prototype.hasOwnProperty;function Wn(n,e){return UE.call(n,e)}const Ft=Array.isArray,It=n=>typeof n=="function",Pe=n=>typeof n=="string",lt=n=>typeof n=="boolean",vt=n=>n!==null&&typeof n=="object",FE=n=>vt(n)&&It(n.then)&&It(n.catch),x_=Object.prototype.toString,zf=n=>x_.call(n),rt=n=>zf(n)==="[object Object]",kE=n=>n==null?"":Ft(n)||rt(n)&&n.toString===x_?JSON.stringify(n,null,2):String(n);function Wf(n,e=""){return n.reduce((t,i,s)=>s===0?t+i:t+e+i,"")}const Ea=n=>!vt(n)||Ft(n);function nl(n,e){if(Ea(n)||Ea(e))throw new Error("Invalid value");const t=[{src:n,des:e}];for(;t.length;){const{src:i,des:s}=t.pop();Object.keys(i).forEach(r=>{r!=="__proto__"&&(vt(i[r])&&!vt(s[r])&&(s[r]=Array.isArray(i[r])?[]:At()),Ea(s[r])||Ea(i[r])?s[r]=i[r]:t.push({src:i[r],des:s[r]}))})}}/*!
  * message-compiler v11.3.0
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function BE(n,e,t){return{line:n,column:e,offset:t}}function xu(n,e,t){return{start:n,end:e}}const mt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},HE=17;function Wl(n,e,t={}){const{domain:i,messages:s,args:r}=t,o=n,a=new SyntaxError(String(o));return a.code=n,e&&(a.location=e),a.domain=i,a}function VE(n){throw n}const pi=" ",GE="\r",on=`
`,zE="\u2028",WE="\u2029";function XE(n){const e=n;let t=0,i=1,s=1,r=0;const o=A=>e[A]===GE&&e[A+1]===on,a=A=>e[A]===on,l=A=>e[A]===WE,c=A=>e[A]===zE,u=A=>o(A)||a(A)||l(A)||c(A),f=()=>t,h=()=>i,p=()=>s,g=()=>r,_=A=>o(A)||l(A)||c(A)?on:e[A],m=()=>_(t),d=()=>_(t+r);function x(){return r=0,u(t)&&(i++,s=0),o(t)&&t++,t++,s++,e[t]}function M(){return o(t+r)&&r++,r++,e[t+r]}function v(){t=0,i=1,s=1,r=0}function C(A=0){r=A}function L(){const A=t+r;for(;A!==t;)x();r=0}return{index:f,line:h,column:p,peekOffset:g,charAt:_,currentChar:m,currentPeek:d,next:x,peek:M,reset:v,resetPeek:C,skipToPeek:L}}const Oi=void 0,$E=".",Dd="'",jE="tokenizer";function YE(n,e={}){const t=e.location!==!1,i=XE(n),s=()=>i.index(),r=()=>BE(i.line(),i.column(),i.index()),o=r(),a=s(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(w,P,k,...y){const E=c();if(P.column+=k,P.offset+=k,u){const N=t?xu(E.startLoc,P):null,D=Wl(w,N,{domain:jE,args:y});u(D)}}function h(w,P,k){w.endLoc=r(),w.currentType=P;const y={type:P};return t&&(y.loc=xu(w.startLoc,w.endLoc)),k!=null&&(y.value=k),y}const p=w=>h(w,13);function g(w,P){return w.currentChar()===P?(w.next(),P):(f(mt.EXPECTED_TOKEN,r(),0,P),"")}function _(w){let P="";for(;w.currentPeek()===pi||w.currentPeek()===on;)P+=w.currentPeek(),w.peek();return P}function m(w){const P=_(w);return w.skipToPeek(),P}function d(w){if(w===Oi)return!1;const P=w.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P===95}function x(w){if(w===Oi)return!1;const P=w.charCodeAt(0);return P>=48&&P<=57}function M(w,P){const{currentType:k}=P;if(k!==2)return!1;_(w);const y=d(w.currentPeek());return w.resetPeek(),y}function v(w,P){const{currentType:k}=P;if(k!==2)return!1;_(w);const y=w.currentPeek()==="-"?w.peek():w.currentPeek(),E=x(y);return w.resetPeek(),E}function C(w,P){const{currentType:k}=P;if(k!==2)return!1;_(w);const y=w.currentPeek()===Dd;return w.resetPeek(),y}function L(w,P){const{currentType:k}=P;if(k!==7)return!1;_(w);const y=w.currentPeek()===".";return w.resetPeek(),y}function A(w,P){const{currentType:k}=P;if(k!==8)return!1;_(w);const y=d(w.currentPeek());return w.resetPeek(),y}function H(w,P){const{currentType:k}=P;if(!(k===7||k===11))return!1;_(w);const y=w.currentPeek()===":";return w.resetPeek(),y}function T(w,P){const{currentType:k}=P;if(k!==9)return!1;const y=()=>{const N=w.currentPeek();return N==="{"?d(w.peek()):N==="@"||N==="|"||N===":"||N==="."||N===pi||!N?!1:N===on?(w.peek(),y()):F(w,!1)},E=y();return w.resetPeek(),E}function b(w){_(w);const P=w.currentPeek()==="|";return w.resetPeek(),P}function F(w,P=!0){const k=(E=!1,N="")=>{const D=w.currentPeek();return D==="{"||D==="@"||!D?E:D==="|"?!(N===pi||N===on):D===pi?(w.peek(),k(!0,pi)):D===on?(w.peek(),k(!0,on)):!0},y=k();return P&&w.resetPeek(),y}function V(w,P){const k=w.currentChar();return k===Oi?Oi:P(k)?(w.next(),k):null}function z(w){const P=w.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P>=48&&P<=57||P===95||P===36}function ne(w){return V(w,z)}function ae(w){const P=w.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P>=48&&P<=57||P===95||P===36||P===45}function Q(w){return V(w,ae)}function oe(w){const P=w.charCodeAt(0);return P>=48&&P<=57}function Y(w){return V(w,oe)}function ge(w){const P=w.charCodeAt(0);return P>=48&&P<=57||P>=65&&P<=70||P>=97&&P<=102}function ce(w){return V(w,ge)}function ue(w){let P="",k="";for(;P=Y(w);)k+=P;return k}function Ee(w){let P="";for(;;){const k=w.currentChar();if(k==="\\"){const y=w.peek();y==="{"||y==="}"||y==="@"||y==="|"||y==="\\"?(P+=k+y,w.next(),w.next()):(w.resetPeek(),P+=k,w.next())}else{if(k==="{"||k==="}"||k==="@"||k==="|"||!k)break;if(k===pi||k===on)if(F(w))P+=k,w.next();else{if(b(w))break;P+=k,w.next()}else P+=k,w.next()}}return P}function Be(w){m(w);let P="",k="";for(;P=Q(w);)k+=P;const y=w.currentChar();if(y&&y!=="}"&&y!==Oi&&y!==pi&&y!==on&&y!=="　"){const E=de(w);return f(mt.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,k+E),k+E}return w.currentChar()===Oi&&f(mt.UNTERMINATED_CLOSING_BRACE,r(),0),k}function ee(w){m(w);let P="";return w.currentChar()==="-"?(w.next(),P+=`-${ue(w)}`):P+=ue(w),w.currentChar()===Oi&&f(mt.UNTERMINATED_CLOSING_BRACE,r(),0),P}function fe(w){return w!==Dd&&w!==on}function Me(w){m(w),g(w,"'");let P="",k="";for(;P=V(w,fe);)P==="\\"?k+=U(w):k+=P;const y=w.currentChar();return y===on||y===Oi?(f(mt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,r(),0),y===on&&(w.next(),g(w,"'")),k):(g(w,"'"),k)}function U(w){const P=w.currentChar();switch(P){case"\\":case"'":return w.next(),`\\${P}`;case"u":return Z(w,P,4);case"U":return Z(w,P,6);default:return f(mt.UNKNOWN_ESCAPE_SEQUENCE,r(),0,P),""}}function Z(w,P,k){g(w,P);let y="";for(let E=0;E<k;E++){const N=ce(w);if(!N){f(mt.INVALID_UNICODE_ESCAPE_SEQUENCE,r(),0,`\\${P}${y}${w.currentChar()}`);break}y+=N}return`\\${P}${y}`}function ie(w){return w!=="{"&&w!=="}"&&w!==pi&&w!==on}function de(w){m(w);let P="",k="";for(;P=V(w,ie);)k+=P;return k}function Re(w){let P="",k="";for(;P=ne(w);)k+=P;return k}function I(w){const P=k=>{const y=w.currentChar();return y==="{"||y==="@"||y==="|"||y==="("||y===")"||!y||y===pi?k:(k+=y,w.next(),P(k))};return P("")}function O(w){m(w);const P=g(w,"|");return m(w),P}function S(w,P){let k=null;switch(w.currentChar()){case"{":return P.braceNest>=1&&f(mt.NOT_ALLOW_NEST_PLACEHOLDER,r(),0),w.next(),k=h(P,2,"{"),m(w),P.braceNest++,k;case"}":return P.braceNest>0&&P.currentType===2&&f(mt.EMPTY_PLACEHOLDER,r(),0),w.next(),k=h(P,3,"}"),P.braceNest--,P.braceNest>0&&m(w),P.inLinked&&P.braceNest===0&&(P.inLinked=!1),k;case"@":return P.braceNest>0&&f(mt.UNTERMINATED_CLOSING_BRACE,r(),0),k=re(w,P)||p(P),P.braceNest=0,k;default:{let E=!0,N=!0,D=!0;if(b(w))return P.braceNest>0&&f(mt.UNTERMINATED_CLOSING_BRACE,r(),0),k=h(P,1,O(w)),P.braceNest=0,P.inLinked=!1,k;if(P.braceNest>0&&(P.currentType===4||P.currentType===5||P.currentType===6))return f(mt.UNTERMINATED_CLOSING_BRACE,r(),0),P.braceNest=0,J(w,P);if(E=M(w,P))return k=h(P,4,Be(w)),m(w),k;if(N=v(w,P))return k=h(P,5,ee(w)),m(w),k;if(D=C(w,P))return k=h(P,6,Me(w)),m(w),k;if(!E&&!N&&!D)return k=h(P,12,de(w)),f(mt.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,k.value),m(w),k;break}}return k}function re(w,P){const{currentType:k}=P;let y=null;const E=w.currentChar();switch((k===7||k===8||k===11||k===9)&&(E===on||E===pi)&&f(mt.INVALID_LINKED_FORMAT,r(),0),E){case"@":return w.next(),y=h(P,7,"@"),P.inLinked=!0,y;case".":return m(w),w.next(),h(P,8,".");case":":return m(w),w.next(),h(P,9,":");default:return b(w)?(y=h(P,1,O(w)),P.braceNest=0,P.inLinked=!1,y):L(w,P)||H(w,P)?(m(w),re(w,P)):A(w,P)?(m(w),h(P,11,Re(w))):T(w,P)?(m(w),E==="{"?S(w,P)||y:h(P,10,I(w))):(k===7&&f(mt.INVALID_LINKED_FORMAT,r(),0),P.braceNest=0,P.inLinked=!1,J(w,P))}}function J(w,P){let k={type:13};if(P.braceNest>0)return S(w,P)||p(P);if(P.inLinked)return re(w,P)||p(P);switch(w.currentChar()){case"{":return S(w,P)||p(P);case"}":return f(mt.UNBALANCED_CLOSING_BRACE,r(),0),w.next(),h(P,3,"}");case"@":return re(w,P)||p(P);default:{if(b(w))return k=h(P,1,O(w)),P.braceNest=0,P.inLinked=!1,k;if(F(w))return h(P,0,Ee(w));break}}return k}function K(){const{currentType:w,offset:P,startLoc:k,endLoc:y}=l;return l.lastType=w,l.lastOffset=P,l.lastStartLoc=k,l.lastEndLoc=y,l.offset=s(),l.startLoc=r(),i.currentChar()===Oi?h(l,13):J(i,l)}return{nextToken:K,currentOffset:s,currentPosition:r,context:c}}const qE="parser",KE=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,ZE=/\\([\\@{}|])/g;function JE(n,e){return e}function QE(n,e,t){switch(n){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||t,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function eM(n={}){const e=n.location!==!1,{onError:t}=n;function i(d,x,M,v,...C){const L=d.currentPosition();if(L.offset+=v,L.column+=v,t){const A=e?xu(M,L):null,H=Wl(x,A,{domain:qE,args:C});t(H)}}function s(d,x,M){const v={type:d};return e&&(v.start=x,v.end=x,v.loc={start:M,end:M}),v}function r(d,x,M,v){e&&(d.end=x,d.loc&&(d.loc.end=M))}function o(d,x){const M=d.context(),v=s(3,M.offset,M.startLoc);return v.value=x.replace(ZE,JE),r(v,d.currentOffset(),d.currentPosition()),v}function a(d,x){const M=d.context(),{lastOffset:v,lastStartLoc:C}=M,L=s(5,v,C);return L.index=parseInt(x,10),d.nextToken(),r(L,d.currentOffset(),d.currentPosition()),L}function l(d,x){const M=d.context(),{lastOffset:v,lastStartLoc:C}=M,L=s(4,v,C);return L.key=x,d.nextToken(),r(L,d.currentOffset(),d.currentPosition()),L}function c(d,x){const M=d.context(),{lastOffset:v,lastStartLoc:C}=M,L=s(9,v,C);return L.value=x.replace(KE,QE),d.nextToken(),r(L,d.currentOffset(),d.currentPosition()),L}function u(d){const x=d.nextToken(),M=d.context(),{lastOffset:v,lastStartLoc:C}=M,L=s(8,v,C);return x.type!==11?(i(d,mt.UNEXPECTED_EMPTY_LINKED_MODIFIER,M.lastStartLoc,0),L.value="",r(L,v,C),{nextConsumeToken:x,node:L}):(x.value==null&&i(d,mt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,mi(x)),L.value=x.value||"",r(L,d.currentOffset(),d.currentPosition()),{node:L})}function f(d,x){const M=d.context(),v=s(7,M.offset,M.startLoc);return v.value=x,r(v,d.currentOffset(),d.currentPosition()),v}function h(d){const x=d.context(),M=s(6,x.offset,x.startLoc);let v=d.nextToken();if(v.type===8){const C=u(d);M.modifier=C.node,v=C.nextConsumeToken||d.nextToken()}switch(v.type!==9&&i(d,mt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,mi(v)),v=d.nextToken(),v.type===2&&(v=d.nextToken()),v.type){case 10:v.value==null&&i(d,mt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,mi(v)),M.key=f(d,v.value||"");break;case 4:v.value==null&&i(d,mt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,mi(v)),M.key=l(d,v.value||"");break;case 5:v.value==null&&i(d,mt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,mi(v)),M.key=a(d,v.value||"");break;case 6:v.value==null&&i(d,mt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,mi(v)),M.key=c(d,v.value||"");break;default:{i(d,mt.UNEXPECTED_EMPTY_LINKED_KEY,x.lastStartLoc,0);const C=d.context(),L=s(7,C.offset,C.startLoc);return L.value="",r(L,C.offset,C.startLoc),M.key=L,r(M,C.offset,C.startLoc),{nextConsumeToken:v,node:M}}}return r(M,d.currentOffset(),d.currentPosition()),{node:M}}function p(d){const x=d.context(),M=x.currentType===1?d.currentOffset():x.offset,v=x.currentType===1?x.endLoc:x.startLoc,C=s(2,M,v);C.items=[];let L=null;do{const T=L||d.nextToken();switch(L=null,T.type){case 0:T.value==null&&i(d,mt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,mi(T)),C.items.push(o(d,T.value||""));break;case 5:T.value==null&&i(d,mt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,mi(T)),C.items.push(a(d,T.value||""));break;case 4:T.value==null&&i(d,mt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,mi(T)),C.items.push(l(d,T.value||""));break;case 6:T.value==null&&i(d,mt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,mi(T)),C.items.push(c(d,T.value||""));break;case 7:{const b=h(d);C.items.push(b.node),L=b.nextConsumeToken||null;break}}}while(x.currentType!==13&&x.currentType!==1);const A=x.currentType===1?x.lastOffset:d.currentOffset(),H=x.currentType===1?x.lastEndLoc:d.currentPosition();return r(C,A,H),C}function g(d,x,M,v){const C=d.context();let L=v.items.length===0;const A=s(1,x,M);A.cases=[],A.cases.push(v);do{const H=p(d);L||(L=H.items.length===0),A.cases.push(H)}while(C.currentType!==13);return L&&i(d,mt.MUST_HAVE_MESSAGES_IN_PLURAL,M,0),r(A,d.currentOffset(),d.currentPosition()),A}function _(d){const x=d.context(),{offset:M,startLoc:v}=x,C=p(d);return x.currentType===13?C:g(d,M,v,C)}function m(d){const x=YE(d,$t({},n)),M=x.context(),v=s(0,M.offset,M.startLoc);return e&&v.loc&&(v.loc.source=d),v.body=_(x),n.onCacheKey&&(v.cacheKey=n.onCacheKey(d)),M.currentType!==13&&i(x,mt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,d[M.offset]||""),r(v,x.currentOffset(),x.currentPosition()),v}return{parse:m}}function mi(n){if(n.type===13)return"EOF";const e=(n.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function tM(n,e={}){const t={ast:n,helpers:new Set};return{context:()=>t,helper:r=>(t.helpers.add(r),r)}}function Nd(n,e){for(let t=0;t<n.length;t++)Xf(n[t],e)}function Xf(n,e){switch(n.type){case 1:Nd(n.cases,e),e.helper("plural");break;case 2:Nd(n.items,e);break;case 6:{Xf(n.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function nM(n,e={}){const t=tM(n);t.helper("normalize"),n.body&&Xf(n.body,t);const i=t.context();n.helpers=Array.from(i.helpers)}function iM(n){const e=n.body;return e.type===2?Od(e):e.cases.forEach(t=>Od(t)),n}function Od(n){if(n.items.length===1){const e=n.items[0];(e.type===3||e.type===9)&&(n.static=e.value,delete e.value)}else{const e=[];for(let t=0;t<n.items.length;t++){const i=n.items[t];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===n.items.length){n.static=Wf(e);for(let t=0;t<n.items.length;t++){const i=n.items[t];(i.type===3||i.type===9)&&delete i.value}}}}function Ar(n){switch(n.t=n.type,n.type){case 0:{const e=n;Ar(e.body),e.b=e.body,delete e.body;break}case 1:{const e=n,t=e.cases;for(let i=0;i<t.length;i++)Ar(t[i]);e.c=t,delete e.cases;break}case 2:{const e=n,t=e.items;for(let i=0;i<t.length;i++)Ar(t[i]);e.i=t,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=n;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=n;Ar(e.key),e.k=e.key,delete e.key,e.modifier&&(Ar(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=n;e.i=e.index,delete e.index;break}case 4:{const e=n;e.k=e.key,delete e.key;break}}delete n.type}function sM(n,e){const{filename:t,breakLineCode:i,needIndent:s}=e,r=e.location!==!1,o={filename:t,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:s,indentLevel:0};r&&n.loc&&(o.source=n.loc.source);const a=()=>o;function l(_,m){o.code+=_}function c(_,m=!0){const d=m?i:"";l(s?d+"  ".repeat(_):d)}function u(_=!0){const m=++o.indentLevel;_&&c(m)}function f(_=!0){const m=--o.indentLevel;_&&c(m)}function h(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:h,helper:_=>`_${_}`,needIndent:()=>o.needIndent}}function rM(n,e){const{helper:t}=n;n.push(`${t("linked")}(`),Gr(n,e.key),e.modifier?(n.push(", "),Gr(n,e.modifier),n.push(", _type")):n.push(", undefined, _type"),n.push(")")}function oM(n,e){const{helper:t,needIndent:i}=n;n.push(`${t("normalize")}([`),n.indent(i());const s=e.items.length;for(let r=0;r<s&&(Gr(n,e.items[r]),r!==s-1);r++)n.push(", ");n.deindent(i()),n.push("])")}function aM(n,e){const{helper:t,needIndent:i}=n;if(e.cases.length>1){n.push(`${t("plural")}([`),n.indent(i());const s=e.cases.length;for(let r=0;r<s&&(Gr(n,e.cases[r]),r!==s-1);r++)n.push(", ");n.deindent(i()),n.push("])")}}function lM(n,e){e.body?Gr(n,e.body):n.push("null")}function Gr(n,e){const{helper:t}=n;switch(e.type){case 0:lM(n,e);break;case 1:aM(n,e);break;case 2:oM(n,e);break;case 6:rM(n,e);break;case 8:n.push(JSON.stringify(e.value),e);break;case 7:n.push(JSON.stringify(e.value),e);break;case 5:n.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:n.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:n.push(JSON.stringify(e.value),e);break;case 3:n.push(JSON.stringify(e.value),e);break}}const cM=(n,e={})=>{const t=Pe(e.mode)?e.mode:"normal",i=Pe(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,r=e.needIndent?e.needIndent:t!=="arrow",o=n.helpers||[],a=sM(n,{filename:i,breakLineCode:s,needIndent:r});a.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(r),o.length>0&&(a.push(`const { ${Wf(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),Gr(a,n),a.deindent(r),a.push("}"),delete n.helpers;const{code:l,map:c}=a.context();return{ast:n,code:l,map:c?c.toJSON():void 0}};function uM(n,e={}){const t=$t({},e),i=!!t.jit,s=!!t.minify,r=t.optimize==null?!0:t.optimize,a=eM(t).parse(n);return i?(r&&iM(a),s&&Ar(a),{ast:a,code:""}):(nM(a,t),cM(a,t))}/*!
  * core-base v11.3.0
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function fM(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ys().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Ys().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function bi(n){return vt(n)&&$f(n)===0&&(Wn(n,"b")||Wn(n,"body"))}const y_=["b","body"];function hM(n){return ws(n,y_)}const E_=["c","cases"];function dM(n){return ws(n,E_,[])}const M_=["s","static"];function pM(n){return ws(n,M_)}const S_=["i","items"];function mM(n){return ws(n,S_,[])}const b_=["t","type"];function $f(n){return ws(n,b_)}const T_=["v","value"];function Ma(n,e){const t=ws(n,T_);if(t!=null)return t;throw qo(e)}const A_=["m","modifier"];function gM(n){return ws(n,A_)}const w_=["k","key"];function _M(n){const e=ws(n,w_);if(e)return e;throw qo(6)}function ws(n,e,t){for(let i=0;i<e.length;i++){const s=e[i];if(Wn(n,s)&&n[s]!=null)return n[s]}return t}const R_=[...y_,...E_,...M_,...S_,...w_,...A_,...T_,...b_];function qo(n){return new Error(`unhandled node type: ${n}`)}function mc(n){return t=>vM(t,n)}function vM(n,e){const t=hM(e);if(t==null)throw qo(0);if($f(t)===1){const r=dM(t);return n.plural(r.reduce((o,a)=>[...o,Ud(n,a)],[]))}else return Ud(n,t)}function Ud(n,e){const t=pM(e);if(t!=null)return n.type==="text"?t:n.normalize([t]);{const i=mM(e).reduce((s,r)=>[...s,yu(n,r)],[]);return n.normalize(i)}}function yu(n,e){const t=$f(e);switch(t){case 3:return Ma(e,t);case 9:return Ma(e,t);case 4:{const i=e;if(Wn(i,"k")&&i.k)return n.interpolate(n.named(i.k));if(Wn(i,"key")&&i.key)return n.interpolate(n.named(i.key));throw qo(t)}case 5:{const i=e;if(Wn(i,"i")&&Gt(i.i))return n.interpolate(n.list(i.i));if(Wn(i,"index")&&Gt(i.index))return n.interpolate(n.list(i.index));throw qo(t)}case 6:{const i=e,s=gM(i),r=_M(i);return n.linked(yu(n,r),s?yu(n,s):void 0,n.type)}case 7:return Ma(e,t);case 8:return Ma(e,t);default:throw new Error(`unhandled node on format message part: ${t}`)}}const xM=n=>n;let Sa=At();function yM(n,e={}){let t=!1;const i=e.onError||VE;return e.onError=s=>{t=!0,i(s)},{...uM(n,e),detectError:t}}function EM(n,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Pe(n)){lt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||xM)(n),s=Sa[i];if(s)return s;const{ast:r,detectError:o}=yM(n,{...e,location:!1,jit:!0}),a=mc(r);return o?a:Sa[i]=a}else{const t=n.cacheKey;if(t){const i=Sa[t];return i||(Sa[t]=mc(n))}else return mc(n)}}let Ko=null;function MM(n){Ko=n}function SM(n,e,t){Ko&&Ko.emit("i18n:init",{timestamp:Date.now(),i18n:n,version:e,meta:t})}const bM=TM("function:translate");function TM(n){return e=>Ko&&Ko.emit(n,e)}const ji={INVALID_ARGUMENT:HE,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},AM=24;function Yi(n){return Wl(n,null,void 0)}function jf(n,e){return e.locale!=null?Fd(e.locale):Fd(n.locale)}let gc;function Fd(n){if(Pe(n))return n;if(It(n)){if(n.resolvedOnce&&gc!=null)return gc;if(n.constructor.name==="Function"){const e=n();if(FE(e))throw Yi(ji.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return gc=e}else throw Yi(ji.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Yi(ji.NOT_SUPPORT_LOCALE_TYPE)}function wM(n,e,t){return[...new Set([t,...Ft(e)?e:vt(e)?Object.keys(e):Pe(e)?[e]:[t]])]}function Eu(n,e,t){const i=Pe(t)?t:Zo,s=n;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(i);if(!r){r=[];let o=[t];for(;Ft(o);)o=kd(r,o,e);const a=Ft(e)||!rt(e)?e:e.default?e.default:null;o=Pe(a)?[a]:a,Ft(o)&&kd(r,o,!1),s.__localeChainCache.set(i,r)}return r}function kd(n,e,t){let i=!0;for(let s=0;s<e.length&&lt(i);s++){const r=e[s];Pe(r)&&(i=RM(n,e[s],t))}return i}function RM(n,e,t){let i;const s=e.split("-");do{const r=s.join("-");i=CM(n,r,t),s.splice(-1,1)}while(s.length&&i===!0);return i}function CM(n,e,t){let i=!1;if(!n.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const s=e.replace(/!/g,"");n.push(s),(Ft(t)||rt(t))&&t[s]&&(i=t[s])}return i}const Rs=[];Rs[0]={w:[0],i:[3,0],"[":[4],o:[7]};Rs[1]={w:[1],".":[2],"[":[4],o:[7]};Rs[2]={w:[2],i:[3,0],0:[3,0]};Rs[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Rs[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Rs[5]={"'":[4,0],o:8,l:[5,0]};Rs[6]={'"':[4,0],o:8,l:[6,0]};const LM=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function PM(n){return LM.test(n)}function IM(n){const e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e===t&&(e===34||e===39)?n.slice(1,-1):n}function DM(n){if(n==null)return"o";switch(n.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return n;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function NM(n){const e=n.trim();return n.charAt(0)==="0"&&isNaN(parseInt(n))?!1:PM(e)?IM(e):"*"+e}function OM(n){const e=[];let t=-1,i=0,s=0,r,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),s++},h[3]=()=>{if(s>0)s--,i=4,h[0]();else{if(s=0,o===void 0||(o=NM(o),o===!1))return!1;h[1]()}};function p(){const g=n[t+1];if(i===5&&g==="'"||i===6&&g==='"')return t++,a="\\"+g,h[0](),!0}for(;i!==null;)if(t++,r=n[t],!(r==="\\"&&p())){if(l=DM(r),f=Rs[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=r,u()===!1))))return;if(i===7)return e}}const Bd=new Map;function UM(n,e){return vt(n)?n[e]:null}function FM(n,e){if(!vt(n))return null;let t=Bd.get(e);if(t||(t=OM(e),t&&Bd.set(e,t)),!t)return null;const i=t.length;let s=n,r=0;for(;r<i;){const o=t[r];if(R_.includes(o)&&bi(s)||!vt(s)||!Wn(s,o))return null;const a=s[o];if(a===void 0||It(s))return null;s=a,r++}return s}const kM="11.3.0",Xl=-1,Zo="en-US",yl="",Hd=n=>`${n.charAt(0).toLocaleUpperCase()}${n.substr(1)}`;function BM(){return{upper:(n,e)=>e==="text"&&Pe(n)?n.toUpperCase():e==="vnode"&&vt(n)&&"__v_isVNode"in n?n.children.toUpperCase():n,lower:(n,e)=>e==="text"&&Pe(n)?n.toLowerCase():e==="vnode"&&vt(n)&&"__v_isVNode"in n?n.children.toLowerCase():n,capitalize:(n,e)=>e==="text"&&Pe(n)?Hd(n):e==="vnode"&&vt(n)&&"__v_isVNode"in n?Hd(n.children):n}}let C_;function HM(n){C_=n}let L_;function VM(n){L_=n}let P_;function GM(n){P_=n}let I_=null;const zM=n=>{I_=n},WM=()=>I_;let D_=null;const Vd=n=>{D_=n},XM=()=>D_;let Gd=0;function $M(n={}){const e=It(n.onWarn)?n.onWarn:PE,t=Pe(n.version)?n.version:kM,i=Pe(n.locale)||It(n.locale)?n.locale:Zo,s=It(i)?Zo:i,r=Ft(n.fallbackLocale)||rt(n.fallbackLocale)||Pe(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:s,o=rt(n.messages)?n.messages:_c(s),a=rt(n.datetimeFormats)?n.datetimeFormats:_c(s),l=rt(n.numberFormats)?n.numberFormats:_c(s),c=$t(At(),n.modifiers,BM()),u=n.pluralRules||At(),f=It(n.missing)?n.missing:null,h=lt(n.missingWarn)||Vr(n.missingWarn)?n.missingWarn:!0,p=lt(n.fallbackWarn)||Vr(n.fallbackWarn)?n.fallbackWarn:!0,g=!!n.fallbackFormat,_=!!n.unresolving,m=It(n.postTranslation)?n.postTranslation:null,d=rt(n.processor)?n.processor:null,x=lt(n.warnHtmlMessage)?n.warnHtmlMessage:!0,M=!!n.escapeParameter,v=It(n.messageCompiler)?n.messageCompiler:C_,C=It(n.messageResolver)?n.messageResolver:L_||UM,L=It(n.localeFallbacker)?n.localeFallbacker:P_||wM,A=vt(n.fallbackContext)?n.fallbackContext:void 0,H=n,T=vt(H.__datetimeFormatters)?H.__datetimeFormatters:new Map,b=vt(H.__numberFormatters)?H.__numberFormatters:new Map,F=vt(H.__meta)?H.__meta:{};Gd++;const V={version:t,cid:Gd,locale:i,fallbackLocale:r,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:g,unresolving:_,postTranslation:m,processor:d,warnHtmlMessage:x,escapeParameter:M,messageCompiler:v,messageResolver:C,localeFallbacker:L,fallbackContext:A,onWarn:e,__meta:F};return V.datetimeFormats=a,V.numberFormats=l,V.__datetimeFormatters=T,V.__numberFormatters=b,__INTLIFY_PROD_DEVTOOLS__&&SM(V,t,F),V}const _c=n=>({[n]:At()});function Yf(n,e,t,i,s){const{missing:r,onWarn:o}=n;if(r!==null){const a=r(n,t,e,s);return Pe(a)?a:e}else return e}function po(n,e,t){const i=n;i.__localeChainCache=new Map,n.localeFallbacker(n,t,e)}function jM(n,e){return n===e?!1:n.split("-")[0]===e.split("-")[0]}function YM(n,e){const t=e.indexOf(n);if(t===-1)return!1;for(let i=t+1;i<e.length;i++)if(jM(n,e[i]))return!0;return!1}function zd(n,...e){const{datetimeFormats:t,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:o}=n,{__datetimeFormatters:a}=n;if(!Pe(e[0])&&!v_(e[0])&&!Gt(e[0]))return yl;const[l,c,u,f]=Mu(...e),h=lt(u.missingWarn)?u.missingWarn:n.missingWarn;lt(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const p=!!u.part,g=jf(n,u),_=o(n,s,g);if(!Pe(l)||l==="")return new Intl.DateTimeFormat(g.replace(/!/g,""),f).format(c);let m={},d,x=null;const M="datetime format";for(let L=0;L<_.length&&(d=_[L],m=t[d]||{},x=m[l],!rt(x));L++)Yf(n,l,d,h,M);if(!rt(x)||!Pe(d))return i?Xl:l;let v=`${d}__${l}`;zl(f)||(v=`${v}__${JSON.stringify(f)}`);let C=a.get(v);return C||(C=new Intl.DateTimeFormat(d,$t({},x,f)),a.set(v,C)),p?C.formatToParts(c):C.format(c)}const N_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Mu(...n){const[e,t,i,s]=n,r=At();let o=At(),a;if(Pe(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Yi(ji.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Yi(ji.INVALID_ISO_DATE_ARGUMENT)}}else if(v_(e)){if(isNaN(e.getTime()))throw Yi(ji.INVALID_DATE_ARGUMENT);a=e}else if(Gt(e))a=e;else throw Yi(ji.INVALID_ARGUMENT);return Pe(t)?r.key=t:rt(t)&&Object.keys(t).forEach(l=>{N_.includes(l)?o[l]=t[l]:r[l]=t[l]}),Pe(i)?r.locale=i:rt(i)&&(o=i),rt(s)&&(o=s),[r.key||"",a,r,o]}function Wd(n,e,t){const i=n;for(const s in t){const r=`${e}__${s}`;i.__datetimeFormatters.has(r)&&i.__datetimeFormatters.delete(r)}}function Xd(n,...e){const{numberFormats:t,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:o}=n,{__numberFormatters:a}=n;if(!Gt(e[0]))return yl;const[l,c,u,f]=Su(...e),h=lt(u.missingWarn)?u.missingWarn:n.missingWarn;lt(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const p=!!u.part,g=jf(n,u),_=o(n,s,g);if(!Pe(l)||l==="")return new Intl.NumberFormat(g.replace(/!/g,""),f).format(c);let m={},d,x=null;const M="number format";for(let L=0;L<_.length&&(d=_[L],m=t[d]||{},x=m[l],!rt(x));L++)Yf(n,l,d,h,M);if(!rt(x)||!Pe(d))return i?Xl:l;let v=`${d}__${l}`;zl(f)||(v=`${v}__${JSON.stringify(f)}`);let C=a.get(v);return C||(C=new Intl.NumberFormat(d,$t({},x,f)),a.set(v,C)),p?C.formatToParts(c):C.format(c)}const O_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Su(...n){const[e,t,i,s]=n,r=At();let o=At();if(!Gt(e))throw Yi(ji.INVALID_ARGUMENT);const a=e;return Pe(t)?r.key=t:rt(t)&&Object.keys(t).forEach(l=>{O_.includes(l)?o[l]=t[l]:r[l]=t[l]}),Pe(i)?r.locale=i:rt(i)&&(o=i),rt(s)&&(o=s),[r.key||"",a,r,o]}function $d(n,e,t){const i=n;for(const s in t){const r=`${e}__${s}`;i.__numberFormatters.has(r)&&i.__numberFormatters.delete(r)}}const qM=n=>n,KM=n=>"",ZM="text",JM=n=>n.length===0?"":Wf(n),QM=kE;function vc(n,e){return n=Math.abs(n),e===2?n===1?0:1:Math.min(n,2)}function eS(n){var t,i;const e=Gt(n.pluralIndex)?n.pluralIndex:-1;return Gt((t=n.named)==null?void 0:t.count)?n.named.count:Gt((i=n.named)==null?void 0:i.n)?n.named.n:e}function tS(n={}){var d,x,M,v;const e=n.locale,t=eS(n),i=Pe(e)&&It((d=n.pluralRules)==null?void 0:d[e])?n.pluralRules[e]:vc,s=i===vc?void 0:vc,r=C=>C[i(t,C.length,s)],o=n.list||[],a=C=>o[C],l=n.named||At();Gt(n.pluralIndex)&&(l.count||(l.count=n.pluralIndex),l.n||(l.n=n.pluralIndex));const c=C=>l[C];function u(C,L){const A=It(n.messages)?n.messages(C,!!L):vt(n.messages)?n.messages[C]:!1;return A||(n.parent?n.parent.message(C):KM)}const f=C=>n.modifiers?n.modifiers[C]:qM,h=It((x=n.processor)==null?void 0:x.normalize)?n.processor.normalize:JM,p=It((M=n.processor)==null?void 0:M.interpolate)?n.processor.interpolate:QM,g=Pe((v=n.processor)==null?void 0:v.type)?n.processor.type:ZM,m={list:a,named:c,plural:r,linked:(C,...L)=>{const[A,H]=L;let T="text",b="";L.length===1?vt(A)?(b=A.modifier||b,T=A.type||T):Pe(A)&&(b=A||b):L.length===2&&(Pe(A)&&(b=A||b),Pe(H)&&(T=H||T));const F=u(C,!0)(m),V=F===""||F===void 0?C:F,z=T==="vnode"&&Ft(V)&&b?V[0]:V;return b?f(b)(z,T):z},message:u,type:g,interpolate:p,normalize:h,values:$t(At(),o,l)};return m}const jd=()=>"",zn=n=>It(n);function Yd(n,...e){const{fallbackFormat:t,postTranslation:i,unresolving:s,messageCompiler:r,fallbackLocale:o,messages:a}=n,[l,c]=bu(...e),u=lt(c.missingWarn)?c.missingWarn:n.missingWarn,f=lt(c.fallbackWarn)?c.fallbackWarn:n.fallbackWarn,h=lt(c.escapeParameter)?c.escapeParameter:n.escapeParameter,p=!!c.resolvedMessage,g=Pe(c.default)||lt(c.default)?lt(c.default)?r?l:()=>l:c.default:t?r?l:()=>l:null,_=t||g!=null&&(Pe(g)||It(g)),m=jf(n,c);h&&nS(c);let[d,x,M]=p?[l,m,a[m]||At()]:U_(n,l,m,o,f,u),v=d,C=l;if(!p&&!(Pe(v)||bi(v)||zn(v))&&_&&(v=g,C=v),!p&&(!(Pe(v)||bi(v)||zn(v))||!Pe(x)))return s?Xl:l;let L=!1;const A=()=>{L=!0},H=zn(v)?v:F_(n,l,x,v,C,A);if(L)return v;const T=rS(n,x,M,c),b=tS(T),F=iS(n,H,b);let V=i?i(F,l):F;if(h&&Pe(V)&&(V=OE(V)),__INTLIFY_PROD_DEVTOOLS__){const z={timestamp:Date.now(),key:Pe(l)?l:zn(v)?v.key:"",locale:x||(zn(v)?v.locale:""),format:Pe(v)?v:zn(v)?v.source:"",message:V};z.meta=$t({},n.__meta,WM()||{}),bM(z)}return V}function nS(n){Ft(n.list)?n.list=n.list.map(e=>Pe(e)?Pd(e):e):vt(n.named)&&Object.keys(n.named).forEach(e=>{Pe(n.named[e])&&(n.named[e]=Pd(n.named[e]))})}function U_(n,e,t,i,s,r){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=n,u=c(n,i,t);let f=At(),h,p=null;const g="translate";for(let _=0;_<u.length&&(h=u[_],f=o[h]||At(),(p=l(f,e))===null&&(p=f[e]),!(Pe(p)||bi(p)||zn(p)));_++)if(!YM(h,u)){const m=Yf(n,e,h,r,g);m!==e&&(p=m)}return[p,h,f]}function F_(n,e,t,i,s,r){const{messageCompiler:o,warnHtmlMessage:a}=n;if(zn(i)){const c=i;return c.locale=c.locale||t,c.key=c.key||e,c}if(o==null){const c=(()=>i);return c.locale=t,c.key=e,c}const l=o(i,sS(n,t,s,i,a,r));return l.locale=t,l.key=e,l.source=i,l}function iS(n,e,t){return e(t)}function bu(...n){const[e,t,i]=n,s=At();if(!Pe(e)&&!Gt(e)&&!zn(e)&&!bi(e))throw Yi(ji.INVALID_ARGUMENT);const r=Gt(e)?String(e):(zn(e),e);return Gt(t)?s.plural=t:Pe(t)?s.default=t:rt(t)&&!zl(t)?s.named=t:Ft(t)&&(s.list=t),Gt(i)?s.plural=i:Pe(i)?s.default=i:rt(i)&&$t(s,i),[r,s]}function sS(n,e,t,i,s,r){return{locale:e,key:t,warnHtmlMessage:s,onError:o=>{throw r&&r(o),o},onCacheKey:o=>IE(e,t,o)}}function rS(n,e,t,i){const{modifiers:s,pluralRules:r,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=n,h={locale:e,modifiers:s,pluralRules:r,messages:(p,g)=>{let _=o(t,p);if(_==null&&(u||g)){const[,,m]=U_(u||n,p,e,a,l,c);_=o(m,p)}if(Pe(_)||bi(_)){let m=!1;const x=F_(n,p,e,_,p,()=>{m=!0});return m?jd:x}else return zn(_)?_:jd}};return n.processor&&(h.processor=n.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Gt(i.plural)&&(h.pluralIndex=i.plural),h}fM();/*!
  * vue-i18n v11.3.0
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const oS="11.3.0";function aS(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Ys().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Ys().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Ys().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ys().__INTLIFY_PROD_DEVTOOLS__=!1)}const wn={UNEXPECTED_RETURN_TYPE:AM,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function On(n,...e){return Wl(n,null,void 0)}const Tu=As("__translateVNode"),Au=As("__datetimeParts"),wu=As("__numberParts"),k_=As("__setPluralRules"),B_=As("__injectWithOption"),Ru=As("__dispose");function Jo(n){if(!vt(n)||bi(n))return n;for(const e in n)if(Wn(n,e))if(!e.includes("."))vt(n[e])&&Jo(n[e]);else{const t=e.split("."),i=t.length-1;let s=n,r=!1;for(let o=0;o<i;o++){if(t[o]==="__proto__")throw new Error(`unsafe key: ${t[o]}`);if(t[o]in s||(s[t[o]]=At()),!vt(s[t[o]])){r=!0;break}s=s[t[o]]}if(r||(bi(s)?R_.includes(t[i])||delete n[e]:(s[t[i]]=n[e],delete n[e])),!bi(s)){const o=s[t[i]];vt(o)&&Jo(o)}}return n}function qf(n,e){const{messages:t,__i18n:i,messageResolver:s,flatJson:r}=e,o=rt(t)?t:Ft(i)?At():{[n]:At()};if(Ft(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||At(),nl(c,o[l])):nl(c,o)}else Pe(a)&&nl(JSON.parse(a),o)}),s==null&&r)for(const a in o)Wn(o,a)&&Jo(o[a]);return o}function H_(n){return n.type}function V_(n,e,t){let i=vt(e.messages)?e.messages:At();"__i18nGlobal"in t&&(i=qf(n.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const s=Object.keys(i);s.length&&s.forEach(r=>{n.mergeLocaleMessage(r,i[r])});{if(vt(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(o=>{n.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(vt(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(o=>{n.mergeNumberFormat(o,e.numberFormats[o])})}}}function qd(n){return Ke(aa,null,n,0)}function Qo(){return kf()}const Kd="__INTLIFY_META__",Zd=()=>[],lS=()=>!1;let Jd=0;function Qd(n){return((e,t,i,s)=>n(t,i,Qo()||void 0,s))}const cS=()=>{const n=Qo();let e=null;return n&&(e=H_(n)[Kd])?{[Kd]:e}:null};function Kf(n={}){const{__root:e,__injectWithOption:t}=n,i=e===void 0,s=n.flatJson,r=xl?tt:pg;let o=lt(n.inheritLocale)?n.inheritLocale:!0;const a=r(e&&o?e.locale.value:Pe(n.locale)?n.locale:Zo),l=r(e&&o?e.fallbackLocale.value:Pe(n.fallbackLocale)||Ft(n.fallbackLocale)||rt(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:a.value),c=r(qf(a.value,n)),u=r(rt(n.datetimeFormats)?n.datetimeFormats:{[a.value]:{}}),f=r(rt(n.numberFormats)?n.numberFormats:{[a.value]:{}});let h=e?e.missingWarn:lt(n.missingWarn)||Vr(n.missingWarn)?n.missingWarn:!0,p=e?e.fallbackWarn:lt(n.fallbackWarn)||Vr(n.fallbackWarn)?n.fallbackWarn:!0,g=e?e.fallbackRoot:lt(n.fallbackRoot)?n.fallbackRoot:!0,_=!!n.fallbackFormat,m=It(n.missing)?n.missing:null,d=It(n.missing)?Qd(n.missing):null,x=It(n.postTranslation)?n.postTranslation:null,M=e?e.warnHtmlMessage:lt(n.warnHtmlMessage)?n.warnHtmlMessage:!0,v=!!n.escapeParameter;const C=e?e.modifiers:rt(n.modifiers)?n.modifiers:{};let L=n.pluralRules||e&&e.pluralRules,A;A=(()=>{i&&Vd(null);const D={version:oS,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:C,pluralRules:L,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:_,unresolving:!0,postTranslation:x===null?void 0:x,warnHtmlMessage:M,escapeParameter:v,messageResolver:n.messageResolver,messageCompiler:n.messageCompiler,__meta:{framework:"vue"}};D.datetimeFormats=u.value,D.numberFormats=f.value,D.__datetimeFormatters=rt(A)?A.__datetimeFormatters:void 0,D.__numberFormatters=rt(A)?A.__numberFormatters:void 0;const B=$M(D);return i&&Vd(B),B})(),po(A,a.value,l.value);function T(){return[a.value,l.value,c.value,u.value,f.value]}const b=un({get:()=>a.value,set:D=>{A.locale=D,a.value=D}}),F=un({get:()=>l.value,set:D=>{A.fallbackLocale=D,l.value=D,po(A,a.value,D)}}),V=un(()=>c.value),z=un(()=>u.value),ne=un(()=>f.value);function ae(){return It(x)?x:null}function Q(D){x=D,A.postTranslation=D}function oe(){return m}function Y(D){D!==null&&(d=Qd(D)),m=D,A.missing=d}const ge=(D,B,$,he,pe,ve)=>{T();let De;try{__INTLIFY_PROD_DEVTOOLS__,i||(A.fallbackContext=e?XM():void 0),De=D(A)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(A.fallbackContext=void 0)}if($!=="translate exists"&&Gt(De)&&De===Xl||$==="translate exists"&&!De){const[_e,Te]=B();return e&&g?he(e):pe(_e)}else{if(ve(De))return De;throw On(wn.UNEXPECTED_RETURN_TYPE)}};function ce(...D){return ge(B=>Reflect.apply(Yd,null,[B,...D]),()=>bu(...D),"translate",B=>Reflect.apply(B.t,B,[...D]),B=>B,B=>Pe(B))}function ue(...D){const[B,$,he]=D;if(he&&!vt(he))throw On(wn.INVALID_ARGUMENT);return ce(B,$,$t({resolvedMessage:!0},he||{}))}function Ee(...D){return ge(B=>Reflect.apply(zd,null,[B,...D]),()=>Mu(...D),"datetime format",B=>Reflect.apply(B.d,B,[...D]),()=>yl,B=>Pe(B)||Ft(B))}function Be(...D){return ge(B=>Reflect.apply(Xd,null,[B,...D]),()=>Su(...D),"number format",B=>Reflect.apply(B.n,B,[...D]),()=>yl,B=>Pe(B)||Ft(B))}function ee(D){return D.map(B=>Pe(B)||Gt(B)||lt(B)?qd(String(B)):B)}const Me={normalize:ee,interpolate:D=>D,type:"vnode"};function U(...D){return ge(B=>{let $;const he=B;try{he.processor=Me,$=Reflect.apply(Yd,null,[he,...D])}finally{he.processor=null}return $},()=>bu(...D),"translate",B=>B[Tu](...D),B=>[qd(B)],B=>Ft(B))}function Z(...D){return ge(B=>Reflect.apply(Xd,null,[B,...D]),()=>Su(...D),"number format",B=>B[wu](...D),Zd,B=>Pe(B)||Ft(B))}function ie(...D){return ge(B=>Reflect.apply(zd,null,[B,...D]),()=>Mu(...D),"datetime format",B=>B[Au](...D),Zd,B=>Pe(B)||Ft(B))}function de(D){L=D,A.pluralRules=L}function Re(D,B){return ge(()=>{if(!D)return!1;const $=Pe(B)?B:a.value,he=Pe(B)?[$]:Eu(A,l.value,$);for(let pe=0;pe<he.length;pe++){const ve=S(he[pe]);let De=A.messageResolver(ve,D);if(De===null&&(De=ve[D]),bi(De)||zn(De)||Pe(De))return!0}return!1},()=>[D],"translate exists",$=>Reflect.apply($.te,$,[D,B]),lS,$=>lt($))}function I(D){let B=null;const $=Eu(A,l.value,a.value);for(let he=0;he<$.length;he++){const pe=c.value[$[he]]||{},ve=A.messageResolver(pe,D);if(ve!=null){B=ve;break}}return B}function O(D){const B=I(D);return B??(e?e.tm(D)||{}:{})}function S(D){return c.value[D]||{}}function re(D,B){if(s){const $={[D]:B};for(const he in $)Wn($,he)&&Jo($[he]);B=$[D]}c.value[D]=B,A.messages=c.value}function J(D,B){c.value[D]=c.value[D]||{};const $={[D]:B};if(s)for(const he in $)Wn($,he)&&Jo($[he]);B=$[D],nl(B,c.value[D]),A.messages=c.value}function K(D){return u.value[D]||{}}function w(D,B){u.value[D]=B,A.datetimeFormats=u.value,Wd(A,D,B)}function P(D,B){u.value[D]=$t(u.value[D]||{},B),A.datetimeFormats=u.value,Wd(A,D,B)}function k(D){return f.value[D]||{}}function y(D,B){f.value[D]=B,A.numberFormats=f.value,$d(A,D,B)}function E(D,B){f.value[D]=$t(f.value[D]||{},B),A.numberFormats=f.value,$d(A,D,B)}Jd++,e&&xl&&(Zs(e.locale,D=>{o&&(a.value=D,A.locale=D,po(A,a.value,l.value))}),Zs(e.fallbackLocale,D=>{o&&(l.value=D,A.fallbackLocale=D,po(A,a.value,l.value))}));const N={id:Jd,locale:b,fallbackLocale:F,get inheritLocale(){return o},set inheritLocale(D){o=D,D&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,po(A,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:V,get modifiers(){return C},get pluralRules(){return L||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(D){h=D,A.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(D){p=D,A.fallbackWarn=p},get fallbackRoot(){return g},set fallbackRoot(D){g=D},get fallbackFormat(){return _},set fallbackFormat(D){_=D,A.fallbackFormat=_},get warnHtmlMessage(){return M},set warnHtmlMessage(D){M=D,A.warnHtmlMessage=D},get escapeParameter(){return v},set escapeParameter(D){v=D,A.escapeParameter=D},t:ce,getLocaleMessage:S,setLocaleMessage:re,mergeLocaleMessage:J,getPostTranslationHandler:ae,setPostTranslationHandler:Q,getMissingHandler:oe,setMissingHandler:Y,[k_]:de};return N.datetimeFormats=z,N.numberFormats=ne,N.rt=ue,N.te=Re,N.tm=O,N.d=Ee,N.n=Be,N.getDateTimeFormat=K,N.setDateTimeFormat=w,N.mergeDateTimeFormat=P,N.getNumberFormat=k,N.setNumberFormat=y,N.mergeNumberFormat=E,N[B_]=t,N[Tu]=U,N[Au]=ie,N[wu]=Z,N}function uS(n){const e=Pe(n.locale)?n.locale:Zo,t=Pe(n.fallbackLocale)||Ft(n.fallbackLocale)||rt(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:e,i=It(n.missing)?n.missing:void 0,s=lt(n.silentTranslationWarn)||Vr(n.silentTranslationWarn)?!n.silentTranslationWarn:!0,r=lt(n.silentFallbackWarn)||Vr(n.silentFallbackWarn)?!n.silentFallbackWarn:!0,o=lt(n.fallbackRoot)?n.fallbackRoot:!0,a=!!n.formatFallbackMessages,l=rt(n.modifiers)?n.modifiers:{},c=n.pluralizationRules,u=It(n.postTranslation)?n.postTranslation:void 0,f=Pe(n.warnHtmlInMessage)?n.warnHtmlInMessage!=="off":!0,h=!!n.escapeParameterHtml,p=lt(n.sync)?n.sync:!0;let g=n.messages;if(rt(n.sharedMessages)){const C=n.sharedMessages;g=Object.keys(C).reduce((A,H)=>{const T=A[H]||(A[H]={});return $t(T,C[H]),A},g||{})}const{__i18n:_,__root:m,__injectWithOption:d}=n,x=n.datetimeFormats,M=n.numberFormats,v=n.flatJson;return{locale:e,fallbackLocale:t,messages:g,flatJson:v,datetimeFormats:x,numberFormats:M,missing:i,missingWarn:s,fallbackWarn:r,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:n.messageResolver,inheritLocale:p,__i18n:_,__root:m,__injectWithOption:d}}function Cu(n={}){const e=Kf(uS(n)),{__extender:t}=n,i={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return lt(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(s){e.missingWarn=lt(s)?!s:s},get silentFallbackWarn(){return lt(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(s){e.fallbackWarn=lt(s)?!s:s},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,r){return e.te(s,r)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,r){e.setLocaleMessage(s,r)},mergeLocaleMessage(s,r){e.mergeLocaleMessage(s,r)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,r){e.setDateTimeFormat(s,r)},mergeDateTimeFormat(s,r){e.mergeDateTimeFormat(s,r)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,r){e.setNumberFormat(s,r)},mergeNumberFormat(s,r){e.mergeNumberFormat(s,r)}};return i.__extender=t,i}function fS(n,e,t){return{beforeCreate(){const i=Qo();if(!i)throw On(wn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const r=s.i18n;if(s.__i18n&&(r.__i18n=s.__i18n),r.__root=e,this===this.$root)this.$i18n=ep(n,r);else{r.__injectWithOption=!0,r.__extender=t.__vueI18nExtend,this.$i18n=Cu(r);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=ep(n,s);else{this.$i18n=Cu({__i18n:s.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:e});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=n;s.__i18nGlobal&&V_(e,s,s),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$te=(r,o)=>this.$i18n.te(r,o),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),t.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Qo();if(!i)throw On(wn.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),t.__deleteInstance(i),delete this.$i18n}}}function ep(n,e){n.locale=e.locale||n.locale,n.fallbackLocale=e.fallbackLocale||n.fallbackLocale,n.missing=e.missing||n.missing,n.silentTranslationWarn=e.silentTranslationWarn||n.silentFallbackWarn,n.silentFallbackWarn=e.silentFallbackWarn||n.silentFallbackWarn,n.formatFallbackMessages=e.formatFallbackMessages||n.formatFallbackMessages,n.postTranslation=e.postTranslation||n.postTranslation,n.warnHtmlInMessage=e.warnHtmlInMessage||n.warnHtmlInMessage,n.escapeParameterHtml=e.escapeParameterHtml||n.escapeParameterHtml,n.sync=e.sync||n.sync,n.__composer[k_](e.pluralizationRules||n.pluralizationRules);const t=qf(n.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(t).forEach(i=>n.mergeLocaleMessage(i,t[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>n.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>n.mergeNumberFormat(i,e.numberFormats[i])),n}const Zf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:n=>n==="parent"||n==="global",default:"parent"},i18n:{type:Object}};function hS({slots:n},e){return e.length===1&&e[0]==="default"?(n.default?n.default():[]).reduce((i,s)=>[...i,...s.type===Xt?s.children:[s]],[]):e.reduce((t,i)=>{const s=n[i];return s&&(t[i]=s()),t},At())}function G_(){return Xt}const dS=oa({name:"i18n-t",props:$t({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:n=>Gt(n)||!isNaN(n)}},Zf),setup(n,e){const{slots:t,attrs:i}=e,s=n.i18n||ua({useScope:n.scope,__useComponent:!0});return()=>{const r=Object.keys(t).filter(f=>f[0]!=="_"),o=At();n.locale&&(o.locale=n.locale),n.plural!==void 0&&(o.plural=Pe(n.plural)?+n.plural:n.plural);const a=hS(e,r),l=s[Tu](n.keypath,a,o),c=$t(At(),i),u=Pe(n.tag)||vt(n.tag)?n.tag:G_();return ca(u,c,l)}}}),tp=dS;function pS(n){return Ft(n)&&!Pe(n[0])}function z_(n,e,t,i){const{slots:s,attrs:r}=e;return()=>{const o={part:!0};let a=At();n.locale&&(o.locale=n.locale),Pe(n.format)?o.key=n.format:vt(n.format)&&(Pe(n.format.key)&&(o.key=n.format.key),a=Object.keys(n.format).reduce((h,p)=>t.includes(p)?$t(At(),h,{[p]:n.format[p]}):h,At()));const l=i(n.value,o,a);let c=[o.key];Ft(l)?c=l.map((h,p)=>{const g=s[h.type],_=g?g({[h.type]:h.value,index:p,parts:l}):[h.value];return pS(_)&&(_[0].key=`${h.type}-${p}`),_}):Pe(l)&&(c=[l]);const u=$t(At(),r),f=Pe(n.tag)||vt(n.tag)?n.tag:G_();return ca(f,u,c)}}const mS=oa({name:"i18n-n",props:$t({value:{type:Number,required:!0},format:{type:[String,Object]}},Zf),setup(n,e){const t=n.i18n||ua({useScope:n.scope,__useComponent:!0});return z_(n,e,O_,(...i)=>t[wu](...i))}}),np=mS;function gS(n,e){const t=n;if(n.mode==="composition")return t.__getInstance(e)||n.global;{const i=t.__getInstance(e);return i!=null?i.__composer:n.global.__composer}}function _S(n){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw On(wn.UNEXPECTED_ERROR);const c=gS(n,a.$),u=ip(l);return[Reflect.apply(c.t,c,[...sp(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);xl&&(o.__i18nWatcher=Zs(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{xl&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=ip(a);o.textContent=Reflect.apply(l.t,l,[...sp(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function ip(n){if(Pe(n))return{path:n};if(rt(n)){if(!("path"in n))throw On(wn.REQUIRED_VALUE,"path");return n}else throw On(wn.INVALID_VALUE)}function sp(n){const{path:e,locale:t,args:i,choice:s,plural:r}=n,o={},a=i||{};return Pe(t)&&(o.locale=t),Gt(s)&&(o.plural=s),Gt(r)&&(o.plural=r),[e,a,o]}function vS(n,e,...t){const i=rt(t[0])?t[0]:{};(lt(i.globalInstall)?i.globalInstall:!0)&&([tp.name,"I18nT"].forEach(r=>n.component(r,tp)),[np.name,"I18nN"].forEach(r=>n.component(r,np)),[op.name,"I18nD"].forEach(r=>n.component(r,op))),n.directive("t",_S(e))}const xS=As("global-vue-i18n");function yS(n={}){const e=__VUE_I18N_LEGACY_API__&&lt(n.legacy)?n.legacy:__VUE_I18N_LEGACY_API__,t=lt(n.globalInjection)?n.globalInjection:!0,i=new Map,[s,r]=ES(n,e),o=As("");function a(f){return i.get(f)||null}function l(f,h){i.set(f,h)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...h){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),rt(h[0])){const _=h[0];u.__composerExtend=_.__composerExtend,u.__vueI18nExtend=_.__vueI18nExtend}let p=null;!e&&t&&(p=CS(f,u.global)),__VUE_I18N_FULL_INSTALL__&&vS(f,u,...h),__VUE_I18N_LEGACY_API__&&e&&f.mixin(fS(r,r.__composer,u));const g=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),g()}},get global(){return r},dispose(){s.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function ua(n={}){const e=Qo();if(e==null)throw On(wn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw On(wn.NOT_INSTALLED);const t=MS(e),i=bS(t),s=H_(e),r=SS(n,s);if(r==="global")return V_(i,n,s),i;if(r==="parent"){let l=TS(t,e,n.__useComponent);return l==null&&(l=i),l}const o=t;let a=o.__getInstance(e);if(a==null){const l=$t({},n);"__i18n"in s&&(l.__i18n=s.__i18n),i&&(l.__root=i),a=Kf(l),o.__composerExtend&&(a[Ru]=o.__composerExtend(a)),wS(o,e,a),o.__setInstance(e,a)}return a}function ES(n,e){const t=u0(),i=__VUE_I18N_LEGACY_API__&&e?t.run(()=>Cu(n)):t.run(()=>Kf(n));if(i==null)throw On(wn.UNEXPECTED_ERROR);return[t,i]}function MS(n){const e=$n(n.isCE?xS:n.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw On(n.isCE?wn.NOT_INSTALLED_WITH_PROVIDE:wn.UNEXPECTED_ERROR);return e}function SS(n,e){return zl(n)?"__i18n"in e?"local":"global":n.useScope?n.useScope:"local"}function bS(n){return n.mode==="composition"?n.global:n.global.__composer}function TS(n,e,t=!1){let i=null;const s=e.root;let r=AS(e,t);for(;r!=null;){const o=n;if(n.mode==="composition")i=o.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(r);a!=null&&(i=a.__composer,t&&i&&!i[B_]&&(i=null))}if(i!=null||s===r)break;r=r.parent}return i}function AS(n,e=!1){return n==null?null:e&&n.vnode.ctx||n.parent}function wS(n,e,t){no(()=>{},e),bs(()=>{const i=t;n.__deleteInstance(e);const s=i[Ru];s&&(s(),delete i[Ru])},e)}const RS=["locale","fallbackLocale","availableLocales"],rp=["t","rt","d","n","tm","te"];function CS(n,e){const t=Object.create(null);return RS.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r)throw On(wn.UNEXPECTED_ERROR);const o=tn(r.value)?{get(){return r.value.value},set(a){r.value.value=a}}:{get(){return r.get&&r.get()}};Object.defineProperty(t,s,o)}),n.config.globalProperties.$i18n=t,rp.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r||!r.value)throw On(wn.UNEXPECTED_ERROR);Object.defineProperty(n.config.globalProperties,`$${s}`,r)}),()=>{delete n.config.globalProperties.$i18n,rp.forEach(s=>{delete n.config.globalProperties[`$${s}`]})}}const LS=oa({name:"i18n-d",props:$t({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Zf),setup(n,e){const t=n.i18n||ua({useScope:n.scope,__useComponent:!0});return z_(n,e,N_,(...i)=>t[Au](...i))}}),op=LS;aS();HM(EM);VM(FM);GM(Eu);if(__INTLIFY_PROD_DEVTOOLS__){const n=Ys();n.__INTLIFY__=!0,MM(n.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const hi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},PS={class:"navbar"},IS={class:"links"},DS={class:"nav-end"},NS={class:"locale-switch",role:"radiogroup","aria-label":"Language"},OS=["aria-checked"],US=["aria-checked"],FS={class:"drawer-panel"},kS={class:"drawer-locale"},BS={class:"locale-switch",role:"radiogroup","aria-label":"Language"},HS={__name:"NavBar",setup(n){const{locale:e}=ua();a_();const t=tt(!1);function i(r){e.value=r,localStorage.setItem("mars-locale",r)}function s(){t.value=!1}return(r,o)=>(nt(),_t(Xt,null,[q("nav",PS,[Ke(Ue(ds),{to:"/",class:"brand"},{default:Ct(()=>[Pn(ye(r.$t("nav.brand")),1)]),_:1}),q("div",IS,[Ke(Ue(ds),{to:"/","exact-active-class":"active"},{default:Ct(()=>[Pn(ye(r.$t("nav.elevationGlobe")),1)]),_:1}),Ke(Ue(ds),{to:"/gis","active-class":"active"},{default:Ct(()=>[Pn(ye(r.$t("nav.marsGis")),1)]),_:1}),Ke(Ue(ds),{to:"/about","active-class":"active"},{default:Ct(()=>[Pn(ye(r.$t("nav.about")),1)]),_:1})]),q("div",DS,[q("div",NS,[q("span",{class:ei(["locale-track",{"at-right":Ue(e)==="pt-BR"}])},null,2),q("button",{class:ei(["locale-opt",{selected:Ue(e)==="en"}]),onClick:o[0]||(o[0]=a=>i("en")),"aria-checked":Ue(e)==="en",role:"radio"},"EN",10,OS),q("button",{class:ei(["locale-opt",{selected:Ue(e)==="pt-BR"}]),onClick:o[1]||(o[1]=a=>i("pt-BR")),"aria-checked":Ue(e)==="pt-BR",role:"radio"},"PT",10,US)]),q("button",{class:ei(["hamburger",{open:t.value}]),onClick:o[2]||(o[2]=a=>t.value=!t.value),"aria-label":"Menu"},[...o[5]||(o[5]=[q("span",null,null,-1),q("span",null,null,-1),q("span",null,null,-1)])],2)])]),Ke(er,{name:"drawer"},{default:Ct(()=>[t.value?(nt(),_t("div",{key:0,class:"mobile-drawer",onClick:yy(s,["self"])},[q("div",FS,[Ke(Ue(ds),{to:"/","exact-active-class":"active",onClick:s},{default:Ct(()=>[Pn(ye(r.$t("nav.elevationGlobe")),1)]),_:1}),Ke(Ue(ds),{to:"/gis","active-class":"active",onClick:s},{default:Ct(()=>[Pn(ye(r.$t("nav.marsGis")),1)]),_:1}),Ke(Ue(ds),{to:"/about","active-class":"active",onClick:s},{default:Ct(()=>[Pn(ye(r.$t("nav.about")),1)]),_:1}),q("div",kS,[q("div",BS,[q("span",{class:ei(["locale-track",{"at-right":Ue(e)==="pt-BR"}])},null,2),q("button",{class:ei(["locale-opt",{selected:Ue(e)==="en"}]),onClick:o[3]||(o[3]=a=>i("en")),role:"radio"},"EN",2),q("button",{class:ei(["locale-opt",{selected:Ue(e)==="pt-BR"}]),onClick:o[4]||(o[4]=a=>i("pt-BR")),role:"radio"},"PT",2)])])])])):Dt("",!0)]),_:1})],64))}},VS=hi(HS,[["__scopeId","data-v-327f9145"]]),GS={class:"main"},zS={__name:"App",setup(n){return(e,t)=>{const i=Ng("router-view");return nt(),_t(Xt,null,[Ke(VS),q("main",GS,[Ke(i)])],64)}}},WS=hi(zS,[["__scopeId","data-v-605746d0"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="172",Nr={ROTATE:0,DOLLY:1,PAN:2},Rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},XS=0,ap=1,$S=2,W_=1,jS=2,Gi=3,ts=0,xn=1,ti=2,Ms=0,Js=1,El=2,lp=3,cp=4,YS=5,Xs=100,qS=101,KS=102,ZS=103,JS=104,QS=200,eb=201,tb=202,nb=203,Lu=204,Pu=205,ib=206,sb=207,rb=208,ob=209,ab=210,lb=211,cb=212,ub=213,fb=214,Iu=0,Du=1,Nu=2,zr=3,Ou=4,Uu=5,Fu=6,ku=7,X_=0,hb=1,db=2,Ss=0,pb=1,mb=2,gb=3,_b=4,vb=5,xb=6,yb=7,up="attached",Eb="detached",$_=300,Wr=301,Xr=302,Bu=303,Hu=304,$l=306,$r=1e3,xs=1001,Ml=1002,yn=1003,j_=1004,Ao=1005,Dn=1006,il=1007,qi=1008,ns=1009,Y_=1010,q_=1011,ea=1012,Qf=1013,tr=1014,ri=1015,fa=1016,eh=1017,th=1018,jr=1020,K_=35902,Z_=1021,J_=1022,Nn=1023,Q_=1024,ev=1025,Or=1026,Yr=1027,nh=1028,ih=1029,tv=1030,sh=1031,rh=1033,sl=33776,rl=33777,ol=33778,al=33779,Vu=35840,Gu=35841,zu=35842,Wu=35843,Xu=36196,$u=37492,ju=37496,Yu=37808,qu=37809,Ku=37810,Zu=37811,Ju=37812,Qu=37813,ef=37814,tf=37815,nf=37816,sf=37817,rf=37818,of=37819,af=37820,lf=37821,ll=36492,cf=36494,uf=36495,nv=36283,ff=36284,hf=36285,df=36286,ta=2300,na=2301,xc=2302,fp=2400,hp=2401,dp=2402,Mb=2500,Sb=0,iv=1,pf=2,bb=3200,Tb=3201,sv=0,Ab=1,vs="",Jt="srgb",En="srgb-linear",Sl="linear",bt="srgb",ar=7680,pp=519,wb=512,Rb=513,Cb=514,rv=515,Lb=516,Pb=517,Ib=518,Db=519,mf=35044,mp="300 es",Ki=2e3,bl=2001;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gp=1234567;const Uo=Math.PI/180,qr=180/Math.PI;function ai(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function oh(n,e){return(n%e+e)%e}function Nb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ob(n,e,t){return n!==e?(t-n)/(e-n):0}function Fo(n,e,t){return(1-t)*n+t*e}function Ub(n,e,t,i){return Fo(n,e,1-Math.exp(-t*i))}function Fb(n,e=1){return e-Math.abs(oh(n,e*2)-e)}function kb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Hb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Vb(n,e){return n+Math.random()*(e-n)}function Gb(n){return n*(.5-Math.random())}function zb(n){n!==void 0&&(gp=n);let e=gp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wb(n){return n*Uo}function Xb(n){return n*qr}function $b(n){return(n&n-1)===0&&n!==0}function jb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yb(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qb(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tl={DEG2RAD:Uo,RAD2DEG:qr,generateUUID:ai,clamp:et,euclideanModulo:oh,mapLinear:Nb,inverseLerp:Ob,lerp:Fo,damp:Ub,pingpong:Fb,smoothstep:kb,smootherstep:Bb,randInt:Hb,randFloat:Vb,randFloatSpread:Gb,seededRandom:zb,degToRad:Wb,radToDeg:Xb,isPowerOfTwo:$b,ceilPowerOfTwo:jb,floorPowerOfTwo:Yb,setQuaternionFromProperEuler:qb,normalize:Mt,denormalize:ni};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],x=s[1],M=s[4],v=s[7],C=s[2],L=s[5],A=s[8];return r[0]=o*_+a*x+l*C,r[3]=o*m+a*M+l*L,r[6]=o*d+a*v+l*A,r[1]=c*_+u*x+f*C,r[4]=c*m+u*M+f*L,r[7]=c*d+u*v+f*A,r[2]=h*_+p*x+g*C,r[5]=h*m+p*M+g*L,r[8]=h*d+p*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yc.makeScale(e,t)),this}rotate(e){return this.premultiply(yc.makeRotation(-e)),this}translate(e,t){return this.premultiply(yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yc=new Je;function ov(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kb(){const n=ia("canvas");return n.style.display="block",n}const _p={};function wr(n){n in _p||(_p[n]=!0,console.warn(n))}function Zb(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Jb(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qb(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vp=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xp=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eT(){const n={enabled:!0,workingColorSpace:En,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=Ur(s.r),s.g=Ur(s.g),s.b=Ur(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vs?Sl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[En]:{primaries:e,whitePoint:i,transfer:Sl,toXYZ:vp,fromXYZ:xp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:vp,fromXYZ:xp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const st=eT();function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let lr;class tT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=ia("canvas")),lr.width=e.width,lr.height=e.height;const i=lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nT=0;class av{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ec(s[o].image)):r.push(Ec(s[o]))}else r=Ec(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ec(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iT=0;class jt extends sr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=xs,s=xs,r=Dn,o=qi,a=Nn,l=ns,c=jt.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=ai(),this.name="",this.source=new av(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=$_;jt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(p+1)/2,C=(d+1)/2,L=(u+h)/4,A=(f+_)/4,H=(g+m)/4;return M>v&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=L/i,r=A/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=L/s,r=H/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=A/r,s=H/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sT extends sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new jt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new av(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends sT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lv extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rT extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*_,x=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const C=Math.sqrt(M),L=Math.atan2(C,d*x);m=Math.sin(m*L)/C,a=Math.sin(a*L)/C}const v=a*x;if(l=l*m+h*v,c=c*m+p*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mc=new G,yp=new Yn;class wi{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Ta.subVectors(this.max,mo),cr.subVectors(e.a,mo),ur.subVectors(e.b,mo),fr.subVectors(e.c,mo),os.subVectors(ur,cr),as.subVectors(fr,ur),Os.subVectors(cr,fr);let t=[0,-os.z,os.y,0,-as.z,as.y,0,-Os.z,Os.y,os.z,0,-os.x,as.z,0,-as.x,Os.z,0,-Os.x,-os.y,os.x,0,-as.y,as.x,0,-Os.y,Os.x,0];return!Sc(t,cr,ur,fr,Ta)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,cr,ur,fr,Ta))?!1:(Aa.crossVectors(os,as),t=[Aa.x,Aa.y,Aa.z],Sc(t,cr,ur,fr,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new G,new G,new G,new G,new G,new G,new G,new G],Zn=new G,ba=new wi,cr=new G,ur=new G,fr=new G,os=new G,as=new G,Os=new G,mo=new G,Ta=new G,Aa=new G,Us=new G;function Sc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Us.fromArray(n,r);const a=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),u=i.dot(Us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const oT=new wi,go=new G,bc=new G;class Ri{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):oT.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const t=go.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(go,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(bc)),this.expandByPoint(go.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new G,Tc=new G,wa=new G,ls=new G,Ac=new G,Ra=new G,wc=new G;class io{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Tc.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(Tc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wa),a=ls.dot(this.direction),l=-ls.dot(wa),c=ls.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Tc).addScaledVector(wa,h),p}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,s,r){Ac.subVectors(t,e),Ra.subVectors(i,e),wc.crossVectors(Ac,Ra);let o=this.direction.dot(wc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,e);const l=a*this.direction.dot(Ra.crossVectors(ls,Ra));if(l<0)return null;const c=a*this.direction.dot(Ac.cross(ls));if(c<0||l+c>o)return null;const u=-a*ls.dot(wc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,s,r,o,a,l,c,u,f,h,p,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,p,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aT,e,lT)}lookAt(e,t,i){const s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),cs.crossVectors(i,Cn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),cs.crossVectors(i,Cn)),cs.normalize(),Ca.crossVectors(Cn,cs),s[0]=cs.x,s[4]=Ca.x,s[8]=Cn.x,s[1]=cs.y,s[5]=Ca.y,s[9]=Cn.y,s[2]=cs.z,s[6]=Ca.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],x=i[3],M=i[7],v=i[11],C=i[15],L=s[0],A=s[4],H=s[8],T=s[12],b=s[1],F=s[5],V=s[9],z=s[13],ne=s[2],ae=s[6],Q=s[10],oe=s[14],Y=s[3],ge=s[7],ce=s[11],ue=s[15];return r[0]=o*L+a*b+l*ne+c*Y,r[4]=o*A+a*F+l*ae+c*ge,r[8]=o*H+a*V+l*Q+c*ce,r[12]=o*T+a*z+l*oe+c*ue,r[1]=u*L+f*b+h*ne+p*Y,r[5]=u*A+f*F+h*ae+p*ge,r[9]=u*H+f*V+h*Q+p*ce,r[13]=u*T+f*z+h*oe+p*ue,r[2]=g*L+_*b+m*ne+d*Y,r[6]=g*A+_*F+m*ae+d*ge,r[10]=g*H+_*V+m*Q+d*ce,r[14]=g*T+_*z+m*oe+d*ue,r[3]=x*L+M*b+v*ne+C*Y,r[7]=x*A+M*F+v*ae+C*ge,r[11]=x*H+M*V+v*Q+C*ce,r[15]=x*T+M*z+v*oe+C*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*p-i*l*p)+_*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],x=f*m*c-_*h*c+_*l*p-a*m*p-f*l*d+a*h*d,M=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,v=u*_*c-g*f*c+g*a*p-o*_*p-u*a*d+o*f*d,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,L=t*x+i*M+s*v+r*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return e[0]=x*A,e[1]=(_*h*r-f*m*r-_*s*p+i*m*p+f*s*d-i*h*d)*A,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*A,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*p-i*l*p)*A,e[4]=M*A,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*d+t*h*d)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*A,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*A,e[8]=v*A,e[9]=(g*f*r-u*_*r-g*i*p+t*_*p+u*i*d-t*f*d)*A,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*d+t*a*d)*A,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*A,e[12]=C*A,e[13]=(u*_*s-g*f*s+g*i*h-t*_*h-u*i*m+t*f*m)*A,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,_=o*u,m=o*f,d=a*f,x=l*c,M=l*u,v=l*f,C=i.x,L=i.y,A=i.z;return s[0]=(1-(_+d))*C,s[1]=(p+v)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(p-v)*L,s[5]=(1-(h+d))*L,s[6]=(m+x)*L,s[7]=0,s[8]=(g+M)*A,s[9]=(m-x)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=hr.set(s[0],s[1],s[2]).length();const o=hr.set(s[4],s[5],s[6]).length(),a=hr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);const c=1/r,u=1/o,f=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,t.setFromRotationMatrix(Jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ki){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let p,g;if(a===Ki)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ki){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,p=(i+s)*u;let g,_;if(a===Ki)g=(o+r)*f,_=-2*f;else if(a===bl)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hr=new G,Jn=new je,aT=new G(0,0,0),lT=new G(1,1,1),cs=new G,Ca=new G,Cn=new G,Ep=new je,Mp=new Yn;class fi{constructor(e=0,t=0,i=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mp.setFromEuler(this),this.setFromQuaternion(Mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cT=0;const Sp=new G,dr=new Yn,ki=new je,La=new G,_o=new G,uT=new G,fT=new Yn,bp=new G(1,0,0),Tp=new G(0,1,0),Ap=new G(0,0,1),wp={type:"added"},hT={type:"removed"},pr={type:"childadded",child:null},Rc={type:"childremoved",child:null};class Lt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new G,t=new fi,i=new Yn,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Je}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(bp,e)}rotateY(e){return this.rotateOnAxis(Tp,e)}rotateZ(e){return this.rotateOnAxis(Ap,e)}translateOnAxis(e,t){return Sp.copy(e).applyQuaternion(this.quaternion),this.position.add(Sp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bp,e)}translateY(e){return this.translateOnAxis(Tp,e)}translateZ(e){return this.translateOnAxis(Ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?La.copy(e):La.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(_o,La,this.up):ki.lookAt(La,_o,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(ki),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wp),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hT),Rc.child=e,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wp),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,uT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,fT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new G(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new G,Bi=new G,Cc=new G,Hi=new G,mr=new G,gr=new G,Rp=new G,Lc=new G,Pc=new G,Ic=new G,Dc=new ut,Nc=new ut,Oc=new ut;class ii{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qn.subVectors(e,t),s.cross(Qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qn.subVectors(s,t),Bi.subVectors(i,t),Cc.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(Bi),l=Qn.dot(Cc),c=Bi.dot(Bi),u=Bi.dot(Cc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Dc.setScalar(0),Nc.setScalar(0),Oc.setScalar(0),Dc.fromBufferAttribute(e,t),Nc.fromBufferAttribute(e,i),Oc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Dc,r.x),o.addScaledVector(Nc,r.y),o.addScaledVector(Oc,r.z),o}static isFrontFacing(e,t,i,s){return Qn.subVectors(i,t),Bi.subVectors(e,t),Qn.cross(Bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),Qn.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;mr.subVectors(s,i),gr.subVectors(r,i),Lc.subVectors(e,i);const l=mr.dot(Lc),c=gr.dot(Lc);if(l<=0&&c<=0)return t.copy(i);Pc.subVectors(e,s);const u=mr.dot(Pc),f=gr.dot(Pc);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(mr,o);Ic.subVectors(e,r);const p=mr.dot(Ic),g=gr.dot(Ic);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(gr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Rp.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(Rp,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(mr,o).addScaledVector(gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Uc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=oh(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Uc(o,r,e+1/3),this.g=Uc(o,r,e),this.b=Uc(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=cv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return st.fromWorkingColorSpace(rn.copy(this),e),Math.round(et(rn.r*255,0,255))*65536+Math.round(et(rn.g*255,0,255))*256+Math.round(et(rn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(rn.copy(this),t);const i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Jt){st.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,s=rn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Pa);const i=Fo(us.h,Pa.h,t),s=Fo(us.s,Pa.s,t),r=Fo(us.l,Pa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new He;He.NAMES=cv;let dT=0;class Ti extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Js,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Pu,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lu&&(i.blendSrc=this.blendSrc),this.blendDst!==Pu&&(i.blendDst=this.blendDst),this.blendEquation!==Xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ys extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=X_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new G,Ia=new ze;class kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mf,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mf&&(e.usage=this.usage),e}}class uv extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fv extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jn extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pT=0;const Vn=new je,Fc=new Lt,_r=new G,Ln=new wi,vo=new wi,Zt=new G;class Fn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?fv:uv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Ln.min,vo.min),Ln.expandByPoint(Zt),Zt.addVectors(Ln.max,vo.max),Ln.expandByPoint(Zt)):(Ln.expandByPoint(vo.min),Ln.expandByPoint(vo.max))}Ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(e,c),Zt.add(_r)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<i.count;H++)a[H]=new G,l[H]=new G;const c=new G,u=new G,f=new G,h=new ze,p=new ze,g=new ze,_=new G,m=new G;function d(H,T,b){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),h.fromBufferAttribute(r,H),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,b),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const F=1/(p.x*g.y-g.x*p.y);isFinite(F)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(F),a[H].add(_),a[T].add(_),a[b].add(_),l[H].add(m),l[T].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let H=0,T=x.length;H<T;++H){const b=x[H],F=b.start,V=b.count;for(let z=F,ne=F+V;z<ne;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new G,v=new G,C=new G,L=new G;function A(H){C.fromBufferAttribute(s,H),L.copy(C);const T=a[H];M.copy(T),M.sub(C.multiplyScalar(C.dot(T))).normalize(),v.crossVectors(L,T);const F=v.dot(l[H])<0?-1:1;o.setXYZW(H,M.x,M.y,M.z,F)}for(let H=0,T=x.length;H<T;++H){const b=x[H],F=b.start,V=b.count;for(let z=F,ne=F+V;z<ne;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new kt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cp=new je,Fs=new io,Da=new Ri,Lp=new G,Na=new G,Oa=new G,Ua=new G,kc=new G,Fa=new G,Pp=new G,ka=new G;class en extends Lt{constructor(e=new Fn,t=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(kc.fromBufferAttribute(f,e),o?Fa.addScaledVector(kc,u):Fa.addScaledVector(kc.sub(t),u))}t.add(Fa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),!(Da.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Da,Lp)===null||Fs.origin.distanceToSquared(Lp)>(e.far-e.near)**2))&&(Cp.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Cp),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,C=M;v<C;v+=3){const L=a.getX(v),A=a.getX(v+1),H=a.getX(v+2);s=Ba(this,d,e,i,c,u,f,L,A,H),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Ba(this,o,e,i,c,u,f,x,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,C=M;v<C;v+=3){const L=v,A=v+1,H=v+2;s=Ba(this,d,e,i,c,u,f,L,A,H),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=m,M=m+1,v=m+2;s=Ba(this,o,e,i,c,u,f,x,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function mT(n,e,t,i,s,r,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ts,a),l===null)return null;ka.copy(a),ka.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:n}}function Ba(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Na),n.getVertexPosition(l,Oa),n.getVertexPosition(c,Ua);const u=mT(n,e,t,i,Na,Oa,Ua,Pp);if(u){const f=new G;ii.getBarycoord(Pp,Na,Oa,Ua,f),s&&(u.uv=ii.getInterpolatedAttribute(s,a,l,c,f,new ze)),r&&(u.uv1=ii.getInterpolatedAttribute(r,a,l,c,f,new ze)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};ii.getNormal(Na,Oa,Ua,h.normal),u.face=h,u.barycoord=f}return u}class ha extends Fn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(f,2));function g(_,m,d,x,M,v,C,L,A,H,T){const b=v/A,F=C/H,V=v/2,z=C/2,ne=L/2,ae=A+1,Q=H+1;let oe=0,Y=0;const ge=new G;for(let ce=0;ce<Q;ce++){const ue=ce*F-z;for(let Ee=0;Ee<ae;Ee++){const Be=Ee*b-V;ge[_]=Be*x,ge[m]=ue*M,ge[d]=ne,c.push(ge.x,ge.y,ge.z),ge[_]=0,ge[m]=0,ge[d]=L>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Ee/A),f.push(1-ce/H),oe+=1}}for(let ce=0;ce<H;ce++)for(let ue=0;ue<A;ue++){const Ee=h+ue+ae*ce,Be=h+ue+ae*(ce+1),ee=h+(ue+1)+ae*(ce+1),fe=h+(ue+1)+ae*ce;l.push(Ee,Be,fe),l.push(Be,ee,fe),Y+=6}a.addGroup(p,Y,T),p+=Y,h+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function pn(n){const e={};for(let t=0;t<n.length;t++){const i=Kr(n[t]);for(const s in i)e[s]=i[s]}return e}function gT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const dv={clone:Kr,merge:pn};var _T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_T,this.fragmentShader=vT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=gT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pv extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new G,Ip=new ze,Dp=new ze;class ln extends pv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Ip,Dp),t.subVectors(Dp,Ip)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,xr=1;class xT extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(vr,xr,e,t);s.layers=this.layers,this.add(s);const r=new ln(vr,xr,e,t);r.layers=this.layers,this.add(r);const o=new ln(vr,xr,e,t);o.layers=this.layers,this.add(o);const a=new ln(vr,xr,e,t);a.layers=this.layers,this.add(a);const l=new ln(vr,xr,e,t);l.layers=this.layers,this.add(l);const c=new ln(vr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class mv extends jt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yT extends nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new mv(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ha(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Ms});r.uniforms.tEquirect.value=t;const o=new en(s,r),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=Dn),new xT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class lh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new lh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ch extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ET{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mf,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new G;class uh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Np=new G,Op=new ut,Up=new ut,MT=new G,Fp=new je,Ha=new G,Bc=new Ri,kp=new je,Hc=new io;class ST extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=up,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ha),this.boundingBox.expandByPoint(Ha)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ha),this.boundingSphere.expandByPoint(Ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bc.copy(this.boundingSphere),Bc.applyMatrix4(s),e.ray.intersectsSphere(Bc)!==!1&&(kp.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(kp),!(this.boundingBox!==null&&Hc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===up?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Eb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Op.fromBufferAttribute(s.attributes.skinIndex,e),Up.fromBufferAttribute(s.attributes.skinWeight,e),Np.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Up.getComponent(r);if(o!==0){const a=Op.getComponent(r);Fp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(MT.copy(Np).applyMatrix4(Fp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gv extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fh extends jt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=yn,u=yn,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bp=new je,bT=new je;class hh{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:bT;Bp.multiplyMatrices(a,t[r]),Bp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new hh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new fh(t,e,e,Nn,ri);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gv),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class gf extends kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yr=new je,Hp=new je,Va=[],Vp=new wi,TT=new je,xo=new en,yo=new Ri;class AT extends en{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,TT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,yr),Vp.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(Vp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,yr),yo.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(xo.geometry=this.geometry,xo.material=this.material,xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(i),e.ray.intersectsSphere(yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),Hp.multiplyMatrices(i,yr),xo.matrixWorld=Hp,xo.raycast(e,Va);for(let o=0,a=Va.length;o<a;o++){const l=Va[o];l.instanceId=r,l.object=this,t.push(l)}Va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fh(new Float32Array(s*this.count),s,this.count,nh,ri));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Vc=new G,wT=new G,RT=new Je;class gs{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Vc.subVectors(i,t).cross(wT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||RT.getNormalMatrix(e),s=this.coplanarPoint(Vc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new Ri,Ga=new G;class dh{constructor(e=new gs,t=new gs,i=new gs,s=new gs,r=new gs,o=new gs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],x=s[13],M=s[14],v=s[15];if(i[0].setComponents(l-r,h-c,m-p,v-d).normalize(),i[1].setComponents(l+r,h+c,m+p,v+d).normalize(),i[2].setComponents(l+o,h+u,m+g,v+x).normalize(),i[3].setComponents(l-o,h-u,m-g,v-x).normalize(),i[4].setComponents(l-a,h-f,m-_,v-M).normalize(),t===Ki)i[5].setComponents(l+a,h+f,m+_,v+M).normalize();else if(t===bl)i[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){return ks.center.set(0,0,0),ks.radius=.7071067811865476,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _v extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Al=new G,wl=new G,Gp=new je,Eo=new io,za=new Ri,Gc=new G,zp=new G;class ph extends Lt{constructor(e=new Fn,t=new _v){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Al.fromBufferAttribute(t,s-1),wl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Al.distanceTo(wl);e.setAttribute("lineDistance",new jn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;Gp.copy(s).invert(),Eo.copy(e.ray).applyMatrix4(Gp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),x=u.getX(_+1),M=Wa(this,e,Eo,l,d,x);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Wa(this,e,Eo,l,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=Wa(this,e,Eo,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Wa(this,e,Eo,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wa(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Al.fromBufferAttribute(o,s),wl.fromBufferAttribute(o,r),t.distanceSqToSegment(Al,wl,Gc,zp)>i)return;Gc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Gc);if(!(l<e.near||l>e.far))return{distance:l,point:zp.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Wp=new G,Xp=new G;class CT extends ph{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Wp.fromBufferAttribute(t,s),Xp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wp.distanceTo(Xp);e.setAttribute("lineDistance",new jn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LT extends ph{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vv extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $p=new je,_f=new io,Xa=new Ri,$a=new G;class xv extends Lt{constructor(e=new Fn,t=new vv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;$p.copy(s).invert(),_f.copy(e.ray).applyMatrix4($p);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=c.getX(g);$a.fromBufferAttribute(f,m),jp($a,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p;g<_;g++)$a.fromBufferAttribute(f,g),jp($a,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jp(n,e,t,i,s,r,o){const a=_f.distanceSqToPoint(n);if(a<t){const l=new G;_f.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Mi extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class PT extends jt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yv extends jt{constructor(e,t,i,s,r,o,a,l,c,u=Or){if(u!==Or&&u!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Or&&(i=tr),i===void 0&&u===Yr&&(i=jr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jl extends Fn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const x=d*h-o;for(let M=0;M<c;M++){const v=M*f-r;g.push(v,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const M=x+c*d,v=x+c*(d+1),C=x+1+c*(d+1),L=x+1+c*d;p.push(M,v,L),p.push(v,C,L)}this.setIndex(p),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class da extends Fn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new G,h=new G,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const x=[],M=d/i;let v=0;d===0&&o===0?v=.5/t:d===i&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const L=C/t;f.x=-e*Math.cos(s+L*r)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(s+L*r)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(L+v,1-M),x.push(c++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<t;x++){const M=u[d][x+1],v=u[d][x],C=u[d+1][x],L=u[d+1][x+1];(d!==0||o>0)&&p.push(M,v,L),(d!==i-1||l<Math.PI)&&p.push(v,C,L)}this.setIndex(p),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class IT extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yl extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sv,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ci extends Yl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class DT extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NT extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ja(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function OT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function UT(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Yp(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Ev(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class pa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class FT extends pa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fp,endingEnd:fp}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hp:r=e,a=2*t-i;break;case dp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hp:o=e,l=2*i-t;break;case dp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,d=-h*m+2*h*_-h*g,x=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let C=0;C!==a;++C)r[C]=d*o[u+C]+x*o[c+C]+M*o[l+C]+v*o[f+C];return r}}class kT extends pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class BT extends pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Li{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ja(t,this.TimeBufferType),this.values=ja(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ja(e.times,Array),values:ja(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new BT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new FT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case na:t=this.InterpolantFactoryMethodLinear;break;case xc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&OT(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,h=f-i,p=f+i;for(let g=0;g!==i;++g){const _=t[f+g];if(_!==t[h+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=na;class so extends Li{constructor(e,t,i){super(e,t,i)}}so.prototype.ValueTypeName="bool";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=ta;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;class Mv extends Li{}Mv.prototype.ValueTypeName="color";class Zr extends Li{}Zr.prototype.ValueTypeName="number";class HT extends pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Yn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Jr extends Li{InterpolantFactoryMethodLinear(e){return new HT(this.times,this.values,this.getValueSize(),e)}}Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class ro extends Li{constructor(e,t,i){super(e,t,i)}}ro.prototype.ValueTypeName="string";ro.prototype.ValueBufferType=Array;ro.prototype.DefaultInterpolation=ta;ro.prototype.InterpolantFactoryMethodLinear=void 0;ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Qr extends Li{}Qr.prototype.ValueTypeName="vector";class VT{constructor(e="",t=-1,i=[],s=Mb){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(zT(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Li.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=UT(l);l=Yp(l,1,u),c=Yp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Zr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,p,g,_){if(p.length!==0){const m=[],d=[];Ev(p,m,d,g),m.length!==0&&_.push(new f(h,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)p[h[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let x=0;x!==h[g].morphTargets.length;++x){const M=h[g];m.push(M.time),d.push(M.morphTarget===_?1:0)}s.push(new Zr(".morphTargetInfluence["+_+"]",m,d))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(Qr,p+".position",h,"pos",s),i(Jr,p+".quaternion",h,"rot",s),i(Qr,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function GT(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zr;case"vector":case"vector2":case"vector3":case"vector4":return Qr;case"color":return Mv;case"quaternion":return Jr;case"bool":case"boolean":return so;case"string":return ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function zT(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=GT(n.type);if(n.times===void 0){const t=[],i=[];Ev(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Es={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class WT{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const XT=new WT;class oo{constructor(e){this.manager=e!==void 0?e:XT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class $T extends Error{constructor(e,t){super(e),this.response=t}}class Sv extends oo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Es.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:i,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){x();function x(){f.read().then(({done:M,value:v})=>{if(M)d.close();else{_+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let L=0,A=u.length;L<A;L++){const H=u[L];H.onProgress&&H.onProgress(C)}d.enqueue(v),x()}},M=>{d.error(M)})}}});return new Response(m)}else throw new $T(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Es.add(e,c);const u=Vi[e];delete Vi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jT extends oo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Es.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ia("img");function l(){u(),Es.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class YT extends oo{constructor(e){super(e)}load(e,t,i,s){const r=new jt,o=new jT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ma extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class qT extends ma{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zc=new je,qp=new G,Kp=new G;class mh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dh,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;qp.setFromMatrixPosition(e.matrixWorld),t.position.copy(qp),Kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kp),t.updateMatrixWorld(),zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KT extends mh{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=qr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ZT extends ma{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new KT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zp=new je,Mo=new G,Wc=new G;class JT extends mh{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mo),Wc.copy(i.position),Wc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wc),i.updateMatrixWorld(),s.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Zp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zp)}}class QT extends ma{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new JT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gh extends pv{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eA extends mh{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eo extends ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new eA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _h extends ma{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ko{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tA extends oo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Es.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Es.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Es.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Es.add(e,l),r.manager.itemStart(e)}}class nA extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jp(){return performance.now()}const vh="\\[\\]\\.:\\/",iA=new RegExp("["+vh+"]","g"),xh="[^"+vh+"]",sA="[^"+vh.replace("\\.","")+"]",rA=/((?:WC+[\/:])*)/.source.replace("WC",xh),oA=/(WCOD+)?/.source.replace("WCOD",sA),aA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),lA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),cA=new RegExp("^"+rA+oA+aA+lA+"$"),uA=["material","materials","bones","map"];class fA{constructor(e,t,i){const s=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class St{constructor(e,t,i){this.path=t,this.parsedPath=i||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,i):new St(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iA,"")}static parseTrackName(e){const t=cA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);uA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=fA;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Qp=new je;class yh{constructor(e,t,i=0,s=1/0){this.ray=new io(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qp),this}intersectObject(e,t=!0,i=[]){return vf(e,this,i,t),i.sort(em),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)vf(e[s],this,i,t);return i.sort(em),i}}function em(n,e){return n.distance-e.distance}function vf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)vf(r[o],e,t,!0)}}class tm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hA extends sr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function nm(n,e,t,i){const s=dA(i);switch(t){case Z_:return n*e;case Q_:return n*e;case ev:return n*e*2;case nh:return n*e/s.components*s.byteLength;case ih:return n*e/s.components*s.byteLength;case tv:return n*e*2/s.components*s.byteLength;case sh:return n*e*2/s.components*s.byteLength;case J_:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case rh:return n*e*4/s.components*s.byteLength;case sl:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gu:case Wu:return Math.max(n,16)*Math.max(e,8)/4;case Vu:case zu:return Math.max(n,8)*Math.max(e,8)/2;case Xu:case $u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ku:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ef:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case af:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ll:case cf:case uf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nv:case ff:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hf:case df:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dA(n){switch(n){case ns:case Y_:return{byteLength:1,components:1};case ea:case q_:case fa:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case tr:case Qf:case ri:return{byteLength:4,components:1};case K_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tv(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pA(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var mA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gA=`#ifdef USE_ALPHAHASH
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
#endif`,_A=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EA=`#ifdef USE_AOMAP
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
#endif`,MA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SA=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RA=`#ifdef USE_IRIDESCENCE
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
#endif`,CA=`#ifdef USE_BUMPMAP
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
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kA=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,BA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HA=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XA="gl_FragColor = linearToOutputTexel( gl_FragColor );",$A=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qA=`#ifdef USE_ENVMAP
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
#endif`,KA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ew=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nw=`#ifdef USE_GRADIENTMAP
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
}`,iw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ow=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,aw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,dw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pw=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_w=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ew=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bw=`#if defined( USE_POINTS_UV )
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
#endif`,Tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ww=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lw=`#ifdef USE_MORPHTARGETS
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
#endif`,Pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fw=`#ifdef USE_NORMALMAP
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
#endif`,kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ww=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$w=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Jw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Qw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,eR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tR=`#ifdef USE_SKINNING
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
#endif`,nR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iR=`#ifdef USE_SKINNING
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
#endif`,sR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lR=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cR=`#ifdef USE_TRANSMISSION
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
#endif`,uR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mR=`uniform sampler2D t2D;
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
}`,gR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_R=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yR=`#include <common>
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
}`,ER=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MR=`#define DISTANCE
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
}`,SR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AR=`uniform float scale;
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
}`,wR=`uniform vec3 diffuse;
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
}`,RR=`#include <common>
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
}`,CR=`uniform vec3 diffuse;
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
}`,LR=`#define LAMBERT
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
}`,PR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,IR=`#define MATCAP
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
}`,DR=`#define MATCAP
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
}`,NR=`#define NORMAL
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
}`,OR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UR=`#define PHONG
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
}`,FR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,kR=`#define STANDARD
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
}`,BR=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,HR=`#define TOON
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
}`,VR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,GR=`uniform float size;
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
}`,zR=`uniform vec3 diffuse;
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
}`,WR=`#include <common>
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
}`,XR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$R=`uniform float rotation;
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
}`,jR=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:mA,alphahash_pars_fragment:gA,alphamap_fragment:_A,alphamap_pars_fragment:vA,alphatest_fragment:xA,alphatest_pars_fragment:yA,aomap_fragment:EA,aomap_pars_fragment:MA,batching_pars_vertex:SA,batching_vertex:bA,begin_vertex:TA,beginnormal_vertex:AA,bsdfs:wA,iridescence_fragment:RA,bumpmap_pars_fragment:CA,clipping_planes_fragment:LA,clipping_planes_pars_fragment:PA,clipping_planes_pars_vertex:IA,clipping_planes_vertex:DA,color_fragment:NA,color_pars_fragment:OA,color_pars_vertex:UA,color_vertex:FA,common:kA,cube_uv_reflection_fragment:BA,defaultnormal_vertex:HA,displacementmap_pars_vertex:VA,displacementmap_vertex:GA,emissivemap_fragment:zA,emissivemap_pars_fragment:WA,colorspace_fragment:XA,colorspace_pars_fragment:$A,envmap_fragment:jA,envmap_common_pars_fragment:YA,envmap_pars_fragment:qA,envmap_pars_vertex:KA,envmap_physical_pars_fragment:aw,envmap_vertex:ZA,fog_vertex:JA,fog_pars_vertex:QA,fog_fragment:ew,fog_pars_fragment:tw,gradientmap_pars_fragment:nw,lightmap_pars_fragment:iw,lights_lambert_fragment:sw,lights_lambert_pars_fragment:rw,lights_pars_begin:ow,lights_toon_fragment:lw,lights_toon_pars_fragment:cw,lights_phong_fragment:uw,lights_phong_pars_fragment:fw,lights_physical_fragment:hw,lights_physical_pars_fragment:dw,lights_fragment_begin:pw,lights_fragment_maps:mw,lights_fragment_end:gw,logdepthbuf_fragment:_w,logdepthbuf_pars_fragment:vw,logdepthbuf_pars_vertex:xw,logdepthbuf_vertex:yw,map_fragment:Ew,map_pars_fragment:Mw,map_particle_fragment:Sw,map_particle_pars_fragment:bw,metalnessmap_fragment:Tw,metalnessmap_pars_fragment:Aw,morphinstance_vertex:ww,morphcolor_vertex:Rw,morphnormal_vertex:Cw,morphtarget_pars_vertex:Lw,morphtarget_vertex:Pw,normal_fragment_begin:Iw,normal_fragment_maps:Dw,normal_pars_fragment:Nw,normal_pars_vertex:Ow,normal_vertex:Uw,normalmap_pars_fragment:Fw,clearcoat_normal_fragment_begin:kw,clearcoat_normal_fragment_maps:Bw,clearcoat_pars_fragment:Hw,iridescence_pars_fragment:Vw,opaque_fragment:Gw,packing:zw,premultiplied_alpha_fragment:Ww,project_vertex:Xw,dithering_fragment:$w,dithering_pars_fragment:jw,roughnessmap_fragment:Yw,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:Kw,shadowmap_pars_vertex:Zw,shadowmap_vertex:Jw,shadowmask_pars_fragment:Qw,skinbase_vertex:eR,skinning_pars_vertex:tR,skinning_vertex:nR,skinnormal_vertex:iR,specularmap_fragment:sR,specularmap_pars_fragment:rR,tonemapping_fragment:oR,tonemapping_pars_fragment:aR,transmission_fragment:lR,transmission_pars_fragment:cR,uv_pars_fragment:uR,uv_pars_vertex:fR,uv_vertex:hR,worldpos_vertex:dR,background_vert:pR,background_frag:mR,backgroundCube_vert:gR,backgroundCube_frag:_R,cube_vert:vR,cube_frag:xR,depth_vert:yR,depth_frag:ER,distanceRGBA_vert:MR,distanceRGBA_frag:SR,equirect_vert:bR,equirect_frag:TR,linedashed_vert:AR,linedashed_frag:wR,meshbasic_vert:RR,meshbasic_frag:CR,meshlambert_vert:LR,meshlambert_frag:PR,meshmatcap_vert:IR,meshmatcap_frag:DR,meshnormal_vert:NR,meshnormal_frag:OR,meshphong_vert:UR,meshphong_frag:FR,meshphysical_vert:kR,meshphysical_frag:BR,meshtoon_vert:HR,meshtoon_frag:VR,points_vert:GR,points_frag:zR,shadow_vert:WR,shadow_frag:XR,sprite_vert:$R,sprite_frag:jR},be={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},yi={basic:{uniforms:pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new He(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:pn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:pn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new He(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:pn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:pn([be.points,be.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:pn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:pn([be.common,be.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:pn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:pn([be.sprite,be.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:pn([be.common,be.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:pn([be.lights,be.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};yi.physical={uniforms:pn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ya={r:0,b:0,g:0},Bs=new fi,YR=new je;function qR(n,e,t,i,s,r,o){const a=new He(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const C=g(M);C===null?d(a,l):C&&C.isColor&&(d(C,1),v=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===$l)?(u===void 0&&(u=new en(new ha(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Kr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bs.copy(v.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(YR.makeRotationFromEuler(Bs)),u.material.toneMapped=st.getTransfer(C.colorSpace)!==bt,(f!==C||h!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,p=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new en(new jl(2,2),new Un({name:"BackgroundMaterial",uniforms:Kr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(C.colorSpace)!==bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,v){M.getRGB(Ya,hv(n)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:m,dispose:x}}function KR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(b,F,V,z,ne){let ae=!1;const Q=f(z,V,F);r!==Q&&(r=Q,c(r.object)),ae=p(b,z,V,ne),ae&&g(b,z,V,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,v(b,F,V,z),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,F,V){const z=V.wireframe===!0;let ne=i[b.id];ne===void 0&&(ne={},i[b.id]=ne);let ae=ne[F.id];ae===void 0&&(ae={},ne[F.id]=ae);let Q=ae[z];return Q===void 0&&(Q=h(l()),ae[z]=Q),Q}function h(b){const F=[],V=[],z=[];for(let ne=0;ne<t;ne++)F[ne]=0,V[ne]=0,z[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:z,object:b,attributes:{},index:null}}function p(b,F,V,z){const ne=r.attributes,ae=F.attributes;let Q=0;const oe=V.getAttributes();for(const Y in oe)if(oe[Y].location>=0){const ce=ne[Y];let ue=ae[Y];if(ue===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ce===void 0||ce.attribute!==ue||ue&&ce.data!==ue.data)return!0;Q++}return r.attributesNum!==Q||r.index!==z}function g(b,F,V,z){const ne={},ae=F.attributes;let Q=0;const oe=V.getAttributes();for(const Y in oe)if(oe[Y].location>=0){let ce=ae[Y];ce===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));const ue={};ue.attribute=ce,ce&&ce.data&&(ue.data=ce.data),ne[Y]=ue,Q++}r.attributes=ne,r.attributesNum=Q,r.index=z}function _(){const b=r.newAttributes;for(let F=0,V=b.length;F<V;F++)b[F]=0}function m(b){d(b,0)}function d(b,F){const V=r.newAttributes,z=r.enabledAttributes,ne=r.attributeDivisors;V[b]=1,z[b]===0&&(n.enableVertexAttribArray(b),z[b]=1),ne[b]!==F&&(n.vertexAttribDivisor(b,F),ne[b]=F)}function x(){const b=r.newAttributes,F=r.enabledAttributes;for(let V=0,z=F.length;V<z;V++)F[V]!==b[V]&&(n.disableVertexAttribArray(V),F[V]=0)}function M(b,F,V,z,ne,ae,Q){Q===!0?n.vertexAttribIPointer(b,F,V,ne,ae):n.vertexAttribPointer(b,F,V,z,ne,ae)}function v(b,F,V,z){_();const ne=z.attributes,ae=V.getAttributes(),Q=F.defaultAttributeValues;for(const oe in ae){const Y=ae[oe];if(Y.location>=0){let ge=ne[oe];if(ge===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),ge!==void 0){const ce=ge.normalized,ue=ge.itemSize,Ee=e.get(ge);if(Ee===void 0)continue;const Be=Ee.buffer,ee=Ee.type,fe=Ee.bytesPerElement,Me=ee===n.INT||ee===n.UNSIGNED_INT||ge.gpuType===Qf;if(ge.isInterleavedBufferAttribute){const U=ge.data,Z=U.stride,ie=ge.offset;if(U.isInstancedInterleavedBuffer){for(let de=0;de<Y.locationSize;de++)d(Y.location+de,U.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let de=0;de<Y.locationSize;de++)m(Y.location+de);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let de=0;de<Y.locationSize;de++)M(Y.location+de,ue/Y.locationSize,ee,ce,Z*fe,(ie+ue/Y.locationSize*de)*fe,Me)}else{if(ge.isInstancedBufferAttribute){for(let U=0;U<Y.locationSize;U++)d(Y.location+U,ge.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let U=0;U<Y.locationSize;U++)m(Y.location+U);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let U=0;U<Y.locationSize;U++)M(Y.location+U,ue/Y.locationSize,ee,ce,ue*fe,ue/Y.locationSize*U*fe,Me)}}else if(Q!==void 0){const ce=Q[oe];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(Y.location,ce);break;case 3:n.vertexAttrib3fv(Y.location,ce);break;case 4:n.vertexAttrib4fv(Y.location,ce);break;default:n.vertexAttrib1fv(Y.location,ce)}}}}x()}function C(){H();for(const b in i){const F=i[b];for(const V in F){const z=F[V];for(const ne in z)u(z[ne].object),delete z[ne];delete F[V]}delete i[b]}}function L(b){if(i[b.id]===void 0)return;const F=i[b.id];for(const V in F){const z=F[V];for(const ne in z)u(z[ne].object),delete z[ne];delete F[V]}delete i[b.id]}function A(b){for(const F in i){const V=i[F];if(V[b.id]===void 0)continue;const z=V[b.id];for(const ne in z)u(z[ne].object),delete z[ne];delete V[b.id]}}function H(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function ZR(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function JR(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Nn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const H=A===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ns&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ri&&!H)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:C,maxSamples:L}}function QR(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new gs,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,M=x*4;let v=d.clippingState||null;l.value=v,v=u(g,h,M,p);for(let C=0;C!==M;++C)v[C]=t[C];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,v=p;M!==_;++M,v+=4)o.copy(f[M]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function eC(n){let e=new WeakMap;function t(o,a){return a===Bu?o.mapping=Wr:a===Hu&&(o.mapping=Xr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bu||a===Hu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yT(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Cr=4,im=[.125,.215,.35,.446,.526,.582],$s=20,Xc=new gh,sm=new He;let $c=null,jc=0,Yc=0,qc=!1;const zs=(1+Math.sqrt(5))/2,Er=1/zs,rm=[new G(-zs,Er,0),new G(zs,Er,0),new G(-Er,0,zs),new G(Er,0,zs),new G(0,zs,-Er),new G(0,zs,Er),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$c=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,jc,Yc),this._renderer.xr.enabled=qc,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:fa,format:Nn,colorSpace:En,depthBuffer:!1},s=am(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tC(r)),this._blurMaterial=nC(r,e,t)}return s}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,i,s){const a=new ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(sm),u.toneMapping=Ss,u.autoClear=!1;const p=new ys({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new en(new ha,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(sm),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;qa(s,x*M,d>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Wr||e.mapping===Xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lm());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;qa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rm[(s-r-1)%rm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new en(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$s-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):$s;m>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$s}`);const d=[];let x=0;for(let A=0;A<$s;++A){const H=A/_,T=Math.exp(-H*H/2);d.push(T),A===0?x+=T:A<m&&(x+=2*T)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const v=this._sizeLods[s],C=3*v*(s>M-Cr?s-M+Cr:0),L=4*(this._cubeSize-v);qa(t,C,L,3*v,2*v),l.setRenderTarget(t),l.render(f,Xc)}}function tC(n){const e=[],t=[],i=[];let s=n;const r=n-Cr+1+im.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Cr?l=im[o-n+Cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),M=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let L=0;L<p;L++){const A=L%3*2/3-1,H=L>2?0:-1,T=[A,H,0,A+2/3,H,0,A+2/3,H+1,0,A,H,0,A+2/3,H+1,0,A,H+1,0];x.set(T,_*g*L),M.set(h,m*g*L);const b=[L,L,L,L,L,L];v.set(b,d*g*L)}const C=new Fn;C.setAttribute("position",new kt(x,_)),C.setAttribute("uv",new kt(M,m)),C.setAttribute("faceIndex",new kt(v,d)),e.push(C),s>Cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function am(n,e,t){const i=new nr(n,e,t);return i.texture.mapping=$l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function nC(n,e,t){const i=new Float32Array($s),s=new G(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function lm(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function cm(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function Eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bu||l===Hu,u=l===Wr||l===Xr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new om(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new om(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&wr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rC(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let M=0,v=x.length;M<v;M+=3){const C=x[M+0],L=x[M+1],A=x[M+2];h.push(C,L,L,A,A,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const C=M+0,L=M+1,A=M+2;h.push(C,L,L,A,A,C)}}else return;const m=new(ov(h)?fv:uv)(h,1);m.version=_;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function oC(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*o),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,_,0,g);let d=0;for(let x=0;x<g;x++)d+=p[x]*_[x];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function aC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lC(n,e,t){const i=new WeakMap,s=new ut;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){H.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,L=1;C>e.maxTextureSize&&(L=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*L*4*f),H=new lv(A,C,L,f);H.type=ri,H.needsUpdate=!0;const T=v*4;for(let F=0;F<f;F++){const V=d[F],z=x[F],ne=M[F],ae=C*L*4*F;for(let Q=0;Q<V.count;Q++){const oe=Q*T;g===!0&&(s.fromBufferAttribute(V,Q),A[ae+oe+0]=s.x,A[ae+oe+1]=s.y,A[ae+oe+2]=s.z,A[ae+oe+3]=0),_===!0&&(s.fromBufferAttribute(z,Q),A[ae+oe+4]=s.x,A[ae+oe+5]=s.y,A[ae+oe+6]=s.z,A[ae+oe+7]=0),m===!0&&(s.fromBufferAttribute(ne,Q),A[ae+oe+8]=s.x,A[ae+oe+9]=s.y,A[ae+oe+10]=s.z,A[ae+oe+11]=ne.itemSize===4?s.w:1)}}h={count:f,texture:H,size:new ze(C,L)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function cC(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Av=new jt,um=new yv(1,1),wv=new lv,Rv=new rT,Cv=new mv,fm=[],hm=[],dm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function ao(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=fm[s];if(r===void 0&&(r=new Float32Array(s),fm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ql(n,e){let t=hm[e];t===void 0&&(t=new Int32Array(e),hm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function hC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function dC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function pC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,i))return;mm.set(i),n.uniformMatrix2fv(this.addr,!1,mm),Kt(t,i)}}function mC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,i))return;pm.set(i),n.uniformMatrix3fv(this.addr,!1,pm),Kt(t,i)}}function gC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,i))return;dm.set(i),n.uniformMatrix4fv(this.addr,!1,dm),Kt(t,i)}}function _C(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function xC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function yC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function EC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function SC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function bC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function TC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(um.compareFunction=rv,r=um):r=Av,t.setTexture2D(e||r,s)}function AC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Rv,s)}function wC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Cv,s)}function RC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||wv,s)}function CC(n){switch(n){case 5126:return uC;case 35664:return fC;case 35665:return hC;case 35666:return dC;case 35674:return pC;case 35675:return mC;case 35676:return gC;case 5124:case 35670:return _C;case 35667:case 35671:return vC;case 35668:case 35672:return xC;case 35669:case 35673:return yC;case 5125:return EC;case 36294:return MC;case 36295:return SC;case 36296:return bC;case 35678:case 36198:case 36298:case 36306:case 35682:return TC;case 35679:case 36299:case 36307:return AC;case 35680:case 36300:case 36308:case 36293:return wC;case 36289:case 36303:case 36311:case 36292:return RC}}function LC(n,e){n.uniform1fv(this.addr,e)}function PC(n,e){const t=ao(e,this.size,2);n.uniform2fv(this.addr,t)}function IC(n,e){const t=ao(e,this.size,3);n.uniform3fv(this.addr,t)}function DC(n,e){const t=ao(e,this.size,4);n.uniform4fv(this.addr,t)}function NC(n,e){const t=ao(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function OC(n,e){const t=ao(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function UC(n,e){const t=ao(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FC(n,e){n.uniform1iv(this.addr,e)}function kC(n,e){n.uniform2iv(this.addr,e)}function BC(n,e){n.uniform3iv(this.addr,e)}function HC(n,e){n.uniform4iv(this.addr,e)}function VC(n,e){n.uniform1uiv(this.addr,e)}function GC(n,e){n.uniform2uiv(this.addr,e)}function zC(n,e){n.uniform3uiv(this.addr,e)}function WC(n,e){n.uniform4uiv(this.addr,e)}function XC(n,e,t){const i=this.cache,s=e.length,r=ql(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Av,r[o])}function $C(n,e,t){const i=this.cache,s=e.length,r=ql(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rv,r[o])}function jC(n,e,t){const i=this.cache,s=e.length,r=ql(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Cv,r[o])}function YC(n,e,t){const i=this.cache,s=e.length,r=ql(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||wv,r[o])}function qC(n){switch(n){case 5126:return LC;case 35664:return PC;case 35665:return IC;case 35666:return DC;case 35674:return NC;case 35675:return OC;case 35676:return UC;case 5124:case 35670:return FC;case 35667:case 35671:return kC;case 35668:case 35672:return BC;case 35669:case 35673:return HC;case 5125:return VC;case 36294:return GC;case 36295:return zC;case 36296:return WC;case 35678:case 36198:case 36298:case 36306:case 35682:return XC;case 35679:case 36299:case 36307:return $C;case 35680:case 36300:case 36308:case 36293:return jC;case 36289:case 36303:case 36311:case 36292:return YC}}class KC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CC(t.type)}}class ZC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qC(t.type)}}class JC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function gm(n,e){n.seq.push(e),n.map[e.id]=e}function QC(n,e,t){const i=n.name,s=i.length;for(Kc.lastIndex=0;;){const r=Kc.exec(i),o=Kc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gm(t,c===void 0?new KC(a,n,e):new ZC(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new JC(a),gm(t,f)),t=f}}}class cl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);QC(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function _m(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const e1=37297;let t1=0;function n1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const vm=new Je;function i1(n){st._getMatrix(vm,st.workingColorSpace,n);const e=`mat3( ${vm.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Sl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+n1(n.getShaderSource(e),o)}else return s}function s1(n,e){const t=i1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r1(n,e){let t;switch(e){case pb:t="Linear";break;case mb:t="Reinhard";break;case gb:t="Cineon";break;case _b:t="ACESFilmic";break;case xb:t="AgX";break;case yb:t="Neutral";break;case vb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ka=new G;function o1(){st.getLuminanceCoefficients(Ka);const n=Ka.x.toFixed(4),e=Ka.y.toFixed(4),t=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function l1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function c1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wo(n){return n!==""}function ym(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(n){return n.replace(u1,h1)}const f1=new Map;function h1(n,e){let t=Qe[e];if(t===void 0){const i=f1.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xf(t)}const d1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mm(n){return n.replace(d1,p1)}function p1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function g1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function v1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case X_:e="ENVMAP_BLENDING_MULTIPLY";break;case hb:e="ENVMAP_BLENDING_MIX";break;case db:e="ENVMAP_BLENDING_ADD";break}return e}function x1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function y1(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=m1(t),c=g1(t),u=_1(t),f=v1(t),h=x1(t),p=a1(t),g=l1(r),_=s.createProgram();let m,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),d.length>0&&(d+=`
`)):(m=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),d=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ss?"#define TONE_MAPPING":"",t.toneMapping!==Ss?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ss?r1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,s1("linearToOutputTexel",t.outputColorSpace),o1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),o=xf(o),o=ym(o,t),o=Em(o,t),a=xf(a),a=ym(a,t),a=Em(a,t),o=Mm(o),a=Mm(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=x+m+o,v=x+d+a,C=_m(s,s.VERTEX_SHADER,M),L=_m(s,s.FRAGMENT_SHADER,v);s.attachShader(_,C),s.attachShader(_,L),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(F){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(C).trim(),ne=s.getShaderInfoLog(L).trim();let ae=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,L);else{const oe=xm(s,C,"vertex"),Y=xm(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+V+`
`+oe+`
`+Y)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||ne==="")&&(Q=!1);Q&&(F.diagnostics={runnable:ae,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:ne,prefix:d}})}s.deleteShader(C),s.deleteShader(L),H=new cl(s,_),T=c1(s,_)}let H;this.getUniforms=function(){return H===void 0&&A(this),H};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,e1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=L,this}let E1=0;class M1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new S1(e),t.set(e,i)),i}}class S1{constructor(e){this.id=E1++,this.code=e,this.usedTimes=0}}function b1(n,e,t,i,s,r,o){const a=new ah,l=new M1,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,F,V,z){const ne=V.fog,ae=z.geometry,Q=T.isMeshStandardMaterial?V.environment:null,oe=(T.isMeshStandardMaterial?t:e).get(T.envMap||Q),Y=oe&&oe.mapping===$l?oe.image.height:null,ge=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ce=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ue=ce!==void 0?ce.length:0;let Ee=0;ae.morphAttributes.position!==void 0&&(Ee=1),ae.morphAttributes.normal!==void 0&&(Ee=2),ae.morphAttributes.color!==void 0&&(Ee=3);let Be,ee,fe,Me;if(ge){const Et=yi[ge];Be=Et.vertexShader,ee=Et.fragmentShader}else Be=T.vertexShader,ee=T.fragmentShader,l.update(T),fe=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);const U=n.getRenderTarget(),Z=n.state.buffers.depth.getReversed(),ie=z.isInstancedMesh===!0,de=z.isBatchedMesh===!0,Re=!!T.map,I=!!T.matcap,O=!!oe,S=!!T.aoMap,re=!!T.lightMap,J=!!T.bumpMap,K=!!T.normalMap,w=!!T.displacementMap,P=!!T.emissiveMap,k=!!T.metalnessMap,y=!!T.roughnessMap,E=T.anisotropy>0,N=T.clearcoat>0,D=T.dispersion>0,B=T.iridescence>0,$=T.sheen>0,he=T.transmission>0,pe=E&&!!T.anisotropyMap,ve=N&&!!T.clearcoatMap,De=N&&!!T.clearcoatNormalMap,_e=N&&!!T.clearcoatRoughnessMap,Te=B&&!!T.iridescenceMap,Oe=B&&!!T.iridescenceThicknessMap,Ve=$&&!!T.sheenColorMap,Se=$&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ye=!!T.specularColorMap,yt=!!T.specularIntensityMap,W=he&&!!T.transmissionMap,Ae=he&&!!T.thicknessMap,le=!!T.gradientMap,me=!!T.alphaMap,Le=T.alphaTest>0,Ce=!!T.alphaHash,Ze=!!T.extensions;let Nt=Ss;T.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const nn={shaderID:ge,shaderType:T.type,shaderName:T.name,vertexShader:Be,fragmentShader:ee,defines:T.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:de,batchingColor:de&&z._colorsTexture!==null,instancing:ie,instancingColor:ie&&z.instanceColor!==null,instancingMorph:ie&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:En,alphaToCoverage:!!T.alphaToCoverage,map:Re,matcap:I,envMap:O,envMapMode:O&&oe.mapping,envMapCubeUVHeight:Y,aoMap:S,lightMap:re,bumpMap:J,normalMap:K,displacementMap:h&&w,emissiveMap:P,normalMapObjectSpace:K&&T.normalMapType===Ab,normalMapTangentSpace:K&&T.normalMapType===sv,metalnessMap:k,roughnessMap:y,anisotropy:E,anisotropyMap:pe,clearcoat:N,clearcoatMap:ve,clearcoatNormalMap:De,clearcoatRoughnessMap:_e,dispersion:D,iridescence:B,iridescenceMap:Te,iridescenceThicknessMap:Oe,sheen:$,sheenColorMap:Ve,sheenRoughnessMap:Se,specularMap:We,specularColorMap:Ye,specularIntensityMap:yt,transmission:he,transmissionMap:W,thicknessMap:Ae,gradientMap:le,opaque:T.transparent===!1&&T.blending===Js&&T.alphaToCoverage===!1,alphaMap:me,alphaTest:Le,alphaHash:Ce,combine:T.combine,mapUv:Re&&_(T.map.channel),aoMapUv:S&&_(T.aoMap.channel),lightMapUv:re&&_(T.lightMap.channel),bumpMapUv:J&&_(T.bumpMap.channel),normalMapUv:K&&_(T.normalMap.channel),displacementMapUv:w&&_(T.displacementMap.channel),emissiveMapUv:P&&_(T.emissiveMap.channel),metalnessMapUv:k&&_(T.metalnessMap.channel),roughnessMapUv:y&&_(T.roughnessMap.channel),anisotropyMapUv:pe&&_(T.anisotropyMap.channel),clearcoatMapUv:ve&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(T.sheenRoughnessMap.channel),specularMapUv:We&&_(T.specularMap.channel),specularColorMapUv:Ye&&_(T.specularColorMap.channel),specularIntensityMapUv:yt&&_(T.specularIntensityMap.channel),transmissionMapUv:W&&_(T.transmissionMap.channel),thicknessMapUv:Ae&&_(T.thicknessMap.channel),alphaMapUv:me&&_(T.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(K||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ae.attributes.uv&&(Re||me),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Z,skinning:z.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ee,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Re&&T.map.isVideoTexture===!0&&st.getTransfer(T.map.colorSpace)===bt,decodeVideoTextureEmissive:P&&T.emissiveMap.isVideoTexture===!0&&st.getTransfer(T.emissiveMap.colorSpace)===bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ti,flipSided:T.side===xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&T.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function d(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)b.push(F),b.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(x(b,T),M(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function x(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function M(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const b=g[T.type];let F;if(b){const V=yi[b];F=dv.clone(V.uniforms)}else F=T.uniforms;return F}function C(T,b){let F;for(let V=0,z=u.length;V<z;V++){const ne=u[V];if(ne.cacheKey===b){F=ne,++F.usedTimes;break}}return F===void 0&&(F=new y1(n,b,T,r),u.push(F)),F}function L(T){if(--T.usedTimes===0){const b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:C,releaseProgram:L,releaseShaderCache:A,programs:u,dispose:H}}function T1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function A1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tm(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||A1),i.length>1&&i.sort(h||bm),s.length>1&&s.sort(h||bm)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function w1(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Tm,n.set(i,[o])):s>=r.length?(o=new Tm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function R1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new He};break;case"SpotLight":t={position:new G,direction:new G,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function C1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let L1=0;function P1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function I1(n){const e=new R1,t=C1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new je,o=new je;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,x=0,M=0,v=0,C=0,L=0,A=0;c.sort(P1);for(let T=0,b=c.length;T<b;T++){const F=c[T],V=F.color,z=F.intensity,ne=F.distance,ae=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=V.r*z,f+=V.g*z,h+=V.b*z;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(F.sh.coefficients[Q],z);A++}else if(F.isDirectionalLight){const Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const oe=F.shadow,Y=t.get(F);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=F.shadow.matrix,x++}i.directional[p]=Q,p++}else if(F.isSpotLight){const Q=e.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(V).multiplyScalar(z),Q.distance=ne,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,i.spot[_]=Q;const oe=F.shadow;if(F.map&&(i.spotLightMap[C]=F.map,C++,oe.updateMatrices(F),F.castShadow&&L++),i.spotLightMatrix[_]=oe.matrix,F.castShadow){const Y=t.get(F);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=ae,v++}_++}else if(F.isRectAreaLight){const Q=e.get(F);Q.color.copy(V).multiplyScalar(z),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=Q,m++}else if(F.isPointLight){const Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){const oe=F.shadow,Y=t.get(F);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,Y.shadowCameraNear=oe.camera.near,Y.shadowCameraFar=oe.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=F.shadow.matrix,M++}i.point[g]=Q,g++}else if(F.isHemisphereLight){const Q=e.get(F);Q.skyColor.copy(F.color).multiplyScalar(z),Q.groundColor.copy(F.groundColor).multiplyScalar(z),i.hemi[d]=Q,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const H=i.hash;(H.directionalLength!==p||H.pointLength!==g||H.spotLength!==_||H.rectAreaLength!==m||H.hemiLength!==d||H.numDirectionalShadows!==x||H.numPointShadows!==M||H.numSpotShadows!==v||H.numSpotMaps!==C||H.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=A,H.directionalLength=p,H.pointLength=g,H.spotLength=_,H.rectAreaLength=m,H.hemiLength=d,H.numDirectionalShadows=x,H.numPointShadows=M,H.numSpotShadows=v,H.numSpotMaps=C,H.numLightProbes=A,i.version=L1++)}function l(c,u){let f=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const M=c[d];if(M.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Am(n){const e=new I1(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function D1(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Am(n),e.set(s,[a])):r>=o.length?(a=new Am(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const N1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U1(n,e,t){let i=new dh;const s=new ze,r=new ze,o=new ut,a=new DT({depthPacking:Tb}),l=new NT,c={},u=t.maxTextureSize,f={[ts]:xn,[xn]:ts,[ti]:ti},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:N1,fragmentShader:O1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_;let d=this.type;this.render=function(L,A,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const T=n.getRenderTarget(),b=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ms),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=d!==Gi&&this.type===Gi,ne=d===Gi&&this.type!==Gi;for(let ae=0,Q=L.length;ae<Q;ae++){const oe=L[ae],Y=oe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ge=Y.getFrameExtents();if(s.multiply(ge),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ge.x),s.x=r.x*ge.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ge.y),s.y=r.y*ge.y,Y.mapSize.y=r.y)),Y.map===null||z===!0||ne===!0){const ue=this.type!==Gi?{minFilter:yn,magFilter:yn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new nr(s.x,s.y,ue),Y.map.texture.name=oe.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const ce=Y.getViewportCount();for(let ue=0;ue<ce;ue++){const Ee=Y.getViewport(ue);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),V.viewport(o),Y.updateMatrices(oe,ue),i=Y.getFrustum(),v(A,H,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===Gi&&x(Y,H),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,b,F)};function x(L,A){const H=e.update(_);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new nr(s.x,s.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(A,null,H,h,_,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(A,null,H,p,_,null)}function M(L,A,H,T){let b=null;const F=H.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)b=F;else if(b=H.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=b.uuid,z=A.uuid;let ne=c[V];ne===void 0&&(ne={},c[V]=ne);let ae=ne[z];ae===void 0&&(ae=b.clone(),ne[z]=ae,A.addEventListener("dispose",C)),b=ae}if(b.visible=A.visible,b.wireframe=A.wireframe,T===Gi?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=n.properties.get(b);V.light=H}return b}function v(L,A,H,T,b){if(L.visible===!1)return;if(L.layers.test(A.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===Gi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,L.matrixWorld);const z=e.update(L),ne=L.material;if(Array.isArray(ne)){const ae=z.groups;for(let Q=0,oe=ae.length;Q<oe;Q++){const Y=ae[Q],ge=ne[Y.materialIndex];if(ge&&ge.visible){const ce=M(L,ge,T,b);L.onBeforeShadow(n,L,A,H,z,ce,Y),n.renderBufferDirect(H,null,z,ce,L,Y),L.onAfterShadow(n,L,A,H,z,ce,Y)}}}else if(ne.visible){const ae=M(L,ne,T,b);L.onBeforeShadow(n,L,A,H,z,ae,null),n.renderBufferDirect(H,null,z,ae,L,null),L.onAfterShadow(n,L,A,H,z,ae,null)}}const V=L.children;for(let z=0,ne=V.length;z<ne;z++)v(V[z],A,H,T,b)}function C(L){L.target.removeEventListener("dispose",C);for(const H in c){const T=c[H],b=L.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const F1={[Iu]:Du,[Nu]:Fu,[Ou]:ku,[zr]:Uu,[Du]:Iu,[Fu]:Nu,[ku]:Ou,[Uu]:zr};function k1(n,e){function t(){let W=!1;const Ae=new ut;let le=null;const me=new ut(0,0,0,0);return{setMask:function(Le){le!==Le&&!W&&(n.colorMask(Le,Le,Le,Le),le=Le)},setLocked:function(Le){W=Le},setClear:function(Le,Ce,Ze,Nt,nn){nn===!0&&(Le*=Nt,Ce*=Nt,Ze*=Nt),Ae.set(Le,Ce,Ze,Nt),me.equals(Ae)===!1&&(n.clearColor(Le,Ce,Ze,Nt),me.copy(Ae))},reset:function(){W=!1,le=null,me.set(-1,0,0,0)}}}function i(){let W=!1,Ae=!1,le=null,me=null,Le=null;return{setReversed:function(Ce){if(Ae!==Ce){const Ze=e.get("EXT_clip_control");Ae?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Le;Le=null,this.setClear(Nt)}Ae=Ce},getReversed:function(){return Ae},setTest:function(Ce){Ce?U(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(Ce){le!==Ce&&!W&&(n.depthMask(Ce),le=Ce)},setFunc:function(Ce){if(Ae&&(Ce=F1[Ce]),me!==Ce){switch(Ce){case Iu:n.depthFunc(n.NEVER);break;case Du:n.depthFunc(n.ALWAYS);break;case Nu:n.depthFunc(n.LESS);break;case zr:n.depthFunc(n.LEQUAL);break;case Ou:n.depthFunc(n.EQUAL);break;case Uu:n.depthFunc(n.GEQUAL);break;case Fu:n.depthFunc(n.GREATER);break;case ku:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Ce}},setLocked:function(Ce){W=Ce},setClear:function(Ce){Le!==Ce&&(Ae&&(Ce=1-Ce),n.clearDepth(Ce),Le=Ce)},reset:function(){W=!1,le=null,me=null,Le=null,Ae=!1}}}function s(){let W=!1,Ae=null,le=null,me=null,Le=null,Ce=null,Ze=null,Nt=null,nn=null;return{setTest:function(Et){W||(Et?U(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function(Et){Ae!==Et&&!W&&(n.stencilMask(Et),Ae=Et)},setFunc:function(Et,qn,Pi){(le!==Et||me!==qn||Le!==Pi)&&(n.stencilFunc(Et,qn,Pi),le=Et,me=qn,Le=Pi)},setOp:function(Et,qn,Pi){(Ce!==Et||Ze!==qn||Nt!==Pi)&&(n.stencilOp(Et,qn,Pi),Ce=Et,Ze=qn,Nt=Pi)},setLocked:function(Et){W=Et},setClear:function(Et){nn!==Et&&(n.clearStencil(Et),nn=Et)},reset:function(){W=!1,Ae=null,le=null,me=null,Le=null,Ce=null,Ze=null,Nt=null,nn=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,x=null,M=null,v=null,C=null,L=null,A=new He(0,0,0),H=0,T=!1,b=null,F=null,V=null,z=null,ne=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,oe=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=oe>=2);let ge=null,ce={};const ue=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),Be=new ut().fromArray(ue),ee=new ut().fromArray(Ee);function fe(W,Ae,le,me){const Le=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(W,Ce),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<le;Ze++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Ae+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Ce}const Me={};Me[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(zr),J(!1),K(ap),U(n.CULL_FACE),S(Ms);function U(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function Z(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function ie(W,Ae){return f[W]!==Ae?(n.bindFramebuffer(W,Ae),f[W]=Ae,W===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ae),W===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function de(W,Ae){let le=p,me=!1;if(W){le=h.get(Ae),le===void 0&&(le=[],h.set(Ae,le));const Le=W.textures;if(le.length!==Le.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,Ze=Le.length;Ce<Ze;Ce++)le[Ce]=n.COLOR_ATTACHMENT0+Ce;le.length=Le.length,me=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,me=!0);me&&n.drawBuffers(le)}function Re(W){return g!==W?(n.useProgram(W),g=W,!0):!1}const I={[Xs]:n.FUNC_ADD,[qS]:n.FUNC_SUBTRACT,[KS]:n.FUNC_REVERSE_SUBTRACT};I[ZS]=n.MIN,I[JS]=n.MAX;const O={[QS]:n.ZERO,[eb]:n.ONE,[tb]:n.SRC_COLOR,[Lu]:n.SRC_ALPHA,[ab]:n.SRC_ALPHA_SATURATE,[rb]:n.DST_COLOR,[ib]:n.DST_ALPHA,[nb]:n.ONE_MINUS_SRC_COLOR,[Pu]:n.ONE_MINUS_SRC_ALPHA,[ob]:n.ONE_MINUS_DST_COLOR,[sb]:n.ONE_MINUS_DST_ALPHA,[lb]:n.CONSTANT_COLOR,[cb]:n.ONE_MINUS_CONSTANT_COLOR,[ub]:n.CONSTANT_ALPHA,[fb]:n.ONE_MINUS_CONSTANT_ALPHA};function S(W,Ae,le,me,Le,Ce,Ze,Nt,nn,Et){if(W===Ms){_===!0&&(Z(n.BLEND),_=!1);return}if(_===!1&&(U(n.BLEND),_=!0),W!==YS){if(W!==m||Et!==T){if((d!==Xs||v!==Xs)&&(n.blendEquation(n.FUNC_ADD),d=Xs,v=Xs),Et)switch(W){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.ONE,n.ONE);break;case lp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}x=null,M=null,C=null,L=null,A.set(0,0,0),H=0,m=W,T=Et}return}Le=Le||Ae,Ce=Ce||le,Ze=Ze||me,(Ae!==d||Le!==v)&&(n.blendEquationSeparate(I[Ae],I[Le]),d=Ae,v=Le),(le!==x||me!==M||Ce!==C||Ze!==L)&&(n.blendFuncSeparate(O[le],O[me],O[Ce],O[Ze]),x=le,M=me,C=Ce,L=Ze),(Nt.equals(A)===!1||nn!==H)&&(n.blendColor(Nt.r,Nt.g,Nt.b,nn),A.copy(Nt),H=nn),m=W,T=!1}function re(W,Ae){W.side===ti?Z(n.CULL_FACE):U(n.CULL_FACE);let le=W.side===xn;Ae&&(le=!le),J(le),W.blending===Js&&W.transparent===!1?S(Ms):S(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const me=W.stencilWrite;a.setTest(me),me&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),P(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(W){b!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),b=W)}function K(W){W!==XS?(U(n.CULL_FACE),W!==F&&(W===ap?n.cullFace(n.BACK):W===$S?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),F=W}function w(W){W!==V&&(Q&&n.lineWidth(W),V=W)}function P(W,Ae,le){W?(U(n.POLYGON_OFFSET_FILL),(z!==Ae||ne!==le)&&(n.polygonOffset(Ae,le),z=Ae,ne=le)):Z(n.POLYGON_OFFSET_FILL)}function k(W){W?U(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function y(W){W===void 0&&(W=n.TEXTURE0+ae-1),ge!==W&&(n.activeTexture(W),ge=W)}function E(W,Ae,le){le===void 0&&(ge===null?le=n.TEXTURE0+ae-1:le=ge);let me=ce[le];me===void 0&&(me={type:void 0,texture:void 0},ce[le]=me),(me.type!==W||me.texture!==Ae)&&(ge!==le&&(n.activeTexture(le),ge=le),n.bindTexture(W,Ae||Me[W]),me.type=W,me.texture=Ae)}function N(){const W=ce[ge];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function B(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(W){Be.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Be.copy(W))}function Se(W){ee.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ee.copy(W))}function We(W,Ae){let le=c.get(Ae);le===void 0&&(le=new WeakMap,c.set(Ae,le));let me=le.get(W);me===void 0&&(me=n.getUniformBlockIndex(Ae,W.name),le.set(W,me))}function Ye(W,Ae){const me=c.get(Ae).get(W);l.get(Ae)!==me&&(n.uniformBlockBinding(Ae,me,W.__bindingPointIndex),l.set(Ae,me))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,ce={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,x=null,M=null,v=null,C=null,L=null,A=new He(0,0,0),H=0,T=!1,b=null,F=null,V=null,z=null,ne=null,Be.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:Z,bindFramebuffer:ie,drawBuffers:de,useProgram:Re,setBlending:S,setMaterial:re,setFlipSided:J,setCullFace:K,setLineWidth:w,setPolygonOffset:P,setScissorTest:k,activeTexture:y,bindTexture:E,unbindTexture:N,compressedTexImage2D:D,compressedTexImage3D:B,texImage2D:Te,texImage3D:Oe,updateUBOMapping:We,uniformBlockBinding:Ye,texStorage2D:De,texStorage3D:_e,texSubImage2D:$,texSubImage3D:he,compressedTexSubImage2D:pe,compressedTexSubImage3D:ve,scissor:Ve,viewport:Se,reset:yt}}function B1(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,E){return p?new OffscreenCanvas(y,E):ia("canvas")}function _(y,E,N){let D=1;const B=k(y);if((B.width>N||B.height>N)&&(D=N/Math.max(B.width,B.height)),D<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const $=Math.floor(D*B.width),he=Math.floor(D*B.height);f===void 0&&(f=g($,he));const pe=E?g($,he):f;return pe.width=$,pe.height=he,pe.getContext("2d").drawImage(y,0,0,$,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+$+"x"+he+")."),pe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function x(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(y,E,N,D,B=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=E;if(E===n.RED&&(N===n.FLOAT&&($=n.R32F),N===n.HALF_FLOAT&&($=n.R16F),N===n.UNSIGNED_BYTE&&($=n.R8)),E===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.R8UI),N===n.UNSIGNED_SHORT&&($=n.R16UI),N===n.UNSIGNED_INT&&($=n.R32UI),N===n.BYTE&&($=n.R8I),N===n.SHORT&&($=n.R16I),N===n.INT&&($=n.R32I)),E===n.RG&&(N===n.FLOAT&&($=n.RG32F),N===n.HALF_FLOAT&&($=n.RG16F),N===n.UNSIGNED_BYTE&&($=n.RG8)),E===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.RG8UI),N===n.UNSIGNED_SHORT&&($=n.RG16UI),N===n.UNSIGNED_INT&&($=n.RG32UI),N===n.BYTE&&($=n.RG8I),N===n.SHORT&&($=n.RG16I),N===n.INT&&($=n.RG32I)),E===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.RGB8UI),N===n.UNSIGNED_SHORT&&($=n.RGB16UI),N===n.UNSIGNED_INT&&($=n.RGB32UI),N===n.BYTE&&($=n.RGB8I),N===n.SHORT&&($=n.RGB16I),N===n.INT&&($=n.RGB32I)),E===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.RGBA8UI),N===n.UNSIGNED_SHORT&&($=n.RGBA16UI),N===n.UNSIGNED_INT&&($=n.RGBA32UI),N===n.BYTE&&($=n.RGBA8I),N===n.SHORT&&($=n.RGBA16I),N===n.INT&&($=n.RGBA32I)),E===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),E===n.RGBA){const he=B?Sl:st.getTransfer(D);N===n.FLOAT&&($=n.RGBA32F),N===n.HALF_FLOAT&&($=n.RGBA16F),N===n.UNSIGNED_BYTE&&($=he===bt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(y,E){let N;return y?E===null||E===tr||E===jr?N=n.DEPTH24_STENCIL8:E===ri?N=n.DEPTH32F_STENCIL8:E===ea&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===tr||E===jr?N=n.DEPTH_COMPONENT24:E===ri?N=n.DEPTH_COMPONENT32F:E===ea&&(N=n.DEPTH_COMPONENT16),N}function C(y,E){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==yn&&y.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?E.mipmaps.length:1}function L(y){const E=y.target;E.removeEventListener("dispose",L),H(E),E.isVideoTexture&&u.delete(E)}function A(y){const E=y.target;E.removeEventListener("dispose",A),b(E)}function H(y){const E=i.get(y);if(E.__webglInit===void 0)return;const N=y.source,D=h.get(N);if(D){const B=D[E.__cacheKey];B.usedTimes--,B.usedTimes===0&&T(y),Object.keys(D).length===0&&h.delete(N)}i.remove(y)}function T(y){const E=i.get(y);n.deleteTexture(E.__webglTexture);const N=y.source,D=h.get(N);delete D[E.__cacheKey],o.memory.textures--}function b(y){const E=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(E.__webglFramebuffer[D]))for(let B=0;B<E.__webglFramebuffer[D].length;B++)n.deleteFramebuffer(E.__webglFramebuffer[D][B]);else n.deleteFramebuffer(E.__webglFramebuffer[D]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[D])}else{if(Array.isArray(E.__webglFramebuffer))for(let D=0;D<E.__webglFramebuffer.length;D++)n.deleteFramebuffer(E.__webglFramebuffer[D]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let D=0;D<E.__webglColorRenderbuffer.length;D++)E.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[D]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const N=y.textures;for(let D=0,B=N.length;D<B;D++){const $=i.get(N[D]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(N[D])}i.remove(y)}let F=0;function V(){F=0}function z(){const y=F;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),F+=1,y}function ne(y){const E=[];return E.push(y.wrapS),E.push(y.wrapT),E.push(y.wrapR||0),E.push(y.magFilter),E.push(y.minFilter),E.push(y.anisotropy),E.push(y.internalFormat),E.push(y.format),E.push(y.type),E.push(y.generateMipmaps),E.push(y.premultiplyAlpha),E.push(y.flipY),E.push(y.unpackAlignment),E.push(y.colorSpace),E.join()}function ae(y,E){const N=i.get(y);if(y.isVideoTexture&&w(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const D=y.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(N,y,E);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+E)}function Q(y,E){const N=i.get(y);if(y.version>0&&N.__version!==y.version){ee(N,y,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+E)}function oe(y,E){const N=i.get(y);if(y.version>0&&N.__version!==y.version){ee(N,y,E);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+E)}function Y(y,E){const N=i.get(y);if(y.version>0&&N.__version!==y.version){fe(N,y,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+E)}const ge={[$r]:n.REPEAT,[xs]:n.CLAMP_TO_EDGE,[Ml]:n.MIRRORED_REPEAT},ce={[yn]:n.NEAREST,[j_]:n.NEAREST_MIPMAP_NEAREST,[Ao]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},ue={[wb]:n.NEVER,[Db]:n.ALWAYS,[Rb]:n.LESS,[rv]:n.LEQUAL,[Cb]:n.EQUAL,[Ib]:n.GEQUAL,[Lb]:n.GREATER,[Pb]:n.NOTEQUAL};function Ee(y,E){if(E.type===ri&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===il||E.magFilter===Ao||E.magFilter===qi||E.minFilter===Dn||E.minFilter===il||E.minFilter===Ao||E.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ge[E.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ge[E.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ge[E.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ce[E.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==Ao&&E.minFilter!==qi||E.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Be(y,E){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,E.addEventListener("dispose",L));const D=E.source;let B=h.get(D);B===void 0&&(B={},h.set(D,B));const $=ne(E);if($!==y.__cacheKey){B[$]===void 0&&(B[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),B[$].usedTimes++;const he=B[y.__cacheKey];he!==void 0&&(B[y.__cacheKey].usedTimes--,he.usedTimes===0&&T(E)),y.__cacheKey=$,y.__webglTexture=B[$].texture}return N}function ee(y,E,N){let D=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(D=n.TEXTURE_3D);const B=Be(y,E),$=E.source;t.bindTexture(D,y.__webglTexture,n.TEXTURE0+N);const he=i.get($);if($.version!==he.__version||B===!0){t.activeTexture(n.TEXTURE0+N);const pe=st.getPrimaries(st.workingColorSpace),ve=E.colorSpace===vs?null:st.getPrimaries(E.colorSpace),De=E.colorSpace===vs||pe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let _e=_(E.image,!1,s.maxTextureSize);_e=P(E,_e);const Te=r.convert(E.format,E.colorSpace),Oe=r.convert(E.type);let Ve=M(E.internalFormat,Te,Oe,E.colorSpace,E.isVideoTexture);Ee(D,E);let Se;const We=E.mipmaps,Ye=E.isVideoTexture!==!0,yt=he.__version===void 0||B===!0,W=$.dataReady,Ae=C(E,_e);if(E.isDepthTexture)Ve=v(E.format===Yr,E.type),yt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Ve,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ve,_e.width,_e.height,0,Te,Oe,null));else if(E.isDataTexture)if(We.length>0){Ye&&yt&&t.texStorage2D(n.TEXTURE_2D,Ae,Ve,We[0].width,We[0].height);for(let le=0,me=We.length;le<me;le++)Se=We[le],Ye?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Se.width,Se.height,Te,Oe,Se.data):t.texImage2D(n.TEXTURE_2D,le,Ve,Se.width,Se.height,0,Te,Oe,Se.data);E.generateMipmaps=!1}else Ye?(yt&&t.texStorage2D(n.TEXTURE_2D,Ae,Ve,_e.width,_e.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e.width,_e.height,Te,Oe,_e.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,_e.width,_e.height,0,Te,Oe,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ve,We[0].width,We[0].height,_e.depth);for(let le=0,me=We.length;le<me;le++)if(Se=We[le],E.format!==Nn)if(Te!==null)if(Ye){if(W)if(E.layerUpdates.size>0){const Le=nm(Se.width,Se.height,E.format,E.type);for(const Ce of E.layerUpdates){const Ze=Se.data.subarray(Ce*Le/Se.data.BYTES_PER_ELEMENT,(Ce+1)*Le/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,Ce,Se.width,Se.height,1,Te,Ze)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,_e.depth,Te,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Ve,Se.width,Se.height,_e.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,_e.depth,Te,Oe,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Ve,Se.width,Se.height,_e.depth,0,Te,Oe,Se.data)}else{Ye&&yt&&t.texStorage2D(n.TEXTURE_2D,Ae,Ve,We[0].width,We[0].height);for(let le=0,me=We.length;le<me;le++)Se=We[le],E.format!==Nn?Te!==null?Ye?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Se.width,Se.height,Te,Oe,Se.data):t.texImage2D(n.TEXTURE_2D,le,Ve,Se.width,Se.height,0,Te,Oe,Se.data)}else if(E.isDataArrayTexture)if(Ye){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ve,_e.width,_e.height,_e.depth),W)if(E.layerUpdates.size>0){const le=nm(_e.width,_e.height,E.format,E.type);for(const me of E.layerUpdates){const Le=_e.data.subarray(me*le/_e.data.BYTES_PER_ELEMENT,(me+1)*le/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,_e.width,_e.height,1,Te,Oe,Le)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Te,Oe,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,_e.width,_e.height,_e.depth,0,Te,Oe,_e.data);else if(E.isData3DTexture)Ye?(yt&&t.texStorage3D(n.TEXTURE_3D,Ae,Ve,_e.width,_e.height,_e.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Te,Oe,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,_e.width,_e.height,_e.depth,0,Te,Oe,_e.data);else if(E.isFramebufferTexture){if(yt)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ae,Ve,_e.width,_e.height);else{let le=_e.width,me=_e.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(n.TEXTURE_2D,Le,Ve,le,me,0,Te,Oe,null),le>>=1,me>>=1}}else if(We.length>0){if(Ye&&yt){const le=k(We[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Ve,le.width,le.height)}for(let le=0,me=We.length;le<me;le++)Se=We[le],Ye?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Te,Oe,Se):t.texImage2D(n.TEXTURE_2D,le,Ve,Te,Oe,Se);E.generateMipmaps=!1}else if(Ye){if(yt){const le=k(_e);t.texStorage2D(n.TEXTURE_2D,Ae,Ve,le.width,le.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Oe,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Te,Oe,_e);m(E)&&d(D),he.__version=$.version,E.onUpdate&&E.onUpdate(E)}y.__version=E.version}function fe(y,E,N){if(E.image.length!==6)return;const D=Be(y,E),B=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+N);const $=i.get(B);if(B.version!==$.__version||D===!0){t.activeTexture(n.TEXTURE0+N);const he=st.getPrimaries(st.workingColorSpace),pe=E.colorSpace===vs?null:st.getPrimaries(E.colorSpace),ve=E.colorSpace===vs||he===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let me=0;me<6;me++)!De&&!_e?Te[me]=_(E.image[me],!0,s.maxCubemapSize):Te[me]=_e?E.image[me].image:E.image[me],Te[me]=P(E,Te[me]);const Oe=Te[0],Ve=r.convert(E.format,E.colorSpace),Se=r.convert(E.type),We=M(E.internalFormat,Ve,Se,E.colorSpace),Ye=E.isVideoTexture!==!0,yt=$.__version===void 0||D===!0,W=B.dataReady;let Ae=C(E,Oe);Ee(n.TEXTURE_CUBE_MAP,E);let le;if(De){Ye&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,We,Oe.width,Oe.height);for(let me=0;me<6;me++){le=Te[me].mipmaps;for(let Le=0;Le<le.length;Le++){const Ce=le[Le];E.format!==Nn?Ve!==null?Ye?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,0,0,Ce.width,Ce.height,Ve,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,We,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,0,0,Ce.width,Ce.height,Ve,Se,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,We,Ce.width,Ce.height,0,Ve,Se,Ce.data)}}}else{if(le=E.mipmaps,Ye&&yt){le.length>0&&Ae++;const me=k(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,We,me.width,me.height)}for(let me=0;me<6;me++)if(_e){Ye?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Te[me].width,Te[me].height,Ve,Se,Te[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,We,Te[me].width,Te[me].height,0,Ve,Se,Te[me].data);for(let Le=0;Le<le.length;Le++){const Ze=le[Le].image[me].image;Ye?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,0,0,Ze.width,Ze.height,Ve,Se,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,We,Ze.width,Ze.height,0,Ve,Se,Ze.data)}}else{Ye?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ve,Se,Te[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,We,Ve,Se,Te[me]);for(let Le=0;Le<le.length;Le++){const Ce=le[Le];Ye?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,0,0,Ve,Se,Ce.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,We,Ve,Se,Ce.image[me])}}}m(E)&&d(n.TEXTURE_CUBE_MAP),$.__version=B.version,E.onUpdate&&E.onUpdate(E)}y.__version=E.version}function Me(y,E,N,D,B,$){const he=r.convert(N.format,N.colorSpace),pe=r.convert(N.type),ve=M(N.internalFormat,he,pe,N.colorSpace),De=i.get(E),_e=i.get(N);if(_e.__renderTarget=E,!De.__hasExternalTextures){const Te=Math.max(1,E.width>>$),Oe=Math.max(1,E.height>>$);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?t.texImage3D(B,$,ve,Te,Oe,E.depth,0,he,pe,null):t.texImage2D(B,$,ve,Te,Oe,0,he,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),K(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,B,_e.__webglTexture,0,J(E)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,B,_e.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(y,E,N){if(n.bindRenderbuffer(n.RENDERBUFFER,y),E.depthBuffer){const D=E.depthTexture,B=D&&D.isDepthTexture?D.type:null,$=v(E.stencilBuffer,B),he=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=J(E);K(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,$,E.width,E.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,y)}else{const D=E.textures;for(let B=0;B<D.length;B++){const $=D[B],he=r.convert($.format,$.colorSpace),pe=r.convert($.type),ve=M($.internalFormat,he,pe,$.colorSpace),De=J(E);N&&K(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ve,E.width,E.height):K(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,ve,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ve,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(y,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const D=i.get(E.depthTexture);D.__renderTarget=E,(!D.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae(E.depthTexture,0);const B=D.__webglTexture,$=J(E);if(E.depthTexture.format===Or)K(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0);else if(E.depthTexture.format===Yr)K(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function ie(y){const E=i.get(y),N=y.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==y.depthTexture){const D=y.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),D){const B=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,D.removeEventListener("dispose",B)};D.addEventListener("dispose",B),E.__depthDisposeCallback=B}E.__boundDepthTexture=D}if(y.depthTexture&&!E.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Z(E.__webglFramebuffer,y)}else if(N){E.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[D]),E.__webglDepthbuffer[D]===void 0)E.__webglDepthbuffer[D]=n.createRenderbuffer(),U(E.__webglDepthbuffer[D],y,!1);else{const B=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),U(E.__webglDepthbuffer,y,!1);else{const D=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,B)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(y,E,N){const D=i.get(y);E!==void 0&&Me(D.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&ie(y)}function Re(y){const E=y.texture,N=i.get(y),D=i.get(E);y.addEventListener("dispose",A);const B=y.textures,$=y.isWebGLCubeRenderTarget===!0,he=B.length>1;if(he||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=E.version,o.memory.textures++),$){N.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer[pe]=[];for(let ve=0;ve<E.mipmaps.length;ve++)N.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else N.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)N.__webglFramebuffer[pe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(he)for(let pe=0,ve=B.length;pe<ve;pe++){const De=i.get(B[pe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&K(y)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let pe=0;pe<B.length;pe++){const ve=B[pe];N.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[pe]);const De=r.convert(ve.format,ve.colorSpace),_e=r.convert(ve.type),Te=M(ve.internalFormat,De,_e,ve.colorSpace,y.isXRRenderTarget===!0),Oe=J(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Te,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,N.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),U(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)Me(N.__webglFramebuffer[pe][ve],y,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else Me(N.__webglFramebuffer[pe],y,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let pe=0,ve=B.length;pe<ve;pe++){const De=B[pe],_e=i.get(De);t.bindTexture(n.TEXTURE_2D,_e.__webglTexture),Ee(n.TEXTURE_2D,De),Me(N.__webglFramebuffer,y,De,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(De)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(pe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,D.__webglTexture),Ee(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)Me(N.__webglFramebuffer[ve],y,E,n.COLOR_ATTACHMENT0,pe,ve);else Me(N.__webglFramebuffer,y,E,n.COLOR_ATTACHMENT0,pe,0);m(E)&&d(pe),t.unbindTexture()}y.depthBuffer&&ie(y)}function I(y){const E=y.textures;for(let N=0,D=E.length;N<D;N++){const B=E[N];if(m(B)){const $=x(y),he=i.get(B).__webglTexture;t.bindTexture($,he),d($),t.unbindTexture()}}}const O=[],S=[];function re(y){if(y.samples>0){if(K(y)===!1){const E=y.textures,N=y.width,D=y.height;let B=n.COLOR_BUFFER_BIT;const $=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(y),pe=E.length>1;if(pe)for(let ve=0;ve<E.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(B|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[ve]);const De=i.get(E[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,N,D,0,0,N,D,B,n.NEAREST),l===!0&&(O.length=0,S.length=0,O.push(n.COLOR_ATTACHMENT0+ve),y.depthBuffer&&y.resolveDepthBuffer===!1&&(O.push($),S.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ve=0;ve<E.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,he.__webglColorRenderbuffer[ve]);const De=i.get(E[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const E=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function J(y){return Math.min(s.maxSamples,y.samples)}function K(y){const E=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function w(y){const E=o.render.frame;u.get(y)!==E&&(u.set(y,E),y.update())}function P(y,E){const N=y.colorSpace,D=y.format,B=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==En&&N!==vs&&(st.getTransfer(N)===bt?(D!==Nn||B!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),E}function k(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=ae,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=Y,this.rebindTextures=de,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=K}function H1(n,e){function t(i,s=vs){let r;const o=st.getTransfer(s);if(i===ns)return n.UNSIGNED_BYTE;if(i===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===th)return n.UNSIGNED_SHORT_5_5_5_1;if(i===K_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Y_)return n.BYTE;if(i===q_)return n.SHORT;if(i===ea)return n.UNSIGNED_SHORT;if(i===Qf)return n.INT;if(i===tr)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===fa)return n.HALF_FLOAT;if(i===Z_)return n.ALPHA;if(i===J_)return n.RGB;if(i===Nn)return n.RGBA;if(i===Q_)return n.LUMINANCE;if(i===ev)return n.LUMINANCE_ALPHA;if(i===Or)return n.DEPTH_COMPONENT;if(i===Yr)return n.DEPTH_STENCIL;if(i===nh)return n.RED;if(i===ih)return n.RED_INTEGER;if(i===tv)return n.RG;if(i===sh)return n.RG_INTEGER;if(i===rh)return n.RGBA_INTEGER;if(i===sl||i===rl||i===ol||i===al)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vu||i===Gu||i===zu||i===Wu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xu||i===$u||i===ju)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xu||i===$u)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ju)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yu||i===qu||i===Ku||i===Zu||i===Ju||i===Qu||i===ef||i===tf||i===nf||i===sf||i===rf||i===of||i===af||i===lf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ku)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ju)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ef)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tf)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nf)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sf)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rf)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===of)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===af)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lf)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===cf||i===uf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ll)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nv||i===ff||i===hf||i===df)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ff)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===df)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const V1={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const G1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z1=`
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

}`;class W1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Un({vertexShader:G1,fragmentShader:z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X1 extends sr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=new W1,m=t.getContextAttributes();let d=null,x=null;const M=[],v=[],C=new ze;let L=null;const A=new ln;A.viewport=new ut;const H=new ln;H.viewport=new ut;const T=[A,H],b=new nA;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=M[ee];return fe===void 0&&(fe=new Zc,M[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=M[ee];return fe===void 0&&(fe=new Zc,M[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=M[ee];return fe===void 0&&(fe=new Zc,M[ee]=fe),fe.getHandSpace()};function z(ee){const fe=v.indexOf(ee.inputSource);if(fe===-1)return;const Me=M[fe];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,c||o),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ne(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",ae);for(let ee=0;ee<M.length;ee++){const fe=v[ee];fe!==null&&(v[ee]=null,M[ee].disconnect(fe))}F=null,V=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,s=null,x=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Me=null,U=null,Z=null;m.depth&&(Z=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?Yr:Or,U=m.stencil?jr:tr);const ie={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(ie),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new nr(h.textureWidth,h.textureHeight,{format:Nn,type:ns,depthTexture:new yv(h.textureWidth,h.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new nr(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:ns,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(ee){for(let fe=0;fe<ee.removed.length;fe++){const Me=ee.removed[fe],U=v.indexOf(Me);U>=0&&(v[U]=null,M[U].disconnect(Me))}for(let fe=0;fe<ee.added.length;fe++){const Me=ee.added[fe];let U=v.indexOf(Me);if(U===-1){for(let ie=0;ie<M.length;ie++)if(ie>=v.length){v.push(Me),U=ie;break}else if(v[ie]===null){v[ie]=Me,U=ie;break}if(U===-1)break}const Z=M[U];Z&&Z.connect(Me)}}const Q=new G,oe=new G;function Y(ee,fe,Me){Q.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(Me.matrixWorld);const U=Q.distanceTo(oe),Z=fe.projectionMatrix.elements,ie=Me.projectionMatrix.elements,de=Z[14]/(Z[10]-1),Re=Z[14]/(Z[10]+1),I=(Z[9]+1)/Z[5],O=(Z[9]-1)/Z[5],S=(Z[8]-1)/Z[0],re=(ie[8]+1)/ie[0],J=de*S,K=de*re,w=U/(-S+re),P=w*-S;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(P),ee.translateZ(w),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Z[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const k=de+w,y=Re+w,E=J-P,N=K+(U-P),D=I*Re/y*k,B=O*Re/y*k;ee.projectionMatrix.makePerspective(E,N,D,B,k,y),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ge(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let fe=ee.near,Me=ee.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),b.near=H.near=A.near=fe,b.far=H.far=A.far=Me,(F!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),F=b.near,V=b.far),A.layers.mask=ee.layers.mask|2,H.layers.mask=ee.layers.mask|4,b.layers.mask=A.layers.mask|H.layers.mask;const U=ee.parent,Z=b.cameras;ge(b,U);for(let ie=0;ie<Z.length;ie++)ge(Z[ie],U);Z.length===2?Y(b,A,H):b.projectionMatrix.copy(A.projectionMatrix),ce(ee,b,U)};function ce(ee,fe,Me){Me===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=qr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ue=null;function Ee(ee,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let U=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,U=!0);for(let ie=0;ie<Me.length;ie++){const de=Me[ie];let Re=null;if(p!==null)Re=p.getViewport(de);else{const O=f.getViewSubImage(h,de);Re=O.viewport,ie===0&&(e.setRenderTargetTextures(x,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(x))}let I=T[ie];I===void 0&&(I=new ln,I.layers.enable(ie),I.viewport=new ut,T[ie]=I),I.matrix.fromArray(de.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(de.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Re.x,Re.y,Re.width,Re.height),ie===0&&(b.matrix.copy(I.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),U===!0&&b.cameras.push(I)}const Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const ie=f.getDepthInformation(Me[0]);ie&&ie.isValid&&ie.texture&&_.init(e,ie,s.renderState)}}for(let Me=0;Me<M.length;Me++){const U=v[Me],Z=M[Me];U!==null&&Z!==void 0&&Z.update(U,fe,c||o)}ue&&ue(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Be=new Tv;Be.setAnimationLoop(Ee),this.setAnimationLoop=function(ee){ue=ee},this.dispose=function(){}}}const Hs=new fi,$1=new je;function j1(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,hv(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,M,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,Hs.copy(v),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),m.envMapRotation.value.setFromMatrix4($1.makeRotationFromEuler(Hs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Y1(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;i.uniformBlockBinding(x,v)}function c(x,M){let v=s[x.id];v===void 0&&(g(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",m));const C=M.program;i.updateUBOMapping(x,C);const L=e.render.frame;r[x.id]!==L&&(h(x),r[x.id]=L)}function u(x){const M=f();x.__bindingPointIndex=M;const v=n.createBuffer(),C=x.__size,L=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=s[x.id],v=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let L=0,A=v.length;L<A;L++){const H=Array.isArray(v[L])?v[L]:[v[L]];for(let T=0,b=H.length;T<b;T++){const F=H[T];if(p(F,L,T,C)===!0){const V=F.__offset,z=Array.isArray(F.value)?F.value:[F.value];let ne=0;for(let ae=0;ae<z.length;ae++){const Q=z[ae],oe=_(Q);typeof Q=="number"||typeof Q=="boolean"?(F.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,V+ne,F.__data)):Q.isMatrix3?(F.__data[0]=Q.elements[0],F.__data[1]=Q.elements[1],F.__data[2]=Q.elements[2],F.__data[3]=0,F.__data[4]=Q.elements[3],F.__data[5]=Q.elements[4],F.__data[6]=Q.elements[5],F.__data[7]=0,F.__data[8]=Q.elements[6],F.__data[9]=Q.elements[7],F.__data[10]=Q.elements[8],F.__data[11]=0):(Q.toArray(F.__data,ne),ne+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,v,C){const L=x.value,A=M+"_"+v;if(C[A]===void 0)return typeof L=="number"||typeof L=="boolean"?C[A]=L:C[A]=L.clone(),!0;{const H=C[A];if(typeof L=="number"||typeof L=="boolean"){if(H!==L)return C[A]=L,!0}else if(H.equals(L)===!1)return H.copy(L),!0}return!1}function g(x){const M=x.uniforms;let v=0;const C=16;for(let A=0,H=M.length;A<H;A++){const T=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,F=T.length;b<F;b++){const V=T[b],z=Array.isArray(V.value)?V.value:[V.value];for(let ne=0,ae=z.length;ne<ae;ne++){const Q=z[ne],oe=_(Q),Y=v%C,ge=Y%oe.boundary,ce=Y+ge;v+=ge,ce!==0&&C-ce<oe.storage&&(v+=C-ce),V.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=oe.storage}}}const L=v%C;return L>0&&(v+=C-L),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Lv{constructor(e={}){const{canvas:t=Kb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=Ss,this.toneMappingExposure=1;const v=this;let C=!1,L=0,A=0,H=null,T=-1,b=null;const F=new ut,V=new ut;let z=null;const ne=new He(0);let ae=0,Q=t.width,oe=t.height,Y=1,ge=null,ce=null;const ue=new ut(0,0,Q,oe),Ee=new ut(0,0,Q,oe);let Be=!1;const ee=new dh;let fe=!1,Me=!1;this.transmissionResolutionScale=1;const U=new je,Z=new je,ie=new G,de=new ut,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function O(){return H===null?Y:1}let S=i;function re(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jf}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),S===null){const X="webgl2";if(S=re(X,R),S===null)throw re(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let J,K,w,P,k,y,E,N,D,B,$,he,pe,ve,De,_e,Te,Oe,Ve,Se,We,Ye,yt,W;function Ae(){J=new sC(S),J.init(),Ye=new H1(S,J),K=new JR(S,J,e,Ye),w=new k1(S,J),K.reverseDepthBuffer&&h&&w.buffers.depth.setReversed(!0),P=new aC(S),k=new T1,y=new B1(S,J,w,k,K,Ye,P),E=new eC(v),N=new iC(v),D=new pA(S),yt=new KR(S,D),B=new rC(S,D,P,yt),$=new cC(S,B,D,P),Ve=new lC(S,K,y),_e=new QR(k),he=new b1(v,E,N,J,K,yt,_e),pe=new j1(v,k),ve=new w1,De=new D1(J),Oe=new qR(v,E,N,w,$,p,l),Te=new U1(v,$,K),W=new Y1(S,P,K,w),Se=new ZR(S,J,P),We=new oC(S,J,P),P.programs=he.programs,v.capabilities=K,v.extensions=J,v.properties=k,v.renderLists=ve,v.shadowMap=Te,v.state=w,v.info=P}Ae();const le=new X1(v,S);this.xr=le,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(Q,oe,!1))},this.getSize=function(R){return R.set(Q,oe)},this.setSize=function(R,X,te=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=R,oe=X,t.width=Math.floor(R*Y),t.height=Math.floor(X*Y),te===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(Q*Y,oe*Y).floor()},this.setDrawingBufferSize=function(R,X,te){Q=R,oe=X,Y=te,t.width=Math.floor(R*te),t.height=Math.floor(X*te),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(ue)},this.setViewport=function(R,X,te,se){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,X,te,se),w.viewport(F.copy(ue).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,X,te,se){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,X,te,se),w.scissor(V.copy(Ee).multiplyScalar(Y).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(R){w.setScissorTest(Be=R)},this.setOpaqueSort=function(R){ge=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(R=!0,X=!0,te=!0){let se=0;if(R){let j=!1;if(H!==null){const xe=H.texture.format;j=xe===rh||xe===sh||xe===ih}if(j){const xe=H.texture.type,we=xe===ns||xe===tr||xe===ea||xe===jr||xe===eh||xe===th,Ie=Oe.getClearColor(),Ne=Oe.getClearAlpha(),Xe=Ie.r,$e=Ie.g,Fe=Ie.b;we?(g[0]=Xe,g[1]=$e,g[2]=Fe,g[3]=Ne,S.clearBufferuiv(S.COLOR,0,g)):(_[0]=Xe,_[1]=$e,_[2]=Fe,_[3]=Ne,S.clearBufferiv(S.COLOR,0,_))}else se|=S.COLOR_BUFFER_BIT}X&&(se|=S.DEPTH_BUFFER_BIT),te&&(se|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Oe.dispose(),ve.dispose(),De.dispose(),k.dispose(),E.dispose(),N.dispose(),$.dispose(),yt.dispose(),W.dispose(),he.dispose(),le.dispose(),le.removeEventListener("sessionstart",bh),le.removeEventListener("sessionend",Th),Cs.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=P.autoReset,X=Te.enabled,te=Te.autoUpdate,se=Te.needsUpdate,j=Te.type;Ae(),P.autoReset=R,Te.enabled=X,Te.autoUpdate=te,Te.needsUpdate=se,Te.type=j}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ze(R){const X=R.target;X.removeEventListener("dispose",Ze),Nt(X)}function Nt(R){nn(R),k.remove(R)}function nn(R){const X=k.get(R).programs;X!==void 0&&(X.forEach(function(te){he.releaseProgram(te)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,te,se,j,xe){X===null&&(X=Re);const we=j.isMesh&&j.matrixWorld.determinant()<0,Ie=zv(R,X,te,se,j);w.setMaterial(se,we);let Ne=te.index,Xe=1;if(se.wireframe===!0){if(Ne=B.getWireframeAttribute(te),Ne===void 0)return;Xe=2}const $e=te.drawRange,Fe=te.attributes.position;let ot=$e.start*Xe,ft=($e.start+$e.count)*Xe;xe!==null&&(ot=Math.max(ot,xe.start*Xe),ft=Math.min(ft,(xe.start+xe.count)*Xe)),Ne!==null?(ot=Math.max(ot,0),ft=Math.min(ft,Ne.count)):Fe!=null&&(ot=Math.max(ot,0),ft=Math.min(ft,Fe.count));const Ht=ft-ot;if(Ht<0||Ht===1/0)return;yt.setup(j,se,Ie,te,Ne);let Ot,at=Se;if(Ne!==null&&(Ot=D.get(Ne),at=We,at.setIndex(Ot)),j.isMesh)se.wireframe===!0?(w.setLineWidth(se.wireframeLinewidth*O()),at.setMode(S.LINES)):at.setMode(S.TRIANGLES);else if(j.isLine){let ke=se.linewidth;ke===void 0&&(ke=1),w.setLineWidth(ke*O()),j.isLineSegments?at.setMode(S.LINES):j.isLineLoop?at.setMode(S.LINE_LOOP):at.setMode(S.LINE_STRIP)}else j.isPoints?at.setMode(S.POINTS):j.isSprite&&at.setMode(S.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)at.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ke=j._multiDrawStarts,Qt=j._multiDrawCounts,ht=j._multiDrawCount,Kn=Ne?D.get(Ne).bytesPerElement:1,rr=k.get(se).currentProgram.getUniforms();for(let Rn=0;Rn<ht;Rn++)rr.setValue(S,"_gl_DrawID",Rn),at.render(ke[Rn]/Kn,Qt[Rn])}else if(j.isInstancedMesh)at.renderInstances(ot,Ht,j.count);else if(te.isInstancedBufferGeometry){const ke=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Qt=Math.min(te.instanceCount,ke);at.renderInstances(ot,Ht,Qt)}else at.render(ot,Ht)};function Et(R,X,te){R.transparent===!0&&R.side===ti&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,_a(R,X,te),R.side=ts,R.needsUpdate=!0,_a(R,X,te),R.side=ti):_a(R,X,te)}this.compile=function(R,X,te=null){te===null&&(te=R),d=De.get(te),d.init(X),M.push(d),te.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),R!==te&&R.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights();const se=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const xe=j.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const Ie=xe[we];Et(Ie,te,j),se.add(Ie)}else Et(xe,te,j),se.add(xe)}),M.pop(),d=null,se},this.compileAsync=function(R,X,te=null){const se=this.compile(R,X,te);return new Promise(j=>{function xe(){if(se.forEach(function(we){k.get(we).currentProgram.isReady()&&se.delete(we)}),se.size===0){j(R);return}setTimeout(xe,10)}J.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let qn=null;function Pi(R){qn&&qn(R)}function bh(){Cs.stop()}function Th(){Cs.start()}const Cs=new Tv;Cs.setAnimationLoop(Pi),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(R){qn=R,le.setAnimationLoop(R),R===null?Cs.stop():Cs.start()},le.addEventListener("sessionstart",bh),le.addEventListener("sessionend",Th),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(X),X=le.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,X,H),d=De.get(R,M.length),d.init(X),M.push(d),Z.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ee.setFromProjectionMatrix(Z),Me=this.localClippingEnabled,fe=_e.init(this.clippingPlanes,Me),m=ve.get(R,x.length),m.init(),x.push(m),le.enabled===!0&&le.isPresenting===!0){const xe=v.xr.getDepthSensingMesh();xe!==null&&Kl(xe,X,-1/0,v.sortObjects)}Kl(R,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ge,ce),I=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,I&&Oe.addToRenderList(m,R),this.info.render.frame++,fe===!0&&_e.beginShadows();const te=d.state.shadowsArray;Te.render(te,R,X),fe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=m.opaque,j=m.transmissive;if(d.setupLights(),X.isArrayCamera){const xe=X.cameras;if(j.length>0)for(let we=0,Ie=xe.length;we<Ie;we++){const Ne=xe[we];wh(se,j,R,Ne)}I&&Oe.render(R);for(let we=0,Ie=xe.length;we<Ie;we++){const Ne=xe[we];Ah(m,R,Ne,Ne.viewport)}}else j.length>0&&wh(se,j,R,X),I&&Oe.render(R),Ah(m,R,X);H!==null&&A===0&&(y.updateMultisampleRenderTarget(H),y.updateRenderTargetMipmap(H)),R.isScene===!0&&R.onAfterRender(v,R,X),yt.resetDefaultState(),T=-1,b=null,M.pop(),M.length>0?(d=M[M.length-1],fe===!0&&_e.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Kl(R,X,te,se){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){se&&de.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Z);const we=$.update(R),Ie=R.material;Ie.visible&&m.push(R,we,Ie,te,de.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){const we=$.update(R),Ie=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),de.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),de.copy(we.boundingSphere.center)),de.applyMatrix4(R.matrixWorld).applyMatrix4(Z)),Array.isArray(Ie)){const Ne=we.groups;for(let Xe=0,$e=Ne.length;Xe<$e;Xe++){const Fe=Ne[Xe],ot=Ie[Fe.materialIndex];ot&&ot.visible&&m.push(R,we,ot,te,de.z,Fe)}}else Ie.visible&&m.push(R,we,Ie,te,de.z,null)}}const xe=R.children;for(let we=0,Ie=xe.length;we<Ie;we++)Kl(xe[we],X,te,se)}function Ah(R,X,te,se){const j=R.opaque,xe=R.transmissive,we=R.transparent;d.setupLightsView(te),fe===!0&&_e.setGlobalState(v.clippingPlanes,te),se&&w.viewport(F.copy(se)),j.length>0&&ga(j,X,te),xe.length>0&&ga(xe,X,te),we.length>0&&ga(we,X,te),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function wh(R,X,te,se){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[se.id]===void 0&&(d.state.transmissionRenderTarget[se.id]=new nr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?fa:ns,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const xe=d.state.transmissionRenderTarget[se.id],we=se.viewport||F;xe.setSize(we.z*v.transmissionResolutionScale,we.w*v.transmissionResolutionScale);const Ie=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(ne),ae=v.getClearAlpha(),ae<1&&v.setClearColor(16777215,.5),v.clear(),I&&Oe.render(te);const Ne=v.toneMapping;v.toneMapping=Ss;const Xe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),d.setupLightsView(se),fe===!0&&_e.setGlobalState(v.clippingPlanes,se),ga(R,te,se),y.updateMultisampleRenderTarget(xe),y.updateRenderTargetMipmap(xe),J.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Fe=0,ot=X.length;Fe<ot;Fe++){const ft=X[Fe],Ht=ft.object,Ot=ft.geometry,at=ft.material,ke=ft.group;if(at.side===ti&&Ht.layers.test(se.layers)){const Qt=at.side;at.side=xn,at.needsUpdate=!0,Rh(Ht,te,se,Ot,at,ke),at.side=Qt,at.needsUpdate=!0,$e=!0}}$e===!0&&(y.updateMultisampleRenderTarget(xe),y.updateRenderTargetMipmap(xe))}v.setRenderTarget(Ie),v.setClearColor(ne,ae),Xe!==void 0&&(se.viewport=Xe),v.toneMapping=Ne}function ga(R,X,te){const se=X.isScene===!0?X.overrideMaterial:null;for(let j=0,xe=R.length;j<xe;j++){const we=R[j],Ie=we.object,Ne=we.geometry,Xe=se===null?we.material:se,$e=we.group;Ie.layers.test(te.layers)&&Rh(Ie,X,te,Ne,Xe,$e)}}function Rh(R,X,te,se,j,xe){R.onBeforeRender(v,X,te,se,j,xe),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(v,X,te,se,R,xe),j.transparent===!0&&j.side===ti&&j.forceSinglePass===!1?(j.side=xn,j.needsUpdate=!0,v.renderBufferDirect(te,X,se,j,R,xe),j.side=ts,j.needsUpdate=!0,v.renderBufferDirect(te,X,se,j,R,xe),j.side=ti):v.renderBufferDirect(te,X,se,j,R,xe),R.onAfterRender(v,X,te,se,j,xe)}function _a(R,X,te){X.isScene!==!0&&(X=Re);const se=k.get(R),j=d.state.lights,xe=d.state.shadowsArray,we=j.state.version,Ie=he.getParameters(R,j.state,xe,X,te),Ne=he.getProgramCacheKey(Ie);let Xe=se.programs;se.environment=R.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(R.isMeshStandardMaterial?N:E).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",Ze),Xe=new Map,se.programs=Xe);let $e=Xe.get(Ne);if($e!==void 0){if(se.currentProgram===$e&&se.lightsStateVersion===we)return Lh(R,Ie),$e}else Ie.uniforms=he.getUniforms(R),R.onBeforeCompile(Ie,v),$e=he.acquireProgram(Ie,Ne),Xe.set(Ne,$e),se.uniforms=Ie.uniforms;const Fe=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Fe.clippingPlanes=_e.uniform),Lh(R,Ie),se.needsLights=Xv(R),se.lightsStateVersion=we,se.needsLights&&(Fe.ambientLightColor.value=j.state.ambient,Fe.lightProbe.value=j.state.probe,Fe.directionalLights.value=j.state.directional,Fe.directionalLightShadows.value=j.state.directionalShadow,Fe.spotLights.value=j.state.spot,Fe.spotLightShadows.value=j.state.spotShadow,Fe.rectAreaLights.value=j.state.rectArea,Fe.ltc_1.value=j.state.rectAreaLTC1,Fe.ltc_2.value=j.state.rectAreaLTC2,Fe.pointLights.value=j.state.point,Fe.pointLightShadows.value=j.state.pointShadow,Fe.hemisphereLights.value=j.state.hemi,Fe.directionalShadowMap.value=j.state.directionalShadowMap,Fe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Fe.spotShadowMap.value=j.state.spotShadowMap,Fe.spotLightMatrix.value=j.state.spotLightMatrix,Fe.spotLightMap.value=j.state.spotLightMap,Fe.pointShadowMap.value=j.state.pointShadowMap,Fe.pointShadowMatrix.value=j.state.pointShadowMatrix),se.currentProgram=$e,se.uniformsList=null,$e}function Ch(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=cl.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Lh(R,X){const te=k.get(R);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function zv(R,X,te,se,j){X.isScene!==!0&&(X=Re),y.resetTextureUnits();const xe=X.fog,we=se.isMeshStandardMaterial?X.environment:null,Ie=H===null?v.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:En,Ne=(se.isMeshStandardMaterial?N:E).get(se.envMap||we),Xe=se.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,$e=!!te.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Fe=!!te.morphAttributes.position,ot=!!te.morphAttributes.normal,ft=!!te.morphAttributes.color;let Ht=Ss;se.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ht=v.toneMapping);const Ot=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,at=Ot!==void 0?Ot.length:0,ke=k.get(se),Qt=d.state.lights;if(fe===!0&&(Me===!0||R!==b)){const fn=R===b&&se.id===T;_e.setState(se,R,fn)}let ht=!1;se.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Qt.state.version||ke.outputColorSpace!==Ie||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==Ne||se.fog===!0&&ke.fog!==xe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==_e.numPlanes||ke.numIntersection!==_e.numIntersection)||ke.vertexAlphas!==Xe||ke.vertexTangents!==$e||ke.morphTargets!==Fe||ke.morphNormals!==ot||ke.morphColors!==ft||ke.toneMapping!==Ht||ke.morphTargetsCount!==at)&&(ht=!0):(ht=!0,ke.__version=se.version);let Kn=ke.currentProgram;ht===!0&&(Kn=_a(se,X,j));let rr=!1,Rn=!1,lo=!1;const Pt=Kn.getUniforms(),kn=ke.uniforms;if(w.useProgram(Kn.program)&&(rr=!0,Rn=!0,lo=!0),se.id!==T&&(T=se.id,Rn=!0),rr||b!==R){w.buffers.depth.getReversed()?(U.copy(R.projectionMatrix),Jb(U),Qb(U),Pt.setValue(S,"projectionMatrix",U)):Pt.setValue(S,"projectionMatrix",R.projectionMatrix),Pt.setValue(S,"viewMatrix",R.matrixWorldInverse);const Mn=Pt.map.cameraPosition;Mn!==void 0&&Mn.setValue(S,ie.setFromMatrixPosition(R.matrixWorld)),K.logarithmicDepthBuffer&&Pt.setValue(S,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Pt.setValue(S,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Rn=!0,lo=!0)}if(j.isSkinnedMesh){Pt.setOptional(S,j,"bindMatrix"),Pt.setOptional(S,j,"bindMatrixInverse");const fn=j.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Pt.setValue(S,"boneTexture",fn.boneTexture,y))}j.isBatchedMesh&&(Pt.setOptional(S,j,"batchingTexture"),Pt.setValue(S,"batchingTexture",j._matricesTexture,y),Pt.setOptional(S,j,"batchingIdTexture"),Pt.setValue(S,"batchingIdTexture",j._indirectTexture,y),Pt.setOptional(S,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(S,"batchingColorTexture",j._colorsTexture,y));const Bn=te.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Ve.update(j,te,Kn),(Rn||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,Pt.setValue(S,"receiveShadow",j.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(kn.envMap.value=Ne,kn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(kn.envMapIntensity.value=X.environmentIntensity),Rn&&(Pt.setValue(S,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Wv(kn,lo),xe&&se.fog===!0&&pe.refreshFogUniforms(kn,xe),pe.refreshMaterialUniforms(kn,se,Y,oe,d.state.transmissionRenderTarget[R.id]),cl.upload(S,Ch(ke),kn,y)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(cl.upload(S,Ch(ke),kn,y),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Pt.setValue(S,"center",j.center),Pt.setValue(S,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(S,"normalMatrix",j.normalMatrix),Pt.setValue(S,"modelMatrix",j.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const fn=se.uniformsGroups;for(let Mn=0,Zl=fn.length;Mn<Zl;Mn++){const Ls=fn[Mn];W.update(Ls,Kn),W.bind(Ls,Kn)}}return Kn}function Wv(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Xv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,X,te){k.get(R.texture).__webglTexture=X,k.get(R.depthTexture).__webglTexture=te;const se=k.get(R);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=te===void 0,se.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const te=k.get(R);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const $v=S.createFramebuffer();this.setRenderTarget=function(R,X=0,te=0){H=R,L=X,A=te;let se=!0,j=null,xe=!1,we=!1;if(R){const Ne=k.get(R);if(Ne.__useDefaultFramebuffer!==void 0)w.bindFramebuffer(S.FRAMEBUFFER,null),se=!1;else if(Ne.__webglFramebuffer===void 0)y.setupRenderTarget(R);else if(Ne.__hasExternalTextures)y.rebindTextures(R,k.get(R.texture).__webglTexture,k.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Fe=R.depthTexture;if(Ne.__boundDepthTexture!==Fe){if(Fe!==null&&k.has(Fe)&&(R.width!==Fe.image.width||R.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const $e=k.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[X])?j=$e[X][te]:j=$e[X],xe=!0):R.samples>0&&y.useMultisampledRTT(R)===!1?j=k.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?j=$e[te]:j=$e,F.copy(R.viewport),V.copy(R.scissor),z=R.scissorTest}else F.copy(ue).multiplyScalar(Y).floor(),V.copy(Ee).multiplyScalar(Y).floor(),z=Be;if(te!==0&&(j=$v),w.bindFramebuffer(S.FRAMEBUFFER,j)&&se&&w.drawBuffers(R,j),w.viewport(F),w.scissor(V),w.setScissorTest(z),xe){const Ne=k.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,te)}else if(we){const Ne=k.get(R.texture),Xe=X;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ne.__webglTexture,te,Xe)}else if(R!==null&&te!==0){const Ne=k.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ne.__webglTexture,te)}T=-1},this.readRenderTargetPixels=function(R,X,te,se,j,xe,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){w.bindFramebuffer(S.FRAMEBUFFER,Ie);try{const Ne=R.texture,Xe=Ne.format,$e=Ne.type;if(!K.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-se&&te>=0&&te<=R.height-j&&S.readPixels(X,te,se,j,Ye.convert(Xe),Ye.convert($e),xe)}finally{const Ne=H!==null?k.get(H).__webglFramebuffer:null;w.bindFramebuffer(S.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(R,X,te,se,j,xe,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){const Ne=R.texture,Xe=Ne.format,$e=Ne.type;if(!K.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-se&&te>=0&&te<=R.height-j){w.bindFramebuffer(S.FRAMEBUFFER,Ie);const Fe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Fe),S.bufferData(S.PIXEL_PACK_BUFFER,xe.byteLength,S.STREAM_READ),S.readPixels(X,te,se,j,Ye.convert(Xe),Ye.convert($e),0);const ot=H!==null?k.get(H).__webglFramebuffer:null;w.bindFramebuffer(S.FRAMEBUFFER,ot);const ft=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Zb(S,ft,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Fe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,xe),S.deleteBuffer(Fe),S.deleteSync(ft),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,te=0){R.isTexture!==!0&&(wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const se=Math.pow(2,-te),j=Math.floor(R.image.width*se),xe=Math.floor(R.image.height*se),we=X!==null?X.x:0,Ie=X!==null?X.y:0;y.setTexture2D(R,0),S.copyTexSubImage2D(S.TEXTURE_2D,te,0,0,we,Ie,j,xe),w.unbindTexture()};const jv=S.createFramebuffer(),Yv=S.createFramebuffer();this.copyTextureToTexture=function(R,X,te=null,se=null,j=0,xe=null){R.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,R=arguments[1],X=arguments[2],xe=arguments[3]||0,te=null),xe===null&&(j!==0?(wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=j,j=0):xe=0);let we,Ie,Ne,Xe,$e,Fe,ot,ft,Ht;const Ot=R.isCompressedTexture?R.mipmaps[xe]:R.image;if(te!==null)we=te.max.x-te.min.x,Ie=te.max.y-te.min.y,Ne=te.isBox3?te.max.z-te.min.z:1,Xe=te.min.x,$e=te.min.y,Fe=te.isBox3?te.min.z:0;else{const Bn=Math.pow(2,-j);we=Math.floor(Ot.width*Bn),Ie=Math.floor(Ot.height*Bn),R.isDataArrayTexture?Ne=Ot.depth:R.isData3DTexture?Ne=Math.floor(Ot.depth*Bn):Ne=1,Xe=0,$e=0,Fe=0}se!==null?(ot=se.x,ft=se.y,Ht=se.z):(ot=0,ft=0,Ht=0);const at=Ye.convert(X.format),ke=Ye.convert(X.type);let Qt;X.isData3DTexture?(y.setTexture3D(X,0),Qt=S.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(y.setTexture2DArray(X,0),Qt=S.TEXTURE_2D_ARRAY):(y.setTexture2D(X,0),Qt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,X.unpackAlignment);const ht=S.getParameter(S.UNPACK_ROW_LENGTH),Kn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),rr=S.getParameter(S.UNPACK_SKIP_PIXELS),Rn=S.getParameter(S.UNPACK_SKIP_ROWS),lo=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ot.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ot.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Xe),S.pixelStorei(S.UNPACK_SKIP_ROWS,$e),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Fe);const Pt=R.isDataArrayTexture||R.isData3DTexture,kn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Bn=k.get(R),fn=k.get(X),Mn=k.get(Bn.__renderTarget),Zl=k.get(fn.__renderTarget);w.bindFramebuffer(S.READ_FRAMEBUFFER,Mn.__webglFramebuffer),w.bindFramebuffer(S.DRAW_FRAMEBUFFER,Zl.__webglFramebuffer);for(let Ls=0;Ls<Ne;Ls++)Pt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,k.get(R).__webglTexture,j,Fe+Ls),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,k.get(X).__webglTexture,xe,Ht+Ls)),S.blitFramebuffer(Xe,$e,we,Ie,ot,ft,we,Ie,S.DEPTH_BUFFER_BIT,S.NEAREST);w.bindFramebuffer(S.READ_FRAMEBUFFER,null),w.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||k.has(R)){const Bn=k.get(R),fn=k.get(X);w.bindFramebuffer(S.READ_FRAMEBUFFER,jv),w.bindFramebuffer(S.DRAW_FRAMEBUFFER,Yv);for(let Mn=0;Mn<Ne;Mn++)Pt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Bn.__webglTexture,j,Fe+Mn):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Bn.__webglTexture,j),kn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,fn.__webglTexture,xe,Ht+Mn):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,fn.__webglTexture,xe),j!==0?S.blitFramebuffer(Xe,$e,we,Ie,ot,ft,we,Ie,S.COLOR_BUFFER_BIT,S.NEAREST):kn?S.copyTexSubImage3D(Qt,xe,ot,ft,Ht+Mn,Xe,$e,we,Ie):S.copyTexSubImage2D(Qt,xe,ot,ft,Xe,$e,we,Ie);w.bindFramebuffer(S.READ_FRAMEBUFFER,null),w.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else kn?R.isDataTexture||R.isData3DTexture?S.texSubImage3D(Qt,xe,ot,ft,Ht,we,Ie,Ne,at,ke,Ot.data):X.isCompressedArrayTexture?S.compressedTexSubImage3D(Qt,xe,ot,ft,Ht,we,Ie,Ne,at,Ot.data):S.texSubImage3D(Qt,xe,ot,ft,Ht,we,Ie,Ne,at,ke,Ot):R.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,xe,ot,ft,we,Ie,at,ke,Ot.data):R.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,xe,ot,ft,Ot.width,Ot.height,at,Ot.data):S.texSubImage2D(S.TEXTURE_2D,xe,ot,ft,we,Ie,at,ke,Ot);S.pixelStorei(S.UNPACK_ROW_LENGTH,ht),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Kn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,rr),S.pixelStorei(S.UNPACK_SKIP_ROWS,Rn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,lo),xe===0&&X.generateMipmaps&&S.generateMipmap(Qt),w.unbindTexture()},this.copyTextureToTexture3D=function(R,X,te=null,se=null,j=0){return R.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,se=arguments[1]||null,R=arguments[2],X=arguments[3],j=arguments[4]||0),wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,te,se,j)},this.initRenderTarget=function(R){k.get(R).__webglFramebuffer===void 0&&y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?y.setTextureCube(R,0):R.isData3DTexture?y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?y.setTexture2DArray(R,0):y.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){L=0,A=0,H=null,w.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}function wm(n,e){if(e===Sb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===pf||e===iv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===pf)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Pv extends oo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Q1(t)}),this.register(function(t){return new eL(t)}),this.register(function(t){return new cL(t)}),this.register(function(t){return new uL(t)}),this.register(function(t){return new fL(t)}),this.register(function(t){return new nL(t)}),this.register(function(t){return new iL(t)}),this.register(function(t){return new sL(t)}),this.register(function(t){return new rL(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new oL(t)}),this.register(function(t){return new tL(t)}),this.register(function(t){return new lL(t)}),this.register(function(t){return new aL(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new hL(t)}),this.register(function(t){return new dL(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ko.extractUrlBase(e);o=ko.resolveURL(c,this.path)}else o=ko.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Sv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Iv){try{o[it.KHR_BINARY_GLTF]=new pL(e)}catch(f){s&&s(f);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new wL(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case it.KHR_MATERIALS_UNLIT:o[f]=new Z1;break;case it.KHR_DRACO_MESH_COMPRESSION:o[f]=new mL(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[f]=new gL;break;case it.KHR_MESH_QUANTIZATION:o[f]=new _L;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function q1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class K1{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new He(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],En);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new eo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new QT(u),c.distance=f;break;case"spot":c=new ZT(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Z1{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return ys}extendParams(e,t,i){const s=[];e.color=new He(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],En),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Jt))}return Promise.all(s)}}class J1{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Q1{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(a,a)}return Promise.all(r)}}class eL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class tL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class nL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],En)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Jt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class iL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class sL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(a[0],a[1],a[2],En),Promise.all(r)}}class rL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class oL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(a[0],a[1],a[2],En),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Jt)),Promise.all(r)}}class aL{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class lL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class cL{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class uL{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fL{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hL{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,s.mode,s.filter),p})})}else return null}}class dL{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of f){const _=new je,m=new G,d=new Yn,x=new G(1,1,1),M=new AT(g.geometry,g.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,_.compose(m,d,x));for(const v in l)if(v==="_COLOR_0"){const C=l[v];M.instanceColor=new gf(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Lt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Iv="glTF",So=12,Rm={JSON:1313821514,BIN:5130562};class pL{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,So),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Iv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-So,r=new DataView(e,So);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Rm.JSON){const c=new Uint8Array(e,So+o,a);this.content=i.decode(c)}else if(l===Rm.BIN){const c=So+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=yf[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=yf[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],p=Fr[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}f(p)},a,c,En,h)})})}}class gL{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _L{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class Dv extends pa{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(i-t)/u,h=f*f,p=h*f,g=e*c,_=g-c,m=-2*p+3*h,d=p-h,x=1-m,M=d-h+f;for(let v=0;v!==a;v++){const C=o[_+v+a],L=o[_+v+l]*u,A=o[g+v+a],H=o[g+v]*u;r[v]=x*C+M*L+m*A+d*H}return r}}const vL=new Yn;class xL extends Dv{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return vL.fromArray(r).normalize().toArray(r),r}}const Gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cm={9728:yn,9729:Dn,9984:j_,9985:il,9986:Ao,9987:qi},Lm={33071:xs,33648:Ml,10497:$r},Jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yL={CUBICSPLINE:void 0,LINEAR:na,STEP:ta},Qc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function EL(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Yl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ts})),n.DefaultMaterial}function Vs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Wi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ML(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function SL(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bL(n){let e;const t=n.extensions&&n.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+eu(t.attributes):e=n.indices+":"+eu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+eu(n.targets[i]);return e}function eu(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ef(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TL(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const AL=new je;class wL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new q1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new YT(this.options.manager):this.textureLoader=new tA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Vs(r,a,s),Wi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(ko.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Jc[s.type],a=Fr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new kt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Jc[s.type],c=Fr[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==f){const d=Math.floor(h/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let M=t.cache.get(x);M||(_=new c(a,d*p,s.count*p/u),M=new ET(_,p/u),t.cache.add(x,M)),m=new uh(M,l,h%p/u,g)}else a===null?_=new c(s.count*l):_=new c(a,h,s.count*l),m=new kt(_,l,g);if(s.sparse!==void 0){const d=Jc.SCALAR,x=Fr[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,C=new x(o[1],M,s.sparse.count*d),L=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,H=C.length;A<H;A++){const T=C[A];if(m.setX(T,L[A*l]),l>=2&&m.setY(T,L[A*l+1]),l>=3&&m.setZ(T,L[A*l+2]),l>=4&&m.setW(T,L[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Cm[h.magFilter]||Dn,u.minFilter=Cm[h.minFilter]||qi,u.wrapS=Lm[h.wrapS]||$r,u.wrapT=Lm[h.wrapT]||$r,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==yn&&u.minFilter!==Dn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new jt(_);m.needsUpdate=!0,h(m)}),t.load(ko.resolveURL(f,r.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Wi(f,o),f.userData.mimeType=o.mimeType||TL(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new vv,Ti.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new _v,Ti.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Yl}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){const f=s[it.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new He(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],En),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Jt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ti);const u=r.alphaMode||Qc.OPAQUE;if(u===Qc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Qc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ys&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==ys&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ys){const f=r.emissiveFactor;a.emissive=new He().setRGB(f[0],f[1],f[2],En)}return r.emissiveTexture!==void 0&&o!==ys&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Jt)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),Wi(f,r),t.associations.set(f,{materials:e}),r.extensions&&Vs(s,f,r),f})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Pm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=bL(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Pm(new Fn,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?EL(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let d;const x=c[p];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new ST(_,x):new en(_,x),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?d.geometry=wm(d.geometry,iv):m.mode===Gn.TRIANGLE_FAN&&(d.geometry=wm(d.geometry,pf));else if(m.mode===Gn.LINES)d=new CT(_,x);else if(m.mode===Gn.LINE_STRIP)d=new ph(_,x);else if(m.mode===Gn.LINE_LOOP)d=new LT(_,x);else if(m.mode===Gn.POINTS)d=new xv(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&SL(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Wi(d,r),m.extensions&&Vs(s,d,m),t.assignFinalMaterial(d),f.push(d)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return r.extensions&&Vs(s,f[0],r),f[0];const h=new Mi;r.extensions&&Vs(s,h,r),t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ln(Tl.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new gh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Wi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new je;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new hh(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){const p=s.channels[f],g=s.samplers[p.sampler],_=p.target,m=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],p=f[1],g=f[2],_=f[3],m=f[4],d=[];for(let x=0,M=h.length;x<M;x++){const v=h[x],C=p[x],L=g[x],A=_[x],H=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const T=i._createAnimationTracks(v,C,L,A,H);if(T)for(let b=0;b<T.length;b++)d.push(T[b])}return new VT(r,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,AL)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new gv:c.length>1?u=new Mi:c.length===1?u=c[0]:u=new Lt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Wi(u,r),r.extensions&&Vs(i,u,r),r.matrix!==void 0){const f=new je;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Mi;i.name&&(r.name=s.createUniqueName(i.name)),Wi(r,i),i.extensions&&Vs(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,p]of s.associations)(h instanceof Ti||h instanceof jt)&&f.set(h,p);return u.traverse(h=>{const p=s.associations.get(h);p!=null&&f.set(h,p)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];hs[r.path]===hs.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(hs[r.path]){case hs.weights:c=Zr;break;case hs.rotation:c=Jr;break;case hs.position:case hs.scale:c=Qr;break;default:switch(i.itemSize){case 1:c=Zr;break;case 2:case 3:default:c=Qr;break}break}const u=s.interpolation!==void 0?yL[s.interpolation]:na,f=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){const g=new c(l[h]+"."+hs[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ef(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Jr?xL:Dv;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RL(n,e,t){const i=e.attributes,s=new wi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),a.normalized){const u=Ef(Fr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new G,l=new G;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const _=Ef(Fr[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Ri;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Pm(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=yf[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return st.workingColorSpace!==En&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Wi(n,e),RL(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ML(n,e.targets,t):n})}const ul=[{id:"marble",name:"Marble",stops:[{t:0,color:"#cccccc"},{t:1,color:"#cccccc"}]},{id:"hypsometric",name:"Hypsometric",stops:[{t:0,color:"#0000aa"},{t:.15,color:"#0044cc"},{t:.25,color:"#00aacc"},{t:.35,color:"#00cc66"},{t:.45,color:"#44dd00"},{t:.55,color:"#ccdd00"},{t:.65,color:"#ffcc00"},{t:.75,color:"#ff8800"},{t:.85,color:"#ff3300"},{t:.95,color:"#cc0000"},{t:1,color:"#880000"}]},{id:"elevation",name:"Elevation",stops:[{t:0,color:"#7a4a30"},{t:.12,color:"#8b5a3a"},{t:.25,color:"#a06840"},{t:.4,color:"#c08050"},{t:.55,color:"#d8a070"},{t:.68,color:"#e0b888"},{t:.8,color:"#ecd0a0"},{t:.92,color:"#f5e0c0"},{t:1,color:"#ffffff"}]}];function Rl(n){const t=new Uint8Array(1024),i=n.stops.map(r=>({t:r.t,c:new He(r.color)}));for(let r=0;r<256;r++){const o=r/255;let a=i[0],l=i[i.length-1];for(let g=0;g<i.length-1;g++)if(o>=i[g].t&&o<=i[g+1].t){a=i[g],l=i[g+1];break}const c=l.t-a.t,u=c>0?(o-a.t)/c:0,f=a.c.r+(l.c.r-a.c.r)*u,h=a.c.g+(l.c.g-a.c.g)*u,p=a.c.b+(l.c.b-a.c.b)*u;t[r*4]=Math.round(f*255),t[r*4+1]=Math.round(h*255),t[r*4+2]=Math.round(p*255),t[r*4+3]=255}const s=new fh(t,256,1,Nn);return s.needsUpdate=!0,s}function CL(n){const e=Rl(n),t=new Un({uniforms:{uRamp:{value:e},uMinRadius:{value:0},uMaxRadius:{value:1},uLightDir:{value:new G(5,3,5).normalize()},uFillDir:{value:new G(-3,-1,-3).normalize()}},vertexShader:`
      varying float vRadius;
      varying vec3 vNormal;
      void main() {
        vRadius = length(position);
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uRamp;
      uniform float uMinRadius;
      uniform float uMaxRadius;
      uniform vec3 uLightDir;
      uniform vec3 uFillDir;
      varying float vRadius;
      varying vec3 vNormal;
      void main() {
        float t = clamp((vRadius - uMinRadius) / (uMaxRadius - uMinRadius), 0.0, 1.0);
        vec3 baseColor = texture2D(uRamp, vec2(t, 0.5)).rgb;

        vec3 n = normalize(vNormal);
        float diffuse = max(dot(n, uLightDir), 0.0);
        float fill = max(dot(n, uFillDir), 0.0) * 0.35;
        float ambient = 0.25;
        float lighting = ambient + diffuse * 0.55 + fill;

        gl_FragColor = vec4(baseColor * lighting, 1.0);
      }
    `});return t._rampTexture=e,t.updateScheme=i=>{t._rampTexture&&t._rampTexture.dispose();const s=Rl(i);t.uniforms.uRamp.value=s,t._rampTexture=s},t.setElevationRange=(i,s)=>{t.uniforms.uMinRadius.value=i,t.uniforms.uMaxRadius.value=s},t}function LL(n){const e=Rl(n),t=new Un({uniforms:dv.merge([be.fog,{uRamp:{value:e},uMinY:{value:0},uMaxY:{value:1},uLightDir:{value:new G(5,3,5).normalize()},uFillDir:{value:new G(-3,-1,-3).normalize()}}]),vertexShader:`
      #include <fog_pars_vertex>
      varying float vElevation;
      varying vec3 vNormal;
      void main() {
        vElevation = position.y;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,fragmentShader:`
      #include <fog_pars_fragment>
      uniform sampler2D uRamp;
      uniform float uMinY;
      uniform float uMaxY;
      uniform vec3 uLightDir;
      uniform vec3 uFillDir;
      varying float vElevation;
      varying vec3 vNormal;
      void main() {
        float t = clamp((vElevation - uMinY) / (uMaxY - uMinY), 0.0, 1.0);
        vec3 baseColor = texture2D(uRamp, vec2(t, 0.5)).rgb;

        vec3 n = normalize(vNormal);
        float diffuse = max(dot(n, uLightDir), 0.0);
        float fill = max(dot(n, uFillDir), 0.0) * 0.35;
        float ambient = 0.25;
        float lighting = ambient + diffuse * 0.55 + fill;

        gl_FragColor = vec4(baseColor * lighting, 1.0);
        #include <fog_fragment>
      }
    `,fog:!0});return t._rampTexture=e,t.updateScheme=i=>{t._rampTexture&&t._rampTexture.dispose();const s=Rl(i);t.uniforms.uRamp.value=s,t._rampTexture=s},t.setElevationRange=(i,s)=>{t.uniforms.uMinY.value=i,t.uniforms.uMaxY.value=s},t}class PL extends Lt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ze(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Mr=new G,Im=new je,Dm=new je,Nm=new G,Om=new G;class IL{constructor(e={}){const t=this;let i,s,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Im.copy(_.matrixWorldInverse),Dm.multiplyMatrices(_.projectionMatrix,Im),u(g,g,_),p(g)},this.setSize=function(g,_){i=g,s=_,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)c(g.children[_])}function u(g,_,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Mr.setFromMatrixPosition(g.matrixWorld),Mr.applyMatrix4(Dm);const d=Mr.z>=-1&&Mr.z<=1&&g.layers.test(m.layers)===!0,x=g.element;x.style.display=d===!0?"":"none",d===!0&&(g.onBeforeRender(t,_,m),x.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Mr.x*r+r)+"px,"+(-Mr.y*o+o)+"px)",x.parentNode!==l&&l.appendChild(x),g.onAfterRender(t,_,m));const M={distanceToCameraSquared:f(m,g)};a.objects.set(g,M)}for(let d=0,x=g.children.length;d<x;d++)u(g.children[d],_,m)}function f(g,_){return Nm.setFromMatrixPosition(g.matrixWorld),Om.setFromMatrixPosition(_.matrixWorld),Nm.distanceToSquared(Om)}function h(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function p(g){const _=h(g).sort(function(d,x){if(d.renderOrder!==x.renderOrder)return x.renderOrder-d.renderOrder;const M=a.objects.get(d).distanceToCameraSquared,v=a.objects.get(x).distanceToCameraSquared;return M-v}),m=_.length;for(let d=0,x=_.length;d<x;d++)_[d].element.style.zIndex=m-d}}}function Mf(n,e,t){const i=n*Tl.DEG2RAD,s=e*Tl.DEG2RAD;return new G(t*Math.cos(i)*Math.sin(s),t*Math.sin(i),t*Math.cos(i)*Math.cos(s))}function DL(n,e){return Mf(n,e,1)}const NL=25.19,OL=NL*Math.PI/180,to=10,Cl=64,UL=to*1.008,FL=to*80,kL=[.8,.35,.1],BL=5,HL="https://astro.arcgis.com/arcgis/rest/services/OnMars/MDIM/MapServer/tile",Sr=512,tu=3,VL={"landing-site":"#4fc3f7",volcano:"#ff7043",canyon:"#ab47bc",basin:"#66bb6a",plain:"#ffca28","polar-cap":"#e0e0e0"},bo=1e3,Bo=2,Um=15,GL=3,zL=60,WL=3347722,XL=1706500,$L=16766112,jL=4465152,YL=.1,Nv=["acidalia-planitia","argyre-basin","arsia-mons","ascraeus-mons","elysium-mons","hellas-basin","north-polar-region","olympus-mons","pavonis-mons","south-polar-region","syrtis-major","utopia-planitia","valles-marineris"],qL=.06,KL=.008,ZL=3;class Ov{constructor(e,t){dt(this,"root");dt(this,"raycaster",new yh);dt(this,"pinMeshes",[]);dt(this,"labelObjects",[]);dt(this,"normals",[]);dt(this,"landmarkMap",new Map);dt(this,"pinGroups",[]);dt(this,"pinGeometry",null);dt(this,"frameCount",0);dt(this,"hoveredMesh",null);dt(this,"hiddenTypes",new Set);dt(this,"_worldPos",new G);dt(this,"_camDir",new G);dt(this,"onHover",null);dt(this,"onClick",null);this.landmarks=e,this.radius=t??to,this.root=new Mi}async init(){const e=this.radius*qL,t=this.radius*KL,i=this._createBeamGeometry(t,e);this.pinGeometry=new da(e*.4,6,6);const s={vertexShader:`
        attribute float alpha;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          gl_FragColor = vec4(uColor, vAlpha);
        }
      `};for(const r of this.landmarks){const o=DL(r.lat,r.lon),a=Mf(r.lat,r.lon,this.radius*.995),l=new He(r.accent),c=new Mi,u=new Un({uniforms:{uColor:{value:l}},vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,transparent:!0,side:ti,depthWrite:!1,blending:El}),f=new en(i,u);c.add(f);const h=new ys({visible:!1}),p=new en(this.pinGeometry,h);p.position.y=e*.5,c.add(p),c.position.copy(a);const g=new Yn().setFromUnitVectors(new G(0,1,0),o);c.quaternion.copy(g),this.root.add(c),this.pinMeshes.push(p),this.landmarkMap.set(p,r);const _={group:c,label:null,landmark:r};this.pinGroups.push(_);const m=document.createElement("div");m.className="landmark-label",m.textContent=r.name,m.style.color=r.accent,m.style.fontFamily="Inter, system-ui, sans-serif",m.style.fontSize="11px",m.style.fontWeight="500",m.style.letterSpacing="0.06em",m.style.textShadow="0 1px 6px rgba(0,0,0,0.9)",m.style.pointerEvents="none",m.style.whiteSpace="nowrap";const d=new PL(m);d.position.copy(a).addScaledVector(o,e*1.1),this.root.add(d),_.label=d,this.labelObjects.push(d),this.normals.push(o)}i.dispose()}getLandmarkType(e){return e.type==="landing-site"?"landing-site":e.featureType}setFilter(e){this.hiddenTypes=e;for(const t of this.pinGroups){const i=this.getLandmarkType(t.landmark),s=e.has(i);t.group.visible=!s,t.label&&(t.label.visible=!s)}}_createBeamGeometry(e,t){const i=e/2,s=new Float32Array([-i,0,0,i,0,0,0,t,0,i,0,0,-i,0,0,0,t,0,0,0,-i,0,0,i,0,t,0,0,0,i,0,0,-i,0,t,0]),r=new Float32Array([.5,.5,0,.5,.5,0,.5,.5,0,.5,.5,0]),o=new Fn;return o.setAttribute("position",new kt(s,3)),o.setAttribute("alpha",new kt(r,1)),o}getLandmarkTarget(e){const t=this.landmarks.find(s=>s.id===e);return t?{position:Mf(t.lat,t.lon,this.radius),distance:this.radius*.6}:null}pick(e,t){var s,r;if(this.frameCount++,this.frameCount%ZL!==0)return;this.raycaster.setFromCamera(e,t);const i=this.raycaster.intersectObjects(this.pinMeshes);if(i.length>0){const o=i[0].object;if(o!==this.hoveredMesh){this.hoveredMesh=o;const a=this.landmarkMap.get(o),l=i[0].point.clone().project(t),c=(l.x*.5+.5)*window.innerWidth,u=(-l.y*.5+.5)*window.innerHeight;(s=this.onHover)==null||s.call(this,{landmark:a,screenX:c,screenY:u})}}else this.hoveredMesh&&(this.hoveredMesh=null,(r=this.onHover)==null||r.call(this,null))}clickTest(e,t){var s;this.raycaster.setFromCamera(e,t);const i=this.raycaster.intersectObjects(this.pinMeshes);if(i.length>0){const r=i[0].object,o=this.landmarkMap.get(r);o&&((s=this.onClick)==null||s.call(this,o))}}updateVisibility(e){for(let t=0;t<this.pinMeshes.length;t++){const i=this.pinMeshes[t],s=this.labelObjects[t],r=this.normals[t];i.getWorldPosition(this._worldPos),this._camDir.copy(e.position).sub(this._worldPos).normalize();const l=r.clone().applyQuaternion(this.root.getWorldQuaternion(new Yn)).dot(this._camDir)>.05,c=this.getLandmarkType(this.landmarks[t]),u=this.hiddenTypes.has(c),f=l&&!u;i.visible=f,s.visible=f}}update(e){}dispose(){var e;(e=this.pinGeometry)==null||e.dispose(),this.root.traverse(t=>{var i;t.isMesh&&((i=t.material)==null||i.dispose())})}}const JL=14e3,QL=1.4;class Uv{constructor(e,t={}){dt(this,"root");const i=e??FL,s=t.count??JL,r=t.pointSize??QL,o=new Float32Array(s*3),a=new Float32Array(s),l=new Float32Array(s),c=new Float32Array(s*3),u=new Float32Array(s);for(let p=0;p<s;p++){const g=Math.random()*Math.PI*2,_=Math.acos(2*Math.random()-1);o[p*3]=i*Math.sin(_)*Math.cos(g),o[p*3+1]=i*Math.cos(_),o[p*3+2]=i*Math.sin(_)*Math.sin(g),a[p]=r*(.5+Math.random()*.8),l[p]=.58+Math.random()*.38,u[p]=Math.random()*Math.PI*2;const m=Math.random();m<.5?(c[p*3]=.85+Math.random()*.12,c[p*3+1]=.88+Math.random()*.1,c[p*3+2]=.95+Math.random()*.05):m<.85?(c[p*3]=.95+Math.random()*.05,c[p*3+1]=.9+Math.random()*.08,c[p*3+2]=.8+Math.random()*.12):(c[p*3]=.98+Math.random()*.02,c[p*3+1]=.92+Math.random()*.06,c[p*3+2]=.75+Math.random()*.15)}const f=new Fn;f.setAttribute("position",new kt(o,3)),f.setAttribute("aSize",new kt(a,1)),f.setAttribute("aOpacity",new kt(l,1)),f.setAttribute("aColor",new kt(c,3)),f.setAttribute("aPhase",new kt(u,1));const h=new IT({vertexShader:`
        precision mediump float;
        attribute float aSize;
        attribute float aOpacity;
        attribute vec3 aColor;
        attribute float aPhase;
        attribute vec3 position;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        varying float vOpacity;
        varying vec3 vColor;

        void main() {
          vColor = aColor;
          float twinkle = sin(uTime * 1.8 + aPhase) * 0.32 + 0.68;
          vOpacity = aOpacity * twinkle;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (620.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        precision mediump float;
        varying float vOpacity;
        varying vec3 vColor;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.1, dist) * vOpacity;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Js,uniforms:{uTime:{value:0}}});this.root=new xv(f,h),this.root.frustumCulled=!1}async init(){}update(e){this.root.material.uniforms.uTime.value=e}dispose(){this.root.geometry.dispose(),this.root.material.dispose()}}const Fm={type:"change"},Mh={type:"start"},Fv={type:"end"},Za=new io,km=new gs,eP=Math.cos(70*Tl.DEG2RAD),zt=new G,Sn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nu=1e-6;class tP extends hA{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Rr.ROTATE,TWO:Rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Yn,this._lastTargetPosition=new G,this._quat=new Yn().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tm,this._sphericalDelta=new tm,this._scale=1,this._panOffset=new G,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new G,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iP.bind(this),this._onPointerDown=nP.bind(this),this._onPointerUp=sP.bind(this),this._onContextMenu=fP.bind(this),this._onMouseWheel=aP.bind(this),this._onKeyDown=lP.bind(this),this._onTouchStart=cP.bind(this),this._onTouchMove=uP.bind(this),this._onMouseDown=rP.bind(this),this._onMouseMove=oP.bind(this),this._interceptControlDown=hP.bind(this),this._interceptControlUp=dP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fm),this.update(),this.state=Tt.NONE}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=zt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Za.origin.copy(this.object.position),Za.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Za.direction))<eP?this.object.lookAt(this.target):(km.setFromNormalAndCoplanarPoint(this.object.up,this.target),Za.intersectPlane(km,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nu||this._lastTargetPosition.distanceToSquared(this.target)>nu?(this.dispatchEvent(Fm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function nP(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function iP(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function sP(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fv),this.state=Tt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rP(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Nr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Tt.DOLLY;break;case Nr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}break;case Nr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Mh)}function oP(n){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function aP(n){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(n.preventDefault(),this.dispatchEvent(Mh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fv))}function lP(n){this.enabled!==!1&&this._handleKeyDown(n)}function cP(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Rr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Tt.TOUCH_ROTATE;break;case Rr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case Rr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Tt.TOUCH_DOLLY_PAN;break;case Rr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Mh)}function uP(n){switch(this._trackPointer(n),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Tt.NONE}}function fP(n){this.enabled!==!1&&n.preventDefault()}function hP(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dP(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pP={fov:45,near:.1,far:2e3,minDistance:1.2,maxDistance:40,defaultDistance:28,autoRotateSpeed:.15,autoRotateDelay:3e3,flyToDuration:1.5,zoomLerp:.08,zoomFactor:.08,dampingFactor:.02,clearColor:0};function kv(n={}){const e={...pP,...n},t=tt(0),i=tt(new G);let s=null,r=null,o=null,a=null,l=null,c=0,u=null,f=!0,h=null;const p=e.autoRotateSpeed*Math.PI/180*.5;let g=e.defaultDistance,_=!1,m=0;const d=new G,x=new G,M=new G,v=new G;let C=null;const L=new ze(-999,-999);let A=0,H=0,T=null;function b(U,Z){s=new Lv({canvas:U,antialias:!0,alpha:!1}),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(U.clientWidth,U.clientHeight,!1),s.setClearColor(e.clearColor,1),r=new IL({element:Z}),r.setSize(U.clientWidth,U.clientHeight),o=new ln(e.fov,U.clientWidth/U.clientHeight,e.near,e.far),o.position.set(0,0,e.defaultDistance),a=new tP(o,U),a.enableDamping=!0,a.dampingFactor=e.dampingFactor,a.minDistance=e.minDistance,a.maxDistance=e.maxDistance,a.autoRotate=!1,a.enablePan=!1,a.enableZoom=!1,a.addEventListener("start",F),a.addEventListener("end",V),l=new bv,U.addEventListener("pointermove",z),U.addEventListener("click",ge),U.addEventListener("wheel",ne,{passive:!1}),U.addEventListener("touchstart",Q,{passive:!1}),U.addEventListener("touchmove",oe,{passive:!1}),U.addEventListener("touchend",Y),window.addEventListener("resize",ue)}function F(){f=!1,a&&o&&(a.target.set(0,0,0),g=o.position.distanceTo(a.target)),h&&clearTimeout(h)}function V(){h&&clearTimeout(h),h=setTimeout(()=>{f=!0},e.autoRotateDelay)}function z(U){const Z=s==null?void 0:s.domElement;Z&&(L.x=U.offsetX/Z.clientWidth*2-1,L.y=-(U.offsetY/Z.clientHeight)*2+1)}function ne(U){U.preventDefault();const Z=U.deltaY>0?1:-1;g*=1+Z*e.zoomFactor,g=Math.max(e.minDistance,Math.min(e.maxDistance,g)),f=!1,h&&clearTimeout(h),h=setTimeout(()=>{f=!0},e.autoRotateDelay)}function ae(U){const Z=U.touches[0],ie=U.touches[1];return Math.hypot(ie.clientX-Z.clientX,ie.clientY-Z.clientY)}function Q(U){U.touches.length===2&&(U.preventDefault(),A=ae(U),H=g)}function oe(U){if(U.touches.length===2){U.preventDefault();const Z=ae(U),ie=A/Z;g=Math.max(e.minDistance,Math.min(e.maxDistance,H*ie)),f=!1,h&&clearTimeout(h)}}function Y(U){U.touches.length<2&&(h&&clearTimeout(h),h=setTimeout(()=>{f=!0},e.autoRotateDelay))}function ge(){o&&T&&T(L,o)}function ce(U){T=U}function ue(){const U=s==null?void 0:s.domElement;if(!U||!o||!s||!r)return;const Z=U.clientWidth,ie=U.clientHeight;o.aspect=Z/ie,o.updateProjectionMatrix(),s.setSize(Z,ie,!1),r.setSize(Z,ie)}function Ee(U,Z){u=Z;function ie(){if(c=requestAnimationFrame(ie),!s||!o||!a||!l||!r)return;const de=l.getElapsedTime(),Re=l.getDelta();if(_){const O=Math.min(1,(de-m)/e.flyToDuration),S=O*O*(3-2*O);o.position.lerpVectors(d,x,S),a.target.lerpVectors(M,v,S),O>=1&&(_=!1,a.enabled=!0,g=o.position.distanceTo(a.target),C==null||C())}if(!_){const O=o.position.clone().sub(a.target).normalize(),S=o.position.distanceTo(a.target),re=S+(g-S)*e.zoomLerp;o.position.copy(a.target).addScaledVector(O,re)}if(f&&!_){const O=p*Re,S=o.position.clone().sub(a.target),re=Math.cos(O),J=Math.sin(O),K=S.x*re+S.z*J,w=-S.x*J+S.z*re;o.position.set(K+a.target.x,o.position.y,w+a.target.z)}a.update(),u==null||u(de);const I=o.position.distanceTo(a.target);t.value=1-(I-e.minDistance)/(e.maxDistance-e.minDistance),i.value.copy(a.target),s.render(U,o),r.render(U,o)}ie()}function Be(U,Z){return!o||!a||!l?Promise.resolve():new Promise(ie=>{C=ie,_=!0,m=l.getElapsedTime(),d.copy(o.position),M.copy(a.target),v.copy(U);const de=U.clone().normalize();x.copy(U).addScaledVector(de,Z),a.enabled=!1,g=x.distanceTo(v)})}function ee(){return o}function fe(){return L}function Me(){c&&cancelAnimationFrame(c),a==null||a.removeEventListener("start",F),a==null||a.removeEventListener("end",V),a==null||a.dispose(),s==null||s.domElement.removeEventListener("pointermove",z),s==null||s.domElement.removeEventListener("click",ge),s==null||s.domElement.removeEventListener("wheel",ne),s==null||s.domElement.removeEventListener("touchstart",Q),s==null||s.domElement.removeEventListener("touchmove",oe),s==null||s.domElement.removeEventListener("touchend",Y),window.removeEventListener("resize",ue),s==null||s.dispose(),h&&clearTimeout(h)}return{currentZoom:t,currentTarget:i,init:b,startLoop:Ee,flyTo:Be,getCamera:ee,getPointer:fe,setClickHandler:ce,dispose:Me}}const Ja=tt([]),iu=tt(!1);let Bm=!1;function Sh(){async function n(){if(Bm)return Ja.value;iu.value=!0;try{const e=await fetch("/data/landmarks.json");Ja.value=await e.json(),Bm=!0}finally{iu.value=!1}return Ja.value}return{landmarks:Go(Ja),isLoading:Go(iu),loadLandmarks:n}}const mP={class:"tooltip-name"},gP={key:0,class:"tooltip-year"},_P={__name:"LandmarkTooltip",props:{landmark:{type:Object,default:null},x:{type:Number,default:0},y:{type:Number,default:0}},setup(n){return(e,t)=>n.landmark?(nt(),_t("div",{key:0,class:"landmark-tooltip",style:An({left:`${n.x}px`,top:`${n.y}px`})},[q("span",{class:"tooltip-dot",style:An({backgroundColor:n.landmark.accent})},null,4),q("span",mP,ye(n.landmark.name),1),n.landmark.type==="landing-site"?(nt(),_t("span",gP,"("+ye(n.landmark.year)+")",1)):Dt("",!0)],4)):Dt("",!0)}},Bv=hi(_P,[["__scopeId","data-v-66ca8481"]]),vP={key:0,class:"info-card"},xP={class:"card-title"},yP={class:"card-description"},EP={class:"card-details"},MP={class:"detail-row"},SP={class:"detail-label"},bP={class:"detail-value"},TP={class:"detail-row"},AP={class:"detail-label"},wP={class:"detail-value"},RP={class:"detail-row"},CP={class:"detail-label"},LP={class:"detail-value"},PP={class:"detail-row"},IP={class:"detail-label"},DP={class:"detail-value",style:{"text-transform":"capitalize"}},NP={class:"detail-row"},OP={class:"detail-label"},UP={class:"detail-value",style:{"text-transform":"capitalize"}},FP={class:"detail-row"},kP={class:"detail-label"},BP={class:"detail-value"},HP={class:"detail-row"},VP={class:"detail-label"},GP={class:"detail-value"},zP={class:"detail-row"},WP={class:"detail-label"},XP={class:"detail-value"},$P={class:"detail-row"},jP={class:"detail-label"},YP={class:"detail-value"},qP={class:"detail-row"},KP={class:"detail-label"},ZP={class:"detail-value",style:{"text-transform":"capitalize"}},JP={class:"stat-bars"},QP={class:"stat-bar-row"},eI={class:"stat-label"},tI={class:"stat-track"},nI={class:"stat-bar-row"},iI={class:"stat-label"},sI={class:"stat-track"},rI={class:"stat-bar-row"},oI={class:"stat-label"},aI={class:"stat-track"},lI={class:"stat-bar-row"},cI={class:"stat-label"},uI={class:"stat-track"},fI={class:"stat-bar-row"},hI={class:"stat-label"},dI={class:"stat-track"},pI={class:"stat-bar-row"},mI={class:"stat-label"},gI={class:"stat-track"},_I={class:"stat-bar-row"},vI={class:"stat-label"},xI={class:"stat-track"},yI={class:"detail-row"},EI={class:"detail-label"},MI={class:"detail-value"},SI={__name:"LandmarkInfoCard",props:{landmark:{type:Object,default:null}},emits:["close","explore"],setup(n){return(e,t)=>(nt(),Qs(er,{name:"card"},{default:Ct(()=>{var i;return[n.landmark?(nt(),_t("div",vP,[q("button",{class:"card-close",onClick:t[0]||(t[0]=s=>e.$emit("close"))},"×"),q("div",{class:"card-accent",style:An({backgroundColor:n.landmark.accent})},null,4),q("h2",xP,ye(n.landmark.name),1),q("p",yP,ye(n.landmark.description),1),q("div",EP,[n.landmark.type==="landing-site"?(nt(),_t(Xt,{key:0},[q("div",MP,[q("span",SP,ye(e.$t("infoCard.mission")),1),q("span",bP,ye(n.landmark.mission),1)]),q("div",TP,[q("span",AP,ye(e.$t("infoCard.agency")),1),q("span",wP,ye(n.landmark.agency),1)]),q("div",RP,[q("span",CP,ye(e.$t("infoCard.year")),1),q("span",LP,ye(n.landmark.year),1)]),q("div",PP,[q("span",IP,ye(e.$t("infoCard.status")),1),q("span",DP,ye(n.landmark.status),1)])],64)):Dt("",!0),n.landmark.type==="geological"?(nt(),_t(Xt,{key:1},[q("div",NP,[q("span",OP,ye(e.$t("infoCard.feature")),1),q("span",UP,ye(n.landmark.featureType.replace("-"," ")),1)]),q("div",FP,[q("span",kP,ye(e.$t("infoCard.diameter")),1),q("span",BP,ye(n.landmark.diameterKm.toLocaleString())+" km",1)]),q("div",HP,[q("span",VP,ye(e.$t("infoCard.elevation")),1),q("span",GP,ye(n.landmark.elevationKm>0?"+":"")+ye(n.landmark.elevationKm)+" km",1)]),q("div",zP,[q("span",WP,ye(e.$t("infoCard.pressure")),1),q("span",XP,ye(n.landmark.surfacePressureMbar)+" mbar",1)]),q("div",$P,[q("span",jP,ye(e.$t("infoCard.tempRange")),1),q("span",YP,ye(n.landmark.temperatureMinK)+"K — "+ye(n.landmark.temperatureMaxK)+"K",1)]),q("div",qP,[q("span",KP,ye(e.$t("infoCard.age")),1),q("span",ZP,ye(n.landmark.geologicalAge),1)]),q("div",JP,[q("div",QP,[q("span",eI,ye(e.$t("infoCard.waterIce")),1),q("div",tI,[q("div",{class:"stat-fill",style:An({width:`${n.landmark.waterIceIndex*100}%`,background:"#4fc3f7"})},null,4)])]),q("div",nI,[q("span",iI,ye(e.$t("infoCard.ironOxide")),1),q("div",sI,[q("div",{class:"stat-fill",style:An({width:`${n.landmark.ironOxideIndex*100}%`,background:"#ff7043"})},null,4)])]),q("div",rI,[q("span",oI,ye(e.$t("infoCard.silicate")),1),q("div",aI,[q("div",{class:"stat-fill",style:An({width:`${n.landmark.silicateIndex*100}%`,background:"#ab47bc"})},null,4)])]),q("div",lI,[q("span",cI,ye(e.$t("infoCard.basalt")),1),q("div",uI,[q("div",{class:"stat-fill",style:An({width:`${n.landmark.basaltIndex*100}%`,background:"#66bb6a"})},null,4)])]),q("div",fI,[q("span",hI,ye(e.$t("infoCard.roughness")),1),q("div",dI,[q("div",{class:"stat-fill",style:An({width:`${n.landmark.roughness*100}%`,background:"#ffca28"})},null,4)])]),q("div",pI,[q("span",mI,ye(e.$t("infoCard.dustCover")),1),q("div",gI,[q("div",{class:"stat-fill",style:An({width:`${n.landmark.dustCover*100}%`,background:"#bcaaa4"})},null,4)])]),q("div",_I,[q("span",vI,ye(e.$t("infoCard.cratering")),1),q("div",xI,[q("div",{class:"stat-fill",style:An({width:`${n.landmark.craterDensity*100}%`,background:"#78909c"})},null,4)])])])],64)):Dt("",!0),q("div",yI,[q("span",EI,ye(e.$t("infoCard.coordinates")),1),q("span",MI,ye(n.landmark.lat.toFixed(2))+"°, "+ye(n.landmark.lon.toFixed(2))+"°",1)])]),((i=n.landmark)==null?void 0:i.type)==="geological"&&Ue(Nv).includes(n.landmark.id)?(nt(),_t("button",{key:0,class:"explore-btn",onClick:t[1]||(t[1]=s=>e.$emit("explore",n.landmark))},ye(e.$t("infoCard.exploreTerrain")),1)):Dt("",!0)])):Dt("",!0)]}),_:1}))}},Hv=hi(SI,[["__scopeId","data-v-e9028ae5"]]),bI={key:0,class:"loading-overlay"},TI={class:"loading-content"},AI={class:"loading-text"},wI={key:0,class:"loading-progress"},RI={__name:"LoadingOverlay",props:{isLoading:Boolean,loaded:{type:Number,default:0},total:{type:Number,default:0}},setup(n){return(e,t)=>(nt(),Qs(er,{name:"fade"},{default:Ct(()=>[n.isLoading?(nt(),_t("div",bI,[q("div",TI,[q("p",AI,ye(e.$t("loading.surface")),1),n.total>0?(nt(),_t("p",wI,ye(n.loaded)+" / "+ye(n.total),1)):Dt("",!0)])])):Dt("",!0)]),_:1}))}},Vv=hi(RI,[["__scopeId","data-v-d68a2ea4"]]),CI={class:"legend"},LI=["onClick"],PI={class:"legend-label"},II={__name:"LandmarkLegend",emits:["filter"],setup(n,{emit:e}){const t=e,i=[{key:"landing-site",labelKey:"legend.landingSite"},{key:"volcano",labelKey:"legend.volcano"},{key:"canyon",labelKey:"legend.canyon"},{key:"basin",labelKey:"legend.basin"},{key:"plain",labelKey:"legend.plain"},{key:"polar-cap",labelKey:"legend.polarCap"}],s=tt(new Set(i.map(o=>o.key)));function r(o){const a=new Set(s.value);a.has(o)?a.delete(o):a.add(o),s.value=a;const l=new Set(i.map(c=>c.key).filter(c=>!a.has(c)));t("filter",l)}return(o,a)=>(nt(),_t("div",CI,[(nt(),_t(Xt,null,Og(i,l=>q("button",{key:l.key,class:ei(["legend-item",{dimmed:!s.value.has(l.key)}]),onClick:c=>r(l.key)},[q("span",{class:"legend-dot",style:An({backgroundColor:Ue(VL)[l.key]})},null,4),q("span",PI,ye(o.$t(l.labelKey)),1)],10,LI)),64))]))}},Gv=hi(II,[["__scopeId","data-v-58a00e8c"]]),DI={class:"globe-view"},NI={key:0,class:"controls-panel controls-left"},OI={class:"control-label"},UI=["value","disabled"],FI={value:"standard"},kI={value:"high"},BI={key:0,class:"hd-loading"},HI={key:1,class:"controls-panel"},VI={class:"control-label"},GI=["value"],zI=["value"],Hm="https://pub-3ae55587a05a4c0bb0a9fde6b0847d45.r2.dev",WI={__name:"GlobeView",setup(n){const e=[{id:"standard",url:`${Hm}/mars_globe.glb`},{id:"high",url:`${Hm}/mars_globe_4km.glb`}],t=tt(null),i=tt(null),s=tt(!0),r=tt(!1),o=tt("elevation"),a=tt("standard"),l=tt(null),c=tt(null),u=tt(0),f=tt(0),h=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,p=Vf(),{init:g,startLoop:_,flyTo:m,getCamera:d,getPointer:x,setClickHandler:M,dispose:v}=kv({minDistance:.5,maxDistance:20,defaultDistance:3,far:2e3,clearColor:657930}),{loadLandmarks:C}=Sh();let L=null,A=null,H=null,T=null,b=null;function F(ce){H&&H.setFilter(ce)}function V(ce){o.value=ce;const ue=ul.find(Ee=>Ee.id===ce);ue&&A&&A.updateScheme(ue)}let z=1;const ne=new Map;function ae(ce){const ue=ce.scene,Ee=new wi().setFromObject(ue),Be=Ee.getCenter(new G);ue.position.sub(Be);const ee=Math.max(...Ee.getSize(new G).toArray()),fe=ee>0?2/ee:1;ue.scale.setScalar(fe);let Me=1/0,U=-1/0;ue.traverse(ie=>{if(ie.isMesh){const de=ie.geometry.attributes.position;for(let Re=0;Re<de.count;Re++){const I=Math.sqrt(de.getX(Re)**2+de.getY(Re)**2+de.getZ(Re)**2);I<Me&&(Me=I),I>U&&(U=I)}}});const Z=(Me+U)/2*fe;return{model:ue,minR:Me,maxR:U,radius:Z}}function Q(ce){b&&L.remove(b),ce.model.traverse(ue=>{ue.isMesh&&(ue.material=A)}),A.setElevationRange(ce.minR,ce.maxR),z=ce.radius,b=ce.model,L.add(ce.model)}function oe(ce){return ne.has(ce)?(Q(ne.get(ce)),Promise.resolve()):new Promise((ue,Ee)=>{new Pv().load(ce,Be=>{const ee=ae(Be);ne.set(ce,ee),Q(ee),ue()},void 0,Ee)})}async function Y(ce){if(ce===a.value)return;const ue=e.find(Ee=>Ee.id===ce);if(ue){a.value=ce,r.value=!0;try{await oe(ue.url)}catch(Ee){console.error("Failed to load globe:",Ee),a.value=a.value==="standard"?"high":"standard"}r.value=!1}}no(async()=>{if(!t.value||!i.value)return;g(t.value,i.value),L=new ch,L.background=new He(657930),L.add(new _h(16777215,.7));const ce=new eo(16777215,1);ce.position.set(5,3,5),L.add(ce);const ue=new eo(16777215,.4);ue.position.set(-3,-1,-3),L.add(ue);const Ee=ul.find(ee=>ee.id===o.value);A=CL(Ee);const Be=await C();await oe(e[0].url),H=new Ov(Be,z),H.onHover=ee=>{ee?(l.value=ee.landmark,u.value=ee.screenX,f.value=ee.screenY):l.value=null},H.onClick=ee=>{c.value=ee;const fe=H.getLandmarkTarget(ee.id);fe&&m(fe.position,fe.distance)},await H.init(),L.add(H.root),M((ee,fe)=>H.clickTest(ee,fe)),T=new Uv(z*40,{count:6e3,pointSize:.6}),L.add(T.root),_(L,ee=>{const fe=d();fe&&H&&(H.pick(x(),fe),H.updateVisibility(fe)),T&&T.update(ee)}),s.value=!1}),bs(()=>{var ce;H==null||H.dispose(),T==null||T.dispose(),A&&((ce=A._rampTexture)==null||ce.dispose(),A.dispose()),L&&L.traverse(ue=>{var Ee;ue.isMesh&&((Ee=ue.geometry)==null||Ee.dispose())}),v()});function ge(ce){ce.key==="Escape"&&(c.value=null)}return window.addEventListener("keydown",ge),bs(()=>window.removeEventListener("keydown",ge)),(ce,ue)=>(nt(),_t("div",DI,[q("canvas",{ref_key:"canvasRef",ref:t},null,512),q("div",{ref_key:"css2dRef",ref:i,class:"css2d-overlay"},null,512),Ke(Vv,{"is-loading":s.value,loaded:0,total:0},null,8,["is-loading"]),s.value?Dt("",!0):(nt(),_t("div",NI,[q("label",OI,ye(ce.$t("globe.qualityLabel")),1),q("select",{value:a.value,disabled:r.value,onChange:ue[0]||(ue[0]=Ee=>Y(Ee.target.value)),class:"scheme-select"},[q("option",FI,ye(ce.$t("globe.qualityStandard")),1),q("option",kI,ye(ce.$t("globe.qualityHigh")),1)],40,UI)])),Ke(er,{name:"hd-toast"},{default:Ct(()=>[r.value?(nt(),_t("div",BI,ye(ce.$t("globe.loadingHd")),1)):Dt("",!0)]),_:1}),s.value?Dt("",!0):(nt(),_t("div",HI,[q("label",VI,ye(ce.$t("globe.colorLabel")),1),q("select",{value:o.value,onChange:ue[1]||(ue[1]=Ee=>V(Ee.target.value)),class:"scheme-select"},[(nt(!0),_t(Xt,null,Og(Ue(ul),Ee=>(nt(),_t("option",{key:Ee.id,value:Ee.id},ye(Ee.name),9,zI))),128))],40,GI)])),Ue(h)?Dt("",!0):(nt(),Qs(Bv,{key:2,landmark:l.value,x:u.value,y:f.value},null,8,["landmark","x","y"])),Ke(Hv,{landmark:c.value,onClose:ue[2]||(ue[2]=Ee=>c.value=null),onExplore:ue[3]||(ue[3]=Ee=>Ue(p).push(`/explore/${Ee.id}`))},null,8,["landmark"]),s.value?Dt("",!0):(nt(),Qs(Gv,{key:3,onFilter:F}))]))}},XI=hi(WI,[["__scopeId","data-v-0aedf3d7"]]),$I="/images/mola-preview.webp",Vm="/images/mola-preview.png",jI=$I,YI={class:"about"},qI={class:"content"},KI={class:"lead"},ZI={class:"references"},JI={__name:"AboutView",setup(n){const{t:e}=ua(),t=tt(!1);return(i,s)=>{const r=Ng("i18n-t");return nt(),_t("div",YI,[q("article",qI,[q("h1",null,ye(Ue(e)("about.title")),1),q("p",KI,ye(Ue(e)("about.lead")),1),q("figure",{class:"cover",onClick:s[0]||(s[0]=o=>t.value=!0)},[s[2]||(s[2]=q("picture",null,[q("source",{srcset:jI,type:"image/webp"}),q("img",{src:Vm,alt:"Mars HRSC-MOLA Blended DEM — global elevation map with hypsometric color ramp",loading:"lazy"})],-1)),q("figcaption",null,ye(Ue(e)("about.figcaption")),1)]),Ke(er,{name:"lightbox"},{default:Ct(()=>[t.value?(nt(),_t("div",{key:0,class:"lightbox",onClick:s[1]||(s[1]=o=>t.value=!1)},[...s[3]||(s[3]=[q("img",{src:Vm,alt:"Mars HRSC-MOLA Blended DEM — full resolution"},null,-1),q("span",{class:"lightbox-close"},"×",-1)])])):Dt("",!0)]),_:1}),q("section",null,[q("h2",null,ye(Ue(e)("about.dataSource.title")),1),q("p",null,[Ke(r,{keypath:"about.dataSource.p1",tag:"span"},{strong_dem:Ct(()=>[q("strong",null,ye(Ue(e)("about.dataSource.strong_dem")),1)]),_:1})]),q("ul",null,[q("li",null,[Ke(r,{keypath:"about.dataSource.mola",tag:"span"},{strong_mola:Ct(()=>[q("strong",null,ye(Ue(e)("about.dataSource.strong_mola")),1)]),_:1})]),q("li",null,[Ke(r,{keypath:"about.dataSource.hrsc",tag:"span"},{strong_hrsc:Ct(()=>[q("strong",null,ye(Ue(e)("about.dataSource.strong_hrsc")),1)]),_:1})])]),q("p",null,[Ke(r,{keypath:"about.dataSource.p2",tag:"span"},{strong_res:Ct(()=>[q("strong",null,ye(Ue(e)("about.dataSource.strong_res")),1)]),_:1})])]),q("section",null,[q("h2",null,ye(Ue(e)("about.pipeline.title")),1),q("p",null,ye(Ue(e)("about.pipeline.intro")),1),q("ol",null,[q("li",null,[q("strong",null,ye(Ue(e)("about.pipeline.step1_title")),1),s[5]||(s[5]=Pn(" — ",-1)),Ke(r,{keypath:"about.pipeline.step1",tag:"span"},{code_rasterio:Ct(()=>[...s[4]||(s[4]=[q("code",null,"rasterio",-1)])]),_:1})]),q("li",null,[q("strong",null,ye(Ue(e)("about.pipeline.step2_title")),1),Pn(" — "+ye(Ue(e)("about.pipeline.step2")),1)]),q("li",null,[q("strong",null,ye(Ue(e)("about.pipeline.step3_title")),1),Pn(" — "+ye(Ue(e)("about.pipeline.step3")),1)]),q("li",null,[q("strong",null,ye(Ue(e)("about.pipeline.step4_title")),1),Pn(" — "+ye(Ue(e)("about.pipeline.step4")),1)]),q("li",null,[q("strong",null,ye(Ue(e)("about.pipeline.step5_title")),1),Pn(" — "+ye(Ue(e)("about.pipeline.step5")),1)])])]),q("section",null,[q("h2",null,ye(Ue(e)("about.elevation.title")),1),q("p",null,[Ke(r,{keypath:"about.elevation.p1",tag:"span"},{strong_min:Ct(()=>[q("strong",null,ye(Ue(e)("about.elevation.strong_min")),1)]),strong_max:Ct(()=>[q("strong",null,ye(Ue(e)("about.elevation.strong_max")),1)]),_:1})]),q("p",null,ye(Ue(e)("about.elevation.p2")),1)]),q("section",null,[q("h2",null,ye(Ue(e)("about.references.title")),1),q("ul",ZI,[q("li",null,[Ke(r,{keypath:"about.references.ref1",tag:"span"},{em:Ct(()=>[q("em",null,ye(Ue(e)("about.references.ref1_em")),1)]),_:1})]),q("li",null,[Ke(r,{keypath:"about.references.ref2",tag:"span"},{em:Ct(()=>[q("em",null,ye(Ue(e)("about.references.ref2_em")),1)]),_:1})]),q("li",null,[Ke(r,{keypath:"about.references.ref3",tag:"span"},{em:Ct(()=>[q("em",null,ye(Ue(e)("about.references.ref3_em")),1)]),_:1})])])])])])}}},QI=hi(JI,[["__scopeId","data-v-545aa666"]]);function eD(n,e,t){return`${HL}/${n}/${e}/${t}?blankTile=false`}function tD(n){const e=2*Math.pow(2,n),t=1*Math.pow(2,n);return{cols:e,rows:t}}async function Gm(n,e){const{cols:t,rows:i}=tD(n),s=document.createElement("canvas");s.width=t*Sr,s.height=i*Sr;const r=s.getContext("2d"),o=t*i;let a=0;const l=[];for(let c=0;c<i;c++)for(let u=0;u<t;u++){const f=eD(n,c,u),h=u,p=c;l.push(nD(f).then(g=>{r.drawImage(g,h*Sr,p*Sr,Sr,Sr)}).catch(()=>{}).finally(()=>{a++,e==null||e(a,o)}))}return await Promise.all(l),s}function nD(n){return new Promise((e,t)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>e(i),i.onerror=t,i.src=n})}const iD=[{maxDistance:to*1.5,tileZoom:5},{maxDistance:to*2.5,tileZoom:4}];class sD{constructor(e){dt(this,"root");dt(this,"material");dt(this,"texture",null);dt(this,"textureCanvas",null);dt(this,"onProgress");dt(this,"currentTileZoom",tu);dt(this,"upgrading",!1);this.onProgress=e,this.material=new Yl({roughness:.9,metalness:0,color:8939093});const t=new da(to,Cl,Cl);this.root=new en(t,this.material)}async init(){this.textureCanvas=await Gm(tu,this.onProgress),this.texture=new PT(this.textureCanvas),this.texture.colorSpace=Jt,this.material.map=this.texture,this.material.color.set(16777215),this.material.needsUpdate=!0}checkDetailLevel(e){if(this.upgrading)return;let t=tu;for(const i of iD)if(e<=i.maxDistance){t=i.tileZoom;break}t>this.currentTileZoom&&this.upgradeToZoom(t)}async upgradeToZoom(e){this.upgrading=!0;try{const t=await Gm(e);this.textureCanvas=t,this.texture&&(this.texture.image=t,this.texture.needsUpdate=!0),this.currentTileZoom=e}finally{this.upgrading=!1}}update(e){}dispose(){var e;this.root.geometry.dispose(),this.material.dispose(),(e=this.texture)==null||e.dispose()}}const rD=`varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,oD=`uniform vec3 uAtmosphereColor;
uniform float uFresnelPower;

varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
  float rim = 1.0 - dot(viewDirection, vNormal);
  float fresnel = pow(rim, uFresnelPower);

  // Thin, subtle haze — barely visible except at the very edge
  vec3 color = uAtmosphereColor;
  float alpha = fresnel * 0.25;

  // Fade out quickly away from the limb
  alpha *= smoothstep(0.0, 0.6, rim);

  gl_FragColor = vec4(color, alpha);
}
`;class aD{constructor(){dt(this,"root");const e=new da(UL,Cl,Cl),t=new Un({vertexShader:rD,fragmentShader:oD,uniforms:{uAtmosphereColor:{value:new He(...kL)},uFresnelPower:{value:BL}},transparent:!0,blending:El,side:xn,depthWrite:!1});this.root=new en(e,t)}async init(){}update(e){}dispose(){this.root.geometry.dispose(),this.root.material.dispose()}}class lD{constructor(e,t){dt(this,"scene");dt(this,"globe");dt(this,"atmosphere");dt(this,"landmarks");dt(this,"stars");this.scene=new ch,this.globe=new sD(t),this.atmosphere=new aD,this.landmarks=new Ov(e),this.stars=new Uv,this.marsGroup=new Mi,this.marsGroup.rotation.z=OL,this.marsGroup.add(this.globe.root),this.marsGroup.add(this.atmosphere.root),this.marsGroup.add(this.landmarks.root),this.scene.add(this.marsGroup),this.scene.add(this.stars.root);const i=new eo(16777215,1.8);i.position.set(5,3,4),this.scene.add(i);const s=new eo(16777215,.5);s.position.set(-4,-1,-3),this.scene.add(s);const r=new qT(8952234,5583650,.6);this.scene.add(r);const o=new _h(16777215,.25);this.scene.add(o)}async init(){await Promise.all([this.globe.init(),this.atmosphere.init(),this.landmarks.init(),this.stars.init()])}update(e){this.globe.update(e),this.atmosphere.update(e),this.landmarks.update(e),this.stars.update(e)}dispose(){this.globe.dispose(),this.atmosphere.dispose(),this.landmarks.dispose(),this.stars.dispose()}}const cD={class:"canvas-wrapper"},uD={__name:"MarsCanvas",emits:["ready","hover","select","progress"],setup(n,{expose:e,emit:t}){const i=t,s=tt(null),r=tt(null),{init:o,startLoop:a,flyTo:l,getCamera:c,getPointer:u,setClickHandler:f,dispose:h}=kv(),{loadLandmarks:p}=Sh();let g=null;no(async()=>{if(!s.value||!r.value)return;o(s.value,r.value);const m=await p();g=new lD(m,(d,x)=>{i("progress",d,x)}),g.landmarks.onHover=d=>i("hover",d),g.landmarks.onClick=d=>{i("select",d);const x=g.landmarks.getLandmarkTarget(d.id);if(x){g.marsGroup.updateMatrixWorld();const M=x.position.clone().applyMatrix4(g.marsGroup.matrixWorld);l(M,x.distance)}},f((d,x)=>{g==null||g.landmarks.clickTest(d,x)}),await g.init(),a(g.scene,d=>{g.update(d);const x=c();x&&(g.globe.checkDetailLevel(x.position.length()),g.landmarks.updateVisibility(x),g.landmarks.pick(u(),x))}),i("ready")});function _(m){g==null||g.landmarks.setFilter(m)}return e({setFilter:_}),bs(()=>{g==null||g.dispose(),h()}),(m,d)=>(nt(),_t("div",cD,[q("canvas",{ref_key:"canvasRef",ref:s},null,512),q("div",{ref_key:"css2dRef",ref:r,class:"css2d-overlay"},null,512)]))}},fD=hi(uD,[["__scopeId","data-v-da9062a9"]]),hD={class:"gis-view"},dD={__name:"GisView",setup(n){const e=tt(null),t=Vf(),i=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,s=tt(!0),r=tt(0),o=tt(0),a=tt(null),l=tt(null),c=tt(0),u=tt(0);function f(){s.value=!1}function h(d){d?(a.value=d.landmark,c.value=d.screenX,u.value=d.screenY):a.value=null}function p(d){l.value=d}function g(d,x){r.value=d,o.value=x}function _(d){var x;(x=e.value)==null||x.setFilter(d)}function m(d){d.key==="Escape"&&(l.value=null)}return window.addEventListener("keydown",m),bs(()=>window.removeEventListener("keydown",m)),(d,x)=>(nt(),_t("div",hD,[Ke(fD,{ref_key:"marsCanvasRef",ref:e,onReady:f,onHover:h,onSelect:p,onProgress:g},null,512),Ue(i)?Dt("",!0):(nt(),Qs(Bv,{key:0,landmark:a.value,x:c.value,y:u.value},null,8,["landmark","x","y"])),Ke(Hv,{landmark:l.value,onClose:x[0]||(x[0]=M=>l.value=null),onExplore:x[1]||(x[1]=M=>Ue(t).push(`/explore/${M.id}`))},null,8,["landmark"]),Ke(Vv,{"is-loading":s.value,loaded:r.value,total:o.value},null,8,["is-loading","loaded","total"]),s.value?Dt("",!0):(nt(),Qs(Gv,{key:1,onFilter:_}))]))}},pD=hi(dD,[["__scopeId","data-v-b628faf7"]]);function mD(n,e){const t={};let i=0,s=0,r=!1,o=null,a=Bo,l=0;const c=new yh,u=new G,f=new G,h=new G,p=new G(0,-1,0),g=zL*Math.PI/180;function _(b){o=b}function m(b){t[b.code]=!0}function d(b){t[b.code]=!1}function x(b){if(!r)return;const F=.002;i-=b.movementX*F,s-=b.movementY*F,s=Math.max(-Math.PI*.47,Math.min(Math.PI*.47,s))}function M(){r=document.pointerLockElement===e}function v(){e.requestPointerLock()}function C(){document.addEventListener("keydown",m),document.addEventListener("keyup",d),document.addEventListener("mousemove",x),document.addEventListener("pointerlockchange",M),e.addEventListener("click",v)}function L(b,F){if(!o)return 0;c.set(new G(b,9999,F),p);const V=c.intersectObject(o,!0);return V.length>0?V[0].point.y:null}function A(b,F){if(!o)return!0;const V=L(b,F);if(V===null)return!1;const z=V-a;return Math.atan2(Math.abs(z),1)<g}function H(b){if(!r||!n)return;const F=new fi(s,i,0,"YXZ");n.quaternion.setFromEuler(F);const V=t.ShiftLeft||t.ShiftRight?Um*GL:Um;f.set(0,0,-1).applyQuaternion(n.quaternion),f.y=0,f.normalize(),h.set(1,0,0).applyQuaternion(n.quaternion),h.y=0,h.normalize(),u.set(0,0,0),t.KeyW&&u.add(f),t.KeyS&&u.sub(f),t.KeyD&&u.add(h),t.KeyA&&u.sub(h);const z=t.Space;if(z&&(l+=V*b),u.lengthSq()>0){u.normalize();const ae=n.position.x+u.x*V*b,Q=n.position.z+u.z*V*b;(z||A(ae,Q))&&(n.position.x=ae,n.position.z=Q)}const ne=L(n.position.x,n.position.z);if(ne!==null){a=ne;const ae=ne+Bo+l;if(z)n.position.y=Math.max(n.position.y,ae);else{l=Math.max(0,l-V*b*2);const Q=ne+Bo+l;n.position.y+=(Q-n.position.y)*YL}}}function T(){document.removeEventListener("keydown",m),document.removeEventListener("keyup",d),document.removeEventListener("mousemove",x),document.removeEventListener("pointerlockchange",M),e.removeEventListener("click",v),document.pointerLockElement===e&&document.exitPointerLock()}return{init:C,update:H,setTerrainMesh:_,dispose:T,get isLocked(){return r}}}const gD={class:"explore-container"},_D={key:0,class:"loading-overlay"},vD={class:"loading-text"},xD={key:0,class:"error-overlay"},yD={class:"error-text"},ED={key:1,class:"error-overlay"},MD={class:"error-text"},SD={class:"hud-info"},bD={class:"hud-title"},TD={class:"hud-coords"},AD={key:0,class:"crosshair"},wD={key:0,class:"controls-hint"},RD="https://pub-3ae55587a05a4c0bb0a9fde6b0847d45.r2.dev",CD={__name:"ExploreView",setup(n){const e=a_(),t=Vf(),i=tt(null),s=tt(!0),r=tt(!0),o=tt(""),a=tt(""),l=tt(!0),c=tt(!1),u=tt(!1);let f=null,h=null,p=null,g=null,_=0,m=null,d=null;function x(){t.push("/")}no(async()=>{const v=e.params.landmarkId;if(c.value="ontouchstart"in window||navigator.maxTouchPoints>0,c.value){s.value=!1;return}if(!Nv.includes(v)){l.value=!1,s.value=!1;return}const{loadLandmarks:C}=Sh(),A=(await C()).find(ne=>ne.id===v);A?(o.value=A.name,a.value=`${A.lat.toFixed(2)}°, ${A.lon.toFixed(2)}°`):o.value=v.replace(/-/g," ");const H=i.value;f=new Lv({canvas:H,antialias:!0}),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(H.clientWidth,H.clientHeight,!1),f.setClearColor(XL,1),p=new ln(70,H.clientWidth/H.clientHeight,.1,2e3),h=new ch,h.fog=new lh(WL,.003);const T=new eo($L,2);T.position.set(200,400,100),h.add(T);const b=new _h(jL,.3);h.add(b);const F=new Pv,V=`${RD}/terrain/${v}.glb`;try{let Me=function(){if(!f)return;_=requestAnimationFrame(Me);const U=g.getDelta();m.update(U),u.value=m.isLocked,f.render(h,p)};var z=Me;const ae=(await new Promise((U,Z)=>{F.load(V,U,void 0,Z)})).scene;ae.scale.set(bo,bo,bo);let Q=1/0,oe=-1/0;ae.traverse(U=>{if(U.isMesh){U.geometry.computeBoundingBox();const Z=U.geometry.boundingBox;Z.min.y<Q&&(Q=Z.min.y),Z.max.y>oe&&(oe=Z.max.y)}});const Y=ul.find(U=>U.id==="elevation"),ge=LL(Y);ge.setElevationRange(Q,oe),ae.traverse(U=>{U.isMesh&&(U.material=ge)}),h.add(ae),m=mD(p,H),m.setTerrainMesh(ae),m.init(),p.position.set(0,0,0);const ce=new yh;ce.set(new G(0,9999,0),new G(0,-1,0));const ue=ce.intersectObject(ae,!0);ue.length>0?p.position.y=ue[0].point.y+Bo:p.position.y=Bo;const Ee=[{dir:new G(0,0,-1),label:"N"},{dir:new G(0,0,1),label:"S"},{dir:new G(1,0,0),label:"E"},{dir:new G(-1,0,0),label:"W"}];let Be=-1/0,ee=new G(0,0,-1);for(const U of Ee){const Z=U.dir.clone().multiplyScalar(bo*.4);ce.set(new G(Z.x,9999,Z.z),new G(0,-1,0));const ie=ce.intersectObject(ae,!0);ie.length>0&&ie[0].point.y>Be&&(Be=ie[0].point.y,ee=U.dir.clone())}p.lookAt(p.position.clone().add(ee));const fe=bo*.4;h.fog.density=3/fe,s.value=!1,d=setTimeout(()=>{r.value=!1},5e3),g=new bv,Me()}catch(ne){console.error("Failed to load terrain:",ne),l.value=!1,s.value=!1}window.addEventListener("resize",M)});function M(){const v=i.value;!v||!p||!f||(p.aspect=v.clientWidth/v.clientHeight,p.updateProjectionMatrix(),f.setSize(v.clientWidth,v.clientHeight,!1))}return bs(()=>{_&&cancelAnimationFrame(_),m==null||m.dispose(),f==null||f.dispose(),window.removeEventListener("resize",M),d&&clearTimeout(d)}),(v,C)=>(nt(),_t("div",gD,[q("canvas",{ref_key:"canvasRef",ref:i,class:"explore-canvas"},null,512),Ke(er,{name:"fade"},{default:Ct(()=>[s.value?(nt(),_t("div",_D,[q("p",vD,ye(v.$t("explore.loading")),1)])):Dt("",!0)]),_:1}),c.value&&!s.value?(nt(),_t("div",xD,[q("p",yD,ye(v.$t("explore.desktopOnly")),1),q("button",{class:"back-btn",onClick:x},ye(v.$t("explore.back")),1)])):Dt("",!0),!l.value&&!s.value?(nt(),_t("div",ED,[q("p",MD,ye(v.$t("explore.notFound")),1),q("button",{class:"back-btn",onClick:x},ye(v.$t("explore.back")),1)])):Dt("",!0),l.value&&!s.value&&!c.value?(nt(),_t(Xt,{key:2},[q("div",SD,[q("button",{class:"back-link",onClick:x},"← "+ye(v.$t("explore.back")),1),q("h1",bD,ye(o.value),1),q("p",TD,ye(a.value),1)]),u.value?(nt(),_t("div",AD,"+")):Dt("",!0),Ke(er,{name:"fade"},{default:Ct(()=>[r.value||!u.value?(nt(),_t("div",wD,ye(v.$t("explore.controls")),1)):Dt("",!0)]),_:1})],64)):Dt("",!0)]))}},LD=hi(CD,[["__scopeId","data-v-0155d590"]]),PD=[{path:"/",name:"Globe",component:XI},{path:"/about",name:"About",component:QI},{path:"/gis",name:"Mars GIS",component:pD},{path:"/explore/:landmarkId",name:"Explore",component:LD}],ID=LE({history:cE(),routes:PD}),DD={brand:"MARS",elevationGlobe:"Elevation Globe",marsGis:"Mars GIS",about:"About"},ND={surface:"Loading Mars surface..."},OD={colorLabel:"Color",qualityLabel:"Quality",qualityStandard:"Standard",qualityHigh:"High (650 MB)",loadingHd:"Loading HD model..."},UD={landingSite:"Landing Sites",volcano:"Volcanoes",canyon:"Canyons",basin:"Basins",plain:"Plains",polarCap:"Polar Caps"},FD={mission:"Mission",agency:"Agency",year:"Year",status:"Status",feature:"Feature",diameter:"Diameter",elevation:"Elevation",pressure:"Pressure",tempRange:"Temp Range",age:"Age",coordinates:"Coordinates",waterIce:"Water Ice",ironOxide:"Iron Oxide",silicate:"Silicate",basalt:"Basalt",roughness:"Roughness",dustCover:"Dust Cover",cratering:"Cratering",exploreTerrain:"Explore Terrain"},kD={title:"Explore Terrain",back:"Back to Globe",controls:"Click to explore | WASD to move | SHIFT to sprint | ESC to exit",loading:"Loading terrain...",notFound:"Terrain not available for this landmark.",desktopOnly:"Terrain exploration requires a desktop browser."},BD={title:"About This Project",lead:"A high-resolution 3D reconstruction of Mars' global topography, built from orbital elevation data collected by two spacecraft over two decades of observation.",figcaption:"HRSC-MOLA Blended DEM — 106,694 × 53,347 pixels, 200m/px. Click to enlarge.",dataSource:{title:"Data Source",p1:"This globe is derived from the {strong_dem}, a dataset produced by the U.S. Geological Survey's Astrogeology Science Center. It merges elevation measurements from two instruments:",strong_dem:"HRSC-MOLA Blended Digital Elevation Model",mola:"{strong_mola} (Mars Orbiter Laser Altimeter) aboard NASA's Mars Global Surveyor, which operated from 1997 to 2006. MOLA fired laser pulses at the surface and measured return time to determine elevation with ~1 meter vertical precision.",strong_mola:"MOLA",hrsc:"{strong_hrsc} (High Resolution Stereo Camera) aboard ESA's Mars Express, operational since 2004. HRSC captures stereo imagery that is processed into photogrammetric elevation models, providing detail where MOLA's along-track spacing leaves gaps.",strong_hrsc:"HRSC",p2:"The blended product combines MOLA's global coverage with HRSC's regional detail, producing a unified elevation map at {strong_res} — approximately 106,694 × 53,347 pixels covering the entire planet.",strong_res:"200 meters per pixel"},pipeline:{title:"Processing Pipeline",intro:"The raw dataset is an 11 GB GeoTIFF file containing signed 16-bit elevation values in meters relative to the Mars aeroid (a reference surface analogous to Earth's sea level). Our pipeline processes this into a 3D mesh through the following steps:",step1_title:"Downsampling",step1:"The full-resolution grid is resampled to a target resolution using bilinear interpolation via {code_rasterio} (built on GDAL). The default target is 4 km/pixel, yielding approximately 5,300 × 2,700 data points.",step2_title:"Spherical projection",step2:"Each grid cell's latitude and longitude are converted to 3D Cartesian coordinates on a unit sphere. Elevation values displace each vertex radially outward, with a configurable exaggeration factor (default 10×) to make terrain features visible at globe scale.",step3_title:"Mesh generation",step3:"The grid is triangulated into a watertight sphere mesh. Polar rows are collapsed into single vertices with triangle fans to avoid degenerate geometry at the poles.",step4_title:"Normal computation",step4:"Per-vertex normals are computed by averaging adjacent face normals, enabling smooth shading that reveals subtle terrain features.",step5_title:"Export",step5:"The final mesh is exported as a binary glTF (GLB) file for efficient loading in the browser."},elevation:{title:"Elevation Profile",p1:"Mars has the most extreme topographic range of any terrestrial planet in the solar system. Elevations in this dataset span from {strong_min} (the floor of Hellas Planitia, the deepest impact basin) to {strong_max} (the summit of Olympus Mons, the tallest known volcano). This ~29 km range exceeds Earth's ~20 km range from the Mariana Trench to Mount Everest.",strong_min:"-8,200 m",strong_max:"+21,229 m",p2:"The planet's topography divides roughly into two hemispheres: the heavily cratered southern highlands, which sit 1-3 km above the datum, and the smoother northern lowlands, which are 1-3 km below. This dichotomy, still not fully explained, is one of the major open questions in planetary science."},references:{title:"References",ref1:"Fergason, R. L., Hare, T. M., & Laura, J. (2018). {em}. Astrogeology PDS Annex, U.S. Geological Survey.",ref1_em:"HRSC and MOLA Blended Digital Elevation Model at 200m v2",ref2:"Smith, D. E., et al. (2001). {em}. Journal of Geophysical Research, 106(E10), 23689-23722.",ref2_em:"Mars Orbiter Laser Altimeter: Experiment summary after the first year of global mapping of Mars",ref3:"Gwinner, K., et al. (2016). {em}. European Planetary Science Congress.",ref3_em:"The first global image mosaic and digital elevation model of Mars from the High Resolution Stereo Camera"}},HD={nav:DD,loading:ND,globe:OD,legend:UD,infoCard:FD,explore:kD,about:BD},VD={brand:"MARTE",elevationGlobe:"Globo de Elevação",marsGis:"SIG de Marte",about:"Sobre"},GD={surface:"Carregando superfície de Marte..."},zD={colorLabel:"Cor",qualityLabel:"Qualidade",qualityStandard:"Padrão",qualityHigh:"Alta (650 MB)",loadingHd:"Carregando modelo HD..."},WD={landingSite:"Locais de Pouso",volcano:"Vulcões",canyon:"Cânions",basin:"Bacias",plain:"Planícies",polarCap:"Calotas Polares"},XD={mission:"Missão",agency:"Agência",year:"Ano",status:"Status",feature:"Feição",diameter:"Diâmetro",elevation:"Elevação",pressure:"Pressão",tempRange:"Faixa de Temp.",age:"Idade",coordinates:"Coordenadas",waterIce:"Gelo de Água",ironOxide:"Óxido de Ferro",silicate:"Silicato",basalt:"Basalto",roughness:"Rugosidade",dustCover:"Cobertura de Poeira",cratering:"Craterização",exploreTerrain:"Explorar Terreno"},$D={title:"Explorar Terreno",back:"Voltar ao Globo",controls:"Clique para explorar | WASD para mover | SHIFT para correr | ESC para sair",loading:"Carregando terreno...",notFound:"Terreno não disponível para este marco.",desktopOnly:"A exploração de terreno requer um navegador de desktop."},jD={title:"Sobre Este Projeto",lead:"Uma reconstrução 3D de alta resolução da topografia global de Marte, construída a partir de dados de elevação orbital coletados por duas espaçonaves ao longo de duas décadas de observação.",figcaption:"DEM Combinado HRSC-MOLA — 106.694 × 53.347 pixels, 200m/px. Clique para ampliar.",dataSource:{title:"Fonte de Dados",p1:"Este globo é derivado do {strong_dem}, um conjunto de dados produzido pelo Centro de Ciência Astrogeológica do Serviço Geológico dos EUA. Ele combina medições de elevação de dois instrumentos:",strong_dem:"Modelo Digital de Elevação Combinado HRSC-MOLA",mola:"{strong_mola} (Altímetro Laser do Orbitador de Marte) a bordo do Mars Global Surveyor da NASA, que operou de 1997 a 2006. O MOLA disparava pulsos laser na superfície e media o tempo de retorno para determinar a elevação com precisão vertical de ~1 metro.",strong_mola:"MOLA",hrsc:"{strong_hrsc} (Câmera Estéreo de Alta Resolução) a bordo do Mars Express da ESA, operacional desde 2004. A HRSC captura imagens estéreo que são processadas em modelos de elevação fotogramétricos, fornecendo detalhes onde o espaçamento ao longo da trilha do MOLA deixa lacunas.",strong_hrsc:"HRSC",p2:"O produto combinado une a cobertura global do MOLA com o detalhe regional da HRSC, produzindo um mapa de elevação unificado a {strong_res} — aproximadamente 106.694 × 53.347 pixels cobrindo todo o planeta.",strong_res:"200 metros por pixel"},pipeline:{title:"Pipeline de Processamento",intro:"O conjunto de dados bruto é um arquivo GeoTIFF de 11 GB contendo valores de elevação de 16 bits com sinal em metros relativos ao aeroide de Marte (uma superfície de referência análoga ao nível do mar da Terra). Nosso pipeline processa isso em uma malha 3D através das seguintes etapas:",step1_title:"Subamostragem",step1:"A grade em resolução total é reamostrada para uma resolução alvo usando interpolação bilinear via {code_rasterio} (construído sobre GDAL). O alvo padrão é 4 km/pixel, gerando aproximadamente 5.300 × 2.700 pontos de dados.",step2_title:"Projeção esférica",step2:"A latitude e longitude de cada célula da grade são convertidas em coordenadas cartesianas 3D em uma esfera unitária. Os valores de elevação deslocam cada vértice radialmente para fora, com um fator de exagero configurável (padrão 10×) para tornar as feições do terreno visíveis na escala do globo.",step3_title:"Geração de malha",step3:"A grade é triangulada em uma malha esférica estanque. As linhas polares são colapsadas em vértices únicos com leques de triângulos para evitar geometria degenerada nos polos.",step4_title:"Cálculo de normais",step4:"As normais por vértice são calculadas pela média das normais das faces adjacentes, permitindo sombreamento suave que revela feições sutis do terreno.",step5_title:"Exportação",step5:"A malha final é exportada como um arquivo glTF binário (GLB) para carregamento eficiente no navegador."},elevation:{title:"Perfil de Elevação",p1:"Marte possui a faixa topográfica mais extrema de qualquer planeta terrestre do sistema solar. As elevações neste conjunto de dados variam de {strong_min} (o piso de Hellas Planitia, a bacia de impacto mais profunda) a {strong_max} (o cume de Olympus Mons, o maior vulcão conhecido). Esta faixa de ~29 km excede a faixa de ~20 km da Terra, da Fossa das Marianas ao Monte Everest.",strong_min:"-8.200 m",strong_max:"+21.229 m",p2:"A topografia do planeta se divide aproximadamente em dois hemisférios: as terras altas do sul, fortemente craterizadas, que ficam 1-3 km acima do datum, e as terras baixas do norte, mais suaves, que ficam 1-3 km abaixo. Esta dicotomia, ainda não totalmente explicada, é uma das grandes questões em aberto da ciência planetária."},references:{title:"Referências",ref1:"Fergason, R. L., Hare, T. M., & Laura, J. (2018). {em}. Astrogeology PDS Annex, U.S. Geological Survey.",ref1_em:"HRSC and MOLA Blended Digital Elevation Model at 200m v2",ref2:"Smith, D. E., et al. (2001). {em}. Journal of Geophysical Research, 106(E10), 23689-23722.",ref2_em:"Mars Orbiter Laser Altimeter: Experiment summary after the first year of global mapping of Mars",ref3:"Gwinner, K., et al. (2016). {em}. European Planetary Science Congress.",ref3_em:"The first global image mosaic and digital elevation model of Mars from the High Resolution Stereo Camera"}},YD={nav:VD,loading:GD,globe:zD,legend:WD,infoCard:XD,explore:$D,about:jD},qD=typeof localStorage<"u"?localStorage.getItem("mars-locale"):null,KD=yS({legacy:!1,locale:qD||"en",fallbackLocale:"en",messages:{en:HD,"pt-BR":YD}});Sy(WS).use(ID).use(KD).mount("#app");
