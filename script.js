// Selecting the side navigation bar
var sideNavBar = document.querySelector(".side-nav-bar");

// Function to close the side navigation bar
function closeNavBar() {
    sideNavBar.style.left = "-60%";
}

// Function to open the side navigation bar
function openNavBar() {
    sideNavBar.style.left = "0";
}

// Function to send an email using emailjs
function sendmail() {
    // Get form values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email_id").value;
    var message = document.getElementById("message").value;
 
    // Check if all fields are filled
    if (fullName === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return false;
    }
 
    // Prepare the parameters for emailjs
    var parms = {
        from_name: fullName,
        email_id: email,
        message: message,
    };
 
    emailjs.send("service_utanm2b", "template_g6yxj3a", parms)
        .then(function(res) {
            alert("Success! ✅ Email sent with status: " + res.status);
        }, function(error) {
            alert("Failed to send email. Please try again later.");
        });
 }
 
 