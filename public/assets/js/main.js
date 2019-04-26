var classname = document.getElementsByClassName("click-item");
var correct = document.getElementsByClassName('correct')

function _removeClasses () {
    console.log("Removed");
    while (correct[0]) {
      correct[0].classList.remove('correct')
    }
  }

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', _removeClasses, false);
}


