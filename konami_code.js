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
index= 0;
function konamicFunc(e) {
  const key = e.key;
  if (key == codes[index]) {
    index++;
    if (index == codes.length) {
      alert('Congratulations!');
    }
  }
  else {
    index = 0;
  }
}

function init() {
  // your code here
  const body = document.querySelector('body');
  body.addEventListener('keydown', konamicFunc)
}
