// function loadArtist() {
// $.getJSON('js/data.json', function(data){
//     let output = "<ul>";
//     $.each(data, function(key, val){
//         output += '<li>';
//         output += '<h2>' + val.artistname + '</h2>';
//         output += '<img src="images/' + val.albumImg + '.jpeg"' + ' alt="' + val.album + '"/>';
//         output += '</li>';
//     });
//     output += '</ul>';
//     $("#update").html(output);
// });
// }

$("#search").keyup(function() {
    let searchField = $("#search").val();
    let myExp = new RegExp(searchField, "i");
    $.getJSON('js/data.json', function(data){
        let output = "<ul>";
        $.each(data, function(key, val){
           if((val.artistname.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
            output += '<li>';
            output += '<h1>' + val.artistname + '</h1>';
            output += '<img src="images/' + val.albumImg + '.jpeg"' + ' alt="' + val.album + '"/>';
            output += '<h3>' + val.album + '</h3>';
            output += '<h3>' + val.label + '</h3>';
            output += '<h3>' + val.year + '</h3>';
            output += '<p>' + val.bio + '</p>';
            output += '</li>';
        }
        });
        output += '</ul>';
        $("#update").html(output);
    });
    });