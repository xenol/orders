"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();define("controllers/module",["angular"],function(e){return e.module("app.controllers",[])}),define("controllers/CartCtrl",["./module"],function(e){e.controller("CartCtrl",["$scope","$rootScope","$route","$routeParams","$localStorage","$location","$filter",function(e,t,n,r,a,i,o){e.$route=n,e.$storage=a,e.routeParams={slug:r.slug,id:r.id};var s=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"inc",value:function(){var e=parseInt(t.num)||1;t.num=e<100?e+1:e}},{key:"dec",value:function(){var e=parseInt(t.num)||1;t.num=e>1?e-1:e}},{key:"save",value:function(){if(e.routeParams.id){"object"!==_typeof(e.$storage.products)&&(e.$storage.products={}),"object"!==_typeof(e.$storage.checkout)&&(e.$storage.checkout={});var n=e.$storage.products;t.info;n[e.routeParams.id]=t.info,n[e.routeParams.id].num=t.num,n[e.routeParams.id].routeParams=e.routeParams}}},{key:"del",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=t.products;n[e=parseInt(e)||0]&&delete n[e]}},{key:"go",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t.save(),i.url("/"+e)}},{key:"date",value:function(t){e.pikadayDate=t}},{key:"clear",value:function(){delete e.$storage.checkout,delete a.checkout,delete e.$storage.products,delete a.products,e.$storage.checkout||(e.$storage.checkout={date:"",time:"09:00"}),e.time=e.$storage.checkout.time}},{key:"check404",value:function(){switch(t.type){case"thanks":t.quantity||t.go("/")}}},{key:"info",get:function(){return e.$parent&&e.$parent.info?e.$parent.info:{}}},{key:"products",get:function(){return e.$storage&&e.$storage.products?e.$storage.products:{}}},{key:"checkout",get:function(){return e.$storage&&e.$storage.checkout?e.$storage.checkout:{}}},{key:"type",get:function(){return e.$route.current&&e.$route.current.$$route&&e.$route.current.$$route.type?e.$route.current.$$route.type:""}},{key:"price",get:function(){var e=t.info;return e.data?e.data.tarif:0}},{key:"num",get:function(){var n=t.products;return e.num||n[e.routeParams.id]&&n[e.routeParams.id].num||1},set:function(t){e.num=t}},{key:"total",get:function(){var e=t.products;return Object.values(e).reduce(function(e,t){return e+t.num*t.data.tarif},0)}},{key:"quantity",get:function(){var e=t.products;return Object.keys(e).length}},{key:"title",get:function(){var e=[],n=t.info,r=t.type,a=t.products,i=t.checkout;switch(r){case"checkout":var s=t.quantity;s>1?(e.push(n.name),e.push(s+" "+o("translate")(o("inclination")("service",s))),e=e.join(", ")):e=s?Object.values(a)[0].name:o("translate")("Ordering");break;case"thanks":var c=t.quantity;c>1?(e.push(n.name),e.push(c+" "+o("translate")(o("inclination")("service",c))),e=e.join(", ")):e=c?Object.values(a)[0].name:o("translate")("Ordering"),i.time&&i.date&&(e+=" "+i.date+" "+o("translate")("in")+" "+i.time);break;default:e=n.title}return e}},{key:"description",get:function(){var e="";switch(t.type){case"thanks":e=o("translate")("The order is processed. If necessary the dispatcher will contact you for clarification");break;default:e=""}return e}}]),t}();s.check404(),e.inc=function(){s.inc()},e.dec=function(){s.dec()},e.add=function(){s.add()},e.total=function(){return s.total},e.go=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";s.go(e)},e.del=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;s.del(e)},e.clear=function(){s.clear()},e.title=s.title,e.description=s.description,e.tetherSelectClass="form-group form-group-lg block-Cart__form-group",e.changeDate=function(t){e.$storage.checkout.date=t.replace(/\,[^$]+$/,"")},e.changeTime=function(t){e.$storage.checkout.time=t},e.num=s.num,e.price=s.price,e.products=s.products,e.quantity=function(){return s.quantity}}])}),define("controllers/MainCtrl",["./module"],function(e){e.controller("MainCtrl",["$scope","$rootScope","$routeParams","$location",function(e,t,n,r){var a=function(){function e(){return _classCallCheck(this,e),this.id=parseInt(n.id)||0,this.info=t.info,this.slug=n.slug,this.infoBySlug=this.getBy("slug"),this.info=this.infoBySlug,this.infoById=this.getBy("id"),this.infoById||this.infoBySlug||t.info}return _createClass(e,[{key:"getFromChildren",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=e.filter(function(e){return e[t]===n});return!!r.length&&r.pop()}},{key:"getBy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"slug",t=!1;return this[e]&&(t=this.getFromChildren(this.info.children,e,this[e]),this.maybeRedirect(t,"id"===e?this.slug:"")),t}},{key:"maybeRedirect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e||r.url("/"+t)}}]),e}();e.info=new a,e.title=e.info.title||e.info.name,e.description=e.info.teaser_card||e.info.teaser_list}])}),define("controllers/index",["./CartCtrl","./MainCtrl"],function(){}),define("directives/module",["angular"],function(e){return e.module("app.directives",[])}),define("directives/breadcrumbs",["./module"],function(e){e.directive("breadcrumbs",["$route",function(e){return{restrict:"E",replace:!0,transclude:!0,scope:{},template:'<ol class="breadcrumb breadcrumbs m-b-5"><li ng-repeat="breadcrumb in breadcrumbs" data-ng-class="breadcrumb.className"><a href="{{breadcrumb.url}}" title="{{breadcrumb.name | translate}}" data-ng-if="breadcrumb.isLink">{{breadcrumb.name | translate}}</a><span data-ng-show="!breadcrumb.isLink">{{breadcrumb.name | translate}}</span></li></ol>',link:function(t,n,r){t.breadcrumbs=[],t.$route=e;var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,e),void 0===t.params&&(t.params={}),void 0===t.scope&&(t.scope={}),void 0===t.scope.info&&(t.scope.info={}),this.id=t.params.id?t.params.id:0,this.info=t.scope.info?t.scope.info:{},this.items=this.defaults(),this.slug=t.params.slug?t.params.slug:"",this.type=t.$$route.type||this.info.type,this.get()}return _createClass(e,[{key:"defaults",value:function(){return[{name:"Services",url:"#!/",isLink:!1,className:""},{name:"Order",url:"#!/cart",isLink:!1,className:""},{name:"Date and time",url:"#!/checkout",isLink:!1,className:""}]}},{key:"get",value:function(){switch(this.type){case"category":this.items[0].className="breadcrumbs__li__active";break;case"service":this.items[0].isLink=!0;break;case"cart":this.items[0].isLink=!0,this.items[1].className="breadcrumbs__li__active";break;case"checkout":this.items[0].isLink=!0,this.items[1].isLink=!0,this.items[2].className="breadcrumbs__li__active";break;default:this.items[0].className="breadcrumbs__li__active"}return this.items}}]),e}();t.$on("$routeChangeSuccess",function(e,n,r){t.breadcrumbs=new a(t.$route.current)})}}}])}),define("css",[],function(){return{pace:["//cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/themes/blue/pace-theme-minimal.min.css","/bower_components/PACE/themes/blue/pace-theme-minimal.css"],pikaday:["//cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.0/css/pikaday.min.css","/bower_components/pikaday/css/pikaday.css"],tetherSelect:["//cdnjs.cloudflare.com/ajax/libs/tether-select/1.1.1/css/select-theme-default.min.css","/bower_components/theter-select/dist/css/select-theme-default.css"]}}),define("plugins/getXHR",[],function(){function e(){var e=void 0;try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){e=!1}}return e||"undefined"==typeof XMLHttpRequest||(e=new XMLHttpRequest),e}window.getXHR=e}),define("plugins/ajax",["plugins/getXHR"],function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET";return new Promise(function(n,r){var a=getXHR();a.open(t,e,!0),a.onload=function(){if(200==a.status)n(a.response);else{var e=new Error(a.status);e.code=a.status,r(e)}},a.onerror=function(){r(new Error("Network Error"))},a.send()})}window.ajax=e}),define("plugins/loadCSS",["plugins/ajax"],function(){function e(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all";return new Promise(function(r,a){"object"!=(void 0===e?"undefined":_typeof(e))&&(e=[e]),function a(){var i=e.shift();i&&ajax(i,"HEAD").then(function(e){if(document.querySelector('link[href="'+i+'"]'))r();else{var a=document.createElement("link");t&&(a.id=t),a.type="text/css",a.rel="stylesheet",a.href=i,a.media=n,a.onload=function(){r()},document.getElementsByTagName("head")[0].appendChild(a)}},function(e){return a()})}()})}window.loadCSS=e}),define("plugins/loadVendorCSS",["require","css","plugins/loadCSS"],function(e,t){function n(n){if(t[n]&&t[n].length){var r=JSON.parse(JSON.stringify(t[n]));return r.forEach(function(t,n){r[n]=e.toUrl(t.match(/^\w/)?"!"+t:t).replace(/\/!/,"/")}),loadCSS(r,n+"-css")}}window.loadVendorCSS=n}),define("directives/pikaday",["./module","pikaday","plugins/loadVendorCSS"],function(e,t){e.directive("pikaday",["$filter",function(e){return{restrict:"E",replace:!0,transclude:!0,template:'<div class="form-group form-group-lg block-calculator__form-group"><div class="input-group"><input class="form-control block-calculator__input" data-ng-model="date" data-ng-change="changeDate(date)" type="text" aria-label="{{\'Use the arrow keys to pick a date\' | translate}}" readonly><span class="input-group-addon btn block-calculator__input-addon" data-ng-click="togglePicker()"><span class="caret"></span></span></div></div>',link:function(n,r,a){var i=new(function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];_classCallCheck(this,n),this.element=e,this.picker=this.init()}return _createClass(n,[{key:"toggle",value:function(){this.picker.isVisible()?this.picker.hide():this.picker.show()}},{key:"init",value:function(){var n=this,r=loadVendorCSS("pikaday"),a=new Date,i=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1),o=new Date(a.getFullYear(),a.getMonth(),a.getDate()+31);r.then(function(r){n.picker=new t({field:n.element,theme:"pikaday-order-theme",firstDay:1,defaultDate:i,setDefaultDate:i,toString:function(t,n){return t.getDate()+" "+[e("translate")("january"),e("translate")("february"),e("translate")("march"),e("translate")("april"),e("translate")("may"),e("translate")("june"),e("translate")("july"),e("translate")("august"),e("translate")("september"),e("translate")("october"),e("translate")("november"),e("translate")("december")][t.getMonth()]+", "+[e("translate")("Sunday"),e("translate")("Monday"),e("translate")("Tuesday"),e("translate")("Wednesday"),e("translate")("Thursday"),e("translate")("Friday"),e("translate")("Saturday")][t.getDay()]},i18n:{previousMonth:e("translate")("Previous Month"),nextMonth:e("translate")("Next Month"),months:[e("translate")("January"),e("translate")("February"),e("translate")("March"),e("translate")("April"),e("translate")("May"),e("translate")("June"),e("translate")("July"),e("translate")("August"),e("translate")("September"),e("translate")("October"),e("translate")("November"),e("translate")("December")],weekdays:[e("translate")("Sunday"),e("translate")("Monday"),e("translate")("Tuesday"),e("translate")("Wednesday"),e("translate")("Thursday"),e("translate")("Friday"),e("translate")("Saturday")],weekdaysShort:[e("translate")("Sun"),e("translate")("Mon"),e("translate")("Tue"),e("translate")("Wed"),e("translate")("Thu"),e("translate")("Fri"),e("translate")("Sat")]}}),n.picker.setMinDate(i),n.picker.setMaxDate(o)})}}]),n}())(r[0].childNodes[0].childNodes[0]);n.togglePicker=function(){i.toggle()}}}}])}),define("directives/tetherSelect",["./module","tetherSelect","tether"],function(e,t){e.directive("tetherselect",[function(){return{restrict:"E",replace:!0,transclude:!0,template:'<div data-ng-class="tetherSelectClass"><select class="tether-select" ng-model="time" ng-change="changeTime(time)"><option ng-repeat="option in options" value="{{option.value}}">{{option.name}}</option></select></div>',link:function(e,n,r){var a=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];_classCallCheck(this,e),this.element=t,this.options=this.defaults(),this.init()}return _createClass(e,[{key:"defaults",value:function(){return[{name:"09:00",value:"09:00"},{name:"10:00",value:"10:00"},{name:"11:00",value:"11:00"},{name:"12:00",value:"12:00"},{name:"13:00",value:"13:00"},{name:"14:00",value:"14:00"},{name:"15:00",value:"15:00"},{name:"16:00",value:"16:00"},{name:"17:00",value:"17:00"},{name:"18:00",value:"18:00"}]}},{key:"init",value:function(){if(!this.element.classList.contains("select-select"))return t.init({el:this.element,className:"tether-select-theme select-target-lg"})}}]),e}())(n[0].childNodes[0]);e.options=a.options,e.time="09:00"}}}])}),define("directives/index",["./breadcrumbs","./pikaday","./tetherSelect"],function(){}),define("filters/module",["angular"],function(e){return e.module("app.filters",[])}),define("filters/escAttr",["./module","underscore"],function(e,t){return e.filter("escAttr",[function(){return function(e){return t.escape(String(e))}}])}),define("filters/inclination",["./module"],function(e){return e.filter("inclination",[function(){return function(e,t){var n=String(t)[String(t).length-1];return t=parseInt(t)||0,"0,5,6,7,8,9".indexOf(n)+1||t>=10&&t<=20?"services_1":"1"==n?"services_2":"services"}}])}),define("filters/customCurrency",["./module"],function(e){return e.filter("customCurrency",["numberFilter",function(e){function t(e){return!isNaN(parseFloat(e))&&isFinite(e)}return function(n,r,a,i,o,s){if(t(n)){r=void 0===r?"$":r,a=void 0===a?".":a,i=void 0===i?",":i,o=void 0!==o&&t(o)?o:2,s=void 0===s||s,o<0&&(o=0);var c=e(n,o).split(".");c[0]=c[0].split(",").join(i);var l=c[0];return 2==c.length&&(l+=a+c[1]),(s?r+" ":"")+l+(s?"":" "+r)}}}])}),define("filters/translate",["./module"],function(e){return e.filter("translate",["$http","$rootScope",function(e,t){return function(e){return t.translate[String(e)]?t.translate[String(e)]:String(e)}}])}),define("filters/index",["./escAttr","./inclination","./customCurrency","./translate"],function(){}),define("app",["angular","angularRoute","angularStorage","./controllers/index","./directives/index","./filters/index"],function(e){return e.module("app",["app.controllers","app.directives","app.filters","ngRoute","ngStorage"])}),define("routes",["./app"],function(e){return e.config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/index.html",controller:"MainCtrl"}),e.when("/cart",{templateUrl:"views/cart.html",controller:"CartCtrl",type:"cart"}),e.when("/checkout",{templateUrl:"views/checkout.html",controller:"CartCtrl",type:"checkout"}),e.when("/thanks",{templateUrl:"views/thanks.html",controller:"CartCtrl",type:"thanks"}),e.when("/:slug",{templateUrl:"views/category.html",controller:"MainCtrl"}),e.when("/:slug/:id",{templateUrl:"views/service.html",controller:"MainCtrl"}),e.otherwise({redirectTo:"/"})}])});