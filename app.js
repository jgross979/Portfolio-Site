$(function(){
// ------- Screen Resizing -----------//
  $(function(){
    if($(window).width()>999){
      $('#container').css('width', $(window).width() - 185+'px');
    }
    $('#page-top').css('height', $(window).height())
  });
  $(window).resize(function(){
    if($(window).width()>999 && !$('nav').hasClass('open')){
      $('#container').css('width', $(window).width() - 185+'px');
    }else{
      $('#container').css('width', '100%');
    }
  })
// ------- Name Appear -----------//
  $('#heading').mouseover(function(){
    if($(this).find('h2').hasClass('hidden')){
      $(this).find('h2').toggleClass('hidden appear');
    }
  });

// ------- Open/Close Nav -----------//
  $('.nav-bars').click(function(e) {
    $('nav').toggleClass('open close')
    if($('nav').hasClass('open') && $(window).width()>999 || $(window).width() <= 400){
      $('#container').css('width', '100%');
    }else if($(window).width()>999){
      $('#container').css('width', $(window).width() - 185+'px');
    }
    e.stopPropagation();
    });
//-----Project card reveal -------//
  $('.bot_pic').click(function(){
    $(this).find('div').toggleClass('hidden')
    $(this).toggleClass('under pixel')
  })

  });
