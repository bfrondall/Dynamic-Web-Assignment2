// var http = require("https://open.spotify.com/playlist/7AcSLNFekKasTvg3Z8FiN0");

// http.createServe(function(request, response){
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }).listen(8888);


//references https://developer.spotify.com/console/get-several-albums/
var xhr = new XMLHttpRequest();
// var url = "https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases&fmt=json";
var url = "https://api.lyrics.ovh/v1/Pink Floyd/ Money";



	xhr.open('GET', url, true);

	xhr.send(null);

	// app.get('/login', function(req, res) {
	// var scopes = 'user-read-private user-read-email';
	// res.redirect('https://accounts.spotify.com/authorize' + '?response_type=code' + '&client_id=' + my_client_id + (scopes ? '&scope=' + encodeURIComponent(scopes) : '') + '&redirect_uri=' + encodeURIComponent(redirect_uri));
	// });

	xhr.onload =function(){

		if (xhr.status == 200) {

			// document.write(xhr.responseText)

			var data = JSON.parse(xhr.responseText)
			
			console.log(data)

			$("body").prepend("<p>" + data.lyrics + "</p>");
			// var title = data.title;
			// $("body").text(title);
		}
	}
