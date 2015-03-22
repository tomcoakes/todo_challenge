describe("ToDo App", function() {

  describe("Test", function() {
    it("the app should have a title", function() {
      browser.get("http://localhost:3000");
      expect(browser.getTitle()).toEqual("Tom's ToDos");
    });
  });

  describe("Creating a task", function() {
    
    it("a user can add a task and display it", function() {
      browser.get("http://localhost:3000");
      element(by.model('newTask')).sendKeys('Buy milk');
      element(by.id('createtask')).click();
      expect(element(by.repeater('item in items')).getText()).toContain("Buy milk");
    });

    it("when created, a task has a status of 'incomplete'", function() {
      browser.get("http://localhost:3000");
      element(by.model('newTask')).sendKeys('Buy milk');
      element(by.id('createtask')).click();
      expect(element(by.model('completed')).isSelected()).toBe(false);
    });

    it("a task has a strikethrough once completed", function() {
      browser.get("http://localhost:3000");
      element(by.model('newTask')).sendKeys('Buy milk');
      element(by.id('createtask')).click();
      element(by.model('completed')).click();
      expect(hasClass(element(by.css('.taskline')), 'completed')).toBe(true);
    });

    it("the app tracks the number of incomplete tasks currently left", function() {
      browser.get("http://localhost:3000");
      element(by.model('newTask')).sendKeys('Buy milk');
      element(by.id('createtask')).click();
      element(by.model('completed')).click();
      element(by.model('newTask')).sendKeys('Eat cheese');
      element(by.id('createtask')).click();
      expect(element(by.model('remaining')).getText()).toEqual('1 task remaining');
    });

    describe("Deleting tasks", function() {

      it("a user can delete a task by clicking the button marked X", function() {
        browser.get("http://localhost:3000");
        element(by.model('newTask')).sendKeys('Buy milk');
        element(by.id('createtask')).click();
        element(by.id('delete')).click();
        expect(element(by.id('tasklist')).getText()).toNotContain("Buy milk");
      });

      it("a user can delete all the tasks at once using the clear all button", function() {
        browser.get("http://localhost:3000");
        element(by.model('newTask')).sendKeys('Buy milk');
        element(by.id('createtask')).click();
        element(by.model('newTask')).sendKeys('Eat cheese');
        element(by.id('createtask')).click();
        element(by.id('deleteall')).click();
        expect(element(by.model('remaining')).getText()).toEqual('0 tasks remaining');
      });

    });

    describe("Filtering tasks", function() {

      it("a user can filter the task list to show only completed tasks", function() {
        browser.get("http://localhost:3000");
        element(by.model('newTask')).sendKeys('Buy milk');
        element(by.id('createtask')).click();
        element(by.model('completed')).click();
        element(by.model('newTask')).sendKeys('Eat cheese');
        element(by.id('createtask')).click();
        element(by.id('showcompleted')).click();
        expect(element(by.id('tasklist')).getText()).toNotContain("Eat cheese");
      });

    });

  });

  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  };

});