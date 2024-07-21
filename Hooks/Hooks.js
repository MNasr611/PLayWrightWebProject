


const yaml = require('js-yaml');
const fs = require('fs')
const { chromium } = require('playwright');

let page;
let url;
let config;
let testdata;


class Hooks {


    constructor() {
        page = null;
        url = null;
        config = null;
        testdata = null;
    }//constructor


    async initialize() {
        page = await this.initializePage();
        config = await this.readYamlFile('./Configs/Config/config.yml');
        url = await this.readYamlFile('./Configs/URLs/url.yml') ;
        testdata = await JSON.parse(JSON.stringify(require('../TestData/testdata.json')));
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
        return page;
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





}
module.exports = { Hooks }; 