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

function onSubmit() {
  // alert("Oi!  That feature is coming soon.  Stay tuned!");

  let fName = document.getElementById("first-name").value;
  let lName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;

  const emailVerify =
    email.charAt(email.length - 4) +
    email.charAt(email.length - 3) +
    email.charAt(email.length - 2) +
    email.charAt(email.length - 1);

  // console.log(emailVerify);  Debug line

  const emailDomain = email.includes("@");

  // console.log(typeof emailDomain);  Debug Line

  if (fName == "" && lName == "" && email == "") {
    alert("We need your first and last names and a valid email, please!");
  } else if (fName == "" && lName == "") {
    alert("We need your first and last names, please!");
  } else if (fName == "" || lName == "") {
    alert("We need your full name, please!");
  } else if (emailVerify !== ".com") {
    alert("Your e-mail address must end in .com!");
  } else if (emailDomain == false) {
    alert("Your e-mail address needs a domain name preceded by the @ symbol!");
  } else {
    alert(
      "Wow, thanks for your interest, " +
        fName +
        "!  We will be reaching out to you in the next 48 hours.  Please keep a weathered eye on " +
        email +
        " for more information!"
    );
  }

  // Need a .toLowerCase() for validation of strings? and email?

  // then (fname == "" || lName == "") {
  //   alert("We need your full name, please!");
  // }
  // Setting up if statement for validation

  // This does not work because always returns 'string'
  // if (typeof fName === "string") {
  //   console.log(fName + "Got this one");
  // } else {
  //   console.log("no return");
  // }

  // Setting up this object to record multiple contact form submissions
  //
  // let contactPerson = {
  //   firstName: fName,
  //   lastName: lName,
  //   emailContact: email,
  // };

  // Debugging value returns
  //
  // console.log(contactPerson.firstName);
  // console.log(contactPerson.lastName);
  // console.log(contactPerson.emailContact);
  // console.log(contactPerson.value);

  // alert(
  //   "Wow, thanks for your interest, " +
  //     fName +
  //     "!  We will be reaching out to you in the next 48 hours.  Please keep a weathered eye on " +
  //     email +
  //     " for more information!"
  // );
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
