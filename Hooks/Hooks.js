


import yaml from 'js-yaml';
import fs from 'fs';
const { chromium } = require('playwright');




class Hooks {


    constructor() {
        this.page = null;
        this.url = null;
        this.config = null;
        this.testdata = null;
        this.dbConfig = null;
    }//constructor


    async initialize() {
        this.page = await this.initializePage();
        this.config = await this.readYamlFile('./Configs/config.yml');
        if (this.getConfig().Environment === 'Test') {
            this.url = await this.readYamlFile('./Configs/URLs/Test/url.yml');
            this.dbConfig = await this.readYamlFile('./Configs/DB/Test/dbConfig.yml');
            this.testdata = await JSON.parse(JSON.stringify(require('../TestData/Test/testdata.json')));

        } else if (this.getConfig().Environment === 'Pre') {
            this.url = await this.readYamlFile('./Configs/URLs/Pre/url.yml');
            this.dbConfig = await this.readYamlFile('./Configs/DB/Pre/dbConfig.yml');
            this.testdata = await JSON.parse(JSON.stringify(require('../TestData/Pre/testdata.json')));
        }
    }





    readYamlFile(filePath) {
        try {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const data = yaml.load(fileContents);
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
            const context = await browser.newContext({
                headless: false,
                args: ['--start-maximized'],
            });
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

    getDbConfig() {
        return this.dbConfig;
    }


}
export default Hooks;
