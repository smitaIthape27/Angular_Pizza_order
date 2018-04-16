//creating an application module
var pizzaAppModule = angular.module("pizzaApp", []);

//The below code will read the data from student.json file and will pass to the $scope variable 
pizzaAppModule.controller("PizzaCtrl", function ($scope, $http) {
    $http.get('server/pizzadetail.json') //reading the student.json file
  
                .success(function (data) {
                    $scope.pizzas = data; // binding the data to the $scope variable
                })
                .error(function (data, status) {
                    console.error('failure loading the student record', status, data);
                    $scope.pizzas = {}; //return blank record if something goes wrong
                });
}
); //end controller

          