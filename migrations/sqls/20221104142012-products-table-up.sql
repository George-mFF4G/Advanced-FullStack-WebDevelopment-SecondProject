CREATE TABLE  products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(65) NOT NULL,
    describe VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL
);