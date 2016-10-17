var fs = require('fs');
var data = require('./dataFunctions.js');
var usersFile = require('./users.json');

var users = new Array(4);
for(var i = 0; i < 4; i++){
    users[i] = [];
}

var names = usersFile.Names;
var dates = usersFile.FollowDate;
var titles = usersFile.Title;
var votes = usersFile.Vote;
users[0] = names.split(" ");
users[1] = dates.split(" ");
users[2] = titles.split(" ");
users[3] = votes.split(" ");
console.log(users[0][0]+" first visited this asshole on "+users[1][0]);
