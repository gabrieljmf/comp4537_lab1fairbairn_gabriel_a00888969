function post() {
  console.log("Script running");
}

function removePost() {
  console.log("Removed");
}

function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();

  document.getElementById("timeStamp").innerHTML = currentDateTime;
  console.log(currentDateTime);
}

function add() {
  console.log("function works");
  var newForm = document.createElement("form");
  newForm.setAttribute("id", "entry");
  console.log(newForm);

  var newInput = document.createElement("input");
  newInput.setAttribute("placeholder", "Enter text here");
  newInput.setAttribute("type", "text");

  var newRemove = document.createElement("button");
  const removeText = document.createTextNode("Remove");
  newRemove.setAttribute("id", "remove");
  newRemove.setAttribute("onclick", "removePost()");
  newRemove.appendChild(removeText);

  newForm.appendChild(newInput);
  newForm.appendChild(newRemove);
  const postsDiv = document.getElementById("posts");
  postsDiv.appendChild(newForm);
  var br = document.createElement("br");
  postsDiv.appendChild(br);
}

// setInterval(updateDateTime, 2000);
