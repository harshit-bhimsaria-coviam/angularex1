var app = angular.module('myApp', ['ngRoute']);

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

    .when('/home', {
      templateUrl: 'views/home/homeView.htm',
      controller: 'homeController'
    })

    .when('/recipe/:foodId', {
      templateUrl: 'views/recipe/recipeView.htm',
      controller: 'recipeController'
    })

    .when('/ShoppingList', {
      templateUrl: 'views/shoppinglist/shoppingListView.htm',
      controller: 'shoppingListController'
    })

    .otherwise({
      redirectTo: '/home'
    });
}]);
