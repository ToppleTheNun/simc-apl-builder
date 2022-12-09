describe("smoke tests", () => {
  it("allows you to navigate to home", () => {
    cy.visitAndCheck("/");
  });
});
