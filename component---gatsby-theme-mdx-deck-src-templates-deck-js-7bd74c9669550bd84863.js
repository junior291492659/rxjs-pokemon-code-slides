(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{826:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(828),a=(r(5),r(61)),c=r(1),u=r(4),s=r(830),l=r(833),f=r.n(l),p=r(62),d=r.n(p),b=r(52),y=r(109),h=r(199);const v=39,m=37,O=38,g=40,j=32,w=80,T=79,S=71,x=27,E=33,A=34,_=e=>t=>t.mode===e?{mode:y.a.normal}:{mode:e},C=["input","select","textarea","a","button"];var P=()=>{const e=Object(b.a)();Object(n.useEffect)(()=>{const t=t=>{const{metaKey:r,ctrlKey:n,shiftKey:o,altKey:i}=t;if(r||n)return;const c=document.activeElement.tagName.toLowerCase();if(!C.includes(c))if(o)switch(t.keyCode){case j:Object(h.b)(e);break;case w:e.setState(_(y.a.print)),Object(a.navigate)(e.slug+"/print")}else if(i)switch(t.keyCode){case w:e.setState(_(y.a.presenter));break;case T:e.setState(_(y.a.overview));break;case S:e.setState(_(y.a.grid))}else switch(t.keyCode){case v:case g:case A:case j:Object(h.a)(e);break;case m:case O:case E:Object(h.b)(e);break;case x:e.setState({mode:y.a.normal})}};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e])};const k="mdx-deck-slide",I="mdx-deck-step";var L=()=>{const e=Object(b.a)(),[t,r]=Object(n.useState)(!1),o=()=>r(!0),i=()=>r(!1),c=t=>{const r=parseInt(t.newValue,10);if(!isNaN(r))switch(t.key){case k:Object(a.navigate)([e.slug,r].join("/"));break;case I:e.setState({step:r})}};Object(n.useEffect)(()=>{r(document.hasFocus())},[]),Object(n.useEffect)(()=>(t||window.addEventListener("storage",c),window.addEventListener("focus",o),window.addEventListener("blur",i),()=>{t||window.removeEventListener("storage",c),window.removeEventListener("focus",o),window.removeEventListener("blur",i)}),[t]),Object(n.useEffect)(()=>{t&&(localStorage.setItem(k,e.index),localStorage.setItem(I,e.step))},[t,e.index,e.step])},N=r(111);function M(){return(M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const R=e=>o.a.createElement(n.Fragment,null,e.children);var D=e=>{const[t,r]=Object(n.useState)("100vh"),{mode:o,theme:i}=Object(b.a)();Object(n.useEffect)(()=>{r(window.innerHeight);const e=e=>{r(window.innerHeight)},t=e=>{o===y.a.normal&&e.preventDefault()};return window.addEventListener("resize",e),document.body.addEventListener("touchstart",t),()=>{window.removeEventListener("resize",e),document.body.removeEventListener("touchstart",t)}},[o]);const{Provider:a=R}=i;return Object(u.d)(a,null,Object(u.d)("div",M({},e,{sx:{width:"100vw",height:o!==y.a.print?t:"100vh",variant:"styles.root","*":{boxSizing:"border-box"}}})))},F=r(122),z=r(121),H=r(205),B=r(206),$=e=>{const t=Object(b.a)(),{index:r,length:n}=t;return Object(u.d)(o.a.Fragment,null,Object(u.d)("div",null,r," / ",n-1),Object(u.d)("div",{sx:{mx:4}},Object(u.d)("a",{href:a.globalHistory.location.href,rel:"noopener noreferrer",target:"_blank",sx:{color:"inherit",textDecoration:"none"}},"Open in New Window ↗︎")),Object(u.d)("div",{sx:{mx:"auto"}}),Object(u.d)("div",{sx:{display:"flex",alignItems:"center",mx:4}},Object(u.d)(B.a,null)),Object(u.d)("div",null,Object(u.d)(H.a,null)))};var q=e=>{let{slides:t,children:r}=e;const n=Object(b.a)(),i=t[n.index+1],a=!!n.notes&&o.a.Children.toArray(n.notes);return Object(u.d)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.d)("div",{sx:{display:"flex",flex:"1 1 auto",height:"60vh"}},Object(u.d)("div",{sx:{width:"75%",p:3}},Object(u.d)(z.a,{zoom:3/4},r)),Object(u.d)("div",{sx:{width:"25%",p:3}},Object(u.d)(z.a,{ratio:4/3,zoom:1/4},Object(u.d)(F.a,{slide:i,preview:!0})),a&&Object(u.d)("div",{sx:{my:3}},a))),Object(u.d)("div",{sx:{height:96,p:3,display:"flex",alignItems:"center",fontSize:1,fontWeight:"bold",fontVariantNumeric:"tabular-nums"}},Object(u.d)($,null)))};function Y(){return(Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const K=()=>{};var W=e=>{let{slides:t=[],ratio:r=16/9,zoom:i=1/4,onClick:a=K}=e,c=U(e,["slides","ratio","zoom","onClick"]);const{index:s}=Object(b.a)(),l=Object(n.useRef)(null);return Object(n.useEffect)(()=>{const e=l.current;e&&"function"==typeof e.scrollIntoViewIfNeeded&&e.scrollIntoViewIfNeeded()}),Object(u.d)(o.a.Fragment,null,t.map((e,t)=>Object(u.d)("div",Y({},c,{key:t,role:"link",ref:t===s?l:null,onClick:e=>{a(t)},style:s===t?{position:"relative",zIndex:1}:null,sx:{m:2,cursor:"pointer",outline:s===t?"4px solid cyan":null}}),Object(u.d)(z.a,{zoom:i,ratio:r},Object(u.d)(F.a,{slide:e,preview:!0})))))},V=e=>{let{slides:t,children:r}=e;const{slug:n,index:o,length:i}=Object(b.a)();return Object(u.d)("div",{sx:{display:"flex",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.d)("div",{sx:{width:100/6+"%",minWidth:0,flex:"none",height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",p:2}},Object(u.d)(W,{slides:t,zoom:1/6,onClick:e=>{Object(a.navigate)([n,e].join("/"))}})),Object(u.d)("div",{sx:{width:500/6+"%",py:3,pr:3,display:"flex",flexDirection:"column",height:"100vh"}},Object(u.d)("div",{sx:{flex:"1 1 auto"}},Object(u.d)(z.a,{zoom:5/6},r)),Object(u.d)("div",{sx:{py:3}},o," / ",i-1)))},X=e=>{let{slides:t}=e;const{slug:r,setState:n}=Object(b.a)();return Object(u.d)("div",{sx:{minHeight:"100vh",color:"white",bg:"black"}},Object(u.d)("div",{sx:{display:"flex",flexWrap:"wrap"}},Object(u.d)(W,{slides:t,onClick:e=>{Object(a.navigate)([r,e].join("/")),n({mode:y.a.normal})},sx:{width:"25%",m:0}})))};function J(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Q(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const re=()=>(P(),!1),ne=()=>(L(),!1),oe=e=>{let{slides:t}=e;const r=ee(ee({},Object(b.a)()),{},{mode:y.a.print});return Object(c.c)(N.a.Provider,{value:r},t.map((e,t)=>Object(c.c)(F.a,{key:t,slide:e,preview:!0})))},ie=e=>{let{theme:t}=e;return!!t.googleFont&&Object(c.c)(s.a,null,Object(c.c)("link",{rel:"stylesheet",href:t.googleFont}))},ae=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((e,t)=>"function"==typeof t?t(e):d()(e,t),{})},ce=e=>{let{children:t}=e;return Object(c.c)(o.a.Fragment,{children:t})};var ue=e=>{let{slides:t=[],pageContext:{title:r,slug:n},theme:i={},themes:l=[]}=e;Q(e,["slides","pageContext","theme","themes"]);const p=Object(b.a)(),d=(()=>{const{pathname:e}=a.globalHistory.location,t=e.split("/"),r=Number(t[t.length-1]);return isNaN(r)?0:r})(),h=t.head.children,v=ae.apply(void 0,[i].concat(J(l))),{components:m}=v,O=Q(v,["components"]),g=ee(ee({},p),{},{slug:n,length:t.length,index:d,steps:f()(p,"metadata."+d+".steps"),notes:f()(p,"metadata."+d+".notes"),theme:O});let j=ce;switch(g.mode){case y.a.presenter:j=q;break;case y.a.overview:j=V;break;case y.a.grid:j=X}return Object(c.c)(o.a.Fragment,null,Object(c.c)(s.a,null,Object(c.c)("title",null,r),h),Object(c.c)(ie,{theme:O}),Object(c.c)(N.a.Provider,{value:g},Object(c.c)(u.b,{components:m,theme:O},Object(c.c)(c.a,{styles:{body:{margin:0,overflow:g.mode===y.a.normal?"hidden":null}}}),Object(c.c)(re,null),Object(c.c)(ne,null),Object(c.c)(D,null,Object(c.c)(j,{slides:t},Object(c.c)(a.Router,{basepath:n,style:{height:"100%"}},Object(c.c)(F.a,{index:0,path:"/",slide:t[0]}),t.map((e,t)=>Object(c.c)(F.a,{key:t,index:t,path:t+"/*",slide:e})),Object(c.c)(oe,{path:"/print",slides:t})))))))},se=r(243);function le(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function fe(){return(fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const pe={wrapper:e=>{const t=Object(se.a)(e);return Object(c.c)(ue,fe({},e,{slides:t}))}};t.default=e=>{let{data:{deck:{id:t,body:r}}}=e,n=le(e,["data"]);return Object(c.c)(e=>Object(c.c)(i.MDXRenderer,fe({},e,{children:r})),fe({},n,{components:pe}))}},828:function(e,t,r){const n=r(829);e.exports={MDXRenderer:n}},829:function(e,t,r){function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return(i=a()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r(5),r(5);const p=r(0),{mdx:d}=r(118),{useMDXScope:b}=r(224);e.exports=function(e){let{scope:t,children:r}=e,o=f(e,["scope","children"]);const a=b(t),c=p.useMemo(()=>{if(!r)return null;const e=s({React:p,mdx:d},a),t=Object.keys(e),o=t.map(t=>e[t]);return i(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(o)))},[r,t]);return p.createElement(c,s({},o))}},830:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return ye}));r(11),r(16),r(54),r(12),r(26),r(3),r(19),r(5),r(18),r(22),r(43),r(158),r(14),r(7),r(17),r(30),r(6),r(97),r(63),r(20),r(10),r(159);var n,o,i,a,c=r(38),u=r.n(c),s=r(831),l=r.n(s),f=r(832),p=r.n(f),d=r(0),b=r.n(d),y=r(204),h=r.n(y),v="bodyAttributes",m="htmlAttributes",O="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",T="href",S="http-equiv",x="innerHTML",E="itemprop",A="name",_="property",C="rel",P="src",k="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",N="defer",M="encodeSpecialCharacters",R="onChangeClientState",D="titleTemplate",F=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),z=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},$=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,g.TITLE),r=Q(e,D);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,L);return t||n||void 0},V=function(e){return Q(e,R)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===C&&"canonical"===e[r].toLowerCase()||u===C&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==x&&c!==w&&c!==E||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=h()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,n),ue(g.HTML,o),ce(f,p);var d={baseTag:se(g.BASE,r),linkTags:se(g.LINK,i),metaTags:se(g.META,a),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,l)},b={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(b[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,b,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(g.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==a.join(",")&&r.setAttribute("data-react-helmet",a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===x)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,o=fe(r,n),[b.a.createElement(g.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=le(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case v:case m:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===x||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),b.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===x||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,n),bodyAttributes:pe(v,r,n),htmlAttributes:pe(m,o,n),link:pe(g.LINK,i,n),meta:pe(g.META,a,n),noscript:pe(g.NOSCRIPT,c,n),script:pe(g.SCRIPT,u,n),style:pe(g.STYLE,s,n),title:pe(g.TITLE,{title:f,titleAttributes:p},n)}},be=l()((function(e){return{baseTag:J([T,k],e),bodyAttributes:X(v,e),defer:Q(e,N),encode:Q(e,M),htmlAttributes:X(m,e),linkTags:G(g.LINK,[C,T],e),metaTags:G(g.META,[A,j,S,_,E],e),noscriptTags:G(g.NOSCRIPT,[x],e),onChangeClientState:V(e),scriptTags:G(g.SCRIPT,[P,x],e),styleTags:G(g.STYLE,[w],e),title:W(e),titleAttributes:X(O,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(o=be,a=i=function(e){function t(){return B(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return q({},n,((t={})[r.type]=[].concat(n[r.type]||[],[q({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case g.TITLE:return q({},o,((t={})[n.type]=a,t.titleAttributes=q({},i),t));case g.BODY:return q({},o,{bodyAttributes:q({},i)});case g.HTML:return q({},o,{htmlAttributes:q({},i)})}return q({},o,((r={})[n.type]=q({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=q({},t);return Object.keys(e).forEach((function(t){var n;r=q({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return b.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[F[r]||r]=e[r],t}),t)}(Y(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Y(e,["children"]),n=q({},r);return t&&(n=this.mapChildrenToProps(t,n)),b.a.createElement(o,n)},$(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(b.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind}).call(this,r(96))},831:function(e,t,r){"use strict";r(18),r(43),r(31),r(11),r(14);var n,o=r(0),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},832:function(e,t,r){r(79),r(26),r(3),r(19),r(5),r(123),r(17),r(9),r(286),r(27),r(28),r(16),r(53);var n="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=r.length)return!1;for(u=c;0!=u--;)if(!e(t[u],r[u]))return!1;return!0}if(o&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!r.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],r.get(u.value[0])))return!1;return!0}if(i&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!r.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((c=t.length)!=r.length)return!1;for(u=c;0!=u--;)if(t[u]!==r[u])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof r.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof r.toString)return t.toString()===r.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(r,s[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],r[s[u]]))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},833:function(e,t,r){(function(t){r(3),r(27),r(28),r(19),r(5),r(9),r(7),r(11),r(17);var n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/,i=/^\./,a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,u=/^\[object .+?Constructor\]$/,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,f=s||l||Function("return this")();var p,d=Array.prototype,b=Function.prototype,y=Object.prototype,h=f["__core-js_shared__"],v=(p=/[^.]+$/.exec(h&&h.keys&&h.keys.IE_PROTO||""))?"Symbol(src)_1."+p:"",m=b.toString,O=y.hasOwnProperty,g=y.toString,j=RegExp("^"+m.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),w=f.Symbol,T=d.splice,S=M(f,"Map"),x=M(Object,"create"),E=w?w.prototype:void 0,A=E?E.toString:void 0;function _(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function C(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function P(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function k(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function I(e,t){for(var r,i=0,a=(t=function(e,t){if(z(e))return!1;var r=typeof e;if("number"==r||"symbol"==r||"boolean"==r||null==e||B(e))return!0;return o.test(e)||!n.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:z(r=t)?r:R(r)).length;null!=e&&i<a;)e=e[D(t[i++])];return i&&i==a?e:void 0}function L(e){return!(!H(e)||(t=e,v&&v in t))&&(function(e){var t=H(e)?g.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(r){}return t}(e)?j:u).test(function(e){if(null!=e){try{return m.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function N(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function M(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return L(r)?r:void 0}_.prototype.clear=function(){this.__data__=x?x(null):{}},_.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},_.prototype.get=function(e){var t=this.__data__;if(x){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return O.call(t,e)?t[e]:void 0},_.prototype.has=function(e){var t=this.__data__;return x?void 0!==t[e]:O.call(t,e)},_.prototype.set=function(e,t){return this.__data__[e]=x&&void 0===t?"__lodash_hash_undefined__":t,this},C.prototype.clear=function(){this.__data__=[]},C.prototype.delete=function(e){var t=this.__data__,r=k(t,e);return!(r<0)&&(r==t.length-1?t.pop():T.call(t,r,1),!0)},C.prototype.get=function(e){var t=this.__data__,r=k(t,e);return r<0?void 0:t[r][1]},C.prototype.has=function(e){return k(this.__data__,e)>-1},C.prototype.set=function(e,t){var r=this.__data__,n=k(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},P.prototype.clear=function(){this.__data__={hash:new _,map:new(S||C),string:new _}},P.prototype.delete=function(e){return N(this,e).delete(e)},P.prototype.get=function(e){return N(this,e).get(e)},P.prototype.has=function(e){return N(this,e).has(e)},P.prototype.set=function(e,t){return N(this,e).set(e,t),this};var R=F((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(B(e))return A?A.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t);var r=[];return i.test(e)&&r.push(""),e.replace(a,(function(e,t,n,o){r.push(n?o.replace(c,"$1"):t||e)})),r}));function D(e){if("string"==typeof e||B(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function F(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function r(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a),a};return r.cache=new(F.Cache||P),r}F.Cache=P;var z=Array.isArray;function H(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function B(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}e.exports=function(e,t,r){var n=null==e?void 0:I(e,t);return void 0===n?r:n}}).call(this,r(96))}}]);
//# sourceMappingURL=component---gatsby-theme-mdx-deck-src-templates-deck-js-7bd74c9669550bd84863.js.map