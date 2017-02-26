// has jqurey as a dependcy

$(document).ready(function(){

  $('.gallery-pic').click(function(e) {

    var background = $(this).attr("data-pic");

    $(this).prevAll(".gallery-target").css("background-image","url("+ background +")");

  });

});
