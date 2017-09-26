const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;
  function init() {
  // Write your JavaScript code inside the init() function

  document.addEventListener('keydown', function(e){
    if(parseInt(e.which,10) == code[index]|| parseInt(e.detail,10) == code[index]){
      index++
      if(code.length == index);
        alert('CONGRATS!');
    }else{
      index = 0;
    }
  });
}
