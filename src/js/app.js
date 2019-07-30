import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
import { TimelineMax,TimelineLite, TweenLite, Power4, Power1, Power3, Back, Expo } from 'gsap';
import device from 'current-device'
import 'slick-carousel';
import mapboxgl from 'mapbox-gl';
import Animator from './lib/Animator';
import Paginator from './lib/Paginator';
import  './lib/navi';
import "parsleyjs";

const p = new Paginator();



$(window).on('load', function () {



    // .validation persey.js
  $(".form__control").on('click focus keypress', function() {
    $(this).addClass("has-focus");
    if ($(this).val()) {
      $(this).addClass("has-value");
    } else {
      $(this).removeClass("has-value");
    }
  });

  $(".form__control input").on('blur', function() {
    $(this).parent().removeClass("has-focus");
    if ($(this).val()) {
      $(this).parent().addClass("has-value");
    } else {
      $(this).parent().removeClass("has-value");
    }
  });

  $('#form-contact').parsley();

  // animation side navigation
  const $iconMenu = $('.menu__burger');
  const $iconMenuLines = $('.burger');
  const $overlay = $('.overlay')
  const $overlayPopup = $('.overlay2')
  const $contactsPopup = $('.contact-popup')
  const $navigation= $('.navigation')
  const navigationElements= $('.navigation').find('[data-nav]');
  const $contactsLink = $('#contacts');
  const $popupClose = $('.popup__close');
  const $btncontacts = $('.js-show-popup');

  const tlMenu= new TimelineLite();
  const tlContacts = new TimelineLite();

  const colorBgOverlay = !device.desktop() ? '255,255,255' : '251,251,251'

  $iconMenu.on('click',()=> {

    $iconMenu.toggleClass('is-active')
    $iconMenuLines.toggleClass('is-active')
    $('body').addClass('is-active-popup')

    if($iconMenu.hasClass('is-active')) {
      tlMenu
        .fromTo($overlay,0.5,{backgroundColor: "rgba(0,0,0,0.01)"  ,opacity: 0, display:'none', zIndex: -1, ease: Power4.easeOut},
          {backgroundColor: "rgba(0,0,0,0.65)"  ,opacity: 1, display:'block', zIndex: 401, ease: Power4.easeOut})
        .fromTo($navigation,0.6,{x: `700px`}, {x: '0', ease: Power4.easeOut}, '-=0.2')
        .staggerFromTo(navigationElements,0.2,{x: 80,opacity:0},{x:0,opacity:1},0.1,'-=.5')

    }
    else {
      tlMenu
        .staggerFromTo(navigationElements,0.2,{x:0,opacity:1},{x: 80,opacity:0},0.1)
        .fromTo($navigation,0.45,{x: '0', ease: Power4.easeOut},{x: '700px'}, '-=0.2')
        .fromTo($overlay,0.4,{backgroundColor: "rgba(0,0,0,0.65)"  ,opacity: 1, display:'block', zIndex: 401, ease: Power4.easeOut},
          {backgroundColor: "rgba(0,0,0,0.01)"  ,opacity: 0, display:'none', zIndex: -1, ease: Power4.easeOut},'-=0.2')

      $iconMenu.removeClass('is-active')
      $iconMenuLines.removeClass('is-active')
      $('body').removeClass('is-active-popup')

    }

  });

  const showContactsPopup = () => {

    if( $('body').hasClass('is-active-popup')) {
      tlContacts
        .fromTo($overlayPopup,0.5,{backgroundColor: `rgba(${colorBgOverlay},0.1)` ,opacity: 0, display:'none', zIndex: -1, ease: Power4.easeOut},
          {backgroundColor: `rgba(${colorBgOverlay},1)`  ,opacity: 1, display:'block', zIndex: 406, ease: Power4.easeOut})
        .fromTo($contactsPopup,0.6,{opacity: 0, display:'none'}, { display:'block', opacity: 1, ease: Power4.easeOut}, '-=0.2')

    }
    else {
      tlContacts
        .fromTo($contactsPopup,0.45,{opacity: 1, ease: Power4.easeOut, display:'block'},{ display:'none',opacity: 0}, '-=0.2')
        .fromTo($overlayPopup,0.4,{backgroundColor: `rgba(${colorBgOverlay},1)`  ,opacity: 1, display:'block', zIndex: 401, ease: Power4.easeOut},
          {backgroundColor: `rgba(${colorBgOverlay},0.1)` ,opacity: 0,  display:'none', zIndex: -1, ease: Power4.easeOut},'-=0.2')
    }
  }

  const closePopup = () => {
    tlContacts
      .fromTo($contactsPopup,0.45,{opacity: 1, ease: Power4.easeOut, display:'block'},{ display:'none',opacity: 0}, '-=0.2')
      .fromTo($overlayPopup,0.4,{backgroundColor: `rgba(${colorBgOverlay},1)` ,opacity: 1, display:'block', zIndex: 401, ease: Power4.easeOut},
        {backgroundColor: `rgba(${colorBgOverlay},0.1)` ,opacity: 0, display:'none', zIndex: -1, ease: Power4.easeOut},'+=0.2')
    $('body').removeClass('is-active-popup')
  }

  // show contacts
  $contactsLink.on('click',(e)=> {

    e.preventDefault();

    $('body').addClass('is-active-popup')//
    $iconMenuLines.toggleClass('is-active')

    // close menu and overlay
    tlMenu
      .staggerFromTo(navigationElements,0.2,{x:0,opacity:1},{x: 80,opacity:0},0.1)
      .fromTo($navigation,0.45,{x: '0', ease: Power4.easeOut},{x: '700px'}, '-=0.2')
      .fromTo($overlay,0.4,{backgroundColor: "rgba(0,0,0,0.65)"  ,opacity: 1, display:'block', zIndex: 401, ease: Power4.easeOut},
        {backgroundColor: "rgba(0,0,0,0.01)" ,opacity: 0, display:'none', zIndex: -1, ease: Power4.easeOut},'-=0.2')


    showContactsPopup()
    $iconMenu.removeClass('is-active');


  });


  $btncontacts.on('click',()=> {

    $('body').addClass('is-active-popup')

    showContactsPopup()

  });


  $popupClose.on('click', () => closePopup())

  if( device.tablet()) {
    $(".tablet-slider").slick({

      dots: true,
      speed: 400,
      slidesToShow: 1,
      vertical: true,
      slidesToScroll: 1,
      touchThreshold: 1,
      swipeToSlide: true,
      verticalSwiping: true
    })
  }


  if ($(window).width() > 992 && device.desktop() || device.tablet()) { // and mobile desktop and device tablet


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
      // .to($(".words1 .word-2"), .4, {
      //   width: `300px`,
      //   height: '95px'
      // })
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

    //
    tlWords.eventCallback("onComplete", function() {
      // tlWords.play()
    });

  }
  // slide1




  // map
  const $map = $('.wrapper').hasClass('withoutmap');

  if(!$('.wrapper').hasClass('withoutmap')) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmVyaW9nbWJoIiwiYSI6ImNqeXBzZG5kdjFlNzEzbXV3ZTlseHZiNjkifQ.imC6UjjZpNa3ZvoF0j3jAA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/neriogmbh/cjypw1n9l0ccv1cqk3ub7xarz',
      center: [ 12.36148, 51.34515],
      zoom: 13
    });

    map.on('load', function() {
      map.loadImage('ic-location.png', function(error, image) {
        if (error) throw error;
        map.addImage('icon', image);
        map.addLayer({
          "id": "points",
          "type": "symbol",
          "source": {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": [{
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [12.36148,51.34515]
                }
              }]
            }
          },
          "layout": {
            "icon-image": "icon",
            "icon-size": 0.9
          }
        });
      });


    });

    map.scrollZoom.disable();
  }


  // sending contact form


  $("#form-contact").on("submit", function(e) {
    e.preventDefault()

    const url  = 'http://localhost:8080';// paste here url

    $.ajax({
      url,
      type: 'POST',
      dataType: "JSON",
      data: $(this).serialize(),
      processData: false,
      contentType: false,
      success (data, status)
      {
        $('#form-contact')[0].reset(); // reset form after sending
        $('.hide-success').css("visibility", "hidden");
        setTimeout(()=> {
          $('.show-success'). css("visibility", "visible");
        }, 700);

        setTimeout(()=> {
          closePopup()
          $('.hide-success').css("visibility", "visible");
          $('.show-success'). css("visibility", "hidden");
        }, 3500);
      },
      error (xhr, desc, err)
      {
        console.log('error',err)

        $('#form-contact')[0].reset(); // reset form after sending
        $('.hide-success').css("visibility", "hidden");
        setTimeout(()=> {
          $('.show-fail'). css("visibility", "visible");
        }, 700);

        setTimeout(()=> {
          closePopup()
          $('.hide-success').css("visibility", "visible");
          $('.show-fail'). css("visibility", "hidden");
        }, 3500);
      }
    });

  });


  $(".form-policy input").on("change", function(e) {

    const $url  = 'http://localhost:8080';// paste here url
    const $checked = $(this).prop('checked');
    const $dataForm = $checked ? 'policy-cheked' : 'policy-uncheked'; // $('.form-policy').serialize()

    $.ajax({
      $url,
      type: 'POST',
      dataType: "JSON",
      data: $dataForm,
      processData: false,
      contentType: false,
      success (data, status)
      {
        //
      },
      error (xhr, desc, err)
      {
        console.log('error',err)
      }

    });

  });

});
