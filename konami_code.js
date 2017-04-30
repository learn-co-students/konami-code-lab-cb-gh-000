const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;
function init() {
  // your code here
  document.body.addEventListener('keydown',(event) => {
    var keyPressed = parseInt(event.detail || event.which);
    if(keyPressed === code[index]) {
      index++;

      if(index === code.length-1)
        alert('Great. You entered the Konami code successfully!')
    }
    else {
      index = 0;
    }
  });
}
