# deep-space-manager
12. SQL Challenge: Employee Tracker
# Table of Contents
1. [Links](#links)
1. [Usage](#usage)
1. [Tech used](#tech-used)
1. [Assignment Details](#assignment-details)
    1. [User Story](#user-story)
    1. [Acceptance Criteria](#acceptance-criteria)
1. [Credits](#credits)

## Links
The URL of the GitHub repository: 

The link to the screencastify video:

-----
## Usage
Notes can be added, deleted and returned on reload being stored on deployed heroku application
<!-- ![note taker application](https://user-images.githubusercontent.com/85147307/139871138-f81f589d-9e4c-40a6-b445-8780952cbe6b.png) -->
<!-- ![code for note taker challenge](https://user-images.githubusercontent.com/85147307/139871126-1716a1ab-cfee-470e-a692-bfb4928cf097.png) -->

-----
## Tech Used 

- Node js
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [console.table](https://www.npmjs.com/package/console.table)
- Insomnia 

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
✔️
```md
GIVEN a command-line application that accepts user input
[ ] WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
[ ] WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
[ ] WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
[ ] WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
[ ] WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
[ ] WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
[ ] WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
[ ] WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

----
## Credits
Made by Andrew Lefebvre 🏢

-----
