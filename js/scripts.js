$(document).ready(function() {

  $("#clickable-eastern").click(function(){
    $("#dragon").fadeIn(1500).delay(3000).fadeOut(1500);
  });
  // $("#clickable-eastern").click(function(){
  //   $("buddha").delay(6000).fadeIn(1500).delay(3000).fadeOut(1500);
  // });
  // $("#clickable-eastern").click(function(){
  //   $("fan").delay(12000).fadeIn(1500).delay(3000).fadeOut(1500);
  // });

  $("#clickable-groovy").click(function(){
    $("#groovy").slideDown().delay(5000).slideUp();
  });

});
