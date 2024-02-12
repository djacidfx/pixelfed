(()=>{"use strict";var e,r,n,o={},t={};function d(e){var r=t[e];if(void 0!==r)return r.exports;var n=t[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,d),n.loaded=!0,n.exports}d.m=o,e=[],d.O=(r,n,o,t)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,o,t]=e[l],i=!0,c=0;c<n.length;c++)(!1&t||a>=t)&&Object.keys(d.O).every((e=>d.O[e](n[c])))?n.splice(c--,1):(i=!1,t<a&&(a=t));if(i){e.splice(l--,1);var s=o();void 0!==s&&(r=s)}}return r}t=t||0;for(var l=e.length;l>0&&e[l-1][2]>t;l--)e[l]=e[l-1];e[l]=[n,o,t]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},d.d=(e,r)=>{for(var n in r)d.o(r,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,n)=>(d.f[n](e,r),r)),[])),d.u=e=>"js/"+{1084:"profile~followers.bundle",2470:"home.chunk",2530:"discover~myhashtags.chunk",2586:"compose.chunk",2732:"dms~message.chunk",3351:"discover~settings.chunk",3365:"dms.chunk",3623:"discover~findfriends.chunk",4028:"error404.bundle",4958:"discover.chunk",4965:"discover~memories.chunk",5865:"post.chunk",6053:"notifications.chunk",6869:"profile.chunk",7019:"discover~hashtag.bundle",8250:"i18n.bundle",8517:"daci.chunk",8600:"changelog.bundle",8625:"profile~following.bundle",8900:"discover~serverfeed.chunk"}[e]+"."+{1084:"5deed93248f20662",2470:"ada2cbf0ec3271bd",2530:"a72fc4882db8afd3",2586:"1ac292c93b524406",2732:"76edeafda3d92320",3351:"be88dc5ba1a24a7d",3365:"53a951c5de2d95ac",3623:"941b524eee8b8d63",4028:"3bbc118159460db6",4958:"b1846efb6bd1e43c",4965:"7d917826c3e9f17b",5865:"eb9804ff282909ae",6053:"3b92cf46da469de1",6869:"d52916cb68c9a146",7019:"6c2ff384b17ea58d",8250:"47cbf9f04d955267",8517:"8d4acc1db3f27a51",8600:"742a06ba0a547120",8625:"d2b3b1fc2e05dbd3",8900:"8365948d1867de3a"}[e]+".js",d.miniCssF=e=>({138:"css/spa",703:"css/admin",1242:"css/appdark",6170:"css/app",8737:"css/portfolio",9994:"css/landing"}[e]+".css"),d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="pixelfed:",d.l=(e,o,t,a)=>{if(r[e])r[e].push(o);else{var i,c;if(void 0!==t)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var u=s[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+t){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",n+t),i.src=e),r[e]=[o];var f=(n,o)=>{i.onerror=i.onload=null,clearTimeout(b);var t=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),t&&t.forEach((e=>e(o))),n)return n(o)},b=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),d.p="/",(()=>{var e={8929:0,1242:0,6170:0,8737:0,703:0,9994:0,138:0};d.f.j=(r,n)=>{var o=d.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else if(/^(1242|138|6170|703|8737|8929|9994)$/.test(r))e[r]=0;else{var t=new Promise(((n,t)=>o=e[r]=[n,t]));n.push(o[2]=t);var a=d.p+d.u(r),i=new Error;d.l(a,(n=>{if(d.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+r+" failed.\n("+t+": "+a+")",i.name="ChunkLoadError",i.type=t,i.request=a,o[1](i)}}),"chunk-"+r,r)}},d.O.j=r=>0===e[r];var r=(r,n)=>{var o,t,[a,i,c]=n,s=0;if(a.some((r=>0!==e[r]))){for(o in i)d.o(i,o)&&(d.m[o]=i[o]);if(c)var l=c(d)}for(r&&r(n);s<a.length;s++)t=a[s],d.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return d.O(l)},n=self.webpackChunkpixelfed=self.webpackChunkpixelfed||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),d.nc=void 0})();