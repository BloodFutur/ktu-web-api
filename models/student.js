/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - FirstName
 *         - LastName
 *         - EnrollmentDate
 *       properties:
 *         ID:
 *           type: number
 *           description: The auto-generated id of the student
 *         LastName:
 *           type: string
 *           description: The last name of the student
 *         FirstName:
 *           type: string
 *           description: The first name of the student
 *         EnrollmentDate:
 *           type: string
 *           format: date
 *           description: The date the student enrolled
 *         Enrollments:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Enrollment'
 *           description: The enrollments of the student
 *       example:
 *         ID: 1
 *         LastName: Smith
 *         FirstName: John
 *         EnrollmentDate: 2020-07-10T00:00:00.000Z
 */

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    FirstName: {
        type: String,
        required: true,
    },
    EnrollmentDate: {
        type: Date,
        required: true,
    },
    Enrollments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment'
    }]
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;