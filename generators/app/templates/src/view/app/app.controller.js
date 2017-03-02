'use strict';

class AppController {
	constructor($rootScope,$scope,$state,AccessService){
		AccessService.getAccess().then(function(response){
			if(response.data.status){
				console.log('1');
			}else{
				$state.go('login');
			}
		});
		
		this.$scope = $scope;
		require('./app.less');

		this.$scope.$on('changeName',function(event,value){
			this.name = value;
			this.show_name = this.name=='' ? false : true;
		}.bind(this));

		this.show_name = this.name=='' ? false : true;
	}
}

export default angular
	.module('app.controller',[])
	.controller('AppController',AppController);