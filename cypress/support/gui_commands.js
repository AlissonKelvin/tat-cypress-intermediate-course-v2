Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(user)
    cy.get("[data-qa-selector='password_field']").type(password, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()

    cy.get(".qa-user-avatar").should("be.visible")
  }

  const validate = () => {
    cy.visit('/')
    cy.location('pathname', { timeout: 1000 })
      .should('not.eq', '/users/sign_in')
  }

  const options = {
    cacheAcrossSpecs: true,
    validate,
  }

  if (cacheSession) {
    cy.session(user, login, options)
  } else {
    login()
  }
})

Cypress.Commands.add("logout", () => {
    
  cy.location("pathname").should("eq", "/");

  cy.get(".qa-user-avatar").click();
  cy.get('[data-qa-selector="sign_out_link"]').click();
});

Cypress.Commands.add("gui_createProject", (project) => {
  cy.visit("/projects/new");

  cy.get("#project_name").type(project.name, { delay: 0 });
  cy.get("#project_description").type(project.description, { delay: 0 });

  cy.get("#project_visibility_level_20").check().should("be.checked");
  cy.get("#project_initialize_with_readme").check().should("be.checked");

  cy.contains("input", "Create project").click();
});

Cypress.Commands.add('gui_createIssue',issue =>{

  cy.get('.project-name').first().click()
  cy.get('.qa-issues-item').click()

  cy.get('#new_issue_link').click()

  cy.get('#issue_title').type(issue.name, {delay:0})
  cy.get('#issue_description').type(issue.description, {delay:0})

  cy.contains('input', 'Submit issue').should('be.enabled').click()

})