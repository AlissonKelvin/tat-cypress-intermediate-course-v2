import {faker} from '@faker-js/faker'

beforeEach(() =>{ 

  cy.api_deleteProjects()

})

describe("Create issue (API)", () => {
  const  issue = { 
      title: `issue - ${faker.datatype.uuid()}`,
      description: faker.random.word(5),
      
      project: {
          name: `project - ${faker.datatype.uuid()}`,
          description: faker.random.word(10),
    },
  };

  it("Successful creation of a issue", () => {
    cy.api_createIssues(issue).then((resonse) => { // criando issue e validando sua resposta
      expect(resonse.status).to.equal(201);
      expect(resonse.body.title).to.equal(issue.title)
      expect(resonse.body.description).to.equal(issue.description)
    });
  });
});
