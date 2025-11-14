describe('Todo tests', () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it('should add todo by pressing spara', () => {
    //assign
    const text = "test success";
    //const numberOfLisAtStart = cy.get("li").

    //act
    cy.get("input#todoText").type(text);
    cy.get("button#save").click();

    //assert
    cy.get("li").last().should("contain.text", text);
  });

  it('should add todo by pressing enter', () => {
    //assign
    const text = "test success";
    //const numberOfLisAtStart = cy.get("li").

    //act
    cy.get("input#todoText").type(`${text}{enter}`);
    cy.get("button#save").click();

    //assert
    cy.get("li").last().should("contain.text", text);
  });

  
});