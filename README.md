# KTU Web API

This is a simple Web API made with Node.js and Express. Its purpose is to show how to make a CRUD API with Node.js and Express and how to use MongoDB as a database. It uses Docker to run the API and MongoDB.

## Features

- [x] Get all students
- [x] Get one student
- [x] Add a student
- [x] Update a student
- [x] Delete a student

## How to run

### With Docker

1. Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/).
2. Install [Docker-compose](https://docs.docker.com/compose/install/).
3. Clone this repository.
4. Run `docker-compose up` in the root directory of the project.
5. Enjoy!


### Without Docker

1. Install [Node.js](https://nodejs.org/en/download/).
2. Install [MongoDB](https://docs.mongodb.com/manual/installation/).
3. Run `npm install` in the root directory of the project.
4. Start MongoDB.
5. Run `npm run seed` to seed the database.
6. Run `npm run start` to start the API.
7. Enjoy!

## How to use

The application uses Swagger to document the API. You can access the documentation at `http://localhost:3000/api-docs`.


