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

function konamicode(e) {
    if (e.which === code[index]) {
        index++;

        if (index === code.length){
            alert('You did it!!');
            index = 0;
        }
    } else {
        index = 0;
    }
}

function init() {
  document.body.addEventListener('keydown', konamicode)
}
