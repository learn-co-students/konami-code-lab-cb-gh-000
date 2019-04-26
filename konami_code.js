const codes = [
  38,
  38,
  40,
  40,
  37,
  39,
  37,
  39,
  66,
  65
];

var counter = 0;
function init() {
  var body = document.getElementsByTagName('body')[0];
  body.addEventListener('keydown', (e)=>{

      if(e.which === codes[counter])
      {
        counter++;
        if(counter == codes.length)
        {
          alert("Hurray!")
          counter = 0;
        }
      }
      else {
        counter = 0;
      }


  })
}
