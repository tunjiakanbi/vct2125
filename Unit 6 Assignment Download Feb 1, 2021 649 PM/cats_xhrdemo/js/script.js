"use strict";

$("a").click(function () {
	var url = "https://api.thecatapi.com/v1/images/search";
    var apiKey = "12235335-2126-4521-a3a6-5b75a3bb8646";
    // Initial request
    $.get(url + "?app_key=" + apiKey).done(function(response) {
		updateUISuccess(response);
	}).fail(function(error) {
		updateUIError();
	});

    // handle XHR success
    function updateUISuccess(response) {
        var results1 = response[0].url;
        $('#cat').html(
            '<img src="' + results1 + '">'
        );
    }

    // handle XHR error
	function updateUIError() {
		var $weatherBox = $('#weather');
		$weatherBox.addClass = "hidden";
	}
})();

