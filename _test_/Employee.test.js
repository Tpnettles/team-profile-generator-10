const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("Has a name attribute", () => {
    const employee = new Employee(
      "Tyree Nettles",
      2,
      "nettles.code@gmail.com",
      "7735555555"
    );
    expect(employee.name).toBe("Tyree Nettles");
  });

  it("Can get role via getRole()", () => {
    const employee = new Employee(
      2,
      "Tyree Nettles",
      "nettles.code@gmail.com",
      "7735555555"
    );
    expect(employee.getRole()).toBe("Employee");
  });

  it("Can get the employee's name via getName()", () => {
    const employee = new Employee(
      "Tyree Nettles",
      2,
      "nettles.code@gmail.com",
      "7735555555"
    );
    expect(employee.getName()).toBe("Tyree Nettles");
  });
});
