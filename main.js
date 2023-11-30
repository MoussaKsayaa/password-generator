let password = document.querySelector(".password .theWord");
let generate = document.querySelector(".generate");
let length = document.querySelector(".length");

let charList =
  "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*";
function generatePass() {
  let wordCount = length.value;
  if (wordCount > 15) {
    password.innerHTML = "Only From 4-15";
  } else if (wordCount < 4) {
    password.innerHTML = "Only From 4-15";
  } else {
    let newPassword = [];
    for (let i = 0; i < wordCount; i++) {
      newPassword.push(charList[Math.floor(Math.random() * charList.length)]);
    }
    password.innerHTML = newPassword.join("");
    navigator.clipboard.writeText(password.innerText);
  }
}

generate.onclick = generatePass;
