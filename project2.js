function myFunction(x) {
  x.classList.toggle("change");
}

let state = 0;
const button = document.querySelector(".navButton");
const list = document.querySelector(".dabba");
button.addEventListener("click", function () {
  // if (state == 0) {
  //   list.classList.remove("hide");
  //   state = !state;
  //   console.log(state);
  // } else if (state == 1) {
  //   list.classList.add("hide");
  //   state = !state;
  //   console.log(state);
  // }
  list.classList.toggle("hide");
});
