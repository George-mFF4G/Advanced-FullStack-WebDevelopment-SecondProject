CREATE TABLE  users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(65),
    last_name VARCHAR(65),
    person_details VARCHAR(255),
    username VARCHAR(100),
    user_password VARCHAR
);