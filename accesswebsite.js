function openWin() {
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  setTimeout(myWindow.close(), 3000);
}

function myFunction() {
  let text;
  let person = prompt("Please enter the password:", "");
  if (person == null || person == "") {
    text = "Too scared to guess the password?";
  } else if (person == "iris is so hot and tall and smart") {
  window.location = 'https://eyeris-who.github.io/information.html';
   text = "I know I am :)";
  } else {
    text = "Get rekt lmao.";
    openWin();
  }
  document.getElementById("demo").innerHTML = text;
}
