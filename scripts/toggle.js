const navigation = document.getElementById("navigation");
const hambutton = document.getElementById("menu");
const mapcontainer = document.getElementById("mapcontainer");

hambutton.addEventListener("click", () => {
  hambutton.classList.toggle("show");
  navigation.classList.toggle("show");
  mapcontainer.classList.toggle("show");
});
