define(['./module'], controllers => {
	'use strict';
	
	controllers.controller('CalculatorCtrl', ['$scope', '$rootScope', '$routeParams', '$localStorage', '$location', ( $scope, $rootScope, $routeParams, $localStorage, $location ) => {
		$scope.$storage = $localStorage;
		$scope.parentSlug = $routeParams.slug;
		$scope.id = $routeParams.id;
		
		class Calculator {
			constructor() {}
			
			static inc() {
				let num = parseInt( $scope.num ) || 1;
				$scope.num = num < 100 ? num + 1 : num;
			}
			
			static dec() {
				let num = parseInt( $scope.num ) || 1;
				$scope.num = num > 1 ? num - 1 : num;
			}
			
			static save() {
				if( typeof $scope.$storage.products !== 'object' ) $scope.$storage.products = {};
				//if( !$scope.$storage.products[$scope.$parent.info.id] ) $scope.$storage.products[$scope.$parent.info.id] = {};
				//delete $scope.$storage.products;
				//let product = $scope.$storage.products[$scope.$parent.info.id];
				
				//console.log( $scope.$parent.info );
				//console.log( $scope.num );
				//console.log( $scope.parentSlug );
				
				$scope.$storage.products[$scope.$parent.info.id] = $scope.$parent.info;
				$scope.$storage.products[$scope.$parent.info.id].num = $scope.num;
				$scope.$storage.products[$scope.$parent.info.id].parentSlug = $scope.parentSlug;
				$scope.$storage.products[$scope.$parent.info.id].time = $scope.time;
			}
			
			static add() {
				Calculator.save();
				$location.url('/cart');
			}
			
			static del( id = 0 ) {
				id = parseInt( id ) || 0;
				if( $scope.$parent.info.products[ id ] ) delete $scope.$parent.info.products[ id ];
			}
			
			static checkout() {
				$location.url('/checkout');
			}
			
			static thanks() {
				$location.url('/thanks');
			}
			
			static changeTime() {
				//Calculator.save();
				//console.log($scope.time);
			}
			
			static get price() {
				return $scope && $scope.$parent && $scope.$parent.info && $scope.$parent.info.data ? $scope.$parent.info.data.tarif : 0;
			}
			
			static get num() {
				return $scope.$storage && $scope.$storage.products && $scope.$storage.products[ $scope.id ] ? $scope.$storage.products[ $scope.id ].num : 1;
			}
			
			static get total() {
				let res = 0;
				
				if( typeof $scope.$parent.info.products === "object" ) {
					res = Object.values( $scope.$parent.info.products ).reduce( (sum, current) => {
						return sum + current.num * current.data.tarif;
					}, 0);
				};
				
				return res;
			}
			
			static get length() {
				return typeof $scope.$storage.products === 'object' ? Object.keys( $scope.$storage.products ).length : 0;
			}
			
			static get title() {
				return 1;
			}
		}
		
		$scope.inc = () => {
			Calculator.inc();
		};
		
		$scope.dec = () => {
			Calculator.dec();
		};
		
		$scope.add = () => {
			Calculator.add();
		};
		
		$scope.total = () => {
			return Calculator.total;
		};
		
		$scope.checkout = () => {
			Calculator.checkout();
		};
		
		$scope.thanks = () => {
			Calculator.thanks();
		};
		
		$scope.changeTime = () => {
			Calculator.changeTime();
		};
		
		$scope.title = () => {
			return Calculator.title;
		};
		
		$scope.time = "09-00";
		$scope.tetherSelectClass = "form-group form-group-lg block-calculator__form-group";
		
		$scope.num = Calculator.num;
		$scope.price = Calculator.price;
	}]);
});
