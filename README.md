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
The URL of the GitHub repository: https://github.com/azuryte5/deep-space-manager

The link to the screencastify video: https://watch.screencastify.com/v/zBSdIeIjVO7j8RvXqgW0

-----
## Usage
This an employee list for staff aboard the Space station DS9. Employees can be added, updated, removed and sorted by department, manager

Begin by running mysql and adding database, table and seed
To start app run:  ```npm start```

Choose options in menu 

To exit program select ```Quit``` or Shirt+C


 ![code preview](https://user-images.githubusercontent.com/85147307/141664565-3c91c212-80a0-413d-a103-e90588f6a8bb.png)
 ![https://user-images.githubusercontent.com/85147307/141664564-00cec570-a902-441e-8dd2-9036aeec96be.png)

-----
## Tech Used 

- Node js
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [console.table](https://www.npmjs.com/package/console.table)

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
[✔️] WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
[✔️] WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
[✔️] WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
[✔️] WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
[✔️]WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
[✔️]WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
[✔️] WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
[✔️] WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

----
## Credits
Made by Andrew Lefebvre 🏢

-----
