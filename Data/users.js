var fs = require('fs');
var data = require('./dataFunctions.js');
var usersFile = require('./users.json');

var users = new Array(4);
for(var i = 0; i < 4; i++){
    users[i] = [];
}

function calcTimeSince(input) {
    console.log(input);
    input = input.replace('T', ' ').replace('Z', '').replace(/-/g, ':');

    var pastDateArr = [];
    //pastDateArr = pastDate.split(["-","T",":",".","Z"]);
    //minute = pastDateArr[4];
    console.log(input);
}

var currentDate = new Date().toISOString();

var names = usersFile.Names;
var dates = usersFile.FollowDate;
var titles = usersFile.Title;
var votes = usersFile.Vote;
users[0] = names.split(" ");
users[1] = dates.split(" ");
users[2] = titles.split(" ");
users[3] = votes.split(" ");
console.log(users[0][0]+" first visited this asshole on "+users[1][0]);
console.log(currentDate);
users[1][0] = currentDate;
calcTimeSince(currentDate);
