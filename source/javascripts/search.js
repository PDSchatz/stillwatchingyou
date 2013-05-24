$(function() {
  $('.switch a').on('click', function(e) {
    e.preventDefault();

    var current = $('#search-media .current span');
    var next = $(this).find('span');

    var oldText = current.html();
    current.html(next.html());
    next.html(oldText);

    // @todo change link attr's when we get them
  });
});
