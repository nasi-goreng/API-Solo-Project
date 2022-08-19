# API-Solo-Project: Ghibli API
This was created during my time as a trainee at Code Chrysalis

## About this app
  1. Displays all the Studio Ghibli movies and their info in the main page.
  2. Lets you create your own watch list of the movies by requiring username and password when logging in.
  3. Displays movies by directors.
  4. Displays comments on each movie made by other users.
  5. Lets you post your comments and store them in the database. 
  6. Lets you delete your comments from the database.

## Getting started
  1. Clone this repo.
  2. Install dependencies ```npm install```
  3. Create a file called ```.env.local``` and set the environment variables in this file to match your local database settings.
  4. Create the database: ```echo "CREATE DATABASE cc_store;" | psql```
  5. Build the database with migrations: ```npm run migrate```
  6. Seed files **individually** ```knex seed:run --specific=filename.js```
  7. Run the server ```npm start```
  8. Open ```localhost:3000```

## Notes
 - This app uses four types of HTTP verbs including PATCH and DELETE by using method-override.