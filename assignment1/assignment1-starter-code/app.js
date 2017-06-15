(function () {
'use strict';

angular.module('MyApp', [])
.controller('MyController', MyController);

MyController.$inject = ['$scope'];
function MyController($scope) {

  activate();
  function activate(){
     $scope.dishesList = ""; 
     $scope.message = "";
  }
  
  $scope.borderClass = function(value){
    if( $scope.count == 0 ){
        return "error-border";
    }
    else if( $scope.count > 0 ){
        return "success-border";
    }
  }

  $scope.check = function (value) {
      $scope.count = 0;
      var list = value.split(',');     
      for( var i = 0; i < list.length; i++){
          if( list[i].trim() != "" ){
            $scope.count++;
          }
      }

      if( $scope.count == 0 ){
        $scope.message = "Please enter data first";
        return;
      }
      

      //var arrayOfDishes = string.split(",");    
      //return arrayOfDishes.filter(function(e){return e}).length;  
      
      

      if( $scope.count <= 3){
          $scope.message = 'Enjoy!';
      }
      else {
        $scope.message = 'Too much!';
      };
  };
}

})();