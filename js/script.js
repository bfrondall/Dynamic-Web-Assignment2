// var http = require("https://open.spotify.com/playlist/7AcSLNFekKasTvg3Z8FiN0");

// http.createServe(function(request, response){
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }).listen(8888);

var xhr = new XMLHttpRequest();
var url = "https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv";


	xhr.open('GET', url, true);

	xhr.send(null);

	// app.get('/login', function(req, res) {
	// var scopes = 'user-read-private user-read-email';
	// res.redirect('https://accounts.spotify.com/authorize' + '?response_type=code' + '&client_id=' + my_client_id + (scopes ? '&scope=' + encodeURIComponent(scopes) : '') + '&redirect_uri=' + encodeURIComponent(redirect_uri));
	// });

	xhr.onload =function(){

		if (xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);

			console.log(data);
		}
	}
