(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-79c65f3e"], {
        "2fdb": function(t, n, e) {
            "use strict";
            var i = e("5ca1"),
                c = e("d2c8"),
                a = "includes";
            i(i.P + i.F * e("5147")(a), "String", {
                includes: function(t) {
                    return !!~c(this, t, a).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        5147: function(t, n, e) {
            var i = e("2b4c")("match");
            t.exports = function(t) {
                var n = /./;
                try {
                    "/./" [t](n)
                } catch (e) {
                    try {
                        return n[i] = !1, !"/./" [t](n)
                    } catch (t) {}
                }
                return !0
            }
        },
        6762: function(t, n, e) {
            "use strict";
            var i = e("5ca1"),
                c = e("c366")(!0);
            i(i.P, "Array", {
                includes: function(t) {
                    return c(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), e("9c6c")("includes")
        },
        aae3: function(t, n, e) {
            var i = e("d3f4"),
                c = e("2d95"),
                a = e("2b4c")("match");
            t.exports = function(t) {
                var n;
                return i(t) && (void 0 !== (n = t[a]) ? !!n : "RegExp" == c(t))
            }
        },
        d2c8: function(t, n, e) {
            var i = e("aae3"),
                c = e("be13");
            t.exports = function(t, n, e) {
                if (i(n)) throw TypeError("String#" + e + " doesn't accept regex!");
                return String(c(t))
            }
        },
        d88a: function(t, n, e) {
            "use strict";
            e.r(n);
            var i = (e("6762"), e("2fdb"), e("f091")),
                c = e("9301"),
                a = e("2885"),
                o = {
                    functional: !0,
                    render(t, n) {
                        const {
                            _c: e,
                            _v: i,
                            data: c,
                            children: a = []
                        } = n, {
                            class: o,
                            staticClass: r,
                            style: s,
                            staticStyle: u,
                            attrs: l = {},
                            ...d
                        } = c;
                        return e("svg", {
                            class: [o, r],
                            style: [s, u],
                            attrs: Object.assign({
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "-1.8 -0.59 13 14"
                            }, l),
                            ...d
                        }, a.concat([e("path", {
                            attrs: {
                                d: "M0 6.24L8.5 0v3.37L4.31 6.24 8.5 9.13v3.37L0 6.24z"
                            }
                        })]))
                    }
                },
                r = e("f0ce"),
                s = {
                    components: {
                        NnnLogo: i.a,
                        NnnButton: c.a,
                        NnnArrowLeft: o,
                        NnnMusicIcon: a.a
                    },
                    props: {
                        profile: {
                            type: Object,
                            required: !0
                        },
                        accountContent: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: {
                        title: function() {
                            return r.j[this.accountContent]
                        },
                        subtitle: function() {
                            var t = this.profile ? this.profile.firstName : "";
                            return (r.i[this.accountContent] || function() {
                                return ""
                            })({
                                firstName: t
                            })
                        },
                        displayLogo: function() {
                            return this.accountContent === r.a
                        }
                    },
                    methods: {
                        goToLangingPage: function() {
                            this.$emit("go-to-landing-page", {
                                redirectToProfile: [r.g, r.f].includes(this.accountContent)
                            })
                        }
                    }
                },
                u = e("2877"),
                l = Object(u.a)(s, function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("div", {
                        staticClass: "u-display-flex u-flex-justify-space-between u-flex-1"
                    }, [t.displayLogo ? e("nnn-logo", {
                        nativeOn: {
                            click: function(n) {
                                return t.$emit("go-to-landing-page")
                            }
                        }
                    }) : e("button", {
                        staticClass: "c-header__back",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: t.goToLangingPage
                        }
                    }, [e("nnn-arrow-left", {
                        attrs: {
                            width: "16",
                            height: "16"
                        }
                    })], 1), e("div", {
                        staticClass: "c-mobile-header"
                    }, [e("h2", [t._v(t._s(t.title))]), e("h6", {
                        staticClass: "u-opacity-50"
                    }, [t._v(t._s(t.subtitle))])]), e("div", {
                        staticClass: "c-header__action"
                    }, [t.displayLogo ? e("nnn-music-icon", {
                        staticClass: "u-mr-4"
                    }) : t._e(), e("nnn-button", {
                        attrs: {
                            variation: "clear"
                        },
                        on: {
                            click: function(n) {
                                return t.$emit("toggle-menu-dialog")
                            }
                        }
                    }, [e("div", {
                        staticClass: "c-mobile-menu"
                    })])], 1)], 1)
                }, [], !1, null, null, null);
            n.default = l.exports
        }
    }
]);