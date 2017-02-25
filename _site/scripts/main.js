// has jqurey as a dependcy

$(document).ready(function(){
  $('.gallery-pic').mouseenter(function(e) {
    var background = $(this).attr("data-pic");
$(".gallery-target").css("background-image","url("+ background +")");
  });
});
  
