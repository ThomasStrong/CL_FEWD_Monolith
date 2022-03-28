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

  const emailVerify = email.slice(-4);

  // Debug line
  // console.log(emailVerify);

  const emailDomain = email.includes("@");

  // Debug line
  // console.log(typeof emailDomain);

  if (fName == "" && lName == "" && email == "") {
    alert("We need your first and last names and a valid email, please!");
    document.getElementById("first-name-label").style.color = "red";
    document.getElementById("last-name-label").style.color = "red";
    document.getElementById("email-label").style.color = "red";
  } else if (fName == "" && lName == "") {
    alert("We need your first and last names, please!");
    document.getElementById("first-name-label").style.color = "red";
    document.getElementById("last-name-label").style.color = "red";
  } else if (fName == "" || lName == "") {
    alert("We need your full name, please!");
    document.getElementById("first-name-label").style.color = "red";
    document.getElementById("last-name-label").style.color = "red";
  } else if (emailVerify !== ".com") {
    alert("Your e-mail address must end in .com!");
    document.getElementById("email-label").style.color = "red";
  } else if (emailDomain == false) {
    alert("Your e-mail address needs a domain name preceded by the @ symbol!");
    document.getElementById("email-label").style.color = "red";
  } else {
    alert(
      "Wow, thanks for your interest, " +
        fName +
        "!  We will be reaching out to you in the next 48 hours.  Please keep a weathered eye on " +
        email +
        " for more information!"
    );

    // Reset color to white.  Need to make this better, so check is completed while typing.

    document.getElementById("first-name-label").style.color = "white";
    document.getElementById("last-name-label").style.color = "white";
    document.getElementById("email-label").style.color = "white";
  }

  // Need a .toLowerCase() for validation of strings? and email?

  // This does not work because always returns 'string'
  // if (typeof fName === "string") {
  //   console.log(fName + "Got this one");
  // } else {
  //   console.log("no return");
  // }

  // Setting up this object to record multiple contact form submissions(?)
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
