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
        choices:['View All Departments', "View All Employees", "Placeholder 2", "Placeholder 3"],
    }).then(choice =>{
    switch(choice.loop) {
    case 'View All Departments':
        db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        });
        switchBoard()
        break;
    case 'View All Employees':
        db.query(`SELECT employees.first_name, employees.last_name, roles.title, roles.salary, department.name AS department_name
                FROM employees JOIN roles ON employees.role_id = roles.id JOIN department ON roles.department_id = department.id;`, function (err, results) {
        console.table(results);
        });
        switchBoard()
        break;
    }})}




db.query('SELECT * FROM roles', function (err, results) {
    console.table(results);
  });


db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    });

switchBoard();