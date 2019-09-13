
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


//story slide
// dot
  var wid = $('.slide').width();
      $dotli  = $('.dot > li')
      var $panel = $('.panel');
      now_num = $('.dot > li.on').index();
      slide_length = $('.dot > li').length;

      $dotli.click(function() {
            now_num = $(this).index();
            slideMove();

          });
    function slideMove() {
       $panel.stop().animate({
         'margin-left': -wid * now_num
       });
       $dotli.removeClass('on');
       $dotli.eq(now_num).addClass('on');
     };

     $dotli.eq(0).click(function(){
       $('#story .panel li:eq(0)').animate({opacity:1});
       $('#story .panel li:eq(1)').animate({opacity:0});
       $('#story .panel li:eq(2)').animate({opacity:0});
     });


     $dotli.eq(1).click(function(){
       $('#story .panel li:eq(0)').animate({opacity:0});
       $('#story .panel li:eq(1)').animate({opacity:1});
       $('#story .panel li:eq(2)').animate({opacity:0});
     });

     $dotli.eq(2).click(function(){
       $('#story .panel li:eq(1)').animate({opacity:0});
       $('#story .panel li:eq(2)').animate({opacity:1});
     });



//store_slide
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:true,
  prevArrow: $('.left'),
  nextArrow: $('.right')
});

$('.left').click(function(){
  $('.slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.slider').slick('slickNext');
})


//숫자 카운팅
function numberCounter(target_frame, target_number) {
        this.count = 0; this.diff = 0;
        this.target_count = parseInt(target_number);
        this.target_frame = document.getElementById(target_frame);
        this.timer = null;
        this.counter();
    };
    numberCounter.prototype.counter = function() {
        var self = this;
        this.diff = this.target_count - this.count;

        if(this.diff > 0) {
            self.count += Math.ceil(this.diff/5);
        }

        this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if(this.count < this.target_count) {
            this.timer = setTimeout(function() { self.counter(); },30);
        } else {
            clearTimeout(this.timer);
        }
    };

    new numberCounter("counter1", 500);
    new numberCounter("counter2", 731737568);

//수상내역 flow banner
  $("#scroller").simplyScroll();







});
