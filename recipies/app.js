var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.foodList = [
        { name: "Fries", id: 0 },
        { name: "Burger", id: 1 },
        { name: "Pizza", id: 2 },
        { name: "Noodles", id: 3 }
    ];
    $scope.reciepieList = [
        ["Ing1", "Ing2", "Ing3", "Ing4", "Ing5"],
        ["Ing6", "Ing2", "Ing7", "Ing4"],
        ["Ing1", "Ing6", "Ing3", "Ing9", "Ing5", "Ing7", "Ing8"],
        ["Ing1", "Ing2", "Ing3"]
    ];
    $scope.recipieView = false;
});