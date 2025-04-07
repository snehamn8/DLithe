const mongoose = require('mongoose');

// Define Student Schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    course: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    enrolledDate: { type: Date, default: Date.now }
});

// Create Student Model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
