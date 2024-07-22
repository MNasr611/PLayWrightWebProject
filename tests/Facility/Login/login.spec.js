

import commons from '../../../pageObjects/Commons.js';




commons.test.beforeAll("Intialize", async () => {
    await commons.initialize();
}
);



commons.test('login to facility ', async () => {
    await commons.goToFacilityLoginPage();
    await commons.getPOMManager().getLoginPage().loginToApplication(commons.getTestData().PLASTIC.JEEM.email,commons.getTestData().PWD.valid);
    // await commons.getPOMManager().getLoginPage().validateHomePageOpened();


});


commons.test('validate that home page opened', async () => {
    await commons.getPOMManager().getLoginPage().validateHomePageOpened();


});


commons.test('validate home page header', async () => {
    await commons.getPOMManager().getLoginPage().validateHomePageHeader();


});
