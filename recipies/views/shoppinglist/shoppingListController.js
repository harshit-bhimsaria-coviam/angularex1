var app = angular.module('myApp');
app.controller('shoppingListController', function ($scope, ShoppingList) {
  $scope.ShoppingList = ShoppingList.shoppingList;
  $scope.inList = ShoppingList.inList;
  $scope.addToShoppingList = ShoppingList.addToShoppingList;
  $scope.removeFromShoppingList =  ShoppingList.removeFromShoppingList;
  $scope.shoppingListItemCount = ShoppingList.shoppingListItemCount;
  $scope.shoppingListQuantityCount = ShoppingList.shoppingListQuantityCount;
});