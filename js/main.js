// custom js
$(function () {
    $('#input_command').keypress(function (e) {
        // Enter pressed?
        if (e.which == 10 || e.which == 13) {
            var test = $('#input_command').val()
            $('#input_command').val("")
            $( "#terminal_op" ).append( "<p>"+test+"</p>" );
            console.log(test);
            
        }
    });

});