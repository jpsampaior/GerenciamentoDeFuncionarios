$(document).ready(function() { 
    const table = $("#employessTable");

    $(".btn").click(function() {
        table.fadeIn("fast");
        $(".btn").css("display","none");
        mostrarRelatorioFuncionarios(table);
    });
});