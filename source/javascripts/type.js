var audio = new Audio("/audio/typing.wav");

$(function() {
  var lines = [
    "I am watching you. I know where you are and what you'll be doing next.",
    "I can target you and make you look like a suspect if I wanted to.",
    "Want to see what I can do? Use the buttons below to look into your own email.",
    "We're searching your friends next. You should warn them."
  ]

  $('.type-1').typeOut(lines[0]).then(function() {
    return $('.type-2').typeOut(lines[1]);
  }).then(function() {
    return $('.type-3').typeOut(lines[2]);
  }).then(function() {
    audio.pause();
    $('.disclaimer').fadeIn(1000);
    return $('#search-media').fadeIn(1000);
  }).then(function() {
    return $('.type-6').typeOut(lines[3]);
  }).then(function() {
    setTimeout(function() {
      $('.social-buttons').fadeIn(1000);
    }, 300);
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
