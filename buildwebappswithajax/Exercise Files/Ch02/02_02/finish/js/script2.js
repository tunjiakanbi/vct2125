"use strict";

(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKey = "APIKEY"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
	var httpRequest;
	makeRequest();

	// create and send an XHR request
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + '&appid=' + apiKey);
		httpRequest.send();
	}
	// handle XHR response
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			console.log(httpRequest.responseText);
		}
	}
})();
