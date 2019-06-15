// custom js
$('#input_command').focus();

$('#input_command').keypress(function (e) {
    // Enter pressed?
    if (e.which == 10 || e.which == 13) {
        var test = $('#input_command').val()
        $('#input_command').val("")
        $("#terminal_operations").append("<p>" + test + "</p>");
    }
});
$(document).ready(function () {
    $(".demo").owlCarousel({
        center: true,
        items: 3,
        // mergeFit: false,
        margin: 0,
        loop: true,
        nav: true,
        animateOut: 'fadeOut',
        autoplay: true,
    });
});