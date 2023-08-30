$(document).ready(function() { 
    const ipRoleCode = $("#ipRoleCode");
    const invalidFeedbackMessage = $(".invalidFeedback");
    $("#btnDisplay").click(function() {
        

        
        try{
            var totalWage = calcularTotalSalarios(ipRoleCode.val());
            var basicWage = calcularSalarioBasico(ipRoleCode.val());

            if(invalidFeedbackMessage.css("display") == "flex") {
                invalidFeedbackMessage.css("display", "none");
            }
            
            $("#lbRole").html(ipRoleCode.val());
            $("#lbBasicWage").html(basicWage);
            $("#lbTotalWage").html(totalWage);
            $(".initialDivision").css("display", "none");
            $(".resultDivision").css("display", "flex");

            ipRoleCode.val("");
        } catch(e) {
            invalidFeedbackMessage.html(e.message).css("display", "flex");
        }
        
    });

    $("#btnBack").click(function() {
        $(".initialDivision").css("display", "flex");
        $(".resultDivision").css("display", "none");
    });
});