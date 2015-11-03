
var ftp = require('ftp');
var Client = require('ftp');

var client = new Client();

var account = {
  host: "",
  user: "",
  password : "",
}


client.on('ready', function() {

  client.list(function(err, list) {
    if (err) throw err;
    console.log(JSON.stringify(list, null, ' '));
  });

  client.on('error', function() {
    console.log('error');
  });

});


client.connect(account);
