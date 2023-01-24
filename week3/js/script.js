function loadArtist() {
    let request;
if(window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}
else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "data.json");
request.onreadystatechange = function() {
    if((request.status === 200) && (request.readyState === 4)) {
        // console.log(request.responseXML.getElementsByTagName('artistname')[0].firstChild.nodeValue);
        // let items = request.responseXML.getElementsByTagName('artistname');//removed to use json.parce method

        let items = JSON.parse(request.responseText)
        console.log(items)
        let output = '<ul>';
        // for(let i=0; i<items.length;i++) {
        //     output += '<li>' + items[i].firstChild.nodeValue + '</li>';
        // }
        for (let key in items) {
            output += '<li>' + items[key].artistname + '</li>';
            output += '<li>' + items[key].album + '</li>';
            output += '<li>' + items[key].label + '</li>';
            output += '<li>' + items[key].year + '</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML = output;
    }
}
request.send();
}