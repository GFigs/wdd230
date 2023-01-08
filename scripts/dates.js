const d = new Date();
const year = d.getFullYear();
document.getElementById("currentyear").textContent = year;

const olastmodif = new Date(document.lastModified);
const modifmonth = olastmodif.getMonth();
const modifday = olastmodif.getDate();
const modifyear = olastmodif.getFullYear();
const modifhour = olastmodif.getHours();
const modifmin = olastmodif.getMinutes();
const modifmil = olastmodif.getMilliseconds();
const lastmoddate = `Last updated: ${modifmonth}/${modifday}/${modifyear} ${modifhour}:${modifmin}:${modifmil}`
document.getElementById("lastupdated").textContent = lastmoddate
