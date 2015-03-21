var todoApp = angular.module('ToDoApp', []);

todoApp.controller('ToDoAppController', function($scope) {
  $scope.addNewTask = function() {
    $scope.items.push($scope.newTask);
  };

  $scope.items = [
  ];

});