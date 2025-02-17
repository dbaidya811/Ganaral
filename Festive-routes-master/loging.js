async function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://blvizekdnhqgomachvfu.supabase.co ,login.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    const result = await response.json();
    if (result.success) {
        alert('Login successful!');
        // Redirect or perform further actions
    } else {
        alert('Login failed: ' + result.message);
    }
}
// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('https://blvizekdnhqgomachvfu.supabase.co , eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsdml6ZWtkbmhxZ29tYWNodmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MzI3MzgsImV4cCI6MjA0MjMwODczOH0.8KY0KAyafh4SUBj58midIk_7SXq5O3idpkzH3CCKcyk', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// User schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String, // In a real app, store hashed passwords
});

const User = mongoose.model('User', userSchema);

// Login endpoint
app.post('https://blvizekdnhqgomachvfu.supabase.coeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsdml6ZWtkbmhxZ29tYWNodmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MzI3MzgsImV4cCI6MjA0MjMwODczOH0.8KY0KAyafh4SUBj58midIk_7SXq5O3idpkzH3CCKcyk/login', async(req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password }); // Use hashed password comparison in production
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});
