describe("ToDo App", function() {

  describe("Test", function() {
    it("should have a title", function() {
      browser.get("http://localhost:3000");
      expect(browser.getTitle()).toEqual("Tom's ToDos");
    });
  });

  describe("Creating a task", function() {
    
    it("can add a task and display it", function() {
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

    it("has a strikethrough once completed", function() {
      browser.get("http://localhost:3000");
      element(by.model('newTask')).sendKeys('Buy milk');
      element(by.id('createtask')).click();
      element(by.model('completed')).click();
      expect(hasClass(element(by.css('.taskline')), 'completed')).toBe(true);
    });

    it("tracks the number of incomplete tasks currently left", function() {
      browser.get("http://localhost:3000");
      element(by.model('newTask')).sendKeys('Buy milk');
      element(by.id('createtask')).click();
      element(by.model('completed')).click();
      element(by.model('newTask')).sendKeys('Eat cheese');
      element(by.id('createtask')).click();
      expect(element(by.model('remaining')).getText()).toEqual('1 task remaining');
    });

  });

  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  };

});