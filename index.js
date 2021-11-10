const db = require('./db/connections');
const mysql = require('mysql2');
const inquirer = require('inquirer')
const table = require('console.table')

const switchBoard = () => {
    return inquirer
    .prompt({
        type:"list",
        name:"loop",
        message: "What would you like to do?",
        choices:['View All Departments', "View All Employees", "View ALL Employees by department", "Placeholder 3"],
    }).then(choice =>{
    switch(choice.loop) {
    case 'View All Departments':
        db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        });
        switchBoard()
        break;
    case 'View All Employees':
        db.query(`SELECT employees.*, department.name AS department, roles.title, roles.salary
        FROM roles
        JOIN employees ON roles.id = employees.role_id
        JOIN department ON roles.department_id = department.id
        ORDER by employees.id;`, function (err, results) {
        console.table(results);
        });
        switchBoard()
        break;
    case 'View All Employees by department':
       prompt({
           type: "list",
           name: "loop",
           message: "Pick a department",
           choices: db.query(`SELECT * FROM department`, function(err, results {
           return results    
           }))
       }).then(choice => {
           db.query(`SELECT * FROM employees WHERE id = ? ` )
       }) 
    
    db.query(`SELECT employees.*, department.name AS department, roles.title, roles.salary
        FROM roles
        JOIN employees ON roles.id = employees.role_id
        JOIN department ON roles.department_id = department.id
        ORDER by employees.id;`, function (err, results) {
        console.table(results);
        });
        switchBoard()
        break;
    }})}


db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    });

switchBoard();