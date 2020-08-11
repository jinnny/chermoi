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
  $('#fullpage').fullpage({
    parallax: true,
    menu: '.chermoi-menu',
    css3: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['HOME', 'OUR SERVICE', 'PORTFOLIO', 'CONTACT', 'INQUIRY'],
    showActiveTooltip: true,
    anchors:['home', 'ourService', 'portfolio', 'contact', 'inquiry'],
    afterLoad: function (anchorLink, index) {
      if (index === 1) {
        $('.chermoi-header').removeClass('is--active');
      }else {
        $('.chermoi-header').addClass('is--active');
      }
    },
    onLeave: function (index, nextIndex, direction) {
      $('.main__text.animation, .service .animation, .service-content__content, .portfolio-section .animation, .contact-section .animation, .inquiry-section .animation').removeClass('animated')
      // if (index === 1) {
      //   if (direction === 'down') {
      //     $('.chermoi-header').addClass('is--active');
      //     $('.main__text.animation').removeClass('animated');
      //   }
      // } else if (index > 1) {
      //   if (direction === 'up') {
      //     if (nextIndex === 1) {
      //       $('.chermoi-header').removeClass('is--active');
      //       $('.main__text.animation').addClass('animated delay6');
      //     }else if (nextIndex === 2) {
      //       $('.service .animation').addClass('animated');
      //       for(let i = 0 ; i > 3; i++) {
      //         $('.service-content__content').eq(i).addClass('animated');
      //       }
      //     } else if (nextIndex === 3) {
      //       $('.face-check .face-check-left .animatable').addClass('fadeInUp animated');
      //       $('.face-check .face-check-right.animatable').addClass('bounceInRight animated');
      //
      //     } else if (nextIndex === 4) {
      //       $('.charge-conv .charge-conv-left.animatable').addClass('bounceInLeft animated');
      //       $('.charge-conv .charge-conv-right .animatable').addClass('fadeInUp animated');
      //
      //     } else if (nextIndex === 5) {
      //       $('.safe-fin-tech .animatable').addClass('fadeInUp animated');
      //     }
      //   }
      // }
      if (direction === 'down') {
        $('.chermoi-header').addClass('is--active');
      }
      if (nextIndex === 1) {
        $('.main__text.animation').addClass('animated delay6');
        for(let i = 0 ; i > 3; i++) {
          $('.service-content__content').eq(i).addClass('animated');
        }
        if (direction === 'up') {
          $('.chermoi-header').removeClass('is--active');
        }
      }else if (nextIndex === 2) {
        $('.service .animation').addClass('animated');
        for(let i = 0 ; i > 3; i++) {
          $('.service-content__content').eq(i).addClass('animated');
        }
      } else if (nextIndex === 3) {
        $('.portfolio-section .animation').addClass('animated');
      } else if (nextIndex === 4) {
        $('.contact-section .animation').addClass('animated');
      } else if (nextIndex === 5) {
        $('.inquiry-section .animation').addClass('animated');
      }
    }
  })
  const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
