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
    expect(scope.items[0].title).toEqual("Buy milk");
  });

  it("can switch between 'complete' and 'incomplete' status", function() {
    scope.newTask = "Buy milk";
    scope.addNewTask();
    scope.changeCompletionStatus(scope.items[0]);
    expect(scope.items[0].isCompleted).toEqual(true);
  });

  it("knows that 1 task is remaining when one of two have been completed", function() {
    scope.newTask = "Buy milk";
    scope.addNewTask();
    scope.changeCompletionStatus(scope.items[0]);
    scope.newTask = "Eat cheese";
    scope.addNewTask();
    expect(scope.remainingTasks()).toEqual("1 task remaining");
  });

  it("knows that 0 tasks are remaining when none have been entered", function() {
    expect(scope.remainingTasks()).toEqual("0 tasks remaining");
  });

  it("can delete a task", function() {
    scope.newTask = "Buy milk";
    scope.addNewTask();
    scope.deleteTask(scope.items[0]);
    expect(scope.remainingTasks()).toEqual("0 tasks remaining");
  });

  it("can delete all tasks at once", function() {
    scope.newTask = "Buy milk";
    scope.addNewTask();
    scope.newTask = "Eat cheese";
    scope.addNewTask();
    scope.deleteAllTasks();
    expect(scope.remainingTasks()).toEqual("0 tasks remaining");
  });

  it("returns true when show property is set to 'All'", function() {
    scope.show = 'All';
    expect(scope.showTasks()).toEqual(true);
  });

  it("returns true when show property is set to 'Complete'", function() {
    scope.show = 'Complete';
    scope.newTask = "Buy milk";
    scope.addNewTask();
    scope.changeCompletionStatus(scope.items[0]);
    expect(scope.showTasks(scope.items[0])).toEqual(true);
  });

});

