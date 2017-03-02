'use strict';
import angular from 'angular';

let AppModule = 'app';

angular.module(AppModule, [
    require('angular-ui-router'),
    require('oclazyload'),
    require('angular-animate'),
    require('./view/_router').name,
    require('./service/access.service').name
  ]);
angular.bootstrap(document, [AppModule], { strictDi: true });