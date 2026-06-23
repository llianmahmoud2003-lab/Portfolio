CREATE DATABASE IF NOT EXISTS students_db CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE students_db;

-- جدول الادمن
CREATE TABLE IF NOT EXISTS admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- إدخال بيانات الادمن المشفرة
INSERT INTO admin (username, password) VALUES 
('admin', '$2y$10$y7tE6S.D8FvEcvMEK6L3s.AX5z5mYQe3W3P3F.4nqExVdJH5vM4Ae');

-- جدول الطلاب
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE,
    enrollment_date DATE NOT NULL
);

-- جدول المواد الدراسية
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    instructor VARCHAR(255) NOT NULL
);

-- جدول الدرجات
CREATE TABLE IF NOT EXISTS grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    grade DECIMAL(5,2) NOT NULL,
    semester VARCHAR(50) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- بيانات تجريبية للطلاب
INSERT INTO students (name, email, enrollment_date) VALUES
('أحمد محمد', 'ahmed@example.com', '2023-09-01'),
('سارة عبد الله', 'sara@example.com', '2023-09-01'),
('محمد خالد', 'mohammed@example.com', '2023-09-01'),
('فاطمة علي', 'fatima@example.com', '2023-09-01'),
('يوسف إبراهيم', 'youssef@example.com', '2023-09-01');

-- بيانات تجريبية للمواد الدراسية
INSERT INTO courses (name, instructor) VALUES
('الرياضيات', 'د. سامي أحمد'),
('اللغة العربية', 'د. ليلى محمد'),
('العلوم', 'د. خالد عبد الرحمن'),
('التاريخ', 'د. منى فاروق'),
('اللغة الإنجليزية', 'د. جيمس ويلسون');

-- بيانات تجريبية للدرجات
INSERT INTO grades (student_id, course_id, grade, semester) VALUES
(1, 1, 95.5, 'الفصل الأول 2023'),
(1, 2, 88.0, 'الفصل الأول 2023'),
(1, 3, 92.5, 'الفصل الأول 2023'),
(2, 1, 87.5, 'الفصل الأول 2023'),
(2, 2, 91.0, 'الفصل الأول 2023'),
(3, 3, 84.5, 'الفصل الأول 2023'),
(3, 4, 89.0, 'الفصل الأول 2023'),
(4, 1, 93.5, 'الفصل الأول 2023'),
(4, 5, 86.0, 'الفصل الأول 2023'),
(5, 2, 90.5, 'الفصل الأول 2023');