define(['./module'], controllers => {
	'use strict';
	
	controllers.controller('CartCtrl', ['$scope', '$rootScope', '$route', '$routeParams', '$localStorage', '$location', '$filter', ( $scope, $rootScope, $route, $routeParams, $localStorage, $location, $filter ) => {
		$scope.$route = $route;
		$scope.$storage = $localStorage;
		$scope.routeParams = { "slug": $routeParams.slug, "id": $routeParams.id };
		
		class Cart {
			constructor() {}
			
			static inc() {
				let num = parseInt( Cart.num ) || 1;
				Cart.num = num < 100 ? num + 1 : num;
			}
			
			static dec() {
				let num = parseInt( Cart.num ) || 1;
				Cart.num = num > 1 ? num - 1 : num;
			}
			
			static save() {
				//delete $scope.$storage.checkout;
				//delete $localStorage.checkout;
				
				if( !$scope.routeParams.id ) return;
				if( typeof $scope.$storage.products !== 'object' ) $scope.$storage.products = {};
				if( typeof $scope.$storage.checkout !== 'object' ) $scope.$storage.checkout = {};
				
				let products = $scope.$storage.products,
					info = Cart.info;
					
				products[ $scope.routeParams.id ]             = Cart.info;
				products[ $scope.routeParams.id ].num         = Cart.num;
				products[ $scope.routeParams.id ].routeParams = $scope.routeParams;
			}
			
			static del( id = 0 ) {
				let products = Cart.products;
				
				id = parseInt( id ) || 0;
				if( products[ id ] ) delete products[ id ];
			}
			
			static go( slug = "" ) {
				Cart.save();
				$location.url('/' + slug);
			}
			
			static get info() {
				return $scope.$parent && $scope.$parent.info ? $scope.$parent.info : {};
			}
			
			static get products() {
				return $scope.$storage && $scope.$storage.products ? $scope.$storage.products : {};
			}
			
			static get checkout() {
				return $scope.$storage && $scope.$storage.checkout ? $scope.$storage.checkout : {};
			}
			
			static get type() {
				return $scope.$route.current && $scope.$route.current.$$route && $scope.$route.current.$$route.type ? $scope.$route.current.$$route.type : "";
			}
			
			static get price() {
				let info = Cart.info;
				return info.data ? info.data.tarif : 0;
			}
			
			static get num() {
				let products = Cart.products;
				return $scope.num || products[ $scope.routeParams.id ] && products[ $scope.routeParams.id ].num || 1;
			}
			
			static set num( val ) {
				$scope.num = val;
			}
			
			static get total() {
				let products = Cart.products;
				return Object.values( products ).reduce( (sum, current) => {
						return sum + current.num * current.data.tarif;
				}, 0);
			}
			
			static get quantity() {
				let products = Cart.products;
				return Object.keys( products ).length;
			}
			
			static date( date ) {
				$scope.pikadayDate = date;
			}
			
			static get title() {
				let title = [],
					info = Cart.info,
					type = Cart.type,
					products = Cart.products,
					checkout = Cart.checkout;
				
				switch( type ) {
					case "checkout": {
						let quantity = Cart.quantity;
						
						if( quantity > 1 ) {
							title.push( info.name );
							title.push( quantity + " " + $filter('translate')( $filter('inclination')("service", quantity) ) );
							title = title.join(", ");
						}
						else if( quantity ) {
							title = Object.values( products )[0].name;
						}
						else {
							title = $filter('translate')('Ordering');
						}
						break;
					}
						
					case "thanks": {
						let quantity = Cart.quantity;
						
						if( quantity > 1 ) {
							title.push( info.name );
							title.push( quantity + " " + $filter('translate')( $filter('inclination')("service", quantity) ) );
							title = title.join(", ");
						}
						else if( quantity ) {
							title = Object.values( products )[0].name;
						}
						else {
							title = $filter('translate')('Ordering');
						}
						
						if( checkout.time && checkout.date ) title +=  " " + checkout.date + " " + $filter('translate')('in') + " " + checkout.time;
						break;
					}
						
					default:
						title = info.title;
				}
				
				return title;
			}
			
			static get description() {
				let description = "",
					type = Cart.type;
				
				switch( type ) {
					case "thanks":
						description = $filter('translate')('The order is processed. If necessary the dispatcher will contact you for clarification');
						break;
						
					default:
						description = "";
				}
				
				return description;
			}
			
			static clear() {
				delete $scope.$storage.checkout;
				delete $localStorage.checkout;
				delete $scope.$storage.products;
				delete $localStorage.products;
				
				if( !$scope.$storage.checkout ) $scope.$storage.checkout = { date: "", time: "09:00" };
				$scope.time = $scope.$storage.checkout.time;
			}
			
			static check404() {
				let type = Cart.type;
				
				switch( type ) {
					case "thanks":
						if( !Cart.quantity ) Cart.go('/');
						break;
				}
			}
		}
		
		Cart.check404();
		
		$scope.inc = () => {
			Cart.inc();
		};
		
		$scope.dec = () => {
			Cart.dec();
		};
		
		$scope.add = () => {
			Cart.add();
		};
		
		$scope.total = () => {
			return Cart.total;
		};
		
		$scope.go = ( slug = "" ) => {
			Cart.go( slug );
		};
		
		$scope.del = ( id = 0 ) => {
			Cart.del( id );
		};
		
		$scope.clear = () => {
			Cart.clear();
		};
		
		$scope.title = Cart.title;
		$scope.description = Cart.description;
		
		$scope.tetherSelectClass = "form-group form-group-lg block-Cart__form-group";
		
		$scope.changeDate = ( date ) => {
			$scope.$storage.checkout.date = date.replace(/\,[^$]+$/, '');
		}
		
		$scope.changeTime = ( time ) => {
			$scope.$storage.checkout.time = time;
		}
		
		$scope.num = Cart.num;
		$scope.price = Cart.price;
		
		$scope.products = Cart.products;
		$scope.quantity = () => { return Cart.quantity; }
	}]);
});
