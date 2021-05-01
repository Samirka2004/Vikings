$(function(){

   $('.heroes__slider-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.heroes__slider-text',
      prevArrow:'<button class="slick-btn slick-prev" type="button"><img src="images/left.png" alt="prev"></button>',
      nextArrow:'<button class="slick-btn slick-next" type="button"><img src="images/right.png" alt="next"></button>',
   });
   $('.heroes__slider-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.heroes__slider-img',
      fade: true,
      arrows:false,
   });

});