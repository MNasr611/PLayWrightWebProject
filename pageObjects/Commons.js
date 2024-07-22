import POM_Manager from '../pageObjects/POM_MANAGER';
import Hooks from '../Hooks/Hooks';
import expect from 'playwright/test';





class Commons {

    constructor() {
        this.pomManager = null;
        this.globePage = null;
        this.url = null;
        this.config = null;
        this.testdata = null;
        this.hooks = new Hooks();


    }//constructor




    async initialize() {
        await this.hooks.initialize(); // Ensure page is initialized
        this.globePage = this.hooks.getPage();
        this.pomManager = new POM_Manager(this.globePage);
        this.url = this.hooks.getURLS();
        this.config = this.hooks.getConfig();
        this.testdata = this.hooks.getTestData();
    }


    getPOMManager() {
        return this.pomManager;
    }
    getPage() {
        return this.globePage;
    }
    getURLS() {
        return this.url;
    }

    getConfig() {
        return this.config;
    }

    getTestData() {
        return this.testdata;
    }



    async goToGoogle() {
        await this.getPage().goto(this.getURLS().Google);
        // await this.getPage().waitForLoadState('networkidle');
    }//clickOnElement()

    async goToYouTube() {
        await this.getPage().goto(this.getURLS().YouTube);
        await this.getPage().waitForLoadState('networkidle');
        await expect(this.getPage()).toHaveURL(this.getURLS().YouTube);

    }//clickOnElement()


}

export default Commons;
