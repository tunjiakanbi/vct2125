function loadArtist() {

    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.onreadystatechange = function () {
        if ((this.status === 200) && (this.readyState === 4)) {
            myFunction(this);
        }
    };

    request.open('GET', 'data.xml', true);
    request.send();
}
    function myFunction(xml) {
        var i;
        var items = xml.responseXML;
        var output = "<tr><th>Artist</th><th>Album</th></tr>";
        var x = items.getElementsByTagName("artist");
        for (i=0;i < x.length; i++) {
           output += '<tr><td>' +
           x[i].getElementsByTagName('artistname')[0].childNodes[0].nodeValue +
           '</td><td>' +
           x[i].getElementsByTagName('album')[0].childNodes[0].nodeValue +
           '</td></tr>'
        }
        document.getElementById('update').innerHTML = output;
    }
    // request.onreadystatechange = function () {

    //     if ((request.status === 200) && (request.readyState === 4)) {
    //         console.log(request.responseXML.getElementsByTagName('artistname')[0].firstChild.nodeValue);
    //       var items = request.responseXML.getElementsByTagName('artistname');
    //       var output = '<ul>';
    //       for (var i = 0; i < items.length; i++) {
    //           output += '<li>' + items[i].firstChild.nodeValue + '</li>';
    //       }
    //       output += '</ul>';
    //       document.getElementById('update').innerHTML = output;
    //     }
    // }

