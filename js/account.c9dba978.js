(window.webpackJsonp = window.webpackJsonp || []).push([
    ["account"], {
        "6dc9": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = (n("8e6e"), n("ac6a"), n("456d"), n("bd86")),
                o = n("5a50"),
                c = n("9301"),
                i = n("2f62");

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var s = {
                    name: "LandingPage",
                    components: {
                        NnnButton: c.a
                    },
                    methods: function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? a(n, !0).forEach(function(e) {
                                Object(r.a)(t, e, n[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(n).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            })
                        }
                        return t
                    }({}, Object(i.b)({
                        setPreset: "setPreset"
                    }), {
                        goToRegistration: function() {
                            this.$router.push({
                                name: o.x
                            })
                        }
                    }),
                    created: function() {
                        this.setPreset({
                            name: o.s
                        })
                    }
                },
                u = n("2877"),
                p = Object(u.a)(s, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "c-landing"
                    }, [n("div", {
                        staticClass: "c-landing__action"
                    }, [n("nnn-button", {
                        attrs: {
                            "font-size": "lg",
                            color: "primary",
                            variation: "contain"
                        },
                        on: {
                            click: function(e) {
                                return t.goToRegistration()
                            }
                        }
                    }, [t._v("\n      Apply for Membership\n    ")])], 1)])
                }, [], !1, null, null, null);
            e.default = p.exports
        }
    }
]);