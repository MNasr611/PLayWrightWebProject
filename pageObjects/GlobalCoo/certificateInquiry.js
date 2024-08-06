/**  
* @author Mohamed Nasr
/******************************************************** */
import commons from '../Commons';



class CertificateInquiry {
    constructor(page) {
        this.certificateInquiry = page;
        this.captchaInput = this.certificateInquiry.locator("(//input[@id='captcha-value'])[1]");
        this.certificateNumber = this.certificateInquiry.locator("//input[@id='certficaiteNumber']");
        this.cdate = this.certificateInquiry.locator("(//div[contains(@class,'having')])[1]");
        this.specificdate = this.certificateInquiry.locator("//div[contains(text(),'xReplace')]");
        this.search = this.certificateInquiry.locator("//button[contains(@type,'submit')]");
        this.reSearch = this.certificateInquiry.locator("//button[contains(@class,'research')]");




    }//constructor
    
    async searchForSomething(captcha, certNumber, day ,month , year ) {
        await this.captchaInput.type(captcha);
        await this.certificateNumber.fill(certNumber);
        await this.cdate.click();
        await this.certificateInquiry.selectOption("//select[contains(@title,'month')]", month);
        await this.certificateInquiry.selectOption("//select[contains(@title,'year')]", year);
        console.log(this.specificdate.replace('xReplace', day));
        await this.sleep(20000); 
        await this.search.click();
        await this.certificateInquiry.waitForLoadState('networkidle');
        await commons.expect(this.reSearch).toBeVisible();

    }//waitForLoadState()

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    

    updateLocator(locator,value){
        return locator.toString().replace('xReplace', value);

    }

}//class

export default CertificateInquiry;
