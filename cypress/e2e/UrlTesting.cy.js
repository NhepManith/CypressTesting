describe("TestingReport", () => {
  it("PositiveTest", () => {
    cy.visit("https://www.chipmongbank.com.kh/en");
    cy.title().should("eq", "Home | Chip Mong Bank");
  });

  it("NegativeTest", () => {
    cy.visit("https://www.chipmongbank.com.kh/en");
    cy.title().should("eq", "Home |Chip Mong Bank");
  });
});
