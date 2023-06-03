import {faker} from '@faker-js/faker'

const options = {env: {snapshotOnly: true}}

describe('Set milestone on issue', options, () =>{

    const  issue = { 
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.word(5),
        
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.word(10),
      },
    };

    const milestone = {

        title:`milestone-${faker.random.word()}`

    }


    beforeEach(() =>{

        cy.api_deleteProjects()
        cy.login()
        cy.api_createIssues(issue).then(response =>{

            cy.api_createMilestone(response.body.project_id, milestone)
            cy.visit(`${Cypress.env("user_name")}/${issue.project.name}/issues/${response.body.iid}`)

        })

    })

    it('successfully set milestone on issue',() =>{

        cy.gui_setMilestoneOnIssue(milestone)

        cy.get(".block.milestone").should("contain", milestone.title)
        
    })


})