const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("Has a github attribute", () => {
    const engineer = new Engineer(
      2,
      "Tyree Nettles",
      "nettles.code@gmail.com",
      "https://github.com/Tpnettles"
    );
    expect(engineer.github).toBe("https://github.com/Tpnettles");
  });

  it("Can get role via getRole()", () => {
    const engineer = new Engineer(
      2,
      "Tyree Nettles",
      "nettles.code@gmail.com",
      "https://github.com/Tpnettles"
    );
    expect(engineer.getRole()).toBe("Engineer");
  });

  it("Can get the engineer's github information via getGithub()", () => {
    const engineer = new Engineer(
      2,
      "Tyree Nettles",
      "nettles.code@gmail.com",
      "https://github.com/Tpnettles"
    );
    expect(engineer.github).toBe("https://github.com/Tpnettles");
  });
});
