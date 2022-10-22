// retrieve the html id of h2
const text = document.getElementById("text")
// retrieve the html input field (border)
const border = document.getElementById("argonaute_name")
// get the input field
const input = document.getElementById("input-field")

// add an eventListener click on the input
input.addEventListener('click', () => {
  text.classList.remove("creme");
  input.classList.remove("creme-border")
  input.classList.add("onyx-border");
})
// change the color of the text
