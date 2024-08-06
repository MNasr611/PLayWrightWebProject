import LoginPage from './Facility/Login/LoginPage';
import CertificateInquiry from '../pageObjects/GlobalCoo/certificateInquiry';



class POM_Manager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.globalCOOInquiryCertificatePage = new CertificateInquiry(this.page);             

    }//constructor



    getLoginPage() {
        return this.loginPage;
    }

    getGlobalCoocertificateInquiryPage() {
        return this.globalCOOInquiryCertificatePage;
    }


}//class

export default POM_Manager;
