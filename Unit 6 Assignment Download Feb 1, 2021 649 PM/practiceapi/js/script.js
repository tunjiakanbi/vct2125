"use strict";

(function(){
   
var url = "https://api.nasa.gov/planetary/apod?api_key=kjwvspwuce5oQNCP7fYFSsiQZSEF2kAKhDtkpIkp";

var httpRequest;
makeRequest();

function makeRequest(){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open('GET', url);
    httpRequest.send();
}

function responseMethod(){
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200){
            
            updateUISuccess(httpRequest.responseText);
        } else {
           updateUIError();
     }
       // console.log(httpRequest.responseText);
    }
}
function updateUISuccess(responseText){
    var response = JSON.parse(responseText);
    var results = response.explanation;
    var date = response.date;
    var title = response.title;
    console.log("results");
document.getElementById("apod").innerHTML ='<h1>' + title + '</h1>' +'<h3>' + date + '</h3>' + '<p>'+results+'</p>'
    
    console.log(response);
    console.log(results);
    //console.log(date);
}

function updateUIError(){
    var apod = document.getElementById("apod");
    apod.className = "hidden";
}

})();

