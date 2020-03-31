function loadValuesFromTable(tableId){
    var trArr = [];
    var mainTable = $('#'+tableId);
    var tr = mainTable.find('tbody tr');
    tr.each(function(){
        var tdArr=[];
        $(this).find('td').each(function(){

            var values=$(this).find(':text').val();
            if (values!=undefined)
                tdArr.push(values);
        });
        trArr.push(tdArr);
    });
    return trArr;
}

$( document ).ready(function() {

    $("#submit").click(function () {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});


    function ajaxPost(){

		var fullName = $("#fullName").val();
		var department = $("#department").val();
		var rollNo = $("#rollNo").val();
		var year = $("#year").val();
		var date = $("#date").val();
		var table1 = loadValuesFromTable("table1");
		var table2 = loadValuesFromTable("table2");

    	// PREPARE FORM DATA
    	var formData = {
			"fullName":fullName,
			"department":department,
			"rollNo":rollNo,
			"year":year,
			"date":date,
			"table1":table1,
			"table2":table2
		};
		
		console.log(formData);

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
});