//arrange
describe('Testing user onboarding form', function () {
  this.beforeEach(function() {
    cy.visit("http://localhost:3000")
  })
  it("Add test to input and submit form", function () {
    cy.get('input[name="firstName"]')
      .type("Dan")
      .should("have.value", "Dan")
    cy.get('input[name="lastName"]')
      .type("Anderson")
      .should("have.value", "Anderson")
    cy.get('input[name="email"]')
      .type("dan@dan.com")
      .should("have.value", "dan@dan.com")
    cy.get('[type="checkbox"]').check()
      .check()
      .should("be.checked")
    cy.get('button').click()
                   
  })
})