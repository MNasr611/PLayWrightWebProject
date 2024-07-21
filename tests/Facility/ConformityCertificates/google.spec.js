

import { test } from '@playwright/test';
const Commons = require('../../../pageObjects/Commons');
let commons = new Commons();




test.beforeAll("Intialize", async () => {
    await commons.initialize();
}
);



test('Search In Google', async () => {
    // console.log(commons.testdata.PWD.valid);
    await commons.goToGoogle();
    await commons.getPOMManager().getLoginPage().searchForSomething(commons.getTestData().PLASTIC.JEEM.email);
});

