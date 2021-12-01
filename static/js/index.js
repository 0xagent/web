function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

$(window).scroll(function () {

  // selectors
  var $window = $(window),
    $body = $('body'),
    $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 2);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      if ($(this).hasClass('services-section')) {
        $(".image-flip").each(function (index) {
          if (!$(this).hasClass('hover')) {
            $(this).toggleClass('hover')
          }
        })


      }

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();


$('.image-flip').click(function () {
  $(this).toggleClass('hover')

})
function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  var items = location.search.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  }
  return result;
}
window.onload = function () {
  if (findGetParameter("services") != null) {
    $('.form-received').toggleClass('show')
  }

}
