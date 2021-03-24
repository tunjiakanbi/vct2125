$(function () {
    $('#search').keyup(function () {
        let searchField = $('#search').val();
        let myExp = new RegExp(searchField, "i");
        $.getJSON('../data/data.json', function (data) {
            let output = '<ul class="searchinfo">';
            $.each(data, function (key, val) {
                if((val.artistname.search(myExp) != -1)||(val.bio.search(myExp) != -1)){
                    output += '<li>';
                    output += '<h2>Artist: ' + val.artistname + '</h2>';
                    output += '<p>Album: ' + val.album + '</p>';
                    output += '<p>Label: ' + val.label + '</p>';
                    output += '<p>Release Year: ' + val.year + '</p>';
                    output += '<img src="images/' + val.albumImg + '.jpeg" alt="' + val.album + '"/>';
                    output += '<p>Artist Bio: ' + val.bio + '</p>';
                }
            });
            output += '</ul>';
            $("#update").html(output);
        })
    })

});