const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;

app.use('/posts', postRoutes);

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
.catch(err => console.log(err));
