$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });

    $("#lateralBtn").click(function(){
        $('#lateralContainerId').toggle(1000);
    });

});