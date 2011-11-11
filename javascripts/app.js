
//function displayThreads(msg) {
//	var arr = eval("(" + msg + ")");
//	$("#threadDiv").empty();
//	for(var i = 0; i < arr.length; i++) {
//		var obj = arr[i];
//		$("#threadDiv").append("<div class='row thread' id='thread" + obj["t_id"] + "'></div>");
//		$("#thread" + obj["t_id"]).append("<div class='three columns'><img src='http://placehold.it/100x100'></div>");
//		$("#thread" + obj["t_id"]).append("<div class='eight columns'><p>" + obj["content"] + "</p></div>");
//        $("#thread" + obj["t_id"]).append("<div class='one columns'><div class='numResponses'><h1>" + obj["response_count"] + "</h1></div></div>");
//    }
//	return false;
//}
//
//function getThreadsOnLoad() {
//	$.ajax({
//           type : "get",
//           url : "./php/getThreads.php",
//           cache : false,
//           async : true,
//           data : {
//           "s" : "new",
//           "n" : 10
//           },
//           success : function(msg) {
//           displayThreads(msg);
//           },
//           complete : function() {
//           }
//           });
//}


$(document).ready(function() {
                  
                  /* Use this js doc for all application specific JS */
                  $(window).resize(function() {
                                   console.log($(window).width());
                                   });
                  /* PLACEHOLDER FOR FORMS ------------- */
                  /* Remove this and jquery.placeholder.min.js if you don't need :) */
                  
                  $('input, textarea').placeholder();
//                  getThreadsOnLoad();

                  $(".thread").click(function () {

                        if($(this).hasClass("thread")) { 
                            $(".threadSelected").toggleClass("thread threadSelected");
                            $(this).toggleClass("thread threadSelected"); 
                            if(!$('#responseDiv').is(":visible")) {
                                $('#responseDiv').slideToggle();
                            }
                        } else {
                            $('#responseDiv').slideToggle();
                            $(".threadSelected").toggleClass("thread threadSelected");
                        }
                                     
                    });
                  
});
