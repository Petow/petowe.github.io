! function r(o, t, n) {
    function e(a, f) {
        if (!t[a]) {
            if (!o[a]) {
                var d = "function" == typeof require && require;
                if (!f && d) return d(a, !0);
                if (i) return i(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = t[a] = {
                exports: {}
            };
            o[a][0].call(u.exports, function(r) {
                var t = o[a][1][r];
                return e(t ? t : r)
            }, u, u.exports, r, o, t, n)
        }
        return t[a].exports
    }
    for (var i = "function" == typeof require && require, a = 0; a < n.length; a++) e(n[a]);
    return e
}({
    1: [function(r, o, t) {
        "use strict";
        var n = document.getElementById("canvas"),
            e = n.getContext("2d"),
            i = window.innerWidth,
            a = window.innerHeight,
            f = void 0,
            d = void 0,
            c = {
                x: i / 2,
                y: a / 2
            };
        n.width = i, n.height = a;
        var u = function() {
                return Math.random() - .5
            },
            h = function() {
                return Math.floor(255 * Math.random())
            },
            l = function(r) {
                return -1 / 3600 * r * (r - 120)
            },
            v = function(r, o) {
                r.vx = o * u(), r.vy = o * u(), r.period = 60 + 60 * Math.random()
            },
            y = function(r) {
                for (f = [], d = []; r--;) {
                    var o = {
                        x: Math.random() * i,
                        y: Math.random() * a,
                        radius: 5 * Math.random() + 5,
                        color: "rgb(" + h() + "," + h() + "," + h() + ")"
                    };
                    v(o, 2), f.push(o)
                }
                f.forEach(function(r, o) {
                    f.slice(o + 1).forEach(function(o) {
                        d.push({
                            from: r,
                            to: o
                        })
                    })
                })
            },
            x = function r() {
                f.forEach(function(r) {
                    (r.x > i || r.x < 0) && (r.vx = -r.vx), (r.y > a || r.y < 0) && (r.vy = -r.vy);
                    var o = l(r.period);
                    r.x += r.vx * o, r.y += r.vy * o, r.period--, r.period < 0 && v(r, 2)
                }), e.clearRect(0, 0, i, a), d.forEach(function(r) {
                    var o = r.from,
                        t = r.to,
                        n = Math.pow(o.x - t.x, 2) + Math.pow(o.y - t.y, 2),
                        i = 1e5,
                        a = 1 - n / i;
                    n > i || (e.lineWidth = a, e.strokeStyle = o.color, e.beginPath(), e.moveTo(o.x, o.y), e.lineTo(t.x, t.y), e.stroke())
                }), f.forEach(function(r) {
                    var o = r.x,
                        t = r.y,
                        n = r.radius,
                        i = r.color;
                    e.fillStyle = i, e.beginPath(), e.arc(o, t, n, 0, 2 * Math.PI), e.fill()
                });
                var o = c.x,
                    t = c.y,
                    n = e.createRadialGradient(o, t, 100, o, t, 2e3);
                n.addColorStop(0, "rgba(255,255,255,0.7)"), n.addColorStop(.06, "rgba(255,255,255,1)"), e.fillStyle = n, e.fillRect(0, 0, i, a), requestAnimationFrame(r)
            };
        window.addEventListener("mousemove", function(r) {
            var o = r.clientX,
                t = r.clientY,
                n = o - c.x,
                e = t - c.y;
            Math.pow(n, 2) + Math.pow(e, 2) > 100 && (c.x = o, c.y = t)
        }), window.addEventListener("resize", function() {
            i = window.innerWidth, a = window.innerHeight, f = [], d = [], y(Math.floor(i / 20)), n.width = i, n.height = a
        }), i > 450 && (y(Math.floor(i / 20)), x())
    }, {}]
}, {}, [1]);
