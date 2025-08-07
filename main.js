// Dom From Learn With Project And Details
// const form = document.getElementById("myForm");

// for (let i = 0; i < form.elements.length; i++) {
//   const input = form.elements[i];
//   console.log(input.name, "=", input.value);
// }
let id = null;
const box = document.getElementById("myBox");
let pos = 0;

function moveBox() {
  if (id) {
    clearInterval(id);
  }

  pos = 0;
  id = setInterval(frame, 5);
}

function frame() {
  if (pos === 350) {
    clearInterval(id);
  } else {
    pos++;
    box.style.left = pos + "px";
  }
}

// Show Result With Keyboard Event
document.getElementById("inpuText").addEventListener("keyup", (event) => {
  document.getElementById("result").innerHTML = event.target.value;
});
