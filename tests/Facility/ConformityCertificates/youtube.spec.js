import commons from '../../../pageObjects/Commons.js';



commons.test.beforeAll("Intialize", async () => {
    await commons.initialize();
}
);




commons.test('Go To Youtupe', async () => {
    await commons.goToYouTube();
});


