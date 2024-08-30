import ActionLog from "./LogAction.cy";
const logint = new ActionLog();

describe("OrangeHRMLoginpage", () => {
  it("login Test", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.url().should("include", "demo.orangehrmlive.com");
    logint.enterUsername();
    logint.enterPassword();
    logint.submitbutton();

    // logint.getUserName().type(user.Username);
    //logint.getPassword().type(user.Password);
    //logint.getsubmitbutton().click();
  });
});
