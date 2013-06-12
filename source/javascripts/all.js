//= require jquery.min
//= require type
//= require search
$(document).ready(function() {  
  $("select").each(function(){  
      $(this).wrap('<div class="selectbox"/>');  
      $(this).after("<span class='selecttext'></span><span class='select-arrow'></span>");  
  });
  
  $("select").each(function(){  
      var val = $(this).children("option:selected").text();  
      $(this).next(".selecttext").text(val);  
      $(this).change(function(){  
          var val = $(this).children("option:selected").text();  
          $(this).next(".selecttext").text(val);  
      }); 
  });
  
  $('#modal .close').click(function() {
    $('#modal').fadeOut()
  });
  
  $('.use-examples li').hover(function() {
    $('.popup').remove();
    var isProtected = $(this).attr('data-protected');
    var text = $(this).attr('data-text');
    
    $(this).parents('.use-examples').find('.info p').html(text);
    
    //$(this).append('<div class="popup ' + isProtected + '"><div class="icon"> </div><p>' + text + '</p></div>');
  }, function() {
    $('.popup').remove();
  });
})