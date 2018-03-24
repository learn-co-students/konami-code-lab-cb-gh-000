// Up, Up, Down, Down, Left, Right, Left, Right, B, A
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let keySequence = [];

function init() {
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    updateKeySequence(key, checkCode);
  });
}

function updateKeySequence(key, checkCode) {
  keySequence.push(key);
  checkCode();
}

function checkCode() {
  for (let i = 0; i < keySequence.length; i++) {
    if (keySequence[i] === code[i]) {
      if (keySequence.length === code.length) {
        alert('Konami!');
      }
    } else {
      keySequence = [];
    }
  }
}

init();
