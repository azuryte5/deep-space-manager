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
        choices:["View All Departments", "View All Employees",
                "View ALL Employees by Department", "View All Employees by Manager",
                "Add Employee", "Remove Employee", 
                "Update Employee Role", "Update Employee Manager",
                "View All Roles", "Add Role", "Remove Role", "Add Department",
                "Remove Department", "View Budget by Department", "Quit"]
    }).then(choice =>{
    switch(choice.loop) {
    case 'View All Departments':
        db.query('SELECT * FROM department', function (err, results) {
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
            LEFT JOIN employees manager ON employees.manager_id = manager.id;
            `, function (err, results) {
        console.table(results);
        });
        switchBoard()
        break;
    
  
    case 'View All Employees by Department':
        const pickDepartment = db.query("SELECT * FROM department", (err, res) =>{
            if (err){console.log("An error occurred")
        return res.map(({id, name}) => ({name: name, value: id}));
        }
        console.log(pickDepartment.department_name)
    })
        prompt.apply({
            type: "list",
            name: "loop",
            message: "Pick a department",
            choices: pickDepartment
        }).then (choice => {
            choice.loop
        const sql = db.query("SELECT * FROM department WHERE id = ?", pickDepartment, (err, res) => {
                if (err) {
                    res.status(400).json({ error: err.message });
                    return;
                }
        })

        });
        switchBoard()
        break;

    case 'Quit':
        process.exit()
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