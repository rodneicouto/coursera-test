(function () {
	'use strict';

	angular
		.module('MenuApp')
		.component('items', {
			templateUrl: 'app/menu/item/item.html',
             bindings: {
                items: '<'
            },
            controller: Controller,
			controllerAs: 'vm',
	    });

     function Controller() {
        var vm = this;

        vm.$onInit = function () {
            console.log( vm.items );
        }
        
    }

})();   