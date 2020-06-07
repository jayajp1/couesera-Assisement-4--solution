(function () {
    'use strict';
    
    angular.module('menuapp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches

  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/template/home.htm'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/template/menufile.htm',
    controller: 'MenuAppListController as ctrl',
    resolve:{
      categories: ['MenuAppListService', function (MenuAppListService) {
        return MenuAppListService.getMenuCategories();
      }]
    }
  })

 /* .state("categories.items", {
    url:          "/items{shortName}",
    templateUrl:  "items-list.template.html",
    controller:   "ItemsListController as ctrl",
    params:       { categoryShortName: null },
    resolve: {
      items: [ "$stateParams", "MenuDataService", function($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });*/
  .state('categories.items', {
    url: '/items{shortName}',
    templateUrl: 'src/template/item-detail.template.htm',
    controller: 'ItemDetailController as ctrl',
    params:       { shortName: null },
    resolve: {
      items: [ "$stateParams", "MenuAppListService", function($stateParams, MenuAppListService) {
        return MenuAppListService.getMenuForCategory($stateParams.shortName);
      }]

    }
  });
}

})();
