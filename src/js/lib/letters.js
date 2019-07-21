function introSlides() {
  if ($(".home-slide--intro").length) {
    var e = function(e) {
      return e.outerWidth(!0)
    }
      , t = function(e) {
      return e.outerHeight(!0)
    }
      , n = ".home-slide--intro .desktop h1"
      , i = $(n)
      , r = $(".home-slide--intro .desktop h2");
    i.find('div[class^="words"]').css("width", ""),
      i.find('div[class^="words"]').css("height", ""),
      r.find('div[class^="words"]').css("width", ""),
      r.find('div[class^="words"]').css("width", ""),
      i.find('div[class^="word-"]').attr("style", ""),
      r.find('div[class^="word-"]').attr("style", ""),
      i.find(".words1").outerWidth(e(i.find(".words1 .word-1"))),
      i.find(".words1").outerHeight(t(i.find(".words1 .word-1"))),
      i.find(".words2").outerWidth(e(i.find(".words2 .word-1"))),
      i.find(".words2").outerHeight(t(i.find(".words2 .word-1"))),
      r.find(".words1").outerWidth(e(r.find(".words1 .word-1"))),
      r.find(".words1").outerHeight(t(r.find(".words1 .word-1"))),
      r.find(".words2").outerWidth(e(r.find(".words2 .word-1"))),
      r.find(".words2").outerHeight(t(r.find(".words2 .word-1"))),
    $("div[class^=char]").length && $("div[class^=char]").contents().unwrap(),
      k = n,
      P = document.querySelector(k),
      charming(P, {
        tagName: "div",
        classPrefix: "char"
      });
    var o = Array.from(i.find(">div:not(.words)"));
    i.find(".words >div:first-child >div").each(function(e, t) {
      o.push($(this))
    });
    var s = e(i.find(".words1 .word-1"))
      , a = Array.from(i.find(".words1 .word-1 div"))
      , l = e(i.find(".words1 .word-2"))
      , c = Array.from(i.find(".words1 .word-2 div"))
      , u = e(i.find(".words1 .word-3"))
      , d = Array.from(i.find(".words1 .word-3 div"))
      , f = e(i.find(".words2 .word-1"))
      , h = Array.from(i.find(".words2 .word-1 div"))
      , p = e(i.find(".words2 .word-2"))
      , m = Array.from(i.find(".words2 .word-2 div"))
      , v = e(i.find(".words2 .word-3"))
      , g = Array.from(i.find(".words2 .word-3 div"))
      , y = e(r.find(".words1 .word-1"))
      , _ = e(r.find(".words1 .word-2"))
      , w = e(r.find(".words1 .word-3"))
      , b = e(r.find(".words1 .word-4"))
      , x = (e(r.find(".words1 .word-5")),
      e(r.find(".words2 .word-1")))
      , T = e(r.find(".words2 .word-2"))
      , S = e(r.find(".words2 .word-3"));
    e(r.find(".words2 .word-4"));
    init_tl = new TimelineMx({
      id: "initial",
      onComplete: function() {
        //tl.play()
        console.log('oncompelte')
      }
    }),
      tl = new TimelineMax({
        paused: !0,
        repeat: -1,
        id: "normal",
        onComplete: function() {}
      });
    var E = "Power1.easeInOut"
      , C = "Power3.easeOut";
    init_tl.addLabel("initial")
      .set((".home-slide--intro .desktop h1"), {
      opacity: 1
    }, "initial")
      .set(o, {
      opacity: 0,
      y: "20px"
    }, "initial")
      .fromTo(r, 1, {
      opacity: 0,
      y: "20px"
    }, {
      opacity: 1,
      y: "0",
      ease: E
    }, "initial")
      .staggerTo(o, 1.2, {
      ease: C,
      y: "0",
      opacity: 1
    }, .04, "initial+=0.3")
      .addLabel("show-letters-creative", "initial")
      .addLabel("show-creative-e1", "show-letters-creative")
      .addLabel("show-creative-t", "show-letters-creative+=0.2")
      .addLabel("show-creative-e2", "show-letters-creative+=0.4")
      .addLabel("show-creative-c", "show-letters-creative+=0.7")
      .addLabel("show-creative-i", "show-letters-creative+=0.9")
      .addLabel("show-creative-r", "show-letters-creative+=1.1")
      .addLabel("show-creative-a", "show-letters-creative+=1.3")
      .addLabel("show-creative-v", "show-letters-creative+=1.5")
      //.set($(".creative"), {visibility: "visible"}, "show-letters-creative")
      .fromTo($(".creative--c"),
      .5,
      {
      opacity: 0,
      y: "20px"
    }, {
      opacity: 1,
      y: "0px",
      ease: Power1.easeOut
    }, "show-creative-c").fromTo($(".creative--r"), .5, {
      opacity: 0,
      y: "20px"
    }, {
      opacity: 1,
      y: "0px",
      ease: Power1.easeOut
    }, "show-creative-r").from(".creative--r .linea_r", .5, {
      drawSVG: "100% 100%",
      y: 0,
      ease: Power3.easeOut
    }, "show-creative-r+=0.5").to(".creative--r .linea_r", 1, {
      drawSVG: "100%",
      y: 0,
      ease: Power3.easeOut
    }, "show-creative-r+=1.6").fromTo($(".creative--e1"), .5, {
      opacity: 0,
      y: "20px"
    }, {
      opacity: 1,
      y: "0px",
      ease: Power1.easeOut
    }, "show-creative-e1").from(".creative--e1 .linea_e1_1, .creative--e1 .linea_e1_3", .5, {
      x: "50",
      drawSVG: "0%",
      ease: Power3.easeOut
    }, "show-creative-e1+=0.5").to(".creative--e1 .linea_e1_1, .creative--e1 .linea_e1_3", .5, {
      drawSVG: "0% 0%",
      ease: Power3.easeOut
    }, "show-creative-e1+=1").from(".creative--e1 .linea_e1_2", .5, {
      x: "-50",
      drawSVG: "0%",
      ease: Power3.easeOut
    }, "show-creative-e1+=0.5").to(".creative--e1 .linea_e1_2", .5, {
      drawSVG: "0% 0%",
      ease: Power3.easeOut
    }, "show-creative-e1+=1").from(".creative--e1 .linea_e1_1_1, .creative--e1 .linea_e1_2_1, .creative--e1 .linea_e1_3_1", .5, {
      drawSVG: "0%",
      ease: Power3.easeOut
    }, "show-creative-e1+=1.5").fromTo($(".creative--a"), .5, {
      opacity: 0,
      y: "20px"
    }, {
      opacity: 1,
      y: "0px",
      ease: Power1.easeOut
    }, "show-creative-a").fromTo($(".creative--t"), .5, {
      opacity: 0,
      y: "20px"
    }, {
      opacity: 1,
      y: "0px",
      ease: Power1.easeOut
    }, "show-creative-t").from(".creative--t .linea_t", .5, {
      x: "100%",
      drawSVG: "0%",
      ease: Power3.easeOut
    }, "show-creative-t+=0.5").to(".creative--t .linea_t", .5, {
      drawSVG: "100% 100%",
      ease: Power3.easeOut
    }, "show-creative-t+=0.8").from(".creative--t .linea_t2", .5, {
      drawSVG: "0%",
      ease: Power3.easeOut
    }, "show-creative-t+=1.4").fromTo($(".creative--i"), .5, {
      opacity: 0,
      y: "20px"
    }, {
      opacity: 1,
      y: "0px",
      ease: Power1.easeOut
    }, "show-creative-i").from(".creative--i .linea_i", .5, {
      y: "-50",
      drawSVG: "0%",
      ease: Power3.easeOut
    }, "show-creative-i+=0.5").to(".creative--i .linea_i", .5, {
      y: "0",
      drawSVG: "100%",
      ease: Power3.easeOut
    }, "show-creative-i+=1.5").fromTo($(".creative--v"), .5, {
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
      drawSVG: "0% 0%"
    }, "show-creative-e2+=0.5").to(".creative--e2 .linea_e2", .5, {
      y: "30",
      drawSVG: "100% 100%",
      ease: Power3.easeOut
    }, "show-creative-e2+=1").from(".creative--e2 .linea_e2_2", .5, {
      y: "-30",
      drawSVG: "0% 0%"
    }, "show-creative-e2+=0.5"),
      tl.to(r.find(".words2 .word-1"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }).to(r.find(".words2"), .4, {
        width: T + "px"
      }).set(r.find(".words2 .word-2"), {
        display: "block",
        opacity: 0,
        y: "10px"
      }).to(r.find(".words2 .word-2"), 1, {
        ease: C,
        y: "0",
        opacity: 1
      }).to(i.find(".words2 .word-1"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "+=1")
        .addLabel("hide-letters-creative")
        .addLabel("show-letters-digital")
        .set(i.find(".words2"),
          {
        width: p + "px"
      }).set(i.find(".words2 .word-2"), {
        display: "block"
      }).set(m, {
        opacity: 0,
        y: "10px"
      }).staggerTo(m, 1.2, {
        ease: C,
        y: "0",
        opacity: 1
      }, .05).addLabel("h1_experiences-showed").to(r.find(".words1 .word-1"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h1_experiences-showed+=1").to(r.find(".words1"), .4, {
        width: _ + "px"
      }, "h1_experiences-showed+=1.5").set(r.find(".words1 .word-2"), {
        display: "block",
        opacity: 0,
        y: "10px"
      }, "h1_experiences-showed+=1.9").to(r.find(".words1 .word-2"), 1, {
        ease: C,
        y: "0",
        opacity: 1
      }, "h1_experiences-showed+=1.9").addLabel("h2_ux_design_showed").addLabel("h1_hide_experiences", "h2_ux_design_showed+=1").to(i.find(".words2 .word-2"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h1_hide_experiences").set(i.find(".words2"), {
        width: v + "px"
      }, "h1_hide_experiences+=0.5").set(i.find(".words2 .word-3"), {
        display: "block"
      }, "h1_hide_experiences+=0.5").set(g, {
        opacity: 0,
        y: "20px"
      }, "h1_hide_experiences+=0.5").staggerTo(g, 1.2, {
        ease: C,
        y: "0",
        opacity: 1
      }, .05, "h1_hide_experiences+=0.5").addLabel("h1_things_showed").addLabel("h2_hide_ux_design", "h1_things_showed+=1").addLabel("hide-letters-digital", "h2_hide_ux_design").addLabel("show-letters-service", "h2_hide_ux_design+=0.5").to(r.find(".words1 .word-2"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h2_hide_ux_design").to(r.find(".words1"), .4, {
        width: w + "px"
      }, "h2_hide_ux_design+=0.5").set(r.find(".words1 .word-3"), {
        display: "block",
        opacity: 0,
        y: "10px"
      }, "h2_hide_ux_design+=0.9").to(r.find(".words1 .word-3"), 1, {
        ease: C,
        y: "0",
        opacity: 1
      }, "h2_hide_ux_design+=0.9").addLabel("h2_creative_showed").addLabel("h2_hide_agency", "h2_creative_showed+=1").to(r.find(".words2 .word-2"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h2_hide_agency").to(r.find(".words2"), .4, {
        width: S + "px"
      }, "h2_hide_agency+=0.5").set(r.find(".words2 .word-3"), {
        display: "block",
        opacity: 0,
        y: "10px"
      }, "h2_hide_agency+=0.9").to(r.find(".words2 .word-3"), 1, {
        ease: C,
        y: "0",
        opacity: 1
      }, "h2_hide_agency+=0.9").addLabel("h2_team_showed").addLabel("h1_hide_digital", "h2_team_showed+=1").to(i.find(".words1 .word-1"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h1_hide_digital").to(i.find(".words1"), .4, {
        width: l + "px"
      }, "h1_hide_digital+=0.5").set(i.find(".words1 .word-2"), {
        display: "block"
      }, "h1_hide_digital+=0.9").set(c, {
        opacity: 0,
        y: "20px"
      }, "h1_hide_digital+=0.9").staggerTo(c, 1.2, {
        ease: C,
        y: "0",
        opacity: 1
      }, .05, "h1_hide_digital+=0.9").addLabel("h1_internet_showed").addLabel("h2_hide_creative", "h1_internet_showed+=1").to(r.find(".words1 .word-3"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h2_hide_creative").addLabel("hide-letters-service", "h2_hide_creative").addLabel("show-letters-design", "h2_hide_creative+=0.4").to(r.find(".words1"), .4, {
        width: b + "px"
      }, "h2_hide_creative+=0.5").set(r.find(".words1 .word-4"), {
        display: "block",
        opacity: 0,
        y: "10px"
      }, "h2_hide_creative+=0.9").to(r.find(".words1 .word-4"), 1, {
        ease: C,
        y: "0",
        opacity: 1
      }, "h2_hide_creative+=0.9").addLabel("h2_global_showed").addLabel("h1_hide_internet", "h2_global_showed+=1").to(i.find(".words1 .word-2"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h1_hide_internet").to(i.find(".words1"), .4, {
        width: u + "px"
      }, "h1_hide_internet+=0.5").set(i.find(".words1 .word-3"), {
        display: "block"
      }, "h1_hide_internet+=0.9").set(d, {
        opacity: 0,
        y: "20px"
      }, "h1_hide_internet+=0.9").staggerTo(d, 1.2, {
        ease: C,
        y: "0",
        opacity: 1
      }, .05, "h1_hide_internet+=0.9").addLabel("h2_sense_of_showed").addLabel("h2_hide_team", "h2_sense_of_showed+=1").to(r.find(".words1 .word-4"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h2_hide_team").to(r.find(".words2 .word-3"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h2_hide_team").to(r.find(".words1"), .4, {
        width: y + "px"
      }, "h2_hide_team+=0.5").set(r.find(".words1 .word-1"), {
        display: "block",
        opacity: 0,
        y: "10px"
      }, "h2_hide_team+=0.9").to(r.find(".words1 .word-1"), 1, {
        ease: C,
        y: "0",
        opacity: 1
      }, "h2_hide_team+=0.9").to(r.find(".words2"), .4, {
        width: x + "px"
      }, "h2_hide_team+=0.5").set(r.find(".words2 .word-1"), {
        display: "block",
        opacity: 0,
        y: "10px"
      }, "h2_hide_team+=0.9").to(r.find(".words2 .word-1"), 1, {
        ease: C,
        y: "0",
        opacity: 1
      }, "h2_hide_team+=0.9").addLabel("h2_digital_studio_showed").addLabel("h1_show_products", "h2_digital_studio_showed+=1").addLabel("hide-letters-design", "h1_show_products").addLabel("show-letters-creative2", "h1_show_products+=0.4").to(i.find(".words1 .word-3"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h1_show_products").to(i.find(".words2 .word-3"), .5, {
        opacity: 0,
        y: "-10px",
        ease: E
      }, "h1_show_products").to(i.find(".words1"), .4, {
        width: s + "px"
      }, "h1_show_products+=0.5").set(i.find(".words1 .word-1"), {
        display: "block",
        y: "0",
        opacity: 1
      }, "h1_show_products+=0.9").set(a, {
        opacity: 0,
        y: "20px"
      }, "h1_show_products+=0.4").staggerTo(a, 1.2, {
        ease: C,
        y: "0",
        opacity: 1
      }, .05, "h1_show_products+=0.9").set(i.find(".words2"), {
        width: f + "px"
      }, "h1_show_products+=0.5").set(i.find(".words2 .word-1"), {
        display: "block",
        y: "0",
        opacity: 1
      }, "h1_show_products+=0.9").set(h, {
        opacity: 0,
        y: "20px"
      }, "h1_show_products+=0.9").staggerTo(h, 1.2, {
        ease: C,
        y: "0",
        opacity: 1
      }, .05, "h1_show_products+=0.9").addLabel("h1_products_repeat_showed").staggerTo(".creative", .5, {
        opacity: 0,
        ease: Power1.easeOut
      }, 0, "hide-letters-creative").staggerTo(".creative .linea", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, 0, "hide-letters-creative").set($(".digital"), {
        visibility: "visible"
      }, "show-letters-digital").addLabel("show-digital-t", "show-letters-digital").addLabel("show-digital-d", "show-letters-digital+=0.2").addLabel("show-digital-g", "show-letters-digital+=0.5").addLabel("show-digital-l", "show-letters-digital+=0.8").addLabel("show-digital-i1", "show-letters-digital+=0.9").addLabel("show-digital-a", "show-letters-digital+=1.2").addLabel("show-digital-i2", "show-letters-digital+=1.5").fromTo($(".digital--d"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-digital-d").from(".digital--d .line2_d", .5, {
        drawSVG: "100% 100%",
        y: 20,
        delay: 2.4,
        ease: Power3.easeOut
      }, "show-digital-d").to(".digital--d .line2_d", 1, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-digital-d+=0.4").to(".digital--d .line2_d", 1, {
        drawSVG: "100%",
        y: 0,
        ease: Power3.easeOut
      }, "show-digital-d+=1.1").fromTo($(".digital--i1"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-digital-i1").from(".digital--i1 .line2_i", .5, {
        x: "100%",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-digital-i1+=0.5").to(".digital--i1 .linea2_i", .5, {
        drawSVG: "100% 100%",
        ease: Power3.easeOut
      }, "show-digital1-i+=0.8").from(".digital--i1 .line2_i2", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-digital-i1+=1.4").fromTo($(".digital--g"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-digital-g").from(".digital--g .line2_g", .5, {
        x: "100%",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-digital-g+=0.5").to(".digital--g .line2_g", .5, {
        drawSVG: "100% 100%",
        ease: Power3.easeOut
      }, "show-digital-g+=0.8").to(".digital--g .line2_g", .5, {
        drawSVG: "0% 100%",
        ease: Power3.easeOut
      }, "show-digital-g+=1.2").fromTo($(".digital--i2"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-digital-i2").from(".digital--i2 .line2_i2_2", .5, {
        y: "30",
        drawSVG: "100% 100%"
      }, "show-digital-i2+=0.5").to(".digital--i2 .line2_i2_2", .5, {
        y: "-30",
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-digital-i2+=1").from(".digital--i2 .line2_i2_1", .5, {
        y: "30",
        drawSVG: "100% 100%"
      }, "show-digital-i2+=0.5").fromTo($(".digital--t"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-digital-t").from(".digital--t .line2_t", .5, {
        x: "-50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-digital-t+=0.5").to(".digital--t .line2_t", .5, {
        x: "0",
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-digital-t+=0.9").to(".digital--t .line2_t", .5, {
        x: "0",
        drawSVG: "100%",
        ease: Power3.easeOut
      }, "show-digital-t+=1.5").fromTo($(".digital--a"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-digital-a").fromTo($(".digital--l"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-digital-l").from(".digital--l .line2_l", .5, {
        x: "100%",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-digital-l+=0.5").to(".digital--l .line2_l", .5, {
        drawSVG: "100% 100%",
        ease: Power3.easeOut
      }, "show-digital-l+=0.8").from(".digital--l .line2_l2", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-digital-l+=1.4").staggerTo(".digital", .5, {
        opacity: 0,
        ease: Power1.easeOut
      }, .2, "hide-letters-digital").staggerTo(".digital .linea", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, .2, "hide-letters-digital").set($(".service"), {
        visibility: "visible"
      }, "show-letters-service").addLabel("show-service-s", "show-letters-service").addLabel("show-service-i", "show-letters-service+=0.2").addLabel("show-service-r", "show-letters-service+=0.5").addLabel("show-service-e2", "show-letters-service+=0.8").addLabel("show-service-v", "show-letters-service+=0.9").addLabel("show-service-c", "show-letters-service+=1.2").addLabel("show-service-e1", "show-letters-service+=1.5").fromTo($(".service--s"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-service-s").fromTo($(".service--e1"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-service-e1").from(".service--e1 .linea_e1_1, .service--e1 .linea_e1_3", .5, {
        x: "50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-service-e1+=0.5").to(".service--e1 .linea_e1_1, .service--e1 .linea_e1_3", .5, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-service-e1+=1").from(".service--e1 .linea_e1_2", .5, {
        x: "-50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-service-e1+=0.5").to(".service--e1 .linea_e1_2", .5, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-service-e1+=1").from(".service--e1 .linea_e1_1_1, .service--e1 .linea_e1_2_1, .service--e1 .linea_e1_3_1", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-service-e1+=1.5").fromTo($(".service--r"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-service-r").from(".service--r .linea_r", .5, {
        drawSVG: "100% 100%",
        y: 20,
        ease: Power3.easeOut
      }, "show-service-r+=0.5").to(".service--r .linea_r", 1, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-service-r+=0.9").to(".service--r .linea_r", 1, {
        drawSVG: "100%",
        y: 0,
        ease: Power3.easeOut
      }, "show-service-r+=1.6").fromTo($(".service--v"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-service-v").fromTo($(".service--i"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-service-i").from(".service--i .line2_i2_2", .5, {
        y: "30",
        drawSVG: "100% 100%"
      }, "show-service-i+=0.5").to(".service--i .line2_i2_2", .5, {
        y: "-30",
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-service-i1+=1").from(".service--i .line2_i2_1", .5, {
        y: "30",
        drawSVG: "100% 100%"
      }, "show-service-i+=0.5").fromTo($(".service--c"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-service-c").from(".service--c .line3-c", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-service-c+=0.5").fromTo($(".service--e2"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-service-e2").from(".service--e2 .linea_e1_1, .service--e2 .linea_e1_3", .5, {
        x: "50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-service-e2+=0.5").to(".service--e2 .linea_e1_1, .service--e2 .linea_e1_3", .5, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-service-e2+=1").from(".service--e2 .linea_e1_2", .5, {
        x: "-50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-service-e2+=0.5").to(".service--e2 .linea_e1_2", .5, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-service-e2+=1").from(".service--e2 .linea_e1_1_1, .service--e2 .linea_e1_2_1, .service--e2 .linea_e1_3_1", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-service-e2+=1.5").staggerTo(".service", .5, {
        opacity: 0,
        ease: Power1.easeOut
      }, .2, "hide-letters-service").staggerTo(".service .linea", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, .2, "hide-letters-service").set($(".design"), {
        visibility: "visible"
      }, "show-letters-design").addLabel("show-design-d", "show-letters-design").addLabel("show-design-e", "show-letters-design+=0.2").addLabel("show-design-s", "show-letters-design+=0.5").addLabel("show-design-i", "show-letters-design+=0.8").addLabel("show-design-g", "show-letters-design+=0.9").addLabel("show-design-n", "show-letters-design+=1.2").fromTo($(".design--d"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-design-d").from(".design--d .line2_d", .5, {
        drawSVG: "100% 100%",
        y: 20,
        delay: 2.4,
        ease: Power3.easeOut
      }, "show-design-d").to(".design--d .line2_d", 1, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-design-d+=0.4").to(".design--d .line2_d", 1, {
        drawSVG: "100%",
        y: 0,
        ease: Power3.easeOut
      }, "show-design-d+=1.1").fromTo($(".design--e"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-design-e").from(".design--e .linea_e1_1, .design--e .linea_e1_3", .5, {
        x: "50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-design-e+=0.5").to(".design--e .linea_e1_1, .design--e .linea_e1_3", .5, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-design-e+=1").from(".design--e .linea_e1_2", .5, {
        x: "-50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-design-e+=0.5").to(".design--e .linea_e1_2", .5, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-design-e+=1").from(".design--e .linea_e1_1_1, .design--e .linea_e1_2_1, .design--e .linea_e1_3_1", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-design-e+=1.5").fromTo($(".design--s"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-design-s").fromTo($(".design--i"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-design-i").from(".design--i .linea_i", .5, {
        y: "-50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-design-i+=0.5").to(".design--i .linea_i", .5, {
        y: "0",
        drawSVG: "100%",
        ease: Power3.easeOut
      }, "show-design-i+=1.5").fromTo($(".design--g"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-design-g").from(".design--g .line2_g", .5, {
        x: "100%",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-design-g+=0.5").to(".design--g .line2_g", .5, {
        drawSVG: "100% 100%",
        ease: Power3.easeOut
      }, "show-design-g+=0.8").to(".design--g .line2_g", .5, {
        drawSVG: "0% 100%",
        ease: Power3.easeOut
      }, "show-design-g+=1.2").from(".design--n .line4_n1", .5, {
        y: "100",
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-design-n+=0.5").to(".design--n.line4_n1", .5, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-design-n+=0.9").to(".design--n.line4_n1", .5, {
        drawSVG: "0% 100%",
        ease: Power3.easeOut
      }, "show-design-n+=1.5").from(".design--n.line4_n2", .5, {
        y: "-100",
        drawSVG: "100% 100%",
        ease: Power3.easeOut
      }, "show-design-n+=0.7").to(".design--n.line4_n2", .5, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-design-n+=1.1").to(".design--n.line4_n2", .5, {
        drawSVG: "100% 00%",
        ease: Power3.easeOut
      }, "show-design-n+=1.5").staggerTo(".design .linea4", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, .2, "hide-letters-design").staggerTo(".design .letter4", .5, {
        opacity: 0,
        ease: Power1.easeOut
      }, .2, "hide-letters-design").set($(".creative2"), {
        visibility: "visible"
      }, "show-letters-creative2").addLabel("show-creative2-e1", "show-letters-creative2").addLabel("show-creative2-t", "show-letters-creative2+=0.2").addLabel("show-creative2-e2", "show-letters-creative2+=0.4").addLabel("show-creative2-c", "show-letters-creative2+=0.7").addLabel("show-creative2-i", "show-letters-creative2+=0.9").addLabel("show-creative2-r", "show-letters-creative2+=1.1").addLabel("show-creative2-a", "show-letters-creative2+=1.3").addLabel("show-creative2-v", "show-letters-creative2+=1.5").set($(".creative2"), {
        visibility: "visible"
      }, "show-letters-creative2").fromTo($(".creative2--c"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-creative2-c").fromTo($(".creative2--r"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-creative2-r").from(".creative2--r .linea_r", .5, {
        drawSVG: "100% 100%",
        y: 0,
        ease: Power3.easeOut
      }, "show-creative2-r+=0.5").to(".creative2--r .linea_r", 1, {
        drawSVG: "100%",
        y: 0,
        ease: Power3.easeOut
      }, "show-creative2-r+=1.6").fromTo($(".creative2--e1"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-creative2-e1").from(".creative2--e1 .linea_e1_1, .creative2--e1 .linea_e1_3", .5, {
        x: "50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-creative2-e1+=0.5").to(".creative2--e1 .linea_e1_1, .creative2--e1 .linea_e1_3", .5, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-creative2-e1+=1").from(".creative2--e1 .linea_e1_2", .5, {
        x: "-50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-creative2-e1+=0.5").to(".creative2--e1 .linea_e1_2", .5, {
        drawSVG: "0% 0%",
        ease: Power3.easeOut
      }, "show-creative2-e1+=1").from(".creative2--e1 .linea_e1_1_1, .creative2--e1 .linea_e1_2_1, .creative2--e1 .linea_e1_3_1", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-creative2-e1+=1.5").fromTo($(".creative2--a"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-creative2-a").fromTo($(".creative2--t"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-creative2-t").from(".creative2--t .linea_t", .5, {
        x: "100%",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-creative2-t+=0.5").to(".creative2--t .linea_t", .5, {
        drawSVG: "100% 100%",
        ease: Power3.easeOut
      }, "show-creative2-t+=0.8").from(".creative2--t .linea_t2", .5, {
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-creative2-t+=1.4").fromTo($(".creative2--i"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-creative2-i").from(".creative2--i .linea_i", .5, {
        y: "-50",
        drawSVG: "0%",
        ease: Power3.easeOut
      }, "show-creative2-i+=0.5").to(".creative2--i .linea_i", .5, {
        y: "0",
        drawSVG: "100%",
        ease: Power3.easeOut
      }, "show-creative2-i+=1.5").fromTo($(".creative2--v"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-creative2-v").fromTo($(".creative2--e2"), .5, {
        opacity: 0,
        y: "20px"
      }, {
        opacity: 1,
        y: "0px",
        ease: Power1.easeOut
      }, "show-creative2-e2").from(".creative2--e2 .linea_e2", .5, {
        y: "-30",
        drawSVG: "0% 0%"
      }, "show-creative2-e2+=0.5").to(".creative2--e2 .linea_e2", .5, {
        y: "30",
        drawSVG: "100% 100%",
        ease: Power3.easeOut
      }, "show-creative2-e2+=1").from(".creative2--e2 .linea_e2_2", .5, {
        y: "-30",
        drawSVG: "0% 0%"
      }, "show-creative2-e2+=0.5")
  }
  var k, P
}





function elementsManifesto() {
  (new TimelineMax).addLabel("initial", "+=0.2").addLabel("show-letter-f", "initial").addLabel("show-letter-t", "initial+=0.3").addLabel("show-letter-o", "initial+=0.5").addLabel("show-letter-e", "initial+=0.7").addLabel("show-letter-i", "initial+=0.8").addLabel("show-letter-m", "initial+=0.9").addLabel("show-letter-n", "initial+=1.1").addLabel("show-letter-s", "initial+=1.3").addLabel("show-letter-a", "initial+=1.4").to(".letter--m", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-m").to(".letter--a", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-a").to(".letter--n", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-n").from(".letter--n .line4_n1", .5, {
    y: "100",
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-n+=1").to(".letter--n .line4_n1", .5, {
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-n+=1.4").to(".letter--n .line4_n1", .5, {
    drawSVG: "0% 100%",
    ease: Power3.easeOut
  }, "show-letter-n+=2").from(".letter--n .line4_n2", .5, {
    y: "-100",
    drawSVG: "100% 100%",
    ease: Power3.easeOut
  }, "show-letter-n+=1.2").to(".letter--n .line4_n2", .5, {
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-n+=1.6").to(".letter--n .line4_n2", .5, {
    drawSVG: "100% 00%",
    ease: Power3.easeOut
  }, "show-letter-n+=2").to(".letter--i", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-i").from(".letter--i .linea_i", .5, {
    y: "-90",
    drawSVG: "100% 100%"
  }, "show-letter-i+=1").to(".letter--i .linea_i", .5, {
    y: "50",
    drawSVG: "100% 100%",
    ease: Power3.easeOut
  }, "show-letter-i+=1.5").from(".letter--i .linea_i_2", .5, {
    y: "-30",
    drawSVG: "0% 0%"
  }, "show-letter-i+=1").to(".letter--f", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-f").to(".letter--e", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-e").from(".letter--e .linea_e1, .letter--e .linea_e3", .5, {
    x: "100%",
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-e+=1").to(".letter--e .linea_e1, .letter--e .linea_e3", .5, {
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-e+=1.5").to(".letter--e .linea_e1, .letter--e .linea_e3", .5, {
    drawSVG: "0% 100%",
    ease: Power3.easeOut
  }, "show-letter-e+=2").from(".letter--e .linea_e2", .5, {
    x: "-100%",
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-e+=1").to(".letter--e .linea_e2", .5, {
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-e+=1.5").to(".letter--e .linea_e2", .5, {
    drawSVG: "0% 100%",
    ease: Power3.easeOut
  }, "show-letter-e+=2").to(".letter--s", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-s").to(".letter--t", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-t").from(".letter--t .linea_t", .5, {
    x: "100%",
    drawSVG: "0%",
    ease: Power3.easeOut
  }, "show-letter-t+=1").to(".letter--t .linea_t", .5, {
    drawSVG: "100% 100%",
    ease: Power3.easeOut
  }, "show-letter-t+=1.3").from(".letter--t .linea_t2", .5, {
    drawSVG: "0%",
    ease: Power3.easeOut
  }, "show-letter-t+=1.9").to(".letter--o", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-o").from(".letter--o .line-o", .5, {
    drawSVG: "0%",
    ease: Power3.easeOut
  }, "show-letter-t+=1")
}

function letterCarousel() {
  var e = $(".about__phrase > div")
    , t = $(window).height();
  isMobile.any ? $(window).on("scroll", function() {
    if ($(".about__phrase").length) {
      var t = $(document).scrollTop() + $(window).height()
        , n = $(".about__phrase").offset().top;
      if (n <= t) {
        var i = $(document).scrollTop() - n + $(window).height();
        e.css({
          transform: "translateX(-" + i + "px)"
        })
      }
    }
  }) : scrollbar.addListener(function(n) {
    var i = e.offset().top;
    if (i <= t) {
      var r = t - i;
      e.css({
        transform: "translateX(-" + r + "px)"
      })
    }
  })
}


function elementsAbout() {
  (new TimelineMax).addLabel("initial", "+=0.2").addLabel("show-letter-u", "initial").addLabel("show-letter-b", "initial+=0.3").addLabel("show-letter-t", "initial+=0.5").addLabel("show-letter-o", "initial+=0.7").addLabel("show-letter-a", "initial+=0.8").to(".letter--a", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-a").to(".letter--b", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-b").from(".letter--b .linea_b", .5, {
    drawSVG: "100% 100%",
    y: 20,
    ease: Power3.easeOut
  }, "show-letter-b+=1").to(".letter--b .linea_b", 1, {
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-b+=1.4").to(".letter--b .linea_b", 1, {
    drawSVG: "100%",
    y: 0,
    ease: Power3.easeOut
  }, "show-letter-b+=1.8").to(".letter--o", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-o").from(".letter--o .line-o", .5, {
    drawSVG: "0%",
    ease: Power3.easeOut
  }, "show-letter-t+=1").to(".letter--u", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-u").from(".letter--u .line_u", .5, {
    y: "100",
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-u+=1").to(".letter--u .line_u", .5, {
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-u+=1.4").to(".letter--u .line_u", .5, {
    drawSVG: "0% 100%",
    ease: Power3.easeOut
  }, "show-letter-u+=2").from(".letter--u .line_u2", .5, {
    y: "-100",
    drawSVG: "100% 100%",
    ease: Power3.easeOut
  }, "show-letter-u+=1.2").to(".letter--u .line_u2", .5, {
    drawSVG: "0% 0%",
    ease: Power3.easeOut
  }, "show-letter-u+=1.6").to(".letter--u .line_u2", .5, {
    drawSVG: "100% 00%",
    ease: Power3.easeOut
  }, "show-letter-u+=2").to(".letter--t", .5, {
    y: "0px",
    opacity: 1
  }, "show-letter-t").from(".letter--t .linea_t", .5, {
    x: "100%",
    drawSVG: "0%",
    ease: Power3.easeOut
  }, "show-letter-t+=1").to(".letter--t.linea_t", .5, {
    drawSVG: "100% 100%",
    ease: Power3.easeOut
  }, "show-letter-t+=1.3").from(".letter--t.linea_t2", .5, {
    drawSVG: "0%",
    ease: Power3.easeOut
  }, "show-letter-t+=1.9")
}


function imageCarousel() {
  if ($(".about__carousel").length) {
    var e = function e() {
      i.x -= .5,
        i.settle(i.x),
        n = window.requestAnimationFrame(e)
    }
      , t = $(".about__carousel")
      , n = void 0
      , i = new Flickity(".about__carousel",{
      accessibility: !0,
      resize: !0,
      cellAlign: "left",
      wrapAround: !0,
      prevNextButtons: !1,
      pageDots: !1,
      percentPosition: !0,
      setGallerySize: !0,
      freeScroll: !0,
      touchVerticalScroll: !1
    });
    i.x = 0;
    var r = t.offset().top;
    isMobile.any ? ($(window).on("scroll", function() {
      var e = $(document).scrollTop() + .8 * $(window).height();
      r <= e && (t.hasClass("is-visible") || t.addClass("is-visible"))
    }),
      t.on("dragStart.flickity", function() {
        return document.ontouchmove = function(e) {
          return e.preventDefault()
        }
      }),
      t.on("dragEnd.flickity", function() {
        return document.ontouchmove = function() {
          return !0
        }
      })) : (scrollbar.addListener(function(n) {
      r <= 1 * $(window).height() && (t.hasClass("is-visible") || (t.addClass("is-visible"),
        e()))
    }),
      t.on("mouseenter focusin", function(e) {
        n && (window.cancelAnimationFrame(n),
          n = void 0)
      }),
      t.on("dragStart.flickity", function(e) {}),
      t.on("dragEnd.flickity", function(e) {}),
      t.on("mouseleave", function(t) {
        e()
      }))
  }
}



function scrollHomeMobile() {
  var e = function() {
    isMobile.any && ("home" == $(".app-container").data("namespace") ? $(window).width() <= 768 ? $("body").css({
      overflow: "auto",
      position: ""
    }) : $("body").css({
      overflow: "hidden",
      position: "fixed"
    }) : $("body").css({
      overflow: "auto",
      position: ""
    }))
  };
  e(),
    $(window).resize(e)
}

function links() {
  $("a").off("click"),
    $("a").click(function(e) {
      var t = $(this);
      if (void 0 !== t.data("section")) {
        var n = t.data("section");
        t.hasClass("is-current") ? (e.preventDefault(),
          e.stopPropagation(),
        t.closest(".logo").length || t.closest("logo--mobile").length || (console.log("a"),
          closeNav())) : ($(".is-current").removeClass("is-current"),
          0 == n ? $(".logo a, .logo--mobile a").addClass("is-current") : $(".nav__primary li:nth-child(" + t.data("section") + ") a").addClass("is-current"))
      } else
        $(".is-current").removeClass("is-current")
    })
}

_____

document.addEventListener("DOMContentLoaded", function() {
  var e;
  Barba.Pjax.Dom.wrapperId = "app",
    Barba.Pjax.Dom.containerClass = "app-container",
    Barba.Pjax.init(),
    Barba.Prefetch.init();
  var t = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this))
    },
    fadeOut: function() {
      return $(this.oldContainer).promise()
    },
    fadeIn: function() {
      var e = this
        , t = $(this.newContainer)
        , n = "Power3.easeInOut"
        , i = "Power2.easeInOut"
        , r = new TimelineMax({
        onComplete: function() {
          t.attr("style", ""),
            $(".overlay").attr("style", ""),
            $(".scrollable").attr("style", ""),
            window.resetNav(),
            e.done()
        }
      });
      $(".overlay").css({
        display: "block"
      }),
        $(".scrollable").css({
          overflow: "hidden"
        }),
        $(".toggle").removeClass("is-open"),
        $("html").hasClass("clippath") ? r.set(t, {
          visibility: "visible",
          position: "fixed",
          top: "0px",
          left: "0px",
          width: "100%",
          y: "0",
          webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          zIndex: "20"
        }) : r.set(t, {
          visibility: "visible",
          position: "fixed",
          top: "0px",
          left: "0px",
          width: "100%",
          y: "0",
          opacity: 0,
          zIndex: "20"
        }),
        r.addLabel("initial"),
        r.to($(".overlay"), 1.7, {
          opacity: 1,
          force3D: !0,
          ease: i,
          onComplete: function() {
            o(t.data("namespace"))
          }
        }, "initial");
      r.to($(this.oldContainer), 1.7, {
        y: "-40vh",
        force3D: !0,
        ease: i
      }, "initial"),
        $("html").hasClass("clippath") ? r.to(t, 1.5, {
          y: "0",
          webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: n,
          force3D: !0
        }, "initial") : r.to(t, 1.5, {
          y: "0",
          opacity: 1,
          ease: n,
          force3D: !0
        }, "initial+=" + 1.7 / 3)
    }
  })
    , n = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([this.newContainerLoading, this.showOverlay()]).then(this.fadeIn.bind(this))
    },
    showOverlay: function() {
      return new Promise(function(e) {
          $(".overlay").css({
            opacity: 1,
            "z-index": 1e3,
            background: "white",
            display: "block",
            "transform-origin": "center bottom",
            transform: "scale(1, 0)"
          }),
            i.TweenMax.to($(".overlay"), 1.5, {
              scaleY: 1,
              ease: "Power3.easeInOut",
              onComplete: function() {
                e()
              }
            })
        }
      )
    },
    fadeIn: function() {
      var e = this
        , t = $(this.newContainer)
        , n = new TimelineMax({
        onComplete: function() {
          $(".overlay").attr("style", ""),
            window.resetNav(),
            e.done()
        }
      });
      $(this.oldContainer).hide(),
        o(t.data("namespace")),
        t.css({
          visibility: "visible"
        }),
        $("html, body").scrollTop(0),
        $(".toggle").removeClass("is-open"),
        $(".overlay").css({
          "transform-origin": "center top"
        }),
        n.to($(".overlay"), 1.5, {
          scaleY: 0,
          force3D: !0,
          ease: "Power3.easeInOut"
        })
    }
  })
    , r = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this))
    },
    fadeOut: function() {
      return $(this.oldContainer).hide().promise()
    },
    fadeIn: function() {
      var e = this
        , t = $(this.newContainer)
        , n = $(".nav__bg")
        , r = $(".nav__primary")
        , s = $(".nav__secondary");
      t.css({
        visibility: "visible"
      }),
        $(".toggle").removeClass("is-open"),
      $(window).width() <= 768 && $("body").css({
        overflow: "auto"
      });
      var a = new TimelineMax({
        onComplete: function() {
          $(".scrollable").attr("style", ""),
            t.attr("style", ""),
            o(t.data("namespace")),
            window.resetNav(),
            e.done(),
            $("body, html").stop().scrollTop(0)
        }
      });
      a.addLabel("initial"),
        a.to(s, .6, {
          opacity: 0
        }),
        a.staggerTo(r.find("li"), .5, {
          opacity: 0,
          y: "-30px",
          ease: i.Power3.easeIn
        }, .1, "initial"),
        a.addLabel("finish"),
        a.to(n, .7, {
          scaleY: 0,
          ease: i.Power3.easeInOut,
          onComplete: window.resetNav
        }, "finish-=0.2"),
      $("html").hasClass("clippath") && a.fromTo($(".nav"), .7, {
        webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      }, {
        webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: i.Power3.easeInOut
      }, "finish-=0.2")
    }
  });
  function o(e) {
    $("body").removeClass().addClass(e)
  }
  Barba.Pjax.getTransition = function() {
    return $(e).closest(".nav").length ? r : isMobile.any ? n : t
  }
    ,
    Barba.Dispatcher.on("linkClicked", function(t) {
      e = t
    }),
    Barba.Dispatcher.on("newPageReady", function(e, t, n, i) {
      console.log("newPageReady"),
      "work-detail" == $(n).data("namespace") && window.moduleHeader()
    }),
    Barba.Dispatcher.on("transitionCompleted", function(e) {
      console.log("transitionCompleted"),
        $("body").css({
          background: "",
          color: ""
        }).scrollTop(0),
        $(".toggle >div >div").attr("style", ""),
        $(".logo-g").attr("style", ""),
        $(".fill, .stroke").attr("style", ""),
        window.initAll()
    })
})
},
