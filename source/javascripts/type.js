$(function() {
  var lines = [
    "There's something in your email.",
    "Something embarrassing. Or illegal.",
    "Something you thought you deleted.",
    "Thanks to outdated laws, the U.S. government can see it.",
    "Want to see what we see? Use the buttons below to search your own email.",
    "We're searching your friends next. You should warn them...",
  ]

  $('.type-1').typeOut(lines[0]).then(function() {
    return $('.type-2').typeOut(lines[1]);
  }).then(function() {
    return $('.type-3').typeOut(lines[2]);
  }).then(function() {
    return $('.type-4').typeOut(lines[3]);
  }).then(function() {
    return $('.type-5').typeOut(lines[4]);
  }).then(function() {
    return $('#search-media').fadeIn(1000);
  }).then(function() {
    setTimeout(function() {
      $('.disclaimer').fadeIn(1000, function() {
        $('.type-6').typeOut(lines[5]).then(function() {
          $('#pc .social-buttons').fadeIn(1000);
        });
      });
    }, 300);
  });
});

$.fn.typeOut = function(text, callback) {
  var self = this;
  var delay = 45;

  // Our promise so we can return when we're complete
  var df = $.Deferred();

  // loop through each char and print them out one at a time using delay.
  $.each(text.split(''), function(i, char) {
    setTimeout(function() {
      self.html(self.html() + char);
    }, delay * i);
  });

  setTimeout(function() {
    df.resolve();
  }, (text.length + 15) * delay);

  return df;
}
