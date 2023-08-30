$(document).ready(function() { 
    const ipEmpName = $("#ipEmpName");
    const ipEmpCode = $("#ipEmpCode");
    const ipWageCode = $("#ipWageCode");
    const invalidFeedbackMessage = $(".invalidFeedback");

    $(".btn").click(function() {
        var name = $("#ipEmpName").val();
        var empCode = $("#ipEmpCode").val();
        var wageCode = $("#ipWageCode").val();

        if(name != "" && empCode != "" && wageCode != "") {
            try{
                cadastrarFuncionario(parseInt(empCode),name,parseInt(wageCode));
                if(invalidFeedbackMessage.css("display") == "flex") {
                    invalidFeedbackMessage.css("display", "none");
                }

                $(".sucessFeedback").fadeIn("slow").fadeOut("slow");

                ipEmpName.val("");
                ipEmpCode.val("");
                ipWageCode.val("");
            } catch (e){
                invalidFeedbackMessage.html(e.message).css("display", "flex");
            }
        }  
    });
});