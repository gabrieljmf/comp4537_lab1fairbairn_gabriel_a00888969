let postIndex = 0;

if (localStorage.getItem("notes")) {
  startNotes();
}

function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();

  document.getElementById("timeStamp").innerHTML = currentDateTime;

  localStorage.setItem("time", currentDateTime);
  console.log(localStorage.getItem("time"));

  updateNotes();
}

function startNotes() {
  let notesString = localStorage.getItem("notes");
  let arrayNotes = JSON.parse(notesString);

  for (i = 0; i < arrayNotes.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "post" + postIndex);

    let newInput = document.createElement("input");
    newInput.setAttribute("placeholder", "Enter text here");
    newInput.setAttribute("id", "input");
    newInput.setAttribute("type", "text");
    newInput.value = arrayNotes[i];

    let newRemove = document.createElement("button");
    const removeText = document.createTextNode("Remove");
    newRemove.setAttribute("id", "remove");
    newRemove.setAttribute("onclick", "removePost('post" + postIndex + "')");
    newRemove.appendChild(removeText);

    newDiv.appendChild(newInput);
    newDiv.appendChild(newRemove);

    let postsDiv = document.getElementById("allPosts");
    postsDiv.appendChild(newDiv);
    postIndex++;
  }
}

function updateNotes() {
  const allPostInput = document
    .getElementById("allPosts")
    .getElementsByTagName("input");

  let postArray = [...allPostInput];

  let array;
  if (!localStorage.getItem("notes")) {
    console.log("Local storage notes are empty.");
    array = [];
  } else {
    array = postArray;
  }

  for (i = 0; i < postArray.length; i++) {
    array[i] = postArray[i].value;
  }

  localStorage.setItem("notes", JSON.stringify(array));
  console.log(localStorage.getItem("notes"));
}

function removePost(x) {
  let removalPost = document.getElementById(x);
  removalPost.remove();
  updateNotes();
  console.log("AFTER REMOVAL");
  console.log(localStorage.getItem("notes"));
}

function add() {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", "post" + postIndex);

  let newInput = document.createElement("input");
  newInput.setAttribute("placeholder", "Enter text here");
  newInput.setAttribute("id", "input");
  newInput.setAttribute("type", "text");

  let newRemove = document.createElement("button");
  const removeText = document.createTextNode("Remove");
  newRemove.setAttribute("id", "remove");
  newRemove.setAttribute("onclick", "removePost('post" + postIndex + "')");
  newRemove.appendChild(removeText);

  newDiv.appendChild(newInput);
  newDiv.appendChild(newRemove);

  let postsDiv = document.getElementById("allPosts");
  postsDiv.appendChild(newDiv);

  postIndex++;
}

setInterval(updateDateTime, 2000);
