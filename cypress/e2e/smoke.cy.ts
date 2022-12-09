describe("smoke tests", () => {
  it("allows you to navigate to home", () => {
    cy.visitAndCheck("/");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
