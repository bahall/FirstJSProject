var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.json());
var chatCommands = require('./chatCommands.js');

function isIn(text, array) {
    var check = false;
    for(var i = 0; i < array.length; i++) {
        if(text == array[i]) check = true;
    }
    if(check == true) return true;
    else return false;
}

module.exports = {
    isIn: isIn
}
