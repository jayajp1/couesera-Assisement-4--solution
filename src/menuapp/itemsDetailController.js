(function () {
    'use strict';
    
    angular.module('menuapp')
    .controller('ItemDetailController', ItemDetailController);
    
    // 'items' is injected through state's resolve
    ItemDetailController.$inject = ["$stateParams", "items"]
    function ItemDetailController($stateParams, items) {
      var ctrl = this;
      ctrl.items= items;
      console.log(ctrl.items);
      ctrl.name=items.name;
      ctrl.items.name=items.name;
    }

    })();