// Carousel variables
let myIndex = 0;
let x = document.getElementsByClassName("image-loop");

//Variables for hiding/showing pages
let aboutSelector = document.getElementById("hero-story");
let gallerySelector = document.getElementById("image-gallery");
let thumbnailSelector = document.getElementById("image-bank");
let prodSelector = document.getElementById("products");
let testimonySelector = document.getElementById("testimonials");
let contactSelector = document.getElementById("contact-form");
let heroSelector = document.getElementById("hero-image");

//Variables for form validation
let fName = document.getElementById("first-name").value;
let lName = document.getElementById("last-name").value;
let email = document.getElementById("email").value;
let emailVerify = email.slice(-4);
let emailDomain = email.includes("@");

// This function created a photo carousel
function carousel() {
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 10000);
}

carousel();

// This function checks input for content and sets text color appropriately
function redInvalid(clickedInput) {
  let redLabel = clickedInput + "-label";

  let inputArea = document.getElementById(clickedInput).value;

  if (inputArea == "") {
    document.getElementById(redLabel).style.color = "red";
  } else {
    document.getElementById(clickedInput + "-label").style.color = "white";
  }
}

// This function checks email for content and sets text color appropriately
function emailValidate(emailEntered) {
  let emailVal = emailEntered.slice(-4);
  const emailDom = emailEntered.includes("@");

  if (emailEntered == "") {
    document.getElementById("email-label").style.color = "red";
  } else if (emailVal !== ".com") {
    document.getElementById("email-label").style.color = "red";
  } else if (emailDom == false) {
    document.getElementById("email-label").style.color = "red";
  } else {
    document.getElementById("email-label").style.color = "white";
  }
}

// This function executes on clicking 'Submit' on the form, validates that there is content,
// then alerts the user by greeting them by their first name and letting them know an email will
// be sent to the entered email address.
function onSubmit() {
  let fNameSub = document.getElementById("first-name").value;
  let lNameSub = document.getElementById("last-name").value;
  let emailSub = document.getElementById("email").value;
  let emailVerifySub = emailSub.slice(-4);
  let emailDomainSub = emailSub.includes("@");
  const inputs = document.querySelectorAll(
    "#first-name, #last-name, #email, #contact-message"
  );

  if (fNameSub == "" && lNameSub == "" && emailSub == "") {
    alert("We need your first and last names and a valid email, please!");
    console.log(fNameSub, lNameSub, emailSub);
  } else if (fNameSub == "" || lNameSub == "") {
    alert("We need your full name, please!");
  } else if (fNameSub == "" && lNameSub == "") {
    alert("We need your first and last names, please!");
  } else if (emailSub == "") {
    alert("We need an email address to correspond!");
  } else if (emailVerifySub !== ".com") {
    alert("Your e-mail address must end in .com!");
  } else if (emailDomainSub == false) {
    alert("Your e-mail address needs a domain name preceded by the @ symbol!");
  } else {
    document.getElementById("first-name-label").style.color = "white";
    document.getElementById("last-name-label").style.color = "white";
    document.getElementById("email-label").style.color = "white";
    alert(
      "Wow, thanks for your interest, " +
        fNameSub +
        "!  We will be reaching out to you in the next 48 hours.  Please keep a weathered eye on " +
        emailSub +
        " for more information!"
    );

    inputs.forEach((input) => {
      input.value = "";
    });
  }
}

// This function sets the hamburger menu to display or hide the nav links
function hamburgerNav() {
  var x = document.getElementById("header-nav");
  var y = document.getElementById("nav-icon");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.order = "1";
  }
}

// The functions hereafter are used to move between the 'pages'
function goHome() {
  gallerySelector.style.display = "flex";
  aboutSelector.style.display = "flex";
  thumbnailSelector.style.display = "flex";
  prodSelector.style.display = "block";
  testimonySelector.style.display = "block";
  contactSelector.style.display = "flex";
  heroSelector.style.display = "block";
}

function goAbout() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  prodSelector.style.display = "none";
  testimonySelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
}

function goGallery() {
  goHome();
  aboutSelector.style.display = "none";
  prodSelector.style.display = "none";
  testimonySelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
}

function goProducts() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  aboutSelector.style.display = "none";
  testimonySelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
}

function goTestimonials() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  prodSelector.style.display = "none";
  aboutSelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
}

function goContact() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  prodSelector.style.display = "none";
  testimonySelector.style.display = "none";
  aboutSelector.style.display = "none";
  heroSelector.style.display = "none";
}
