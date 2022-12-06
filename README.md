# Setup The Packages : "npm install"

# ENV Variables:
POSTGRES_HOST=localhost
POSTGRES_DB=fwd_second_project
POSTGRES_USER=George
POSTGRES_PASSWORD=123456789
PORT=3000
POSTGRES_DB_TEST=fwd_second_project_test
ENV=dev
BCRYPT_PASSWORD=bcrypt-password
SALT_ROUNDS=10
TOKEN_SECRET=token_secret

# Server Port: "3000"
# DataBase port: "5432"
# End Point Testing Using Super Test :" localhost:3000/test-api"

# Make Database Ready 

-   CREATE USER George WITH PASSWORD 123456789;
-   CREATE DATABASE fwd_second_project;
-   CREATE DATABASE fwd_second_project_test;
-   GRANT ALL PRIVILEGES ON DATABASE fwd_second_project TO George;
-   GRANT ALL PRIVILEGES ON DATABASE fwd_second_project_test TO George;

# Scripts

-"prettier": "npx prettier --write ./src/**/*.ts"
-"lint": "npx eslint src/**/*.ts"
-"build": "npx tsc"
-"migrateTest": "db-migrate --env test up "
-"databaseTest": "SET ENV=test db-migrate --env test up && npx tsc &&jasmine && db-migrate --env test reset"
-"migrateTestDown": "db-migrate --env test down&&db-migrate --env test down&&db-migrate --env test down&&db-migrate --env test down"
-"migrateDB": "db-migrate up"
- "start": "nodemon src/server.ts"
-"migrateDBDown": "db-migrate down"

# API Details

1- products:

- get "http://localhost:3000/products" Index Function VerifyAuthToken
- get "http://localhost:3000/products/:id" Show Function VerifyAuthToken
- post "http://localhost:3000/products" Create Function VerifyAuthToken
- put "http://localhost:3000/products/:id" Update Function VerifyAuthToken
- delete "http://localhost:3000/products/:id" Delete Function VerifyAuthToken

2-users:

- post "http://localhost:3000/users" Signup Function
- post "http://localhost:3000/users/login" Login Function VerifyAuthToken
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

4-services:

- get "http://localhost:3000/services/:id" Get Orders By User Id Function VerifyAuthToken
- get "http://localhost:3000/servicess/active/:id" Get  Active Orders By User Id Function VerifyAuthToken

# Database Schema:

1- products:
-id PKey integer
-name VARCHAR
-describe VARCHAR
-price integer

2-users:
-id PKey integer
-first_name  VARCHAR
-last_name VARCHAR
-person_details VARCHAR
-username VARCHAR
-user_password VARCHAR

3-orders:
-id PKey integer
-user_id  Fkey integer
-name VARCHAR
-status : ('active' or 'complete') VARCHAR

4-order_products:
-id PKey integer
-quantity integer
-order_id Fkey integer
-product_id Fkey integer