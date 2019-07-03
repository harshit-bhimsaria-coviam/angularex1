var app = angular.module('myApp');
app.controller('shoppingListController', function ($scope, ShoppingList) {
  $scope.ShoppingList = ShoppingList.shoppingList;
  $scope.inList = ShoppingList.inList;
  $scope.addToShoppingList = ShoppingList.addToShoppingList;
  $scope.removeFromShoppingList =  ShoppingList.removeFromShoppingList;
  $scope.shoppingListItemCount = ShoppingList.shoppingListItemCount;
  $scope.shoppingListQuantityCount = ShoppingList.shoppingListQuantityCount;

  $scope.deleteFromShoppingList = function(x) {
    $scope.ShoppingList.splice($scope.inList(x), 1);
  };

  $scope.ingredientList = ["Ing1","Ing2","Ing3","Ing4","Ing5","Ing6","Ing7","Ing8","Ing9"]

  $scope.editStatus = false;
  $scope.changeEditStatus = function() {
    $scope.editStatus = !$scope.editStatus;
  };

  $scope.saveChanges = function() {
    $scope.changeEditStatus();
    $scope.ShoppingList.forEach((element, index) => {
      if(element.quantity <= 0)
        $scope.ShoppingList.splice(index, 1);
    });
  };
});