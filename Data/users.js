var fs = require('fs');
var app = express();
app.use(bodyParser.json());

var data = require('./dataFunctions.js');
var usersFile = require('./users.txt');

var users = new Array(4);
for(var i = 0; i < 4; i++){
    users[i] = [];
}

var readToArray = function(event) {
        var input = event.target;

        var reader = new FileReader();
        reader.onload = function(){
          var text = reader.result;
          var node = document.getElementById('output');
          node.innerText = text;
          console.log(reader.result.substring(0, 200));
        };
        reader.readAsText(input.files[0]);
      };
