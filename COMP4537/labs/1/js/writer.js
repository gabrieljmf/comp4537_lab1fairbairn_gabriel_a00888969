function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();

  document.getElementById("timeStamp").innerHTML = currentDateTime;

  localStorage.setItem("time", currentDateTime);
  console.log(localStorage.getItem("time"));

  updateNotes();
}

function updateNotes() {
  const allPostInput = document
    .getElementById("allPosts")
    .getElementsByTagName("input");

  var postArray = [...allPostInput];
  var array = [];

  for (i = 0; i < postArray.length; i++) {
    array[i] = postArray[i].value;
  }

  localStorage.setItem("notes", JSON.stringify(array));
  console.log(localStorage.getItem("notes"));
}

function removePost(x) {
  var removalPost = document.getElementById(x);
  removalPost.remove();
  updateNotes();
}

var postIndex = 0;

function add() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "post" + postIndex);

  var newInput = document.createElement("input");
  newInput.setAttribute("placeholder", "Enter text here");
  newInput.setAttribute("id", "input");
  newInput.setAttribute("type", "text");

  var newRemove = document.createElement("button");
  const removeText = document.createTextNode("Remove");
  newRemove.setAttribute("id", "remove");
  newRemove.setAttribute("onclick", "removePost('post" + postIndex + "')");
  newRemove.appendChild(removeText);

  newDiv.appendChild(newInput);
  newDiv.appendChild(newRemove);

  var postsDiv = document.getElementById("allPosts");
  postsDiv.appendChild(newDiv);

  postIndex++;
}

setInterval(updateDateTime, 2000);
