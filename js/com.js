$(function(){



//헤더스크롤 그림자
var header = $('#header');

 $(window).scroll(function(e){
      if(header.offset().top !== 0){
         if(!header.hasClass('shadow')){
             header.addClass('shadow');
         }
     }else{
         header.removeClass('shadow');
     }
 });


//네비게이션 gnb
  $(".sub").hide();
      $("#gnb > ul > li").hover(function() {
          $(this).children('.sub').fadeIn(100);
          $('#header').addClass('bgGnb');
      }, function() {
          $(this).children('.sub').stop().fadeOut(100);
          $('#header').removeClass('bgGnb');
      });




//수상내역 flow banner
  $("#scroller").simplyScroll();







});
