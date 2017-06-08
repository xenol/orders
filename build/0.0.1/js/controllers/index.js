"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();define("controllers/module",["angular"],function(t){return t.module("app.controllers",[])}),define("controllers/CartCtrl",["./module"],function(t){t.controller("CartCtrl",["$scope","$rootScope","$route","$routeParams","$localStorage","$location","$filter",function(t,e,n,r,o,a,i){t.$route=n,t.$storage=o,t.routeParams={slug:r.slug,id:r.id};var u=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"inc",value:function(){var t=parseInt(e.num)||1;e.num=t<100?t+1:t}},{key:"dec",value:function(){var t=parseInt(e.num)||1;e.num=t>1?t-1:t}},{key:"save",value:function(){if(t.routeParams.id){"object"!==_typeof(t.$storage.products)&&(t.$storage.products={}),"object"!==_typeof(t.$storage.checkout)&&(t.$storage.checkout={});var n=t.$storage.products;e.info;n[t.routeParams.id]=e.info,n[t.routeParams.id].num=e.num,n[t.routeParams.id].routeParams=t.routeParams}}},{key:"del",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=e.products;n[t=parseInt(t)||0]&&delete n[t]}},{key:"go",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.save(),a.url("/"+t)}},{key:"date",value:function(e){t.pikadayDate=e}},{key:"clear",value:function(){delete t.$storage.checkout,delete o.checkout,delete t.$storage.products,delete o.products,t.$storage.checkout||(t.$storage.checkout={date:"",time:"09:00"}),t.time=t.$storage.checkout.time}},{key:"check404",value:function(){switch(e.type){case"thanks":e.quantity||e.go("/")}}},{key:"info",get:function(){return t.$parent&&t.$parent.info?t.$parent.info:{}}},{key:"products",get:function(){return t.$storage&&t.$storage.products?t.$storage.products:{}}},{key:"checkout",get:function(){return t.$storage&&t.$storage.checkout?t.$storage.checkout:{}}},{key:"type",get:function(){return t.$route.current&&t.$route.current.$$route&&t.$route.current.$$route.type?t.$route.current.$$route.type:""}},{key:"price",get:function(){var t=e.info;return t.data?t.data.tarif:0}},{key:"num",get:function(){var n=e.products;return t.num||n[t.routeParams.id]&&n[t.routeParams.id].num||1},set:function(e){t.num=e}},{key:"total",get:function(){var t=e.products;return Object.values(t).reduce(function(t,e){return t+e.num*e.data.tarif},0)}},{key:"quantity",get:function(){var t=e.products;return Object.keys(t).length}},{key:"title",get:function(){var t=[],n=e.info,r=e.type,o=e.products,a=e.checkout;switch(r){case"checkout":var u=e.quantity;u>1?(t.push(n.name),t.push(u+" "+i("translate")(i("inclination")("service",u))),t=t.join(", ")):t=u?Object.values(o)[0].name:i("translate")("Ordering");break;case"thanks":var c=e.quantity;c>1?(t.push(n.name),t.push(c+" "+i("translate")(i("inclination")("service",c))),t=t.join(", ")):t=c?Object.values(o)[0].name:i("translate")("Ordering"),a.time&&a.date&&(t+=" "+a.date+" "+i("translate")("in")+" "+a.time);break;default:t=n.title}return t}},{key:"description",get:function(){var t="";switch(e.type){case"thanks":t=i("translate")("The order is processed. If necessary the dispatcher will contact you for clarification");break;default:t=""}return t}}]),e}();u.check404(),t.inc=function(){u.inc()},t.dec=function(){u.dec()},t.add=function(){u.add()},t.total=function(){return u.total},t.go=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";u.go(t)},t.del=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;u.del(t)},t.clear=function(){u.clear()},t.title=u.title,t.description=u.description,t.tetherSelectClass="form-group form-group-lg block-Cart__form-group",t.changeDate=function(e){t.$storage.checkout.date=e.replace(/\,[^$]+$/,"")},t.changeTime=function(e){t.$storage.checkout.time=e},t.num=u.num,t.price=u.price,t.products=u.products,t.quantity=function(){return u.quantity}}])}),define("controllers/MainCtrl",["./module"],function(t){t.controller("MainCtrl",["$scope","$rootScope","$routeParams","$location",function(t,e,n,r){var o=function(){function t(){return _classCallCheck(this,t),this.id=parseInt(n.id)||0,this.info=e.info,this.slug=n.slug,this.infoBySlug=this.getBy("slug"),this.info=this.infoBySlug,this.infoById=this.getBy("id"),this.infoById||this.infoBySlug||e.info}return _createClass(t,[{key:"getFromChildren",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=t.filter(function(t){return t[e]===n});return!!r.length&&r.pop()}},{key:"getBy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"slug",e=!1;return this[t]&&(e=this.getFromChildren(this.info.children,t,this[t]),this.maybeRedirect(e,"id"===t?this.slug:"")),e}},{key:"maybeRedirect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t||r.url("/"+e)}}]),t}();t.info=new o,t.title=t.info.title||t.info.name,t.description=t.info.teaser_card||t.info.teaser_list}])}),define("controllers/index",["./CartCtrl","./MainCtrl"],function(){});