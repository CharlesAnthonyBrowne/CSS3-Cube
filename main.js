(function mainJS() {
  var btn = document.getElementsByClassName('btn_img');

  var container = document.getElementById('design-wrapper');
  var top = document.getElementsByClassName('content');
  var bottom = document.getElementsByClassName('bottom');

  btn[0].addEventListener('click', function() {
    top[0].className += ' split_anim';
    container.className += 'top_anim';
    bottom[0].className += ' bottom_anim';
  });
})();
