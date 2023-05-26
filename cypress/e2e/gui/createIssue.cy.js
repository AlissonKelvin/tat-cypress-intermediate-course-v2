import {faker} from '@faker-js/faker'

describe('Create Issue',() =>{

    const issue = {

        name:`issue - ${faker.datatype.uuid()}`,
        description: faker.random.word(5)

    }



    beforeEach(()=>{

        cy.login()

    })

it('successfully issue',() =>{

    cy.visit('/')

    cy.gui_createIssue(issue)

    cy.contains('h2', `${issue.name}`).should('be.visible')

})

})