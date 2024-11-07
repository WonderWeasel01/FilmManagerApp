const Movie = require('../models/movies');

// Tilføjer en ny film
exports.createMovie = async (req, res) => {
    try {
        const newMovie = new Movie({
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        });
        await newMovie.save();
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved tilføjelse af film:", err);
        res.status(500).send("Fejl ved tilføjelse af film.");
    }
};

// Henter alle film og viser dem
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render('index', { movies });
    } catch (err) {
        console.error("Fejl ved hentning af film:", err);
        res.status(500).send("Fejl ved hentning af film.");
    }
};

// Opdaterer en film
exports.updateMovie = async (req, res) => {
    try {
        await Movie.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        });
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved opdatering af film:", err);
        res.status(500).send("Fejl ved opdatering af film.");
    }
};

// Sletter en film
exports.deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved sletning af film:", err);
        res.status(500).send("Fejl ved sletning af film.");
    }
};

// Tilføjer en manuel test for at oprette en bog
exports.testCreateBook = async (req, res) => {
    try {
        const testBook = new Book({
            title: "Test Bog",
            author: "Test Forfatter",
            year: 2023,
            genre: "Test Genre"
        });
        await testBook.save();
        res.send("Test bog oprettet succesfuldt.");
    } catch (err) {
        console.error("Fejl ved oprettelse af test bog:", err);
        res.status(500).send("Fejl ved oprettelse af test bog.");
    }
};
