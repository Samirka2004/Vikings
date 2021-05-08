$(function(){

   $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active');
      $('.menu__bth').toggleClass('menu__bth--active');
   });



   $('.heroes__slider-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.heroes__slider-text',
      prevArrow:'<button class="slick-btn slick-prev" type="button"><img src="images/left.png" alt="prev"></button>',
      nextArrow:'<button class="slick-btn slick-next" type="button"><img src="images/right.png" alt="next"></button>',
      responsive: [
         {
            breakpoint:769,
            settings: {
               arrows:false,
               dots:true,
            }
         }
      ]
   });
   $('.heroes__slider-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.heroes__slider-img',
      fade: true,
      arrows:false,
   });
   $('[data-fancybox]').fancybox({
      toolbar  : false,
      smallBtn : true,
      iframe : {
         preload : false
      }
   })
});