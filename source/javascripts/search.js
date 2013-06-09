$(function() {
  $('.switch a').on('click', function(e) {
    e.preventDefault();
    
    var links = {
      'google': {
        'drugs': 'https://mail.google.com/mail/u/0/?ui=2&shva=1#search/in%3Aanywhere+%22smoke+pot%22+OR+%22smoked+pot%22+OR+%22smoke+herb%22+OR+%22smoked+herb%22+OR+%22bong%22+OR+%22get+weed%22+OR+%22buy+weed%22+OR+%22smoke+a+blunt%22+OR+%22smoked+a+blunt%22+OR+%22shrooms%22+OR+%22MDMA%22+OR+%22smoke+a+joint%22+OR+%22smoked+a+joint%22+OR+%22did+acid%22+OR+%22tried+weed%22+OR+%22ganja%22+OR+%22got+so+high%22+OR+%22get+blazed%22+OR+%22got+blazed%22+OR+%22did+acid%22+OR+%22try+mushrooms%22+OR+%22sell+weed%22+OR+%22MDMA%22+OR+%22smoked+opium%22+OR+%22dropped+acid%22',
      
      },
    
      'hotmail': {
      
      }
    }

    var current = $('#search-media .current span');
    var next = $(this).find('span');

    var oldText = current.html();
    current.html(next.html());
    next.parents('a').attr('data-vendor', current.html());
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
