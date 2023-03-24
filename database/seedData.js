const mongoose = require('mongoose');
require('dotenv').config();


// Import models
const Student = require('../models/student');
const Enrollment = require('../models/enrollment');

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

// Seed data
const seedStudents = [
    {
        ID: 1,
        FirstName: 'John',
        LastName: 'Doe',
        EnrollmentDate: new Date('2018-01-01'),
    },
    {
        ID: 2,
        FirstName: 'Jane',
        LastName: 'Doe',
        EnrollmentDate: new Date('2015-11-08'),
    },
    {
        ID: 3,
        FirstName: 'Carson',
        LastName: 'Alexander',
        EnrollmentDate: new Date('2017-09-01'),
    },
    {
        ID: 4,
        FirstName: 'Meredith',
        LastName: 'Alonso',
        EnrollmentDate: new Date('2012-09-01'),
    },
    {
        ID: 5,
        FirstName: 'Arturo',
        LastName: 'Anand',
        EnrollmentDate: new Date('2013-09-01'),
    },
    {
        ID: 6,
        FirstName: 'Gytis',
        LastName: 'Barzdukas',
        EnrollmentDate: new Date('2012-09-01'),
    },
    {
        ID: 7,
        FirstName: 'Yan',
        LastName: 'Li',
        EnrollmentDate: new Date('2012-09-01'),
    },
    {
        ID: 8,
        FirstName: 'Peggy',
        LastName: 'Justice',
        EnrollmentDate: new Date('2011-09-01'),
    },
];

const seedEnrollments = [
    {
        StudentID: 1,
        CourseID: 1050,
        Grade: 'A',
        Title: 'Chemistry',
        Credits: 3,
    },
    {
        StudentID: 1,
        CourseID: 4022,
        Grade: 'C',
        Title: 'Microeconomics',
        Credits: 3,
    },
    {
        StudentID: 1,
        CourseID: 4041,
        Grade: 'B',
        Title: 'Macroeconomics',
        Credits: 3,
    },
    {
        StudentID: 2,
        CourseID: 1045,
        Grade: 'B',
        Title: 'Calculus',
        Credits: 4,
    },
    {
        StudentID: 2,
        CourseID: 3141,
        Grade: 'F',
        Title: 'Trigonometry',
        Credits: 4,
    },
    {
        StudentID: 2,
        CourseID: 2021,
        Grade: 'F',
        Title: 'Composition',
        Credits: 3,
    },
    {
        StudentID: 2,
        CourseID: 2042,
        Grade: 'F',
        Title: 'Literature',
        Credits: 4,
    },
    {
        StudentID: 3,
        CourseID: 1050,
        Title: 'Chemistry',
        Credits: 3,
    },
    {
        StudentID: 4,
        CourseID: 1050,
        Title: 'Chemistry',
        Credits: 3,
    },
    {
        StudentID: 4,
        CourseID: 4022,
        Title: 'Microeconomics',
        Credits: 3,
    },
    {
        StudentID: 5,
        CourseID: 4041,
        Title: 'Macroeconomics',
        Credits: 3,
        Grade: 'C',
    },
    {
        StudentID: 6,
        CourseID: 1045,
        Title: 'Calculus',
        Credits: 4,
        Grade: 'B',
    },
    {
        StudentID: 6,
        CourseID: 3141,
        Title: 'Trigonometry',
        Credits: 4,
        Grade: 'B',
    },
    {
        StudentID: 7,
        CourseID: 2021,
        Title: 'Composition',
        Credits: 3,
        Grade: 'B',
    }
];


// Seed database function
const seedDB = async () => {
    await Student.deleteMany({});
    await Enrollment.deleteMany({});
    await Student.insertMany(seedStudents);
    await Enrollment.insertMany(seedEnrollments);
};

// Seed and close connection
seedDB().then(() => {
    console.log('Database seeded');
    mongoose.connection.close()
    .then(() => {
        console.log('Connection closed');
    });
});
