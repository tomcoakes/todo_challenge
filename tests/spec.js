describe("ToDo App", function() {

  it("has a title called ToDo App", function() {
    browser.get("http://localhost:3000");
    expect(browser.getTitle()).toEqual("Tom's ToDos");
  });

});