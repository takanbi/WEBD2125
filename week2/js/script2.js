function loadArtist() {
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.onreadystatechange = function() {
        if((this.status === 200) && (this.readyState === 4)) {
            myFunction(this);
        }
    }
    request.open("GET", "data.xml");
    request.send();
}

function myFunction(xml) {
    let i;
    let items = xml.responseXML;
    let output = "<tr><th>Artist</th><th>Album</th><th>Label</th><th>Year</th></tr>";
    let x = items.getElementsByTagName("artist");
    console.log(x);
    for(i = 0; i < x.length; i++) {
        output += '<tr><td>' + x[i].getElementsByTagName('artistname')[0].childNodes[0].nodeValue + '</td>';
        output += '<td>' + x[i].getElementsByTagName('album')[0].childNodes[0].nodeValue + '</td>';
        output += '<td>' + x[i].getElementsByTagName('label')[0].childNodes[0].nodeValue + '</td>';
        output += '<td>' + x[i].getElementsByTagName('year')[0].childNodes[0].nodeValue + '</td></tr>';
    }
    document.getElementById("update").innerHTML = output;
}