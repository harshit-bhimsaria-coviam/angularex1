var app = angular.module('myApp');
app.controller('recipeController', function ($scope, $routeParams, ShoppingList) {
    $scope.ShoppingList = ShoppingList.shoppingList;
    $scope.reciepieList = [
        { name: 'Fries', ingredients: ["Ing1", "Ing2", "Ing3", "Ing4", "Ing5"] },
        { name: 'Burger', ingredients: ["Ing6", "Ing2", "Ing7", "Ing4"] },
        { name: 'Pizza', ingredients: ["Ing1", "Ing6", "Ing3", "Ing9", "Ing5", "Ing7", "Ing8"] },
        { name: 'Noodles', ingredients: ["Ing1", "Ing2", "Ing3"] }
    ];
    $scope.getFoodId = function () {
        return $routeParams.foodId;
    };
    $scope.inList = ShoppingList.inList;
    $scope.addToShoppingList = ShoppingList.addToShoppingList;
    $scope.removeFromShoppingList = ShoppingList.removeFromShoppingList;
    $scope.shoppingListItemCount = ShoppingList.shoppingListItemCount;
    $scope.shoppingListQuantityCount = ShoppingList.shoppingListQuantityCount;
});