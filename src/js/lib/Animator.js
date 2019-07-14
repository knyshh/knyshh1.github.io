import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin";


import PubSub from 'pubsub-js';
import {TimelineMax, TweenLite, Power4, Power1, Power3, Back, Expo} from 'gsap';

PubSub.subscribe( 'gotoSlide', function(msg, data) {


  let currentSlide = $('[data-slide='+data.from+']');
  let newSlide = $('[data-slide='+data.to+']');
  let elements = currentSlide.find('[data-stagger]'); //element на страничке cтарой  ?
  let newElements = newSlide.find('[data-stagger]'); // element на страничке новой  ?
  let currentTween = `scene${data.to}`


  //aboutus scene
  const slide2 = new TimelineMax();
  slide2
    .fromTo($(".about-section img"), 1, {
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
      force3D: 1
    }, 0.3)
    .fromTo($(".about__title"), 0.7, {x: "150%"}, {x: "0%"}, {
      ease: Expo.easeOut
    }, 0.2)
    .fromTo($(".about__txt"), 0.5, { x: '100%',y: '100%', opacity: 0 },{ x: '0%',y: '0%', opacity: 1 },  {
      ease: Expo.easeOut
    }, 0.3)
    .fromTo($(".about .button"), 0.5, { x: '100%',y: '100%', opacity: 0 },{ x: '0%',y: '0%', opacity: 1 },  {
      ease: Expo.easeOut
    }, 0.3)
    .fromTo($(".line-orange"), 1 , { x: '250%',y: '150%', opacity: 0, width: "0" }, { x: '0%', y: '0%', opacity: 1, width: "50px" }, {
      ease: Back.easeOut
    }, 0.65)


  slide2.eventCallback("onComplete", null);
  //clear property after scene complete
  //end about us

  //sliding
  // vars
  var title = $('.main-slide__title');
  var slidetxt = $('.main-slide__txt');
  var slideimg = $('.main-slide__img');
  var sliderblock3 = $('.slide3 .inner-pagination__item');
  var sliderblock4 = $('.slide4 .inner-pagination__item');
  var sliderblock5 = $('.slide5 .inner-pagination__item');
  var sliderbtn = $('.main-slide .button');
  let sliderblocksArr3 = [$('.inner-slide3-block1'),$('.inner-slide3-block2'),$('.inner-slide3-block3')];
  let sliderblocksArr4 = [$('.inner-slide4-block1'),$('.inner-slide4-block2'),$('.inner-slide4-block3')];
  let sliderblocksArr5 = [$('.inner-slide5-block1'),$('.inner-slide5-block2'),$('.inner-slide5-block3')];

  let  sliderbtn3 = $('.slide3.slider-about-section  .button');
  let  sliderbtn4 = $('.slide4.slider-about-section .button');
  let  sliderbtn5 = $('.slide5.slider-about-section .button');



  //const slide3 = new TimelineMax();
  // slide3
  //   .fromTo(slideimg, 0.85, { y: '10%',
  //       opacity: 0,
  //       webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //       clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //       force3D: 1
  //     }, {
  //       y: '0%',
  //       opacity: 1,
  //       webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //       ease: Power4.easeIn,
  //       force3D: 1
  //     }, 0.1)
    // .staggerFromTo(sliderblocksArr3, 0.2 ,{y:20, x: 10,opacity: 0},{y:0,x: 0,opacity: 1}, 0,'-=0')
    // .fromTo(title, 0.65, {y: 50 ,opacity: 0}, {y: 0, opacity: 1}, {
    //   ease: Power4.easeOut
    // }, 0.2)
    // .fromTo(slidetxt, 0.65, { y: '100%', opacity: 0 },{ y: '0%', opacity: 1 },  {
    //   ease: Power4.easeOut
    // }, 0.3)
    // .fromTo(sliderbtn3, 0.65, {y:100, x: 10 ,opacity:0},{y:0,x: 0, opacity:1},  {
    //   ease: Power4.easeOut
    // }, 0.3)

 // slide3.eventCallback("onComplete", null);

  //const slide4 = new TimelineMax();
  // slide4
  //   .fromTo(title, 0.65, {y: 50 ,opacity: 0}, {y: 0, opacity: 1}, {
  //     ease: Power4.easeOut
  //   }, 0.2)
  //   .fromTo(slidetxt, 0.45, { y: '100%', opacity: 0 },{ y: '0%', opacity: 1 },  {
  //     ease: Power4.easeOut
  //   }, 0.2)
  //   .staggerFromTo(sliderblocksArr4, 0.5 ,{y:20, x: 10,opacity: 0},{y:0,x: 0,opacity: 1},0,'-=0')
  //   .fromTo(sliderbtn4, 0.55, {y:100, x: 10 ,opacity:0},{y:0,x: 0, opacity:1},  {
  //     ease: Power4.easeOut
  //   }, 0.2)


  //slide4.eventCallback("onComplete", null);

  const slide5 = new TimelineMax();
  slide5
    .fromTo(slideimg, 0.85, { y: '10%',
      opacity: 0,
      webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      force3D: 1
    }, {
      y: '0%',
      opacity: 1,
      webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: Power4.easeIn,
      force3D: 1
    }, 0.1)
    .fromTo(title, 0.65, {y: 50 ,opacity: 0}, {y: 0, opacity: 1}, {
      ease: Power4.easeOut
    }, 0.2)
    .fromTo(slidetxt, 0.65, { y: '100%', opacity: 0 },{ y: '0%', opacity: 1 },  {
      ease: Power4.easeOut
    }, 0.3)
    .fromTo(sliderbtn5, 0.65, {y:100, x: 10 ,opacity:0},{y:0,x: 0, opacity:1},  {
      ease: Power4.easeOut
    }, 0.3)
    .staggerFromTo(sliderblocksArr3, 0.5 ,{y:20, x: 10,opacity: 0},{y:0,x: 0,opacity: 1},0,'-=0')
    .staggerFromTo(sliderblocksArr4, 0.5 ,{y:20, x: 10,opacity: 0},{y:0,x: 0,opacity: 1},0,'-=0')
    .staggerFromTo(sliderblocksArr5, 0.5 ,{y:20, x: 10,opacity: 0 },{y:0,x: 0,opacity: 1 },0,'-=0');

  slide5.eventCallback("onComplete", null);


  let contactusTitle = $('.contact-us__title');
  let contactusBtn = $('.contac-us .button');
  let footer = $('.footer');
  let footerTxt = $('.footer__txt');
  let footerNav = $('.footer__nav');
  let locationTitle = $('.location__title');
  let locationTxt= $('.location__txt');


  const slide6 = new TimelineMax();
  slide6
    .fromTo(contactusTitle, 0.5, {y:40, opacity:0},{y:0,x: 0, opacity:1},  {
      ease: Power4.easeOut
    }, 0.65)
    .fromTo(contactusBtn, 0.5, {y:100,opacity:0},{y:0,x: 0, opacity:1},  {
      ease: Power4.easeOut
    }, 0.65)

  slide6.eventCallback("onComplete", null);

  const slide7 = new TimelineMax();
  slide7
    .fromTo(locationTitle , 1, {y: 600, x: 10 ,opacity:0},{y:0,x: 0, opacity:1},  {
      ease: Power4.easeIn
    }, 0.8)
    .fromTo(locationTxt , 1, {y:500, x: 10 ,opacity:0},{y:0,x: 0, opacity:1},  {
      ease: Power4.easeIn
    }, 0.8)
    .fromTo(footer , 0.9, {y: 500, x: 10 ,opacity:0},{y:0,x: 0, opacity:1},  {
      ease: Power4.easeIn
    }, 0.9)
    .fromTo(footerTxt , 1, {y: 500, x: 10 ,opacity:0},{y:0,x: 0, opacity:1},  {
      ease: Power4.easeIn
    }, 0.9)
    .fromTo(footerNav , 1, {y: 500, x: 10 ,opacity:0},{y:0,x: 0, opacity:1},  {
      ease: Power4.easeIn
    }, 0.9)

  slide7.eventCallback("onComplete", null);

    if(data.to >=3 && data.to<=5) {
      $('.aside-pagination').css("opacity",1);
    }
    else {
      $('.aside-pagination').css("opacity",0);
    }

  new TimelineMax()
    .set(currentSlide,{zIndex:-1})
    .set(newSlide,{zIndex:2});


  let tl = new TimelineMax();

  // if(data.from === 1 ) {
  //   console.log('dddd1',currentSlide)
  //
  //   tl.fromTo(currentSlide,0.65,{y:'0%',opacity: 1},{y:'-100%',opacity: 0})
  //     .fromTo(newSlide,0.65,{y:'100%',opacity: 1},{y:'0%',opacity: 1},0)
  //     .set(currentSlide, {className:"-=is-active"})
  //     .set(newSlide, {className:"+=is-active"})
  //
  // }
  console.log('data.from',data.from, 'data.to', data.to)
  if( data.from === 6 &&  data.to === 7 ) {
    console.log('6->7');
    tl
      .fromTo(currentSlide,0.3,{opacity: 1, ease: Back.easeOut},{opacity: 0, ease: Back.easeOut})
      .fromTo($('.footer-section'),0.75,{
        webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        opacity: 1,
        ease: Power4.easeInOut
      },{

        webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        ease: Power4.easeInOut
      })
      .set(currentSlide, {className:"-=is-active"})
      .set(newSlide, {className:"+=is-active"})
  }
  if( data.from === 7 &&  data.to === 6 ) {
    console.log('7->6');
    tl
      .fromTo($('.footer-section'),0.9,{
        webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: Power4.easeInOut
      },{

        webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        ease: Power4.easeInOut
      })
      .fromTo(newSlide,0.65,{opacity: 1},{opacity: 1},0)
      .set(currentSlide, {className:"-=is-active"})
      .set(newSlide, {className:"+=is-active"})
  }
  else {
    console.log('elements',elements.length)
    tl
      // .fromTo(elements,0.3,{y:0,opacity:1},{y:20,opacity:0})
      .fromTo(currentSlide,1,{opacity: 1},{opacity: 0},0)
      .set(newSlide,{opacity: 1},'-=2.4')
      //.fromTo(newSlide,3,{opacity: 1},{opacity: 1},0.5)
      .set(currentSlide, {className:"-=is-active"})
      .set(newSlide, {className:"+=is-active"})
  }

});


var mySpecificSubscriber = function (msg, data) {
  $('.aside-pagination').css("opacity",1);

  const slidePagination = new TimelineMax();
  slidePagination
    // .set($('.aside-pagination li'), {className:"-=active"})
    // .set($('.aside-pagination li'), {className:"+=active"})
    .fromTo($('.aside-pagination li'),1,{opacity:0},{opacity:1},0.1,'-=1');

}

// subscribe only to gotoSlide.slide topics
PubSub.subscribe('gotoSlide.slide', mySpecificSubscriber);


// slide3.eventCallback("onComplete", null);
// a.hasClass("is-active") ? R() : function() {
//   var t = new TimelineMax({
//     onComplete: function() {
//       e.find(".home-slide__title").css({
//         opacity: "",
//         transform: ""
//       }),
//         R()
//     }
//   });
//clear property after scene complete
//end about us
