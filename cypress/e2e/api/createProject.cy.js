
import {faker} from '@faker-js/faker'

describe('Create Project (API)',() =>{

beforeEach(() =>{

    cy.api_deleteProjects()

})

it('successfully create',() =>{

    const project = {

        name: `Project - ${faker.datatype.uuid()}`,
        description: faker.random.words(5),

    }


    cy.api_createProject(project).then((response) =>{

        const {status, body} = response

        expect(status).to.equal(201)
        expect(body.name).to.equal(project.name)
        expect(body.description).to.equal(project.description)

    })

})


})