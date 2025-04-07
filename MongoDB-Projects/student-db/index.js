const mongoose = require('mongoose');
const Student = require('./student'); // Import Student Schema

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Student1', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Failed:", err));

// Create student records
const students = [
    { name: "Alice", age: 20, course: "Mathematics", email: "alice@example.com" },
    { name: "Bob", age: 21, course: "Physics", email: "bob@example.com" },
    { name: "Charlie", age: 22, course: "Computer Science", email: "charlie@example.com" },
    { name: "David", age: 23, course: "Biology", email: "david@example.com" }
];

// Insert students into MongoDB
Student.insertMany(students)
    .then(() => {
        console.log("Multiple Students Added Successfully");
        mongoose.connection.close(); // Close connection after insertion
    })
    .catch(err => console.error("Error Inserting Students:", err));
