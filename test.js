var TogglClient = require('toggl-api');
var toggl = new TogglClient({apiToken: 'e8d4f6a4670d8b4156ed97cafe42d0c2'});
// {username: 'sergey.karinsku@csssr.com', password: 'alisa24army'}

console.log(toggl.authData);

/*toggl.getClients(function(err, clients) {
	console.log(err);
	console.log(clients);
});*/