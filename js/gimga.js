
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


//메인슬라이더
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }




      });



//layer2 text_box 오버효과
$('.text_box').hide();


    $('.layer2 li').hover(
      function(){
      $(this).children('.text_box').stop().fadeIn(300)} ,
      function(){
        $(this).children('.text_box').stop().fadeOut(100)
      });

//layer3 inner fadeIn효과

  AOS.init();



// layer4 슬라이드
      $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
        });


//수상내역 flow banner
  $("#scroller").simplyScroll();







});
