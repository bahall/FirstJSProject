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
var chatCommands = require('./Data/chatCommands.js');
var authStr = fs.readFileSync('./authentication.json');
var auth = JSON.parse(authStr);

var irc = require("irc"),
      fs = require("fs"),
      jf = require("jsonfile"),
      util = require('util');;

var botStatus = {
    gameState: 0,
    running: false,
    game: null,
}

var bot = new irc.Client("irc.chat.twitch.tv", auth.name, {
    "channel": [["#tharedmerc"]+" "+auth.password],
    "debug": DEBUG,
    "password": auth.password,
    "username": auth.name
});

bot.addListener("connect", function() {
    console.log("**Connected**");
    bot.say("#tharedmerc", "hello");
});

function parseCommand(text, user){
    var output;
    if(chatCommands.isValidCommand(text)) {
    //if(text == "!twitter") {
        var dataStr = fs.readFileSync('./Data/commands.json');
        var data = JSON.parse(dataStr);
        switch(text) {
            case("!twitter"):
                output = data.twitter;
                break;
            case("!steam"):
                output = data.steam;
                break;
            default: break;
        }
        console.log(output);
    }
}

if(!global.DEBUG){
    bot.say("tharedmerc", "HELLO");
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
