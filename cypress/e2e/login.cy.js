describe("Login test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("Should login successfully with valid credentials", () => {
    cy.get("#username").type("admin")
    cy.get("#password").type("123456")
    cy.get("#submit-button").click()
    cy.get("#loginMessage").should("contain.text", "Login successful!")
  })

  it("Should display error message when login with invalid credentials", () => {
    cy.get("#username").type("admin123")
    cy.get("#password").type("123")
    cy.get("#submit-button").click()
    cy.get("#loginMessage").should("contain.text", "Invalid username or password.")
  })

  it("Should display error message when login with empty credentials (Empty username)", () => {
    cy.get("#password").type("123456")
    cy.get("#submit-button").click()
    cy.get("#loginMessage").should("contain.text", "Please enter both username and password.")
  })

  it("Should display error message when login with empty credentials (Empty Password)", () => {
    cy.get("#username").type("admin")
    cy.get("#submit-button").click()
    cy.get("#loginMessage").should("contain.text", "Please enter both username and password.")
  })

  it("Should display error message when login with empty credentials (Empty username & password)", () => {
    cy.get("#submit-button").click()
    cy.get("#loginMessage").should("contain.text", "Please enter both username and password.")
  })
})
