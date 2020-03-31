$( document ).ready(function() {

	// SUBMIT FORM
    $("#customerForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});


    function ajaxPost(){

        var table1 = $('#table1');
        var tr = table1.find('tbody tr');
        alert(tr.length);

    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val()
    	}

    	// DO POST
//    	$.ajax({
//			type : "POST",
//			contentType : "application/json",
//			url : window.location + "api/customer/save",
//			data : JSON.stringify(formData),
//			dataType : 'json',
//			success : function(result) {
//				if(result.status == "Done"){
//					$("#postResultDiv").html("<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" +
//												"Post Successfully! <br>" +
//												"---> Customer's Info: FirstName = " +
//												result.data.firstname + " ,LastName = " + result.data.lastname + "</p>");
//				}else{
//					$("#postResultDiv").html("<strong>Error</strong>");
//				}
//				console.log(result);
//			},
//			error : function(e) {
//				alert("Error!")
//				console.log("ERROR: ", e);
//			}
//		});
//
//    	// Reset FormData after Posting
//    	resetData();

    }

//    function resetData(){
//    	$("#firstname").val("");
//    	$("#lastname").val("");
//    }
})