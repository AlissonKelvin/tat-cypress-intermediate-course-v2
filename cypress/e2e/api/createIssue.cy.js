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
    cy.api_createIssues(issue).then((resonse) => {
      expect(resonse.status).to.equal(201);
    });
  });
});
