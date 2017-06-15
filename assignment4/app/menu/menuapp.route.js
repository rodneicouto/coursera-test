(function () {
'use strict';

angular.module('MenuApp')
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
    template: '<menu-home></menu-home>'
  })

  .state('category', {
    url: '/category',
    template: '<categories categories="ctrl.categories"></categories>',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    },
    controller: function(categories) {
        this.categories = categories;
    },
    controllerAs: 'ctrl' 
  })

  // Item detail
  .state('category.item', {
    url: '/category/:category',
    template: '<items items="ctrl.items"></items>',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    },
    controller: function(items) {
        this.items = items;
    },
    controllerAs: 'ctrl',
    
  });

}

})();
