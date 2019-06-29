// custom js
$('#input_command').focus();

$('#input_command').keypress(function (e) {
    // Enter pressed?
    if (e.which == 10 || e.which == 13) {
        var command = $('#input_command').val();
        $('#input_command').val("");
        $("#terminal_operations").append("<p>$ "+ command + "</p>");
        switch (command){
            case 'cat help':
                    $("#terminal_operations").append("<p class='text-info'>Available commands</p>");
                $("#terminal_operations").append("<p>cat about : [Know about me]</p>");
                $("#terminal_operations").append("<p>cat skills : [Get to know what I'm skilled yet]</p>");
                $("#terminal_operations").append("<p>cat activities : [Know more about activities I've been a part of]</p>");    
                $("#terminal_operations").append("<p>cat projects : [The projects I've worked on]</p>");
                $("#terminal_operations").append("<p>resume : [Download my resume]</p>");
                break;
            case 'cat about':
                $("#terminal_operations").append("<p class='text-info'>I am a Computer Science graduate, started learning as a Java Web Application Developer got interested in Managing and Deploying Application on Servers and finally paving the way to develop the interest towards the field of CyberSecurity. </p>");
                break;
            case 'cat activities':
                $("#terminal_operations").append("<p class='text-info'>  I was one of the head of THE PROGRAMMERS CLUB, a community that helps other students to code. I was also a speaker at a workshop on Object Oriented Programming (JAVA) organized by the club and also a part of the Core & Technical committee that organized ERR_404 State Level Hackathon. Mostly we (me and my team) occasionally took part in Hackathons. </p>");
                break;
            case 'cat resume':
                $("#terminal_operations").append("<p class='text-info'>Under development, will be updated soon!</p>");
                break;
            case 'cat skills':
                $("#terminal_operations").append("<p class='text-info'>PENTESTING | SYSTEM ADMINISTRATION | WEB DEVELOPMENT</p>");
                break;
            case 'cat projects':
                $("#terminal_operations").append("<p class='text-info'>Under development, will be updated soon!</p>");
                break;
            default:
                $("#terminal_operations").append("<p class='text-warning'>You do not have permission: " + command + "</p>");
        }
    }
});

$('#terminal').click(function () {
    $('#input_command').focus();
});