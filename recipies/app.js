var app = angular.module('myApp', ['ngRoute']);

app.factory('ShoppingList', function(){
  return {
    shoppingList: [],
    inList: function(ingredient) {
      let inList = -1;
      this.ShoppingList.forEach((element, index) => {
        if(element.ingredientName === ingredient){
          inList = index;
        }
      });
      return inList;
    },
    addToShoppingList: function(ingredient) {
      let itemIndex = this.inList(ingredient);
      if(itemIndex === -1){
        let shoppingListItem = {};
        shoppingListItem['ingredientName'] = ingredient;
        shoppingListItem['quantity'] = 1;
        this.ShoppingList.push(shoppingListItem);
      }
      else{
        this.ShoppingList[itemIndex].quantity += 1;
      }
    },
    removeFromShoppingList: function(ingredient) {
      let itemIndex = this.inList(ingredient);
      if(this.ShoppingList[itemIndex].quantity === 1)
        this.ShoppingList.splice(itemIndex, 1);
      else
        this.ShoppingList[itemIndex].quantity -= 1;
    },
    shoppingListItemCount: function(){
      return this.ShoppingList.length;
    },
    shoppingListQuantityCount: function(){
      let sum = 0;
      this.ShoppingList.forEach(ele=>{
        sum += ele.quantity;
      });
      return sum;
    }
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
  $scope.inList = ShoppingList.inList;
  $scope.addToShoppingList = ShoppingList.addToShoppingList;
  $scope.removeFromShoppingList =  ShoppingList.removeFromShoppingList;
  $scope.shoppingListItemCount = ShoppingList.shoppingListItemCount;
  $scope.shoppingListQuantityCount = ShoppingList.shoppingListQuantityCount;
});

app.controller('shoppingListController', function ($scope, ShoppingList) {
  $scope.ShoppingList = ShoppingList.shoppingList;
  $scope.inList = ShoppingList.inList;
  $scope.addToShoppingList = ShoppingList.addToShoppingList;
  $scope.removeFromShoppingList =  ShoppingList.removeFromShoppingList;
  $scope.shoppingListItemCount = ShoppingList.shoppingListItemCount;
  $scope.shoppingListQuantityCount = ShoppingList.shoppingListQuantityCount;
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

    .when('/ShoppingList', {
      templateUrl: 'views/shoppingListView.htm',
      controller: 'shoppingListController'
    })

    .otherwise({
      redirectTo: '/home'
    });
}]);
