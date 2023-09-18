function updateReadTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();

  document.getElementById("timeStamp").innerHTML = currentDateTime;

  localStorage.setItem("readTime", currentDateTime);
  console.log(localStorage.getItem("readTime"));

  updateReader();
}

function updateReader() {
  let allPosts = document.getElementById("allPosts");
  allPosts.innerHTML = "";

  let notesString = localStorage.getItem("notes");
  let arrayNotes = JSON.parse(notesString);
  console.log(arrayNotes);

  for (i = 0; i < arrayNotes.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "readNote");
    newDiv.innerHTML = arrayNotes[i];
    allPosts.appendChild(newDiv);
  }
}

setInterval(updateReadTime, 2000);
