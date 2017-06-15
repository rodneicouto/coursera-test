(function() {
    'use strict';

    angular
        .module('MenuData')
        .service('MenuDataService', MenuDataService)

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {

        return {
            getAllCategories: getAllCategories,
            getItemsForCategory: getItemsForCategory            
        };
        
        ///////////////////////////

        function getItemsForCategory(categoryShortName){
             return $http({
                method: "GET",
                url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category='+ categoryShortName)
            }).then(function(resolve){
                return resolve.data;
            });
        }

        function getAllCategories(){
            return $http({
                method: "GET",
                url: ('https://davids-restaurant.herokuapp.com/categories.json')
            }).then(function(resolve){
                return resolve.data;
            });
        }

    }

})();
