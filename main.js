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
  setTimeout(carousel, 3000);
}

carousel();

function onSubmit() {
  alert("Oy!  That feature is coming soon.  Stay tuned!");
}

// function goHome() {
//   let mainSelector = document.getElementById("hiding");
//   mainSelector.style.display = "none";
//   console.log("Hiding is hidden");
// }

function goAbout() {
  gallerySelector.style.display = "none";
  thumbnailSelector.style.display = "none";
  prodSelector.style.display = "none";
  testimonySelector.style.display = "none";
  contactSelector.style.display = "none";
  heroSelector.style.display = "none";
  console.log("Only `about` is showing");
}
