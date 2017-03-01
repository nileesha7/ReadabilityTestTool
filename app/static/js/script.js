$(document).ready(function(){

	//store the html code 
	testByURLHTML = $("#test-by-url").html();
	testByRefererHTML = $("#test-by-referer").html();
	testDirectInputHTML = $("#test-directInput").html();

	//test by referer and direct input sections are hidden 
	$("#test-by-referer").hide();
	$("#test-directInput").hide();

	//load the html code in the input-space div when buttons are clicked

	$("#testUrl-btn").click("Submit", function(e){
		$("#input-space").html(testByURLHTML);
	});
	$("#testDirectInput-btn").click("Submit", function(e){
		$("#input-space").html(testDirectInputHTML);
	});
	$("#test-referer-btn").click("Submit", function(e){
		$("#input-space").html(testByRefererHTML);
	});

	
});