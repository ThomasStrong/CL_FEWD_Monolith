// alert('Hello World!')
// Woohoo made my first line of script

let myIndex = 0;
let x = document.getElementsByClassName("image-loop");

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
