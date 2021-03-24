"use strict";

(function () {
    var url = 'https://calendarific.com/api/v2/holidays';
    var apiKey = "4d3f8211f416fcfdef552edee2f5462c4d546e62"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work

    fetch(url + '?api_key=' + apiKey + '&country=US&year=2021').then(function(results){
        if(!results.ok){
            // console.log("There was a problem");
            throw Error(results.statusText);
        }//else {console.log("Yeaag=h!!")}
        // console.log(results);
        // console.log(results.json());
        return results.json();
    }).then(function(results){
        updateUISuccess(results);
    }).catch(function(error){
        updateUISuccess();
    })
        // handle XHR success
        function updateUISuccess(results) {

            // let holidays = response.holidays;
            let holidays = results.response.holidays;
            // console.log(holidays.holidays); //tests for correct data
            // console.log(holidays[0]); //tests for correct data
    
            let output = "<div>"
    
            for (let i = 0; i < holidays.length; i++) {
                output += "<section><h3>" + holidays[i].name + "</h3>";
                output += "<h6>" + holidays[i].date.iso + "</h6>";
                output += "<p>Description: " + holidays[i].description + "</p>";
                output += "<p>Holiday Type: " + holidays[i].type + "</p>";
                output += "</section>";
                // console.log(item[i].name);
            }
    
            output += "</div>";
    
            var holidayBox = document.getElementById("update");
            holidayBox.innerHTML = output;
        }
            // handle XHR error
    function updateUIError() {
        var holidayBox = document.getElementById("update");
        holidayBox.className = "hidden";
    }
})();