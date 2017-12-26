const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  document.addEventListener('keydown', onKeyDownHandler);
}

var idx = 0;

function onKeyDownHandler(e) {
  const key = parseInt(e.which || e.detail);

  if (key === code[idx]){
    idx++;

     if (idx === code.length) {
       alert("Hurray!");

       idx = 0;
     }
  } else {
    idx = 0;
  }
}
