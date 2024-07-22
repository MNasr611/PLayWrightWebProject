import test from '@playwright/test';
import Commons from '../../../pageObjects/Commons.js';
const commons = new Commons();




test.beforeAll("Intialize", async () => {
    await commons.initialize();
}
);




test('Go To Youtupe', async () => {
    // console.log(commons.testdata.PWD.valid);
    await commons.goToYouTube();
});
