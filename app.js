const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Import routes
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');

// Use routes
app.use('/', homeRoutes);
app.use('/', authRoutes);

// Error handling middleware
app.use((req, res, next) => {
    // res.status(404).render('404', { error: 'Page not found' });
    res.render('home');

});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { error: 'Something broke!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});