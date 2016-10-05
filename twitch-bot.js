global.DEBUG = false;

if(process.argv[2] == "--debug") {
    global.DEBUG = true;
}

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.json());

/*******
set all of the paths for the different files
*******/
var botStatus = {
    gameState: 0,
    running: false,
    game: null,
}

function isValidCommand(command) {
    return /*create .js file to hold an isIn command*/
}

function parseCommand(text, user){
    //if(text)
    if(text == "!twitter") {
        var dataStr = fs.readFileSync('./PostCommands/twitter.json');
        var data = JSON.parse(dataStr);
        console.log(data.post);
    }
}

if(!global.DEBUG){
    //run the bot in twitch chat
}
else {
    process.stdin.setEncoding('utf8');
    var input = "";
    process.stdin.on('readable',function() {
        input = process.stdin.read();
        if(input != "" && input != null) {
            input = input.substring(0,input.length-1);
            parseCommand(input,"me");
        }
    });
}
