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

let index = 0;

function konamiCodeHandler(event){
  var key = event.key;

  if(key === codes[index])
    ++index;
  else {
    index = 0;
  }

  if(index === codes.length){
    alert('Congrats');
    index = 0;
  }
}

function init() {
  // your code here
  document.body.addEventListener('keydown', konamiCodeHandler);
}
