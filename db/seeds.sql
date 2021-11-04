INSERT INTO department (id, name)
VALUES
(1, "command"),
(2, "security"),
(3, "enginnering"),
(4, "science"),
(5, "medical");

INSERT INTO roles (id, title, salary, department_id)
VALUES
(1, "commanding officer" , 100000, 1),
(2, "first officer", 80000, 1),
(3, "lieutenant commander", 75000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Benjamin", "Sisko", 1, 0),
("Kira", "Nerys", 2, 1);