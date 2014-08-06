$(document).ready( function() {
	$('.unanswered-getter').submit( function(event){
		// get the value of the number the user submitted
		var callfirenumber = $(this).find("input[name='number']").val();
		getCalls(callfirenumber);
	});
});

var getCalls = function(number) {
	

	
		var results = $.ajax({
		  type: 'GET',
		  url: "https://www.callfire.com/api/1.1/rest/call",
		  data: {
		    login: "aeecc8285ad9",
		    password: "8ef718767719a561"
		  },
		  dataType: "xml",
		  success: function (xml){
		    var clientid = $(xml).find('client_id').first().text();
		    alert(clientid);
		  }   
		});
};
