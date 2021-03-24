"use strict";

(function() {
	//var url = "https://api.nasa.gov/planetary/apod?api_key=1ZzElZLgYHntReipkteklynxBpmDTEhbpFNXMBTj";
	var url = "https://api.nasa.gov/planetary/apod?";
	var apiKey = "1ZzElZLgYHntReipkteklynxBpmDTEhbpFNXMBTj";
	var httpRequest;
	makeRequest();

	// create and send an XHR request
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + 'api_key=' + apiKey);
		httpRequest.send();
	}
	// handle XHR response
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				updateUISuccess(httpRequest.responseText);
			} else {
				updateUIError();
			}
			//console.log(httpRequest.responseText);
		}
	}
	// handle XHR success
	function updateUISuccess(responseText) {
		var response = JSON.parse(httpRequest.responseText);
		var copy = response.copyright;
		var expl = response.explanation;
		var hdurl = response.hdurl;
		var title = response.title;
		var urL = response.url;
		//var condition = response.nasa[0].main;
		var nasaBox = document.getElementById("nasa");
		nasaBox.innerHTML = 
		"<h1>" + copy + "</h1>" + 
		"<span>" + title + "</span>" +
		"<p>" + expl + "</p>" +
		'<img src="' + hdurl + '"/>' +
		'<a href="' + urL + '">Link to article</a>'
		;

		console.log(response);
		console.log(hdurl);
	}
	// handle XHR error
	function updateUIError() {
		var nasaBox = document.getElementById("nasa");
		nasaBox.className = "hidden";
	}
})();