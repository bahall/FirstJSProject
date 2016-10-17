global.DEBUG = false;

if(process.argv[2] == "--debug") {
    global.DEBUG = true;
}

var irc = require('./node_modules/irc/lib/irc.js');
var fs = require('fs');
var util = require('util');
var events = require('events');

var chatCommands = require('./Data/chatCommands.js');
var dataFunctions = require('./Data/dataFunctions.js');
var authStr = fs.readFileSync('./authentication.json');
var auth = JSON.parse(authStr);

var botStatus = {
    gameState: 0,
    running: false,
    game: null,
}

var bot = new irc.Client("irc.twitch.tv", auth.name, {
    "port": 6667,
    "channel": ["#tharedmerc"],
    "debug": true,
    "password": auth.password,
    "username": "VoiceInMyHead"
});

bot.addListener("connect", function() {
    console.log("**Connected**");
    //bot.say("#tharedmerc", "Come on ThaRedMerc you can't get rid of me, I'm the voice in your head.");
    bot.say("#tharedmerc","/mods");
});
bot.addListener('raw', function(message) { console.log('raw: ', message) });
bot.addListener('error', function(message) { console.log(color('error: ', 'red'), message) });
bot.addListener("message", function(from, to, text, message) {
    console.log("message received",message);
    if(message === "!twitter") {
        bot.say(to, "got the message");
    }
});
bot.join("#tharedmerc", function(nick, message) {
    console.log("joined channel");
    bot.say("#tharedmerc", "I joined the channel");
});

function parseCommand(text, user){
    var output = "Couldn't find command";
    //bot.say("#tharedmerc", output);
    if(chatCommands.isValidCommand(text)) {
        var dataStr = fs.readFileSync('./Data/commands.json');
        var data = JSON.parse(dataStr);
        var input = text;
        switch(input) {
            case("!twitter"):
                output = data.twitter;
                break;
            case("!steam"):
                output = data.steam;
                break;
            case("!social"):
                output = data.social;
                break;
            case("!commands"):
                output = chatCommands.listCommands();
                break;
            default: break;
        }
        if(!global.DEBUG) bot.say("#tharedmerc", output);
        else console.log(output);
    }
    else console.log(output);
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
