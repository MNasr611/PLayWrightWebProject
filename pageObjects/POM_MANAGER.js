import LoginPage from './Facility/Login/LoginPage';




class POM_Manager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page,this.commons);

    }//constructor



    getLoginPage() {
        return this.loginPage;
    }



}//class

export default POM_Manager;
