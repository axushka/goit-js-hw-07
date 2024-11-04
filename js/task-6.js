const input = document.querySelector("input");
const control = document.querySelector("#control");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount= parseInt(input.value.trim(), 10);
  if(amount >=1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; 
    
  } else {
    alert("Please enter a number between 1 and 100");
  }
});
destroyBtn.addEventListener("click", (destroyBoxes) )
function createBoxes(amount) {
  destroyBoxes;
  const fragment = document.createDocumentFragment();
  let size = 30;
  for(let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

  }
}


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
