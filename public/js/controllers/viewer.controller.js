(function(){
  'use strict';
  // App bootstrapping + DI
  /*@ngInject*/
  angular.module('njcEfvApp')
    .controller('ViewerController', ViewerController);

  /*@ngInject*/
  function ViewerController($scope, $log, $rootScope){

    var vm = this;

    vm.username = !_.isUndefined($rootScope.user) ? $rootScope.user.name : "Guest";

    function init(){
      $log.log("Loaded the viewer controller");
    }

    init();
  }

})();
