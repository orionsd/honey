$(document).ready(function () {

    $(".for_scroll").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



    $(".s2-titlelw").animate({
        opacity: "1",
        left: "250px"
    },1350);


});
