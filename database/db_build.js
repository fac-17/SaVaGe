const dbConnection = require('./db_connection');
const fs = require('fs');
const path = require('path');

const buildLink = path.join(__dirname, 'db_build.sql');//creating a path theat is a string 
const sql = fs.readFileSync(buildLink).toString();//listing of sql we create

dbConnection.query(sql, (error, res)=> {
    if (error) throw error;
    console.log('Tables are created', res)
});

