-- =========================================================
-- COMBINED SQL PRACTICE WITH SOLUTION
-- Based on learning from Class 09 + Class 10
-- Focus:
-- DDL, constraints, DML, SELECT, aggregates, joins,
-- indexes, transactions, and schema thinking
-- =========================================================

-- Optional:
-- CREATE DATABASE cohort_sql_practice;

-- =========================================================
-- 1. CLEANUP
-- =========================================================

DROP TABLE IF EXISTS payments;
DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS students;

-- =========================================================
-- 2. DDL + CONSTRAINTS
-- =========================================================

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number CHAR(10) UNIQUE,
    age INT CHECK (age >= 16),
    city VARCHAR(50) DEFAULT 'unknown',
    current_status VARCHAR(20) DEFAULT 'active'
        CHECK (current_status IN ('active', 'inactive', 'graduated', 'on_leave')),
    current_score NUMERIC(5, 2) CHECK (current_score >= 0 AND current_score <= 100),
    joined_at DATE DEFAULT CURRENT_DATE
);

CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price INT NOT NULL CHECK (price >= 0),
    level VARCHAR(20) NOT NULL CHECK (level IN ('beginner', 'intermediate', 'advanced')),
    total_lessons INT NOT NULL CHECK (total_lessons > 0)
);

CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT NOT NULL REFERENCES students(student_id) ON DELETE CASCADE,
    course_id INT NOT NULL REFERENCES courses(course_id) ON DELETE CASCADE,
    enrolled_on DATE DEFAULT CURRENT_DATE,
    progress_percent INT DEFAULT 0 CHECK (progress_percent >= 0 AND progress_percent <= 100),
    completion_status VARCHAR(20) DEFAULT 'in_progress'
        CHECK (completion_status IN ('in_progress', 'completed', 'dropped')),
    UNIQUE(student_id, course_id)
);

CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    enrollment_id INT NOT NULL REFERENCES enrollments(enrollment_id) ON DELETE CASCADE,
    amount INT NOT NULL CHECK (amount >= 0),
    payment_status VARCHAR(20) NOT NULL
        CHECK (payment_status IN ('paid', 'pending', 'failed')),
    payment_method VARCHAR(20) NOT NULL
        CHECK (payment_method IN ('upi', 'card', 'netbanking')),
    paid_on DATE
);

-- =========================================================
-- 3. DML - INSERT DATA
-- =========================================================

INSERT INTO students (first_name, last_name, email, phone_number, age, city, current_status, current_score)
VALUES
('Prashant', 'Kumar', 'prashant@example.com', '9876543210', 22, 'Delhi', 'active', 88.50),
('Aman', 'Verma', 'aman@example.com', '9876543211', 24, 'Noida', 'active', 76.25),
('Neha', 'Sharma', 'neha@example.com', '9876543212', 21, 'Jaipur', 'graduated', 92.00),
('Riya', 'Singh', 'riya@example.com', '9876543213', 23, 'Lucknow', 'on_leave', 69.40),
('Karan', 'Yadav', 'karan@example.com', '9876543214', 25, 'Delhi', 'inactive', 58.00);

INSERT INTO courses (title, category, price, level, total_lessons)
VALUES
('Backend Basics', 'backend', 4999, 'beginner', 24),
('SQL Mastery', 'database', 5999, 'intermediate', 30),
('Node API Pro', 'backend', 7999, 'advanced', 36),
('System Design Start', 'architecture', 6999, 'intermediate', 20);

INSERT INTO enrollments (student_id, course_id, progress_percent, completion_status)
VALUES
(1, 1, 80, 'in_progress'),
(1, 2, 60, 'in_progress'),
(2, 1, 100, 'completed'),
(2, 3, 35, 'in_progress'),
(3, 2, 100, 'completed'),
(3, 4, 55, 'in_progress'),
(4, 1, 10, 'in_progress'),
(5, 2, 0, 'dropped');

INSERT INTO payments (enrollment_id, amount, payment_status, payment_method, paid_on)
VALUES
(1, 4999, 'paid', 'upi', CURRENT_DATE),
(2, 5999, 'paid', 'card', CURRENT_DATE),
(3, 4999, 'paid', 'upi', CURRENT_DATE),
(4, 7999, 'pending', 'netbanking', NULL),
(5, 5999, 'paid', 'card', CURRENT_DATE),
(6, 6999, 'paid', 'upi', CURRENT_DATE),
(7, 4999, 'failed', 'card', NULL),
(8, 5999, 'pending', 'upi', NULL);

-- =========================================================
-- 4. BASIC SELECT QUERIES
-- =========================================================

-- Show all students
SELECT * FROM students;

-- Select only needed columns
SELECT first_name, city, current_status, current_score FROM students;

-- Students from Delhi
SELECT * FROM students WHERE city = 'Delhi';

-- Students with score greater than 75
SELECT first_name, current_score
FROM students
WHERE current_score > 75;

-- Students with score between 70 and 90
SELECT first_name, current_score
FROM students
WHERE current_score BETWEEN 70 AND 90;

-- Students whose status is active or graduated
SELECT first_name, current_status
FROM students
WHERE current_status IN ('active', 'graduated');

-- Students whose name starts with N
SELECT *
FROM students
WHERE first_name LIKE 'N%';

-- Students whose city is not Delhi
SELECT *
FROM students
WHERE city <> 'Delhi';

-- Sort students by score descending
SELECT first_name, current_score
FROM students
ORDER BY current_score DESC;

-- Top 3 students by score
SELECT first_name, current_score
FROM students
ORDER BY current_score DESC
LIMIT 3;

-- =========================================================
-- 5. DML - UPDATE AND DELETE
-- =========================================================

-- Update one student's city
UPDATE students
SET city = 'Gurugram'
WHERE email = 'aman@example.com';

-- Mark dropped enrollment
UPDATE enrollments
SET completion_status = 'dropped',
    progress_percent = 0
WHERE enrollment_id = 8;

-- Example delete (commented for safety)
-- DELETE FROM students WHERE student_id = 5;

-- =========================================================
-- 6. AGGREGATES
-- =========================================================

-- Total number of students
SELECT COUNT(*) AS total_students
FROM students;

-- Average student score
SELECT AVG(current_score) AS average_score
FROM students;

-- Highest and lowest course price
SELECT MAX(price) AS highest_price, MIN(price) AS lowest_price
FROM courses;

-- Count students city-wise
SELECT city, COUNT(*) AS total_students
FROM students
GROUP BY city
ORDER BY total_students DESC;

-- Average score by status
SELECT current_status, AVG(current_score) AS avg_score
FROM students
GROUP BY current_status
HAVING AVG(current_score) > 60;

-- =========================================================
-- 7. JOINS
-- =========================================================

-- INNER JOIN: students with enrolled courses
SELECT
    s.first_name,
    c.title,
    e.progress_percent,
    e.completion_status
FROM students s
INNER JOIN enrollments e ON s.student_id = e.student_id
INNER JOIN courses c ON e.course_id = c.course_id;

-- LEFT JOIN: all students, even if no course is found
SELECT
    s.first_name,
    c.title,
    e.completion_status
FROM students s
LEFT JOIN enrollments e ON s.student_id = e.student_id
LEFT JOIN courses c ON e.course_id = c.course_id;

-- RIGHT JOIN: all enrollments with matching student data
SELECT
    s.first_name,
    e.enrollment_id,
    e.progress_percent
FROM students s
RIGHT JOIN enrollments e ON s.student_id = e.student_id;

-- FULL OUTER JOIN: all rows from both sides
SELECT
    s.first_name,
    e.enrollment_id,
    e.completion_status
FROM students s
FULL OUTER JOIN enrollments e ON s.student_id = e.student_id;

-- Join payments also
SELECT
    s.first_name,
    c.title,
    p.amount,
    p.payment_status,
    p.payment_method
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id
JOIN payments p ON e.enrollment_id = p.enrollment_id;

-- =========================================================
-- 8. MORE PRACTICAL JOIN QUERIES
-- =========================================================

-- Total revenue per course
SELECT
    c.title,
    SUM(p.amount) AS total_revenue
FROM courses c
JOIN enrollments e ON c.course_id = e.course_id
JOIN payments p ON e.enrollment_id = p.enrollment_id
WHERE p.payment_status = 'paid'
GROUP BY c.course_id, c.title
ORDER BY total_revenue DESC;

-- Students with pending or failed payments
SELECT
    s.first_name,
    c.title,
    p.payment_status
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id
JOIN payments p ON e.enrollment_id = p.enrollment_id
WHERE p.payment_status IN ('pending', 'failed');

-- Course-wise number of enrollments
SELECT
    c.title,
    COUNT(e.enrollment_id) AS total_enrollments
FROM courses c
LEFT JOIN enrollments e ON c.course_id = e.course_id
GROUP BY c.course_id, c.title
ORDER BY total_enrollments DESC;

-- =========================================================
-- 9. INDEXES
-- =========================================================

-- Create indexes on frequently searched columns
CREATE INDEX idx_students_email ON students(email);
CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_payments_status ON payments(payment_status);

-- Example query that can benefit from index
SELECT *
FROM payments
WHERE payment_status = 'paid';

-- =========================================================
-- 10. TRANSACTIONS
-- =========================================================

-- Example:
-- Student 4 completes payment for enrollment 7

BEGIN;

    UPDATE payments
    SET payment_status = 'paid',
        paid_on = CURRENT_DATE
    WHERE enrollment_id = 7;

    UPDATE enrollments
    SET progress_percent = 15,
        completion_status = 'in_progress'
    WHERE enrollment_id = 7;

COMMIT;

SELECT * FROM payments WHERE enrollment_id = 7;
SELECT * FROM enrollments WHERE enrollment_id = 7;

-- Failure example
BEGIN;

    UPDATE payments
    SET amount = amount + 1000
    WHERE enrollment_id = 4;

    -- Something went wrong, so rollback
    ROLLBACK;

SELECT * FROM payments WHERE enrollment_id = 4;

-- =========================================================
-- 11. SCHEMA THINKING PRACTICE
-- =========================================================

-- If we wanted to expand this project later, we could add:
-- 1. instructors table
-- 2. lessons table
-- 3. certificates table
-- 4. reviews table
-- 5. coupons table

-- This is the main learning:
-- start from entities,
-- connect them with foreign keys,
-- then query the relationships using joins and aggregates.

-- =========================================================
-- END OF COMBINED PRACTICE
-- =========================================================
