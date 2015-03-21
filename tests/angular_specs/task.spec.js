describe("Task", function() {

  it("has a title", function() {
    var task = new Task("Buy milk");
    expect(task.title).toBe("Buy milk");
  });

});