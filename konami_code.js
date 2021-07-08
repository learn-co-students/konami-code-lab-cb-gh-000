const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

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
