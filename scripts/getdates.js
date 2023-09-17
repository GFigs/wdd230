const d = new Date();
const year = d.getFullYear();
document.getElementById("currentYear").textContent = year;

const lastModif = new Date(document.lastModified);
document.getElementById(
  "lastModified"
).textContent = `Last modified: ${lastModif}`;
