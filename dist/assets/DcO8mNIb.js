const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BdN_kox2.js","assets/wB0HuUqV.js","assets/XeFlp-UZ.js","assets/bZz6lgnd.js","assets/eaoPRN6-.js","assets/CQ4s7Y0n.js","assets/SNN8RM_9.js","assets/DrV1KECM.js"])))=>i.map(i=>d[i]);
import{j as e,X as t,M as s,I as n,A as r,a as i,P as a,m as o,W as l}from"./wB0HuUqV.js";import{a as c,r as d,u as m,b as u,L as h,O as x,R as p,c as f,B as g}from"./XeFlp-UZ.js";var b;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var j=c;b=j.createRoot,j.hydrateRoot;const v=()=>{const[n,r]=d.useState(!1),[i,a]=d.useState(!1),[o,l]=d.useState(0),[c,h]=d.useState(!1),x=m(),p=u(),f="/"===x.pathname;d.useEffect((()=>{let e;const t=()=>{const t=window.scrollY;t>o+50&&t>100?h(!0):(t<o-10||t<50)&&h(!1),a(t>20),l(t),n&&r(!1),clearTimeout(e),e=setTimeout((()=>{h(!1)}),150)};return window.addEventListener("scroll",t,{passive:!0}),()=>{window.removeEventListener("scroll",t),clearTimeout(e)}}),[o,n]);const g=e=>{if(r(!1),"/"!==x.pathname)p("/",{state:{scrollTo:e}});else{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}},b=()=>{r(!1),p("/kontakt"),window.scrollTo(0,0)};return e.jsxs("nav",{className:`\n        fixed w-full z-50 transition-transform duration-300 ease-out\n        ${f?i?"bg-white/60 backdrop-blur-md shadow-lg":"bg-transparent":"bg-white/60 backdrop-blur-md shadow-lg"}\n        ${c?"-translate-y-full":"translate-y-0"}\n      `,children:[e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsxs("div",{className:"flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("button",{onClick:()=>{r(!1),"/"!==x.pathname&&p("/"),window.scrollTo({top:0,behavior:"smooth"})},className:"flex items-center focus:outline-none transition-transform duration-300 hover:scale-105","aria-label":"FR innovative Haustechnik - Zur Startseite",children:e.jsx("img",{src:"https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734643159/transparent_Logo_Ohne_Schrift_qhvolc.png",alt:"FR innovative Haustechnik Logo",className:"h-8 w-auto object-contain"})})}),e.jsxs("div",{className:"hidden md:flex items-center space-x-6 pt-2",children:[e.jsx("button",{onClick:()=>g("services"),className:"px-3 py-2 rounded-md text-sm font-medium transition-colors "+(f&&!i?"text-white hover:text-blue-200":"text-gray-700 hover:text-blue-600"),children:"Leistungen"}),e.jsx("button",{onClick:()=>g("about"),className:"px-3 py-2 rounded-md text-sm font-medium transition-colors "+(f&&!i?"text-white hover:text-blue-200":"text-gray-700 hover:text-blue-600"),children:"Über uns"}),e.jsx("button",{onClick:()=>g("references"),className:"px-3 py-2 rounded-md text-sm font-medium transition-colors "+(f&&!i?"text-white hover:text-blue-200":"text-gray-700 hover:text-blue-600"),children:"Referenzen"}),e.jsx("button",{onClick:b,className:"px-3 py-2 rounded-md text-sm font-medium transition-colors "+(f&&!i?"text-white hover:text-blue-200":"text-gray-700 hover:text-blue-600"),children:"Kontakt"})]}),e.jsx("div",{className:"md:hidden pt-2",children:e.jsx("button",{onClick:()=>r(!n),className:`\n                p-2 rounded-md\n                ${f&&!i?"text-white hover:text-blue-200":"text-gray-700 hover:text-blue-600"}\n              `,"aria-label":n?"Menü schließen":"Menü öffnen",children:n?e.jsx(t,{size:24}):e.jsx(s,{size:24})})})]})}),n&&e.jsx("div",{className:"md:hidden bg-white",children:e.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[e.jsx("button",{onClick:()=>g("services"),className:"block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600",children:"Leistungen"}),e.jsx("button",{onClick:()=>g("about"),className:"block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600",children:"Über uns"}),e.jsx("button",{onClick:()=>g("references"),className:"block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600",children:"Referenzen"}),e.jsx("button",{onClick:b,className:"block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600",children:"Kontakt"})]})})]})},y=()=>{const t=u(),s=e=>{t("/"),setTimeout((()=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}),100)};return e.jsx("footer",{className:"bg-gray-900 text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[e.jsxs("div",{children:[e.jsx("img",{src:"https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734647725/transparent_Log_ggrs0m.png",alt:"FR innovative Haustechnik Logo",className:"h-16 w-auto mb-4"}),e.jsx("p",{className:"text-gray-400",children:"Ihr Partner für moderne Haustechnik und Sanitärlösungen."}),e.jsxs("a",{href:"https://www.instagram.com/fr_innovative_haustechnik",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center mt-4 text-gray-400 hover:text-white transition-colors duration-300",children:[e.jsx(n,{className:"w-6 h-6 mr-2"}),e.jsx("span",{children:"Folgen Sie uns auf Instagram"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:e.jsx("button",{onClick:()=>s("services"),className:"text-white hover:text-gray-300",children:"Leistungen"})}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>s("services"),className:"text-gray-400 hover:text-white",children:"Sanitär"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>s("services"),className:"text-gray-400 hover:text-white",children:"Heizung"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>s("services"),className:"text-gray-400 hover:text-white",children:"Reparaturen"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>s("services"),className:"text-gray-400 hover:text-white",children:"Roharbeiten"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:e.jsx("button",{onClick:()=>{t("/kontakt"),window.scrollTo({top:0,behavior:"smooth"})},className:"text-white hover:text-gray-300",children:"Kontakt"})}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{className:"text-gray-400",children:"Albert-Schweitzer Str 5"}),e.jsx("li",{className:"text-gray-400",children:"63110 Rodgau"}),e.jsx("li",{children:e.jsx("a",{href:"tel:+4917661986416",className:"text-gray-400 hover:text-white",children:"0176 / 61986416"})}),e.jsx("li",{children:e.jsx("a",{href:"mailto:info@fr-innovative-haustechnik.de",className:"text-gray-400 hover:text-white",children:"info@fr-innovative-haustechnik.de"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Webseite designed von"}),e.jsx("div",{className:"mb-6",children:e.jsxs("a",{href:"https://www.abe-webstudio.de",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 group transition-transform duration-300 hover:scale-105","aria-label":"Designed by ABE Webstudio",children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(prefers-color-scheme: dark)",srcSet:"https://res.cloudinary.com/dyzvzlq7u/image/upload/v1735183471/ABE_Webstudio_Logo-Photoroom-White_apehbi.png"}),e.jsx("img",{src:"https://res.cloudinary.com/dyzvzlq7u/image/upload/v1735183471/ABE_Webstudio_Logo-Photoroom_lpqekh.png",alt:"ABE Webstudio",className:"h-20 w-auto object-contain"})]}),e.jsx("span",{className:"text-xs text-gray-400 translate-y-[-0.5em]",children:"™"})]})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{to:"/datenschutz",className:"block text-gray-400 hover:text-white",children:"Datenschutzerklärung"}),e.jsx(h,{to:"/impressum",className:"block text-gray-400 hover:text-white",children:"Impressum"})]})]})]}),e.jsx("div",{className:"mt-12 pt-8 border-t border-gray-800",children:e.jsx("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:e.jsxs("p",{className:"text-gray-400",children:["© ",(new Date).getFullYear()," FR innovative Haustechnik. Alle Rechte vorbehalten."]})})})]})})},w=()=>{const t=((e=300)=>{const[t,s]=d.useState(!1);return d.useEffect((()=>{const t=()=>{const t=window.scrollY;s(t>e)};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)}),[e]),t})(300);return e.jsx("button",{onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},"aria-label":"Zurück nach oben",className:`\n        fixed bottom-20 right-6 md:bottom-8 z-50\n        flex items-center justify-center\n        p-3 rounded-full\n        bg-white/60 text-gray-700\n        transition-all duration-300\n        transform hover:scale-110 hover:bg-white\n        focus:outline-none\n        shadow-lg backdrop-blur-sm\n        ${t?"translate-y-0 opacity-100 pointer-events-auto":"translate-y-16 opacity-0 pointer-events-none"}\n      `,children:e.jsx(r,{size:24,className:"animate-pulse"})})},N=d.createContext(void 0),k=({children:t})=>{const[s,n]=d.useState(!1);return e.jsx(N.Provider,{value:{isZoomed:s,setIsZoomed:n},children:t})},_=()=>{const e=d.useContext(N);if(void 0===e)throw new Error("useZoom must be used within a ZoomProvider");return e},z=(e={})=>{const{threshold:t=100,hideOnScroll:s=!0,initialVisibility:n=!1}=e,[r,i]=d.useState(n),[a,o]=d.useState(0);return d.useEffect((()=>{const e=()=>{const e=window.scrollY;s?e>a?i(!1):(e<a||e<t)&&i(!0):i(e>t),o(e)};return e(),window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[s,t,a]),r},C=()=>{const{isZoomed:t}=_(),s=z({threshold:100,hideOnScroll:!0,initialVisibility:!0});return t?null:e.jsx("div",{className:"fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:block transition-all duration-300\n                    "+(s?"translate-x-0 opacity-100":"translate-x-16 opacity-0"),children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("button",{onClick:()=>{const e=encodeURIComponent("Hallo! Ich interessiere mich für Ihre Dienstleistungen und hätte gerne weitere Informationen.");window.open(`https://wa.me/4917661986416?text=${e}`,"_blank")},className:"relative group bg-white/80 p-3 rounded-full shadow-lg backdrop-blur-sm\n                   hover:bg-white transition-all duration-300 hover:scale-110","aria-label":"WhatsApp Kontakt",children:[e.jsx("span",{className:"absolute right-full mr-3 whitespace-nowrap bg-white/90 \n                         px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 \n                         transition-opacity duration-200 text-sm font-medium shadow-lg",children:"WhatsApp Chat"}),e.jsx(i,{size:24,className:"text-green-500"})]}),e.jsxs("button",{onClick:()=>{window.location.href="tel:+4917661986416"},className:"relative group bg-white/80 p-3 rounded-full shadow-lg backdrop-blur-sm\n                   hover:bg-white transition-all duration-300 hover:scale-110","aria-label":"Telefonischer Kontakt",children:[e.jsx("span",{className:"absolute right-full mr-3 whitespace-nowrap bg-white/90\n                         px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 \n                         transition-opacity duration-200 text-sm font-medium shadow-lg",children:"Jetzt anrufen"}),e.jsx(a,{size:24,className:"text-blue-600"})]})]})})},S=()=>{const t=z({threshold:100,hideOnScroll:!0,initialVisibility:!0});return e.jsx("div",{className:"fixed bottom-0 left-0 right-0 md:hidden z-50 mb-6 transition-all duration-300\n                    "+(t?"translate-y-0 opacity-100":"translate-y-16 opacity-0"),children:e.jsx("div",{className:"max-w-lg mx-auto px-4",children:e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsxs("button",{onClick:()=>{const e=encodeURIComponent("Hallo! Ich interessiere mich für Ihre Dienstleistungen und hätte gerne weitere Informationen.");window.open(`https://wa.me/4917661986416?text=${e}`,"_blank")},className:"flex-1 flex items-center justify-center bg-green-500/90 text-white \n                     px-6 py-3 rounded-full text-base font-medium transition-all duration-300 \n                     active:scale-95 shadow-lg backdrop-blur-sm hover:bg-green-600 \n                     min-w-[130px] max-w-[180px]","aria-label":"WhatsApp Kontakt",children:[e.jsx(i,{size:20,className:"mr-2"}),e.jsx("span",{children:"WhatsApp"})]}),e.jsxs("button",{onClick:()=>{window.location.href="tel:+4917661986416"},className:"flex-1 flex items-center justify-center bg-blue-600/90 text-white \n                     px-6 py-3 rounded-full text-base font-medium transition-all duration-300 \n                     active:scale-95 shadow-lg backdrop-blur-sm hover:bg-blue-700\n                     min-w-[130px] max-w-[180px]","aria-label":"Telefonischer Kontakt",children:[e.jsx(a,{size:20,className:"mr-2"}),e.jsx("span",{children:"Anrufen"})]})]})})})},E=({onClose:s,onSave:n})=>{const[r,i]=d.useState({necessary:!0,functional:!1,marketing:!1});return e.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:e.jsxs("div",{className:"flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),e.jsxs("div",{className:"relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle",children:[e.jsxs("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Cookie-Einstellungen"}),e.jsx("button",{onClick:s,className:"rounded-md text-gray-400 hover:text-gray-500 focus:outline-none",children:e.jsx(t,{className:"h-6 w-6"})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Notwendige Cookies"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Diese Cookies sind für die Grundfunktionen der Website erforderlich."})]}),e.jsx("input",{type:"checkbox",checked:r.necessary,disabled:!0,className:"h-4 w-4 rounded border-gray-300 text-blue-600"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Funktionale Cookies"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Ermöglichen erweiterte Funktionen und Personalisierung."})]}),e.jsx("input",{type:"checkbox",checked:r.functional,onChange:e=>i({...r,functional:e.target.checked}),className:"h-4 w-4 rounded border-gray-300 text-blue-600 cursor-pointer"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Marketing Cookies"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Werden verwendet, um Werbung relevanter für Sie zu gestalten."})]}),e.jsx("input",{type:"checkbox",checked:r.marketing,onChange:e=>i({...r,marketing:e.target.checked}),className:"h-4 w-4 rounded border-gray-300 text-blue-600 cursor-pointer"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e.jsx("button",{type:"button",onClick:()=>{n(r)},className:"inline-flex w-full justify-center rounded-md border border-transparent \n                       bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm \n                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 \n                       focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",children:"Einstellungen speichern"}),e.jsx("button",{type:"button",onClick:s,className:"mt-3 inline-flex w-full justify-center rounded-md border \n                       border-gray-300 bg-white px-4 py-2 text-base font-medium \n                       text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none \n                       focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 \n                       sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Abbrechen"})]})]})]})})},I=()=>{const[t,s]=d.useState(!1),[n,r]=d.useState(!1);return d.useEffect((()=>{localStorage.getItem("cookieConsent")||s(!0)}),[]),t?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out",children:e.jsx("div",{className:"max-w-7xl mx-auto p-4 sm:p-6",children:e.jsxs("div",{className:"md:flex md:items-center md:justify-between",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:"Wir respektieren Ihre Privatsphäre"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Einige sind notwendig für den Betrieb der Seite, während andere uns helfen, die Website zu optimieren und Ihnen ein besseres Nutzererlebnis zu bieten."})]}),e.jsxs("div",{className:"mt-4 md:mt-0 md:ml-6 flex flex-col sm:flex-row gap-3",children:[e.jsx("button",{onClick:()=>r(!0),className:"inline-flex justify-center items-center px-4 py-2 border border-gray-300 \n                         rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 \n                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Einstellungen anpassen"}),e.jsx("button",{onClick:()=>{localStorage.setItem("cookieConsent",JSON.stringify({necessary:!0,functional:!0,marketing:!0,timestamp:(new Date).toISOString()})),s(!1)},className:"inline-flex justify-center items-center px-4 py-2 border border-transparent \n                         rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 \n                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Alle akzeptieren"})]})]})})}),n&&e.jsx(E,{onClose:()=>r(!1),onSave:e=>{localStorage.setItem("cookieConsent",JSON.stringify({...e,timestamp:(new Date).toISOString()})),s(!1),r(!1)}})]}):null},L=()=>e.jsxs("div",{className:"min-h-screen",children:[e.jsx(v,{}),e.jsx(x,{}),e.jsx(y,{}),e.jsx(w,{}),e.jsx(C,{}),e.jsx(S,{}),e.jsx(I,{})]}),P={},A=function(e,t,s){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),s=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));n=Promise.allSettled(t.map((e=>{if((e=function(e){return"/"+e}(e))in P)return;P[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script"),r.crossOrigin="",r.href=e,s&&r.setAttribute("nonce",s),document.head.appendChild(r),t?new Promise(((t,s)=>{r.addEventListener("load",t),r.addEventListener("error",(()=>s(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function r(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return n.then((t=>{for(const e of t||[])"rejected"===e.status&&r(e.reason);return e().catch(r)}))},R=d.lazy((()=>A((()=>import("./BdN_kox2.js")),__vite__mapDeps([0,1,2,3])))),O=d.lazy((()=>A((()=>import("./eaoPRN6-.js")),__vite__mapDeps([4,1,2,3])))),W=d.lazy((()=>A((()=>import("./CQ4s7Y0n.js")),__vite__mapDeps([5,1,2])))),T=d.lazy((()=>A((()=>import("./SNN8RM_9.js")),__vite__mapDeps([6,1,2])))),q=d.lazy((()=>A((()=>import("./DrV1KECM.js")),__vite__mapDeps([7,1,2])))),D=[{path:"/",element:e.jsx(R,{})},{path:"/projekte/:projectId",element:e.jsx(O,{})},{path:"/kontakt",element:e.jsx(W,{})},{path:"/datenschutz",element:e.jsx(T,{})},{path:"/impressum",element:e.jsx(q,{})}],B=["https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734642985/IMG_4315_m1kmf4.jpg","https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734643169/Favicon_mlxy0a.png","https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734647725/transparent_Log_ggrs0m.png","https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734643159/transparent_Logo_Ohne_Schrift_qhvolc.png"];function F(){const[t,s]=d.useState(0);return d.useEffect((()=>{(async()=>{try{await(()=>{const e=B.map((e=>new Promise(((t,s)=>{const n=new Image;n.src=e,n.onload=t,n.onerror=s})))),t=new Promise((e=>setTimeout(e,300)));return Promise.all([...e,t])})(),s(100)}catch(e){s(100)}})();const e=setInterval((()=>{s((e=>e>=90?e:e+2))}),10);return()=>clearInterval(e)}),[]),100===t?null:e.jsxs(o.div,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 bg-white z-50 flex flex-col items-center justify-center",children:[e.jsx(o.div,{animate:{rotate:360,transition:{duration:1,repeat:1/0,ease:"linear"}},className:"mb-8",children:e.jsx(l,{className:"w-16 h-16 text-teal-600"})}),e.jsx("div",{className:"w-64 h-2 bg-gray-200 rounded-full overflow-hidden",children:e.jsx(o.div,{className:"h-full bg-teal-600",initial:{width:0},animate:{width:`${t}%`},transition:{duration:.1}})}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Laden..."})]})}function V(){return e.jsx(k,{children:e.jsx(d.Suspense,{fallback:e.jsx(F,{}),children:e.jsx(p,{children:e.jsx(f,{element:e.jsx(L,{}),children:D.map((t=>e.jsx(f,{path:t.path,element:e.jsx(d.Suspense,{fallback:e.jsx(F,{}),children:t.element})},t.path)))})})})})}b(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(g,{children:e.jsx(V,{})})}));export{_ as u};