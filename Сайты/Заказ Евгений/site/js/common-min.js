$(document).ready(function() {
        $(".hides-how").hide(), $(".btn-how").click(function() {
            return $(".hides-how").slideToggle(1e3), $(this).toggleClass("arrow-up"), "Скрыть" != $(this).text() ? ($(this).parent().parent().prev().find(".how-opacity").removeClass("opacity"), $(this).text("Скрыть")) : ($(this).text("Показать полностью"), $(this).parent().parent().prev().find(".how-opacity").addClass("opacity")), !1
        }), $(".hides-question").hide(), $(".btn-question").click(function() {
            return $(".hides-question").slideToggle(1e3), $(this).toggleClass("arrow-up"), "Скрыть" != $(this).text() ? ($(this).parent().parent().find(".how-opacity").removeClass("opacity"), $(this).text("Скрыть")) : ($(this).text("Показать полностью"), $(this).parent().parent().find(".how-opacity").addClass("opacity")), !1
        }), $(".hides-answer").hide(), $(".question").click(function() {
            return $(this).toggleClass("question-open").next().slideToggle(300), !1
        }), $("selector").selectbox();
        var t = document.getElementById("scene");
        new Parallax(t);
        $(function() {
            $(".minimized").click(function(t) {
                var i = $(this).attr("src");
                $("body").append('<div id="overlay"></div><div id="magnify"><img src="' + i + '"><div id="close-popup"><i>x</i></div></div>'), $("#magnify").css({
                    left: ($(document).width() - $("#magnify").outerWidth()) / 2,
                    top: ($(window).height() - $("#magnify").outerHeight()) / 2 - 100
                }), $("#overlay, #magnify").fadeIn("fast")
            }), $("body").on("click", "#close-popup, #overlay", function(t) {
                t.preventDefault(), $("#overlay, #magnify").fadeOut("fast", function() {
                    $("#close-popup, #magnify, #overlay").remove()
                })
            })
        })
    }),
    function(t, i, e) {
        "use strict";

        function s(t, i) {
            this.element = t, this.layers = t.getElementsByClassName("layer");
            var e = {
                calibrateX: this.data(this.element, "calibrate-x"),
                calibrateY: this.data(this.element, "calibrate-y"),
                invertX: this.data(this.element, "invert-x"),
                invertY: this.data(this.element, "invert-y"),
                limitX: this.data(this.element, "limit-x"),
                limitY: this.data(this.element, "limit-y"),
                scalarX: this.data(this.element, "scalar-x"),
                scalarY: this.data(this.element, "scalar-y"),
                frictionX: this.data(this.element, "friction-x"),
                frictionY: this.data(this.element, "friction-y"),
                originX: this.data(this.element, "origin-x"),
                originY: this.data(this.element, "origin-y"),
                pointerEvents: this.data(this.element, "pointer-events"),
                precision: this.data(this.element, "precision")
            };
            for (var s in e) null === e[s] && delete e[s];
            this.extend(this, o, i, e), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
        }
        var o = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5,
            pointerEvents: !0,
            precision: 1
        };
        s.prototype.extend = function() {
            if (arguments.length > 1)
                for (var t = arguments[0], i = 1, e = arguments.length; e > i; i++) {
                    var s = arguments[i];
                    for (var o in s) t[o] = s[o]
                }
        }, s.prototype.data = function(t, i) {
            return this.deserialize(t.getAttribute("data-" + i))
        }, s.prototype.deserialize = function(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
        }, s.prototype.camelCase = function(t) {
            return t.replace(/-+(.)?/g, function(t, i) {
                return i ? i.toUpperCase() : ""
            })
        }, s.prototype.transformSupport = function(s) {
            for (var o = i.createElement("div"), n = !1, r = null, a = !1, h = null, l = null, p = 0, c = this.vendors.length; c > p; p++)
                if (null !== this.vendors[p] ? (h = this.vendors[p][0] + "transform", l = this.vendors[p][1] + "Transform") : (h = "transform", l = "transform"), o.style[l] !== e) {
                    n = !0;
                    break
                }
            switch (s) {
                case "2D":
                    a = n;
                    break;
                case "3D":
                    if (n) {
                        var m = i.body || i.createElement("body"),
                            u = i.documentElement,
                            d = u.style.overflow,
                            y = !1;
                        i.body || (y = !0, u.style.overflow = "hidden", u.appendChild(m), m.style.overflow = "hidden", m.style.background = ""), m.appendChild(o), o.style[l] = "translate3d(1px,1px,1px)", a = (r = t.getComputedStyle(o).getPropertyValue(h)) !== e && r.length > 0 && "none" !== r, u.style.overflow = d, m.removeChild(o), y && (m.removeAttribute("style"), m.parentNode.removeChild(m))
                    }
            }
            return a
        }, s.prototype.ww = null, s.prototype.wh = null, s.prototype.wcx = null, s.prototype.wcy = null, s.prototype.wrx = null, s.prototype.wry = null, s.prototype.portrait = null, s.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), s.prototype.vendors = [null, ["-webkit-", "webkit"],
            ["-moz-", "Moz"],
            ["-o-", "O"],
            ["-ms-", "ms"]
        ], s.prototype.motionSupport = !!t.DeviceMotionEvent, s.prototype.orientationSupport = !!t.DeviceOrientationEvent, s.prototype.orientationStatus = 0, s.prototype.motionStatus = 0, s.prototype.propertyCache = {}, s.prototype.initialise = function() {
            s.prototype.transform2DSupport === e && (s.prototype.transform2DSupport = s.prototype.transformSupport("2D"), s.prototype.transform3DSupport = s.prototype.transformSupport("3D")), this.transform3DSupport && this.accelerate(this.element), "static" === t.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
        }, s.prototype.updateLayers = function() {
            this.layers = this.element.getElementsByClassName("layer"), this.depthsX = [], this.depthsY = [];
            for (var t = 0, i = this.layers.length; i > t; t++) {
                var e = this.layers[t];
                this.transform3DSupport && this.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
                var s = this.data(e, "depth") || 0;
                this.depthsX.push(this.data(e, "depth-x") || s), this.depthsY.push(this.data(e, "depth-y") || s)
            }
        }, s.prototype.updateDimensions = function() {
            this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
        }, s.prototype.updateBounds = function() {
            this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
        }, s.prototype.queueCalibration = function(t) {
            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
        }, s.prototype.enable = function() {
            this.enabled || (this.enabled = !0, !this.desktop && this.orientationSupport ? (this.portrait = null, t.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : !this.desktop && this.motionSupport ? (this.portrait = null, t.addEventListener("devicemotion", this.onDeviceMotion), setTimeout(this.onMotionTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
        }, s.prototype.disable = function() {
            this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? t.removeEventListener("devicemotion", this.onDeviceMotion) : t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
        }, s.prototype.calibrate = function(t, i) {
            this.calibrateX = t === e ? this.calibrateX : t, this.calibrateY = i === e ? this.calibrateY : i
        }, s.prototype.invert = function(t, i) {
            this.invertX = t === e ? this.invertX : t, this.invertY = i === e ? this.invertY : i
        }, s.prototype.friction = function(t, i) {
            this.frictionX = t === e ? this.frictionX : t, this.frictionY = i === e ? this.frictionY : i
        }, s.prototype.scalar = function(t, i) {
            this.scalarX = t === e ? this.scalarX : t, this.scalarY = i === e ? this.scalarY : i
        }, s.prototype.limit = function(t, i) {
            this.limitX = t === e ? this.limitX : t, this.limitY = i === e ? this.limitY : i
        }, s.prototype.origin = function(t, i) {
            this.originX = t === e ? this.originX : t, this.originY = i === e ? this.originY : i
        }, s.prototype.clamp = function(t, i, e) {
            return t = Math.max(t, i), t = Math.min(t, e)
        }, s.prototype.css = function(t, i, s) {
            var o = this.propertyCache[i];
            if (!o)
                for (var n = 0, r = this.vendors.length; r > n; n++)
                    if (o = null !== this.vendors[n] ? this.camelCase(this.vendors[n][1] + "-" + i) : i, t.style[o] !== e) {
                        this.propertyCache[i] = o;
                        break
                    }
            t.style[o] = s
        }, s.prototype.accelerate = function(t) {
            this.css(t, "transform", "translate3d(0,0,0)"), this.css(t, "transform-style", "preserve-3d"), this.css(t, "backface-visibility", "hidden")
        }, s.prototype.setPosition = function(t, i, e) {
            i = i.toFixed(this.precision) + "px", e = e.toFixed(this.precision) + "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + i + "," + e + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + i + "," + e + ")") : (t.style.left = i, t.style.top = e)
        }, s.prototype.onOrientationTimer = function() {
            this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
        }, s.prototype.onMotionTimer = function() {
            this.motionSupport && 0 === this.motionStatus && (this.disable(), this.motionSupport = !1, this.enable())
        }, s.prototype.onCalibrationTimer = function() {
            this.calibrationFlag = !0
        }, s.prototype.onWindowResize = function() {
            this.updateDimensions()
        }, s.prototype.onAnimationFrame = function() {
            this.updateBounds();
            var t = this.ix - this.cx,
                i = this.iy - this.cy;
            (Math.abs(t) > this.calibrationThreshold || Math.abs(i) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? i : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? i : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
            for (var e = 0, s = this.layers.length; s > e; e++) {
                var o = this.layers[e],
                    n = this.depthsX[e],
                    r = this.depthsY[e],
                    a = this.vx * (n * (this.invertX ? -1 : 1)),
                    h = this.vy * (r * (this.invertY ? -1 : 1));
                this.setPosition(o, a, h)
            }
            this.raf = requestAnimationFrame(this.onAnimationFrame)
        }, s.prototype.rotate = function(t, i) {
            var e = (event.beta || 0) / 30,
                s = (event.gamma || 0) / 30,
                o = this.wh > this.ww;
            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = e, this.cy = s), this.ix = e, this.iy = s
        }, s.prototype.onDeviceOrientation = function(t) {
            var i = t.beta,
                e = t.gamma;
            this.desktop || null === i || null === e || (this.orientationStatus = 1, this.rotate(i, e))
        }, s.prototype.onDeviceMotion = function(t) {
            var i = t.rotationRate.beta,
                e = t.rotationRate.gamma;
            this.desktop || null === i || null === e || (this.motionStatus = 1, this.rotate(i, e))
        }, s.prototype.onMouseMove = function(t) {
            var i = t.clientX,
                e = t.clientY;
            !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (i = Math.max(i, this.ex), i = Math.min(i, this.ex + this.ew), e = Math.max(e, this.ey), e = Math.min(e, this.ey + this.eh)), this.ix = (i - this.ex - this.ecx) / this.erx, this.iy = (e - this.ey - this.ecy) / this.ery) : (this.ix = (i - this.wcx) / this.wrx, this.iy = (e - this.wcy) / this.wry)
        }, t.Parallax = s
    }(window, document),
    function() {
        for (var t = 0, i = ["ms", "moz", "webkit", "o"], e = 0; e < i.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[e] + "CancelAnimationFrame"] || window[i[e] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(i, e) {
            var s = (new Date).getTime(),
                o = Math.max(0, 16 - (s - t)),
                n = window.setTimeout(function() {
                    i(s + o)
                }, o);
            return t = s + o, n
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(), $(document).ready(function() {
        $("a").click(function() {
            var t = $(this).attr("href"),
                i = $(t).offset().top;
            return jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: i
            }, 800), !1
        })
    }),
    function(t) {
        t.fn.selectbox = function() {
            var i = t(".selectBox").height();
            t(".selectBox").click(function() {
                t(".selectBox").removeClass("select-shadow").removeClass("z-index").height(i), t(".selectBox").parent().find("img.arrow").hasClass("open-arrow") && t(".selectBox").parent().find("img.arrow").css({
                    transform: "rotate(0)"
                }), t(this).toggleClass("select-shadow").toggleClass("z-index");
                var e = t(this).height();
                if (e < 30 || e == i) {
                    var s = t(this).children().children().length,
                        o = 45 * s;
                    switch (s) {
                        case 1:
                            o = 70 * s;
                            break;
                        case 2:
                            o = 50 * s;
                            break;
                        default:
                            o = 45 * s
                    }
                    t(this).height(o), t(this).parent().find("img.arrow").css({
                        borderRadius: "1000px",
                        transition: ".2s",
                        transform: "rotate(180deg)"
                    }), t(this).parent().find("img.arrow").toggleClass("open-arrow")
                }
                e > 30 && (t(this).height(i), t(this).parent().find("img.arrow").css({
                    transform: "rotate(0deg)"
                }))
            }), t("li.option").click(function() {
                t(this).parent().parent().height(i), t(this).parent().parent().find("img.arrow").css({
                    transform: "rotate(0deg)"
                }), t(this).parent().parent().find("p.valueTag").text(t(this).text())
            })
        }
    }(jQuery),
    function() {
        t.initialize();
    }();