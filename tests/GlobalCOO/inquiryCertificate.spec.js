

import commons from '../../pageObjects/Commons.js';

const captcha = '000000';
const certNumber = 'xyz';
const day = '27';
const month = '7';
const year = '2024';

commons.test.beforeAll("Intialize", async () => {
    await commons.initialize();
}
);



commons.test('search for certificate ', async () => {
    await commons.goToGlobalCoo();
    await commons.getPOMManager().getGlobalCoocertificateInquiryPage().searchForSomething(captcha, certNumber, day ,month , year);
    // await commons.getPOMManager().getLoginPage().validateHomePageOpened();


});


