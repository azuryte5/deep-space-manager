USE business;

DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS department;


CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (8,0) NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INTEGER REFERENCES employees(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL,
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
);

SET FOREIGN_KEY_CHECKS = 0
-- To get the View by manager to work