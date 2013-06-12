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
    
    if(vendor == 'facebook') {
      $('#search-media .content a').each(function() {
        $(this).attr('href', 'https://www.facebook.com/messages/search?action=recent-messages&query=' + $(this).attr('data-query'));
      });
    } else if(vendor == 'hotmail') {
      $('#search-media .content a').each(function() {
        $(this).attr('href', 'http://blu167.mail.live.com/default.aspx?st=' + $(this).attr('data-query'));
      });
    } else {
      $('#search-media .content a').each(function() {
        $(this).attr('href', $(this).attr('data-gmail'));
      });
    }
  });
});
