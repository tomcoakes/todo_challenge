var todoApp = angular.module('ToDoApp', []);

todoApp.controller('ToDoAppController', function($scope) {
  
  $scope.items = [];

  $scope.addNewTask = function() {
    var newTask = new Task($scope.newTask);
    $scope.items.push(newTask);
  };
  
  $scope.changeCompletionStatus = function(item) {
    (item.isCompleted === true) ? item.isCompleted = false : item.isCompleted = true;
  };
  
  $scope.remainingTasks = function() {
    var remainingTasks = [];
    $scope.items.filter(function(task) {
      if(task.isCompleted === false) {
        remainingTasks.push(task);
      }
    });
    return remainingTasks.length + " task" + ((remainingTasks.length > 1 || remainingTasks.length === 0) ? "s" : "") + " remaining";
  };

});