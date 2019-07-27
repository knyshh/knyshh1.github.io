import PubSub from 'pubsub-js';
import device from 'current-device'
import {TimelineMax, TweenLite,TimelineLite, Power0, Power4, Power1, Power3, Back,Circ, Expo } from 'gsap';

const EVENTS = {
  SCROLL: 'scroll',
  CLICK: 'click'
}

if ($(window).width() > 992 && device.desktop()) {

  PubSub.subscribe( 'gotoSlide', function(msg, data) {

    let currentSlide = $('[data-slide='+data.from+']');
    let newSlide = $('[data-slide='+data.to+']');
    let direction = data.direction

    //aboutus scene
    const slide2 = new TimelineLite();
    slide2.set($(".about-section img"), {opacity: 0});
    slide2.set($(".line-orange"), {opacity: 0});
    slide2
      .fromTo($(".about-section img"), 1.1, {
        y: '50%',
        opacity: 0,
        webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        force3D: 1
      }, {
        y: '0%',
        opacity: 1,
        webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: Expo.easeOut,
        force3D: 1,
        delay: 0.15
      }, 0.2)
      .fromTo($(".about"), 0.55, {y: "100%",opacity: 0}, {opacity: 1,y: "0%"}, 0.3)
      .fromTo($(".line-orange"), 0.65 , { y: '100%', opacity: 0, top: '150%' }, {  y: '0%', opacity: 1, top: '118px'}, {
        ease: Back.easeOut
      },1)

    let onCompleteSlide2 = () => {
      slide2
        .set($(".about"), {clearProps:"all"})
        .set($(".line-orange"), {clearProps:"all"})
        .set($(".about-section img"), {clearProps:"all"})
    }
    slide2.eventCallback("onComplete", onCompleteSlide2);


    if(data.to >=3 && data.to<=5) {
      $('.aside-pagination').css("opacity",1);
    }
    else {
      $('.aside-pagination').css("opacity",0);
    }

    let footer = $('.footer');
    let footerHeader = $(".footer-header-bg")
    let loactionline = $('.line-white');


    const slide6 = new TimelineMax();
    slide6
      .fromTo($('.contact-us__animation'), 0.45, {y:20, opacity:0},{y:0,opacity:1, delay:0.25,ease: Power0.easeIn})

    new TimelineMax()
      .set(currentSlide,{zIndex:-1},'+=0.1')
      .set(newSlide,{zIndex:2},'+=0.1')
      .set(currentSlide, {className:"-=is-active"},'+=0.1')
      .set(newSlide, {className:"+=is-active"},'+=0.1')


    let tl = new TimelineMax();

    let onCompleteContactUs = () => {
      tl.set($('.slide6'), {clearProps:"all"})
    }

    let onCompleteFooter = () => {
      tl.set($('.slide7'), {clearProps:"all"})

    }


    if( data.from === 6 &&  data.to === 7 ) {
      tl
        .fromTo(currentSlide, 0.5,{y: '0%', ease: Back.easeOut},{y: '-150%',
          ease: Power4.easeInOut,
          onComplete: onCompleteContactUs
        })
        .fromTo(footer , 0.5, {y: 500, x: 10 ,opacity:0},{y:0,x: 0, opacity:1, ease: Power0.easeIn},'-=0.65')
        .fromTo(footerHeader , 0.5, {y: "-100%", x: 10 ,opacity:0},{y:"0%",x: 0, opacity:1, ease: Power0.easeIn},'-=0.65')
        .fromTo($('.location'), 0.4 , {y: '100%',opacity:0 },{y: "0%", ease: Power0.easeIn,opacity:1 },'-=0.15')
        .fromTo(loactionline , 0.4, { width: 0, opacity: 0} ,{ autoAlpha:1, width: '50px', opacity:1, ease: Power4.easeIn}, '-=0')
        .set(newSlide,{opacity: 1},'-=2.4')
    }
    else if( data.from === 7 &&  data.to === 6 ) {
      tl
        .fromTo(currentSlide, 0.5,{y: '-150%', ease: Back.easeOut},{y: '0', ease: Power4.easeInOut,
          onComplete: onCompleteFooter})
        .set(newSlide,{opacity: 1},'-=2.4')
        .set($('.slide7'), {y: '0'})
    }
    else {
      tl
        .fromTo(currentSlide,0.5,{opacity: 1},{opacity: 0}, '+=0.1')
        .set(newSlide,{opacity: 1},'-=2.4')
    }

  });

  var mySpecificSubscriber = function (msg, data) {

    let direction = data.direction,
      event = data.event;

    console.log('direction', direction, event)

    $('.aside-pagination').css("opacity",1);
    $('.aside-pagination li.is-active').css("color", "#000");
    $('.aside-pagination li').css("color", "#cfdbe6");

    const slidePagination = new TimelineMax();

    let positionIndicator = $('.aside-pagination li.is-active').offset().top;
    let currentItem  = $('[data-gotoslide='+data.from+']');
    let newItem = $('[data-gotoslide='+data.to+']');

    if(event === EVENTS.SCROLL) {
      console.log('scroll');
      slidePagination
        .set('.indicator', {top: positionIndicator})
      positionIndicator && direction ===1 ?
        slidePagination.to('.indicator', 0.2, {top: positionIndicator, ease:Power1.easeIn}, '-=0.5') :
        slidePagination.to('.indicator', 0.2, {top: positionIndicator, ease:Power1.easeIn}, '-=0.5')
      slidePagination.fromTo($('.aside-pagination li.is-active'), 0.1 ,{color: '#cfdbe6' },{color: '#000'}, '+=0.2')
    }
    else if ( event === EVENTS.CLICK) {
      console.log('click');
      slidePagination
        .fromTo('.indicator', 0.2, {top: currentItem.offset().top }, {top: newItem.offset().top, ease:Power1.easeIn}, '-=0.2')
        .to(newItem,0.1, {color: '#000' })
    }

    const slide5 = new TimelineLite({paused: true});
    slide5
      .fromTo($(".main-slide__img"), 1.3, { y: '45%',
        opacity: 0,
        webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        '-webkit-clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        force3D: 1
      }, {
        y: '0%',
        opacity: 1,
        webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: Expo.easeOut,
        force3D: 1,
        delay: 0.2
      }, 0.2)
      .fromTo($('.slider-about-section .main-slide__title'), 0.45, { y: '20px', opacity: 0}, { y: '0',opacity: 1}, '-=0.85')
      .fromTo($('.slider-about-section .slide-content'), 0.35, { y: '20px', opacity: 0}, { y: '0',opacity: 1},'-=0.65')

    let onCompleteSlider = () => {
      slide5
        .set($('.slider-about-section .main-slide__title'), {clearProps:"all"})
        .set($(".main-slide__img"), {clearProps:"all"})
        .set($('.slider-about-section .slide-content'), {clearProps:"all"})
    }
    slide5.eventCallback("onComplete", onCompleteSlider);

    slide5.play()
  }

  // subscribe only to gotoSlide.slide topics
  PubSub.subscribe('gotoSlide.slide', mySpecificSubscriber);
}





