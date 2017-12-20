const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
index = 0;

function init() {
  // Write your JavaScript code inside the init() function
 document.body.addEventListener('keydown',function (e) {
   const key = parseInt(e.detail || e.which);

   if (key === code[index]) {
     index++;
     alert("congatulation!");
     if (index === alphabet.length) {
       alert("congatulation!");
       index = 0;
     }
   }
   else
     index = 0;
 })
}
