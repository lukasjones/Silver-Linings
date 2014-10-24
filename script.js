$(document).ready(function () {
    $(".button").on("click", function () {
        var amount = $(this).val();
        $(".sum").val(amount);

    });

    $("input").on("mouseenter", function () {
        $(this).animate({ "color": "red" , "margin-top": "-9px"});
    });

    $("input").on("mouseleave", function () {
        $(this).animate({ "color": "black", "margin-top": "0px" });
    });



});