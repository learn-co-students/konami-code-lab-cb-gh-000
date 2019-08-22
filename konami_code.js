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

function init() {
  var index = 0;
  document.body.addEventListener("keydown", function logkey(e) {
    if (e.key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("bro")
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
