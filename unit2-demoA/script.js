var request;
if(window.XMLHttpRequest){
   request = new XMLHttpRequest(); 
}
else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml', true);
request.onreadystatechange = function(){
    if((this.status === 200) && (this.readyState === 4)){
        //console.log(request.responseXML.getElementsByTagName('artistname')[0].firstChild.nodeValue);
        var items = request.responseXML.getElementsByTagName('artistname');
        var output = '<ul>';
        for (var i = 0; i < items.length; i++) {
            output += '<li>' + items[i].firstChild.nodeValue + '</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML = output;
    }
}
request.send();