var Uv=Object.defineProperty;var Fv=(n,e,t)=>e in n?Uv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ft=(n,e,t)=>Fv(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xf(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const wt={},Cr=[],Ei=()=>{},Dm=()=>!1,Tl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Al=n=>n.startsWith("onUpdate:"),$t=Object.assign,yf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},kv=Object.prototype.hasOwnProperty,pt=(n,e)=>kv.call(n,e),Ge=Array.isArray,Pr=n=>ea(n)==="[object Map]",Nm=n=>ea(n)==="[object Set]",Mh=n=>ea(n)==="[object Date]",Ke=n=>typeof n=="function",Ft=n=>typeof n=="string",bi=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",Om=n=>(gt(n)||Ke(n))&&Ke(n.then)&&Ke(n.catch),Um=Object.prototype.toString,ea=n=>Um.call(n),Bv=n=>ea(n).slice(8,-1),Fm=n=>ea(n)==="[object Object]",Ef=n=>Ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,bo=xf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wl=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Hv=/-\w/g,_n=wl(n=>n.replace(Hv,e=>e.slice(1).toUpperCase())),Vv=/\B([A-Z])/g,nr=wl(n=>n.replace(Vv,"-$1").toLowerCase()),Rl=wl(n=>n.charAt(0).toUpperCase()+n.slice(1)),jl=wl(n=>n?`on${Rl(n)}`:""),xi=(n,e)=>!Object.is(n,e),Yl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},km=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Gv=n=>{const e=parseFloat(n);return isNaN(e)?n:e},zv=n=>{const e=Ft(n)?Number(n):NaN;return isNaN(e)?n:e};let Sh;const Cl=()=>Sh||(Sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tn(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ft(i)?jv(i):Tn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(n)||gt(n))return n}const Wv=/;(?![^(]*\))/g,Xv=/:([^]+)/,$v=/\/\*[^]*?\*\//g;function jv(n){const e={};return n.replace($v,"").split(Wv).forEach(t=>{if(t){const i=t.split(Xv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Qn(n){let e="";if(Ft(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=Qn(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Yv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kv=xf(Yv);function Bm(n){return!!n||n===""}function qv(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Mf(n[i],e[i]);return t}function Mf(n,e){if(n===e)return!0;let t=Mh(n),i=Mh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=bi(n),i=bi(e),t||i)return n===e;if(t=Ge(n),i=Ge(e),t||i)return t&&i?qv(n,e):!1;if(t=gt(n),i=gt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Mf(n[o],e[o]))return!1}}return String(n)===String(e)}const Hm=n=>!!(n&&n.__v_isRef===!0),Me=n=>Ft(n)?n:n==null?"":Ge(n)||gt(n)&&(n.toString===Um||!Ke(n.toString))?Hm(n)?Me(n.value):JSON.stringify(n,Vm,2):String(n),Vm=(n,e)=>Hm(e)?Vm(n,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Kl(i,r)+" =>"]=s,t),{})}:Nm(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Kl(t))}:bi(e)?Kl(e):gt(e)&&!Ge(e)&&!Fm(e)?String(e):e,Kl=(n,e="")=>{var t;return bi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bn;class Gm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=bn,!e&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=bn;try{return bn=this,e()}finally{bn=t}}}on(){++this._on===1&&(this.prevScope=bn,bn=this)}off(){this._on>0&&--this._on===0&&(bn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Zv(n){return new Gm(n)}function Jv(){return bn}let At;const ql=new WeakSet;class zm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bn&&bn.active&&bn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ql.has(this)&&(ql.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bh(this),$m(this);const e=At,t=ri;At=this,ri=!0;try{return this.fn()}finally{jm(this),At=e,ri=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Tf(e);this.deps=this.depsTail=void 0,bh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ql.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){eu(this)&&this.run()}get dirty(){return eu(this)}}let Wm=0,To,Ao;function Xm(n,e=!1){if(n.flags|=8,e){n.next=Ao,Ao=n;return}n.next=To,To=n}function Sf(){Wm++}function bf(){if(--Wm>0)return;if(Ao){let e=Ao;for(Ao=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;To;){let e=To;for(To=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function $m(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jm(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Tf(i),Qv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function eu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ym(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ym(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Oo)||(n.globalVersion=Oo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!eu(n))))return;n.flags|=2;const e=n.dep,t=At,i=ri;At=n,ri=!0;try{$m(n);const s=n.fn(n._value);(e.version===0||xi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{At=t,ri=i,jm(n),n.flags&=-3}}function Tf(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Tf(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Qv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ri=!0;const Km=[];function Ji(){Km.push(ri),ri=!1}function Qi(){const n=Km.pop();ri=n===void 0?!0:n}function bh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=At;At=void 0;try{e()}finally{At=t}}}let Oo=0;class e0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Af{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!ri||At===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==At)t=this.activeLink=new e0(At,this),At.deps?(t.prevDep=At.depsTail,At.depsTail.nextDep=t,At.depsTail=t):At.deps=At.depsTail=t,qm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=At.depsTail,t.nextDep=void 0,At.depsTail.nextDep=t,At.depsTail=t,At.deps===t&&(At.deps=i)}return t}trigger(e){this.version++,Oo++,this.notify(e)}notify(e){Sf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bf()}}}function qm(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qm(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const tu=new WeakMap,Ys=Symbol(""),nu=Symbol(""),Uo=Symbol("");function on(n,e,t){if(ri&&At){let i=tu.get(n);i||tu.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Af),s.map=i,s.key=t),s.track()}}function $i(n,e,t,i,s,r){const o=tu.get(n);if(!o){Oo++;return}const a=l=>{l&&l.trigger()};if(Sf(),e==="clear")o.forEach(a);else{const l=Ge(n),c=l&&Ef(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Uo||!bi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Uo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ys)),Pr(n)&&a(o.get(nu)));break;case"delete":l||(a(o.get(Ys)),Pr(n)&&a(o.get(nu)));break;case"set":Pr(n)&&a(o.get(Ys));break}}bf()}function rr(n){const e=at(n);return e===n?e:(on(e,"iterate",Uo),Wn(n)?e:e.map(li))}function Pl(n){return on(n=at(n),"iterate",Uo),n}function gi(n,e){return es(n)?Fr(Ks(n)?li(e):e):li(e)}const t0={__proto__:null,[Symbol.iterator](){return Zl(this,Symbol.iterator,n=>gi(this,n))},concat(...n){return rr(this).concat(...n.map(e=>Ge(e)?rr(e):e))},entries(){return Zl(this,"entries",n=>(n[1]=gi(this,n[1]),n))},every(n,e){return Ii(this,"every",n,e,void 0,arguments)},filter(n,e){return Ii(this,"filter",n,e,t=>t.map(i=>gi(this,i)),arguments)},find(n,e){return Ii(this,"find",n,e,t=>gi(this,t),arguments)},findIndex(n,e){return Ii(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ii(this,"findLast",n,e,t=>gi(this,t),arguments)},findLastIndex(n,e){return Ii(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ii(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jl(this,"includes",n)},indexOf(...n){return Jl(this,"indexOf",n)},join(n){return rr(this).join(n)},lastIndexOf(...n){return Jl(this,"lastIndexOf",n)},map(n,e){return Ii(this,"map",n,e,void 0,arguments)},pop(){return oo(this,"pop")},push(...n){return oo(this,"push",n)},reduce(n,...e){return Th(this,"reduce",n,e)},reduceRight(n,...e){return Th(this,"reduceRight",n,e)},shift(){return oo(this,"shift")},some(n,e){return Ii(this,"some",n,e,void 0,arguments)},splice(...n){return oo(this,"splice",n)},toReversed(){return rr(this).toReversed()},toSorted(n){return rr(this).toSorted(n)},toSpliced(...n){return rr(this).toSpliced(...n)},unshift(...n){return oo(this,"unshift",n)},values(){return Zl(this,"values",n=>gi(this,n))}};function Zl(n,e,t){const i=Pl(n),s=i[e]();return i!==n&&!Wn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const n0=Array.prototype;function Ii(n,e,t,i,s,r){const o=Pl(n),a=o!==n&&!Wn(n),l=o[e];if(l!==n0[e]){const f=l.apply(n,r);return a?li(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,gi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Th(n,e,t,i){const s=Pl(n),r=s!==n&&!Wn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=gi(n,c)),t.call(this,c,gi(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?gi(n,l):l}function Jl(n,e,t){const i=at(n);on(i,"iterate",Uo);const s=i[e](...t);return(s===-1||s===!1)&&Cf(t[0])?(t[0]=at(t[0]),i[e](...t)):s}function oo(n,e,t=[]){Ji(),Sf();const i=at(n)[e].apply(n,t);return bf(),Qi(),i}const i0=xf("__proto__,__v_isRef,__isVue"),Zm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bi));function s0(n){bi(n)||(n=String(n));const e=at(this);return on(e,"has",n),e.hasOwnProperty(n)}class Jm{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?p0:ng:r?tg:eg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!s){let l;if(o&&(l=t0[t]))return l;if(t==="hasOwnProperty")return s0}const a=Reflect.get(e,t,en(e)?e:i);if((bi(t)?Zm.has(t):i0(t))||(s||on(e,"get",t),r))return a;if(en(a)){const l=o&&Ef(t)?a:a.value;return s&&gt(l)?Fo(l):l}return gt(a)?s?Fo(a):Ll(a):a}}class Qm extends Jm{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ge(e)&&Ef(t);if(!this._isShallow){const c=es(r);if(!Wn(i)&&!es(i)&&(r=at(r),i=at(i)),!o&&en(r)&&!en(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:pt(e,t),l=Reflect.set(e,t,i,en(e)?e:s);return e===at(s)&&(a?xi(i,r)&&$i(e,"set",t,i):$i(e,"add",t,i)),l}deleteProperty(e,t){const i=pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&$i(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!bi(t)||!Zm.has(t))&&on(e,"has",t),i}ownKeys(e){return on(e,"iterate",Ge(e)?"length":Ys),Reflect.ownKeys(e)}}class r0 extends Jm{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const o0=new Qm,a0=new r0,l0=new Qm(!0);const iu=n=>n,ma=n=>Reflect.getPrototypeOf(n);function c0(n,e,t){return function(...i){const s=this.__v_raw,r=at(s),o=Pr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?iu:e?Fr:li;return!e&&on(r,"iterate",l?nu:Ys),$t(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function ga(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function u0(n,e){const t={get(s){const r=this.__v_raw,o=at(r),a=at(s);n||(xi(s,a)&&on(o,"get",s),on(o,"get",a));const{has:l}=ma(o),c=e?iu:n?Fr:li;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&on(at(s),"iterate",Ys),s.size},has(s){const r=this.__v_raw,o=at(r),a=at(s);return n||(xi(s,a)&&on(o,"has",s),on(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=at(a),c=e?iu:n?Fr:li;return!n&&on(l,"iterate",Ys),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return $t(t,n?{add:ga("add"),set:ga("set"),delete:ga("delete"),clear:ga("clear")}:{add(s){const r=at(this),o=ma(r),a=at(s),l=!e&&!Wn(s)&&!es(s)?a:s;return o.has.call(r,l)||xi(s,l)&&o.has.call(r,s)||xi(a,l)&&o.has.call(r,a)||(r.add(l),$i(r,"add",l,l)),this},set(s,r){!e&&!Wn(r)&&!es(r)&&(r=at(r));const o=at(this),{has:a,get:l}=ma(o);let c=a.call(o,s);c||(s=at(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?xi(r,u)&&$i(o,"set",s,r):$i(o,"add",s,r),this},delete(s){const r=at(this),{has:o,get:a}=ma(r);let l=o.call(r,s);l||(s=at(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&$i(r,"delete",s,void 0),c},clear(){const s=at(this),r=s.size!==0,o=s.clear();return r&&$i(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=c0(s,n,e)}),t}function wf(n,e){const t=u0(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pt(t,s)&&s in i?t:i,s,r)}const f0={get:wf(!1,!1)},h0={get:wf(!1,!0)},d0={get:wf(!0,!1)};const eg=new WeakMap,tg=new WeakMap,ng=new WeakMap,p0=new WeakMap;function m0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function g0(n){return n.__v_skip||!Object.isExtensible(n)?0:m0(Bv(n))}function Ll(n){return es(n)?n:Rf(n,!1,o0,f0,eg)}function ig(n){return Rf(n,!1,l0,h0,tg)}function Fo(n){return Rf(n,!0,a0,d0,ng)}function Rf(n,e,t,i,s){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=g0(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Ks(n){return es(n)?Ks(n.__v_raw):!!(n&&n.__v_isReactive)}function es(n){return!!(n&&n.__v_isReadonly)}function Wn(n){return!!(n&&n.__v_isShallow)}function Cf(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function _0(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&km(n,"__v_skip",!0),n}const li=n=>gt(n)?Ll(n):n,Fr=n=>gt(n)?Fo(n):n;function en(n){return n?n.__v_isRef===!0:!1}function bt(n){return rg(n,!1)}function sg(n){return rg(n,!0)}function rg(n,e){return en(n)?n:new v0(n,e)}class v0{constructor(e,t){this.dep=new Af,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:li(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Wn(e)||es(e);e=i?e:at(e),xi(e,t)&&(this._rawValue=e,this._value=i?e:li(e),this.dep.trigger())}}function ke(n){return en(n)?n.value:n}const x0={get:(n,e,t)=>e==="__v_raw"?n:ke(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return en(s)&&!en(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function og(n){return Ks(n)?n:new Proxy(n,x0)}class y0{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Af(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return Xm(this,!0),!0}get value(){const e=this.dep.track();return Ym(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function E0(n,e,t=!1){let i,s;return Ke(n)?i=n:(i=n.get,s=n.set),new y0(i,s,t)}const _a={},al=new WeakMap;let Vs;function M0(n,e=!1,t=Vs){if(t){let i=al.get(t);i||al.set(t,i=[]),i.push(n)}}function S0(n,e,t=wt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=v=>s?v:Wn(v)||s===!1||s===0?_s(v,1):_s(v);let u,f,h,p,g=!1,_=!1;if(en(n)?(f=()=>n.value,g=Wn(n)):Ks(n)?(f=()=>c(n),g=!0):Ge(n)?(_=!0,g=n.some(v=>Ks(v)||Wn(v)),f=()=>n.map(v=>{if(en(v))return v.value;if(Ks(v))return c(v);if(Ke(v))return l?l(v,2):v()})):Ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ji();try{h()}finally{Qi()}}const v=Vs;Vs=u;try{return l?l(n,3,[p]):n(p)}finally{Vs=v}}:f=Ei,e&&s){const v=f,C=s===!0?1/0:s;f=()=>_s(v(),C)}const m=Jv(),d=()=>{u.stop(),m&&m.active&&yf(m.effects,u)};if(r&&e){const v=e;e=(...C)=>{v(...C),d()}}let x=_?new Array(n.length).fill(_a):_a;const M=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const C=u.run();if(s||g||(_?C.some((P,w)=>xi(P,x[w])):xi(C,x))){h&&h();const P=Vs;Vs=u;try{const w=[C,x===_a?void 0:_&&x[0]===_a?[]:x,p];x=C,l?l(e,3,w):e(...w)}finally{Vs=P}}}else u.run()};return a&&a(M),u=new zm(f),u.scheduler=o?()=>o(M,!1):M,p=v=>M0(v,!1,u),h=u.onStop=()=>{const v=al.get(u);if(v){if(l)l(v,4);else for(const C of v)C();al.delete(u)}},e?i?M(!0):x=u.run():o?o(M.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function _s(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,en(n))_s(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)_s(n[i],e,t);else if(Nm(n)||Pr(n))n.forEach(i=>{_s(i,e,t)});else if(Fm(n)){for(const i in n)_s(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&_s(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ta(n,e,t,i){try{return i?n(...i):n()}catch(s){Il(s,e,t)}}function ci(n,e,t,i){if(Ke(n)){const s=ta(n,e,t,i);return s&&Om(s)&&s.catch(r=>{Il(r,e,t)}),s}if(Ge(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ci(n[r],e,t,i));return s}}function Il(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||wt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Ji(),ta(r,null,10,[n,l,c]),Qi();return}}b0(n,t,s,i,o)}function b0(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const pn=[];let pi=-1;const Lr=[];let ps=null,Sr=0;const ag=Promise.resolve();let ll=null;function lg(n){const e=ll||ag;return n?e.then(this?n.bind(this):n):e}function T0(n){let e=pi+1,t=pn.length;for(;e<t;){const i=e+t>>>1,s=pn[i],r=ko(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Pf(n){if(!(n.flags&1)){const e=ko(n),t=pn[pn.length-1];!t||!(n.flags&2)&&e>=ko(t)?pn.push(n):pn.splice(T0(e),0,n),n.flags|=1,cg()}}function cg(){ll||(ll=ag.then(fg))}function A0(n){Ge(n)?Lr.push(...n):ps&&n.id===-1?ps.splice(Sr+1,0,n):n.flags&1||(Lr.push(n),n.flags|=1),cg()}function Ah(n,e,t=pi+1){for(;t<pn.length;t++){const i=pn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;pn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ug(n){if(Lr.length){const e=[...new Set(Lr)].sort((t,i)=>ko(t)-ko(i));if(Lr.length=0,ps){ps.push(...e);return}for(ps=e,Sr=0;Sr<ps.length;Sr++){const t=ps[Sr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ps=null,Sr=0}}const ko=n=>n.id==null?n.flags&2?-1:1/0:n.id;function fg(n){try{for(pi=0;pi<pn.length;pi++){const e=pn[pi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ta(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pi<pn.length;pi++){const e=pn[pi];e&&(e.flags&=-2)}pi=-1,pn.length=0,ug(),ll=null,(pn.length||Lr.length)&&fg()}}let ii=null,hg=null;function cl(n){const e=ii;return ii=n,hg=n&&n.type.__scopeId||null,e}function Nt(n,e=ii,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&hl(-1);const r=cl(e);let o;try{o=n(...s)}finally{cl(r),i._d&&hl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ps(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ji(),ci(l,t,8,[n.el,a,n,e]),Qi())}}function qa(n,e){if(an){let t=an.provides;const i=an.parent&&an.parent.provides;i===t&&(t=an.provides=Object.create(i)),t[n]=e}}function oi(n,e,t=!1){const i=Nf();if(i||Ir){let s=Ir?Ir._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ke(e)?e.call(i&&i.proxy):e}}const w0=Symbol.for("v-scx"),R0=()=>oi(w0);function qs(n,e,t){return dg(n,e,t)}function dg(n,e,t=wt){const{immediate:i,deep:s,flush:r,once:o}=t,a=$t({},t),l=e&&i||!e&&r!=="post";let c;if(Vo){if(r==="sync"){const p=R0();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Ei,p.resume=Ei,p.pause=Ei,p}}const u=an;a.call=(p,g,_)=>ci(p,u,g,_);let f=!1;r==="post"?a.scheduler=p=>{Sn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Pf(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=S0(n,e,a);return Vo&&(c?c.push(h):l&&h()),h}function C0(n,e,t){const i=this.proxy,s=Ft(n)?n.includes(".")?pg(i,n):()=>i[n]:n.bind(i,i);let r;Ke(e)?r=e:(r=e.handler,t=e);const o=ra(this),a=dg(s,r.bind(i),t);return o(),a}function pg(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const P0=Symbol("_vte"),mg=n=>n.__isTeleport,mi=Symbol("_leaveCb"),ao=Symbol("_enterCb");function L0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ia(()=>{n.isMounted=!0}),Sg(()=>{n.isUnmounting=!0}),n}const Bn=[Function,Array],gg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bn,onEnter:Bn,onAfterEnter:Bn,onEnterCancelled:Bn,onBeforeLeave:Bn,onLeave:Bn,onAfterLeave:Bn,onLeaveCancelled:Bn,onBeforeAppear:Bn,onAppear:Bn,onAfterAppear:Bn,onAppearCancelled:Bn},_g=n=>{const e=n.subTree;return e.component?_g(e.component):e},I0={name:"BaseTransition",props:gg,setup(n,{slots:e}){const t=Nf(),i=L0();return()=>{const s=e.default&&yg(e.default(),!0);if(!s||!s.length)return;const r=vg(s),o=at(n),{mode:a}=o;if(i.isLeaving)return Ql(r);const l=wh(r);if(!l)return Ql(r);let c=su(l,o,i,t,f=>c=f);l.type!==gn&&Bo(l,c);let u=t.subTree&&wh(t.subTree);if(u&&u.type!==gn&&!zs(u,l)&&_g(t).type!==gn){let f=su(u,o,i,t);if(Bo(u,f),a==="out-in"&&l.type!==gn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Ql(r);a==="in-out"&&l.type!==gn?f.delayLeave=(h,p,g)=>{const _=xg(i,u);_[String(u.key)]=u,h[mi]=()=>{p(),h[mi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function vg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==gn){e=t;break}}return e}const D0=I0;function xg(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function su(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:d,onAfterAppear:x,onAppearCancelled:M}=e,v=String(n.key),C=xg(t,n),P=(T,b)=>{T&&ci(T,i,9,b)},w=(T,b)=>{const U=b[1];P(T,b),Ge(T)?T.every(H=>H.length<=1)&&U():T.length<=1&&U()},V={mode:o,persisted:a,beforeEnter(T){let b=l;if(!t.isMounted)if(r)b=m||l;else return;T[mi]&&T[mi](!0);const U=C[v];U&&zs(n,U)&&U.el[mi]&&U.el[mi](),P(b,[T])},enter(T){if(C[v]===n)return;let b=c,U=u,H=f;if(!t.isMounted)if(r)b=d||c,U=x||u,H=M||f;else return;let X=!1;T[ao]=ae=>{X||(X=!0,ae?P(H,[T]):P(U,[T]),V.delayedLeave&&V.delayedLeave(),T[ao]=void 0)};const oe=T[ao].bind(null,!1);b?w(b,[T,oe]):oe()},leave(T,b){const U=String(n.key);if(T[ao]&&T[ao](!0),t.isUnmounting)return b();P(h,[T]);let H=!1;T[mi]=oe=>{H||(H=!0,b(),oe?P(_,[T]):P(g,[T]),T[mi]=void 0,C[U]===n&&delete C[U])};const X=T[mi].bind(null,!1);C[U]=n,p?w(p,[T,X]):X()},clone(T){const b=su(T,e,t,i,s);return s&&s(b),b}};return V}function Ql(n){if(Dl(n))return n=bs(n),n.children=null,n}function wh(n){if(!Dl(n))return mg(n.type)&&n.children?vg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ke(t.default))return t.default()}}function Bo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Bo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function yg(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Zt?(o.patchFlag&128&&s++,i=i.concat(yg(o.children,e,a))):(e||o.type!==gn)&&i.push(a!=null?bs(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function na(n,e){return Ke(n)?$t({name:n.name},e,{setup:n}):n}function Eg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Rh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ul=new WeakMap;function wo(n,e,t,i,s=!1){if(Ge(n)){n.forEach((_,m)=>wo(_,e&&(Ge(e)?e[m]:e),t,i,s));return}if(Ro(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&wo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Of(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===wt?a.refs={}:a.refs,f=a.setupState,h=at(f),p=f===wt?Dm:_=>Rh(u,_)?!1:pt(h,_),g=(_,m)=>!(m&&Rh(u,m));if(c!=null&&c!==l){if(Ch(e),Ft(c))u[c]=null,p(c)&&(f[c]=null);else if(en(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Ke(l))ta(l,a,12,[o,u]);else{const _=Ft(l),m=en(l);if(_||m){const d=()=>{if(n.f){const x=_?p(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ge(x)&&yf(x,r);else if(Ge(x))x.includes(r)||x.push(r);else if(_)u[l]=[r],p(l)&&(f[l]=u[l]);else{const M=[r];g(l,n.k)&&(l.value=M),n.k&&(u[n.k]=M)}}else _?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{d(),ul.delete(n)};x.id=-1,ul.set(n,x),Sn(x,t)}else Ch(n),d()}}}function Ch(n){const e=ul.get(n);e&&(e.flags|=8,ul.delete(n))}Cl().requestIdleCallback;Cl().cancelIdleCallback;const Ro=n=>!!n.type.__asyncLoader,Dl=n=>n.type.__isKeepAlive;function N0(n,e){Mg(n,"a",e)}function O0(n,e){Mg(n,"da",e)}function Mg(n,e,t=an){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Nl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Dl(s.parent.vnode)&&U0(i,e,t,s),s=s.parent}}function U0(n,e,t,i){const s=Nl(e,n,i,!0);Js(()=>{yf(i[e],s)},t)}function Nl(n,e,t=an,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ji();const a=ra(t),l=ci(e,t,n,o);return a(),Qi(),l});return i?s.unshift(r):s.push(r),r}}const is=n=>(e,t=an)=>{(!Vo||n==="sp")&&Nl(n,(...i)=>e(...i),t)},F0=is("bm"),ia=is("m"),k0=is("bu"),B0=is("u"),Sg=is("bum"),Js=is("um"),H0=is("sp"),V0=is("rtg"),G0=is("rtc");function z0(n,e=an){Nl("ec",n,e)}const W0="components";function bg(n,e){return $0(W0,n,!0,e)||n}const X0=Symbol.for("v-ndc");function $0(n,e,t=!0,i=!1){const s=ii||an;if(s){const r=s.type;{const a=Px(r,!1);if(a&&(a===e||a===_n(e)||a===Rl(_n(e))))return r}const o=Ph(s[n]||r[n],e)||Ph(s.appContext[n],e);return!o&&i?r:o}}function Ph(n,e){return n&&(n[e]||n[_n(e)]||n[Rl(_n(e))])}function Tg(n,e,t,i){let s;const r=t&&t[i],o=Ge(n);if(o||Ft(n)){const a=o&&Ks(n);let l=!1,c=!1;a&&(l=!Wn(n),c=es(n),n=Pl(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Fr(li(n[u])):li(n[u]):n[u],u,void 0,r&&r[u])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(gt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r&&r[l]));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r&&r[l])}}else s=[];return t&&(t[i]=s),s}const ru=n=>n?Xg(n)?Of(n):ru(n.parent):null,Co=$t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ru(n.parent),$root:n=>ru(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>wg(n),$forceUpdate:n=>n.f||(n.f=()=>{Pf(n.update)}),$nextTick:n=>n.n||(n.n=lg.bind(n.proxy)),$watch:n=>C0.bind(n)}),ec=(n,e)=>n!==wt&&!n.__isScriptSetup&&pt(n,e),j0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ec(i,e))return o[e]=1,i[e];if(s!==wt&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(t!==wt&&pt(t,e))return o[e]=4,t[e];ou&&(o[e]=0)}}const c=Co[e];let u,f;if(c)return e==="$attrs"&&on(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==wt&&pt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,pt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ec(s,e)?(s[e]=t,!0):i!==wt&&pt(i,e)?(i[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==wt&&a[0]!=="$"&&pt(n,a)||ec(e,a)||pt(r,a)||pt(i,a)||pt(Co,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Lh(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ou=!0;function Y0(n){const e=wg(n),t=n.proxy,i=n.ctx;ou=!1,e.beforeCreate&&Ih(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:x,destroyed:M,unmounted:v,render:C,renderTracked:P,renderTriggered:w,errorCaptured:V,serverPrefetch:T,expose:b,inheritAttrs:U,components:H,directives:X,filters:oe}=e;if(c&&K0(c,i,null),o)for(const se in o){const Y=o[se];Ke(Y)&&(i[se]=Y.bind(t))}if(s){const se=s.call(t,t);gt(se)&&(n.data=Ll(se))}if(ou=!0,r)for(const se in r){const Y=r[se],me=Ke(Y)?Y.bind(t,t):Ke(Y.get)?Y.get.bind(t,t):Ei,ve=!Ke(Y)&&Ke(Y.set)?Y.set.bind(t):Ei,ye=ln({get:me,set:ve});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ne=>ye.value=Ne})}if(a)for(const se in a)Ag(a[se],i,t,se);if(l){const se=Ke(l)?l.call(t):l;Reflect.ownKeys(se).forEach(Y=>{qa(Y,se[Y])})}u&&Ih(u,n,"c");function ee(se,Y){Ge(Y)?Y.forEach(me=>se(me.bind(t))):Y&&se(Y.bind(t))}if(ee(F0,f),ee(ia,h),ee(k0,p),ee(B0,g),ee(N0,_),ee(O0,m),ee(z0,V),ee(G0,P),ee(V0,w),ee(Sg,x),ee(Js,v),ee(H0,T),Ge(b))if(b.length){const se=n.exposed||(n.exposed={});b.forEach(Y=>{Object.defineProperty(se,Y,{get:()=>t[Y],set:me=>t[Y]=me,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Ei&&(n.render=C),U!=null&&(n.inheritAttrs=U),H&&(n.components=H),X&&(n.directives=X),T&&Eg(n)}function K0(n,e,t=Ei){Ge(n)&&(n=au(n));for(const i in n){const s=n[i];let r;gt(s)?"default"in s?r=oi(s.from||i,s.default,!0):r=oi(s.from||i):r=oi(s),en(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ih(n,e,t){ci(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ag(n,e,t,i){let s=i.includes(".")?pg(t,i):()=>t[i];if(Ft(n)){const r=e[n];Ke(r)&&qs(s,r)}else if(Ke(n))qs(s,n.bind(t));else if(gt(n))if(Ge(n))n.forEach(r=>Ag(r,e,t,i));else{const r=Ke(n.handler)?n.handler.bind(t):e[n.handler];Ke(r)&&qs(s,r,n)}}function wg(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>fl(l,c,o,!0)),fl(l,e,o)),gt(e)&&r.set(e,l),l}function fl(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&fl(n,r,t,!0),s&&s.forEach(o=>fl(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=q0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const q0={data:Dh,props:Nh,emits:Nh,methods:Eo,computed:Eo,beforeCreate:fn,created:fn,beforeMount:fn,mounted:fn,beforeUpdate:fn,updated:fn,beforeDestroy:fn,beforeUnmount:fn,destroyed:fn,unmounted:fn,activated:fn,deactivated:fn,errorCaptured:fn,serverPrefetch:fn,components:Eo,directives:Eo,watch:J0,provide:Dh,inject:Z0};function Dh(n,e){return e?n?function(){return $t(Ke(n)?n.call(this,this):n,Ke(e)?e.call(this,this):e)}:e:n}function Z0(n,e){return Eo(au(n),au(e))}function au(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function fn(n,e){return n?[...new Set([].concat(n,e))]:e}function Eo(n,e){return n?$t(Object.create(null),n,e):e}function Nh(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:$t(Object.create(null),Lh(n),Lh(e??{})):e}function J0(n,e){if(!n)return e;if(!e)return n;const t=$t(Object.create(null),n);for(const i in e)t[i]=fn(n[i],e[i]);return t}function Rg(){return{app:null,config:{isNativeTag:Dm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Q0=0;function ex(n,e){return function(i,s=null){Ke(i)||(i=$t({},i)),s!=null&&!gt(s)&&(s=null);const r=Rg(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Q0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ix,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ke(u.install)?(o.add(u),u.install(c,...f)):Ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Qe(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Of(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ci(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Ir;Ir=c;try{return u()}finally{Ir=f}}};return c}}let Ir=null;const tx=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${_n(e)}Modifiers`]||n[`${nr(e)}Modifiers`];function nx(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||wt;let s=t;const r=e.startsWith("update:"),o=r&&tx(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ft(u)?u.trim():u)),o.number&&(s=t.map(Gv)));let a,l=i[a=jl(e)]||i[a=jl(_n(e))];!l&&r&&(l=i[a=jl(nr(e))]),l&&ci(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ci(c,n,6,s)}}const ix=new WeakMap;function Cg(n,e,t=!1){const i=t?ix:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ke(n)){const l=c=>{const u=Cg(c,e,!0);u&&(a=!0,$t(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(gt(n)&&i.set(n,null),null):(Ge(r)?r.forEach(l=>o[l]=null):$t(o,r),gt(n)&&i.set(n,o),o)}function Ol(n,e){return!n||!Tl(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,nr(e))||pt(n,e))}function Oh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:_}=n,m=cl(n);let d,x;try{if(t.shapeFlag&4){const v=s||i,C=v;d=_i(c.call(C,v,u,f,p,h,g)),x=a}else{const v=e;d=_i(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),x=e.props?a:sx(a)}}catch(v){Po.length=0,Il(v,n,1),d=Qe(gn)}let M=d;if(x&&_!==!1){const v=Object.keys(x),{shapeFlag:C}=M;v.length&&C&7&&(r&&v.some(Al)&&(x=rx(x,r)),M=bs(M,x,!1,!0))}return t.dirs&&(M=bs(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Bo(M,t.transition),d=M,cl(m),d}const sx=n=>{let e;for(const t in n)(t==="class"||t==="style"||Tl(t))&&((e||(e={}))[t]=n[t]);return e},rx=(n,e)=>{const t={};for(const i in n)(!Al(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ox(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Uh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Pg(o,i,h)&&!Ol(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Uh(i,o,c):!0:!!o;return!1}function Uh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Pg(e,n,r)&&!Ol(t,r))return!0}return!1}function Pg(n,e,t){const i=n[t],s=e[t];return t==="style"&&gt(i)&&gt(s)?!Mf(i,s):i!==s}function ax({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Lg={},Ig=()=>Object.create(Lg),Dg=n=>Object.getPrototypeOf(n)===Lg;function lx(n,e,t,i=!1){const s={},r=Ig();n.propsDefaults=Object.create(null),Ng(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:ig(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function cx(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=at(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ol(n.emitsOptions,h))continue;const p=e[h];if(l)if(pt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=_n(h);s[g]=lu(l,a,g,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{Ng(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=nr(f))===f||!pt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=lu(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!pt(e,f))&&(delete r[f],c=!0)}c&&$i(n.attrs,"set","")}function Ng(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(bo(l))continue;const c=e[l];let u;s&&pt(s,u=_n(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ol(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=at(t),c=a||wt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=lu(s,l,f,c[f],n,!pt(c,f))}}return o}function lu(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ra(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===nr(t))&&(i=!0))}return i}const ux=new WeakMap;function Og(n,e,t=!1){const i=t?ux:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ke(n)){const u=f=>{l=!0;const[h,p]=Og(f,e,!0);$t(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return gt(n)&&i.set(n,Cr),Cr;if(Ge(r))for(let u=0;u<r.length;u++){const f=_n(r[u]);Fh(f)&&(o[f]=wt)}else if(r)for(const u in r){const f=_n(u);if(Fh(f)){const h=r[u],p=o[f]=Ge(h)||Ke(h)?{type:h}:$t({},h),g=p.type;let _=!1,m=!0;if(Ge(g))for(let d=0;d<g.length;++d){const x=g[d],M=Ke(x)&&x.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(m=!1)}else _=Ke(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||pt(p,"default"))&&a.push(f)}}const c=[o,a];return gt(n)&&i.set(n,c),c}function Fh(n){return n[0]!=="$"&&!bo(n)}const Lf=n=>n==="_"||n==="_ctx"||n==="$stable",If=n=>Ge(n)?n.map(_i):[_i(n)],fx=(n,e,t)=>{if(e._n)return e;const i=Nt((...s)=>If(e(...s)),t);return i._c=!1,i},Ug=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Lf(s))continue;const r=n[s];if(Ke(r))e[s]=fx(s,r,i);else if(r!=null){const o=If(r);e[s]=()=>o}}},Fg=(n,e)=>{const t=If(e);n.slots.default=()=>t},kg=(n,e,t)=>{for(const i in e)(t||!Lf(i))&&(n[i]=e[i])},hx=(n,e,t)=>{const i=n.slots=Ig();if(n.vnode.shapeFlag&32){const s=e._;s?(kg(i,e,t),t&&km(i,"_",s,!0)):Ug(e,i)}else e&&Fg(n,e)},dx=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=wt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:kg(s,e,t):(r=!e.$stable,Ug(e,s)),o=e}else e&&(Fg(n,e),o={default:1});if(r)for(const a in s)!Lf(a)&&o[a]==null&&delete s[a]},Sn=vx;function px(n){return mx(n)}function mx(n,e){const t=Cl();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Ei,insertStaticContent:g}=n,_=(D,O,S,te=null,Z=null,K=null,A=void 0,L=null,F=!!O.dynamicChildren)=>{if(D===O)return;D&&!zs(D,O)&&(te=B(D),Ne(D,Z,K,!0),D=null),O.patchFlag===-2&&(F=!1,O.dynamicChildren=null);const{type:y,ref:E,shapeFlag:N}=O;switch(y){case sa:m(D,O,S,te);break;case gn:d(D,O,S,te);break;case nc:D==null&&x(O,S,te,A);break;case Zt:H(D,O,S,te,Z,K,A,L,F);break;default:N&1?C(D,O,S,te,Z,K,A,L,F):N&6?X(D,O,S,te,Z,K,A,L,F):(N&64||N&128)&&y.process(D,O,S,te,Z,K,A,L,F,he)}E!=null&&Z?wo(E,D&&D.ref,K,O||D,!O):E==null&&D&&D.ref!=null&&wo(D.ref,null,K,D,!0)},m=(D,O,S,te)=>{if(D==null)i(O.el=a(O.children),S,te);else{const Z=O.el=D.el;O.children!==D.children&&c(Z,O.children)}},d=(D,O,S,te)=>{D==null?i(O.el=l(O.children||""),S,te):O.el=D.el},x=(D,O,S,te)=>{[D.el,D.anchor]=g(D.children,O,S,te,D.el,D.anchor)},M=({el:D,anchor:O},S,te)=>{let Z;for(;D&&D!==O;)Z=h(D),i(D,S,te),D=Z;i(O,S,te)},v=({el:D,anchor:O})=>{let S;for(;D&&D!==O;)S=h(D),s(D),D=S;s(O)},C=(D,O,S,te,Z,K,A,L,F)=>{if(O.type==="svg"?A="svg":O.type==="math"&&(A="mathml"),D==null)P(O,S,te,Z,K,A,L,F);else{const y=D.el&&D.el._isVueCE?D.el:null;try{y&&y._beginPatch(),T(D,O,Z,K,A,L,F)}finally{y&&y._endPatch()}}},P=(D,O,S,te,Z,K,A,L)=>{let F,y;const{props:E,shapeFlag:N,transition:I,dirs:k}=D;if(F=D.el=o(D.type,K,E&&E.is,E),N&8?u(F,D.children):N&16&&V(D.children,F,null,te,Z,tc(D,K),A,L),k&&Ps(D,null,te,"created"),w(F,D,D.scopeId,A,te),E){for(const ce in E)ce!=="value"&&!bo(ce)&&r(F,ce,null,E[ce],K,te);"value"in E&&r(F,"value",null,E.value,K),(y=E.onVnodeBeforeMount)&&fi(y,te,D)}k&&Ps(D,null,te,"beforeMount");const $=gx(Z,I);$&&I.beforeEnter(F),i(F,O,S),((y=E&&E.onVnodeMounted)||$||k)&&Sn(()=>{try{y&&fi(y,te,D),$&&I.enter(F),k&&Ps(D,null,te,"mounted")}finally{}},Z)},w=(D,O,S,te,Z)=>{if(S&&p(D,S),te)for(let K=0;K<te.length;K++)p(D,te[K]);if(Z){let K=Z.subTree;if(O===K||Gg(K.type)&&(K.ssContent===O||K.ssFallback===O)){const A=Z.vnode;w(D,A,A.scopeId,A.slotScopeIds,Z.parent)}}},V=(D,O,S,te,Z,K,A,L,F=0)=>{for(let y=F;y<D.length;y++){const E=D[y]=L?Xi(D[y]):_i(D[y]);_(null,E,O,S,te,Z,K,A,L)}},T=(D,O,S,te,Z,K,A)=>{const L=O.el=D.el;let{patchFlag:F,dynamicChildren:y,dirs:E}=O;F|=D.patchFlag&16;const N=D.props||wt,I=O.props||wt;let k;if(S&&Ls(S,!1),(k=I.onVnodeBeforeUpdate)&&fi(k,S,O,D),E&&Ps(O,D,S,"beforeUpdate"),S&&Ls(S,!0),(N.innerHTML&&I.innerHTML==null||N.textContent&&I.textContent==null)&&u(L,""),y?b(D.dynamicChildren,y,L,S,te,tc(O,Z),K):A||Y(D,O,L,null,S,te,tc(O,Z),K,!1),F>0){if(F&16)U(L,N,I,S,Z);else if(F&2&&N.class!==I.class&&r(L,"class",null,I.class,Z),F&4&&r(L,"style",N.style,I.style,Z),F&8){const $=O.dynamicProps;for(let ce=0;ce<$.length;ce++){const ue=$[ce],ge=N[ue],Ie=I[ue];(Ie!==ge||ue==="value")&&r(L,ue,ge,Ie,Z,S)}}F&1&&D.children!==O.children&&u(L,O.children)}else!A&&y==null&&U(L,N,I,S,Z);((k=I.onVnodeUpdated)||E)&&Sn(()=>{k&&fi(k,S,O,D),E&&Ps(O,D,S,"updated")},te)},b=(D,O,S,te,Z,K,A)=>{for(let L=0;L<O.length;L++){const F=D[L],y=O[L],E=F.el&&(F.type===Zt||!zs(F,y)||F.shapeFlag&198)?f(F.el):S;_(F,y,E,null,te,Z,K,A,!0)}},U=(D,O,S,te,Z)=>{if(O!==S){if(O!==wt)for(const K in O)!bo(K)&&!(K in S)&&r(D,K,O[K],null,Z,te);for(const K in S){if(bo(K))continue;const A=S[K],L=O[K];A!==L&&K!=="value"&&r(D,K,L,A,Z,te)}"value"in S&&r(D,"value",O.value,S.value,Z)}},H=(D,O,S,te,Z,K,A,L,F)=>{const y=O.el=D?D.el:a(""),E=O.anchor=D?D.anchor:a("");let{patchFlag:N,dynamicChildren:I,slotScopeIds:k}=O;k&&(L=L?L.concat(k):k),D==null?(i(y,S,te),i(E,S,te),V(O.children||[],S,E,Z,K,A,L,F)):N>0&&N&64&&I&&D.dynamicChildren&&D.dynamicChildren.length===I.length?(b(D.dynamicChildren,I,S,Z,K,A,L),(O.key!=null||Z&&O===Z.subTree)&&Bg(D,O,!0)):Y(D,O,S,E,Z,K,A,L,F)},X=(D,O,S,te,Z,K,A,L,F)=>{O.slotScopeIds=L,D==null?O.shapeFlag&512?Z.ctx.activate(O,S,te,A,F):oe(O,S,te,Z,K,A,F):ae(D,O,F)},oe=(D,O,S,te,Z,K,A)=>{const L=D.component=Tx(D,te,Z);if(Dl(D)&&(L.ctx.renderer=he),Ax(L,!1,A),L.asyncDep){if(Z&&Z.registerDep(L,ee,A),!D.el){const F=L.subTree=Qe(gn);d(null,F,O,S),D.placeholder=F.el}}else ee(L,D,O,S,Z,K,A)},ae=(D,O,S)=>{const te=O.component=D.component;if(ox(D,O,S))if(te.asyncDep&&!te.asyncResolved){se(te,O,S);return}else te.next=O,te.update();else O.el=D.el,te.vnode=O},ee=(D,O,S,te,Z,K,A)=>{const L=()=>{if(D.isMounted){let{next:N,bu:I,u:k,parent:$,vnode:ce}=D;{const Se=Hg(D);if(Se){N&&(N.el=ce.el,se(D,N,A)),Se.asyncDep.then(()=>{Sn(()=>{D.isUnmounted||y()},Z)});return}}let ue=N,ge;Ls(D,!1),N?(N.el=ce.el,se(D,N,A)):N=ce,I&&Yl(I),(ge=N.props&&N.props.onVnodeBeforeUpdate)&&fi(ge,$,N,ce),Ls(D,!0);const Ie=Oh(D),de=D.subTree;D.subTree=Ie,_(de,Ie,f(de.el),B(de),D,Z,K),N.el=Ie.el,ue===null&&ax(D,Ie.el),k&&Sn(k,Z),(ge=N.props&&N.props.onVnodeUpdated)&&Sn(()=>fi(ge,$,N,ce),Z)}else{let N;const{el:I,props:k}=O,{bm:$,m:ce,parent:ue,root:ge,type:Ie}=D,de=Ro(O);Ls(D,!1),$&&Yl($),!de&&(N=k&&k.onVnodeBeforeMount)&&fi(N,ue,O),Ls(D,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(Ie,D.parent?D.parent.type:void 0);const Se=D.subTree=Oh(D);_(null,Se,S,te,D,Z,K),O.el=Se.el}if(ce&&Sn(ce,Z),!de&&(N=k&&k.onVnodeMounted)){const Se=O;Sn(()=>fi(N,ue,Se),Z)}(O.shapeFlag&256||ue&&Ro(ue.vnode)&&ue.vnode.shapeFlag&256)&&D.a&&Sn(D.a,Z),D.isMounted=!0,O=S=te=null}};D.scope.on();const F=D.effect=new zm(L);D.scope.off();const y=D.update=F.run.bind(F),E=D.job=F.runIfDirty.bind(F);E.i=D,E.id=D.uid,F.scheduler=()=>Pf(E),Ls(D,!0),y()},se=(D,O,S)=>{O.component=D;const te=D.vnode.props;D.vnode=O,D.next=null,cx(D,O.props,te,S),dx(D,O.children,S),Ji(),Ah(D),Qi()},Y=(D,O,S,te,Z,K,A,L,F=!1)=>{const y=D&&D.children,E=D?D.shapeFlag:0,N=O.children,{patchFlag:I,shapeFlag:k}=O;if(I>0){if(I&128){ve(y,N,S,te,Z,K,A,L,F);return}else if(I&256){me(y,N,S,te,Z,K,A,L,F);return}}k&8?(E&16&&xe(y,Z,K),N!==y&&u(S,N)):E&16?k&16?ve(y,N,S,te,Z,K,A,L,F):xe(y,Z,K,!0):(E&8&&u(S,""),k&16&&V(N,S,te,Z,K,A,L,F))},me=(D,O,S,te,Z,K,A,L,F)=>{D=D||Cr,O=O||Cr;const y=D.length,E=O.length,N=Math.min(y,E);let I;for(I=0;I<N;I++){const k=O[I]=F?Xi(O[I]):_i(O[I]);_(D[I],k,S,null,Z,K,A,L,F)}y>E?xe(D,Z,K,!0,!1,N):V(O,S,te,Z,K,A,L,F,N)},ve=(D,O,S,te,Z,K,A,L,F)=>{let y=0;const E=O.length;let N=D.length-1,I=E-1;for(;y<=N&&y<=I;){const k=D[y],$=O[y]=F?Xi(O[y]):_i(O[y]);if(zs(k,$))_(k,$,S,null,Z,K,A,L,F);else break;y++}for(;y<=N&&y<=I;){const k=D[N],$=O[I]=F?Xi(O[I]):_i(O[I]);if(zs(k,$))_(k,$,S,null,Z,K,A,L,F);else break;N--,I--}if(y>N){if(y<=I){const k=I+1,$=k<E?O[k].el:te;for(;y<=I;)_(null,O[y]=F?Xi(O[y]):_i(O[y]),S,$,Z,K,A,L,F),y++}}else if(y>I)for(;y<=N;)Ne(D[y],Z,K,!0),y++;else{const k=y,$=y,ce=new Map;for(y=$;y<=I;y++){const Ee=O[y]=F?Xi(O[y]):_i(O[y]);Ee.key!=null&&ce.set(Ee.key,y)}let ue,ge=0;const Ie=I-$+1;let de=!1,Se=0;const Ue=new Array(Ie);for(y=0;y<Ie;y++)Ue[y]=0;for(y=k;y<=N;y++){const Ee=D[y];if(ge>=Ie){Ne(Ee,Z,K,!0);continue}let We;if(Ee.key!=null)We=ce.get(Ee.key);else for(ue=$;ue<=I;ue++)if(Ue[ue-$]===0&&zs(Ee,O[ue])){We=ue;break}We===void 0?Ne(Ee,Z,K,!0):(Ue[We-$]=y+1,We>=Se?Se=We:de=!0,_(Ee,O[We],S,null,Z,K,A,L,F),ge++)}const He=de?_x(Ue):Cr;for(ue=He.length-1,y=Ie-1;y>=0;y--){const Ee=$+y,We=O[Ee],Ye=O[Ee+1],_t=Ee+1<E?Ye.el||Vg(Ye):te;Ue[y]===0?_(null,We,S,_t,Z,K,A,L,F):de&&(ue<0||y!==He[ue]?ye(We,S,_t,2):ue--)}}},ye=(D,O,S,te,Z=null)=>{const{el:K,type:A,transition:L,children:F,shapeFlag:y}=D;if(y&6){ye(D.component.subTree,O,S,te);return}if(y&128){D.suspense.move(O,S,te);return}if(y&64){A.move(D,O,S,he);return}if(A===Zt){i(K,O,S);for(let N=0;N<F.length;N++)ye(F[N],O,S,te);i(D.anchor,O,S);return}if(A===nc){M(D,O,S);return}if(te!==2&&y&1&&L)if(te===0)L.beforeEnter(K),i(K,O,S),Sn(()=>L.enter(K),Z);else{const{leave:N,delayLeave:I,afterLeave:k}=L,$=()=>{D.ctx.isUnmounted?s(K):i(K,O,S)},ce=()=>{K._isLeaving&&K[mi](!0),N(K,()=>{$(),k&&k()})};I?I(K,$,ce):ce()}else i(K,O,S)},Ne=(D,O,S,te=!1,Z=!1)=>{const{type:K,props:A,ref:L,children:F,dynamicChildren:y,shapeFlag:E,patchFlag:N,dirs:I,cacheIndex:k,memo:$}=D;if(N===-2&&(Z=!1),L!=null&&(Ji(),wo(L,null,S,D,!0),Qi()),k!=null&&(O.renderCache[k]=void 0),E&256){O.ctx.deactivate(D);return}const ce=E&1&&I,ue=!Ro(D);let ge;if(ue&&(ge=A&&A.onVnodeBeforeUnmount)&&fi(ge,O,D),E&6)pe(D.component,S,te);else{if(E&128){D.suspense.unmount(S,te);return}ce&&Ps(D,null,O,"beforeUnmount"),E&64?D.type.remove(D,O,S,he,te):y&&!y.hasOnce&&(K!==Zt||N>0&&N&64)?xe(y,O,S,!1,!0):(K===Zt&&N&384||!Z&&E&16)&&xe(F,O,S),te&&Oe(D)}const Ie=$!=null&&k==null;(ue&&(ge=A&&A.onVnodeUnmounted)||ce||Ie)&&Sn(()=>{ge&&fi(ge,O,D),ce&&Ps(D,null,O,"unmounted"),Ie&&(D.el=null)},S)},Oe=D=>{const{type:O,el:S,anchor:te,transition:Z}=D;if(O===Zt){ne(S,te);return}if(O===nc){v(D);return}const K=()=>{s(S),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:A,delayLeave:L}=Z,F=()=>A(S,K);L?L(D.el,K,F):F()}else K()},ne=(D,O)=>{let S;for(;D!==O;)S=h(D),s(D),D=S;s(O)},pe=(D,O,S)=>{const{bum:te,scope:Z,job:K,subTree:A,um:L,m:F,a:y}=D;kh(F),kh(y),te&&Yl(te),Z.stop(),K&&(K.flags|=8,Ne(A,D,O,S)),L&&Sn(L,O),Sn(()=>{D.isUnmounted=!0},O)},xe=(D,O,S,te=!1,Z=!1,K=0)=>{for(let A=K;A<D.length;A++)Ne(D[A],O,S,te,Z)},B=D=>{if(D.shapeFlag&6)return B(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const O=h(D.anchor||D.el),S=O&&O[P0];return S?h(S):O};let ie=!1;const re=(D,O,S)=>{let te;D==null?O._vnode&&(Ne(O._vnode,null,null,!0),te=O._vnode.component):_(O._vnode||null,D,O,null,null,null,S),O._vnode=D,ie||(ie=!0,Ah(te),ug(),ie=!1)},he={p:_,um:Ne,m:ye,r:Oe,mt:oe,mc:V,pc:Y,pbc:b,n:B,o:n};return{render:re,hydrate:void 0,createApp:ex(re)}}function tc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ls({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function gx(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Bg(n,e,t=!1){const i=n.children,s=e.children;if(Ge(i)&&Ge(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Xi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Bg(o,a)),a.type===sa&&(a.patchFlag===-1&&(a=s[r]=Xi(a)),a.el=o.el),a.type===gn&&!a.el&&(a.el=o.el)}}function _x(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Hg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hg(e)}function kh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Vg(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Vg(e.subTree):null}const Gg=n=>n.__isSuspense;function vx(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):A0(n)}const Zt=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),nc=Symbol.for("v-stc"),Po=[];let In=null;function Tt(n=!1){Po.push(In=n?null:[])}function xx(){Po.pop(),In=Po[Po.length-1]||null}let Ho=1;function hl(n,e=!1){Ho+=n,n<0&&In&&e&&(In.hasOnce=!0)}function zg(n){return n.dynamicChildren=Ho>0?In||Cr:null,xx(),Ho>0&&In&&In.push(n),n}function Ht(n,e,t,i,s,r){return zg(q(n,e,t,i,s,r,!0))}function Qs(n,e,t,i,s){return zg(Qe(n,e,t,i,s,!0))}function dl(n){return n?n.__v_isVNode===!0:!1}function zs(n,e){return n.type===e.type&&n.key===e.key}const Wg=({key:n})=>n??null,Za=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ft(n)||en(n)||Ke(n)?{i:ii,r:n,k:e,f:!!t}:n:null);function q(n,e=null,t=null,i=0,s=null,r=n===Zt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wg(e),ref:e&&Za(e),scopeId:hg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ii};return a?(Df(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),Ho>0&&!o&&In&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&In.push(l),l}const Qe=yx;function yx(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===X0)&&(n=gn),dl(n)){const a=bs(n,e,!0);return t&&Df(a,t),Ho>0&&!r&&In&&(a.shapeFlag&6?In[In.indexOf(n)]=a:In.push(a)),a.patchFlag=-2,a}if(Lx(n)&&(n=n.__vccOpts),e){e=Ex(e);let{class:a,style:l}=e;a&&!Ft(a)&&(e.class=Qn(a)),gt(l)&&(Cf(l)&&!Ge(l)&&(l=$t({},l)),e.style=Tn(l))}const o=Ft(n)?1:Gg(n)?128:mg(n)?64:gt(n)?4:Ke(n)?2:0;return q(n,e,t,i,s,o,r,!0)}function Ex(n){return n?Cf(n)||Dg(n)?$t({},n):n:null}function bs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Mx(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Wg(c),ref:e&&e.ref?t&&r?Ge(r)?r.concat(Za(e)):[r,Za(e)]:Za(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Zt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&bs(n.ssContent),ssFallback:n.ssFallback&&bs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Bo(u,l.clone(u)),u}function Ln(n=" ",e=0){return Qe(sa,null,n,e)}function An(n="",e=!1){return e?(Tt(),Qs(gn,null,n)):Qe(gn,null,n)}function _i(n){return n==null||typeof n=="boolean"?Qe(gn):Ge(n)?Qe(Zt,null,n.slice()):dl(n)?Xi(n):Qe(sa,null,String(n))}function Xi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:bs(n)}function Df(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Df(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Dg(e)?e._ctx=ii:s===3&&ii&&(ii.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:ii},t=32):(e=String(e),i&64?(t=16,e=[Ln(e)]):t=8);n.children=e,n.shapeFlag|=t}function Mx(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Qn([e.class,i.class]));else if(s==="style")e.style=Tn([e.style,i.style]);else if(Tl(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ge(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Al(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function fi(n,e,t,i=null){ci(n,e,7,[t,i])}const Sx=Rg();let bx=0;function Tx(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Sx,r={uid:bx++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Og(i,s),emitsOptions:Cg(i,s),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nx.bind(null,r),n.ce&&n.ce(r),r}let an=null;const Nf=()=>an||ii;let pl,cu;{const n=Cl(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};pl=e("__VUE_INSTANCE_SETTERS__",t=>an=t),cu=e("__VUE_SSR_SETTERS__",t=>Vo=t)}const ra=n=>{const e=an;return pl(n),n.scope.on(),()=>{n.scope.off(),pl(e)}},Bh=()=>{an&&an.scope.off(),pl(null)};function Xg(n){return n.vnode.shapeFlag&4}let Vo=!1;function Ax(n,e=!1,t=!1){e&&cu(e);const{props:i,children:s}=n.vnode,r=Xg(n);lx(n,i,r,e),hx(n,s,t||e);const o=r?wx(n,e):void 0;return e&&cu(!1),o}function wx(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,j0);const{setup:i}=t;if(i){Ji();const s=n.setupContext=i.length>1?Cx(n):null,r=ra(n),o=ta(i,n,0,[n.props,s]),a=Om(o);if(Qi(),r(),(a||n.sp)&&!Ro(n)&&Eg(n),a){if(o.then(Bh,Bh),e)return o.then(l=>{Hh(n,l)}).catch(l=>{Il(l,n,0)});n.asyncDep=o}else Hh(n,o)}else $g(n)}function Hh(n,e,t){Ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=og(e)),$g(n)}function $g(n,e,t){const i=n.type;n.render||(n.render=i.render||Ei);{const s=ra(n);Ji();try{Y0(n)}finally{Qi(),s()}}}const Rx={get(n,e){return on(n,"get",""),n[e]}};function Cx(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Rx),slots:n.slots,emit:n.emit,expose:e}}function Of(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(og(_0(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Co)return Co[t](n)},has(e,t){return t in e||t in Co}})):n.proxy}function Px(n,e=!0){return Ke(n)?n.displayName||n.name:n.name||e&&n.__name}function Lx(n){return Ke(n)&&"__vccOpts"in n}const ln=(n,e)=>E0(n,e,Vo);function oa(n,e,t){try{hl(-1);const i=arguments.length;return i===2?gt(e)&&!Ge(e)?dl(e)?Qe(n,null,[e]):Qe(n,e):Qe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&dl(t)&&(t=[t]),Qe(n,e,t))}finally{hl(1)}}const Ix="3.5.31";/**
* @vue/runtime-dom v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uu;const Vh=typeof window<"u"&&window.trustedTypes;if(Vh)try{uu=Vh.createPolicy("vue",{createHTML:n=>n})}catch{}const jg=uu?n=>uu.createHTML(n):n=>n,Dx="http://www.w3.org/2000/svg",Nx="http://www.w3.org/1998/Math/MathML",zi=typeof document<"u"?document:null,Gh=zi&&zi.createElement("template"),Ox={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?zi.createElementNS(Dx,n):e==="mathml"?zi.createElementNS(Nx,n):t?zi.createElement(n,{is:t}):zi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>zi.createTextNode(n),createComment:n=>zi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Gh.innerHTML=jg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Gh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ss="transition",lo="animation",Go=Symbol("_vtc"),Yg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ux=$t({},gg,Yg),Fx=n=>(n.displayName="Transition",n.props=Ux,n),Ul=Fx((n,{slots:e})=>oa(D0,kx(n),e)),Is=(n,e=[])=>{Ge(n)?n.forEach(t=>t(...e)):n&&n(...e)},zh=n=>n?Ge(n)?n.some(e=>e.length>1):n.length>1:!1;function kx(n){const e={};for(const H in n)H in Yg||(e[H]=n[H]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=Bx(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:x,onEnterCancelled:M,onLeave:v,onLeaveCancelled:C,onBeforeAppear:P=d,onAppear:w=x,onAppearCancelled:V=M}=e,T=(H,X,oe,ae)=>{H._enterCancelled=ae,Ds(H,X?u:a),Ds(H,X?c:o),oe&&oe()},b=(H,X)=>{H._isLeaving=!1,Ds(H,f),Ds(H,p),Ds(H,h),X&&X()},U=H=>(X,oe)=>{const ae=H?w:x,ee=()=>T(X,H,oe);Is(ae,[X,ee]),Wh(()=>{Ds(X,H?l:r),Di(X,H?u:a),zh(ae)||Xh(X,i,_,ee)})};return $t(e,{onBeforeEnter(H){Is(d,[H]),Di(H,r),Di(H,o)},onBeforeAppear(H){Is(P,[H]),Di(H,l),Di(H,c)},onEnter:U(!1),onAppear:U(!0),onLeave(H,X){H._isLeaving=!0;const oe=()=>b(H,X);Di(H,f),H._enterCancelled?(Di(H,h),Yh(H)):(Yh(H),Di(H,h)),Wh(()=>{H._isLeaving&&(Ds(H,f),Di(H,p),zh(v)||Xh(H,i,m,oe))}),Is(v,[H,oe])},onEnterCancelled(H){T(H,!1,void 0,!0),Is(M,[H])},onAppearCancelled(H){T(H,!0,void 0,!0),Is(V,[H])},onLeaveCancelled(H){b(H),Is(C,[H])}})}function Bx(n){if(n==null)return null;if(gt(n))return[ic(n.enter),ic(n.leave)];{const e=ic(n);return[e,e]}}function ic(n){return zv(n)}function Di(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Go]||(n[Go]=new Set)).add(e)}function Ds(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Go];t&&(t.delete(e),t.size||(n[Go]=void 0))}function Wh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Hx=0;function Xh(n,e,t,i){const s=n._endId=++Hx,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Vx(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function Vx(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${ss}Delay`),r=i(`${ss}Duration`),o=$h(s,r),a=i(`${lo}Delay`),l=i(`${lo}Duration`),c=$h(a,l);let u=null,f=0,h=0;e===ss?o>0&&(u=ss,f=o,h=r.length):e===lo?c>0&&(u=lo,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?ss:lo:null,h=u?u===ss?r.length:l.length:0);const p=u===ss&&/\b(?:transform|all)(?:,|$)/.test(i(`${ss}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function $h(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>jh(t)+jh(n[i])))}function jh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Yh(n){return(n?n.ownerDocument:document).body.offsetHeight}function Gx(n,e,t){const i=n[Go];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Kh=Symbol("_vod"),zx=Symbol("_vsh"),Wx=Symbol(""),Xx=/(?:^|;)\s*display\s*:/;function $x(n,e,t){const i=n.style,s=Ft(t);let r=!1;if(t&&!s){if(e)if(Ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ja(i,a,"")}else for(const o in e)t[o]==null&&Ja(i,o,"");for(const o in t)o==="display"&&(r=!0),Ja(i,o,t[o])}else if(s){if(e!==t){const o=i[Wx];o&&(t+=";"+o),i.cssText=t,r=Xx.test(t)}}else e&&n.removeAttribute("style");Kh in n&&(n[Kh]=r?i.display:"",n[zx]&&(i.display="none"))}const qh=/\s*!important$/;function Ja(n,e,t){if(Ge(t))t.forEach(i=>Ja(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=jx(n,e);qh.test(t)?n.setProperty(nr(i),t.replace(qh,""),"important"):n[i]=t}}const Zh=["Webkit","Moz","ms"],sc={};function jx(n,e){const t=sc[e];if(t)return t;let i=_n(e);if(i!=="filter"&&i in n)return sc[e]=i;i=Rl(i);for(let s=0;s<Zh.length;s++){const r=Zh[s]+i;if(r in n)return sc[e]=r}return e}const Jh="http://www.w3.org/1999/xlink";function Qh(n,e,t,i,s,r=Kv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Jh,e.slice(6,e.length)):n.setAttributeNS(Jh,e,t):t==null||r&&!Bm(t)?n.removeAttribute(e):n.setAttribute(e,r?"":bi(t)?String(t):t)}function ed(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jg(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Bm(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Yx(n,e,t,i){n.addEventListener(e,t,i)}function Kx(n,e,t,i){n.removeEventListener(e,t,i)}const td=Symbol("_vei");function qx(n,e,t,i,s=null){const r=n[td]||(n[td]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Zx(e);if(i){const c=r[e]=ey(i,s);Yx(n,a,c,l)}else o&&(Kx(n,a,o,l),r[e]=void 0)}}const nd=/(?:Once|Passive|Capture)$/;function Zx(n){let e;if(nd.test(n)){e={};let i;for(;i=n.match(nd);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):nr(n.slice(2)),e]}let rc=0;const Jx=Promise.resolve(),Qx=()=>rc||(Jx.then(()=>rc=0),rc=Date.now());function ey(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ci(ty(i,t.value),e,5,[i])};return t.value=n,t.attached=Qx(),t}function ty(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const id=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ny=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Gx(n,i,o):e==="style"?$x(n,t,i):Tl(e)?Al(e)||qx(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iy(n,e,i,o))?(ed(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qh(n,e,i,o,r,e!=="value")):n._isVueCE&&(sy(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ft(i)))?ed(n,_n(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Qh(n,e,i,o))};function iy(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&id(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return id(e)&&Ft(t)?!1:e in n}function sy(n,e){const t=n._def.props;if(!t)return!1;const i=_n(e);return Array.isArray(t)?t.some(s=>_n(s)===i):Object.keys(t).some(s=>_n(s)===i)}const ry=["ctrl","shift","alt","meta"],oy={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ry.some(t=>n[`${t}Key`]&&!e.includes(t))},ay=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=oy[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},ly=$t({patchProp:ny},Ox);let sd;function cy(){return sd||(sd=px(ly))}const uy=((...n)=>{const e=cy().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=hy(i);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,fy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function fy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function hy(n){return Ft(n)?document.querySelector(n):n}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const br=typeof document<"u";function Kg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function dy(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Kg(n.default)}const ht=Object.assign;function oc(n,e){const t={};for(const i in e){const s=e[i];t[i]=ui(s)?s.map(n):n(s)}return t}const Lo=()=>{},ui=Array.isArray;function rd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}let Dt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const qg=Symbol("");Dt.MATCHER_NOT_FOUND+"",Dt.NAVIGATION_GUARD_REDIRECT+"",Dt.NAVIGATION_ABORTED+"",Dt.NAVIGATION_CANCELLED+"",Dt.NAVIGATION_DUPLICATED+"";function kr(n,e){return ht(new Error,{type:n,[qg]:!0},e)}function Ni(n,e){return n instanceof Error&&qg in n&&(e==null||!!(n.type&e))}const py=["params","query","hash"];function my(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of py)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}const gy=Symbol(""),od=Symbol(""),Uf=Symbol(""),Ff=Symbol(""),fu=Symbol("");function _y(n){return oi(Ff)}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const Zg=/#/g,vy=/&/g,xy=/\//g,yy=/=/g,Ey=/\?/g,Jg=/\+/g,My=/%5B/g,Sy=/%5D/g,Qg=/%5E/g,by=/%60/g,e_=/%7B/g,Ty=/%7C/g,t_=/%7D/g,Ay=/%20/g;function kf(n){return n==null?"":encodeURI(""+n).replace(Ty,"|").replace(My,"[").replace(Sy,"]")}function wy(n){return kf(n).replace(e_,"{").replace(t_,"}").replace(Qg,"^")}function hu(n){return kf(n).replace(Jg,"%2B").replace(Ay,"+").replace(Zg,"%23").replace(vy,"%26").replace(by,"`").replace(e_,"{").replace(t_,"}").replace(Qg,"^")}function Ry(n){return hu(n).replace(yy,"%3D")}function Cy(n){return kf(n).replace(Zg,"%23").replace(Ey,"%3F")}function Py(n){return Cy(n).replace(xy,"%2F")}function zo(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Ly=/\/$/,Iy=n=>n.replace(Ly,"");function ac(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=n(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Uy(i??e,t),{fullPath:i+r+o,path:i,query:s,hash:zo(o)}}function Dy(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ad(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Ny(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Br(e.matched[i],t.matched[s])&&n_(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Br(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function n_(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!Oy(n[t],e[t]))return!1;return!0}function Oy(n,e){return ui(n)?ld(n,e):ui(e)?ld(e,n):(n&&n.valueOf())===(e&&e.valueOf())}function ld(n,e){return ui(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Uy(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const rs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let du=(function(n){return n.pop="pop",n.push="push",n})({}),lc=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function Fy(n){if(!n)if(br){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Iy(n)}const ky=/^[^#]+#/;function By(n,e){return n.replace(ky,"#")+e}function Hy(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Fl=()=>({left:window.scrollX,top:window.scrollY});function Vy(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Hy(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cd(n,e){return(history.state?history.state.position-e:-1)+n}const pu=new Map;function Gy(n,e){pu.set(n,e)}function zy(n){const e=pu.get(n);return pu.delete(n),e}function Wy(n){return typeof n=="string"||n&&typeof n=="object"}function i_(n){return typeof n=="string"||typeof n=="symbol"}function Xy(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const s=t[i].replace(Jg," "),r=s.indexOf("="),o=zo(r<0?s:s.slice(0,r)),a=r<0?null:zo(s.slice(r+1));if(o in e){let l=e[o];ui(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function ud(n){let e="";for(let t in n){const i=n[t];if(t=Ry(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ui(i)?i.map(s=>s&&hu(s)):[i&&hu(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function $y(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ui(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}function co(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ms(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(kr(Dt.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):Wy(h)?l(kr(Dt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function cc(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Kg(l)){const c=(l.__vccOpts||l)[e];c&&r.push(ms(c,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=dy(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&ms(h,t,i,o,a,s)()}))}}return r}function jy(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Br(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Br(c,l))||s.push(l))}return[t,i,s]}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */let Yy=()=>location.protocol+"//"+location.host;function s_(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),ad(a,"")}return ad(t,n)+i+s}function Ky(n,e,t,i){let s=[],r=[],o=null;const a=({state:h})=>{const p=s_(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(p);s.forEach(d=>{d(t.value,g,{delta:m,type:du.pop,direction:m?m>0?lc.forward:lc.back:lc.unknown})})};function l(){o=t.value}function c(h){s.push(h);const p=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ht({},h.state,{scroll:Fl()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function fd(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Fl():null}}function qy(n){const{history:e,location:t}=window,i={value:s_(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Yy()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){r(l,ht({},e.state,fd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=ht({},s.value,e.state,{forward:l,scroll:Fl()});r(u.current,u,!0),r(l,ht({},fd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Zy(n){n=Fy(n);const e=qy(n),t=Ky(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=ht({location:"",base:n,go:i,createHref:By.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let $s=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var zt=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(zt||{});const Jy={type:$s.Static,value:""},Qy=/[a-zA-Z0-9_]/;function eE(n){if(!n)return[[]];if(n==="/")return[[Jy]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=zt.Static,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===zt.Static?r.push({type:$s.Static,value:c}):t===zt.Param||t===zt.ParamRegExp||t===zt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:$s.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==zt.ParamRegExp){i=t,t=zt.EscapeNext;continue}switch(t){case zt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),t=zt.Param):h();break;case zt.EscapeNext:h(),t=i;break;case zt.Param:l==="("?t=zt.ParamRegExp:Qy.test(l)?h():(f(),t=zt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case zt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=zt.ParamRegExpEnd:u+=l;break;case zt.ParamRegExpEnd:f(),t=zt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===zt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const hd="[^/]+?",tE={sensitive:!1,strict:!1,start:!0,end:!0};var dn=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(dn||{});const nE=/[.+*?^${}()[\]/\\]/g;function iE(n,e){const t=ht({},tE,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[dn.Root];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=dn.Segment+(t.sensitive?dn.BonusCaseSensitive:0);if(h.type===$s.Static)f||(s+="/"),s+=h.value.replace(nE,"\\$&"),p+=dn.Static;else if(h.type===$s.Param){const{value:g,repeatable:_,optional:m,regexp:d}=h;r.push({name:g,repeatable:_,optional:m});const x=d||hd;if(x!==hd){p+=dn.BonusCustomRegExp;try{new RegExp(`(${x})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+v.message)}}let M=_?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,p+=dn.Dynamic,m&&(p+=dn.BonusOptional),_&&(p+=dn.BonusRepeatable),x===".*"&&(p+=dn.BonusWildcard)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=dn.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=r[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===$s.Static)u+=p.value;else if(p.type===$s.Param){const{value:g,repeatable:_,optional:m}=p,d=g in c?c[g]:"";if(ui(d)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=ui(d)?d.join("/"):d;if(!x)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function sE(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===dn.Static+dn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===dn.Static+dn.Segment?1:-1:0}function r_(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=sE(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(dd(i))return 1;if(dd(s))return-1}return s.length-i.length}function dd(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const rE={strict:!1,end:!0,sensitive:!1};function oE(n,e,t){const i=iE(eE(n.path),t),s=ht(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aE(n,e){const t=[],i=new Map;e=rd(rE,e);function s(f){return i.get(f)}function r(f,h,p){const g=!p,_=md(f);_.aliasOf=p&&p.record;const m=rd(e,f),d=[_];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of v)d.push(md(ht({},_,{components:p?p.record.components:_.components,path:C,aliasOf:p?p.record:_})))}let x,M;for(const v of d){const{path:C}=v;if(h&&C[0]!=="/"){const P=h.record.path,w=P[P.length-1]==="/"?"":"/";v.path=h.record.path+(C&&w+C)}if(x=oE(v,h,m),p?p.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),g&&f.name&&!gd(x)&&o(f.name)),o_(x)&&l(x),_.children){const P=_.children;for(let w=0;w<P.length;w++)r(P[w],x,p&&p.children[w])}p=p||x}return M?()=>{o(M)}:Lo}function o(f){if(i_(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=uE(f,t);t.splice(h,0,f),f.record.name&&!gd(f)&&i.set(f.record.name,f)}function c(f,h){let p,g={},_,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw kr(Dt.MATCHER_NOT_FOUND,{location:f});m=p.record.name,g=ht(pd(h.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&pd(f.params,p.keys.map(M=>M.name))),_=p.stringify(g)}else if(f.path!=null)_=f.path,p=t.find(M=>M.re.test(_)),p&&(g=p.parse(_),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(M=>M.re.test(h.path)),!p)throw kr(Dt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,g=ht({},h.params,f.params),_=p.stringify(g)}const d=[];let x=p;for(;x;)d.unshift(x.record),x=x.parent;return{name:m,path:_,params:g,matched:d,meta:cE(d)}}n.forEach(f=>r(f));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function pd(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function md(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:lE(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lE(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function gd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function cE(n){return n.reduce((e,t)=>ht(e,t.meta),{})}function uE(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;r_(n,e[r])<0?i=r:t=r+1}const s=fE(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function fE(n){let e=n;for(;e=e.parent;)if(o_(e)&&r_(n,e)===0)return e}function o_({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function _d(n){const e=oi(Uf),t=oi(Ff),i=ln(()=>{const l=ke(n.to);return e.resolve(l)}),s=ln(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Br.bind(null,u));if(h>-1)return h;const p=vd(l[c-2]);return c>1&&vd(u)===p&&f[f.length-1].path!==p?f.findIndex(Br.bind(null,l[c-2])):h}),r=ln(()=>s.value>-1&&mE(t.params,i.value.params)),o=ln(()=>s.value>-1&&s.value===t.matched.length-1&&n_(t.params,i.value.params));function a(l={}){if(pE(l)){const c=e[ke(n.replace)?"replace":"push"](ke(n.to)).catch(Lo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ln(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function hE(n){return n.length===1?n[0]:n}const dE=na({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_d,setup(n,{slots:e}){const t=Ll(_d(n)),{options:i}=oi(Uf),s=ln(()=>({[xd(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[xd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&hE(e.default(t));return n.custom?r:oa("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),ds=dE;function pE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function mE(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!ui(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function vd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const xd=(n,e,t)=>n??e??t,gE=na({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=oi(fu),s=ln(()=>n.route||i.value),r=oi(od,0),o=ln(()=>{let c=ke(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ln(()=>s.value.matched[o.value]);qa(od,ln(()=>o.value+1)),qa(gy,a),qa(fu,s);const l=bt();return qs(()=>[l.value,a.value,n.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Br(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return yd(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=oa(h,ht({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return yd(t.default,{Component:m,route:c})||m}}});function yd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const _E=gE;function vE(n){const e=aE(n.routes,n),t=n.parseQuery||Xy,i=n.stringifyQuery||ud,s=n.history,r=co(),o=co(),a=co(),l=sg(rs);let c=rs;br&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oc.bind(null,B=>""+B),f=oc.bind(null,Py),h=oc.bind(null,zo);function p(B,ie){let re,he;return i_(B)?(re=e.getRecordMatcher(B),he=ie):he=B,e.addRoute(he,re)}function g(B){const ie=e.getRecordMatcher(B);ie&&e.removeRoute(ie)}function _(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function d(B,ie){if(ie=ht({},ie||l.value),typeof B=="string"){const S=ac(t,B,ie.path),te=e.resolve({path:S.path},ie),Z=s.createHref(S.fullPath);return ht(S,te,{params:h(te.params),hash:zo(S.hash),redirectedFrom:void 0,href:Z})}let re;if(B.path!=null)re=ht({},B,{path:ac(t,B.path,ie.path).path});else{const S=ht({},B.params);for(const te in S)S[te]==null&&delete S[te];re=ht({},B,{params:f(S)}),ie.params=f(ie.params)}const he=e.resolve(re,ie),Le=B.hash||"";he.params=u(h(he.params));const D=Dy(i,ht({},B,{hash:wy(Le),path:he.path})),O=s.createHref(D);return ht({fullPath:D,hash:Le,query:i===ud?$y(B.query):B.query||{}},he,{redirectedFrom:void 0,href:O})}function x(B){return typeof B=="string"?ac(t,B,l.value.path):ht({},B)}function M(B,ie){if(c!==B)return kr(Dt.NAVIGATION_CANCELLED,{from:ie,to:B})}function v(B){return w(B)}function C(B){return v(ht(x(B),{replace:!0}))}function P(B,ie){const re=B.matched[B.matched.length-1];if(re&&re.redirect){const{redirect:he}=re;let Le=typeof he=="function"?he(B,ie):he;return typeof Le=="string"&&(Le=Le.includes("?")||Le.includes("#")?Le=x(Le):{path:Le},Le.params={}),ht({query:B.query,hash:B.hash,params:Le.path!=null?{}:B.params},Le)}}function w(B,ie){const re=c=d(B),he=l.value,Le=B.state,D=B.force,O=B.replace===!0,S=P(re,he);if(S)return w(ht(x(S),{state:typeof S=="object"?ht({},Le,S.state):Le,force:D,replace:O}),ie||re);const te=re;te.redirectedFrom=ie;let Z;return!D&&Ny(i,he,re)&&(Z=kr(Dt.NAVIGATION_DUPLICATED,{to:te,from:he}),ye(he,he,!0,!1)),(Z?Promise.resolve(Z):b(te,he)).catch(K=>Ni(K)?Ni(K,Dt.NAVIGATION_GUARD_REDIRECT)?K:ve(K):Y(K,te,he)).then(K=>{if(K){if(Ni(K,Dt.NAVIGATION_GUARD_REDIRECT))return w(ht({replace:O},x(K.to),{state:typeof K.to=="object"?ht({},Le,K.to.state):Le,force:D}),ie||te)}else K=H(te,he,!0,O,Le);return U(te,he,K),K})}function V(B,ie){const re=M(B,ie);return re?Promise.reject(re):Promise.resolve()}function T(B){const ie=ne.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(B):B()}function b(B,ie){let re;const[he,Le,D]=jy(B,ie);re=cc(he.reverse(),"beforeRouteLeave",B,ie);for(const S of he)S.leaveGuards.forEach(te=>{re.push(ms(te,B,ie))});const O=V.bind(null,B,ie);return re.push(O),xe(re).then(()=>{re=[];for(const S of r.list())re.push(ms(S,B,ie));return re.push(O),xe(re)}).then(()=>{re=cc(Le,"beforeRouteUpdate",B,ie);for(const S of Le)S.updateGuards.forEach(te=>{re.push(ms(te,B,ie))});return re.push(O),xe(re)}).then(()=>{re=[];for(const S of D)if(S.beforeEnter)if(ui(S.beforeEnter))for(const te of S.beforeEnter)re.push(ms(te,B,ie));else re.push(ms(S.beforeEnter,B,ie));return re.push(O),xe(re)}).then(()=>(B.matched.forEach(S=>S.enterCallbacks={}),re=cc(D,"beforeRouteEnter",B,ie,T),re.push(O),xe(re))).then(()=>{re=[];for(const S of o.list())re.push(ms(S,B,ie));return re.push(O),xe(re)}).catch(S=>Ni(S,Dt.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function U(B,ie,re){a.list().forEach(he=>T(()=>he(B,ie,re)))}function H(B,ie,re,he,Le){const D=M(B,ie);if(D)return D;const O=ie===rs,S=br?history.state:{};re&&(he||O?s.replace(B.fullPath,ht({scroll:O&&S&&S.scroll},Le)):s.push(B.fullPath,Le)),l.value=B,ye(B,ie,re,O),ve()}let X;function oe(){X||(X=s.listen((B,ie,re)=>{if(!pe.listening)return;const he=d(B),Le=P(he,pe.currentRoute.value);if(Le){w(ht(Le,{replace:!0,force:!0}),he).catch(Lo);return}c=he;const D=l.value;br&&Gy(cd(D.fullPath,re.delta),Fl()),b(he,D).catch(O=>Ni(O,Dt.NAVIGATION_ABORTED|Dt.NAVIGATION_CANCELLED)?O:Ni(O,Dt.NAVIGATION_GUARD_REDIRECT)?(w(ht(x(O.to),{force:!0}),he).then(S=>{Ni(S,Dt.NAVIGATION_ABORTED|Dt.NAVIGATION_DUPLICATED)&&!re.delta&&re.type===du.pop&&s.go(-1,!1)}).catch(Lo),Promise.reject()):(re.delta&&s.go(-re.delta,!1),Y(O,he,D))).then(O=>{O=O||H(he,D,!1),O&&(re.delta&&!Ni(O,Dt.NAVIGATION_CANCELLED)?s.go(-re.delta,!1):re.type===du.pop&&Ni(O,Dt.NAVIGATION_ABORTED|Dt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),U(he,D,O)}).catch(Lo)}))}let ae=co(),ee=co(),se;function Y(B,ie,re){ve(B);const he=ee.list();return he.length?he.forEach(Le=>Le(B,ie,re)):console.error(B),Promise.reject(B)}function me(){return se&&l.value!==rs?Promise.resolve():new Promise((B,ie)=>{ae.add([B,ie])})}function ve(B){return se||(se=!B,oe(),ae.list().forEach(([ie,re])=>B?re(B):ie()),ae.reset()),B}function ye(B,ie,re,he){const{scrollBehavior:Le}=n;if(!br||!Le)return Promise.resolve();const D=!re&&zy(cd(B.fullPath,0))||(he||!re)&&history.state&&history.state.scroll||null;return lg().then(()=>Le(B,ie,D)).then(O=>O&&Vy(O)).catch(O=>Y(O,B,ie))}const Ne=B=>s.go(B);let Oe;const ne=new Set,pe={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:d,options:n,push:v,replace:C,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:me,install(B){B.component("RouterLink",ds),B.component("RouterView",_E),B.config.globalProperties.$router=pe,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(l)}),br&&!Oe&&l.value===rs&&(Oe=!0,v(s.location).catch(he=>{}));const ie={};for(const he in rs)Object.defineProperty(ie,he,{get:()=>l.value[he],enumerable:!0});B.provide(Uf,pe),B.provide(Ff,ig(ie)),B.provide(fu,l);const re=B.unmount;ne.add(B),B.unmount=function(){ne.delete(B),ne.size<1&&(c=rs,X&&X(),X=null,l.value=rs,Oe=!1,se=!1),re()}}};function xe(B){return B.reduce((ie,re)=>ie.then(()=>T(re)),Promise.resolve())}return pe}/*!
  * shared v11.3.0
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function xE(n,e){typeof console<"u"&&(console.warn("[intlify] "+n),e&&console.warn(e.stack))}const ml=typeof window<"u",Ts=(n,e=!1)=>e?Symbol.for(n):Symbol(n),yE=(n,e,t)=>EE({l:n,k:e,s:t}),EE=n=>JSON.stringify(n).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Vt=n=>typeof n=="number"&&isFinite(n),a_=n=>Bf(n)==="[object Date]",Hr=n=>Bf(n)==="[object RegExp]",kl=n=>it(n)&&Object.keys(n).length===0,Wt=Object.assign,ME=Object.create,St=(n=null)=>ME(n);let Ed;const js=()=>Ed||(Ed=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:St());function Md(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Sd(n){return n.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function SE(n){return n=n.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,s,r)=>`${s}="${Sd(r)}"`),n=n.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,s,r)=>`${s}='${Sd(r)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(n)&&(n=n.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{n=n.replace(i,"$1javascript&#58;")}),n}const bE=Object.prototype.hasOwnProperty;function zn(n,e){return bE.call(n,e)}const Ot=Array.isArray,Pt=n=>typeof n=="function",Ce=n=>typeof n=="string",ot=n=>typeof n=="boolean",mt=n=>n!==null&&typeof n=="object",TE=n=>mt(n)&&Pt(n.then)&&Pt(n.catch),l_=Object.prototype.toString,Bf=n=>l_.call(n),it=n=>Bf(n)==="[object Object]",AE=n=>n==null?"":Ot(n)||it(n)&&n.toString===l_?JSON.stringify(n,null,2):String(n);function Hf(n,e=""){return n.reduce((t,i,s)=>s===0?t+i:t+e+i,"")}const va=n=>!mt(n)||Ot(n);function Qa(n,e){if(va(n)||va(e))throw new Error("Invalid value");const t=[{src:n,des:e}];for(;t.length;){const{src:i,des:s}=t.pop();Object.keys(i).forEach(r=>{r!=="__proto__"&&(mt(i[r])&&!mt(s[r])&&(s[r]=Array.isArray(i[r])?[]:St()),va(s[r])||va(i[r])?s[r]=i[r]:t.push({src:i[r],des:s[r]}))})}}/*!
  * message-compiler v11.3.0
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function wE(n,e,t){return{line:n,column:e,offset:t}}function mu(n,e,t){return{start:n,end:e}}const dt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},RE=17;function Bl(n,e,t={}){const{domain:i,messages:s,args:r}=t,o=n,a=new SyntaxError(String(o));return a.code=n,e&&(a.location=e),a.domain=i,a}function CE(n){throw n}const hi=" ",PE="\r",rn=`
`,LE="\u2028",IE="\u2029";function DE(n){const e=n;let t=0,i=1,s=1,r=0;const o=w=>e[w]===PE&&e[w+1]===rn,a=w=>e[w]===rn,l=w=>e[w]===IE,c=w=>e[w]===LE,u=w=>o(w)||a(w)||l(w)||c(w),f=()=>t,h=()=>i,p=()=>s,g=()=>r,_=w=>o(w)||l(w)||c(w)?rn:e[w],m=()=>_(t),d=()=>_(t+r);function x(){return r=0,u(t)&&(i++,s=0),o(t)&&t++,t++,s++,e[t]}function M(){return o(t+r)&&r++,r++,e[t+r]}function v(){t=0,i=1,s=1,r=0}function C(w=0){r=w}function P(){const w=t+r;for(;w!==t;)x();r=0}return{index:f,line:h,column:p,peekOffset:g,charAt:_,currentChar:m,currentPeek:d,next:x,peek:M,reset:v,resetPeek:C,skipToPeek:P}}const Oi=void 0,NE=".",bd="'",OE="tokenizer";function UE(n,e={}){const t=e.location!==!1,i=DE(n),s=()=>i.index(),r=()=>wE(i.line(),i.column(),i.index()),o=r(),a=s(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(A,L,F,...y){const E=c();if(L.column+=F,L.offset+=F,u){const N=t?mu(E.startLoc,L):null,I=Bl(A,N,{domain:OE,args:y});u(I)}}function h(A,L,F){A.endLoc=r(),A.currentType=L;const y={type:L};return t&&(y.loc=mu(A.startLoc,A.endLoc)),F!=null&&(y.value=F),y}const p=A=>h(A,13);function g(A,L){return A.currentChar()===L?(A.next(),L):(f(dt.EXPECTED_TOKEN,r(),0,L),"")}function _(A){let L="";for(;A.currentPeek()===hi||A.currentPeek()===rn;)L+=A.currentPeek(),A.peek();return L}function m(A){const L=_(A);return A.skipToPeek(),L}function d(A){if(A===Oi)return!1;const L=A.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L===95}function x(A){if(A===Oi)return!1;const L=A.charCodeAt(0);return L>=48&&L<=57}function M(A,L){const{currentType:F}=L;if(F!==2)return!1;_(A);const y=d(A.currentPeek());return A.resetPeek(),y}function v(A,L){const{currentType:F}=L;if(F!==2)return!1;_(A);const y=A.currentPeek()==="-"?A.peek():A.currentPeek(),E=x(y);return A.resetPeek(),E}function C(A,L){const{currentType:F}=L;if(F!==2)return!1;_(A);const y=A.currentPeek()===bd;return A.resetPeek(),y}function P(A,L){const{currentType:F}=L;if(F!==7)return!1;_(A);const y=A.currentPeek()===".";return A.resetPeek(),y}function w(A,L){const{currentType:F}=L;if(F!==8)return!1;_(A);const y=d(A.currentPeek());return A.resetPeek(),y}function V(A,L){const{currentType:F}=L;if(!(F===7||F===11))return!1;_(A);const y=A.currentPeek()===":";return A.resetPeek(),y}function T(A,L){const{currentType:F}=L;if(F!==9)return!1;const y=()=>{const N=A.currentPeek();return N==="{"?d(A.peek()):N==="@"||N==="|"||N===":"||N==="."||N===hi||!N?!1:N===rn?(A.peek(),y()):U(A,!1)},E=y();return A.resetPeek(),E}function b(A){_(A);const L=A.currentPeek()==="|";return A.resetPeek(),L}function U(A,L=!0){const F=(E=!1,N="")=>{const I=A.currentPeek();return I==="{"||I==="@"||!I?E:I==="|"?!(N===hi||N===rn):I===hi?(A.peek(),F(!0,hi)):I===rn?(A.peek(),F(!0,rn)):!0},y=F();return L&&A.resetPeek(),y}function H(A,L){const F=A.currentChar();return F===Oi?Oi:L(F)?(A.next(),F):null}function X(A){const L=A.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L>=48&&L<=57||L===95||L===36}function oe(A){return H(A,X)}function ae(A){const L=A.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L>=48&&L<=57||L===95||L===36||L===45}function ee(A){return H(A,ae)}function se(A){const L=A.charCodeAt(0);return L>=48&&L<=57}function Y(A){return H(A,se)}function me(A){const L=A.charCodeAt(0);return L>=48&&L<=57||L>=65&&L<=70||L>=97&&L<=102}function ve(A){return H(A,me)}function ye(A){let L="",F="";for(;L=Y(A);)F+=L;return F}function Ne(A){let L="";for(;;){const F=A.currentChar();if(F==="\\"){const y=A.peek();y==="{"||y==="}"||y==="@"||y==="|"||y==="\\"?(L+=F+y,A.next(),A.next()):(A.resetPeek(),L+=F,A.next())}else{if(F==="{"||F==="}"||F==="@"||F==="|"||!F)break;if(F===hi||F===rn)if(U(A))L+=F,A.next();else{if(b(A))break;L+=F,A.next()}else L+=F,A.next()}}return L}function Oe(A){m(A);let L="",F="";for(;L=ee(A);)F+=L;const y=A.currentChar();if(y&&y!=="}"&&y!==Oi&&y!==hi&&y!==rn&&y!=="　"){const E=he(A);return f(dt.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,F+E),F+E}return A.currentChar()===Oi&&f(dt.UNTERMINATED_CLOSING_BRACE,r(),0),F}function ne(A){m(A);let L="";return A.currentChar()==="-"?(A.next(),L+=`-${ye(A)}`):L+=ye(A),A.currentChar()===Oi&&f(dt.UNTERMINATED_CLOSING_BRACE,r(),0),L}function pe(A){return A!==bd&&A!==rn}function xe(A){m(A),g(A,"'");let L="",F="";for(;L=H(A,pe);)L==="\\"?F+=B(A):F+=L;const y=A.currentChar();return y===rn||y===Oi?(f(dt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,r(),0),y===rn&&(A.next(),g(A,"'")),F):(g(A,"'"),F)}function B(A){const L=A.currentChar();switch(L){case"\\":case"'":return A.next(),`\\${L}`;case"u":return ie(A,L,4);case"U":return ie(A,L,6);default:return f(dt.UNKNOWN_ESCAPE_SEQUENCE,r(),0,L),""}}function ie(A,L,F){g(A,L);let y="";for(let E=0;E<F;E++){const N=ve(A);if(!N){f(dt.INVALID_UNICODE_ESCAPE_SEQUENCE,r(),0,`\\${L}${y}${A.currentChar()}`);break}y+=N}return`\\${L}${y}`}function re(A){return A!=="{"&&A!=="}"&&A!==hi&&A!==rn}function he(A){m(A);let L="",F="";for(;L=H(A,re);)F+=L;return F}function Le(A){let L="",F="";for(;L=oe(A);)F+=L;return F}function D(A){const L=F=>{const y=A.currentChar();return y==="{"||y==="@"||y==="|"||y==="("||y===")"||!y||y===hi?F:(F+=y,A.next(),L(F))};return L("")}function O(A){m(A);const L=g(A,"|");return m(A),L}function S(A,L){let F=null;switch(A.currentChar()){case"{":return L.braceNest>=1&&f(dt.NOT_ALLOW_NEST_PLACEHOLDER,r(),0),A.next(),F=h(L,2,"{"),m(A),L.braceNest++,F;case"}":return L.braceNest>0&&L.currentType===2&&f(dt.EMPTY_PLACEHOLDER,r(),0),A.next(),F=h(L,3,"}"),L.braceNest--,L.braceNest>0&&m(A),L.inLinked&&L.braceNest===0&&(L.inLinked=!1),F;case"@":return L.braceNest>0&&f(dt.UNTERMINATED_CLOSING_BRACE,r(),0),F=te(A,L)||p(L),L.braceNest=0,F;default:{let E=!0,N=!0,I=!0;if(b(A))return L.braceNest>0&&f(dt.UNTERMINATED_CLOSING_BRACE,r(),0),F=h(L,1,O(A)),L.braceNest=0,L.inLinked=!1,F;if(L.braceNest>0&&(L.currentType===4||L.currentType===5||L.currentType===6))return f(dt.UNTERMINATED_CLOSING_BRACE,r(),0),L.braceNest=0,Z(A,L);if(E=M(A,L))return F=h(L,4,Oe(A)),m(A),F;if(N=v(A,L))return F=h(L,5,ne(A)),m(A),F;if(I=C(A,L))return F=h(L,6,xe(A)),m(A),F;if(!E&&!N&&!I)return F=h(L,12,he(A)),f(dt.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,F.value),m(A),F;break}}return F}function te(A,L){const{currentType:F}=L;let y=null;const E=A.currentChar();switch((F===7||F===8||F===11||F===9)&&(E===rn||E===hi)&&f(dt.INVALID_LINKED_FORMAT,r(),0),E){case"@":return A.next(),y=h(L,7,"@"),L.inLinked=!0,y;case".":return m(A),A.next(),h(L,8,".");case":":return m(A),A.next(),h(L,9,":");default:return b(A)?(y=h(L,1,O(A)),L.braceNest=0,L.inLinked=!1,y):P(A,L)||V(A,L)?(m(A),te(A,L)):w(A,L)?(m(A),h(L,11,Le(A))):T(A,L)?(m(A),E==="{"?S(A,L)||y:h(L,10,D(A))):(F===7&&f(dt.INVALID_LINKED_FORMAT,r(),0),L.braceNest=0,L.inLinked=!1,Z(A,L))}}function Z(A,L){let F={type:13};if(L.braceNest>0)return S(A,L)||p(L);if(L.inLinked)return te(A,L)||p(L);switch(A.currentChar()){case"{":return S(A,L)||p(L);case"}":return f(dt.UNBALANCED_CLOSING_BRACE,r(),0),A.next(),h(L,3,"}");case"@":return te(A,L)||p(L);default:{if(b(A))return F=h(L,1,O(A)),L.braceNest=0,L.inLinked=!1,F;if(U(A))return h(L,0,Ne(A));break}}return F}function K(){const{currentType:A,offset:L,startLoc:F,endLoc:y}=l;return l.lastType=A,l.lastOffset=L,l.lastStartLoc=F,l.lastEndLoc=y,l.offset=s(),l.startLoc=r(),i.currentChar()===Oi?h(l,13):Z(i,l)}return{nextToken:K,currentOffset:s,currentPosition:r,context:c}}const FE="parser",kE=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,BE=/\\([\\@{}|])/g;function HE(n,e){return e}function VE(n,e,t){switch(n){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||t,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function GE(n={}){const e=n.location!==!1,{onError:t}=n;function i(d,x,M,v,...C){const P=d.currentPosition();if(P.offset+=v,P.column+=v,t){const w=e?mu(M,P):null,V=Bl(x,w,{domain:FE,args:C});t(V)}}function s(d,x,M){const v={type:d};return e&&(v.start=x,v.end=x,v.loc={start:M,end:M}),v}function r(d,x,M,v){e&&(d.end=x,d.loc&&(d.loc.end=M))}function o(d,x){const M=d.context(),v=s(3,M.offset,M.startLoc);return v.value=x.replace(BE,HE),r(v,d.currentOffset(),d.currentPosition()),v}function a(d,x){const M=d.context(),{lastOffset:v,lastStartLoc:C}=M,P=s(5,v,C);return P.index=parseInt(x,10),d.nextToken(),r(P,d.currentOffset(),d.currentPosition()),P}function l(d,x){const M=d.context(),{lastOffset:v,lastStartLoc:C}=M,P=s(4,v,C);return P.key=x,d.nextToken(),r(P,d.currentOffset(),d.currentPosition()),P}function c(d,x){const M=d.context(),{lastOffset:v,lastStartLoc:C}=M,P=s(9,v,C);return P.value=x.replace(kE,VE),d.nextToken(),r(P,d.currentOffset(),d.currentPosition()),P}function u(d){const x=d.nextToken(),M=d.context(),{lastOffset:v,lastStartLoc:C}=M,P=s(8,v,C);return x.type!==11?(i(d,dt.UNEXPECTED_EMPTY_LINKED_MODIFIER,M.lastStartLoc,0),P.value="",r(P,v,C),{nextConsumeToken:x,node:P}):(x.value==null&&i(d,dt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,di(x)),P.value=x.value||"",r(P,d.currentOffset(),d.currentPosition()),{node:P})}function f(d,x){const M=d.context(),v=s(7,M.offset,M.startLoc);return v.value=x,r(v,d.currentOffset(),d.currentPosition()),v}function h(d){const x=d.context(),M=s(6,x.offset,x.startLoc);let v=d.nextToken();if(v.type===8){const C=u(d);M.modifier=C.node,v=C.nextConsumeToken||d.nextToken()}switch(v.type!==9&&i(d,dt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,di(v)),v=d.nextToken(),v.type===2&&(v=d.nextToken()),v.type){case 10:v.value==null&&i(d,dt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,di(v)),M.key=f(d,v.value||"");break;case 4:v.value==null&&i(d,dt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,di(v)),M.key=l(d,v.value||"");break;case 5:v.value==null&&i(d,dt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,di(v)),M.key=a(d,v.value||"");break;case 6:v.value==null&&i(d,dt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,di(v)),M.key=c(d,v.value||"");break;default:{i(d,dt.UNEXPECTED_EMPTY_LINKED_KEY,x.lastStartLoc,0);const C=d.context(),P=s(7,C.offset,C.startLoc);return P.value="",r(P,C.offset,C.startLoc),M.key=P,r(M,C.offset,C.startLoc),{nextConsumeToken:v,node:M}}}return r(M,d.currentOffset(),d.currentPosition()),{node:M}}function p(d){const x=d.context(),M=x.currentType===1?d.currentOffset():x.offset,v=x.currentType===1?x.endLoc:x.startLoc,C=s(2,M,v);C.items=[];let P=null;do{const T=P||d.nextToken();switch(P=null,T.type){case 0:T.value==null&&i(d,dt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,di(T)),C.items.push(o(d,T.value||""));break;case 5:T.value==null&&i(d,dt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,di(T)),C.items.push(a(d,T.value||""));break;case 4:T.value==null&&i(d,dt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,di(T)),C.items.push(l(d,T.value||""));break;case 6:T.value==null&&i(d,dt.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,di(T)),C.items.push(c(d,T.value||""));break;case 7:{const b=h(d);C.items.push(b.node),P=b.nextConsumeToken||null;break}}}while(x.currentType!==13&&x.currentType!==1);const w=x.currentType===1?x.lastOffset:d.currentOffset(),V=x.currentType===1?x.lastEndLoc:d.currentPosition();return r(C,w,V),C}function g(d,x,M,v){const C=d.context();let P=v.items.length===0;const w=s(1,x,M);w.cases=[],w.cases.push(v);do{const V=p(d);P||(P=V.items.length===0),w.cases.push(V)}while(C.currentType!==13);return P&&i(d,dt.MUST_HAVE_MESSAGES_IN_PLURAL,M,0),r(w,d.currentOffset(),d.currentPosition()),w}function _(d){const x=d.context(),{offset:M,startLoc:v}=x,C=p(d);return x.currentType===13?C:g(d,M,v,C)}function m(d){const x=UE(d,Wt({},n)),M=x.context(),v=s(0,M.offset,M.startLoc);return e&&v.loc&&(v.loc.source=d),v.body=_(x),n.onCacheKey&&(v.cacheKey=n.onCacheKey(d)),M.currentType!==13&&i(x,dt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,d[M.offset]||""),r(v,x.currentOffset(),x.currentPosition()),v}return{parse:m}}function di(n){if(n.type===13)return"EOF";const e=(n.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function zE(n,e={}){const t={ast:n,helpers:new Set};return{context:()=>t,helper:r=>(t.helpers.add(r),r)}}function Td(n,e){for(let t=0;t<n.length;t++)Vf(n[t],e)}function Vf(n,e){switch(n.type){case 1:Td(n.cases,e),e.helper("plural");break;case 2:Td(n.items,e);break;case 6:{Vf(n.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function WE(n,e={}){const t=zE(n);t.helper("normalize"),n.body&&Vf(n.body,t);const i=t.context();n.helpers=Array.from(i.helpers)}function XE(n){const e=n.body;return e.type===2?Ad(e):e.cases.forEach(t=>Ad(t)),n}function Ad(n){if(n.items.length===1){const e=n.items[0];(e.type===3||e.type===9)&&(n.static=e.value,delete e.value)}else{const e=[];for(let t=0;t<n.items.length;t++){const i=n.items[t];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===n.items.length){n.static=Hf(e);for(let t=0;t<n.items.length;t++){const i=n.items[t];(i.type===3||i.type===9)&&delete i.value}}}}function Tr(n){switch(n.t=n.type,n.type){case 0:{const e=n;Tr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=n,t=e.cases;for(let i=0;i<t.length;i++)Tr(t[i]);e.c=t,delete e.cases;break}case 2:{const e=n,t=e.items;for(let i=0;i<t.length;i++)Tr(t[i]);e.i=t,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=n;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=n;Tr(e.key),e.k=e.key,delete e.key,e.modifier&&(Tr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=n;e.i=e.index,delete e.index;break}case 4:{const e=n;e.k=e.key,delete e.key;break}}delete n.type}function $E(n,e){const{filename:t,breakLineCode:i,needIndent:s}=e,r=e.location!==!1,o={filename:t,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:s,indentLevel:0};r&&n.loc&&(o.source=n.loc.source);const a=()=>o;function l(_,m){o.code+=_}function c(_,m=!0){const d=m?i:"";l(s?d+"  ".repeat(_):d)}function u(_=!0){const m=++o.indentLevel;_&&c(m)}function f(_=!0){const m=--o.indentLevel;_&&c(m)}function h(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:h,helper:_=>`_${_}`,needIndent:()=>o.needIndent}}function jE(n,e){const{helper:t}=n;n.push(`${t("linked")}(`),Vr(n,e.key),e.modifier?(n.push(", "),Vr(n,e.modifier),n.push(", _type")):n.push(", undefined, _type"),n.push(")")}function YE(n,e){const{helper:t,needIndent:i}=n;n.push(`${t("normalize")}([`),n.indent(i());const s=e.items.length;for(let r=0;r<s&&(Vr(n,e.items[r]),r!==s-1);r++)n.push(", ");n.deindent(i()),n.push("])")}function KE(n,e){const{helper:t,needIndent:i}=n;if(e.cases.length>1){n.push(`${t("plural")}([`),n.indent(i());const s=e.cases.length;for(let r=0;r<s&&(Vr(n,e.cases[r]),r!==s-1);r++)n.push(", ");n.deindent(i()),n.push("])")}}function qE(n,e){e.body?Vr(n,e.body):n.push("null")}function Vr(n,e){const{helper:t}=n;switch(e.type){case 0:qE(n,e);break;case 1:KE(n,e);break;case 2:YE(n,e);break;case 6:jE(n,e);break;case 8:n.push(JSON.stringify(e.value),e);break;case 7:n.push(JSON.stringify(e.value),e);break;case 5:n.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:n.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:n.push(JSON.stringify(e.value),e);break;case 3:n.push(JSON.stringify(e.value),e);break}}const ZE=(n,e={})=>{const t=Ce(e.mode)?e.mode:"normal",i=Ce(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,r=e.needIndent?e.needIndent:t!=="arrow",o=n.helpers||[],a=$E(n,{filename:i,breakLineCode:s,needIndent:r});a.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(r),o.length>0&&(a.push(`const { ${Hf(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),Vr(a,n),a.deindent(r),a.push("}"),delete n.helpers;const{code:l,map:c}=a.context();return{ast:n,code:l,map:c?c.toJSON():void 0}};function JE(n,e={}){const t=Wt({},e),i=!!t.jit,s=!!t.minify,r=t.optimize==null?!0:t.optimize,a=GE(t).parse(n);return i?(r&&XE(a),s&&Tr(a),{ast:a,code:""}):(WE(a,t),ZE(a,t))}/*!
  * core-base v11.3.0
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function QE(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(js().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(js().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Mi(n){return mt(n)&&Gf(n)===0&&(zn(n,"b")||zn(n,"body"))}const c_=["b","body"];function eM(n){return As(n,c_)}const u_=["c","cases"];function tM(n){return As(n,u_,[])}const f_=["s","static"];function nM(n){return As(n,f_)}const h_=["i","items"];function iM(n){return As(n,h_,[])}const d_=["t","type"];function Gf(n){return As(n,d_)}const p_=["v","value"];function xa(n,e){const t=As(n,p_);if(t!=null)return t;throw Wo(e)}const m_=["m","modifier"];function sM(n){return As(n,m_)}const g_=["k","key"];function rM(n){const e=As(n,g_);if(e)return e;throw Wo(6)}function As(n,e,t){for(let i=0;i<e.length;i++){const s=e[i];if(zn(n,s)&&n[s]!=null)return n[s]}return t}const __=[...c_,...u_,...f_,...h_,...g_,...m_,...p_,...d_];function Wo(n){return new Error(`unhandled node type: ${n}`)}function uc(n){return t=>oM(t,n)}function oM(n,e){const t=eM(e);if(t==null)throw Wo(0);if(Gf(t)===1){const r=tM(t);return n.plural(r.reduce((o,a)=>[...o,wd(n,a)],[]))}else return wd(n,t)}function wd(n,e){const t=nM(e);if(t!=null)return n.type==="text"?t:n.normalize([t]);{const i=iM(e).reduce((s,r)=>[...s,gu(n,r)],[]);return n.normalize(i)}}function gu(n,e){const t=Gf(e);switch(t){case 3:return xa(e,t);case 9:return xa(e,t);case 4:{const i=e;if(zn(i,"k")&&i.k)return n.interpolate(n.named(i.k));if(zn(i,"key")&&i.key)return n.interpolate(n.named(i.key));throw Wo(t)}case 5:{const i=e;if(zn(i,"i")&&Vt(i.i))return n.interpolate(n.list(i.i));if(zn(i,"index")&&Vt(i.index))return n.interpolate(n.list(i.index));throw Wo(t)}case 6:{const i=e,s=sM(i),r=rM(i);return n.linked(gu(n,r),s?gu(n,s):void 0,n.type)}case 7:return xa(e,t);case 8:return xa(e,t);default:throw new Error(`unhandled node on format message part: ${t}`)}}const aM=n=>n;let ya=St();function lM(n,e={}){let t=!1;const i=e.onError||CE;return e.onError=s=>{t=!0,i(s)},{...JE(n,e),detectError:t}}function cM(n,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Ce(n)){ot(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||aM)(n),s=ya[i];if(s)return s;const{ast:r,detectError:o}=lM(n,{...e,location:!1,jit:!0}),a=uc(r);return o?a:ya[i]=a}else{const t=n.cacheKey;if(t){const i=ya[t];return i||(ya[t]=uc(n))}else return uc(n)}}let Xo=null;function uM(n){Xo=n}function fM(n,e,t){Xo&&Xo.emit("i18n:init",{timestamp:Date.now(),i18n:n,version:e,meta:t})}const hM=dM("function:translate");function dM(n){return e=>Xo&&Xo.emit(n,e)}const ji={INVALID_ARGUMENT:RE,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},pM=24;function Yi(n){return Bl(n,null,void 0)}function zf(n,e){return e.locale!=null?Rd(e.locale):Rd(n.locale)}let fc;function Rd(n){if(Ce(n))return n;if(Pt(n)){if(n.resolvedOnce&&fc!=null)return fc;if(n.constructor.name==="Function"){const e=n();if(TE(e))throw Yi(ji.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return fc=e}else throw Yi(ji.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Yi(ji.NOT_SUPPORT_LOCALE_TYPE)}function mM(n,e,t){return[...new Set([t,...Ot(e)?e:mt(e)?Object.keys(e):Ce(e)?[e]:[t]])]}function _u(n,e,t){const i=Ce(t)?t:$o,s=n;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(i);if(!r){r=[];let o=[t];for(;Ot(o);)o=Cd(r,o,e);const a=Ot(e)||!it(e)?e:e.default?e.default:null;o=Ce(a)?[a]:a,Ot(o)&&Cd(r,o,!1),s.__localeChainCache.set(i,r)}return r}function Cd(n,e,t){let i=!0;for(let s=0;s<e.length&&ot(i);s++){const r=e[s];Ce(r)&&(i=gM(n,e[s],t))}return i}function gM(n,e,t){let i;const s=e.split("-");do{const r=s.join("-");i=_M(n,r,t),s.splice(-1,1)}while(s.length&&i===!0);return i}function _M(n,e,t){let i=!1;if(!n.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const s=e.replace(/!/g,"");n.push(s),(Ot(t)||it(t))&&t[s]&&(i=t[s])}return i}const ws=[];ws[0]={w:[0],i:[3,0],"[":[4],o:[7]};ws[1]={w:[1],".":[2],"[":[4],o:[7]};ws[2]={w:[2],i:[3,0],0:[3,0]};ws[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ws[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ws[5]={"'":[4,0],o:8,l:[5,0]};ws[6]={'"':[4,0],o:8,l:[6,0]};const vM=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function xM(n){return vM.test(n)}function yM(n){const e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e===t&&(e===34||e===39)?n.slice(1,-1):n}function EM(n){if(n==null)return"o";switch(n.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return n;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function MM(n){const e=n.trim();return n.charAt(0)==="0"&&isNaN(parseInt(n))?!1:xM(e)?yM(e):"*"+e}function SM(n){const e=[];let t=-1,i=0,s=0,r,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),s++},h[3]=()=>{if(s>0)s--,i=4,h[0]();else{if(s=0,o===void 0||(o=MM(o),o===!1))return!1;h[1]()}};function p(){const g=n[t+1];if(i===5&&g==="'"||i===6&&g==='"')return t++,a="\\"+g,h[0](),!0}for(;i!==null;)if(t++,r=n[t],!(r==="\\"&&p())){if(l=EM(r),f=ws[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=r,u()===!1))))return;if(i===7)return e}}const Pd=new Map;function bM(n,e){return mt(n)?n[e]:null}function TM(n,e){if(!mt(n))return null;let t=Pd.get(e);if(t||(t=SM(e),t&&Pd.set(e,t)),!t)return null;const i=t.length;let s=n,r=0;for(;r<i;){const o=t[r];if(__.includes(o)&&Mi(s)||!mt(s)||!zn(s,o))return null;const a=s[o];if(a===void 0||Pt(s))return null;s=a,r++}return s}const AM="11.3.0",Hl=-1,$o="en-US",gl="",Ld=n=>`${n.charAt(0).toLocaleUpperCase()}${n.substr(1)}`;function wM(){return{upper:(n,e)=>e==="text"&&Ce(n)?n.toUpperCase():e==="vnode"&&mt(n)&&"__v_isVNode"in n?n.children.toUpperCase():n,lower:(n,e)=>e==="text"&&Ce(n)?n.toLowerCase():e==="vnode"&&mt(n)&&"__v_isVNode"in n?n.children.toLowerCase():n,capitalize:(n,e)=>e==="text"&&Ce(n)?Ld(n):e==="vnode"&&mt(n)&&"__v_isVNode"in n?Ld(n.children):n}}let v_;function RM(n){v_=n}let x_;function CM(n){x_=n}let y_;function PM(n){y_=n}let E_=null;const LM=n=>{E_=n},IM=()=>E_;let M_=null;const Id=n=>{M_=n},DM=()=>M_;let Dd=0;function NM(n={}){const e=Pt(n.onWarn)?n.onWarn:xE,t=Ce(n.version)?n.version:AM,i=Ce(n.locale)||Pt(n.locale)?n.locale:$o,s=Pt(i)?$o:i,r=Ot(n.fallbackLocale)||it(n.fallbackLocale)||Ce(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:s,o=it(n.messages)?n.messages:hc(s),a=it(n.datetimeFormats)?n.datetimeFormats:hc(s),l=it(n.numberFormats)?n.numberFormats:hc(s),c=Wt(St(),n.modifiers,wM()),u=n.pluralRules||St(),f=Pt(n.missing)?n.missing:null,h=ot(n.missingWarn)||Hr(n.missingWarn)?n.missingWarn:!0,p=ot(n.fallbackWarn)||Hr(n.fallbackWarn)?n.fallbackWarn:!0,g=!!n.fallbackFormat,_=!!n.unresolving,m=Pt(n.postTranslation)?n.postTranslation:null,d=it(n.processor)?n.processor:null,x=ot(n.warnHtmlMessage)?n.warnHtmlMessage:!0,M=!!n.escapeParameter,v=Pt(n.messageCompiler)?n.messageCompiler:v_,C=Pt(n.messageResolver)?n.messageResolver:x_||bM,P=Pt(n.localeFallbacker)?n.localeFallbacker:y_||mM,w=mt(n.fallbackContext)?n.fallbackContext:void 0,V=n,T=mt(V.__datetimeFormatters)?V.__datetimeFormatters:new Map,b=mt(V.__numberFormatters)?V.__numberFormatters:new Map,U=mt(V.__meta)?V.__meta:{};Dd++;const H={version:t,cid:Dd,locale:i,fallbackLocale:r,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:g,unresolving:_,postTranslation:m,processor:d,warnHtmlMessage:x,escapeParameter:M,messageCompiler:v,messageResolver:C,localeFallbacker:P,fallbackContext:w,onWarn:e,__meta:U};return H.datetimeFormats=a,H.numberFormats=l,H.__datetimeFormatters=T,H.__numberFormatters=b,__INTLIFY_PROD_DEVTOOLS__&&fM(H,t,U),H}const hc=n=>({[n]:St()});function Wf(n,e,t,i,s){const{missing:r,onWarn:o}=n;if(r!==null){const a=r(n,t,e,s);return Ce(a)?a:e}else return e}function uo(n,e,t){const i=n;i.__localeChainCache=new Map,n.localeFallbacker(n,t,e)}function OM(n,e){return n===e?!1:n.split("-")[0]===e.split("-")[0]}function UM(n,e){const t=e.indexOf(n);if(t===-1)return!1;for(let i=t+1;i<e.length;i++)if(OM(n,e[i]))return!0;return!1}function Nd(n,...e){const{datetimeFormats:t,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:o}=n,{__datetimeFormatters:a}=n;if(!Ce(e[0])&&!a_(e[0])&&!Vt(e[0]))return gl;const[l,c,u,f]=vu(...e),h=ot(u.missingWarn)?u.missingWarn:n.missingWarn;ot(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const p=!!u.part,g=zf(n,u),_=o(n,s,g);if(!Ce(l)||l==="")return new Intl.DateTimeFormat(g.replace(/!/g,""),f).format(c);let m={},d,x=null;const M="datetime format";for(let P=0;P<_.length&&(d=_[P],m=t[d]||{},x=m[l],!it(x));P++)Wf(n,l,d,h,M);if(!it(x)||!Ce(d))return i?Hl:l;let v=`${d}__${l}`;kl(f)||(v=`${v}__${JSON.stringify(f)}`);let C=a.get(v);return C||(C=new Intl.DateTimeFormat(d,Wt({},x,f)),a.set(v,C)),p?C.formatToParts(c):C.format(c)}const S_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function vu(...n){const[e,t,i,s]=n,r=St();let o=St(),a;if(Ce(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Yi(ji.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Yi(ji.INVALID_ISO_DATE_ARGUMENT)}}else if(a_(e)){if(isNaN(e.getTime()))throw Yi(ji.INVALID_DATE_ARGUMENT);a=e}else if(Vt(e))a=e;else throw Yi(ji.INVALID_ARGUMENT);return Ce(t)?r.key=t:it(t)&&Object.keys(t).forEach(l=>{S_.includes(l)?o[l]=t[l]:r[l]=t[l]}),Ce(i)?r.locale=i:it(i)&&(o=i),it(s)&&(o=s),[r.key||"",a,r,o]}function Od(n,e,t){const i=n;for(const s in t){const r=`${e}__${s}`;i.__datetimeFormatters.has(r)&&i.__datetimeFormatters.delete(r)}}function Ud(n,...e){const{numberFormats:t,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:o}=n,{__numberFormatters:a}=n;if(!Vt(e[0]))return gl;const[l,c,u,f]=xu(...e),h=ot(u.missingWarn)?u.missingWarn:n.missingWarn;ot(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const p=!!u.part,g=zf(n,u),_=o(n,s,g);if(!Ce(l)||l==="")return new Intl.NumberFormat(g.replace(/!/g,""),f).format(c);let m={},d,x=null;const M="number format";for(let P=0;P<_.length&&(d=_[P],m=t[d]||{},x=m[l],!it(x));P++)Wf(n,l,d,h,M);if(!it(x)||!Ce(d))return i?Hl:l;let v=`${d}__${l}`;kl(f)||(v=`${v}__${JSON.stringify(f)}`);let C=a.get(v);return C||(C=new Intl.NumberFormat(d,Wt({},x,f)),a.set(v,C)),p?C.formatToParts(c):C.format(c)}const b_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function xu(...n){const[e,t,i,s]=n,r=St();let o=St();if(!Vt(e))throw Yi(ji.INVALID_ARGUMENT);const a=e;return Ce(t)?r.key=t:it(t)&&Object.keys(t).forEach(l=>{b_.includes(l)?o[l]=t[l]:r[l]=t[l]}),Ce(i)?r.locale=i:it(i)&&(o=i),it(s)&&(o=s),[r.key||"",a,r,o]}function Fd(n,e,t){const i=n;for(const s in t){const r=`${e}__${s}`;i.__numberFormatters.has(r)&&i.__numberFormatters.delete(r)}}const FM=n=>n,kM=n=>"",BM="text",HM=n=>n.length===0?"":Hf(n),VM=AE;function dc(n,e){return n=Math.abs(n),e===2?n===1?0:1:Math.min(n,2)}function GM(n){var t,i;const e=Vt(n.pluralIndex)?n.pluralIndex:-1;return Vt((t=n.named)==null?void 0:t.count)?n.named.count:Vt((i=n.named)==null?void 0:i.n)?n.named.n:e}function zM(n={}){var d,x,M,v;const e=n.locale,t=GM(n),i=Ce(e)&&Pt((d=n.pluralRules)==null?void 0:d[e])?n.pluralRules[e]:dc,s=i===dc?void 0:dc,r=C=>C[i(t,C.length,s)],o=n.list||[],a=C=>o[C],l=n.named||St();Vt(n.pluralIndex)&&(l.count||(l.count=n.pluralIndex),l.n||(l.n=n.pluralIndex));const c=C=>l[C];function u(C,P){const w=Pt(n.messages)?n.messages(C,!!P):mt(n.messages)?n.messages[C]:!1;return w||(n.parent?n.parent.message(C):kM)}const f=C=>n.modifiers?n.modifiers[C]:FM,h=Pt((x=n.processor)==null?void 0:x.normalize)?n.processor.normalize:HM,p=Pt((M=n.processor)==null?void 0:M.interpolate)?n.processor.interpolate:VM,g=Ce((v=n.processor)==null?void 0:v.type)?n.processor.type:BM,m={list:a,named:c,plural:r,linked:(C,...P)=>{const[w,V]=P;let T="text",b="";P.length===1?mt(w)?(b=w.modifier||b,T=w.type||T):Ce(w)&&(b=w||b):P.length===2&&(Ce(w)&&(b=w||b),Ce(V)&&(T=V||T));const U=u(C,!0)(m),H=U===""||U===void 0?C:U,X=T==="vnode"&&Ot(H)&&b?H[0]:H;return b?f(b)(X,T):X},message:u,type:g,interpolate:p,normalize:h,values:Wt(St(),o,l)};return m}const kd=()=>"",Gn=n=>Pt(n);function Bd(n,...e){const{fallbackFormat:t,postTranslation:i,unresolving:s,messageCompiler:r,fallbackLocale:o,messages:a}=n,[l,c]=yu(...e),u=ot(c.missingWarn)?c.missingWarn:n.missingWarn,f=ot(c.fallbackWarn)?c.fallbackWarn:n.fallbackWarn,h=ot(c.escapeParameter)?c.escapeParameter:n.escapeParameter,p=!!c.resolvedMessage,g=Ce(c.default)||ot(c.default)?ot(c.default)?r?l:()=>l:c.default:t?r?l:()=>l:null,_=t||g!=null&&(Ce(g)||Pt(g)),m=zf(n,c);h&&WM(c);let[d,x,M]=p?[l,m,a[m]||St()]:T_(n,l,m,o,f,u),v=d,C=l;if(!p&&!(Ce(v)||Mi(v)||Gn(v))&&_&&(v=g,C=v),!p&&(!(Ce(v)||Mi(v)||Gn(v))||!Ce(x)))return s?Hl:l;let P=!1;const w=()=>{P=!0},V=Gn(v)?v:A_(n,l,x,v,C,w);if(P)return v;const T=jM(n,x,M,c),b=zM(T),U=XM(n,V,b);let H=i?i(U,l):U;if(h&&Ce(H)&&(H=SE(H)),__INTLIFY_PROD_DEVTOOLS__){const X={timestamp:Date.now(),key:Ce(l)?l:Gn(v)?v.key:"",locale:x||(Gn(v)?v.locale:""),format:Ce(v)?v:Gn(v)?v.source:"",message:H};X.meta=Wt({},n.__meta,IM()||{}),hM(X)}return H}function WM(n){Ot(n.list)?n.list=n.list.map(e=>Ce(e)?Md(e):e):mt(n.named)&&Object.keys(n.named).forEach(e=>{Ce(n.named[e])&&(n.named[e]=Md(n.named[e]))})}function T_(n,e,t,i,s,r){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=n,u=c(n,i,t);let f=St(),h,p=null;const g="translate";for(let _=0;_<u.length&&(h=u[_],f=o[h]||St(),(p=l(f,e))===null&&(p=f[e]),!(Ce(p)||Mi(p)||Gn(p)));_++)if(!UM(h,u)){const m=Wf(n,e,h,r,g);m!==e&&(p=m)}return[p,h,f]}function A_(n,e,t,i,s,r){const{messageCompiler:o,warnHtmlMessage:a}=n;if(Gn(i)){const c=i;return c.locale=c.locale||t,c.key=c.key||e,c}if(o==null){const c=(()=>i);return c.locale=t,c.key=e,c}const l=o(i,$M(n,t,s,i,a,r));return l.locale=t,l.key=e,l.source=i,l}function XM(n,e,t){return e(t)}function yu(...n){const[e,t,i]=n,s=St();if(!Ce(e)&&!Vt(e)&&!Gn(e)&&!Mi(e))throw Yi(ji.INVALID_ARGUMENT);const r=Vt(e)?String(e):(Gn(e),e);return Vt(t)?s.plural=t:Ce(t)?s.default=t:it(t)&&!kl(t)?s.named=t:Ot(t)&&(s.list=t),Vt(i)?s.plural=i:Ce(i)?s.default=i:it(i)&&Wt(s,i),[r,s]}function $M(n,e,t,i,s,r){return{locale:e,key:t,warnHtmlMessage:s,onError:o=>{throw r&&r(o),o},onCacheKey:o=>yE(e,t,o)}}function jM(n,e,t,i){const{modifiers:s,pluralRules:r,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=n,h={locale:e,modifiers:s,pluralRules:r,messages:(p,g)=>{let _=o(t,p);if(_==null&&(u||g)){const[,,m]=T_(u||n,p,e,a,l,c);_=o(m,p)}if(Ce(_)||Mi(_)){let m=!1;const x=A_(n,p,e,_,p,()=>{m=!0});return m?kd:x}else return Gn(_)?_:kd}};return n.processor&&(h.processor=n.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Vt(i.plural)&&(h.pluralIndex=i.plural),h}QE();/*!
  * vue-i18n v11.3.0
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const YM="11.3.0";function KM(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(js().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(js().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(js().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(js().__INTLIFY_PROD_DEVTOOLS__=!1)}const wn={UNEXPECTED_RETURN_TYPE:pM,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function On(n,...e){return Bl(n,null,void 0)}const Eu=Ts("__translateVNode"),Mu=Ts("__datetimeParts"),Su=Ts("__numberParts"),w_=Ts("__setPluralRules"),R_=Ts("__injectWithOption"),bu=Ts("__dispose");function jo(n){if(!mt(n)||Mi(n))return n;for(const e in n)if(zn(n,e))if(!e.includes("."))mt(n[e])&&jo(n[e]);else{const t=e.split("."),i=t.length-1;let s=n,r=!1;for(let o=0;o<i;o++){if(t[o]==="__proto__")throw new Error(`unsafe key: ${t[o]}`);if(t[o]in s||(s[t[o]]=St()),!mt(s[t[o]])){r=!0;break}s=s[t[o]]}if(r||(Mi(s)?__.includes(t[i])||delete n[e]:(s[t[i]]=n[e],delete n[e])),!Mi(s)){const o=s[t[i]];mt(o)&&jo(o)}}return n}function Xf(n,e){const{messages:t,__i18n:i,messageResolver:s,flatJson:r}=e,o=it(t)?t:Ot(i)?St():{[n]:St()};if(Ot(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||St(),Qa(c,o[l])):Qa(c,o)}else Ce(a)&&Qa(JSON.parse(a),o)}),s==null&&r)for(const a in o)zn(o,a)&&jo(o[a]);return o}function C_(n){return n.type}function P_(n,e,t){let i=mt(e.messages)?e.messages:St();"__i18nGlobal"in t&&(i=Xf(n.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const s=Object.keys(i);s.length&&s.forEach(r=>{n.mergeLocaleMessage(r,i[r])});{if(mt(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(o=>{n.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(mt(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(o=>{n.mergeNumberFormat(o,e.numberFormats[o])})}}}function Hd(n){return Qe(sa,null,n,0)}function Yo(){return Nf()}const Vd="__INTLIFY_META__",Gd=()=>[],qM=()=>!1;let zd=0;function Wd(n){return((e,t,i,s)=>n(t,i,Yo()||void 0,s))}const ZM=()=>{const n=Yo();let e=null;return n&&(e=C_(n)[Vd])?{[Vd]:e}:null};function $f(n={}){const{__root:e,__injectWithOption:t}=n,i=e===void 0,s=n.flatJson,r=ml?bt:sg;let o=ot(n.inheritLocale)?n.inheritLocale:!0;const a=r(e&&o?e.locale.value:Ce(n.locale)?n.locale:$o),l=r(e&&o?e.fallbackLocale.value:Ce(n.fallbackLocale)||Ot(n.fallbackLocale)||it(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:a.value),c=r(Xf(a.value,n)),u=r(it(n.datetimeFormats)?n.datetimeFormats:{[a.value]:{}}),f=r(it(n.numberFormats)?n.numberFormats:{[a.value]:{}});let h=e?e.missingWarn:ot(n.missingWarn)||Hr(n.missingWarn)?n.missingWarn:!0,p=e?e.fallbackWarn:ot(n.fallbackWarn)||Hr(n.fallbackWarn)?n.fallbackWarn:!0,g=e?e.fallbackRoot:ot(n.fallbackRoot)?n.fallbackRoot:!0,_=!!n.fallbackFormat,m=Pt(n.missing)?n.missing:null,d=Pt(n.missing)?Wd(n.missing):null,x=Pt(n.postTranslation)?n.postTranslation:null,M=e?e.warnHtmlMessage:ot(n.warnHtmlMessage)?n.warnHtmlMessage:!0,v=!!n.escapeParameter;const C=e?e.modifiers:it(n.modifiers)?n.modifiers:{};let P=n.pluralRules||e&&e.pluralRules,w;w=(()=>{i&&Id(null);const I={version:YM,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:C,pluralRules:P,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:_,unresolving:!0,postTranslation:x===null?void 0:x,warnHtmlMessage:M,escapeParameter:v,messageResolver:n.messageResolver,messageCompiler:n.messageCompiler,__meta:{framework:"vue"}};I.datetimeFormats=u.value,I.numberFormats=f.value,I.__datetimeFormatters=it(w)?w.__datetimeFormatters:void 0,I.__numberFormatters=it(w)?w.__numberFormatters:void 0;const k=NM(I);return i&&Id(k),k})(),uo(w,a.value,l.value);function T(){return[a.value,l.value,c.value,u.value,f.value]}const b=ln({get:()=>a.value,set:I=>{w.locale=I,a.value=I}}),U=ln({get:()=>l.value,set:I=>{w.fallbackLocale=I,l.value=I,uo(w,a.value,I)}}),H=ln(()=>c.value),X=ln(()=>u.value),oe=ln(()=>f.value);function ae(){return Pt(x)?x:null}function ee(I){x=I,w.postTranslation=I}function se(){return m}function Y(I){I!==null&&(d=Wd(I)),m=I,w.missing=d}const me=(I,k,$,ce,ue,ge)=>{T();let Ie;try{__INTLIFY_PROD_DEVTOOLS__,i||(w.fallbackContext=e?DM():void 0),Ie=I(w)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(w.fallbackContext=void 0)}if($!=="translate exists"&&Vt(Ie)&&Ie===Hl||$==="translate exists"&&!Ie){const[de,Se]=k();return e&&g?ce(e):ue(de)}else{if(ge(Ie))return Ie;throw On(wn.UNEXPECTED_RETURN_TYPE)}};function ve(...I){return me(k=>Reflect.apply(Bd,null,[k,...I]),()=>yu(...I),"translate",k=>Reflect.apply(k.t,k,[...I]),k=>k,k=>Ce(k))}function ye(...I){const[k,$,ce]=I;if(ce&&!mt(ce))throw On(wn.INVALID_ARGUMENT);return ve(k,$,Wt({resolvedMessage:!0},ce||{}))}function Ne(...I){return me(k=>Reflect.apply(Nd,null,[k,...I]),()=>vu(...I),"datetime format",k=>Reflect.apply(k.d,k,[...I]),()=>gl,k=>Ce(k)||Ot(k))}function Oe(...I){return me(k=>Reflect.apply(Ud,null,[k,...I]),()=>xu(...I),"number format",k=>Reflect.apply(k.n,k,[...I]),()=>gl,k=>Ce(k)||Ot(k))}function ne(I){return I.map(k=>Ce(k)||Vt(k)||ot(k)?Hd(String(k)):k)}const xe={normalize:ne,interpolate:I=>I,type:"vnode"};function B(...I){return me(k=>{let $;const ce=k;try{ce.processor=xe,$=Reflect.apply(Bd,null,[ce,...I])}finally{ce.processor=null}return $},()=>yu(...I),"translate",k=>k[Eu](...I),k=>[Hd(k)],k=>Ot(k))}function ie(...I){return me(k=>Reflect.apply(Ud,null,[k,...I]),()=>xu(...I),"number format",k=>k[Su](...I),Gd,k=>Ce(k)||Ot(k))}function re(...I){return me(k=>Reflect.apply(Nd,null,[k,...I]),()=>vu(...I),"datetime format",k=>k[Mu](...I),Gd,k=>Ce(k)||Ot(k))}function he(I){P=I,w.pluralRules=P}function Le(I,k){return me(()=>{if(!I)return!1;const $=Ce(k)?k:a.value,ce=Ce(k)?[$]:_u(w,l.value,$);for(let ue=0;ue<ce.length;ue++){const ge=S(ce[ue]);let Ie=w.messageResolver(ge,I);if(Ie===null&&(Ie=ge[I]),Mi(Ie)||Gn(Ie)||Ce(Ie))return!0}return!1},()=>[I],"translate exists",$=>Reflect.apply($.te,$,[I,k]),qM,$=>ot($))}function D(I){let k=null;const $=_u(w,l.value,a.value);for(let ce=0;ce<$.length;ce++){const ue=c.value[$[ce]]||{},ge=w.messageResolver(ue,I);if(ge!=null){k=ge;break}}return k}function O(I){const k=D(I);return k??(e?e.tm(I)||{}:{})}function S(I){return c.value[I]||{}}function te(I,k){if(s){const $={[I]:k};for(const ce in $)zn($,ce)&&jo($[ce]);k=$[I]}c.value[I]=k,w.messages=c.value}function Z(I,k){c.value[I]=c.value[I]||{};const $={[I]:k};if(s)for(const ce in $)zn($,ce)&&jo($[ce]);k=$[I],Qa(k,c.value[I]),w.messages=c.value}function K(I){return u.value[I]||{}}function A(I,k){u.value[I]=k,w.datetimeFormats=u.value,Od(w,I,k)}function L(I,k){u.value[I]=Wt(u.value[I]||{},k),w.datetimeFormats=u.value,Od(w,I,k)}function F(I){return f.value[I]||{}}function y(I,k){f.value[I]=k,w.numberFormats=f.value,Fd(w,I,k)}function E(I,k){f.value[I]=Wt(f.value[I]||{},k),w.numberFormats=f.value,Fd(w,I,k)}zd++,e&&ml&&(qs(e.locale,I=>{o&&(a.value=I,w.locale=I,uo(w,a.value,l.value))}),qs(e.fallbackLocale,I=>{o&&(l.value=I,w.fallbackLocale=I,uo(w,a.value,l.value))}));const N={id:zd,locale:b,fallbackLocale:U,get inheritLocale(){return o},set inheritLocale(I){o=I,I&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,uo(w,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:H,get modifiers(){return C},get pluralRules(){return P||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(I){h=I,w.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(I){p=I,w.fallbackWarn=p},get fallbackRoot(){return g},set fallbackRoot(I){g=I},get fallbackFormat(){return _},set fallbackFormat(I){_=I,w.fallbackFormat=_},get warnHtmlMessage(){return M},set warnHtmlMessage(I){M=I,w.warnHtmlMessage=I},get escapeParameter(){return v},set escapeParameter(I){v=I,w.escapeParameter=I},t:ve,getLocaleMessage:S,setLocaleMessage:te,mergeLocaleMessage:Z,getPostTranslationHandler:ae,setPostTranslationHandler:ee,getMissingHandler:se,setMissingHandler:Y,[w_]:he};return N.datetimeFormats=X,N.numberFormats=oe,N.rt=ye,N.te=Le,N.tm=O,N.d=Ne,N.n=Oe,N.getDateTimeFormat=K,N.setDateTimeFormat=A,N.mergeDateTimeFormat=L,N.getNumberFormat=F,N.setNumberFormat=y,N.mergeNumberFormat=E,N[R_]=t,N[Eu]=B,N[Mu]=re,N[Su]=ie,N}function JM(n){const e=Ce(n.locale)?n.locale:$o,t=Ce(n.fallbackLocale)||Ot(n.fallbackLocale)||it(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:e,i=Pt(n.missing)?n.missing:void 0,s=ot(n.silentTranslationWarn)||Hr(n.silentTranslationWarn)?!n.silentTranslationWarn:!0,r=ot(n.silentFallbackWarn)||Hr(n.silentFallbackWarn)?!n.silentFallbackWarn:!0,o=ot(n.fallbackRoot)?n.fallbackRoot:!0,a=!!n.formatFallbackMessages,l=it(n.modifiers)?n.modifiers:{},c=n.pluralizationRules,u=Pt(n.postTranslation)?n.postTranslation:void 0,f=Ce(n.warnHtmlInMessage)?n.warnHtmlInMessage!=="off":!0,h=!!n.escapeParameterHtml,p=ot(n.sync)?n.sync:!0;let g=n.messages;if(it(n.sharedMessages)){const C=n.sharedMessages;g=Object.keys(C).reduce((w,V)=>{const T=w[V]||(w[V]={});return Wt(T,C[V]),w},g||{})}const{__i18n:_,__root:m,__injectWithOption:d}=n,x=n.datetimeFormats,M=n.numberFormats,v=n.flatJson;return{locale:e,fallbackLocale:t,messages:g,flatJson:v,datetimeFormats:x,numberFormats:M,missing:i,missingWarn:s,fallbackWarn:r,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:n.messageResolver,inheritLocale:p,__i18n:_,__root:m,__injectWithOption:d}}function Tu(n={}){const e=$f(JM(n)),{__extender:t}=n,i={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return ot(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(s){e.missingWarn=ot(s)?!s:s},get silentFallbackWarn(){return ot(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(s){e.fallbackWarn=ot(s)?!s:s},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,r){return e.te(s,r)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,r){e.setLocaleMessage(s,r)},mergeLocaleMessage(s,r){e.mergeLocaleMessage(s,r)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,r){e.setDateTimeFormat(s,r)},mergeDateTimeFormat(s,r){e.mergeDateTimeFormat(s,r)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,r){e.setNumberFormat(s,r)},mergeNumberFormat(s,r){e.mergeNumberFormat(s,r)}};return i.__extender=t,i}function QM(n,e,t){return{beforeCreate(){const i=Yo();if(!i)throw On(wn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const r=s.i18n;if(s.__i18n&&(r.__i18n=s.__i18n),r.__root=e,this===this.$root)this.$i18n=Xd(n,r);else{r.__injectWithOption=!0,r.__extender=t.__vueI18nExtend,this.$i18n=Tu(r);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=Xd(n,s);else{this.$i18n=Tu({__i18n:s.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:e});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=n;s.__i18nGlobal&&P_(e,s,s),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$te=(r,o)=>this.$i18n.te(r,o),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),t.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Yo();if(!i)throw On(wn.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),t.__deleteInstance(i),delete this.$i18n}}}function Xd(n,e){n.locale=e.locale||n.locale,n.fallbackLocale=e.fallbackLocale||n.fallbackLocale,n.missing=e.missing||n.missing,n.silentTranslationWarn=e.silentTranslationWarn||n.silentFallbackWarn,n.silentFallbackWarn=e.silentFallbackWarn||n.silentFallbackWarn,n.formatFallbackMessages=e.formatFallbackMessages||n.formatFallbackMessages,n.postTranslation=e.postTranslation||n.postTranslation,n.warnHtmlInMessage=e.warnHtmlInMessage||n.warnHtmlInMessage,n.escapeParameterHtml=e.escapeParameterHtml||n.escapeParameterHtml,n.sync=e.sync||n.sync,n.__composer[w_](e.pluralizationRules||n.pluralizationRules);const t=Xf(n.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(t).forEach(i=>n.mergeLocaleMessage(i,t[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>n.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>n.mergeNumberFormat(i,e.numberFormats[i])),n}const jf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:n=>n==="parent"||n==="global",default:"parent"},i18n:{type:Object}};function eS({slots:n},e){return e.length===1&&e[0]==="default"?(n.default?n.default():[]).reduce((i,s)=>[...i,...s.type===Zt?s.children:[s]],[]):e.reduce((t,i)=>{const s=n[i];return s&&(t[i]=s()),t},St())}function L_(){return Zt}const tS=na({name:"i18n-t",props:Wt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:n=>Vt(n)||!isNaN(n)}},jf),setup(n,e){const{slots:t,attrs:i}=e,s=n.i18n||aa({useScope:n.scope,__useComponent:!0});return()=>{const r=Object.keys(t).filter(f=>f[0]!=="_"),o=St();n.locale&&(o.locale=n.locale),n.plural!==void 0&&(o.plural=Ce(n.plural)?+n.plural:n.plural);const a=eS(e,r),l=s[Eu](n.keypath,a,o),c=Wt(St(),i),u=Ce(n.tag)||mt(n.tag)?n.tag:L_();return oa(u,c,l)}}}),$d=tS;function nS(n){return Ot(n)&&!Ce(n[0])}function I_(n,e,t,i){const{slots:s,attrs:r}=e;return()=>{const o={part:!0};let a=St();n.locale&&(o.locale=n.locale),Ce(n.format)?o.key=n.format:mt(n.format)&&(Ce(n.format.key)&&(o.key=n.format.key),a=Object.keys(n.format).reduce((h,p)=>t.includes(p)?Wt(St(),h,{[p]:n.format[p]}):h,St()));const l=i(n.value,o,a);let c=[o.key];Ot(l)?c=l.map((h,p)=>{const g=s[h.type],_=g?g({[h.type]:h.value,index:p,parts:l}):[h.value];return nS(_)&&(_[0].key=`${h.type}-${p}`),_}):Ce(l)&&(c=[l]);const u=Wt(St(),r),f=Ce(n.tag)||mt(n.tag)?n.tag:L_();return oa(f,u,c)}}const iS=na({name:"i18n-n",props:Wt({value:{type:Number,required:!0},format:{type:[String,Object]}},jf),setup(n,e){const t=n.i18n||aa({useScope:n.scope,__useComponent:!0});return I_(n,e,b_,(...i)=>t[Su](...i))}}),jd=iS;function sS(n,e){const t=n;if(n.mode==="composition")return t.__getInstance(e)||n.global;{const i=t.__getInstance(e);return i!=null?i.__composer:n.global.__composer}}function rS(n){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw On(wn.UNEXPECTED_ERROR);const c=sS(n,a.$),u=Yd(l);return[Reflect.apply(c.t,c,[...Kd(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);ml&&(o.__i18nWatcher=qs(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{ml&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=Yd(a);o.textContent=Reflect.apply(l.t,l,[...Kd(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Yd(n){if(Ce(n))return{path:n};if(it(n)){if(!("path"in n))throw On(wn.REQUIRED_VALUE,"path");return n}else throw On(wn.INVALID_VALUE)}function Kd(n){const{path:e,locale:t,args:i,choice:s,plural:r}=n,o={},a=i||{};return Ce(t)&&(o.locale=t),Vt(s)&&(o.plural=s),Vt(r)&&(o.plural=r),[e,a,o]}function oS(n,e,...t){const i=it(t[0])?t[0]:{};(ot(i.globalInstall)?i.globalInstall:!0)&&([$d.name,"I18nT"].forEach(r=>n.component(r,$d)),[jd.name,"I18nN"].forEach(r=>n.component(r,jd)),[Zd.name,"I18nD"].forEach(r=>n.component(r,Zd))),n.directive("t",rS(e))}const aS=Ts("global-vue-i18n");function lS(n={}){const e=__VUE_I18N_LEGACY_API__&&ot(n.legacy)?n.legacy:__VUE_I18N_LEGACY_API__,t=ot(n.globalInjection)?n.globalInjection:!0,i=new Map,[s,r]=cS(n,e),o=Ts("");function a(f){return i.get(f)||null}function l(f,h){i.set(f,h)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...h){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),it(h[0])){const _=h[0];u.__composerExtend=_.__composerExtend,u.__vueI18nExtend=_.__vueI18nExtend}let p=null;!e&&t&&(p=_S(f,u.global)),__VUE_I18N_FULL_INSTALL__&&oS(f,u,...h),__VUE_I18N_LEGACY_API__&&e&&f.mixin(QM(r,r.__composer,u));const g=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),g()}},get global(){return r},dispose(){s.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function aa(n={}){const e=Yo();if(e==null)throw On(wn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw On(wn.NOT_INSTALLED);const t=uS(e),i=hS(t),s=C_(e),r=fS(n,s);if(r==="global")return P_(i,n,s),i;if(r==="parent"){let l=dS(t,e,n.__useComponent);return l==null&&(l=i),l}const o=t;let a=o.__getInstance(e);if(a==null){const l=Wt({},n);"__i18n"in s&&(l.__i18n=s.__i18n),i&&(l.__root=i),a=$f(l),o.__composerExtend&&(a[bu]=o.__composerExtend(a)),mS(o,e,a),o.__setInstance(e,a)}return a}function cS(n,e){const t=Zv(),i=__VUE_I18N_LEGACY_API__&&e?t.run(()=>Tu(n)):t.run(()=>$f(n));if(i==null)throw On(wn.UNEXPECTED_ERROR);return[t,i]}function uS(n){const e=oi(n.isCE?aS:n.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw On(n.isCE?wn.NOT_INSTALLED_WITH_PROVIDE:wn.UNEXPECTED_ERROR);return e}function fS(n,e){return kl(n)?"__i18n"in e?"local":"global":n.useScope?n.useScope:"local"}function hS(n){return n.mode==="composition"?n.global:n.global.__composer}function dS(n,e,t=!1){let i=null;const s=e.root;let r=pS(e,t);for(;r!=null;){const o=n;if(n.mode==="composition")i=o.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(r);a!=null&&(i=a.__composer,t&&i&&!i[R_]&&(i=null))}if(i!=null||s===r)break;r=r.parent}return i}function pS(n,e=!1){return n==null?null:e&&n.vnode.ctx||n.parent}function mS(n,e,t){ia(()=>{},e),Js(()=>{const i=t;n.__deleteInstance(e);const s=i[bu];s&&(s(),delete i[bu])},e)}const gS=["locale","fallbackLocale","availableLocales"],qd=["t","rt","d","n","tm","te"];function _S(n,e){const t=Object.create(null);return gS.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r)throw On(wn.UNEXPECTED_ERROR);const o=en(r.value)?{get(){return r.value.value},set(a){r.value.value=a}}:{get(){return r.get&&r.get()}};Object.defineProperty(t,s,o)}),n.config.globalProperties.$i18n=t,qd.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r||!r.value)throw On(wn.UNEXPECTED_ERROR);Object.defineProperty(n.config.globalProperties,`$${s}`,r)}),()=>{delete n.config.globalProperties.$i18n,qd.forEach(s=>{delete n.config.globalProperties[`$${s}`]})}}const vS=na({name:"i18n-d",props:Wt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},jf),setup(n,e){const t=n.i18n||aa({useScope:n.scope,__useComponent:!0});return I_(n,e,S_,(...i)=>t[Mu](...i))}}),Zd=vS;KM();RM(cM);CM(TM);PM(_u);if(__INTLIFY_PROD_DEVTOOLS__){const n=js();n.__INTLIFY__=!0,uM(n.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const Ai=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},xS={class:"navbar"},yS={class:"links"},ES={class:"nav-end"},MS={class:"locale-switch",role:"radiogroup","aria-label":"Language"},SS=["aria-checked"],bS=["aria-checked"],TS={class:"drawer-panel"},AS={class:"drawer-locale"},wS={class:"locale-switch",role:"radiogroup","aria-label":"Language"},RS={__name:"NavBar",setup(n){const{locale:e}=aa();_y();const t=bt(!1);function i(r){e.value=r,localStorage.setItem("mars-locale",r)}function s(){t.value=!1}return(r,o)=>(Tt(),Ht(Zt,null,[q("nav",xS,[Qe(ke(ds),{to:"/",class:"brand"},{default:Nt(()=>[Ln(Me(r.$t("nav.brand")),1)]),_:1}),q("div",yS,[Qe(ke(ds),{to:"/","exact-active-class":"active"},{default:Nt(()=>[Ln(Me(r.$t("nav.elevationGlobe")),1)]),_:1}),Qe(ke(ds),{to:"/gis","active-class":"active"},{default:Nt(()=>[Ln(Me(r.$t("nav.marsGis")),1)]),_:1}),Qe(ke(ds),{to:"/about","active-class":"active"},{default:Nt(()=>[Ln(Me(r.$t("nav.about")),1)]),_:1})]),q("div",ES,[q("div",MS,[q("span",{class:Qn(["locale-track",{"at-right":ke(e)==="pt-BR"}])},null,2),q("button",{class:Qn(["locale-opt",{selected:ke(e)==="en"}]),onClick:o[0]||(o[0]=a=>i("en")),"aria-checked":ke(e)==="en",role:"radio"},"EN",10,SS),q("button",{class:Qn(["locale-opt",{selected:ke(e)==="pt-BR"}]),onClick:o[1]||(o[1]=a=>i("pt-BR")),"aria-checked":ke(e)==="pt-BR",role:"radio"},"PT",10,bS)]),q("button",{class:Qn(["hamburger",{open:t.value}]),onClick:o[2]||(o[2]=a=>t.value=!t.value),"aria-label":"Menu"},[...o[5]||(o[5]=[q("span",null,null,-1),q("span",null,null,-1),q("span",null,null,-1)])],2)])]),Qe(Ul,{name:"drawer"},{default:Nt(()=>[t.value?(Tt(),Ht("div",{key:0,class:"mobile-drawer",onClick:ay(s,["self"])},[q("div",TS,[Qe(ke(ds),{to:"/","exact-active-class":"active",onClick:s},{default:Nt(()=>[Ln(Me(r.$t("nav.elevationGlobe")),1)]),_:1}),Qe(ke(ds),{to:"/gis","active-class":"active",onClick:s},{default:Nt(()=>[Ln(Me(r.$t("nav.marsGis")),1)]),_:1}),Qe(ke(ds),{to:"/about","active-class":"active",onClick:s},{default:Nt(()=>[Ln(Me(r.$t("nav.about")),1)]),_:1}),q("div",AS,[q("div",wS,[q("span",{class:Qn(["locale-track",{"at-right":ke(e)==="pt-BR"}])},null,2),q("button",{class:Qn(["locale-opt",{selected:ke(e)==="en"}]),onClick:o[3]||(o[3]=a=>i("en")),role:"radio"},"EN",2),q("button",{class:Qn(["locale-opt",{selected:ke(e)==="pt-BR"}]),onClick:o[4]||(o[4]=a=>i("pt-BR")),role:"radio"},"PT",2)])])])])):An("",!0)]),_:1})],64))}},CS=Ai(RS,[["__scopeId","data-v-327f9145"]]),PS={class:"main"},LS={__name:"App",setup(n){return(e,t)=>{const i=bg("router-view");return Tt(),Ht(Zt,null,[Qe(CS),q("main",PS,[Qe(i)])],64)}}},IS=Ai(LS,[["__scopeId","data-v-605746d0"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="172",Dr={ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},DS=0,Jd=1,NS=2,D_=1,OS=2,Gi=3,ts=0,vn=1,ei=2,Ms=0,Zs=1,_l=2,Qd=3,ep=4,US=5,Ws=100,FS=101,kS=102,BS=103,HS=104,VS=200,GS=201,zS=202,WS=203,Au=204,wu=205,XS=206,$S=207,jS=208,YS=209,KS=210,qS=211,ZS=212,JS=213,QS=214,Ru=0,Cu=1,Pu=2,Gr=3,Lu=4,Iu=5,Du=6,Nu=7,N_=0,eb=1,tb=2,Ss=0,nb=1,ib=2,sb=3,rb=4,ob=5,ab=6,lb=7,tp="attached",cb="detached",O_=300,zr=301,Wr=302,Ou=303,Uu=304,Vl=306,Xr=1e3,xs=1001,vl=1002,xn=1003,U_=1004,Mo=1005,Dn=1006,el=1007,Ki=1008,ns=1009,F_=1010,k_=1011,Ko=1012,Kf=1013,er=1014,si=1015,la=1016,qf=1017,Zf=1018,$r=1020,B_=35902,H_=1021,V_=1022,Nn=1023,G_=1024,z_=1025,Nr=1026,jr=1027,Jf=1028,Qf=1029,W_=1030,eh=1031,th=1033,tl=33776,nl=33777,il=33778,sl=33779,Fu=35840,ku=35841,Bu=35842,Hu=35843,Vu=36196,Gu=37492,zu=37496,Wu=37808,Xu=37809,$u=37810,ju=37811,Yu=37812,Ku=37813,qu=37814,Zu=37815,Ju=37816,Qu=37817,ef=37818,tf=37819,nf=37820,sf=37821,rl=36492,rf=36494,of=36495,X_=36283,af=36284,lf=36285,cf=36286,qo=2300,Zo=2301,pc=2302,np=2400,ip=2401,sp=2402,ub=2500,fb=0,$_=1,uf=2,hb=3200,db=3201,j_=0,pb=1,vs="",qt="srgb",yn="srgb-linear",xl="linear",Et="srgb",or=7680,rp=519,mb=512,gb=513,_b=514,Y_=515,vb=516,xb=517,yb=518,Eb=519,ff=35044,op="300 es",qi=2e3,yl=2001;class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ap=1234567;const Io=Math.PI/180,Yr=180/Math.PI;function ai(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function nh(n,e){return(n%e+e)%e}function Mb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Sb(n,e,t){return n!==e?(t-n)/(e-n):0}function Do(n,e,t){return(1-t)*n+t*e}function bb(n,e,t,i){return Do(n,e,1-Math.exp(-t*i))}function Tb(n,e=1){return e-Math.abs(nh(n,e*2)-e)}function Ab(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Rb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Cb(n,e){return n+Math.random()*(e-n)}function Pb(n){return n*(.5-Math.random())}function Lb(n){n!==void 0&&(ap=n);let e=ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ib(n){return n*Io}function Db(n){return n*Yr}function Nb(n){return(n&n-1)===0&&n!==0}function Ob(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ub(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fb(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const El={DEG2RAD:Io,RAD2DEG:Yr,generateUUID:ai,clamp:et,euclideanModulo:nh,mapLinear:Mb,inverseLerp:Sb,lerp:Do,damp:bb,pingpong:Tb,smoothstep:Ab,smootherstep:wb,randInt:Rb,randFloat:Cb,randFloatSpread:Pb,seededRandom:Lb,degToRad:Ib,radToDeg:Db,isPowerOfTwo:Nb,ceilPowerOfTwo:Ob,floorPowerOfTwo:Ub,setQuaternionFromProperEuler:Fb,normalize:xt,denormalize:ti};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],x=s[1],M=s[4],v=s[7],C=s[2],P=s[5],w=s[8];return r[0]=o*_+a*x+l*C,r[3]=o*m+a*M+l*P,r[6]=o*d+a*v+l*w,r[1]=c*_+u*x+f*C,r[4]=c*m+u*M+f*P,r[7]=c*d+u*v+f*w,r[2]=h*_+p*x+g*C,r[5]=h*m+p*M+g*P,r[8]=h*d+p*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new Ze;function K_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kb(){const n=Jo("canvas");return n.style.display="block",n}const lp={};function Ar(n){n in lp||(lp[n]=!0,console.warn(n))}function Bb(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Hb(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vb(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const cp=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),up=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gb(){const n={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=Or(s.r),s.g=Or(s.g),s.b=Or(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vs?xl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[yn]:{primaries:e,whitePoint:i,transfer:xl,toXYZ:cp,fromXYZ:up,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:cp,fromXYZ:up,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}const nt=Gb();function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ar;class zb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=Jo("canvas")),ar.width=e.width,ar.height=e.height;const i=ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wb=0;class q_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gc(s[o].image)):r.push(gc(s[o]))}else r=gc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function gc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xb=0;class Xt extends ir{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=xs,s=xs,r=Dn,o=Ki,a=Nn,l=ns,c=Xt.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=ai(),this.name="",this.source=new q_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=O_;Xt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(p+1)/2,C=(d+1)/2,P=(u+h)/4,w=(f+_)/4,V=(g+m)/4;return M>v&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=P/i,r=w/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=P/s,r=V/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=w/r,s=V/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $b extends ir{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new q_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends $b{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Z_ extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jb extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*_,x=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const C=Math.sqrt(M),P=Math.atan2(C,d*x);m=Math.sin(m*P)/C,a=Math.sin(a*P)/C}const v=a*x;if(l=l*m+h*v,c=c*m+p*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new G,fp=new $n;class wi{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ea.copy(i.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Ma.subVectors(this.max,fo),lr.subVectors(e.a,fo),cr.subVectors(e.b,fo),ur.subVectors(e.c,fo),os.subVectors(cr,lr),as.subVectors(ur,cr),Ns.subVectors(lr,ur);let t=[0,-os.z,os.y,0,-as.z,as.y,0,-Ns.z,Ns.y,os.z,0,-os.x,as.z,0,-as.x,Ns.z,0,-Ns.x,-os.y,os.x,0,-as.y,as.x,0,-Ns.y,Ns.x,0];return!vc(t,lr,cr,ur,Ma)||(t=[1,0,0,0,1,0,0,0,1],!vc(t,lr,cr,ur,Ma))?!1:(Sa.crossVectors(os,as),t=[Sa.x,Sa.y,Sa.z],vc(t,lr,cr,ur,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new G,new G,new G,new G,new G,new G,new G,new G],qn=new G,Ea=new wi,lr=new G,cr=new G,ur=new G,os=new G,as=new G,Ns=new G,fo=new G,Ma=new G,Sa=new G,Os=new G;function vc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Os.fromArray(n,r);const a=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=e.dot(Os),c=t.dot(Os),u=i.dot(Os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yb=new wi,ho=new G,xc=new G;class Ri{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const t=ho.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ho,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(xc)),this.expandByPoint(ho.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new G,yc=new G,ba=new G,ls=new G,Ec=new G,Ta=new G,Mc=new G;class eo{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yc.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(yc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ba),a=ls.dot(this.direction),l=-ls.dot(ba),c=ls.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yc).addScaledVector(ba,h),p}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,s,r){Ec.subVectors(t,e),Ta.subVectors(i,e),Mc.crossVectors(Ec,Ta);let o=this.direction.dot(Mc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,e);const l=a*this.direction.dot(Ta.crossVectors(ls,Ta));if(l<0)return null;const c=a*this.direction.dot(Ec.cross(ls));if(c<0||l+c>o)return null;const u=-a*ls.dot(Mc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,s,r,o,a,l,c,u,f,h,p,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,p,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kb,e,qb)}lookAt(e,t,i){const s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),cs.crossVectors(i,Cn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),cs.crossVectors(i,Cn)),cs.normalize(),Aa.crossVectors(Cn,cs),s[0]=cs.x,s[4]=Aa.x,s[8]=Cn.x,s[1]=cs.y,s[5]=Aa.y,s[9]=Cn.y,s[2]=cs.z,s[6]=Aa.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],x=i[3],M=i[7],v=i[11],C=i[15],P=s[0],w=s[4],V=s[8],T=s[12],b=s[1],U=s[5],H=s[9],X=s[13],oe=s[2],ae=s[6],ee=s[10],se=s[14],Y=s[3],me=s[7],ve=s[11],ye=s[15];return r[0]=o*P+a*b+l*oe+c*Y,r[4]=o*w+a*U+l*ae+c*me,r[8]=o*V+a*H+l*ee+c*ve,r[12]=o*T+a*X+l*se+c*ye,r[1]=u*P+f*b+h*oe+p*Y,r[5]=u*w+f*U+h*ae+p*me,r[9]=u*V+f*H+h*ee+p*ve,r[13]=u*T+f*X+h*se+p*ye,r[2]=g*P+_*b+m*oe+d*Y,r[6]=g*w+_*U+m*ae+d*me,r[10]=g*V+_*H+m*ee+d*ve,r[14]=g*T+_*X+m*se+d*ye,r[3]=x*P+M*b+v*oe+C*Y,r[7]=x*w+M*U+v*ae+C*me,r[11]=x*V+M*H+v*ee+C*ve,r[15]=x*T+M*X+v*se+C*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*p-i*l*p)+_*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],x=f*m*c-_*h*c+_*l*p-a*m*p-f*l*d+a*h*d,M=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,v=u*_*c-g*f*c+g*a*p-o*_*p-u*a*d+o*f*d,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,P=t*x+i*M+s*v+r*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=x*w,e[1]=(_*h*r-f*m*r-_*s*p+i*m*p+f*s*d-i*h*d)*w,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*w,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*p-i*l*p)*w,e[4]=M*w,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*d+t*h*d)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*w,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*w,e[8]=v*w,e[9]=(g*f*r-u*_*r-g*i*p+t*_*p+u*i*d-t*f*d)*w,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*d+t*a*d)*w,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*w,e[12]=C*w,e[13]=(u*_*s-g*f*s+g*i*h-t*_*h-u*i*m+t*f*m)*w,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*w,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,_=o*u,m=o*f,d=a*f,x=l*c,M=l*u,v=l*f,C=i.x,P=i.y,w=i.z;return s[0]=(1-(_+d))*C,s[1]=(p+v)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(p-v)*P,s[5]=(1-(h+d))*P,s[6]=(m+x)*P,s[7]=0,s[8]=(g+M)*w,s[9]=(m-x)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=fr.set(s[0],s[1],s[2]).length();const o=fr.set(s[4],s[5],s[6]).length(),a=fr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);const c=1/r,u=1/o,f=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=qi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let p,g;if(a===qi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qi){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,p=(i+s)*u;let g,_;if(a===qi)g=(o+r)*f,_=-2*f;else if(a===yl)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fr=new G,Zn=new je,Kb=new G(0,0,0),qb=new G(1,1,1),cs=new G,Aa=new G,Cn=new G,hp=new je,dp=new $n;class Ti{constructor(e=0,t=0,i=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zb=0;const pp=new G,hr=new $n,ki=new je,wa=new G,po=new G,Jb=new G,Qb=new $n,mp=new G(1,0,0),gp=new G(0,1,0),_p=new G(0,0,1),vp={type:"added"},eT={type:"removed"},dr={type:"childadded",child:null},Sc={type:"childremoved",child:null};class Rt extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new G,t=new Ti,i=new $n,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ze}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(mp,e)}rotateY(e){return this.rotateOnAxis(gp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,t){return pp.copy(e).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mp,e)}translateY(e){return this.translateOnAxis(gp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wa.copy(e):wa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(po,wa,this.up):ki.lookAt(wa,po,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(ki),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vp),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eT),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vp),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,Jb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,Qb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new G(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new G,Bi=new G,bc=new G,Hi=new G,pr=new G,mr=new G,xp=new G,Tc=new G,Ac=new G,wc=new G,Rc=new lt,Cc=new lt,Pc=new lt;class ni{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),Bi.subVectors(i,t),bc.subVectors(e,t);const o=Jn.dot(Jn),a=Jn.dot(Bi),l=Jn.dot(bc),c=Bi.dot(Bi),u=Bi.dot(bc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(e,t),Cc.fromBufferAttribute(e,i),Pc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Cc,r.y),o.addScaledVector(Pc,r.z),o}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),Bi.subVectors(e,t),Jn.cross(Bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),Jn.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ni.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;pr.subVectors(s,i),mr.subVectors(r,i),Tc.subVectors(e,i);const l=pr.dot(Tc),c=mr.dot(Tc);if(l<=0&&c<=0)return t.copy(i);Ac.subVectors(e,s);const u=pr.dot(Ac),f=mr.dot(Ac);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(pr,o);wc.subVectors(e,r);const p=pr.dot(wc),g=mr.dot(wc);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(mr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return xp.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(xp,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function Lc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=nh(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Lc(o,r,e+1/3),this.g=Lc(o,r,e),this.b=Lc(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=J_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return nt.fromWorkingColorSpace(sn.copy(this),e),Math.round(et(sn.r*255,0,255))*65536+Math.round(et(sn.g*255,0,255))*256+Math.round(et(sn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(sn.copy(this),t);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=qt){nt.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,s=sn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Ra);const i=Do(us.h,Ra.h,t),s=Do(us.s,Ra.s,t),r=Do(us.l,Ra.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Ve;Ve.NAMES=J_;let tT=0;class Si extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Zs,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=wu,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Au&&(i.blendSrc=this.blendSrc),this.blendDst!==wu&&(i.blendDst=this.blendDst),this.blendEquation!==Ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ys extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new G,Ca=new ze;class Ut{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ff,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ff&&(e.usage=this.usage),e}}class Q_ extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ev extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xn extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nT=0;const Hn=new je,Ic=new Rt,gr=new G,Pn=new wi,mo=new wi,Kt=new G;class Un extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K_(e)?ev:Q_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Pn.min,mo.min),Pn.expandByPoint(Kt),Kt.addVectors(Pn.max,mo.max),Pn.expandByPoint(Kt)):(Pn.expandByPoint(mo.min),Pn.expandByPoint(mo.max))}Pn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(e,c),Kt.add(gr)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<i.count;V++)a[V]=new G,l[V]=new G;const c=new G,u=new G,f=new G,h=new ze,p=new ze,g=new ze,_=new G,m=new G;function d(V,T,b){c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),h.fromBufferAttribute(r,V),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,b),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[V].add(_),a[T].add(_),a[b].add(_),l[V].add(m),l[T].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let V=0,T=x.length;V<T;++V){const b=x[V],U=b.start,H=b.count;for(let X=U,oe=U+H;X<oe;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const M=new G,v=new G,C=new G,P=new G;function w(V){C.fromBufferAttribute(s,V),P.copy(C);const T=a[V];M.copy(T),M.sub(C.multiplyScalar(C.dot(T))).normalize(),v.crossVectors(P,T);const U=v.dot(l[V])<0?-1:1;o.setXYZW(V,M.x,M.y,M.z,U)}for(let V=0,T=x.length;V<T;++V){const b=x[V],U=b.start,H=b.count;for(let X=U,oe=U+H;X<oe;X+=3)w(e.getX(X+0)),w(e.getX(X+1)),w(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Ut(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yp=new je,Us=new eo,Pa=new Ri,Ep=new G,La=new G,Ia=new G,Da=new G,Dc=new G,Na=new G,Mp=new G,Oa=new G;class Qt extends Rt{constructor(e=new Un,t=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Dc.fromBufferAttribute(f,e),o?Na.addScaledVector(Dc,u):Na.addScaledVector(Dc.sub(t),u))}t.add(Na)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),Us.copy(e.ray).recast(e.near),!(Pa.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Pa,Ep)===null||Us.origin.distanceToSquared(Ep)>(e.far-e.near)**2))&&(yp.copy(r).invert(),Us.copy(e.ray).applyMatrix4(yp),!(i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,C=M;v<C;v+=3){const P=a.getX(v),w=a.getX(v+1),V=a.getX(v+2);s=Ua(this,d,e,i,c,u,f,P,w,V),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Ua(this,o,e,i,c,u,f,x,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,C=M;v<C;v+=3){const P=v,w=v+1,V=v+2;s=Ua(this,d,e,i,c,u,f,P,w,V),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=m,M=m+1,v=m+2;s=Ua(this,o,e,i,c,u,f,x,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function iT(n,e,t,i,s,r,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ts,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:n}}function Ua(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,La),n.getVertexPosition(l,Ia),n.getVertexPosition(c,Da);const u=iT(n,e,t,i,La,Ia,Da,Mp);if(u){const f=new G;ni.getBarycoord(Mp,La,Ia,Da,f),s&&(u.uv=ni.getInterpolatedAttribute(s,a,l,c,f,new ze)),r&&(u.uv1=ni.getInterpolatedAttribute(r,a,l,c,f,new ze)),o&&(u.normal=ni.getInterpolatedAttribute(o,a,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};ni.getNormal(La,Ia,Da,h.normal),u.face=h,u.barycoord=f}return u}class ca extends Un{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xn(c,3)),this.setAttribute("normal",new Xn(u,3)),this.setAttribute("uv",new Xn(f,2));function g(_,m,d,x,M,v,C,P,w,V,T){const b=v/w,U=C/V,H=v/2,X=C/2,oe=P/2,ae=w+1,ee=V+1;let se=0,Y=0;const me=new G;for(let ve=0;ve<ee;ve++){const ye=ve*U-X;for(let Ne=0;Ne<ae;Ne++){const Oe=Ne*b-H;me[_]=Oe*x,me[m]=ye*M,me[d]=oe,c.push(me.x,me.y,me.z),me[_]=0,me[m]=0,me[d]=P>0?1:-1,u.push(me.x,me.y,me.z),f.push(Ne/w),f.push(1-ve/V),se+=1}}for(let ve=0;ve<V;ve++)for(let ye=0;ye<w;ye++){const Ne=h+ye+ae*ve,Oe=h+ye+ae*(ve+1),ne=h+(ye+1)+ae*(ve+1),pe=h+(ye+1)+ae*ve;l.push(Ne,Oe,pe),l.push(Oe,ne,pe),Y+=6}a.addGroup(p,Y,T),p+=Y,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=Kr(n[t]);for(const s in i)e[s]=i[s]}return e}function sT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const rT={clone:Kr,merge:hn};var oT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oT,this.fragmentShader=aT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=sT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nv extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new G,Sp=new ze,bp=new ze;class mn extends nv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Sp,bp),t.subVectors(bp,Sp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,vr=1;class lT extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(_r,vr,e,t);s.layers=this.layers,this.add(s);const r=new mn(_r,vr,e,t);r.layers=this.layers,this.add(r);const o=new mn(_r,vr,e,t);o.layers=this.layers,this.add(o);const a=new mn(_r,vr,e,t);a.layers=this.layers,this.add(a);const l=new mn(_r,vr,e,t);l.layers=this.layers,this.add(l);const c=new mn(_r,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class iv extends Xt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cT extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new iv(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ca(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ms});r.uniforms.tEquirect.value=t;const o=new Qt(s,r),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Dn),new lT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class sv extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class uT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ff,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new G;class sh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Tp=new G,Ap=new lt,wp=new lt,fT=new G,Rp=new je,Fa=new G,Nc=new Ri,Cp=new je,Oc=new eo;class hT extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tp,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fa),this.boundingSphere.expandByPoint(Fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nc.copy(this.boundingSphere),Nc.applyMatrix4(s),e.ray.intersectsSphere(Nc)!==!1&&(Cp.copy(s).invert(),Oc.copy(e.ray).applyMatrix4(Cp),!(this.boundingBox!==null&&Oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Ap.fromBufferAttribute(s.attributes.skinIndex,e),wp.fromBufferAttribute(s.attributes.skinWeight,e),Tp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=wp.getComponent(r);if(o!==0){const a=Ap.getComponent(r);Rp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(fT.copy(Tp).applyMatrix4(Rp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rv extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rh extends Xt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=xn,u=xn,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pp=new je,dT=new je;class oh{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:dT;Pp.multiplyMatrices(a,t[r]),Pp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new oh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new rh(t,e,e,Nn,si);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new rv),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class hf extends Ut{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xr=new je,Lp=new je,ka=[],Ip=new wi,pT=new je,go=new Qt,_o=new Ri;class mT extends Qt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xr),Ip.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(Ip)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xr),_o.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(_o)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(go.geometry=this.geometry,go.material=this.material,go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(i),e.ray.intersectsSphere(_o)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xr),Lp.multiplyMatrices(i,xr),go.matrixWorld=Lp,go.raycast(e,ka);for(let o=0,a=ka.length;o<a;o++){const l=ka[o];l.instanceId=r,l.object=this,t.push(l)}ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new rh(new Float32Array(s*this.count),s,this.count,Jf,si));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Uc=new G,gT=new G,_T=new Ze;class gs{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Uc.subVectors(i,t).cross(gT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_T.getNormalMatrix(e),s=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Ri,Ba=new G;class ah{constructor(e=new gs,t=new gs,i=new gs,s=new gs,r=new gs,o=new gs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],x=s[13],M=s[14],v=s[15];if(i[0].setComponents(l-r,h-c,m-p,v-d).normalize(),i[1].setComponents(l+r,h+c,m+p,v+d).normalize(),i[2].setComponents(l+o,h+u,m+g,v+x).normalize(),i[3].setComponents(l-o,h-u,m-g,v-x).normalize(),i[4].setComponents(l-a,h-f,m-_,v-M).normalize(),t===qi)i[5].setComponents(l+a,h+f,m+_,v+M).normalize();else if(t===yl)i[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ba.x=s.normal.x>0?e.max.x:e.min.x,Ba.y=s.normal.y>0?e.max.y:e.min.y,Ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ov extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ml=new G,Sl=new G,Dp=new je,vo=new eo,Ha=new Ri,Fc=new G,Np=new G;class lh extends Rt{constructor(e=new Un,t=new ov){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ml.fromBufferAttribute(t,s-1),Sl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ml.distanceTo(Sl);e.setAttribute("lineDistance",new Xn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;Dp.copy(s).invert(),vo.copy(e.ray).applyMatrix4(Dp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),x=u.getX(_+1),M=Va(this,e,vo,l,d,x);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Va(this,e,vo,l,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=Va(this,e,vo,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Va(this,e,vo,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Va(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Ml.fromBufferAttribute(o,s),Sl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ml,Sl,Fc,Np)>i)return;Fc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Fc);if(!(l<e.near||l>e.far))return{distance:l,point:Np.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Op=new G,Up=new G;class vT extends lh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Op.fromBufferAttribute(t,s),Up.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Op.distanceTo(Up);e.setAttribute("lineDistance",new Xn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xT extends lh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class av extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fp=new je,df=new eo,Ga=new Ri,za=new G;class lv extends Rt{constructor(e=new Un,t=new av){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Fp.copy(s).invert(),df.copy(e.ray).applyMatrix4(Fp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=c.getX(g);za.fromBufferAttribute(f,m),kp(za,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p;g<_;g++)za.fromBufferAttribute(f,g),kp(za,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kp(n,e,t,i,s,r,o){const a=df.distanceSqToPoint(n);if(a<t){const l=new G;df.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class yi extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class yT extends Xt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cv extends Xt{constructor(e,t,i,s,r,o,a,l,c,u=Nr){if(u!==Nr&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Nr&&(i=er),i===void 0&&u===jr&&(i=$r),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gl extends Un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const x=d*h-o;for(let M=0;M<c;M++){const v=M*f-r;g.push(v,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const M=x+c*d,v=x+c*(d+1),C=x+1+c*(d+1),P=x+1+c*d;p.push(M,v,P),p.push(v,C,P)}this.setIndex(p),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ua extends Un{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new G,h=new G,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const x=[],M=d/i;let v=0;d===0&&o===0?v=.5/t:d===i&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const P=C/t;f.x=-e*Math.cos(s+P*r)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(s+P*r)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(P+v,1-M),x.push(c++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<t;x++){const M=u[d][x+1],v=u[d][x],C=u[d+1][x],P=u[d+1][x+1];(d!==0||o>0)&&p.push(M,v,P),(d!==i-1||l<Math.PI)&&p.push(v,C,P)}this.setIndex(p),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ET extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zl extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j_,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ci extends zl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class MT extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ST extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Wa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function bT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function TT(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Bp(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function uv(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class fa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class AT extends fa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:np,endingEnd:np}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ip:r=e,a=2*t-i;break;case sp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ip:o=e,l=2*i-t;break;case sp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,d=-h*m+2*h*_-h*g,x=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let C=0;C!==a;++C)r[C]=d*o[u+C]+x*o[c+C]+M*o[l+C]+v*o[f+C];return r}}class wT extends fa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class RT extends fa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wa(t,this.TimeBufferType),this.values=Wa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wa(e.times,Array),values:Wa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new RT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new AT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qo:t=this.InterpolantFactoryMethodDiscrete;break;case Zo:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qo;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&bT(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,h=f-i,p=f+i;for(let g=0;g!==i;++g){const _=t[f+g];if(_!==t[h+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=Zo;class to extends Pi{constructor(e,t,i){super(e,t,i)}}to.prototype.ValueTypeName="bool";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=qo;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;class fv extends Pi{}fv.prototype.ValueTypeName="color";class qr extends Pi{}qr.prototype.ValueTypeName="number";class CT extends fa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)$n.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Zr extends Pi{InterpolantFactoryMethodLinear(e){return new CT(this.times,this.values,this.getValueSize(),e)}}Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends Pi{constructor(e,t,i){super(e,t,i)}}no.prototype.ValueTypeName="string";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=qo;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends Pi{}Jr.prototype.ValueTypeName="vector";class PT{constructor(e="",t=-1,i=[],s=ub){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(IT(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Pi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=TT(l);l=Bp(l,1,u),c=Bp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new qr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,p,g,_){if(p.length!==0){const m=[],d=[];uv(p,m,d,g),m.length!==0&&_.push(new f(h,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)p[h[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let x=0;x!==h[g].morphTargets.length;++x){const M=h[g];m.push(M.time),d.push(M.morphTarget===_?1:0)}s.push(new qr(".morphTargetInfluence["+_+"]",m,d))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(Jr,p+".position",h,"pos",s),i(Zr,p+".quaternion",h,"rot",s),i(Jr,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function LT(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qr;case"vector":case"vector2":case"vector3":case"vector4":return Jr;case"color":return fv;case"quaternion":return Zr;case"bool":case"boolean":return to;case"string":return no}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function IT(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=LT(n.type);if(n.times===void 0){const t=[],i=[];uv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Es={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class DT{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const NT=new DT;class io{constructor(e){this.manager=e!==void 0?e:NT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}io.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class OT extends Error{constructor(e,t){super(e),this.response=t}}class hv extends io{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Es.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:i,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){x();function x(){f.read().then(({done:M,value:v})=>{if(M)d.close();else{_+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let P=0,w=u.length;P<w;P++){const V=u[P];V.onProgress&&V.onProgress(C)}d.enqueue(v),x()}},M=>{d.error(M)})}}});return new Response(m)}else throw new OT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Es.add(e,c);const u=Vi[e];delete Vi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class UT extends io{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Es.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Jo("img");function l(){u(),Es.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class FT extends io{constructor(e){super(e)}load(e,t,i,s){const r=new Xt,o=new UT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ha extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kT extends ha{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const kc=new je,Hp=new G,Vp=new G;class ch{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hp),Vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vp),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class BT extends ch{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class HT extends ha{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new BT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gp=new je,xo=new G,Bc=new G;class VT extends ch{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(xo),Bc.copy(i.position),Bc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Bc),i.updateMatrixWorld(),s.makeTranslation(-xo.x,-xo.y,-xo.z),Gp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gp)}}class GT extends ha{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new VT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uh extends nv{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zT extends ch{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qo extends ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new zT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dv extends ha{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class No{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class WT extends io{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Es.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Es.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Es.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Es.add(e,l),r.manager.itemStart(e)}}class XT extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $T{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zp(){return performance.now()}const fh="\\[\\]\\.:\\/",jT=new RegExp("["+fh+"]","g"),hh="[^"+fh+"]",YT="[^"+fh.replace("\\.","")+"]",KT=/((?:WC+[\/:])*)/.source.replace("WC",hh),qT=/(WCOD+)?/.source.replace("WCOD",YT),ZT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),JT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),QT=new RegExp("^"+KT+qT+ZT+JT+"$"),eA=["material","materials","bones","map"];class tA{constructor(e,t,i){const s=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class yt{constructor(e,t,i){this.path=t,this.parsedPath=i||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,i):new yt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jT,"")}static parseTrackName(e){const t=QT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);eA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=tA;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Wp=new je;class nA{constructor(e,t,i=0,s=1/0){this.ray=new eo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wp),this}intersectObject(e,t=!0,i=[]){return pf(e,this,i,t),i.sort(Xp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)pf(e[s],this,i,t);return i.sort(Xp),i}}function Xp(n,e){return n.distance-e.distance}function pf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)pf(r[o],e,t,!0)}}class $p{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iA extends ir{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function jp(n,e,t,i){const s=sA(i);switch(t){case H_:return n*e;case G_:return n*e;case z_:return n*e*2;case Jf:return n*e/s.components*s.byteLength;case Qf:return n*e/s.components*s.byteLength;case W_:return n*e*2/s.components*s.byteLength;case eh:return n*e*2/s.components*s.byteLength;case V_:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case th:return n*e*4/s.components*s.byteLength;case tl:case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case il:case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ku:case Hu:return Math.max(n,16)*Math.max(e,8)/4;case Fu:case Bu:return Math.max(n,8)*Math.max(e,8)/2;case Vu:case Gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $u:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ju:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case qu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ef:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rl:case rf:case of:return Math.ceil(n/4)*Math.ceil(e/4)*16;case X_:case af:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lf:case cf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sA(n){switch(n){case ns:case F_:return{byteLength:1,components:1};case Ko:case k_:case la:return{byteLength:2,components:1};case qf:case Zf:return{byteLength:2,components:4};case er:case Kf:case si:return{byteLength:4,components:1};case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pv(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function rA(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var oA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aA=`#ifdef USE_ALPHAHASH
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
#endif`,lA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hA=`#ifdef USE_AOMAP
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
#endif`,dA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pA=`#ifdef USE_BATCHING
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
#endif`,mA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_A=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xA=`#ifdef USE_IRIDESCENCE
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
#endif`,yA=`#ifdef USE_BUMPMAP
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
#endif`,EA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,CA=`#define PI 3.141592653589793
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
} // validated`,PA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LA=`vec3 transformedNormal = objectNormal;
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
#endif`,IA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UA="gl_FragColor = linearToOutputTexel( gl_FragColor );",FA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kA=`#ifdef USE_ENVMAP
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
#endif`,BA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HA=`#ifdef USE_ENVMAP
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
#endif`,VA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GA=`#ifdef USE_ENVMAP
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
#endif`,zA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$A=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jA=`#ifdef USE_GRADIENTMAP
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
}`,YA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZA=`uniform bool receiveShadow;
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
#endif`,JA=`#ifdef USE_ENVMAP
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
#endif`,QA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iw=`PhysicalMaterial material;
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
#endif`,sw=`struct PhysicalMaterial {
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
}`,rw=`
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
#endif`,ow=`#if defined( RE_IndirectDiffuse )
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
#endif`,aw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mw=`#if defined( USE_POINTS_UV )
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
#endif`,gw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ew=`#ifdef USE_MORPHTARGETS
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
#endif`,Mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rw=`#ifdef USE_NORMALMAP
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
#endif`,Cw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ow=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ww=`float getShadowMask() {
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
}`,Xw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$w=`#ifdef USE_SKINNING
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
#endif`,jw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yw=`#ifdef USE_SKINNING
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
#endif`,Kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qw=`#ifdef USE_TRANSMISSION
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
#endif`,eR=`#ifdef USE_TRANSMISSION
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
#endif`,tR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oR=`uniform sampler2D t2D;
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
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fR=`#include <common>
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
}`,hR=`#if DEPTH_PACKING == 3200
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
}`,dR=`#define DISTANCE
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
}`,pR=`#define DISTANCE
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
}`,mR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_R=`uniform float scale;
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
}`,vR=`uniform vec3 diffuse;
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
}`,xR=`#include <common>
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
}`,yR=`uniform vec3 diffuse;
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
}`,ER=`#define LAMBERT
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
}`,MR=`#define LAMBERT
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
}`,SR=`#define MATCAP
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
}`,bR=`#define MATCAP
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
}`,TR=`#define NORMAL
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
}`,AR=`#define NORMAL
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
}`,wR=`#define PHONG
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
}`,RR=`#define PHONG
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
}`,CR=`#define STANDARD
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
}`,PR=`#define STANDARD
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
}`,LR=`#define TOON
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
}`,IR=`#define TOON
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
}`,DR=`uniform float size;
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
}`,NR=`uniform vec3 diffuse;
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
}`,OR=`#include <common>
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
}`,UR=`uniform vec3 color;
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
}`,FR=`uniform float rotation;
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
}`,kR=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:oA,alphahash_pars_fragment:aA,alphamap_fragment:lA,alphamap_pars_fragment:cA,alphatest_fragment:uA,alphatest_pars_fragment:fA,aomap_fragment:hA,aomap_pars_fragment:dA,batching_pars_vertex:pA,batching_vertex:mA,begin_vertex:gA,beginnormal_vertex:_A,bsdfs:vA,iridescence_fragment:xA,bumpmap_pars_fragment:yA,clipping_planes_fragment:EA,clipping_planes_pars_fragment:MA,clipping_planes_pars_vertex:SA,clipping_planes_vertex:bA,color_fragment:TA,color_pars_fragment:AA,color_pars_vertex:wA,color_vertex:RA,common:CA,cube_uv_reflection_fragment:PA,defaultnormal_vertex:LA,displacementmap_pars_vertex:IA,displacementmap_vertex:DA,emissivemap_fragment:NA,emissivemap_pars_fragment:OA,colorspace_fragment:UA,colorspace_pars_fragment:FA,envmap_fragment:kA,envmap_common_pars_fragment:BA,envmap_pars_fragment:HA,envmap_pars_vertex:VA,envmap_physical_pars_fragment:JA,envmap_vertex:GA,fog_vertex:zA,fog_pars_vertex:WA,fog_fragment:XA,fog_pars_fragment:$A,gradientmap_pars_fragment:jA,lightmap_pars_fragment:YA,lights_lambert_fragment:KA,lights_lambert_pars_fragment:qA,lights_pars_begin:ZA,lights_toon_fragment:QA,lights_toon_pars_fragment:ew,lights_phong_fragment:tw,lights_phong_pars_fragment:nw,lights_physical_fragment:iw,lights_physical_pars_fragment:sw,lights_fragment_begin:rw,lights_fragment_maps:ow,lights_fragment_end:aw,logdepthbuf_fragment:lw,logdepthbuf_pars_fragment:cw,logdepthbuf_pars_vertex:uw,logdepthbuf_vertex:fw,map_fragment:hw,map_pars_fragment:dw,map_particle_fragment:pw,map_particle_pars_fragment:mw,metalnessmap_fragment:gw,metalnessmap_pars_fragment:_w,morphinstance_vertex:vw,morphcolor_vertex:xw,morphnormal_vertex:yw,morphtarget_pars_vertex:Ew,morphtarget_vertex:Mw,normal_fragment_begin:Sw,normal_fragment_maps:bw,normal_pars_fragment:Tw,normal_pars_vertex:Aw,normal_vertex:ww,normalmap_pars_fragment:Rw,clearcoat_normal_fragment_begin:Cw,clearcoat_normal_fragment_maps:Pw,clearcoat_pars_fragment:Lw,iridescence_pars_fragment:Iw,opaque_fragment:Dw,packing:Nw,premultiplied_alpha_fragment:Ow,project_vertex:Uw,dithering_fragment:Fw,dithering_pars_fragment:kw,roughnessmap_fragment:Bw,roughnessmap_pars_fragment:Hw,shadowmap_pars_fragment:Vw,shadowmap_pars_vertex:Gw,shadowmap_vertex:zw,shadowmask_pars_fragment:Ww,skinbase_vertex:Xw,skinning_pars_vertex:$w,skinning_vertex:jw,skinnormal_vertex:Yw,specularmap_fragment:Kw,specularmap_pars_fragment:qw,tonemapping_fragment:Zw,tonemapping_pars_fragment:Jw,transmission_fragment:Qw,transmission_pars_fragment:eR,uv_pars_fragment:tR,uv_pars_vertex:nR,uv_vertex:iR,worldpos_vertex:sR,background_vert:rR,background_frag:oR,backgroundCube_vert:aR,backgroundCube_frag:lR,cube_vert:cR,cube_frag:uR,depth_vert:fR,depth_frag:hR,distanceRGBA_vert:dR,distanceRGBA_frag:pR,equirect_vert:mR,equirect_frag:gR,linedashed_vert:_R,linedashed_frag:vR,meshbasic_vert:xR,meshbasic_frag:yR,meshlambert_vert:ER,meshlambert_frag:MR,meshmatcap_vert:SR,meshmatcap_frag:bR,meshnormal_vert:TR,meshnormal_frag:AR,meshphong_vert:wR,meshphong_frag:RR,meshphysical_vert:CR,meshphysical_frag:PR,meshtoon_vert:LR,meshtoon_frag:IR,points_vert:DR,points_frag:NR,shadow_vert:OR,shadow_frag:UR,sprite_vert:FR,sprite_frag:kR},be={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},vi={basic:{uniforms:hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:hn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:hn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:hn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:hn([be.points,be.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:hn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:hn([be.common,be.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:hn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:hn([be.sprite,be.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:hn([be.common,be.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:hn([be.lights,be.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};vi.physical={uniforms:hn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Xa={r:0,b:0,g:0},ks=new Ti,BR=new je;function HR(n,e,t,i,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const C=g(M);C===null?d(a,l):C&&C.isColor&&(d(C,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===Vl)?(u===void 0&&(u=new Qt(new ca(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Kr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ks.copy(v.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(BR.makeRotationFromEuler(ks)),u.material.toneMapped=nt.getTransfer(C.colorSpace)!==Et,(f!==C||h!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,p=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Qt(new Gl(2,2),new jn({name:"BackgroundMaterial",uniforms:Kr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(C.colorSpace)!==Et,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,v){M.getRGB(Xa,tv(n)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:m,dispose:x}}function VR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(b,U,H,X,oe){let ae=!1;const ee=f(X,H,U);r!==ee&&(r=ee,c(r.object)),ae=p(b,X,H,oe),ae&&g(b,X,H,oe),oe!==null&&e.update(oe,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,v(b,U,H,X),oe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,U,H){const X=H.wireframe===!0;let oe=i[b.id];oe===void 0&&(oe={},i[b.id]=oe);let ae=oe[U.id];ae===void 0&&(ae={},oe[U.id]=ae);let ee=ae[X];return ee===void 0&&(ee=h(l()),ae[X]=ee),ee}function h(b){const U=[],H=[],X=[];for(let oe=0;oe<t;oe++)U[oe]=0,H[oe]=0,X[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:X,object:b,attributes:{},index:null}}function p(b,U,H,X){const oe=r.attributes,ae=U.attributes;let ee=0;const se=H.getAttributes();for(const Y in se)if(se[Y].location>=0){const ve=oe[Y];let ye=ae[Y];if(ye===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),ve===void 0||ve.attribute!==ye||ye&&ve.data!==ye.data)return!0;ee++}return r.attributesNum!==ee||r.index!==X}function g(b,U,H,X){const oe={},ae=U.attributes;let ee=0;const se=H.getAttributes();for(const Y in se)if(se[Y].location>=0){let ve=ae[Y];ve===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor));const ye={};ye.attribute=ve,ve&&ve.data&&(ye.data=ve.data),oe[Y]=ye,ee++}r.attributes=oe,r.attributesNum=ee,r.index=X}function _(){const b=r.newAttributes;for(let U=0,H=b.length;U<H;U++)b[U]=0}function m(b){d(b,0)}function d(b,U){const H=r.newAttributes,X=r.enabledAttributes,oe=r.attributeDivisors;H[b]=1,X[b]===0&&(n.enableVertexAttribArray(b),X[b]=1),oe[b]!==U&&(n.vertexAttribDivisor(b,U),oe[b]=U)}function x(){const b=r.newAttributes,U=r.enabledAttributes;for(let H=0,X=U.length;H<X;H++)U[H]!==b[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function M(b,U,H,X,oe,ae,ee){ee===!0?n.vertexAttribIPointer(b,U,H,oe,ae):n.vertexAttribPointer(b,U,H,X,oe,ae)}function v(b,U,H,X){_();const oe=X.attributes,ae=H.getAttributes(),ee=U.defaultAttributeValues;for(const se in ae){const Y=ae[se];if(Y.location>=0){let me=oe[se];if(me===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),me!==void 0){const ve=me.normalized,ye=me.itemSize,Ne=e.get(me);if(Ne===void 0)continue;const Oe=Ne.buffer,ne=Ne.type,pe=Ne.bytesPerElement,xe=ne===n.INT||ne===n.UNSIGNED_INT||me.gpuType===Kf;if(me.isInterleavedBufferAttribute){const B=me.data,ie=B.stride,re=me.offset;if(B.isInstancedInterleavedBuffer){for(let he=0;he<Y.locationSize;he++)d(Y.location+he,B.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let he=0;he<Y.locationSize;he++)m(Y.location+he);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let he=0;he<Y.locationSize;he++)M(Y.location+he,ye/Y.locationSize,ne,ve,ie*pe,(re+ye/Y.locationSize*he)*pe,xe)}else{if(me.isInstancedBufferAttribute){for(let B=0;B<Y.locationSize;B++)d(Y.location+B,me.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let B=0;B<Y.locationSize;B++)m(Y.location+B);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let B=0;B<Y.locationSize;B++)M(Y.location+B,ye/Y.locationSize,ne,ve,ye*pe,ye/Y.locationSize*B*pe,xe)}}else if(ee!==void 0){const ve=ee[se];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(Y.location,ve);break;case 3:n.vertexAttrib3fv(Y.location,ve);break;case 4:n.vertexAttrib4fv(Y.location,ve);break;default:n.vertexAttrib1fv(Y.location,ve)}}}}x()}function C(){V();for(const b in i){const U=i[b];for(const H in U){const X=U[H];for(const oe in X)u(X[oe].object),delete X[oe];delete U[H]}delete i[b]}}function P(b){if(i[b.id]===void 0)return;const U=i[b.id];for(const H in U){const X=U[H];for(const oe in X)u(X[oe].object),delete X[oe];delete U[H]}delete i[b.id]}function w(b){for(const U in i){const H=i[U];if(H[b.id]===void 0)continue;const X=H[b.id];for(const oe in X)u(X[oe].object),delete X[oe];delete H[b.id]}}function V(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function GR(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zR(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Nn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const V=w===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ns&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==si&&!V)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:C,maxSamples:P}}function WR(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new gs,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,M=x*4;let v=d.clippingState||null;l.value=v,v=u(g,h,M,p);for(let C=0;C!==M;++C)v[C]=t[C];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,v=p;M!==_;++M,v+=4)o.copy(f[M]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function XR(n){let e=new WeakMap;function t(o,a){return a===Ou?o.mapping=zr:a===Uu&&(o.mapping=Wr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ou||a===Uu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cT(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Rr=4,Yp=[.125,.215,.35,.446,.526,.582],Xs=20,Hc=new uh,Kp=new Ve;let Vc=null,Gc=0,zc=0,Wc=!1;const Gs=(1+Math.sqrt(5))/2,yr=1/Gs,qp=[new G(-Gs,yr,0),new G(Gs,yr,0),new G(-yr,0,Gs),new G(yr,0,Gs),new G(0,Gs,-yr),new G(0,Gs,yr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,zc),this._renderer.xr.enabled=Wc,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:la,format:Nn,colorSpace:yn,depthBuffer:!1},s=Jp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$R(r)),this._blurMaterial=jR(r,e,t)}return s}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Hc)}_sceneToCubeUV(e,t,i,s){const a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Kp),u.toneMapping=Ss,u.autoClear=!1;const p=new ys({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Qt(new ca,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Kp),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;$a(s,x*M,d>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===zr||e.mapping===Wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qp[(s-r-1)%qp.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qt(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Xs;m>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xs}`);const d=[];let x=0;for(let w=0;w<Xs;++w){const V=w/_,T=Math.exp(-V*V/2);d.push(T),w===0?x+=T:w<m&&(x+=2*T)}for(let w=0;w<d.length;w++)d[w]=d[w]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const v=this._sizeLods[s],C=3*v*(s>M-Rr?s-M+Rr:0),P=4*(this._cubeSize-v);$a(t,C,P,3*v,2*v),l.setRenderTarget(t),l.render(f,Hc)}}function $R(n){const e=[],t=[],i=[];let s=n;const r=n-Rr+1+Yp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Rr?l=Yp[o-n+Rr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),M=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let P=0;P<p;P++){const w=P%3*2/3-1,V=P>2?0:-1,T=[w,V,0,w+2/3,V,0,w+2/3,V+1,0,w,V,0,w+2/3,V+1,0,w,V+1,0];x.set(T,_*g*P),M.set(h,m*g*P);const b=[P,P,P,P,P,P];v.set(b,d*g*P)}const C=new Un;C.setAttribute("position",new Ut(x,_)),C.setAttribute("uv",new Ut(M,m)),C.setAttribute("faceIndex",new Ut(v,d)),e.push(C),s>Rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jp(n,e,t){const i=new tr(n,e,t);return i.texture.mapping=Vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function jR(n,e,t){const i=new Float32Array(Xs),s=new G(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function Qp(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function em(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function YR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ou||l===Uu,u=l===zr||l===Wr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Zp(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Zp(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function KR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ar("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function qR(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let M=0,v=x.length;M<v;M+=3){const C=x[M+0],P=x[M+1],w=x[M+2];h.push(C,P,P,w,w,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const C=M+0,P=M+1,w=M+2;h.push(C,P,P,w,w,C)}}else return;const m=new(K_(h)?ev:Q_)(h,1);m.version=_;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ZR(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*o),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,_,0,g);let d=0;for(let x=0;x<g;x++)d+=p[x]*_[x];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function JR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function QR(n,e,t){const i=new WeakMap,s=new lt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){V.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*P*4*f),V=new Z_(w,C,P,f);V.type=si,V.needsUpdate=!0;const T=v*4;for(let U=0;U<f;U++){const H=d[U],X=x[U],oe=M[U],ae=C*P*4*U;for(let ee=0;ee<H.count;ee++){const se=ee*T;g===!0&&(s.fromBufferAttribute(H,ee),w[ae+se+0]=s.x,w[ae+se+1]=s.y,w[ae+se+2]=s.z,w[ae+se+3]=0),_===!0&&(s.fromBufferAttribute(X,ee),w[ae+se+4]=s.x,w[ae+se+5]=s.y,w[ae+se+6]=s.z,w[ae+se+7]=0),m===!0&&(s.fromBufferAttribute(oe,ee),w[ae+se+8]=s.x,w[ae+se+9]=s.y,w[ae+se+10]=s.z,w[ae+se+11]=oe.itemSize===4?s.w:1)}}h={count:f,texture:V,size:new ze(C,P)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function eC(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const mv=new Xt,tm=new cv(1,1),gv=new Z_,_v=new jb,vv=new iv,nm=[],im=[],sm=new Float32Array(16),rm=new Float32Array(9),om=new Float32Array(4);function so(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=nm[s];if(r===void 0&&(r=new Float32Array(s),nm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wl(n,e){let t=im[e];t===void 0&&(t=new Int32Array(e),im[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function iC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function sC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function rC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,i))return;om.set(i),n.uniformMatrix2fv(this.addr,!1,om),Yt(t,i)}}function oC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,i))return;rm.set(i),n.uniformMatrix3fv(this.addr,!1,rm),Yt(t,i)}}function aC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,i))return;sm.set(i),n.uniformMatrix4fv(this.addr,!1,sm),Yt(t,i)}}function lC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function uC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function fC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function hC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function pC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function mC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function gC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tm.compareFunction=Y_,r=tm):r=mv,t.setTexture2D(e||r,s)}function _C(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_v,s)}function vC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||vv,s)}function xC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gv,s)}function yC(n){switch(n){case 5126:return tC;case 35664:return nC;case 35665:return iC;case 35666:return sC;case 35674:return rC;case 35675:return oC;case 35676:return aC;case 5124:case 35670:return lC;case 35667:case 35671:return cC;case 35668:case 35672:return uC;case 35669:case 35673:return fC;case 5125:return hC;case 36294:return dC;case 36295:return pC;case 36296:return mC;case 35678:case 36198:case 36298:case 36306:case 35682:return gC;case 35679:case 36299:case 36307:return _C;case 35680:case 36300:case 36308:case 36293:return vC;case 36289:case 36303:case 36311:case 36292:return xC}}function EC(n,e){n.uniform1fv(this.addr,e)}function MC(n,e){const t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function SC(n,e){const t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function bC(n,e){const t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function TC(n,e){const t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AC(n,e){const t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wC(n,e){const t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function RC(n,e){n.uniform1iv(this.addr,e)}function CC(n,e){n.uniform2iv(this.addr,e)}function PC(n,e){n.uniform3iv(this.addr,e)}function LC(n,e){n.uniform4iv(this.addr,e)}function IC(n,e){n.uniform1uiv(this.addr,e)}function DC(n,e){n.uniform2uiv(this.addr,e)}function NC(n,e){n.uniform3uiv(this.addr,e)}function OC(n,e){n.uniform4uiv(this.addr,e)}function UC(n,e,t){const i=this.cache,s=e.length,r=Wl(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||mv,r[o])}function FC(n,e,t){const i=this.cache,s=e.length,r=Wl(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_v,r[o])}function kC(n,e,t){const i=this.cache,s=e.length,r=Wl(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vv,r[o])}function BC(n,e,t){const i=this.cache,s=e.length,r=Wl(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gv,r[o])}function HC(n){switch(n){case 5126:return EC;case 35664:return MC;case 35665:return SC;case 35666:return bC;case 35674:return TC;case 35675:return AC;case 35676:return wC;case 5124:case 35670:return RC;case 35667:case 35671:return CC;case 35668:case 35672:return PC;case 35669:case 35673:return LC;case 5125:return IC;case 36294:return DC;case 36295:return NC;case 36296:return OC;case 35678:case 36198:case 36298:case 36306:case 35682:return UC;case 35679:case 36299:case 36307:return FC;case 35680:case 36300:case 36308:case 36293:return kC;case 36289:case 36303:case 36311:case 36292:return BC}}class VC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yC(t.type)}}class GC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HC(t.type)}}class zC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function am(n,e){n.seq.push(e),n.map[e.id]=e}function WC(n,e,t){const i=n.name,s=i.length;for(Xc.lastIndex=0;;){const r=Xc.exec(i),o=Xc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){am(t,c===void 0?new VC(a,n,e):new GC(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new zC(a),am(t,f)),t=f}}}class ol{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);WC(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function lm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const XC=37297;let $C=0;function jC(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const cm=new Ze;function YC(n){nt._getMatrix(cm,nt.workingColorSpace,n);const e=`mat3( ${cm.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case xl:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function um(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+jC(n.getShaderSource(e),o)}else return s}function KC(n,e){const t=YC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qC(n,e){let t;switch(e){case nb:t="Linear";break;case ib:t="Reinhard";break;case sb:t="Cineon";break;case rb:t="ACESFilmic";break;case ab:t="AgX";break;case lb:t="Neutral";break;case ob:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ja=new G;function ZC(){nt.getLuminanceCoefficients(ja);const n=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function QC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function e1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function So(n){return n!==""}function fm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t1=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(n){return n.replace(t1,i1)}const n1=new Map;function i1(n,e){let t=Je[e];if(t===void 0){const i=n1.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mf(t)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(n){return n.replace(s1,r1)}function r1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function o1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===D_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===OS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function a1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zr:case Wr:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wr:e="ENVMAP_MODE_REFRACTION";break}return e}function c1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case N_:e="ENVMAP_BLENDING_MULTIPLY";break;case eb:e="ENVMAP_BLENDING_MIX";break;case tb:e="ENVMAP_BLENDING_ADD";break}return e}function u1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function f1(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=o1(t),c=a1(t),u=l1(t),f=c1(t),h=u1(t),p=JC(t),g=QC(r),_=s.createProgram();let m,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),d.length>0&&(d+=`
`)):(m=[pm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),d=[pm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ss?"#define TONE_MAPPING":"",t.toneMapping!==Ss?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ss?qC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,KC("linearToOutputTexel",t.outputColorSpace),ZC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),o=mf(o),o=fm(o,t),o=hm(o,t),a=mf(a),a=fm(a,t),a=hm(a,t),o=dm(o),a=dm(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===op?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=x+m+o,v=x+d+a,C=lm(s,s.VERTEX_SHADER,M),P=lm(s,s.FRAGMENT_SHADER,v);s.attachShader(_,C),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(U){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),X=s.getShaderInfoLog(C).trim(),oe=s.getShaderInfoLog(P).trim();let ae=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,P);else{const se=um(s,C,"vertex"),Y=um(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+se+`
`+Y)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(X===""||oe==="")&&(ee=!1);ee&&(U.diagnostics={runnable:ae,programLog:H,vertexShader:{log:X,prefix:m},fragmentShader:{log:oe,prefix:d}})}s.deleteShader(C),s.deleteShader(P),V=new ol(s,_),T=e1(s,_)}let V;this.getUniforms=function(){return V===void 0&&w(this),V};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,XC)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$C++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=P,this}let h1=0;class d1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new p1(e),t.set(e,i)),i}}class p1{constructor(e){this.id=h1++,this.code=e,this.usedTimes=0}}function m1(n,e,t,i,s,r,o){const a=new ih,l=new d1,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,U,H,X){const oe=H.fog,ae=X.geometry,ee=T.isMeshStandardMaterial?H.environment:null,se=(T.isMeshStandardMaterial?t:e).get(T.envMap||ee),Y=se&&se.mapping===Vl?se.image.height:null,me=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ve=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ye=ve!==void 0?ve.length:0;let Ne=0;ae.morphAttributes.position!==void 0&&(Ne=1),ae.morphAttributes.normal!==void 0&&(Ne=2),ae.morphAttributes.color!==void 0&&(Ne=3);let Oe,ne,pe,xe;if(me){const vt=vi[me];Oe=vt.vertexShader,ne=vt.fragmentShader}else Oe=T.vertexShader,ne=T.fragmentShader,l.update(T),pe=l.getVertexShaderID(T),xe=l.getFragmentShaderID(T);const B=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),re=X.isInstancedMesh===!0,he=X.isBatchedMesh===!0,Le=!!T.map,D=!!T.matcap,O=!!se,S=!!T.aoMap,te=!!T.lightMap,Z=!!T.bumpMap,K=!!T.normalMap,A=!!T.displacementMap,L=!!T.emissiveMap,F=!!T.metalnessMap,y=!!T.roughnessMap,E=T.anisotropy>0,N=T.clearcoat>0,I=T.dispersion>0,k=T.iridescence>0,$=T.sheen>0,ce=T.transmission>0,ue=E&&!!T.anisotropyMap,ge=N&&!!T.clearcoatMap,Ie=N&&!!T.clearcoatNormalMap,de=N&&!!T.clearcoatRoughnessMap,Se=k&&!!T.iridescenceMap,Ue=k&&!!T.iridescenceThicknessMap,He=$&&!!T.sheenColorMap,Ee=$&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ye=!!T.specularColorMap,_t=!!T.specularIntensityMap,z=ce&&!!T.transmissionMap,Te=ce&&!!T.thicknessMap,le=!!T.gradientMap,fe=!!T.alphaMap,Re=T.alphaTest>0,we=!!T.alphaHash,qe=!!T.extensions;let Lt=Ss;T.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Lt=n.toneMapping);const tn={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:Oe,fragmentShader:ne,defines:T.defines,customVertexShaderID:pe,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:he,batchingColor:he&&X._colorsTexture!==null,instancing:re,instancingColor:re&&X.instanceColor!==null,instancingMorph:re&&X.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:yn,alphaToCoverage:!!T.alphaToCoverage,map:Le,matcap:D,envMap:O,envMapMode:O&&se.mapping,envMapCubeUVHeight:Y,aoMap:S,lightMap:te,bumpMap:Z,normalMap:K,displacementMap:h&&A,emissiveMap:L,normalMapObjectSpace:K&&T.normalMapType===pb,normalMapTangentSpace:K&&T.normalMapType===j_,metalnessMap:F,roughnessMap:y,anisotropy:E,anisotropyMap:ue,clearcoat:N,clearcoatMap:ge,clearcoatNormalMap:Ie,clearcoatRoughnessMap:de,dispersion:I,iridescence:k,iridescenceMap:Se,iridescenceThicknessMap:Ue,sheen:$,sheenColorMap:He,sheenRoughnessMap:Ee,specularMap:We,specularColorMap:Ye,specularIntensityMap:_t,transmission:ce,transmissionMap:z,thicknessMap:Te,gradientMap:le,opaque:T.transparent===!1&&T.blending===Zs&&T.alphaToCoverage===!1,alphaMap:fe,alphaTest:Re,alphaHash:we,combine:T.combine,mapUv:Le&&_(T.map.channel),aoMapUv:S&&_(T.aoMap.channel),lightMapUv:te&&_(T.lightMap.channel),bumpMapUv:Z&&_(T.bumpMap.channel),normalMapUv:K&&_(T.normalMap.channel),displacementMapUv:A&&_(T.displacementMap.channel),emissiveMapUv:L&&_(T.emissiveMap.channel),metalnessMapUv:F&&_(T.metalnessMap.channel),roughnessMapUv:y&&_(T.roughnessMap.channel),anisotropyMapUv:ue&&_(T.anisotropyMap.channel),clearcoatMapUv:ge&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(T.sheenRoughnessMap.channel),specularMapUv:We&&_(T.specularMap.channel),specularColorMapUv:Ye&&_(T.specularColorMap.channel),specularIntensityMapUv:_t&&_(T.specularIntensityMap.channel),transmissionMapUv:z&&_(T.transmissionMap.channel),thicknessMapUv:Te&&_(T.thicknessMap.channel),alphaMapUv:fe&&_(T.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(K||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ae.attributes.uv&&(Le||fe),fog:!!oe,useFog:T.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ie,skinning:X.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Le&&T.map.isVideoTexture===!0&&nt.getTransfer(T.map.colorSpace)===Et,decodeVideoTextureEmissive:L&&T.emissiveMap.isVideoTexture===!0&&nt.getTransfer(T.emissiveMap.colorSpace)===Et,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ei,flipSided:T.side===vn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&T.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return tn.vertexUv1s=c.has(1),tn.vertexUv2s=c.has(2),tn.vertexUv3s=c.has(3),c.clear(),tn}function d(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)b.push(U),b.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(x(b,T),M(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function x(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function M(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const b=g[T.type];let U;if(b){const H=vi[b];U=rT.clone(H.uniforms)}else U=T.uniforms;return U}function C(T,b){let U;for(let H=0,X=u.length;H<X;H++){const oe=u[H];if(oe.cacheKey===b){U=oe,++U.usedTimes;break}}return U===void 0&&(U=new f1(n,b,T,r),u.push(U)),U}function P(T){if(--T.usedTimes===0){const b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:C,releaseProgram:P,releaseShaderCache:w,programs:u,dispose:V}}function g1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function _1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gm(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||_1),i.length>1&&i.sort(h||mm),s.length>1&&s.sort(h||mm)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function v1(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new gm,n.set(i,[o])):s>=r.length?(o=new gm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function x1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ve};break;case"SpotLight":t={position:new G,direction:new G,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function y1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let E1=0;function M1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function S1(n){const e=new x1,t=y1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new je,o=new je;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,x=0,M=0,v=0,C=0,P=0,w=0;c.sort(M1);for(let T=0,b=c.length;T<b;T++){const U=c[T],H=U.color,X=U.intensity,oe=U.distance,ae=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=H.r*X,f+=H.g*X,h+=H.b*X;else if(U.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(U.sh.coefficients[ee],X);w++}else if(U.isDirectionalLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const se=U.shadow,Y=t.get(U);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=U.shadow.matrix,x++}i.directional[p]=ee,p++}else if(U.isSpotLight){const ee=e.get(U);ee.position.setFromMatrixPosition(U.matrixWorld),ee.color.copy(H).multiplyScalar(X),ee.distance=oe,ee.coneCos=Math.cos(U.angle),ee.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ee.decay=U.decay,i.spot[_]=ee;const se=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,se.updateMatrices(U),U.castShadow&&P++),i.spotLightMatrix[_]=se.matrix,U.castShadow){const Y=t.get(U);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=ae,v++}_++}else if(U.isRectAreaLight){const ee=e.get(U);ee.color.copy(H).multiplyScalar(X),ee.halfWidth.set(U.width*.5,0,0),ee.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=ee,m++}else if(U.isPointLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),ee.distance=U.distance,ee.decay=U.decay,U.castShadow){const se=U.shadow,Y=t.get(U);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,Y.shadowCameraNear=se.camera.near,Y.shadowCameraFar=se.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=U.shadow.matrix,M++}i.point[g]=ee,g++}else if(U.isHemisphereLight){const ee=e.get(U);ee.skyColor.copy(U.color).multiplyScalar(X),ee.groundColor.copy(U.groundColor).multiplyScalar(X),i.hemi[d]=ee,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const V=i.hash;(V.directionalLength!==p||V.pointLength!==g||V.spotLength!==_||V.rectAreaLength!==m||V.hemiLength!==d||V.numDirectionalShadows!==x||V.numPointShadows!==M||V.numSpotShadows!==v||V.numSpotMaps!==C||V.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=w,V.directionalLength=p,V.pointLength=g,V.spotLength=_,V.rectAreaLength=m,V.hemiLength=d,V.numDirectionalShadows=x,V.numPointShadows=M,V.numSpotShadows=v,V.numSpotMaps=C,V.numLightProbes=w,i.version=E1++)}function l(c,u){let f=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const M=c[d];if(M.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function _m(n){const e=new S1(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function b1(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new _m(n),e.set(s,[a])):r>=o.length?(a=new _m(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const T1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A1=`uniform sampler2D shadow_pass;
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
}`;function w1(n,e,t){let i=new ah;const s=new ze,r=new ze,o=new lt,a=new MT({depthPacking:db}),l=new ST,c={},u=t.maxTextureSize,f={[ts]:vn,[vn]:ts,[ei]:ei},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:T1,fragmentShader:A1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Un;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D_;let d=this.type;this.render=function(P,w,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Ms),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const X=d!==Gi&&this.type===Gi,oe=d===Gi&&this.type!==Gi;for(let ae=0,ee=P.length;ae<ee;ae++){const se=P[ae],Y=se.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const me=Y.getFrameExtents();if(s.multiply(me),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,Y.mapSize.y=r.y)),Y.map===null||X===!0||oe===!0){const ye=this.type!==Gi?{minFilter:xn,magFilter:xn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new tr(s.x,s.y,ye),Y.map.texture.name=se.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const ve=Y.getViewportCount();for(let ye=0;ye<ve;ye++){const Ne=Y.getViewport(ye);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),H.viewport(o),Y.updateMatrices(se,ye),i=Y.getFrustum(),v(w,V,Y.camera,se,this.type)}Y.isPointLightShadow!==!0&&this.type===Gi&&x(Y,V),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,b,U)};function x(P,w){const V=e.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new tr(s.x,s.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(w,null,V,h,_,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(w,null,V,p,_,null)}function M(P,w,V,T){let b=null;const U=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)b=U;else if(b=V.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=b.uuid,X=w.uuid;let oe=c[H];oe===void 0&&(oe={},c[H]=oe);let ae=oe[X];ae===void 0&&(ae=b.clone(),oe[X]=ae,w.addEventListener("dispose",C)),b=ae}if(b.visible=w.visible,b.wireframe=w.wireframe,T===Gi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:f[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,V.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=n.properties.get(b);H.light=V}return b}function v(P,w,V,T,b){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Gi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const X=e.update(P),oe=P.material;if(Array.isArray(oe)){const ae=X.groups;for(let ee=0,se=ae.length;ee<se;ee++){const Y=ae[ee],me=oe[Y.materialIndex];if(me&&me.visible){const ve=M(P,me,T,b);P.onBeforeShadow(n,P,w,V,X,ve,Y),n.renderBufferDirect(V,null,X,ve,P,Y),P.onAfterShadow(n,P,w,V,X,ve,Y)}}}else if(oe.visible){const ae=M(P,oe,T,b);P.onBeforeShadow(n,P,w,V,X,ae,null),n.renderBufferDirect(V,null,X,ae,P,null),P.onAfterShadow(n,P,w,V,X,ae,null)}}const H=P.children;for(let X=0,oe=H.length;X<oe;X++)v(H[X],w,V,T,b)}function C(P){P.target.removeEventListener("dispose",C);for(const V in c){const T=c[V],b=P.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const R1={[Ru]:Cu,[Pu]:Du,[Lu]:Nu,[Gr]:Iu,[Cu]:Ru,[Du]:Pu,[Nu]:Lu,[Iu]:Gr};function C1(n,e){function t(){let z=!1;const Te=new lt;let le=null;const fe=new lt(0,0,0,0);return{setMask:function(Re){le!==Re&&!z&&(n.colorMask(Re,Re,Re,Re),le=Re)},setLocked:function(Re){z=Re},setClear:function(Re,we,qe,Lt,tn){tn===!0&&(Re*=Lt,we*=Lt,qe*=Lt),Te.set(Re,we,qe,Lt),fe.equals(Te)===!1&&(n.clearColor(Re,we,qe,Lt),fe.copy(Te))},reset:function(){z=!1,le=null,fe.set(-1,0,0,0)}}}function i(){let z=!1,Te=!1,le=null,fe=null,Re=null;return{setReversed:function(we){if(Te!==we){const qe=e.get("EXT_clip_control");Te?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const Lt=Re;Re=null,this.setClear(Lt)}Te=we},getReversed:function(){return Te},setTest:function(we){we?B(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(we){le!==we&&!z&&(n.depthMask(we),le=we)},setFunc:function(we){if(Te&&(we=R1[we]),fe!==we){switch(we){case Ru:n.depthFunc(n.NEVER);break;case Cu:n.depthFunc(n.ALWAYS);break;case Pu:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case Lu:n.depthFunc(n.EQUAL);break;case Iu:n.depthFunc(n.GEQUAL);break;case Du:n.depthFunc(n.GREATER);break;case Nu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=we}},setLocked:function(we){z=we},setClear:function(we){Re!==we&&(Te&&(we=1-we),n.clearDepth(we),Re=we)},reset:function(){z=!1,le=null,fe=null,Re=null,Te=!1}}}function s(){let z=!1,Te=null,le=null,fe=null,Re=null,we=null,qe=null,Lt=null,tn=null;return{setTest:function(vt){z||(vt?B(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(vt){Te!==vt&&!z&&(n.stencilMask(vt),Te=vt)},setFunc:function(vt,Yn,Li){(le!==vt||fe!==Yn||Re!==Li)&&(n.stencilFunc(vt,Yn,Li),le=vt,fe=Yn,Re=Li)},setOp:function(vt,Yn,Li){(we!==vt||qe!==Yn||Lt!==Li)&&(n.stencilOp(vt,Yn,Li),we=vt,qe=Yn,Lt=Li)},setLocked:function(vt){z=vt},setClear:function(vt){tn!==vt&&(n.clearStencil(vt),tn=vt)},reset:function(){z=!1,Te=null,le=null,fe=null,Re=null,we=null,qe=null,Lt=null,tn=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,x=null,M=null,v=null,C=null,P=null,w=new Ve(0,0,0),V=0,T=!1,b=null,U=null,H=null,X=null,oe=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,se=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ee=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ee=se>=2);let me=null,ve={};const ye=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Oe=new lt().fromArray(ye),ne=new lt().fromArray(Ne);function pe(z,Te,le,fe){const Re=new Uint8Array(4),we=n.createTexture();n.bindTexture(z,we),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<le;qe++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Te+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return we}const xe={};xe[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(n.DEPTH_TEST),o.setFunc(Gr),Z(!1),K(Jd),B(n.CULL_FACE),S(Ms);function B(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function ie(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function re(z,Te){return f[z]!==Te?(n.bindFramebuffer(z,Te),f[z]=Te,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Te),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function he(z,Te){let le=p,fe=!1;if(z){le=h.get(Te),le===void 0&&(le=[],h.set(Te,le));const Re=z.textures;if(le.length!==Re.length||le[0]!==n.COLOR_ATTACHMENT0){for(let we=0,qe=Re.length;we<qe;we++)le[we]=n.COLOR_ATTACHMENT0+we;le.length=Re.length,fe=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,fe=!0);fe&&n.drawBuffers(le)}function Le(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const D={[Ws]:n.FUNC_ADD,[FS]:n.FUNC_SUBTRACT,[kS]:n.FUNC_REVERSE_SUBTRACT};D[BS]=n.MIN,D[HS]=n.MAX;const O={[VS]:n.ZERO,[GS]:n.ONE,[zS]:n.SRC_COLOR,[Au]:n.SRC_ALPHA,[KS]:n.SRC_ALPHA_SATURATE,[jS]:n.DST_COLOR,[XS]:n.DST_ALPHA,[WS]:n.ONE_MINUS_SRC_COLOR,[wu]:n.ONE_MINUS_SRC_ALPHA,[YS]:n.ONE_MINUS_DST_COLOR,[$S]:n.ONE_MINUS_DST_ALPHA,[qS]:n.CONSTANT_COLOR,[ZS]:n.ONE_MINUS_CONSTANT_COLOR,[JS]:n.CONSTANT_ALPHA,[QS]:n.ONE_MINUS_CONSTANT_ALPHA};function S(z,Te,le,fe,Re,we,qe,Lt,tn,vt){if(z===Ms){_===!0&&(ie(n.BLEND),_=!1);return}if(_===!1&&(B(n.BLEND),_=!0),z!==US){if(z!==m||vt!==T){if((d!==Ws||v!==Ws)&&(n.blendEquation(n.FUNC_ADD),d=Ws,v=Ws),vt)switch(z){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _l:n.blendFunc(n.ONE,n.ONE);break;case Qd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ep:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _l:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ep:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,M=null,C=null,P=null,w.set(0,0,0),V=0,m=z,T=vt}return}Re=Re||Te,we=we||le,qe=qe||fe,(Te!==d||Re!==v)&&(n.blendEquationSeparate(D[Te],D[Re]),d=Te,v=Re),(le!==x||fe!==M||we!==C||qe!==P)&&(n.blendFuncSeparate(O[le],O[fe],O[we],O[qe]),x=le,M=fe,C=we,P=qe),(Lt.equals(w)===!1||tn!==V)&&(n.blendColor(Lt.r,Lt.g,Lt.b,tn),w.copy(Lt),V=tn),m=z,T=!1}function te(z,Te){z.side===ei?ie(n.CULL_FACE):B(n.CULL_FACE);let le=z.side===vn;Te&&(le=!le),Z(le),z.blending===Zs&&z.transparent===!1?S(Ms):S(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const fe=z.stencilWrite;a.setTest(fe),fe&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),L(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(z){b!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),b=z)}function K(z){z!==DS?(B(n.CULL_FACE),z!==U&&(z===Jd?n.cullFace(n.BACK):z===NS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),U=z}function A(z){z!==H&&(ee&&n.lineWidth(z),H=z)}function L(z,Te,le){z?(B(n.POLYGON_OFFSET_FILL),(X!==Te||oe!==le)&&(n.polygonOffset(Te,le),X=Te,oe=le)):ie(n.POLYGON_OFFSET_FILL)}function F(z){z?B(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function y(z){z===void 0&&(z=n.TEXTURE0+ae-1),me!==z&&(n.activeTexture(z),me=z)}function E(z,Te,le){le===void 0&&(me===null?le=n.TEXTURE0+ae-1:le=me);let fe=ve[le];fe===void 0&&(fe={type:void 0,texture:void 0},ve[le]=fe),(fe.type!==z||fe.texture!==Te)&&(me!==le&&(n.activeTexture(le),me=le),n.bindTexture(z,Te||xe[z]),fe.type=z,fe.texture=Te)}function N(){const z=ve[me];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(z){Oe.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Oe.copy(z))}function Ee(z){ne.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ne.copy(z))}function We(z,Te){let le=c.get(Te);le===void 0&&(le=new WeakMap,c.set(Te,le));let fe=le.get(z);fe===void 0&&(fe=n.getUniformBlockIndex(Te,z.name),le.set(z,fe))}function Ye(z,Te){const fe=c.get(Te).get(z);l.get(Te)!==fe&&(n.uniformBlockBinding(Te,fe,z.__bindingPointIndex),l.set(Te,fe))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,ve={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,x=null,M=null,v=null,C=null,P=null,w=new Ve(0,0,0),V=0,T=!1,b=null,U=null,H=null,X=null,oe=null,Oe.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:ie,bindFramebuffer:re,drawBuffers:he,useProgram:Le,setBlending:S,setMaterial:te,setFlipSided:Z,setCullFace:K,setLineWidth:A,setPolygonOffset:L,setScissorTest:F,activeTexture:y,bindTexture:E,unbindTexture:N,compressedTexImage2D:I,compressedTexImage3D:k,texImage2D:Se,texImage3D:Ue,updateUBOMapping:We,uniformBlockBinding:Ye,texStorage2D:Ie,texStorage3D:de,texSubImage2D:$,texSubImage3D:ce,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:He,viewport:Ee,reset:_t}}function P1(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,E){return p?new OffscreenCanvas(y,E):Jo("canvas")}function _(y,E,N){let I=1;const k=F(y);if((k.width>N||k.height>N)&&(I=N/Math.max(k.width,k.height)),I<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const $=Math.floor(I*k.width),ce=Math.floor(I*k.height);f===void 0&&(f=g($,ce));const ue=E?g($,ce):f;return ue.width=$,ue.height=ce,ue.getContext("2d").drawImage(y,0,0,$,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+$+"x"+ce+")."),ue}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function x(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(y,E,N,I,k=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=E;if(E===n.RED&&(N===n.FLOAT&&($=n.R32F),N===n.HALF_FLOAT&&($=n.R16F),N===n.UNSIGNED_BYTE&&($=n.R8)),E===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.R8UI),N===n.UNSIGNED_SHORT&&($=n.R16UI),N===n.UNSIGNED_INT&&($=n.R32UI),N===n.BYTE&&($=n.R8I),N===n.SHORT&&($=n.R16I),N===n.INT&&($=n.R32I)),E===n.RG&&(N===n.FLOAT&&($=n.RG32F),N===n.HALF_FLOAT&&($=n.RG16F),N===n.UNSIGNED_BYTE&&($=n.RG8)),E===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.RG8UI),N===n.UNSIGNED_SHORT&&($=n.RG16UI),N===n.UNSIGNED_INT&&($=n.RG32UI),N===n.BYTE&&($=n.RG8I),N===n.SHORT&&($=n.RG16I),N===n.INT&&($=n.RG32I)),E===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.RGB8UI),N===n.UNSIGNED_SHORT&&($=n.RGB16UI),N===n.UNSIGNED_INT&&($=n.RGB32UI),N===n.BYTE&&($=n.RGB8I),N===n.SHORT&&($=n.RGB16I),N===n.INT&&($=n.RGB32I)),E===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.RGBA8UI),N===n.UNSIGNED_SHORT&&($=n.RGBA16UI),N===n.UNSIGNED_INT&&($=n.RGBA32UI),N===n.BYTE&&($=n.RGBA8I),N===n.SHORT&&($=n.RGBA16I),N===n.INT&&($=n.RGBA32I)),E===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),E===n.RGBA){const ce=k?xl:nt.getTransfer(I);N===n.FLOAT&&($=n.RGBA32F),N===n.HALF_FLOAT&&($=n.RGBA16F),N===n.UNSIGNED_BYTE&&($=ce===Et?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(y,E){let N;return y?E===null||E===er||E===$r?N=n.DEPTH24_STENCIL8:E===si?N=n.DEPTH32F_STENCIL8:E===Ko&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===er||E===$r?N=n.DEPTH_COMPONENT24:E===si?N=n.DEPTH_COMPONENT32F:E===Ko&&(N=n.DEPTH_COMPONENT16),N}function C(y,E){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==xn&&y.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?E.mipmaps.length:1}function P(y){const E=y.target;E.removeEventListener("dispose",P),V(E),E.isVideoTexture&&u.delete(E)}function w(y){const E=y.target;E.removeEventListener("dispose",w),b(E)}function V(y){const E=i.get(y);if(E.__webglInit===void 0)return;const N=y.source,I=h.get(N);if(I){const k=I[E.__cacheKey];k.usedTimes--,k.usedTimes===0&&T(y),Object.keys(I).length===0&&h.delete(N)}i.remove(y)}function T(y){const E=i.get(y);n.deleteTexture(E.__webglTexture);const N=y.source,I=h.get(N);delete I[E.__cacheKey],o.memory.textures--}function b(y){const E=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(E.__webglFramebuffer[I]))for(let k=0;k<E.__webglFramebuffer[I].length;k++)n.deleteFramebuffer(E.__webglFramebuffer[I][k]);else n.deleteFramebuffer(E.__webglFramebuffer[I]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[I])}else{if(Array.isArray(E.__webglFramebuffer))for(let I=0;I<E.__webglFramebuffer.length;I++)n.deleteFramebuffer(E.__webglFramebuffer[I]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let I=0;I<E.__webglColorRenderbuffer.length;I++)E.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[I]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const N=y.textures;for(let I=0,k=N.length;I<k;I++){const $=i.get(N[I]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(N[I])}i.remove(y)}let U=0;function H(){U=0}function X(){const y=U;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),U+=1,y}function oe(y){const E=[];return E.push(y.wrapS),E.push(y.wrapT),E.push(y.wrapR||0),E.push(y.magFilter),E.push(y.minFilter),E.push(y.anisotropy),E.push(y.internalFormat),E.push(y.format),E.push(y.type),E.push(y.generateMipmaps),E.push(y.premultiplyAlpha),E.push(y.flipY),E.push(y.unpackAlignment),E.push(y.colorSpace),E.join()}function ae(y,E){const N=i.get(y);if(y.isVideoTexture&&A(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const I=y.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(N,y,E);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+E)}function ee(y,E){const N=i.get(y);if(y.version>0&&N.__version!==y.version){ne(N,y,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+E)}function se(y,E){const N=i.get(y);if(y.version>0&&N.__version!==y.version){ne(N,y,E);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+E)}function Y(y,E){const N=i.get(y);if(y.version>0&&N.__version!==y.version){pe(N,y,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+E)}const me={[Xr]:n.REPEAT,[xs]:n.CLAMP_TO_EDGE,[vl]:n.MIRRORED_REPEAT},ve={[xn]:n.NEAREST,[U_]:n.NEAREST_MIPMAP_NEAREST,[Mo]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[el]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},ye={[mb]:n.NEVER,[Eb]:n.ALWAYS,[gb]:n.LESS,[Y_]:n.LEQUAL,[_b]:n.EQUAL,[yb]:n.GEQUAL,[vb]:n.GREATER,[xb]:n.NOTEQUAL};function Ne(y,E){if(E.type===si&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===el||E.magFilter===Mo||E.magFilter===Ki||E.minFilter===Dn||E.minFilter===el||E.minFilter===Mo||E.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,me[E.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,me[E.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,me[E.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ve[E.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xn||E.minFilter!==Mo&&E.minFilter!==Ki||E.type===si&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(y,E){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,E.addEventListener("dispose",P));const I=E.source;let k=h.get(I);k===void 0&&(k={},h.set(I,k));const $=oe(E);if($!==y.__cacheKey){k[$]===void 0&&(k[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),k[$].usedTimes++;const ce=k[y.__cacheKey];ce!==void 0&&(k[y.__cacheKey].usedTimes--,ce.usedTimes===0&&T(E)),y.__cacheKey=$,y.__webglTexture=k[$].texture}return N}function ne(y,E,N){let I=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(I=n.TEXTURE_3D);const k=Oe(y,E),$=E.source;t.bindTexture(I,y.__webglTexture,n.TEXTURE0+N);const ce=i.get($);if($.version!==ce.__version||k===!0){t.activeTexture(n.TEXTURE0+N);const ue=nt.getPrimaries(nt.workingColorSpace),ge=E.colorSpace===vs?null:nt.getPrimaries(E.colorSpace),Ie=E.colorSpace===vs||ue===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let de=_(E.image,!1,s.maxTextureSize);de=L(E,de);const Se=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type);let He=M(E.internalFormat,Se,Ue,E.colorSpace,E.isVideoTexture);Ne(I,E);let Ee;const We=E.mipmaps,Ye=E.isVideoTexture!==!0,_t=ce.__version===void 0||k===!0,z=$.dataReady,Te=C(E,de);if(E.isDepthTexture)He=v(E.format===jr,E.type),_t&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,He,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,He,de.width,de.height,0,Se,Ue,null));else if(E.isDataTexture)if(We.length>0){Ye&&_t&&t.texStorage2D(n.TEXTURE_2D,Te,He,We[0].width,We[0].height);for(let le=0,fe=We.length;le<fe;le++)Ee=We[le],Ye?z&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Se,Ue,Ee.data):t.texImage2D(n.TEXTURE_2D,le,He,Ee.width,Ee.height,0,Se,Ue,Ee.data);E.generateMipmaps=!1}else Ye?(_t&&t.texStorage2D(n.TEXTURE_2D,Te,He,de.width,de.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Se,Ue,de.data)):t.texImage2D(n.TEXTURE_2D,0,He,de.width,de.height,0,Se,Ue,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,He,We[0].width,We[0].height,de.depth);for(let le=0,fe=We.length;le<fe;le++)if(Ee=We[le],E.format!==Nn)if(Se!==null)if(Ye){if(z)if(E.layerUpdates.size>0){const Re=jp(Ee.width,Ee.height,E.format,E.type);for(const we of E.layerUpdates){const qe=Ee.data.subarray(we*Re/Ee.data.BYTES_PER_ELEMENT,(we+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,we,Ee.width,Ee.height,1,Se,qe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,de.depth,Se,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,He,Ee.width,Ee.height,de.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,de.depth,Se,Ue,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,He,Ee.width,Ee.height,de.depth,0,Se,Ue,Ee.data)}else{Ye&&_t&&t.texStorage2D(n.TEXTURE_2D,Te,He,We[0].width,We[0].height);for(let le=0,fe=We.length;le<fe;le++)Ee=We[le],E.format!==Nn?Se!==null?Ye?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,le,He,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?z&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Se,Ue,Ee.data):t.texImage2D(n.TEXTURE_2D,le,He,Ee.width,Ee.height,0,Se,Ue,Ee.data)}else if(E.isDataArrayTexture)if(Ye){if(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,He,de.width,de.height,de.depth),z)if(E.layerUpdates.size>0){const le=jp(de.width,de.height,E.format,E.type);for(const fe of E.layerUpdates){const Re=de.data.subarray(fe*le/de.data.BYTES_PER_ELEMENT,(fe+1)*le/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,de.width,de.height,1,Se,Ue,Re)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Se,Ue,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,de.width,de.height,de.depth,0,Se,Ue,de.data);else if(E.isData3DTexture)Ye?(_t&&t.texStorage3D(n.TEXTURE_3D,Te,He,de.width,de.height,de.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Se,Ue,de.data)):t.texImage3D(n.TEXTURE_3D,0,He,de.width,de.height,de.depth,0,Se,Ue,de.data);else if(E.isFramebufferTexture){if(_t)if(Ye)t.texStorage2D(n.TEXTURE_2D,Te,He,de.width,de.height);else{let le=de.width,fe=de.height;for(let Re=0;Re<Te;Re++)t.texImage2D(n.TEXTURE_2D,Re,He,le,fe,0,Se,Ue,null),le>>=1,fe>>=1}}else if(We.length>0){if(Ye&&_t){const le=F(We[0]);t.texStorage2D(n.TEXTURE_2D,Te,He,le.width,le.height)}for(let le=0,fe=We.length;le<fe;le++)Ee=We[le],Ye?z&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Se,Ue,Ee):t.texImage2D(n.TEXTURE_2D,le,He,Se,Ue,Ee);E.generateMipmaps=!1}else if(Ye){if(_t){const le=F(de);t.texStorage2D(n.TEXTURE_2D,Te,He,le.width,le.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ue,de)}else t.texImage2D(n.TEXTURE_2D,0,He,Se,Ue,de);m(E)&&d(I),ce.__version=$.version,E.onUpdate&&E.onUpdate(E)}y.__version=E.version}function pe(y,E,N){if(E.image.length!==6)return;const I=Oe(y,E),k=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+N);const $=i.get(k);if(k.version!==$.__version||I===!0){t.activeTexture(n.TEXTURE0+N);const ce=nt.getPrimaries(nt.workingColorSpace),ue=E.colorSpace===vs?null:nt.getPrimaries(E.colorSpace),ge=E.colorSpace===vs||ce===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let fe=0;fe<6;fe++)!Ie&&!de?Se[fe]=_(E.image[fe],!0,s.maxCubemapSize):Se[fe]=de?E.image[fe].image:E.image[fe],Se[fe]=L(E,Se[fe]);const Ue=Se[0],He=r.convert(E.format,E.colorSpace),Ee=r.convert(E.type),We=M(E.internalFormat,He,Ee,E.colorSpace),Ye=E.isVideoTexture!==!0,_t=$.__version===void 0||I===!0,z=k.dataReady;let Te=C(E,Ue);Ne(n.TEXTURE_CUBE_MAP,E);let le;if(Ie){Ye&&_t&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,We,Ue.width,Ue.height);for(let fe=0;fe<6;fe++){le=Se[fe].mipmaps;for(let Re=0;Re<le.length;Re++){const we=le[Re];E.format!==Nn?He!==null?Ye?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,0,0,we.width,we.height,He,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,We,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,0,0,we.width,we.height,He,Ee,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,We,we.width,we.height,0,He,Ee,we.data)}}}else{if(le=E.mipmaps,Ye&&_t){le.length>0&&Te++;const fe=F(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,We,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(de){Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Se[fe].width,Se[fe].height,He,Ee,Se[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,We,Se[fe].width,Se[fe].height,0,He,Ee,Se[fe].data);for(let Re=0;Re<le.length;Re++){const qe=le[Re].image[fe].image;Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,0,0,qe.width,qe.height,He,Ee,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,We,qe.width,qe.height,0,He,Ee,qe.data)}}else{Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,He,Ee,Se[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,We,He,Ee,Se[fe]);for(let Re=0;Re<le.length;Re++){const we=le[Re];Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,0,0,He,Ee,we.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,We,He,Ee,we.image[fe])}}}m(E)&&d(n.TEXTURE_CUBE_MAP),$.__version=k.version,E.onUpdate&&E.onUpdate(E)}y.__version=E.version}function xe(y,E,N,I,k,$){const ce=r.convert(N.format,N.colorSpace),ue=r.convert(N.type),ge=M(N.internalFormat,ce,ue,N.colorSpace),Ie=i.get(E),de=i.get(N);if(de.__renderTarget=E,!Ie.__hasExternalTextures){const Se=Math.max(1,E.width>>$),Ue=Math.max(1,E.height>>$);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,$,ge,Se,Ue,E.depth,0,ce,ue,null):t.texImage2D(k,$,ge,Se,Ue,0,ce,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),K(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,k,de.__webglTexture,0,Z(E)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,k,de.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(y,E,N){if(n.bindRenderbuffer(n.RENDERBUFFER,y),E.depthBuffer){const I=E.depthTexture,k=I&&I.isDepthTexture?I.type:null,$=v(E.stencilBuffer,k),ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Z(E);K(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,$,E.width,E.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,y)}else{const I=E.textures;for(let k=0;k<I.length;k++){const $=I[k],ce=r.convert($.format,$.colorSpace),ue=r.convert($.type),ge=M($.internalFormat,ce,ue,$.colorSpace),Ie=Z(E);N&&K(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ge,E.width,E.height):K(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,ge,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ge,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(y,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const I=i.get(E.depthTexture);I.__renderTarget=E,(!I.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae(E.depthTexture,0);const k=I.__webglTexture,$=Z(E);if(E.depthTexture.format===Nr)K(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(E.depthTexture.format===jr)K(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function re(y){const E=i.get(y),N=y.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==y.depthTexture){const I=y.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),I){const k=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,I.removeEventListener("dispose",k)};I.addEventListener("dispose",k),E.__depthDisposeCallback=k}E.__boundDepthTexture=I}if(y.depthTexture&&!E.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ie(E.__webglFramebuffer,y)}else if(N){E.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[I]),E.__webglDepthbuffer[I]===void 0)E.__webglDepthbuffer[I]=n.createRenderbuffer(),B(E.__webglDepthbuffer[I],y,!1);else{const k=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[I];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),B(E.__webglDepthbuffer,y,!1);else{const I=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,k)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(y,E,N){const I=i.get(y);E!==void 0&&xe(I.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&re(y)}function Le(y){const E=y.texture,N=i.get(y),I=i.get(E);y.addEventListener("dispose",w);const k=y.textures,$=y.isWebGLCubeRenderTarget===!0,ce=k.length>1;if(ce||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=E.version,o.memory.textures++),$){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let ge=0;ge<E.mipmaps.length;ge++)N.__webglFramebuffer[ue][ge]=n.createFramebuffer()}else N.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)N.__webglFramebuffer[ue]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ce)for(let ue=0,ge=k.length;ue<ge;ue++){const Ie=i.get(k[ue]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&K(y)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<k.length;ue++){const ge=k[ue];N.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const Ie=r.convert(ge.format,ge.colorSpace),de=r.convert(ge.type),Se=M(ge.internalFormat,Ie,de,ge.colorSpace,y.isXRRenderTarget===!0),Ue=Z(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Se,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),B(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)xe(N.__webglFramebuffer[ue][ge],y,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else xe(N.__webglFramebuffer[ue],y,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let ue=0,ge=k.length;ue<ge;ue++){const Ie=k[ue],de=i.get(Ie);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Ne(n.TEXTURE_2D,Ie),xe(N.__webglFramebuffer,y,Ie,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ie)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ue=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,I.__webglTexture),Ne(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)xe(N.__webglFramebuffer[ge],y,E,n.COLOR_ATTACHMENT0,ue,ge);else xe(N.__webglFramebuffer,y,E,n.COLOR_ATTACHMENT0,ue,0);m(E)&&d(ue),t.unbindTexture()}y.depthBuffer&&re(y)}function D(y){const E=y.textures;for(let N=0,I=E.length;N<I;N++){const k=E[N];if(m(k)){const $=x(y),ce=i.get(k).__webglTexture;t.bindTexture($,ce),d($),t.unbindTexture()}}}const O=[],S=[];function te(y){if(y.samples>0){if(K(y)===!1){const E=y.textures,N=y.width,I=y.height;let k=n.COLOR_BUFFER_BIT;const $=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(y),ue=E.length>1;if(ue)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ge]);const Ie=i.get(E[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,N,I,0,0,N,I,k,n.NEAREST),l===!0&&(O.length=0,S.length=0,O.push(n.COLOR_ATTACHMENT0+ge),y.depthBuffer&&y.resolveDepthBuffer===!1&&(O.push($),S.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ge]);const Ie=i.get(E[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const E=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Z(y){return Math.min(s.maxSamples,y.samples)}function K(y){const E=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function A(y){const E=o.render.frame;u.get(y)!==E&&(u.set(y,E),y.update())}function L(y,E){const N=y.colorSpace,I=y.format,k=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==yn&&N!==vs&&(nt.getTransfer(N)===Et?(I!==Nn||k!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),E}function F(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.setTexture2D=ae,this.setTexture2DArray=ee,this.setTexture3D=se,this.setTextureCube=Y,this.rebindTextures=he,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=K}function L1(n,e){function t(i,s=vs){let r;const o=nt.getTransfer(s);if(i===ns)return n.UNSIGNED_BYTE;if(i===qf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===B_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===F_)return n.BYTE;if(i===k_)return n.SHORT;if(i===Ko)return n.UNSIGNED_SHORT;if(i===Kf)return n.INT;if(i===er)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===la)return n.HALF_FLOAT;if(i===H_)return n.ALPHA;if(i===V_)return n.RGB;if(i===Nn)return n.RGBA;if(i===G_)return n.LUMINANCE;if(i===z_)return n.LUMINANCE_ALPHA;if(i===Nr)return n.DEPTH_COMPONENT;if(i===jr)return n.DEPTH_STENCIL;if(i===Jf)return n.RED;if(i===Qf)return n.RED_INTEGER;if(i===W_)return n.RG;if(i===eh)return n.RG_INTEGER;if(i===th)return n.RGBA_INTEGER;if(i===tl||i===nl||i===il||i===sl)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===tl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===tl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===il)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fu||i===ku||i===Bu||i===Hu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ku)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vu||i===Gu||i===zu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vu||i===Gu)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wu||i===Xu||i===$u||i===ju||i===Yu||i===Ku||i===qu||i===Zu||i===Ju||i===Qu||i===ef||i===tf||i===nf||i===sf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$u)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ju)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ku)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ju)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ef)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===rf||i===of)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===rl)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===of)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===X_||i===af||i===lf||i===cf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===af)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const I1={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const D1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N1=`
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

}`;class O1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new jn({vertexShader:D1,fragmentShader:N1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Gl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U1 extends ir{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=new O1,m=t.getContextAttributes();let d=null,x=null;const M=[],v=[],C=new ze;let P=null;const w=new mn;w.viewport=new lt;const V=new mn;V.viewport=new lt;const T=[w,V],b=new XT;let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=M[ne];return pe===void 0&&(pe=new $c,M[ne]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=M[ne];return pe===void 0&&(pe=new $c,M[ne]=pe),pe.getGripSpace()},this.getHand=function(ne){let pe=M[ne];return pe===void 0&&(pe=new $c,M[ne]=pe),pe.getHandSpace()};function X(ne){const pe=v.indexOf(ne.inputSource);if(pe===-1)return;const xe=M[pe];xe!==void 0&&(xe.update(ne.inputSource,ne.frame,c||o),xe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function oe(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",ae);for(let ne=0;ne<M.length;ne++){const pe=v[ne];pe!==null&&(v[ne]=null,M[ne].disconnect(pe))}U=null,H=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,s=null,x=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let xe=null,B=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?jr:Nr,B=m.stencil?$r:er);const re={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(re),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new tr(h.textureWidth,h.textureHeight,{format:Nn,type:ns,depthTexture:new cv(h.textureWidth,h.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new tr(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:ns,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(ne){for(let pe=0;pe<ne.removed.length;pe++){const xe=ne.removed[pe],B=v.indexOf(xe);B>=0&&(v[B]=null,M[B].disconnect(xe))}for(let pe=0;pe<ne.added.length;pe++){const xe=ne.added[pe];let B=v.indexOf(xe);if(B===-1){for(let re=0;re<M.length;re++)if(re>=v.length){v.push(xe),B=re;break}else if(v[re]===null){v[re]=xe,B=re;break}if(B===-1)break}const ie=M[B];ie&&ie.connect(xe)}}const ee=new G,se=new G;function Y(ne,pe,xe){ee.setFromMatrixPosition(pe.matrixWorld),se.setFromMatrixPosition(xe.matrixWorld);const B=ee.distanceTo(se),ie=pe.projectionMatrix.elements,re=xe.projectionMatrix.elements,he=ie[14]/(ie[10]-1),Le=ie[14]/(ie[10]+1),D=(ie[9]+1)/ie[5],O=(ie[9]-1)/ie[5],S=(ie[8]-1)/ie[0],te=(re[8]+1)/re[0],Z=he*S,K=he*te,A=B/(-S+te),L=A*-S;if(pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(L),ne.translateZ(A),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ie[10]===-1)ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const F=he+A,y=Le+A,E=Z-L,N=K+(B-L),I=D*Le/y*F,k=O*Le/y*F;ne.projectionMatrix.makePerspective(E,N,I,k,F,y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function me(ne,pe){pe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let pe=ne.near,xe=ne.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),b.near=V.near=w.near=pe,b.far=V.far=w.far=xe,(U!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,H=b.far),w.layers.mask=ne.layers.mask|2,V.layers.mask=ne.layers.mask|4,b.layers.mask=w.layers.mask|V.layers.mask;const B=ne.parent,ie=b.cameras;me(b,B);for(let re=0;re<ie.length;re++)me(ie[re],B);ie.length===2?Y(b,w,V):b.projectionMatrix.copy(w.projectionMatrix),ve(ne,b,B)};function ve(ne,pe,xe){xe===null?ne.matrix.copy(pe.matrixWorld):(ne.matrix.copy(xe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Yr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ye=null;function Ne(ne,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let B=!1;xe.length!==b.cameras.length&&(b.cameras.length=0,B=!0);for(let re=0;re<xe.length;re++){const he=xe[re];let Le=null;if(p!==null)Le=p.getViewport(he);else{const O=f.getViewSubImage(h,he);Le=O.viewport,re===0&&(e.setRenderTargetTextures(x,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(x))}let D=T[re];D===void 0&&(D=new mn,D.layers.enable(re),D.viewport=new lt,T[re]=D),D.matrix.fromArray(he.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(he.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Le.x,Le.y,Le.width,Le.height),re===0&&(b.matrix.copy(D.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),B===!0&&b.cameras.push(D)}const ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")){const re=f.getDepthInformation(xe[0]);re&&re.isValid&&re.texture&&_.init(e,re,s.renderState)}}for(let xe=0;xe<M.length;xe++){const B=v[xe],ie=M[xe];B!==null&&ie!==void 0&&ie.update(B,pe,c||o)}ye&&ye(ne,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Oe=new pv;Oe.setAnimationLoop(Ne),this.setAnimationLoop=function(ne){ye=ne},this.dispose=function(){}}}const Bs=new Ti,F1=new je;function k1(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,tv(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,M,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===vn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===vn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,Bs.copy(v),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),m.envMapRotation.value.setFromMatrix4(F1.makeRotationFromEuler(Bs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===vn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function B1(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;i.uniformBlockBinding(x,v)}function c(x,M){let v=s[x.id];v===void 0&&(g(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",m));const C=M.program;i.updateUBOMapping(x,C);const P=e.render.frame;r[x.id]!==P&&(h(x),r[x.id]=P)}function u(x){const M=f();x.__bindingPointIndex=M;const v=n.createBuffer(),C=x.__size,P=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=s[x.id],v=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,w=v.length;P<w;P++){const V=Array.isArray(v[P])?v[P]:[v[P]];for(let T=0,b=V.length;T<b;T++){const U=V[T];if(p(U,P,T,C)===!0){const H=U.__offset,X=Array.isArray(U.value)?U.value:[U.value];let oe=0;for(let ae=0;ae<X.length;ae++){const ee=X[ae],se=_(ee);typeof ee=="number"||typeof ee=="boolean"?(U.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,H+oe,U.__data)):ee.isMatrix3?(U.__data[0]=ee.elements[0],U.__data[1]=ee.elements[1],U.__data[2]=ee.elements[2],U.__data[3]=0,U.__data[4]=ee.elements[3],U.__data[5]=ee.elements[4],U.__data[6]=ee.elements[5],U.__data[7]=0,U.__data[8]=ee.elements[6],U.__data[9]=ee.elements[7],U.__data[10]=ee.elements[8],U.__data[11]=0):(ee.toArray(U.__data,oe),oe+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,v,C){const P=x.value,w=M+"_"+v;if(C[w]===void 0)return typeof P=="number"||typeof P=="boolean"?C[w]=P:C[w]=P.clone(),!0;{const V=C[w];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return C[w]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function g(x){const M=x.uniforms;let v=0;const C=16;for(let w=0,V=M.length;w<V;w++){const T=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,U=T.length;b<U;b++){const H=T[b],X=Array.isArray(H.value)?H.value:[H.value];for(let oe=0,ae=X.length;oe<ae;oe++){const ee=X[oe],se=_(ee),Y=v%C,me=Y%se.boundary,ve=Y+me;v+=me,ve!==0&&C-ve<se.storage&&(v+=C-ve),H.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=se.storage}}}const P=v%C;return P>0&&(v+=C-P),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class H1{constructor(e={}){const{canvas:t=kb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=Ss,this.toneMappingExposure=1;const v=this;let C=!1,P=0,w=0,V=null,T=-1,b=null;const U=new lt,H=new lt;let X=null;const oe=new Ve(0);let ae=0,ee=t.width,se=t.height,Y=1,me=null,ve=null;const ye=new lt(0,0,ee,se),Ne=new lt(0,0,ee,se);let Oe=!1;const ne=new ah;let pe=!1,xe=!1;this.transmissionResolutionScale=1;const B=new je,ie=new je,re=new G,he=new lt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function O(){return V===null?Y:1}let S=i;function te(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yf}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",we,!1),S===null){const W="webgl2";if(S=te(W,R),S===null)throw te(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Z,K,A,L,F,y,E,N,I,k,$,ce,ue,ge,Ie,de,Se,Ue,He,Ee,We,Ye,_t,z;function Te(){Z=new KR(S),Z.init(),Ye=new L1(S,Z),K=new zR(S,Z,e,Ye),A=new C1(S,Z),K.reverseDepthBuffer&&h&&A.buffers.depth.setReversed(!0),L=new JR(S),F=new g1,y=new P1(S,Z,A,F,K,Ye,L),E=new XR(v),N=new YR(v),I=new rA(S),_t=new VR(S,I),k=new qR(S,I,L,_t),$=new eC(S,k,I,L),He=new QR(S,K,y),de=new WR(F),ce=new m1(v,E,N,Z,K,_t,de),ue=new k1(v,F),ge=new v1,Ie=new b1(Z),Ue=new HR(v,E,N,A,$,p,l),Se=new w1(v,$,K),z=new B1(S,L,K,A),Ee=new GR(S,Z,L),We=new ZR(S,Z,L),L.programs=ce.programs,v.capabilities=K,v.extensions=Z,v.properties=F,v.renderLists=ge,v.shadowMap=Se,v.state=A,v.info=L}Te();const le=new U1(v,S);this.xr=le,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const R=Z.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Z.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(ee,se,!1))},this.getSize=function(R){return R.set(ee,se)},this.setSize=function(R,W,J=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=R,se=W,t.width=Math.floor(R*Y),t.height=Math.floor(W*Y),J===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(ee*Y,se*Y).floor()},this.setDrawingBufferSize=function(R,W,J){ee=R,se=W,Y=J,t.width=Math.floor(R*J),t.height=Math.floor(W*J),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(ye)},this.setViewport=function(R,W,J,Q){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,W,J,Q),A.viewport(U.copy(ye).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Ne)},this.setScissor=function(R,W,J,Q){R.isVector4?Ne.set(R.x,R.y,R.z,R.w):Ne.set(R,W,J,Q),A.scissor(H.copy(Ne).multiplyScalar(Y).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(R){A.setScissorTest(Oe=R)},this.setOpaqueSort=function(R){me=R},this.setTransparentSort=function(R){ve=R},this.getClearColor=function(R){return R.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(R=!0,W=!0,J=!0){let Q=0;if(R){let j=!1;if(V!==null){const _e=V.texture.format;j=_e===th||_e===eh||_e===Qf}if(j){const _e=V.texture.type,Ae=_e===ns||_e===er||_e===Ko||_e===$r||_e===qf||_e===Zf,Pe=Ue.getClearColor(),De=Ue.getClearAlpha(),Xe=Pe.r,$e=Pe.g,Fe=Pe.b;Ae?(g[0]=Xe,g[1]=$e,g[2]=Fe,g[3]=De,S.clearBufferuiv(S.COLOR,0,g)):(_[0]=Xe,_[1]=$e,_[2]=Fe,_[3]=De,S.clearBufferiv(S.COLOR,0,_))}else Q|=S.COLOR_BUFFER_BIT}W&&(Q|=S.DEPTH_BUFFER_BIT),J&&(Q|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ue.dispose(),ge.dispose(),Ie.dispose(),F.dispose(),E.dispose(),N.dispose(),$.dispose(),_t.dispose(),z.dispose(),ce.dispose(),le.dispose(),le.removeEventListener("sessionstart",mh),le.removeEventListener("sessionend",gh),Rs.stop()};function fe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=L.autoReset,W=Se.enabled,J=Se.autoUpdate,Q=Se.needsUpdate,j=Se.type;Te(),L.autoReset=R,Se.enabled=W,Se.autoUpdate=J,Se.needsUpdate=Q,Se.type=j}function we(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qe(R){const W=R.target;W.removeEventListener("dispose",qe),Lt(W)}function Lt(R){tn(R),F.remove(R)}function tn(R){const W=F.get(R).programs;W!==void 0&&(W.forEach(function(J){ce.releaseProgram(J)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,J,Q,j,_e){W===null&&(W=Le);const Ae=j.isMesh&&j.matrixWorld.determinant()<0,Pe=Pv(R,W,J,Q,j);A.setMaterial(Q,Ae);let De=J.index,Xe=1;if(Q.wireframe===!0){if(De=k.getWireframeAttribute(J),De===void 0)return;Xe=2}const $e=J.drawRange,Fe=J.attributes.position;let st=$e.start*Xe,ct=($e.start+$e.count)*Xe;_e!==null&&(st=Math.max(st,_e.start*Xe),ct=Math.min(ct,(_e.start+_e.count)*Xe)),De!==null?(st=Math.max(st,0),ct=Math.min(ct,De.count)):Fe!=null&&(st=Math.max(st,0),ct=Math.min(ct,Fe.count));const kt=ct-st;if(kt<0||kt===1/0)return;_t.setup(j,Q,Pe,J,De);let It,rt=Ee;if(De!==null&&(It=I.get(De),rt=We,rt.setIndex(It)),j.isMesh)Q.wireframe===!0?(A.setLineWidth(Q.wireframeLinewidth*O()),rt.setMode(S.LINES)):rt.setMode(S.TRIANGLES);else if(j.isLine){let Be=Q.linewidth;Be===void 0&&(Be=1),A.setLineWidth(Be*O()),j.isLineSegments?rt.setMode(S.LINES):j.isLineLoop?rt.setMode(S.LINE_LOOP):rt.setMode(S.LINE_STRIP)}else j.isPoints?rt.setMode(S.POINTS):j.isSprite&&rt.setMode(S.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)rt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))rt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Be=j._multiDrawStarts,Jt=j._multiDrawCounts,ut=j._multiDrawCount,Kn=De?I.get(De).bytesPerElement:1,sr=F.get(Q).currentProgram.getUniforms();for(let Rn=0;Rn<ut;Rn++)sr.setValue(S,"_gl_DrawID",Rn),rt.render(Be[Rn]/Kn,Jt[Rn])}else if(j.isInstancedMesh)rt.renderInstances(st,kt,j.count);else if(J.isInstancedBufferGeometry){const Be=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Jt=Math.min(J.instanceCount,Be);rt.renderInstances(st,kt,Jt)}else rt.render(st,kt)};function vt(R,W,J){R.transparent===!0&&R.side===ei&&R.forceSinglePass===!1?(R.side=vn,R.needsUpdate=!0,pa(R,W,J),R.side=ts,R.needsUpdate=!0,pa(R,W,J),R.side=ei):pa(R,W,J)}this.compile=function(R,W,J=null){J===null&&(J=R),d=Ie.get(J),d.init(W),M.push(d),J.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),R!==J&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights();const Q=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const _e=j.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Pe=_e[Ae];vt(Pe,J,j),Q.add(Pe)}else vt(_e,J,j),Q.add(_e)}),M.pop(),d=null,Q},this.compileAsync=function(R,W,J=null){const Q=this.compile(R,W,J);return new Promise(j=>{function _e(){if(Q.forEach(function(Ae){F.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){j(R);return}setTimeout(_e,10)}Z.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Yn=null;function Li(R){Yn&&Yn(R)}function mh(){Rs.stop()}function gh(){Rs.start()}const Rs=new pv;Rs.setAnimationLoop(Li),typeof self<"u"&&Rs.setContext(self),this.setAnimationLoop=function(R){Yn=R,le.setAnimationLoop(R),R===null?Rs.stop():Rs.start()},le.addEventListener("sessionstart",mh),le.addEventListener("sessionend",gh),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(W),W=le.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,V),d=Ie.get(R,M.length),d.init(W),M.push(d),ie.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ne.setFromProjectionMatrix(ie),xe=this.localClippingEnabled,pe=de.init(this.clippingPlanes,xe),m=ge.get(R,x.length),m.init(),x.push(m),le.enabled===!0&&le.isPresenting===!0){const _e=v.xr.getDepthSensingMesh();_e!==null&&Xl(_e,W,-1/0,v.sortObjects)}Xl(R,W,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(me,ve),D=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,D&&Ue.addToRenderList(m,R),this.info.render.frame++,pe===!0&&de.beginShadows();const J=d.state.shadowsArray;Se.render(J,R,W),pe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,j=m.transmissive;if(d.setupLights(),W.isArrayCamera){const _e=W.cameras;if(j.length>0)for(let Ae=0,Pe=_e.length;Ae<Pe;Ae++){const De=_e[Ae];vh(Q,j,R,De)}D&&Ue.render(R);for(let Ae=0,Pe=_e.length;Ae<Pe;Ae++){const De=_e[Ae];_h(m,R,De,De.viewport)}}else j.length>0&&vh(Q,j,R,W),D&&Ue.render(R),_h(m,R,W);V!==null&&w===0&&(y.updateMultisampleRenderTarget(V),y.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(v,R,W),_t.resetDefaultState(),T=-1,b=null,M.pop(),M.length>0?(d=M[M.length-1],pe===!0&&de.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Xl(R,W,J,Q){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ne.intersectsSprite(R)){Q&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ie);const Ae=$.update(R),Pe=R.material;Pe.visible&&m.push(R,Ae,Pe,J,he.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ne.intersectsObject(R))){const Ae=$.update(R),Pe=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),he.copy(Ae.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(ie)),Array.isArray(Pe)){const De=Ae.groups;for(let Xe=0,$e=De.length;Xe<$e;Xe++){const Fe=De[Xe],st=Pe[Fe.materialIndex];st&&st.visible&&m.push(R,Ae,st,J,he.z,Fe)}}else Pe.visible&&m.push(R,Ae,Pe,J,he.z,null)}}const _e=R.children;for(let Ae=0,Pe=_e.length;Ae<Pe;Ae++)Xl(_e[Ae],W,J,Q)}function _h(R,W,J,Q){const j=R.opaque,_e=R.transmissive,Ae=R.transparent;d.setupLightsView(J),pe===!0&&de.setGlobalState(v.clippingPlanes,J),Q&&A.viewport(U.copy(Q)),j.length>0&&da(j,W,J),_e.length>0&&da(_e,W,J),Ae.length>0&&da(Ae,W,J),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function vh(R,W,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Q.id]===void 0&&(d.state.transmissionRenderTarget[Q.id]=new tr(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?la:ns,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const _e=d.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||U;_e.setSize(Ae.z*v.transmissionResolutionScale,Ae.w*v.transmissionResolutionScale);const Pe=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(oe),ae=v.getClearAlpha(),ae<1&&v.setClearColor(16777215,.5),v.clear(),D&&Ue.render(J);const De=v.toneMapping;v.toneMapping=Ss;const Xe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),d.setupLightsView(Q),pe===!0&&de.setGlobalState(v.clippingPlanes,Q),da(R,J,Q),y.updateMultisampleRenderTarget(_e),y.updateRenderTargetMipmap(_e),Z.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Fe=0,st=W.length;Fe<st;Fe++){const ct=W[Fe],kt=ct.object,It=ct.geometry,rt=ct.material,Be=ct.group;if(rt.side===ei&&kt.layers.test(Q.layers)){const Jt=rt.side;rt.side=vn,rt.needsUpdate=!0,xh(kt,J,Q,It,rt,Be),rt.side=Jt,rt.needsUpdate=!0,$e=!0}}$e===!0&&(y.updateMultisampleRenderTarget(_e),y.updateRenderTargetMipmap(_e))}v.setRenderTarget(Pe),v.setClearColor(oe,ae),Xe!==void 0&&(Q.viewport=Xe),v.toneMapping=De}function da(R,W,J){const Q=W.isScene===!0?W.overrideMaterial:null;for(let j=0,_e=R.length;j<_e;j++){const Ae=R[j],Pe=Ae.object,De=Ae.geometry,Xe=Q===null?Ae.material:Q,$e=Ae.group;Pe.layers.test(J.layers)&&xh(Pe,W,J,De,Xe,$e)}}function xh(R,W,J,Q,j,_e){R.onBeforeRender(v,W,J,Q,j,_e),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(v,W,J,Q,R,_e),j.transparent===!0&&j.side===ei&&j.forceSinglePass===!1?(j.side=vn,j.needsUpdate=!0,v.renderBufferDirect(J,W,Q,j,R,_e),j.side=ts,j.needsUpdate=!0,v.renderBufferDirect(J,W,Q,j,R,_e),j.side=ei):v.renderBufferDirect(J,W,Q,j,R,_e),R.onAfterRender(v,W,J,Q,j,_e)}function pa(R,W,J){W.isScene!==!0&&(W=Le);const Q=F.get(R),j=d.state.lights,_e=d.state.shadowsArray,Ae=j.state.version,Pe=ce.getParameters(R,j.state,_e,W,J),De=ce.getProgramCacheKey(Pe);let Xe=Q.programs;Q.environment=R.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(R.isMeshStandardMaterial?N:E).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",qe),Xe=new Map,Q.programs=Xe);let $e=Xe.get(De);if($e!==void 0){if(Q.currentProgram===$e&&Q.lightsStateVersion===Ae)return Eh(R,Pe),$e}else Pe.uniforms=ce.getUniforms(R),R.onBeforeCompile(Pe,v),$e=ce.acquireProgram(Pe,De),Xe.set(De,$e),Q.uniforms=Pe.uniforms;const Fe=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Fe.clippingPlanes=de.uniform),Eh(R,Pe),Q.needsLights=Iv(R),Q.lightsStateVersion=Ae,Q.needsLights&&(Fe.ambientLightColor.value=j.state.ambient,Fe.lightProbe.value=j.state.probe,Fe.directionalLights.value=j.state.directional,Fe.directionalLightShadows.value=j.state.directionalShadow,Fe.spotLights.value=j.state.spot,Fe.spotLightShadows.value=j.state.spotShadow,Fe.rectAreaLights.value=j.state.rectArea,Fe.ltc_1.value=j.state.rectAreaLTC1,Fe.ltc_2.value=j.state.rectAreaLTC2,Fe.pointLights.value=j.state.point,Fe.pointLightShadows.value=j.state.pointShadow,Fe.hemisphereLights.value=j.state.hemi,Fe.directionalShadowMap.value=j.state.directionalShadowMap,Fe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Fe.spotShadowMap.value=j.state.spotShadowMap,Fe.spotLightMatrix.value=j.state.spotLightMatrix,Fe.spotLightMap.value=j.state.spotLightMap,Fe.pointShadowMap.value=j.state.pointShadowMap,Fe.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=$e,Q.uniformsList=null,$e}function yh(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=ol.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Eh(R,W){const J=F.get(R);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Pv(R,W,J,Q,j){W.isScene!==!0&&(W=Le),y.resetTextureUnits();const _e=W.fog,Ae=Q.isMeshStandardMaterial?W.environment:null,Pe=V===null?v.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:yn,De=(Q.isMeshStandardMaterial?N:E).get(Q.envMap||Ae),Xe=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$e=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Fe=!!J.morphAttributes.position,st=!!J.morphAttributes.normal,ct=!!J.morphAttributes.color;let kt=Ss;Q.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(kt=v.toneMapping);const It=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,rt=It!==void 0?It.length:0,Be=F.get(Q),Jt=d.state.lights;if(pe===!0&&(xe===!0||R!==b)){const cn=R===b&&Q.id===T;de.setState(Q,R,cn)}let ut=!1;Q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Jt.state.version||Be.outputColorSpace!==Pe||j.isBatchedMesh&&Be.batching===!1||!j.isBatchedMesh&&Be.batching===!0||j.isBatchedMesh&&Be.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Be.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Be.instancing===!1||!j.isInstancedMesh&&Be.instancing===!0||j.isSkinnedMesh&&Be.skinning===!1||!j.isSkinnedMesh&&Be.skinning===!0||j.isInstancedMesh&&Be.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Be.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Be.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Be.instancingMorph===!1&&j.morphTexture!==null||Be.envMap!==De||Q.fog===!0&&Be.fog!==_e||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==de.numPlanes||Be.numIntersection!==de.numIntersection)||Be.vertexAlphas!==Xe||Be.vertexTangents!==$e||Be.morphTargets!==Fe||Be.morphNormals!==st||Be.morphColors!==ct||Be.toneMapping!==kt||Be.morphTargetsCount!==rt)&&(ut=!0):(ut=!0,Be.__version=Q.version);let Kn=Be.currentProgram;ut===!0&&(Kn=pa(Q,W,j));let sr=!1,Rn=!1,ro=!1;const Ct=Kn.getUniforms(),Fn=Be.uniforms;if(A.useProgram(Kn.program)&&(sr=!0,Rn=!0,ro=!0),Q.id!==T&&(T=Q.id,Rn=!0),sr||b!==R){A.buffers.depth.getReversed()?(B.copy(R.projectionMatrix),Hb(B),Vb(B),Ct.setValue(S,"projectionMatrix",B)):Ct.setValue(S,"projectionMatrix",R.projectionMatrix),Ct.setValue(S,"viewMatrix",R.matrixWorldInverse);const En=Ct.map.cameraPosition;En!==void 0&&En.setValue(S,re.setFromMatrixPosition(R.matrixWorld)),K.logarithmicDepthBuffer&&Ct.setValue(S,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ct.setValue(S,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Rn=!0,ro=!0)}if(j.isSkinnedMesh){Ct.setOptional(S,j,"bindMatrix"),Ct.setOptional(S,j,"bindMatrixInverse");const cn=j.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ct.setValue(S,"boneTexture",cn.boneTexture,y))}j.isBatchedMesh&&(Ct.setOptional(S,j,"batchingTexture"),Ct.setValue(S,"batchingTexture",j._matricesTexture,y),Ct.setOptional(S,j,"batchingIdTexture"),Ct.setValue(S,"batchingIdTexture",j._indirectTexture,y),Ct.setOptional(S,j,"batchingColorTexture"),j._colorsTexture!==null&&Ct.setValue(S,"batchingColorTexture",j._colorsTexture,y));const kn=J.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&He.update(j,J,Kn),(Rn||Be.receiveShadow!==j.receiveShadow)&&(Be.receiveShadow=j.receiveShadow,Ct.setValue(S,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Fn.envMap.value=De,Fn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Fn.envMapIntensity.value=W.environmentIntensity),Rn&&(Ct.setValue(S,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Lv(Fn,ro),_e&&Q.fog===!0&&ue.refreshFogUniforms(Fn,_e),ue.refreshMaterialUniforms(Fn,Q,Y,se,d.state.transmissionRenderTarget[R.id]),ol.upload(S,yh(Be),Fn,y)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ol.upload(S,yh(Be),Fn,y),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ct.setValue(S,"center",j.center),Ct.setValue(S,"modelViewMatrix",j.modelViewMatrix),Ct.setValue(S,"normalMatrix",j.normalMatrix),Ct.setValue(S,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const cn=Q.uniformsGroups;for(let En=0,$l=cn.length;En<$l;En++){const Cs=cn[En];z.update(Cs,Kn),z.bind(Cs,Kn)}}return Kn}function Lv(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Iv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,W,J){F.get(R.texture).__webglTexture=W,F.get(R.depthTexture).__webglTexture=J;const Q=F.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const J=F.get(R);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};const Dv=S.createFramebuffer();this.setRenderTarget=function(R,W=0,J=0){V=R,P=W,w=J;let Q=!0,j=null,_e=!1,Ae=!1;if(R){const De=F.get(R);if(De.__useDefaultFramebuffer!==void 0)A.bindFramebuffer(S.FRAMEBUFFER,null),Q=!1;else if(De.__webglFramebuffer===void 0)y.setupRenderTarget(R);else if(De.__hasExternalTextures)y.rebindTextures(R,F.get(R.texture).__webglTexture,F.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Fe=R.depthTexture;if(De.__boundDepthTexture!==Fe){if(Fe!==null&&F.has(Fe)&&(R.width!==Fe.image.width||R.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ae=!0);const $e=F.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[W])?j=$e[W][J]:j=$e[W],_e=!0):R.samples>0&&y.useMultisampledRTT(R)===!1?j=F.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?j=$e[J]:j=$e,U.copy(R.viewport),H.copy(R.scissor),X=R.scissorTest}else U.copy(ye).multiplyScalar(Y).floor(),H.copy(Ne).multiplyScalar(Y).floor(),X=Oe;if(J!==0&&(j=Dv),A.bindFramebuffer(S.FRAMEBUFFER,j)&&Q&&A.drawBuffers(R,j),A.viewport(U),A.scissor(H),A.setScissorTest(X),_e){const De=F.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+W,De.__webglTexture,J)}else if(Ae){const De=F.get(R.texture),Xe=W;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,De.__webglTexture,J,Xe)}else if(R!==null&&J!==0){const De=F.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,De.__webglTexture,J)}T=-1},this.readRenderTargetPixels=function(R,W,J,Q,j,_e,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=F.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){A.bindFramebuffer(S.FRAMEBUFFER,Pe);try{const De=R.texture,Xe=De.format,$e=De.type;if(!K.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Q&&J>=0&&J<=R.height-j&&S.readPixels(W,J,Q,j,Ye.convert(Xe),Ye.convert($e),_e)}finally{const De=V!==null?F.get(V).__webglFramebuffer:null;A.bindFramebuffer(S.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(R,W,J,Q,j,_e,Ae){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=F.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){const De=R.texture,Xe=De.format,$e=De.type;if(!K.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-Q&&J>=0&&J<=R.height-j){A.bindFramebuffer(S.FRAMEBUFFER,Pe);const Fe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Fe),S.bufferData(S.PIXEL_PACK_BUFFER,_e.byteLength,S.STREAM_READ),S.readPixels(W,J,Q,j,Ye.convert(Xe),Ye.convert($e),0);const st=V!==null?F.get(V).__webglFramebuffer:null;A.bindFramebuffer(S.FRAMEBUFFER,st);const ct=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Bb(S,ct,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Fe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,_e),S.deleteBuffer(Fe),S.deleteSync(ct),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,J=0){R.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-J),j=Math.floor(R.image.width*Q),_e=Math.floor(R.image.height*Q),Ae=W!==null?W.x:0,Pe=W!==null?W.y:0;y.setTexture2D(R,0),S.copyTexSubImage2D(S.TEXTURE_2D,J,0,0,Ae,Pe,j,_e),A.unbindTexture()};const Nv=S.createFramebuffer(),Ov=S.createFramebuffer();this.copyTextureToTexture=function(R,W,J=null,Q=null,j=0,_e=null){R.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],W=arguments[2],_e=arguments[3]||0,J=null),_e===null&&(j!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=j,j=0):_e=0);let Ae,Pe,De,Xe,$e,Fe,st,ct,kt;const It=R.isCompressedTexture?R.mipmaps[_e]:R.image;if(J!==null)Ae=J.max.x-J.min.x,Pe=J.max.y-J.min.y,De=J.isBox3?J.max.z-J.min.z:1,Xe=J.min.x,$e=J.min.y,Fe=J.isBox3?J.min.z:0;else{const kn=Math.pow(2,-j);Ae=Math.floor(It.width*kn),Pe=Math.floor(It.height*kn),R.isDataArrayTexture?De=It.depth:R.isData3DTexture?De=Math.floor(It.depth*kn):De=1,Xe=0,$e=0,Fe=0}Q!==null?(st=Q.x,ct=Q.y,kt=Q.z):(st=0,ct=0,kt=0);const rt=Ye.convert(W.format),Be=Ye.convert(W.type);let Jt;W.isData3DTexture?(y.setTexture3D(W,0),Jt=S.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(y.setTexture2DArray(W,0),Jt=S.TEXTURE_2D_ARRAY):(y.setTexture2D(W,0),Jt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,W.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,W.unpackAlignment);const ut=S.getParameter(S.UNPACK_ROW_LENGTH),Kn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),sr=S.getParameter(S.UNPACK_SKIP_PIXELS),Rn=S.getParameter(S.UNPACK_SKIP_ROWS),ro=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,It.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,It.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Xe),S.pixelStorei(S.UNPACK_SKIP_ROWS,$e),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Fe);const Ct=R.isDataArrayTexture||R.isData3DTexture,Fn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const kn=F.get(R),cn=F.get(W),En=F.get(kn.__renderTarget),$l=F.get(cn.__renderTarget);A.bindFramebuffer(S.READ_FRAMEBUFFER,En.__webglFramebuffer),A.bindFramebuffer(S.DRAW_FRAMEBUFFER,$l.__webglFramebuffer);for(let Cs=0;Cs<De;Cs++)Ct&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,F.get(R).__webglTexture,j,Fe+Cs),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,F.get(W).__webglTexture,_e,kt+Cs)),S.blitFramebuffer(Xe,$e,Ae,Pe,st,ct,Ae,Pe,S.DEPTH_BUFFER_BIT,S.NEAREST);A.bindFramebuffer(S.READ_FRAMEBUFFER,null),A.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||F.has(R)){const kn=F.get(R),cn=F.get(W);A.bindFramebuffer(S.READ_FRAMEBUFFER,Nv),A.bindFramebuffer(S.DRAW_FRAMEBUFFER,Ov);for(let En=0;En<De;En++)Ct?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,kn.__webglTexture,j,Fe+En):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,kn.__webglTexture,j),Fn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,cn.__webglTexture,_e,kt+En):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,cn.__webglTexture,_e),j!==0?S.blitFramebuffer(Xe,$e,Ae,Pe,st,ct,Ae,Pe,S.COLOR_BUFFER_BIT,S.NEAREST):Fn?S.copyTexSubImage3D(Jt,_e,st,ct,kt+En,Xe,$e,Ae,Pe):S.copyTexSubImage2D(Jt,_e,st,ct,Xe,$e,Ae,Pe);A.bindFramebuffer(S.READ_FRAMEBUFFER,null),A.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Fn?R.isDataTexture||R.isData3DTexture?S.texSubImage3D(Jt,_e,st,ct,kt,Ae,Pe,De,rt,Be,It.data):W.isCompressedArrayTexture?S.compressedTexSubImage3D(Jt,_e,st,ct,kt,Ae,Pe,De,rt,It.data):S.texSubImage3D(Jt,_e,st,ct,kt,Ae,Pe,De,rt,Be,It):R.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,_e,st,ct,Ae,Pe,rt,Be,It.data):R.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,_e,st,ct,It.width,It.height,rt,It.data):S.texSubImage2D(S.TEXTURE_2D,_e,st,ct,Ae,Pe,rt,Be,It);S.pixelStorei(S.UNPACK_ROW_LENGTH,ut),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Kn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,sr),S.pixelStorei(S.UNPACK_SKIP_ROWS,Rn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ro),_e===0&&W.generateMipmaps&&S.generateMipmap(Jt),A.unbindTexture()},this.copyTextureToTexture3D=function(R,W,J=null,Q=null,j=0){return R.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],W=arguments[3],j=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,J,Q,j)},this.initRenderTarget=function(R){F.get(R).__webglFramebuffer===void 0&&y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?y.setTextureCube(R,0):R.isData3DTexture?y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?y.setTexture2DArray(R,0):y.setTexture2D(R,0),A.unbindTexture()},this.resetState=function(){P=0,w=0,V=null,A.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}function vm(n,e){if(e===fb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===uf||e===$_){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===uf)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class V1 extends io{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new nP(t)}),this.register(function(t){return new iP(t)}),this.register(function(t){return new sP(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new tP(t)}),this.register(function(t){return new eP(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new rP(t)}),this.register(function(t){return new oP(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=No.extractUrlBase(e);o=No.resolveURL(c,this.path)}else o=No.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xv){try{o[tt.KHR_BINARY_GLTF]=new aP(e)}catch(f){s&&s(f);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yP(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case tt.KHR_MATERIALS_UNLIT:o[f]=new W1;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[f]=new lP(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[f]=new cP;break;case tt.KHR_MESH_QUANTIZATION:o[f]=new uP;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function G1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class z1{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],yn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new GT(u),c.distance=f;break;case"spot":c=new HT(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class W1{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return ys}extendParams(e,t,i){const s=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],yn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,qt))}return Promise.all(s)}}class X1{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class $1{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(a,a)}return Promise.all(r)}}class j1{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Y1{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class K1{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],yn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,qt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class q1{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Z1{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],yn),Promise.all(r)}}class J1{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Q1{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],yn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,qt)),Promise.all(r)}}class eP{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class tP{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class nP{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class iP{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sP{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rP{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,s.mode,s.filter),p})})}else return null}}class oP{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Vn.TRIANGLES&&c.mode!==Vn.TRIANGLE_STRIP&&c.mode!==Vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of f){const _=new je,m=new G,d=new $n,x=new G(1,1,1),M=new mT(g.geometry,g.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,_.compose(m,d,x));for(const v in l)if(v==="_COLOR_0"){const C=l[v];M.instanceColor=new hf(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Rt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const xv="glTF",yo=12,xm={JSON:1313821514,BIN:5130562};class aP{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,yo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-yo,r=new DataView(e,yo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===xm.JSON){const c=new Uint8Array(e,yo+o,a);this.content=i.decode(c)}else if(l===xm.BIN){const c=yo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=gf[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=gf[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],p=Ur[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}f(p)},a,c,yn,h)})})}}class cP{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class uP{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class yv extends fa{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(i-t)/u,h=f*f,p=h*f,g=e*c,_=g-c,m=-2*p+3*h,d=p-h,x=1-m,M=d-h+f;for(let v=0;v!==a;v++){const C=o[_+v+a],P=o[_+v+l]*u,w=o[g+v+a],V=o[g+v]*u;r[v]=x*C+M*P+m*w+d*V}return r}}const fP=new $n;class hP extends yv{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return fP.fromArray(r).normalize().toArray(r),r}}const Vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ym={9728:xn,9729:Dn,9984:U_,9985:el,9986:Mo,9987:Ki},Em={33071:xs,33648:vl,10497:Xr},jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dP={CUBICSPLINE:void 0,LINEAR:Zo,STEP:qo},Yc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pP(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new zl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ts})),n.DefaultMaterial}function Hs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Wi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mP(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function gP(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _P(n){let e;const t=n.extensions&&n.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kc(t.attributes):e=n.indices+":"+Kc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Kc(n.targets[i]);return e}function Kc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function _f(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vP(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xP=new je;class yP{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new G1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new FT(this.options.manager):this.textureLoader=new WT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Hs(r,a,s),Wi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(No.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=jc[s.type],a=Ur[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ut(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=jc[s.type],c=Ur[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==f){const d=Math.floor(h/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let M=t.cache.get(x);M||(_=new c(a,d*p,s.count*p/u),M=new uT(_,p/u),t.cache.add(x,M)),m=new sh(M,l,h%p/u,g)}else a===null?_=new c(s.count*l):_=new c(a,h,s.count*l),m=new Ut(_,l,g);if(s.sparse!==void 0){const d=jc.SCALAR,x=Ur[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,C=new x(o[1],M,s.sparse.count*d),P=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,V=C.length;w<V;w++){const T=C[w];if(m.setX(T,P[w*l]),l>=2&&m.setY(T,P[w*l+1]),l>=3&&m.setZ(T,P[w*l+2]),l>=4&&m.setW(T,P[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=ym[h.magFilter]||Dn,u.minFilter=ym[h.minFilter]||Ki,u.wrapS=Em[h.wrapS]||Xr,u.wrapT=Em[h.wrapT]||Xr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==xn&&u.minFilter!==Dn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Xt(_);m.needsUpdate=!0,h(m)}),t.load(No.resolveURL(f,r.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Wi(f,o),f.userData.mimeType=o.mimeType||vP(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new av,Si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ov,Si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return zl}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const f=s[tt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],yn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,qt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ei);const u=r.alphaMode||Yc.OPAQUE;if(u===Yc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Yc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ys&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==ys&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ys){const f=r.emissiveFactor;a.emissive=new Ve().setRGB(f[0],f[1],f[2],yn)}return r.emissiveTexture!==void 0&&o!==ys&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,qt)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),Wi(f,r),t.associations.set(f,{materials:e}),r.extensions&&Hs(s,f,r),f})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Mm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=_P(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Mm(new Un,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?pP(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let d;const x=c[p];if(m.mode===Vn.TRIANGLES||m.mode===Vn.TRIANGLE_STRIP||m.mode===Vn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new hT(_,x):new Qt(_,x),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Vn.TRIANGLE_STRIP?d.geometry=vm(d.geometry,$_):m.mode===Vn.TRIANGLE_FAN&&(d.geometry=vm(d.geometry,uf));else if(m.mode===Vn.LINES)d=new vT(_,x);else if(m.mode===Vn.LINE_STRIP)d=new lh(_,x);else if(m.mode===Vn.LINE_LOOP)d=new xT(_,x);else if(m.mode===Vn.POINTS)d=new lv(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&gP(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Wi(d,r),m.extensions&&Hs(s,d,m),t.assignFinalMaterial(d),f.push(d)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return r.extensions&&Hs(s,f[0],r),f[0];const h=new yi;r.extensions&&Hs(s,h,r),t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new mn(El.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new uh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Wi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new je;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new oh(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){const p=s.channels[f],g=s.samplers[p.sampler],_=p.target,m=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],p=f[1],g=f[2],_=f[3],m=f[4],d=[];for(let x=0,M=h.length;x<M;x++){const v=h[x],C=p[x],P=g[x],w=_[x],V=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const T=i._createAnimationTracks(v,C,P,w,V);if(T)for(let b=0;b<T.length;b++)d.push(T[b])}return new PT(r,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,xP)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new rv:c.length>1?u=new yi:c.length===1?u=c[0]:u=new Rt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Wi(u,r),r.extensions&&Hs(i,u,r),r.matrix!==void 0){const f=new je;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new yi;i.name&&(r.name=s.createUniqueName(i.name)),Wi(r,i),i.extensions&&Hs(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,p]of s.associations)(h instanceof Si||h instanceof Xt)&&f.set(h,p);return u.traverse(h=>{const p=s.associations.get(h);p!=null&&f.set(h,p)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];hs[r.path]===hs.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(hs[r.path]){case hs.weights:c=qr;break;case hs.rotation:c=Zr;break;case hs.position:case hs.scale:c=Jr;break;default:switch(i.itemSize){case 1:c=qr;break;case 2:case 3:default:c=Jr;break}break}const u=s.interpolation!==void 0?dP[s.interpolation]:Zo,f=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){const g=new c(l[h]+"."+hs[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=_f(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Zr?hP:yv;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function EP(n,e,t){const i=e.attributes,s=new wi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),a.normalized){const u=_f(Ur[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new G,l=new G;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const _=_f(Ur[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Ri;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Mm(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=gf[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return nt.workingColorSpace!==yn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Wi(n,e),EP(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?mP(n,e.targets,t):n})}const qc=[{id:"marble",name:"Marble",stops:[{t:0,color:"#cccccc"},{t:1,color:"#cccccc"}]},{id:"hypsometric",name:"Hypsometric",stops:[{t:0,color:"#0000aa"},{t:.15,color:"#0044cc"},{t:.25,color:"#00aacc"},{t:.35,color:"#00cc66"},{t:.45,color:"#44dd00"},{t:.55,color:"#ccdd00"},{t:.65,color:"#ffcc00"},{t:.75,color:"#ff8800"},{t:.85,color:"#ff3300"},{t:.95,color:"#cc0000"},{t:1,color:"#880000"}]},{id:"elevation",name:"Elevation",stops:[{t:0,color:"#7a4a30"},{t:.12,color:"#8b5a3a"},{t:.25,color:"#a06840"},{t:.4,color:"#c08050"},{t:.55,color:"#d8a070"},{t:.68,color:"#e0b888"},{t:.8,color:"#ecd0a0"},{t:.92,color:"#f5e0c0"},{t:1,color:"#ffffff"}]}];function Sm(n){const t=new Uint8Array(1024),i=n.stops.map(r=>({t:r.t,c:new Ve(r.color)}));for(let r=0;r<256;r++){const o=r/255;let a=i[0],l=i[i.length-1];for(let g=0;g<i.length-1;g++)if(o>=i[g].t&&o<=i[g+1].t){a=i[g],l=i[g+1];break}const c=l.t-a.t,u=c>0?(o-a.t)/c:0,f=a.c.r+(l.c.r-a.c.r)*u,h=a.c.g+(l.c.g-a.c.g)*u,p=a.c.b+(l.c.b-a.c.b)*u;t[r*4]=Math.round(f*255),t[r*4+1]=Math.round(h*255),t[r*4+2]=Math.round(p*255),t[r*4+3]=255}const s=new rh(t,256,1,Nn);return s.needsUpdate=!0,s}function MP(n){const e=Sm(n),t=new jn({uniforms:{uRamp:{value:e},uMinRadius:{value:0},uMaxRadius:{value:1},uLightDir:{value:new G(5,3,5).normalize()},uFillDir:{value:new G(-3,-1,-3).normalize()}},vertexShader:`
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
    `});return t._rampTexture=e,t.updateScheme=i=>{t._rampTexture&&t._rampTexture.dispose();const s=Sm(i);t.uniforms.uRamp.value=s,t._rampTexture=s},t.setElevationRange=(i,s)=>{t.uniforms.uMinRadius.value=i,t.uniforms.uMaxRadius.value=s},t}class SP extends Rt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ze(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Er=new G,bm=new je,Tm=new je,Am=new G,wm=new G;class bP{constructor(e={}){const t=this;let i,s,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),bm.copy(_.matrixWorldInverse),Tm.multiplyMatrices(_.projectionMatrix,bm),u(g,g,_),p(g)},this.setSize=function(g,_){i=g,s=_,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)c(g.children[_])}function u(g,_,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Er.setFromMatrixPosition(g.matrixWorld),Er.applyMatrix4(Tm);const d=Er.z>=-1&&Er.z<=1&&g.layers.test(m.layers)===!0,x=g.element;x.style.display=d===!0?"":"none",d===!0&&(g.onBeforeRender(t,_,m),x.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Er.x*r+r)+"px,"+(-Er.y*o+o)+"px)",x.parentNode!==l&&l.appendChild(x),g.onAfterRender(t,_,m));const M={distanceToCameraSquared:f(m,g)};a.objects.set(g,M)}for(let d=0,x=g.children.length;d<x;d++)u(g.children[d],_,m)}function f(g,_){return Am.setFromMatrixPosition(g.matrixWorld),wm.setFromMatrixPosition(_.matrixWorld),Am.distanceToSquared(wm)}function h(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function p(g){const _=h(g).sort(function(d,x){if(d.renderOrder!==x.renderOrder)return x.renderOrder-d.renderOrder;const M=a.objects.get(d).distanceToCameraSquared,v=a.objects.get(x).distanceToCameraSquared;return M-v}),m=_.length;for(let d=0,x=_.length;d<x;d++)_[d].element.style.zIndex=m-d}}}function vf(n,e,t){const i=n*El.DEG2RAD,s=e*El.DEG2RAD;return new G(t*Math.cos(i)*Math.sin(s),t*Math.sin(i),t*Math.cos(i)*Math.cos(s))}function TP(n,e){return vf(n,e,1)}const AP=25.19,wP=AP*Math.PI/180,Qr=10,bl=64,RP=Qr*1.008,CP=Qr*80,PP=[.8,.35,.1],LP=5,IP="https://astro.arcgis.com/arcgis/rest/services/OnMars/MDIM/MapServer/tile",Mr=512,Zc=3,DP={"landing-site":"#4fc3f7",volcano:"#ff7043",canyon:"#ab47bc",basin:"#66bb6a",plain:"#ffca28","polar-cap":"#e0e0e0"},NP=.06,OP=.008,UP=3;class Ev{constructor(e,t){ft(this,"root");ft(this,"raycaster",new nA);ft(this,"pinMeshes",[]);ft(this,"labelObjects",[]);ft(this,"normals",[]);ft(this,"landmarkMap",new Map);ft(this,"pinGroups",[]);ft(this,"pinGeometry",null);ft(this,"frameCount",0);ft(this,"hoveredMesh",null);ft(this,"hiddenTypes",new Set);ft(this,"_worldPos",new G);ft(this,"_camDir",new G);ft(this,"onHover",null);ft(this,"onClick",null);this.landmarks=e,this.radius=t??Qr,this.root=new yi}async init(){const e=this.radius*NP,t=this.radius*OP,i=this._createBeamGeometry(t,e);this.pinGeometry=new ua(e*.4,6,6);const s={vertexShader:`
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
      `};for(const r of this.landmarks){const o=TP(r.lat,r.lon),a=vf(r.lat,r.lon,this.radius*.995),l=new Ve(r.accent),c=new yi,u=new jn({uniforms:{uColor:{value:l}},vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,transparent:!0,side:ei,depthWrite:!1,blending:_l}),f=new Qt(i,u);c.add(f);const h=new ys({visible:!1}),p=new Qt(this.pinGeometry,h);p.position.y=e*.5,c.add(p),c.position.copy(a);const g=new $n().setFromUnitVectors(new G(0,1,0),o);c.quaternion.copy(g),this.root.add(c),this.pinMeshes.push(p),this.landmarkMap.set(p,r);const _={group:c,label:null,landmark:r};this.pinGroups.push(_);const m=document.createElement("div");m.className="landmark-label",m.textContent=r.name,m.style.color=r.accent,m.style.fontFamily="Inter, system-ui, sans-serif",m.style.fontSize="11px",m.style.fontWeight="500",m.style.letterSpacing="0.06em",m.style.textShadow="0 1px 6px rgba(0,0,0,0.9)",m.style.pointerEvents="none",m.style.whiteSpace="nowrap";const d=new SP(m);d.position.copy(a).addScaledVector(o,e*1.1),this.root.add(d),_.label=d,this.labelObjects.push(d),this.normals.push(o)}i.dispose()}getLandmarkType(e){return e.type==="landing-site"?"landing-site":e.featureType}setFilter(e){this.hiddenTypes=e;for(const t of this.pinGroups){const i=this.getLandmarkType(t.landmark),s=e.has(i);t.group.visible=!s,t.label&&(t.label.visible=!s)}}_createBeamGeometry(e,t){const i=e/2,s=new Float32Array([-i,0,0,i,0,0,0,t,0,i,0,0,-i,0,0,0,t,0,0,0,-i,0,0,i,0,t,0,0,0,i,0,0,-i,0,t,0]),r=new Float32Array([.5,.5,0,.5,.5,0,.5,.5,0,.5,.5,0]),o=new Un;return o.setAttribute("position",new Ut(s,3)),o.setAttribute("alpha",new Ut(r,1)),o}getLandmarkTarget(e){const t=this.landmarks.find(s=>s.id===e);return t?{position:vf(t.lat,t.lon,this.radius),distance:this.radius*.6}:null}pick(e,t){var s,r;if(this.frameCount++,this.frameCount%UP!==0)return;this.raycaster.setFromCamera(e,t);const i=this.raycaster.intersectObjects(this.pinMeshes);if(i.length>0){const o=i[0].object;if(o!==this.hoveredMesh){this.hoveredMesh=o;const a=this.landmarkMap.get(o),l=i[0].point.clone().project(t),c=(l.x*.5+.5)*window.innerWidth,u=(-l.y*.5+.5)*window.innerHeight;(s=this.onHover)==null||s.call(this,{landmark:a,screenX:c,screenY:u})}}else this.hoveredMesh&&(this.hoveredMesh=null,(r=this.onHover)==null||r.call(this,null))}clickTest(e,t){var s;this.raycaster.setFromCamera(e,t);const i=this.raycaster.intersectObjects(this.pinMeshes);if(i.length>0){const r=i[0].object,o=this.landmarkMap.get(r);o&&((s=this.onClick)==null||s.call(this,o))}}updateVisibility(e){for(let t=0;t<this.pinMeshes.length;t++){const i=this.pinMeshes[t],s=this.labelObjects[t],r=this.normals[t];i.getWorldPosition(this._worldPos),this._camDir.copy(e.position).sub(this._worldPos).normalize();const l=r.clone().applyQuaternion(this.root.getWorldQuaternion(new $n)).dot(this._camDir)>.05,c=this.getLandmarkType(this.landmarks[t]),u=this.hiddenTypes.has(c),f=l&&!u;i.visible=f,s.visible=f}}update(e){}dispose(){var e;(e=this.pinGeometry)==null||e.dispose(),this.root.traverse(t=>{var i;t.isMesh&&((i=t.material)==null||i.dispose())})}}const FP=14e3,kP=1.4;class Mv{constructor(e,t={}){ft(this,"root");const i=e??CP,s=t.count??FP,r=t.pointSize??kP,o=new Float32Array(s*3),a=new Float32Array(s),l=new Float32Array(s),c=new Float32Array(s*3),u=new Float32Array(s);for(let p=0;p<s;p++){const g=Math.random()*Math.PI*2,_=Math.acos(2*Math.random()-1);o[p*3]=i*Math.sin(_)*Math.cos(g),o[p*3+1]=i*Math.cos(_),o[p*3+2]=i*Math.sin(_)*Math.sin(g),a[p]=r*(.5+Math.random()*.8),l[p]=.58+Math.random()*.38,u[p]=Math.random()*Math.PI*2;const m=Math.random();m<.5?(c[p*3]=.85+Math.random()*.12,c[p*3+1]=.88+Math.random()*.1,c[p*3+2]=.95+Math.random()*.05):m<.85?(c[p*3]=.95+Math.random()*.05,c[p*3+1]=.9+Math.random()*.08,c[p*3+2]=.8+Math.random()*.12):(c[p*3]=.98+Math.random()*.02,c[p*3+1]=.92+Math.random()*.06,c[p*3+2]=.75+Math.random()*.15)}const f=new Un;f.setAttribute("position",new Ut(o,3)),f.setAttribute("aSize",new Ut(a,1)),f.setAttribute("aOpacity",new Ut(l,1)),f.setAttribute("aColor",new Ut(c,3)),f.setAttribute("aPhase",new Ut(u,1));const h=new ET({vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Zs,uniforms:{uTime:{value:0}}});this.root=new lv(f,h),this.root.frustumCulled=!1}async init(){}update(e){this.root.material.uniforms.uTime.value=e}dispose(){this.root.geometry.dispose(),this.root.material.dispose()}}const Rm={type:"change"},ph={type:"start"},Sv={type:"end"},Ya=new eo,Cm=new gs,BP=Math.cos(70*El.DEG2RAD),Gt=new G,Mn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jc=1e-6;class HP extends iA{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dr.ROTATE,MIDDLE:Dr.DOLLY,RIGHT:Dr.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new $n,this._lastTargetPosition=new G,this._quat=new $n().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $p,this._sphericalDelta=new $p,this._scale=1,this._panOffset=new G,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new G,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=GP.bind(this),this._onPointerDown=VP.bind(this),this._onPointerUp=zP.bind(this),this._onContextMenu=qP.bind(this),this._onMouseWheel=$P.bind(this),this._onKeyDown=jP.bind(this),this._onTouchStart=YP.bind(this),this._onTouchMove=KP.bind(this),this._onMouseDown=WP.bind(this),this._onMouseMove=XP.bind(this),this._interceptControlDown=ZP.bind(this),this._interceptControlUp=JP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rm),this.update(),this.state=Mt.NONE}update(e=null){const t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Mn:i>Math.PI&&(i-=Mn),s<-Math.PI?s+=Mn:s>Math.PI&&(s-=Mn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Gt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ya.origin.copy(this.object.position),Ya.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ya.direction))<BP?this.object.lookAt(this.target):(Cm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ya.intersectPlane(Cm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jc||this._lastTargetPosition.distanceToSquared(this.target)>Jc?(this.dispatchEvent(Rm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Gt.copy(s).sub(this.target);let r=Gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function VP(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function GP(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function zP(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sv),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function WP(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Dr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Mt.DOLLY;break;case Dr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}break;case Dr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(ph)}function XP(n){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function $P(n){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(n.preventDefault(),this.dispatchEvent(ph),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sv))}function jP(n){this.enabled!==!1&&this._handleKeyDown(n)}function YP(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Mt.TOUCH_ROTATE;break;case wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Mt.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(ph)}function KP(n){switch(this._trackPointer(n),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Mt.NONE}}function qP(n){this.enabled!==!1&&n.preventDefault()}function ZP(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function JP(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const QP={fov:45,near:.1,far:2e3,minDistance:1.2,maxDistance:40,defaultDistance:28,autoRotateSpeed:.15,autoRotateDelay:3e3,flyToDuration:1.5,zoomLerp:.08,zoomFactor:.08,dampingFactor:.02,clearColor:0};function bv(n={}){const e={...QP,...n},t=bt(0),i=bt(new G);let s=null,r=null,o=null,a=null,l=null,c=0,u=null,f=!0,h=null;const p=e.autoRotateSpeed*Math.PI/180*.5;let g=e.defaultDistance,_=!1,m=0;const d=new G,x=new G,M=new G,v=new G;let C=null;const P=new ze(-999,-999);let w=0,V=0,T=null;function b(B,ie){s=new H1({canvas:B,antialias:!0,alpha:!1}),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(B.clientWidth,B.clientHeight,!1),s.setClearColor(e.clearColor,1),r=new bP({element:ie}),r.setSize(B.clientWidth,B.clientHeight),o=new mn(e.fov,B.clientWidth/B.clientHeight,e.near,e.far),o.position.set(0,0,e.defaultDistance),a=new HP(o,B),a.enableDamping=!0,a.dampingFactor=e.dampingFactor,a.minDistance=e.minDistance,a.maxDistance=e.maxDistance,a.autoRotate=!1,a.enablePan=!1,a.enableZoom=!1,a.addEventListener("start",U),a.addEventListener("end",H),l=new $T,B.addEventListener("pointermove",X),B.addEventListener("click",me),B.addEventListener("wheel",oe,{passive:!1}),B.addEventListener("touchstart",ee,{passive:!1}),B.addEventListener("touchmove",se,{passive:!1}),B.addEventListener("touchend",Y),window.addEventListener("resize",ye)}function U(){f=!1,a&&o&&(a.target.set(0,0,0),g=o.position.distanceTo(a.target)),h&&clearTimeout(h)}function H(){h&&clearTimeout(h),h=setTimeout(()=>{f=!0},e.autoRotateDelay)}function X(B){const ie=s==null?void 0:s.domElement;ie&&(P.x=B.offsetX/ie.clientWidth*2-1,P.y=-(B.offsetY/ie.clientHeight)*2+1)}function oe(B){B.preventDefault();const ie=B.deltaY>0?1:-1;g*=1+ie*e.zoomFactor,g=Math.max(e.minDistance,Math.min(e.maxDistance,g)),f=!1,h&&clearTimeout(h),h=setTimeout(()=>{f=!0},e.autoRotateDelay)}function ae(B){const ie=B.touches[0],re=B.touches[1];return Math.hypot(re.clientX-ie.clientX,re.clientY-ie.clientY)}function ee(B){B.touches.length===2&&(B.preventDefault(),w=ae(B),V=g)}function se(B){if(B.touches.length===2){B.preventDefault();const ie=ae(B),re=w/ie;g=Math.max(e.minDistance,Math.min(e.maxDistance,V*re)),f=!1,h&&clearTimeout(h)}}function Y(B){B.touches.length<2&&(h&&clearTimeout(h),h=setTimeout(()=>{f=!0},e.autoRotateDelay))}function me(){o&&T&&T(P,o)}function ve(B){T=B}function ye(){const B=s==null?void 0:s.domElement;if(!B||!o||!s||!r)return;const ie=B.clientWidth,re=B.clientHeight;o.aspect=ie/re,o.updateProjectionMatrix(),s.setSize(ie,re,!1),r.setSize(ie,re)}function Ne(B,ie){u=ie;function re(){if(c=requestAnimationFrame(re),!s||!o||!a||!l||!r)return;const he=l.getElapsedTime(),Le=l.getDelta();if(_){const O=Math.min(1,(he-m)/e.flyToDuration),S=O*O*(3-2*O);o.position.lerpVectors(d,x,S),a.target.lerpVectors(M,v,S),O>=1&&(_=!1,a.enabled=!0,g=o.position.distanceTo(a.target),C==null||C())}if(!_){const O=o.position.clone().sub(a.target).normalize(),S=o.position.distanceTo(a.target),te=S+(g-S)*e.zoomLerp;o.position.copy(a.target).addScaledVector(O,te)}if(f&&!_){const O=p*Le,S=o.position.clone().sub(a.target),te=Math.cos(O),Z=Math.sin(O),K=S.x*te+S.z*Z,A=-S.x*Z+S.z*te;o.position.set(K+a.target.x,o.position.y,A+a.target.z)}a.update(),u==null||u(he);const D=o.position.distanceTo(a.target);t.value=1-(D-e.minDistance)/(e.maxDistance-e.minDistance),i.value.copy(a.target),s.render(B,o),r.render(B,o)}re()}function Oe(B,ie){return!o||!a||!l?Promise.resolve():new Promise(re=>{C=re,_=!0,m=l.getElapsedTime(),d.copy(o.position),M.copy(a.target),v.copy(B);const he=B.clone().normalize();x.copy(B).addScaledVector(he,ie),a.enabled=!1,g=x.distanceTo(v)})}function ne(){return o}function pe(){return P}function xe(){c&&cancelAnimationFrame(c),a==null||a.removeEventListener("start",U),a==null||a.removeEventListener("end",H),a==null||a.dispose(),s==null||s.domElement.removeEventListener("pointermove",X),s==null||s.domElement.removeEventListener("click",me),s==null||s.domElement.removeEventListener("wheel",oe),s==null||s.domElement.removeEventListener("touchstart",ee),s==null||s.domElement.removeEventListener("touchmove",se),s==null||s.domElement.removeEventListener("touchend",Y),window.removeEventListener("resize",ye),s==null||s.dispose(),h&&clearTimeout(h)}return{currentZoom:t,currentTarget:i,init:b,startLoop:Ne,flyTo:Oe,getCamera:ne,getPointer:pe,setClickHandler:ve,dispose:xe}}const Ka=bt([]),Qc=bt(!1);let Pm=!1;function Tv(){async function n(){if(Pm)return Ka.value;Qc.value=!0;try{const e=await fetch("/data/landmarks.json");Ka.value=await e.json(),Pm=!0}finally{Qc.value=!1}return Ka.value}return{landmarks:Fo(Ka),isLoading:Fo(Qc),loadLandmarks:n}}const eL={class:"tooltip-name"},tL={key:0,class:"tooltip-year"},nL={__name:"LandmarkTooltip",props:{landmark:{type:Object,default:null},x:{type:Number,default:0},y:{type:Number,default:0}},setup(n){return(e,t)=>n.landmark?(Tt(),Ht("div",{key:0,class:"landmark-tooltip",style:Tn({left:`${n.x}px`,top:`${n.y}px`})},[q("span",{class:"tooltip-dot",style:Tn({backgroundColor:n.landmark.accent})},null,4),q("span",eL,Me(n.landmark.name),1),n.landmark.type==="landing-site"?(Tt(),Ht("span",tL,"("+Me(n.landmark.year)+")",1)):An("",!0)],4)):An("",!0)}},Av=Ai(nL,[["__scopeId","data-v-66ca8481"]]),iL={key:0,class:"info-card"},sL={class:"card-title"},rL={class:"card-description"},oL={class:"card-details"},aL={class:"detail-row"},lL={class:"detail-label"},cL={class:"detail-value"},uL={class:"detail-row"},fL={class:"detail-label"},hL={class:"detail-value"},dL={class:"detail-row"},pL={class:"detail-label"},mL={class:"detail-value"},gL={class:"detail-row"},_L={class:"detail-label"},vL={class:"detail-value",style:{"text-transform":"capitalize"}},xL={class:"detail-row"},yL={class:"detail-label"},EL={class:"detail-value",style:{"text-transform":"capitalize"}},ML={class:"detail-row"},SL={class:"detail-label"},bL={class:"detail-value"},TL={class:"detail-row"},AL={class:"detail-label"},wL={class:"detail-value"},RL={class:"detail-row"},CL={class:"detail-label"},PL={class:"detail-value"},LL={class:"detail-row"},IL={class:"detail-label"},DL={class:"detail-value"},NL={class:"detail-row"},OL={class:"detail-label"},UL={class:"detail-value",style:{"text-transform":"capitalize"}},FL={class:"stat-bars"},kL={class:"stat-bar-row"},BL={class:"stat-label"},HL={class:"stat-track"},VL={class:"stat-bar-row"},GL={class:"stat-label"},zL={class:"stat-track"},WL={class:"stat-bar-row"},XL={class:"stat-label"},$L={class:"stat-track"},jL={class:"stat-bar-row"},YL={class:"stat-label"},KL={class:"stat-track"},qL={class:"stat-bar-row"},ZL={class:"stat-label"},JL={class:"stat-track"},QL={class:"stat-bar-row"},eI={class:"stat-label"},tI={class:"stat-track"},nI={class:"stat-bar-row"},iI={class:"stat-label"},sI={class:"stat-track"},rI={class:"detail-row"},oI={class:"detail-label"},aI={class:"detail-value"},lI={__name:"LandmarkInfoCard",props:{landmark:{type:Object,default:null}},emits:["close"],setup(n){return(e,t)=>(Tt(),Qs(Ul,{name:"card"},{default:Nt(()=>[n.landmark?(Tt(),Ht("div",iL,[q("button",{class:"card-close",onClick:t[0]||(t[0]=i=>e.$emit("close"))},"×"),q("div",{class:"card-accent",style:Tn({backgroundColor:n.landmark.accent})},null,4),q("h2",sL,Me(n.landmark.name),1),q("p",rL,Me(n.landmark.description),1),q("div",oL,[n.landmark.type==="landing-site"?(Tt(),Ht(Zt,{key:0},[q("div",aL,[q("span",lL,Me(e.$t("infoCard.mission")),1),q("span",cL,Me(n.landmark.mission),1)]),q("div",uL,[q("span",fL,Me(e.$t("infoCard.agency")),1),q("span",hL,Me(n.landmark.agency),1)]),q("div",dL,[q("span",pL,Me(e.$t("infoCard.year")),1),q("span",mL,Me(n.landmark.year),1)]),q("div",gL,[q("span",_L,Me(e.$t("infoCard.status")),1),q("span",vL,Me(n.landmark.status),1)])],64)):An("",!0),n.landmark.type==="geological"?(Tt(),Ht(Zt,{key:1},[q("div",xL,[q("span",yL,Me(e.$t("infoCard.feature")),1),q("span",EL,Me(n.landmark.featureType.replace("-"," ")),1)]),q("div",ML,[q("span",SL,Me(e.$t("infoCard.diameter")),1),q("span",bL,Me(n.landmark.diameterKm.toLocaleString())+" km",1)]),q("div",TL,[q("span",AL,Me(e.$t("infoCard.elevation")),1),q("span",wL,Me(n.landmark.elevationKm>0?"+":"")+Me(n.landmark.elevationKm)+" km",1)]),q("div",RL,[q("span",CL,Me(e.$t("infoCard.pressure")),1),q("span",PL,Me(n.landmark.surfacePressureMbar)+" mbar",1)]),q("div",LL,[q("span",IL,Me(e.$t("infoCard.tempRange")),1),q("span",DL,Me(n.landmark.temperatureMinK)+"K — "+Me(n.landmark.temperatureMaxK)+"K",1)]),q("div",NL,[q("span",OL,Me(e.$t("infoCard.age")),1),q("span",UL,Me(n.landmark.geologicalAge),1)]),q("div",FL,[q("div",kL,[q("span",BL,Me(e.$t("infoCard.waterIce")),1),q("div",HL,[q("div",{class:"stat-fill",style:Tn({width:`${n.landmark.waterIceIndex*100}%`,background:"#4fc3f7"})},null,4)])]),q("div",VL,[q("span",GL,Me(e.$t("infoCard.ironOxide")),1),q("div",zL,[q("div",{class:"stat-fill",style:Tn({width:`${n.landmark.ironOxideIndex*100}%`,background:"#ff7043"})},null,4)])]),q("div",WL,[q("span",XL,Me(e.$t("infoCard.silicate")),1),q("div",$L,[q("div",{class:"stat-fill",style:Tn({width:`${n.landmark.silicateIndex*100}%`,background:"#ab47bc"})},null,4)])]),q("div",jL,[q("span",YL,Me(e.$t("infoCard.basalt")),1),q("div",KL,[q("div",{class:"stat-fill",style:Tn({width:`${n.landmark.basaltIndex*100}%`,background:"#66bb6a"})},null,4)])]),q("div",qL,[q("span",ZL,Me(e.$t("infoCard.roughness")),1),q("div",JL,[q("div",{class:"stat-fill",style:Tn({width:`${n.landmark.roughness*100}%`,background:"#ffca28"})},null,4)])]),q("div",QL,[q("span",eI,Me(e.$t("infoCard.dustCover")),1),q("div",tI,[q("div",{class:"stat-fill",style:Tn({width:`${n.landmark.dustCover*100}%`,background:"#bcaaa4"})},null,4)])]),q("div",nI,[q("span",iI,Me(e.$t("infoCard.cratering")),1),q("div",sI,[q("div",{class:"stat-fill",style:Tn({width:`${n.landmark.craterDensity*100}%`,background:"#78909c"})},null,4)])])])],64)):An("",!0),q("div",rI,[q("span",oI,Me(e.$t("infoCard.coordinates")),1),q("span",aI,Me(n.landmark.lat.toFixed(2))+"°, "+Me(n.landmark.lon.toFixed(2))+"°",1)])])])):An("",!0)]),_:1}))}},wv=Ai(lI,[["__scopeId","data-v-f08335f8"]]),cI={key:0,class:"loading-overlay"},uI={class:"loading-content"},fI={class:"loading-text"},hI={key:0,class:"loading-progress"},dI={__name:"LoadingOverlay",props:{isLoading:Boolean,loaded:{type:Number,default:0},total:{type:Number,default:0}},setup(n){return(e,t)=>(Tt(),Qs(Ul,{name:"fade"},{default:Nt(()=>[n.isLoading?(Tt(),Ht("div",cI,[q("div",uI,[q("p",fI,Me(e.$t("loading.surface")),1),n.total>0?(Tt(),Ht("p",hI,Me(n.loaded)+" / "+Me(n.total),1)):An("",!0)])])):An("",!0)]),_:1}))}},Rv=Ai(dI,[["__scopeId","data-v-d68a2ea4"]]),pI={class:"legend"},mI=["onClick"],gI={class:"legend-label"},_I={__name:"LandmarkLegend",emits:["filter"],setup(n,{emit:e}){const t=e,i=[{key:"landing-site",labelKey:"legend.landingSite"},{key:"volcano",labelKey:"legend.volcano"},{key:"canyon",labelKey:"legend.canyon"},{key:"basin",labelKey:"legend.basin"},{key:"plain",labelKey:"legend.plain"},{key:"polar-cap",labelKey:"legend.polarCap"}],s=bt(new Set(i.map(o=>o.key)));function r(o){const a=new Set(s.value);a.has(o)?a.delete(o):a.add(o),s.value=a;const l=new Set(i.map(c=>c.key).filter(c=>!a.has(c)));t("filter",l)}return(o,a)=>(Tt(),Ht("div",pI,[(Tt(),Ht(Zt,null,Tg(i,l=>q("button",{key:l.key,class:Qn(["legend-item",{dimmed:!s.value.has(l.key)}]),onClick:c=>r(l.key)},[q("span",{class:"legend-dot",style:Tn({backgroundColor:ke(DP)[l.key]})},null,4),q("span",gI,Me(o.$t(l.labelKey)),1)],10,mI)),64))]))}},Cv=Ai(_I,[["__scopeId","data-v-58a00e8c"]]),vI={class:"globe-view"},xI={key:0,class:"controls-panel"},yI={class:"control-label"},EI=["value"],MI=["value"],SI={__name:"GlobeView",setup(n){const e=bt(null),t=bt(null),i=bt(!0),s=bt("elevation"),r=bt(null),o=bt(null),a=bt(0),l=bt(0),c=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,{init:u,startLoop:f,flyTo:h,getCamera:p,getPointer:g,setClickHandler:_,dispose:m}=bv({minDistance:.5,maxDistance:20,defaultDistance:3,far:2e3,clearColor:657930}),{loadLandmarks:d}=Tv();let x=null,M=null,v=null,C=null;function P(b){v&&v.setFilter(b)}function w(b){s.value=b;const U=qc.find(H=>H.id===b);U&&M&&M.updateScheme(U)}ia(async()=>{if(!e.value||!t.value)return;u(e.value,t.value),x=new sv,x.background=new Ve(657930),x.add(new dv(16777215,.7));const b=new Qo(16777215,1);b.position.set(5,3,5),x.add(b);const U=new Qo(16777215,.4);U.position.set(-3,-1,-3),x.add(U);const H=qc.find(Oe=>Oe.id===s.value);M=MP(H);const X=await d(),ae=(await T("/mars_globe.glb")).scene,ee=new wi().setFromObject(ae),se=ee.getCenter(new G);ae.position.sub(se);const Y=Math.max(...ee.getSize(new G).toArray()),me=Y>0?2/Y:1;ae.scale.setScalar(me);let ve=1/0,ye=-1/0;ae.traverse(Oe=>{if(Oe.isMesh){const ne=Oe.geometry.attributes.position;for(let pe=0;pe<ne.count;pe++){const xe=Math.sqrt(ne.getX(pe)**2+ne.getY(pe)**2+ne.getZ(pe)**2);xe<ve&&(ve=xe),xe>ye&&(ye=xe)}Oe.material=M}}),M.setElevationRange(ve,ye),x.add(ae);const Ne=(ve+ye)/2*me;v=new Ev(X,Ne),v.onHover=Oe=>{Oe?(r.value=Oe.landmark,a.value=Oe.screenX,l.value=Oe.screenY):r.value=null},v.onClick=Oe=>{o.value=Oe;const ne=v.getLandmarkTarget(Oe.id);ne&&h(ne.position,ne.distance)},await v.init(),x.add(v.root),_((Oe,ne)=>v.clickTest(Oe,ne)),C=new Mv(Ne*40,{count:6e3,pointSize:.6}),x.add(C.root),f(x,Oe=>{const ne=p();ne&&v&&(v.pick(g(),ne),v.updateVisibility(ne)),C&&C.update(Oe)}),i.value=!1}),Js(()=>{var b;v==null||v.dispose(),C==null||C.dispose(),M&&((b=M._rampTexture)==null||b.dispose(),M.dispose()),x&&x.traverse(U=>{var H;U.isMesh&&((H=U.geometry)==null||H.dispose())}),m()});function V(b){b.key==="Escape"&&(o.value=null)}window.addEventListener("keydown",V),Js(()=>window.removeEventListener("keydown",V));function T(b){return new Promise((U,H)=>{new V1().load(b,U,void 0,H)})}return(b,U)=>(Tt(),Ht("div",vI,[q("canvas",{ref_key:"canvasRef",ref:e},null,512),q("div",{ref_key:"css2dRef",ref:t,class:"css2d-overlay"},null,512),Qe(Rv,{"is-loading":i.value,loaded:0,total:0},null,8,["is-loading"]),i.value?An("",!0):(Tt(),Ht("div",xI,[q("label",yI,Me(b.$t("globe.colorLabel")),1),q("select",{value:s.value,onChange:U[0]||(U[0]=H=>w(H.target.value)),class:"scheme-select"},[(Tt(!0),Ht(Zt,null,Tg(ke(qc),H=>(Tt(),Ht("option",{key:H.id,value:H.id},Me(H.name),9,MI))),128))],40,EI)])),ke(c)?An("",!0):(Tt(),Qs(Av,{key:1,landmark:r.value,x:a.value,y:l.value},null,8,["landmark","x","y"])),Qe(wv,{landmark:o.value,onClose:U[1]||(U[1]=H=>o.value=null)},null,8,["landmark"]),i.value?An("",!0):(Tt(),Qs(Cv,{key:2,onFilter:P}))]))}},bI=Ai(SI,[["__scopeId","data-v-1a205e11"]]),TI="/images/mola-preview.webp",Lm="/images/mola-preview.png",AI=TI,wI={class:"about"},RI={class:"content"},CI={class:"lead"},PI={class:"references"},LI={__name:"AboutView",setup(n){const{t:e}=aa(),t=bt(!1);return(i,s)=>{const r=bg("i18n-t");return Tt(),Ht("div",wI,[q("article",RI,[q("h1",null,Me(ke(e)("about.title")),1),q("p",CI,Me(ke(e)("about.lead")),1),q("figure",{class:"cover",onClick:s[0]||(s[0]=o=>t.value=!0)},[s[2]||(s[2]=q("picture",null,[q("source",{srcset:AI,type:"image/webp"}),q("img",{src:Lm,alt:"Mars HRSC-MOLA Blended DEM — global elevation map with hypsometric color ramp",loading:"lazy"})],-1)),q("figcaption",null,Me(ke(e)("about.figcaption")),1)]),Qe(Ul,{name:"lightbox"},{default:Nt(()=>[t.value?(Tt(),Ht("div",{key:0,class:"lightbox",onClick:s[1]||(s[1]=o=>t.value=!1)},[...s[3]||(s[3]=[q("img",{src:Lm,alt:"Mars HRSC-MOLA Blended DEM — full resolution"},null,-1),q("span",{class:"lightbox-close"},"×",-1)])])):An("",!0)]),_:1}),q("section",null,[q("h2",null,Me(ke(e)("about.dataSource.title")),1),q("p",null,[Qe(r,{keypath:"about.dataSource.p1",tag:"span"},{strong_dem:Nt(()=>[q("strong",null,Me(ke(e)("about.dataSource.strong_dem")),1)]),_:1})]),q("ul",null,[q("li",null,[Qe(r,{keypath:"about.dataSource.mola",tag:"span"},{strong_mola:Nt(()=>[q("strong",null,Me(ke(e)("about.dataSource.strong_mola")),1)]),_:1})]),q("li",null,[Qe(r,{keypath:"about.dataSource.hrsc",tag:"span"},{strong_hrsc:Nt(()=>[q("strong",null,Me(ke(e)("about.dataSource.strong_hrsc")),1)]),_:1})])]),q("p",null,[Qe(r,{keypath:"about.dataSource.p2",tag:"span"},{strong_res:Nt(()=>[q("strong",null,Me(ke(e)("about.dataSource.strong_res")),1)]),_:1})])]),q("section",null,[q("h2",null,Me(ke(e)("about.pipeline.title")),1),q("p",null,Me(ke(e)("about.pipeline.intro")),1),q("ol",null,[q("li",null,[q("strong",null,Me(ke(e)("about.pipeline.step1_title")),1),s[5]||(s[5]=Ln(" — ",-1)),Qe(r,{keypath:"about.pipeline.step1",tag:"span"},{code_rasterio:Nt(()=>[...s[4]||(s[4]=[q("code",null,"rasterio",-1)])]),_:1})]),q("li",null,[q("strong",null,Me(ke(e)("about.pipeline.step2_title")),1),Ln(" — "+Me(ke(e)("about.pipeline.step2")),1)]),q("li",null,[q("strong",null,Me(ke(e)("about.pipeline.step3_title")),1),Ln(" — "+Me(ke(e)("about.pipeline.step3")),1)]),q("li",null,[q("strong",null,Me(ke(e)("about.pipeline.step4_title")),1),Ln(" — "+Me(ke(e)("about.pipeline.step4")),1)]),q("li",null,[q("strong",null,Me(ke(e)("about.pipeline.step5_title")),1),Ln(" — "+Me(ke(e)("about.pipeline.step5")),1)])])]),q("section",null,[q("h2",null,Me(ke(e)("about.elevation.title")),1),q("p",null,[Qe(r,{keypath:"about.elevation.p1",tag:"span"},{strong_min:Nt(()=>[q("strong",null,Me(ke(e)("about.elevation.strong_min")),1)]),strong_max:Nt(()=>[q("strong",null,Me(ke(e)("about.elevation.strong_max")),1)]),_:1})]),q("p",null,Me(ke(e)("about.elevation.p2")),1)]),q("section",null,[q("h2",null,Me(ke(e)("about.references.title")),1),q("ul",PI,[q("li",null,[Qe(r,{keypath:"about.references.ref1",tag:"span"},{em:Nt(()=>[q("em",null,Me(ke(e)("about.references.ref1_em")),1)]),_:1})]),q("li",null,[Qe(r,{keypath:"about.references.ref2",tag:"span"},{em:Nt(()=>[q("em",null,Me(ke(e)("about.references.ref2_em")),1)]),_:1})]),q("li",null,[Qe(r,{keypath:"about.references.ref3",tag:"span"},{em:Nt(()=>[q("em",null,Me(ke(e)("about.references.ref3_em")),1)]),_:1})])])])])])}}},II=Ai(LI,[["__scopeId","data-v-545aa666"]]);function DI(n,e,t){return`${IP}/${n}/${e}/${t}?blankTile=false`}function NI(n){const e=2*Math.pow(2,n),t=1*Math.pow(2,n);return{cols:e,rows:t}}async function Im(n,e){const{cols:t,rows:i}=NI(n),s=document.createElement("canvas");s.width=t*Mr,s.height=i*Mr;const r=s.getContext("2d"),o=t*i;let a=0;const l=[];for(let c=0;c<i;c++)for(let u=0;u<t;u++){const f=DI(n,c,u),h=u,p=c;l.push(OI(f).then(g=>{r.drawImage(g,h*Mr,p*Mr,Mr,Mr)}).catch(()=>{}).finally(()=>{a++,e==null||e(a,o)}))}return await Promise.all(l),s}function OI(n){return new Promise((e,t)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>e(i),i.onerror=t,i.src=n})}const UI=[{maxDistance:Qr*1.5,tileZoom:5},{maxDistance:Qr*2.5,tileZoom:4}];class FI{constructor(e){ft(this,"root");ft(this,"material");ft(this,"texture",null);ft(this,"textureCanvas",null);ft(this,"onProgress");ft(this,"currentTileZoom",Zc);ft(this,"upgrading",!1);this.onProgress=e,this.material=new zl({roughness:.9,metalness:0,color:8939093});const t=new ua(Qr,bl,bl);this.root=new Qt(t,this.material)}async init(){this.textureCanvas=await Im(Zc,this.onProgress),this.texture=new yT(this.textureCanvas),this.texture.colorSpace=qt,this.material.map=this.texture,this.material.color.set(16777215),this.material.needsUpdate=!0}checkDetailLevel(e){if(this.upgrading)return;let t=Zc;for(const i of UI)if(e<=i.maxDistance){t=i.tileZoom;break}t>this.currentTileZoom&&this.upgradeToZoom(t)}async upgradeToZoom(e){this.upgrading=!0;try{const t=await Im(e);this.textureCanvas=t,this.texture&&(this.texture.image=t,this.texture.needsUpdate=!0),this.currentTileZoom=e}finally{this.upgrading=!1}}update(e){}dispose(){var e;this.root.geometry.dispose(),this.material.dispose(),(e=this.texture)==null||e.dispose()}}const kI=`varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,BI=`uniform vec3 uAtmosphereColor;
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
`;class HI{constructor(){ft(this,"root");const e=new ua(RP,bl,bl),t=new jn({vertexShader:kI,fragmentShader:BI,uniforms:{uAtmosphereColor:{value:new Ve(...PP)},uFresnelPower:{value:LP}},transparent:!0,blending:_l,side:vn,depthWrite:!1});this.root=new Qt(e,t)}async init(){}update(e){}dispose(){this.root.geometry.dispose(),this.root.material.dispose()}}class VI{constructor(e,t){ft(this,"scene");ft(this,"globe");ft(this,"atmosphere");ft(this,"landmarks");ft(this,"stars");this.scene=new sv,this.globe=new FI(t),this.atmosphere=new HI,this.landmarks=new Ev(e),this.stars=new Mv,this.marsGroup=new yi,this.marsGroup.rotation.z=wP,this.marsGroup.add(this.globe.root),this.marsGroup.add(this.atmosphere.root),this.marsGroup.add(this.landmarks.root),this.scene.add(this.marsGroup),this.scene.add(this.stars.root);const i=new Qo(16777215,1.8);i.position.set(5,3,4),this.scene.add(i);const s=new Qo(16777215,.5);s.position.set(-4,-1,-3),this.scene.add(s);const r=new kT(8952234,5583650,.6);this.scene.add(r);const o=new dv(16777215,.25);this.scene.add(o)}async init(){await Promise.all([this.globe.init(),this.atmosphere.init(),this.landmarks.init(),this.stars.init()])}update(e){this.globe.update(e),this.atmosphere.update(e),this.landmarks.update(e),this.stars.update(e)}dispose(){this.globe.dispose(),this.atmosphere.dispose(),this.landmarks.dispose(),this.stars.dispose()}}const GI={class:"canvas-wrapper"},zI={__name:"MarsCanvas",emits:["ready","hover","select","progress"],setup(n,{expose:e,emit:t}){const i=t,s=bt(null),r=bt(null),{init:o,startLoop:a,flyTo:l,getCamera:c,getPointer:u,setClickHandler:f,dispose:h}=bv(),{loadLandmarks:p}=Tv();let g=null;ia(async()=>{if(!s.value||!r.value)return;o(s.value,r.value);const m=await p();g=new VI(m,(d,x)=>{i("progress",d,x)}),g.landmarks.onHover=d=>i("hover",d),g.landmarks.onClick=d=>{i("select",d);const x=g.landmarks.getLandmarkTarget(d.id);if(x){g.marsGroup.updateMatrixWorld();const M=x.position.clone().applyMatrix4(g.marsGroup.matrixWorld);l(M,x.distance)}},f((d,x)=>{g==null||g.landmarks.clickTest(d,x)}),await g.init(),a(g.scene,d=>{g.update(d);const x=c();x&&(g.globe.checkDetailLevel(x.position.length()),g.landmarks.updateVisibility(x),g.landmarks.pick(u(),x))}),i("ready")});function _(m){g==null||g.landmarks.setFilter(m)}return e({setFilter:_}),Js(()=>{g==null||g.dispose(),h()}),(m,d)=>(Tt(),Ht("div",GI,[q("canvas",{ref_key:"canvasRef",ref:s},null,512),q("div",{ref_key:"css2dRef",ref:r,class:"css2d-overlay"},null,512)]))}},WI=Ai(zI,[["__scopeId","data-v-da9062a9"]]),XI={class:"gis-view"},$I={__name:"GisView",setup(n){const e=bt(null),t=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,i=bt(!0),s=bt(0),r=bt(0),o=bt(null),a=bt(null),l=bt(0),c=bt(0);function u(){i.value=!1}function f(m){m?(o.value=m.landmark,l.value=m.screenX,c.value=m.screenY):o.value=null}function h(m){a.value=m}function p(m,d){s.value=m,r.value=d}function g(m){var d;(d=e.value)==null||d.setFilter(m)}function _(m){m.key==="Escape"&&(a.value=null)}return window.addEventListener("keydown",_),Js(()=>window.removeEventListener("keydown",_)),(m,d)=>(Tt(),Ht("div",XI,[Qe(WI,{ref_key:"marsCanvasRef",ref:e,onReady:u,onHover:f,onSelect:h,onProgress:p},null,512),ke(t)?An("",!0):(Tt(),Qs(Av,{key:0,landmark:o.value,x:l.value,y:c.value},null,8,["landmark","x","y"])),Qe(wv,{landmark:a.value,onClose:d[0]||(d[0]=x=>a.value=null)},null,8,["landmark"]),Qe(Rv,{"is-loading":i.value,loaded:s.value,total:r.value},null,8,["is-loading","loaded","total"]),i.value?An("",!0):(Tt(),Qs(Cv,{key:1,onFilter:g}))]))}},jI=Ai($I,[["__scopeId","data-v-1ee0b6d4"]]),YI=[{path:"/",name:"Globe",component:bI},{path:"/about",name:"About",component:II},{path:"/gis",name:"Mars GIS",component:jI}],KI=vE({history:Zy(),routes:YI}),qI={brand:"MARS",elevationGlobe:"Elevation Globe",marsGis:"Mars GIS",about:"About"},ZI={surface:"Loading Mars surface..."},JI={colorLabel:"Color"},QI={landingSite:"Landing Sites",volcano:"Volcanoes",canyon:"Canyons",basin:"Basins",plain:"Plains",polarCap:"Polar Caps"},eD={mission:"Mission",agency:"Agency",year:"Year",status:"Status",feature:"Feature",diameter:"Diameter",elevation:"Elevation",pressure:"Pressure",tempRange:"Temp Range",age:"Age",coordinates:"Coordinates",waterIce:"Water Ice",ironOxide:"Iron Oxide",silicate:"Silicate",basalt:"Basalt",roughness:"Roughness",dustCover:"Dust Cover",cratering:"Cratering"},tD={title:"About This Project",lead:"A high-resolution 3D reconstruction of Mars' global topography, built from orbital elevation data collected by two spacecraft over two decades of observation.",figcaption:"HRSC-MOLA Blended DEM — 106,694 × 53,347 pixels, 200m/px. Click to enlarge.",dataSource:{title:"Data Source",p1:"This globe is derived from the {strong_dem}, a dataset produced by the U.S. Geological Survey's Astrogeology Science Center. It merges elevation measurements from two instruments:",strong_dem:"HRSC-MOLA Blended Digital Elevation Model",mola:"{strong_mola} (Mars Orbiter Laser Altimeter) aboard NASA's Mars Global Surveyor, which operated from 1997 to 2006. MOLA fired laser pulses at the surface and measured return time to determine elevation with ~1 meter vertical precision.",strong_mola:"MOLA",hrsc:"{strong_hrsc} (High Resolution Stereo Camera) aboard ESA's Mars Express, operational since 2004. HRSC captures stereo imagery that is processed into photogrammetric elevation models, providing detail where MOLA's along-track spacing leaves gaps.",strong_hrsc:"HRSC",p2:"The blended product combines MOLA's global coverage with HRSC's regional detail, producing a unified elevation map at {strong_res} — approximately 106,694 × 53,347 pixels covering the entire planet.",strong_res:"200 meters per pixel"},pipeline:{title:"Processing Pipeline",intro:"The raw dataset is an 11 GB GeoTIFF file containing signed 16-bit elevation values in meters relative to the Mars aeroid (a reference surface analogous to Earth's sea level). Our pipeline processes this into a 3D mesh through the following steps:",step1_title:"Downsampling",step1:"The full-resolution grid is resampled to a target resolution using bilinear interpolation via {code_rasterio} (built on GDAL). The default target is 4 km/pixel, yielding approximately 5,300 × 2,700 data points.",step2_title:"Spherical projection",step2:"Each grid cell's latitude and longitude are converted to 3D Cartesian coordinates on a unit sphere. Elevation values displace each vertex radially outward, with a configurable exaggeration factor (default 10×) to make terrain features visible at globe scale.",step3_title:"Mesh generation",step3:"The grid is triangulated into a watertight sphere mesh. Polar rows are collapsed into single vertices with triangle fans to avoid degenerate geometry at the poles.",step4_title:"Normal computation",step4:"Per-vertex normals are computed by averaging adjacent face normals, enabling smooth shading that reveals subtle terrain features.",step5_title:"Export",step5:"The final mesh is exported as a binary glTF (GLB) file for efficient loading in the browser."},elevation:{title:"Elevation Profile",p1:"Mars has the most extreme topographic range of any terrestrial planet in the solar system. Elevations in this dataset span from {strong_min} (the floor of Hellas Planitia, the deepest impact basin) to {strong_max} (the summit of Olympus Mons, the tallest known volcano). This ~29 km range exceeds Earth's ~20 km range from the Mariana Trench to Mount Everest.",strong_min:"-8,200 m",strong_max:"+21,229 m",p2:"The planet's topography divides roughly into two hemispheres: the heavily cratered southern highlands, which sit 1-3 km above the datum, and the smoother northern lowlands, which are 1-3 km below. This dichotomy, still not fully explained, is one of the major open questions in planetary science."},references:{title:"References",ref1:"Fergason, R. L., Hare, T. M., & Laura, J. (2018). {em}. Astrogeology PDS Annex, U.S. Geological Survey.",ref1_em:"HRSC and MOLA Blended Digital Elevation Model at 200m v2",ref2:"Smith, D. E., et al. (2001). {em}. Journal of Geophysical Research, 106(E10), 23689-23722.",ref2_em:"Mars Orbiter Laser Altimeter: Experiment summary after the first year of global mapping of Mars",ref3:"Gwinner, K., et al. (2016). {em}. European Planetary Science Congress.",ref3_em:"The first global image mosaic and digital elevation model of Mars from the High Resolution Stereo Camera"}},nD={nav:qI,loading:ZI,globe:JI,legend:QI,infoCard:eD,about:tD},iD={brand:"MARTE",elevationGlobe:"Globo de Elevação",marsGis:"SIG de Marte",about:"Sobre"},sD={surface:"Carregando superfície de Marte..."},rD={colorLabel:"Cor"},oD={landingSite:"Locais de Pouso",volcano:"Vulcões",canyon:"Cânions",basin:"Bacias",plain:"Planícies",polarCap:"Calotas Polares"},aD={mission:"Missão",agency:"Agência",year:"Ano",status:"Status",feature:"Feição",diameter:"Diâmetro",elevation:"Elevação",pressure:"Pressão",tempRange:"Faixa de Temp.",age:"Idade",coordinates:"Coordenadas",waterIce:"Gelo de Água",ironOxide:"Óxido de Ferro",silicate:"Silicato",basalt:"Basalto",roughness:"Rugosidade",dustCover:"Cobertura de Poeira",cratering:"Craterização"},lD={title:"Sobre Este Projeto",lead:"Uma reconstrução 3D de alta resolução da topografia global de Marte, construída a partir de dados de elevação orbital coletados por duas espaçonaves ao longo de duas décadas de observação.",figcaption:"DEM Combinado HRSC-MOLA — 106.694 × 53.347 pixels, 200m/px. Clique para ampliar.",dataSource:{title:"Fonte de Dados",p1:"Este globo é derivado do {strong_dem}, um conjunto de dados produzido pelo Centro de Ciência Astrogeológica do Serviço Geológico dos EUA. Ele combina medições de elevação de dois instrumentos:",strong_dem:"Modelo Digital de Elevação Combinado HRSC-MOLA",mola:"{strong_mola} (Altímetro Laser do Orbitador de Marte) a bordo do Mars Global Surveyor da NASA, que operou de 1997 a 2006. O MOLA disparava pulsos laser na superfície e media o tempo de retorno para determinar a elevação com precisão vertical de ~1 metro.",strong_mola:"MOLA",hrsc:"{strong_hrsc} (Câmera Estéreo de Alta Resolução) a bordo do Mars Express da ESA, operacional desde 2004. A HRSC captura imagens estéreo que são processadas em modelos de elevação fotogramétricos, fornecendo detalhes onde o espaçamento ao longo da trilha do MOLA deixa lacunas.",strong_hrsc:"HRSC",p2:"O produto combinado une a cobertura global do MOLA com o detalhe regional da HRSC, produzindo um mapa de elevação unificado a {strong_res} — aproximadamente 106.694 × 53.347 pixels cobrindo todo o planeta.",strong_res:"200 metros por pixel"},pipeline:{title:"Pipeline de Processamento",intro:"O conjunto de dados bruto é um arquivo GeoTIFF de 11 GB contendo valores de elevação de 16 bits com sinal em metros relativos ao aeroide de Marte (uma superfície de referência análoga ao nível do mar da Terra). Nosso pipeline processa isso em uma malha 3D através das seguintes etapas:",step1_title:"Subamostragem",step1:"A grade em resolução total é reamostrada para uma resolução alvo usando interpolação bilinear via {code_rasterio} (construído sobre GDAL). O alvo padrão é 4 km/pixel, gerando aproximadamente 5.300 × 2.700 pontos de dados.",step2_title:"Projeção esférica",step2:"A latitude e longitude de cada célula da grade são convertidas em coordenadas cartesianas 3D em uma esfera unitária. Os valores de elevação deslocam cada vértice radialmente para fora, com um fator de exagero configurável (padrão 10×) para tornar as feições do terreno visíveis na escala do globo.",step3_title:"Geração de malha",step3:"A grade é triangulada em uma malha esférica estanque. As linhas polares são colapsadas em vértices únicos com leques de triângulos para evitar geometria degenerada nos polos.",step4_title:"Cálculo de normais",step4:"As normais por vértice são calculadas pela média das normais das faces adjacentes, permitindo sombreamento suave que revela feições sutis do terreno.",step5_title:"Exportação",step5:"A malha final é exportada como um arquivo glTF binário (GLB) para carregamento eficiente no navegador."},elevation:{title:"Perfil de Elevação",p1:"Marte possui a faixa topográfica mais extrema de qualquer planeta terrestre do sistema solar. As elevações neste conjunto de dados variam de {strong_min} (o piso de Hellas Planitia, a bacia de impacto mais profunda) a {strong_max} (o cume de Olympus Mons, o maior vulcão conhecido). Esta faixa de ~29 km excede a faixa de ~20 km da Terra, da Fossa das Marianas ao Monte Everest.",strong_min:"-8.200 m",strong_max:"+21.229 m",p2:"A topografia do planeta se divide aproximadamente em dois hemisférios: as terras altas do sul, fortemente craterizadas, que ficam 1-3 km acima do datum, e as terras baixas do norte, mais suaves, que ficam 1-3 km abaixo. Esta dicotomia, ainda não totalmente explicada, é uma das grandes questões em aberto da ciência planetária."},references:{title:"Referências",ref1:"Fergason, R. L., Hare, T. M., & Laura, J. (2018). {em}. Astrogeology PDS Annex, U.S. Geological Survey.",ref1_em:"HRSC and MOLA Blended Digital Elevation Model at 200m v2",ref2:"Smith, D. E., et al. (2001). {em}. Journal of Geophysical Research, 106(E10), 23689-23722.",ref2_em:"Mars Orbiter Laser Altimeter: Experiment summary after the first year of global mapping of Mars",ref3:"Gwinner, K., et al. (2016). {em}. European Planetary Science Congress.",ref3_em:"The first global image mosaic and digital elevation model of Mars from the High Resolution Stereo Camera"}},cD={nav:iD,loading:sD,globe:rD,legend:oD,infoCard:aD,about:lD},uD=typeof localStorage<"u"?localStorage.getItem("mars-locale"):null,fD=lS({legacy:!1,locale:uD||"en",fallbackLocale:"en",messages:{en:nD,"pt-BR":cD}});uy(IS).use(KI).use(fD).mount("#app");
