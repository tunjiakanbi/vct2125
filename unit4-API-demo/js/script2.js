"use strict";
// var search = $("#search").value;
$("#submit").on('click', function (event) {
    event.preventDefault();
    var search = $("#search").val().trim();
    console.log(search);
    runSearch(search);
    // (()=>{search.val() = "";})();
    // $("search").value = "";
    
})

function runSearch(searchs){
// Find all of the objects that are paintings and have the word "rabbit" in the title
var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
    apikey: "7a940fc0-5a62-11ea-b877-8f943796feb8",
    title: searchs,
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
//    console.log(data.records.length); 
   console.log(data.records); 
    var output = '<ul>';
   for(var i=0; i<data.records.length;i++){
    var newArt = data.records[i].primaryimageurl;
    output += '<li>';
    output += '<img src="' + newArt +'"/>';
    output += '</li>';
   }
   output += '</ul>';
//   var newArt = data.records[0].primaryimageurl;
//   var newArt = data.records[0].image[0].baseimageurl;
//   console.log(newArt); 
//   $("#harvard").html(
//       '<section><img src="' + newArt + '"/></section>')

   $('#harvard').html(output);
});
}


