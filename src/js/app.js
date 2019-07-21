import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
import { TimelineMax,TimelineLite, TweenLite, Power4, Power1, Power3, Back, Expo } from 'gsap';
import Animator from './lib/Animator';
import Paginator from './lib/Paginator';
import  './lib/navi';

const p = new Paginator();

$(window).on('load', function () {

  // slide1
  const tlWords = new TimelineLite({
    id:'init'
  });
  const tlHeader= new TimelineLite();

  tlHeader
    .fromTo($(".header"), 0.75, {opacity: 0, y: "-100%" }, { opacity: 1, y: "0%", ease: Power4.easeOut})

  const charArr = Array.from($('.char-slide1'))
  const charW1 = Array.from($('.words1 .word-1').find('.char'))
  const charW2 = Array.from($('.words1 .word-2').find('.char'))
  const charW3 = Array.from($('.words1 .word-3').find('.char'))
  const charW4 = Array.from($('.words1 .word-4').find('.char'))


  const tlWordsAnimation = new TimelineMax({repeat: -1});

  tlWordsAnimation
    // word2 show hide
    .to($(".words1 .word-2"), 0.1, {ease: Power4.easeIn, y: "0", display: 'block'}, '-=0.9')
    .set($(".words1 .word-2"),{ display: "block"})
    .set(charW2,{opacity: 0, y: "15px"})
    .staggerFromTo(charW2, 1.4, {opacity: 0, scale: 0.97, y: "15px", transformOrigin: "0% 50% -50", ease: Power4.easeOut},
      {opacity: 1, scale: 1, y: "0", transformOrigin: "0% 50% 0", ease: Power4.easeOut}, 0.06)
    .to($(".words1 .word-2"), 0.2, {opacity: 0, y: "-15px", display: 'none', ease: Power4.easeOut},'+=4.5')

    // word3 show hide
    .to($(".words1 .word-3"), 0.1, {ease: Power4.easeIn, y: "0", display: 'block'},'-=0.9' )
    .set($(".words1 .word-3"),{ display: "block"})
    .set(charW3,{opacity: 0, y: "15px", })
    .staggerFromTo(charW3, 1.4, {opacity: 0, scale: 0.97, y: "15px", transformOrigin: "0% 50% -50", ease: Power4.easeOut},
      {opacity: 1, scale: 1, y: "0", transformOrigin: "0% 50% 0", ease: Power4.easeOut}, 0.06)
    .to($(".words1 .word-3"), 0.2, {opacity: 0, y: "-15px", display: 'none', ease: Power4.easeOut},'+=4.5')

    // word1 show hide
    .to($(".words1 .word-4"), 0.1, {ease: Power4.easeIn, y: "0", display: 'block'},'-=0.9' )
    .set($(".words1 .word-4"),{ display: "block"})
    .set(charW4,{opacity: 0, y: "15px", })
    .staggerFromTo(charW4, 1.4, {opacity: 0, scale: 0.97, y: "15px", transformOrigin: "0% 50% -50", ease: Power4.easeOut},
      {opacity: 1, scale: 1, y: "0", transformOrigin: "0% 50% 0", ease: Power4.easeOut}, 0.05)
    .to($(".words1 .word-4"), 0.5, {opacity: 0, y: "-15px", display: 'none', ease: Power4.easeOut},'+=4.5')

  // // // word1 show-hide
    // .to($(".words1 .word-1"), 0.5, {ease: Power4.easeIn, y: "0", display: 'block'},'+=0.5' )
    // .set($(".words1 .word-1"),{ display: "block"})
    // .set(charW1,{opacity: 0, y: "15px", })
    // .staggerFromTo(charW1, 1.4, {opacity: 0, scale: 0.97, y: "15px", transformOrigin: "0% 50% -50", ease: Power4.easeOut},
    //   {opacity: 1, scale: 1, y: "0", transformOrigin: "0% 50% 0", ease: Power4.easeOut}, 0.05)
    // .to($(".words1 .word-1"), 0.5, {opacity: 0, y: "-15px", display: 'none', ease: Power4.easeOut},'+=4')



  // animation for h1
  tlWords
    // .addLabel("initial")
    // .set((".text1.title"), {
    //   opacity: 1
    // }, "initial")
     .staggerFromTo(charArr, 1.2, {opacity: 0, scale: 0.97, y: "15px", transformOrigin: "0% 50% -50", ease: Power4.easeOut},
       {opacity: 1, scale: 1, y: "0", transformOrigin: "0% 50% 0", ease: Power4.easeOut}, 0.05, "-=0.45")
    .fromTo($('.scroll'), 0.4, {opacity: 0, y: "100px", ease: Power4.easeOut},
      {opacity: 1, y: 0, ease: Power4.easeOut} )
    .addLabel("show-letters-creative", 0.35)
    .addLabel("show-creative-c", "show-letters-creative+=0.7")
    .addLabel("show-creative-e1", "show-letters-creative")
    .addLabel("show-creative-t", "show-letters-creative+=0.2")
    .addLabel("show-creative-e2", "show-letters-creative+=0.4")
    .addLabel("show-creative-i", "show-letters-creative+=0.9")
    .addLabel("show-creative-r", "show-letters-creative+=1.1")
    .addLabel("show-creative-a", "show-letters-creative+=1.3")
    .addLabel("show-creative-v", "show-letters-creative+=1.5")

    // animation bg letters
    .fromTo($(".creative--c"), 0.5, {opacity: 0, y: "20px"}, {opacity: 1, y: "0px", ease: Power1.easeOut}, "show-creative-c+=0.2" )
    .fromTo($(".creative--r"), 0.5, {opacity: 0, y: "20px"}, {opacity: 1, y: "0px", ease: Power1.easeOut}, "show-creative-r+=0.2")
    .from(".creative--r .linea_r", 0.5, {y: 0, ease: Power3.easeOut,}, "show-letters-creative")
  .to(".creative--r .linea_r", 0.5, { y: 0, ease: Power3.easeOut }, "show-creative-r+=0")
  .fromTo($(".creative--e1"), 0.5, { opacity: 0, y: "20px"}, {opacity: 1, y: "0px", ease: Power1.easeOut}, "show-creative-e1+=0.5")
  .from(".creative--e1 .linea_e1_1, .creative--e1 .linea_e1_3", .5, { x: "50", ease: Power3.easeOut }, "show-creative-e1+=0")
    .fromTo($(".creative--a"), 0.5, { opacity: 0, y: "20px"}, { opacity: 1,  y: "0px", ease: Power1.easeOut
      },"show-creative-a")
      .fromTo($(".creative--t"), 0.5, { opacity: 0, y: "20px"}, { opacity: 1, y: "0px", ease: Power1.easeOut}, "show-creative-t+=0.5")
    .from(".creative--t .linea_t", 0.5, { x: "100%", ease: Power3.easeOut}, "show-creative-t+=0.1")
    .fromTo($(".creative--i"), 0.5, {opacity: 0, y: "20px"}, {opacity: 1, y: "0px", ease: Power1.easeOut}, "show-creative-i")
      .from(".creative--i .linea_i", 0.5, {y: "-50", ease: Power3.easeOut}, "show-creative-i+=0")
      .to(".creative--i .linea_i", 0.5, {y: "0", ease: Power3.easeOut}, "show-creative-i+=0")
      .fromTo($(".creative--v"), 0.5, {opacity: 0, y: "20px"}, {opacity: 1, y: "0px", ease: Power1.easeOut}, "show-creative-v+=0.5")
      .fromTo($(".creative--e2"), 0.5, {opacity: 0, y: "20px"}, {opacity: 1, y: "0px", ease: Power1.easeOut}, "show-creative-e2+=0.5")
      .from(".creative--e2 .linea_e2", 0.5, {y: "-30",}, "show-creative-e2+=0.1")
      .to(".creative--e2 .linea_e2", 0.5, {y: "30", ease: Power3.easeOut},'+=3')

    .to($('.slide-intro').find(".words1 .word-1"), 0.5, { opacity:0, y: "-15px", display: 'none', ease: Power4.easeOut},'+=1.5')
    .to($(".words1 .word-1"), 0.1, {ease: Power4.easeIn, y: "0", display: 'block'},'-=1' )
    // .set($(".words1 .word-1"),{ display: "block"})

    .add(tlWordsAnimation)


  tlWords.eventCallback("onComplete", function() {
    // tlWords.play()
  });


  // animation side navigation
  const $iconMenu = $('.menu__burger');
  const $iconMenuLines = $('.burger');
  const $overlay = $('.overlay')
  const $navigation = $('.navigation')
  const navigationElements= $('.navigation').find('[data-nav]');

  $iconMenu.on('click',()=> {

    $iconMenu.toggleClass('is-active')
    $iconMenuLines.toggleClass('is-active')

    const tlMenu= new TimelineLite();

    if($iconMenu.hasClass('is-active')) {
      tlMenu
        .fromTo($overlay,0.5,{backgroundColor: "rgba(0,0,0,0.01)"  ,opacity: 0, visibility:'hidden', zIndex: -1, ease: Power4.easeOut},  {backgroundColor: "rgba(0,0,0,0.65)"  ,opacity: 1, visibility:'visible', zIndex: 355, ease: Power4.easeOut})
        .fromTo($navigation,0.6,{x: '700px'}, {x: '0', ease: Power4.easeOut}, '-=0.2')
        .staggerFromTo(navigationElements,0.2,{x: 80,opacity:0},{x:0,opacity:1},0.1,'-=.5')

    }
    else {
      tlMenu
        .staggerFromTo(navigationElements,0.2,{x:0,opacity:1},{x: 80,opacity:0},0.1)
        .fromTo($navigation,0.45,{x: '0', ease: Power4.easeOut},{x: '700px'}, '-=0.2')
        .fromTo($overlay,0.4,{backgroundColor: "rgba(0,0,0,0.65)"  ,opacity: 1, visibility:'visible', zIndex: 355, ease: Power4.easeOut},{backgroundColor: "rgba(0,0,0,0.01)"  ,opacity: 0, visibility:'hidden', zIndex: -1, ease: Power4.easeOut},'-=0.2')
    }

  });



});
