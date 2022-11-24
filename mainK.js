const badLetters = ["ch", "x", "le", "lia", "zd", "ib", "yb"];
emoji = "🙃"

const form = document.querySelector("form");
const input = document.querySelector("#textInput");
const output = form.addEventListener("submit", () => {
let inputValue = input.value;
badLetters.forEach (value => {
  if(inputValue.has (value)){
    inputValue.replace(value, "🙃")
  }else {
    return inputValue;
  }})

  const word = document.createElement("h1");
  word.textContent = inputValue;
} )