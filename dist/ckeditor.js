/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports.CKEditor=e(require("vue")):t.CKEditor=e(t.Vue)}(window,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(e,n){e.exports=t},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var o=n(0);var i=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},r=n(1),u="object"==typeof self&&self&&self.Object===Object&&self,a=r.a||u||Function("return this")(),c=function(){return a.Date.now()},s=a.Symbol,l=Object.prototype,f=l.hasOwnProperty,d=l.toString,p=s?s.toStringTag:void 0;var v=function(t){var e=f.call(t,p),n=t[p];try{t[p]=void 0;var o=!0}catch(t){}var i=d.call(t);return o&&(e?t[p]=n:delete t[p]),i},m=Object.prototype.toString;var h=function(t){return m.call(t)},y=s?s.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?v(t):h(t)};var g=function(t){return null!=t&&"object"==typeof t};var j=function(t){return"symbol"==typeof t||g(t)&&"[object Symbol]"==b(t)},$=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,w=/^0o[0-7]+$/i,x=parseInt;var S=function(t){if("number"==typeof t)return t;if(j(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace($,"");var n=_.test(t);return n||w.test(t)?x(t.slice(2),n?2:8):O.test(t)?NaN:+t},E=Math.max,T=Math.min;var V=function(t,e,n){var o,r,u,a,s,l,f=0,d=!1,p=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=o,i=r;return o=r=void 0,f=e,a=t.apply(i,n)}function h(t){return f=t,s=setTimeout(b,e),d?m(t):a}function y(t){var n=t-l;return void 0===l||n>=e||n<0||p&&t-f>=u}function b(){var t=c();if(y(t))return g(t);s=setTimeout(b,function(t){var n=e-(t-l);return p?T(n,u-(t-f)):n}(t))}function g(t){return s=void 0,v&&o?m(t):(o=r=void 0,a)}function j(){var t=c(),n=y(t);if(o=arguments,r=this,l=t,n){if(void 0===s)return h(l);if(p)return clearTimeout(s),s=setTimeout(b,e),m(l)}return void 0===s&&(s=setTimeout(b,e)),a}return e=S(e)||0,i(n)&&(d=!!n.leading,u=(p="maxWait"in n)?E(S(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==s&&clearTimeout(s),f=0,o=l=r=s=void 0},j.flush=function(){return void 0===s?a:g(c())},j};var D={name:"ckeditor",render(){return Object(o.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({$_instance:null,$_lastEditorData:{type:String,default:""}}),mounted(){const t=Object.assign({},this.config);this.modelValue&&(t.initialData=this.modelValue),this.editor.create(this.$el,t).then(t=>{this.$_instance=t,t.isReadOnly=this.disabled,this.$_setUpEditorEvents(),this.$emit("ready",t)}).catch(t=>{console.error(t)})},beforeUnmount(){this.$_instance&&(this.$_instance.destroy(),this.$_instance=null),this.$emit("destroy",this.$_instance)},watch:{modelValue(t,e){t!==e&&t!==this.$_lastEditorData&&this.$_instance.setData(t)},disabled(t){this.$_instance.isReadOnly=t}},methods:{$_setUpEditorEvents(){const t=this.$_instance,e=V(e=>{const n=this.$_lastEditorData=t.getData();this.$emit("update:modelValue",n,e,t),this.$emit("input",n,e,t)},300,{leading:!0});t.model.document.on("change:data",e),t.editing.view.document.on("focus",e=>{this.$emit("focus",e,t)}),t.editing.view.document.on("blur",e=>{this.$emit("blur",e,t)})}}};const[N]=o.version.split(".").map(t=>parseInt(t,10));if(N<3)throw Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const k={install(t){t.component("ckeditor",D)},component:D};e.default=k}]).default}));
//# sourceMappingURL=ckeditor.js.map