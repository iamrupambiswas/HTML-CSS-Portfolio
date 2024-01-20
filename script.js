// All the JavaScript functions are defined here



//To make the three dots section and its options available and function
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.ellipsis-icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };



// To redirect to the calculator project page
function redirecttoCalculator() {
    window.location.href = "https://iamrupambiswas.github.io/Calculator/";
}

// To redirect to the flipkart clone project project page
function redirecttoFlipkart() {
    window.location.href = "https://iamrupambiswas.github.io/Flipkart-Clone-Project/";
}



//To send mail
function sendEmail() {
    var emailAddress = "rupambiswas912@gmail.com";
    var subject = document.getElementById("subject").textContent;
    var body = document.getElementById("message").textContent;

    // Construct the mailto link
    var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Open the user's default email client
    window.location.href = mailtoLink;
}


// To put the current year in the copyright
var currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;


  