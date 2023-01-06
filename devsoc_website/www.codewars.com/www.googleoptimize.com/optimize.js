// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "3",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__dee"
            }],
            "tags": [{
                "function": "__asprv",
                "vtp_globalName": "google_optimize",
                "vtp_listenForMutations": false,
                "tag_id": 6
            }, {
                "function": "__asprv",
                "tag_id": 7
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": ["macro", 1]
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "optimize.callback"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ],
                [
                    ["if", 1],
                    ["add", 1]
                ]
            ]
        },
        "runtime": []





    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ca, da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = fa,
        la = function(a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.jl = b.prototype
        },
        ma = this || self,
        na = function(a) {
            return a
        };
    var oa = function() {},
        pa = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        qa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ra = Array.isArray,
        sa = function(a, b) {
            if (a && ra(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ta = function(a, b) {
            if (!qa(a) || !qa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        xa = function(a, b) {
            for (var c = new ua, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        za = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Aa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ba = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ca = function(a) {
            var b = [];
            if (ra(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Da = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ea = function() {
            return new Date(Date.now())
        },
        z = function() {
            return Ea().getTime()
        },
        ua = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ua.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ua.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Fa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ga = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ha = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ia = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ja = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Ka = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        La = /^\w{1,9}$/,
        Ma = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                La.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Pa = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Qa() {
        for (var a = Ra, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Sa() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Ra, Ta;

    function Ua(a) {
        Ra = Ra || Sa();
        Ta = Ta || Qa();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(Ra[m], Ra[n], Ra[p], Ra[q])
        }
        return b.join("")
    }

    function Va(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Ta[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Ra = Ra || Sa();
        Ta = Ta || Qa();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var Wa = {},
        Xa = function(a, b) {
            Wa[a] = Wa[a] || [];
            Wa[a][b] = !0
        },
        Ya = function() {
            delete Wa.GA4_EVENT
        },
        Za = function(a) {
            var b = Wa[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Ua(c.join("")).replace(/\.+$/, "")
        };
    var $a = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var ab, bb = function() {
        if (void 0 === ab) {
            var a = null,
                b = ma.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    ma.console && ma.console.error(c.message)
                }
                ab = a
            } else ab = a
        }
        return ab
    };
    var db = function(a, b) {
        this.h = b === cb ? a : ""
    };
    db.prototype.toString = function() {
        return this.h + ""
    };
    var cb = {};
    var eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function fb() {
        var a = ma.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function gb(a) {
        return -1 != fb().indexOf(a)
    };

    function hb() {
        return gb("Firefox") || gb("FxiOS")
    }

    function ib() {
        return (gb("Chrome") || gb("CriOS")) && !gb("Edge") || gb("Silk")
    };
    var jb = {},
        kb = function(a, b) {
            this.h = b === jb ? a : ""
        };
    kb.prototype.toString = function() {
        return this.h.toString()
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    try {
        new URL("s://g")
    } catch (a) {};
    var lb = {};

    function mb(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = b instanceof kb && b.constructor === kb ? b.h : "type_error:SafeHtml"
    };
    var nb = function(a, b, c, d) {
        this.h = a;
        this.B = b;
        this.m = c;
        this.D = d
    };
    var ob = new nb(new Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ")), new Map([
            ["A",
                new Map([
                    ["href", {
                        qa: 2
                    }]
                ])
            ],
            ["AREA", new Map([
                ["href", {
                    qa: 2
                }]
            ])],
            ["LINK", new Map([
                ["href", {
                    qa: 2,
                    conditions: new Map([
                        ["rel", new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]
                    ])
                }]
            ])],
            ["SOURCE", new Map([
                ["src", {
                    qa: 2
                }]
            ])],
            ["IMG", new Map([
                ["src", {
                    qa: 2
                }]
            ])],
            ["VIDEO", new Map([
                ["src", {
                    qa: 2
                }]
            ])],
            ["AUDIO", new Map([
                ["src", {
                    qa: 2
                }]
            ])]
        ]), new Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")),
        new Map([
            ["dir", {
                qa: 3,
                conditions: new Map([
                    ["dir", new Set(["auto", "ltr", "rtl"])]
                ])
            }],
            ["async", {
                qa: 3,
                conditions: new Map([
                    ["async", new Set(["async"])]
                ])
            }],
            ["cite", {
                qa: 2
            }],
            ["loading", {
                qa: 3,
                conditions: new Map([
                    ["loading", new Set(["eager", "lazy"])]
                ])
            }],
            ["poster", {
                qa: 2
            }],
            ["target", {
                qa: 3,
                conditions: new Map([
                    ["target", new Set(["_self", "_blank"])]
                ])
            }]
        ]));
    var pb = function() {
        if (lb !== lb) throw Error("Bad secret");
    };
    new pb;
    var qb = new function() {
            this.m = !1;
            this.h = ob
        },
        rb = new Map(qb.h.D);
    rb.set("style", {
        qa: 4
    });
    qb.h = new nb(qb.h.h, qb.h.B, qb.h.m, rb);
    var sb = new Map(qb.h.D);
    sb.set("class", {
        qa: 1
    });
    qb.h = new nb(qb.h.h, qb.h.B, qb.h.m, sb);
    var tb = new Map(qb.h.D);
    tb.set("id", {
        qa: 1
    });
    qb.h = new nb(qb.h.h, qb.h.B, qb.h.m, tb);
    if (qb.m) throw Error("this sanitizer has already called build");
    qb.m = !0;
    new pb;

    function ub(a) {
        var b = a = vb(a),
            c = bb(),
            d = c ? c.createHTML(b) : b;
        return new kb(d, jb)
    }

    function vb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var E = window,
        F = document,
        wb = navigator,
        xb = F.currentScript && F.currentScript.src,
        yb = function(a, b) {
            var c = E[a];
            E[a] = void 0 === c ? b : c;
            return E[a]
        },
        zb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ab = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Bb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Cb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Db = function(a, b, c, d, e) {
            var f = F.createElement("script");
            Cb(f, d, Ab);
            f.type = "text/javascript";
            f.async = !0;
            var g, l = vb(a),
                m = bb(),
                n = m ? m.createScriptURL(l) : l;
            g = new db(n, cb);
            f.src = g instanceof db && g.constructor === db ? g.h : "type_error:TrustedResourceUrl";
            var p, q, r, u = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            zb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var t = F.getElementsByTagName("script")[0] || F.body || F.head;
                t.parentNode.insertBefore(f, t)
            }
            return f
        },
        Eb = function() {
            if (xb) {
                var a = xb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Fb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                l = !1;
            g || (g = F.createElement("iframe"), l = !0);
            Cb(g, c, Bb);
            d && k(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (l) {
                var m = F.body && F.body.lastChild || F.body ||
                    F.head;
                m.parentNode.insertBefore(g, m)
            }
            zb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Gb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        Hb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Ib = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            E.setTimeout(a, 0)
        },
        Jb = function(a, b) {
            return a && b && a.attributes &&
                a.attributes[b] ? a.attributes[b].value : null
        },
        Kb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Lb = function(a) {
            var b = F.createElement("div");
            mb(b, ub("A<div>" + a + "</div>"));
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Mb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Nb = function(a) {
            var b;
            try {
                b = wb.sendBeacon && wb.sendBeacon(a)
            } catch (c) {
                Xa("TAGGING", 15)
            }
            b || Gb(a)
        },
        Ob = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Pb = function() {
            var a = E.performance;
            if (a && pa(a.now)) return a.now()
        },
        Qb = function() {
            return E.performance || void 0
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Rb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Sb = function(a) {
            if (null == a) return String(a);
            var b = Rb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Tb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ub = function(a) {
            if (!a || "object" != Sb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Tb(a, "constructor") && !Tb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Tb(a, b)
        },
        I = function(a, b) {
            var c = b || ("array" == Sb(a) ? [] : {}),
                d;
            for (d in a)
                if (Tb(a, d)) {
                    var e = a[d];
                    "array" == Sb(e) ? ("array" != Sb(c[d]) && (c[d] = []), c[d] = I(e, c[d])) : Ub(e) ? (Ub(c[d]) || (c[d] = {}), c[d] = I(e, c[d])) : c[d] = e
                }
            return c
        };
    var Vb = function(a) {
        if (void 0 === a || ra(a) || Ub(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Wb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Yh: a("consent"),
            Xf: a("convert_case_to"),
            Yf: a("convert_false_to"),
            Zf: a("convert_null_to"),
            ag: a("convert_true_to"),
            cg: a("convert_undefined_to"),
            Lk: a("debug_mode_metadata"),
            Ta: a("function"),
            bf: a("instance_name"),
            Pi: a("live_only"),
            Qi: a("malware_disabled"),
            Ri: a("metadata"),
            Ui: a("original_activity_id"),
            Tk: a("original_vendor_template_id"),
            Sk: a("once_on_load"),
            Ti: a("once_per_event"),
            bh: a("once_per_load"),
            Uk: a("priority_override"),
            Vk: a("respected_consent_types"),
            gh: a("setup_tags"),
            rb: a("tag_id"),
            ih: a("teardown_tags")
        }
    }();
    var sc;
    var tc = [],
        uc = [],
        vc = [],
        wc = [],
        xc = [],
        yc = {},
        zc, Ac, Cc = function() {
            var a = Bc;
            Ac = Ac || a
        },
        Dc, Ec = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = yc[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.nh && d.nh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.mh && (f.vtp_gtmCachedValues = d.mh);
            if (b) {
                if (null == b.name) {
                    var l;
                    a: {
                        var m = b.index;
                        if (null == m) l = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = tc[m];
                                    break;
                                case 1:
                                    n = wc[m];
                                    break;
                                default:
                                    l = "";
                                    break a
                            }
                            var p = n && n[Wb.bf];
                            l = p ? String(p) : ""
                        }
                    }
                    b.name = l
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : sc(c, f, b)
        },
        Gc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Fc(a[e], b, c));
            return d
        },
        Fc = function(a, b, c) {
            if (ra(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Fc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = tc[f];
                        if (!g || b.yf(g)) return;
                        c[f] = !0;
                        var l =
                            String(g[Wb.bf]);
                        try {
                            var m = Gc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Ec(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Dc && (d = Dc.oj(d, m))
                        } catch (x) {
                            b.zh && b.zh(x, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Fc(a[n], b, c)] = Fc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Fc(a[q], b, c);
                            Ac && (p = p || r === Ac.Vd);
                            d.push(r)
                        }
                        return Ac && p ? Ac.pj(d) : d.join("");
                    case "escape":
                        d = Fc(a[1], b, c);
                        if (Ac && ra(a[1]) && "macro" ===
                            a[1][0] && Ac.Nj(a)) return Ac.gk(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Yb[a[u]] && (d = Yb[a[u]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!wc[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return d = {
                            sh: a[2],
                            index: t
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = Hc(v, b, c),
                            y = !!a[4];
                        return y || 2 !== w ? y !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Hc = function(a, b, c) {
            try {
                return zc(Gc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Kc = function(a) {
            function b(r) {
                for (var u = 0; u < r.length; u++) d[r[u]] = !0
            }
            for (var c = [], d = [], e = Ic(a), f = 0; f < uc.length; f++) {
                var g = uc[f],
                    l = Jc(g, e);
                if (l) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], q = 0; q < wc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Jc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        Ic = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Hc(vc[c], a));
                return b[c]
            }
        };
    var Lc = {
        oj: function(a, b) {
            b[Wb.Xf] && "string" === typeof a && (a = 1 == b[Wb.Xf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Wb.Zf) && null === a && (a = b[Wb.Zf]);
            b.hasOwnProperty(Wb.cg) && void 0 === a && (a = b[Wb.cg]);
            b.hasOwnProperty(Wb.ag) && !0 === a && (a = b[Wb.ag]);
            b.hasOwnProperty(Wb.Yf) && !1 === a && (a = b[Wb.Yf]);
            return a
        }
    };
    var kd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function ld(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var nd = function(a) {
            return md ? F.querySelectorAll(a) : null
        },
        od = function(a, b) {
            if (!md) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!F.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        pd = !1;
    if (F.querySelectorAll) try {
        var qd = F.querySelectorAll(":root");
        qd && 1 == qd.length && qd[0] == F.documentElement && (pd = !0)
    } catch (a) {}
    var md = pd;
    var O = function(a) {
        Xa("GTM", a)
    };
    var P = {
            g: {
                F: "ad_storage",
                R: "analytics_storage",
                Tf: "region",
                Uf: "consent_updated",
                Vf: "wait_for_update",
                di: "app_remove",
                ei: "app_store_refund",
                fi: "app_store_subscription_cancel",
                gi: "app_store_subscription_convert",
                hi: "app_store_subscription_renew",
                dg: "add_payment_info",
                eg: "add_shipping_info",
                sc: "add_to_cart",
                uc: "remove_from_cart",
                fg: "view_cart",
                Nb: "begin_checkout",
                vc: "select_item",
                vb: "view_item_list",
                Ob: "select_promotion",
                wb: "view_promotion",
                Da: "purchase",
                wc: "refund",
                Ja: "view_item",
                gg: "add_to_wishlist",
                ii: "first_open",
                ji: "first_visit",
                xa: "gtag.config",
                Ea: "gtag.get",
                ki: "in_app_purchase",
                xc: "page_view",
                li: "session_start",
                Ae: "user_engagement",
                Pb: "gclid",
                ja: "ads_data_redaction",
                X: "allow_ad_personalization_signals",
                Be: "allow_custom_scripts",
                mi: "allow_display_features",
                yc: "allow_enhanced_conversions",
                xb: "allow_google_signals",
                ya: "allow_interest_groups",
                Ad: "auid",
                ni: "auto_detection_enabled",
                Ya: "aw_remarketing",
                Bd: "aw_remarketing_only",
                zc: "discount",
                Ac: "aw_feed_country",
                Bc: "aw_feed_language",
                Z: "items",
                Cc: "aw_merchant_id",
                hg: "aw_basket_type",
                Cd: "campaign_content",
                Dd: "campaign_id",
                Ed: "campaign_medium",
                Fd: "campaign_name",
                Dc: "campaign",
                Gd: "campaign_source",
                Hd: "campaign_term",
                ob: "client_id",
                oi: "content_group",
                ri: "content_type",
                Fa: "conversion_cookie_prefix",
                Ec: "conversion_id",
                Za: "conversion_label",
                sa: "conversion_linker",
                Ce: "conversion_api",
                ab: "cookie_domain",
                Ka: "cookie_expires",
                cb: "cookie_flags",
                Fc: "cookie_name",
                De: "cookie_path",
                Ra: "cookie_prefix",
                yb: "cookie_update",
                Qb: "country",
                na: "currency",
                Gc: "customer_lifetime_value",
                Hc: "custom_map",
                si: "debug_mode",
                aa: "developer_id",
                ig: "disable_merchant_reported_purchases",
                ui: "dc_custom_params",
                vi: "dc_natural_search",
                Ee: "dynamic_event_settings",
                wi: "affiliation",
                jg: "checkout_option",
                kg: "checkout_step",
                xi: "coupon",
                Fe: "item_list_name",
                Ge: "list_name",
                yi: "promotions",
                Ic: "shipping",
                lg: "tax",
                Id: "engagement_time_msec",
                Jc: "enhanced_client_id",
                Kc: "enhanced_conversions",
                mg: "enhanced_conversions_automatic_settings",
                Lc: "estimated_delivery_date",
                He: "euid_logged_in_state",
                Rb: "event_callback",
                Sb: "event_developer_id_string",
                ng: "event",
                Jd: "event_settings",
                Kd: "event_timeout",
                zi: "experiments",
                Ie: "firebase_id",
                Ld: "first_party_collection",
                Md: "_x_20",
                zb: "_x_19",
                og: "fledge",
                pg: "flight_error_code",
                qg: "flight_error_message",
                rg: "gac_gclid",
                Nd: "gac_wbraid",
                sg: "gac_wbraid_multiple_conversions",
                Je: "ga_restrict_domain",
                Ke: "ga_temp_client_id",
                ug: "gdpr_applies",
                vg: "geo_granularity",
                eb: "value_callback",
                Sa: "value_key",
                Tb: "global_developer_id_string",
                Mk: "google_ono",
                fb: "google_signals",
                Mc: "google_tld",
                Od: "groups",
                wg: "gsa_experiment_id",
                xg: "iframe_state",
                Pd: "ignore_referrer",
                Le: "internal_traffic_results",
                Qd: "is_legacy_loaded",
                yg: "is_passthrough",
                La: "language",
                Me: "legacy_developer_id_string",
                va: "linker",
                Ub: "accept_incoming",
                Vb: "decorate_forms",
                T: "domains",
                Nc: "url_position",
                zg: "method",
                Wb: "new_customer",
                Ag: "non_interaction",
                Ai: "optimize_id",
                Ma: "page_location",
                Ne: "page_path",
                Na: "page_referrer",
                Xb: "page_title",
                Bg: "passengers",
                Cg: "phone_conversion_callback",
                Bi: "phone_conversion_country_code",
                Dg: "phone_conversion_css_class",
                Ci: "phone_conversion_ids",
                Eg: "phone_conversion_number",
                Fg: "phone_conversion_options",
                Gg: "quantity",
                Oc: "redact_device_info",
                Oe: "redact_enhanced_user_id",
                Di: "redact_ga_client_id",
                Ei: "redact_user_id",
                Rd: "referral_exclusion_definition",
                pb: "restricted_data_processing",
                Fi: "retoken",
                Hg: "screen_name",
                Ab: "screen_resolution",
                Gi: "search_term",
                za: "send_page_view",
                Bb: "send_to",
                Pc: "session_duration",
                Sd: "session_engaged",
                Pe: "session_engaged_time",
                qb: "session_id",
                Td: "session_number",
                Yb: "delivery_postal_code",
                Ig: "tc_privacy_string",
                Jg: "temporary_client_id",
                Hi: "tracking_id",
                Qe: "traffic_type",
                Ga: "transaction_id",
                oa: "transport_url",
                Kg: "trip_type",
                Qc: "update",
                hb: "url_passthrough",
                Re: "_user_agent_architecture",
                Se: "_user_agent_bitness",
                Te: "_user_agent_full_version_list",
                Lg: "_user_agent_mobile",
                Ue: "_user_agent_model",
                Ve: "_user_agent_platform",
                We: "_user_agent_platform_version",
                Mg: "_user_agent_wait",
                Xe: "_user_agent_wow64",
                da: "user_data",
                Ng: "user_data_auto_latency",
                Og: "user_data_auto_meta",
                Pg: "user_data_auto_multi",
                Qg: "user_data_auto_selectors",
                Rg: "user_data_auto_status",
                Sg: "user_data_mode",
                Ye: "user_data_settings",
                wa: "user_id",
                Oa: "user_properties",
                Tg: "us_privacy_string",
                la: "value",
                Ud: "wbraid",
                Ug: "wbraid_multiple_conversions",
                Xg: "_host_name",
                Yg: "_in_page_command",
                cf: "_is_linker_valid",
                Zg: "_is_passthrough_cid",
                ah: "non_personalized_ads",
                Uc: "_sst_parameters"
            }
        },
        Od = {},
        Pd = Object.freeze((Od[P.g.X] = 1, Od[P.g.yc] = 1, Od[P.g.xb] = 1, Od[P.g.Z] = 1, Od[P.g.ab] = 1, Od[P.g.Ka] = 1, Od[P.g.cb] = 1, Od[P.g.Fc] = 1, Od[P.g.De] = 1, Od[P.g.Ra] = 1, Od[P.g.yb] = 1, Od[P.g.Hc] = 1, Od[P.g.aa] =
            1, Od[P.g.Ee] = 1, Od[P.g.Rb] = 1, Od[P.g.Jd] = 1, Od[P.g.Kd] = 1, Od[P.g.Ld] = 1, Od[P.g.Je] = 1, Od[P.g.fb] = 1, Od[P.g.Mc] = 1, Od[P.g.Od] = 1, Od[P.g.Le] = 1, Od[P.g.Qd] = 1, Od[P.g.va] = 1, Od[P.g.Oe] = 1, Od[P.g.Rd] = 1, Od[P.g.pb] = 1, Od[P.g.za] = 1, Od[P.g.Bb] = 1, Od[P.g.Pc] = 1, Od[P.g.Pe] = 1, Od[P.g.Yb] = 1, Od[P.g.oa] = 1, Od[P.g.Qc] = 1, Od[P.g.Ye] = 1, Od[P.g.Oa] = 1, Od[P.g.Uc] = 1, Od));
    Object.freeze([P.g.Ma, P.g.Na, P.g.Xb, P.g.La, P.g.Hg, P.g.wa, P.g.Ie, P.g.oi]);
    var Rd = {},
        Sd = Object.freeze((Rd[P.g.di] = 1, Rd[P.g.ei] = 1, Rd[P.g.fi] = 1, Rd[P.g.gi] = 1, Rd[P.g.hi] = 1, Rd[P.g.ii] = 1, Rd[P.g.ji] = 1, Rd[P.g.ki] = 1, Rd[P.g.li] = 1, Rd[P.g.Ae] = 1, Rd)),
        Td = {},
        Ud = Object.freeze((Td[P.g.dg] = 1, Td[P.g.eg] = 1, Td[P.g.sc] = 1, Td[P.g.uc] = 1, Td[P.g.fg] = 1, Td[P.g.Nb] = 1, Td[P.g.vc] = 1, Td[P.g.vb] = 1, Td[P.g.Ob] = 1, Td[P.g.wb] = 1, Td[P.g.Da] = 1, Td[P.g.wc] = 1, Td[P.g.Ja] = 1, Td[P.g.gg] = 1, Td)),
        Vd = Object.freeze([P.g.X, P.g.xb, P.g.yb]),
        Wd = Object.freeze([].concat(Vd)),
        Xd = Object.freeze([P.g.Ka, P.g.Kd, P.g.Pc, P.g.Pe, P.g.Id]),
        Yd = Object.freeze([].concat(Xd)),
        Zd = {},
        $d = (Zd[P.g.F] = "1", Zd[P.g.R] = "2", Zd),
        ae = {},
        be = Object.freeze((ae[P.g.X] = 1, ae[P.g.yc] = 1, ae[P.g.ya] = 1, ae[P.g.Ya] = 1, ae[P.g.Bd] = 1, ae[P.g.zc] = 1, ae[P.g.Ac] = 1, ae[P.g.Bc] = 1, ae[P.g.Z] = 1, ae[P.g.Cc] = 1, ae[P.g.Fa] = 1, ae[P.g.sa] = 1, ae[P.g.ab] = 1, ae[P.g.Ka] = 1, ae[P.g.cb] = 1, ae[P.g.Ra] = 1, ae[P.g.na] = 1, ae[P.g.Gc] = 1, ae[P.g.aa] = 1, ae[P.g.ig] = 1, ae[P.g.Kc] = 1, ae[P.g.Lc] = 1, ae[P.g.Ie] = 1, ae[P.g.Ld] = 1, ae[P.g.Qd] = 1, ae[P.g.La] = 1, ae[P.g.Wb] = 1, ae[P.g.Ma] = 1, ae[P.g.Na] = 1, ae[P.g.Cg] = 1, ae[P.g.Dg] = 1, ae[P.g.Eg] =
            1, ae[P.g.Fg] = 1, ae[P.g.pb] = 1, ae[P.g.za] = 1, ae[P.g.Bb] = 1, ae[P.g.Yb] = 1, ae[P.g.Ga] = 1, ae[P.g.oa] = 1, ae[P.g.Qc] = 1, ae[P.g.hb] = 1, ae[P.g.da] = 1, ae[P.g.wa] = 1, ae[P.g.la] = 1, ae));
    Object.freeze(P.g);
    var ce = {},
        de = E.google_tag_manager = E.google_tag_manager || {},
        ee = Math.random();
    ce.Tc = "120";
    ce.hf = Number("0") || 0;
    ce.ia = "dataLayer";
    ce.ai = "";
    var fe = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        ge = {
            __paused: !0,
            __tg: !0
        },
        he;
    for (he in fe) fe.hasOwnProperty(he) && (ge[he] = !0);
    var ie = Ba(""),
        je = Ba(""),
        ke, le = !1;
    ke = le;
    var me, ne = !1;
    me = ne;
    var oe, pe = !1;
    oe = pe;
    var qe, re = !1;
    re = !0;
    qe = re;
    ce.zd = "www.googletagmanager.com";
    var se = "" + ce.zd + (ke ? "/gtag/js" : "/gtm.js"),
        te = null,
        ue = null,
        ve = {},
        we = {},
        xe = {},
        ye = function() {
            var a = de.sequence || 1;
            de.sequence = a + 1;
            return a
        };
    ce.Zh = "";
    var ze = "";
    ce.Zd = ze;
    var Ae = new ua,
        Be = {},
        Ce = {},
        Fe = {
            name: ce.ia,
            set: function(a, b) {
                I(Ka(a, b), Be);
                De()
            },
            get: function(a) {
                return Ee(a, 2)
            },
            reset: function() {
                Ae = new ua;
                Be = {};
                De()
            }
        },
        Ee = function(a, b) {
            return 2 != b ? Ae.get(a) : Ge(a)
        },
        Ge = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Be, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        He = function(a, b) {
            Ce.hasOwnProperty(a) || (Ae.set(a, b), I(Ka(a, b), Be), De())
        },
        De = function(a) {
            k(Ce, function(b, c) {
                Ae.set(b, c);
                I(Ka(b), Be);
                I(Ka(b,
                    c), Be);
                a && delete Ce[b]
            })
        },
        Ie = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Ge(a) : Ae.get(a);
            "array" === Sb(d) || "object" === Sb(d) ? c = I(d) : c = d;
            return c
        };
    var Je, Ke = !1,
        Le = function(a) {
            if (!Ke) {
                Ke = !0;
                Je = Je || {}
            }
            return Je[a]
        };
    var Me = function() {
            var a = E.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Ne = function(a) {
            if (F.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle) return !0;
            var c = E.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var l = g.indexOf("opacity(");
                    0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = E.getComputedStyle(d, null))
            }
            return !1
        };
    var Ye = /:[0-9]+$/,
        Ze = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        bf = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = $e(a.protocol) || $e(E.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : E.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" ===
                b && (a.hostname = (a.hostname || E.location.hostname).replace(Ye, "").toLowerCase());
            return af(a, b, c, d, e)
        },
        af = function(a, b, c, d, e) {
            var f, g = $e(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = cf(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Ye, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Xa("TAGGING",
                        1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Ze(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        $e = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        cf = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        df = function(a) {
            var b = F.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Xa("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Ye, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        ef = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = df(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var m = "" + f + g + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        };
    var ff = {};
    var If = {},
        Jf = function(a, b) {
            if (E._gtmexpgrp && E._gtmexpgrp.hasOwnProperty(a)) return E._gtmexpgrp[a];
            void 0 === If[a] && (If[a] = Math.floor(Math.random() * b));
            return If[a]
        };
    var Lf = {
        qf: "",
        mk: ""
    };
    var Mf = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Nf = function(a) {
        Nf[" "](a);
        return a
    };
    Nf[" "] = function() {};
    var Pf = function() {
        var a = Of,
            b = "wf";
        if (a.wf && a.hasOwnProperty(b)) return a.wf;
        var c = new a;
        return a.wf = c
    };
    var Of = function() {
        var a = {};
        this.h = function() {
            var b = Mf.h,
                c = Mf.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[Mf.h] = !0
        }
    };
    var Qf = [];

    function Rf() {
        var a = yb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Sf,
            update: Tf,
            addListener: Uf,
            notifyListeners: Vf,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Sf(a, b, c, d, e, f) {
        var g = Rf();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var l = g.entries,
                m = l[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.initial) l[a] = r;
                q && E.setTimeout(function() {
                    l[a] === r && r.quiet && (r.quiet = !1, Wf(a), Vf(), Xa("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function Tf(a, b) {
        var c = Rf();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Xf(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Xf(c, a);
            f.quiet ? (f.quiet = !1, Wf(a)) : g !== d && Wf(a)
        }
    }

    function Uf(a, b) {
        Qf.push({
            nf: a,
            xj: b
        })
    }

    function Wf(a) {
        for (var b = 0; b < Qf.length; ++b) {
            var c = Qf[b];
            ra(c.nf) && -1 !== c.nf.indexOf(a) && (c.Eh = !0)
        }
    }

    function Vf(a, b) {
        for (var c = 0; c < Qf.length; ++c) {
            var d = Qf[c];
            if (d.Eh) {
                d.Eh = !1;
                try {
                    d.xj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Xf(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var Yf = function(a) {
            var b = Rf();
            b.accessedAny = !0;
            return Xf(b, a)
        },
        Zf = function(a) {
            var b = Rf();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        $f = function(a) {
            var b = Rf();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        ag = function() {
            if (!Pf().h()) return !1;
            var a = Rf();
            a.accessedAny = !0;
            return a.active
        },
        bg = function() {
            var a = Rf();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        cg = function(a, b) {
            Rf().addListener(a, b)
        },
        dg = function(a, b) {
            Rf().notifyListeners(a, b)
        },
        eg = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!$f(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                cg(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        fg = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === Yf(l) || e[l] || (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && cg(d, function(f) {
                var g = c();
                0 < g.length && (f.nf = g, a(f))
            })
        };

    function gg() {}

    function hg() {};

    function ig(a) {
        for (var b = [], c = 0; c < jg.length; c++) {
            var d = a(jg[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var jg = [P.g.F, P.g.R],
        kg = function(a) {
            var b = a[P.g.Tf];
            b && O(40);
            var c = a[P.g.Vf];
            c && O(41);
            for (var d = ra(b) ? b : [b], e = {
                    nc: 0
                }; e.nc < d.length; e = {
                    nc: e.nc
                }, ++e.nc) k(a, function(f) {
                return function(g, l) {
                    if (g !== P.g.Tf && g !== P.g.Vf) {
                        var m = d[f.nc],
                            n = Lf.qf,
                            p = Lf.mk;
                        Rf().set(g, l, m, n, p, c)
                    }
                }
            }(e))
        },
        lg = function(a, b) {
            k(a, function(c, d) {
                Rf().update(c, d)
            });
            dg(b.eventId, b.priorityId)
        },
        mg = function(a) {
            var b = Yf(a);
            return void 0 != b ? b : !0
        },
        ng = function() {
            return "G1" + ig(Yf)
        },
        og = function(a, b) {
            fg(a, b)
        },
        pg = function(a, b) {
            eg(a, b)
        };
    var Q = [];
    Q[7] = !0;
    Q[9] = !0;
    Q[27] = !0;
    Q[6] = !0;
    Q[12] = !0;
    Q[11] = !0;
    Q[13] = !0;
    Q[15] = !0;
    Q[23] = !0;
    Q[29] = !0;
    Q[35] = !0;
    Q[36] = !0;
    Q[38] = !0;
    Q[43] = !0;
    Q[44] = !0;
    a: {
        for (var qg, rg, sg = 0; qg === rg;)
            if (qg = Math.floor(2 * Math.random()), rg = Math.floor(2 * Math.random()), sg++, 20 < sg) break a;qg ? Q[46] = !0 : Q[47] = !0
    }
    Q[54] = !0;
    Q[57] = !0;
    Q[60] = !0;


    var S = function(a) {
        return !!Q[a]
    };
    var tg = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var ug = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var vg = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        wg = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function xg(a) {
        return "null" !== a.origin
    };
    var Ag = function(a, b, c, d) {
            return yg(d) ? ug(a, String(b || zg()), c) : []
        },
        Dg = function(a, b, c, d, e) {
            if (yg(e)) {
                var f = Bg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Cg(f, function(g) {
                        return g.fe
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Cg(f, function(g) {
                        return g.ld
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Eg(a, b, c, d) {
        var e = zg(),
            f = window;
        xg(f) && (f.document.cookie = a);
        var g = zg();
        return e != g || void 0 != c && 0 <= Ag(b, g, !1, d).indexOf(c)
    }
    var Pg = function(a, b, c) {
            function d(u, t, v) {
                if (null == v) return delete g[t], u;
                g[t] = v;
                return u + "; " + t + "=" + v
            }

            function e(u, t) {
                if (null == t) return delete g[t], u;
                g[t] = !0;
                return u + "; " + t
            }
            if (!yg(c.ub)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Fg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.al);
            f = d(f, "samesite",
                c.bl);
            c.fl && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Gg(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Og(q, c.path) && Eg(r, a, b, c.ub)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Og(m, c.path) ? 1 : Eg(f, a, b, c.ub) ? 0 : 1
        },
        Qg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Pg(a, b, c)
        };

    function Cg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Bg(a, b, c) {
        for (var d = [], e = Ag(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    fe: 1 * m[0] || 1,
                    ld: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Fg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Rg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Sg = /(^|\.)doubleclick\.net$/i,
        Og = function(a, b) {
            return Sg.test(window.document.location.hostname) || "/" === b && Rg.test(a)
        },
        zg = function() {
            return xg(window) ? window.document.cookie : ""
        },
        Gg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Sg.test(e) || Rg.test(e) || a.push("none");
            return a
        },
        yg = function(a) {
            if (!Pf().h() || !a || !ag()) return !0;
            if (!$f(a)) return !1;
            var b = Yf(a);
            return null == b ? !0 : !!b
        };
    var Tg = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ tg(a) & 2147483647) : String(b)
        },
        Ug = function(a) {
            return [Tg(a), Math.round(z() / 1E3)].join(".")
        },
        Xg = function(a, b, c, d, e) {
            var f = Vg(b);
            return Dg(a, f, Wg(c), d, e)
        },
        Yg = function(a, b, c, d) {
            var e = "" + Vg(c),
                f = Wg(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Vg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Wg = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var Zg = function() {
        de.dedupe_gclid || (de.dedupe_gclid = "" + Ug());
        return de.dedupe_gclid
    };
    var $g = function() {
        var a = !1;
        return a
    };
    var ah = {
            H: "OPT-5GJK39N",
            Mb: ""
        },
        bh = {
            Bh: "OPT-5GJK39N",
            Ch: "OPT-5GJK39N"
        };
    ah.df = Ba("");
    var ch = function() {
            return bh.Bh ? bh.Bh.split("|") : [ah.H]
        },
        dh = function() {
            return bh.Ch ? bh.Ch.split("|") : []
        },
        eh = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        gh = function() {
            for (var a = fh(), b = ch(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                !d || qa(d) ? a.container[b[c]] = {
                    state: 2
                } : d.state = 2
            }
            for (var e = dh(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && O(93);
                g ? g.state = 2 : a.destination[e[f]] = {
                    state: 2
                }
            }
            a.canonical[ah.Mb] = 2
        },
        hh = function(a) {
            return !!fh().container[a]
        },
        ih = function() {
            var a =
                fh().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    if (qa(c)) {
                        if (1 === c) return !0
                    } else if (1 === c.state) return !0
                }
            return !1
        },
        jh = function() {
            var a = {};
            k(fh().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };

    function fh() {
        var a = de.tidr;
        a || (a = new eh, de.tidr = a);
        return a
    }
    var kh = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            GT: "t",
            HA: "h",
            MC: "m",
            GTM: "g",
            OPT: "o"
        },
        lh = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        mh = function(a) {
            var b = ah.H.split("-"),
                c = b[0].toUpperCase();
            if (S(45)) {
                var d = {};
                d.qj = ah.H;
                d.rk = ce.hf;
                d.vk = ce.Tc;
                d.Wj = ah.df ? 2 : 1;
                ke ? (d.ue = lh[c], d.ue || (d.ue = 0)) : d.ue = qe ? 13 : 10;
                oe ? d.Df = 1 : $g() ? d.Df = 2 : d.Df = 3;
                var e;
                var f = d.ue,
                    g = d.Df;
                void 0 === f ? e = "" : (g || (g = 0), e = "" + ld(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | g]);
                var l = d.Wk,
                    m = 4 + e + (l ? "" + ld(2,
                        1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l] : ""),
                    n, p = d.vk;
                n = p && kd.test(p) ? "" + ld(3, 2) + p : "";
                var q, r = d.rk;
                q = r ? "" + ld(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [r] : "";
                var u;
                var t = d.qj;
                if (t && a) {
                    var v = t.split("-"),
                        w = v[0].toUpperCase();
                    if ("GTM" !== w && "OPT" !== w) u = "";
                    else {
                        var y = v[1];
                        u = "" + ld(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + y.length] + (d.Wj || 0) + y
                    }
                } else u = "";
                return m + n + q + u
            }
            var x = kh[c] || "i",
                A = a && "GTM" === c ? b[1] : "OPT" ===
                c ? b[1] : "",
                B = "w";
            ke && (B = $g() ? "s" : "o");
            me ? ("w" === B && (B = "x"), "o" === B && (B = "q")) : oe ? ("w" === B && (B = "y"), "o" === B && (B = "r")) : qe && (B = "z");
            return "2" + B + x + (4 === ce.Tc.length ? ce.Tc.slice(1) : ce.Tc) + A
        };

    function nh(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var oh = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function ph() {
        return gb("iPhone") && !gb("iPod") && !gb("iPad")
    }

    function qh() {
        ph() || gb("iPad") || gb("iPod")
    };
    gb("Opera");
    gb("Trident") || gb("MSIE");
    gb("Edge");
    !gb("Gecko") || -1 != fb().toLowerCase().indexOf("webkit") && !gb("Edge") || gb("Trident") || gb("MSIE") || gb("Edge"); - 1 != fb().toLowerCase().indexOf("webkit") && !gb("Edge") && gb("Mobile");
    gb("Macintosh");
    gb("Windows");
    gb("Linux") || gb("CrOS");
    var rh = ma.navigator || null;
    rh && (rh.appVersion || "").indexOf("X11");
    gb("Android");
    ph();
    gb("iPad");
    gb("iPod");
    qh();
    fb().toLowerCase().indexOf("kaios");
    var sh = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        th = /#|$/,
        uh = function(a, b) {
            var c = a.search(th),
                d = sh(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        vh = /[?&]($|#)/,
        wh = function(a, b, c) {
            for (var d, e = a.search(th), f = 0, g, l = []; 0 <= (g = sh(a, f, b, e));) l.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(vh, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var u = d.indexOf("?"),
                    t;
                0 > u || u > r ? (u = r, t = "") : t = d.substring(u + 1, r);
                q = [d.slice(0, u), t, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var xh = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };

    function yh(a) {
        if (!a || !F.head) return null;
        var b = zh("META");
        F.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Ah = function() {
            if (E.top == E) return 0;
            var a = E.location.ancestorOrigins;
            if (a) return a[a.length - 1] == E.location.origin ? 1 : 2;
            var b;
            var c = E.top;
            try {
                var d;
                if (d = !!c && null != c.location.href) b: {
                    try {
                        Nf(c.foo);
                        d = !0;
                        break b
                    } catch (e) {}
                    d = !1
                }
                b = d
            } catch (e) {
                b = !1
            }
            return b ? 1 : 2
        },
        zh = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Bh(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = zh("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        l = $a(g, e);
                    0 <= l && Array.prototype.splice.call(g, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            oh(e, "load", f);
            oh(e, "error", f)
        }
        d && (e.attributionsrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Dh = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            xh(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Ch(c, b)
        },
        Ch = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", e.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                });
                c.fetch(a, e)
            } else Bh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Eh = function() {};
    var Fh = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Gh = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.M = {};
            this.Ia = 0;
            var c;
            this.P = null != (c = b.Ek) ? c : 500;
            var d;
            this.D = null != (d = b.Xk) ? d : !1;
            this.B = null
        };
    la(Gh, Eh);
    Gh.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.D
            },
            d = wg(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.P && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.P));
        var f = function(g, l) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Fh(c), c.internalBlockOnErrors = b.D, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Hh(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Gh.prototype.removeEventListener = function(a) {
        a && a.listenerId && Hh(this, "removeEventListener", null, a.listenerId)
    };
    var Jh = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Ih(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Ih(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Ih(a.purpose.legitimateInterests,
                b) && Ih(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Ih = function(a, b) {
            return !(!a || !a[b])
        },
        Hh = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (Kh(a)) {
                Lh(a);
                var f = ++a.Ia;
                a.M[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Kh = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Lh = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, oh(a.m, "message", a.B))
        },
        Mh = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Fh(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Dh({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Nh = !0;
    Nh = !1;
    var Oh = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Ph = nh("", 550),
        Qh = nh("", 500);

    function Rh() {
        var a = de.tcf || {};
        return de.tcf = a
    }
    var Wh = function() {
        var a = Rh(),
            b = new Gh(E, {
                Ek: Nh ? 3E3 : -1
            });
        if (!0 === E.gtag_enable_tcf_support && !a.active && ("function" === typeof E.__tcfapi || "function" === typeof b.m.__tcfapi || null != Kh(b))) {
            a.active = !0;
            a.nd = {};
            Sh();
            var c = null;
            Nh ? c = E.setTimeout(function() {
                Th(a);
                Uh(a);
                c = null
            }, Qh) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Th(a), Uh(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Vh(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in Oh)
                                if (Oh.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var l, m = d,
                                            n = !0;
                                        n = void 0 === n ? !1 : n;
                                        l = Mh(m) ? !1 === m.gdprApplies || "tcunavailable" === m.tcString || void 0 === m.gdprApplies && !n || "string" !== typeof m.tcString || !m.tcString.length ? !0 : Jh(m, "1", 0) : !1;
                                        f["1"] = l
                                    } else f[g] = Jh(d, g, Oh[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.nd = e, Uh(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), Th(a), Uh(a)
            }
        }
    };

    function Th(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Nh && (a.nd = Vh())
    }

    function Sh() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Ph, a);
        kg(b)
    }

    function Vh() {
        var a = {},
            b;
        for (b in Oh) Oh.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Uh(a) {
        var b = {},
            c = (b.ad_storage = a.nd["1"] ? "granted" : "denied", b);
        lg(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Xh()
        })
    }
    var Xh = function() {
            var a = Rh();
            return a.active ? a.tcString || "" : ""
        },
        Yh = function() {
            var a = Rh();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Zh = function(a) {
            if (!Oh.hasOwnProperty(String(a))) return !0;
            var b = Rh();
            return b.active && b.nd ? !!b.nd[String(a)] : !0
        };
    var $h = function(a) {
        var b = String(a[Wb.Ta] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    };
    var ai = ["L", "S", "Y"],
        bi = ["S", "E"],
        ci = {
            sampleRate: "0.005000",
            Uh: "",
            Th: Number("5"),
            Sh: Number("")
        },
        di = 0 <= F.location.search.indexOf("?gtm_latency=") || 0 <= F.location.search.indexOf("&gtm_latency="),
        ei;
    if (!(ei = di)) {
        var fi = Math.random(),
            gi = ci.sampleRate;
        ei = fi < gi
    }
    var hi = ei,
        ii = "https://www.googletagmanager.com/a?id=" + ah.H + "&cv=3",
        ji = {
            label: ah.H + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        };

    function ki() {
        return [ii, "&v=3&t=t", "&pid=" + ta(), "&rv=" + ce.Tc].join("")
    }
    var li = ki();

    function mi() {
        li = ki()
    }
    var ni = {},
        oi = "",
        pi = "",
        qi = "",
        ri = "",
        si = [],
        ti = "",
        ui = {},
        vi = !1,
        wi = {},
        xi = {},
        yi = {},
        zi = "",
        Ai = void 0,
        Bi = {},
        Ci = {},
        Di = void 0,
        Ei = 5;
    0 < ci.Th && (Ei = ci.Th);
    var Fi = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Oj: function() {
                    return c < a ? !1 : z() - d[c % a] < b
                },
                nk: function() {
                    var f = c++ % a;
                    d[f] = z()
                }
            }
        }(Ei, 1E3),
        Gi = 1E3,
        Hi = "";

    function Ii(a, b) {
        var c = Ai;
        if (void 0 === c) return "";
        var d = Za("GTM"),
            e = Za("TAGGING"),
            f = Za("HEALTH"),
            g = li,
            l = ni[c] ? "" : "&es=1",
            m = Bi[c],
            n = Ji(c),
            p = Ki(),
            q = oi,
            r = pi,
            u = zi,
            t = Li(a),
            v = qi,
            w = ri,
            y = Mi(a, b),
            x;
        return [g, l, m, n, d ? "&u=" + d : "", e ? "&ut=" + e : "", f ? "&h=" + f : "", p, q, r, u, t, v, w, y, x, ti ? "&dl=" + encodeURIComponent(ti) : "", 0 < si.length ? "&tdp=" + si.join(".") :
            "", ce.hf ? "&x=" + ce.hf : "", "&z=0"
        ].join("")
    }

    function Oi(a) {
        Di && (E.clearTimeout(Di), Di = void 0);
        if (void 0 !== Ai && (!ni[Ai] || oi || pi || Pi(a)))
            if (void 0 === Qi[Ai] && (Ci[Ai] || Fi.Oj() || 0 >= Gi--)) O(1), Ci[Ai] = !0;
            else {
                void 0 === Qi[Ai] && Fi.nk();
                var b = Ii(!0, a);
                a ? Nb(b) : Gb(b);
                if (ri || ti && 0 < si.length) {
                    var c = b.replace("/a?", "/td?");
                    Gb(c)
                }
                ni[Ai] = !0;
                ti = ri = qi = zi = pi = oi = "";
                si = []
            }
    }

    function Ri() {
        Di || (Di = E.setTimeout(Oi, 500))
    }

    function Si(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }

    function Ti() {
        2022 <= Ii().length && Oi()
    }

    function Ki() {
        return "&tc=" + wc.filter(function(a) {
            return a
        }).length
    }
    var Vi = function(a, b) {
            if (hi && !Ci[a] && Ai !== a) {
                Oi();
                Ai = a;
                qi = oi = "";
                Bi[a] = "&e=" + Si(b) + "&eid=" + a;
                Ri();
            }
        },
        Wi = function(a, b, c, d) {
            if (hi && b) {
                var e = $h(b),
                    f = c + e;
                if (!Ci[a]) {
                    a !== Ai && (Oi(), Ai = a);
                    oi = oi ? oi + "." + f : "&tr=" + f;
                    var g = b["function"];
                    if (!g) throw Error("Error: No function name given for function call.");
                    var l = (yc[g] ? "1" : "2") + e;
                    qi = qi ? qi + "." + l : "&ti=" + l;
                    Ri();
                    Ti()
                }
            }
        },
        Xi = function(a, b, c) {
            if (hi && a && a[Wb.rb]) {
                var d = b + "." + a[Wb.rb];
                yi[d] = c;
                "html" == $h(a) && Hi == d && (oi += ":" + Math.floor(c))
            }
        };

    function Li(a) {}

    function Ji(a) {}
    var dj = function(a, b, c) {
            if (hi && void 0 !== a && !Ci[a]) {
                a !== Ai && (Oi(), Ai = a);
                var d = c + b;
                pi = pi ? pi + "." + d : "&epr=" + d;
                Ri();
                Ti()
            }
        },
        ej = function(a, b, c) {},
        fj = ["S", "P", "C", "Z"],
        gj = {},
        hj = (gj[1] = 5, gj[2] = 5, gj[3] = 5, gj),
        ij = {},
        Qi = {},
        Ni = void 0,
        jj = function(a, b) {
            var c = !1;
            if (!hi || Qi[a] || 0 === hj[b]) return !1;
            --hj[b];
            Qi[a] = b;
            c = !0;
            return c
        },
        kj = function(a, b, c) {
            if (!hi || !Qi[a]) return;
            var d = ij[a];
            d || (ij[a] = d = {});
            d[b] = c;
        };

    function Mi(a, b) {
        var c;
        if (!Ai || !Pi(b)) return "";
        var d = ij[Ai];
        c = "&al=" + fj.filter(function(e) {
            return void 0 !== d[e]
        }).map(function(e) {
            return e + Math.floor(d[e])
        }).join(".") + (".Z" + Qi[Ai]);
        a && delete ij[Ai];
        return c
    }

    function Pi(a) {
        var b = !1;
        if (!Ai || !ij[Ai]) return !1;
        b = a || "C" in ij[Ai];
        return b
    }
    var lj = function() {
        if (hi) {
            E.setInterval(mi, 864E5);
            Hb(E, "pagehide", function() {
                Ai && Qi[Ai] && Oi(!0);
                for (var a in ij) ij.hasOwnProperty(a) && (Ai = Number(a), Oi(!0));
            });
        }
    };
    hb();
    ph() || gb("iPod");
    gb("iPad");
    !gb("Android") || ib() || hb() || gb("Opera") || gb("Silk");
    ib();
    !gb("Safari") || ib() || gb("Coast") || gb("Opera") || gb("Edge") || gb("Edg/") || gb("OPR") || hb() || gb("Silk") || gb("Android") || qh();
    var mj = {},
        nj = null,
        oj = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!nj) {
                nj = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(l[m].split(""));
                    mj[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === nj[q] && (nj[q] = p)
                    }
                }
            }
            for (var r = mj[f], u = Array(Math.floor(b.length / 3)), t = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var y = b[v],
                    x = b[v + 1],
                    A = b[v + 2],
                    B = r[y >> 2],
                    D = r[(y & 3) << 4 | x >> 4],
                    H = r[(x & 15) << 2 | A >> 6],
                    J = r[A & 63];
                u[w++] = "" + B + D + H + J
            }
            var C = 0,
                K = t;
            switch (b.length - v) {
                case 2:
                    C = b[v + 1], K = r[(C & 15) << 2] || t;
                case 1:
                    var M = b[v];
                    u[w] = "" + r[M >> 2] + r[(M & 3) << 4 | C >> 4] + K + t
            }
            return u.join("")
        };
    var pj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function qj() {
        var a;
        return null != (a = E.google_tag_data) ? a : E.google_tag_data = {}
    }

    function rj() {
        var a = E.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function sj() {
        var a, b;
        return null != (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function tj() {
        var a, b;
        return "function" === typeof(null == (a = E.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function uj() {
        if (!tj()) return null;
        var a = qj();
        if (a.uach_promise) return a.uach_promise;
        var b = E.navigator.userAgentData.getHighEntropyValues(pj).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };

    function Aj(a, b, c, d) {
        var e, f = Number(null != a.Va ? a.Va : void 0);
        0 !== f && (e = new Date((b || z()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            ub: d
        }
    };
    var Bj = ["1"],
        Cj = {},
        Tj = {},
        Vj = function(a) {
            return Cj[Uj(a)]
        },
        Yj = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Uj(a.prefix);
            if (!Cj[c] && !Wj(c, a.path, a.domain) && b) {
                var d = Uj(a.prefix),
                    e = Ug();
                if (0 === Xj(d, e, a)) {
                    var f = yb("google_tag_data", {});
                    f._gcl_au || (f._gcl_au = e)
                }
                Wj(c, a.path, a.domain)
            }
        };

    function Xj(a, b, c, d) {
        var e = Yg(b, "1", c.domain, c.path),
            f = Aj(c, d);
        f.ub = "ad_storage";
        return Qg(a, e, f)
    }

    function Wj(a, b, c) {
        var d = Xg(a, b, c, Bj, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (Cj[a] = e.slice(0, 2).join("."), Tj[a] = {
            id: e.slice(2, 4).join("."),
            yh: Number(e[4]) || 0
        }) : 3 === e.length ? Tj[a] = {
            id: e.slice(0, 2).join("."),
            yh: Number(e[2]) || 0
        } : Cj[a] = d;
        return !0
    }

    function Uj(a) {
        return (a || "_gcl") + "_au"
    };
    var Zj;
    var dk = function() {
            var a = ak,
                b = bk,
                c = ck(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Hb(F, "mousedown", d);
                Hb(F, "keyup", d);
                Hb(F, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        ek = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            ck().decorators.push(f)
        },
        fk = function(a, b, c) {
            for (var d = ck().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== F.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Ha(e, g.callback())
                }
            }
            return e
        };

    function ck() {
        var a = yb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var gk = /(.*?)\*(.*?)\*(.*)/,
        hk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        ik = /^(?:www\.|m\.|amp\.)+/,
        jk = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function kk(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var mk = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Ua(String(d))))
            }
        var e = b.join("*");
        return ["1", lk(e), e].join("*")
    };

    function lk(a, b) {
        var c = [wb.userAgent, (new Date).getTimezoneOffset(), wb.userLanguage || wb.language, Math.floor(z() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Zj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Zj = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Zj[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function nk() {
        return function(a) {
            var b = df(E.location.href),
                c = b.search.replace("?", ""),
                d = Ze(c, "_gl", !0) || "";
            a.query = ok(d) || {};
            var e = bf(b, "fragment").match(kk("_gl"));
            a.fragment = ok(e && e[3] || "") || {}
        }
    }

    function pk(a, b) {
        var c = kk(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var qk = function(a, b) {
            b || (b = "_gl");
            var c = jk.exec(a);
            if (!c) return "";
            var d = c[1],
                e = pk(b, (c[2] || "").slice(1)),
                f = pk(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        rk = function(a) {
            var b = nk(),
                c = ck();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ha(d, e.query), a && Ha(d, e.fragment));
            return d
        },
        ok = function(a) {
            try {
                var b = sk(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Va(d[e + 1]);
                        c[f] = g
                    }
                    Xa("TAGGING", 6);
                    return c
                }
            } catch (l) {
                Xa("TAGGING",
                    8)
            }
        };

    function sk(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = gk.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === lk(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                Xa("TAGGING", 7)
            }
        }
    }

    function tk(a, b, c, d) {
        function e(p) {
            p = pk(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = jk.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function uk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = fk(b, 1, c),
            e = fk(b, 2, c),
            f = fk(b, 3, c);
        if (Ia(d)) {
            var g = mk(d);
            c ? vk("_gl", g, a) : wk("_gl", g, a, !1)
        }
        if (!c && Ia(e)) {
            var l = mk(e);
            wk("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        wk(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        vk(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && tk(n, p, q)
            }
    }

    function wk(a, b, c, d) {
        if (c.href) {
            var e = tk(a, b, c.href, void 0 === d ? !1 : d);
            eb.test(e) && (c.href = e)
        }
    }

    function vk(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = F.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = tk(a, b, c.action);
                eb.test(n) && (c.action = n)
            }
        }
    }

    function ak(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || uk(e, e.hostname)
            }
        } catch (g) {}
    }

    function bk(a) {
        try {
            if (a.action) {
                var b = bf(df(a.action), "host");
                uk(a, b)
            }
        } catch (c) {}
    }
    var xk = function(a, b, c, d) {
            dk();
            ek(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        yk = function(a, b) {
            dk();
            ek(a, [af(E.location, "host", !0)], b, !0, !0)
        },
        zk = function() {
            var a = F.location.hostname,
                b = hk.exec(F.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(ik, ""),
                m = e.replace(ik, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        Ak = function(a, b) {
            return !1 === a ? !1 : a || b || zk()
        };
    var Bk = function(a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Pf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function Ck(a, b) {
        var c = Bk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Pf] || (d[c[e].Pf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    fa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Pf].push(g)
            }
        }
        return d
    };
    var Dk = /^\w+$/,
        Ek = /^[\w-]+$/,
        Fk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Gk = function() {
            if (!Pf().h() || !ag()) return !0;
            var a = Yf("ad_storage");
            return null == a ? !0 : !!a
        },
        Hk = function(a, b) {
            $f("ad_storage") ? Gk() ? a() : fg(a, "ad_storage") : b ? Xa("TAGGING", 3) : eg(function() {
                Hk(a, !0)
            }, ["ad_storage"])
        },
        Jk = function(a) {
            return Ik(a).map(function(b) {
                return b.fa
            })
        },
        Ik = function(a) {
            var b = [];
            if (!xg(E) || !F.cookie) return b;
            var c = Ag(a, F.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    ud: d.ud
                }, e++) {
                var f = Kk(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.ud = g.fa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = sa(b, function(q) {
                            return function(r) {
                                return r.fa === q.ud
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Lk(p.labels, n || [])) : b.push({
                        version: l,
                        fa: d.ud,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Mk(b)
        };

    function Lk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Nk(a) {
        return a && "string" == typeof a && a.match(Dk) ? a : "_gcl"
    }
    var Pk = function() {
            var a = df(E.location.href),
                b = bf(a, "query", !1, void 0, "gclid"),
                c = bf(a, "query", !1, void 0, "gclsrc"),
                d = bf(a, "query", !1, void 0, "wbraid"),
                e = bf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Ze(f, "gclid");
                c = c || Ze(f, "gclsrc");
                d = d || Ze(f, "wbraid")
            }
            return Ok(b, c, e, d)
        },
        Ok = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Ek.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Ek)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Rk = function(a) {
            var b = Pk();
            Hk(function() {
                Qk(b, !1, a)
            })
        };

    function Qk(a, b, c, d, e) {
        function f(w, y) {
            var x = Sk(w, g);
            x && (Qg(x, y, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = Nk(c.prefix);
        d = d || z();
        var l = Aj(c, d, !0);
        l.ub = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = Sk("gb", g),
                u = !1;
            if (!b)
                for (var t = Ik(r), v = 0; v < t.length; v++) t[v].fa === q && t[v].labels &&
                    0 < t[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Uk = function(a, b) {
            var c = rk(!0);
            Hk(function() {
                for (var d = Nk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Fk[f]) {
                        var g = Sk(f, d),
                            l = c[g];
                        if (l) {
                            var m = Math.min(Tk(l), z()),
                                n;
                            b: {
                                var p = m;
                                if (xg(E))
                                    for (var q = Ag(g, F.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (Tk(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = Aj(b, m, !0);
                                u.ub = "ad_storage";
                                Qg(g, l, u)
                            }
                        }
                    }
                }
                Qk(Ok(c.gclid, c.gclsrc), !1, b)
            })
        },
        Sk = function(a, b) {
            var c = Fk[a];
            if (void 0 !== c) return b + c
        },
        Tk = function(a) {
            return 0 !== Vk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Kk(a) {
        var b = Vk(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            fa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Vk(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Ek.test(a[2]) ? [] : a
    }
    var Wk = function(a, b, c, d, e) {
            if (ra(b) && xg(E)) {
                var f = Nk(e),
                    g = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = Sk(a[m], f);
                            if (n) {
                                var p = Ag(n, F.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                Hk(function() {
                    xk(g, b, c, d)
                })
            }
        },
        Mk = function(a) {
            return a.filter(function(b) {
                return Ek.test(b.fa)
            })
        },
        Xk = function(a, b) {
            if (xg(E)) {
                for (var c = Nk(b.prefix), d = {}, e = 0; e < a.length; e++) Fk[a[e]] && (d[a[e]] = Fk[a[e]]);
                Hk(function() {
                    k(d, function(f, g) {
                        var l = Ag(c + g, F.cookie, void 0, "ad_storage");
                        l.sort(function(u,
                            t) {
                            return Tk(t) - Tk(u)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = Tk(m),
                                p = 0 !== Vk(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Vk(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Qk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Yk(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Zk = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (ag()) {
                var c = Pk();
                if (Yk(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    yk(function() {
                        return d
                    }, 3);
                    yk(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        $k = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Gk()) return e;
            var f = Ik(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.fa].concat(l.labels || [], [b]).join("."),
                    p = Aj(c, m, !0);
                p.ub = "ad_storage";
                Qg(a, n, p)
            }
            return e
        };

    function al(a, b) {
        var c = Nk(b),
            d = Sk(a, c);
        if (!d) return 0;
        for (var e = Ik(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function bl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var cl = function(a) {
        var b = Math.max(al("aw", a), bl(Gk() ? Ck() : {}));
        return Math.max(al("gb", a), bl(Gk() ? Ck("_gac_gb", !0) : {})) > b
    };
    var hl = /[A-Z]+/,
        il = /\s/,
        jl = function(a) {
            if (h(a)) {
                a = Da(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (hl.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || il.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            U: c + "-" + d[0],
                            J: d
                        }
                    }
                }
            }
        },
        ll = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = jl(a[c]);
                d && (b[d.id] = d)
            }
            kl(b);
            var e = [];
            k(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function kl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.J[1] && b.push(d.U)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var nl = function(a, b, c, d) {
            return (2 === ml() || d || "http:" != E.location.protocol ? a : b) + c
        },
        ml = function() {
            var a = Eb(),
                b;
            if (1 === a) a: {
                var c = se;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = F.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                    var m = g[l].src;
                    if (m) {
                        m = m.toLowerCase();
                        if (0 === m.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === m.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var zl = function(a, b, c) {
            this.target = a;
            this.eventName = b;
            this.h = c;
            this.m = {};
            this.metadata = I(c.eventMetadata || {});
            this.I = !1
        },
        Al = function(a, b, c) {
            var d = U(a.h, b);
            void 0 !== d ? a.m[b] = d : void 0 !== c && (a.m[b] = c)
        },
        Bl = function(a, b, c) {
            var d = Le(a.target.U);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function Cl(a) {
        return {
            getDestinationId: function() {
                return a.target.U
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                return void(a.m[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                Al(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.I = !0)
            },
            getProcessedEvent: function() {
                return a
            },
            getFromEventContext: function(b) {
                return U(a.h, b)
            }
        }
    };
    var Vl = function(a, b, c, d, e, f, g, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.m = e;
            this.D = f;
            this.P = g;
            this.B = l;
            this.eventMetadata = m;
            this.O = n;
            this.N = p;
            this.C = q
        },
        U = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.M[b]) return a.M[b];
            if (void 0 !== a.m[b]) return a.m[b];
            hi && Wl(a, a.D[b], a.P[b]) && (O(71), O(79));
            return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        Xl = function(a) {
            function b(g) {
                for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.M);
            b(a.m);
            b(a.D);
            if (hi)
                for (var d = Object.keys(a.P), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        O(71);
                        O(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        Yl = function(a, b, c) {
            function d(m) {
                Ub(m) && k(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.D[b]), d(a.m[b]), d(a.M[b]));
            c && 2 !== c || d(a.h[b]);
            if (hi) {
                var g = f,
                    l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.P[b]), d(a.m[b]), d(a.M[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || Wl(a, e, l)) O(71), O(81);
                f = g;
                e = l
            }
            return f ? e : void 0
        },
        Zl = function(a) {
            var b = [P.g.Dc, P.g.Cd, P.g.Dd, P.g.Ed, P.g.Fd, P.g.Gd, P.g.Hd],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.M) || e(a.m)) return c;
            e(a.D);
            if (hi) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.P);
                Wl(a, c, f) && (O(71), O(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        Wl = function(a, b, c) {
            if (!hi) return !1;
            try {
                if (b === c) return !1;
                var d = Sb(b);
                if (d !== Sb(c) || !(Ub(b) && Ub(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (Wl(a,
                                b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || Wl(a, b[g], c[g])) return !0
                }
            } catch (l) {
                O(72)
            }
            return !1
        },
        $l = function(a, b) {
            this.Ki = a;
            this.Li = b;
            this.D = {};
            this.Vg = {};
            this.h = {};
            this.M = {};
            this.m = {};
            this.Rc = {};
            this.B = {};
            this.qc = function() {};
            this.Ia = function() {};
            this.P = !1
        },
        am = function(a, b) {
            a.D = b;
            return a
        },
        bm = function(a, b) {
            a.Vg = b;
            return a
        },
        cm = function(a, b) {
            a.h = b;
            return a
        },
        dm = function(a, b) {
            a.M = b;
            return a
        },
        em = function(a, b) {
            a.m = b;
            return a
        },
        fm = function(a,
            b) {
            a.Rc = b;
            return a
        },
        gm = function(a, b) {
            a.B = b || {};
            return a
        },
        hm = function(a, b) {
            a.qc = b;
            return a
        },
        im = function(a, b) {
            a.Ia = b;
            return a
        },
        jm = function(a) {
            a.P = !0;
            return a
        },
        km = function(a) {
            return new Vl(a.Ki, a.Li, a.D, a.Vg, a.h, a.M, a.m, a.Rc, a.B, a.qc, a.Ia, a.P)
        };

    function om() {
        return "attribution-reporting"
    }

    function pm(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var qm = !1;

    function rm() {
        if (pm("join-ad-interest-group") && pa(wb.joinAdInterestGroup)) return !0;
        qm || (yh('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), qm = !0);
        return pm("join-ad-interest-group") && pa(wb.joinAdInterestGroup)
    }

    function sm(a, b) {
        var c = void 0;
        try {
            c = F.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > z() - d) {
                Xa("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Xa("TAGGING", 10);
                return
            }
        } catch (e) {}
        Fb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: z()
        }, c)
    }

    function tm() {
        return S(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    };
    var um = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        vm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        wm = /^\d+\.fls\.doubleclick\.net$/,
        xm = /;gac=([^;?]+)/,
        ym = /;gacgb=([^;?]+)/,
        zm = /;gclaw=([^;?]+)/,
        Am = /;gclgb=([^;?]+)/;

    function Bm(a, b) {
        if (wm.test(F.location.host)) {
            var c = F.location.href.match(b);
            return c && 2 == c.length && c[1].match(um) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].fa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Cm = function(a, b, c) {
        var d = Gk() ? Ck("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var l = $k("_gac_gb_" + g, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + l.join(","))
        }
        return {
            Aj: f ? e.join(";") : "",
            zj: Bm(d, ym)
        }
    };

    function Dm(a, b, c) {
        if (wm.test(F.location.host)) {
            var d = F.location.href.match(c);
            if (d && 2 == d.length && d[1].match(vm)) return [{
                fa: d[1]
            }]
        } else return Ik((a || "_gcl") + b);
        return []
    }
    var Em = function(a) {
            return Dm(a, "_aw", zm).map(function(b) {
                return b.fa
            }).join(".")
        },
        Fm = function(a) {
            return Dm(a, "_gb", Am).map(function(b) {
                return b.fa
            }).join(".")
        },
        Gm = function(a, b) {
            var c = $k((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Hm = function() {
        if (pa(E.__uspapi)) {
            var a = "";
            try {
                E.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var rn = function(a, b) {
        var c, d = E.GooglebQhCsO;
        d || (d = {}, E.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var sn = function(a, b) {
        var c = uh(a, "fmt");
        if (b) {
            var d = uh(a, "random"),
                e = uh(a, "label") || "";
            if (!d) return !1;
            var f = oj(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!rn(f, b)) return !1
        }
        c && 4 != c && (a = wh(a, "rfmt", c));
        var g = wh(a, "fmt", 4);
        Db(g, function() {
            E.google_noFurtherRedirects && b && b.call && (E.google_noFurtherRedirects = null, b())
        }, void 0, void 0, F.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var In = function() {
            this.h = {}
        },
        Jn = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Kn = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Mn = function(a, b, c, d, e) {};

    function On(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return df("" + c + b).href
        }
    }

    function Pn(a, b) {
        return me || oe ? On(a, b) : void 0
    }

    function Qn() {
        return !!ce.Zd && "SGTM_TOKEN" !== ce.Zd.split("@@").join("")
    };
    var Sn = function(a, b, c, d) {
            if (!Rn() && !hh(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + ce.ia,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var l = Qn();
                l && (f += "&sign=" + ce.Zd);
                var m = Pn(b, e + f);
                if (!m) {
                    var n = ce.zd + e;
                    l && xb && g && (n = xb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = nl("https://", "http://", n + f)
                }
                fh().container[a] = {
                    state: 1,
                    context: d
                };
                Db(m)
            }
        },
        Tn = function(a, b, c) {
            var d;
            if (d = !Rn()) {
                var e = fh().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (ih()) fh().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                }, O(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ce.ia + "&cx=c";
                    Qn() && (f += "&sign=" + ce.Zd);
                    var g = Pn(b, f);
                    g || (g = nl("https://", "http://", ce.zd + f));
                    fh().destination[a] = {
                        state: 1,
                        context: c
                    };
                    Db(g)
                }
        };

    function Rn() {
        if ($g()) {
            return !0
        }
        return !1
    };
    var Un = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Vn = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Wn = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Xn = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        $n = function(a) {
            var b = Ee("gtm.allowlist") || Ee("gtm.whitelist");
            b && O(9);
            ke && (b = ["google", "gtagfl", "lcl", "zone"]);
            Yn && Zn() &&
                (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."));
            var c = b && Ja(Ca(b), Vn),
                d = Ee("gtm.blocklist") || Ee("gtm.blacklist");
            d || (d = Ee("tagTypeBlacklist")) && O(3);
            d ? O(8) : d = [];
            Zn() && (d = Ca(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ca(d).indexOf("google") && O(2);
            var e = d && Ja(Ca(d), Wn),
                f = {};
            return function(g) {
                var l = g && g[Wb.Ta];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = we[l] || [],
                    n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        O(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var u = 0 <= e.indexOf(l);
                    if (u) r = u;
                    else {
                        var t = xa(e, m || []);
                        t && O(10);
                        r = t
                    }
                }
                var v = !n || r;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = xa(e, Xn));
                return f[l] = v
            }
        },
        Yn = !1;
    var Zn = function() {
        return Un.test(E.location && E.location.hostname)
    };
    var ao = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        bo = {},
        co = Object.freeze((bo[P.g.za] = !0, bo)),
        eo = 0 <= F.location.search.indexOf("?gtm_diagnostics=") || 0 <= F.location.search.indexOf("&gtm_diagnostics="),
        go = function(a, b, c) {
            if (hi && "config" === a && !(1 < jl(b).J.length)) {
                var d, e = yb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = I(c.D);
                I(c.h, f);
                var g = [],
                    l;
                for (l in d) {
                    var m = fo(d[l], f);
                    m.length && (eo && console.log(m), g.push(l))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        ri = ri ? ri + "!" + n : "&tdc=" + n
                    }
                    Xa("TAGGING",
                        ao[F.readyState] || 14)
                }
                d[b] = f
            }
        };

    function ho(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function fo(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var u = r[q];
                return void 0 === u ? co[q] : u
            },
            f;
        for (f in ho(a, b)) {
            var g = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === Sb(l) || "array" === Sb(l),
                p = "object" === Sb(m) || "array" === Sb(m);
            if (n && p) fo(l, m, c, g);
            else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var io = !1,
        jo = 0,
        ko = [];

    function lo(a) {
        if (!io) {
            var b = F.createEventObject,
                c = "complete" == F.readyState,
                d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                io = !0;
                for (var e = 0; e < ko.length; e++) G(ko[e])
            }
            ko.push = function() {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function mo() {
        if (!io && 140 > jo) {
            jo++;
            try {
                F.documentElement.doScroll("left"), lo()
            } catch (a) {
                E.setTimeout(mo, 50)
            }
        }
    }
    var no = function(a) {
        io ? a() : ko.push(a)
    };
    var oo = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: ah.H
        }
    };
    var qo = function(a, b) {
            this.h = !1;
            this.D = [];
            this.M = {
                tags: []
            };
            this.P = !1;
            this.m = this.B = 0;
            po(this, a, b)
        },
        ro = function(a, b, c, d) {
            if (ge.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Ub(d) && (e = I(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        so = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        to = function(a) {
            if (!a.h) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.D.length = 0
            }
        },
        po = function(a, b, c) {
            void 0 !== b && uo(a, b);
            c && E.setTimeout(function() {
                return to(a)
            }, Number(c))
        },
        uo =
        function(a, b) {
            var c = Ga(function() {
                return G(function() {
                    b(ah.H, a.M)
                })
            });
            a.h ? c() : a.D.push(c)
        },
        vo = function(a) {
            a.B++;
            return Ga(function() {
                a.m++;
                a.P && a.m >= a.B && to(a)
            })
        },
        wo = function(a) {
            a.P = !0;
            a.m >= a.B && to(a)
        };
    var xo = {
        ca: {
            Jk: "ads_conversion_hit",
            Kk: "container_execute_start",
            bi: "container_setup_end",
            Wf: "container_setup_start",
            Nk: "event_execute_end",
            Ok: "event_execute_start",
            Pk: "event_setup_start",
            Qk: "ga4_conversion_hit",
            ef: "page_load",
            Cb: "snippet_load",
            Xi: "tag_callback_error",
            Yi: "tag_callback_failure",
            Zi: "tag_callback_success",
            aj: "tag_execute_end",
            hh: "tag_execute_start"
        }
    };
    var Ao = function(a, b, c, d, e, f) {
            var g = {};
            return g
        },
        Bo = function(a) {
            var b = !1;
            return b
        },
        Co = function(a, b) {},
        Do = function(a, b, c) {},
        Eo = function() {
            function a(d) {
                return !qa(d) || 0 > d ? 0 : d
            }
            if (!de._li && Qb() && Qb().timing) {
                var b = Qb().timing.navigationStart,
                    c = qa(Fe.get("gtm.start")) ? Fe.get("gtm.start") : 0;
                de._li = {
                    cst: a(c - b),
                    cbt: a(ue - b)
                }
            }
        },
        Fo = function(a) {
            Qb() && Qb().mark(ah.H + "_" + a + "_start")
        },
        Go = function(a) {
            if (Qb()) {
                var b = Qb(),
                    c = ah.H + "_" + a + "_start",
                    d = ah.H + "_" + a + "_duration";
                b.measure(d, c);
                var e = Qb().getEntriesByName(d)[0];
                b.clearMarks(c);
                b.clearMeasures(d);
                var f = de._p || {};
                void 0 === f[a] && (f[a] = e.duration, de._p = f);
                return e.duration
            }
        },
        Ho = function() {
            var a = Pb();
            if (void 0 !== a) {
                var b = de._p || {};
                b.PAGEVIEW = a;
                de._p = b
            }
        };
    var Io = {},
        Jo = function() {
            return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject]
        },
        Ko = !1;
    var Lo = function(a) {
            E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
            var b = E.GoogleAnalyticsObject;
            if (E[b]) E.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ea());
                E[b] = c
            }
            Eo();
            return E[b]
        },
        Mo = function(a) {
            if (ag()) {
                var b = Jo();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function No() {
        return E.GoogleAnalyticsObject || "ga"
    }
    var Oo = function(a) {
            if (Io[a] || Ko) return;
            var b = E[No()];
            pa(b) && (b("provide", a, oa), Io[a] = !0);
        },
        Po = function(a, b) {
            return function() {
                var c = Jo(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function Uo(a, b, c, d) {
        var e = wc[a],
            f = Vo(a, b, c, d);
        if (!f) return null;
        var g = Fc(e[Wb.gh], c, []);
        if (g && g.length) {
            var l = g[0];
            f = Uo(l.index, {
                O: f,
                N: 1 === l.sh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Vo(a, b, c, d) {
        function e() {
            if (f[Wb.Qi]) l();
            else {
                var w = Gc(f, c, []),
                    y = w[Wb.Yh];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!mg(y[x])) {
                            l();
                            return
                        }
                var A = ro(c.Eb, String(f[Wb.Ta]), Number(f[Wb.rb]), w[Wb.Ri]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var C = z() - J;
                        Wi(c.id, wc[a], "5", C);
                        so(c.Eb, A, "success", C);
                        S(70) && Do(c, f, xo.ca.Zi);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var C = z() - J;
                        Wi(c.id, wc[a], "6", C);
                        so(c.Eb, A, "failure", C);
                        S(70) && Do(c, f, xo.ca.Yi);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Wi(c.id, f, "1");
                var D = function() {
                    var C = z() - J;
                    Wi(c.id, f, "7", C);
                    so(c.Eb, A, "exception", C);
                    S(70) && Do(c, f, xo.ca.Xi);
                    B || (B = !0, l())
                };
                if (S(70)) {
                    var H = Ao(xo.ca.hh, ah.H, c.id, Number(f[Wb.rb]), c.name, $h(f));
                    Bo(H)
                }
                var J = z();
                try {
                    Ec(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (C) {
                    D(C)
                }
                S(70) && Do(c, f, xo.ca.aj)
            }
        }
        var f = wc[a],
            g = b.O,
            l = b.N,
            m = b.terminate;
        if (c.yf(f)) return null;
        var n = Fc(f[Wb.ih], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Uo(p.index, {
                    O: g,
                    N: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            l = 2 === p.sh ? m : q
        }
        if (f[Wb.bh] || f[Wb.Ti]) {
            var r = f[Wb.bh] ? xc : c.Ck,
                u = g,
                t = l;
            if (!r[a]) {
                e = Ga(e);
                var v = Wo(a, r, e);
                g = v.O;
                l = v.N
            }
            return function() {
                r[a](u, t)
            }
        }
        return e
    }

    function Wo(a, b, c) {
        var d = [],
            e = [];
        b[a] = Xo(d, e, c);
        return {
            O: function() {
                b[a] = Yo;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            N: function() {
                b[a] = Zo;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Xo(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Yo(a) {
        a()
    }

    function Zo(a, b) {
        b()
    };
    var ap = function(a, b) {
            return 1 === arguments.length ? $o("config", a) : $o("config", a, b)
        },
        bp = function(a, b, c) {
            c = c || {};
            c[P.g.Bb] = a;
            return $o("event", b, c)
        };

    function $o(a) {
        return arguments
    }
    var cp = function() {
        this.h = [];
        this.m = []
    };
    cp.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    cp.prototype.listen = function(a) {
        this.m.push(a)
    };
    cp.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    cp.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var ep = function(a, b, c) {
            dp().enqueue(a, b, c)
        },
        gp = function() {
            var a = fp;
            dp().listen(a)
        };

    function dp() {
        var a = de.mb;
        a || (a = new cp, de.mb = a);
        return a
    }
    var op = function(a) {
            var b = de.zones;
            return b ? b.getIsAllowedFn(ch(), a) : function() {
                return !0
            }
        },
        pp = function(a) {
            var b = de.zones;
            return b ? b.isActive(ch(), a) : !0
        };
    var sp = function(a, b) {
        for (var c = [], d = 0; d < wc.length; d++)
            if (a[d]) {
                var e = wc[d];
                var f = vo(b.Eb);
                try {
                    var g = Uo(d, {
                        O: f,
                        N: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = c,
                            m = l.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = yc[p];
                        m.call(l, {
                            Ph: n,
                            Fh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else qp(d, b), f()
                } catch (u) {
                    f()
                }
            }
        c.sort(rp);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 < c.length
    };

    function rp(a, b) {
        var c, d = b.Fh,
            e = a.Fh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Ph,
                l = b.Ph;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function qp(a, b) {
        if (hi) {
            var c = function(d) {
                var e = b.yf(wc[d]) ? "3" : "4",
                    f = Fc(wc[d][Wb.gh], b, []);
                f && f.length && c(f[0].index);
                Wi(b.id, wc[d], e);
                var g = Fc(wc[d][Wb.ih], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var vp = !1,
        tp;
    var $p = function(a) {
        var b = z(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if ("gtm.js" === e) {
            if (vp) return !1;
            vp = !0;
        }
        var l, m = !1;
        if (pp(c)) l = op(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            m = !0;
            l = op(Number.MAX_SAFE_INTEGER)
        }
        Vi(c, e);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = n;
        var r = {
                id: c,
                priorityId: d,
                name: e,
                yf: $n(l),
                Ck: [],
                zh: function() {
                    O(6);
                    Xa("HEALTH", 0)
                },
                mh: wp(),
                nh: Xp(c),
                Eb: new qo(q, p)
            },
            u = Kc(r);
        m && (u = Yp(u));
        var t = sp(u, r),
            v = !1;
        wo(r.Eb);
        "gtm.js" !== e && "gtm.sync" !== e || Oo(ah.H);
        return Zp(u, t) || v
    };

    function Xp(a) {
        return function(b) {
            hi && (Vb(b) || ej(a, "input", b))
        }
    }

    function wp() {
        var a = {};
        a.event = Ie("event", 1);
        a.ecommerce = Ie("ecommerce", 1);
        a.gtm = Ie("gtm");
        a.eventModel = Ie("eventModel");
        return a
    }

    function Yp(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(wc[c][Wb.Ta]);
                if (fe[d] || void 0 !== wc[c][Wb.Ui] || xe[d]) b[c] = !0;
                S(58) || 0 !== wc[c][Wb.Ta].indexOf("__ccd") && 0 !== wc[c][Wb.Ta].indexOf("__ogt") && "__set_product_settings" !== wc[c][Wb.Ta] || (b[c] = !0)
            }
        return b
    }

    function Zp(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && wc[c] && !ge[String(wc[c][Wb.Ta])]) return !0;
        return !1
    }
    var bq = function(a, b, c, d) {
            aq.push("event", [b, a], c, d)
        },
        cq = function(a, b, c, d) {
            aq.push("get", [a, b], c, d)
        },
        dq = function() {
            this.status = 1;
            this.D = {};
            this.h = {};
            this.M = {};
            this.P = null;
            this.B = {};
            this.m = !1
        },
        eq = function(a, b, c, d) {
            var e = z();
            this.type = a;
            this.m = e;
            this.W = b || "";
            this.h = c;
            this.messageContext = d
        },
        fq = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        gq = function(a, b) {
            var c = jl(b);
            return a.m[c.U] = a.m[c.U] || new dq
        },
        hq = function(a, b, c, d) {
            if (d.W) {
                var e = gq(a, d.W),
                    f = e.P;
                if (f) {
                    var g = I(c),
                        l = I(e.D[d.W]),
                        m = I(e.B),
                        n = I(e.h),
                        p = I(a.B),
                        q = {};
                    if (hi) try {
                        q = I(Be)
                    } catch (v) {
                        O(72)
                    }
                    var r = jl(d.W).prefix,
                        u = function(v) {
                            dj(d.messageContext.eventId, r, v);
                            var w = g[P.g.Rb];
                            w && G(w)
                        },
                        t = km(im(hm(gm(em(dm(fm(cm(bm(am(new $l(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("2")
                            }
                        }), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("3")
                            }
                        }));
                    try {
                        dj(d.messageContext.eventId, r, "1"), go(d.type, d.W, t), f(d.W, b, d.m, t)
                    } catch (v) {
                        dj(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    fq.prototype.register = function(a, b, c) {
        var d = gq(this, a);
        3 !== d.status && (d.P = b, d.status = 3, c && (I(d.h, c), d.h = c), this.flush())
    };
    fq.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!jl(c)) return;
            if (c) {
                var e = jl(c);
                e && 1 === gq(this, c).status && (gq(this, c).status = 2, this.push("require", [{}], e.U, {}))
            }
            gq(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new eq(a, c, b, d));
        d.deferrable || this.flush()
    };
    fq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.W || gq(this, f.W).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = gq(this, f.W);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.h[0], function(r, u) {
                            I(Ka(r, u), b.B)
                        });
                        break;
                    case "config":
                        g = gq(this, f.W);
                        e.kb = {};
                        k(f.h[0], function(r) {
                            return function(u, t) {
                                I(Ka(u, t), r.kb)
                            }
                        }(e));
                        var l = !!e.kb[P.g.Qc];
                        delete e.kb[P.g.Qc];
                        var m = jl(f.W),
                            n = m.U === m.id;
                        l || (n ? g.B = {} : g.D[f.W] = {});
                        g.m && l || hq(this, P.g.xa, e.kb, f);
                        g.m = !0;
                        n ? I(e.kb, g.B) : (I(e.kb, g.D[f.W]), O(70));
                        d = !0;
                        break;
                    case "event":
                        g = gq(this, f.W);
                        e.sd = {};
                        k(f.h[0], function(r) {
                            return function(u, t) {
                                I(Ka(u, t), r.sd)
                            }
                        }(e));
                        hq(this, f.h[1], e.sd, f);
                        break;
                    case "get":
                        g = gq(this, f.W);
                        var p = {},
                            q = (p[P.g.Sa] = f.h[0], p[P.g.eb] = f.h[1], p);
                        hq(this, P.g.Ea, q, f)
                }
                this.h.shift();
                iq(this, f)
            }
            e = {
                kb: e.kb,
                sd: e.sd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var iq = function(a, b) {
            if ("require" !== b.type)
                if (b.W)
                    for (var c = gq(a, b.W).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.M)
                                for (var g = f.M[b.type] || [], l = 0; l < g.length; l++) g[l]()
                        }
        },
        jq = function(a, b) {
            var c = aq,
                d = I(b);
            I(gq(c, a).h, d);
            gq(c, a).h = d
        },
        aq = new fq;
    var kq = {},
        lq = {},
        mq = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    yd: d.yd,
                    vd: d.vd
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) d.yd = jl(f), d.yd && (sa(dh(), function(p) {
                    return function(q) {
                        return p.yd.U === q
                    }
                }(d)) ? b.push(f) : c.push(f));
                else {
                    var g = kq[f] || [];
                    d.vd = {};
                    g.forEach(function(p) {
                        return function(q) {
                            return p.vd[q] = !0
                        }
                    }(d));
                    for (var l = ch(), m = 0; m < l.length; m++)
                        if (d.vd[l[m]]) {
                            b = b.concat(dh());
                            break
                        }
                    var n = lq[f] || [];
                    n.length && (b = b.concat(n))
                }
            }
            return {
                Xj: b,
                Zj: c
            }
        },
        nq = function(a) {
            k(kq, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        oq = function(a) {
            k(lq, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var pq = "HA GF G UA AW DC MC".split(" "),
        qq = !1,
        rq = !1;

    function sq(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: ye()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var tq = {
            config: function(a, b) {
                var c = sq(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Ub(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = jl(a[1]);
                    if (e) {
                        Vi(c.eventId, "gtag.config");
                        var f = e.U,
                            g = e.id !== f;
                        if (g ? -1 === dh().indexOf(f) : -1 === ch().indexOf(f)) {
                            if (!S(61) || !d[P.g.Qd]) {
                                var l = d[P.g.oa] || aq.B[P.g.oa];
                                g ? Tn(f, l, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                }) : Sn(f, l, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (je && !g && !d[P.g.Qc]) {
                                var m = rq;
                                rq = !0;
                                if (m) return
                            }
                            qq || O(43);
                            if (!b.noTargetGroup)
                                if (g) {
                                    oq(e.id);
                                    var n = e.id,
                                        p = d[P.g.Od] || "default";
                                    p = String(p).split(",");
                                    for (var q = 0; q < p.length; q++) {
                                        var r = lq[p[q]] || [];
                                        lq[p[q]] = r;
                                        0 > r.indexOf(n) && r.push(n)
                                    }
                                } else {
                                    nq(e.id);
                                    var u = e.id,
                                        t = d[P.g.Od] || "default";
                                    t = t.toString().split(",");
                                    for (var v = 0; v < t.length; v++) {
                                        var w = kq[t[v]] || [];
                                        kq[t[v]] = w;
                                        0 > w.indexOf(u) && w.push(u)
                                    }
                                }
                            delete d[P.g.Od];
                            var y = b.eventMetadata || {};
                            y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata =
                                y;
                            delete d[P.g.Rb];
                            for (var x = g ? [e.id] : dh(), A = 0; A < x.length; A++) {
                                var B = I(b);
                                aq.push("config", [d], x[A], B)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    O(39);
                    var c = sq(a, b),
                        d = a[1];
                    "default" === d ? kg(a[2]) : "update" === d && lg(a[2], c)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Ub(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = I(e), e[P.g.Rb] && (g.eventCallback = e[P.g.Rb]), e[P.g.Kd] && (g.eventTimeout = e[P.g.Kd]));
                    var l = sq(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[P.g.Bb];
                    void 0 === r && (r = Ee(P.g.Bb, 2), void 0 === r && (r = "default"));
                    if (h(r) || ra(r)) {
                        var u = r.toString().replace(/\s+/g, "").split(","),
                            t = mq(u),
                            v = t.Xj,
                            w = t.Zj;
                        if (w.length)
                            for (var y = q && q[P.g.oa] || aq.B[P.g.oa], x = 0; x < w.length; x++) {
                                var A = jl(w[x]);
                                A && Tn(A.U, y, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = ll(v)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        Vi(m,
                            c);
                        for (var D = [], H = 0; H < B.length; H++) {
                            var J = B[H],
                                C = I(b);
                            if (-1 !== pq.indexOf(J.prefix)) {
                                var K = I(d),
                                    M = C.eventMetadata || {};
                                M.hasOwnProperty("is_external_event") || (M.is_external_event = !C.fromContainerExecution);
                                C.eventMetadata = M;
                                delete K[P.g.Rb];
                                bq(c, K, J.id, C)
                            }
                            D.push(J.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[P.g.Bb] = D.join() : delete g.eventModel[P.g.Bb];
                        qq || O(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                O(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && pa(a[3])) {
                    var c = jl(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        qq || O(43);
                        var f = aq.B[P.g.oa];
                        if (!sa(dh(), function(l) {
                                return c.U === l
                            })) Tn(c.U, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== pq.indexOf(c.prefix)) {
                            sq(a, b);
                            var g = {};
                            gg(I((g[P.g.Sa] = d, g[P.g.eb] = e, g)));
                            cq(d, function(l) {
                                G(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    qq = !0;
                    var c = sq(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Ub(a[1]) ? c = I(a[1]) : 3 == a.length && h(a[1]) && (c = {}, Ub(a[2]) || ra(a[2]) ? c[a[1]] = I(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = sq(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    I(c);
                    var g = I(c);
                    aq.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    S(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        uq = {
            policy: !0
        };
    var vq = function(a) {
            var b = E[ce.ia].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        wq = function(a) {
            var b = E[ce.ia],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var xq = !1,
        yq = [];

    function zq() {
        if (!xq) {
            xq = !0;
            for (var a = 0; a < yq.length; a++) G(yq[a])
        }
    }
    var Aq = function(a) {
        xq ? G(a) : yq.push(a)
    };
    var Jq = function() {
            try {
                var a, b;
                var m, n = ah.H,
                    p = nd('script[src*="gtm/js?id=' + n + '"],script[src*="optimize.js?id=' + n + '"]');
                m = p && 0 < p.length ? p[0] : null;
                b = m ? m.hasAttribute("gtm") ? "gtmo" : m.hasAttribute("async") ? "opta" : "opts" : "optu";
                b || (b = "gaoo");
                var q = Cq(Dq, m && m.src),
                    r = q.od,
                    u = q.pd,
                    t = q.se,
                    v = q.te,
                    w = q.ke,
                    y = q.xe,
                    x = q.ed,
                    A = q.vf,
                    B = q.dd;
                "h0" != x || Eq || (x = "h3");
                Fq = {
                    ed: x,
                    dd: B,
                    yj: a,
                    Vj: b,
                    vf: A,
                    te: v,
                    ke: w,
                    xe: y,
                    se: t,
                    od: r,
                    pd: u,
                    vh: Gq,
                    Qh: Hq
                };
                Iq(Fq)
            } catch (D) {}
        },
        Kq = function() {
            var a = E.gaData,
                b = 0,
                c = void 0;
            if (a)
                for (var d in a)
                    if (a.hasOwnProperty(d) && 0 === d.indexOf("UA-") && a[d].hitcount) {
                        b += a[d].hitcount;
                        var e = Number(a[d].first_hit);
                        e && (!c || e < c) && (c = e)
                    }
            return {
                wh: b,
                th: c
            }
        },
        Cq = function(a, b) {
            var c, d, e, f, g, l, m, n, p;
            var q = E.performance;
            if (q) {
                if (b) {
                    var r = q.getEntriesByName(b)[0];
                    if (r) {
                        var u = q.getEntriesByType("resource"),
                            t = 0;
                        u && 0 < u.length && (t = u[0].startTime);
                        f = Math.round(r.startTime - t);
                        g = Math.round(r.duration);
                        e = u.indexOf(r); - 1 === e && (e =
                            void 0);
                        l = Math.round(a - (r.startTime + r.duration))
                    }
                }
                var v = q.timing;
                if (v.domContentLoadedEventStart) {
                    var w = v.domContentLoadedEventStart - v.navigationStart;
                    w && (d = Math.round(a - w))
                }
                var y = q.getEntriesByType("paint").filter(function(D) {
                    return "first-contentful-paint" === D.name
                })[0];
                y && (c = Math.round(a - y.startTime))
            }
            var x = E[ce.ia].hide;
            if (x) {
                if (void 0 === x[ah.H]) m = "h2";
                else {
                    var A = !1;
                    if (null === x.end)
                        for (var B in x)
                            if (x.hasOwnProperty(B) && B.startsWith(ah.H) && !0 === x[B]) {
                                A = !0;
                                break
                            }
                    m = A ? "h0" : "h1"
                }
                x.start && !isNaN(x.start) &&
                    (q ? q.timing && (p = Math.round(a + q.timing.navigationStart - x.start)) : p = a - x.start);
                isNaN(x.timeout) || (n = x.timeout)
            }
            return {
                od: d,
                pd: c,
                se: e,
                te: f,
                ke: g,
                xe: l,
                ed: m,
                vf: n,
                dd: p
            }
        },
        Iq = function(a, b) {
            b = void 0 === b ? "ol" : b;
            var c = function(e, f) {
                    null != f && (d += e + encodeURIComponent(f))
                },
                d = ii;
            c("&t=", b);
            c("&s=", a.ed);
            c("&h=", a.dd);
            c("&g=", a.yj);
            c("&p=", a.Vj);
            c("&o=", a.vf);
            c("&l=", function() {
                var e = te;
                return e ? Bq - Aa(e) : void 0
            }());
            c("&q=", a.te);
            c("&f=", a.ke);
            c("&e=", a.xe);
            c("&i=", a.se);
            c("&d=", a.od);
            c("&c=", a.pd);
            c("&tr=", a.Gk);
            c("&jl=", a.Tj);
            c("&jf=", a.Rj);
            c("&ji=", a.Sj);
            c("&jq=", a.Uj);
            c("&jd=", a.Pj);
            c("&jx=", a.Qj);
            c("&hc=", a.vh);
            c("&fh=", a.Qh);
            d += "&sr=0.050000";
            c("&ps=", Lq);
            c("&cb=", ta());
            Gb(d);
        },
        Mq = !1,
        Bq, Dq, Eq, Lq, Fq, Gq, Hq;
    Lq = Math.random(), Mq = "0.050000" > Lq;
    var Nq = function() {
            if (!Mq || Bq) return;
            Bq = z();
            Dq = Pb() || Bq;
            Eq = !!F.querySelector("body");
            var a = Kq(),
                b = a.th;
            Gq = a.wh;
            Hq = b ? Bq - b : void 0;
            Aq(Jq);
        },
        Pq = function(a) {
            var b = Oq;
            if (!Mq) return;
            try {
                var c = z(),
                    d = Pb() || c,
                    e = Kq(),
                    f = e.wh,
                    g = e.th,
                    l = g ? c - g : void 0;
                Aq(function() {
                    var m = Cq(d, b),
                        n = m.od,
                        p = m.pd,
                        q = m.se,
                        r = m.te,
                        u = m.ke,
                        t = m.xe,
                        v = m.ed,
                        w = m.dd,
                        y = I(Fq || {});
                    I(a, y);
                    I({
                        ed: v,
                        dd: w,
                        od: n,
                        pd: p,
                        Sj: q,
                        Uj: r,
                        Pj: u,
                        Qj: t,
                        vh: f,
                        Qh: l
                    }, y);
                    Iq(y, "od")
                })
            } catch (m) {}
        };
    var Rq = function(a) {
        if (Qq(a)) return a;
        this.h = a
    };
    Rq.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Qq = function(a) {
        return !a || "object" !== Sb(a) || Ub(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Rq.prototype.getUntrustedMessageValue = Rq.prototype.getUntrustedMessageValue;
    var Sq = 0,
        Tq = {},
        Uq = [],
        Vq = [],
        Wq = !1,
        Xq = !1;

    function Yq(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Zq = function(a) {
            return E[ce.ia].push(a)
        },
        $q = function(a, b) {
            var c = de[ce.ia],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = E.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (E.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function ar(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && He(e), He(e, f))
        });
        te || (te = a["gtm.start"]);
        Nq();
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = ye(), a["gtm.uniqueEventId"] = d, He("gtm.uniqueEventId", d));
        return $p(a)
    }

    function br(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (za(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function cr() {
        var a;
        if (Vq.length) a = Vq.shift();
        else if (Uq.length) a = Uq.shift();
        else return;
        var b;
        var c = a;
        if (Wq || !br(c.message)) b = c;
        else {
            Wq = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = ye());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                l = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Uq.unshift(l, c);
            if (hi && ah.H) {
                var m;
                if (ah.df) {
                    var n = ah.H,
                        p = fh().destination[n];
                    m = p && p.context
                } else {
                    var q = ah.H,
                        r = fh().container[q];
                    m = r && r.context
                }
                var u = m,
                    t, v = df(E.location.href);
                t = v.hostname + v.pathname;
                var w = u && u.fromContainerExecution,
                    y = u && u.source,
                    x = ah.H,
                    A = ah.Mb,
                    B = ah.df;
                ti || (ti = t);
                si.push(x + ";" + A + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (B ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function dr() {
        for (var a = !1, b; !Xq && (b = cr());) {
            Xq = !0;
            delete Be.eventModel;
            De();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Xq = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var l = f[g],
                            m = Ee(l, 1);
                        if (ra(m) || Ub(m)) m = I(m);
                        Ce[l] = m
                    }
                try {
                    if (pa(d)) try {
                        d.call(Fe)
                    } catch (D) {} else if (ra(d)) {
                        var n =
                            d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                u = Ee(p.join("."), 2);
                            if (null != u) try {
                                u[q].apply(u, r)
                            } catch (D) {}
                        }
                    } else {
                        var t = void 0,
                            v = !1;
                        if (za(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = tq[d[0]];
                                    if (w && (!e.fromContainerExecution || !uq[d[0]])) {
                                        t = w(d, e);
                                        break a
                                    }
                                }
                                t = void 0
                            }(v = t && "set" === d[0] && !!t.event) && O(101)
                        }
                        else t = d;
                        if (t) {
                            var y = ar(t, e);
                            a = y || a;
                            v && y && O(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && De(!0);
                    var x = d["gtm.uniqueEventId"];
                    if ("number" === typeof x) {
                        for (var A = Tq[String(x)] || [], B = 0; B < A.length; B++) Vq.push(er(A[B]));
                        A.length && Vq.sort(Yq);
                        delete Tq[String(x)];
                        x > Sq && (Sq = x)
                    }
                    Xq = !1
                }
            }
        }
        return !a
    }

    function fr() {
        var b = dr();
        try {
            vq(ah.H)
        } catch (c) {}
        return b
    }

    function fp(a) {
        if (Sq < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Tq[b] = Tq[b] || [];
            Tq[b].push(a)
        } else Vq.push(er(a)), Vq.sort(Yq), G(function() {
            Xq || dr()
        })
    }

    function er(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var hr = function() {
            function a(f) {
                var g = {};
                if (Qq(f)) {
                    var l = f;
                    f = Qq(l) ? l.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = yb(ce.ia, []),
                c = de[ce.ia] = de[ce.ia] || {};
            !0 === c.pruned && O(83);
            Tq = dp().get();
            gp();
            no(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            Aq(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < de.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new Rq(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                Uq.push.apply(Uq, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (O(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return dr() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Uq.push.apply(Uq, e);
            if (gr()) {
                G(fr)
            }
        },
        gr = function() {
            var a = !0;
            return a
        };

    function ir(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = z();
        return b < c + 3E5 && b > c - 9E5
    }

    function jr(a) {
        return a && 0 === a.indexOf("pending:") ? ir(a.substr(8)) : !1
    };
    var Bc = {};
    Bc.Vd = new String("undefined");
    var Kr = E.clearTimeout,
        Lr = E.setTimeout,
        W = function(a, b, c, d) {
            if ($g()) {
                b && G(b)
            } else return Db(a, b, c, d)
        },
        Mr = function() {
            return new Date
        },
        Nr = function() {
            return E.location.href
        },
        Or = function(a) {
            return bf(df(a), "fragment")
        },
        Pr = function(a) {
            return cf(df(a))
        },
        Qr = function(a, b) {
            return Ee(a, b || 2)
        },
        Rr = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Zq(a)) : d = Zq(a);
            return d
        },
        Sr = function(a, b) {
            E[a] = b
        },
        X = function(a, b, c) {
            b &&
                (void 0 === E[a] || c && !E[a]) && (E[a] = b);
            return E[a]
        },
        Tr = function(a, b, c) {
            return Ag(a, b, void 0 === c ? !0 : !!c)
        },
        Ur = function(a, b, c) {
            return 0 === Qg(a, b, c)
        },
        Vr = function(a, b) {
            if ($g()) {
                b && G(b)
            } else Fb(a, b)
        },
        Wr = function(a) {
            return !!qr(a, "init", !1)
        },
        Xr = function(a) {
            or(a, "init", !0)
        },
        Yr = function(a, b, c) {
            hi && (Vb(a) || ej(c, b, a))
        };

    var $r = function(a) {
            if (!a || a.nodeType != Node.ELEMENT_NODE) return !1;
            var b = a.tagName.toUpperCase();
            return "SCRIPT" == b || "STYLE" == b || "LINK" == b
        },
        as = function(a, b, c) {
            try {
                null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
            } catch (d) {
                return d
            }
            return null
        },
        bs = function(a, b, c) {
            var d = a.getAttribute(b);
            return as(a, b, c) ? 8 : function() {
                as(a, b, d)
            }
        },
        es = function(a, b, c) {
            var d, e, f = a.ownerDocument || a.document || document;
            c = (c || "").toLowerCase();
            "after" == c ? (d = a.parentNode, e = a.nextSibling) : "insert" == c ? (d = a, e = a.firstChild) : "append" ==
                c ? (d = a, e = null) : (d = a.parentNode, e = a);
            if (!d || d == f) return {
                result: 1,
                Jj: []
            };
            var g = cs(b, d);
            ds(g, "SCRIPT");
            ds(g, "NOSCRIPT");
            var l = [];
            if (g.firstChild)
                for (var m = g.firstChild; m;) {
                    var n = m.nextSibling;
                    l.push(m);
                    d.insertBefore(m, e);
                    m = n
                }
            var p = a.nextSibling;
            "replace" == c && d.removeChild(a);
            return {
                result: function() {
                    for (; 0 < l.length;) d.removeChild(l.pop());
                    "replace" == c && d.insertBefore(a, p)
                },
                Jj: l.slice()
            }
        },
        fs = {
            SELECT: [1, '<select multiple="multiple">', "</select>"],
            FIELDSET: [1, "<fieldset>", "</fieldset>"],
            MAP: [1, "<map>",
                "</map>"
            ],
            OBJECT: [1, "<object>", "</object>"],
            TABLE: [1, "<table>", "</table>"],
            TBODY: [2, "<table><tbody>", "</tbody></table>"],
            COLGROUP: [2, "<table><colgroup>", "</colgroup></table>"],
            TR: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
        },
        cs = function(a, b) {
            var c = 0,
                d = "",
                e = "",
                f = fs[b.tagName];
            null != f && (c = f[0], d = f[1], e = f[2]);
            var g = b.ownerDocument.createElement("div");
            mb(g, ub(d + (a || "") + e));
            for (var l = g; 0 < c;) {
                var m = l.firstChild;
                if (null == m.firstChild) return b.ownerDocument.createElement("div");
                l = m;
                c--
            }
            return l
        },
        ds =
        function(a, b) {
            for (var c = a.getElementsByTagName(b), d = [], e = c.length - 1; 0 <= e; e--) {
                var f = c[e];
                f.parentNode.removeChild(f);
                d.push(f)
            }
        },
        gs = function(a) {
            var b = null,
                c = null;
            try {
                b = new Function("element", a)
            } catch (d) {
                c = d
            }
            return {
                tf: b,
                error: c
            }
        },
        ks = function(a, b, c, d, e) {
            var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
            e && (f = e + "{" + f + "}");
            var g = document;
            if (g.createStyleSheet) {
                var l = hs(g),
                    m = l.rules.length;
                l.insertRule(f, m);
                return function() {
                    l.deleteRule ? l.deleteRule(m) : l.removeRule(m);
                    l.insertRule("x {}", m)
                }
            }
            var n = is(f,
                g);
            js(n, g);
            var p = n.parentNode;
            return function() {
                p.removeChild(n)
            }
        },
        ls = null,
        hs = function(a) {
            if (ls) return ls;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var c = a.styleSheets[b];
                if (!c.href) {
                    var d = c.ownerNode;
                    if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return ls = c
                }
            }
            0 == a.styleSheets.length && a.createStyleSheet();
            return ls = a.styleSheets[0]
        },
        is = function(a, b) {
            var c = (b || document).createElement("style");
            void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
            return c
        },
        js = function(a, b) {
            var c = b || document,
                d = c.getElementsByTagName("head")[0];
            d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
            d.appendChild(a)
        },
        ms = function(a, b, c, d) {
            if (a.style.setProperty) try {
                var e = a.style.getPropertyValue(b),
                    f = a.style.getPropertyPriority(b);
                a.style.setProperty(b, c, d ? "important" : "");
                return function() {
                    a.style.setProperty(b, "", f);
                    a.style.setProperty(b, e, f)
                }
            } catch (l) {}
            var g = a.style.cssText;
            a.style.cssText += ";" + (b + ": " + c + (d ? " !important" : "")) + ";";
            return function() {
                a.style.cssText = g
            }
        },
        os = function(a, b, c, d) {
            if ($r(a)) return 7;
            if (b) return ns(a,
                b, d);
            if (c && c.parentNode) {
                var e = a.parentNode,
                    f = a.nextSibling;
                try {
                    c.parentNode.insertBefore(a, c.nextSibling)
                } catch (g) {
                    return 9
                }
                return function() {
                    e.insertBefore(a, f)
                }
            }
            return 4
        },
        ns = function(a, b, c) {
            var d = a.parentNode,
                e = a.nextSibling;
            c = (c || "").toLowerCase();
            try {
                if ("bottom" == c) b.appendChild(a);
                else if ("top" == c) b.insertBefore(a, b.childNodes[0] || null);
                else if ("before" == c)
                    if (b.parentNode) b.parentNode.insertBefore(a, b);
                    else return 5;
                else if ("after" == c)
                    if (b.parentNode) b.parentNode.insertBefore(a, b.nextSibling);
                    else return 5
            } catch (f) {
                return 9
            }
            return function() {
                try {
                    d.insertBefore(a, e)
                } catch (f) {}
            }
        },
        ps = function(a, b, c) {
            if (0 <= b && b < a.childNodes.length) {
                var d = a.childNodes[b];
                if (null != d && d.nodeType == Node.TEXT_NODE) {
                    var e = d.nodeValue;
                    d.nodeValue = c;
                    return function() {
                        d.nodeValue = e
                    }
                }
                return 2
            }
            return 3
        },
        qs = function(a, b, c, d) {
            c ? d = c.nextSibling : d && (c = d.previousSibling);
            if (null != c && c.nodeType == Node.TEXT_NODE) {
                var e = c.nodeValue;
                c.nodeValue += a;
                return function() {
                    c.nodeValue = e
                }
            }
            if (null != d && d.nodeType == Node.TEXT_NODE) {
                var f = d.nodeValue;
                d.nodeValue = a + d.nodeValue;
                return function() {
                    d.nodeValue = f
                }
            }
            var g = (b.ownerDocument || b.document || document).createTextNode(a);
            d ? b.insertBefore(g, d) : b.appendChild(g);
            return function() {
                b.removeChild(g)
            }
        },
        rs = function(a) {
            var b = document.createElement("a");
            a && (b.href = a);
            return b
        };
    var vs = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function ws(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var xs = new ua;

    function ys(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = xs.get(e);
            f || (f = new RegExp(b, d), xs.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function zs(a, b) {
        function c(g) {
            var l = df(g),
                m = bf(l, "protocol"),
                n = bf(l, "host", !0),
                p = bf(l, "port"),
                q = bf(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function As(a) {
        return Bs(a) ? 1 : 0
    }

    function Bs(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = I(a, {});
                I({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (As(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < vs.length; g++) {
                            var l = vs[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return ws(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return ys(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return zs(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);

    function Vs() {
        return E.gaGlobal = E.gaGlobal || {}
    }
    var Ws = function() {
            var a = Vs();
            a.hid = a.hid || ta();
            return a.hid
        },
        Xs = function(a, b) {
            var c = Vs();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var st = function() {
            var a = !0;
            Zh(7) && Zh(9) && Zh(10) || (a = !1);
            return a
        },
        tt = function() {
            var a = !0;
            Zh(3) && Zh(4) || (a = !1);
            return a
        };
    var Xt = window,
        Yt = document,
        Zt = function(a) {
            var b = Xt._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Xt["ga-disable-" + a]) return !0;
            try {
                var c = Xt.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = ug("AMP_TOKEN", String(Yt.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Yt.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function gu(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[P.g.Oa] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var pu = function(a, b) {};

    function ou(a, b) {
        var c = function() {};
        return c
    }

    function qu(a, b, c) {};
    var kw = ou;
    var mw = encodeURI,
        Y = encodeURIComponent,
        nw = function(a, b, c) {
            Gb(a, b, c)
        },
        ow = function(a, b) {
            if (!a) return !1;
            var c = bf(df(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        pw = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var sw = function(a) {
            if (!qw[a]) {
                qw[a] = !0;
                var b = E[a] || {};
                E[a] = b;
                var c = function(e) {
                        return rw[e]
                    },
                    d = b.get;
                b.get = d ? function(e) {
                    return void 0 !== rw[e] ? rw[e] : d(e)
                } : c
            }
        },
        vw = function(a, b) {
            rw[a] = b;
            for (var c = tw(a), d = 0; d < c.length; d++) uw(c[d], a, b);
            c = tw("");
            for (var e = 0; e < c.length; e++) uw(c[e], a, b)
        },
        uw = function(a, b, c) {
            try {
                a(c, b, ah.H)
            } catch (d) {}
        },
        tw = function(a) {
            ww[a] = ww[a] || [];
            return ww[a]
        },
        rw = {},
        ww = {},
        qw = {};
    var xw = function() {
            E.gaData = E.gaData || {};
            return E.gaData
        },
        yw = function(a, b) {
            b = void 0 === b ? !1 : b;
            E.gaData = E.gaData || {};
            var c = E.gaData,
                d = c.tracker_created;
            c.tracker_created = function(e) {
                b && a(e);
                d && pa(d) && d(e);
                b || a(e)
            }
        },
        zw = function(a) {
            var b = E[No()];
            try {
                if (pa(b) && pa(b.getAll)) return b.getAll().filter(function(c) {
                    return c.get("trackingId") === a
                })
            } catch (c) {}
            return []
        },
        Ow = function(a, b) {
            var c = Fw[a];
            if (c) G(function() {
                return b(c)
            });
            else {
                var d = zw(a)[0];
                d ? (Fw[a] = d, Kw || (Kw = d), G(function() {
                    return b(d)
                })) : (Lw[a] || (Lw[a] = []), Lw[a].push(b), Mw || (Mw = !0, yw(function(e) {
                    var f = e.get("trackingId");
                    if (Lw[f]) {
                        if (Nw[f]) {
                            Nw[f] = !1;
                            var g = E[No()];
                            pa(g) && g("ga.require", "_" + ah.H)
                        }
                        Kw || (Kw = e);
                        Fw[f] = e;
                        for (var l = Lw[f], m; void 0 !== (m = l.shift());) m(e);
                        Lw[f] = void 0
                    }
                })))
            }
        },
        Pw = function(a, b, c, d) {
            var e = E[No()];
            if ("data" === b.hitType && c) {
                var f = E.gaData,
                    g = Number(f && f[d] && f[d].first_hit),
                    l = z();
                !isNaN(g) && l > g && (b.queueTime = Math.min(2E3, l + 100 - g))
            }
            try {
                var m = "t0" != a.get("name") ? a.get("name") + ".send" : "send";
                e(m, b)
            } catch (n) {}
        },
        Fw = {},
        Lw = {},
        Nw = {},
        Kw, Mw = !1,
        Qw, Rw = function(a, b, c) {
            Ow(a, function(d) {
                G(function() {
                    Pw(d, b, c, a)
                })
            })
        },
        Sw = function() {
            var a = !1;
            yw(function() {
                if (!a) {
                    var b = E[No()];
                    pa(b) && (b("ga.require", "__" + ah.H), a = !0)
                }
            }, !0)
        },
        Tw = function(a, b, c) {
            var d = xw(),
                e = d[a] = d[a] || {};
            (e.pending_experiments = e.pending_experiments || {})[b] = c;
            e.experiments = e.experiments || {};
            e.experiments[b] = c
        },
        Uw = function(a) {
            var b = xw()[a];
            return b ? b.hitcount || 0 : 0
        },
        Xw = function(a, b, c, d, e, f) {
            vw(b, c);
            var g = d;
            if (d) {
                var l = af(E.location, "host");
                af(df(d), "host") === l && (d = "")
            }
            yw(function(q) {
                q.set("referrer",
                    d ? d : void 0)
            }, !0);
            if (Vw(a)) de.ga4_referrer_override = g, Ww(a, b, c, e, f);
            else {
                Tw(a, b, c);
                for (var m = zw(a), n = 0; n < m.length; ++n) m[n].set("referrer", d ? d : void 0);
                if (0 < Uw(a)) {
                    var p = m[0];
                    p && Pw(p, {
                        hitType: "data"
                    }, !0, a)
                }
            }
        },
        Vw = function(a) {
            return !!a && "G-" === a.substring(0, 2)
        },
        Ww = function(a, b, c, d, e) {
            if (Vw(a)) {
                var f = bp(a, "experiment_impression", {
                    experiment_id: b,
                    variant_id: c
                });
                ep(f, d, {
                    originatingEntity: e,
                    deferrable: !0
                })
            } else Tw(a, b, c), 0 < Uw(a) && Rw(a, {
                hitType: "data"
            }, !0)
        };

    var ax = function(a, b, c) {
            function d() {
                f || (f = !0, !0 !== Yw && (Yw = !1), Zw(c), vq(e))
            }
            Oq = a;
            var e = "OPT-5GJK39N_" + b,
                f = !1;
            wq(e);
            E.google_optimize = E.google_optimize || {};
            var g = E.google_optimize;
            g["OPT-5GJK39N"] = g["OPT-5GJK39N"] || {};
            g["OPT-5GJK39N"].optimize_dyn = function(m) {
                m.split(",").forEach(function(n) {
                    $w[n] = !0
                });
                Yw = !0;
                d()
            };
            Db(a, void 0, d);
            var l = E[ce.ia];
            E.setTimeout(function() {
                d()
            }, Number(l && l.hide && l.hide.timeout) || 1E4)
        },
        Zw = function(a) {
            if (void 0 !== bx) {
                var b = bx - cx,
                    c, d;
                Yw ? c = z() - bx : d = z() - bx;
                Pq({
                    Gk: b,
                    Tj: c,
                    Rj: d
                })
            }
            $w.optimize_ready = !0;
            Zq({
                event: "opt.dyn"
            });
            Zq({
                event: "opt.js"
            });
            if (a && 0 < a.length) {
                var e = {};
                E[ce.ia].forEach(function(f) {
                    var g = f.event;
                    g && (e[g] = !0)
                });
                a.forEach(function(f) {
                    e[f] && Zq({
                        event: f
                    })
                })
            }
            G(function() {
                Oo("_" + ah.H)
            })
        },
        dx = function(a, b, c, d, e, f, g, l, m) {
            function n(w, y) {
                y && (u += "&" + w + "=" + encodeURIComponent(y))
            }
            cx = z();
            if (a || b || c) {
                var p = void 0;
                if (b) {
                    var q = Pk().aw;
                    q && (p = q[0])
                }
                if (f && (a || c || p)) {
                    var r = 1,
                        u, t = "OPT-5GJK39N_" + r++;
                    wq(t);
                    var v = function(w) {
                        Qw = w;
                        bx = z();
                        a || b ? (u = "https://www.google-analytics.com/gtm/optimize-dyn.js?id=OPT-5GJK39N", a && n("cid", w), n("gclid",
                            p), g && (n("gtm_auth", ""), n("gtm_preview", "")), (g || a) && n("cb", String(Math.random())), ax(u, r++, e)) : Zw(e);
                        vq(t)
                    };
                    Vw(d) ? ep($o("get", d, "client_id", v), l, {
                        originatingEntity: m,
                        deferrable: !0
                    }) : (Nw[d] = !0, Ow(d, function(w) {
                        return v(w.get("clientId"))
                    }))
                } else Zw(e)
            }
        },
        $w = {},
        cx, bx, Yw, Oq;
    var ex = function(a, b) {
        this.fe = a;
        this.ld = b
    };
    ex.prototype.toString = function() {
        var a = "" + this.fe;
        1 < this.ld && (a = a + "-" + this.ld);
        return a
    };
    var fx = function(a, b) {
        this.m = a;
        this.h = b
    };
    fx.prototype.toString = function() {
        return this.h + "." + this.m
    };
    var gx = function() {
            var a = Ee("optimize.cookie_path", 2);
            return h(a) ? a : "/"
        },
        ix = function(a, b) {
            var c = new hx(a, b);
            c.ck();
            return c
        },
        hx = function(a, b) {
            this.D = Math.floor(new Date / 864E5);
            this.B = a || "auto";
            this.h = b || gx();
            this.m = new ex(Vg(this.B), Wg(this.h));
            this.J = [];
            this.map = {}
        };
    ca = hx.prototype;
    ca.Ej = function(a) {
        if (!a) return "";
        var b = this.uf(a);
        return b ? b.m : ""
    };
    ca.wk = function(a, b, c, d, e) {
        var f, g;
        f = void 0 === f ? 10 : f;
        g = void 0 === g ? 3E3 : g;
        if (!a) return !1;
        void 0 == b && (b = "");
        this.ve(a, new fx(b, c));
        this.ij(e);
        return this.Oi(d,
            f, g)
    };
    ca.uf = function(a) {
        return this.map[a]
    };
    ca.Cj = function() {
        for (var a = 0, b = 0; b < this.J.length; b++) "x" !== this.uf(this.J[b]).m[0] && a++;
        return a
    };
    ca.ve = function(a, b) {
        a && ("" === b.m ? this.Ih(a) : (this.map[a] || this.J.push(a), this.map[a] = b))
    };
    ca.Ak = function(a) {
        for (var b = 0; b < a.length; b++) this.ve(a[b][0], a[b][1])
    };
    ca.Ih = function(a) {
        var b = this.J.indexOf(a);
        0 <= b && this.J.splice(b, 1);
        delete this.map[a]
    };
    ca.lk = function() {
        for (var a = [], b = 0; b < this.J.length; b++) {
            var c = this.J[b];
            this.map[c].h < this.D && a.push(c)
        }
        for (var d =
                0; d < a.length; d++) this.Ih(a[d])
    };
    ca.Bj = function() {
        for (var a = [], b = 0; b < this.J.length; b++) {
            var c = this.J[b];
            a.push([c, this.map[c]])
        }
        return a
    };
    ca.uj = function() {
        for (var a = 0, b = 0; b < this.J.length; b++) a = Math.max(a, this.map[this.J[b]].h);
        return 864E5 * a
    };
    ca.toString = function() {
        if (0 == this.J.length) return "";
        for (var a = [], b = 0; b < this.J.length; b++) {
            var c = this.J[b];
            a.push(c + "." + this.map[c].toString())
        }
        return "GAX1." + this.m.toString() + "." + a.join("!")
    };
    ca.Oi = function(a, b, c) {
        var d = new Date;
        this.lk();
        var e = this.Cj();
        if (e >
            b || e > (a || 10) && zg().replace(RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"), this.toString()).length > c) return !1;
        d.setTime(this.uj());
        if ("auto" != this.B) return this.m = new ex(Vg(this.B), Wg(this.h)), 0 === Qg("_gaexp", this.toString(), {
            path: this.h,
            domain: this.B,
            expires: d
        });
        for (var f = Gg(), g = 0; g < f.length; g++)
            if (this.m = new ex(Vg(f[g]), Wg(this.h)), 0 === Qg("_gaexp", this.toString(), {
                    path: this.h,
                    domain: f[g],
                    expires: d
                })) return !0;
        return !1
    };
    ca.ck = function() {
        var a = Dg("_gaexp", this.m.fe, this.m.ld);
        if (a) {
            var b = this.dk(a);
            b &&
                this.Ak(b.Bj())
        }
    };
    ca.dk = function(a) {
        for (var b = new hx(this.B, this.h), c = a.split("!"), d = 0; d < c.length; d++) {
            var e = c[d].split(".");
            if (3 == e.length) {
                if (isNaN(Number(e[1]))) return;
                b.ve(e[0], new fx(e[2], Number(e[1])))
            }
        }
        return b
    };
    ca.ij = function(a) {
        a = a || {};
        var b = 0;
        a.hasOwnProperty("") && !isNaN(Number(a[""])) && (b = this.D - Aa(a[""]));
        for (var c = 0; c < this.J.length; c++) {
            var d = this.J[c];
            if (a.hasOwnProperty(d) && !isNaN(Number(a[d]))) {
                var e = this.uf(d);
                e.h = Aa(a[d]) + b;
                this.ve(d, e)
            }
        }
    };
    var nx = function() {
            jx = z();
            var a = kx;
            kx = [];
            for (var b = 0; b < a.length; b++) a[b]();
            lx && (lx.takeRecords(), kx.length || (lx && (lx.disconnect(), lx = null), mx && (E.clearTimeout(mx), mx = null)))
        },
        px = function() {
            var a = z() - jx;
            a >= ox ? (mx && (E.clearTimeout(mx), mx = null), nx()) : mx || (mx = E.setTimeout(function() {
                nx();
                mx = null
            }, ox - a))
        },
        qx = function(a) {
            if (!E.MutationObserver) return !1;
            try {
                return lx || (lx = new MutationObserver(px), lx.observe(F.documentElement, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    characterData: !0
                }), jx = z()), kx.push(a), !0
            } catch (b) {
                return !1
            }
        },
        lx = null,
        kx = [],
        ox = 0,
        jx = 0,
        mx = null;
    var rx = function(a, b) {
            b && qx(a) || E.setTimeout(a, 80)
        },
        sx = function(a) {
            try {
                return nd(a)
            } catch (b) {
                return null
            }
        },
        tx = function(a) {
            if (io) return !0;
            for (; a;) {
                if (a.nextSibling) return !0;
                a = a.parentNode
            }
            return !1
        },
        ux = function(a, b) {
            for (var c = sx(a.ma) || [], d = [], e = 0; e < c.length; e++) {
                var f = c[e];
                if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                    if (a.Ha && !tx(f)) break;
                    d.push(f)
                }
            }
            return d
        },
        vx = function(a, b) {
            return function() {
                a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
            }
        },
        wx = function(a, b) {
            a.gtmProgressiveApplied ||
                (a.gtmProgressiveApplied = {});
            a.gtmProgressiveApplied[b] = !0
        },
        xx = function(a, b, c) {
            var d;
            var e = [];
            if (b.Qa)
                if (b.Qa.lf) d = [{
                    element: F.head
                }];
                else {
                    var f = ux(b.Qa, b.id),
                        g = null;
                    b.we && (g = ux(b.we, b.id + "-t"));
                    for (var l = 0; l < f.length; l++) {
                        var m = f[l],
                            n = void 0;
                        if (null != g && (n = g.length > l ? g[l] : null, !n && !io && (null === b.we.ka || b.lh + e.length < b.we.ka))) break;
                        e.push({
                            element: m,
                            targetElement: n
                        })
                    }
                    d = e
                }
            else d = e;
            var p = d;
            if (!io && b.ej && (!a || null == b.Qa.ka || b.Qa.ka != b.ce + p.length)) return !1;
            for (var q = 0; q < p.length; q++) {
                var r = p[q].element,
                    u = p[q].targetElement,
                    t = void 0;
                b.ce++;
                wx(r, b.id);
                u && (b.lh++, t = b.id + "-t", wx(u, t));
                var v = b.jj(r, u);
                pa(v) && b.ic.push(v);
                b.ic.push(vx(r, b.id));
                u && t && b.ic.push(vx(u, t))
            }
            if (b.Qa.ka && b.Qa.ka == b.ce || io && (!c || b.ce)) b.finished = !0;
            return !0
        },
        yx = function(a) {
            for (var b = {}, c = 0; c < a.Pa.length; c++) {
                var d = a.Pa[c];
                if (!d.Qa.lf) {
                    var e = b[d.Qa.ma];
                    e || (e = b[d.Qa.ma] = sx(d.Qa.ma) || []);
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        g.gtmProgressiveApplied && g.gtmProgressiveApplied[d.id] || (wx(g, d.id), d.ic.push(vx(g, d.id)))
                    }
                }
            }
        },
        zx = function(a) {
            if (!a.Mf) {
                for (var b =
                        a.cd; b < a.Pa.length; b++) {
                    var c = a.Pa[b],
                        d = b == a.cd;
                    if (!c.finished && !xx(d, c, a.Vh && a.Rh)) break;
                    c.finished && d && a.cd++
                }
                a.Pa.length > a.cd ? (!a.pending && a.Vh && (a.pending = !0, rx(function() {
                    a.pending = !1;
                    zx(a)
                }, a.Rh)), io || a.Hf || (a.Hf = function() {
                    G(function() {
                        zx(a)
                    })
                }, Hb(F, "DOMContentLoaded", a.Hf))) : yx(a)
            }
        },
        Ax = {},
        Bx = {},
        Cx = void 0,
        Dx = function(a, b, c, d) {
            var e = Cx;
            if (!md || !e) return !1;
            var f = {
                id: e.id + ":" + e.Pa.length,
                jj: b,
                ic: [],
                ej: c,
                Qa: a,
                ce: 0,
                we: d || null,
                lh: 0,
                finished: !1
            };
            e.Pa.push(f);
            null === a ? (f.finished = !0, b(null)) : zx(e);
            return !0
        },
        Ex = function(a) {
            var b = oa;
            try {
                b = ks(a, "visibility", "hidden", !0)
            } catch (c) {}
            return function() {
                pa(b) && b.apply();
                b = null
            }
        },
        Fx = function(a, b, c, d) {
            var e = b;
            if (!io && !a.lf) {
                var f = Ex(a.ma);
                ko.push(f);
                e = function(g, l) {
                    var m = b(g, l);
                    f();
                    return m
                }
            }
            return Dx(a, e, c, d)
        };
    var Z = {
        o: {}
    };
    Z.o.dee = ["google"],
        function() {
            (function(a) {
                Z.__dee = a;
                Z.__dee.s = "dee";
                Z.__dee.isVendorTemplate = !0;
                Z.__dee.priorityOverride = 0;
                Z.__dee.isInfrastructure = !1
            })(function() {
                var a = !1;
                return a ? "gtm.sync" : "gtm.js"
            })
        }();
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();

    Z.o.asprv = ["google"],
        function() {
            function a() {
                Rr({
                    event: "optimize.domChange"
                });
                qx(a)
            }(function(b) {
                Z.__asprv = b;
                Z.__asprv.s = "asprv";
                Z.__asprv.isVendorTemplate = !0;
                Z.__asprv.priorityOverride = 0;
                Z.__asprv.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_globalName,
                    d = !!b.vtp_listenForMutations,
                    e = Qr("eventModel");
                c && sw(c);
                d && a();
                var f, g, l;
                e && (f = e.name || "", g = e.callback, l = e.remove);
                if (g && pa(g))
                    if (f = String(f), !0 !== l) {
                        var m = f,
                            n = g;
                        tw(m).push(n);
                        if ("" !== m) void 0 !== rw[m] && uw(n, m, rw[m]);
                        else
                            for (var p in rw) void 0 !==
                                rw[p] && uw(n, p, rw[p])
                    } else {
                        var q = g,
                            r = tw(f),
                            u = r.indexOf(q);
                        0 <= u && r.splice(u, 1)
                    }
                b.vtp_gtmOnSuccess()
            })
        }();

















    var Hx = {};
    Hx.dataLayer = Fe;
    Hx.callback = function(a) {
        ve.hasOwnProperty(a) && pa(ve[a]) && ve[a]();
        delete ve[a]
    };
    Hx.bootstrap = 0;
    Hx._spx = !1;

    function Ix() {
        de[ah.H] = de[ah.H] || Hx;
        ah.Mb && (de["ctid_" + ah.Mb] = Hx);
        gh();
        ih() || k(jh(), function(a, b) {
            Tn(a, b.transportUrl, b.context);
            O(92)
        });
        Ha(we, Z.o);
        Dc = Lc
    }
    (function(a) {
        function b() {
            m = F.documentElement.getAttribute("data-tag-assistant-present");
            ir(m) && (l = g.Ii)
        }
        if (!E["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (F.referrer) {
                var d = df(F.referrer);
                c = "cct.google" === af(d, "host")
            }
            if (!c) {
                var e = Ag("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (E["__TAGGY_INSTALLED"] = !0, Db("https://cct.google/taggy/agent.js"))
        }
        if (qe) a();
        else {
            var f = function(t) {
                    var v = "GTM",
                        w = "GTM";
                    ke ? (v = "OGT", w = "GTAG") : qe && (w = v = "OPT");
                    var y = E["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                        E["google.tagmanager.debugui2.queue"] = y, Db("https://" + ce.zd + "/debug/bootstrap?id=" + ah.H + "&src=" + w + "&cond=" + t + "&gtm=" + mh()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: xb,
                            containerProduct: v,
                            debug: !1,
                            id: ah.H,
                            isGte: je
                        }
                    };
                    x.data.resume = function() {
                        a()
                    };
                    ce.Zh && (x.data.initialPublish = !0);
                    y.push(x)
                },
                g = {
                    Rk: 1,
                    Ji: 2,
                    Vi: 3,
                    ci: 4,
                    Ii: 5
                },
                l = void 0,
                m = void 0,
                n = bf(E.location, "query", !1, void 0, "gtm_debug");
            ir(n) && (l = g.Ji);
            if (!l && F.referrer) {
                var p = df(F.referrer);
                "tagassistant.google.com" === af(p, "host") && (l = g.Vi)
            }
            if (!l) {
                var q =
                    Ag("__TAG_ASSISTANT");
                q.length && q[0].length && (l = g.ci)
            }
            l || b();
            if (!l && S(54) && jr(m)) {
                var r = function() {
                        if (u) return !0;
                        u = !0;
                        b();
                        l && xb ? f(l) : a()
                    },
                    u = !1;
                Hb(F, "TADebugSignal", function() {
                    r()
                }, !1);
                E.setTimeout(function() {
                    r()
                }, 200)
            } else l && xb ? f(l) : a()
        }
    })(function() {
        var a = !1;
        a && Fo("INIT");
        if (S(70)) {
            var b = Ao(xo.ca.Wf, ah.H);
            Bo(b)
        }
        Pf().m();
        Wh();
        if (ah.Mb ? de["ctid_" + ah.Mb] : de[ah.H]) {
            var c = de.zones;
            c && c.unregisterChild(ch());
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) tc.push(e[f]);
            for (var g = d.tags || [], l = 0; l < g.length; l++) wc.push(g[l]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++) vc.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var r = p[q], u = {}, t = 0; t < r.length; t++) u[r[t][0]] = Array.prototype.slice.call(r[t], 1);
                uc.push(u)
            }
            yc = Z;
            zc = As;
            Ix();
            hr();
            io = !1;
            jo = 0;
            if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) lo();
            else {
                Hb(F, "DOMContentLoaded", lo);
                Hb(F, "readystatechange", lo);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !E.frameElement
                    } catch (H) {}
                    v && mo()
                }
                Hb(E, "load", lo)
            }
            xq = !1;
            "complete" === F.readyState ? zq() :
                Hb(E, "load", zq);
            lj();
            Zq({
                event: "gtm.js"
            });
            S(46) && (O(111), Xa("HEALTH", 1));
            S(47) && (O(112), Xa("HEALTH", 2));
            ue = z();
            Hx.bootstrap = ue;
            if (a) {
                var A = Go("INIT");
            }
            if (S(70)) {
                var B = Ao(xo.ca.bi, ah.H);
                if (Bo(B)) {
                    var D = Ao(xo.ca.Wf, ah.H);
                    Co(B, D)
                }
            }
        }
    });

})()