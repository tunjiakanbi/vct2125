var request;
if(window.XMLHttpRequest){
   request = new XMLHttpRequest(); 
}
else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.txt', true);
request.onreadystatechange = function(){
    if((this.status === 200) && (this.readyState === 4)){
        console.log(request);
        document.getElementById("demo").innerHTML = this.responseText;
    }
}
request.send();