
import commons from '../../../pageObjects/Commons.js';



commons.test.beforeAll("Intialize", async () => {
    await commons.initialize();
}
);



commons.test('Search In Google', async () => {
    // console.log(commons.testdata.PWD.valid);
    await commons.goToGoogle();
    await commons.getPOMManager().getLoginPage().searchForSomething(commons.getTestData().PLASTIC.JEEM.email);
});

