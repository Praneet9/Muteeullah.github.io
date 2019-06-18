// custom js
$('#input_command').focus();

$('#input_command').keypress(function (e) {
    // Enter pressed?
    if (e.which == 10 || e.which == 13) {
        var test = $('#input_command').val();
        $('#input_command').val("");
        $("#terminal_operations").append("<p class='text-info'>$ " + test + "</p>");
        if (test.toLowerCase() == 'help') {
            $("#terminal_operations").append("<p>>about       :  [Know about me]</p>");
            $("#terminal_operations").append("<p>skills      :  [Get to know what I'm skilled yet]</p>");
            $("#terminal_operations").append("<p>activities  :  [Know more about activities I've been a part of]</p>");    
            $("#terminal_operations").append("<p>projects    :  [The projects I've worked on]</p>");
            $("#terminal_operations").append("<p>resume      :  [Download my resume]</p>");
        }
        else {
            $("#terminal_operations").append("<p class='text-warning'>> command not found: " + test + "</p>");
        }
        // $("#terminal_operations").append("<p>> " + test + "</p>");
    }
});

$('#terminal').click(function () {
    $('#input_command').focus();
});