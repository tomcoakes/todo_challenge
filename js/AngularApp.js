var todoApp = angular.module('ToDoApp', []);

todoApp.controller('ToDoAppController', function($scope) {
  $scope.addNewTask = function() {
    var newTask = new Task($scope.newTask);
    $scope.items.push(newTask);
  };
  
  $scope.changeCompletionStatus = function(item) {
    (item.isCompleted === true) ? item.isCompleted = false : item.isCompleted = true;
  };
  
  $scope.items = [];


});