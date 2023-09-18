function removePost(x) {
  console.log("variable");
  console.log(x.toString());
  var removalPost = document.getElementById(x);
  removalPost.remove();
}

function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();

  document.getElementById("timeStamp").innerHTML = currentDateTime;
  console.log(currentDateTime);
}
var postIndex = 0;

function add() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "post" + postIndex);

  var newInput = document.createElement("input");
  newInput.setAttribute("placeholder", "Enter text here");
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

  console.log(newDiv);
  console.log(postIndex);
  postIndex++;
}

function test() {
  console.log("working");
}
// setInterval(updateDateTime, 2000);
