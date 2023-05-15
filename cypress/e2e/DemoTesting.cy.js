describe("ViewPage", function () {
  it("LoginPage", function () {
    cy.visit("https://demo.nopcommerce.com/");
    cy.title().should("eq", "nopCommerce demo store");
    cy.wait(5000);
    cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch");
    cy.wait(5000);
    cy.get('[type="submit"]').click();
    cy.wait(5000);
    cy.get('[type="button"]').click({ multiple: true });
    cy.get("#product_enteredQuantity_4").clear().type("2");
    cy.wait(5000);
    cy.get("#add-to-cart-button-4").click();
    cy.wait(5000);
    cy.get(".cart-label").click();
    cy.wait(5000);
    cy.get(".terms-of-service").click();
    cy.wait(5000);
    cy.get(".checkout-buttons").click();
  });
});
