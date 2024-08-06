


import yaml from 'js-yaml';
import fs from 'fs';
const sql = require('mssql');
const { chromium } = require('playwright');




class Hooks {


    constructor() {
        this.page = null;
        this.url = null;
        this.config = null;
        this.testdata = null;
        this.dbConfig = null;
        this.connection = null;
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
        this.connection = await this.connectToDB();
    }


    async connectToDB() {
        //npm install mssql
        const config = {

            server: this.getDBConfig().DBHost,    // Your database host
            user: this.getDBConfig().DBUser,         // Your database username
            password: this.getDBConfig().DBPass, // Your database password
            database: this.getDBConfig().DBName, // Your database name
            port: this.getDBConfig().DBPort,

            options: {
                encrypt: true, // Use encryption if you're connecting to Azure SQL Database
                trustServerCertificate: true // Set to true for self-signed certs in development
            },
        };
    
        try {
            const connection = await sql.connect(config);
            return connection;
        } catch (err) {
            console.error('Error connecting to the database:', err);
            throw err;
        }

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

    getDBConfig() {
        return this.dbConfig;
    }
    getConnection() {
        return this.connection;
    }


}
export default Hooks;
