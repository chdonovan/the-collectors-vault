# The Collectors Vault

## Description
A full stack application that allows users to digitally store their collection. This application utilize the new npm package of Multer which allows users to upload images. By implementing CRUD functionality users are able do the following: 
- See there current collection
- Add new items to their collection
- Update their current collection
- Delete items from their collection 

## Deployed
https://the-collectors-vault.herokuapp.com/

## User Story
> As an avid collector  
I WANT to be able to digitally store my collection  
SO THAT I can keep my collection orginized and know what I currently own. 

## Acceptance Criteria
- Use Node.js and Express.js to create a RESTful API.
- Use Handlebars.js as the templating engine.  
- Use MySQL and the Sequelize ORM for the database.  
- Have both GET and POST routes for retrieving and adding new data.  
- Be deployed using Heroku (with data).  
- Use at least one new library, package, or technology that we haven’t discussed.  
- Have a polished UI.  
- Be responsive. 
- Be interactive (i.e., accept and respond to user input).  
- Have a folder structure that meets the MVC paradigm.  
- Include authentication (express-session and cookies).  
- Protect API keys and sensitive information with environment variables.  
- Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).  
- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Usage

### Screenshot

![Login Page](https://user-images.githubusercontent.com/79660405/124404806-1829d580-dd02-11eb-8517-a6ee186b6023.png)

![Homepage](https://user-images.githubusercontent.com/79660405/124404846-3a235800-dd02-11eb-866c-267392b16b16.png)

![User Dashboard](https://user-images.githubusercontent.com/79660405/124404865-51fadc00-dd02-11eb-85b3-a90530a1660d.png)

![Add Item](https://user-images.githubusercontent.com/79660405/124404882-6b9c2380-dd02-11eb-91ee-4611f57f6de8.png)

![Edit Item](https://user-images.githubusercontent.com/79660405/124404910-82427a80-dd02-11eb-8a82-e991b5b851c7.png)

![Categories Page](https://user-images.githubusercontent.com/79660405/124404929-9be3c200-dd02-11eb-8d95-8b85a5866d90.png)


## Installation

1. Clone the-collectors-vault repository
2. Run <code> npm install </code> to install dependencies
    - Ensure you have the following dependencies  
        a. Bcrypt  
        b. Bulma  
        C. Connect-session-sequelize  
        D. dotenv  
        E. Express  
        F. Express-handlebars  
        G. Express-sessions  
        H. jquery  
        I. multer  
        J. mysql2  
        K. node  
        L. sequelize  
3. Run <code> mysql -u root -p </code> to initialize mysql
4. Run <code> source db/schema.sql </code> to reset database 
    - Run <code> exit </code> to leave mysql
5. Run <code> npm run seed </code> to seed database with dummy info to test the routes
6. Run <code> npm start </code> to initialize the app
7. Use Insomnia to test the routes

## Contributors
- Dani Hartley
- Chris Donovan
- Jose Molina
- Sonya Rangraj

## GitHub
https://github.com/chdonovan/the-collectors-vault

