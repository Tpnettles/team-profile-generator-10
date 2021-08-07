const Manager = require("./../lib/Manager");

describe("Manager class", () => {
  it("Has a officeNumber attribute", () => {
    const manager = new Manager(
      2,
      "Tyree Nettles",
      "nettles.code@gmail.com",
      "7735555555"
    );
    expect(manager.officeNumber).toBe("7735555555");
  });

  it("Can get role via getRole()", () => {
    const manager = new Manager(
      2,
      "Tyree Nettles",
      "nettles.code@gmail.com",
      "7735555555"
    );
    expect(manager.getRole()).toBe("Manager");
  });

  it("Can get office number via getOfficeNumber()", () => {
    const manager = new Manager(
      2,
      "Tyree Nettles",
      "nettles.code@gmail.com",
      "7735555555"
    );
    expect(manager.officeNumber).toBe("7735555555");
  });
});
