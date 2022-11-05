describe("test application", () => {
  before(()=>{
    cy.visit("/")
  })
    it("chack button", () => {
    // cy.get('[data-testid="myButton"]').
    contains("Click Here");
  });
  // it("chack button class", () => {
  //   cy.get('[data-testid="myButton"]')
  //   .should('have.class','btn-style')
  // });
  // it("chack button color",()=>{
  //   cy.get('[data-testid="myButton"]')
  //   .should('have.css', 'background-color', 'rgb(100, 149, 237)')
  // })
});