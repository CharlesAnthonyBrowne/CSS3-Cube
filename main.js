(function theMan(){
  var btn = document.getElementById('toggle_btn');
  var cube = document.getElementById('cube');

  btn.addEventListener('click', function(){
    if (cube.className = "animate") {
        cube.className = "";
      }
      else {
        cube.className = "animate";
      }
  });


})();
