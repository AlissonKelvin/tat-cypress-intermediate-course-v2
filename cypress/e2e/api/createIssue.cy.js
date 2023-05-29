import {faker} from '@faker-js/faker'

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
      expect(resonse.title).to.equal(issue.title)
      expect(resonse.description).to.equal(issue.description)
    });
  });
});
