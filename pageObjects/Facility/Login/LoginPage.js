/**  
* @author Mohamed Nasr
/******************************************************** */

class LoginPage {

    constructor(page) {
        this.loginPage = page;
        this.textSearch = this.loginPage.locator('(//textarea)[1]');
        this.googleSearch = this.loginPage.locator("(//input[contains(@value,'بحث')])[2]");
        this.txtBox_username = this.loginPage.locator('//input[@id="Email"]');
        this.txtBox_password = this.loginPage.locator('//input[@name="Password"]');
        this.btn_Login = this.loginPage.locator('//input[@id="login-btn-t"]');
    }//constructor


    async searchForSomething(searchData) {
        await this.textSearch.fill(searchData);
        await this.googleSearch.click();
        await this.loginPage.waitForLoadState('networkidle');
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

export default LoginPage;
