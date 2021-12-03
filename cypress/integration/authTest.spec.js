describe("Login", () => {
    it("User redirected to / after proper /login", () => {
      cy.visit("http://localhost:3000/login");
  
      cy.get("input.userInput").type("raul");
  
      cy.get("input.passwordInput").type("123");
  
      cy.contains("Login").click();
  
      cy.url().should("eq", "http://localhost:3000/");
    });
  });
  
  describe("Attempt to get / while not logged in", () => {
    it("User redirected to /login after trying to get to /", () => {
      cy.visit("/");
  
      cy.url().should("include", "http://localhost:3000/login");
    });
  });
  
  describe("Incorrect login data", () => {
    it("User stays at /login", () => {
      cy.visit("/login");
  
      cy.get("input.userInput").type("user");
  
      cy.get("input.passwordInput").type("wrong");
  
      cy.contains("Login").click();
  
      cy.url().should("include", "http://localhost:3000/login");
    });
  });