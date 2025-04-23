const express = require('express');
const router = express.Router();

// GET login page
router.get('/login', (req, res) => {
    res.render('login');
});

// POST login form
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // TODO: Add actual authentication logic here
    res.redirect('/home');
});

// GET register page
router.get('/register', (req, res) => {
    res.render('register');
});

// POST register form
router.post('/register', (req, res) => {
    const { firstName, lastName, email, phone, role, password, confirmPassword } = req.body;
    console.log('firstname' +firstName)
    // TODO: Add validation and user creation logic here
    // For now, just redirect to login
    res.redirect('/login');
});

module.exports = router; 