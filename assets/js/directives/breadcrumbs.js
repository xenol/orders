define(['./module'], directives => {
	'use strict';
	
	directives.directive('breadcrumbs', ['$route', ( $route ) => {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {},
			template: '<ol class="breadcrumb breadcrumbs m-b-5">' +
						'<li ng-repeat="breadcrumb in breadcrumbs" data-ng-class="breadcrumb.className"><a href="{{breadcrumb.url}}" title="{{breadcrumb.name | translate}}" data-ng-if="breadcrumb.isLink">{{breadcrumb.name | translate}}</a><span data-ng-show="!breadcrumb.isLink">{{breadcrumb.name | translate}}</span></li>' +
					  '</ol>',
			link: function(scope, element, attrs) {
				scope.breadcrumbs = [];
				scope.$route = $route;
				
				class Breadcrumbs {
					constructor( routeCurrent = {} ) {
						
						if( typeof routeCurrent.params === 'undefined' ) routeCurrent.params = {};
						if( typeof routeCurrent.scope === 'undefined' ) routeCurrent.scope = {};
						if( typeof routeCurrent.scope.info === 'undefined' ) routeCurrent.scope.info = {};
						
						this.id = routeCurrent.params.id ? routeCurrent.params.id : 0;
						this.info = routeCurrent.scope.info ? routeCurrent.scope.info : {};
						this.items = this.defaults();
						this.slug = routeCurrent.params.slug ? routeCurrent.params.slug : "";
						this.type = routeCurrent.$$route.type || this.info.type;
						
						return this.get();
					}
					
					defaults() {
						return [
							{
								name: "Services",
								url: "#!/",
								isLink: false,
								className: ""
							},
							{
								name: "Order",
								url: "#!/cart",
								isLink: false,
								className: ""
							},
							{
								name: "Date and time",
								url: "#!/checkout",
								isLink: false,
								className: ""
							}
						];
					}
					
					get() {
						switch( this.type ) {
							case "category":
								this.items[0].className = "breadcrumbs__li__active";
								break;
								
							case "service":
								this.items[0].isLink = true;
								break;
								
							case "cart":
								this.items[0].isLink = true;
								this.items[1].className = "breadcrumbs__li__active";
								break;
								
							case "checkout":
								this.items[0].isLink = true;
								this.items[1].isLink = true;
								this.items[2].className = "breadcrumbs__li__active";
								break;
								
							default:
								this.items[0].className = "breadcrumbs__li__active";
						}
						
						return this.items;
					}
				}
				
				scope.$on("$routeChangeSuccess", function(event, current, previous){
					scope.breadcrumbs = new Breadcrumbs( scope.$route.current );
				});
			}
		}
	}]);
});
