// Andrew Phillips
//AVF 1208
// Project 2
// Due August 10

$(document).ready(function()
{
	//HOME PAGE
	$('#home').live('pageshow', function()
	{console.log("Home Page Loaded");}); //end contact pageinit

	//ADD FOOTER
	$('#header').empty();
	$(function()
	{$('#header').append('<center><h1><a href="index.html">AVF Launch Page Wk 2</a></h1></center>');});
	console.log("Header Loaded");
	
	//ADD FOOTER
	$('#footer').empty();
	$(function()
	{$('#footer').append('<small>Andrew Phillips :: AVF1208  ^_^</small>');});
	console.log("Footer Loaded");

	
});
