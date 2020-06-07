(function () {
    'use strict';
    
    angular.module('menuapp')
    .controller('ItemDetailController', ItemDetailController);
    
    // 'items' is injected through state's resolve
    ItemDetailController.$inject = ["$stateParams", "items"]
    function ItemDetailController($stateParams, items) {
      var itemDetail = this;
      var item = items[$stateParams.itemId];
      itemDetail.name= items.name;
    
    }

    })();