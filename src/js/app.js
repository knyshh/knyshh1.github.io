import Scrollbar from 'smooth-scrollbar';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { TimelineMax, TweenLite, Power4, Power1, Power3, Back, Expo } from 'gsap';
import {TimelineLite} from "gsap/TweenMax";
import Animator from './lib/Animator';
import Paginator from './lib/Paginator';
import  './lib/navi';


const p = new Paginator();


// Scrollbar.initAll({
//   damping: .5,
//   alwaysShowTracks: false,
// Scrollbar.init(document.querySelector('.container-app'));

//
// // add smothing scrollbar
$(window).on('load', function () {

  const ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {}
  });

  // slide1
  // const logo = $('.logo');
  // const menuIcon = $('.menu');

  const tlWords = new TimelineMax();
  const tlWords2 = new TimelineMax();
  const tlHeader = new TimelineMax();


  const charArr = []

  $.each($('.char'), function (index, value) {
    charArr.push(value)
  });

  // tlHeader
  //   .fromTo($(".logo"), 0.7, {opacity: 0, y: "100%" }, { opacity: 1, y: "0%", ease: Power1.easeOut}, 0.1)
  //   .fromTo($(".menu"), 0.7, {opacity: 0, y: "100%" }, { opacity: 1, y: "0%", ease: Power1.easeOut}, 0.1)


  tlWords
    // .from($(".text1"), 0.1, {y: '100%', opacity: 1, ease: Expo.easeOut}
    //   , 0)
    .fromTo($(".logo"), 0.7, {opacity: 0, y: "100%" }, { opacity: 1, y: "0%", ease: Power1.easeOut}, 0.1)
    .fromTo($(".menu"), 0.7, {opacity: 0, y: "100%" }, { opacity: 1, y: "0%", ease: Power1.easeOut}, 0.1)
    .staggerFromTo(charArr, 2.1, {
      opacity: 0,
      scale: 0,
      y: "40px",
      x: '-100px',
      transformOrigin: "0% 50% -50",
      ease: Power4.easeOut
    },
      {opacity: 1, scale: 1, y: "0", x: "0", transformOrigin: "0% 50% 0", ease: Power4.easeOut}, 0.02, "+=0.2")
    tlWords2
      .fromTo($(".creative--c"), 0.5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, 0.5, "show-creative-c" )
      .fromTo($(".creative--r"), 0.5, {opacity: 0, y: "20px"}, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
        }, "show-creative-r")
      .from(".creative--r .linea_r", .5, {y: 0, ease: Power3.easeOut }, "show-creative-r+=0.1")
      .to(".creative--r .linea_r", .5, { y: 0, ease: Power3.easeOut }, "show-creative-r+=0")
      .fromTo($(".creative--e1"), .5, { opacity: 0, y: "20px"}, {opacity: 1, y: "0px", ease: Power1.easeOut}, "show-creative-e1")
      .from(".creative--e1 .linea_e1_1, .creative--e1 .linea_e1_3", .5, { x: "50", ease: Power3.easeOut }, "show-creative-e1+=0")
  //   .to(".creative--e1 .linea_e1_1, .creative--e1 .linea_e1_3", .5, {
  //   ease: Power3.easeOut
  // }, "show-creative-e1+=0").from(".creative--e1 .linea_e1_2", .5, {
  //   x: "-50",
  //   ease: Power3.easeOut
  // }, "show-creative-e1+=0.1").to(".creative--e1 .linea_e1_2", .5, {
  //   drawSVG: "0% 0%",
  //   ease: Power3.easeOut
  // }, "show-creative-e1+=0.1")
    .fromTo($(".creative--a"), .5, { opacity: 0, y: "20px"}, { opacity: 1,  y: "0px", ease: Power1.easeOut
      },"show-creative-a")
      .fromTo($(".creative--t"), .5, { opacity: 0, y: "20px"}, { opacity: 1, y: "0px", ease: Power1.easeOut}, "show-creative-t")
    .from(".creative--t .linea_t", .5, { x: "100%", ease: Power3.easeOut}, "show-creative-t+=0.1")
    //   .to(".creative--t .linea_t", .5, {
    //   ease: Power3.easeOut
    // }, "show-creative-t+=0.1")
    .fromTo($(".creative--i"), .5, {
      opacity: 0,
      y: "20px"
    }, {
      opacity: 1,
      y: "0px",
      ease: Power1.easeOut
    }, "show-creative-i").from(".creative--i .linea_i", .5, {
    y: "-50",
    ease: Power3.easeOut
  }, "show-creative-i+=0").to(".creative--i .linea_i", .5, {
    y: "0",
    ease: Power3.easeOut
  }, "show-creative-i+=0").fromTo($(".creative--v"), .5, {
    opacity: 0,
    y: "20px"
  }, {
    opacity: 1,
    y: "0px",
    ease: Power1.easeOut
  }, "show-creative-v").fromTo($(".creative--e2"), .5, {
    opacity: 0,
    y: "20px"
  }, {
    opacity: 1,
    y: "0px",
    ease: Power1.easeOut
  }, "show-creative-e2").from(".creative--e2 .linea_e2", .5, {
    y: "-30",
  }, "show-creative-e2+=0.1").to(".creative--e2 .linea_e2", .5, {
    y: "30",
    ease: Power3.easeOut
  })

  // immediatelly
  // new ScrollMagic.Scene({
  //   triggerElement: ".home-slide--intro",
  //   duration: '100%',
  //   triggerHook: 0.8
  // })
  //   .addIndicators({name: "slide1", colorEnd: "red"})
  //   .setClassToggle('.home-slide--intro', 'active-scene')
  //   // .setTween(tlWords.restart())
  //   .addTo(ctrl);

  // const letterR = new TimelineMax();
  //
  // letterR.fromTo($(".creative--c"), .5, {
  //   opacity: 0,
  //   y: "20px"
  // }, {
  //   opacity: 1,
  //   y: "0px",
  //   ease: Power1.easeOut
  // }, "show-creative-c").fromTo($(".creative--r"), .5, {
  //   opacity: 0,
  //   y: "20px"
  // }, {
  //   opacity: 1,
  //   y: "0px",
  //   ease: Power1.easeOut
  // }, "show-creative-r").from(".creative--r .linea_r", .5, {
  //   y: 0,
  //   ease: Power3.easeOut
  // }, "show-creative-r+=0.1").to(".creative--r .linea_r", .5, {
  //   y: 0,
  //   ease: Power3.easeOut
  // }, "show-creative-r+=0").fromTo($(".creative--e1"), .5, {
  //   opacity: 0,
  //   y: "20px"
  // }, {
  //   opacity: 1,
  //   y: "0px",
  //   ease: Power1.easeOut
  // }, "show-creative-e1").from(".creative--e1 .linea_e1_1, .creative--e1 .linea_e1_3", .5, {
  //   x: "50",
  //   ease: Power3.easeOut
  // }, "show-creative-e1+=0")
  // //   .to(".creative--e1 .linea_e1_1, .creative--e1 .linea_e1_3", .5, {
  // //   ease: Power3.easeOut
  // // }, "show-creative-e1+=0").from(".creative--e1 .linea_e1_2", .5, {
  // //   x: "-50",
  // //   ease: Power3.easeOut
  // // }, "show-creative-e1+=0.1").to(".creative--e1 .linea_e1_2", .5, {
  // //   drawSVG: "0% 0%",
  // //   ease: Power3.easeOut
  // // }, "show-creative-e1+=0.1")
  //   .fromTo($(".creative--a"), .5, {
  //     opacity: 0,
  //     y: "20px"
  //   }, {
  //     opacity: 1,
  //     y: "0px",
  //     ease: Power1.easeOut
  //   },"show-creative-a").fromTo($(".creative--t"), .5, {
  //   opacity: 0,
  //   y: "20px"
  // }, {
  //   opacity: 1,
  //   y: "0px",
  //   ease: Power1.easeOut
  // }, "show-creative-t")
  //   .from(".creative--t .linea_t", .5, {
  //     x: "100%",
  //     ease: Power3.easeOut
  //   }, "show-creative-t+=0.1")
  //   //   .to(".creative--t .linea_t", .5, {
  //   //   ease: Power3.easeOut
  //   // }, "show-creative-t+=0.1")
  //   .fromTo($(".creative--i"), .5, {
  //     opacity: 0,
  //     y: "20px"
  //   }, {
  //     opacity: 1,
  //     y: "0px",
  //     ease: Power1.easeOut
  //   }, "show-creative-i").from(".creative--i .linea_i", .5, {
  //   y: "-50",
  //   ease: Power3.easeOut
  // }, "show-creative-i+=0").to(".creative--i .linea_i", .5, {
  //   y: "0",
  //   ease: Power3.easeOut
  // }, "show-creative-i+=0").fromTo($(".creative--v"), .5, {
  //   opacity: 0,
  //   y: "20px"
  // }, {
  //   opacity: 1,
  //   y: "0px",
  //   ease: Power1.easeOut
  // }, "show-creative-v").fromTo($(".creative--e2"), .5, {
  //   opacity: 0,
  //   y: "20px"
  // }, {
  //   opacity: 1,
  //   y: "0px",
  //   ease: Power1.easeOut
  // }, "show-creative-e2").from(".creative--e2 .linea_e2", .5, {
  //   y: "-30",
  // }, "show-creative-e2+=0.1").to(".creative--e2 .linea_e2", .5, {
  //   y: "30",
  //   ease: Power3.easeOut
  // })
  // //   .from(".creative--e2 .linea_e2_2", .5, {
  // //   y: "-30",
  // // }, "show-creative-e2+=0.12")



});
