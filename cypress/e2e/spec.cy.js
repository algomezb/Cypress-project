describe("ToS Test", () => {
  it("Load the page and title", () => {
    cy.visit("https://coreofscience.com/");
    cy.get("h1").should("contain", "Core of Science");
  });

  it.only("Load Logo", () => {
    cy.visit("https://coreofscience.com/");
    cy.get("img").should("have.class", "branding-logo");
    cy.get("body > header > div > a > img")
      .should("have.attr", "src")
      .should("include", "/assets/logo-white.png");
  });
});
