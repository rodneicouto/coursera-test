(function () {
	'use strict';

	angular
		.module('MenuApp')
		.component('categories', {
			templateUrl: 'app/menu/category/category.html',
            bindings: {
                categories: '<'
            },
            controller: Controller,
			controllerAs: 'vm',
	});

    function Controller() {
        var vm = this;
        
        vm.$onInit = function () {
            console.log( vm.categories );
        }
        
    }

})();   