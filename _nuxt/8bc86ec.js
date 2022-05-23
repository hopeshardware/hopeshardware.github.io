(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{230:function(t,e,o){var content=o(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("074af198",content,!0,{sourceMap:!1})},231:function(t,e,o){var content=o(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("25c6308a",content,!0,{sourceMap:!1})},240:function(t,e,o){var d;"undefined"!=typeof self&&self,t.exports=(d=o(1),function(t){var e={};function o(d){if(e[d])return e[d].exports;var i=e[d]={i:d,l:!1,exports:{}};return t[d].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,d){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:d})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var d=Object.create(null);if(o.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(d,i,function(e){return t[e]}.bind(null,i));return d},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s="wiAv")}({IFD9:function(t,e){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},g8md:function(t,e,o){"use strict";(function(t){e.a=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",d=null;"undefined"!=typeof window?d=window.Vue:void 0!==t&&(d=t.Vue),d&&("directive"===o?d.directive(e.name,e):d.use(e))}}).call(this,o("IFD9"))},"i7/w":function(t,e){t.exports=d},wiAv:function(t,e,o){"use strict";o.r(e),o.d(e,"useConfirm",(function(){return _}));var d=o("i7/w"),i=o.n(d),s=o("g8md"),a=["success","info","warn","warning","error","help"],n={defaults:{success:"check_circle",info:"error",error:"cancel",help:"help"},outlined:{success:"check_circle_outline",info:"error_outline",error:"highlight_off",help:"help_outline"}},c=function(t,e,o,d,i,s,a,n){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=o,l._compiled=!0),d&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):i&&(c=n?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var r=l.beforeCreate;l.beforeCreate=r?[].concat(r,c):[c]}return{exports:t,options:l}}({name:"MdcDialog",mixins:[{computed:{stateType:function(){var t=!1;if(a.includes(this.state))switch(this.state){case"success":t="success";break;case"info":case"help":t="info";break;case"warn":case"warning":t="warning";break;case"error":t="error"}return t},stateClassName:function(){var t=!1;return this.stateType&&(t="md-".concat(this.stateType,"-icon"),this.stateOutlined&&(t+="--outlined")),t},materialIcon:function(){var t=!1;if(a.includes(this.state)){var e=this.stateOutlined?"outlined":"defaults";t=["info","warn","warning"].includes(this.state)?n[e].info:n[e][this.state]}return t}}}],props:{open:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}}},data:function(){return{opening:!0,opened:!1,state:"",stateOutlined:!1}},computed:{className:function(){return["mdc-dialog",this.options.className,{"mdc-dialog--opening":this.opening,"mdc-dialog--open":this.opened}]}},watch:{open:function(t){var e=this;t&&setTimeout((function(){e.opened=!0,setTimeout((function(){e.opening=!1}),150)}),150)}},created:function(){this.options.state&&(this.state=this.options.state,this.stateOutlined=this.options.stateOutlined)}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.className},[o("div",{staticClass:"mdc-dialog__container"},[o("div",{staticClass:"mdc-dialog__surface"},[t.options.title?o("h2",{staticClass:"mdc-dialog__title"},[t._v("\n        "+t._s(t.options.title)+"\n      ")]):t._e(),t._v(" "),t.options.raw?o("div",{staticClass:"mdc-dialog__content",domProps:{innerHTML:t._s(t.options.message)}}):o("div",{staticClass:"mdc-dialog__content"},[t.materialIcon?o("i",{class:["material-icons mdc-alert-dialog__icon",t.stateClassName]},[t._v("\n          "+t._s(t.materialIcon)+"\n        ")]):t._e(),t._v(" "),o("span",{staticClass:"mdc-alert-dialog__message"},[t._v(t._s(t.options.message))])]),t._v(" "),o("footer",{staticClass:"mdc-dialog__actions"},[t._t("default")],2)])]),t._v(" "),o("div",{staticClass:"mdc-dialog__scrim"})])}),[],!1,null,null,null).exports,l=/(?:^\[object\s(.*?)\]$)/,u=function(t){return Object.prototype.toString.call(t).replace(l,"$1").toLowerCase()};function r(t,e){var o=Object.assign({},t);return"string"===u(e)?o.message="".concat(e):"object"===u(e)&&(o=Object.assign({},o,e)),o}var m={className:"",title:"",state:"",stateOutlined:!1,message:"",raw:!1,acceptText:"OK",cancelText:"Cancel",callback:!1},p=m;function f(t,e){new i.a({el:document.createElement("div"),name:"ConfirmDialog",components:{MdcDialog:c},data:function(){return{open:!1,options:t}},mounted:function(){var t;t=this.$el,document.body.appendChild(t),this.open=!0},methods:{handleClose:function(){var t;this.open=!1,t=this.$el,document.body.removeChild(t)},handleConfirm:function(t){this.handleClose(),"function"==typeof this.options.callback?this.options.callback(t):e(t)}},template:'<mdc-dialog class="mdc-confirm-dialog" :open="open" :options="options">\n  <button type="button"\n    class="mdc-button mdc-button--raised mdc-confirm-dialog__primary-button"\n    data-mdc-dialog-button-default\n    @click="handleConfirm(true)">\n    <span class="mdc-button__label">{{ options.acceptText }}</span>\n  </button>\n  <button type="button"\n    class="mdc-button mdc-button--outlined mdc-confirm-dialog__secondary-button"\n    @click="handleConfirm(false)">\n    <span class="mdc-button__label">{{ options.cancelText }}</span>\n  </button>\n</mdc-dialog>'})}function h(){var t=r(p,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return new Promise((function(e){f(t,e)}))}var v={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};p=Object.assign({},m,e),t.prototype.$confirm=h}},_=function(){return h};Object(s.a)(v),e.default=v}}))},241:function(t,e,o){"use strict";o(230)},242:function(t,e,o){var d=o(36)(!1);d.push([t.i,'.red[data-v-55f9f735]{color:red}.manage-container[data-v-55f9f735]{background:#fff}.add-btn[data-v-55f9f735]{font-size:16px;color:#1c6aa0;cursor:pointer;border:none}.add-btn[data-v-55f9f735]:before{content:"";display:inline-block;margin-right:5px;width:14px;height:14px;background:url(/img/icon-add.png);vertical-align:middle}.add-btn.disabled[data-v-55f9f735]{color:#999}h1[data-v-55f9f735]{margin-bottom:10px;line-height:60px;text-align:center;background:#0a7fb9;font-size:28px;font-weight:400;color:#fff}.delete-level[data-v-55f9f735]{margin-left:15px}.module1[data-v-55f9f735]{margin:0 auto 10px;padding:0 15px}.module1 .title[data-v-55f9f735]{position:relative;margin-bottom:10px;line-height:46px}.module1 h2[data-v-55f9f735]{display:inline-block;vertical-align:middle;font-size:18px;color:#363636}.module1 .add-btn[data-v-55f9f735]{position:absolute;right:0;top:0}.module1 .radios[data-v-55f9f735]{overflow:hidden}.module1 .radios .input-control[data-v-55f9f735]{float:left;font-size:14px;min-width:150px;margin-right:40px;margin-bottom:10px}.module1 .radios .radio-label[data-v-55f9f735]{font-weight:700;padding:0 5px}.module1 .radios label[data-v-55f9f735]{display:inline-block;text-transform:uppercase}.module1 .radios input[type=radio][data-v-55f9f735]{margin-right:10px}#level2-radios .input-control[data-v-55f9f735]{position:relative;margin-bottom:15px}#level2-radios .input-control .upload[data-v-55f9f735]{position:absolute;width:80px;opacity:0}#level2-radios .input-control img[data-v-55f9f735]{position:relative;margin-bottom:5px;width:80px;height:80px;border:1px solid #ccc}.items[data-v-55f9f735]{margin-left:-5px;font-size:0}.items .item[data-v-55f9f735]{display:inline-block;margin:0 10px 15px}.items .item .img[data-v-55f9f735]{margin-bottom:5px;width:155px;height:155px;border:1px solid #ccc}.items .item .img img[data-v-55f9f735]{display:block;width:155px;height:155px}.items .item .btns[data-v-55f9f735]{overflow:hidden}.items .item .btns div[data-v-55f9f735]{display:inline-block;font-size:14px;color:#1c6aa0;cursor:pointer}.items .item .btns div[data-v-55f9f735]:before{content:"";display:inline-block;margin-right:10px;width:18px;height:18px;vertical-align:middle}.items .item .btns .edit[data-v-55f9f735]{float:left}.items .item .btns .edit[data-v-55f9f735]:before{background:url(/img/icon-edit.jpg) no-repeat}.items .item .btns .delete[data-v-55f9f735]{float:right}.items .item .btns .delete[data-v-55f9f735]:before{background:url(/img/icon-delete.jpg) no-repeat}.detail-cover-bg[data-v-55f9f735]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);text-align:center}.detail-cover-bg[data-v-55f9f735]:before{content:"";height:100%}.detail-cover[data-v-55f9f735],.detail-cover-bg[data-v-55f9f735]:before{display:inline-block;vertical-align:middle}.detail-cover[data-v-55f9f735]{position:relative;box-sizing:border-box;padding:20px;width:80%;min-width:450px;max-width:768px;max-height:100vh;overflow:scroll;border-radius:5px;background:#fff}.detail-cover .icon-close[data-v-55f9f735]{position:absolute;top:13px;right:13px;width:18px;height:18px;background:url(/img/X.png);cursor:pointer}#detail-cover-body[data-v-55f9f735]{position:relative;max-height:80%;overflow:scroll;padding:5px 5px 80px}#detail-cover-body .edit-box[data-v-55f9f735]{margin-bottom:28px;text-align:left}#detail-cover-body .edit-box h3[data-v-55f9f735]{margin-bottom:15px;line-height:18px;font-size:14px;color:#363636}#detail-cover-body .edit-box input[data-v-55f9f735]{min-height:30px;line-height:30px;border-radius:3px;border:1px solid #e1e5f0;text-indent:10px;font-size:14px;color:#363636}#detail-cover-body .edit-box .title-box[data-v-55f9f735]{display:flex;font-size:14px;align-items:center}#detail-cover-body .edit-box .title-input[data-v-55f9f735]{margin-left:10px;flex-grow:1}#detail-cover-body .edit-box .add-btn[data-v-55f9f735]{font-size:14px}#detail-cover-body .edit-box .img-file[data-v-55f9f735]{margin-bottom:10px}#detail-cover-body .edit-box .img-file img[data-v-55f9f735]{margin-right:30px;width:156px;height:156px;vertical-align:middle;border-radius:3px;border:2px solid #e1e5f0}#detail-cover-body .edit-box .img-file .file-btn[data-v-55f9f735]{display:inline-block;width:100px;height:36px;line-height:34px;border-radius:3px;border:1px solid #1c6aa0;text-align:center;vertical-align:bottom;background:#fff;color:#1c6aa0;font-size:14px}#detail-cover-body .edit-box .img-file input[data-v-55f9f735]{opacity:0}#detail-cover-body .edit-box .inputs-box .title[data-v-55f9f735]{margin-bottom:5px;font-size:14px;color:#666;display:flex}#detail-cover-body .edit-box .inputs-box .title span[data-v-55f9f735]:first-child{margin-right:10px;flex:3}#detail-cover-body .edit-box .inputs-box .title span[data-v-55f9f735]:last-child{flex:7}#detail-cover-body .edit-box .input-group[data-v-55f9f735]{display:flex;margin-bottom:10px}#detail-cover-body .edit-box .input-group input[data-v-55f9f735]:nth-child(odd){margin-right:10px;flex:3}#detail-cover-body .edit-box .input-group input[data-v-55f9f735]:nth-child(2n){flex:7}#detail-cover-body .confirm-btn[data-v-55f9f735]{float:right;overflow:hidden;width:100px;height:35px;line-height:35px;border-radius:3px;background:#1c6aa0;font-size:14px;color:#fff;cursor:pointer}.submit-btn-box[data-v-55f9f735]{margin-bottom:50px;text-align:center}.submit-btn-box .submit-btn[data-v-55f9f735]{display:inline-block;width:150px;height:40px;line-height:40px;border-radius:5px;background:#1c6aa0;font-size:16px;color:#fff;cursor:pointer}.result-box[data-v-55f9f735]{overflow:auto;position:fixed;width:100vw;height:100vh;left:0;top:0;background:#fff;display:flex;font-size:16px}.result-box li[data-v-55f9f735]{width:50%}.result-box .x-button[data-v-55f9f735]{position:absolute;top:5px;right:5px;width:20px;cursor:default}',""]),t.exports=d},243:function(t,e,o){"use strict";o(231)},244:function(t,e,o){var d=o(36)(!1);d.push([t.i,'.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity,0);transition:opacity .28s cubic-bezier(.4,0,.2,1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color,#fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index,7)}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-dialog .mdc-dialog__scrim,.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-dialog .mdc-dialog__close:after,.mdc-dialog .mdc-dialog__close:before{background-color:#000;background-color:var(--mdc-ripple-color,var(--mdc-theme-on-surface,#000))}.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover:before,.mdc-dialog .mdc-dialog__close:hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity,.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused:before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity,.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity,.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity,0.12)}.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width:592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width:592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px);border-radius:4px;border-radius:var(--mdc-shape-medium,4px)}@media(max-width:960px)and (max-height:1440px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;max-width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width:720px)and (max-height:1023px)and (max-width:672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:calc(100vw - 112px)}}@media(max-width:720px)and (max-height:1023px)and (min-width:672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:560px}}@media(max-width:720px)and (max-height:1023px)and (max-height:720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width:720px)and (max-height:1023px)and (min-height:720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width:720px)and (max-height:1023px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width:720px)and (max-height:400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:100vw;width:100vw;max-height:100vh;height:100vh;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:-8px}}@media(max-width:600px)and (max-height:960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:100vw;width:100vw;max-height:100vh;height:100vh;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:-8px}}@media(min-width:960px)and (min-height:1440px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog__surface[dir=rtl],[dir=rtl] .mdc-dialog__surface{text-align:right}@media screen and (-ms-high-contrast:active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.mdc-dialog__surface:before{content:none}}.mdc-dialog__title{display:block;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size,1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height,2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight,500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing,.0125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-headline6-text-decoration,inherit);text-decoration:var(--mdc-typography-headline6-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform,inherit);position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title:before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog__title[dir=rtl],[dir=rtl] .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{display:inline-flex;padding:0 24px 9px;border-bottom:1px solid transparent;justify-content:space-between;align-items:baseline}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body1-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size,1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height,1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight,400);letter-spacing:.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing,.03125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body1-text-decoration,inherit);text-decoration:var(--mdc-typography-body1-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform,inherit);flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__header+.mdc-dialog__content,.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}.mdc-dialog__button[dir=rtl],[dir=rtl] .mdc-dialog__button{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl],[dir=rtl] .mdc-dialog__button:first-child{margin-left:0;margin-right:0}.mdc-dialog__button[dir=rtl],[dir=rtl] .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--closing,.mdc-dialog--open,.mdc-dialog--opening{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity .15s linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform .15s cubic-bezier(0,0,.2,1) 0ms}.mdc-dialog--closing .mdc-dialog__container,.mdc-dialog--closing .mdc-dialog__scrim{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity .15s linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog__title--closable{position:relative}.mdc-dialog__title--closable .mdc-icon-button{position:absolute;top:0;right:0;width:36px;height:36px;padding:9px;font-size:18px}.mdc-dialog__content .mdc-select__menu .mdc-deprecated-list:first-child:last-child{padding:8px 0}.mdc-confirm-dialog .mdc-dialog__surface{width:450px}.mdc-confirm-dialog .mdc-dialog__content{display:flex}.mdc-confirm-dialog .mdc-confirm-dialog__icon{margin-right:8px}.mdc-confirm-dialog .mdc-dialog__actions{justify-content:center}.mdc-confirm-dialog .mdc-button{margin:0 8px}',""]),t.exports=d},265:function(t,e,o){"use strict";o.r(e);o(82),o(24),o(47),o(61),o(160),o(159),o(48),o(39);var d=o(240),n=o.n(d),c=o(223),l=o(224),r={data:function(){return{data:c,products:l,cate1Obj:{class:"primary",name:"name",children:[]},level2Obj:{class:"secondary",name:"name",img:"img/default.jpg",children:[]},level3Obj:{class:"third",name:"name",children:[]},itemObj:{class:"last",img:"",title:"",detail:[{img:"",txt:[{}]}]},selectedCates:[0,0,0],disableCate3:!1,editDialogShow:!1,currentItem:{},resultShow:!1}},created:function(){this.__proto__.constructor.use(n.a,{})},computed:{cate2Data:function(){return this.data[this.selectedCates[0]].children},cate3Data:function(){var data=this.cate2Data[this.selectedCates[1]].children;return data[0]&&"third"!==data[0].class?(this.disableCate3=!0,[]):(this.disableCate3=!1,data)},itemData:function(){return this.cate3Data.length?this.cate3Data[this.selectedCates[2]].children:this.cate2Data[this.selectedCates[1]].children},cateDir:function(){return"".concat(this.data[this.selectedCates[0]].name,"/").concat(this.cate2Data[this.selectedCates[1]].name,"/").concat(this.cate3Data.length?this.cate3Data[this.selectedCates[2]].name+"/":"").toLowerCase().replace(/\s/g,"-")}},watch:{data:{handler:function(){var t=this;this.$nextTick((function(){t.data.length&&t.orderItem(t.$refs["cate1-input-control"],t.data)}))}},cate2Data:{handler:function(){var t=this;this.$nextTick((function(){t.cate2Data.length&&t.orderItem(t.$refs["cate2-input-control"],t.cate2Data)}))}},cate3Data:{handler:function(){var t=this;this.$nextTick((function(){t.cate3Data.length&&t.orderItem(t.$refs["cate3-input-control"],t.cate3Data)}))}},itemData:{handler:function(){var t=this;this.$nextTick((function(){t.itemData.length&&t.orderItem(t.$refs["item-input-control"],t.itemData)}))}}},mounted:function(){this.data.length&&this.orderItem(this.$refs["cate1-input-control"],this.data),this.cate2Data.length&&this.orderItem(this.$refs["cate2-input-control"],this.cate2Data),this.cate3Data.length&&this.orderItem(this.$refs["cate3-input-control"],this.cate3Data),this.itemData.length&&this.orderItem(this.$refs["item-input-control"],this.itemData)},methods:{editItem:function(data){data.id?this.currentItem=JSON.parse(JSON.stringify(data)):this.currentItem=data,this.editDialogShow=!0},confirmEditItem:function(){var data=JSON.parse(JSON.stringify(this.currentItem));data.id||(data.id=this.itemData.length);var t=this.itemData[data.id]||"".concat(data.id,"\n            -").concat(this.cateDir.replace(/[\/]/g,"-"),"\n            -").concat(data.title.replace(/[\/|\s]/g,"-"));this.itemData.splice(data.id,1,t),this.products[t]=data},setImg:function(t,data){var e=t.target.value.split("\\fakepath\\")[1];if(data.detail){var img="/img/"+this.cateDir+e;data.img=img,data.detail[0].img=img}else data.img="/img/cover/"+e},saveName:function(t,data){data.name=t.target.innerText},editName:function(t){t.target.setAttribute("contenteditable","true"),t.target.focus()},deleteItem:function(data,t,e){var o=this;this.$confirm({message:"确认删除？",callback:function(d){d&&(o.selectedCates=e,data.splice(t,1))}})},deleteProduct:function(data,t,e){var o=this;this.$confirm({message:"确认删除？",callback:function(d){d&&(delete o.products[e],data.splice(t,1))}})},addItem:function(data,t){var e=Object.assign({id:data.length},t);e=JSON.parse(JSON.stringify(e)),data.push(e)},orderItem:function(t,data){(t=Array.prototype.slice.call(t)).map((function(e){e.ondragstart=function(e){var o=t.indexOf(this)-0;e.dataTransfer.setData("id",o)},e.ondragover=function(t){t.preventDefault()},e.ondrop=function(e){var o,d,n;e.preventDefault();var c=t.indexOf(this)-0;console.log(c);var r=e.dataTransfer.getData("id")-0;"string"==typeof data[r]?l[data[r]].id=c:data[r].id=c;var m=data.splice(r,1);data.splice(c,0,m[0]),r>c?(d=r,o=c+1,n=1):(d=c-1,o=r,n=-1);for(var i=o;i<=d;i++)"string"==typeof data[r]?l[data[i]].id+=n:data[i].id+=n}}))}}},m=(o(241),o(243),o(38)),component=Object(m.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"manage-container"},[o("h1",[t._v("产品管理")]),t._v(" "),o("div",{staticClass:"module1"},[o("div",{staticClass:"title"},[o("h2",[t._v("一级分类(可拖拽排序)")]),t._v(" "),o("div",{staticClass:"add-btn add-btn1",attrs:{"data-id":"0"},on:{click:function(e){return t.addItem(t.data,t.cate1Obj)}}},[t._v("添加分类")])]),t._v(" "),o("div",{staticClass:"radios list",attrs:{id:"cate1-radios","data-level":"0"}},t._l(t.data,(function(e,d){return o("div",{key:d,ref:"cate1-input-control",refInFor:!0,staticClass:"input-control",attrs:{draggable:"true"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCates[0],expression:"selectedCates[0]"}],attrs:{type:"radio",name:"cate1",id:"cate1-option"+e.id},domProps:{value:d,checked:t._q(t.selectedCates[0],d)},on:{change:[function(e){return t.$set(t.selectedCates,0,d)},function(e){t.selectedCates=[d,0,0]}]}}),t._v(" "),o("label",{class:["radio-label",e.name?"":"red"],attrs:{for:"cate1-option"+e.id},on:{dblclick:function(e){return t.editName(e)},blur:function(o){return t.saveName(o,e)}}},[t._v(t._s(e.name||"XXX"))]),t._v(" "),o("br"),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.hidden,expression:"ele.hidden"}],attrs:{type:"checkbox",id:"cate1-hidden"+e.id,"data-hidden":e.hidden},domProps:{value:e.id,checked:Array.isArray(e.hidden)?t._i(e.hidden,e.id)>-1:e.hidden},on:{change:function(o){var d=e.hidden,n=o.target,c=!!n.checked;if(Array.isArray(d)){var l=e.id,r=t._i(d,l);n.checked?r<0&&t.$set(e,"hidden",d.concat([l])):r>-1&&t.$set(e,"hidden",d.slice(0,r).concat(d.slice(r+1)))}else t.$set(e,"hidden",c)}}}),t._v(" "),o("label",{attrs:{for:"cate1-hidden"+e.id}},[t._v("隐藏")]),t._v(" "),o("span",{staticClass:"delete-level",on:{click:function(e){return t.deleteItem(t.data,d,[0,0,0])}}},[t._v("删除")])])})),0)]),t._v(" "),o("div",{staticClass:"module1 level2"},[o("div",{staticClass:"title"},[o("h2",[t._v("二级分类(可拖拽排序)")]),t._v(" "),o("div",{staticClass:"add-btn add-btn1",attrs:{"data-id":"1"},on:{click:function(e){return t.addItem(t.cate2Data,t.cate2Obj)}}},[t._v("添加分类")])]),t._v(" "),o("div",{staticClass:"radios list",attrs:{id:"level2-radios","data-level":"1"}},t._l(t.cate2Data,(function(e,d){return o("div",{key:d,ref:"cate2-input-control",refInFor:!0,staticClass:"input-control",attrs:{draggable:"true"}},[o("input",{staticClass:"upload",attrs:{type:"file",id:"upload"+e.id},on:{change:function(o){return t.setImg(o,e)}}}),t._v(" "),o("label",{attrs:{for:"upload"+e.id}},[o("img",{attrs:{src:e.img}})]),t._v(" "),o("br"),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCates[1],expression:"selectedCates[1]"}],attrs:{type:"radio",name:"level2",id:"level2-option"+e.id},domProps:{value:d,checked:t._q(t.selectedCates[1],d)},on:{change:[function(e){return t.$set(t.selectedCates,1,d)},function(e){t.selectedCates[2]=0}]}}),t._v(" "),o("label",{class:["radio-label",e.name?"":"red"],attrs:{for:"level2-option"+e.id},on:{dblclick:function(e){return t.editName(e)},blur:function(o){return t.saveName(o,e)}}},[t._v(t._s(e.name||"XXX"))]),t._v(" "),o("br"),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.hidden,expression:"ele.hidden"}],attrs:{type:"checkbox",id:"level2-hidden"+e.id,"data-hidden":e.hidden},domProps:{checked:Array.isArray(e.hidden)?t._i(e.hidden,null)>-1:e.hidden},on:{change:function(o){var d=e.hidden,n=o.target,c=!!n.checked;if(Array.isArray(d)){var l=t._i(d,null);n.checked?l<0&&t.$set(e,"hidden",d.concat([null])):l>-1&&t.$set(e,"hidden",d.slice(0,l).concat(d.slice(l+1)))}else t.$set(e,"hidden",c)}}}),t._v(" "),o("label",{attrs:{for:"level2-hidden"+e.id}},[t._v("隐藏")]),t._v(" "),o("span",{staticClass:"delete-level",on:{click:function(e){return t.deleteItem(t.cate2Data,d,[t.selectedCates[0],0,0])}}},[t._v("删除")])])})),0)]),t._v(" "),o("div",{staticClass:"module1 level3"},[o("div",{staticClass:"title"},[o("h2",[t._v("三级分类(可拖拽排序)")]),t._v(" "),o("button",{class:["add-btn","add-btn1",t.disableCate3?"disabled":""],attrs:{disabled:t.disableCate3},on:{click:function(e){return t.addItem(t.cate3Data,t.cate3Obj)}}},[t._v("添加分类")])]),t._v(" "),o("div",{staticClass:"radios list",attrs:{id:"level3-radios","data-level":"2"}},t._l(t.cate3Data,(function(e,d){return o("div",{key:d,ref:"cate3-input-control",refInFor:!0,staticClass:"input-control",attrs:{draggable:"true"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCates[2],expression:"selectedCates[2]"}],attrs:{type:"radio",name:"level3",id:"level3-option"+e.id},domProps:{value:d,checked:t._q(t.selectedCates[2],d)},on:{change:function(e){return t.$set(t.selectedCates,2,d)}}}),t._v(" "),o("label",{class:["radio-label",e.name?"":"red"],attrs:{for:"level3-option"+e.id},on:{dblclick:function(e){return t.editName(e)},blur:function(o){return t.saveName(o,e)}}},[t._v(t._s(e.name||"XXX"))]),t._v(" "),o("br"),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.hidden,expression:"ele.hidden"}],attrs:{type:"checkbox",id:"level3-hidden"+e.id,"data-hidden":e.hidden},domProps:{value:e.id,checked:Array.isArray(e.hidden)?t._i(e.hidden,e.id)>-1:e.hidden},on:{change:function(o){var d=e.hidden,n=o.target,c=!!n.checked;if(Array.isArray(d)){var l=e.id,r=t._i(d,l);n.checked?r<0&&t.$set(e,"hidden",d.concat([l])):r>-1&&t.$set(e,"hidden",d.slice(0,r).concat(d.slice(r+1)))}else t.$set(e,"hidden",c)}}}),t._v(" "),o("label",{attrs:{for:"level3-hidden"+e.id}},[t._v("隐藏")]),t._v(" "),o("span",{staticClass:"delete-level",on:{click:function(e){return t.deleteItem(t.cate3Data,d,[t.selectedCates[0],t.selectedCates[1],0])}}},[t._v("删除")])])})),0)]),t._v(" "),o("div",{staticClass:"module1"},[o("div",{staticClass:"title"},[o("h2",[t._v("编辑产品(可拖动排序)")]),t._v(" "),o("div",{staticClass:"add-btn",attrs:{id:"add-item","data-id":"3"},on:{click:function(e){return t.editItem(t.itemObj)}}},[t._v("添加产品")])]),t._v(" "),o("div",{staticClass:"items",attrs:{id:"items"}},t._l(t.itemData,(function(e,d){return o("div",{key:d,ref:"item-input-control",refInFor:!0,staticClass:"item",attrs:{draggable:"true"}},[o("div",{staticClass:"img"},[o("img",{attrs:{src:t.products[e].img}})]),t._v(" "),o("div",{staticClass:"btns"},[o("div",{staticClass:"edit",on:{click:function(o){return t.editItem(t.products[e])}}},[t._v("编辑")]),t._v(" "),o("div",{staticClass:"delete",on:{click:function(o){return t.deleteProduct(t.itemData,d,e)}}},[t._v("删除")])])])})),0)]),t._v(" "),t.editDialogShow?o("div",{staticClass:"detail-cover-bg"},[o("div",{staticClass:"detail-cover"},[o("div",{attrs:{id:"detail-cover-body"}},[o("div",{staticClass:"edit-box"},[o("h3",[t._v("编辑图片和标题")]),t._v(" "),o("h3",[t._v("图片需放至："+t._s(t.cateDir))]),t._v(" "),o("div",{staticClass:"img-file"},[o("img",{attrs:{src:t.currentItem.img||"/img/default.jpg"}}),t._v(" "),o("label",{staticClass:"file-btn",attrs:{for:"upload-file"}},[t._v("选择图片")]),t._v(" "),o("input",{attrs:{type:"file",name:"file",id:"upload-file",accept:"image/png, image/jpeg, image/gif, image/jpg"},on:{change:function(e){return t.setImg(e,t.currentItem)}}})]),t._v(" "),o("div",{staticClass:"title-box"},[t._v("\n              标题\n              "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentItem.title,expression:"currentItem.title"}],staticClass:"title-input",attrs:{id:"title",placeholder:"标题"},domProps:{value:t.currentItem.title},on:{input:function(e){e.target.composing||t.$set(t.currentItem,"title",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"edit-box"},[o("h3",[t._v("编辑详情")]),t._v(" "),o("div",{staticClass:"inputs-box"},[t._m(0),t._v(" "),t._l(t.currentItem.detail[0].txt,(function(e,d){return o("div",{key:d,staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"ele.key"}],attrs:{placeholder:"属性"},domProps:{value:e.key},on:{input:function(o){o.target.composing||t.$set(e,"key",o.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"ele.value"}],attrs:{placeholder:"值"},domProps:{value:e.value},on:{input:function(o){o.target.composing||t.$set(e,"value",o.target.value)}}})])}))],2),t._v(" "),o("div",{staticClass:"add-btn",on:{click:function(e){return t.currentItem.detail[0].txt.push({})}}},[t._v("添加属性")])]),t._v(" "),o("div",{staticClass:"confirm-btn",on:{click:function(e){t.confirmEditItem(),t.editDialogShow=!1}}},[t._v("确定")])]),t._v(" "),o("span",{staticClass:"icon-close",on:{click:function(e){t.editDialogShow=!1}}})])]):t._e(),t._v(" "),o("div",{staticClass:"submit-btn-box"},[o("span",{staticClass:"submit-btn",on:{click:function(e){t.resultShow=!0}}},[t._v("提交")])]),t._v(" "),t.resultShow?o("ul",{staticClass:"result-box"},[o("li",{staticClass:"x-button",on:{click:function(e){t.resultShow=!1}}},[t._v("X")]),t._v(" "),o("li",[o("div",{staticClass:"red"},[t._v("data.json")]),t._v(" "),o("div",[t._v(t._s(JSON.stringify(t.data)))])]),t._v(" "),o("li",[o("div",{staticClass:"red"},[t._v("products.json")]),t._v(" "),o("div",[t._v(t._s(JSON.stringify(t.products)))])])]):t._e()])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title"},[o("span",[t._v("属性")]),t._v(" "),o("span",[t._v("值")])])}],!1,null,"55f9f735",null);e.default=component.exports}}]);