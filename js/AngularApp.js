var todoApp = angular.module('ToDoApp', []);

todoApp.controller('ToDoAppController', function($scope) {
  
  $scope.items = [];

  $scope.addNewTask = function() {
    var newTask = new Task($scope.newTask);
    $scope.newTask = "";
    $scope.items.push(newTask);
  };

  $scope.deleteTask = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  };

  $scope.deleteAllTasks = function() {
    $scope.items = [];
  };
  
  $scope.changeCompletionStatus = function(item) {
    if (item.isCompleted === true) {
      item.isCompleted = false;
    } else {
      item.isCompleted = true;
    }
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

  $scope.showTasks = function  (task) {
    if($scope.show === 'All') {
      return true;
    } else if (task.isCompleted && $scope.show === "Complete") {
      return true;
    } else if (!task.isCompleted && $scope.show === "Active") {
      return true;
    } else {
      return false;
    }
  };

  $(document).ready(function() {
    $scope.show = 'All';
  });

});