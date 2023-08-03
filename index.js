const mongoose = require('mongoose')
const express = require('express');
const routes = require('./src/routes')
const app = express();

const uri = "mongodb+srv://rbc6:123@cluster-es.x3jxl36.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)


app.use(routes)
app.use(express.json());

app.listen(3333);

