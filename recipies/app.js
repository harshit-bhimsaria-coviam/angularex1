var app = angular.module('myApp', ['ngRoute']);

app.factory('ShoppingList', function(){
  return {
    shoppingList: []
  };
});

app.controller('homeController', function ($scope, ShoppingList) {
  $scope.ShoppingList = ShoppingList;
  $scope.foodList = [
    { name: "Fries", id: 0 },
    { name: "Burger", id: 1 },
    { name: "Pizza", id: 2 },
    { name: "Noodles", id: 3 }
  ];
  $scope.goToRecipe = function (x) {
    console.log('#recipe/' + x)
    return '#/recipe/' + x;
  };
});

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
  $scope.addToShoppingList = function(ingredient) {
    let inList = -1;
    $scope.ShoppingList.forEach((element, index) => {
      if(element.ingredientName === ingredient){
        inList = index;
      }
    });
    if(inList === -1){
      let shoppingListItem = {};
      shoppingListItem['ingredientName'] = ingredient;
      shoppingListItem['quantity'] = 1;
      $scope.ShoppingList.push(shoppingListItem);
    }
    else
      $scope.ShoppingList[inList].quantity += 1;
  };
});

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

    .when('/home', {
      templateUrl: 'views/homeView.htm',
      controller: 'homeController'
    })

    .when('/recipe/:foodId', {
      templateUrl: 'views/recipeView.htm',
      controller: 'recipeController'
    })

    .otherwise({
      redirectTo: '/home'
    });
}]);
