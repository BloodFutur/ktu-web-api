/**
 * @swagger
 * components:
 *   schemas:
 *    Enrollment:
 *     type: object
 *     required:
 *      - CourseID
 *      - Title
 *      - Credits
 *      - StudentID
 *     properties:
 *       CourseID:
 *         type: number
 *         description: The ID of the course
 *       Title:
 *         type: string
 *         description: The title of the course
 *       Credits:
 *         type: number
 *         description: The number of credits the course is worth
 *       StudentID:
 *         type: number
 *         description: The ID of the student
 *       Grade:
 *         type: string
 *         enum: ['A', 'B', 'C', 'D', 'F', 'I']
 *         default: 'I'
 *         description: The grade the student received in the course
 *       Student:
 *         type: object
 *         $ref: '#/components/schemas/Student'
 *         description: The student who is enrolled in the course
 *     example:
 *        CourseID: 1050
 *        Title: Chemistry
 *        Credits: 3
 *        StudentID: 1
 *        Grade: A
 *  
 */
const mongoose = require('mongoose');

// Get student model
const { Student } = require('./student');

const enrollmentSchema = new mongoose.Schema({
    CourseID: {
        type: Number,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    Credits: {
        type: Number,
        required: true,
    },
    StudentID: {
        type: Number,
        required: true,
    },
    Grade: {
        type: String,
        enum: ['A', 'B', 'C', 'D', 'F', 'I'],
        default: 'I',
        required: false,
    },
    Student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;