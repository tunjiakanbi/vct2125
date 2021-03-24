"use strict";

(function () {
    var url = 'https://calendarific.com/api/v2/holidays';
    var apiKey = "4d3f8211f416fcfdef552edee2f5462c4d546e62"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
$.get(url + '?api_key=' + apiKey + '&country=US&year=2021')
.done(function(result){
    // console.log(result);
    updateUISuccess(result);

})
    // handle XHR success
    function updateUISuccess(responseText) {

        let holidays = responseText.response.holidays;
        console.log(holidays); //tests for correct data
        // console.log(holidays[0]); //tests for correct data

        let output = "<div>"

        for (let i = 0; i < holidays.length; i++) {
            output += "<section><h3>" + holidays[i].name + "</h3>";
            output += "<h6>" + holidays[i].date.iso + "</h6>";
            output += "<p>Description: " + holidays[i].description + "</p>";
            output += "<p>Holiday Type: " + holidays[i].type + "</p>";
            output += "</section>";
        
        }

        output += "</div>";

        var holidayBox = document.getElementById("update");
        holidayBox.innerHTML = output;
    }
})();


