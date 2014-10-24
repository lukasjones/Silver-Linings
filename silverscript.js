
$(document).ready(function () {

    /*This works*/
    $(".box").on("click", function () {
        var amount = $(this).val();
        $(".amount").val(amount);
    });

    /*This doesn't work yet*/
    $(".box").on("click", function () {
        $(".box").removeclass("highlight");
        $(this).addClass("highlight");
    });
    // works
    $(".donatebutton").on("mouseenter", function() {
        $(".donatebutton").css({"background-color": "orange"});
    });
    $(".donatebutton").on("mouseleave", function() {
        $(".donatebutton").css({"background-color": "white"});
    });

});
