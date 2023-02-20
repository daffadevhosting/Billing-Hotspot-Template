/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{c as i,B as e}from"./p-48f74811.js";import{c as n,r as a}from"./p-18d5f1a9.js";const o="ionViewWillEnter",s="ionViewDidEnter",t="ionViewWillLeave",r="ionViewDidLeave",c="ionViewWillUnload",l=e=>new Promise(((n,a)=>{i((()=>{w(e),d(e).then((i=>{i.animation&&i.animation.destroy(),p(e),n(i)}),(i=>{p(e),a(i)}))}))})),w=i=>{const e=i.enteringEl,n=i.leavingEl;L(e,n,i.direction),i.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),E(e,!1),e.style.setProperty("pointer-events","none"),n&&(E(n,!1),n.style.setProperty("pointer-events","none"))},d=async i=>{const n=await v(i);return n&&e.isBrowser?m(n,i):u(i)},p=i=>{const e=i.enteringEl,n=i.leavingEl;e.classList.remove("ion-page-invisible"),e.style.removeProperty("pointer-events"),void 0!==n&&(n.classList.remove("ion-page-invisible"),n.style.removeProperty("pointer-events"))},v=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await __sc_import_ionic("./p-e58b6c86.js")).iosTransitionAnimation:(await __sc_import_ionic("./p-d8ec0cd9.js")).mdTransitionAnimation},m=async(i,e)=>{await b(e,!0);const n=i(e.baseEl,e);V(e.enteringEl,e.leavingEl);const a=await g(n,e);return e.progressCallback&&e.progressCallback(void 0),a&&y(e.enteringEl,e.leavingEl),{hasCompleted:a,animation:n}},u=async i=>{const e=i.enteringEl,n=i.leavingEl;return await b(i,!1),V(e,n),y(e,n),{hasCompleted:!0}},b=async(i,e)=>{const n=(void 0!==i.deepWait?i.deepWait:e)?[h(i.enteringEl),h(i.leavingEl)]:[P(i.enteringEl),P(i.leavingEl)];await Promise.all(n),await f(i.viewIsReady,i.enteringEl)},f=async(i,e)=>{i&&await i(e)},g=(i,e)=>{const n=e.progressCallback,a=new Promise((e=>{i.onFinish((i=>e(1===i)))}));return n?(i.progressStart(!0),n(i)):i.play(),a},V=(i,e)=>{_(e,"ionViewWillLeave"),_(i,"ionViewWillEnter")},y=(i,e)=>{_(i,"ionViewDidEnter"),_(e,"ionViewDidLeave")},_=(i,e)=>{if(i){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});i.dispatchEvent(n)}},P=i=>i?new Promise((e=>n(i,e))):Promise.resolve(),h=async i=>{const e=i;if(e){if(null!=e.componentOnReady){if(null!=await e.componentOnReady())return}else if(null!=e.__registerHost){const i=new Promise((i=>a(i)));return void await i}await Promise.all(Array.from(e.children).map(h))}},E=(i,e)=>{e?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},L=(i,e,n)=>{void 0!==i&&(i.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")},W=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{o as L,s as a,t as b,r as c,c as d,h as e,W as g,_ as l,E as s,l as t}