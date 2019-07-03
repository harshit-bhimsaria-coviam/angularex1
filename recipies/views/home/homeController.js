var app = angular.module('myApp');
app.controller('homeController', function ($scope, ShoppingList) {
    $scope.ShoppingList = ShoppingList;
    $scope.foodList = [
        { name: "Fries", id: 0 },
        { name: "Burger", id: 1 },
        { name: "Pizza", id: 2 },
        { name: "Noodles", id: 3 }
    ];
    $scope.goToRecipe = function (x) {
        return '#/recipe/' + x;
    };
});