var fs = require('fs');
var data = require('./dataFunctions.js');
var comStr = require('./commands.json');

var validCommands = ["!twitter", "!steam", "!social", "!commands"];

function isValidCommand(command) {
    if(data.isIn(command, validCommands)) return true;
    else return false;
}

function listCommands() {
    var output = "";
    for(var i = 0; i < validCommands.length; i++) {
        if(i === validCommands.length-1) output += validCommands[i];
        else output += validCommands[i] + ", ";
    }
    return output;
}

/*function addCommand(command, description) {
    comStr.command = description;
    fs.writeFile('./commands.json', JSON.stringify(comStr), function(err) {
        console.log(err);
    });
}*/

module.exports = {
    isValidCommand: isValidCommand,
    //addCommand: addCommand,
    listCommands: listCommands
}
