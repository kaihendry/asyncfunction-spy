const handler = require("../handler");
const wait = require("../wait");

describe("handler", () => {
  it("should call wait", async () => {
    const waitSpy = jest.spyOn(wait, "wait");
    await handler.hello();
    expect(waitSpy).toHaveBeenCalled();
  });
});
