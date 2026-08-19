const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-pn_Jnxha.js","assets/api-SVqoUila.js","assets/DashboardView-VgxV_QBz.js","assets/AppHeader-B5mgjpfy.js","assets/DateRangeFilter-BbUtogZW.js","assets/AppButton-DaVEwUBI.js","assets/reservationFormatter-CfFfASd0.js","assets/ReservationListView-ynALZ3xq.js","assets/AppInput-Bb0rgnnz.js","assets/AppSelect-bgC0rGGY.js","assets/reservationService-Cb433rv8.js","assets/StatusBadge-BkjBIRWg.js","assets/ReservationStatusBadge-CTatu1v7.js","assets/ReservationCreateView-CA4ciQ7z.js","assets/ReservationForm-CpYpVypW.js","assets/ReservationDetailView-ClngK0_O.js","assets/ReservationEditView-CjiyB0Z1.js","assets/SettingsView-CORVBt3E.js"])))=>i.map(i=>d[i]);
import{$ as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,J as l,K as u,L as d,M as f,N as p,O as m,Q as h,T as g,U as _,V as v,W as y,X as b,Y as ee,Z as x,_ as te,a as ne,at as S,b as C,c as w,ct as T,d as re,dt as E,et as ie,f as D,ft as ae,g as O,gt as oe,h as k,ht as se,i as ce,it as A,j as le,k as ue,l as j,lt as de,m as fe,mt as M,n as pe,nt as me,o as he,ot as ge,p as _e,pt as ve,q as ye,r as be,rt as xe,s as Se,st as Ce,t as we,tt as Te,u as Ee,ut as De,v as Oe,vt as ke,w as Ae,x as je,y as Me,yt as Ne,z as Pe}from"./api-SVqoUila.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Fe=void 0,Ie=typeof window<`u`&&window.trustedTypes;if(Ie)try{Fe=Ie.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Le=Fe?e=>Fe.createHTML(e):e=>e,Re=`http://www.w3.org/2000/svg`,ze=`http://www.w3.org/1998/Math/MathML`,N=typeof document<`u`?document:null,Be=N&&N.createElement(`template`),Ve={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?N.createElementNS(Re,e):t===`mathml`?N.createElementNS(ze,e):n?N.createElement(e,{is:n}):N.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>N.createTextNode(e),createComment:e=>N.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>N.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Be.innerHTML=Le(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Be.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},He=`transition`,Ue=`animation`,We=Symbol(`_vtc`),Ge={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ke=ie({},ce,Ge),qe=(e,t=[])=>{A(e)?e.forEach(e=>e(...t)):e&&e(...t)},Je=e=>e?A(e)?e.some(e=>e.length>1):e.length>1:!1;function Ye(e){let t={};for(let n in e)n in Ge||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=Xe(i),h=m&&m[0],g=m&&m[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:y,onLeave:b,onLeaveCancelled:ee,onBeforeAppear:x=_,onAppear:te=v,onAppearCancelled:ne=y}=t,S=(e,t,n,r)=>{e._enterCancelled=r,Qe(e,t?u:s),Qe(e,t?l:o),n&&n()},C=(e,t)=>{e._isLeaving=!1,Qe(e,d),Qe(e,p),Qe(e,f),t&&t()},w=e=>(t,n)=>{let i=e?te:v,o=()=>S(t,e,n);qe(i,[t,o]),$e(()=>{Qe(t,e?c:a),P(t,e?u:s),Je(i)||tt(t,r,h,o)})};return ie(t,{onBeforeEnter(e){qe(_,[e]),P(e,a),P(e,o)},onBeforeAppear(e){qe(x,[e]),P(e,c),P(e,l)},onEnter:w(!1),onAppear:w(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>C(e,t);P(e,d),e._enterCancelled?(P(e,f),at(e)):(at(e),P(e,f)),$e(()=>{e._isLeaving&&(Qe(e,d),P(e,p),Je(b)||tt(e,r,g,n))}),qe(b,[e,n])},onEnterCancelled(e){S(e,!1,void 0,!0),qe(y,[e])},onAppearCancelled(e){S(e,!0,void 0,!0),qe(ne,[e])},onLeaveCancelled(e){C(e),qe(ee,[e])}})}function Xe(e){if(e==null)return null;if(Ce(e))return[Ze(e.enter),Ze(e.leave)];{let t=Ze(e);return[t,t]}}function Ze(e){return Ne(e)}function P(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[We]||(e[We]=new Set)).add(t)}function Qe(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[We];n&&(n.delete(t),n.size||(e[We]=void 0))}function $e(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var et=0;function tt(e,t,n,r){let i=e._endId=++et,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=nt(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function nt(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${He}Delay`),a=r(`${He}Duration`),o=rt(i,a),s=r(`${Ue}Delay`),c=r(`${Ue}Duration`),l=rt(s,c),u=null,d=0,f=0;t===He?o>0&&(u=He,d=o,f=a.length):t===Ue?l>0&&(u=Ue,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?He:Ue:null,f=u?u===He?a.length:c.length:0);let p=u===He&&/\b(?:transform|all)(?:,|$)/.test(r(`${He}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function rt(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>it(t)+it(e[n])))}function it(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function at(e){return(e?e.ownerDocument:document).body.offsetHeight}function ot(e,t,n){let r=e[We];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var st=Symbol(`_vod`),ct=Symbol(`_vsh`),lt=Symbol(``),ut=/(?:^|;)\s*display\s*:/;function dt(e,t,n){let r=e.style,i=E(n),a=!1;if(n&&!i){if(t){if(E(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??pt(r,t,``)}else for(let e in t)n[e]??pt(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?pt(r,i,``):_t(e,i,!E(t)&&t?t[i]:void 0,o)||pt(r,i,o)}}else if(i){if(t!==n){let e=r[lt];e&&(n+=`;`+e),r.cssText=n,a=ut.test(n)}}else t&&e.removeAttribute(`style`);st in e&&(e[st]=a?r.display:``,e[ct]&&(r.display=`none`))}var ft=/\s*!important$/;function pt(e,t,n){if(A(n))n.forEach(n=>pt(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=gt(e,t);ft.test(n)?e.setProperty(Te(r),n.replace(ft,``),`important`):e[r]=n}}var mt=[`Webkit`,`Moz`,`ms`],ht={};function gt(t,n){let r=ht[n];if(r)return r;let i=h(n);if(i!==`filter`&&i in t)return ht[n]=i;i=e(i);for(let e=0;e<mt.length;e++){let r=mt[e]+i;if(r in t)return ht[n]=r}return n}function _t(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&E(r)&&n===r}var vt=`http://www.w3.org/1999/xlink`;function yt(e,t,n,r,i,a=De(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(vt,t.slice(6,t.length)):e.setAttributeNS(vt,t,n):n==null||a&&!me(n)?e.removeAttribute(t):e.setAttribute(t,a?``:ae(n)?String(n):n)}function bt(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Le(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=me(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function F(e,t,n,r){e.addEventListener(t,n,r)}function xt(e,t,n,r){e.removeEventListener(t,n,r)}var St=Symbol(`_vei`);function Ct(e,t,n,r,i=null){let a=e[St]||(e[St]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Et(t);r?F(e,n,a[t]=At(r,i),s):o&&(xt(e,n,o,s),a[t]=void 0)}}var wt=/(Once|Passive|Capture)$/,Tt=/^on:?(?:Once|Passive|Capture)$/;function Et(e){let t,n;for(;(n=e.match(wt))&&!Tt.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):Te(e.slice(2)),t]}var Dt=0,Ot=Promise.resolve(),kt=()=>Dt||=(Ot.then(()=>Dt=0),Date.now());function At(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(A(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&Se(e,t,5,a)}}else Se(r,t,5,[e])};return n.value=e,n.attached=kt(),n}var jt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Mt=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?ot(e,r,o):t===`style`?dt(e,n,r):T(t)?ge(t)||Ct(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Nt(e,t,r,o))?(bt(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&yt(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Pt(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!E(r)))?bt(e,h(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),yt(e,t,r,o))};function Nt(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&jt(t)&&S(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return jt(t)&&E(n)?!1:t in e}function Pt(e,t){let n=e._def.props;if(!n)return!1;let r=h(t);return Array.isArray(n)?n.some(e=>h(e)===r):Object.keys(n).some(e=>h(e)===r)}var Ft=new WeakMap,It=new WeakMap,Lt=Symbol(`_moveCb`),Rt=Symbol(`_enterCb`),zt=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:ie({},Ke,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=te(),r=a(),o,s;return i(()=>{if(!o.length)return;let t=e.moveClass||`${e.name||`v`}-move`;if(!Wt(o[0].el,n.vnode.el,t)){o=[];return}o.forEach(Bt),o.forEach(Vt);let r=o.filter(Ht);at(n.vnode.el),r.forEach(e=>{let n=e.el,r=n.style;P(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[Lt]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[Lt]=null,Qe(n,t))};n.addEventListener(`transitionend`,i)}),o=[]}),()=>{let i=ee(e),a=Ye(i),c=i.tag||ne;if(o=[],s)for(let e=0;e<s.length;e++){let t=s[e];t.el&&t.el instanceof Element&&!t.el[ct]&&(o.push(t),p(t,f(t,a,r,n)),Ft.set(t,Ut(t.el)))}s=t.default?Oe(t.default()):[];for(let e=0;e<s.length;e++){let t=s[e];t.key!=null&&p(t,f(t,a,r,n))}return k(c,null,s)}}});function Bt(e){let t=e.el;t[Lt]&&t[Lt](),t[Rt]&&t[Rt]()}function Vt(e){It.set(e,Ut(e.el))}function Ht(e){let t=Ft.get(e),n=It.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el,n=t.style,a=t.getBoundingClientRect(),o=1,s=1;return t.offsetWidth&&(o=a.width/t.offsetWidth),t.offsetHeight&&(s=a.height/t.offsetHeight),(!Number.isFinite(o)||o===0)&&(o=1),(!Number.isFinite(s)||s===0)&&(s=1),Math.abs(o-1)<.01&&(o=1),Math.abs(s-1)<.01&&(s=1),n.transform=n.webkitTransform=`translate(${r/o}px,${i/s}px)`,n.transitionDuration=`0s`,e}}function Ut(e){let t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function Wt(e,t,n){let r=e.cloneNode(),i=e[We];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=nt(r);return a.removeChild(r),o}var Gt=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return A(t)?e=>xe(t,e):t};function Kt(e){e.target.composing=!0}function qt(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var I=Symbol(`_assign`),Jt=Symbol(`_initialValue`);function Yt(e,t,n){return t&&(e=e.trim()),n&&(e=se(e)),e}var Xt={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[Jt]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[Jt]=e.defaultValue.replace(/\r\n?/g,`
`))),e[I]=Gt(i);let a=r||i.props&&i.props.type===`number`;F(e,t?`change`:`input`,t=>{t.target.composing||e[I](Yt(e.value,n,a))}),(n||a)&&F(e,`change`,()=>{e.value=Yt(e.value,n,a)}),t||(F(e,`compositionstart`,Kt),F(e,`compositionend`,qt),F(e,`change`,qt))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[Jt];delete e[Jt],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[I](Yt(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[I]=Gt(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?se(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},Zt={deep:!0,created(e,t,n){e[I]=Gt(n),F(e,`change`,()=>{let t=e._modelValue,n=nn(e),r=e.checked,i=e[I];if(A(t)){let e=M(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(de(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(rn(e,r))})},mounted:Qt,beforeUpdate(e,t,n){e[I]=Gt(n),Qt(e,t,n)}};function Qt(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(A(t))i=M(t,r.props.value)>-1;else if(de(t))i=t.has(r.props.value);else{if(t===n)return;i=ve(t,rn(e,!0))}e.checked!==i&&(e.checked=i)}var $t={created(e,{value:t},n){e.checked=ve(t,n.props.value),e[I]=Gt(n),F(e,`change`,()=>{e[I](nn(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[I]=Gt(r),t!==n&&(e.checked=ve(t,r.props.value))}},en={deep:!0,created(e,{value:t,modifiers:{number:r}},i){e._modelValue=t,F(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>r?se(nn(e)):nn(e));e[I](e.multiple?de(e._modelValue)?new Set(t):t:t[0]),e._assigning=!0,n(()=>{e._assigning=!1})}),e[I]=Gt(i)},mounted(e,{value:t}){tn(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[I]=Gt(n)},updated(e,{value:t}){e._assigning||tn(e,t)}};function tn(e,t){let n=e.multiple,r=A(t);if(!(n&&!r&&!de(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=nn(a);if(n){if(r){let e=typeof o;a.selected=e===`string`||e===`number`?t.some(e=>String(e)===String(o)):M(t,o)>-1}else a.selected=t.has(o)}else if(ve(nn(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function nn(e){return`_value`in e?e._value:e.value}function rn(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var an={created(e,t,n){sn(e,t,n,null,`created`)},mounted(e,t,n){sn(e,t,n,null,`mounted`)},beforeUpdate(e,t,n,r){sn(e,t,n,r,`beforeUpdate`)},updated(e,t,n,r){sn(e,t,n,r,`updated`)}};function on(e,t){switch(e){case`SELECT`:return en;case`TEXTAREA`:return Xt;default:switch(t){case`checkbox`:return Zt;case`radio`:return $t;default:return Xt}}}function sn(e,t,n,r,i){let a=on(e.tagName,n.props&&n.props.type)[i];a&&a(e,t,n,r)}var cn=[`ctrl`,`shift`,`alt`,`meta`],ln={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>cn.some(n=>e[`${n}Key`]&&!t.includes(n))},un=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=ln[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},dn=ie({patchProp:Mt},Ve),fn;function pn(){return fn||=_e(dn)}var mn=((...e)=>{let t=pn().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=gn(e);if(!r)return;let i=t._component;!S(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,hn(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function hn(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function gn(e){return E(e)?document.querySelector(e):e}var _n=typeof window<`u`,vn,yn=e=>vn=e,bn=Symbol();function xn(e){return e&&typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`&&typeof e.toJSON!=`function`}var Sn=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:typeof globalThis==`object`?globalThis:{HTMLElement:null};function Cn(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function wn(e,t,n){let r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){kn(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function Tn(e){let t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function En(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{let t=new MouseEvent(`click`,{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});e.dispatchEvent(t)}}var Dn=typeof navigator==`object`?navigator:{userAgent:``},On=/Macintosh/.test(Dn.userAgent)&&/AppleWebKit/.test(Dn.userAgent)&&!/Safari/.test(Dn.userAgent),kn=_n?typeof HTMLAnchorElement<`u`&&`download`in HTMLAnchorElement.prototype&&!On?An:`msSaveOrOpenBlob`in Dn?jn:Mn:()=>{};function An(e,t=`download`,n){let r=document.createElement(`a`);r.download=t,r.rel=`noopener`,typeof e==`string`?(r.href=e,r.origin===location.origin?En(r):Tn(r.href)?wn(e,t,n):(r.target=`_blank`,En(r))):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){En(r)},0))}function jn(e,t=`download`,n){if(typeof e==`string`){if(Tn(e))wn(e,t,n);else{let t=document.createElement(`a`);t.href=e,t.target=`_blank`,setTimeout(function(){En(t)})}}else navigator.msSaveOrOpenBlob(Cn(e,n),t)}function Mn(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return wn(e,t,n);let i=e.type===`application/octet-stream`,a=/constructor/i.test(String(Sn.HTMLElement))||`safari`in Sn,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||On)&&typeof FileReader<`u`){let t=new FileReader;t.onloadend=function(){let e=t.result;if(typeof e!=`string`)throw r=null,Error(`Wrong reader.result type`);e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{let t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout(function(){URL.revokeObjectURL(t)},4e4)}}var{assign:Nn}=Object;function Pn(){let e=Pe(!0),t=e.run(()=>u({})),n=[],r=[],i=_({install(e){yn(i),i._a=e,e.provide(bn,i),e.config.globalProperties.$pinia=i,r.forEach(e=>n.push(e)),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}var Fn=()=>{};function In(e,n,r,i=Fn){e.add(n);let a=()=>{e.delete(n)&&i()};return!r&&t()&&y(a),a}function Ln(e,...t){e.forEach(e=>{e(...t)})}var Rn=e=>e(),zn=Symbol(),Bn=Symbol();function Vn(e,t){e instanceof Map&&t instanceof Map?t.forEach((t,n)=>e.set(n,t)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(let n in t){if(!Object.hasOwn(t,n))continue;let r=t[n],i=e[n];e[n]=xn(i)&&xn(r)&&Object.hasOwn(e,n)&&!s(r)&&!v(r)?Vn(i,r):r}return e}var Hn=Symbol();function Un(e){return!e||typeof e!=`object`||!Object.hasOwn(e,Hn)}var{assign:Wn}=Object;function Gn(e){return!!(s(e)&&e.effect)}function Kn(e,t,n,r){let{state:i,actions:a,getters:o}=t,s=n.state.value[e],c;function l(){return s||(n.state.value[e]=i?i():{}),Wn(b(n.state.value[e]),a,Object.keys(o||{}).reduce((t,r)=>(t[r]=_(w(()=>{yn(n);let t=n._s.get(e);return o[r].call(t,t)})),t),{}))}return c=qn(e,l,t,n,r,!0),c}function qn(e,t,r={},i,a,l){let u,d=Wn({actions:{}},r),f={deep:!0},p,m,h=new Set,g=new Set,_,y=i.state.value[e];!l&&!y&&(i.state.value[e]={});let b;function x(t){let r;p=m=!1,typeof t==`function`?(t(i.state.value[e]),r={type:`patch function`,storeId:e,events:_}):(Vn(i.state.value[e],t),r={type:`patch object`,payload:t,storeId:e,events:_});let a=b=Symbol();n().then(()=>{b===a&&(p=!0)}),m=!0,Ln(h,r,i.state.value[e])}let te=l?function(){let{state:e}=r,t=e?e():{};this.$patch(e=>{Wn(e,t)})}:Fn;function ne(){u.stop(),h.clear(),g.clear(),i._s.delete(e)}let S=(t,n=``)=>{if(zn in t)return t[Bn]=n,t;let r=function(){yn(i);let n=Array.from(arguments),a=new Set,o=new Set;function s(e){a.add(e)}function c(e){o.add(e)}Ln(g,{args:n,name:r[Bn],store:w,after:s,onError:c});let l;try{l=t.apply(this&&this.$id===e?this:w,n)}catch(e){throw Ln(o,e),e}return l instanceof Promise?l.then(e=>(Ln(a,e),e)).catch(e=>(Ln(o,e),Promise.reject(e))):(Ln(a,l),l)};return r[zn]=!0,r[Bn]=n,r},C={_p:i,$id:e,$onAction:In.bind(null,g),$patch:x,$reset:te,$subscribe(t,n={}){if(h.has(t))return Fn;let r=In(h,t,n.detached,()=>a()),a=u.run(()=>c(()=>i.state.value[e],r=>{(n.flush===`sync`?m:p)&&t({storeId:e,type:`direct`,events:_},r)},Wn({},f,n)));return r},$dispose:ne},w=o(C);i._s.set(e,w);let T=(i._a&&i._a.runWithContext||Rn)(()=>i._e.run(()=>(u=Pe()).run(()=>t({action:S}))));for(let t in T){let n=T[t];s(n)&&!Gn(n)||v(n)?l||(y&&Un(n)&&(s(n)?n.value=y[t]:Vn(n,y[t])),i.state.value[e][t]=n):typeof n==`function`&&(T[t]=S(n,t),d.actions[t]=n)}return Wn(w,T),Wn(ee(w),T),Object.defineProperty(w,"$state",{get:()=>i.state.value[e],set:e=>{x(t=>{Wn(t,e)})}}),i._p.forEach(e=>{let t=u.run(()=>e({store:w,app:i._a,pinia:i,options:d}));Wn(w,t)}),y&&l&&r.hydrate&&r.hydrate(w.$state,y),p=!0,m=!0,w}function Jn(e,t,n){let r,i=typeof t==`function`;r=i?n:t;function a(n,a){let o=C();return n||=o?je(bn,null):null,n&&yn(n),n=vn,n._s.has(e)||(i?qn(e,t,r,n):Kn(e,r,n)),n._s.get(e)}return a.$id=e,a}function Yn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Xn(e){if(Array.isArray(e))return e}function Zn(e){if(Array.isArray(e))return Yn(e)}function Qn(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function $n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,lr(r.key),r)}}function er(e,t,n){return t&&$n(e.prototype,t),n&&$n(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function tr(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=dr(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function L(e,t,n){return(t=lr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function rr(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ir(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function or(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?or(Object(n),!0).forEach(function(t){L(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):or(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function sr(e,t){return Xn(e)||rr(e,t)||dr(e,t)||ir()}function z(e){return Zn(e)||nr(e)||dr(e)||ar()}function cr(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function lr(e){var t=cr(e,`string`);return typeof t==`symbol`?t:t+``}function ur(e){"@babel/helpers - typeof";return ur=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ur(e)}function dr(e,t){if(e){if(typeof e==`string`)return Yn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yn(e,t):void 0}}var fr=function(){},pr={},mr={},hr=null,gr={mark:fr,measure:fr};try{typeof window<`u`&&(pr=window),typeof document<`u`&&(mr=document),typeof MutationObserver<`u`&&(hr=MutationObserver),typeof performance<`u`&&(gr=performance)}catch{}var _r=(pr.navigator||{}).userAgent,vr=_r===void 0?``:_r,yr=pr,B=mr,br=hr,xr=gr;yr.document;var V=!!B.documentElement&&!!B.head&&typeof B.addEventListener==`function`&&typeof B.createElement==`function`,Sr=~vr.indexOf(`MSIE`)||~vr.indexOf(`Trident/`),Cr,wr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Tr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Er={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Dr={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Or=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],H=`classic`,kr=`duotone`,Ar=`sharp`,jr=`sharp-duotone`,Mr=`chisel`,Nr=`etch`,Pr=`graphite`,Fr=`jelly`,Ir=`jelly-duo`,Lr=`jelly-fill`,Rr=`mosaic`,zr=`notdog`,Br=`notdog-duo`,Vr=`pixel`,Hr=`slab`,Ur=`slab-duo`,Wr=`slab-press`,Gr=`slab-press-duo`,Kr=`thumbprint`,qr=`utility`,Jr=`utility-duo`,Yr=`utility-fill`,Xr=`vellum`,Zr=`whiteboard`,Qr=`Classic`,$r=`Duotone`,ei=`Sharp`,ti=`Sharp Duotone`,ni=`Chisel`,ri=`Etch`,ii=`Graphite`,ai=`Jelly`,oi=`Jelly Duo`,si=`Jelly Fill`,ci=`Mosaic`,li=`Notdog`,ui=`Notdog Duo`,di=`Pixel`,fi=`Slab`,pi=`Slab Duo`,mi=`Slab Press`,hi=`Slab Press Duo`,gi=`Thumbprint`,_i=`Utility`,vi=`Utility Duo`,yi=`Utility Fill`,bi=`Vellum`,xi=`Whiteboard`,Si=[H,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr];Cr={},L(L(L(L(L(L(L(L(L(L(Cr,H,Qr),kr,$r),Ar,ei),jr,ti),Mr,ni),Nr,ri),Pr,ii),Fr,ai),Ir,oi),Lr,si),L(L(L(L(L(L(L(L(L(L(Cr,Rr,ci),zr,li),Br,ui),Vr,di),Hr,fi),Ur,pi),Wr,mi),Gr,hi),Kr,gi),qr,_i),L(L(L(L(Cr,Jr,vi),Yr,yi),Xr,bi),Zr,xi);var Ci={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},wi={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Ti=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Ei={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Di=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Oi={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},ki=[`kit`];L(L({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Ai={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},ji={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Mi={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Ni={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Pi,Fi={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ii=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Pi={},L(L(L(L(L(L(L(L(L(L(Pi,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),L(L(L(L(L(L(L(L(L(L(Pi,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),L(L(L(L(Pi,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),L(L({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Li={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Ri={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},zi={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Bi=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Ii,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Vi=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Hi=[1,2,3,4,5,6,7,8,9,10],Ui=Hi.concat([11,12,13,14,15,16,17,18,19,20]),Wi=[].concat(z(Object.keys(Ri)),Vi,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Fi.GROUP,Fi.SWAP_OPACITY,Fi.PRIMARY,Fi.SECONDARY],Hi.map(function(e){return`${e}x`}),Ui.map(function(e){return`w-${e}`})),Gi={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},U=`___FONT_AWESOME___`,Ki=16,qi=`fa`,Ji=`svg-inline--fa`,Yi=`data-fa-i2svg`,Xi=`data-fa-pseudo-element`,Zi=`data-fa-pseudo-element-pending`,Qi=`data-prefix`,$i=`data-icon`,ea=`fontawesome-i2svg`,ta=`async`,na=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],ra=[`::before`,`::after`,`:before`,`:after`],ia=function(){try{return!0}catch{return!1}}();function aa(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[H]}})}var oa=R({},Er);oa[H]=R(R(R(R({},{"fa-duotone":`duotone`}),Er[H]),Oi.kit),Oi[`kit-duotone`]);var sa=aa(oa),ca=R({},Ei);ca[H]=R(R(R(R({},{duotone:`fad`}),ca[H]),Ni.kit),Ni[`kit-duotone`]);var la=aa(ca),ua=R({},zi);ua[H]=R(R({},ua[H]),Mi.kit);var da=aa(ua),fa=R({},Li);fa[H]=R(R({},fa[H]),Ai.kit),aa(fa);var pa=wr,ma=`fa-layers-text`,ha=Tr;aa(R({},Ci));var ga=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],_a=Dr,va=[].concat(z(ki),z(Wi)),ya=yr.FontAwesomeConfig||{};function ba(e){var t=B.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function xa(e){return e===``?!0:e===`false`?!1:e===`true`||e}B&&typeof B.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=sr(e,2),n=t[0],r=t[1],i=xa(ba(n));i!=null&&(ya[r]=i)});var Sa={styleDefault:`solid`,familyDefault:H,cssPrefix:qi,replacementClass:Ji,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ya.familyPrefix&&(ya.cssPrefix=ya.familyPrefix);var Ca=R(R({},Sa),ya);Ca.autoReplaceSvg||(Ca.observeMutations=!1);var W={};Object.keys(Sa).forEach(function(e){Object.defineProperty(W,e,{enumerable:!0,set:function(t){Ca[e]=t,wa.forEach(function(e){return e(W)})},get:function(){return Ca[e]}})}),Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){Ca.cssPrefix=e,wa.forEach(function(e){return e(W)})},get:function(){return Ca.cssPrefix}}),yr.FontAwesomeConfig=W;var wa=[];function Ta(e){return wa.push(e),function(){wa.splice(wa.indexOf(e),1)}}var Ea=Ki,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Da(e){if(!(!e||!V)){var t=B.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=B.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return B.head.insertBefore(t,r),e}}var Oa=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function ka(){for(var e=12,t=``;e-->0;)t+=Oa[Math.random()*62|0];return t}function Aa(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ja(e){return e.classList?Aa(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Ma(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Na(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Ma(e[n])}" `},``).trim()}function Pa(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Fa(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function Ia(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function La(e){var t=e.transform,n=e.width,r=n===void 0?Ki:n,i=e.height,a=i===void 0?Ki:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&Sr?`translate(${t.x/Ea-r/2}em, ${t.y/Ea-a/2}em) `:s?`translate(calc(-50% + ${t.x/Ea}em), calc(-50% + ${t.y/Ea}em)) `:`translate(${t.x/Ea}em, ${t.y/Ea}em) `,c+=`scale(${t.size/Ea*(t.flipX?-1:1)}, ${t.size/Ea*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Ra=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function za(){var e=qi,t=Ji,n=W.cssPrefix,r=W.replacementClass,i=Ra;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Ba=!1;function Va(){W.autoAddCss&&!Ba&&(Da(za()),Ba=!0)}var Ha={mixout:function(){return{dom:{css:za,insertCss:Va}}},hooks:function(){return{beforeDOMElementCreation:function(){Va()},beforeI2svg:function(){Va()}}}},K=yr||{};K[U]||(K[U]={}),K[U].styles||(K[U].styles={}),K[U].hooks||(K[U].hooks={}),K[U].shims||(K[U].shims=[]);var q=K[U],Ua=[],Wa=function(){B.removeEventListener(`DOMContentLoaded`,Wa),Ga=1,Ua.map(function(e){return e()})},Ga=!1;V&&(Ga=(B.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(B.readyState),Ga||B.addEventListener(`DOMContentLoaded`,Wa));function Ka(e){V&&(Ga?setTimeout(e,0):Ua.push(e))}function qa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Ma(e):`<${t} ${Na(r)}>${a.map(qa).join(``)}</${t}>`}function Ja(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ya=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Xa=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Ya(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Za(e){return z(e).length===1?e.codePointAt(0).toString(16):null}function Qa(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function $a(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Qa(t);typeof q.hooks.addPack==`function`&&!r?q.hooks.addPack(e,Qa(t)):q.styles[e]=R(R({},q.styles[e]||{}),i),e===`fas`&&$a(`fa`,t)}var eo=q.styles,to=q.shims,no=Object.keys(da),ro=no.reduce(function(e,t){return e[t]=Object.keys(da[t]),e},{}),io=null,ao={},oo={},so={},co={},lo={};function uo(e){return~va.indexOf(e)}function fo(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!uo(i)?i:null}var po=function(){var e=function(e){return Xa(eo,function(t,n,r){return t[r]=Xa(n,e,{}),t},{})};ao=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),oo=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),lo=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in eo||W.autoFetchSvg,n=Xa(to,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});so=n.names,co=n.unicodes,io=So(W.styleDefault,{family:W.familyDefault})};Ta(function(e){io=So(e.styleDefault,{family:W.familyDefault})}),po();function mo(e,t){return(ao[e]||{})[t]}function ho(e,t){return(oo[e]||{})[t]}function go(e,t){return(lo[e]||{})[t]}function _o(e){return so[e]||{prefix:null,iconName:null}}function vo(e){var t=co[e],n=mo(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function yo(){return io}var bo=function(){return{prefix:null,iconName:null,rest:[]}};function xo(e){var t=H,n=no.reduce(function(e,t){return e[t]=`${W.cssPrefix}-${t}`,e},{});return Si.forEach(function(r){(e.includes(n[r])||e.some(function(e){return ro[r].includes(e)}))&&(t=r)}),t}function So(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?H:t,r=sa[n][e];if(n===kr&&!e)return`fad`;var i=la[n][e]||la[n][r],a=e in q.styles?e:null;return i||a||null}function Co(e){var t=[],n=null;return e.forEach(function(e){var r=fo(W.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function wo(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var To=Bi.concat(Di);function Eo(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=wo(e.filter(function(e){return To.includes(e)})),a=wo(e.filter(function(e){return!To.includes(e)})),o=sr(i.filter(function(e){return r=e,!Or.includes(e)}),1)[0],s=o===void 0?null:o,c=xo(i),l=R(R({},Co(a)),{},{prefix:So(s,{family:c})});return R(R(R({},l),Ao({values:e,family:c,styles:eo,config:W,canonical:l,givenPrefix:r})),Do(n,r,l))}function Do(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?_o(i):{},o=go(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!eo.far&&eo.fas&&!W.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Oo=Si.filter(function(e){return e!==H||e!==kr}),ko=Object.keys(zi).filter(function(e){return e!==H}).map(function(e){return Object.keys(zi[e])}).flat();function Ao(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===kr,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Oo.includes(n)&&(Object.keys(s).find(function(e){return ko.includes(e)})||l.autoFetchSvg)&&(r.prefix=Ti.get(n).defaultShortPrefixId,r.iconName=go(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=yo()||`fas`),r}var jo=function(){function e(){Qn(this,e),this.definitions={}}return er(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=R(R({},e.definitions[n]||{}),t[n]),$a(n,t[n]);var r=da[H][n];r&&$a(r,t[n]),po()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Mo=[],No={},Po={},Fo=Object.keys(Po);function Io(e,t){var n=t.mixoutsTo;return Mo=e,No={},Object.keys(Po).forEach(function(e){Fo.indexOf(e)===-1&&delete Po[e]}),Mo.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),ur(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){No[e]||(No[e]=[]),No[e].push(r[e])})}e.provides&&e.provides(Po)}),n}function Lo(e,t){var n=[...arguments].slice(2);return(No[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Ro(e){var t=[...arguments].slice(1);(No[e]||[]).forEach(function(e){e.apply(null,t)})}function zo(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Po[e]?Po[e].apply(null,t):void 0}function Bo(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||yo();if(t)return t=go(n,t)||t,Ja(Vo.definitions,n,t)||Ja(q.styles,n,t)}var Vo=new jo,J={noAuto:function(){W.autoReplaceSvg=!1,W.observeMutations=!1,Ro(`noAuto`)},config:W,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(Ro(`beforeI2svg`,e),zo(`pseudoElements2svg`,e),zo(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,Ka(function(){Ho({autoReplaceSvgRoot:t}),Ro(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(ur(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:go(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=So(e[0]);return{prefix:n,iconName:go(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${W.cssPrefix}-`)>-1||e.match(pa))){var r=Eo(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||yo(),iconName:go(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=yo();return{prefix:i,iconName:go(i,e)||e}}}},library:Vo,findIconDefinition:Bo,toHtml:qa},Ho=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?B:e;(Object.keys(q.styles).length>0||W.autoFetchSvg)&&V&&W.autoReplaceSvg&&J.dom.i2svg({node:t})};function Uo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return qa(e)})}}),Object.defineProperty(e,"node",{get:function(){if(V){var t=B.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Wo(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Fa(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Pa(R(R({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Go(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${W.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:R(R({},i),{},{id:o}),children:r}]}]}function Ko(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function qo(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[W.replacementClass,a?`${W.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:R(R({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Ko(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Yi]=``);var _=R(R({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:R({},l.styles)}),v=r.found&&n.found?zo(`generateAbstractMask`,_)||{children:[],attributes:{}}:zo(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Go(_):Wo(_)}function Jo(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=R(R({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Yi]=``);var l=R({},a.styles);Fa(i)&&(l.transform=La({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Pa(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Yo(e){var t=e.content,n=e.extra,r=R(R({},n.attributes),{},{class:n.classes.join(` `)}),i=Pa(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Xo=q.styles;function Zo(e){var t=e[0],n=e[1],r=sr(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${W.cssPrefix}-${_a.GROUP}`},children:[{tag:`path`,attributes:{class:`${W.cssPrefix}-${_a.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${W.cssPrefix}-${_a.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Qo={found:!1,width:512,height:512};function $o(e,t){!ia&&!W.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function es(e,t){var n=t;return t===`fa`&&W.styleDefault!==null&&(t=yo()),new Promise(function(r,i){if(n===`fa`){var a=_o(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Xo[t]&&Xo[t][e]){var o=Xo[t][e];return r(Zo(o))}$o(e,t),r(R(R({},Qo),{},{icon:W.showMissingIcons&&e&&zo(`missingIconAbstract`)||{}}))})}var ts=function(){},ns=W.measurePerformance&&xr&&xr.mark&&xr.measure?xr:{mark:ts,measure:ts},rs=`FA "7.3.1"`,is=function(e){return ns.mark(`${rs} ${e} begins`),function(){return as(e)}},as=function(e){ns.mark(`${rs} ${e} ends`),ns.measure(`${rs} ${e}`,`${rs} ${e} begins`,`${rs} ${e} ends`)},os={begin:is,end:as},ss=function(){};function cs(e){return typeof(e.getAttribute?e.getAttribute(Yi):null)==`string`}function ls(e){var t=e.getAttribute?e.getAttribute(Qi):null,n=e.getAttribute?e.getAttribute($i):null;return t&&n}function us(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(W.replacementClass)}function ds(){return W.autoReplaceSvg===!0?gs.replace:gs[W.autoReplaceSvg]||gs.replace}function fs(e){return B.createElementNS(`http://www.w3.org/2000/svg`,e)}function ps(e){return B.createElement(e)}function ms(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?fs:ps:t;if(typeof e==`string`)return B.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(ms(e,{ceFn:n}))}),r}function hs(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var gs={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(ms(e),t)}),t.getAttribute(Yi)===null&&W.keepOriginalSource){var n=B.createComment(hs(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~ja(t).indexOf(W.replacementClass))return gs.replace(e);var r=RegExp(`${W.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===W.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return qa(e)}).join(`
`);t.setAttribute(Yi,``),t.innerHTML=a}};function _s(e){e()}function vs(e,t){var n=typeof t==`function`?t:ss;if(e.length===0)n();else{var r=_s;W.mutateApproach===ta&&(r=yr.requestAnimationFrame||_s),r(function(){var t=ds(),r=os.begin(`mutate`);e.map(t),r(),n()})}}var ys=!1;function bs(){ys=!0}function xs(){ys=!1}var Ss=null;function Cs(e){if(br&&W.observeMutations){var t=e.treeCallback,n=t===void 0?ss:t,r=e.nodeCallback,i=r===void 0?ss:r,a=e.pseudoElementsCallback,o=a===void 0?ss:a,s=e.observeMutationsRoot,c=s===void 0?B:s;Ss=new br(function(e){if(!ys){var t=yo();Aa(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!cs(e.addedNodes[0])&&(W.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&W.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&cs(e.target)&&~ga.indexOf(e.attributeName)){if(e.attributeName===`class`&&ls(e.target)){var r=Eo(ja(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Qi,a||t),s&&e.target.setAttribute($i,s)}else us(e.target)&&i(e.target)}})}}),V&&Ss.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ws(){Ss&&Ss.disconnect()}function Ts(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Es(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Eo(ja(e));return i.prefix||=yo(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=ho(i.prefix,e.innerText)||mo(i.prefix,Za(e.innerText))),!i.iconName&&W.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Ds(e){return Aa(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Os(){return{iconName:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ks(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Es(e),r=n.iconName,i=n.prefix,a=n.rest,o=Ds(e),s=Lo(`parseNodeAttributes`,{},e);return R({iconName:r,prefix:i,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Ts(e):[],attributes:o}},s)}var As=q.styles;function js(e){var t=W.autoReplaceSvg===`nest`?ks(e,{styleParser:!1}):ks(e);return~t.extra.classes.indexOf(ma)?zo(`generateLayersText`,e,t):zo(`generateSvgReplacementMutation`,e,t)}function Ms(){return[].concat(z(Di),z(Bi))}function Ns(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();var n=B.documentElement.classList,r=function(e){return n.add(`${ea}-${e}`)},i=function(e){return n.remove(`${ea}-${e}`)},a=W.autoFetchSvg?Ms():Or.concat(Object.keys(As));a.includes(`fa`)||a.push(`fa`);var o=[`.${ma}:not([${Yi}])`].concat(a.map(function(e){return`.${e}:not([${Yi}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=Aa(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=os.begin(`onTree`),l=s.reduce(function(e,t){try{var n=js(t);n&&e.push(n)}catch(e){ia||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){vs(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Ps(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;js(e).then(function(e){e&&vs([e],t)})}function Fs(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Bo(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Bo(i||{}),e(r,R(R({},n),{},{mask:i}))}}var Is=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?G:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Uo(R({type:`icon`},e),function(){return Ro(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),qo({icons:{main:Zo(v),mask:s?Zo(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:R(R({},G),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Ls={mixout:function(){return{icon:Fs(Is)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Ns,e.nodeCallback=Ps,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?B:t,r=e.callback;return Ns(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([es(n,r),o.iconName?es(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=sr(o,2),u=l[0],d=l[1];t([e,qo({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Pa(a);o.length>0&&(n.style=o);var s;return Fa(i)&&(s=zo(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Rs={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Uo({type:`layer`},function(){Ro(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${W.cssPrefix}-layers`].concat(z(r)).join(` `)},children:n}]})}}}},zs={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Uo({type:`counter`,content:e},function(){return Ro(`beforeDOMElementCreation`,{content:e,params:t}),Yo({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${W.cssPrefix}-layers-counter`].concat(z(a))}})})}}}},Bs={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?G:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Uo({type:`text`,content:e},function(){return Ro(`beforeDOMElementCreation`,{content:e,params:t}),Jo({content:e,transform:R(R({},G),r),extra:{attributes:s,styles:l,classes:[`${W.cssPrefix}-layers-text`].concat(z(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Sr){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Jo({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Vs=RegExp(`"`,`ug`),Hs=[1105920,1112319],Us=R(R(R(R({},{FontAwesome:{normal:`fas`,400:`fas`}}),wi),Gi),ji),Ws=Object.keys(Us).reduce(function(e,t){return e[t.toLowerCase()]=Us[t],e},{}),Gs=Object.keys(Ws).reduce(function(e,t){var n=Ws[t];return e[t]=n[900]||z(Object.entries(n))[0][1],e},{});function Ks(e){return Za(z(e.replace(Vs,``))[0]||``)}function qs(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Vs,``),r=n.codePointAt(0),i=r>=Hs[0]&&r<=Hs[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Js(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ws[n]||{})[i]||Gs[n]}function Ys(e,t){var n=`${Zi}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Aa(e.children).filter(function(e){return e.getAttribute(Xi)===t})[0],o=yr.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(ha),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Js(s,l),p=Ks(d),m=c[0].startsWith(`FontAwesome`),h=qs(o),g=mo(f,p),_=g;if(m){var v=vo(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Qi)!==f||a.getAttribute($i)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Os(),b=y.extra;b.attributes[Xi]=t,es(g,f).then(function(i){var a=qo(R(R({},y),{},{icons:{main:i,mask:bo()},prefix:f,iconName:_,extra:b,watchable:!0})),o=B.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return qa(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Xs(e){return Promise.all([Ys(e,`::before`),Ys(e,`::after`)])}function Zs(e){return e.parentNode!==document.head&&!~na.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xi)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Qs=function(e){return!!e&&ra.some(function(t){return e.includes(t)})},$s=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=tr(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Qs(a)){var o=ra.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function ec(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(V){var n;if(t)n=e;else if(W.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=tr(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=tr(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=tr($s(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){W.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=Aa(n).filter(Zs).map(Xs),i=os.begin(`searchPseudoElements`);bs(),Promise.all(r).then(function(){i(),xs(),e()}).catch(function(){i(),xs(),t()})})}}var tc={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=ec,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?B:t;W.searchPseudoElements&&ec(n)}}},nc=!1,rc={mixout:function(){return{dom:{unwatch:function(){bs(),nc=!0}}}},hooks:function(){return{bootstrap:function(){Cs(Lo(`mutationObserverCallbacks`,{}))},noAuto:function(){ws()},watch:function(e){var t=e.observeMutationsRoot;nc?xs():Cs(Lo(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},ic=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},ac={mixout:function(){return{parse:{transform:function(e){return ic(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=ic(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:R({},a.outer),children:[{tag:`g`,attributes:R({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:R(R({},t.icon.attributes),a.path)}]}]}}}},oc={x:0,y:0,width:`100%`,height:`100%`};function sc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function cc(e){return e.tag===`g`?e.children:[e]}Io([Ha,Ls,Rs,zs,Bs,tc,rc,ac,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Eo(n.split(` `).map(function(e){return e.trim()})):bo();return r.prefix||=yo(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Ia({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:R(R({},oc),{},{fill:`white`})},p=c.children?{children:c.children.map(sc)}:{},m={tag:`g`,attributes:R({},d.inner),children:[sc(R({tag:c.tag,attributes:R(R({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:R({},d.outer),children:[m]},g=`mask-${a||ka()}`,_=`clip-${a||ka()}`,v={tag:`mask`,attributes:R(R({},oc),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:cc(u)},v]};return t.push(y,{tag:`rect`,attributes:R({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},oc)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;yr.matchMedia&&(t=yr.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:R(R({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=R(R({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:R(R({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:R(R({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:R(R({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:R(R({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:R(R({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:R(R({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:R(R({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:J}),J.noAuto;var lc=J.config,uc=J.library;J.dom;var dc=J.parse;J.findIconDefinition,J.toHtml;var fc=J.icon;J.layer;var pc=J.text;J.counter;function mc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function hc(e){if(Array.isArray(e))return mc(e)}function Y(e,t,n){return(t=Cc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gc(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function _c(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?vc(Object(n),!0).forEach(function(t){Y(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vc(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function yc(e,t){if(e==null)return{};var n,r,i=bc(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function bc(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function xc(e){return hc(e)||gc(e)||Tc(e)||_c()}function Sc(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Cc(e){var t=Sc(e,`string`);return typeof t==`symbol`?t:t+``}function wc(e){"@babel/helpers - typeof";return wc=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},wc(e)}function Tc(e,t){if(e){if(typeof e==`string`)return mc(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?mc(e,t):void 0}}function Ec(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Y({},e,t):{}}function Dc(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-canvas-square`,e.canvasSquare),`fa-canvas-roomy`,e.canvasRoomy),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),Y(Y(Y(Y(Y(t,`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var Oc=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},kc={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(Oc)})(kc);var Ac=kc.exports,jc=[`gradientFill`],Mc=[`class`,`style`],Nc=[`type`,`stops`,`id`];function Pc(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=Ac.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function Fc(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function Ic(e,t){return Me(`stop`,X({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function Lc(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(Lc);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?X(X({},e),{},{attributes:X(X({},e.attributes),{},{fill:void 0}),children:t}):X(X({},e),{},{children:t})}function Rc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=yc(t,jc),o=i||`fill`in n?Lc(e):e,s=(o.children||[]).map(function(e){return Rc(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=Fc(n);break;case`style`:e.style=Pc(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=yc(n,Mc);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var f=i.type,p=i.stops,m=p===void 0?[]:p,h=i.id,g=yc(i,Nc),_=Me(f===`linear`?`linearGradient`:`radialGradient`,X(X({},g),{},{id:h}),m.map(Ic));return Me(o.tag,X(X(X(X({},a),{},{class:c.class,style:X(X({},c.style),u)},c.attrs),d),{},{fill:`url(#${h})`}),[_].concat(xc(s)))}return Me(e.tag,X(X(X({},a),{},{class:c.class,style:X(X({},c.style),u)},c.attrs),d),s)}var zc=!1;try{zc=!0}catch{}function Bc(){if(!zc&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function Vc(e){if(e&&wc(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(dc.icon)return dc.icon(e);if(e===null)return null;if(wc(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var Hc=O({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},canvasSquare:{type:Boolean,default:!1},canvasRoomy:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=w(function(){return Vc(e.icon)}),i=w(function(){return Ec(`classes`,Dc(e))}),a=w(function(){return Ec(`transform`,typeof e.transform==`string`?dc.transform(e.transform):e.transform)}),o=w(function(){return Ec(`mask`,Vc(e.mask))}),s=w(function(){var t=X(X(X(X({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,fc(r.value,t)});c(s,function(e){if(!e)return Bc(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0}),e.gradientFill&&e.symbol&&Bc(`gradientFill is not supported when symbol is true and will be ignored`);var l=w(function(){return s.value?Rc(s.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return l.value}}});O({name:`FontAwesomeLayers`,props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=lc.familyPrefix,i=w(function(){return[`${r}-layers`].concat(xc(e.fixedWidth?[`${r}-fw`]:[]))});return function(){return Me(`div`,{class:i.value},n.default?n.default():[])}}}),O({name:`FontAwesomeLayersText`,props:{value:{type:[String,Number],default:``},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return[`bottom-left`,`bottom-right`,`top-left`,`top-right`].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=lc.familyPrefix,i=w(function(){return Ec(`classes`,[].concat(xc(e.counter?[`${r}-layers-counter`]:[]),xc(e.position?[`${r}-layers-${e.position}`]:[])))}),a=w(function(){return Ec(`transform`,typeof e.transform==`string`?dc.transform(e.transform):e.transform)}),o=w(function(){var t=pc(e.value.toString(),X(X({},a.value),i.value)).abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace(`fa-layers-text`,``)),t[0]}),s=w(function(){return Rc(o.value,{},n)});return function(){return s.value}}});var Uc={prefix:`fas`,iconName:`envelope`,icon:[512,512,[128386,9993,61443],`f0e0`,`M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z`]},Wc={prefix:`fas`,iconName:`calendar-days`,icon:[448,512,[`calendar-alt`],`f073`,`M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z`]},Gc={prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]},Kc={prefix:`fas`,iconName:`eye`,icon:[576,512,[128065],`f06e`,`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`]},qc={prefix:`fas`,iconName:`trash`,icon:[448,512,[],`f1f8`,`M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z`]},Jc={prefix:`fas`,iconName:`pen-to-square`,icon:[512,512,[`edit`],`f044`,`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`]},Yc={prefix:`fas`,iconName:`chevron-right`,icon:[320,512,[9002],`f054`,`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`]},Xc={prefix:`fas`,iconName:`circle-exclamation`,icon:[512,512,[`exclamation-circle`],`f06a`,`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`]},Zc={prefix:`fas`,iconName:`circle-user`,icon:[512,512,[62142,`user-circle`],`f2bd`,`M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z`]},Qc={prefix:`fas`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`]},$c={prefix:`fas`,iconName:`house`,icon:[512,512,[127968,63498,63500,`home`,`home-alt`,`home-lg-alt`],`f015`,`M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z`]},el={prefix:`fas`,iconName:`user`,icon:[448,512,[128100,62144,62470,`user-alt`,`user-large`],`f007`,`M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z`]},tl={prefix:`fas`,iconName:`arrow-right`,icon:[512,512,[8594],`f061`,`M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z`]},nl={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},rl={prefix:`fas`,iconName:`circle-check`,icon:[512,512,[61533,`check-circle`],`f058`,`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},il={prefix:`fas`,iconName:`pen`,icon:[512,512,[128394],`f304`,`M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z`]},al={prefix:`fas`,iconName:`chevron-down`,icon:[448,512,[],`f078`,`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`]},ol={prefix:`fas`,iconName:`chevron-left`,icon:[320,512,[9001],`f053`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`]},sl={prefix:`fas`,iconName:`lock`,icon:[384,512,[128274],`f023`,`M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z`]},cl={prefix:`fas`,iconName:`rotate-left`,icon:[512,512,[`rotate-back`,`rotate-backward`,`undo-alt`],`f2ea`,`M24 192l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-46.7-46.7c75.3-58.6 184.3-53.3 253.5 15.9 75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-10.2-10.2-19-21.3-26.4-33-9.5-14.9-29.3-19.3-44.2-9.8s-19.3 29.3-9.8 44.2C49.7 408.7 61.4 423.5 75 437 175 537 337 537 437 437S537 175 437 75C342.8-19.3 193.3-24.7 92.7 58.8L41 7C34.1 .2 23.8-1.9 14.8 1.8S0 14.3 0 24L0 168c0 13.3 10.7 24 24 24z`]},ll={prefix:`fas`,iconName:`download`,icon:[448,512,[],`f019`,`M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z`]},ul={prefix:`fas`,iconName:`shield-halved`,icon:[512,512,[`shield-alt`],`f3ed`,`M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z`]},dl={prefix:`fas`,iconName:`arrow-left`,icon:[512,512,[8592],`f060`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z`]},fl={prefix:`fas`,iconName:`plus`,icon:[448,512,[10133,61543,`add`],`2b`,`M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`]},pl={prefix:`fas`,iconName:`eye-slash`,icon:[576,512,[],`f070`,`M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z`]};lc.autoAddCss=!1,uc.add($c,Wc,Jc,Qc,al,nl,Uc,sl,Kc,pl,Gc,cl,qc,fl,dl,Zc,el,ul,ll,tl,ol,Yc,rl,Xc);function ml(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function hl(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&ml(e.default)}var Z=Object.assign;function gl(e,t){let n={};for(let r in t){let i=t[r];n[r]=Q(i)?i.map(e):e(i)}return n}var _l=()=>{},Q=Array.isArray;function vl(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var yl=Symbol(``);function bl(e,t){return Z(Error(),{type:e,[yl]:!0},t)}function $(e,t){return e instanceof Error&&yl in e&&(t==null||!!(e.type&t))}var xl=Symbol(``),Sl=Symbol(``),Cl=Symbol(``),wl=Symbol(``),Tl=Symbol(``);function El(){return je(Cl)}function Dl(e){return je(wl)}var Ol=typeof document<`u`,kl=/#/g,Al=/&/g,jl=/\//g,Ml=/=/g,Nl=/\?/g,Pl=/\+/g,Fl=/%5B/g,Il=/%5D/g,Ll=/%5E/g,Rl=/%60/g,zl=/%7B/g,Bl=/%7C/g,Vl=/%7D/g,Hl=/%20/g;function Ul(e){return e==null?``:encodeURI(``+e).replace(Bl,`|`).replace(Fl,`[`).replace(Il,`]`)}function Wl(e){return Ul(e).replace(zl,`{`).replace(Vl,`}`).replace(Ll,`^`)}function Gl(e){return Ul(e).replace(Pl,`%2B`).replace(Hl,`+`).replace(kl,`%23`).replace(Al,`%26`).replace(Rl,"`").replace(zl,`{`).replace(Vl,`}`).replace(Ll,`^`)}function Kl(e){return Gl(e).replace(Ml,`%3D`)}function ql(e){return Ul(e).replace(kl,`%23`).replace(Nl,`%3F`)}function Jl(e){return ql(e).replace(jl,`%2F`)}function Yl(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var Xl=/\/$/,Zl=e=>e.replace(Xl,``);function Ql(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=ou(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:Yl(o)}}function $l(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function eu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function tu(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&nu(t.matched[r],n.matched[i])&&ru(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function nu(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ru(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!iu(e[n],t[n]))return!1;return!0}function iu(e,t){return Q(e)?au(e,t):Q(t)?au(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function au(e,t){return Q(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function ou(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var su={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function cu(e){if(!e){if(Ol){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Zl(e)}var lu=/^[^#]+#/;function uu(e,t){return e.replace(lu,`#`)+t}function du(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var fu=()=>({left:window.scrollX,top:window.scrollY});function pu(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=du(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function mu(e,t){return(history.state?history.state.position-t:-1)+e}var hu=new Map;function gu(e,t){hu.set(e,t)}function _u(e){let t=hu.get(e);return hu.delete(e),t}function vu(e){return typeof e==`string`||e&&typeof e==`object`}function yu(e){return typeof e==`string`||typeof e==`symbol`}function bu(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Pl,` `),i=r.indexOf(`=`),a=Yl(i<0?r:r.slice(0,i)),o=i<0?null:Yl(r.slice(i+1));if(a in t){let e=t[a];Q(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function xu(e){let t=``;for(let n in e){let r=e[n];if(n=Kl(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Q(r)?r.map(e=>e&&Gl(e)):[r&&Gl(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Su(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Q(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function Cu(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function wu(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(bl(4,{from:n,to:t})):e instanceof Error?c(e):vu(e)?c(bl(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Tu(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e])){if(ml(s)){let c=(s.__vccOpts||s)[t];c&&a.push(wu(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=hl(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&wu(c,n,r,o,e,i)()}))}}}return a}function Eu(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>nu(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>nu(e,s))||i.push(s))}return[n,r,i]}var Du=()=>location.protocol+`//`+location.host;function Ou(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),eu(n,``)}return eu(n,e)+r+i}function ku(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Ou(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(Z({},e.state,{scroll:fu()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Au(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?fu():null}}function ju(e){let{history:t,location:n}=window,r={value:Ou(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Du()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,Z({},t.state,Au(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=Z({},i.value,t.state,{forward:e,scroll:fu()});a(o.current,o,!0),a(e,Z({},Au(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Mu(e){e=cu(e);let t=ju(e),n=ku(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=Z({location:``,base:e,go:r,createHref:uu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var Nu={type:0,value:``},Pu=/[a-zA-Z0-9_]/;function Fu(e){if(!e)return[[]];if(e===`/`)return[[Nu]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:Pu.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Iu=`[^/]+?`,Lu={sensitive:!1,strict:!1,start:!0,end:!0},Ru=/[.+*?^${}()[\]/\\]/g;function zu(e,t){let n=Z({},Lu,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(Ru,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Iu;if(u!==Iu){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Q(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Q(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Bu(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Vu(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Bu(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Hu(r))return 1;if(Hu(i))return-1}return i.length-r.length}function Hu(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Uu={strict:!1,end:!0,sensitive:!1};function Wu(e,t,n){let r=Z(zu(Fu(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Gu(e,t){let n=[],r=new Map;t=vl(Uu,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=qu(e);s.aliasOf=r&&r.record;let l=vl(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(qu(Z({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Wu(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Yu(d)&&o(e.name)),$u(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:_l}function o(e){if(yu(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Zu(e,n);n.splice(t,0,e),e.record.name&&!Yu(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw bl(1,{location:e});s=i.record.name,a=Z(Ku(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Ku(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw bl(1,{location:e,currentLocation:t});s=i.record.name,a=Z({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Xu(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Ku(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function qu(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ju(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ju(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Yu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Xu(e){return e.reduce((e,t)=>Z(e,t.meta),{})}function Zu(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Vu(e,t[i])<0?r=i:n=i+1}let i=Qu(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Qu(e){let t=e;for(;t=t.parent;)if($u(t)&&Vu(e,t)===0)return t}function $u({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ed(e){let t=je(Cl),n=je(wl),r=w(()=>{let n=x(e.to);return t.resolve(n)}),i=w(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(nu.bind(null,i));if(o>-1)return o;let s=ad(e[t-2]);return t>1&&ad(i)===s&&a[a.length-1].path!==s?a.findIndex(nu.bind(null,e[t-2])):o}),a=w(()=>i.value>-1&&id(n.params,r.value.params)),o=w(()=>i.value>-1&&i.value===n.matched.length-1&&ru(n.params,r.value.params));function s(n={}){if(rd(n)){let n=t[x(e.replace)?`replace`:`push`](x(e.to)).catch(_l);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:w(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function td(e){return e.length===1?e[0]:e}var nd=O({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:ed,setup(e,{slots:t}){let n=o(ed(e)),{options:r}=je(Cl),i=w(()=>({[od(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[od(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&td(t.default(n));return e.custom?r:Me(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function rd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function id(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Q(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function ad(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var od=(e,t,n)=>e??t??n,sd=O({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=je(Tl),i=w(()=>e.route||r.value),a=je(Sl,0),o=w(()=>{let e=x(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=w(()=>i.value.matched[o.value]);m(Sl,w(()=>o.value+1)),m(xl,s),m(Tl,i);let l=u();return c(()=>[l.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!nu(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,c=o&&o.components[a];if(!c)return cd(n.default,{Component:c,route:r});let u=o.props[a],d=u?u===!0?r.params:typeof u==`function`?u(r):u:null,f=Me(c,Z({},d,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:l}));return cd(n.default,{Component:f,route:r})||f}}});function cd(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var ld=sd;function ud(e){let t=Gu(e.routes,e),r=e.parseQuery||bu,i=e.stringifyQuery||xu,a=e.history,o=Cu(),s=Cu(),c=Cu(),u=l(su),d=su;Ol&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let f=gl.bind(null,e=>``+e),p=gl.bind(null,Jl),m=gl.bind(null,Yl);function h(e,n){let r,i;return yu(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function g(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function _(){return t.getRoutes().map(e=>e.record)}function v(e){return!!t.getRecordMatcher(e)}function y(e,n){if(n=Z({},n||u.value),typeof e==`string`){let i=Ql(r,e,n.path),o=t.resolve({path:i.path},n),s=a.createHref(i.fullPath);return Z(i,o,{params:m(o.params),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=Z({},e,{path:Ql(r,e.path,n.path).path});else{let t=Z({},e.params);for(let e in t)t[e]??delete t[e];o=Z({},e,{params:p(t)}),n.params=p(n.params)}let s=t.resolve(o,n),c=e.hash||``;s.params=f(m(s.params));let l=$l(i,Z({},e,{hash:Wl(c),path:s.path})),d=a.createHref(l);return Z({fullPath:l,hash:c,query:i===xu?Su(e.query):e.query||{}},s,{redirectedFrom:void 0,href:d})}function b(e){return typeof e==`string`?Ql(r,e,u.value.path):Z({},e)}function ee(e,t){if(d!==e)return bl(8,{from:t,to:e})}function te(e){return C(e)}function ne(e){return te(Z(b(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=b(i):{path:i},i.params={}),Z({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=d=y(e),r=u.value,a=e.state,o=e.force,s=e.replace===!0,c=S(n,r);if(c)return C(Z(b(c),{state:typeof c==`object`?Z({},a,c.state):a,force:o,replace:s}),t||n);let l=n;l.redirectedFrom=t;let f;return!o&&tu(i,r,n)&&(f=bl(16,{to:l,from:r}),le(r,r,!0,!1)),(f?Promise.resolve(f):re(l,r)).catch(e=>$(e)?$(e,2)?e:A(e):se(e,l,r)).then(e=>{if(e){if($(e,2))return C(Z({replace:s},b(e.to),{state:typeof e.to==`object`?Z({},a,e.to.state):a,force:o}),t||l)}else e=ie(l,r,!0,s,a);return E(l,r,e),e})}function w(e,t){let n=ee(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=de.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function re(e,t){let n,[r,i,a]=Eu(e,t);n=Tu(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(wu(r,e,t))});let c=w.bind(null,e,t);return n.push(c),M(n).then(()=>{n=[];for(let r of o.list())n.push(wu(r,e,t));return n.push(c),M(n)}).then(()=>{n=Tu(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(wu(r,e,t))});return n.push(c),M(n)}).then(()=>{n=[];for(let r of a)if(r.beforeEnter){if(Q(r.beforeEnter))for(let i of r.beforeEnter)n.push(wu(i,e,t));else n.push(wu(r.beforeEnter,e,t))}return n.push(c),M(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Tu(a,`beforeRouteEnter`,e,t,T),n.push(c),M(n))).then(()=>{n=[];for(let r of s.list())n.push(wu(r,e,t));return n.push(c),M(n)}).catch(e=>$(e,8)?e:Promise.reject(e))}function E(e,t,n){c.list().forEach(r=>T(()=>r(e,t,n)))}function ie(e,t,n,r,i){let o=ee(e,t);if(o)return o;let s=t===su,c=Ol?history.state:{};n&&(r||s?a.replace(e.fullPath,Z({scroll:s&&c&&c.scroll},i)):a.push(e.fullPath,i)),u.value=e,le(e,t,n,s),A()}let D;function ae(){D||=a.listen((e,t,n)=>{if(!fe.listening)return;let r=y(e),i=S(r,fe.currentRoute.value);if(i){C(Z(i,{replace:!0,force:!0}),r).catch(_l);return}d=r;let o=u.value;Ol&&gu(mu(o.fullPath,n.delta),fu()),re(r,o).catch(e=>$(e,12)?e:$(e,2)?(C(Z(b(e.to),{force:!0}),r).then(e=>{$(e,20)&&!n.delta&&n.type===`pop`&&a.go(-1,!1)}).catch(_l),Promise.reject()):(n.delta&&a.go(-n.delta,!1),se(e,r,o))).then(e=>{e||=ie(r,o,!1),e&&(n.delta&&!$(e,8)?a.go(-n.delta,!1):n.type===`pop`&&$(e,20)&&a.go(-1,!1)),E(r,o,e)}).catch(_l)})}let O=Cu(),oe=Cu(),k;function se(e,t,n){A(e);let r=oe.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function ce(){return k&&u.value!==su?Promise.resolve():new Promise((e,t)=>{O.add([e,t])})}function A(e){return k||(k=!e,ae(),O.list().forEach(([t,n])=>e?n(e):t()),O.reset()),e}function le(t,r,i,a){let{scrollBehavior:o}=e;if(!Ol||!o)return Promise.resolve();let s=!i&&_u(mu(t.fullPath,0))||(a||!i)&&history.state&&history.state.scroll||null;return n().then(()=>o(t,r,s)).then(e=>t===u.value&&e&&pu(e)).catch(e=>t===u.value&&se(e,t,r))}let ue=e=>a.go(e),j,de=new Set,fe={currentRoute:u,listening:!0,addRoute:h,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:v,getRoutes:_,resolve:y,options:e,push:te,replace:ne,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:o.add,beforeResolve:s.add,afterEach:c.add,onError:oe.add,isReady:ce,install(e){e.component(`RouterLink`,nd),e.component(`RouterView`,ld),e.config.globalProperties.$router=fe,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>x(u)}),Ol&&!j&&u.value===su&&(j=!0,te(a.location).catch(e=>{}));let t={};for(let e in su)Object.defineProperty(t,e,{get:()=>u.value[e],enumerable:!0});e.provide(Cl,fe),e.provide(wl,ye(t)),e.provide(Tl,u);let n=e.unmount;de.add(e),e.unmount=function(){de.delete(e),de.size<1&&(d=su,D&&D(),D=null,u.value=su,j=!1,k=!1),n()}}};function M(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return fe}function dd(e,t){return pe(`/auth/login`,{method:`POST`,body:JSON.stringify({email:e,password:t})})}function fd(){return pe(`/me`)}function pd(){return pe(`/auth/logout`,{method:`POST`})}function md(e,t){return pe(`/me/password`,{method:`PATCH`,body:JSON.stringify({currentPassword:e,newPassword:t})})}var hd=4e3,gd=Jn(`toast`,()=>{let e=u([]),t=1;function n(t){e.value=e.value.filter(e=>e.id!==t)}function r(r,i,a=hd){let o=t++;e.value.push({id:o,type:r,message:i}),setTimeout(()=>n(o),a)}function i(e){r(`success`,e)}function a(e){r(`error`,e)}return{toasts:e,success:i,error:a,dismiss:n}}),_d=Jn(`auth`,()=>{let e=u(null),t=u(`loading`),n=gd();function r(){e.value=null,t.value=`unauthenticated`}function i(n){e.value=n.user,t.value=`authenticated`}async function a(e,t){try{i(await dd(e,t)),n.success(`Login successful`)}catch(e){throw n.error(e instanceof we?e.message:`Unable to log in. Something went wrong.`),e}}async function o(){try{let{user:n}=await fd();return e.value=n,t.value=`authenticated`,!0}catch{return r(),!1}}async function s(){try{await pd(),n.success(`Logout successful`)}catch(e){n.error(e instanceof we?e.message:`Unable to log out. Something went wrong.`)}finally{r()}}async function c(e,t){await md(e,t),r()}let l=null;function d(){return l||=o().then(()=>void 0),l}be(r);function f(t){e.value=t}return{user:e,authStatus:t,login:a,logout:s,changePassword:c,checkSession:o,ensureInitialized:d,setUser:f}}),vd={class:`fixed right-4 top-4 z-[100] flex w-full max-w-sm flex-col gap-2`},yd={class:`flex-1 text-text-heading`},bd=[`onClick`],xd=((e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n})(O({__name:`AppToastContainer`,setup(e){let t=gd();return(e,n)=>{let i=le(`FontAwesomeIcon`);return r(),Ee(he,{to:`body`},[j(`div`,vd,[k(zt,{name:`toast`},{default:d(()=>[(r(!0),D(ne,null,ue(x(t).toasts,e=>(r(),D(`div`,{key:e.id,class:oe([`flex items-start gap-3 rounded-lg border bg-surface-card p-4 text-sm shadow-lg`,e.type===`success`?`border-trend-up/30`:`border-brand-red/30`])},[k(i,{icon:e.type===`success`?x(rl):x(Xc),class:oe([`mt-0.5 h-4 w-4 shrink-0`,e.type===`success`?`text-trend-up`:`text-brand-red`])},null,8,[`icon`,`class`]),j(`p`,yd,ke(e.message),1),j(`button`,{type:`button`,"aria-label":`Dismiss`,class:`shrink-0 text-text-muted hover:text-text-heading`,onClick:n=>x(t).dismiss(e.id)},[k(i,{icon:x(nl),class:`h-3.5 w-3.5`},null,8,[`icon`])],8,bd)],2))),128))]),_:1})])])}}}),[[`__scopeId`,`data-v-e26acbca`]]),Sd={key:0,class:`flex h-screen items-center justify-center bg-surface-page`},Cd=O({__name:`App`,setup(e){let t=_d(),n=Dl(),i=El();return c(()=>t.authStatus,e=>{e===`unauthenticated`&&!n.meta.public&&i.replace(`/login`)}),(e,n)=>{let i=le(`RouterView`);return r(),D(ne,null,[x(t).authStatus===`loading`?(r(),D(`div`,Sd,[...n[0]||=[j(`p`,{class:`text-sm text-text-muted`},`Loading…`,-1)]])):(r(),Ee(i,{key:1})),k(xd)],64)}}});function wd(e,t){function n(n){let r=e.value;!r||r.contains(n.target)||t()}g(()=>document.addEventListener(`click`,n,!0)),Ae(()=>document.removeEventListener(`click`,n,!0))}var Td=`/assets/skai_white_text_logo-DpnrWyAf.webp`,Ed={class:`flex h-full w-52 shrink-0 flex-col bg-brand-navy`},Dd={class:`px-6 py-7`},Od=[`src`],kd={class:`flex-1 space-y-1 px-3`},Ad={key:0,class:`absolute bottom-16 left-4 right-4 overflow-hidden rounded-lg bg-white shadow-lg`},jd={class:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white`},Md={class:`min-w-0 flex-1`},Nd={class:`block truncate text-sm font-semibold text-white`},Pd=O({__name:`AppSidebar`,setup(e){let t=[{to:`/dashboard`,label:`Dashboard`,icon:$c},{to:`/reservations`,label:`Reservations`,icon:Wc},{to:`/settings`,label:`System Setting`,icon:Qc}],n=Dl(),i=El(),a=_d(),o=u(!1),s=u(null);wd(s,()=>o.value=!1);function c(e){return n.path===e||n.path.startsWith(`${e}/`)}let l=w(()=>{let e=a.user?.fullName?.trim();if(!e)return(a.user?.email??`?`).slice(0,2).toUpperCase();let t=e.split(/\s+/);return((t[0]?.[0]??``)+(t[1]?.[0]??t[0]?.[1]??``)).toUpperCase()});async function f(){o.value=!1,await a.logout(),i.replace(`/login`)}return(e,n)=>{let i=le(`FontAwesomeIcon`),u=le(`RouterLink`);return r(),D(`aside`,Ed,[j(`div`,Dd,[j(`img`,{src:x(Td),alt:`SKAI`,class:`h-8 w-auto`},null,8,Od)]),j(`nav`,kd,[(r(),D(ne,null,ue(t,e=>k(u,{key:e.to,to:e.to,class:oe([`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors`,c(e.to)?`bg-brand-red text-white`:`text-white/60 hover:bg-white/5 hover:text-white`])},{default:d(()=>[k(i,{icon:e.icon,class:`h-4 w-4 shrink-0`,"fixed-width":``},null,8,[`icon`]),fe(` `+ke(e.label),1)]),_:2},1032,[`to`,`class`])),64))]),j(`div`,{ref_key:`profileRoot`,ref:s,class:`relative border-t border-white/10 px-4 py-4`},[o.value?(r(),D(`div`,Ad,[j(`button`,{type:`button`,class:`w-full px-4 py-2.5 text-left text-sm text-text-body hover:bg-surface-page`,onClick:f},` Log out `)])):re(``,!0),j(`button`,{type:`button`,class:`flex w-full items-center gap-3 rounded-lg px-1 py-1 text-left hover:bg-white/5`,onClick:n[0]||=e=>o.value=!o.value},[j(`span`,jd,ke(l.value),1),j(`span`,Md,[j(`span`,Nd,ke(x(a).user?.fullName??x(a).user?.email??`Unknown user`),1)]),k(i,{icon:x(al),class:`h-3.5 w-3.5 shrink-0 text-white/50`},null,8,[`icon`])])],512)])}}}),Fd={class:`flex h-screen overflow-hidden bg-surface-page`},Id={class:`flex min-w-0 flex-1 flex-col overflow-hidden`},Ld=O({__name:`AppLayout`,setup(e){return(e,t)=>{let n=le(`RouterView`);return r(),D(`div`,Fd,[k(Pd),j(`div`,Id,[k(n)])])}}}),Rd=`modulepreload`,zd=function(e){return`/`+e},Bd={},Vd=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=zd(t,n),t=s(t),t in Bd)return;Bd[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Rd,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Hd=ud({history:Mu(),routes:[{path:`/login`,name:`login`,meta:{public:!0},component:()=>Vd(()=>import(`./LoginView-pn_Jnxha.js`),__vite__mapDeps([0,1]))},{path:`/`,component:Ld,redirect:`/dashboard`,children:[{path:`dashboard`,name:`dashboard`,component:()=>Vd(()=>import(`./DashboardView-VgxV_QBz.js`),__vite__mapDeps([2,1,3,4,5,6]))},{path:`reservations`,name:`reservations`,component:()=>Vd(()=>import(`./ReservationListView-ynALZ3xq.js`),__vite__mapDeps([7,1,3,4,5,6,8,9,10,11,12]))},{path:`reservations/new`,name:`reservations-new`,component:()=>Vd(()=>import(`./ReservationCreateView-CA4ciQ7z.js`),__vite__mapDeps([13,1,5,14,6,8,9,10]))},{path:`reservations/:id`,name:`reservations-detail`,component:()=>Vd(()=>import(`./ReservationDetailView-ClngK0_O.js`),__vite__mapDeps([15,1,5,6,10,11,12]))},{path:`reservations/:id/edit`,name:`reservations-edit`,component:()=>Vd(()=>import(`./ReservationEditView-CjiyB0Z1.js`),__vite__mapDeps([16,1,5,14,6,8,9,10]))},{path:`settings`,name:`settings`,component:()=>Vd(()=>import(`./SettingsView-CORVBt3E.js`),__vite__mapDeps([17,1,3,5,8,11]))}]}]});Hd.beforeEach(async e=>{let t=_d();if(await t.ensureInitialized(),t.authStatus!==`authenticated`&&!e.meta.public)return{path:`/login`,replace:!0};if(t.authStatus===`authenticated`&&e.meta.public)return{path:`/dashboard`,replace:!0}});var Ud=mn(Cd),Wd=Pn();Ud.use(Wd),Ud.use(Hd),Ud.component(`FontAwesomeIcon`,Hc),_d().ensureInitialized(),Ud.mount(`#app`);export{un as A,qc as C,an as D,Jn as E,en as O,ul as S,nl as T,sl as _,Dl as a,Jc as b,tl as c,Yc as d,Zc as f,pl as g,Kc as h,gd as i,Xt as k,Wc as l,Uc as m,wd as n,El as o,ll as p,_d as r,dl as s,Td as t,ol as u,Gc as v,el as w,fl as x,il as y};