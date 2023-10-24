(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>L});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(890),t.b),l=new URL(t(898),t.b),p=new URL(t(18),t.b),u=new URL(t(637),t.b),f=new URL(t(599),t.b),h=new URL(t(603),t.b),g=new URL(t(375),t.b),b=new URL(t(849),t.b),m=new URL(t(668),t.b),x=new URL(t(474),t.b),y=i()(r()),v=d()(s),k=d()(l),j=d()(p),w=d()(u),E=d()(f),C=d()(h),T=d()(g),F=d()(b),S=d()(m),P=d()(x);y.push([n.id,`html {\n    box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n    box-sizing: inherit;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nheader, footer {\n    color: #FFFFFF;\n    background-color: #333333;\n    height: 13.2vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 4rem;\n}\n\nmain {\n    height: 100%;\n    display: flex;\n}\n\nmain > div:first-child {\n    width: 400px;\n    background-color:#DDDDDD;\n    padding: 20px 40px;\n}\n\nmain > div:nth-child(2) {\n    width: 100%;\n    background-color:#EEEEEE;\n    padding: 40px 100px 0px;\n}\n\nfooter {\n    height: 5.4vh;\n    font-size: 1rem;\n}\n\nheader span {\n    content: url(${v});\n}\n\nheader p {\n    display: flex;\n}\n\nmain > div:nth-child(1) ul li p {\n    font-size: 30px;\n    font-weight: bolder;\n    margin: 10px 0px;\n}\n\nmain > div:nth-child(1) li button, .add-task {\n    width: 100%; \n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 0px;\n    border-style: none;\n    border-radius: 5px;\n    font-size: 1.2rem;\n    background-color: #DDDDDD;\n    cursor: pointer;\n}\n\nmain > div:nth-child(1) button:hover, .add-task:hover {\n    background-color: #CCCCCC;\n}\n\nmain > div:nth-child(1) button:active, .add-task:active {\n    font-weight: bolder;\n}\n\nul span {\n    width: 30px;\n    height: 30px;\n    content: url(${k});\n    padding: 0px 5px;\n}\n\nul:nth-child(2) .add span {\n    content: url(${j});\n}\n\nul span:nth-child(2) {\n    content: url(${w});\n    margin-left: auto;\n    opacity: 0;\n}\n\nul:nth-child(2) button:hover span:nth-child(2) {\n    opacity: 1;\n}\n\n.all-task span {\n    content: url(${E});   \n}\n\n.today span {\n    content: url(${C});   \n}\n\n.week span {\n    content: url(${T});   \n}\n\n.important span {\n    content: url(${F});   \n}\n\n.completed span {\n    content: url(${S});   \n}\n\n.task-list > p {\n    font-size: 2.4rem;\n    font-weight: bolder;\n    margin-bottom: 10px;\n}\n\n.task-list li {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n    height: 50px;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.task-list span:nth-of-type(1) {\n    content: url(${P});\n    width: 40px;\n    height: 30px;\n    margin-bottom: 5px;\n}\n\n.task-list span:nth-of-type(2) {\n    content: url(${w});\n    width: 40px;\n    height: 30px;\n}\n\n.task-list li button {\n    margin-left: auto;\n}\n\n.task-list li:hover {\n    background-color: #CCCCCC;\n}\n\n.add-task {\n    height: 50px;\n    border-radius: 5px;\n    background-color: #EEEEEE;\n}\n\n.task-list input[type=checkbox] {\n    position: relative;\n    appearance: none;\n    border: 4px solid black;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n}\n\n.task-list input[type=checkbox]:checked::before {\n    content: "✔";\n    position: absolute;\n    width: 20px;\n    height: 30px;\n    font-size: 1.3rem;\n    left: 2.5px;\n}\n\n\n.task-list input[type=checkbox]:checked + p {\n    text-decoration: line-through;\n    text-decoration-thickness: 2px;\n}\n\n.project-dialog form div {\n    display: flex;\n    gap: 10px;\n}\n\n.project-dialog button {\n    justify-content: center;\n}\n\n.project-dialog form {\n    height: 100px;\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n    /* align-items: ; */\n    justify-content: center;\n}\n\n.project-dialog label, .project-dialog input {\n    font-size: 1.2rem;\n}\n\n.add-task:hover > span {\n    background-color: #CCCCCC;\n}\n\n.task-dialog {\n    height: 700px;\n    width: 500px;\n    padding: 0px;\n    background-color: #EEEEEE;\n}\n\n.task-dialog form > div > div{\n    display: flex;\n    flex-direction: column;\n    padding: 30px 30px 0px;\n    /* justify-content: flex-start; */\n    gap: 5px;\n    font-size: 25px;\n    background-color: #EEEEEE;\n    /* height: auto; */\n}\n\n.task-dialog form > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n\n\n.task-dialog form p {\n    background-color: #333333;\n    color: #FFFFFF;\n    width: 100%;\n    height: 70px;\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    font-size: 30px;\n}\n\n.task-dialog input, .task-dialog select {\n    height: 45px;\n    font-size: 20px;\n    background-color: #FFFFFF;\n    padding: 0px 5px;\n}\n\ntextarea {\n    font-size: 20px;\n    height: 100px;\n}\n\n.task-dialog div.task-buttons {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n}\n\n.task-buttons button{\n    width: 100px;\n    font-size: 20px;\n    padding: 5px 10px;\n}\n\n.project-dialog {\n    height: 190px;\n    width: 500px;\n    padding: 0px;\n    background-color: #EEEEEE;\n}\n\n.project-dialog form {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n\n.project-dialog p {\n    background-color: #333333;\n    color: #FFFFFF;\n    /* font-weight: bold; */\n    padding: 10px 20px;\n    font-size: 1.5rem;;\n}\n\n.project-dialog form div {\n    padding: 10px 20px 0px;\n}\n\n.project-dialog form div:nth-child(2) {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-dialog form div:nth-child(3) {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.project-dialog button {\n    width: 80px;\n}`,""]);const L=y},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},18:(n,e,t)=>{n.exports=t.p+"cf56b2a643aaf3123bac.svg"},603:(n,e,t)=>{n.exports=t.p+"233385e32206cd372d69.svg"},375:(n,e,t)=>{n.exports=t.p+"518ff47ec29e1552eabd.svg"},668:(n,e,t)=>{n.exports=t.p+"5261581c0b3a41686f64.svg"},637:(n,e,t)=>{n.exports=t.p+"1ded1e99216871d2a3ae.svg"},474:(n,e,t)=>{n.exports=t.p+"843953acf5cc70166293.svg"},849:(n,e,t)=>{n.exports=t.p+"1cb05a5c59c5673d4390.svg"},599:(n,e,t)=>{n.exports=t.p+"c02a2702923a0d852717.svg"},898:(n,e,t)=>{n.exports=t.p+"2d4061552fac064ed076.svg"},890:(n,e,t)=>{n.exports=t.p+"1ba2d999e84507917c59.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),f=t(917),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var g=t(426),b={};b.styleTagTransform=u(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),e()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;const m=(n,e,t,o)=>{const r={title:n,description:e,dueDate:t,priority:o};return{getTodoItem:function(){return r},editTodoItem:function(n,e,t,o){r.title=n||r.title,r.description=e||r.description,r.dueDate=t||r.dueDate,r.priority=o||r.priority}}};m("make payments","pay a lot of cash","tomorrow","yes very important").editTodoItem(null,null,"yesterday",null);const x=function(){const n=function(){const n={bible:[m("boasdok","arbe","Lat yeah",!0),m("booasdk","babel","tmorrow",!0),m("booasdk","barl","net week",!0),m("boasdok","brel","lat month",!0),m("boasdok","rbel","net century",!0)],cash:[m("book","bel","Last yah",!0),m("book","bel","tomorrw",!0),m("book","bel","next wek",!0),m("book","bel","last mnth",!0),m("book","bel","next cntury",!0)],money:[m("bob","fiat","Laeah",!0),m("bob","fiat","toow",!0),m("bob","fiat","neeek",!0),m("bob","fiat","laonth",!0),m("bob","fiat","neentury",!0)],ghost:[m("jarek","fiya","Lah",!0),m("jarek","fiya","tw",!0),m("jarek","fiya","nek",!0),m("jarek","fiya","lnth",!0),m("jarek","fiya","nntury",!0)]};return{getProjectTasks:e=>n[e],addProject:e=>{n[e]=[]},addTodoItem:(e,t)=>{n[e].push(t)},getProjects:()=>n,deleteProject:e=>{delete n[e]},deleteTodoItem:(e,t)=>{n[e].splice(t,1)},getTodoItem:(e,t)=>n[e][t]}}();let e=null;return{getSelectedProjectTasks:function(){return n.getProjectTasks(e)},getProjects:function(){return n.getProjects()},getSelectedProject:function(){return e},setSelectedProject:function(n){e=n},createProject:function(e){n.addProject(e)},createTodo:function(t,o,r,a){const i=m(t,o,r,a);n.addTodoItem(e,i)},deleteProject:function(e){n.deleteProject(e)},deleteTodoItem:function(t){n.deleteProject(e,t)},editTodoItem:function(t,o,r,a,i){n.getTodoItem(e,i).editTodoItem(t,o,r,a)},getTodoItem:function(t){n.getTodoItem(e,t)}}}();!function(){const n=document.querySelector("main > div:first-child"),e=document.querySelector(".task-list"),t=n.querySelector("dialog"),o=e.querySelector("dialog"),r=n.querySelector(".project-div"),a=e.querySelector(".task-div"),i=(document.querySelector(".add .add-project").parentNode.parentNode,document.querySelector(".add .add-task").parentNode.parentNode,t.querySelector("input"));function c(n){const e=document.createElement("li"),t=document.createElement("button"),o=document.createElement("span"),r=document.createElement("span"),a=document.createTextNode(`${n}`);return t.classList.add("project"),o.classList.add("project"),e.appendChild(t),t.append(o,a,r),e}n.addEventListener("click",(n=>{"add add-project"===n.target.getAttribute("class")&&t.showModal(),"project"===n.target.getAttribute("class")&&(x.setSelectedProject(n.target.textContent),console.log(x.getSelectedProject()),(()=>{const n=x.getSelectedProjectTasks();a.textContent="",n.forEach((n=>{console.log(n),a.append(function(n){const e=n.getTodoItem(),t=document.createElement("li"),o=document.createElement("input");o.setAttribute("type","checkbox");const r=document.createElement("p");r.textContent=`${e.title}`;const a=document.createElement("button");a.textContent="Details";const i=document.createElement("p");i.textContent=`${e.dueDate}`;const c=document.createElement("span"),d=document.createElement("span");return t.append(o,r,a,i,c,d),t}(n))}))})()),"Cancel"===n.target.textContent&&t.close(),"Add"===n.target.textContent&&(x.createProject(i.value),i.value="",t.close(),(()=>{const n=x.getProjects();r.textContent="",console.log(n);for(const e in n)r.append(c(e))})()),console.log(n.target)})),e.addEventListener("click",(n=>{"add add-task"===n.target.getAttribute("class")&&o.showModal(),console.log(n.target),"Cancel"===n.target.textContent&&o.close()}))}()})()})();