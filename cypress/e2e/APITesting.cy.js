describe("Https Request", () => {
  it("Get Call", () => {
    cy.request("Get", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });

  it("Post Call", () => {
    cy.request({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        userId: 1,
        title: "API Tesing",
        body: "This is Post Call",
      },
    })
      .its("status")
      .should("equal", 201);
  });

  it("Put Call", () => {
    cy.request({
      method: "put",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        userId: 1,
        title: "API Tesing Updated",
        body: "This is Put Call",
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("Delete Call", () => {
    cy.request({
      method: "delete",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("equal", 200);
  });
});
