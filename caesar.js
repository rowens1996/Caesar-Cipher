//ASCII A=065 Z=090 & a=097 z=122
function encrypt() {
    let output = "";
    let string = document.getElementById("input").value;
    let number = parseInt(document.getElementById("codeinput").value);
    for (let i = 0; i < string.length; i++) {
      let character = string[i];
      let ascii = character.charCodeAt();
      if (ascii >= 65 && ascii <= 90) {
        ascii += number;
        while (ascii > 90) {
          ascii -= 26;
        }
      } else if (ascii >= 97 && ascii <= 122) {
        ascii += number;
        while (ascii > 122) {
          ascii -= 26;
        }
      }
      character = String.fromCharCode(ascii);
      output += character;
    }
    document.getElementById("output").innerHTML = output;
  }
function decrypt() {
  let string = document.getElementById("input").value;
  let number = parseInt(document.getElementById("codeinput").value);
  let output = "";
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    let ascii = character.charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      ascii -= number;
      while (ascii < 65) {
        ascii += 26;
      }
    } else if (ascii >= 97 && ascii <= 122) {
      ascii -= number;
      while (ascii < 97) {
        ascii += 26;
      }
    }
    character = String.fromCharCode(ascii);
    output += character;
  }
  document.getElementById("output").innerHTML = output;
}
