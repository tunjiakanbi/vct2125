"use strict";
//Fetch Request
(function () {
         var url = "http://api.openweathermap.org/data/2.5/weather?zip=55110,us";
         var apiKey = "d45fcd4d18a5f4af431ef6b2c7a9f6c2";

         fetch(url + '&appid=' + apiKey).then(function(response){
             if(!response.ok){
                throw Error(response.statusText);
             }
             return response.json();
         }).then(function(response){
            updateUISuccess(response);
         }).catch(function(error){
            updateUIError();
         });

         //handle XHR success
    function updateUISuccess(response) {
        // var response = JSON.parse(responseText);
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

