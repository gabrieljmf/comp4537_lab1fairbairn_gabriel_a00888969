function updateReadTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();

  document.getElementById("timeStamp").innerHTML = currentDateTime;

  localStorage.setItem("readTime", currentDateTime);
  console.log(localStorage.getItem("readTime"));

  updateReader();
}

function updateReader() {
  var allPosts = document.getElementById("allPosts");
  allPosts.innerHTML = "";

  var notesString = localStorage.getItem("notes");
  var arrayNotes = JSON.parse(notesString);
  console.log(arrayNotes);

  for (i = 0; i < arrayNotes.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = arrayNotes[i];
    allPosts.appendChild(newDiv);
  }
}

setInterval(updateReadTime, 2000);
