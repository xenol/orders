"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();define("controllers/module",["angular"],function(t){return t.module("app.controllers",[])}),define("controllers/CartCtrl",["./module"],function(t){t.controller("CartCtrl",["$scope","$rootScope","$route","$routeParams","$localStorage","$location","$filter",function(t,e,r,n,o,a,u){t.$route=r,t.$storage=o,t.routeParams={slug:n.slug,id:n.id};var c=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"inc",value:function(){var t=parseInt(e.num)||1;e.num=t<100?t+1:t}},{key:"dec",value:function(){var t=parseInt(e.num)||1;e.num=t>1?t-1:t}},{key:"save",value:function(){if(t.routeParams.id){"object"!==_typeof(t.$storage.products)&&(t.$storage.products={}),"object"!==_typeof(t.$storage.checkout)&&(t.$storage.checkout={});var r=t.$storage.products;e.info;r[t.routeParams.id]=e.info,r[t.routeParams.id].num=e.num,r[t.routeParams.id].routeParams=t.routeParams}}},{key:"del",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=e.products;r[t=parseInt(t)||0]&&delete r[t]}},{key:"go",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.save(),a.url("/"+t)}},{key:"date",value:function(e){t.pikadayDate=e}},{key:"clear",value:function(){delete t.$storage.checkout,delete o.checkout,delete t.$storage.products,delete o.products,t.$storage.checkout||(t.$storage.checkout={date:"",time:"09:00"}),t.time=t.$storage.checkout.time}},{key:"check404",value:function(){switch(e.type){case"thanks":e.quantity||e.go("/")}}},{key:"info",get:function(){return t.$parent&&t.$parent.info?t.$parent.info:{}}},{key:"products",get:function(){return t.$storage&&t.$storage.products?t.$storage.products:{}}},{key:"checkout",get:function(){return t.$storage&&t.$storage.checkout?t.$storage.checkout:{}}},{key:"type",get:function(){return t.$route.current&&t.$route.current.$$route&&t.$route.current.$$route.type?t.$route.current.$$route.type:""}},{key:"price",get:function(){var t=e.info;return t.data?t.data.tarif:0}},{key:"num",get:function(){var r=e.products;return t.num||r[t.routeParams.id]&&r[t.routeParams.id].num||1},set:function(e){t.num=e}},{key:"total",get:function(){var t=e.products;return Object.values(t).reduce(function(t,e){return t+e.num*e.data.tarif},0)}},{key:"quantity",get:function(){var t=e.products;return Object.keys(t).length}},{key:"title",get:function(){var t=[],r=e.info,n=e.type,o=e.products,a=e.checkout;switch(n){case"checkout":var c=e.quantity;c>1?(t.push(r.name),t.push(c+" "+u("translate")(u("inclination")("service",c))),t=t.join(", ")):t=c?Object.values(o)[0].name:u("translate")("Ordering");break;case"thanks":var i=e.quantity;i>1?(t.push(r.name),t.push(i+" "+u("translate")(u("inclination")("service",i))),t=t.join(", ")):t=i?Object.values(o)[0].name:u("translate")("Ordering"),a.time&&a.date&&(t+=" "+a.date+" "+u("translate")("in")+" "+a.time);break;default:t=r.title}return t}},{key:"description",get:function(){var t="";switch(e.type){case"thanks":t=u("translate")("The order is processed. If necessary the dispatcher will contact you for clarification");break;default:t=""}return t}}]),e}();c.check404(),t.inc=function(){c.inc()},t.dec=function(){c.dec()},t.add=function(){c.add()},t.total=function(){return c.total},t.go=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";c.go(t)},t.del=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;c.del(t)},t.clear=function(){c.clear()},t.title=c.title,t.description=c.description,t.tetherSelectClass="form-group form-group-lg block-Cart__form-group",t.changeDate=function(e){t.$storage.checkout.date=e.replace(/\,[^$]+$/,"")},t.changeTime=function(e){t.$storage.checkout.time=e},t.num=c.num,t.price=c.price,t.products=c.products,t.quantity=function(){return c.quantity}}])});