const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const path = require('path');

// Route til visning af formularen for ny film
router.get('/new', (req, res) => {
    res.render('new');  // Ændret til at bruge EJS i stedet for at sende HTML-fil
});
router.get('/', movieController.getAllMovies);
router.post('/movie', movieController.createMovie);
router.post('/movie/:id/update', movieController.updateMovie);
router.post('/movie/:id/delete', movieController.deleteMovie);

module.exports = router
