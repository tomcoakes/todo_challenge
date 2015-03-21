var todoApp = angular.module('ToDoApp', []);

todoApp.controller('ToDoAppController', function($scope) {
  $scope.addNewTask = function() {
    var newTask = new Task($scope.newTask);
    $scope.items.push(newTask);
  };
  
  $scope.changeCompletionStatus = function(item) {
    if (item.isCompleted === true) {
      item.isCompleted = false;
    } else {
      item.isCompleted = true;
    }
  };
  
  $scope.items = [];

});