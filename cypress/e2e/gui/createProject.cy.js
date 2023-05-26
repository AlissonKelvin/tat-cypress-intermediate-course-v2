/// <reference types="Cypress" />

import {faker} from '@faker-js/faker'

describe('Successful creation of a project',() =>{

    beforeEach(()=>{

        cy.api_deleteProjects()
        cy.login()

    })

    it("Create Project",() =>{

        const project = {

            name:`project - ${faker.datatype.uuid()}`,
            description: faker.random.word(10)

        }

        cy.gui_createProject(project)

        cy.contains('h1', `${project.name}`).should('be.visible')

    })

})