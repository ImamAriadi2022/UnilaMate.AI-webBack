use verceldb;


SHOW DATABASES;

-- Buat tabel users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);


ALTER TABLE users CHANGE id user_id INT AUTO_INCREMENT;


-- Buat tabel tasks
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    deadline DATE,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);


-- Buat tabel activities
CREATE TABLE activities (
    id_activities INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);


-- Buat tabel psychology_tests
CREATE TABLE psychology_tests (
    id_psikologi INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    question1 INT CHECK (question1 BETWEEN 1 AND 5),
    question2 INT CHECK (question2 BETWEEN 1 AND 5),
    question3 INT CHECK (question3 BETWEEN 1 AND 5),
    question4 INT CHECK (question4 BETWEEN 1 AND 5),
    question5 INT CHECK (question5 BETWEEN 1 AND 5),
    question6 INT CHECK (question6 BETWEEN 1 AND 5),
    question7 INT CHECK (question7 BETWEEN 1 AND 5),
    question8 INT CHECK (question8 BETWEEN 1 AND 5),
    question9 INT CHECK (question9 BETWEEN 1 AND 5),
    question10 INT CHECK (question10 BETWEEN 1 AND 5),
    question11 INT CHECK (question11 BETWEEN 1 AND 5),
    question12 INT CHECK (question12 BETWEEN 1 AND 5),
    question13 INT CHECK (question13 BETWEEN 1 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);


-- Buat tabel reminders
CREATE TABLE reminders (
    id_reminder INT AUTO_INCREMENT PRIMARY KEY,
    task_id INT,
    reminder_time TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);

