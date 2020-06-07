(function () {
    'use strict';
    
    angular.module('menuapp')
    .component('items', {
      templateUrl: 'src/template/shoppinglist.template.htm',
      controller: ItemsComponentController,
      bindings: {
        list: '<'
      }
    });
    ItemsComponentController.$inject = [];
    function ItemsComponentController() {
     
    }
    })();