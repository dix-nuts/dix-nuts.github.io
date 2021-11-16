function myFunction() {
  let text;
  let person = prompt("Please enter the password:", "");
  if (person == null || person == "") {
    text = "Too scared to guess the password?";
  } else if (person == "ducks are tasty") {
  window.location = 'https://dix-nuts.github.io/information.html';
   text = "Duck Ha is tastiest";
  } else {
    text = "Get rekt lmao.";
  }
  document.getElementById("demo").innerHTML = text;
}
