function homeSlides() {
  var e, t, n, i = $(".home-slide--intro"), r = $(".home-slides"), o = r.find(".home-slide").length, s = r.find(".pagination"), a = $(".home-slide--end"), l = .5, c = .7, u = 1, d = .7, f = .7, h = .9, p = .5, m = 1, v = .9, g = "Power1.easeInOut", y = "Power1.easeInOut", w = "Power4.easeOut", b = "Power4.easeIn", x = "Power4.easeInOut", T = "Power4.easeInOut", S = "Power3.easeOut", E = "Power4.easeOut", C = "Power4.easeIn", k = .3, P = 70, A = 40, O = 10, L = !0, D = r.find(".home-slide:first-child").data("x"), N = r.find(".home-slide:first-child").data("y"), M = r.find(".home-slide:first-child").data("rotation"), I = r.find(".home-slide:first-child").data("color");
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
    i.hasClass("is-active") ? (TweenMax.to($(".main"), .7, {
      y: "-100vh",
      ease: g,
      onComplete: V
    }),
      i.removeClass("is-active")) : (e = r.find(".home-slide.is-active"),
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
        }()) : a.hasClass("is-active") ? R() : function() {
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
function introSlideMobile() {
  if ("home" == $(".app-container").data("namespace") && !$(".home-slide--intro .mobile").hasClass("is-visible")) {
    tl_mobile = new TimelineMax;
    var e = new SplitText(".home-slide--intro .mobile h2, .home-slide--intro .mobile h1",{
      type: "lines"
    });
    tl_mobile.addLabel("initial"),
      tl_mobile.set($(".home-slide--intro .mobile h1"), {
        opacity: 1
      }, "initial"),
      tl_mobile.set($(".home-slide--intro .mobile h2"), {
        opacity: 1
      }, "initial"),
      tl_mobile.staggerFromTo(e.lines, 1, {
        y: "70px",
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut
      }, .1, "initial", function() {
        e.revert(),
          tl_mobile.remove(),
          $(".home-slide--intro .mobile").addClass("is-visible")
      })
  }
}
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
    init_tl = new TimelineMax({
      id: "initial",
      onComplete: function() {
        tl.play()
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
    init_tl.addLabel("initial").set(i, {
      opacity: 1
    }, "initial").set(o, {
      opacity: 0,
      y: "20px"
    }, "initial").fromTo(r, 1, {
      opacity: 0,
      y: "20px"
    }, {
      opacity: 1,
      y: "0",
      ease: E
    }, "initial").staggerTo(o, 1.2, {
      ease: C,
      y: "0",
      opacity: 1
    }, .04, "initial+=0.3").addLabel("show-letters-creative", "initial").addLabel("show-creative-e1", "show-letters-creative").addLabel("show-creative-t", "show-letters-creative+=0.2").addLabel("show-creative-e2", "show-letters-creative+=0.4").addLabel("show-creative-c", "show-letters-creative+=0.7").addLabel("show-creative-i", "show-letters-creative+=0.9").addLabel("show-creative-r", "show-letters-creative+=1.1").addLabel("show-creative-a", "show-letters-creative+=1.3").addLabel("show-creative-v", "show-letters-creative+=1.5").set($(".creative"), {
      visibility: "visible"
    }, "show-letters-creative").fromTo($(".creative--c"), .5, {
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
      }, "+=1").addLabel("hide-letters-creative").addLabel("show-letters-digital").set(i.find(".words2"), {
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
function scrollPage() {
  if ($(window).off("resize"),
    !isMobile.any) {
    var e = function() {
      $(".scrollable").length ? scrollbar = Scrollbar.init(document.querySelector(".scrollable")) : "home" == $(".app-container").data("namespace") && ($(window).width() <= 768 ? void 0 == Scrollbar.get(document.querySelector(".content-wrapper")) && (scrollbar = Scrollbar.init(document.querySelector(".content-wrapper"))) : void 0 != Scrollbar.get(document.querySelector(".content-wrapper")) && (Scrollbar.destroy(document.querySelector(".content-wrapper")),
        $(".content-wrapper").removeAttr("data-scrollbar")))
    };
    e(),
      $(window).on("resize", _.debounce(e, 150, {
        leading: !1,
        trailing: !0
      }))
  }
}


function detectClippath() {
  !function() {
    var e = "clipPath"
      , t = ["webkit", "moz", "ms", "o"]
      , n = [e]
      , i = document.createElement("testelement");
    if (is_safari121())
      return !1;
    for (var r = 0, o = t.length; r < o; r++) {
      var s = t[r] + e.charAt(0).toUpperCase() + e.slice(1);
      n.push(s)
    }
    for (r = 0,
           o = n.length; r < o; r++) {
      var a = n[r];
      if ("" === i.style[a] && (i.style[a] = "polygon(50% 0%, 0% 100%, 100% 100%)",
      "" !== i.style[a]))
        return !0
    }
    return !1
  }() ? $(".w-clippath").removeClass("w-clippath").addClass("noclippath") : ($("html").addClass("clippath"),
    $(".w-clippath").removeClass("w-clippath").addClass("clippath"))
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
