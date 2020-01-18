
$("#submit").on("click", function(){

    var keywords = $("#keywords").val().trim();

    var startYear = $("#start-year").val().trim();

    var startYearNum = parseInt(startYear);
 

    var endYear = $("#end-year").val().trim(); 
    var endYearNum = parseInt(endYear);
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keywords + "&start-year=" + startYearNum + "&endyear=" + endYearNum + "&api-key=ICMSM18iiounT8hCuxQi2WifgPCQcd8m";

    $.ajax({
    url: queryURL,
    method: "GET"

    }).then(function(response){
    console.log(queryURL);
    console.log(response);
})

});

$("#clear").on("click", function(){
    var keywords = $("#keywords").val().trim();

    var startYear = $("#start-year").val().trim();

    var endYear = $("#end-year").val().trim(); 

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keywords + "&start-year=" + startYear + "&endyear=" + endYear + "&api-key=ICMSM18iiounT8hCuxQi2WifgPCQcd8m";
    console.log(queryURL)
    console.log(keywords);
    console.log(startYear);
    console.log(endYear);
});