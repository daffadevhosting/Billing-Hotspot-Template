var __spreadArray=this&&this.__spreadArray||function(e,r,a){if(a||arguments.length===2)for(var i=0,t=r.length,n;i<t;i++){if(n||!(i in r)){if(!n)n=Array.prototype.slice.call(r,0,i);n[i]=r[i]}}return e.concat(n||Array.prototype.slice.call(r))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register([],(function(e){"use strict";return{execute:function(){var r=e("t",(function(e,r){if(r===void 0){r=0}return new Promise((function(i){a(e,r,i)}))}));var a=function(e,r,a){if(r===void 0){r=0}var i;var t;var n={passive:true};var o=500;var u=function(){if(i){i()}};var l=function(r){if(r===undefined||e===r.target){u();a(r)}};if(e){e.addEventListener("webkitTransitionEnd",l,n);e.addEventListener("transitionend",l,n);t=setTimeout(l,r+o);i=function(){if(t){clearTimeout(t);t=undefined}e.removeEventListener("webkitTransitionEnd",l,n);e.removeEventListener("transitionend",l,n)}}return u};var i=e("c",(function(e,r){if(e.componentOnReady){e.componentOnReady().then((function(e){return r(e)}))}else{d((function(){return r(e)}))}}));var t=e("j",(function(e,r){if(r===void 0){r=[]}var a={};r.forEach((function(r){if(e.hasAttribute(r)){var i=e.getAttribute(r);if(i!==null){a[r]=e.getAttribute(r)}e.removeAttribute(r)}}));return a}));var n=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"];var o=e("i",(function(e){return t(e,n)}));var u=e("a",(function(e,r,a,i){var t;if(typeof window!=="undefined"){var n=window;var o=(t=n===null||n===void 0?void 0:n.Ionic)===null||t===void 0?void 0:t.config;if(o){var u=o.get("_ael");if(u){return u(e,r,a,i)}else if(o._ael){return o._ael(e,r,a,i)}}}return e.addEventListener(r,a,i)}));var l=e("b",(function(e,r,a,i){var t;if(typeof window!=="undefined"){var n=window;var o=(t=n===null||n===void 0?void 0:n.Ionic)===null||t===void 0?void 0:t.config;if(o){var u=o.get("_rel");if(u){return u(e,r,a,i)}else if(o._rel){return o._rel(e,r,a,i)}}}return e.removeEventListener(r,a,i)}));var c=e("g",(function(e,r){if(r===void 0){r=e}return e.shadowRoot||r}));var d=e("r",(function(e){if(typeof __zone_symbol__requestAnimationFrame==="function"){return __zone_symbol__requestAnimationFrame(e)}if(typeof requestAnimationFrame==="function"){return requestAnimationFrame(e)}return setTimeout(e)}));var f=e("m",(function(e){return!!e.shadowRoot&&!!e.attachShadow}));var s=e("k",(function(e){var r=e.closest("ion-item");if(r){return r.querySelector("ion-label")}return null}));var v=e("f",(function(e){e.focus();if(e.classList.contains("ion-focusable")){var r=e.closest("ion-app");if(r){r.setFocus([e])}}}));var m=e("d",(function(e,r){var a;var i=e.getAttribute("aria-labelledby");var t=e.id;var n=i!==null&&i.trim()!==""?i:r+"-lbl";var o=i!==null&&i.trim()!==""?document.getElementById(i):s(e);if(o){if(i===null){o.id=n}a=o.textContent;o.setAttribute("aria-hidden","true")}else if(t.trim()!==""){o=document.querySelector('label[for="'.concat(t,'"]'));if(o){if(o.id!==""){n=o.id}else{o.id=n="".concat(t,"-lbl")}a=o.textContent}}return{label:o,labelId:n,labelText:a}}));var p=e("e",(function(e,r,a,i,t){if(e||f(r)){var n=r.querySelector("input.aux-input");if(!n){n=r.ownerDocument.createElement("input");n.type="hidden";n.classList.add("aux-input");r.appendChild(n)}n.disabled=t;n.name=a;n.value=i||""}}));var b=e("l",(function(e,r,a){return Math.max(e,Math.min(r,a))}));var y=e("n",(function(e,r){if(!e){var a="ASSERT: "+r;console.error(a);debugger;throw new Error(a)}}));var h=e("u",(function(e){return e.timeStamp||Date.now()}));var w=e("p",(function(e){if(e){var r=e.changedTouches;if(r&&r.length>0){var a=r[0];return{x:a.clientX,y:a.clientY}}if(e.pageX!==undefined){return{x:e.pageX,y:e.pageY}}}return{x:0,y:0}}));var g=e("o",(function(e){var r=document.dir==="rtl";switch(e){case"start":return r;case"end":return!r;default:throw new Error('"'.concat(e,'" is not a valid value for [side]. Use "start" or "end" instead.'))}}));var _=e("h",(function(e,r){var a=e._original||e;return{_original:e,emit:x(a.emit.bind(a),r)}}));var x=e("q",(function(e,r){if(r===void 0){r=0}var a;return function(){var i=[];for(var t=0;t<arguments.length;t++){i[t]=arguments[t]}clearTimeout(a);a=setTimeout.apply(void 0,__spreadArray([e,r],i,false))}}));var A=e("s",(function(e,r){e!==null&&e!==void 0?e:e={};r!==null&&r!==void 0?r:r={};if(e===r){return true}var a=Object.keys(e);if(a.length!==Object.keys(r).length){return false}for(var i=0,t=a;i<t.length;i++){var n=t[i];if(!(n in r)){return false}if(e[n]!==r[n]){return false}}return true}))}}}));