describe('ToDoAppController', function() {
  beforeEach(module('ToDoApp'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ToDoAppController', {
        $scope: scope
    });
  }));

  it("initialises with no tasks in the task list", function() {
    expect(scope.items).toEqual([]);
  });

  it("can add new tasks to the task list", function() {
    scope.newTask = "Buy milk";
    scope.addNewTask();
    expect(scope.items).toEqual(["Buy milk"]);
  });

});

