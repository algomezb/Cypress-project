describe("ToS Test", () => {
  it("Load the page and title", () => {
    cy.visit("https://coreofscience.com/");
    cy.get("h1").should("contain", "Core of Science");
  });

  it("Load Logo", () => {
    cy.visit("https://coreofscience.com/");
    cy.get("img").should("have.class", "branding-logo");
    cy.get("body > header > div > a > img")
      .should("have.attr", "src")
      .should("include", "/assets/logo-white.png");
  });

  it("Links", () => {
    cy.visit("https://coreofscience.com/");
    cy.get("li:first-child > a").should("have.attr", "href", "/projects");
    cy.get("li:first-child > a").contains("PROJECTS", {
      matchCase: false,
    });

    cy.get("ul > li:nth-child(2) > a").should("have.attr", "href", "/about");
    cy.get("ul > li:nth-child(2) > a").contains("About", {
      matchCase: false,
    });

    cy.get("ul > li:nth-child(3) > a").should("have.attr", "href", "/dian");
    cy.get("ul > li:nth-child(3) > a").contains("DIAN", {
      matchCase: false,
    });

    cy.get("ul > li:nth-child(4) > a").should("have.attr", "href", "/donate");
    cy.get("ul > li:nth-child(4) > a").contains("Donate", {
      matchCase: false,
    });

    cy.get(" li:nth-child(5) > a").should(
      "have.attr",
      "href",
      "https://tos.coreofscience.org/"
    );
    cy.get(" li:nth-child(5) > a > img").should(
      "have.attr",
      "src",
      "/assets/logo-tos.svg"
    );
  });

  it.only("Projects", () => {
    cy.visit("https://coreofscience.com/");
    cy.get(".projects > .container > h2").should("contain", "PROJECTS");
    cy.get(".projects > .container > h2 > img").should(
      "have.attr",
      "src",
      "/assets/gear-icon.png"
    );

    cy.get(".featured-projects > :nth-child(1)").should(
      "contain",
      "Bio data lab"
    );

    cy.get(".featured-projects > :nth-child(1) > p").contains(
      "This project seeks to standardize methodologies for the treatment of analytical signals of biological origin from metabolomics and peptidomics analyses."
    );

    cy.get(".featured-projects > :nth-child(1) > a")
      .should("have.attr", "href", "/projects/data-lab")
      .and("have.text", "Learn more");
  });
});
