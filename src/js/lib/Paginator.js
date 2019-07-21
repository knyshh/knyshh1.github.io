import PubSub from 'pubsub-js';

export default class Paginator {
  constructor() {
    this.scrollEvents();
    this.clickEvents();
    this.activeSlide = 1;
    this.canGo = 1;
    this.max = 7;
    this.delay = 1000;
    this.activeSliderInside=1;
    this.canGoInside=1;
  }

  scrollEvents() {
    var self = this;

    $(window).on('wheel',function(e) {

      if(!self.canGo) return;
      e = e.originalEvent;
      var direction = e.deltaY>0? 1:-1;

      var newslide = self.activeSlide + direction; //перейти на новый слайд  если 1 плюс
                                                    // если больше слайдов ничего не делать
      if(newslide>self.max || newslide<1) return;
      self.canGo = false;

      PubSub.publish( 'gotoSlide', {from: self.activeSlide,to:newslide,direction: direction} );

      console.log('newslide',newslide)
      if( newslide>=3 && newslide<=5) {
        var activeSlideInside = $(this).data('slider-inside');//slider-inside 1
        var newslideInside = self.activeSliderInside + direction;//slider-inside 2
        PubSub.publish( 'gotoSlide.slide', {from: self.activeSlide, to:newslide, direction: direction } );
      }

      self.activeSlide = newslide;
      setTimeout(function() {
        self.canGo = true;
      }, self.delay);
    });
  }

  clickEvents() {  //generate event when click on pagination - do pagination

    var self = this;

    $('.scroll').on('click',function(e) {
      console.log('click', $(this).data('goto'))
      let newslidescroll = $(this).data('goto');
      PubSub.publish( 'gotoSlide', {from: self.activeSlide, to:newslidescroll,} );
      self.activeSlide = newslidescroll;
    });

    $('.aside-pagination li').on('click',function(e) {
      e.preventDefault();
      if(!self.canGoInside) return;
      self.canGoInside = false;
      var newslide = $(this).data('gotoslide');

      if(newslide!==self.activeSlider) {
        PubSub.publish( 'gotoSlide', {from: self.activeSlide,to:newslide});
        self.activeSlide = newslide;
        setTimeout(function() {
          self.canGoInside = true;
        }, self.delay);
      }
    });
  }

}
