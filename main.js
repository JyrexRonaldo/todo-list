(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},426:(n,e,t)=>{t.d(e,{Z:()=>U});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),l=new URL(t(890),t.b),p=new URL(t(898),t.b),d=new URL(t(18),t.b),u=new URL(t(637),t.b),f=new URL(t(599),t.b),h=new URL(t(603),t.b),b=new URL(t(375),t.b),g=new URL(t(849),t.b),m=new URL(t(668),t.b),v=new URL(t(474),t.b),x=i()(o()),y=c()(l),w=c()(p),k=c()(d),E=c()(u),C=c()(f),T=c()(h),L=c()(b),$=c()(g),D=c()(m),R=c()(v);x.push([n.id,`html {\n    box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n    box-sizing: inherit;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nheader, footer {\n    color: #FFFFFF;\n    background-color: #333333;\n    height: 13.2vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 4rem;\n}\n\nmain {\n    height: 100%;\n    display: flex;\n}\n\nmain > div:first-child {\n    width: 400px;\n    background-color:#DDDDDD;\n    padding: 20px 40px;\n}\n\nmain > div:nth-child(2) {\n    width: 100%;\n    background-color:#EEEEEE;\n    padding: 40px 100px 0px;\n}\n\nfooter {\n    height: 5.4vh;\n    font-size: 1rem;\n}\n\nheader span {\n    content: url(${y});\n}\n\nheader p {\n    display: flex;\n}\n\nmain > div:nth-child(1) ul p {\n    font-size: 30px;\n    font-weight: bolder;\n    margin: 10px 0px;\n}\n\nmain > div:nth-child(1) button, .add-task {\n    width: 100%; \n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 0px;\n    border-style: none;\n    border-radius: 5px;\n    font-size: 1.2rem;\n    background-color: #DDDDDD;\n    cursor: pointer;\n}\n\nmain > div:nth-child(1) button:hover, .add-task:hover {\n    background-color: #CCCCCC;\n}\n\nmain > div:nth-child(1) button:active, .add-task:active {\n    font-weight: bolder;\n}\n\nul span {\n    width: 30px;\n    height: 30px;\n    content: url(${w});\n    padding: 0px 5px;\n}\n\nul:nth-child(2) li:last-child span {\n    content: url(${k});\n}\n\nul span:nth-child(2) {\n    content: url(${E});\n    margin-left: auto;\n    opacity: 0;\n}\n\nul:nth-child(2) button:hover span:nth-child(2) {\n    opacity: 1;\n}\n\n.all-task span {\n    content: url(${C});   \n}\n\n.today span {\n    content: url(${T});   \n}\n\n.week span {\n    content: url(${L});   \n}\n\n.important span {\n    content: url(${$});   \n}\n\n.completed span {\n    content: url(${D});   \n}\n\n.task-list > p {\n    font-size: 2.4rem;\n    font-weight: bolder;\n    margin-bottom: 10px;\n}\n\n.task-list li {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n    height: 50px;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.task-list span:nth-of-type(1) {\n    content: url(${R});\n    width: 40px;\n    height: 30px;\n    margin-bottom: 5px;\n}\n\n.task-list span:nth-of-type(2) {\n    content: url(${E});\n    width: 40px;\n    height: 30px;\n}\n\n.task-list button {\n    margin-left: auto;\n}\n\n.task-list li:hover {\n    background-color: #CCCCCC;\n}\n\n.add-task {\n    height: 50px;\n    border-radius: 5px;\n    background-color: #EEEEEE;\n}\n\n.task-list input[type=checkbox] {\n    position: relative;\n    appearance: none;\n    border: 4px solid black;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n}\n\n.task-list input[type=checkbox]:checked::before {\n    content: "✔";\n    position: absolute;\n    width: 20px;\n    height: 30px;\n    font-size: 1.3rem;\n    left: 2.5px;\n}\n`,""]);const U=x},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},18:(n,e,t)=>{n.exports=t.p+"cf56b2a643aaf3123bac.svg"},603:(n,e,t)=>{n.exports=t.p+"233385e32206cd372d69.svg"},375:(n,e,t)=>{n.exports=t.p+"518ff47ec29e1552eabd.svg"},668:(n,e,t)=>{n.exports=t.p+"5261581c0b3a41686f64.svg"},637:(n,e,t)=>{n.exports=t.p+"1ded1e99216871d2a3ae.svg"},474:(n,e,t)=>{n.exports=t.p+"843953acf5cc70166293.svg"},849:(n,e,t)=>{n.exports=t.p+"1cb05a5c59c5673d4390.svg"},599:(n,e,t)=>{n.exports=t.p+"c02a2702923a0d852717.svg"},898:(n,e,t)=>{n.exports=t.p+"2d4061552fac064ed076.svg"},890:(n,e,t)=>{n.exports=t.p+"1ba2d999e84507917c59.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),p=t.n(l),d=t(589),u=t.n(d),f=t(917),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var b=t(426),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),e()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals})()})();