document.addEventListener("DOMContentLoaded", function() {
    function e(e) {
        return Array.prototype.slice.call(document.querySelectorAll(e), 0)
    }

    function t() {
        s = !1
    }

    function n() {
        c = window.scrollY, o()
    }

    function o() {
        s || requestAnimationFrame(t), s = !0
    }

    function a() {
        d.forEach(function(e) {
            e.classList.remove("is-active")
        })
    }

    function i() {
        u.classList.remove("is-clipped"), f.forEach(function(e) {
            e.classList.remove("is-active")
        })
    }
    var c = 0,
        s = !1;
    window.addEventListener("scroll", n, !1);
    var l = e("#meta a");
    l.length > 0 && l.forEach(function(e) {
        e.addEventListener("click", function(t) {
            t.preventDefault();
            var n = e.getAttribute("href"),
                o = document.getElementById(n.substring(1));
            return o.scrollIntoView(!0), !1
        })
    });
    var d = e(".dropdown:not(.is-hoverable)");
    d.length > 0 && (d.forEach(function(e) {
        e.addEventListener("click", function(t) {
            t.stopPropagation(), e.classList.toggle("is-active")
        })
    }), document.addEventListener("click", function() {
        a()
    }));
    var r = e(".burger");
    r.length > 0 && r.forEach(function(e) {
        e.addEventListener("click", function() {
            var t = e.dataset.target,
                n = document.getElementById(t);
            e.classList.toggle("is-active"), n.classList.toggle("is-active")
        })
    });
    var u = document.documentElement,
        f = e(".modal"),
        v = e(".modal-button"),
        m = e(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button");
    v.length > 0 && v.forEach(function(e) {
        e.addEventListener("click", function() {
            var t = e.dataset.target,
                n = document.getElementById(t);
            u.classList.add("is-clipped"), n.classList.add("is-active")
        })
    }), m.length > 0 && m.forEach(function(e) {
        e.addEventListener("click", function() {
            i()
        })
    }), document.addEventListener("keydown", function(e) {
        var t = e || window.event;
        27 === t.keyCode && (i(), a())
    })
}), $(document).ready(function() {
    $(".open-modal").on("click", function(e) {
        e.preventDefault(), $(".modal").toggleClass("is-active")
    }), $("[data-fancybox]").fancybox({
        transitionIn: "elastic",
        transitionOut: "elastic",
        speedIn: 600,
        speedOut: 200,
        protect: !0,
        loop: !0,
        keyboard: !0,
        touch: {
            vertical: !0,
            momentum: !0
        },
        slideShow: {
            autoStart: !0,
            speed: 3e3
        },
        buttons: ["slideShow", "fullScreen", "thumbs", "close"]
    }), $(".load-features").on("click", function(e) {
        e.preventDefault(), $.get(this.href, function(e) {
            $(e).appendTo("body").modal()
        })
    }), $(".owl-carousel").owlCarousel({
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        items: 4,
        lazyLoad: !0,
        margin: 20,
        navText: ["Prev", "Next"],
        loop: !0,
        responsive: {
            0: {
                items: 2,
                nav: !0,
                slideBy: 2
            },
            600: {
                items: 3,
                nav: !0,
                slideBy: 3
            },
            1e3: {
                items: 4,
                nav: !0,
                slideBy: 4
            }
        }
    })
});