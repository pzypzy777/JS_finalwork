var express = require("express");
var app = express();

app.use(express.static("../../JS_finalwork")).listen(5000);