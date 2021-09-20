const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

require('dotenv').config();

connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employees_DB'
});