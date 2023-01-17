let request;
if(window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}
else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "data.xml");
request.onreadystatechange = function() {
    if((request.status === 200) && (request.readyState === 4)) {
        // console.log(request.responseXML.getElementsByTagName('artistname')[0].firstChild.nodeValue);
        let items = request.responseXML.getElementsByTagName('artistname');
        console.log(items)
        let output = '<ul>';
        for(let i=0; i<items.length;i++) {
            output += '<li>' + items[i].firstChild.nodeValue + '</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML = output;
    }
}
request.send();