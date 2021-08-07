const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it("Has a school attribute", () => {
    const intern = new Intern(
      2,
      "Tyree Nettles",
      "nettles.code@gmail.com",
      "NorthWestern"
    );
    expect(intern.school).toBe("NorthWestern");
  });

  it("Can get role via getRole()", () => {
    const intern = new Intern(
      2,
      "Tyree Nettles",
      "nettles.code@gmail.com",
      "NorthWestern"
    );
    expect(intern.getRole()).toBe("Intern");
  });

  it("Can get the school's information via getSchool()", () => {
    const intern = new Intern(
      2,
      "Tyree Nettles",
      "nettles.code@gmail.com",
      "NorthWestern"
    );
    expect(intern.getSchool()).toBe("NorthWestern");
  });
});
