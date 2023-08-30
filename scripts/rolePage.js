$(document).ready(function() { 
    $(".btn").click(function(e) {
        var ipWage = $("#ipWage");
        var ipWageValue = ipWage.val();

        if(ipWageValue != "") {
            cadastrarCargo(parseInt(ipWageValue));
            ipWage.val("");
            $(".sucessFeedback").fadeIn("slow").fadeOut("slow");
        }   
    });
});