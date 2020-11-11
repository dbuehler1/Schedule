$(document).ready(function () {
    $(".days").click(DisplaySchedule);


    function DisplaySchedule(){
        $("#Schedule").empty();
         if($("#Monday:checked").length == 1){
             $("#Schedule").text("School:  12AM \n " +
                 "Relax:  4PM");

         }
        if($("#Tuesday:checked").length == 1){
            $("#Schedule").text("NONE:  ------ \n " +
                "Relax:  6PM");

        }
        if($("#Wednesday:checked").length == 1){
            $("#Schedule").text("School:  8AM \n " +
                "Relax:  5PM");

        }
        if($("#Thursday:checked").length == 1){
            $("#Schedule").text("School:  9AM \n " +
                "Relax:  3PM \n " +
                "Homework:  11AM");

        }
        if($("#Friday:checked").length == 1){
            $("#Schedule").text("NONE:  ------ \n " +
                "Relax:  6PM \n " +
                "Homework:  11AM");

        }
        if($("#Saturday:checked").length == 1){
            $("#Schedule").text("Work:  7AM \n " +
                "Relax:  4PM");

        }
        if($("#Sunday:checked").length == 1){
            $("#Schedule").text("Work:  6AM \n " +
                "Relax:  3PM");

        }

    }
})
