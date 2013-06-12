$(function() {
  $('.switch a').on('click', function(e) {
    
    e.preventDefault();

    var current = $('#search-media .current span');
    var next = $(this).find('span');

    var oldText = current.html();
    current.html(next.html());
    
    var vendor = $(this).attr('data-vendor');
    
    $(this).attr('data-vendor', oldText.toLowerCase());
    next.html(oldText);
    
    $('#search-media .content').hide();
    $('#search-media #content-' + vendor).show();
  });
});
