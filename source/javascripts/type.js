var audio = new Audio("/audio/typing.wav");

$(function() {
  var lines = [
    $('.type-1').html(),
    $('.type-2').html(),
    $('.type-3').html(),
    "I might search your friends next. You should warn them."
  ]
  
  $('.type-1').html('');
  $('.type-2').html('');
  $('.type-3').html('');
  
  audio.addEventListener('canplaythrough', function() {
    $('.type-1').typeOut(lines[0]).then(function() {
      return $('.type-2').typeOut(lines[1]);
    }).then(function() {
      return $('.type-3').typeOut(lines[2]);
    }).then(function() {
      audio.pause();
      $('.disclaimer').fadeIn(1000);
      return $('#search-media').fadeIn(1000);
    }).then(function() {
      setTimeout(function() {
        $('.type-6').hide();
        $('.type-6').html(lines[3]);
        $('.type-6').fadeIn(1000);
        $('.social-buttons').fadeIn(1000);
      }, 300);
    });
    
  });
});

$.fn.typeOut = function(text, callback) {
  var self = this;
  var delay = 45;

  // Our promise so we can return when we're complete
  var df = $.Deferred();
  
  audio.play();

  // loop through each char and print them out one at a time using delay.
  $.each(text.split(''), function(i, char) {
    setTimeout(function() {
      self.html(self.html() + char);
    }, delay * i);
  });

  setTimeout(function() {
    df.resolve();
  }, (text.length + 10) * delay);

  return df;
}
