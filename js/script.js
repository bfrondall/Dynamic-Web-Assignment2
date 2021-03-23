var xhr = new XMLHttpRequest();
// var url = "https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases&fmt=json";
var baseUrl = "https://api.lyrics.ovh/v1/";
var query;


	$("#Money").on("click", function(){
		query = "Pink Floyd/ Money";
		callAPI();
	})

	$("#WishYouWereHere").on("click", function(){
		query = "Pink Floyd/ Wish You Were Here";
		callAPI();
	})

	$("ComfortablyNumb").on("click", function(){
		query = "Pink Floyd/ Comfortably Numb";
		callAPI();
	})

function callAPI(){

	var url = baseUrl + query;


	xhr.open('GET', baseUrl, true);

	xhr.send(null);

	xhr.onload =function(){


		if (xhr.status == 200) {

			var data = JSON.parse(xhr.responseText)
			
			console.log(data)

			$(".pod").prepend("<p>" + data.lyrics + "</p>");
		}
	}
}