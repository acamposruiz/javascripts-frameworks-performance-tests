(function (t) {
  function e(e) {
    for (var o, i, r = e[0], c = e[1], l = e[2], p = 0, v = []; p < r.length; p++) i = r[p], a[i] && v.push(a[i][0]), a[i] = 0;
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
    u && u(e);
    while (v.length) v.shift()();
    return s.push.apply(s, l || []), n()
  }

  function n() {
    for (var t, e = 0; e < s.length; e++) {
      for (var n = s[e], o = !0, r = 1; r < n.length; r++) {
        var c = n[r];
        0 !== a[c] && (o = !1)
      }
      o && (s.splice(e--, 1), t = i(i.s = n[0]))
    }
    return t
  }

  var o = {}, a = {app: 0}, s = [];

  function i(e) {
    if (o[e]) return o[e].exports;
    var n = o[e] = {i: e, l: !1, exports: {}};
    return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports
  }

  i.m = t, i.c = o, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
  }, i.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) i.d(n, o, function (e) {
      return t[e]
    }.bind(null, o));
    return n
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"]
    } : function () {
      return t
    };
    return i.d(e, "a", e), e
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = "/";
  var r = window["webpackJsonp"] = window["webpackJsonp"] || [], c = r.push.bind(r);
  r.push = e, r = r.slice();
  for (var l = 0; l < r.length; l++) e(r[l]);
  var u = c;
  s.push([0, "chunk-vendors"]), n()
})({
  0: function (t, e, n) {
    t.exports = n("56d7")
  }, "034f": function (t, e, n) {
    "use strict";
    var o = n("64a9"), a = n.n(o);
    a.a
  }, "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("097d");
    var o = n("2b0e"), a = function () {
        var t = this, e = t.$createElement, o = t._self._c || e;
        return o("div", {attrs: {id: "app"}}, [o("div", {staticClass: "App-intro content"}, t._l(t.mockData, function (e, n) {
          return o("div", {key: n, style: e.style}, [t._v(t._s(e.content))])
        }), 0), o("div", {staticClass: "modal-container"}, [o("div", {staticClass: "modal-head"}, [o("div", {staticClass: "controls"}, [o("button", {
          class: t.toggleButton.className,
          on: {click: t.switchState}
        }, [t._v("\n          " + t._s(t.toggleButton.text) + "\n        ")]), o("button", {on: {click: t.clear}}, [t._v("\n          CLEAR\n        ")])]), o("div", {staticClass: "logo"}, [o("h5", {staticClass: "App-title"}, [o("img", {
          attrs: {
            alt: "Vue logo",
            src: n("cf05")
          }
        }), t._v("\n          Vue\n          "), o("small", [t._v("(" + t._s(t.VUE_VERSION) + ")")])])])]), o("div", {staticClass: "modal-content"}, [o("div", {staticClass: "content"}, [o("div", {staticClass: "counter elements"}, [o("p", [o("span", [t._v(t._s(t.elements))])]), o("small", [t._v("elements")])]), o("div", {staticClass: "counter time"}, [o("p", [o("span", [t._v(t._s(t.time))])]), o("small", [t._v("seconds")])])])]), o("div", {staticClass: "modal-foot"}, t._l(t.elnumOptions, function (e, n) {
          return o("button", {
            key: n,
            class: t.elnumValue === e ? "active" : "no-active",
            on: {
              click: function (n) {
                t.setElnumValue(e)
              }
            }
          }, [t._v(" " + t._s(e) + " ")])
        }), 0), o("div", {staticClass: "info"}, [o("a", {
          staticClass: "social github-icon",
          attrs: {
            target: "_blank",
            href: "https://github.com/acamposruiz/jsTestsByGamming/blob/master/vue-test/src/App.vue"
          }
        }, [o("img", {
          staticClass: "img-social",
          attrs: {alt: "Github", src: t.logoGithub}
        }), o("span", [t._v("View source code")])])])]), o("div", {staticClass: "back-container"}, [o("a", {
          staticClass: "back-link",
          attrs: {
            title: "Go back",
            href: "https://acamposruiz.github.io/jsTestsByGamming/builds/home/index.html"
          }
        }, [o("img", {staticClass: "img-social", attrs: {alt: "Github", src: t.backIcon}})])])])
      }, s = [], i = n("5176"), r = n.n(i), c = n("2ef0"), l = n.n(c), u = n("e765"), p = n.n(u),
      v = n("e59e"), f = n.n(v), d = 1500, m = [500, 1e3, 1500, 3e3, 5e3, 1e4],
      g = ["red", "cyan", "grey", "purple", "black", "blue", "yellow", "pink", "orange", "brown", "green"],
      b = void 0, h = (new o["a"])["$options"]._base.version, _ = {
        name: "app", computed: {
          elements: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
              e = 0 === t.step ? "000" : t.step < 10 ? "00" : t.step < 100 ? "0" : "";
            return "".concat(e).concat(10 * t.step)
          }, time: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
            return "".concat(t.secondsCounter < 10 ? "0" : "").concat(t.secondsCounter)
          }, toggleButton: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
            return {
              className: t.isToggleOn ? "active" : "no-active",
              text: t.isToggleOn ? "STOP" : "START"
            }
          }
        }, methods: {
          setElnumValue: function (t) {
            var e = this;
            e.clear(!0), e.elnumValue = t
          }, switchState: function () {
            var t = this, e = 0;
            t.isToggleOn = !t.isToggleOn, t.int ? (clearInterval(t.int), t.int = void 0, clearInterval(t.timer)) : (t.timer = setInterval(function () {
              e += 1
            }, 1e3), t.int = setInterval(function () {
              if (10 * t.step >= t.elnumValue) t.clear(!1); else {
                var n = t.step + 1;
                r()(t, {
                  secondsCounter: e,
                  step: n,
                  mockData: l.a.shuffle(l.a.range(10 * n).map(function (e, n) {
                    return {style: t.divStyle(), content: n}
                  }))
                })
              }
            }, 1))
          }, divStyle: function () {
            function t() {
              return l.a.shuffle(g)[0]
            }

            return {color: t(), backgroundColor: t()}
          }, clear: function (t) {
            var e = this;
            clearInterval(e.timer), e.int && clearInterval(e.int), t && r()(e, {
              secondsCounter: 0,
              mockData: [],
              step: 0
            }), r()(e, {isToggleOn: !1, int: void 0})
          }
        }, data: function () {
          return {
            logoGithub: p.a,
            backIcon: f.a,
            VUE_VERSION: h,
            mockData: [],
            isToggleOn: !1,
            step: 0,
            elnumValue: d,
            elnumOptions: m,
            secondsCounter: 0,
            int: void 0,
            timer: void 0
          }
        }
      }, y = _, C = (n("034f"), n("2877")), k = Object(C["a"])(y, a, s, !1, null, null, null);
    k.options.__file = "App.vue";
    var O = k.exports;
    o["a"].config.productionTip = !1, new o["a"]({
      render: function (t) {
        return t(O)
      }
    }).$mount("#app")
  }, "64a9": function (t, e, n) {
  }, cf05: function (t, e, n) {
    t.exports = n.p + "jsTestsByGamming/builds/vue/img/logo.82b9c7a5.png"
  }, e59e: function (t, e, n) {
    t.exports = n.p + "jsTestsByGamming/builds/vue/img/back.290174b6.svg"
  }, e765: function (t, e, n) {
    t.exports = n.p + "jsTestsByGamming/builds/vue/img/github-icon.2b8bb9ed.svg"
  }
});
//# sourceMappingURL=app.c63203b4.js.map