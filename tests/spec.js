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
  });


});