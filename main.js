(function theMan(){
  var btn = document.getElementById('toggle_btn');
  var inner = document.getElementsByClassName('inner');

  btn.addEventListener('click', function(){
    inner[0].style.transform = "rotateY(40deg)";
    console.log(inner[0]);
  });
})();
