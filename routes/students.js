const express = require('express');
const router = express.Router();

// Import models
const Student = require('../models/student');
const Enrollment = require('../models/enrollment');



// Get all students
/**
 * @swagger
 * /students:
 *   get:
 *     description: Get all students
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Student'
 *       500: 
 *         description: Internal server error
 */
router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one student

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     description: Get one students
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string    
 *         required: true+
 *         description: The student id
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           items:
 *            $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 *       500: 
 *         description: Internal server error
 */
router.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.find({ ID: req.params.id });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create one student
/**
 * @swagger
 * /students:
 *   post:
 *     description: Create one student
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ID:
 *                type: number
 *               FirstName:
 *                type: string
 *               LastName:
 *                type: string
 *               EnrollmentDate:
 *                type: string
 *                format: date
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Student'
 *       400:
 *         description: Bad request
 * 
 */
router.post('/students', async (req, res) => {
    const student = new Student({
        ID: req.body.ID,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        EnrollmentDate: req.body.EnrollmentDate,
    });

    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update one student
/**
 * @swagger
 * /students/{id}:
 *  patch:
 *   description: Update one student
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string    
 *       required: true
 *       description: The student id
 *   requestBody:
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             FirstName:
 *              type: string
 *              value: "John"
 *             LastName:
 *              type: string
 *              value: "Modified"
 *             EnrollmentDate:
 *              type: string
 *              format: date
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Student'
 *    400:
 *     description: Bad request
 * 
 */
router.patch('/students/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new: true };

        const result = await Student.findOneAndUpdate(
            { ID: id }, updatedData, options
        );

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete one student
/**
 * @swagger
 * /students/{id}:
 *  delete:
 *     description: Delete one student
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string    
 *         required: true
 *         description: The student id
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */
router.delete('/students/:id', async (req, res) => {
    try {
        const data = await Student.findOneAndDelete({
             ID: req.params.id 
        });
        res.status(200).json({ message: 'Deleted student' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;