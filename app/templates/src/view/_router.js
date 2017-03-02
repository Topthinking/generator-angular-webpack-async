'use strict';

function ViewRouter($urlRouterProvider,$qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $urlRouterProvider.otherwise('/app/home');
}

export default angular
  .module('view.router',(()=>{
  	let router_list=[];
  	[
      'app',
      'login',
      'home',
      'home.edit',
    ].forEach((value)=>{
  		router_list.push(require('./'+value+'/_router').name);
  	});
  	return router_list;
  })())
  .value("url_param",{
    "login":"/access/login/"
  })
  .config(ViewRouter);