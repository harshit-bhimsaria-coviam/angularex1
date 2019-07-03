var app = angular.module('myApp', ['ngRoute']);
app.controller('homeController', function ($scope) {
    $scope.foodList = [
        { name: "Fries", id: 0 },
        { name: "Burger", id: 1 },
        { name: "Pizza", id: 2 },
        { name: "Noodles", id: 3 }
    ];
});

app.controller('recipeController', function($scope) {
    $scope.reciepieList = [
        ["Ing1", "Ing2", "Ing3", "Ing4", "Ing5"],
        ["Ing6", "Ing2", "Ing7", "Ing4"],
        ["Ing1", "Ing6", "Ing3", "Ing9", "Ing5", "Ing7", "Ing8"],
        ["Ing1", "Ing2", "Ing3"]
    ];
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    
    .when('/', {
       templateUrl: 'views/homeView.htm',
       controller: 'homeController'
    })
    
    .when('/recipe/:foodId', {
       templateUrl: 'views/recipeView.htm',
       controller: 'recipeController'
    })
    
    .otherwise({
       redirectTo: '/'
    });
 }]);