import PubSub from 'pubsub-js';

PubSub.subscribe( 'gotoSlide', function(msg, data) {
  $('.aside-pagination .gotoslide').removeClass('is-active');
  $('[data-gotoslide="'+data.to+'"]').addClass('is-active');
});
