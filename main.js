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

let fName = document.getElementById("first-name").value;
let lName = document.getElementById("last-name").value;
let email = document.getElementById("email").value;

let emailVerify = email.slice(-4);
let emailDomain = email.includes("@");

function redInvalid(clickedInput) {
  let redLabel = clickedInput + "-label";

  let inputArea = document.getElementById(clickedInput).value;

  if (inputArea == "") {
    document.getElementById(redLabel).style.color = "red";
  } else {
    document.getElementById(clickedInput + "-label").style.color = "white";
  }
}

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

function onSubmit() {

  let fNameSub = document.getElementById("first-name").value;
  let lNameSub = document.getElementById("last-name").value;
  let emailSub = document.getElementById("email").value;
  let emailVerifySub = emailSub.slice(-4);
  let emailDomainSub = emailSub.includes("@");

  if (fNameSub == "" && lNameSub == "" && emailSub == "") {
    alert("We need your first and last names and a valid email, please!");
    console.log(fNameSub, lNameSub, emailSub);


    style.innerHtml = `
    .form-labels {
      color: red;
    }
    `;

    // document.getElementById("first-name-label").style.color = "red";
    // document.getElementById("last-name-label").style.color = "red";
    // document.getElementById("email-label").style.color = "red";

  } else if (fNameSub == "" || lNameSub == "") {
    alert("We need your full name, please!");
    // document.getElementById("first-name-label").style.color = "red";
    // document.getElementById("last-name-label").style.color = "red";
  } else if (fNameSub == "" && lNameSub == "") {
    alert("We need your first and last names, please!");
    // document.getElementById("first-name-label").style.color = "red";
    // document.getElementById("last-name-label").style.color = "red";
  } else if (emailSub == "") {
    alert("We need an email address to correspond!");
    // document.getElementById("email-label").style.color = "red";
  } else if (emailVerifySub !== ".com") {
    alert("Your e-mail address must end in .com!");
    // document.getElementById("email-label").style.color = "red";
  } else if (emailDomainSub == false) {
    alert("Your e-mail address needs a domain name preceded by the @ symbol!");
    // document.getElementById("email-label").style.color = "red";
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
  }

  const inputs = document.querySelectorAll(
    "#first-name, #last-name, #email, #contact-message"
  );
  inputs.forEach((input) => {
    input.value = "";
  });

  // Setting up this object to record multiple contact form submissions(?)
  //
  // let contactPerson = {
  //   firstName: fNameSub,
  //   lastName: lNameSub,
  //   emailContact: emailSub,
  // };

  // Debugging value returns
  //
  // console.log(contactPerson.firstName);
  // console.log(contactPerson.lastName);
  // console.log(contactPerson.emailContact);
  // console.log(contactPerson.value);
}

function hamburgerNav() {
  var x = document.getElementById("header-nav");
  var y = document.getElementById("nav-icon");

  if (x.style.display === "block") {
    x.style.display = "none";
    // y.style.alignSelf = "center";
  } else {
    x.style.display = "block";
    // y.style.alignSelf = "flex-start";
    x.style.order = "1";
  }
}

function goHome() {
  gallerySelector.style.display = "flex";
  aboutSelector.style.display = "flex";
  thumbnailSelector.style.display = "flex";
  prodSelector.style.display = "block";
  testimonySelector.style.display = "block";
  contactSelector.style.display = "flex";
  heroSelector.style.display = "block";
  // console.log("Only `home` is showing");
}

function goAbout() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  prodSelector.style.display = "none";
  testimonySelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
  // console.log("Only `about` is showing");
}

function goGallery() {
  goHome();
  aboutSelector.style.display = "none";
  prodSelector.style.display = "none";
  testimonySelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
  // console.log("Only `gallery` is showing");
}

function goProducts() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  aboutSelector.style.display = "none";
  testimonySelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
  // console.log("Only `product` is showing");
}
function goTestimonials() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  prodSelector.style.display = "none";
  aboutSelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
  // console.log("Only `testimonials` is showing");
}

function goContact() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  prodSelector.style.display = "none";
  testimonySelector.style.display = "none";
  aboutSelector.style.display = "none";
  heroSelector.style.display = "none";
  // console.log("Only `contact` is showing");
}
