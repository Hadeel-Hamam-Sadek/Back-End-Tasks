CREATE DATABASE school;
USE school;CREATE TABLE teacher (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    subject VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE student (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    grade VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE grades (
    id INT NOT NULL AUTO_INCREMENT,
    grade_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE subjects (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    full_mark INT NOT NULL,
    fail_mark INT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE exam_result (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    teacher_id INT NOT NULL,
    student_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (teacher_id) REFERENCES teacher(id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

