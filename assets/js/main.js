!(function (e) {
  "use strict";
  if (
    (e(window).on("load", function () {
      e(".preloader").fadeOut();
    }),
    e(".nice-select").length && e(".nice-select").niceSelect(),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    e(document).ready(function () {
      setTimeout(function () {
        e("#loader").addClass("loaded"),
          e("#loader").hasClass("loaded") &&
            e("#preloader")
              .delay(9e3)
              .queue(function () {
                e(this).remove();
              });
      }, 3e3);
    }),
    (e.fn.thmobilemenu = function (t) {
      var a = e.extend(
        {
          menuToggleBtn: ".th-menu-toggle",
          bodyToggleClass: "th-body-visible",
          subMenuClass: "th-submenu",
          subMenuParent: "menu-item-has-children",
          thSubMenuParent: "th-item-has-children",
          subMenuParentToggle: "th-active",
          meanExpandClass: "th-mean-expand",
          subMenuToggleClass: "th-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function n() {
          t.toggleClass(a.bodyToggleClass);
          var n = "." + a.subMenuClass;
          e(n).each(function () {
            e(this).hasClass(a.subMenuToggleClass) &&
              (e(this).removeClass(a.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(a.subMenuParentToggle));
          });
        }
        t.find("." + a.subMenuParent).each(function () {
          var t = e(this).find("ul");
          t.addClass(a.subMenuClass),
            t.css("display", "none"),
            e(this).addClass(a.subMenuParent),
            e(this).addClass(a.thSubMenuParent),
            e(this).children("a").append(a.appendElement);
        });
        var s = "." + a.thSubMenuParent + " > a";
        e(s).each(function () {
          e(this).on("click", function (t) {
            var n, s;
            t.preventDefault(),
              (n = e(this).parent()),
              (s = n.children("ul")).length > 0 &&
                (n.toggleClass(a.subMenuParentToggle),
                s.slideToggle(a.toggleSpeed),
                s.toggleClass(a.subMenuToggleClass));
          });
        }),
          e(a.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              n();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), n();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".th-menu-wrapper").thmobilemenu(),
    e(window).scroll(function () {
      e(this).scrollTop() > 500
        ? (e(".sticky-wrapper").addClass("sticky"),
          e(".category-menu").addClass("close-category"))
        : (e(".sticky-wrapper").removeClass("sticky"),
          e(".category-menu").removeClass("close-category"));
    }),
    e(".menu-expand").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(), e(".category-menu").toggleClass("open-category");
      });
    }),
    e(".scroll-top").length > 0)
  ) {
    var t = document.querySelector(".scroll-top"),
      a = document.querySelector(".scroll-top path"),
      n = a.getTotalLength();
    (a.style.transition = a.style.WebkitTransition = "none"),
      (a.style.strokeDasharray = n + " " + n),
      (a.style.strokeDashoffset = n),
      a.getBoundingClientRect(),
      (a.style.transition = a.style.WebkitTransition =
        "stroke-dashoffset 10ms linear");
    var s = function () {
      var t = e(window).scrollTop(),
        s = e(document).height() - e(window).height(),
        i = n - (t * n) / s;
      a.style.strokeDashoffset = i;
    };
    s(), e(window).scroll(s);
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 50
        ? jQuery(t).addClass("show")
        : jQuery(t).removeClass("show");
    }),
      jQuery(t).on("click", function (e) {
        return (
          e.preventDefault(),
          jQuery("html, body").animate({ scrollTop: 0 }, 750),
          !1
        );
      });
  }
  e("[data-bg-src]").length > 0 &&
    e("[data-bg-src]").each(function () {
      var t = e(this).attr("data-bg-src");
      e(this).css("background-image", "url(" + t + ")"),
        e(this).removeAttr("data-bg-src").addClass("background-image");
    }),
    e("[data-bg-color]").length > 0 &&
      e("[data-bg-color]").each(function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color");
      }),
    e("[data-border]").each(function () {
      var t = e(this).data("border");
      e(this).css("--th-border-color", t);
    }),
    e("[data-mask-src]").length > 0 &&
      e("[data-mask-src]").each(function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
          "mask-image": "url(" + t + ")",
          "-webkit-mask-image": "url(" + t + ")",
        }),
          e(this).addClass("bg-mask"),
          e(this).removeAttr("data-mask-src");
      }),
    e(".th-slider").each(function () {
      var t = e(this),
        a = e(this).data("slider-options"),
        n = t.find(".slider-prev"),
        s = t.find(".slider-next"),
        i = t.find(".slider-pagination"),
        o = a.autoplay,
        r = {
          slidesPerView: 1,
          spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
          loop: 0 != a.loop,
          speed: a.speed ? a.speed : 1e3,
          autoplay: o || { delay: 6e3, disableOnInteraction: !1 },
          navigation: { nextEl: s.get(0), prevEl: n.get(0) },
          pagination: {
            el: i.get(0),
            clickable: !0,
            renderBullet: function (e, t) {
              return (
                '<span class="' +
                t +
                '" aria-label="Go to Slide ' +
                (e + 1) +
                '"></span>'
              );
            },
          },
        },
        l = JSON.parse(t.attr("data-slider-options"));
      l = e.extend({}, r, l);
      new Swiper(t.get(0), l);
      e(".slider-area").length > 0 &&
        e(".slider-area").closest(".container").parent().addClass("arrow-wrap");
    }),
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t);
    }),
    e("[data-ani-delay]").each(function () {
      var t = e(this).data("ani-delay");
      e(this).css("animation-delay", t);
    }),
    e("[data-slider-prev], [data-slider-next]").on("click", function () {
      var t = e(this).data("slider-prev") || e(this).data("slider-next"),
        a = e(t);
      if (a.length) {
        var n = a[0].swiper;
        n && (e(this).data("slider-prev") ? n.slidePrev() : n.slideNext());
      }
    }),
    (e.fn.activateSliderThumbs = function (t) {
      var a = e.extend({ sliderTab: !1, tabButton: ".tab-btn" }, t);
      return this.each(function () {
        var t = e(this),
          n = t.find(a.tabButton),
          s = e('<span class="indicator"></span>').appendTo(t),
          i = t.data("slider-tab"),
          o = e(i)[0].swiper;
        if (
          (n.on("click", function (t) {
            t.preventDefault();
            var n = e(this);
            if (
              (n.addClass("active").siblings().removeClass("active"),
              c(n),
              n.prevAll(a.tabButton).addClass("list-active"),
              n.nextAll(a.tabButton).removeClass("list-active"),
              a.sliderTab)
            ) {
              var s = n.index();
              o.slideTo(s);
            }
          }),
          a.sliderTab)
        ) {
          o.on("slideChange", function () {
            var e = o.realIndex,
              t = n.eq(e);
            t.addClass("active").siblings().removeClass("active"),
              c(t),
              t.prevAll(a.tabButton).addClass("list-active"),
              t.nextAll(a.tabButton).removeClass("list-active");
          });
          var r = o.activeIndex,
            l = n.eq(r);
          l.addClass("active").siblings().removeClass("active"),
            c(l),
            l.prevAll(a.tabButton).addClass("list-active"),
            l.nextAll(a.tabButton).removeClass("list-active");
        }
        function c(e) {
          var t = e.position(),
            a = parseInt(e.css("margin-top")) || 0,
            n = parseInt(e.css("margin-left")) || 0;
          s.css("--height-set", e.outerHeight() + "px"),
            s.css("--width-set", e.outerWidth() + "px"),
            s.css("--pos-y", t.top + a + "px"),
            s.css("--pos-x", t.left + n + "px");
        }
      });
    }),
    e(".product-thumb").length &&
      e(".product-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      }),
    e(".team-thumb").length &&
      e(".team-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      }),
    e(".testi-thumb").length &&
      e(".testi-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      }),
    e(".testi-thumb2").length &&
      e(".testi-thumb2").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      });
  var i,
    o,
    r,
    l = ".ajax-contact",
    c = '[name="email"]',
    d = e(".form-messages");
  function u() {
    var t = e(l).serialize();
    (function () {
      var t,
        a = !0;
      function n(n) {
        n = n.split(",");
        for (var s = 0; s < n.length; s++)
          (t = l + " " + n[s]),
            e(t).val()
              ? (e(t).removeClass("is-invalid"), (a = !0))
              : (e(t).addClass("is-invalid"), (a = !1));
      }
      n(
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'
      ),
        e(c).val() &&
        e(c)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (e(c).removeClass("is-invalid"), (a = !0))
          : (e(c).addClass("is-invalid"), (a = !1));
      return a;
    })() &&
      jQuery
        .ajax({ url: e(l).attr("action"), data: t, type: "POST" })
        .done(function (t) {
          d.removeClass("error"),
            d.addClass("success"),
            d.text(t),
            e(l + ' input:not([type="submit"]),' + l + " textarea").val("");
        })
        .fail(function (e) {
          d.removeClass("success"),
            d.addClass("error"),
            "" !== e.responseText
              ? d.html(e.responseText)
              : d.html(
                  "Oops! An error occured and your message could not be sent."
                );
        });
  }
  function h(t, a, n, s) {
    e(a).on("click", function (a) {
      a.preventDefault(), e(t).addClass(s);
    }),
      e(t).on("click", function (a) {
        a.stopPropagation(), e(t).removeClass(s);
      }),
      e(t + " > div").on("click", function (a) {
        a.stopPropagation(), e(t).addClass(s);
      }),
      e(n).on("click", function (a) {
        a.preventDefault(), a.stopPropagation(), e(t).removeClass(s);
      });
  }
  function h(t, a, n, s) {
    e(a).on("click", function (a) {
      a.preventDefault(), e(t).addClass(s);
    }),
      e(t).on("click", function (a) {
        a.stopPropagation(), e(t).removeClass(s);
      }),
      e(t + " > div").on("click", function (a) {
        a.stopPropagation(), e(t).addClass(s);
      }),
      e(n).on("click", function (a) {
        a.preventDefault(), a.stopPropagation(), e(t).removeClass(s);
      });
  }
  function p(t, a, n, s) {
    var i = t.text().split(a),
      o = "";
    i.length &&
      (e(i).each(function (e, t) {
        o += '<span class="' + n + (e + 1) + '">' + t + "</span>" + s;
      }),
      t.empty().append(o));
  }
  e(l).on("submit", function (e) {
    e.preventDefault(), u();
  }),
    (i = ".popup-search-box"),
    (o = ".searchClose"),
    (r = "show"),
    e(".searchBoxToggler").on("click", function (t) {
      t.preventDefault(), e(i).addClass(r);
    }),
    e(i).on("click", function (t) {
      t.stopPropagation(), e(i).removeClass(r);
    }),
    e(i)
      .find("form")
      .on("click", function (t) {
        t.stopPropagation(), e(i).addClass(r);
      }),
    e(o).on("click", function (t) {
      t.preventDefault(), t.stopPropagation(), e(i).removeClass(r);
    }),
    h(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"),
    h(".shopping-cart", ".sideMenuToggler2", ".sideMenuCls", "show"),
    e(".popup-image").magnificPopup({
      type: "image",
      mainClass: "mfp-zoom-in",
      removalDelay: 260,
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e(".popup-content").magnificPopup({ type: "inline", midClick: !0 });
  var m = {
    init: function () {
      return this.each(function () {
        p(e(this), "", "char", "");
      });
    },
    words: function () {
      return this.each(function () {
        p(e(this), " ", "word", " ");
      });
    },
    lines: function () {
      return this.each(function () {
        var t = "eefec303079ad17405c889e092e105b0";
        p(e(this).children("br").replaceWith(t).end(), t, "line", "");
      });
    },
  };
  function f(e) {
    return parseInt(e, 10);
  }
  (e.fn.lettering = function (t) {
    return t && m[t]
      ? m[t].apply(this, [].slice.call(arguments, 1))
      : "letters" !== t && t
      ? (e.error("Method " + t + " does not exist on jQuery.lettering"), this)
      : m.init.apply(this, [].slice.call(arguments, 0));
  }),
    e(".about-anime").lettering(),
    (e.fn.sectionPosition = function (t, a) {
      e(this).each(function () {
        var n,
          s,
          i,
          o,
          r,
          l = e(this);
        (n = Math.floor(l.height() / 2)),
          (s = l.attr(t)),
          (i = l.attr(a)),
          (o = f(e(i).css("padding-top"))),
          (r = f(e(i).css("padding-bottom"))),
          "top-half" === s
            ? (e(i).css("padding-bottom", r + n + "px"),
              l.css("margin-top", "-" + n + "px"))
            : "bottom-half" === s &&
              (e(i).css("padding-top", o + n + "px"),
              l.css("margin-bottom", "-" + n + "px"));
      });
    });
  function g() {
    e(".feature-circle .progressbar").each(function () {
      var t = e(this).attr("data-path-color"),
        a = e(this).offset().top,
        n = e(window).scrollTop(),
        s = e(this).find(".circle").attr("data-percent"),
        i = (parseInt(s, 10), parseInt(100, 10), e(this).data("animate"));
      a < n + e(window).height() - 30 &&
        !i &&
        (e(this).data("animate", !0),
        e(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: s / 100,
            size: 100,
            thickness: 8,
            emptyFill: "#E4E4E4",
            lineCap: "round",
            fill: { color: t },
          })
          .on("circle-animation-progress", function (t, a, n) {
            e(this)
              .find(".circle-num")
              .text((100 * n).toFixed(0) + "%");
          })
          .stop());
    }),
      e(".skill-circle .progressbar").each(function () {
        var t = e(this).offset().top,
          a = e(window).scrollTop(),
          n = e(this).find(".circle").attr("data-percent"),
          s = (parseInt(n, 10), parseInt(100, 10), e(this).data("animate"));
        t < a + e(window).height() - 30 &&
          !s &&
          (e(this).data("animate", !0),
          e(this)
            .find(".circle")
            .circleProgress({
              startAngle: -Math.PI / 2,
              value: n / 100,
              size: 100,
              thickness: 8,
              emptyFill: "#E0E0E0",
              lineCap: "round",
              fill: { gradient: ["#F11F22", "#F2891D"] },
            })
            .on("circle-animation-progress", function (t, a, n) {
              e(this)
                .find(".circle-num")
                .text((100 * n).toFixed(0) + "%");
            })
            .stop());
      });
  }
  e("[data-sec-pos]").length &&
    e("[data-sec-pos]").imagesLoaded(function () {
      e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
    }),
    g(),
    e(window).scroll(g),
    e(".filter-active").imagesLoaded(function () {
      if (e(".filter-active").length > 0) {
        var t = e(".filter-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: { columnWidth: 1 },
        });
        e(".filter-menu-active").on("click", "button", function () {
          var a = e(this).attr("data-filter");
          t.isotope({ filter: a });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".masonary-active").imagesLoaded(function () {
      e(".masonary-active").length > 0 &&
        e(".masonary-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: { columnWidth: 1 },
        });
    }),
    e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
      function () {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 &&
          e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: { columnWidth: 1 },
          }),
          e('[data-bs-toggle="tab"]').on("shown.bs.tab", function (a) {
            e(t).isotope({ filter: "*" });
          });
      }
    ),
    e(".counter-number").counterUp({ delay: 10, time: 1e3 }),
    (e.fn.shapeMockup = function () {
      e(this).each(function () {
        var t = e(this),
          a = t.data("top"),
          n = t.data("right"),
          s = t.data("bottom"),
          i = t.data("left");
        t.css({ top: a, right: n, bottom: s, left: i })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    }),
    e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
    e(".progress-bar").waypoint(
      function () {
        e(".progress-bar").css({
          animation: "animate-positive 1.8s",
          opacity: "1",
        });
      },
      { offset: "75%" }
    ),
    (e.fn.countdown = function () {
      e(this).each(function () {
        var t = e(this),
          a = new Date(t.data("offer-date")).getTime();
        function n(e) {
          return t.find(e);
        }
        var s = setInterval(function () {
          var e = new Date().getTime(),
            i = a - e,
            o = Math.floor(i / 864e5),
            r = Math.floor((i % 864e5) / 36e5),
            l = Math.floor((i % 36e5) / 6e4),
            c = Math.floor((i % 6e4) / 1e3);
          o < 10 && (o = "0" + o),
            r < 10 && (r = "0" + r),
            l < 10 && (l = "0" + l),
            c < 10 && (c = "0" + c),
            i < 0
              ? (clearInterval(s),
                t.addClass("expired"),
                t.find(".message").css("display", "block"))
              : (n(".day").html(o),
                n(".hour").html(r),
                n(".minute").html(l),
                n(".seconds").html(c));
        }, 1e3);
      });
    }),
    e(".counter-list").length && e(".counter-list").countdown();
  const v = {};
  function b() {
    const t = e(this),
      a = t.attr("src");
    if (!v[a]) {
      const t = e.Deferred();
      e.get(a, (a) => {
        t.resolve(e(a).find("svg"));
      }),
        (v[a] = t.promise());
    }
    v[a].then((a) => {
      const n = e(a).clone();
      t.attr("id") && n.attr("id", t.attr("id")),
        t.attr("class") && n.attr("class", t.attr("class")),
        t.attr("style") && n.attr("style", t.attr("style")),
        t.attr("width") &&
          (n.attr("width", t.attr("width")),
          t.attr("height") || n.removeAttr("height")),
        t.attr("height") &&
          (n.attr("height", t.attr("height")),
          t.attr("width") || n.removeAttr("width")),
        n.insertAfter(t),
        t.trigger("svgInlined", n[0]),
        t.remove();
    });
  }
  if (
    ((e.fn.inlineSvg = function () {
      return this.each(b), this;
    }),
    e(".svg-img").inlineSvg(),
    e(".th-anim").length)
  ) {
    gsap.registerPlugin(ScrollTrigger),
      document.querySelectorAll(".th-anim").forEach((e) => {
        let t = e.querySelector("img"),
          a = gsap.timeline({
            scrollTrigger: { trigger: e, toggleActions: "play none none none" },
          });
        a.set(e, { autoAlpha: 1 }),
          a.from(e, 1.5, { xPercent: -100, ease: Power2.out }),
          a.from(t, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out,
          });
      });
  }
  var y = new Swiper(".gallery-thumbs", {
      loop: !0,
      loopedSlides: 3,
      centeredSlides: !0,
      spaceBetween: 10,
      autoplay: !1,
      slideToClickedSlide: !0,
      slidesPerView: 3,
      watchSlidesVisibility: !0,
      watchSlidesProgress: !0,
    }),
    w = new Swiper(".gallery-top", {
      loop: !0,
      autoplay: !1,
      loopedSlides: 1,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  (w.controller.control = y),
    (y.controller.control = w),
    e("#serviceAccordion").on("show.bs.collapse", function (t) {
      var a = e(t.target).closest(".accordion-item").index();
      e(".th-accordion_images img").removeClass("active"),
        e(".th-accordion_images img").eq(a).addClass("active");
    }),
    e("#ship-to-different-address-checkbox").on("change", function () {
      e(this).is(":checked")
        ? e("#ship-to-different-address").next(".shipping_address").slideDown()
        : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    e(".woocommerce-form-login-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(".woocommerce-form-coupon-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(".shipping-calculator-button").on("click", function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    e('.wc_payment_methods input[type="radio"]').each(function () {
      e(this).on("change", function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    }),
    e(".quantity-plus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          n = parseInt(a.val(), 10);
        isNaN(n) || a.val(n + 1);
      });
    }),
    e(".quantity-minus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          n = parseInt(a.val(), 10);
        !isNaN(n) && n > 1 && a.val(n - 1);
      });
    });
//   var C = document.querySelector(".cursor"),
//     k = document.querySelector(".cursor2"),
//     x = document.querySelectorAll("a");
//   document.addEventListener("mousemove", function (e) {
//     e.clientX, e.clientY;
//     C.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
//   }),
//     document.addEventListener("mousemove", function (e) {
//       var t = e.clientX,
//         a = e.clientY;
//       (k.style.left = t + "px"), (k.style.top = a + "px");
//     }),
//     document.addEventListener("mousedown", function () {
//       C.classList.add("click"), k.classList.add("cursorinnerhover");
//     }),
//     document.addEventListener("mouseup", function () {
//       C.classList.remove("click"), k.classList.remove("cursorinnerhover");
//     }),
//     x.forEach((e) => {
//       e.addEventListener("mouseover", () => {
//         C.classList.add("hover");
//       }),
//         e.addEventListener("mouseleave", () => {
//           C.classList.remove("hover");
//         });
//     }),
//     e(".color-switch-btns button").each(function () {
//       const t = e(this),
//         a = t.data("color");
//       t.css("--theme-color", a),
//         t.on("click", function () {
//           const t = e(this).data("color");
//           e(":root").css("--theme-color", t);
//         });
//     }),
//     e(document).on("click", ".switchIcon", function () {
//       e(".color-scheme-wrap").toggleClass("active");
//     }),
//     window.addEventListener(
//       "contextmenu",
//       function (e) {
//         e.preventDefault();
//       },
//       !1
//     ),
//     (document.onkeydown = function (e) {
//       return (
//         123 != event.keyCode &&
//         (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
//         (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
//         (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
//         (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
//         void 0
//       );
//     });
})(jQuery);
