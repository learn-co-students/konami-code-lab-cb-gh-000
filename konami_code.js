const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  document.body.addEventListener('keydown', e => {
    const key = parseInt(e.which || e.detail)

    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert("You did it!")

        index = 0
      }
    } else {
      index = 0
    }
  })
}
