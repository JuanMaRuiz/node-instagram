/* Grab the packages/variables we need
 ======================================== */
var express = require('express');
var app = express();

/* Documentation http get api
 * https://www.npmjs.com/package/node-rest-client
 */
 var Client = require('node-rest-client').Client;
 var client = new Client();


/* Configure de app
 * Tell node where to look for site resources
 */
app.use(express.static(__dirname + '/public'));

// Set the view engine to ejs (JS templating)
app.set('view engine', 'ejs');

// TODO
// Configure instagram app with client-id


// registering remote methods
client.registerMethod("jsonMethod", "https://authenticjobs.com/api/?api_key=bf2409503261726bae4bfed16bcd8399&method=aj.jobs.search&keywords=angular&format=json", "GET");

client.methods.jsonMethod(function (data, response) {
	// parsed response body as js object
	console.log(data);
});

/* Set the routes
 * home page route - popular images
 */
app.get('/', function(req, res){
  // Use the instagram package to get popular media
  // Render the home page and pass in the popular images
  res.render('pages/index');
});

// Start the Server
app.listen(8080);
console.log('App started! Look at http://localhost:8080');
