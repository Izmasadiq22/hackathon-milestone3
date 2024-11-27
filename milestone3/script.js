var form = document.getElementById("resume-form");
var displayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n<h2><b> Resume</b></h2>\n<h3> Personsl Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>email:</b>").concat(email, "</p>\n<p><b>phone:</b>").concat(phone, "</p>\n\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n\n");
    if (displayElement) {
        displayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
