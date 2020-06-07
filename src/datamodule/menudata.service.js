(function () {
  'use strict';
  
  angular.module('menuapp')
  .service('MenuAppListService', MenuAppListService)  
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  
MenuAppListService.$inject = ['$http', 'ApiBasePath'];

function MenuAppListService($http, ApiBasePath) {
  var service = this;
  service.getMenuCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
		}).then(function (response) {
			return response.data;
		});
  };
  
  service.getMenuForCategory = function (shortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + shortName)
		
		}).then(function (response) {
     // return response.data;
    return response.data.menu_items;
		});
  };

}
  })();
  