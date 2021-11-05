INSERT INTO department (id, name)
VALUES
(1, "command"),
(2, "security"),
(3, "enginnering"),
(4, "science"),
(5, "medical"),
(6, "Intellegence");

INSERT INTO roles (id, title, salary, department_id)
VALUES
(1, "commanding officer" , 100000, 1),
(2, "first officer", 80000, 1),
(3, "lieutenant commander", 75000, 4),
(4, "lieutenant commander", 75000, 2),
(5, "lieutenant", 65000, 5),
(6, "lieutenant junior", 55000, 5),
(7, "lieutenant junior", 55000, 3),
(8, "Chief of Operations", 85000, 3),
(9, "Constable", 60000, 2),
(10, "Simple Tailor", 40000, 6),
(11, "Exobotanist", 50000, 4),
(12, "chief medical officer", 50000, 5),
(13, "engineer", 45000, 3),
(14, "security personnel", 35000, 2),
(15, "ensign", 35000, 1);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Benjamin", "Sisko", 1, NULL),
("Kira", "Nerys", 2, 1),
("Jadzia", "Dax", 3, 1),
("Worf", "Son of Mogh", 4, 1),
("Julian", "Bashir", 5, 1),
("Ezri", "Dax", 6, 5),
("Nog", "Son of Rom", 7, 8),
("Miles", "O'Brien", 8, 1),
("Odo", "Changeling", 9, 4),
("Elim", "Garak", 10, NULL),
("Keiko", "O'Brien", 11, 3),
("Simon", "Tarses", 12, 5),
("Michael", "Eddington", 4, 1),
("Phillipa", "Matthias", 12, 5),
("Karan", "Adabwe", 13, 7),
("Masoud", "Ahzed", 13, 7),
("Natalia", "Aponte", 14, 9),
("Dalia", "Parks", 14, 9),
("Gerda", "Roness", 15, 2),
("Jose", "Chavez", 15, 2);





