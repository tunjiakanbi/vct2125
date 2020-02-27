angular.module('listApp', [])
    .controller('ListController', ['$http', function ($http) {
        $http.get("http://api.openweathermap.org/data/2.5/weather?zip=55110,us&appid=d45fcd4d18a5f4af431ef6b2c7a9f6c2")
        // $http.get("https://www.eventbriteapi.com/v3/events/search/?token=U6BOJQL3X24B5WWMZV&location.address=london+uk")
        .then(function(data) {
            console.log(data);
        })
    }])

    // var url = "http://api.openweathermap.org/data/2.5/weather?zip=55110,us";
    // var apiKey = "d45fcd4d18a5f4af431ef6b2c7a9f6c2";
    // httpRequest.open('GET', url + '&appid=' + apiKey);

    // "http://api.openweathermap.org/data/2.5/weather?zip=55110,us&appid=d45fcd4d18a5f4af431ef6b2c7a9f6c2"