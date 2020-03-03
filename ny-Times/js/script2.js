"use strict";

// (function() {
    var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
    var queryString = $.param({
        apikey: "7a940fc0-5a62-11ea-b877-8f943796feb8",
        title: "rabbit",
        classification: "Paintings"
    });
    
    $.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
       console.log(data); 
       var neWw = data.records[0].primaryimageurl;
       //var neWw = data.records[0].people;
       console.log(neWw);
       $("#harvard").html(
        '<section><img src="' + neWw + '"/></section>'
       )
    });

    // console.log("hello");
    // var url = "https://api.harvardartmuseums.org/gallery?floor=2";
    // var apiKey="EuT7wXllUoybNK3GrVW1RmkAlONZYy5f"
    // var httpRequest;
    // makeRequest();
  
    // function makeRequest() {
    //     httpRequest = new XMLHttpRequest();
    //     httpRequest.onreadystatechange = responseMethod;
    //     httpRequest.open('GET', url + '&api-key=' + apiKey);
    //     httpRequest.send();
    // }
    // function responseMethod() {
    //     if (httpRequest.readyState === 4) {
    //         if (httpRequest.status === 200) {
    //              updateUISuccess(httpRequest.responseText);
                //console.log("hello");
            //} 
            // else {
            //   updateUIError();
            //  }
            //console.log(httpRequest.responseText);
   
    //     }
    // }
    // function updateUISuccess(responseText) {
    //     var response = JSON.parse(responseText);
    //     var _results = response;
    //     console.log(_results);
    //     var results1 = response.results[0].display_title;
    //     var results2 = response.results[0].link.url;
    //     var results3 = response.results[0].multimedia.src;
        // console.log(results3);
    //     $('#nytimes').html(
    //         "<h1>" + results1 +"</h1>" +
    //         '<a href="' + results2 + '" target="_blank"`>Click to Read More</a>' +
    //         '<section><img src="' + results3 + '"/></section>'
    //         );
    // }

    // function updateUIError() {
    //     var nytimes = document.getElementById("nytimes");
    //     nytimes.className = "hidden";
    // }

// })();