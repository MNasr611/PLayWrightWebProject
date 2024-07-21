

import { test } from '@playwright/test';
const Commons = require('../../../pageObjects/Commons');
let commons = new Commons();




test.beforeAll("Intialize", async () => {
    await commons.initialize();
}
);




test('Go To Youtupe', async () => {
    // console.log(commons.testdata.PWD.valid);
    await commons.goToYouTube();
});
