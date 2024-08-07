const sql = require('mssql');

class DbConnection {

    constructor() {
        this.connection = null;
    }



    async connectToDB(config) {
        //npm install mssql
        const dbconfig = {
            server: config.DBHost,    // Your database host
            user: config.DBUser,         // Your database username
            password: config.DBPass, // Your database password
            database: config.DBName, // Your database name
            port: config.DBPort,

            options: {
                encrypt: true, // Use encryption if you're connecting to Azure SQL Database
                trustServerCertificate: true // Set to true for self-signed certs in development
            },
        };
        console.log('DB Config:', dbconfig);
        try {
            this.connection = await sql.connect(dbconfig);
            return this.connection;
        } catch (err) {
            console.error('Error connecting to the database:', err);
            throw err;
        }

    }


}
export default DbConnection;