var request; 
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.json');

request.onreadystatechange = function () {

    if ((request.status === 200) && (request.readyState === 4)) {
        
      var items = JSON.parse(request.responseText);
    //   var output = '<ul>';
    //   for (var i = 0; i < items.length; i++) {
    //       output += '<li>' + items[i].firstChild.nodeValue + '</li>';
    //   }
    //   output += '</ul>';
    //   document.getElementById('update').innerHTML = output;
    }
}
request.send();