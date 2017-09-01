

showdown.setOption('customizedHeaderId', true);

var liveURL = 'https://raw.githubusercontent.com/2AnnaLSaunders2/2AnnaLSaunders2.github.io/master/contents/contents.md',
	testURL = 'contents/contents.md'

$.when($.ajax({
	dataType: 'text',
    url: liveURL, 
    complete: function(r){

    	/*
			url for testing: 
			url for live: 
    	*/

    	var string = r.responseText
    	var converter = new showdown.Converter(),
		text      = string,
		html      = converter.makeHtml(text);
		$( "body" ).append( $( html ) ); //introduce content

    }
 })).then(function(){

	$("body").css({"opacity" : 1, 
					"transform" : "translateY(0px)"})

})


	
