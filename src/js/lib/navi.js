import PubSub from 'pubsub-js';


if ($(window).width() > 992) {

  PubSub.subscribe( 'gotoSlide', function(msg, data) {
    $('.aside-pagination .gotoslide').removeClass('is-active');
    $('[data-gotoslide="'+data.to+'"]').addClass('is-active');
  });

}

