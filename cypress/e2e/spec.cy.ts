/// <reference types="Cypress" />

describe("template spec", () => {
  it("passes", () => {
    expect(true).to.equal(true);
  });

  it("should visit application", () => {
    cy.visit("http://localhost:5173/");
  });
});
