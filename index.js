console.log("hello world");

let count = 0;
let myCountElement = document.getElementById("counter");
function increase() {
  count += 1;
  console.log(count);
  myCountElement.innerText = count;
}
function decrease() {
  decrease -= 1;
  console.log(count);
  myCountElement.innerText = count;
}

function reset() {
  count = 0;
  console.log(count);
  myCountElement.innerText = count;
}

function selectTheme(theme) {
  document.getElementsByTagName("body")[0].className = theme;
  document.getElementsByTagName("main")[0].className = theme;
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i <= buttons.lenght - 1; i++) {
    i;
    buttons[i].className = theme;
  }
}
