

import commons from '../../../pageObjects/Commons.js';




commons.test.beforeAll("Intialize", async () => {
    await commons.initialize();
}
);





commons.test('Test DB Connection', async () => {
    const result = await commons.getConnection().request().query('Select TOP 1 CRNumber FROm coc.FacilityInfo');
    console.log('Query Result:', result.recordset[0].CRNumber);
}
);


commons.test('login to facility ', async () => {
    await commons.goToFacilityLoginPage();
    await commons.getPOMManager().getLoginPage().loginToApplication(commons.getTestData().PLASTIC.JEEM.email, commons.getTestData().PWD.valid);
    console.log(await commons.getConnection().query('Select TOP 1 CRNumber FROm coc.FacilityInfo'));
}
);

commons.test('validate that home page opened', async () => {
    await commons.getPOMManager().getLoginPage().validateHomePageOpened();


});


commons.test('validate home page header', async () => {
    await commons.getPOMManager().getLoginPage().validateHomePageHeader();

});
