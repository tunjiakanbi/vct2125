"use strict";

(function () {
    var url = 'https://calendarific.com/api/v2/holidays';
    var apiKey = "4d3f8211f416fcfdef552edee2f5462c4d546e62"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
    var httpRequest;
    makeRequest();
    let data;
    // create and send an XHR request
    function makeRequest() {
        if (window.XMLHttpRequest) {
            httpRequest = new XMLHttpRequest();
        }
        else {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }

        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url + '?api_key=' + apiKey + '&country=US&year=2021');
        httpRequest.send();
        //set up country and year as variable, create a form to get values and use in request
    }

    // handle XHR response
    function responseMethod() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                data = JSON.parse(httpRequest.responseText)
                // console.log(data.response);
                updateUISuccess(data.response);
            } else {
                updateUIError();
            }
        }
    }

    // handle XHR success
    function updateUISuccess(responseText) {

        let holidays = responseText.holidays;
        // console.log(holidays); //tests for correct data
        // console.log(holidays[0]); //tests for correct data

        let output = "<div>"

        for (let i = 0; i < holidays.length; i++) {
            output += "<section><h3>" + holidays[i].name + "</h3>";
            output += "<h6>" + holidays[1].date.iso + "</h6>";
            output += "<p>Description: " + holidays[i].description + "</p>";
            output += "<p>Holiday Type: " + holidays[i].type + "</p>";
            output += "</section>";
            // console.log(item[i].name);
        }

        output += "</div>";
        document.getElementById('update').innerHTML = output;//fix these
    }

    // handle XHR error
    function updateUIError() {
        var holidayBox = document.getElementById("update");//fix these
        holidayBox.className = "hidden";//fix 
    }
})();

