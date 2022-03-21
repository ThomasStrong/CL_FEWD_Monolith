// alert('Hello World!')
// Woohoo made my first line of script

let myIndex = 0;
let x = document.getElementsByClassName("image-loop");

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
  alert("Oi!  That feature is coming soon.  Stay tuned!");
}

function goHome() {
  gallerySelector.style.display = "flex";
  aboutSelector.style.display = "flex";
  thumbnailSelector.style.display = "flex";
  prodSelector.style.display = "block";
  testimonySelector.style.display = "block";
  contactSelector.style.display = "flex";
  heroSelector.style.display = "block";
  console.log("Only `about` is showing");
}

function goAbout() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  prodSelector.style.display = "none";
  testimonySelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
  console.log("Only `about` is showing");
}

function goGallery() {
  goHome();
  aboutSelector.style.display = "none";
  prodSelector.style.display = "none";
  testimonySelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
  console.log("Only `gallery` is showing");
}

function goProducts() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  aboutSelector.style.display = "none";
  testimonySelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
  console.log("Only `product` is showing");
}
function goTestimonials() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  prodSelector.style.display = "none";
  aboutSelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
  console.log("Only `testimonials` is showing");
}

function goContact() {
  goHome();
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  prodSelector.style.display = "none";
  testimonySelector.style.display = "none";
  aboutSelector.style.display = "none";
  heroSelector.style.display = "none";
  console.log("Only `contact` is showing");
}
