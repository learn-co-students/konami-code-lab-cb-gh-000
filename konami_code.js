const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  let i = 0;
    document.body.addEventListener('keydown', function(event){

    let key = parseInt(event.detail || event.which);

    if(key === code[i]) {
      i++;
      if(i === code.length) {
        alert("You only went and did it. You are the king of the konami code!");
        i = 0;
      }
    } else {
      i = 0;
    }
  })
}
