function getData() {
    let myDataRequest; 

    if(window.XMLHttpRequest) {
        myDataRequest = new XMLHttpRequest();
    }
    else{
        myDataRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

 myDataRequest.onload = function() {
        document.getElementById("text").innerHTML = this.responseText;
    }
    myDataRequest.open("GET", "data.txt", true);
    myDataRequest.send();      
}