



$(document).ready(function(){

  $("button").on("click", function(){
  	$(".test").hide();
    $(this).attr("disabled","disabled");
  });

});