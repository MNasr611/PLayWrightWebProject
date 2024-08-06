
import commons from '../../../pageObjects/Commons.js';



commons.test.beforeAll("Intialize", async () => {
    await commons.initialize();
}
);



commons.test('Search In Google', async () => {
    await commons.goToGoogle();
    await commons.getPOMManager().getLoginPage().searchForSomething(commons.getTestData().PLASTIC.JEEM.email);
});

