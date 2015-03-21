describe('ToDoAppController', function() {
  beforeEach(module('ToDoApp'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ToDoAppController', {
        $scope: scope
    });
  }));

  it("", function() {
    
  });

});

