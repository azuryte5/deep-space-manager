INSERT INTO department (id, name)
VALUES
(1, "command"),
(2, "security"),
(3, "enginnering"),
(4, "science"),
(5, "medical");

INSERT INTO roles (id, title, salary, department_id)
VALUES
(1, "commanding officer" , 100000, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Benjamin", "Sisko", 1, 2);