"use strict";

(function () {
    var url = "http://api.openweathermap.org/data/2.5/weather?zip=55110,us";
    // var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
    var apiKey = "d45fcd4d18a5f4af431ef6b2c7a9f6c2"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
    var httpRequest;
    makeRequest();

    //create and send XHR request
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url + '&appid=' + apiKey);
        httpRequest.send();
    }

    function responseMethod() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                updateUISuccess(httpRequest.responseText);
            } else {
                updateUIError();
            }
            console.log(httpRequest.responseText);
        }
    }
    //handle XHR success
    function updateUISuccess(responseText) {
        var response = JSON.parse(responseText);
        var condition = response.weather[0].main;
        var degC = response.main.temp - 273.15;
        var degCInt = Math.floor(degC);
        var degF = degC * 1.8 + 32;
        var degFInt = Math.floor(degF);
        var weatherBox = document.getElementById("weather");
        weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>"
    }
    //handle XHR error
    function updateUIError() {
        var weatherBox = document.getElementById("weather");
        weatherBox.className = "hidden";
    }
})();

//console.log("hello world");
//var url = "http://api.openweathermap.org/data/2.5/weather?zip=55110,us";