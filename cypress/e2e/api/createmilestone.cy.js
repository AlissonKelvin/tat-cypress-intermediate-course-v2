import { faker } from "@faker-js/faker";

describe('Create milestone (API)',() =>{


    const issue = {

        title:`Issue-${faker.datatype.uuid()}`,
        description: faker.random.word(5),
        project:{
            name:`Project-${faker.datatype.uuid()}`,
            description: faker.random.words(10)
        }

    }

    const milestone = {

        title:`milestone-${faker.random.words(5)}`,
    }

    beforeEach(() =>{

        cy.api_deleteProjects()

    })

   it('Sucessful creation of a milestone',() =>{
    cy.api_createIssues(issue).then(res =>{
        cy.api_createMilestone(res.body.project_id, milestone).then(response =>{
           
            const {status, body} = response

            expect(status).to.equal(201)
            expect(body.name).to.equal(milestone.name)
        })
    })
    
   })

})