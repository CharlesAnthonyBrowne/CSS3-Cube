(function mainJS() {
  var btn = document.getElementsByClassName('btn_img');
  var container = document.getElementById('design-wrapper');

  btn[0].addEventListener('click', function() {
    console.log(container);
    container.className += 'split_anim';
  });
})();
