window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 1661672,
    "r": 1.0,
    "rec_value": 0.0,
    "state_change_listen_mode": "automatic",
    "record": true,
    "continuous_capture_enabled": true,
    "recording_capture_keystrokes": false,
    "anonymize_digits": true,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_text": false,
    "suppress_location": false,
    "user_attributes_enabled": false,
    "legal_name": null,
    "privacy_policy_url": null,
    "deferred_page_contents": [],
    "record_targeting_rules": [],
    "feedback_widgets": [],
    "heatmaps": [],
    "polls": [],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        },
        "google_optimize": {
            "tag_recordings": false
        }
    },
    "features": ["ingestion.http.page_content", "feedback.widget_telemetry", "feedback.widgetV2", "heatmap.continuous.manual_retaker", "settings.billing_v2", "error_reporting", "client_script.safe_date", "feedback.embeddable_widget"]
};

! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 270)
}({
    270: function(e, t, r) {
        "use strict";
        var n;

        function o(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(r), !0).forEach((function(t) {
                    i(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function i(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        r.r(t);
        var s = {
                metricsUrl: (null === (n = window._hjSettings) || void 0 === n ? void 0 : n.metricsUrl) || "https://csmetrics.hotjar.com",
                featureFlag: "client_script.metrics",
                logsSampleRate: .1,
                metricsSampleRate: .1,
                hasPerformance: !1,
                hasDebug: !1
            },
            c = {
                hasLogsEnabled: !1,
                hasMetricsEnabled: !1,
                loggedLogs: {},
                loggedMetrics: {},
                genericTags: {}
            },
            d = function(e, t, r) {
                var n = r.start,
                    o = r.end;
                c.loggedMetrics[e] = a(a({}, c.loggedMetrics[e]), {}, i({}, t, {
                    start: n,
                    end: o
                }))
            },
            l = function(e, t) {
                var r = (null == t ? void 0 : t.task) ? t.task : "value",
                    n = c.loggedMetrics[e],
                    o = n && n[r] ? n[r] : {};
                return {
                    tagName: r,
                    start: null == o ? void 0 : o.start,
                    end: null == o ? void 0 : o.end
                }
            },
            u = {
                getState: function() {
                    return a({}, c)
                },
                start: function() {
                    try {
                        s.hasPerformance = function() {
                            try {
                                return "performance" in window && "now" in window.performance
                            } catch (e) {
                                return !1
                            }
                        }(), c.metricsStartTime = s.hasPerformance ? performance.now() : void 0, s.hasDebug = /hjDebug=1/.test(location.search);
                        var e = window.hjSiteSettings || {},
                            t = e.features,
                            r = void 0 === t ? [] : t,
                            n = e.site_id;
                        if (!(r.indexOf(s.featureFlag) > -1)) return;
                        var o = Math.random() <= s.logsSampleRate,
                            a = Math.random() <= s.metricsSampleRate;
                        c.genericTags = {
                            site_id: n
                        }, c.hasLogsEnabled = o, c.hasMetricsEnabled = a
                    } catch (e) {
                        u.log("session.exception", {
                            task: "metrics.start",
                            error: e.message
                        })
                    }
                },
                reset: function() {
                    try {
                        c.loggedMetrics = {}, c.loggedLogs = {}, c.metricsStartTime = s.hasPerformance ? performance.now() : void 0
                    } catch (e) {}
                },
                stop: function() {
                    c.hasLogsEnabled = !1, c.hasMetricsEnabled = !1, c.genericTags = {}
                },
                send: function(e, t) {
                    var r = !1,
                        n = JSON.stringify([t]);
                    if ("sendBeacon" in navigator) try {
                        r = navigator.sendBeacon.bind(navigator)(e, n)
                    } catch (e) {}
                    if (!1 === r) try {
                        var o = new XMLHttpRequest;
                        o.open("POST", e), o.send(n)
                    } catch (e) {}
                    s.hasDebug && console.debug("New metric/log: ", t)
                },
                log: function(e, t) {
                    try {
                        if (!c.hasLogsEnabled || !t) return void console.debug("Metric log:", {
                            payload: t,
                            isEnabled: c.hasLogsEnabled
                        });
                        if (!(e in c.loggedLogs)) {
                            var r = {
                                type: "log",
                                msg: e,
                                tags: a(a({}, c.genericTags), t)
                            };
                            u.send(s.metricsUrl, r), c.loggedLogs[e] = !0
                        }
                    } catch (e) {
                        console.debug("Failed to send metric log:", {
                            payload: t,
                            error: e
                        })
                    }
                },
                timeStart: function(e) {
                    if (s.hasPerformance) try {
                        var t = performance.now(),
                            r = l(e, arguments.length <= 1 ? void 0 : arguments[1]),
                            n = r.start,
                            o = r.tagName;
                        if (n) return;
                        return d(e, o, {
                            start: t
                        }), t
                    } catch (e) {}
                },
                timeEnd: function(e) {
                    if (s.hasPerformance) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        try {
                            var o = performance.now(),
                                i = r[0],
                                h = l(e, i),
                                p = h.start,
                                f = h.end,
                                g = h.tagName;
                            if (f) return;
                            var m = p || c.metricsStartTime;
                            if (!m) return void u.log("session.exception", a({
                                task: "metrics.timeEnd",
                                error: "No start time specified."
                            }, r));
                            d(e, g, {
                                start: m,
                                end: o
                            });
                            var j = Math.round(o - m),
                                _ = {
                                    name: e,
                                    type: "distribution",
                                    value: j,
                                    tags: i
                                };
                            return c.hasMetricsEnabled && u.send(s.metricsUrl, _), o
                        } catch (t) {
                            console.debug("Failed to send timer metric: ", a(a({
                                name: e
                            }, r), {}, {
                                error: t
                            }))
                        }
                    }
                }
            };
        window.hj = window.hj || function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            (window.hj.q = window.hj.q || []).push(t)
        }, window.hj.metrics = u, hj.metrics.start(), window.hjBootstrap = window.hjBootstrap || function(e, t, r) {
            var n = ["bot", "google", "headless", "baidu", "bing", "msn", "duckduckbot", "teoma", "slurp", "yandex", "phantomjs", "pingdom", "ahrefsbot"].join("|"),
                o = new RegExp(n, "i"),
                a = window.navigator || {
                    userAgent: "unknown"
                },
                i = a.userAgent ? a.userAgent : "unknown";
            if (o.test(i)) return hj.metrics.log("session.rejection", {
                reason: "bot",
                userAgent: i
            }), void console.warn("Hotjar not launching due to suspicious userAgent:", i);
            var s = "http:" === window.location.protocol,
                c = Boolean(window._hjSettings.preview);
            if (s && !c) return hj.metrics.log("session.rejection", {
                reason: "https",
                origin: window.location.origin
            }), void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");
            var d = function(e, t, r) {
                window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(r), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
            };
            d(0, 0, r);
            var l = window.document,
                u = l.head || l.getElementsByTagName("head")[0];
            if (l.addEventListener) {
                hj.scriptDomain = e;
                var h = l.createElement("script");
                h.async = 1, h.src = hj.scriptDomain + t, h.charset = "utf-8", u.appendChild(h);
                var p = ["iframe#_hjRemoteVarsFrame {", "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;", "}"],
                    f = l.createElement("style");
                f.type = "text/css", f.styleSheet ? f.styleSheet.cssText = p.join("") : f.appendChild(l.createTextNode(p.join(""))), u.appendChild(f);
                var g = l.createElement("iframe");
                g.style.cssText = p[1], g.name = "_hjRemoteVarsFrame", g.title = "_hjRemoteVarsFrame", g.tabIndex = -1, g.setAttribute("aria-hidden", "true"), g.id = "_hjRemoteVarsFrame", g.src = "https://" + (window._hjSettings.varsHost || "vars.hotjar.com") + "/box-5e66f98b4ee957db209dc6f63e3d59dd.html", g.onload = function() {
                    d.varsLoaded = !0, "undefined" != typeof hj && hj.event && hj.event.signal && hj.event.signal("varsLoaded")
                }, d.varsJar = g, "interactive" === l.readyState || "complete" === l.readyState || "loaded" === l.readyState ? m() : l.addEventListener("DOMContentLoaded", m), d.revision = "5f475615c966", window.hjBootstrap = d
            }

            function m() {
                setTimeout((function() {
                    l.body.appendChild(g)
                }), 50)
            }
        }, window.hjBootstrap("https://script.hotjar.com/", "modules.352fddba5b21bbfc3a08.js", "1661672"), window.hjLazyModules = window.hjLazyModules || {
            SURVEY_V2: {
                js: "survey-v2.b289a450194a732565fd.js"
            },
            SURVEY_BOOTSTRAPPER: {
                js: "survey-bootstrapper.1e2e0ed73dc076c3c18d.js"
            },
            SURVEY_ISOLATED: {
                js: "survey-isolated.bbbeaf0d7fc44ad669cf.js"
            },
            HEATMAP_SCREENSHOTTER: {
                js: "heatmap-screenshotter.f08bd1a64e7b703e0412.js"
            },
            HEATMAP_VIEWER: {
                js: "heatmap-viewer.6e4a3e1961948510f20f.js"
            },
            HEATMAP_DYNAMIC_VIEW: {
                js: "heatmap-dynamic-view.2361f5d42a90f8118dc1.js"
            },
            HEATMAP_RETAKER: {
                js: "heatmap-retaker.7f67263fc9213cc7a5c8.js"
            },
            SURVEY_INVITATION: {
                js: "survey-invitation.cea7d1930bbc9da61780.js"
            },
            NOTIFICATION: {
                js: "notification.49bded84f4a5c03cb554.js"
            },
            INCOMING_FEEDBACK: {
                js: "incoming-feedback.a86243627f5cbdda2d5e.js"
            },
            PREACT_INCOMING_FEEDBACK: {
                js: "preact-incoming-feedback.430164687db481ab3df7.js"
            },
            SENTRY: {
                js: "sentry.80ac424b277bfaaf0403.js"
            }
        }
    }
});