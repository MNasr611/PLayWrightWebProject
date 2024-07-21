import { POM_Manager } from '../pageObjects/POM_MANAGER';
import { Hooks } from '../Hooks/Hooks';
import { expect } from 'playwright/test';



let pomManager;
let hooks;
let globePage;
let url;
let config;
let testdata;
let expectAnnotation = expect;


class Commons {

    constructor() {
        pomManager = null;
        hooks = null;
        globePage = null;
        url = null;
        config = null;
        testdata = null;
        hooks = new Hooks();
    }//constructor




    async initialize() {
        await hooks.initialize(); // Ensure page is initialized
        globePage = hooks.getPage();
        pomManager = new POM_Manager(globePage);
        url = hooks.getURLS();
        config = hooks.getConfig();
        testdata = hooks.getTestData();
    }


    getPOMManager() {
        return pomManager;
    }
    getPage() {
        return globePage;
    }
    getURLS() {
        return url;
    }

    getConfig() {
        return config;
    }

    getTestData() {
        return testdata;
    }

    getExpect() {
        return expectAnnotation;
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

module.exports = Commons;
