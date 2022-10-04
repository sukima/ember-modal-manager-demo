"use strict"
define("ember-modal-manager-demo/app",["exports","@ember/application","ember-resolver","ember-load-initializers","ember-modal-manager-demo/config/environment"],(function(e,t,n,r,a){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends t.default{constructor(){super(...arguments),i(this,"modulePrefix",a.default.modulePrefix),i(this,"podModulePrefix",a.default.podModulePrefix),i(this,"Resolver",n.default)}}e.default=o,(0,r.default)(o,a.default.modulePrefix)})),define("ember-modal-manager-demo/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-modal-manager-demo/components/modal/index",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service"],(function(e,t,n,r,a){var i,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,n.createTemplateFactory)({id:"940p3Gel",block:'[[[40,[[[1,"  "],[11,"dialog"],[17,1],[4,[38,2],null,null],[4,[38,3],["cancel",[30,2,["cancel"]]],null],[4,[38,3],["click",[30,2,["cancel"]]],null],[12],[1,"\\n    "],[10,0],[12],[18,3,[[30,2]]],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],"%cursor:0%",[28,[37,1],[[30,0,["modalPortalMediator","portalTarget"]]],null]]],["&attrs","@manager","&default"],false,["in-element","-in-el-null","show-modal","on","yield"]]',moduleName:"ember-modal-manager-demo/components/modal/index.hbs",isStrictMode:!1})
let d=(i=class extends r.default{constructor(){var e,t,n,r
super(...arguments),e=this,t="modalPortalMediator",r=this,(n=o)&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},u=i.prototype,m="modalPortalMediator",c=[a.inject],s={configurable:!0,enumerable:!0,writable:!0,initializer:null},p={},Object.keys(s).forEach((function(e){p[e]=s[e]})),p.enumerable=!!p.enumerable,p.configurable=!!p.configurable,("value"in p||p.initializer)&&(p.writable=!0),p=c.slice().reverse().reduce((function(e,t){return t(u,m,e)||e}),p),f&&void 0!==p.initializer&&(p.value=p.initializer?p.initializer.call(f):void 0,p.initializer=void 0),void 0===p.initializer&&(Object.defineProperty(u,m,p),p=null),o=p,i)
var u,m,c,s,f,p
e.default=d,(0,t.setComponentTemplate)(l,d)})),define("ember-modal-manager-demo/components/modal/portal-target/index",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","ember-modifier"],(function(e,t,n,r,a,i){var o,l
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const d=(0,n.createTemplateFactory)({id:"HCW6RVpI",block:'[[[11,0],[17,1],[4,[30,0,["registerPortal"]],null,null],[12],[13],[1,"\\n"]],["&attrs"],false,[]]',moduleName:"ember-modal-manager-demo/components/modal/portal-target/index.hbs",isStrictMode:!1})
let u=(o=class extends r.default{constructor(){var e,t,n,r,a,o,d
super(...arguments),e=this,t="modalPortalMediator",r=this,(n=l)&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0}),a=this,o="registerPortal",d=(0,i.modifier)((e=>(this.modalPortalMediator.registerPortal(e),()=>this.modalPortalMediator.unregisterPortal()))),o in a?Object.defineProperty(a,o,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[o]=d}},m=o.prototype,c="modalPortalMediator",s=[a.inject],f={configurable:!0,enumerable:!0,writable:!0,initializer:null},b={},Object.keys(f).forEach((function(e){b[e]=f[e]})),b.enumerable=!!b.enumerable,b.configurable=!!b.configurable,("value"in b||b.initializer)&&(b.writable=!0),b=s.slice().reverse().reduce((function(e,t){return t(m,c,e)||e}),b),p&&void 0!==b.initializer&&(b.value=b.initializer?b.initializer.call(p):void 0,b.initializer=void 0),void 0===b.initializer&&(Object.defineProperty(m,c,b),b=null),l=b,o)
var m,c,s,f,p,b
e.default=u,(0,t.setComponentTemplate)(d,u)})),define("ember-modal-manager-demo/components/modals/confirm-example/index",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const a=(0,n.createTemplateFactory)({id:"VRF+YZwm",block:'[[[8,[39,0],null,[["@manager"],[[30,1]]],[["default"],[[[[1,"\\n"],[1,"\\n  "],[10,"header"],[12],[1,"\\n    "],[10,"h1"],[12],[1,"Example Yes/No Dialog"],[13],[1,"\\n    "],[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,1,["cancel"]]],null],[12],[1,"✗"],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"article"],[12],[1,"\\n    "],[10,2],[12],[1,"Do you like "],[10,"strong"],[12],[1,"pancakes"],[13],[1,"?"],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"footer"],[12],[1,"\\n    "],[11,"button"],[24,0,"danger"],[24,4,"button"],[4,[38,1],["click",[28,[37,2],[[30,1,["reject"]],"I do not like pancakes."],null]],null],[12],[1,"\\n      No\\n    "],[13],[1,"\\n    "],[11,"button"],[24,0,"primary"],[24,"autofocus",""],[24,4,"button"],[4,[38,1],["click",[28,[37,2],[[30,1,["confirm"]],"I love pancakes."],null]],null],[12],[1,"\\n      Yes\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]]]]],[1,"\\n"]],["@manager"],false,["modal","on","fn"]]',moduleName:"ember-modal-manager-demo/components/modals/confirm-example/index.hbs",isStrictMode:!1})
var i=(0,t.setComponentTemplate)(a,(0,r.default)())
e.default=i})),define("ember-modal-manager-demo/components/modals/form-example/index",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object"],(function(e,t,n,r,a){var i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const o=(0,n.createTemplateFactory)({id:"DAqGWBF1",block:'[[[8,[39,0],null,[["@manager"],[[30,1]]],[["default"],[[[[1,"\\n"],[1,"\\n"],[44,[[28,[37,2],null,null]],[[[1,"    "],[10,"header"],[12],[1,"\\n      "],[10,"h1"],[12],[1,"Example Form Modal Dialog"],[13],[1,"\\n      "],[11,"button"],[24,4,"button"],[4,[38,3],["click",[30,1,["cancel"]]],null],[12],[1,"✗"],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,"article"],[12],[1,"\\n      "],[11,"form"],[16,1,[30,2]],[24,"method","dialog"],[4,[38,3],["submit",[30,0,["confirmFormData"]]],null],[12],[1,"\\n"],[44,[[28,[37,2],null,null]],[[[1,"          "],[10,"label"],[15,"for",[30,3]],[12],[1,"First name:"],[13],[1,"\\n          "],[10,"input"],[15,1,[30,3]],[14,3,"first-name"],[14,"required",""],[14,"autofocus",""],[12],[13],[1,"\\n"]],[3]]],[1,"\\n"],[44,[[28,[37,2],null,null]],[[[1,"          "],[10,"label"],[15,"for",[30,4]],[12],[1,"Last name:"],[13],[1,"\\n          "],[10,"input"],[15,1,[30,4]],[14,3,"last-name"],[14,"required",""],[12],[13],[1,"\\n"]],[4]]],[1,"      "],[13],[1,"\\n\\n      "],[10,2],[12],[10,"em"],[12],[1,"Data is client side only."],[13],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,"footer"],[12],[1,"\\n      "],[11,"button"],[24,4,"button"],[4,[38,3],["click",[30,1,["cancel"]]],null],[12],[1,"\\n        Cancel\\n      "],[13],[1,"\\n      "],[10,"button"],[14,0,"primary"],[15,"form",[30,2]],[14,4,"submit"],[12],[1,"\\n        Confirm\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[2]]]],[]]]]],[1,"\\n"]],["@manager","formId","id","id"],false,["modal","let","unique-id","on"]]',moduleName:"ember-modal-manager-demo/components/modals/form-example/index.hbs",isStrictMode:!1})
let l=(i=class extends r.default{confirmFormData(e){let t=e.target
this.args.manager.confirm(new FormData(t))}},d=i.prototype,u="confirmFormData",m=[a.action],c=Object.getOwnPropertyDescriptor(i.prototype,"confirmFormData"),s=i.prototype,f={},Object.keys(c).forEach((function(e){f[e]=c[e]})),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=m.slice().reverse().reduce((function(e,t){return t(d,u,e)||e}),f),s&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(s):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(d,u,f),f=null),i)
var d,u,m,c,s,f
e.default=l,(0,t.setComponentTemplate)(o,l)})),define("ember-modal-manager-demo/components/modals/simple-example/index",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const a=(0,n.createTemplateFactory)({id:"88j2Jj9T",block:'[[[8,[39,0],null,[["@manager"],[[30,1]]],[["default"],[[[[1,"\\n"],[1,"\\n  "],[10,"header"],[12],[1,"\\n    "],[10,"h1"],[12],[1,"Example Modal Dialog"],[13],[1,"\\n    "],[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,1,["cancel"]]],null],[12],[1,"✗"],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"article"],[12],[1,"\\n    "],[10,2],[12],[1,"This is an example modal dialog box."],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"footer"],[12],[1,"\\n    "],[11,"button"],[24,"autofocus",""],[24,4,"button"],[4,[38,1],["click",[30,1,["cancel"]]],null],[12],[1,"\\n      Cancel\\n    "],[13],[1,"\\n    "],[11,"button"],[24,0,"primary"],[24,4,"button"],[4,[38,1],["click",[28,[37,2],[[30,1,["confirm"]],"foobar"],null]],null],[12],[1,"\\n      Confirm\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]]]]],[1,"\\n"]],["@manager"],false,["modal","on","fn"]]',moduleName:"ember-modal-manager-demo/components/modals/simple-example/index.hbs",isStrictMode:!1})
var i=(0,t.setComponentTemplate)(a,(0,r.default)())
e.default=i})),define("ember-modal-manager-demo/helpers/app-version",["exports","@ember/component/helper","ember-modal-manager-demo/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n,r){function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const a=n.default.APP.version
let i=t.versionOnly||t.hideSha,o=t.shaOnly||t.hideVersion,l=null
return i&&(t.showExtended&&(l=a.match(r.versionExtendedRegExp)),l||(l=a.match(r.versionRegExp))),o&&(l=a.match(r.shaRegExp)),l?l[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=void 0
var i=(0,t.helper)(a)
e.default=i})),define("ember-modal-manager-demo/helpers/ensure-safe-component",["exports","@embroider/util"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.EnsureSafeComponentHelper}})})),define("ember-modal-manager-demo/helpers/modal-manager",["exports","ember-modal-manager-demo/utils/modal-manager","@ember/object","@ember/component/helper"],(function(e,t,n,r){var a,i,o,l
function d(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function u(e,t){return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,c(e,t,"get"))}function m(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=n}}(e,c(e,t,"set"),n),n}function c(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance")
return t.get(e)}function s(){}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.TemplateModalManager=void 0
let f=(i=new WeakMap,o=new WeakMap,l=new WeakMap,a=class extends t.default{constructor(e){super(),d(this,i,{writable:!0,value:s}),d(this,o,{writable:!0,value:s}),d(this,l,{writable:!0,value:s}),m(this,i,e.onCancelled??u(this,i)),m(this,o,e.onConfirmed??u(this,o)),m(this,l,e.onRejected??u(this,l))}async open(){let e=await super.open()
return"cancelled"===e.reason&&u(this,i).call(this),"confirmed"===e.reason&&u(this,o).call(this,e.value),"rejected"===e.reason&&u(this,l).call(this,e.value),e}},p=a.prototype,b="open",v=[n.action],g=Object.getOwnPropertyDescriptor(a.prototype,"open"),h=a.prototype,y={},Object.keys(g).forEach((function(e){y[e]=g[e]})),y.enumerable=!!y.enumerable,y.configurable=!!y.configurable,("value"in y||y.initializer)&&(y.writable=!0),y=v.slice().reverse().reduce((function(e,t){return t(p,b,e)||e}),y),h&&void 0!==y.initializer&&(y.value=y.initializer?y.initializer.call(h):void 0,y.initializer=void 0),void 0===y.initializer&&(Object.defineProperty(p,b,y),y=null),a)
var p,b,v,g,h,y
e.TemplateModalManager=f
var w=(0,r.helper)(((e,t)=>new f(t)))
e.default=w})),define("ember-modal-manager-demo/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("ember-modal-manager-demo/helpers/tracked-state",["exports","@ember/component/helper","@glimmer/tracking"],(function(e,t,n){var r,a
function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.TrackedState=void 0
let o=(r=class{get is(){return{[`${this.value}`]:!0}}constructor(e){var t,n,r,o
t=this,n="value",o=this,(r=a)&&Object.defineProperty(t,n,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(o):void 0}),i(this,"set",(e=>this.value=e)),i(this,"toggle",(()=>this.set(!this.value))),this.value=e}},l=r.prototype,d="value",u=[n.tracked],m={configurable:!0,enumerable:!0,writable:!0,initializer:null},s={},Object.keys(m).forEach((function(e){s[e]=m[e]})),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=u.slice().reverse().reduce((function(e,t){return t(l,d,e)||e}),s),c&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(c):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(l,d,s),s=null),a=s,r)
var l,d,u,m,c,s
e.TrackedState=o
var f=(0,t.helper)((e=>{let[t]=e
return new o(t)}))
e.default=f})),define("ember-modal-manager-demo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-modal-manager-demo/config/environment"],(function(e,t,n){let r,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,a=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,a)}
e.default=i})),define("ember-modal-manager-demo/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=n})),define("ember-modal-manager-demo/modifiers/show-modal",["exports","ember-modal-manager-demo/utils/dialog-controller","@ember/debug","ember-modifier"],(function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=(0,r.modifier)((e=>{let n=t.default.for(e)
return n.open(),()=>n.close()}))
e.default=a})),define("ember-modal-manager-demo/router",["exports","@ember/routing/router","ember-modal-manager-demo/config/environment"],(function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a extends t.default{constructor(){super(...arguments),r(this,"location",n.default.locationType),r(this,"rootURL",n.default.rootURL)}}e.default=a,a.map((function(){}))})),define("ember-modal-manager-demo/services/-ensure-registered",["exports","@embroider/util/services/ensure-registered"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-modal-manager-demo/services/modal-portal-mediator",["exports","@ember/service"],(function(e,t){function n(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function r(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=n}}(e,a(e,t,"set"),n),n}function a(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance")
return t.get(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=new WeakMap
class o extends t.default{constructor(){super(...arguments),n(this,i,{writable:!0,value:void 0})}get portalTarget(){return function(e,t){return t.get?t.get.call(e):t.value}(e=this,a(e,i,"get"))
var e}registerPortal(e){r(this,i,e)}unregisterPortal(){r(this,i,void 0)}}e.default=o})),define("ember-modal-manager-demo/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-modal-manager-demo/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-modal-manager-demo/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"NDyitLq9",block:'[[[1,[28,[35,0],["Ember ModalManager DEMO"],null]],[1,"\\n\\n"],[10,"h1"],[12],[1,"Ember ModalManager DEMO"],[13],[1,"\\n\\n"],[44,[[28,[37,2],null,null]],[[[44,[[28,[37,3],null,[["onCancelled","onConfirmed","onRejected"],[[30,1,["set"]],[30,1,["set"]],[30,1,["set"]]]]],[28,[37,3],null,[["onCancelled","onConfirmed","onRejected"],[[30,1,["set"]],[30,1,["set"]],[30,1,["set"]]]]],[28,[37,3],null,[["onCancelled","onConfirmed","onRejected"],[[30,1,["set"]],[30,1,["set"]],[30,1,["set"]]]]]],[[[1,"    "],[10,"dl"],[12],[1,"\\n      "],[10,"dt"],[12],[1,"Reason:"],[13],[1,"\\n      "],[10,"dd"],[12],[10,"data"],[12],[1,[30,1,["value"]]],[13],[13],[1,"\\n      "],[10,"dt"],[12],[1,"Value:"],[13],[1,"\\n      "],[10,"dd"],[12],[10,"data"],[12],[1,[30,1,["value"]]],[13],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,1,"open-buttons"],[14,0,"button-group"],[12],[1,"\\n      "],[11,"button"],[24,4,"button"],[4,[38,4],["click",[30,2,["open"]]],null],[12],[1,"\\n        Open simple example\\n      "],[13],[1,"\\n      "],[11,"button"],[24,4,"button"],[4,[38,4],["click",[30,3,["open"]]],null],[12],[1,"\\n        Open yes/no example\\n      "],[13],[1,"\\n      "],[11,"button"],[24,4,"button"],[4,[38,4],["click",[30,4,["open"]]],null],[12],[1,"\\n        Open form based example\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n"],[41,[30,2,["isOpen"]],[[[1,"      "],[8,[39,6],null,[["@manager"],[[30,2]]],null],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,3,["isOpen"]],[[[1,"      "],[8,[39,7],null,[["@manager"],[[30,3]]],null],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,4,["isOpen"]],[[[1,"      "],[8,[39,8],null,[["@manager"],[[30,4]]],null],[1,"\\n"]],[]],null],[1,"\\n"]],[2,3,4]]]],[1]]],[1,"\\n"],[8,[39,9],null,null,null]],["lastResult","simpleExample","confirmExample","formExample"],false,["page-title","let","tracked-state","modal-manager","on","if","modals/simple-example","modals/confirm-example","modals/form-example","modal/portal-target"]]',moduleName:"ember-modal-manager-demo/templates/application.hbs",isStrictMode:!1})
e.default=n})),define("ember-modal-manager-demo/utils/dialog-controller",["exports","ember-modal-manager-demo/utils/tabbing"],(function(e,t){function n(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function r(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance")
return t.get(e)}(e,t,"get")
return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a{constructor(e){this.element=e,this.element=e}static for(e){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?Reflect.has(e,"showModal")?new o(e):new d(e):new i(e)}}e.default=a
class i extends a{open(){this.element.show()}close(){this.element.close()}}class o extends a{open(){this.element.showModal()}close(){this.element.close()}}var l=new WeakMap
class d extends a{constructor(){super(...arguments),n(this,l,{writable:!0,value:e=>{"Escape"===e.key&&(e.preventDefault(),this.element.dispatchEvent(new CustomEvent("cancel",{bubbles:!0})))}})}open(){this.element.show(),this.element.classList.add("legacy-dialog"),this.element.addEventListener("keyup",r(this,l)),(0,t.confineTabbing)(this.element)}close(){this.element.close(),this.element.classList.remove("legacy-dialog"),this.element.removeEventListener("keyup",r(this,l)),(0,t.releaseTabbing)()}}})),define("ember-modal-manager-demo/utils/modal-manager",["exports","@ember/object","@glimmer/tracking"],(function(e,t,n){var r,a,i,o
function l(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function d(e,t){return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,m(e,t,"get"))}function u(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=n}}(e,m(e,t,"set"),n),n}function m(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance")
return t.get(e)}function c(e,t,n,r,a){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),a&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(a):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function s(){}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let f=(i=new WeakMap,o=new WeakMap,a=c((r=class{constructor(){var e,t,n,r
e=this,t="isOpen",r=this,(n=a)&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0}),l(this,i,{writable:!0,value:s}),l(this,o,{writable:!0,value:s})}open(){return new Promise(((e,t)=>{u(this,i,e),u(this,o,t),this.isOpen=!0})).finally((()=>this.isOpen=!1))}cancel(){d(this,i).call(this,{reason:"cancelled"})}confirm(e){d(this,i).call(this,{reason:"confirmed",value:e})}reject(e){d(this,i).call(this,{reason:"rejected",value:e})}error(e){d(this,o).call(this,e)}}).prototype,"isOpen",[n.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c(r.prototype,"open",[t.action],Object.getOwnPropertyDescriptor(r.prototype,"open"),r.prototype),c(r.prototype,"cancel",[t.action],Object.getOwnPropertyDescriptor(r.prototype,"cancel"),r.prototype),c(r.prototype,"confirm",[t.action],Object.getOwnPropertyDescriptor(r.prototype,"confirm"),r.prototype),c(r.prototype,"reject",[t.action],Object.getOwnPropertyDescriptor(r.prototype,"reject"),r.prototype),c(r.prototype,"error",[t.action],Object.getOwnPropertyDescriptor(r.prototype,"error"),r.prototype),r)
e.default=f})),define("ember-modal-manager-demo/utils/tabbing",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.confineTabbing=function(e,n){let a=null,i=new Set(r(n))
for(let r of i)r instanceof HTMLElement&&(t.set(r,r.tabIndex),e.contains(r)?a??=r:r.tabIndex=-1)
return a},e.releaseTabbing=function(e){let n=new Set(r(e))
for(let r of n)r instanceof HTMLElement&&(r.tabIndex=t.get(r)||0)}
const t=new WeakMap,n=e=>document.querySelectorAll(e)
function*r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n
yield*e("a[href]"),yield*e("area[href]"),yield*e("input:not([disabled])"),yield*e("select:not([disabled])"),yield*e("textarea:not([disabled])"),yield*e("button:not([disabled])"),yield*e("iframe"),yield*e("object"),yield*e("embed"),yield*e("*[tabindex]"),yield*e("*[contenteditable]")}})),define("ember-modal-manager-demo/config/environment",[],(function(){try{var e="ember-modal-manager-demo/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("ember-modal-manager-demo/app").default.create({name:"ember-modal-manager-demo",version:"0.0.0+fcd274a6"})