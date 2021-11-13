const db = require('./db/connections');
const inquirer = require('inquirer')
const table = require('console.table');
const { title } = require('process');
// const routes = require('./routes/crudRoutes');


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
        db.query('SELECT * FROM department', (err, res) => {
        if (err) {console.log("An error occurred")};
        console.log();
        console.table(res);
        switchBoard();
        });
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
            LEFT JOIN employees manager ON employees.manager_id = manager.id`, (err, res) => 
        {
        console.table(res);
        switchBoard();
        });
        break;
    
  
    case 'View All Employees by Department':
        db.query(`SELECT * FROM department`, (err, res) => {
            if (err) {console.log("An error occurred")};
        const pickDepartment = res.map(({id, department_name}) => ({name: department_name, value: id}))
        console.log(pickDepartment);
        inquirer.prompt({
            type: "list",
            name: "dept",
            message: "Pick a Department",
            choices: pickDepartment
        }).then (choices => {
            const choiceDept = choices
            console.log(choiceDept)
            db.query(`SELECT CONCAT (first_name, " ", last_name) AS name 
            FROM employees
            LEFT JOIN roles ON roles.id = employees.role_id
            LEFT JOIN department ON department.id = roles.department_id
            WHERE department.id = ?
            `, choiceDept.dept, (err, res) => {
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
    
    case "View All Employees by Manager":
        db.query(`SELECT CONCAT (first_name, " ", last_name) AS name, manager_id, id
                FROM employees WHERE manager_id IS NULL`, (err, res) => {
            if (err) {console.log("An error occurred")};
            console.log(res);
            const pickManager= res.map((manager) => ({name: manager.name, value: manager.id}))
            pickManager.push({name:"None", value: null})        
            console.log(pickManager);
        inquirer.prompt({
            type: "list",
            name: "manage",
            message: "Pick a Manager",
            choices: pickManager
        }).then (choices => {
            const choiceManager = choices.manage
            console.log(choices.manage)
            db.query(`SELECT CONCAT (first_name, " ", last_name) AS name 
            FROM employees WHERE manager_id = ?`, choiceManager, (err, res) => {
                if (err) {
                console.log("An error occurred");
                };
        console.table(res);
        switchBoard();
        })})});
        break;

    case "View Budget by Department":
        switchBoard()
        break;
    
    case "Add Employee":
    db.query(`SELECT roles.id, roles.title FROM roles`, (err,res) => {
        if (err) {console.log(err)};
    
        const pickRole = res.map((roles) => ({name: roles.title, value: roles.id}));
        console.log(pickRole);
    
    
    db.query(`SELECT * FROM employees WHERE manager_id IS NULL`, (err,res) => {
        if (err) {console.log(err)};

        const pickManager = res.map((manager) => ({name: manager.first_name + " " + manager.last_name, value: manager.id}))
        pickManager.push({name:"None" , value: null});
        console.log(pickManager);
   
        inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "Enter Employee's first name",
                validate: firstName => {
                    if (firstName){ return true;
                    } else {
                        console.log("Please enter a name!");
                  }}
            },
            {
                type: "input",
                name: "lastName",
                message: "Enter Employee's last name",
                validate: lastName => {
                    if (lastName){ return true;
                    } else {
                        console.log("Please enter a last name or initial!");
                  }}
            }, 
            {
                type: "list",
                name: "role",
                message: "Select a role for this employee",
                choices: pickRole
            },
            {
                type: "list",
                name: "manager",
                message: "Who is this employees manager",
                choices: pickManager
            }]).then(answers =>{
            const addEmployee = [answers.firstName, answers.lastName, answers.role, answers.manager]
            console.log(addEmployee)
    
        db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, addEmployee, (err, res) => {
        if (err) {console.log("An error occurred")};
         console.log(res);
         console.log("Employee successfully added!");
         switchBoard();       
    });
    });
    });
    });
        break;
    
    case "Add Role":

    db.query(`SELECT * FROM department`, (err,res) => {
        if (err){console.log(err)};
    const pickDepartment = res.map((department) =>({name:department.department_name, value: department.id}))
        console.log(pickDepartment)
        inquirer.prompt([
            {
                type: "input",
                name: "addRole",
                message: "Enter a name for a new role"
                // validate: roleInput => {
                //     if (!roleInput) {
                //     console.log("Role name can't be empty!")}}
            },
            {
                type: "input",
                name: "salary",
                message: "Enter a salary for job",
                // validate: salaryCheck => {
                //     if (salaryCheck <=0) {
                //         console.log("Salary can't be empty or negative value!");
                //     return false}}
            },
            {   type: "list",
                name: "askDepartment",
                message: "Which department does this role belong to?",
                choices: pickDepartment
            }
        ]).then(roleAnswers=>{
            const params = [roleAnswers.addRole, roleAnswers.salary, roleAnswers.askDepartment]
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`, params, (err,res) =>{
            if (err){console.log(err)};
            console.log("Role was added")
      
        switchBoard()
        });
        });
        });
        break;

    case "Add Department":
        inquirer.prompt([
            {
                type: "input",
                name: "addDepartment",
                message: "Enter a name for a new Department"
                // validate: roleInput => {
                //     if (!roleInput) {
                //     console.log("Role name can't be empty!")}}
            }]).then(departmentAnswers => {
                const params = departmentAnswers.addDepartment
            db.query(`INSERT INTO department (department_name) VALUES (?)`, params, (err,res) =>{
                if (err){console.log(err)};
                console.log("Department was added")
      
            switchBoard()
            });
            });
        break;
    
    case "Remove Employee":
        db.query(`SELECT * FROM employees`, (err, res) =>{
            if (err){console.log(err)};
        
        const deleteEmployee = res.map((toDelete)=>({name: toDelete.first_name + " " + toDelete.last_name, value: toDelete.id}))
        
        inquirer
        .prompt([
            {
            type: 'list',
            name: 'destroy',
            message: 'Select an employee to delete',
            choices: deleteEmployee
            }
            
        ]).then(toDelete => {
            const params = toDelete.destroy
            console.log(toDelete)
            console.log(toDelete.destroy)
        db.query(`DELETE FROM employees WHERE id = ?`, params, (err, res) => {
            if (err) {console.log("An error occurred")};
            console.log(res);
            console.log("An employee was deleted");
        switchBoard();
        });
        });
        });
        break;
    
    case "Remove Role":
        switchBoard()
        break;

    case "Remove Department":

        switchBoard()
        break;

    case "Update Employee Role":
        db.query(`SELECT * FROM employees`, (err, res) => {
            if (err) {console.log("An error occurred")};
        console.log(res)   
        const pickEmployee = res.map((employees) => ({name: employees.first_name + " " + employees.last_name, value: employees.id}))
        console.log(pickEmployee)
        db.query(`SELECT * FROM roles`, (err,res) =>{
            if (err) {console.log("An error occurred")};
        const pickRole = res.map((roles) => ({name: roles.title, value: roles.id}))
        
        inquirer.prompt([
            {
            type: 'list',
            name: 'update',
            message: 'Select an employee to update Role',
            choices: pickEmployee
            },
            {
            type: 'list',
            name: 'role',
            message: 'Select a new role',
            choices: pickRole
            } 
        ]).then(pickEmployeeAnswer => {
            const pickedEmployee= pickEmployeeAnswer
            console.log(pickedEmployee)
        
        const params = [pickedEmployee.role, pickedEmployee.update]
        console.log(params)

        db.query(`UPDATE employees SET role_id = ? WHERE id = ?`, params, (err, res) => {
            if (err) {console.log("An error occurred")};
        console.log(res)
        switchBoard()
        });
        });
        });
        });
        break;
    
    case "Update Employee Manager":
        db.query(`SELECT * FROM employees`, (err, res) => {
            if (err) {console.log("An error occurred")};
        console.log(res)   
        const pickEmployee = res.map((employees) => ({name: employees.first_name + " " + employees.last_name, value: employees.id, boss: employees.manager_id}))
        console.log(pickEmployee)

        db.query(`SELECT * FROM employees WHERE manager_id IS NULL`, (err,res) => {
            if (err) {console.log(err)};
    
            const pickManager = res.map((manager) => ({name: manager.first_name + " " + manager.last_name, value: manager.id}))
            pickManager.push({name:"None" , value: null});
            console.log(pickManager);

        inquirer.prompt([
            {
            type: 'list',
            name: 'update',
            message: 'Select an employee to update their manager',
            choices: pickEmployee
            },
            {
                type: "list",
                name: "manager",
                message: "Who is this employees manager",
                choices: pickManager
            }]).then(pickEmployeeAnswer => {
                const pickedEmployee= pickEmployeeAnswer
                console.log(pickedEmployee)
            
            const params = [pickedEmployee.manager, pickedEmployee.update]
            console.log(params)
            

        db.query(`UPDATE employees SET manager_id = ? WHERE id = ?`, params, (err, res) => {
            if (err) {console.log("An error occurred")};
        console.log(res)
        switchBoard()
    });
});
});
});
    break;
    
    case 'Quit':
        process.exit()
        
    }})}


switchBoard();