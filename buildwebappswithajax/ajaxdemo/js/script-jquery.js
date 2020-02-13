"use strict";

//jQuery request
(function () {
    var url = "http://api.openweathermap.org/data/2.5/weather?zip=55110,us";
    var apiKey = "d45fcd4d18a5f4af431ef6b2c7a9f6c2";
    $.get(url + '&appid=' + apiKey).done(function (response) {
        //  console.log(response);
        updateUISuccess(response);
    }).fail(function (error) {
        updateUIError();
    });

    function updateUISuccess(response) {
        var condition = response.weather[0].main;
        var degC = response.main.temp - 273.15;
        var degCInt = Math.floor(degC);
        var degF = degC * 1.8 + 32;
        var degFInt = Math.floor(degF);
        var $weatherBox = $('#weather');
        $weatherBox.append("<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
    }

    function updateUIError() {
        var $weatherBox = $('#weather');
        $weatherBox.addClass('hidden');
    }
})();

