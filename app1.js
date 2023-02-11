const express = require("express")

const router = require('./main');

const app = express();

app.use('/', router);

module.exports=app;