import {faker } from "@faker-js/faker";

describe('Create Labels (API)', () =>{

    const issue = {

        title:`Issue - ${faker.datatype.uuid()}`,
        description: faker.random.word(5),
        project:{
            name:`Project - ${faker.datatype.uuid()}`,
            description: faker.random.words(10)
        }

    }

    const label = {

        name:`Label - ${faker.datatype.uuid()}`,
        color:'#f70000'

    }

    beforeEach(() =>{

        cy.api_deleteProjects()

    })    

    it('Sucessful creation of a label',() =>{

        cy.api_createIssues(issue).then(res =>{
            cy.api_createLabel(res.body.project_id, label).then(response =>{
                
                const{status, body} = response

                expect(status).to.equal(201)
                expect(body.name).to.equal(label.name)
                expect(body.color).to.equal(label.color)

            })
        })

    })



})