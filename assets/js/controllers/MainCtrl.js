define(['./module'], controllers => {
	'use strict';
	
	controllers.controller('MainCtrl', ['$scope', '$rootScope', '$routeParams', '$location', ( $scope, $rootScope, $routeParams, $location ) => {
		class ScopeInfo {
			constructor() {
				this.id = parseInt( $routeParams.id ) || 0;
				this.info = $rootScope.info;
				this.slug = $routeParams.slug;
				this.infoBySlug = this.getBy('slug');
				this.info = this.infoBySlug;
				this.infoById = this.getBy('id');
				
				return this.infoById || this.infoBySlug || $rootScope.info;
			}
			
			getFromChildren( obj = {}, prop = 'id', value = "" ) {
				let item = obj.filter( elem => elem[prop] === value );
				return  item.length ? item.pop() : false;
			}
			
			getBy( term = 'slug') {
				let obj = false;
				
				if( this[term] ) {
					obj = this.getFromChildren( this.info.children, term, this[term] );
					this.maybeRedirect( obj, term === 'id' ? this.slug : '' );
				}
				return obj;
			}
			
			maybeRedirect( obj = false, uri = '') {
				if( !obj ) $location.url('/' + uri);
			}
		}
		
		$scope.info = new ScopeInfo();
		$scope.title = $scope.info.title || $scope.info.name;
		$scope.description = $scope.info.teaser_card || $scope.info.teaser_list;
	}]);
});
