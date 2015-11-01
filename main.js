(function theMan(){
  var btn = document.getElementById('toggle_btn');
  var inner = document.getElementsByClassName('inner');

  btn.addEventListener('click', function(){
    inner[0].style.transform = "rotate(0)";
    console.log(inner[0]);
  });
})();
