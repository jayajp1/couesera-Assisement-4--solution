(function () {
    'use strict';
    
    angular.module('menuapp')
    .controller('MenuAppListController',MenuAppListController);
    
    MenuAppListController.$inject = ['MenuAppListService','categories'];
    function MenuAppListController(MenuAppListService,categories) {
      var ctrl = this;
  
     console.log("menu");
     ctrl.categories = categories;
  
      
    }
    
    })();