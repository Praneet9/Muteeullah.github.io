// custom js
$('#input_command').focus();


function project_details(project_header, project_text, link) {
    let terminal_div = document.getElementById('terminal_operations');
    var new_para = document.createElement("p");
    var project_link = document.createElement("a");
    var project_title = document.createElement("h6");
    var project_desc = document.createElement("p");
    var project_desc_text = document.createTextNode(project_text);
    var project_title_text = document.createTextNode(project_header);
    project_link.setAttribute("class", "link");
    project_link.setAttribute("href", link);
    project_desc.appendChild(project_desc_text);
    project_title.appendChild(project_title_text);
    project_link.appendChild(project_title);
    new_para.appendChild(project_link);
    new_para.appendChild(project_desc);
    terminal_div.appendChild(new_para);
}

$('#input_command').keypress(function (e) {
    // Enter pressed?
    if (e.which == 10 || e.which == 13) {
        var command = $('#input_command').val();
        $('#input_command').val("");
        $("#terminal_operations").append("<p><span class='zsh'>->  </span> " + command + "</p>");
        switch (command.trim()) {
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
                $("#terminal_operations").append("<p class='text-info'>I was one of the head of THE PROGRAMMERS CLUB, a community that helps other students to code. I was also a speaker at a workshop on Object Oriented Programming (JAVA) organized by the club and also a part of the Core & Technical committee that organized ERR_404 State Level Hackathon. Mostly we (me and my team) occasionally took part in Hackathons. </p>");
                break;
            case 'cat resume':
                document.getElementById("resume_link").click();
                break;
            case 'cat skills':
                $("#terminal_operations").append("<p class='text-info'>PENTESTING | SYSTEM ADMINISTRATION | WEB DEVELOPMENT</p>");
                break;
            case 'cat projects':
                var text = "A deep learning based system for disorder detection in tomato plants. Also using IoT to get sensor data from the plants."
                project_details("Plant Monitor", text, "https://github.com/Muteeullah/Plant_Monitor");
                text = "A service for people to report the potholes in their area. It is a telegram service bot wherein you can report the image and location of the pothole."
                project_details("Voices of Mumbai", text, "https://github.com/Muteeullah/Voices_of_Mumbai");
                text = "A service for extracting text from ID cards in India, like Aadhar Card, PAN Card and Driving Licence. You just need to click and send a picture of the card to the API and get a json with your details."
                project_details("Docify", text, "https://github.com/Muteeullah/Docify")
                break;
            case '':
                $("#terminal_operations").append("");
                break;
            default:
                $("#terminal_operations").append("<p class='text-danger'>You do not have permission: " + command + "</p>");
        }
        var elem = document.getElementById('terminal');
        elem.scrollTop = elem.scrollHeight;
    }
});

$('#terminal').click(function () {
    $('#input_command').focus();
});