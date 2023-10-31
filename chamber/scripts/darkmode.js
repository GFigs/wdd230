const modebutton = document.getElementById("mode");
const content = document.getElementById("content");

modebutton.addEventListener("click", () => {
  content.classList.toggle("dark");
});
