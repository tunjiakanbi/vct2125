function loadAjax() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open('GET', 'data.json');
    request.onreadystatechange = function() {
        if ((request.status === 200) && (request.readyState === 4)) {
            
            var items = JSON.parse(this.responseText);
            //console.log(items);
            var output = '<ul>';
            for (var key in items) {
                output += '<li>' + items[key].artistname + '</li>';
            }
 
            output += '</ul>';
            document.getElementById('update').innerHTML = output;
        }
    }
    request.send();
}

loadAjax();