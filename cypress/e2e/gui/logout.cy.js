/// <reference types="Cypress" />

describe("logout", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("successfully logout", () => {
    cy.logout();

    cy.location("pathname").should("eq", "/users/sign_in");
  });
});
