// custom js
$('#input_command').focus();

$('#input_command').keypress(function (e) {
    // Enter pressed?
    if (e.which == 10 || e.which == 13) {
        var command = $('#input_command').val();
        $('#input_command').val("");
        // $("#terminal_operations").append("<p class='text-info'>$ Under development, will be updated soon!</p>");
        switch (command.toLowerCase()){
            case 'help':
                    $("#terminal_operations").append("<p class='text-info'>Available commands</p>");
                $("#terminal_operations").append("<p>about : [Know about me]</p>");
                $("#terminal_operations").append("<p>skills : [Get to know what I'm skilled yet]</p>");
                $("#terminal_operations").append("<p>activities : [Know more about activities I've been a part of]</p>");    
                $("#terminal_operations").append("<p>projects : [The projects I've worked on]</p>");
                $("#terminal_operations").append("<p>resume : [Download my resume]</p>");
                break;
            case 'about':
                $("#terminal_operations").append("<p class='text-info'>Under development, will be updated soon!</p>");
                break;
            case 'activities':
                $("#terminal_operations").append("<p class='text-info'>Under development, will be updated soon!</p>");
                break;
            case 'resume':
                $("#terminal_operations").append("<p class='text-info'>Under development, will be updated soon!</p>");
                break;
            case 'skills':
                $("#terminal_operations").append("<p class='text-info'>Under development, will be updated soon!</p>");
                break;
            case 'projects':
                $("#terminal_operations").append("<p class='text-info'>Under development, will be updated soon!</p>");
                break;
            default:
                $("#terminal_operations").append("<p class='text-warning'>command not found: " + command + "</p>");
        }
    }
});

$('#terminal').click(function () {
    $('#input_command').focus();
});