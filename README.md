# AGAVELAB TEST

### Installation and use
> First of all you will need to create a database named = `agavelabtest`

Then install all the dependencies, and run the server.
```
npm install
node app.js
```
> in order to have the products in the database you will need to run the seeder file with ` node models/seeder/products-seeder.js `

once the server is running you will be able to use the endpoints

### Product check endpoint

> the `/api/products` enpoint needs an array with the list of items whit the next structure
> items code in the db = ` PANTS, TSHIRT, HAT `

| endpoint                      | data                         | header                       |
|-------------------------------|------------------------------|------------------------------|
| `/api/products`               | { items: ["itemCode"] }      | auth-token: 'token'          |

it will return the total of the items

### User check endpoint

> you will need to make yourself an user and login to get the token needed to use the products endpoint

| endpoint                      | data                         |
|-------------------------------|------------------------------|
| `/api/register`               | { email: "email", username: "username", password: "password"}|
| `/api/login`               | { email: "email", password: "password"}|

## Test

To run the test of the entire api you will need to start the server and use ` npm test `

--------------------------------------

### Packages used 

- bcrypt
- body-parser
- express
- express
- jsonwebtoken
- moment
- passport
- passport
- pg
- sequelize