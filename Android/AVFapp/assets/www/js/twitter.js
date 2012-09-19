// star wars twitter search!
// yeah!!!

// JSONP callback
//http://search.twitter.com/search.json?q=star%20wars&callback=?

$(function() {
	$.getJSON("http://search.twitter.com/search.json?q=star%20wars&callback=?&rpp=3", function(crawl) {
		console.log(crawl);
		$("#crawl").html("<p>Episode III - Star Wars Tweets</p>");

		for (i=0, j=crawl.results.length; i<j; i++) {

			$("#crawl").append("<p>" + crawl.results[i].text) +"</p>";
			$("#crawl").append("<p>" + crawl.results[i].created_at +"</p>");
		}

	});
});