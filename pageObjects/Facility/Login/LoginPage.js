/**  
* @author Mohamed Nasr
/******************************************************** */
const confirmatioCodeValue = '0000';
import commons from '../../../pageObjects/Commons';
import HEADERS from '../../../Configs/ENUMS/HEADERS';

class LoginPage {
    constructor(page) {
        this.loginPage = page;
        this.textSearch = this.loginPage.locator('(//textarea)[1]');
        this.googleSearch = this.loginPage.locator("(//input[contains(@value,'بحث')])[2]");
        this.txtBox_username = this.loginPage.locator('//input[@id="Email"]');
        this.txtBox_password = this.loginPage.locator('//input[@name="Password"]');
        this.btn_Login = this.loginPage.locator("//input[contains(@id,'login')]");


        this.verify_phone = this.loginPage.locator("//input[contains(@id,'btnVerifyPhoneNumber')]");
        this.confirmatioCode = this.loginPage.locator("//input[contains(@id,'txtConfirmationCode')]");
        this.verifyOTP = this.loginPage.locator("//input[contains(@id,'btnVerifiyOTP')]");
        this.addNewProduct = this.loginPage.locator("(//a[contains(@href,'Add')]//span[@class='h4'])[1]");



    }//constructor


    async searchForSomething(searchData) {
        await this.textSearch.fill(searchData);
        await this.googleSearch.click();
        await this.loginPage.waitForLoadState('networkidle');
    }//waitForLoadState()


    async loginToApplication(username, password) {
        await this.txtBox_username.fill(username);
        await this.txtBox_password.fill(password);
        await this.btn_Login.click();
        await this.loginPage.waitForLoadState('networkidle');
        if (await this.verifyOTP.isVisible()) {
            // this.verify_phone.click();
            this.confirmatioCode.fill(confirmatioCodeValue);
            this.verifyOTP.click();
        }



    }//loginToApplication()


    async validateHomePageOpened() {
        await this.loginPage.waitForLoadState('networkidle');
        await commons.expect(this.loginPage).toHaveURL(commons.getURLS().FacilityHome);
    }



    async validateHomePageHeader(){
        console.log('HEADERS.HOME_PAGE.toString()  : ' + HEADERS.HOME_PAGE.toString());
        await commons.expect(this.addNewProduct).toHaveText(HEADERS.HOME_PAGE.toString());
    }

}//class

export default LoginPage;
