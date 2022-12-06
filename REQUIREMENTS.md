# API End Points

1- products:

- get "http://localhost:3000/products" Index Function 
- get "http://localhost:3000/products/:id" Show Function 
- post "http://localhost:3000/products" Create Function VerifyAuthToken
- put "http://localhost:3000/products/:id" Update Function VerifyAuthToken
- delete "http://localhost:3000/products/:id" Delete Function VerifyAuthToken

2-users:

- post "http://localhost:3000/users" Signup Function
- post "http://localhost:3000/users/login" Login Function 
- get "http://localhost:3000/users" Index Function VerifyAuthToken
- get "http://localhost:3000/users/:id" Show Function VerifyAuthToken
- put "http://localhost:3000/users/:id" Update Function VerifyAuthToken
- delete "http://localhost:3000/users/:id" Delete Function VerifyAuthToken

3-oredrs:
- get "http://localhost:3000/orders" Index Function VerifyAuthToken
- get "http://localhost:3000/orders/:id" Show Function VerifyAuthToken
- post "http://localhost:3000/orders" Create Function VerifyAuthToken
- put "http://localhost:3000/orders/:id" Update Function VerifyAuthToken
- delete "http://localhost:3000/orders/:id" Delete Function VerifyAuthToken

4-order_products:
- get "http://localhost:3000/orders-products" Index Function VerifyAuthToken
- get "http://localhost:3000/orders-products/:id" Show Function VerifyAuthToken
- post "http://localhost:3000/orders-products" Create Function VerifyAuthToken
- put "http://localhost:3000/orders-products/:id" Update Function VerifyAuthToken
- delete "http://localhost:3000/orders-products/:id" Delete Function VerifyAuthToken

5-services:
- get "http://localhost:3000/services/:id" Get Orders By User Id Function VerifyAuthToken
- get "http://localhost:3000/servicess/active/:id" Get  Active Orders By User Id Function VerifyAuthToken

# Database Schema:

1- products:
-id PKey integer
-name VARCHAR
-describe VARCHAR
-price integer

CREATE TABLE  products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(65) NOT NULL,
    describe VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL
);

2-users:
-id PKey integer
-first_name  VARCHAR
-last_name VARCHAR
-person_details VARCHAR
-username VARCHAR
-user_password VARCHAR

CREATE TABLE  users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(65),
    last_name VARCHAR(65),
    person_details VARCHAR(255),
    username VARCHAR(100),
    user_password VARCHAR
);

3-orders:
-id PKey integer
-user_id  Fkey integer
-name VARCHAR
-status : ('active' or 'complete') VARCHAR

CREATE TABLE  orders (
id SERIAL PRIMARY KEY,
user_id bigint REFERENCES users(id),
name VARCHAR(100) NOT NULL,
STATUS VARCHAR(10) CHECK(status='active' OR status='complete')
);

4-order_products:
-id PKey integer
-quantity integer
-order_id Fkey integer
-product_id Fkey integer

CREATE TABLE  orders (
id SERIAL PRIMARY KEY,
user_id bigint REFERENCES users(id),
name VARCHAR(100) NOT NULL,
STATUS VARCHAR(10) CHECK(status='active' OR status='complete')
);