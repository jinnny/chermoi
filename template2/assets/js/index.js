/*
 * Copyright (c) 2020
 * Created by yangeunjin
 * Github: https://github.com/jinnny
 */

$(document).ready(function() {
  $('.input-content .input-content__input').focus(function () {
    $(this).siblings('.input-content__label').addClass('is--active')
    $(this).parent('.input-content').addClass('is--active')
  }).blur(function() {
    if ($(this).val() === '') {
      $(this).siblings('.input-content__label').removeClass('is--active')
      $(this).parent('.input-content').removeClass('is--active')
    }
  });
  const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: {
      delay: 6000
    },
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      // slideChangeTransitionStart: function (what) {
      //   console.log(what)
      // }
    }
  })

  $(window).scroll(function(){
    let max = 1000; //100% 투명할때의 스크롤 값
    let scrollPX = $(this).scrollTop();
    console.log(scrollPX)
    if( scrollPX  < max ) {
      $("#bg").css({"opacity": (max-scrollPX)/max });
    }else{
      $("#bg").css({"opacity": 0});
    }
  });
});
