(()=>{"use strict";var t={91:t=>{t.exports=function(t,r){return r||(r={}),t?(t=String(t.__esModule?t.default:t),r.hash&&(t+=r.hash),r.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},606:(t,r,e)=>{t.exports=e.p+"img/3a24d1c2d9b22774331d.ico"}},r={};function e(n){var i=r[n];if(void 0!==i)return i.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.m=t,e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,(()=>{var t=e(91),r=e.n(t),n=new URL(e(606),e.b);function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function a(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function o(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,r,e){return r&&o(t.prototype,r),e&&o(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}r()(n);var c=function(){function t(){a(this,t),this.container=null,this.form=null,this.formInput=null,this.formButton=null,this.cards=null,this.rules={mastercard:/^5[1-5]?(\d+)?$/,visa:/^4[0-9]?(\d+)?$/,maestro:/^(5018|5020|5038|5893|6304|6759|6761|6762|6763)[0-9]?(\d+)?$/,amex:/(^30[0-5][0-9]?(\d+)?$)|(^(36|38)[0-9]?(\d+)?$)/,jcb:/^(?:2131|1800|35(\d+)?)$/,discover:/^65[4-9][0-9]?(\d+)?|64[4-9][0-9]?(\d+)?|6011[0-9]?(\d+)?|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]?(\d+)?)$/,mir:/^(?:220[0-4])(\d+)?$/},this.inputListeners=[],this.clickListeners=[]}return s(t,[{key:"bindToDOM",value:function(t){var r=this;if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t,this.form=this.container.querySelector("#cardsValidationForm"),this.formInput=this.container.querySelector("#card_number"),this.formButton=this.container.querySelector("#submitform"),this.cards=Array.from(this.container.querySelector(".cards").children),this.formInput.addEventListener("input",(function(t){return r.onInput(t)})),this.formButton.addEventListener("click",(function(t){return r.onClick(t)}))}},{key:"checkBinding",value:function(){if(null===this.container)throw new Error("CardsValidator not bind to DOM")}},{key:"luhnAlgorithm",value:function(t){if(t.length>7&&t.length<20){var r=0,e=String(t).replace(/\D/g,""),n=e.length%2!=0;if(""===e)return!1;for(var i=0;i<e.length;i+=1){var a=parseInt(e[i],10);r+=(0|n)==i%2&&(a*=2)>9?a-9:a}return r%10==0}return!1}},{key:"checkInputNumbers",value:function(t){return!!t.match(/^\d+$/gm)}},{key:"paymentSystemCheck",value:function(t){if(this.checkInputNumbers(t))for(var r=0,e=Object.entries(this.rules);r<e.length;r++){var n=(s=e[r],c=2,function(t){if(Array.isArray(t))return t}(s)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,i,a=[],o=!0,s=!1;try{for(e=e.call(t);!(o=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);o=!0);}catch(t){s=!0,i=t}finally{try{o||null==e.return||e.return()}finally{if(s)throw i}}return a}}(s,c)||function(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}(s,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],o=n[1];if(t.match(o))return a}var s,c;return!1}},{key:"addInputListener",value:function(t){this.inputListeners.push(t)}},{key:"onInput",value:function(t){var r=this.formInput.value;this.inputListeners.forEach((function(t){return t.call(null,r)}))}},{key:"addClickListener",value:function(t){this.clickListeners.push(t)}},{key:"onClick",value:function(t){t.preventDefault();var r=this.formInput.value;this.clickListeners.forEach((function(t){return t.call(null,r)}))}}]),t}(),l=function(){function t(r){a(this,t),this.cardsValidator=r,this.cards=this.cardsValidator.cards}return s(t,[{key:"init",value:function(){this.cardsValidator.checkBinding(),this.cardsValidator.addInputListener(this.validateCard.bind(this)),this.cardsValidator.addClickListener(this.validateCard.bind(this))}},{key:"validateCard",value:function(t){this.disableActiveCards();var r=this.cardsValidator.paymentSystemCheck(t);r&&this.cardsValidator.container.querySelector(".".concat(r)).classList.add("active"),this.cardsValidator.luhnAlgorithm(t)?this.cardsValidator.form.classList.add("valid"):this.cardsValidator.form.classList.add("invalid")}},{key:"disableActiveCards",value:function(){this.cardsValidator.form.classList.remove("valid"),this.cardsValidator.form.classList.remove("invalid"),this.cards.forEach((function(t){return t.classList.remove("active")}))}}]),t}(),u=new c;u.bindToDOM(document.querySelector("#cards-container")),new l(u).init()})()})();
//# sourceMappingURL=app.js.map