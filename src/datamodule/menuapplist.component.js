(function () {
    'use strict';
    
    angular.module('menuapp')
    .component('itemList', {
      templateUrl: 'src/template/shoppinglist.template.htm',
      bindings: {
        list: '<'
      }
    });
 
    })();