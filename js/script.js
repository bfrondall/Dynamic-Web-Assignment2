var xhr = new XMLHttpRequest();
// var url = "https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases&fmt=json";
var baseUrl = "https://api.lyrics.ovh/v1/";
var query;


	$("#Money").on("click", function(){
		query = "Pink Floyd/Money";
		callAPI();
		$(".pod").html("<p>Loading</p>");
	})

	$("#WishYouWereHere").on("click", function(){
		query = "Pink Floyd/Wish You Were Here";
		callAPI();
		$(".pod").html("<p>Loading</p>");
	})

	$("#ComfortablyNumb").on("click", function(){
		query = "Pink Floyd/Comfortably Numb";
		callAPI();
		$(".pod").html("<p>Loading</p>");
	})

function callAPI(){

	var url = baseUrl + query;


	xhr.open('GET', url, true);

	xhr.send(null);

	xhr.onload =function(){
		//console.log(xhr)

		if (xhr.status == 200) {

			var data = JSON.parse(xhr.responseText)
			
			console.log(data)

			var lyrics = data.lyrics.replace(/,/g, ',<br/>')
				lyrics = lyrics.replace(/[?=]/g, '?<br/>')
				lyrics = lyrics.replace(/[.=]/g, '.<br/>')
				lyrics = lyrics.replace(/[!=]/g, '!<br/>')
			$(".pod").html("<p>" + lyrics + "</p>");
		}
	}
}