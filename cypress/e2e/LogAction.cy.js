import Login from "./LoginPage";
import userData from "../fixtures/userData.json";

const actionP = new Login();
var h1;
class ActionLog {
  readjson() {
    cy.fixture("userData.json").then((data) => {
      cy.log(data.Username);
    });
  }

  enterUsername() {
    this.readjson();
    actionP.getUserName().type(userData.Username);
  }

  enterPassword(password) {
    actionP.getPassword().type(userData.Password);
  }

  submitbutton() {
    actionP.getsubmitbutton().click();
  }
}

export default ActionLog;
