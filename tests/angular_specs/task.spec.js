describe("Task", function() {

  beforeEach(function() {
    task = new Task("Buy milk");
  });

  it("has a title", function() {
    expect(task.title).toBe("Buy milk");
  });

  it("is not already completed when created", function() {
    expect(task.isCompleted).toBe(false);
  });

});