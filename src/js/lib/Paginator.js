import PubSub from 'pubsub-js';
import device from 'current-device'

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
    if ($(window).width() > 992 && device.desktop()) {
      $('.mainbody').on('wheel',function(e) {

        if(!self.canGo) return;
        e = e.originalEvent;
        var direction = e.deltaY>0? 1:-1;

        var newslide = self.activeSlide + direction; //перейти на новый слайд  если 1 плюс
        // если больше слайдов ничего не делать
        if(newslide>self.max || newslide<1) return;
        self.canGo = false;

        PubSub.publish( 'gotoSlide', {from: self.activeSlide,to:newslide,direction: direction} );

        if( newslide>=3 && newslide<=5) {
          PubSub.publish( 'gotoSlide.slide', {from: self.activeSlide, to:newslide, direction: direction,event: 'scroll' } );
        }

        self.activeSlide = newslide;
        setTimeout(function() {
          self.canGo = true;
        }, self.delay);
      });
    }


  }

  clickEvents() {  //generate event when click on pagination - do pagination

    var self = this;
    if ($(window).width() > 992 && device.desktop()) {
      $('.scroll').on('click',function(e) {
        let newslidescroll = $(this).data('goto');
        PubSub.publish( 'gotoSlide', {from: self.activeSlide, to:newslidescroll} );
        self.activeSlide = newslidescroll;
      });

      $('.aside-pagination li').on('click',function(e) {
        e.preventDefault();
        if(!self.canGoInside) return;
        self.canGoInside = false;
        let newslide = $(this).data('gotoslide');

        let direction =  self.activeSlide  < newslide ? 1 : -1 ;

        // console.log('self.activeSlide , newslide)',self.activeSlide, newslide)

        if(newslide !== self.activeSlide) {
          PubSub.publish( 'gotoSlide.slide', {from: self.activeSlide, to:newslide , direction: direction, event: 'click' } );
          self.activeSlide = newslide;
          setTimeout(function() {
            self.canGoInside = true;
          }, self.delay);
        }
      });
    }

  }

}
