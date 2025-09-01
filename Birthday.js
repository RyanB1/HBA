$(document).ready(function () {
    $("#envelope").on('click', function () {
        $(this).fadeOut(200, function () {
            $("#card-overlay").css("display", "flex").hide().fadeIn(400);
        });
    });

    $("#card-overlay").on("click", function () {
        $("#present").parent().removeAttr("style");
        $(this).fadeOut(300, function () {
            $(this).css("display", "none");
        });
    });

    $("#present").on('click', function () {
        $(this).fadeOut(200, function () {
            $("#ticket-overlay").css("display", "flex").hide().fadeIn(400);
        });
    });

    $("#ticket-overlay").on("click", function () {
        $("#card-ticket-div").removeAttr("style");
        $(this).fadeOut(300, function () {
            $(this).css("display", "none");
        });
    });
});