// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
console.log(__dirname);
// http://expressjs.com/en/starter/static-files.html
app.use('/', express.static(require('path').join(__dirname,'../../client/dist')));



// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
