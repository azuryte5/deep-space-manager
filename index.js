const db = require('./db/connections');
const mysql = require('mysql2');
const inquirer = require('inquirer')
const table = require('console.table');
const { ColdObservable } = require('rxjs/internal/testing/ColdObservable');

const switchBoard = () => {
    return inquirer
    .prompt({
        type:"list",
        name:"loop",
        message: "What would you like to do?",
        choices:["View All Departments", "View All Employees",
                "View All Employees by Department", "View All Employees by Manager",
                "Add Employee", "Remove Employee", 
                "Update Employee Role", "Update Employee Manager",
                "View All Roles", "Add Role", "Remove Role", "Add Department",
                "Remove Department", "View Budget by Department", "Quit"]
    }).then(choice =>{
    switch(choice.loop) {
    case 'View All Departments':
        db.query('SELECT * FROM department', (err, results) => {
        console.table(results);
        });
        switchBoard()
        break;
    case 'View All Employees':
        db.query(`SELECT employees.id AS id, 
            employees.first_name, 
            employees.last_name, 
            roles.title, 
            department.department_name AS department, 
            roles.salary,
            CONCAT (manager.first_name, " ",manager.last_name) AS manager
            FROM employees
            LEFT JOIN roles ON employees.role_id = roles.id
            LEFT JOIN department ON roles.department_id = department.id
            LEFT JOIN employees manager ON employees.manager_id = manager.id`, (err, results) => 
        {
        console.table(results);
        });
        switchBoard()
        break;
    
  
    case 'View All Employees by Department':
        db.query(`SELECT * FROM department`, (err, res) => {
            if (err) {console.log("An error occurred")};

        const pickDepartment = res.map(({id, department_name}) => ({name: department_name, value: id}))
        inquirer.prompt({
            type: "list",
            name: "loop",
            message: "Pick a Department",
            choices: pickDepartment
        }).then (choices => {
            const choiceDept = choices
            console.log(choiceDept)
            db.query(`Select CONCAT (first_name, " ", last_name) AS name 
            From employees
            LEFT JOIN roles ON roles.id = employees.role_id
            LEFT JOIN department ON department.id = roles.department_id
            WHERE department.id = ?
            `, choiceDept.loop, (err, res) => {
                if (err) {
                console.log("An error occurred");
                };
        console.table(res);
        switchBoard();
        })})});
        break;
    case "View All Roles":
        db.query(`SELECT department.department_name, roles.title, roles.salary
        FROM roles
        Inner JOIN department ON roles.department_id = department.id`, (err, res) => {
            if (err) {console.log("An error occurred")};
        console.table(res);
        switchBoard();
        });
        break;

   
    
    // case 'View All Employees by department':
    //    prompt({
    //        type: "list",
    //        name: "loop",
    //        message: "Pick a department",
    //        choices: db.query(`SELECT * FROM department`, function(err, results {
    //        return  
    //        }))
    //    }).then(choice => {
    //        db.query(`SELECT * FROM employees WHERE id = ? ` )
    //    }) 
    
    // db.query(`SELECT employees.*, department.name AS department, roles.title, roles.salary
    //     FROM roles
    //     JOIN employees ON roles.id = employees.role_id
    //     JOIN department ON roles.department_id = department.id
    //     ORDER by employees.id;`, function (err, results) {
    //     console.table(results);
    //     });
    //     switchBoard()
    //     break;
    case 'Quit':
        process.exit()
        
    }})}


db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    });

switchBoard();