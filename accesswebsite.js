function openWin() {
  myWindow = window.open("rickroll.html", "_self");
  setTimeout(myWindow.close(), 3000);
}

function myFunction() {
  let text;
  let person = prompt("Please enter the password:", "");
  if (person == null || person == "") {
    text = "Too scared to guess the password?";
  } else if (person == "ducks are tasty") {
  window.location = 'https://dix-nuts.github.io/information.html';
   text = "True tbh";
  } else {
    text = "Get rekt lmao.";
    openWin();
  }
  document.getElementById("demo").innerHTML = text;
}
