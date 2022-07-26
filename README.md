# BABY JOURNAL

- Baby Journal is a web application for tracking new-born babies' health and growth events. Growth is visualized through graphs and events can be tracked by a calender

- The stack used for this projects is PostgresSQL, NodeJs/ExpressJs, ReactJs/MaterialUi

## Server side setup

- Go into psql from your terminal and create a database called babyjournal

- In the server folder go into the .env file and replace DB_USER and DB_PASS with your own information

- In the server.js file lines 14-15 enter your user and password in the db object

- From the server folder enter npm install

- Add the application schema to the db you created by running the following: npm run db:reset

- Server side is ready to be run with: npm run local

## Client side setup

- Go into the client folder

- Run npm install to install all the dependancies

- Run npm start to start the react app