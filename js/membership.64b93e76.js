(window.webpackJsonp = window.webpackJsonp || []).push([
    ["membership"], {
        "0347": function(e, t, r) {
            "use strict";
            const n = /iPhone/i,
                i = /iPod/i,
                s = /iPad/i,
                o = /\bAndroid(?:.+)Mobile\b/i,
                a = /Android/i,
                c = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
                u = /Silk/i,
                l = /Windows Phone/i,
                d = /\bWindows(?:.+)ARM\b/i,
                f = /BlackBerry/i,
                h = /BB10/i,
                p = /Opera Mini/i,
                m = /\b(CriOS|Chrome)(?:.+)Mobile/i,
                v = /Mobile(?:.+)Firefox\b/i;

            function y(e, t) {
                return e.test(t)
            }

            function g(e) {
                let t = (e = e || ("undefined" != typeof navigator ? navigator.userAgent : "")).split("[FBAN");
                void 0 !== t[1] && (e = t[0]), void 0 !== (t = e.split("Twitter"))[1] && (e = t[0]);
                const r = {
                    apple: {
                        phone: y(n, e) && !y(l, e),
                        ipod: y(i, e),
                        tablet: !y(n, e) && y(s, e) && !y(l, e),
                        device: (y(n, e) || y(i, e) || y(s, e)) && !y(l, e)
                    },
                    amazon: {
                        phone: y(c, e),
                        tablet: !y(c, e) && y(u, e),
                        device: y(c, e) || y(u, e)
                    },
                    android: {
                        phone: !y(l, e) && y(c, e) || !y(l, e) && y(o, e),
                        tablet: !y(l, e) && !y(c, e) && !y(o, e) && (y(u, e) || y(a, e)),
                        device: !y(l, e) && (y(c, e) || y(u, e) || y(o, e) || y(a, e)) || y(/\bokhttp\b/i, e)
                    },
                    windows: {
                        phone: y(l, e),
                        tablet: y(d, e),
                        device: y(l, e) || y(d, e)
                    },
                    other: {
                        blackberry: y(f, e),
                        blackberry10: y(h, e),
                        opera: y(p, e),
                        firefox: y(v, e),
                        chrome: y(m, e),
                        device: y(f, e) || y(h, e) || y(p, e) || y(v, e) || y(m, e)
                    },
                    any: !1,
                    phone: !1,
                    tablet: !1
                };
                return r.any = r.apple.device || r.android.device || r.windows.device || r.other.device, r.phone = r.apple.phone || r.android.phone || r.windows.phone, r.tablet = r.apple.tablet || r.android.tablet || r.windows.tablet, r
            }
            r.d(t, "a", function() {
                return g
            })
        },
        "1cba": function(e, t, r) {
            var n = r("4796"),
                i = r("9aff"),
                s = r("6428");
            e.exports = function(e) {
                return function(t, r, o) {
                    return o && "number" != typeof o && i(t, r, o) && (r = o = void 0), t = s(t), void 0 === r ? (r = t, t = 0) : r = s(r), o = void 0 === o ? t < r ? 1 : -1 : s(o), n(t, r, o, e)
                }
            }
        },
        "1e64": function(e, t, r) {
            "use strict";
            var n = r("ec56");
            r.n(n).a
        },
        "20d6": function(e, t, r) {
            "use strict";
            var n = r("5ca1"),
                i = r("0a49")(6),
                s = "findIndex",
                o = !0;
            s in [] && Array(1)[s](function() {
                o = !1
            }), n(n.P + n.F * o, "Array", {
                findIndex: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), r("9c6c")(s)
        },
        "2a12": function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r("78ef");
            t.default = function(e) {
                return (0, n.withParams)({
                    type: "maxLength",
                    max: e
                }, function(t) {
                    return !(0, n.req)(t) || (0, n.len)(t) <= e
                })
            }
        },
        "2fdb": function(e, t, r) {
            "use strict";
            var n = r("5ca1"),
                i = r("d2c8"),
                s = "includes";
            n(n.P + n.F * r("5147")(s), "String", {
                includes: function(e) {
                    return !!~i(this, e, s).indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        3846: function(e, t, r) {
            r("9e1e") && "g" != /./g.flags && r("86cc").f(RegExp.prototype, "flags", {
                configurable: !0,
                get: r("0bfb")
            })
        },
        "386d": function(e, t, r) {
            "use strict";
            var n = r("cb7c"),
                i = r("83a1"),
                s = r("5f1b");
            r("214f")("search", 1, function(e, t, r, o) {
                return [function(r) {
                    var n = e(this),
                        i = null == r ? void 0 : r[t];
                    return void 0 !== i ? i.call(r, n) : new RegExp(r)[t](String(n))
                }, function(e) {
                    var t = o(r, e, this);
                    if (t.done) return t.value;
                    var a = n(e),
                        c = String(this),
                        u = a.lastIndex;
                    i(u, 0) || (a.lastIndex = 0);
                    var l = s(a, c);
                    return i(a.lastIndex, u) || (a.lastIndex = u), null === l ? -1 : l.index
                }]
            })
        },
        "408c": function(e, t, r) {
            var n = r("2b3e");
            e.exports = function() {
                return n.Date.now()
            }
        },
        4796: function(e, t) {
            var r = Math.ceil,
                n = Math.max;
            e.exports = function(e, t, i, s) {
                for (var o = -1, a = n(r((t - e) / (i || 1)), 0), c = Array(a); a--;) c[s ? a : ++o] = e, e += i;
                return c
            }
        },
        5147: function(e, t, r) {
            var n = r("2b4c")("match");
            e.exports = function(e) {
                var t = /./;
                try {
                    "/./" [e](t)
                } catch (r) {
                    try {
                        return t[n] = !1, !"/./" [e](t)
                    } catch (e) {}
                }
                return !0
            }
        },
        "5a3a": function(e, t, r) {
            var n = r("1cba")();
            e.exports = n
        },
        "5d75": function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = (0, r("78ef").regex)("email", /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);
            t.default = n
        },
        "5db3": function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r("78ef");
            t.default = function(e) {
                return (0, n.withParams)({
                    type: "minLength",
                    min: e
                }, function(t) {
                    return !(0, n.req)(t) || (0, n.len)(t) >= e
                })
            }
        },
        "5dbc": function(e, t, r) {
            var n = r("d3f4"),
                i = r("8b97").set;
            e.exports = function(e, t, r) {
                var s, o = t.constructor;
                return o !== r && "function" == typeof o && (s = o.prototype) !== r.prototype && n(s) && i && i(e, s), e
            }
        },
        6762: function(e, t, r) {
            "use strict";
            var n = r("5ca1"),
                i = r("c366")(!0);
            n(n.P, "Array", {
                includes: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), r("9c6c")("includes")
        },
        "6b54": function(e, t, r) {
            "use strict";
            r("3846");
            var n = r("cb7c"),
                i = r("0bfb"),
                s = r("9e1e"),
                o = "toString",
                a = /./ [o],
                c = function(e) {
                    r("2aba")(RegExp.prototype, o, e, !0)
                };
            r("79e5")(function() {
                return "/a/b" != a.call({
                    source: "a",
                    flags: "b"
                })
            }) ? c(function() {
                var e = n(this);
                return "/".concat(e.source, "/", "flags" in e ? e.flags : !s && e instanceof RegExp ? i.call(e) : void 0)
            }) : a.name != o && c(function() {
                return a.call(this)
            })
        },
        "83a1": function(e, t) {
            e.exports = Object.is || function(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }
        },
        "8b97": function(e, t, r) {
            var n = r("d3f4"),
                i = r("cb7c"),
                s = function(e, t) {
                    if (i(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
                };
            e.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
                    try {
                        (n = r("9b43")(Function.call, r("11e9").f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
                    } catch (e) {
                        t = !0
                    }
                    return function(e, r) {
                        return s(e, r), t ? e.__proto__ = r : n(e, r), e
                    }
                }({}, !1) : void 0),
                check: s
            }
        },
        "93ef": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = (r("8e6e"), r("ac6a"), r("456d"), r("96cf"), r("3b8d")),
                i = r("bd86"),
                s = r("1dce"),
                o = r("2f62"),
                a = (r("7f7f"), r("6762"), r("2fdb"), r("0347")),
                c = r("9e86"),
                u = r.n(c),
                l = r("d4f4"),
                d = r.n(l),
                f = r("5d75"),
                h = r.n(f),
                p = r("b6cb"),
                m = r.n(p),
                v = r("5db3"),
                y = r.n(v),
                g = r("2a12"),
                b = r.n(g),
                O = r("a57d"),
                S = r("5a50");

            function _(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var w = function(e) {
                    return 50 !== e
                },
                D = function() {
                    var e = Object(a.a)();
                    return e.phone || e.tablet ? e.android.device ? S.c : e.apple.device ? S.r : "" : ""
                },
                E = {
                    data: function() {
                        var e = u()(S.I, function() {
                            return 50
                        });
                        return {
                            alreadyTakenUsernames: [],
                            alreadyTakenEmails: [],
                            formData: {
                                email: "",
                                username: "",
                                password: "",
                                confirmPassword: "",
                                firstName: "",
                                lastName: "",
                                dateOfBirth: null,
                                gender: "",
                                countryNationality: "",
                                mobileOS: D(),
                                psychologicalSurveyQuestions: e
                            },
                            psychologicalSurveyQuestions: this.getPsychologicalSurveyQuestions(e)
                        }
                    },
                    validations: {
                        formData: {
                            email: {
                                required: d.a,
                                email: h.a,
                                uniqueEmail: function(e) {
                                    return this.alreadyTakenEmails.indexOf(e) < 0
                                }
                            },
                            username: {
                                required: d.a,
                                uniqueUsername: function(e) {
                                    return this.alreadyTakenUsernames.indexOf(e) < 0
                                }
                            },
                            password: {
                                required: d.a,
                                minLength: y()(8),
                                maxLength: b()(50),
                                strongPasswordValidator: O.b
                            },
                            confirmPassword: {
                                sameAsPassword: m()("password")
                            },
                            firstName: {
                                required: d.a
                            },
                            lastName: {
                                required: d.a
                            },
                            dateOfBirth: {
                                required: d.a,
                                isOfLegalAge: O.a
                            },
                            gender: {
                                required: d.a,
                                notEqualToPlaceholder: function(e) {
                                    return e != S.L.GENDER
                                }
                            },
                            countryNationality: {
                                required: d.a,
                                notEqualToPlaceholder: function(e) {
                                    return e != S.L.COUNTRY_NATIONALITY
                                }
                            },
                            mobileOS: {
                                required: d.a,
                                notEqualToPlaceholder: function(e) {
                                    return e != S.L.MOBILE_OS
                                }
                            },
                            psychologicalSurveyQuestions: u()(S.I, function() {
                                return {
                                    isRangeAcceptable: w
                                }
                            })
                        }
                    },
                    computed: {
                        accountDetailsValid: function() {
                            return this.checkFieldsValidity(["username", "email", "password", "confirmPassword"])
                        },
                        personalDetailsValid: function() {
                            return this.checkFieldsValidity(["firstName", "lastName", "dateOfBirth", "gender", "countryNationality", "mobileOS"])
                        },
                        psychologicalSurveyDataValid: function() {
                            return this.checkPsychologicalSurveyFieldsValidity(Object.keys(S.I))
                        },
                        accountDetailsErrors: function() {
                            var e = this.$v.formData,
                                t = e.username,
                                r = e.email,
                                n = e.password,
                                i = e.confirmPassword,
                                s = e.$anyDirty,
                                o = e.$anyError;
                            return {
                                username: t.$anyError,
                                email: r.$anyError,
                                password: n.$anyError,
                                confirmPassword: i.$anyError,
                                $v: {
                                    $anyError: o,
                                    $anyDirty: s,
                                    username: t,
                                    email: r,
                                    password: n,
                                    confirmPassword: i
                                }
                            }
                        },
                        personalDetailsErrors: function() {
                            var e = this.$v.formData,
                                t = e.firstName,
                                r = e.lastName,
                                n = e.dateOfBirth,
                                i = e.gender,
                                s = e.countryNationality,
                                o = e.mobileOS,
                                a = e.$anyDirty,
                                c = e.$anyError;
                            return {
                                firstName: t.$anyError,
                                lastName: r.$anyError,
                                dateOfBirth: n.$anyError,
                                gender: i.$anyError,
                                countryNationality: s.$anyError,
                                mobileOS: o.$anyError,
                                $v: {
                                    $anyError: c,
                                    $anyDirty: a,
                                    firstName: t,
                                    lastName: r,
                                    dateOfBirth: n,
                                    gender: i,
                                    countryNationality: s,
                                    mobileOS: o
                                }
                            }
                        },
                        psychologicalSurveyErrors: function() {
                            var e = this.$v.formData.psychologicalSurveyQuestions,
                                t = {};
                            return Object.keys(e).forEach(function(r) {
                                r.includes("question") && (t[r] = e[r].$anyError)
                            }), t
                        }
                    },
                    methods: {
                        setField: function(e, t) {
                            this.formData[e] = t, this.$v.formData[e].$touch()
                        },
                        setPsychologicalSurveyFields: function(e, t) {
                            this.formData.psychologicalSurveyQuestions[e] = t, this.$v.formData.psychologicalSurveyQuestions[e].$touch()
                        },
                        checkFieldsValidity: function(e) {
                            var t = this,
                                r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return e.every(function(e) {
                                return !t.$v.formData[e].$anyError && (!r || t.$v.formData[e].$dirty)
                            })
                        },
                        checkPsychologicalSurveyFieldsValidity: function(e) {
                            var t = this;
                            return e.every(function(e) {
                                return !t.$v.formData.psychologicalSurveyQuestions[e].$anyError && t.$v.formData.psychologicalSurveyQuestions[e].isRangeAcceptable
                            })
                        },
                        getPsychologicalSurveyQuestions: function(e) {
                            return Object.keys(e).map(function(e) {
                                return function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? _(r, !0).forEach(function(t) {
                                            Object(i.a)(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(r).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }({}, S.I[e], {
                                    key: e
                                })
                            })
                        },
                        touchQuestionsFields: function() {
                            var e = this;
                            Object.keys(this.formData.psychologicalSurveyQuestions).forEach(function(t) {
                                return e.$v.formData.psychologicalSurveyQuestions[t].$touch()
                            })
                        },
                        resetQuestionsFields: function() {
                            var e = this;
                            Object.keys(this.formData.psychologicalSurveyQuestions).forEach(function(t) {
                                return e.$v.formData.psychologicalSurveyQuestions[t].$reset()
                            })
                        },
                        touchPrePopulatedFields: function() {
                            var e = this;
                            ["mobileOS"].forEach(function(t) {
                                e.formData[t] && e.$v.formData[t].$touch()
                            })
                        }
                    }
                },
                C = r("ee3e"),
                P = r("e081"),
                x = (r("6b54"), r("5a3a")),
                k = r.n(x),
                N = r("ba47"),
                j = (r("f559"), r("20d6"), r("5df3"), r("1c4c"), r("386d"), r("2103")),
                q = r.n(j),
                I = r("b047c"),
                T = r.n(I),
                A = r("3005"),
                $ = r("ee97"),
                F = {
                    name: "NnnSelect",
                    directives: {
                        clickOutside: q.a.directive
                    },
                    components: {
                        NnnSelectOption: A.a,
                        NnnTransition: $.a
                    },
                    props: {
                        value: {
                            type: String
                        },
                        placeholder: {
                            type: String,
                            required: !1,
                            default: ""
                        },
                        errorMessage: {
                            type: String,
                            required: !1,
                            default: ""
                        },
                        options: {
                            types: Array,
                            required: !1,
                            default: function() {
                                return []
                            }
                        }
                    },
                    data: function() {
                        return {
                            dropdownOpen: !1,
                            search: ""
                        }
                    },
                    methods: {
                        toggleDropdown: function() {
                            this.dropdownOpen = !this.dropdownOpen
                        },
                        closeDropdown: function() {
                            this.dropdownOpen = !1
                        },
                        handleClick: function(e) {
                            this.closeDropdown(), this.$emit("change", e)
                        },
                        handleClickOutside: function() {
                            this.closeDropdown()
                        },
                        handleKeyPress: function(e) {
                            var t = this;
                            if (!(e.key && e.key.length > 1)) {
                                this.search = this.search + e.key.toLowerCase(), T()(function() {
                                    t.search = ""
                                }, S.M)();
                                var r = Array.from(this.$refs.options.children),
                                    n = r.findIndex(function(e) {
                                        return e.getAttribute("value").toLowerCase().startsWith(t.search)
                                    });
                                if (-1 !== n && (this.dropdownOpen && setTimeout(function() {
                                        r[n].children[0].focus()
                                    }), !this.dropdownOpen)) {
                                    var i = r[n].getAttribute("value");
                                    i && this.$emit("change", i)
                                }
                            }
                        }
                    },
                    mounted: function() {
                        this.$el.addEventListener("keypress", this.handleKeyPress)
                    },
                    beforeDestroy: function() {
                        this.$el.removeEventListener("keypress", this.handleKeyPress)
                    }
                },
                L = r("2877"),
                M = Object(L.a)(F, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: e.handleClickOutside,
                            expression: "handleClickOutside"
                        }]
                    }, [r("div", {
                        class: ["c-input-select", {
                            "is-open": e.dropdownOpen
                        }, {
                            "has-selected-option": e.value
                        }, {
                            "has-error": e.errorMessage
                        }]
                    }, [r("input", {
                        ref: "inputElement",
                        staticClass: "c-input-select__field",
                        attrs: {
                            type: "text",
                            readonly: ""
                        },
                        domProps: {
                            value: e.value
                        },
                        on: {
                            click: e.toggleDropdown,
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.toggleDropdown(t)
                            }
                        }
                    }), r("transition", {
                        attrs: {
                            name: "vt-fade"
                        }
                    }, [r("ul", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.dropdownOpen,
                            expression: "dropdownOpen"
                        }],
                        ref: "options",
                        staticClass: "c-input-select__dropdown"
                    }, [e._t("item", e._l(e.options, function(t, n) {
                        return r("nnn-select-option", {
                            key: n + "-" + t,
                            attrs: {
                                value: t
                            },
                            nativeOn: {
                                click: function(r) {
                                    return e.handleClick(t)
                                }
                            }
                        }, [e._v(e._s(t) + "\n          ")])
                    }), {
                        closeDropdown: e.closeDropdown
                    })], 2)]), r("div", {
                        staticClass: "c-input-select__bg"
                    }), r("div", {
                        staticClass: "c-input-select__hover-bg"
                    }), r("div", {
                        staticClass: "c-input-select__shadow"
                    }), r("div", {
                        staticClass: "c-input-select__border"
                    }), r("div", {
                        staticClass: "c-input-select__label"
                    }, [e._v(e._s(e.placeholder))]), r("span", {
                        staticClass: "c-input-select__arrow"
                    })], 1), r("nnn-transition", {
                        attrs: {
                            name: "vt-error"
                        }
                    }, [e.errorMessage ? r("div", {
                        staticClass: "c-input-error"
                    }, [e._v(e._s(e.errorMessage))]) : e._e()])], 1)
                }, [], !1, null, null, null).exports,
                Q = {
                    name: "NnnDatePicker",
                    components: {
                        NnnSelect: M,
                        NnnTransition: $.a
                    },
                    props: {
                        date: {
                            type: String
                        },
                        errorMessage: {
                            type: String,
                            default: "",
                            required: !1
                        }
                    },
                    data: function() {
                        return {
                            month: {
                                value: null,
                                touched: !1
                            },
                            day: {
                                value: null,
                                touched: !1
                            },
                            year: {
                                value: null,
                                touched: !1
                            }
                        }
                    },
                    watch: {
                        date: function() {
                            this.parseDateToLocalData()
                        }
                    },
                    computed: {
                        dayOptions: function() {
                            return k()(1, this.getDaysInMonth(null === this.year.value ? 1990 : this.year.value, this.month.value) + 1)
                        }
                    },
                    methods: {
                        setField: function(e, t) {
                            "month" === e && (t === S.j[e] || this.day.value > this.getDaysInMonth(this.year.value, this.month.value)) && (this.day.value = S.j.day), this[e].value = t, this[e].touched = !0;
                            var r = this.formatDate(),
                                n = this.day.touched && this.month.touched && this.year.touched;
                            this.$emit("change", {
                                value: r,
                                touched: n
                            })
                        },
                        checkFieldsValidity: function(e) {
                            var t = this;
                            return e.every(function(e) {
                                return t[e].touched && null !== t[e].value && t[e].value !== S.j[e]
                            })
                        },
                        formatDate: function() {
                            return this.checkFieldsValidity(["month", "day", "year"]) ? new Date("".concat(this.month.value, " ").concat(this.day.value, ", ").concat(this.year.value)).toISOString() : null
                        },
                        parseDateToLocalData: function() {
                            if (this.date || !isNaN(Date.parse(this.date))) {
                                var e = new Date(this.date);
                                this.day.value = e.getDate().toString(), this.month.value = S.C[e.getMonth()], this.year.value = e.getFullYear().toString(), this.day.touched = !0, this.year.touched = !0, this.month.touched = !0
                            }
                        },
                        getDaysInMonth: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1990,
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            return t && "MONTH" !== t ? new Date(e, S.C.indexOf(t) + 1, 0).getDate() : 0
                        }
                    },
                    created: function() {
                        this.monthOptions = S.C, this.yearOptions = Object(N.b)().reverse(), this.placeholder = S.j, this.parseDateToLocalData()
                    }
                },
                B = Object(L.a)(Q, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        class: {
                            "has-error": e.errorMessage
                        }
                    }, [r("div", {
                        staticClass: "c-form-group__indented-header"
                    }, [e._v("DATE OF BIRTH")]), r("div", {
                        staticClass: "c-date-picker"
                    }, [r("nnn-select", {
                        staticClass: "c-date-picker__item",
                        attrs: {
                            value: e.month.value,
                            placeholder: e.placeholder.month,
                            options: e.monthOptions
                        },
                        on: {
                            change: function(t) {
                                return e.setField("month", t)
                            }
                        }
                    }), r("nnn-select", {
                        staticClass: "c-date-picker__item",
                        attrs: {
                            value: e.day.value,
                            placeholder: e.placeholder.day,
                            options: e.dayOptions
                        },
                        on: {
                            change: function(t) {
                                e.setField("day", t.toString())
                            }
                        }
                    }), r("nnn-select", {
                        staticClass: "c-date-picker__item",
                        attrs: {
                            value: e.year.value,
                            placeholder: e.placeholder.year,
                            options: e.yearOptions
                        },
                        on: {
                            change: function(t) {
                                e.setField("year", t.toString())
                            }
                        }
                    })], 1), r("nnn-transition", {
                        attrs: {
                            name: "vt-error"
                        }
                    }, [e.errorMessage ? r("div", {
                        staticClass: "c-input-error"
                    }, [e._v("\n      " + e._s(e.errorMessage) + "\n    ")]) : e._e()])], 1)
                }, [], !1, null, null, null).exports,
                R = r("e946");

            function U(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(r, !0).forEach(function(t) {
                        Object(i.a)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U(r).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var Y = {
                    components: {
                        NnnInput: R.a,
                        NnnSelect: M,
                        NnnDatePicker: B,
                        NnnSelectOption: A.a
                    },
                    directives: Object(i.a)({}, P.a.name, P.a),
                    props: {
                        firstName: {
                            type: String,
                            required: !0
                        },
                        dateOfBirth: {
                            required: !0,
                            validator: function(e) {
                                return "string" == typeof e || null === e
                            }
                        },
                        lastName: {
                            type: String,
                            required: !0
                        },
                        gender: {
                            type: String,
                            required: !0
                        },
                        countryNationality: {
                            type: String,
                            required: !0
                        },
                        mobileOs: {
                            type: String,
                            required: !0
                        },
                        errors: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: V({}, Object(o.c)(["countries"]), {
                        countriesWithPhoneCodes: function() {
                            var e = this;
                            return Object.keys(this.countries).filter(function(t) {
                                return e.countries[t].phoneCode
                            }).map(function(t) {
                                return e.countries[t]
                            })
                        },
                        dateOfBirthErrorMessage: function() {
                            return this.errors.dateOfBirth ? "YOU MUST BE OF LEGAL AGE TO APPLY!" : ""
                        }
                    }),
                    methods: V({}, Object(o.b)({
                        fetchCountries: "fetchCountries",
                        setPreset: "setPreset"
                    }), {
                        setField: function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                            this.$emit("set-field", e, t), r && r()
                        },
                        setDateField: function(e) {
                            this.$emit("set-date-field", e)
                        },
                        getErrorMessageForField: function(e) {
                            return this.errors[e] ? S.G[e] : null
                        }
                    }),
                    created: function() {
                        this.setPreset({
                            name: S.f
                        }), this.mobileOsOptions = S.B, this.genderOptions = S.o, this.fetchCountries()
                    }
                },
                G = Object(L.a)(Y, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "u-justify-center u-width-31 c-responsive-padding-horizontal u-mh-auto"
                    }, [r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        directives: [{
                            name: "focus",
                            rawName: "v-focus"
                        }],
                        attrs: {
                            value: e.firstName,
                            "error-message": e.errors.firstName ? " This field is required" : null,
                            type: "text",
                            name: "firstName",
                            placeholder: "First name"
                        },
                        on: {
                            change: function(t) {
                                return e.setField("firstName", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        attrs: {
                            type: "text",
                            name: "lastName",
                            placeholder: "Last name",
                            value: e.lastName,
                            "error-message": e.errors.lastName ? " This field is required" : null
                        },
                        on: {
                            change: function(t) {
                                return e.setField("lastName", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb c-date-of-birth"
                    }, [r("nnn-date-picker", {
                        attrs: {
                            date: e.dateOfBirth,
                            "error-message": e.dateOfBirthErrorMessage
                        },
                        on: {
                            change: function(t) {
                                return e.setDateField(t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-select", {
                        attrs: {
                            value: e.gender,
                            errorMessage: e.getErrorMessageForField("gender"),
                            placeholder: "GENDER",
                            options: e.genderOptions
                        },
                        on: {
                            change: function(t) {
                                return e.setField("gender", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-select", {
                        attrs: {
                            value: e.countryNationality,
                            errorMessage: e.getErrorMessageForField("countryNationality"),
                            placeholder: "COUNTRY"
                        },
                        on: {
                            change: function(t) {
                                return e.setField("countryNationality", t)
                            }
                        },
                        scopedSlots: e._u([{
                            key: "item",
                            fn: function(t) {
                                return e._l(e.countries, function(n, i) {
                                    return r("nnn-select-option", {
                                        key: "nationality-" + i,
                                        attrs: {
                                            value: n.name
                                        },
                                        nativeOn: {
                                            click: function(r) {
                                                return e.setField("countryNationality", n.name, t.closeDropdown)
                                            }
                                        }
                                    }, [e._v(e._s(n.name))])
                                })
                            }
                        }])
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-select", {
                        attrs: {
                            value: e.mobileOs,
                            errorMessage: e.getErrorMessageForField("mobileOS"),
                            placeholder: "MOBILE OS",
                            options: e.mobileOsOptions
                        },
                        on: {
                            change: function(t) {
                                return e.setField("mobileOS", t)
                            }
                        }
                    })], 1)])
                }, [], !1, null, null, null).exports,
                H = r("f320");

            function z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var W = {
                    name: "AccountDetailsComponent",
                    components: {
                        NnnInput: R.a,
                        NnnSimpleDialog: H.a
                    },
                    directives: Object(i.a)({}, P.a.name, P.a),
                    props: {
                        username: {
                            type: String,
                            required: !0
                        },
                        email: {
                            type: String,
                            required: !0
                        },
                        password: {
                            type: String,
                            required: !0
                        },
                        confirmPassword: {
                            type: String,
                            required: !0
                        },
                        errors: {
                            type: Object,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            showDialog: !1
                        }
                    },
                    computed: {
                        usernameErrorMessage: function() {
                            return this.errors.username ? this.errors.$v.username.required ? "Username is already taken" : "This field is required" : ""
                        },
                        emailErrorMessage: function() {
                            return this.errors.email ? this.errors.$v.email.uniqueEmail ? "Incorrect value" : "Email is already taken" : ""
                        }
                    },
                    methods: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? z(r, !0).forEach(function(t) {
                                Object(i.a)(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z(r).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({}, Object(o.b)({
                        setPreset: "setPreset"
                    }), {
                        setField: function(e, t) {
                            this.$emit("set-field", e, t)
                        }
                    }),
                    created: function() {
                        this.setPreset({
                            name: S.e
                        })
                    }
                },
                K = (r("1e64"), Object(L.a)(W, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "u-justify-center u-mh-auto u-width-31 c-responsive-padding-horizontal u-display-flex u-flex-direction-column u-justify-center u-flex-1-1-auto"
                    }, [r("div", [r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        directives: [{
                            name: "focus",
                            rawName: "v-focus"
                        }],
                        attrs: {
                            type: "text",
                            name: "username",
                            placeholder: "Username",
                            "case-sensitive": "",
                            value: e.username,
                            "error-message": e.usernameErrorMessage
                        },
                        on: {
                            change: function(t) {
                                return e.setField("username", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        attrs: {
                            type: "email",
                            name: "email",
                            placeholder: "Email",
                            autocomplete: "email",
                            value: e.email,
                            "error-message": e.emailErrorMessage
                        },
                        on: {
                            change: function(t) {
                                return e.setField("email", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        attrs: {
                            value: e.password,
                            type: "password",
                            name: "password",
                            placeholder: "Password",
                            autocomplete: "new-password",
                            "error-message": e.errors.password ? " Password is required and must contain 8 - 50 characters, at least 1 letter and 1 number!" : null,
                            "case-sensitive": ""
                        },
                        on: {
                            change: function(t) {
                                return e.setField("password", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        attrs: {
                            value: e.confirmPassword,
                            type: "password",
                            name: "confirmPassword",
                            placeholder: "Confirm password",
                            autocomplete: "new-password",
                            "error-message": e.errors.confirmPassword ? "This field must be same as password" : null,
                            "case-sensitive": ""
                        },
                        on: {
                            change: function(t) {
                                return e.setField("confirmPassword", t)
                            }
                        }
                    })], 1)]), r("transition", {
                        attrs: {
                            name: "vt-fade"
                        }
                    }, [e.showDialog ? r("nnn-simple-dialog", {
                        attrs: {
                            type: e.dialogType
                        },
                        on: {
                            close: function(t) {
                                e.showDialog = !1
                            }
                        }
                    }) : e._e()], 1)], 1)
                }, [], !1, null, null, null)).exports,
                J = (r("7514"), r("c5f6"), r("51f5")),
                X = r.n(J),
                Z = {
                    name: "PsychologicalSurveyListItem",
                    props: {
                        question: {
                            type: Object,
                            required: !0
                        },
                        isQuestionActive: {
                            type: Boolean,
                            required: !0
                        },
                        value: {
                            type: Number,
                            required: !0
                        }
                    },
                    computed: {
                        questionColorClasses: function() {
                            return function(e) {
                                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                if (t) {
                                    if (50 === e) return {};
                                    var r = parseInt(e / 10),
                                        n = 5 === r ? 6 : r;
                                    return ["c-question-color-primary-".concat(n)]
                                }
                            }
                        },
                        questionColorTransition: function() {
                            return function(e) {
                                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                return t ? e : 50
                            }
                        },
                        sliderBackgroundStyles: function() {
                            var e = this;
                            return function(t) {
                                var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                return !r || n ? ["u-color-transparent"] : [e.questionColorClasses(t, r)]
                            }
                        }
                    }
                },
                ee = Object(L.a)(Z, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("li", [r("div", {
                        class: ["c-question", {
                            "is--active": e.isQuestionActive
                        }, {
                            "is--answered": e.value > 50 || e.value < 50
                        }]
                    }, [r("span", {
                        class: ["c-question__label", e.questionColorClasses(e.value, e.value < 50)]
                    }, [e._v(e._s(e.question.option1))]), r("div", {
                        staticClass: "c-question__slider-wrapper"
                    }, [r("div", {
                        staticClass: "c-range-slider c-range-slider--responsive-rotated"
                    }, [r("div", {
                        staticClass: "c-range-slider__current-bg"
                    }, [r("div", {
                        staticClass: "c-range-slider__current-bg-left"
                    }, [r("span", {
                        class: ["c-range-slider__current-bg-el", e.sliderBackgroundStyles(e.value, e.value < 50, e.value >= 50)],
                        style: "transform: translate3d(" + 2 * e.questionColorTransition(e.value, e.value < 50) + "%, 0, 0)"
                    })]), r("div", {
                        staticClass: "c-range-slider__current-bg-right"
                    }, [r("span", {
                        class: ["c-range-slider__current-bg-el", e.sliderBackgroundStyles(e.value, e.value > 50, e.value <= 50)],
                        style: "transform: translate3d(" + 2 * (e.questionColorTransition(e.value, e.value > 50) - 100) + "%, 0, 0)"
                    })])]), r("input", {
                        staticClass: "c-range-slider__input",
                        attrs: {
                            disabled: !e.isQuestionActive,
                            type: "range",
                            name: "name",
                            min: "0",
                            max: "100"
                        },
                        domProps: {
                            value: e.value
                        },
                        on: {
                            input: function(t) {
                                return e.$emit("set-field", e.question.key, t.target.value)
                            },
                            change: function(t) {
                                return e.$emit("change")
                            }
                        }
                    })])]), r("span", {
                        class: ["c-question__label", e.questionColorClasses(e.value, e.value > 50)]
                    }, [e._v(e._s(e.question.option2))])])])
                }, [], !1, null, null, null).exports,
                te = {
                    name: "ProgressDot",
                    props: {
                        isActive: {
                            type: Boolean,
                            required: !0
                        },
                        value: {
                            type: Number,
                            required: !0
                        },
                        hasError: {
                            type: Boolean,
                            required: !1,
                            default: !0
                        }
                    }
                },
                re = Object(L.a)(te, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        class: ["dot", {
                            "is-current": e.isActive
                        }, {
                            "is-larger": e.value > 50
                        }, {
                            "is-lower": e.value < 50
                        }, {
                            "has-error": e.hasError
                        }]
                    }, [r("span")])
                }, [], !1, null, null, null).exports,
                ne = {
                    functional: !0,
                    render(e, t) {
                        const {
                            _c: r,
                            _v: n,
                            data: i,
                            children: s = []
                        } = t, {
                            class: o,
                            staticClass: a,
                            style: c,
                            staticStyle: u,
                            attrs: l = {},
                            ...d
                        } = i;
                        return r("svg", {
                            class: [o, a],
                            style: [c, u],
                            attrs: Object.assign({
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 13 10"
                            }, l),
                            ...d
                        }, s.concat([r("path", {
                            staticClass: "path",
                            attrs: {
                                d: "M6.46.5L12.7 9H9.33L6.46 4.81 3.57 9H.2L6.46.5z"
                            }
                        })]))
                    }
                },
                ie = {
                    functional: !0,
                    render(e, t) {
                        const {
                            _c: r,
                            _v: n,
                            data: i,
                            children: s = []
                        } = t, {
                            class: o,
                            staticClass: a,
                            style: c,
                            staticStyle: u,
                            attrs: l = {},
                            ...d
                        } = i;
                        return r("svg", {
                            class: [o, a],
                            style: [c, u],
                            attrs: Object.assign({
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 13 10"
                            }, l),
                            ...d
                        }, s.concat([r("path", {
                            attrs: {
                                d: "M6.74 9L.5.5h3.37l2.87 4.19L9.63.5H13L6.74 9z"
                            }
                        })]))
                    }
                },
                se = r("16e1");

            function oe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oe(r, !0).forEach(function(t) {
                        Object(i.a)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oe(r).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ce, ue = {
                    components: {
                        PsychologicalSurveyListItem: ee,
                        ProgressDot: re,
                        ArrowUpIcon: ne,
                        ArrowDownIcon: ie
                    },
                    props: {
                        questions: {
                            required: !0,
                            type: Array
                        },
                        questionsData: {
                            required: !0,
                            type: Object
                        },
                        errors: {
                            required: !0,
                            type: Object
                        }
                    },
                    data: function() {
                        return {
                            currentQuestionIndex: 0,
                            scrollListenerAttached: !1
                        }
                    },
                    computed: ae({}, Object(o.c)({
                        displayErrors: "hasGlobalError"
                    }), {
                        currentQuestion: function() {
                            return Object.keys(this.questionsData)[this.currentQuestionIndex]
                        },
                        answeredQuestions: function() {
                            var e = this;
                            return Object.keys(this.questionsData).map(function(t) {
                                return e.questionsData[t]
                            }).filter(function(e) {
                                return 50 !== e
                            }).length
                        },
                        audioSegment: function() {
                            var e = [C.d, C.e, C.f],
                                t = parseInt(this.answeredQuestions / 6);
                            return e[3 === t ? 2 : t]
                        }
                    }),
                    watch: {
                        answeredQuestions: function(e, t) {
                            e !== t && (parseInt(e / 5) !== parseInt(t / 5) && this.setQuestionPreset(e - 1))
                        },
                        audioSegment: function(e, t) {
                            e !== t && this.playAudio()
                        },
                        displayErrors: function(e) {
                            return e ? this.setPreset({
                                name: S.d,
                                withoutAudioEffects: !0
                            }) : this.setQuestionPreset(this.answeredQuestions, !0)
                        }
                    },
                    methods: ae({}, Object(o.b)({
                        setPreset: "setPreset"
                    }), {
                        onChangedValue: function() {
                            var e = this;
                            setTimeout(function() {
                                e.goToNext()
                            }, 500)
                        },
                        setField: function(e, t) {
                            this.$emit("set-field", e, parseFloat(t))
                        },
                        initScroll: function() {
                            var e = this;
                            setTimeout(function() {
                                e.$refs.questionsList && (e.rowHeight = Object(se.a)(e.$refs.questionsList.querySelector(".c-questions-list__item:nth-child(2)")).height)
                            }, 1e3), this.scrollListenerAttached || (this.$refs.questionsList.addEventListener("scroll", function() {
                                e.$refs.questionsList && (e.currentQuestionIndex = Number((e.$refs.questionsList.scrollTop / e.rowHeight).toFixed(0)))
                            }), this.scrollListenerAttached = !0)
                        },
                        scrollToFirstUnAnswerdQuestion: function(e) {
                            var t = Object.keys(e).find(function(t) {
                                return e[t]
                            });
                            this.scrollTo({
                                key: t
                            })
                        },
                        scrollTo: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this.getQuestionIndex(e);
                            (t || r !== this.currentQuestionIndex) && this.$refs.questionsList && this.$refs.questionsList.scrollBy({
                                top: this.rowHeight * (r - this.currentQuestionIndex),
                                left: 0,
                                behavior: "smooth"
                            })
                        },
                        getQuestionIndex: function(e) {
                            return X()(this.questions, {
                                key: e.key
                            })
                        },
                        goToPrevious: function() {
                            this.currentQuestionIndex <= 0 || (this.scrollTo(this.questions[this.currentQuestionIndex - 1]), this.currentQuestionIndex -= 1)
                        },
                        goToNext: function() {
                            this.currentQuestionIndex >= this.questions.length - 1 || (this.scrollTo(this.questions[this.currentQuestionIndex + 1]), this.currentQuestionIndex += 1)
                        },
                        handleResize: function() {
                            this.initScroll(), this.scrollTo(this.currentQuestion, !0)
                        },
                        setQuestionPreset: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = parseInt(e / 5);
                            this.setPreset(ae({}, S.N[r], {
                                withoutAudioEffects: t
                            }))
                        },
                        playAudio: function() {
                            this.$audio.play(this.audioSegment)
                        }
                    }),
                    mounted: function() {
                        var e = this;
                        this.playAudio(), this.$nextTick(function() {
                            setTimeout(function() {
                                return e.showDialog = !0
                            }, 700), e.setPreset(S.N[0]), document.documentElement.classList.add("u-overscroll-behavior-none"), e.initScroll()
                        }), window.addEventListener("resize", this.handleResize.bind(this))
                    },
                    beforeDestroy: function() {
                        document.documentElement.classList.remove("u-overscroll-behavior-none"), window.removeEventListener("resize", this.handleResize.bind(this))
                    }
                },
                le = Object(L.a)(ue, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "c-survey"
                    }, [r("div", {
                        staticClass: "c-survey__ctn-wrap"
                    }, [r("div", {
                        staticClass: "c-survey__ctn"
                    }, [r("ul", {
                        ref: "questionsList",
                        staticClass: "c-questions-list"
                    }, [r("li", {
                        staticClass: "c-questions-list__item"
                    }), e._l(e.questions, function(t) {
                        return r("psychological-survey-list-item", {
                            key: t.key,
                            staticClass: "c-questions-list__item",
                            attrs: {
                                question: t,
                                "is-question-active": t.key === e.currentQuestion,
                                value: e.questionsData[t.key]
                            },
                            on: {
                                "set-field": e.setField,
                                change: e.onChangedValue
                            },
                            nativeOn: {
                                click: function(r) {
                                    return e.scrollTo(t)
                                }
                            }
                        })
                    }), r("li", {
                        staticClass: "c-questions-list__item"
                    })], 2), r("div", {
                        staticClass: "c-questions-navigation"
                    }, [r("button", {
                        staticClass: "c-questions-navigation__btn",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: e.goToPrevious
                        }
                    }, [r("arrow-up-icon", {
                        class: {
                            "u-opacity-50": e.currentQuestionIndex <= 0
                        }
                    })], 1), r("button", {
                        staticClass: "c-questions-navigation__btn",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: e.goToNext
                        }
                    }, [r("arrow-down-icon", {
                        class: {
                            "u-opacity-50": e.currentQuestionIndex >= e.questions.length - 1
                        }
                    })], 1)])])]), r("div", {
                        staticClass: "side-dots"
                    }, e._l(e.questions, function(t) {
                        return r("progress-dot", {
                            key: "dots-" + t.key,
                            attrs: {
                                "is-active": e.currentQuestion === t.key,
                                value: e.questionsData[t.key],
                                hasError: e.errors[t.key],
                                itemKey: t.key
                            },
                            nativeOn: {
                                click: function(r) {
                                    return e.scrollTo(t)
                                }
                            }
                        })
                    }), 1)])
                }, [], !1, null, null, null).exports,
                de = r("96ce"),
                fe = r("9301"),
                he = r("0f74"),
                pe = {
                    name: "NnnSurveyDialog",
                    components: {
                        NnnButton: fe.a
                    },
                    data: function() {
                        return {
                            isClosing: !1,
                            isMobileDevice: Object(a.a)().phone
                        }
                    },
                    methods: {
                        handleClick: function() {
                            var e = this;
                            this.beforeClose(), setTimeout(function() {
                                e.$emit("close")
                            }, 1e3)
                        },
                        beforeClose: function() {
                            this.isClosing = !0
                        }
                    },
                    computed: {
                        description: function() {
                            return this.isMobileDevice ? he.a[he.d].description : he.a[he.c].description
                        }
                    }
                },
                me = Object(L.a)(pe, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        class: ["c-dialog c-dialog--survey", {
                            "is-closing": e.isClosing
                        }]
                    }, [r("div", {
                        staticClass: "c-dialog__ctn"
                    }, [r("div", {
                        staticClass: "c-dialog__body"
                    }, [r("div", {
                        staticClass: "c-dialog__body-ctn",
                        domProps: {
                            innerHTML: e._s(e.description)
                        }
                    }), r("div", {
                        staticClass: "c-dialog__survey-btn"
                    }, [r("nnn-button", {
                        attrs: {
                            color: "primary",
                            "font-size": "lg",
                            animate: !0
                        },
                        on: {
                            click: e.handleClick
                        }
                    }, [e._v("\n          BEGIN\n        ")])], 1)])])])
                }, [], !1, null, null, null).exports;

            function ve(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ve(r, !0).forEach(function(t) {
                        Object(i.a)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ve(r).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ge = (ce = {}, Object(i.a)(ce, S.a, "accountDetailsValid"), Object(i.a)(ce, S.F, "personalDetailsValid"), Object(i.a)(ce, S.H, "psychologicalSurveyDataValid"), ce),
                be = {
                    name: "MembershipPage",
                    mixins: [s.validationMixin, E],
                    components: {
                        NnnSurveyDialog: me,
                        PersonalDetailsComponent: G,
                        AccountDetailsComponent: K,
                        PsychologicalSurveyComponent: le,
                        NnnBaseLayout: de.a,
                        NnnButton: fe.a,
                        NnnTransition: $.a
                    },
                    data: function() {
                        return {
                            isFormSubmited: !1,
                            showDialog: !1,
                            surveyModalSeen: !1
                        }
                    },
                    computed: ye({}, Object(o.c)({
                        currentIndexOfSection: "currentMembershipStep"
                    }), {
                        currentSection: function() {
                            return S.z[this.currentIndexOfSection]
                        },
                        isNextButtonDisabled: function() {
                            return !this[ge[this.currentSection]]
                        },
                        subtitle: function() {
                            return S.A[this.currentSection]
                        }
                    }),
                    watch: {
                        currentIndexOfSection: function(e) {
                            if (e < 2) return this.$audio.play(C.c)
                        }
                    },
                    methods: ye({}, Object(o.d)({
                        setCurrentSectionIndex: "setMembershipStep"
                    }), {}, Object(o.b)({
                        register: "register",
                        displayErrorsGlobally: "displayErrorsGlobally",
                        checkEmailAndUsernameAvailability: "checkEmailAndUsernameAvailability"
                    }), {
                        goBackOneSection: function() {
                            this.setCurrentSectionIndex(this.currentIndexOfSection - 1)
                        },
                        goToNextSection: function() {
                            var e = this;
                            1 === this.currentIndexOfSection && setTimeout(function() {
                                e.showDialog = !0
                            }, 500), this.setCurrentSectionIndex(this.currentIndexOfSection + 1)
                        },
                        isNextStepForbidden: function() {
                            return this.isFormSubmited || this.currentSection === S.F && !this.personalDetailsValid || this.currentSection === S.a && !this.accountDetailsValid
                        },
                        setEmailAndUsernameErorrs: function(e, t) {
                            e || (this.alreadyTakenUsernames.push(this.formData.username), this.setCurrentSectionIndex(0)), t || (this.alreadyTakenEmails.push(this.formData.email), this.setCurrentSectionIndex(0))
                        },
                        submitForm: function() {
                            var e = Object(n.a)(regeneratorRuntime.mark(function e() {
                                var t = this;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.isNextStepForbidden()) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (this.currentSection !== S.a) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 5, this.checkEmailAndUsernameAvailability({
                                                username: this.formData.username,
                                                email: this.formData.email
                                            }).then(function(e) {
                                                var r = e.username,
                                                    n = e.email;
                                                r && n ? t.goToNextSection() : t.setEmailAndUsernameErorrs(r, n)
                                            });
                                        case 5:
                                            return e.abrupt("return");
                                        case 6:
                                            if (this.isNextButtonDisabled || this.currentSection === S.H) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.abrupt("return", this.goToNextSection());
                                        case 8:
                                            if (!this.$refs.psychologicalSurveyComponent || this.psychologicalSurveyDataValid) {
                                                e.next = 13;
                                                break
                                            }
                                            return this.touchQuestionsFields(), this.displayErrorsGlobally().then(function() {
                                                t.resetErrors()
                                            }), this.$refs.psychologicalSurveyComponent.scrollToFirstUnAnswerdQuestion(this.psychologicalSurveyErrors), e.abrupt("return");
                                        case 13:
                                            this.isFormSubmited = !0, this.register({
                                                formData: this.formData
                                            }).then(function() {
                                                t.$router.push({
                                                    name: S.y
                                                })
                                            }).catch(function(e) {
                                                e.response && e.response.data.username && (t.alreadyTakenUsernames.push(t.formData.username), t.setCurrentSectionIndex(0)), e.response && e.response.data.email && (t.alreadyTakenEmails.push(t.formData.email), t.setCurrentSectionIndex(0)), t.isFormSubmited = !1
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        setDateField: function(e) {
                            this.setField("dateOfBirth", e.value), e.touched || this.$v.formData.dateOfBirth.$reset()
                        },
                        resetErrors: function() {
                            this.resetQuestionsFields()
                        },
                        beginSurvey: function() {
                            this.showDialog = !1, this.surveyModalSeen = !0
                        }
                    }),
                    created: function() {
                        this.ACCOUNT_DETAILS = S.a, this.PERSONAL_DETAILS = S.F, this.PSYCHOLOGICAL_SURVEY = S.H, this.touchPrePopulatedFields()
                    },
                    mounted: function() {
                        this.$audio.play(C.c)
                    },
                    beforeDestroy: function() {
                        this.setCurrentSectionIndex(0)
                    }
                },
                Oe = Object(L.a)(be, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("form", {
                        staticClass: "u-flex-direction-column u-flex-1-1-auto u-display-flex",
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), e.submitForm(t)
                            }
                        }
                    }, [r("nnn-base-layout", {
                        staticClass: "u-flex-1-1-auto",
                        attrs: {
                            "is-membership": ""
                        }
                    }, [r("template", {
                        slot: "main"
                    }, [r("div", {
                        staticClass: "c-membership-root"
                    }, [r("div", {
                        staticClass: "c-form-header c-form-header--lighter c-form-header--mobile-top-fixed"
                    }, [r("h2", {
                        staticClass: "c-form-header__title"
                    }, [e._v("APPLICATION")]), r("p", {
                        staticClass: "c-form-header__desc c-h6"
                    }, [r("transition-group", {
                        attrs: {
                            name: "vt-fade-in-translate"
                        }
                    }, [!e.psychologicalSurveyDataValid && e.$v.formData.psychologicalSurveyQuestions.$anyError ? r("span", {
                        key: 0
                    }, [e._v("PLEASE ANSWER TO ALL QUESTIONS")]) : [e.currentSection === e.ACCOUNT_DETAILS ? r("span", {
                        key: 1
                    }, [e._v("\n                  " + e._s(e.subtitle) + "\n                ")]) : e._e(), e.currentSection === e.PERSONAL_DETAILS ? r("span", {
                        key: 2
                    }, [e._v("\n                  " + e._s(e.subtitle) + "\n                ")]) : e._e(), e.currentSection === e.PSYCHOLOGICAL_SURVEY ? r("span", {
                        key: 3
                    }, [e._v(e._s(e.subtitle))]) : e._e()]], 2)], 1)]), r("div", {
                        staticClass: "c-membership-content"
                    }, [r("nnn-transition", {
                        attrs: {
                            "toggle-scroll-during-animation": "",
                            name: "vt-fade-scale"
                        }
                    }, [e.currentSection === e.ACCOUNT_DETAILS ? r("account-details-component", {
                        attrs: {
                            username: e.formData.username,
                            email: e.formData.email,
                            password: e.formData.password,
                            "confirm-password": e.formData.confirmPassword,
                            errors: e.accountDetailsErrors
                        },
                        on: {
                            "set-field": e.setField
                        }
                    }) : e._e(), e.currentSection === e.PERSONAL_DETAILS ? r("personal-details-component", {
                        attrs: {
                            "first-name": e.formData.firstName,
                            "last-name": e.formData.lastName,
                            "date-of-birth": e.formData.dateOfBirth,
                            gender: e.formData.gender,
                            "country-nationality": e.formData.countryNationality,
                            "mobile-os": e.formData.mobileOS,
                            errors: e.personalDetailsErrors
                        },
                        on: {
                            "set-field": e.setField,
                            "set-date-field": e.setDateField
                        }
                    }) : e._e(), e.currentSection === e.PSYCHOLOGICAL_SURVEY ? r("psychological-survey-component", {
                        ref: "psychologicalSurveyComponent",
                        attrs: {
                            questions: e.psychologicalSurveyQuestions,
                            questionsData: e.formData.psychologicalSurveyQuestions,
                            errors: e.psychologicalSurveyErrors
                        },
                        on: {
                            "set-field": e.setPsychologicalSurveyFields
                        }
                    }) : e._e()], 1)], 1)])]), r("template", {
                        slot: "bottom"
                    }, [r("div", {
                        staticClass: "c-membership-footer"
                    }, [r("div", {
                        staticClass: "c-membership-footer__back"
                    }, [e.currentSection !== e.ACCOUNT_DETAILS ? r("nnn-button", {
                        staticClass: "c-membership-footer__btn c-membership-footer__btn--back",
                        attrs: {
                            "font-size": "inherit",
                            color: "primary",
                            animate: !0
                        },
                        on: {
                            click: e.goBackOneSection
                        }
                    }, [e._v("Go Back")]) : e._e()], 1), r("div", {
                        staticClass: "c-membership-footer__steps"
                    }, [e._v("\n          STEP " + e._s(e.currentIndexOfSection + 1) + " / 3\n        ")]), r("div", {
                        staticClass: "c-membership-footer__next"
                    }, [r("nnn-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.currentSection === e.PSYCHOLOGICAL_SURVEY,
                            expression: "currentSection === PSYCHOLOGICAL_SURVEY"
                        }],
                        staticClass: "c-membership-footer__btn test",
                        attrs: {
                            type: "submit",
                            "font-size": "inherit",
                            color: "primary"
                        }
                    }, [e._v("Submit")]), r("nnn-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.currentSection !== e.PSYCHOLOGICAL_SURVEY,
                            expression: "currentSection !== PSYCHOLOGICAL_SURVEY"
                        }],
                        staticClass: "c-membership-footer__btn",
                        attrs: {
                            disabled: e.isNextButtonDisabled,
                            "font-size": "inherit",
                            color: "primary",
                            type: "submit"
                        }
                    }, [e._v("Continue")])], 1)])])], 2), r("transition", {
                        attrs: {
                            name: "vt-fade"
                        }
                    }, [e.showDialog && !e.surveyModalSeen ? r("nnn-survey-dialog", {
                        on: {
                            close: e.beginSurvey
                        }
                    }) : e._e()], 1)], 1)
                }, [], !1, null, null, null);
            t.default = Oe.exports
        },
        "9e86": function(e, t, r) {
            var n = r("872a"),
                i = r("242e"),
                s = r("badf");
            e.exports = function(e, t) {
                var r = {};
                return t = s(t, 3), i(e, function(e, i, s) {
                    n(r, i, t(e, i, s))
                }), r
            }
        },
        a57d: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return i
            }), r.d(t, "a", function() {
                return s
            });
            var n = r("ba47"),
                i = function(e) {
                    return /^(?=.*[a-z])(?=.*[0-9]).*$/g.test(e)
                },
                s = function(e) {
                    var t = new Date,
                        r = new Date(e);
                    return Math.floor(Object(n.a)(t.getTime() - r.getTime())) >= 18
                }
        },
        aa77: function(e, t, r) {
            var n = r("5ca1"),
                i = r("be13"),
                s = r("79e5"),
                o = r("fdef"),
                a = "[" + o + "]",
                c = RegExp("^" + a + a + "*"),
                u = RegExp(a + a + "*$"),
                l = function(e, t, r) {
                    var i = {},
                        a = s(function() {
                            return !!o[e]() || "​" != "​" [e]()
                        }),
                        c = i[e] = a ? t(d) : o[e];
                    r && (i[r] = c), n(n.P + n.F * a, "String", i)
                },
                d = l.trim = function(e, t) {
                    return e = String(i(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(u, "")), e
                };
            e.exports = l
        },
        aae3: function(e, t, r) {
            var n = r("d3f4"),
                i = r("2d95"),
                s = r("2b4c")("match");
            e.exports = function(e) {
                var t;
                return n(e) && (void 0 !== (t = e[s]) ? !!t : "RegExp" == i(e))
            }
        },
        b047c: function(e, t, r) {
            var n = r("1a8c"),
                i = r("408c"),
                s = r("b4b0"),
                o = "Expected a function",
                a = Math.max,
                c = Math.min;
            e.exports = function(e, t, r) {
                var u, l, d, f, h, p, m = 0,
                    v = !1,
                    y = !1,
                    g = !0;
                if ("function" != typeof e) throw new TypeError(o);

                function b(t) {
                    var r = u,
                        n = l;
                    return u = l = void 0, m = t, f = e.apply(n, r)
                }

                function O(e) {
                    var r = e - p;
                    return void 0 === p || r >= t || r < 0 || y && e - m >= d
                }

                function S() {
                    var e = i();
                    if (O(e)) return _(e);
                    h = setTimeout(S, function(e) {
                        var r = t - (e - p);
                        return y ? c(r, d - (e - m)) : r
                    }(e))
                }

                function _(e) {
                    return h = void 0, g && u ? b(e) : (u = l = void 0, f)
                }

                function w() {
                    var e = i(),
                        r = O(e);
                    if (u = arguments, l = this, p = e, r) {
                        if (void 0 === h) return function(e) {
                            return m = e, h = setTimeout(S, t), v ? b(e) : f
                        }(p);
                        if (y) return clearTimeout(h), h = setTimeout(S, t), b(p)
                    }
                    return void 0 === h && (h = setTimeout(S, t)), f
                }
                return t = s(t) || 0, n(r) && (v = !!r.leading, d = (y = "maxWait" in r) ? a(s(r.maxWait) || 0, t) : d, g = "trailing" in r ? !!r.trailing : g), w.cancel = function() {
                    void 0 !== h && clearTimeout(h), m = 0, u = p = l = h = void 0
                }, w.flush = function() {
                    return void 0 === h ? f : _(i())
                }, w
            }
        },
        b6cb: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r("78ef");
            t.default = function(e) {
                return (0, n.withParams)({
                    type: "sameAs",
                    eq: e
                }, function(t, r) {
                    return t === (0, n.ref)(e, this, r)
                })
            }
        },
        ba47: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return s
            }), r.d(t, "a", function() {
                return o
            });
            var n = r("5a3a"),
                i = r.n(n);

            function s() {
                var e = new Date;
                return i()(1900, e.getFullYear() + 1)
            }

            function o(e) {
                return Math.floor(e / 1e3 / 60 / 60 / 24 / 365)
            }
        },
        c5f6: function(e, t, r) {
            "use strict";
            var n = r("7726"),
                i = r("69a8"),
                s = r("2d95"),
                o = r("5dbc"),
                a = r("6a99"),
                c = r("79e5"),
                u = r("9093").f,
                l = r("11e9").f,
                d = r("86cc").f,
                f = r("aa77").trim,
                h = "Number",
                p = n[h],
                m = p,
                v = p.prototype,
                y = s(r("2aeb")(v)) == h,
                g = "trim" in String.prototype,
                b = function(e) {
                    var t = a(e, !1);
                    if ("string" == typeof t && t.length > 2) {
                        var r, n, i, s = (t = g ? t.trim() : f(t, 3)).charCodeAt(0);
                        if (43 === s || 45 === s) {
                            if (88 === (r = t.charCodeAt(2)) || 120 === r) return NaN
                        } else if (48 === s) {
                            switch (t.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    n = 2, i = 49;
                                    break;
                                case 79:
                                case 111:
                                    n = 8, i = 55;
                                    break;
                                default:
                                    return +t
                            }
                            for (var o, c = t.slice(2), u = 0, l = c.length; u < l; u++)
                                if ((o = c.charCodeAt(u)) < 48 || o > i) return NaN;
                            return parseInt(c, n)
                        }
                    }
                    return +t
                };
            if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
                p = function(e) {
                    var t = arguments.length < 1 ? 0 : e,
                        r = this;
                    return r instanceof p && (y ? c(function() {
                        v.valueOf.call(r)
                    }) : s(r) != h) ? o(new m(b(t)), r, p) : b(t)
                };
                for (var O, S = r("9e1e") ? u(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), _ = 0; S.length > _; _++) i(m, O = S[_]) && !i(p, O) && d(p, O, l(m, O));
                p.prototype = v, v.constructor = p, r("2aba")(n, h, p)
            }
        },
        d2c8: function(e, t, r) {
            var n = r("aae3"),
                i = r("be13");
            e.exports = function(e, t, r) {
                if (n(t)) throw TypeError("String#" + r + " doesn't accept regex!");
                return String(i(e))
            }
        },
        e081: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return i
            }), r("7f7f");
            var n = r("16e1"),
                i = {
                    name: "focus",
                    inserted: function(e, t) {
                        var r = t.value;
                        if (!Object(n.b)()) {
                            var i = e ? e.querySelector("input") : null;
                            setTimeout(function() {
                                i && i.focus()
                            }, r || 10)
                        }
                    }
                }
        },
        ec56: function(e, t, r) {},
        f559: function(e, t, r) {
            "use strict";
            var n = r("5ca1"),
                i = r("9def"),
                s = r("d2c8"),
                o = "startsWith",
                a = "" [o];
            n(n.P + n.F * r("5147")(o), "String", {
                startsWith: function(e) {
                    var t = s(this, e, o),
                        r = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                        n = String(e);
                    return a ? a.call(t, n, r) : t.slice(r, r + n.length) === n
                }
            })
        },
        fdef: function(e, t) {
            e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
        }
    }
]);