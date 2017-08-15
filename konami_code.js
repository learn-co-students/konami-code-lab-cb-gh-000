const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  const input = document.querySelector('body')
  input.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key == code[index]) {
      index ++;
      e.preventDefault()
      if (index === code.length - 1) {
        alert("boo");
        index = 0;
      }
    }else{
      index = 0;
    }
  })
}
