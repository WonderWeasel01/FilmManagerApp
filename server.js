const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/userRoutes');


require('dotenv').config();
const app = express();

if (!process.env.MONGO_URL || !process.env.PORT) {
    console.error('Fejl: MISSING ENVIRONMENT VARIABLES');
    process.exit(1);
}

//hvis jeg skriver localhost forbindes der til IPv6
mongoose.connect(process.env.MONGO_URL, { connectTimeoutMS: 10000 })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', movieRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));
