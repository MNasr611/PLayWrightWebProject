


import yaml from 'js-yaml';
import fs from 'fs';
const { chromium } = require('playwright');




class Hooks {


    constructor() {
        this.page = null;
        this.url = null;
        this.config = null;
        this.testdata = null;
    }//constructor


    async initialize() {
        this.page = await this.initializePage();
        this.config = await this.readYamlFile('./Configs/Config/config.yml');
        this.url = await this.readYamlFile('./Configs/URLs/url.yml') ;
        this.testdata = await JSON.parse(JSON.stringify(require('../TestData/testdata.json')));
    }



    readYamlFile(filePath) {
        try {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            console.log(fileContents);
            const data = yaml.load(fileContents);
            console.log(data);
            return data;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
    
    async initializePage() {
        let browser;
        try {
            browser = await chromium.launch();
            const context = await browser.newContext();
            const newPage = await context.newPage();
            return newPage;
        } catch (error) {
            console.error('Error initializing page:', error);
            if (browser) {
                await browser.close();
            }
            throw error; // Re-throw the error after logging and cleanup
        }
    }
    


    getPage() {
        return this.page;
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





}
export default Hooks ;
