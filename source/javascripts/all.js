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
  })
})