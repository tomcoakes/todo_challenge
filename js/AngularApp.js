var todoApp = angular.module('ToDoApp', []);

todoApp.controller('ToDoAppController', function($scope) {
  $scope.someText = {
    "name": "Tom"
  };
});