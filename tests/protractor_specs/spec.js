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
      expect(hasClass(element(by.repeater('item in items')), 'completed')).toBe(true);
    });

  });

  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  };

});