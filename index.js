// Import dependencies
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose'); // No-SQL Database
const routes = require('./routes/students');

const morgan = require('morgan');

const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger.json');


// Create express app
const app = express();

// Connect to MongoDB
const mongoString = process.env.MONGO_STRING;
mongoose.connect(mongoString, 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: false,
    useUnifiedTopology: true 
});

const database = mongoose.connection;

// Log errors
database.on('error', (error) => {
    console.log(error);
});

// Log connection
database.once('connected', () => {
    console.log('Connected to database');
});

// Use morgan
app.use(morgan('dev'));

// Use express middleware
app.use(express.json());
app.use(bodyParser.json());
app.use('/api', routes); // Use routes



const options = {
    definition: {
        openapi: '3.0.0',
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Development server'
            }
        ],
    },
    apis: ['./routes/*.js', './models/*.js'],
};

const specs = swaggerJsdoc(options);

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(specs, { explorer: true })
);


// Listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
}
);
