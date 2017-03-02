'use strict';

class HomeController {
  constructor($scope,$sce) {
  	require('./home.less');
  	this.$scope = $scope;
  	this.$scope.$on('changeName',function(event,value){
  		this.name = value;
  	 }.bind(this));

    this.title = "这是主页";
  }
} 

export default angular
  .module('home.controller', [])
  .controller('HomeController', HomeController);
