$(function() {
  $('.switch a').on('click', function(e) {
    e.preventDefault();

    var current = $('#search-media .current span');
    var next = $(this).find('span');

    var oldText = current.html();
    current.html(next.html());
    next.html(oldText);
    
    var vendor = $(this).attr('data-vendor');
    
    if(vendor == 'facebook') {
      $('#search-media .content a').each(function() {
        $(this).attr('href', 'https://www.facebook.com/messages/search?action=recent-messages&query=' + $(this).attr('data-query'));
      });
    } else {
      $('#search-media .content a').each(function() {
        var query = $(this).attr('data-query');
        
        //alert(links[vendor][query]);
      });
    }
  });
});
