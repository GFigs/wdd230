const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
input.setAttribute("placeholder", "Enter the chapter");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }
});

const displayList = (item) => {
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");
  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
};

const setChapterList = () => {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
};

const getChapterList = () => {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
};

const deleteChapter = (chapter) => {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
};
