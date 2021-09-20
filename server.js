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

connection.connect((err) => {
    if (err) throw err;
    console.log('database connected');
    startPrompt();
})

const startPrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Please select an option:",
            choices: [
                "View All Employees",
                "Add Employee",
                "Remove Employee",
                "View All Roles",
                "Add a Role",
                "Remove a Role",
                "View All Departments",
                "Add a Department",
                "Remove a Department",
                "Update Employee Manager",
                "View Employees by Manager",
                "Departmental Salary Budget",
                "Exit",
                new inquirer.Separator()
            ]
        }
    ]).then((answer) => {
        switch (answer.menu) {
            case "View All Employees":
                getEmployees();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "View All Roles":
                getRoles();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Remove a Role":
                removeRole();
                break;
            case "View All Departments":
                getDept();
                break;
            case "Add a Department":
                addDept();
                break;
            case "Remove a Department":
                removeDept();
                break;
            case "Update Employee Manager":
                updateManager();
                break;
            case "View Employees by Manager":
                getByManager();
                break;
            case "Departmental Salary Budget":
                totalSalaries();
                break;
            default:
                connection.end();
        }
    })
}

const getEmployees = () => {
    const query = 
        `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
        CONCAT(manager.first_name, " ", manager.last_name) AS manager
        FROM employee
        LEFT JOIN role on role.id = employee.role_id
        LEFT JOIN department on department.id = role.department_id
        LEFT JOIN employee AS manager on manager.id = employee.manager_id`;

    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        startPrompt();
    })
}