(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.factory('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){    
   var vm = this;
   activate();

   //////////////

   function activate(){
      // vm.itemsToBuy = itemsToBuy;
      vm.bought = bought;
      vm.ItemsToBy = ShoppingListCheckOffService.itemsToBuy();
    }

   function itemsToBuy(){
      return ;
   }

   function bought(item) {
      ShoppingListCheckOffService.bought(item);
   }

}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
   var vm = this;
   activate();

   //////////////

   function activate(){
     vm.itemsBought = itemsBought;
   }

   function itemsBought(){
       return ShoppingListCheckOffService.itemsBought();
   }

}

function ShoppingListCheckOffService() {
    var toBuyItems = [{ name: "cookies", quantity: 10 }, { name: "cafés", quantity: 4 }, 
        { name: "Pães", quantity: 8 }, { name: "arroz", quantity: 2 }, { name: "feijões", quantity: 7 }];
    var boughtItems = [];

    var service = {
        bought: bought,
        itemsToBuy: itemsToBuy,
        itemsBought: itemsBought
    };
    
    return service;

    ////////////////////////////////////////////  

    function bought(item) {
        boughtItems.push(item);
        toBuyItems.splice( toBuyItems.indexOf(item), 1);
    }

    function itemsToBuy(){
        return toBuyItems;
    }

    function itemsBought(){
        return boughtItems;
    }

}


})();