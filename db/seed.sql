USE employeeDB;

INSERT INTO department (name)
VALUES ("Field"), ("Office"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Manager", 100000, 2),
    ("Chemist", 120000, 2),
    ("Investigator", 90000, 1),
    ("Janitor", 50000, 2),
    ("Accountant", 95000, 3),
    ("Security", 60000, 2),
    ("Lawyer", 110000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Marty", "Byrde", 5, null),
    ("Walter", "White", 2, 1),
    ("Michael", "Scott", 1, null),
    ("Dexter", "Morgan", 3, 2),
    ("Eric", "Cartman", 6, 1),
    ("Frank", "Gallagher", 3, 1),
    ("Ron", "Swanson", 1, null),
    ("Spencer", "Reid", 3, null),
    ("Cosmo", "Kramer", 6, 1);