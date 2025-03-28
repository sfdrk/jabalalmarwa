! function(e) {
    "use strict";
    new LazyLoad({
        elements_selector: ".lazy"
    }), e(".background-image").each(function() {
        e(this).css("background-image", e(this).attr("data-background"))
    }), e(".categories_carousel").owlCarousel({
        center: !1,
        stagePadding: 50,
        items: 1,
        loop: !1,
        margin: 20,
        dots: !1,
        nav: !0,
        lazyLoad: !0,
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
        responsive: {
            0: {
                nav: !1,
                dots: !1,
                items: 1    
            },
            600: {
                nav: !1,
                dots: !1,
                items: 2
            },
            768: {
                nav: !1,
                dots: !1,
                items: 4
            },
            1025: {
                nav: !0,
                dots: !1,
                items: 4
            },
            1340: {
                nav: !0,
                dots: !1,
                items: 5
            },
            1460: {
                nav: !0,
                dots: !1,
                items: 5
            }
        }
    }), e(".carousel_4").owlCarousel({
        items: 1,
        loop: !1,
        stagePadding: 50,
        margin: 20,
        dots: !1,
        lazyLoad: !0,
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
        nav: !1,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 1
            },
            768: {
                items: 2
            },
            1230: {
                items: 3,
                nav: !0
            }
        }
    }), e(window).on("scroll", function() {
        1 < e(this).scrollTop() ? e(".element_to_stick").addClass("sticky") : e(".element_to_stick").removeClass("sticky")
    }), e(window).scroll(), e("a.open_close").on("click", function() {
        e(".main-menu").toggleClass("show"), e(".layer").toggleClass("layer-is-visible")
    }), e("a.show-submenu").on("click", function() {
        e(this).next().toggleClass("show_normal")
    }), e(".opacity-mask").each(function() {
        e(this).css("background-color", e(this).attr("data-opacity-mask"))
    }), e(window).scroll(function() {
        800 <= e(window).scrollTop() ? e("#toTop").addClass("visible") : e("#toTop").removeClass("visible")
    }), e("#toTop").on("click", function() {
        return e("html, body").animate({
            scrollTop: 0
        }, 500), !1
    }), e(window).bind("load resize", function() {
        e(window).width() <= 768 ? e("a.cart_bt").removeAttr("data-bs-toggle", "dropdown") : e("a.cart_bt").attr("data-bs-toggle", "dropdown")
    });
    var t = e("footer h3");
    e(window).resize(function() {
        e(window).width() <= 768 ? t.attr("data-bs-toggle", "collapse") : t.removeAttr("data-bs-toggle", "collapse")
    }).resize(), t.on("click", function() {
        e(this).toggleClass("opened")
    }), e('a[href^="#"].btn_scroll').on("click", function(t) {
        t.preventDefault();
        var o = this.hash,
            t = e(o);
        e("html, body").stop().animate({
            scrollTop: t.offset().top
        }, 800, "swing", function() {
            window.location.hash = o
        })
    }), e(".btn_hero.wishlist").on("click", function(t) {
        t.preventDefault(), e(this).toggleClass("liked")
    }), e("#sign-in").magnificPopup({
        type: "inline",
        fixedContentPos: !0,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
        mainClass: "my-mfp-zoom-in"
    }), e(".btn_play").magnificPopup({
        type: "iframe",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="font-size:26px; margin-right:-10px;">&#215;</button>'
    }), e(".modal_dialog").magnificPopup({
        type: "inline",
        fixedContentPos: !0,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
        mainClass: "my-mfp-zoom-in"
    }), e(".magnific-gallery").each(function() {
        e(this).magnificPopup({
            delegate: "a",
            type: "image",
            preloader: !0,
            gallery: {
                enabled: !0
            },
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                }
            },
            closeOnContentClick: !0,
            midClick: !0
        })
    }), e("#password, #password1, #password2").hidePassword("focus", {
        toggle: {
            className: "my-toggle"
        }
    }), e("#forgot").on("click", function() {
        e("#forgot_pw").fadeToggle("fast")
    }), e(".custom_select select").niceSelect(), e(".accordion_2").on("hidden.bs.collapse shown.bs.collapse", function(t) {
        e(t.target).prev(".card-header").find("i.indicator").toggleClass("icon_minus-06 icon_plus")
    })
}(window.jQuery);