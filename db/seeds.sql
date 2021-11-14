INSERT INTO department (id, department_name)
VALUES
(1, "command"),
(2, "security"),
(3, "enginnering"),
(4, "science"),
(5, "medical"),
(6, "Intellegence");

INSERT INTO roles (id, title, salary, department_id)
VALUES
(1, "Commanding Officer" , 100000, 1),
(2, "First Officer", 80000, 1),
(3, "Science Commander", 75000, 4),
(4, "Security Commander", 75000, 2),
(5, "Lieutenant Counsellor", 65000, 5),
(6, "Medical Junior", 55000, 5),
(7, "Lieutenant Engineer", 55000, 3),
(8, "Chief of Enginneering", 85000, 3),
(9, "Constable", 60000, 2),
(10, "Simple Tailor", 40000, 6),
(11, "Exobotanist", 50000, 4),
(12, "Chief Medical Officer", 50000, 5),
(13, "Ensign Engineer", 45000, 3),
(14, "Security Personnel", 35000, 2),
(15, "Tactical Ensign", 35000, 1);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Benjamin", "Sisko", 1, NULL),
("Kira", "Nerys", 2, NULL),
("Jadzia", "Dax", 3, NULL),
("Worf", "Son of Mogh", 4, NULL),
("Julian", "Bashir", 5, NULL),
("Ezri", "Dax", 6, 5),
("Nog", "Son of Rom", 7, 8),
("Miles", "O'Brien", 8, NULL),
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





