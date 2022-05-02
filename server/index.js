const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

// create a new express server
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL).then(()=>{console.log(`Running on PORT ${PORT}`)});