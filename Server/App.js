
require("dotenv").config();
const express = require(
    'express'
);
const app = express();
const mongoose = require('mongoose');

const port = 8000;

app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
})