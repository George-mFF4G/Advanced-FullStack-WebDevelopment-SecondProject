CREATE TABLE  orders (
id SERIAL PRIMARY KEY,
user_id bigint REFERENCES users(id),
name VARCHAR(100) NOT NULL,
STATUS VARCHAR(10) CHECK(status='active' OR status='complete')
);