function loadAjax() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.onreadystatechange = function() {
        if ((request.status === 200) && (request.readyState === 4)) {
            myFunction(this);
        }
    }
    request.open('GET', 'data.json', true);
    request.send();
};

function myFunction(test) {
    var items = JSON.parse(test.responseText);
    //console.log(items);
    var output = '<tr><th>Artist</th><th>Album</th><th>Label</th><th>Year</th></tr>';
    for (var key in items) {
        output += '<tr><td>' 
        + items[key].artistname + '</td><td>'
        + items[key].album + '</td><td>' 
        + items[key].label + '</td><td>'
        + items[key].year + '</td></tr>';
    }

    // output += '</ul>';
    document.getElementById('update').innerHTML = output;
}