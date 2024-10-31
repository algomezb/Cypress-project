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

  it("Projects", () => {
    //Title project
    cy.visit("https://coreofscience.com/");
    cy.get(".projects > .container > h2").should("contain", "PROJECTS");
    cy.get(".projects > .container > h2 > img").should(
      "have.attr",
      "src",
      "/assets/gear-icon.png"
    );
    //Bio data lab
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

    //Tree of Science
    cy.get(".featured-projects > :nth-child(3) >h3").should(
      "contain",
      "Tree of Science"
    );

    cy.get(".featured-projects > :nth-child(3) > p").contains(
      " reads files from Web of Science (WoS) and Scopus and creates recommendation dataframe using the metaphor of a tree. Papers in the root represent the seminals. Papers in the trunk represent the structural, and papers in the leaves present the current literature."
    );

    cy.get(".featured-projects > :nth-child(3) >a")
      .should("have.attr", "href", "/projects/tos")
      .and("have.text", "Learn more");

    //Margaret
    cy.get(".featured-projects > :nth-child(2) >h3").should(
      "contain",
      "Margaret"
    );

    cy.get(".featured-projects > :nth-child(2) > p").contains(
      "Margaret is an R package created with some students from Universidad Católica Luis Amigó. This package extracts data from Minciencias web pages (research groups and researchers). Next, margaret merges it with data from Scimago, Publindex, and Google Scholar; finally, the merged data is exported in a "
    );

    cy.get(".featured-projects > :nth-child(2) >a")
      .should("have.attr", "href", "/projects/margaret")
      .and("have.text", "Learn more");
  });
});
