/**  
* @author Mohamed Nasr
/******************************************************** */

// import { Commons } from '../../Commons';
let loginPage;
class LoginPage {

    constructor(page) {
        loginPage = page;
        this.textSearch = loginPage.locator('(//textarea)[1]');
        this.googleSearch = loginPage.locator("(//input[contains(@value,'بحث')])[2]");
        this.txtBox_username = loginPage.locator('//input[@id="Email"]');
        this.txtBox_password = loginPage.locator('//input[@name="Password"]');
        this.btn_Login = loginPage.locator('//input[@id="login-btn-t"]');
    }//constructor


    async searchForSomething(searchData) {
        await this.textSearch.fill(searchData);
        await this.googleSearch.click();
        await loginPage.waitForLoadState('networkidle');
    }//waitForLoadState()
    

    async loginToApplication(username, password) {
        console.log('Filling ' + username + ' in Username textBox');
        await this.txtBox_username.fill(username);
        console.log('Filling ' + password + ' in Password textBox');
        await this.txtBox_password.fill(password);
        console.log('Clicking on Login button');
        await this.btn_Login.click();
        await this.loginPage.waitForLoadState('networkidle');
    }//loginToApplication()

}//class

module.exports = { LoginPage }; 