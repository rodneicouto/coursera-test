(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);


    function NarrowItDownController(MenuSearchService) {

        var vm = this;

        activate();

        function activate() {
            vm.narrow = narrow;
            vm.removeItem = removeItem;
        }

        function narrow() {
            MenuSearchService.getMatchedMenuItems(vm.searchTerm).then(function(result) {
                vm.found = result;
            });
        }

        function removeItem(index){
        	vm.found.splice(index, 1);
        }

    }



    MenuSearchService.$inject = ['$http', '$q'];

    function MenuSearchService($http, $q) {

        return {
            getMatchedMenuItems: getMatchedMenuItems
        }

        ////////////////////////
        
        function getMatchedMenuItems(searchTerm) {

        	if( !searchTerm ) {  		
        		var deferred = $q.defer();
        		deferred.resolve([]);
        		return deferred.promise;
        	}
        	
            return $http({
                method: "GET",
                url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
            }).then(function(result) {
                // process result and only keep items that match
                var foundItems = [];
                for (var i = 0; i < result.data.menu_items.length; i++) {
                    if (result.data.menu_items[i].description.indexOf(searchTerm) >= 0) {
                        foundItems.push(result.data.menu_items[i]);
                    }
                }
                return foundItems;
            });

        }

    }



    function FoundItemsDirective() {
        var ddo = {
        	restrict: "E",
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },


            // controller: FoundItemsDirectiveController,
            // controllerAs: 'abc',
            // bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {

        var vm = this;

        activate();
        
        function activate(){
        	vm.showWarning = showWarning;
        }

        function showWarning(){
        	if (vm.foundItems && vm.foundItems.length == 0 ) return true;
        	return false;
        }

        
    }

})();
