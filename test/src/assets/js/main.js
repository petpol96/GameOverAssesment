$(document).ready(function() {

  setTimeout(function() {
    $('body').addClass('loaded');
    /*  $('body').css("background-color", "red");*/
  }, 3000);
  setTimeout(function() {
    $('#loader-wrapper').remove();
    $('#feedback').css("opacity", "1");
    /*  $('body').css("background-color", "red");*/
  }, 3000);

  setTimeout(function() {

    $('#feedback').css("opacity", "1");
    /*  $('body').css("background-color", "red");*/
  }, 3000);

});
