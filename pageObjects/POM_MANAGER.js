import { LoginPage } from './Facility/Login/LoginPage';

let pomPage
let loginPage;





class POM_Manager  {
    constructor(page) {
        pomPage = page;
        loginPage = new LoginPage(pomPage);

    }//constructor



    getLoginPage() {
        return loginPage;
    }



}//class

module.exports = { POM_Manager }; 