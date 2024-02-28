const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DefaultData = require("./defaultData")
dotenv.config({ path: './config/dev.env' });
require('./db/conn');
const Products = require("./Models/productSchema")
const cors = require("cors")
const router = require("./routes/router");



const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Welcome to the amazon clone');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

DefaultData()