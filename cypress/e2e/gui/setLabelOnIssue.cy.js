import {faker} from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }


describe('Set label on issue', options, () =>{

    const  issue = { 
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.word(5),
        
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.word(10),
      },
    };

    const label = {

        name:`Label - ${faker.datatype.uuid()}`,
        color:'#f70000'

    }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.api_createIssues(issue).then((response) => {
          cy.api_createLabel(response.body.project_id, label)
          cy.visit(`${Cypress.env("user_name")}/${issue.project.name}/issues/${response.body.iid}`)
        })
      })
    it('successfully set label on issue',() =>{

        cy.gui_setLabelOnIssue(label)

        cy.get('.qa-labels-block').should('contain', label.name)


    })

})