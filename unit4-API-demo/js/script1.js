// "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=yourkey
"use strict";
(function () {

    const url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather";
    const apiKey = "EuT7wXllUoybNK3GrVW1RmkAlONZYy5f";
    let httpRequest;
    makeRequest();
    console.log("hello");

    function makeRequest() {
        if (window.XMLHttpRequest) {
            httpRequest = new XMLHttpRequest();
        } else {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // httpRequest = new XMLHttpRequest(); 
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url + '&api-key=' + apiKey);
        httpRequest.send();

    }

    function responseMethod() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                // console.log("hello1");
                updateUISuccess(httpRequest.responseText);
            } else {
                updateUIError();
            }
            // console.log(httpRequest.responseText);
        }
    }

    function updateUISuccess(responseText) {
        let response = JSON.parse(responseText);
        // let _results = response;
        // console.log(_results);
        console.log(response.results);
        // console.log(response.results.length);
        // console.log(_results);
        // console.log(response.results.length);
        // for(let i = 0; i < response.length; i++) {}

        // let results1 = response.results[0].display_title;
        // let results2 = response.results[0].link.url;
        // let results3 = response.results[0].multimedia.src;

        // console.log(results3);

        // $('#nytimes').html(
        //     "<h1>" + results1 +"</h1>" +
        //     '<a href="' + results2 + '" target="_blank">Click to Read More</a>' +
        //     '<section><img src="' + results3 + '"/></section>'
        // );

        let output = '<ul>';
        for (let i = 0; i < response.results.length; i++) {
            output += '<li>';
            output += '<h2>' + response.results[i].display_title + '</h2>';
            output += '</li>';
            output += '<p>'+ response.results[i].summary_short +'</p>';
            output += '<a href="' + response.results[i].link.url + '" target="_blank">Click to Read More</a>';
            // if(response.results[i].multimedia.src === null){
            //     console.log('x');
            // }
            // console.log(!response.results[i].multimedia.src===null);
           // output += '<section><img src="' + response.results[i].multimedia.src + '"/></section>';
            // console.log(response.results[i].display_title);
        }
        // $.each(response, function(key, val){
        //     output+='<li>;';
        //     output +='<h2>' + val.results.display_title + '</h2>';
        //     output +='</li>'
        // });
        output += '</ul>';
        $('#nytimes').html(output);
    }

    function updateUIError() {
        let nytimes = document.getElementById("nytimes");
        nytimes.className = "hidden";
    }

})();