/* Grab the packages/variables we need
 ======================================== */
var express = require('express'),
    app = express(),
    // set the port of our application
    // process.env.PORT lets the port be set by Heroku
    port = process.env.PORT || 8080;

/* Documentation http get api
 * https://www.npmjs.com/package/node-rest-client
 */
 var Client = require('node-rest-client').Client;
 var client = new Client();


/* Configure de app
 * Tell node where to look for site resources
 */
app.use(express.static(__dirname + '/public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// TODO
// Configure authenticjobs
// registering remote methods
client.registerMethod("jsonMethod", "https://authenticjobs.com/api/?api_key=bf2409503261726bae4bfed16bcd8399&method=aj.jobs.search&keywords=angular&format=json", "GET");

/* Set the routes
 * home page route - popular images
 */
app.get('/', function(req, res){
  client.methods.jsonMethod(function (data, response) {
    res.render('pages/index', { jobs: data.listings.listing });
  });
});

// Start the Server
app.listen(port);
console.log('App started! Look at http://localhost:8080');
