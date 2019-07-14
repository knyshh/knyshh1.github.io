function homeSlides() {
  var e, t, n, i = $(".home-slide--intro"),
    r = $(".home-slides"),
    o = $(".home-slides").find(".home-slide").length,
    s = $(".home-slides").find(".pagination"),
    a = $(".home-slide--end"),
    l = .5,
    c = .7,
    u = 1,
    d = .7, f = .7, h = .9, p = .5, m = 1, v = .9,
    g = "Power1.easeInOut",
    y = "Power1.easeInOut",
    w = "Power4.easeOut", b = "Power4.easeIn", x = "Power4.easeInOut", T = "Power4.easeInOut",
    S = "Power3.easeOut", E = "Power4.easeOut", C = "Power4.easeIn",
    k = .3, P = 70, A = 40, O = 10, L = !0,
    D = r.find(".home-slide:first-child").data("x"),
    N = r.find(".home-slide:first-child").data("y"),
    M = r.find(".home-slide:first-child").data("rotation"),
    I = r.find(".home-slide:first-child").data("color");

  s.find(".pagination__number--last").text(("0" + o).slice(-2) + "."),
    F(1),
    $(".home-shape svg >g >g").css({
      fill: I
    });
  var j = function() {
    isMobile.any && $(window).width() > 768 ? ($(".home").on("swipedown", function(e) {
      if (!L)
        return e.preventDefault(),
          !1;
      L = !1,
        H()
    }),
      $(".home").on("swipeup", function(e) {
        if (!L)
          return e.preventDefault(),
            !1;
        L = !1,
          z()
      })) : $(window).width() > 768 ? $(window).on("mousewheel DOMMouseScroll", function(e) {
      if ("home" == $(".app-container").data("namespace")) {
        if (!L)
          return e.preventDefault(),
            !1;
        L = !1;
        var t = e.deltaY || -e.wheelDelta || e.detail
          , n = t && (t >> 10 || 1) || 0;
        n > 0 ? H() : n < 0 && z()
      }
    }) : $(window).off("mousewheel DOMMouseScroll")
  };
  function R() {
    L = !0,
      console.log("You can scroll now")
  }
  function F(e) {
    var t = e / o;
    TweenMax.to(s.find(".pagination__bar"), .6, {
      scaleY: t,
      ease: g
    }),
      s.find(".pagination__number--first").text(("0" + e).slice(-2) + ".")
  }
  function z() {
    $(".home-slide--intro").hasClass("is-active") ? (TweenMax.to($(".main"), .7, {
      y: "-100vh",
      ease: g,
      onComplete: V
    }),
      $(".home-slide--intro").removeClass("is-active")) :
      ($(".home-slide--intro") = $(".home-slides").find(".home-slide.is-active"),
      (t = e.next(".home-slide")).length > 0 ? (F(t.index() + 1),
        function() {
          var n = new TimelineLite({
            onComplete: function() {
              e.find(".home-slide__title").css({
                opacity: "",
                transform: ""
              }),
                R()
            }
          });
          n.addLabel("initial"),
            n.set($(".home-shape"), {
              opacity: 1
            }),
            e.find(".home-slide__title h3").each(function() {
              var t = new SplitText($(this),{
                type: "lines"
              });
              n.staggerFrom(t.lines, d, {
                y: 0,
                opacity: 1,
                ease: b
              }, .1, "initial"),
                n.staggerTo(t.lines, d, {
                  y: -A + "px",
                  opacity: 0,
                  ease: b
                }, .1, "initial", function() {
                  e.find(".home-slide__title").css({
                    opacity: 0
                  }),
                    t.revert()
                })
            }),
            n.to(e.find(".home-slide__subtitle"), c, {
              opacity: 0,
              y: -A + "px",
              ease: g
            }, "initial"),
            $("html").hasClass("clippath") ? n.to(e.find(".home-slide__left-mask"), h, {
              webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              ease: x,
              force3D: !1
            }, "initial") : n.fromTo(e.find(".home-slide__left-mask"), h, {
              opacity: 1
            }, {
              opacity: 0,
              ease: x,
              force3D: !1
            }, "initial");
          n.to(e.find(".home-slide__bg-image"), p, {
            y: -P + "px",
            ease: C,
            force3D: !1
          }, "initial"),
            n.set(e, {
              className: "-=is-active"
            }).set(t, {
              className: "+=is-active"
            }),
            n.addLabel("next"),
            n.to($(".home-shape svg"), v + h, {
              rotation: t.data("rotation"),
              x: t.data("x") + "%",
              y: t.data("y") + "%",
              ease: g,
              force3D: !1
            }, "initial"),
            n.to($(".home-slide__big-shape"), v + h, {
              rotation: t.data("rotation"),
              x: t.data("x") + "%",
              y: t.data("y") + "%",
              ease: g,
              force3D: !1
            }, "initial"),
            n.set($(".home-shape svg >g >g"), {
              fill: e.data("color")
            }, "initial"),
            $("html").hasClass("clippath") ? t.find(".home-slide__title h3").each(function() {
              var e = new SplitText($(this),{
                type: "lines"
              });
              n.staggerFrom(e.lines, u, {
                y: A + "px",
                opacity: 0,
                ease: w
              }, .1, "next"),
                n.staggerTo(e.lines, u, {
                  y: 0,
                  opacity: 1,
                  ease: w
                }, .1, "next", function() {
                  e.revert()
                })
            }) : n.fromTo(t.find(".home-slide__title"), u, {
              opacity: 0,
              y: A + "px"
            }, {
              y: 0,
              opacity: 1,
              ease: g
            }, "next");
          n.fromTo(t.find(".home-slide__subtitle"), f, {
            opacity: 0,
            y: O + "px"
          }, {
            y: 0,
            opacity: 1,
            ease: S
          }, "next"),
            $("html").hasClass("clippath") ? n.fromTo(t.find(".home-slide__left-mask"), h, {
              webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
            }, {
              webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: T,
              force3D: !1
            }, "next") : n.fromTo(t.find(".home-slide__left-mask"), h, {
              opacity: 0
            }, {
              opacity: 1,
              ease: T,
              force3D: !1
            }, "next");
          n.fromTo(t.find(".home-slide__bg-image"), m, {
            y: P + "px"
          }, {
            y: 0,
            ease: E,
            force3D: !1
          }, "next+=" + k)
        }()) :

        a.hasClass("is-active") ? R() : function() {
        var t = new TimelineMax({
          onComplete: function() {
            e.find(".home-slide__title").css({
              opacity: "",
              transform: ""
            }),
              R()
          }
        });
        console.log("show last slide"),
          $(".logo").addClass("logo--white"),
          $(".say-hello").addClass("say-hello--white"),
          $(".toggle").addClass("toggle--white"),
          a.css({
            display: "block"
          }),
          t.addLabel("initial"),
          e.find(".home-slide__title h3").each(function() {
            var n = new SplitText($(this),{
              type: "lines"
            });
            t.staggerFrom(n.lines, d, {
              y: 0,
              opacity: 1,
              ease: b
            }, .1, "initial"),
              t.staggerTo(n.lines, d, {
                y: -A + "px",
                opacity: 0,
                ease: b
              }, .1, "initial", function() {
                e.find(".home-slide__title").css({
                  opacity: 0
                }),
                  n.revert()
              })
          }),
          t.to(e.find(".home-slide__subtitle"), c, {
            opacity: 0,
            y: -A + "px",
            ease: g
          }, "initial"),
          $("html").hasClass("clippath") ? t.to(e.find(".home-slide__left-mask"), h, {
            webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            ease: x,
            force3D: !1
          }, "initial") : t.fromTo(e.find(".home-slide__left-mask"), h, {
            opacity: 0,
            ease: x,
            force3D: !1
          }, "initial");
        t.to(e.find(".home-slide__bg-image"), p, {
          y: -P + "px",
          ease: C,
          force3D: !1
        }, "initial"),
          t.to($(".home-shape svg"), v + .3, {
            rotation: e.data("rotation") + 50,
            x: e.data("x") + "%",
            y: e.data("y") + "%",
            ease: g,
            force3D: !1
          }, "initial"),
          t.to($(".home-slide__big-shape"), v + .3, {
            rotation: e.data("rotation") + 50,
            x: e.data("x") + "%",
            y: e.data("y") + "%",
            ease: g,
            force3D: !1
          }, "initial"),
          t.set($(".home-shape svg >g >g"), {
            fill: e.data("color")
          }, "initial"),
          $("html").hasClass("clippath") ? t.fromTo(a, h, {
            webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
          }, {
            webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: T
          }, "initial+=0.8") : t.fromTo(a, h, {
            y: "100vh"
          }, {
            y: 0,
            ease: T
          }, "initial+=0.8");
        t.fromTo(a.find("a"), .5, {
          y: A + "px"
        }, {
          y: 0,
          ease: g
        }, "initial+=0.8"),
          t.set(a, {
            className: "+=is-active"
          })
      }())
  }

  function H() {
    r.find(".home-slide:first-child").hasClass("is-active") ? TweenMax.to($(".main"), .8, {
      y: 0,
      ease: g,
      onComplete: B
    }) : (e = r.find(".home-slide.is-active"),
      (n = e.prev(".home-slide")).length > 0 && !a.hasClass("is-active") ? (F(n.index() + 1),
        function() {
          var t = new TimelineLite({
            onComplete: function() {
              e.find(".home-slide__title").css({
                opacity: "",
                transform: ""
              }),
                R()
            }
          });
          t.addLabel("initial"),
            e.find(".home-slide__title h3").each(function() {
              var n = new SplitText($(this),{
                type: "lines"
              });
              t.staggerFrom(n.lines, d, {
                y: "0px",
                opacity: 1,
                ease: b
              }, .1, "initial"),
                t.staggerTo(n.lines, d, {
                  y: -A + "px",
                  opacity: 0,
                  ease: b
                }, .1, "initial", function() {
                  n.revert(),
                    e.find(".home-slide__title").css({
                      opacity: 0
                    })
                })
            }),
            t.to(e.find(".home-slide__subtitle"), c, {
              opacity: 0,
              y: -A + "px",
              ease: S
            }, "initial"),
            $("html").hasClass("clippath") ? t.to(e.find(".home-slide__left-mask"), h, {
              webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              ease: x,
              force3D: !1
            }, "initial") : t.fromTo(e.find(".home-slide__left-mask"), h, {
              opacity: 1
            }, {
              opacity: 0,
              ease: x,
              force3D: !1
            }, "initial");
          t.to(e.find(".home-slide__bg-image"), p, {
            y: P + "px",
            ease: C,
            force3D: !1
          }, "initial"),
            t.addLabel("prev"),
            t.set(e, {
              className: "-=is-active"
            }).set(n, {
              className: "+=is-active"
            }),
            t.to($(".home-shape svg"), v + h, {
              rotation: n.data("rotation"),
              x: n.data("x") + "%",
              y: n.data("y") + "%",
              ease: g,
              force3D: !1
            }, "initial"),
            t.to($(".home-slide__big-shape"), v + h, {
              rotation: n.data("rotation"),
              x: n.data("x") + "%",
              y: n.data("y") + "%",
              ease: g,
              force3D: !1
            }, "initial"),
            t.set($(".home-shape svg >g >g"), {
              fill: n.data("color")
            }, "initial"),
            $("html").hasClass("clippath") ? n.find(".home-slide__title h3").each(function() {
              var e = new SplitText($(this),{
                type: "lines"
              });
              t.staggerFrom(e.lines, u, {
                y: A + "px",
                opacity: 0,
                ease: w
              }, .1, "prev"),
                t.staggerTo(e.lines, u, {
                  y: "0px",
                  opacity: 1,
                  ease: w
                }, .1, "prev", function() {
                  e.revert()
                })
            }) : t.fromTo(n.find(".home-slide__title"), u, {
              opacity: 0,
              y: A + "px"
            }, {
              y: "0px",
              opacity: 1,
              ease: w
            }, "prev");
          t.fromTo(n.find(".home-slide__subtitle"), c, {
            opacity: 0,
            y: "40px"
          }, {
            y: "0px",
            opacity: 1,
            ease: S
          }, "prev"),
            $("html").hasClass("clippath") ? t.fromTo(n.find(".home-slide__left-mask"), h, {
              webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
            }, {
              webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: T,
              force3D: !1
            }, "prev") : t.fromTo(n.find(".home-slide__left-mask"), h, {
              opacity: 0
            }, {
              opacity: 1,
              ease: T,
              force3D: !1
            }, "prev");
          t.fromTo(n.find(".home-slide__bg-image"), m, {
            y: -P + "px"
          }, {
            y: "0px",
            ease: E,
            force3D: !1
          }, "prev+=" + k)
        }()) : i.hasClass("is-active") ? R() : function() {
        var t = new TimelineMax({
          onComplete: function() {
            a.removeClass("is-active"),
              a.css({
                display: ""
              }),
              e.find(".home-slide__title").css({
                opacity: "",
                transform: ""
              }),
              R()
          }
        });
        $(".logo").removeClass("logo--white"),
          $(".say-hello").removeClass("say-hello--white"),
          $(".toggle").removeClass("toggle--white"),
          t.addLabel("initial"),
          $("html").hasClass("clippath") ? t.fromTo(a, l, {
            webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }, {
            webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            ease: y
          }, "initial") : t.fromTo(a, l, {
            y: 0
          }, {
            y: "100vh",
            ease: y
          }, "initial");
        t.fromTo(a.find("a"), .5, {
          y: "0px"
        }, {
          y: A + "px",
          ease: g
        }, "initial"),
          $("html").hasClass("clippath") ? e.find(".home-slide__title h3").each(function() {
            var e = new SplitText($(this),{
              type: "lines"
            });
            t.staggerFrom(e.lines, u, {
              y: A + "px",
              opacity: 0,
              ease: w
            }, .1, "initial"),
              t.staggerTo(e.lines, u, {
                y: "0px",
                opacity: 1,
                ease: w
              }, .1, "initial", function() {
                e.revert()
              })
          }) : t.fromTo(e.find(".home-slide__title"), u, {
            opacity: 0,
            y: A + "px"
          }, {
            y: "0",
            opacity: 1,
            ease: w
          }, "initial");
        t.fromTo(e.find(".home-slide__subtitle"), c, {
          opacity: 0,
          y: A + "px"
        }, {
          y: "0px",
          opacity: 1,
          ease: g
        }, "initial"),
          $("html").hasClass("clippath") ? t.fromTo(e.find(".home-slide__left-mask"), h, {
            webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
          }, {
            webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: T,
            force3D: !1
          }, "initial") : t.fromTo(e.find(".home-slide__left-mask"), h, {
            opacity: 0
          }, {
            opacity: 1,
            ease: x,
            force3D: !1
          }, "initial");
        t.fromTo(e.find(".home-slide__bg-image"), m, {
          y: -P + "px"
        }, {
          y: "0",
          ease: E,
          force3D: !1
        }, "initial+=" + k),
          t.to($(".home-shape svg"), v, {
            rotation: e.data("rotation"),
            x: e.data("x") + "%",
            y: e.data("y") + "%",
            ease: g,
            force3D: !1
          }, "initial"),
          t.to($(".home-slide__big-shape"), v, {
            rotation: e.data("rotation"),
            x: e.data("x") + "%",
            y: e.data("y") + "%",
            ease: g,
            force3D: !1
          }, "initial")
      }())
  }
  function B() {
    r.find(".home-slide").removeClass("is-active"),
      i.addClass("is-active"),
      r.find(".home-shape").css({
        opacity: 0
      }),
      R()
  }
  function V() {
    $(".main").css({
      transform: "translateY(-100vh)"
    });
    var e = new TimelineMax({
      onComplete: R
    })
      , t = r.find(".home-slide:first-child");
    t.addClass("is-active"),
      e.addLabel("initial"),
      $("html").hasClass("clippath") ? t.find(".home-slide__title h3").each(function() {
        var t = new SplitText($(this),{
          type: "lines"
        });
        e.staggerFrom(t.lines, u, {
          y: A + "px",
          opacity: 0,
          ease: w
        }, .1, "initial"),
          e.staggerTo(t.lines, u, {
            y: "0px",
            opacity: 1,
            ease: w
          }, .1, "initial", function() {
            t.revert()
          })
      }) : e.fromTo(t.find(".home-slide__title"), u, {
        opacity: 0,
        y: A + "px"
      }, {
        y: "0px",
        opacity: 1,
        ease: g
      }),
      e.fromTo(t.find(".home-slide__subtitle"), f, {
        opacity: 0,
        y: O + "px"
      }, {
        opacity: 1,
        y: "0px",
        ease: S
      }, "initial"),
      $("html").hasClass("clippath") ? e.fromTo(t.find(".home-slide__left-mask"), h, {
        webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      }, {
        webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: x,
        force3D: !1
      }, "initial") : e.fromTo(t.find(".home-slide__left-mask"), h, {
        opacity: 0
      }, {
        opacity: 1
      }, "initial"),
      e.fromTo(t.find(".home-slide__bg-image"), m, {
        y: P + "px"
      }, {
        y: 0,
        ease: E
      }, "initial+=" + k),
      e.fromTo($(".home-shape svg"), v, {
        rotation: M - 20,
        x: 0,
        y: 0
      }, {
        rotation: M,
        x: D + "%",
        y: N + "%",
        ease: g
      }, "initial"),
      e.fromTo($(".home-slide__big-shape"), v, {
        rotation: M - 20,
        x: 0,
        y: 0
      }, {
        rotation: M,
        x: D + "%",
        y: N + "%",
        ease: g
      }, "initial"),
      e.set($(".home-shape"), {
        opacity: 1
      })
  }
  j(),
    $(window).on("resize", _.debounce(j, 400)),
    $(".explore").click(function(e) {
      e.preventDefault(),
        L = !1,
        console.log("You can not scroll!"),
        z()
    })
}

function activeIntroSlides() {
  var e = function() {
    void 0 != tl && tl.remove(),
    void 0 != init_tl && init_tl.remove(),
      $(window).width() > 768 ? (void 0 != tl_mobile && tl_mobile.remove(),
        introSlides()) : introSlideMobile()
  };
  e(),
    $(window).on("resize", _.debounce(e, 400, {
      leading: !1,
      trailing: !0
    }))
}

function parallaxElements() {
  function e() {
    if (!isMobile.any) {
      var e = scrollbar.offset.y;
      $("[data-speed]").each(function(t, n) {
        var i = $(n)
          , r = i.data("speed")
          , o = 0;
        if ("top" == i.data("speed-pos"))
          var s = 0;
        else
          s = $(window).height();
        if (e >= e + i.offset().top - s)
          o = e - (e + i.offset().top - s);
        else
          o = 0;
        o *= -r,
          i.css({
            "-webkit-transform": "translate3d(0, " + o + "px, 0) scale(1,1)",
            "-moz-transform": "translate3d(0, " + o + "px, 0) scale(1,1)",
            "-ms-transform": "translate3d(0, " + o + "px, 0) scale(1,1)",
            transform: "translate3d(0, " + o + "px, 0) scale(1,1)"
          })
      })
    }
  }
  $("body").imagesLoaded().always({
    background: !0
  }, function() {
    e()
  }),
  isMobile.any || scrollbar.addListener(function(t) {
    e()
  })
}

window.resetNav = function() {
  $(".nav").attr("style", ""),
    $(".nav__bg").attr("style", ""),
    $(".nav__primary li").attr("style", ""),
    $(".nav__secondary").attr("style", ""),
  $(".home-slide--end").hasClass("is-active") || $(".logo").removeClass("logo--white")
}


function nav() {
  $(".toggle").click(function(e) {
    e.preventDefault(),
      $(".toggle").hasClass("is-open") ? closeNav() : openNav()
  })
}

function closeNav() {
  $(".toggle").removeClass("is-open"),
  $(window).width() <= 768 && $("body").css({
    overflow: "auto"
  }),
    (tl_nav = new TimelineMax).addLabel("initial"),
    tl_nav.to($(".nav__secondary"), .6, {
      opacity: 0
    }),
    tl_nav.staggerTo($(".nav__primary").find("li"), .5, {
      opacity: 0,
      y: "-30px",
      ease: Power3.easeIn
    }, .1, "initial"),
    tl_nav.addLabel("finish"),
    tl_nav.to($(".nav__bg"), .7, {
      scaleY: 0,
      ease: Power3.easeInOut,
      onComplete: window.resetNav
    }, "finish-=0.2"),
  $("html").hasClass("clippath") && tl_nav.fromTo($(".nav"), .7, {
    webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  }, {
    webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    ease: Power3.easeInOut
  }, "finish-=0.2")
}
////**** navigation
function openNav() {
  $(window).width() <= 768 && $("body").css({
    overflow: "hidden"
  }),
    console.log("open nav"),
    $(".toggle").addClass("is-open"),
    $(".logo").addClass("logo--white"),
    $(".nav").show(),
    $(".nav").find(".nav__container").scrollTop(0),
    (tl_nav = new TimelineMax).addLabel("initial"),
    tl_nav.set($(".nav"), {
      display: "block",
      y: "0px"
    }),
    tl_nav.fromTo($(".nav__bg"), 1, {
      scaleY: 0
    }, {
      scaleY: 1,
      zIndex: "",
      ease: Power3.easeInOut
    }),
    $("html").hasClass("clippath") ? tl_nav.fromTo($(".nav"), 1, {
      webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    }, {
      webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: Power3.easeInOut
    }, "initial") : tl_nav.set($(".nav .logo--mobile"), {
      opacity: 0
    }),
    tl_nav.staggerFromTo($(".nav__primary").find("li"), .5, {
      opacity: 0,
      y: "-30px"
    }, {
      opacity: 1,
      y: 0
    }, .2, "initial+=0.2"),
    tl_nav.fromTo($(".nav__secondary"), .9, {
      opacity: 0,
      y: "-30px"
    }, {
      opacity: 1,
      y: 0
    }, "initial+=0.5")
}

// function moduleSlider() {
//   $(".slider").length && $(".slider").each(function(e, t) {
//     $(t).flickity({
//       contain: !0,
//       freeScroll: !0,
//       imagesLoaded: !0,
//       prevNextButtons: !1,
//       pageDots: !1
//     })
//   })
// }




window.initBrief = function() {
  if ($('[data-namespace="initial-brief"]').length) {
    var e = $(".initial-brief__top")
      , t = $(".block");
    setTimeout(function() {
      $(".scroll").removeClass("is-hidden")
    }, 200),
      $(".scroll").click(function(e) {
        e.preventDefault(),
          isMobile.any ? TweenMax.to("html, body", .6, {
            scrollTop: $("#block1").offset().top - .1 * $(window).height(),
            ease: Power1.easeInOut
          }) : scrollbar.scrollIntoView(document.querySelector("#block1"), {
            alignToTop: !0,
            alignToBottom: !0,
            offsetTop: .1 * $(window).height(),
            onlyScrollIfNeeded: !1
          })
      }),
      isMobile.any ? $(window).on("scroll", function() {
        $(document).scrollTop() >= .5 * e.outerHeight() ? ($(".scroll").addClass("is-hidden"),
          $(".initial-brief__anchors").addClass("is-visible")) : ($(".scroll").removeClass("is-hidden"),
          $(".initial-brief__anchors").removeClass("is-visible"));
        var n = function() {
          var e, n = $(this).scrollTop();
          t.each(function(t, i) {
            var r = $(i);
            if (r.offset().top - 1 < n + .3 * $(window).height() && (e = r),
            null != e) {
              var o = e.attr("id");
              $(".initial-brief__anchors a").removeClass("is-active"),
                $('.initial-brief__anchors a[href="#' + o + '"]').addClass("is-active")
            }
          })
        };
        n(),
          $(window).scroll(n)
      }) : scrollbar.addListener(function(n) {
        var i;
        scrollbar.offset.y >= .5 * e.outerHeight() ? ($(".scroll").addClass("is-hidden"),
          $(".initial-brief__anchors").addClass("is-visible")) : ($(".scroll").removeClass("is-hidden"),
          $(".initial-brief__anchors").removeClass("is-visible")),
          t.each(function(e, t) {
            var n = $(t)
              , r = n.offset().top;
            if (null != (i = r <= .3 * $(window).height() ? n : null)) {
              var o = i.attr("id");
              $(".initial-brief__anchors a").removeClass("is-active"),
                $('.initial-brief__anchors a[href="#' + o + '"]').addClass("is-active")
            }
          })
      }),
      $(".initial-brief__anchors a").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        isMobile.any ? TweenMax.to("html, body", .6, {
          scrollTop: $(t).offset().top - .1 * $(window).height(),
          ease: Power1.easeInOut
        }) : scrollbar.scrollIntoView(document.querySelector(t), {
          alignToTop: !0,
          alignToBottom: !0,
          offsetTop: .1 * $(window).height(),
          onlyScrollIfNeeded: !1
        })
      })
  }
}


// moduleSlider(),
//   changeColors(),
//   playVideo(),
//   isSticky(),
//   parallaxElements(),
//   videoMediaElement())
$('[data-namespace="home"]').length && (console.log("init Home"),
  homeSlides(),
  activeIntroSlides())



function isSticky() {
  if ($(".is-sticky").length) {
    $("body").imagesLoaded().always({
      background: !0
    }, function() {
      $(window).width() > 768 && !isMobile.any && $(".is-sticky").each(function(e, t) {
        var n = $(t)
          , i = n.parent();
        i.css("position", "relative");
        var r = n.offset().left / $(window).width() * 100;
        n.clone().insertAfter(n).removeClass("is-sticky").addClass("is-cloned").css({
          position: "absolute",
          top: 0,
          left: r + "vw",
          width: n.outerWidth() / $(window).width() * 100 + "vw"
        }),
          n.css({
            opacity: 0
          });
        var o = i.find(".is-cloned");
        scrollbar.addListener(function(e) {
          if (n.offset().top <= $(window).width() / 12 / 2)
            if (i.offset().top + i.outerHeight() - n.outerHeight() - $(window).width() / 12 / 2 <= 0)
              n.css({
                position: "",
                top: "",
                left: "",
                width: ""
              }),
                i.removeClass("align-items-start").addClass("align-items-end");
            else {
              var t = (n.outerWidth() / $(window).width() * 100).toFixed(10);
              o.css({
                position: "fixed",
                top: $(window).width() / 12 / 2 + e.offset.y + "px",
                left: n.position().left / $(window).width() * 100 + "vw",
                width: t + "vw"
              })
            }
          else
            i.removeClass("align-items-end").addClass("align-items-start"),
              n.css({
                position: "",
                top: "",
                width: "",
                left: ""
              })
        })
      })
    });
    $(window).on("resize", _.debounce(function() {
      $(window).width() > 768 && !isMobile.any && $(".is-sticky").each(function(e, t) {
        var n = $(t);
        n.parent().find(".is-cloned").css({
          position: "absolute",
          top: scrollbar.offset.y + "px",
          left: n.offset().left / $(window).width() * 100 + "vw",
          width: n.outerWidth() / $(window).width() * 100 + "vw"
        })
      })
    }, 400))
  }
}

