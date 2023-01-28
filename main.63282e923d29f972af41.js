(()=>{var e,r,t,n,a={180:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof auth)return e();t.l("undefined/auth/remoteEntry.js",(t=>{if("undefined"!=typeof auth)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"auth")})).then((()=>auth))},868:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof dashboard)return e();t.l("undefined/dashboard/remoteEntry.js",(t=>{if("undefined"!=typeof dashboard)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"dashboard")})).then((()=>dashboard))},339:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof header)return e();t.l("undefined/header/remoteEntry.js",(t=>{if("undefined"!=typeof header)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"header")})).then((()=>header))},163:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof landing)return e();t.l("undefined/landing/remoteEntry.js",(t=>{if("undefined"!=typeof landing)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"landing")})).then((()=>landing))}},o={};function i(e){if(o[e])return o[e].exports;var r=o[e]={exports:{}};return a[e](r,r.exports,i),r.exports}i.m=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"."+{13:"76aa7b75837de34a3d5c",212:"3718ee96dc4da6be997d",294:"a80a922c1a86f66488bc",470:"ce2905d0c5212be3f37d",498:"0ba4e8e186c4f0ea5e97",787:"89b0f4c4658c9440d66d",794:"d81e7cdab9c54979a201",935:"813d3d31ed75498bf537",994:"ba2dafb0c0099e83efd2"}[e]+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="container:",i.l=(t,n,a)=>{if(e[t])e[t].push(n);else{var o,d;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){o=f;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",r+a),o.src=t),e[t]=[n];var l=(r,n)=>{o.onerror=o.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),d&&document.head.appendChild(o)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={470:[695],787:[489],794:[446],994:[896]},n={446:["default","./LandingModule",163],489:["default","./DashboardModule",868],695:["default","./HeaderComponent",339],896:["default","./AuthModule",180]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var d=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),a[e]=()=>{throw r},o.p=0},u=(e,t,n,a,i,u)=>{try{var s=e(t,n);if(!s||!s.then)return i(s,a,u);var f=s.then((e=>i(e,a)),d);if(!u)return f;r.push(o.p=f)}catch(e){d(e)}},s=(e,r,n)=>u(r.get,o[1],t,0,f,n),f=r=>{o.p=1,a[e]=e=>{e.exports=r()}};u(i,o[2],0,0,((e,r,t)=>e?u(i.I,o[0],0,e,s,t):d()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],d="container",u=(e,r,t)=>{var n=o[e]=o[e]||{},a=n[r];(!a||!a.loaded&&d>a.from)&&(n[r]={get:t,from:d})},s=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=i(e);if(!a)return;var o=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return f.push(a.then(o,r));var d=o(a);if(d&&d.then)return f.push(d.catch(r))}catch(e){r(e)}},f=[];return"default"===t&&(u("react-dom","17.0.1",(()=>Promise.all([i.e(935),i.e(212)]).then((()=>()=>i(935))))),u("react-router-dom","5.2.0",(()=>Promise.all([i.e(498),i.e(212)]).then((()=>()=>i(498))))),u("react","17.0.1",(()=>i.e(294).then((()=>()=>i(294))))),u("rxjs","6.6.3",(()=>i.e(13).then((()=>()=>i(13))))),s(339),s(163),s(180),s(868)),f.length?e[t]=Promise.all(f).then((()=>e[t]=1)):e[t]=1}}})(),i.p="/container",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var a=t[0],o=a<0;o&&(a=-a-1);for(var i=0,d=1,u=!0;;d++,i++){var s,f,l=d<t.length?(typeof t[d])[0]:"";if(i>=n.length||"o"==(f=(typeof(s=n[i]))[0]))return!u||("u"==l?d>a&&!o:""==l!=o);if("u"==f){if(!u||"u"!=l)return!1}else if(u)if(l==f)if(d<=a){if(s!=t[d])return!1}else{if(o?s>t[d]:s<t[d])return!1;s!=t[d]&&(u=!1)}else if("s"!=l&&"n"!=l){if(o||d<=a)return!1;u=!1,d--}else{if(d<=a||f<l!=o)return!1;u=!1}else"s"!=l&&"n"!=l&&(u=!1,d--)}}var p=[],h=p.pop.bind(p);for(i=1;i<t.length;i++){var c=t[i];p.push(1==c?h()|h():2==c?h()&h():c?r(c,n):!h())}return!!h()},t=(t,n,a)=>{var o=t[n];return(n=Object.keys(o).reduce(((t,n)=>!r(a,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],d=(typeof i)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(t,n)?t:n),0))&&o[n]},n=(e=>function(r,t,n,a){var o=i.I(r);return o&&o.then?o.then(e.bind(e,r,i.S[r],t,n,a)):e(r,i.S[r],t,n,a)})(((e,r,n,a,o)=>{var d=r&&i.o(r,n)&&t(r,n,a);return d?(e=>(e.loaded=1,e.get()))(d):o()})),d={},u={212:()=>n("default","react",[4,17,0,1],(()=>i.e(294).then((()=>()=>i(294))))),468:()=>n("default","react-dom",[4,17,0,1],(()=>i.e(935).then((()=>()=>i(935))))),530:()=>n("default","react-router-dom",[4,5,2,0],(()=>i.e(498).then((()=>()=>i(498))))),867:()=>n("default","rxjs",[4,6,6,3],(()=>i.e(13).then((()=>()=>i(13)))))},s={212:[212],470:[468,530,867]};i.f.consumes=(e,r)=>{i.o(s,e)&&s[e].forEach((e=>{if(i.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,a[e]=t=>{delete o[e],t.exports=r()}},n=r=>{delete d[e],a[e]=t=>{throw delete o[e],r}};try{var s=u[e]();s.then?r.push(d[e]=s.then(t).catch(n)):t(s)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(212!=r){var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=i.p+i.u(r),d=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}}),"chunk-"+r)}else e[r]=0};var r=(r,t)=>{for(var n,a,[o,d,u]=t,s=0,f=[];s<o.length;s++)a=o[s],i.o(e,a)&&e[a]&&f.push(e[a][0]),e[a]=0;for(n in d)i.o(d,n)&&(i.m[n]=d[n]);for(u&&u(i),r&&r(t);f.length;)f.shift()()},t=self.webpackChunkcontainer=self.webpackChunkcontainer||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),Promise.all([i.e(212),i.e(470)]).then(i.bind(i,470))})();