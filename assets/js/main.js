var FullCalendar = function(e) {
    "use strict";
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            })(e, t)
    };

    function t(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var P = function() {
        return (P = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function f(e, t) {
        for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
        return e
    }
    var D, n, b = {},
        C = [],
        o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function w(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function R(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function a(e, t, n) {
        var r, o, i, a = arguments,
            s = {};
        for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
        if (3 < arguments.length)
            for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
        if (null != n && (s.children = n), "function" == typeof e && null != e.defaultProps)
            for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
        return E(e, s, r, o, null)
    }

    function E(e, t, n, r, o) {
        o = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++D.__v : o
        };
        return null != D.vnode && D.vnode(o), o
    }

    function T(e) {
        return e.children
    }

    function _(e, t) {
        this.props = e, this.context = t
    }

    function S(e, t) {
        if (null == t) return e.__ ? S(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? S(e) : null
    }

    function i(e) {
        (!e.__d && (e.__d = !0) && v.push(e) && !s.__r++ || n !== D.debounceRendering) && ((n = D.debounceRendering) || m)(s)
    }

    function s() {
        for (var e; s.__r = v.length;) e = v.sort(function(e, t) {
            return e.__v.__b - t.__v.__b
        }), v = [], e.some(function(e) {
            var t, n, r, o, i;
            e.__d && (o = (r = (t = e).__v).__e, (i = t.__P) && (n = [], (e = w({}, r)).__v = r.__v + 1, I(i, r, e, t.__n, void 0 !== i.ownerSVGElement, null != r.__h ? [o] : null, n, null == o ? S(r) : o, r.__h), p(n, r), r.__e != o && function e(t) {
                var n, r;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                        if (null != (r = t.__k[n]) && null != r.__e) {
                            t.__e = t.__c.base = r.__e;
                            break
                        } return e(t)
                }
            }(r)))
        })
    }

    function k(e, t, n, r, o, i, a, s, l, u) {
        var c, d, p, f, h, g, v, m = r && r.__k || C,
            y = m.length;
        for (n.__k = [], c = 0; c < t.length; c++)
            if (null != (f = n.__k[c] = null == (f = t[c]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? E(null, f, null, null, f) : Array.isArray(f) ? E(T, {
                    children: f
                }, null, null, null) : 0 < f.__b ? E(f.type, f.props, f.key, null, f.__v) : f)) {
                if (f.__ = n, f.__b = n.__b + 1, null === (p = m[c]) || p && f.key == p.key && f.type === p.type) m[c] = void 0;
                else
                    for (d = 0; d < y; d++) {
                        if ((p = m[d]) && f.key == p.key && f.type === p.type) {
                            m[d] = void 0;
                            break
                        }
                        p = null
                    }
                I(e, f, p = p || b, o, i, a, s, l, u), h = f.__e, (d = f.ref) && p.ref != d && (v = v || [], p.ref && v.push(p.ref, null, f), v.push(d, f.__c || h, f)), null != h ? (null == g && (g = h), "function" == typeof f.type && null != f.__k && f.__k === p.__k ? f.__d = l = function e(t, n, r) {
                    var o, i;
                    for (o = 0; o < t.__k.length; o++)(i = t.__k[o]) && (i.__ = t, n = "function" == typeof i.type ? e(i, n, r) : x(r, i, i, t.__k, i.__e, n));
                    return n
                }(f, l, e) : l = x(e, f, p, m, h, l), u || "option" !== n.type ? "function" == typeof n.type && (n.__d = l) : e.value = "") : l && p.__e == l && l.parentNode != e && (l = S(p))
            } for (n.__e = g, c = y; c--;) null != m[c] && ("function" == typeof n.type && null != m[c].__e && m[c].__e == n.__d && (n.__d = S(r, c + 1)), function e(t, n, r) {
            var o, i, a;
            if (D.unmount && D.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || N(o, null, n)), r || "function" == typeof t.type || (r = null != (i = t.__e)), t.__e = t.__d = void 0, null != (o = t.__c)) {
                if (o.componentWillUnmount) try {
                    o.componentWillUnmount()
                } catch (t) {
                    D.__e(t, n)
                }
                o.base = o.__P = null
            }
            if (o = t.__k)
                for (a = 0; a < o.length; a++) o[a] && e(o[a], n, r);
            null != i && R(i)
        }(m[c], m[c]));
        if (v)
            for (c = 0; c < v.length; c++) N(v[c], v[++c], v[++c])
    }

    function l(e, t) {
        return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some(function(e) {
            l(e, t)
        }) : t.push(e)), t
    }

    function x(e, t, n, r, o, i) {
        var a, s, l;
        if (void 0 !== t.__d) a = t.__d, t.__d = void 0;
        else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), a = null;
            else {
                for (s = i, l = 0;
                    (s = s.nextSibling) && l < r.length; l += 2)
                    if (s == o) break e;
                e.insertBefore(o, i), a = i
            } return void 0 !== a ? a : o.nextSibling
    }

    function u(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || o.test(t) ? n : n + "px"
    }

    function M(e, t, n, r, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""), r)
                    for (t in r) n && t in n || u(e.style, t, "");
                if (n)
                    for (t in n) r && n[t] === r[t] || u(e.style, t, n[t])
            }
        else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = (t.toLowerCase() in e ? t.toLowerCase() : t).slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? d : c, i) : e.removeEventListener(t, i ? d : c, i);
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                e[t] = null == n ? "" : n;
                break e
            } catch (e) {}
            "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
        }
    }

    function c(e) {
        this.l[e.type + !1](D.event ? D.event(e) : e)
    }

    function d(e) {
        this.l[e.type + !0](D.event ? D.event(e) : e)
    }

    function I(e, t, n, r, o, i, a, s, l) {
        var u, c, d, p, f, h, g, v, m, y, E, S = t.type;
        if (void 0 === t.constructor) {
            null != n.__h && (l = n.__h, s = t.__e = n.__e, t.__h = null, i = [s]), (u = D.__b) && u(t);
            try {
                e: if ("function" == typeof S) {
                    if (v = t.props, m = (u = S.contextType) && r[u.__c], y = u ? m ? m.props.value : u.__ : r, n.__c ? g = (c = t.__c = n.__c).__ = c.__E : ("prototype" in S && S.prototype.render ? t.__c = c = new S(v, y) : (t.__c = c = new _(v, y), c.constructor = S, c.render = H), m && m.sub(c), c.props = v, c.state || (c.state = {}), c.context = y, c.__n = r, d = c.__d = !0, c.__h = []), null == c.__s && (c.__s = c.state), null != S.getDerivedStateFromProps && (c.__s == c.state && (c.__s = w({}, c.__s)), w(c.__s, S.getDerivedStateFromProps(v, c.__s))), p = c.props, f = c.state, d) null == S.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(), null != c.componentDidMount && c.__h.push(c.componentDidMount);
                    else {
                        if (null == S.getDerivedStateFromProps && v !== p && null != c.componentWillReceiveProps && c.componentWillReceiveProps(v, y), !c.__e && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(v, c.__s, y) || t.__v === n.__v) {
                            c.props = v, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), (c.__v = t).__e = n.__e, t.__k = n.__k, t.__k.forEach(function(e) {
                                e && (e.__ = t)
                            }), c.__h.length && a.push(c);
                            break e
                        }
                        null != c.componentWillUpdate && c.componentWillUpdate(v, c.__s, y), null != c.componentDidUpdate && c.__h.push(function() {
                            c.componentDidUpdate(p, f, h)
                        })
                    }
                    c.context = y, c.props = v, c.state = c.__s, (u = D.__r) && u(t), c.__d = !1, c.__v = t, c.__P = e, u = c.render(c.props, c.state, c.context), c.state = c.__s, null != c.getChildContext && (r = w(w({}, r), c.getChildContext())), d || null == c.getSnapshotBeforeUpdate || (h = c.getSnapshotBeforeUpdate(p, f)), E = null != u && u.type === T && null == u.key ? u.props.children : u, k(e, Array.isArray(E) ? E : [E], t, n, r, o, i, a, s, l), c.base = t.__e, t.__h = null, c.__h.length && a.push(c), g && (c.__E = c.__ = null), c.__e = !1
                } else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, r, o, i, a, s) {
                    var l, u, c, d, p = n.props,
                        f = t.props,
                        h = t.type,
                        g = 0;
                    if ("svg" === h && (o = !0), null != i)
                        for (; g < i.length; g++)
                            if ((l = i[g]) && (l === e || (h ? l.localName == h : 3 == l.nodeType))) {
                                e = l, i[g] = null;
                                break
                            } if (null == e) {
                        if (null === h) return document.createTextNode(f);
                        e = o ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, f.is && f), i = null, s = !1
                    }
                    if (null === h) p === f || s && e.data === f || (e.data = f);
                    else {
                        if (i = i && C.slice.call(e.childNodes), u = (p = n.props || b).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !s) {
                            if (null != i)
                                for (p = {}, d = 0; d < e.attributes.length; d++) p[e.attributes[d].name] = e.attributes[d].value;
                            (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""))
                        }
                        if (function(e, t, n, r, o) {
                                for (var i in n) "children" === i || "key" === i || i in t || M(e, i, null, n[i], r);
                                for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || M(e, i, t[i], n[i], r)
                            }(e, f, p, o, s), c) t.__k = [];
                        else if (g = t.props.children, k(e, Array.isArray(g) ? g : [g], t, n, r, o && "foreignObject" !== h, i, a, e.firstChild, s), null != i)
                            for (g = i.length; g--;) null != i[g] && R(i[g]);
                        s || ("value" in f && void 0 !== (g = f.value) && (g !== e.value || "progress" === h && !g) && M(e, "value", g, p.value, !1), "checked" in f && void 0 !== (g = f.checked) && g !== e.checked && M(e, "checked", g, p.checked, !1))
                    }
                    return e
                }(n.__e, t, n, r, o, i, a, l);
                (u = D.diffed) && u(t)
            }
            catch (e) {
                t.__v = null, !l && null == i || (t.__e = s, t.__h = !!l, i[i.indexOf(s)] = null), D.__e(e, t, n)
            }
        }
    }

    function p(e, t) {
        D.__c && D.__c(t, e), e.some(function(t) {
            try {
                e = t.__h, t.__h = [], e.some(function(e) {
                    e.call(t)
                })
            } catch (e) {
                D.__e(e, t.__v)
            }
        })
    }

    function N(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            D.__e(e, n)
        }
    }

    function H(e, t, n) {
        return this.constructor(e, n)
    }

    function h(e, t, n) {
        var r, o, i;
        D.__ && D.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, i = [], I(t, e = (!r && n || t).__k = a(T, null, [e]), o || b, b, void 0 !== t.ownerSVGElement, !r && n ? [n] : !o && t.firstChild ? C.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), p(i, e)
    }
    D = {
        __e: function(e, t) {
            for (var n, r, o; t = t.__;)
                if ((n = t.__c) && !n.__) try {
                    if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n
                } catch (t) {
                    e = t
                }
            throw e
        },
        __v: 0
    }, _.prototype.setState = function(e, t) {
        var n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state);
        (e = "function" == typeof e ? e(w({}, n), this.props) : e) && w(n, e), null != e && this.__v && (t && this.__h.push(t), i(this))
    }, _.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), i(this))
    }, _.prototype.render = T;
    var g, v = [],
        m = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        y = s.__r = 0,
        O = [],
        A = D.__b,
        U = D.__r,
        L = D.diffed,
        W = D.__c,
        V = D.unmount;

    function F() {
        O.forEach(function(t) {
            if (t.__P) try {
                t.__H.__h.forEach(B), t.__H.__h.forEach(j), t.__H.__h = []
            } catch (e) {
                t.__H.__h = [], D.__e(e, t.__v)
            }
        }), O = []
    }
    D.__b = function(e) {
        A && A(e)
    }, D.__r = function(e) {
        U && U(e);
        e = e.__c.__H;
        e && (e.__h.forEach(B), e.__h.forEach(j), e.__h = [])
    }, D.diffed = function(e) {
        L && L(e);
        e = e.__c;
        e && e.__H && e.__H.__h.length && (1 !== O.push(e) && g === D.requestAnimationFrame || ((g = D.requestAnimationFrame) || function(e) {
            function t() {
                clearTimeout(r), z && cancelAnimationFrame(n), setTimeout(e)
            }
            var n, r = setTimeout(t, 100);
            z && (n = requestAnimationFrame(t))
        })(F))
    }, D.__c = function(e, n) {
        n.some(function(t) {
            try {
                t.__h.forEach(B), t.__h = t.__h.filter(function(e) {
                    return !e.__ || j(e)
                })
            } catch (e) {
                n.some(function(e) {
                    e.__h && (e.__h = [])
                }), n = [], D.__e(e, t.__v)
            }
        }), W && W(e, n)
    }, D.unmount = function(e) {
        V && V(e);
        var t = e.__c;
        if (t && t.__H) try {
            t.__H.__.forEach(B)
        } catch (e) {
            D.__e(e, t.__v)
        }
    };
    var z = "function" == typeof requestAnimationFrame;

    function B(e) {
        "function" == typeof e.__c && e.__c()
    }

    function j(e) {
        e.__c = e.__()
    }(new _).isPureReactComponent = !0;
    var G = D.__b;
    D.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), G && G(e)
    };
    var q = D.__e;
    D.__e = function(e, t, n) {
        if (e.then)
            for (var r, o = t; o = o.__;)
                if ((r = o.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
        q(e, t, n)
    };
    var Y = D.unmount;

    function Z(e) {
        var t = e.__.__c;
        return t && t.__e && t.__e(e)
    }
    D.unmount = function(e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Y && Y(e)
    }, (new _).__c = function(e, t) {
        var n = t.__c,
            r = this;
        null == r.t && (r.t = []), r.t.push(n);

        function o() {
            a || (a = !0, n.__R = null, i ? i(s) : s())
        }
        var i = Z(r.__v),
            a = !1;
        n.__R = o;
        var s = function() {
                var e, t;
                if (!--r.__u)
                    for (r.state.__e && (e = r.state.__e, r.__v.__k[0] = function t(e, n, r) {
                            return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(e) {
                                return t(e, n, r)
                            }), e.__c && e.__c.__P === n && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e
                        }(e, e.__c.__P, e.__c.__O)), r.setState({
                            __e: r.__b = null
                        }); t = r.t.pop();) t.forceUpdate()
            },
            t = !0 === t.__h;
        r.__u++ || t || r.setState({
            __e: r.__b = r.__v.__k[0]
        }), e.then(o, o)
    };

    function X(e, t, n) {
        if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
            for (n = e.u; n;) {
                for (; 3 < n.length;) n.pop()();
                if (n[1] < n[0]) break;
                e.u = n = n[2]
            }
    }

    function K(e) {
        return this.getChildContext = function() {
            return e.context
        }, e.children
    }

    function $(e) {
        var n = this,
            t = e.i;
        n.componentWillUnmount = function() {
            h(null, n.l), n.l = null, n.i = null
        }, n.i && n.i !== t && n.componentWillUnmount(), e.__v ? (n.l || (n.i = t, n.l = {
            nodeType: 1,
            parentNode: t,
            childNodes: [],
            appendChild: function(e) {
                this.childNodes.push(e), n.i.appendChild(e)
            },
            insertBefore: function(e, t) {
                this.childNodes.push(e), n.i.appendChild(e)
            },
            removeChild: function(e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), n.i.removeChild(e)
            }
        }), h(a(K, {
            context: n.context
        }, e.__v), n.l)) : n.l && n.componentWillUnmount()
    }(new _).__e = function(n) {
        var r = this,
            o = Z(r.__v),
            i = r.o.get(n);
        return i[0]++,
            function(e) {
                function t() {
                    r.props.revealOrder ? (i.push(e), X(r, n, i)) : e()
                }
                o ? o(t) : t()
            }
    };
    var J = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        Q = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    _.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
        Object.defineProperty(_.prototype, t, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + t]
            },
            set: function(e) {
                Object.defineProperty(this, t, {
                    configurable: !0,
                    writable: !0,
                    value: e
                })
            }
        })
    });
    var ee = D.event;

    function te() {}

    function ne() {
        return this.cancelBubble
    }

    function re() {
        return this.defaultPrevented
    }
    D.event = function(e) {
        return (e = ee ? ee(e) : e).persist = te, e.isPropagationStopped = ne, e.isDefaultPrevented = re, e.nativeEvent = e
    };
    var oe = {
            configurable: !0,
            get: function() {
                return this.class
            }
        },
        ie = D.vnode;
    D.vnode = function(e) {
        var t, n = e.type,
            r = e.props,
            o = r;
        if ("string" == typeof n) {
            for (var i in o = {}, r) {
                var a = r[i];
                "value" === i && "defaultValue" in r && null == a || ("defaultValue" === i && "value" in r && null == r.value ? i = "value" : "download" === i && !0 === a ? a = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + n) && (t = r.type, !("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(t)) ? i = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(i) ? i = i.toLowerCase() : Q.test(i) ? i = i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === a && (a = void 0), o[i] = a)
            }
            "select" == n && o.multiple && Array.isArray(o.value) && (o.value = l(r.children).forEach(function(e) {
                e.props.selected = -1 != o.value.indexOf(e.props.value)
            })), "select" == n && null != o.defaultValue && (o.value = l(r.children).forEach(function(e) {
                e.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(e.props.value) : o.defaultValue == e.props.value
            })), e.props = o
        }
        n && r.class != r.className && (oe.enumerable = "className" in r, null != r.className && (o.class = r.className), Object.defineProperty(o, "className", oe)), e.$$typeof = J, ie && ie(e)
    };
    var ae = D.__r;
    D.__r = function(e) {
        ae && ae(e)
    }, "object" == typeof performance && "function" == typeof performance.now && performance.now.bind(performance);
    var se = "undefined" != typeof globalThis ? globalThis : window;
    se.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : se.FullCalendarVDom = {
        Component: _,
        createElement: a,
        render: h,
        createRef: function() {
            return {
                current: null
            }
        },
        Fragment: T,
        createContext: function(e) {
            var e = function(e, r) {
                    return (e = {
                        __c: r = "__cC" + y++,
                        __: e,
                        Consumer: function(e, t) {
                            return e.children(t)
                        },
                        Provider: function(e) {
                            var n, t;
                            return this.getChildContext || (n = [], ((t = {})[r] = this).getChildContext = function() {
                                return t
                            }, this.shouldComponentUpdate = function(e) {
                                this.props.value !== e.value && n.some(i)
                            }, this.sub = function(e) {
                                n.push(e);
                                var t = e.componentWillUnmount;
                                e.componentWillUnmount = function() {
                                    n.splice(n.indexOf(e), 1), t && t.call(e)
                                }
                            }), e.children
                        }
                    }).Provider.__ = e.Consumer.contextType = e
                }(e),
                o = e.Provider;
            return e.Provider = function() {
                var n, e = this,
                    t = !this.getChildContext,
                    r = o.apply(this, arguments);
                return t && (n = [], this.shouldComponentUpdate = function(t) {
                    e.props.value !== t.value && n.forEach(function(e) {
                        e.context = t.value, e.forceUpdate()
                    })
                }, this.sub = function(e) {
                    n.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function() {
                        n.splice(n.indexOf(e), 1), t && t.call(e)
                    }
                }), r
            }, e
        },
        createPortal: function(e, t) {
            return a($, {
                __v: e,
                i: t
            })
        },
        flushToDom: function() {
            var e = D.debounceRendering,
                t = [];
            D.debounceRendering = function(e) {
                t.push(e)
            }, h(a(ue, {}), document.createElement("div"));
            for (; t.length;) t.shift()();
            D.debounceRendering = e
        },
        unmountComponentAtNode: function(e) {
            h(null, e)
        }
    };
    var le, ue = (t(ce, le = _), ce.prototype.render = function() {
        return a("div", {})
    }, ce.prototype.componentDidMount = function() {
        this.setState({})
    }, ce);

    function ce() {
        return null !== le && le.apply(this, arguments) || this
    }
    var de = (pe.prototype.remove = function() {
        this.context.dispatch({
            type: "REMOVE_EVENT_SOURCE",
            sourceId: this.internalEventSource.sourceId
        })
    }, pe.prototype.refetch = function() {
        this.context.dispatch({
            type: "FETCH_EVENT_SOURCES",
            sourceIds: [this.internalEventSource.sourceId],
            isRefetch: !0
        })
    }, Object.defineProperty(pe.prototype, "id", {
        get: function() {
            return this.internalEventSource.publicId
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(pe.prototype, "url", {
        get: function() {
            return this.internalEventSource.meta.url
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(pe.prototype, "format", {
        get: function() {
            return this.internalEventSource.meta.format
        },
        enumerable: !1,
        configurable: !0
    }), pe);

    function pe(e, t) {
        this.context = e, this.internalEventSource = t
    }

    function fe(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function he(e, t) {
        if (e.closest) return e.closest(t);
        if (!document.documentElement.contains(e)) return null;
        do {
            if (ge(e, t)) return e
        } while (null !== (e = e.parentElement || e.parentNode) && 1 === e.nodeType);
        return null
    }

    function ge(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t)
    }

    function ve(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
            for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1) r.push(i[a]);
        return r
    }
    var me = /(top|left|right|bottom|width|height)$/i;

    function ye(e, t) {
        for (var n in t) Ee(e, n, t[n])
    }

    function Ee(e, t, n) {
        null == n ? e.style[t] = "" : "number" == typeof n && me.test(t) ? e.style[t] = n + "px" : e.style[t] = n
    }

    function Se(e) {
        e.preventDefault()
    }

    function De(n, r) {
        return function(e) {
            var t = he(e.target, n);
            t && r.call(t, e, t)
        }
    }

    function be(e, t, n, r) {
        var o = De(n, r);
        return e.addEventListener(t, o),
            function() {
                e.removeEventListener(t, o)
            }
    }
    var Ce = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

    function we(t, n) {
        var r = function(e) {
            n(e), Ce.forEach(function(e) {
                t.removeEventListener(e, r)
            })
        };
        Ce.forEach(function(e) {
            t.addEventListener(e, r)
        })
    }
    var Re = 0;

    function Te() {
        return Re += 1, String(Re)
    }

    function _e() {
        document.body.classList.add("fc-not-allowed")
    }

    function ke() {
        document.body.classList.remove("fc-not-allowed")
    }

    function xe(e) {
        e.classList.add("fc-unselectable"), e.addEventListener("selectstart", Se)
    }

    function Me(e) {
        e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", Se)
    }

    function Pe(e) {
        e.addEventListener("contextmenu", Se)
    }

    function Ie(e) {
        e.removeEventListener("contextmenu", Se)
    }

    function Ne(e) {
        var t, n, r = [],
            o = [];
        for ("string" == typeof e ? o = e.split(/\s*,\s*/) : "function" == typeof e ? o = [e] : Array.isArray(e) && (o = e), t = 0; t < o.length; t += 1) "string" == typeof(n = o[t]) ? r.push("-" === n.charAt(0) ? {
            field: n.substring(1),
            order: -1
        } : {
            field: n,
            order: 1
        }) : "function" == typeof n && r.push({
            func: n
        });
        return r
    }

    function He(e, t, n) {
        for (var r, o = 0; o < n.length; o += 1)
            if (r = Oe(e, t, n[o])) return r;
        return 0
    }

    function Oe(e, t, n) {
        return n.func ? n.func(e, t) : Ae(e[n.field], t[n.field]) * (n.order || 1)
    }

    function Ae(e, t) {
        return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0
    }

    function Ue(e, t) {
        e = String(e);
        return "000".substr(0, t - e.length) + e
    }

    function Le(e, t) {
        return e - t
    }

    function We(e) {
        return e % 1 == 0
    }

    function Ve(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
            n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
        return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width
    }
    var Fe = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    function ze(e, t) {
        e = et(e);
        return e[2] += 7 * t, tt(e)
    }

    function Be(e, t) {
        e = et(e);
        return e[2] += t, tt(e)
    }

    function je(e, t) {
        e = et(e);
        return e[6] += t, tt(e)
    }

    function Ge(e, t) {
        return qe(e, t) / 7
    }

    function qe(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5
    }

    function Ye(e, t) {
        var n = Ke(e),
            r = Ke(t);
        return {
            years: 0,
            months: 0,
            days: Math.round(qe(n, r)),
            milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
        }
    }

    function Ze(e, t) {
        t = Xe(e, t);
        return null !== t && t % 7 == 0 ? t / 7 : null
    }

    function Xe(e, t) {
        return rt(e) === rt(t) ? Math.round(qe(e, t)) : null
    }

    function Ke(e) {
        return tt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
    }

    function $e(e, t, n, r) {
        r = tt([t, 0, 1 + function(e, t, n) {
            n = 7 + t - n;
            return -(7 + tt([e, 0, n]).getUTCDay() - t) % 7 + n - 1
        }(t, n, r)]), e = Ke(e), e = Math.round(qe(r, e));
        return Math.floor(e / 7) + 1
    }

    function Je(e) {
        return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
    }

    function Qe(e) {
        return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0)
    }

    function et(e) {
        return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()]
    }

    function tt(e) {
        return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e))
    }

    function nt(e) {
        return !isNaN(e.valueOf())
    }

    function rt(e) {
        return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
    }

    function ot(e, t, n, r) {
        return {
            instanceId: Te(),
            defId: e,
            range: t,
            forcedStartTzo: null == n ? null : n,
            forcedEndTzo: null == r ? null : r
        }
    }
    var it = Object.prototype.hasOwnProperty;

    function at(e, t) {
        var n = {};
        if (t)
            for (var r in t) {
                for (var o = [], i = e.length - 1; 0 <= i; --i) {
                    var a = e[i][r];
                    if ("object" == typeof a && a) o.unshift(a);
                    else if (void 0 !== a) {
                        n[r] = a;
                        break
                    }
                }
                o.length && (n[r] = at(o))
            }
        for (i = e.length - 1; 0 <= i; --i) {
            var s, l = e[i];
            for (s in l) s in n || (n[s] = l[s])
        }
        return n
    }

    function st(e, t) {
        var n, r = {};
        for (n in e) t(e[n], n) && (r[n] = e[n]);
        return r
    }

    function lt(e, t) {
        var n, r = {};
        for (n in e) r[n] = t(e[n], n);
        return r
    }

    function ut(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) t[r[n]] = !0;
        return t
    }

    function ct(e) {
        var t, n = [];
        for (t in e) n.push(e[t]);
        return n
    }

    function dt(e, t) {
        if (e === t) return !0;
        for (var n in e)
            if (it.call(e, n) && !(n in t)) return !1;
        for (var n in t)
            if (it.call(t, n) && e[n] !== t[n]) return !1;
        return !0
    }

    function pt(e, t) {
        var n, r = [];
        for (n in e) it.call(e, n) && (n in t || r.push(n));
        for (n in t) it.call(t, n) && e[n] !== t[n] && r.push(n);
        return r
    }

    function ft(e, t, n) {
        if (void 0 === n && (n = {}), e === t) return !0;
        for (var r in t)
            if (!(r in e && function(e, t, n) {
                    if (e === t || !0 === n) return !0;
                    if (n) return n(e, t);
                    return !1
                }(e[r], t[r], n[r]))) return !1;
        for (var r in e)
            if (!(r in t)) return !1;
        return !0
    }

    function ht(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a)
        }
        return o
    }

    function gt(e, t, n) {
        var r, o = n.dateEnv,
            i = n.pluginHooks,
            a = n.options,
            s = e.defs,
            l = st(l = e.instances, function(e) {
                return !s[e.defId].recurringDef
            });
        for (r in s) {
            var u = s[r];
            if (u.recurringDef)
                for (var c = u.recurringDef.duration, d = 0, p = function(e, t, n, r, o) {
                        r = o[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
                            start: r.subtract(n.start, t),
                            end: n.end
                        }, r);
                        e.allDay && (r = r.map(Ke));
                        return r
                    }(u, c = c || (u.allDay ? a.defaultAllDayEventDuration : a.defaultTimedEventDuration), t, o, i.recurringTypes); d < p.length; d++) {
                    var f = p[d],
                        f = ot(r, {
                            start: f,
                            end: o.add(f, c)
                        });
                    l[f.instanceId] = f
                }
        }
        return {
            defs: s,
            instances: l
        }
    }
    var vt = ["years", "months", "days", "milliseconds"],
        mt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

    function yt(e, t) {
        var n;
        return "string" == typeof e ? function(e) {
            var t = mt.exec(e);
            if (t) {
                e = t[1] ? -1 : 1;
                return {
                    years: 0,
                    months: 0,
                    days: e * (t[2] ? parseInt(t[2], 10) : 0),
                    milliseconds: e * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
                }
            }
            return null
        }(e) : "object" == typeof e && e ? Et(e) : "number" == typeof e ? Et(((n = {})[t || "milliseconds"] = e, n)) : null
    }

    function Et(e) {
        var t = {
                years: e.years || e.year || 0,
                months: e.months || e.month || 0,
                days: e.days || e.day || 0,
                milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
            },
            e = e.weeks || e.week;
        return e && (t.days += 7 * e, t.specifiedWeeks = !0), t
    }

    function St(e, t) {
        return {
            years: e.years + t.years,
            months: e.months + t.months,
            days: e.days + t.days,
            milliseconds: e.milliseconds + t.milliseconds
        }
    }

    function Dt(e, t) {
        return {
            years: e.years * t,
            months: e.months * t,
            days: e.days * t,
            milliseconds: e.milliseconds * t
        }
    }

    function bt(e) {
        return Ct(e) / 864e5
    }

    function Ct(e) {
        return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
    }

    function wt(e, t) {
        for (var n = null, r = 0; r < vt.length; r += 1) {
            var o = vt[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!We(i) || null !== n && n !== i) return null;
                n = i
            } else if (e[o]) return null
        }
        return n
    }

    function Rt(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0) return {
                unit: "millisecond",
                value: t
            };
            if (t % 6e4 != 0) return {
                unit: "second",
                value: t / 1e3
            };
            if (t % 36e5 != 0) return {
                unit: "minute",
                value: t / 6e4
            };
            if (t) return {
                unit: "hour",
                value: t / 36e5
            }
        }
        return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
            unit: "week",
            value: e.days / 7
        } : {
            unit: "day",
            value: e.days
        } : e.months ? {
            unit: "month",
            value: e.months
        } : e.years ? {
            unit: "year",
            value: e.years
        } : {
            unit: "millisecond",
            value: 0
        }
    }

    function Tt(e, t, n) {
        void 0 === n && (n = !1);
        e = (e = e.toISOString()).replace(".000", "");
        return 10 < (e = n ? e.replace("T00:00:00Z", "") : e).length && (null == t ? e = e.replace("Z", "") : 0 !== t && (e = e.replace("Z", xt(t, !0)))), e
    }

    function _t(e) {
        return e.toISOString().replace(/T.*$/, "")
    }

    function kt(e) {
        return Ue(e.getUTCHours(), 2) + ":" + Ue(e.getUTCMinutes(), 2) + ":" + Ue(e.getUTCSeconds(), 2)
    }

    function xt(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+",
            r = Math.abs(e),
            e = Math.floor(r / 60),
            r = Math.round(r % 60);
        return t ? n + Ue(e, 2) + ":" + Ue(r, 2) : "GMT" + n + e + (r ? ":" + Ue(r, 2) : "")
    }

    function Mt(e, t, n) {
        if (e === t) return !0;
        var r, o = e.length;
        if (o !== t.length) return !1;
        for (r = 0; r < o; r += 1)
            if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
        return !0
    }

    function Pt(r, o, i) {
        var a, s;
        return function() {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return a ? Mt(a, t) || (i && i(s), e = r.apply(this, t), o && o(e, s) || (s = e)) : s = r.apply(this, t), a = t, s
        }
    }

    function It(n, r, o) {
        var i, a, s = this;
        return function(e) {
            var t;
            return i ? dt(i, e) || (o && o(a), t = n.call(s, e), r && r(t, a) || (a = t)) : a = n.call(s, e), i = e, a
        }
    }
    var Nt = {
            week: 3,
            separator: 0,
            omitZeroMinute: 0,
            meridiem: 0,
            omitCommas: 0
        },
        Ht = {
            timeZoneName: 7,
            era: 6,
            year: 5,
            month: 4,
            day: 2,
            weekday: 2,
            hour: 1,
            minute: 1,
            second: 1
        },
        Ot = /\s*([ap])\.?m\.?/i,
        At = /,/g,
        Ut = /\s+/g,
        Lt = /\u200e/g,
        Wt = /UTC|GMT/,
        Vt = (Ft.prototype.format = function(e, t) {
            return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
        }, Ft.prototype.formatRange = function(e, t, n, r) {
            var o = this.standardDateProps,
                i = this.extendedSettings,
                a = (s = e.marker, l = t.marker, (a = n.calendarSystem).getMarkerYear(s) === a.getMarkerYear(l) ? a.getMarkerMonth(s) === a.getMarkerMonth(l) ? a.getMarkerDay(s) === a.getMarkerDay(l) ? rt(s) === rt(l) ? 0 : 1 : 2 : 4 : 5);
            if (!a) return this.format(e, n);
            var s = a;
            !(1 < a) || "numeric" !== o.year && "2-digit" !== o.year || "numeric" !== o.month && "2-digit" !== o.month || "numeric" !== o.day && "2-digit" !== o.day || (s = 1);
            var l = this.format(e, n),
                a = this.format(t, n);
            if (l === a) return l;
            s = zt(function(e, t) {
                var n, r = {};
                for (n in e) n in Ht && !(Ht[n] <= t) || (r[n] = e[n]);
                return r
            }(o, s), i, n), e = s(e), s = s(t), t = function(e, t, n, r) {
                var o = 0;
                for (; o < e.length;) {
                    var i = e.indexOf(t, o);
                    if (-1 === i) break;
                    var a = e.substr(0, i);
                    o = i + t.length;
                    for (var s = e.substr(o), l = 0; l < n.length;) {
                        var u = n.indexOf(r, l);
                        if (-1 === u) break;
                        var c = n.substr(0, u);
                        l = u + r.length;
                        u = n.substr(l);
                        if (a === c && s === u) return {
                            before: a,
                            after: s
                        }
                    }
                }
                return null
            }(l, e, a, s), n = i.separator || r || n.defaultSeparator || "";
            return t ? t.before + e + n + s + t.after : l + n + a
        }, Ft.prototype.getLargestUnit = function() {
            switch (this.severity) {
                case 7:
                case 6:
                case 5:
                    return "year";
                case 4:
                    return "month";
                case 3:
                    return "week";
                case 2:
                    return "day";
                default:
                    return "time"
            }
        }, Ft);

    function Ft(e) {
        var t, n = {},
            r = {},
            o = 0;
        for (t in e) t in Nt ? (r[t] = e[t], o = Math.max(Nt[t], o)) : (n[t] = e[t], t in Ht && (o = Math.max(Ht[t], o)));
        this.standardDateProps = n, this.extendedSettings = r, this.severity = o, this.buildFormattingFunc = Pt(zt)
    }

    function zt(e, t, n) {
        var r = Object.keys(e).length;
        return 1 === r && "short" === e.timeZoneName ? function(e) {
            return xt(e.timeZoneOffset)
        } : 0 === r && t.week ? function(e) {
            return function(e, t, n, r) {
                var o = [];
                "narrow" === r ? o.push(t) : "short" === r && o.push(t, " ");
                o.push(n.simpleNumberFormat.format(e)), "rtl" === n.options.direction && o.reverse();
                return o.join("")
            }(n.computeWeekNumber(e.marker), n.weekText, n.locale, t.week)
        } : function(r, o, i) {
            r = P({}, r), o = P({}, o),
                function(e, t) {
                    e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit"));
                    "long" === e.timeZoneName && (e.timeZoneName = "short");
                    t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
                }(r, o), r.timeZone = "UTC";
            var a, s = new Intl.DateTimeFormat(i.locale.codes, r); {
                var e;
                o.omitZeroMinute && (delete(e = P({}, r)).minute, a = new Intl.DateTimeFormat(i.locale.codes, e))
            }
            return function(e) {
                var t = e.marker,
                    n = a && !t.getUTCMinutes() ? a : s;
                return function(e, t, n, r, o) {
                    e = e.replace(Lt, ""), "short" === n.timeZoneName && (e = function(e, t) {
                        var n = !1;
                        e = e.replace(Wt, function() {
                            return n = !0, t
                        }), n || (e += " " + t);
                        return e
                    }(e, "UTC" === o.timeZone || null == t.timeZoneOffset ? "UTC" : xt(t.timeZoneOffset)));
                    r.omitCommas && (e = e.replace(At, "").trim());
                    r.omitZeroMinute && (e = e.replace(":00", ""));
                    !1 === r.meridiem ? e = e.replace(Ot, "").trim() : "narrow" === r.meridiem ? e = e.replace(Ot, function(e, t) {
                        return t.toLocaleLowerCase()
                    }) : "short" === r.meridiem ? e = e.replace(Ot, function(e, t) {
                        return t.toLocaleLowerCase() + "m"
                    }) : "lowercase" === r.meridiem && (e = e.replace(Ot, function(e) {
                        return e.toLocaleLowerCase()
                    }));
                    return e = (e = e.replace(Ut, " ")).trim()
                }(n.format(t), e, r, o, i)
            }
        }(e, t, n)
    }

    function Bt(e, t) {
        t = t.markerToArray(e.marker);
        return {
            marker: e.marker,
            timeZoneOffset: e.timeZoneOffset,
            array: t,
            year: t[0],
            month: t[1],
            day: t[2],
            hour: t[3],
            minute: t[4],
            second: t[5],
            millisecond: t[6]
        }
    }

    function jt(e, t, n, r) {
        e = Bt(e, n.calendarSystem);
        return {
            date: e,
            start: e,
            end: t ? Bt(t, n.calendarSystem) : null,
            timeZone: n.timeZone,
            localeCodes: n.locale.codes,
            defaultSeparator: r || n.defaultSeparator
        }
    }
    var Gt = (qt.prototype.format = function(e, t, n) {
        return t.cmdFormatter(this.cmdStr, jt(e, null, t, n))
    }, qt.prototype.formatRange = function(e, t, n, r) {
        return n.cmdFormatter(this.cmdStr, jt(e, t, n, r))
    }, qt);

    function qt(e) {
        this.cmdStr = e
    }
    var Yt = (Zt.prototype.format = function(e, t, n) {
        return this.func(jt(e, null, t, n))
    }, Zt.prototype.formatRange = function(e, t, n, r) {
        return this.func(jt(e, t, n, r))
    }, Zt);

    function Zt(e) {
        this.func = e
    }

    function Xt(e) {
        return "object" == typeof e && e ? new Vt(e) : "string" == typeof e ? new Gt(e) : "function" == typeof e ? new Yt(e) : null
    }
    var Kt = {
            navLinkDayClick: an,
            navLinkWeekClick: an,
            duration: yt,
            bootstrapFontAwesome: an,
            buttonIcons: an,
            customButtons: an,
            defaultAllDayEventDuration: yt,
            defaultTimedEventDuration: yt,
            nextDayThreshold: yt,
            scrollTime: yt,
            scrollTimeReset: Boolean,
            slotMinTime: yt,
            slotMaxTime: yt,
            dayPopoverFormat: Xt,
            slotDuration: yt,
            snapDuration: yt,
            headerToolbar: an,
            footerToolbar: an,
            defaultRangeSeparator: String,
            titleRangeSeparator: String,
            forceEventDuration: Boolean,
            dayHeaders: Boolean,
            dayHeaderFormat: Xt,
            dayHeaderClassNames: an,
            dayHeaderContent: an,
            dayHeaderDidMount: an,
            dayHeaderWillUnmount: an,
            dayCellClassNames: an,
            dayCellContent: an,
            dayCellDidMount: an,
            dayCellWillUnmount: an,
            initialView: String,
            aspectRatio: Number,
            weekends: Boolean,
            weekNumberCalculation: an,
            weekNumbers: Boolean,
            weekNumberClassNames: an,
            weekNumberContent: an,
            weekNumberDidMount: an,
            weekNumberWillUnmount: an,
            editable: Boolean,
            viewClassNames: an,
            viewDidMount: an,
            viewWillUnmount: an,
            nowIndicator: Boolean,
            nowIndicatorClassNames: an,
            nowIndicatorContent: an,
            nowIndicatorDidMount: an,
            nowIndicatorWillUnmount: an,
            showNonCurrentDates: Boolean,
            lazyFetching: Boolean,
            startParam: String,
            endParam: String,
            timeZoneParam: String,
            timeZone: String,
            locales: an,
            locale: an,
            themeSystem: String,
            dragRevertDuration: Number,
            dragScroll: Boolean,
            allDayMaintainDuration: Boolean,
            unselectAuto: Boolean,
            dropAccept: an,
            eventOrder: Ne,
            eventOrderStrict: Boolean,
            handleWindowResize: Boolean,
            windowResizeDelay: Number,
            longPressDelay: Number,
            eventDragMinDistance: Number,
            expandRows: Boolean,
            height: an,
            contentHeight: an,
            direction: String,
            weekNumberFormat: Xt,
            eventResizableFromStart: Boolean,
            displayEventTime: Boolean,
            displayEventEnd: Boolean,
            weekText: String,
            progressiveEventRendering: Boolean,
            businessHours: an,
            initialDate: an,
            now: an,
            eventDataTransform: an,
            stickyHeaderDates: an,
            stickyFooterScrollbar: an,
            viewHeight: an,
            defaultAllDay: Boolean,
            eventSourceFailure: an,
            eventSourceSuccess: an,
            eventDisplay: String,
            eventStartEditable: Boolean,
            eventDurationEditable: Boolean,
            eventOverlap: an,
            eventConstraint: an,
            eventAllow: an,
            eventBackgroundColor: String,
            eventBorderColor: String,
            eventTextColor: String,
            eventColor: String,
            eventClassNames: an,
            eventContent: an,
            eventDidMount: an,
            eventWillUnmount: an,
            selectConstraint: an,
            selectOverlap: an,
            selectAllow: an,
            droppable: Boolean,
            unselectCancel: String,
            slotLabelFormat: an,
            slotLaneClassNames: an,
            slotLaneContent: an,
            slotLaneDidMount: an,
            slotLaneWillUnmount: an,
            slotLabelClassNames: an,
            slotLabelContent: an,
            slotLabelDidMount: an,
            slotLabelWillUnmount: an,
            dayMaxEvents: an,
            dayMaxEventRows: an,
            dayMinWidth: Number,
            slotLabelInterval: yt,
            allDayText: String,
            allDayClassNames: an,
            allDayContent: an,
            allDayDidMount: an,
            allDayWillUnmount: an,
            slotMinWidth: Number,
            navLinks: Boolean,
            eventTimeFormat: Xt,
            rerenderDelay: Number,
            moreLinkText: an,
            selectMinDistance: Number,
            selectable: Boolean,
            selectLongPressDelay: Number,
            eventLongPressDelay: Number,
            selectMirror: Boolean,
            eventMaxStack: Number,
            eventMinHeight: Number,
            eventMinWidth: Number,
            eventShortHeight: Number,
            slotEventOverlap: Boolean,
            plugins: an,
            firstDay: Number,
            dayCount: Number,
            dateAlignment: String,
            dateIncrement: yt,
            hiddenDays: an,
            monthMode: Boolean,
            fixedWeekCount: Boolean,
            validRange: an,
            visibleRange: an,
            titleFormat: an,
            noEventsText: String,
            moreLinkClick: an,
            moreLinkClassNames: an,
            moreLinkContent: an,
            moreLinkDidMount: an,
            moreLinkWillUnmount: an
        },
        $t = {
            eventDisplay: "auto",
            defaultRangeSeparator: " - ",
            titleRangeSeparator: " – ",
            defaultTimedEventDuration: "01:00:00",
            defaultAllDayEventDuration: {
                day: 1
            },
            forceEventDuration: !1,
            nextDayThreshold: "00:00:00",
            dayHeaders: !0,
            initialView: "",
            aspectRatio: 1.35,
            headerToolbar: {
                start: "title",
                center: "",
                end: "today prev,next"
            },
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: "local",
            editable: !1,
            nowIndicator: !1,
            scrollTime: "06:00:00",
            scrollTimeReset: !0,
            slotMinTime: "00:00:00",
            slotMaxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timeZoneParam: "timeZone",
            timeZone: "local",
            locales: [],
            locale: "",
            themeSystem: "standard",
            dragRevertDuration: 500,
            dragScroll: !0,
            allDayMaintainDuration: !1,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "start,-duration,allDay,title",
            dayPopoverFormat: {
                month: "long",
                day: "numeric",
                year: "numeric"
            },
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3,
            eventDragMinDistance: 5,
            expandRows: !1,
            navLinks: !1,
            selectable: !1,
            eventMinHeight: 15,
            eventMinWidth: 30,
            eventShortHeight: 30
        },
        Jt = {
            datesSet: an,
            eventsSet: an,
            eventAdd: an,
            eventChange: an,
            eventRemove: an,
            windowResize: an,
            eventClick: an,
            eventMouseEnter: an,
            eventMouseLeave: an,
            select: an,
            unselect: an,
            loading: an,
            _unmount: an,
            _beforeprint: an,
            _afterprint: an,
            _noEventDrop: an,
            _noEventResize: an,
            _resize: an,
            _scrollRequest: an
        },
        Qt = {
            buttonText: an,
            views: an,
            plugins: an,
            initialEvents: an,
            events: an,
            eventSources: an
        },
        en = {
            headerToolbar: tn,
            footerToolbar: tn,
            buttonText: tn,
            buttonIcons: tn
        };

    function tn(e, t) {
        return "object" == typeof e && "object" == typeof t && e && t ? dt(e, t) : e === t
    }
    var nn = {
        type: String,
        component: an,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: an,
        usesMinMaxTime: Boolean,
        classNames: an,
        content: an,
        didMount: an,
        willUnmount: an
    };

    function rn(e) {
        return at(e, en)
    }

    function on(e, t) {
        var n, r = {},
            o = {};
        for (n in t) n in e && (r[n] = t[n](e[n]));
        for (n in e) n in t || (o[n] = e[n]);
        return {
            refined: r,
            extra: o
        }
    }

    function an(e) {
        return e
    }

    function sn(e, t, n, r) {
        for (var o = cn(), i = wn(n), a = 0, s = e; a < s.length; a++) {
            var l = bn(s[a], t, n, r, i);
            l && ln(l, o)
        }
        return o
    }

    function ln(e, t) {
        return (t = void 0 === t ? cn() : t).defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t
    }

    function un(e, t) {
        t = e.instances[t];
        if (t) {
            var n = e.defs[t.defId],
                e = pn(e, function(e) {
                    return t = n, e = e, Boolean(t.groupId && t.groupId === e.groupId);
                    var t
                });
            return e.defs[n.defId] = n, e.instances[t.instanceId] = t, e
        }
        return cn()
    }

    function cn() {
        return {
            defs: {},
            instances: {}
        }
    }

    function dn(e, t) {
        return {
            defs: P(P({}, e.defs), t.defs),
            instances: P(P({}, e.instances), t.instances)
        }
    }

    function pn(e, t) {
        var n = st(e.defs, t),
            e = st(e.instances, function(e) {
                return n[e.defId]
            });
        return {
            defs: n,
            instances: e
        }
    }

    function fn(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : []
    }
    var hn = {
            display: String,
            editable: Boolean,
            startEditable: Boolean,
            durationEditable: Boolean,
            constraint: an,
            overlap: an,
            allow: an,
            className: fn,
            classNames: fn,
            color: String,
            backgroundColor: String,
            borderColor: String,
            textColor: String
        },
        gn = {
            display: null,
            startEditable: null,
            durationEditable: null,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: []
        };

    function vn(e, t) {
        var n, n = (n = e.constraint, t = t, Array.isArray(n) ? sn(n, null, t, !0) : "object" == typeof n && n ? sn([n], null, t, !0) : null != n ? String(n) : null);
        return {
            display: e.display || null,
            startEditable: null != e.startEditable ? e.startEditable : e.editable,
            durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
            constraints: null != n ? [n] : [],
            overlap: null != e.overlap ? e.overlap : null,
            allows: null != e.allow ? [e.allow] : [],
            backgroundColor: e.backgroundColor || e.color || "",
            borderColor: e.borderColor || e.color || "",
            textColor: e.textColor || "",
            classNames: (e.className || []).concat(e.classNames || [])
        }
    }

    function mn(e) {
        return e.reduce(yn, gn)
    }

    function yn(e, t) {
        return {
            display: (null != t.display ? t : e).display,
            startEditable: (null != t.startEditable ? t : e).startEditable,
            durationEditable: (null != t.durationEditable ? t : e).durationEditable,
            constraints: e.constraints.concat(t.constraints),
            overlap: ("boolean" == typeof t.overlap ? t : e).overlap,
            allows: e.allows.concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e.classNames.concat(t.classNames)
        }
    }
    var En = {
            id: String,
            groupId: String,
            title: String,
            url: String
        },
        Sn = {
            start: an,
            end: an,
            date: an,
            allDay: Boolean
        },
        Dn = P(P(P({}, En), Sn), {
            extendedProps: an
        });

    function bn(e, t, n, r, o) {
        var i = Cn(e, n, o = void 0 === o ? wn(n) : o),
            a = i.refined,
            e = i.extra,
            o = function(e, t) {
                var n = null;
                e && (n = e.defaultAllDay);
                null == n && (n = t.options.defaultAllDay);
                return n
            }(t, n),
            i = function(e, t, n, r) {
                for (var o = 0; o < r.length; o += 1) {
                    var i = r[o].parse(e, n);
                    if (i) {
                        var a = e.allDay;
                        return {
                            allDay: a = null == a && null == (a = t) && null == (a = i.allDayGuess) ? !1 : a,
                            duration: i.duration,
                            typeData: i.typeData,
                            typeId: o
                        }
                    }
                }
                return null
            }(a, o, n.dateEnv, n.pluginHooks.recurringTypes);
        if (i) return (s = Rn(a, e, t ? t.sourceId : "", i.allDay, Boolean(i.duration), n)).recurringDef = {
            typeId: i.typeId,
            typeData: i.typeData,
            duration: i.duration
        }, {
            def: s,
            instance: null
        };
        var s, r = function(e, t, n, r) {
            var o, i = e.allDay,
                a = null,
                s = !1,
                l = null,
                u = null != e.start ? e.start : e.date;
            if (u = n.dateEnv.createMarkerMeta(u)) a = u.marker;
            else if (!r) return null;
            null != e.end && (o = n.dateEnv.createMarkerMeta(e.end));
            null == i && (i = null != t ? t : (!u || u.isTimeUnspecified) && (!o || o.isTimeUnspecified));
            i && a && (a = Ke(a));
            o && (l = o.marker, i && (l = Ke(l)), a && l <= a && (l = null));
            l ? s = !0 : r || (s = n.options.forceEventDuration || !1, l = n.dateEnv.add(a, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration));
            return {
                allDay: i,
                hasEnd: s,
                range: {
                    start: a,
                    end: l
                },
                forcedStartTzo: u ? u.forcedTzo : null,
                forcedEndTzo: o ? o.forcedTzo : null
            }
        }(a, o, n, r);
        return r ? {
            def: s = Rn(a, e, t ? t.sourceId : "", r.allDay, r.hasEnd, n),
            instance: ot(s.defId, r.range, r.forcedStartTzo, r.forcedEndTzo)
        } : null
    }

    function Cn(e, t, n) {
        return on(e, n = void 0 === n ? wn(t) : n)
    }

    function wn(e) {
        return P(P(P({}, hn), Dn), e.pluginHooks.eventRefiners)
    }

    function Rn(e, t, n, r, o, i) {
        for (var a = {
                title: e.title || "",
                groupId: e.groupId || "",
                publicId: e.id || "",
                url: e.url || "",
                recurringDef: null,
                defId: Te(),
                sourceId: n,
                allDay: r,
                hasEnd: o,
                ui: vn(e, i),
                extendedProps: P(P({}, e.extendedProps || {}), t)
            }, s = 0, l = i.pluginHooks.eventDefMemberAdders; s < l.length; s++) {
            var u = l[s];
            P(a, u(e))
        }
        return Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a
    }

    function Tn(e) {
        var t = Math.floor(qe(e.start, e.end)) || 1,
            e = Ke(e.start);
        return {
            start: e,
            end: Be(e, t)
        }
    }

    function _n(e, t) {
        void 0 === t && (t = yt(0));
        var n, r = null,
            o = null;
        return e.end && (o = Ke(e.end), (n = e.end.valueOf() - o.valueOf()) && n >= Ct(t) && (o = Be(o, 1))), e.start && (r = Ke(e.start), o && o <= r && (o = Be(r, 1))), {
            start: r,
            end: o
        }
    }

    function kn(e) {
        e = _n(e);
        return 1 < qe(e.start, e.end)
    }

    function xn(e, t, n, r) {
        return "year" === r ? yt(n.diffWholeYears(e, t), "year") : "month" === r ? yt(n.diffWholeMonths(e, t), "month") : Ye(e, t)
    }

    function Mn(e, t) {
        var n, r, o = [],
            i = t.start;
        for (e.sort(Pn), n = 0; n < e.length; n += 1)(r = e[n]).start > i && o.push({
            start: i,
            end: r.start
        }), r.end > i && (i = r.end);
        return i < t.end && o.push({
            start: i,
            end: t.end
        }), o
    }

    function Pn(e, t) {
        return e.start.valueOf() - t.start.valueOf()
    }

    function In(e, t) {
        var n = e.start,
            r = e.end,
            e = null;
        return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), e = null === n || null === r || n < r ? {
            start: n,
            end: r
        } : e
    }

    function Nn(e, t) {
        return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf())
    }

    function Hn(e, t) {
        return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
    }

    function On(e, t) {
        return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end)
    }

    function An(e, t) {
        return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
    }

    function Un(e, t, n, r) {
        var o, i, a, s = {},
            l = {},
            u = {},
            c = [],
            d = [],
            p = Fn(e.defs, t);
        for (a in e.defs) "inverse-background" === (h = p[(E = e.defs[a]).defId]).display && (E.groupId ? (s[E.groupId] = [], u[E.groupId] || (u[E.groupId] = E)) : l[a] = []);
        for (o in e.instances) {
            var f = e.instances[o],
                h = p[(E = e.defs[f.defId]).defId],
                g = f.range,
                v = !E.allDay && r ? _n(g, r) : g,
                g = In(v, n);
            g && ("inverse-background" === h.display ? (E.groupId ? s[E.groupId] : l[f.defId]).push(g) : "none" !== h.display && ("background" === h.display ? c : d).push({
                def: E,
                ui: h,
                instance: f,
                range: g,
                isStart: v.start && v.start.valueOf() === g.start.valueOf(),
                isEnd: v.end && v.end.valueOf() === g.end.valueOf()
            }))
        }
        for (i in s)
            for (var m = 0, y = Mn(s[i], n); m < y.length; m++) {
                var E, S = y[m],
                    h = p[(E = u[i]).defId];
                c.push({
                    def: E,
                    ui: h,
                    instance: null,
                    range: S,
                    isStart: !1,
                    isEnd: !1
                })
            }
        for (a in l)
            for (var D = 0, b = Mn(l[a], n); D < b.length; D++) {
                S = b[D];
                c.push({
                    def: e.defs[a],
                    ui: p[a],
                    instance: null,
                    range: S,
                    isStart: !1,
                    isEnd: !1
                })
            }
        return {
            bg: c,
            fg: d
        }
    }

    function Ln(e) {
        return "background" === e.ui.display || "inverse-background" === e.ui.display
    }

    function Wn(e, t) {
        e.fcSeg = t
    }

    function Vn(e) {
        return e.fcSeg || e.parentNode.fcSeg || null
    }

    function Fn(e, t) {
        return lt(e, function(e) {
            return zn(e, t)
        })
    }

    function zn(e, t) {
        var n = [];
        return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), mn(n)
    }

    function Bn(e, n) {
        e = e.map(jn);
        return e.sort(function(e, t) {
            return He(e, t, n)
        }), e.map(function(e) {
            return e._seg
        })
    }

    function jn(e) {
        var t = e.eventRange,
            n = t.def,
            r = (t.instance || t).range,
            t = r.start ? r.start.valueOf() : 0,
            r = r.end ? r.end.valueOf() : 0;
        return P(P(P({}, n.extendedProps), n), {
            id: n.publicId,
            start: t,
            end: r,
            duration: r - t,
            allDay: Number(n.allDay),
            _seg: e
        })
    }

    function Gn(e, t) {
        for (var n = t.pluginHooks.isDraggableTransformers, e = e.eventRange, r = e.def, o = e.ui, i = o.startEditable, a = 0, s = n; a < s.length; a++) i = (0, s[a])(i, r, o, t);
        return i
    }

    function qn(e, t) {
        return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart
    }

    function Yn(e, t) {
        return e.isEnd && e.eventRange.ui.durationEditable
    }

    function Zn(e, t, n, r, o, i, a) {
        var s = n.dateEnv,
            l = n.options,
            u = l.displayEventTime,
            c = l.displayEventEnd,
            d = e.eventRange.def,
            p = e.eventRange.instance;
        null == u && (u = !1 !== r), null == c && (c = !1 !== o);
        var f = p.range.start,
            n = p.range.end,
            l = i || e.start || e.eventRange.range.start,
            r = a || e.end || e.eventRange.range.end,
            o = Ke(f).valueOf() === Ke(l).valueOf(),
            e = Ke(je(n, -1)).valueOf() === Ke(je(r, -1)).valueOf();
        return u && !d.allDay && (o || e) ? (l = o ? f : l, r = e ? n : r, c && d.hasEnd ? s.formatRange(l, r, t, {
            forcedStartTzo: i ? null : p.forcedStartTzo,
            forcedEndTzo: a ? null : p.forcedEndTzo
        }) : s.format(l, t, {
            forcedTzo: i ? null : p.forcedStartTzo
        })) : ""
    }

    function Xn(e, t, n) {
        e = e.eventRange.range;
        return {
            isPast: e.end < (n || t.start),
            isFuture: e.start >= (n || t.end),
            isToday: t && An(t, e.start)
        }
    }

    function Kn(e) {
        var t = ["fc-event"];
        return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t
    }

    function $n(e) {
        return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString()
    }
    var Jn = {
        start: an,
        end: an,
        allDay: Boolean
    };

    function Qn(e, t, n) {
        var r = function(e, t) {
                var n = on(e, Jn),
                    r = n.refined,
                    e = n.extra,
                    n = r.start ? t.createMarkerMeta(r.start) : null,
                    t = r.end ? t.createMarkerMeta(r.end) : null,
                    r = r.allDay;
                null == r && (r = n && n.isTimeUnspecified && (!t || t.isTimeUnspecified));
                return P({
                    range: {
                        start: n ? n.marker : null,
                        end: t ? t.marker : null
                    },
                    allDay: r
                }, e)
            }(e, t),
            e = r.range;
        if (!e.start) return null;
        if (!e.end) {
            if (null == n) return null;
            e.end = t.add(e.start, n)
        }
        return r
    }

    function er(e, t) {
        return Nn(e.range, t.range) && e.allDay === t.allDay && function(e, t) {
            for (var n in t)
                if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
            for (var n in e)
                if (!(n in t)) return !1;
            return !0
        }(e, t)
    }

    function tr(e, t, n) {
        return P(P({}, nr(e, t, n)), {
            timeZone: t.timeZone
        })
    }

    function nr(e, t, n) {
        return {
            start: t.toDate(e.start),
            end: t.toDate(e.end),
            startStr: t.formatIso(e.start, {
                omitTime: n
            }),
            endStr: t.formatIso(e.end, {
                omitTime: n
            })
        }
    }

    function rr(e, t, n) {
        n.emitter.trigger("select", P(P({}, or(e, n)), {
            jsEvent: t ? t.origEvent : null,
            view: n.viewApi || n.calendarApi.view
        }))
    }

    function or(e, t) {
        for (var n, r, o = {}, i = 0, a = t.pluginHooks.dateSpanTransforms; i < a.length; i++) {
            var s = a[i];
            P(o, s(e, t))
        }
        return P(o, (n = e, r = t.dateEnv, P(P({}, nr(n.range, r, n.allDay)), {
            allDay: n.allDay
        }))), o
    }

    function ir(e, t, n) {
        var r = n.dateEnv,
            n = n.options,
            t = t;
        return t = e ? (t = Ke(t), r.add(t, n.defaultAllDayEventDuration)) : r.add(t, n.defaultTimedEventDuration)
    }

    function ar(e, t, n, r) {
        var o, i, a = Fn(e.defs, t),
            s = cn();
        for (o in e.defs) {
            var l = e.defs[o];
            s.defs[o] = function(e, t, n, r) {
                var o = n.standardProps || {};
                null == o.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (o.hasEnd = !0);
                var i = P(P(P({}, e), o), {
                    ui: P(P({}, e.ui), o.ui)
                });
                n.extendedProps && (i.extendedProps = P(P({}, i.extendedProps), n.extendedProps));
                for (var a = 0, s = r.pluginHooks.eventDefMutationAppliers; a < s.length; a++)(0, s[a])(i, n, r);
                !i.hasEnd && r.options.forceEventDuration && (i.hasEnd = !0);
                return i
            }(l, a[o], n, r)
        }
        for (i in e.instances) {
            var u = e.instances[i],
                l = s.defs[u.defId];
            s.instances[i] = function(e, t, n, r, o) {
                var i = o.dateEnv,
                    a = r.standardProps && !0 === r.standardProps.allDay,
                    s = r.standardProps && !1 === r.standardProps.hasEnd,
                    e = P({}, e);
                a && (e.range = Tn(e.range));
                r.datesDelta && n.startEditable && (e.range = {
                    start: i.add(e.range.start, r.datesDelta),
                    end: i.add(e.range.end, r.datesDelta)
                });
                r.startDelta && n.durationEditable && (e.range = {
                    start: i.add(e.range.start, r.startDelta),
                    end: e.range.end
                });
                r.endDelta && n.durationEditable && (e.range = {
                    start: e.range.start,
                    end: i.add(e.range.end, r.endDelta)
                });
                s && (e.range = {
                    start: e.range.start,
                    end: ir(t.allDay, e.range.start, o)
                });
                t.allDay && (e.range = {
                    start: Ke(e.range.start),
                    end: Ke(e.range.end)
                });
                e.range.end < e.range.start && (e.range.end = ir(t.allDay, e.range.start, o));
                return e
            }(u, l, a[u.defId], n, r)
        }
        return s
    }
    var sr = (Object.defineProperty(lr.prototype, "calendar", {
        get: function() {
            return this.getCurrentData().calendarApi
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(lr.prototype, "title", {
        get: function() {
            return this.getCurrentData().viewTitle
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(lr.prototype, "activeStart", {
        get: function() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(lr.prototype, "activeEnd", {
        get: function() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(lr.prototype, "currentStart", {
        get: function() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(lr.prototype, "currentEnd", {
        get: function() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
        },
        enumerable: !1,
        configurable: !0
    }), lr.prototype.getOption = function(e) {
        return this.getCurrentData().options[e]
    }, lr);

    function lr(e, t, n) {
        this.type = e, this.getCurrentData = t, this.dateEnv = n
    }
    var ur = {
        id: String,
        defaultAllDay: Boolean,
        url: String,
        format: String,
        events: an,
        eventDataTransform: an,
        success: an,
        failure: an
    };

    function cr(e, t, n) {
        if (void 0 === n && (n = dr(t)), "string" == typeof e ? o = {
                url: e
            } : "function" == typeof e || Array.isArray(e) ? o = {
                events: e
            } : "object" == typeof e && e && (o = e), o) {
            var r = on(o, n),
                o = r.refined,
                n = r.extra,
                r = function(e, t) {
                    for (var n = t.pluginHooks.eventSourceDefs, r = n.length - 1; 0 <= r; --r) {
                        var o = n[r].parseMeta(e);
                        if (o) return {
                            sourceDefId: r,
                            meta: o
                        }
                    }
                    return null
                }(o, t);
            if (r) return {
                _raw: e,
                isFetching: !1,
                latestFetchId: "",
                fetchRange: null,
                defaultAllDay: o.defaultAllDay,
                eventDataTransform: o.eventDataTransform,
                success: o.success,
                failure: o.failure,
                publicId: o.id || "",
                sourceId: Te(),
                sourceDefId: r.sourceDefId,
                meta: r.meta,
                ui: vn(o, t),
                extendedProps: n
            }
        }
        return null
    }

    function dr(e) {
        return P(P(P({}, hn), ur), e.pluginHooks.eventSourceRefiners)
    }

    function pr(e, t) {
        return null == (e = "function" == typeof e ? e() : e) ? t.createNowMarker() : t.createMarker(e)
    }
    var fr = (hr.prototype.getCurrentData = function() {
        return this.currentDataManager.getCurrentData()
    }, hr.prototype.dispatch = function(e) {
        return this.currentDataManager.dispatch(e)
    }, Object.defineProperty(hr.prototype, "view", {
        get: function() {
            return this.getCurrentData().viewApi
        },
        enumerable: !1,
        configurable: !0
    }), hr.prototype.batchRendering = function(e) {
        e()
    }, hr.prototype.updateSize = function() {
        this.trigger("_resize", !0)
    }, hr.prototype.setOption = function(e, t) {
        this.dispatch({
            type: "SET_OPTION",
            optionName: e,
            rawOptionValue: t
        })
    }, hr.prototype.getOption = function(e) {
        return this.currentDataManager.currentCalendarOptionsInput[e]
    }, hr.prototype.getAvailableLocaleCodes = function() {
        return Object.keys(this.getCurrentData().availableRawLocales)
    }, hr.prototype.on = function(e, t) {
        var n = this.currentDataManager;
        n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '" + e + "'")
    }, hr.prototype.off = function(e, t) {
        this.currentDataManager.emitter.off(e, t)
    }, hr.prototype.trigger = function(e) {
        for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        (t = this.currentDataManager.emitter).trigger.apply(t, f([e], n))
    }, hr.prototype.changeView = function(t, n) {
        var r = this;
        this.batchRendering(function() {
            var e;
            r.unselect(), n ? n.start && n.end ? (r.dispatch({
                type: "CHANGE_VIEW_TYPE",
                viewType: t
            }), r.dispatch({
                type: "SET_OPTION",
                optionName: "visibleRange",
                rawOptionValue: n
            })) : (e = r.getCurrentData().dateEnv, r.dispatch({
                type: "CHANGE_VIEW_TYPE",
                viewType: t,
                dateMarker: e.createMarker(n)
            })) : r.dispatch({
                type: "CHANGE_VIEW_TYPE",
                viewType: t
            })
        })
    }, hr.prototype.zoomTo = function(e, t) {
        t = this.getCurrentData().viewSpecs[t = t || "day"] || this.getUnitViewSpec(t);
        this.unselect(), t ? this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: t.type,
            dateMarker: e
        }) : this.dispatch({
            type: "CHANGE_DATE",
            dateMarker: e
        })
    }, hr.prototype.getUnitViewSpec = function(e) {
        var t, n, r, o = this.getCurrentData(),
            i = o.viewSpecs,
            o = o.toolbarConfig,
            a = [].concat(o.viewsWithButtons);
        for (r in i) a.push(r);
        for (t = 0; t < a.length; t += 1)
            if ((n = i[a[t]]) && n.singleUnit === e) return n;
        return null
    }, hr.prototype.prev = function() {
        this.unselect(), this.dispatch({
            type: "PREV"
        })
    }, hr.prototype.next = function() {
        this.unselect(), this.dispatch({
            type: "NEXT"
        })
    }, hr.prototype.prevYear = function() {
        var e = this.getCurrentData();
        this.unselect(), this.dispatch({
            type: "CHANGE_DATE",
            dateMarker: e.dateEnv.addYears(e.currentDate, -1)
        })
    }, hr.prototype.nextYear = function() {
        var e = this.getCurrentData();
        this.unselect(), this.dispatch({
            type: "CHANGE_DATE",
            dateMarker: e.dateEnv.addYears(e.currentDate, 1)
        })
    }, hr.prototype.today = function() {
        var e = this.getCurrentData();
        this.unselect(), this.dispatch({
            type: "CHANGE_DATE",
            dateMarker: pr(e.calendarOptions.now, e.dateEnv)
        })
    }, hr.prototype.gotoDate = function(e) {
        var t = this.getCurrentData();
        this.unselect(), this.dispatch({
            type: "CHANGE_DATE",
            dateMarker: t.dateEnv.createMarker(e)
        })
    }, hr.prototype.incrementDate = function(e) {
        var t = this.getCurrentData(),
            e = yt(e);
        e && (this.unselect(), this.dispatch({
            type: "CHANGE_DATE",
            dateMarker: t.dateEnv.add(t.currentDate, e)
        }))
    }, hr.prototype.getDate = function() {
        var e = this.getCurrentData();
        return e.dateEnv.toDate(e.currentDate)
    }, hr.prototype.formatDate = function(e, t) {
        var n = this.getCurrentData().dateEnv;
        return n.format(n.createMarker(e), Xt(t))
    }, hr.prototype.formatRange = function(e, t, n) {
        var r = this.getCurrentData().dateEnv;
        return r.formatRange(r.createMarker(e), r.createMarker(t), Xt(n), n)
    }, hr.prototype.formatIso = function(e, t) {
        var n = this.getCurrentData().dateEnv;
        return n.formatIso(n.createMarker(e), {
            omitTime: t
        })
    }, hr.prototype.select = function(e, t) {
        e = null == t ? null != e.start ? e : {
            start: e,
            end: null
        } : {
            start: e,
            end: t
        }, t = this.getCurrentData(), e = Qn(e, t.dateEnv, yt({
            days: 1
        }));
        e && (this.dispatch({
            type: "SELECT_DATES",
            selection: e
        }), rr(e, null, t))
    }, hr.prototype.unselect = function(e) {
        var t = this.getCurrentData();
        t.dateSelection && (this.dispatch({
            type: "UNSELECT_DATES"
        }), e = e, (t = t).emitter.trigger("unselect", {
            jsEvent: e ? e.origEvent : null,
            view: t.viewApi || t.calendarApi.view
        }))
    }, hr.prototype.addEvent = function(e, t) {
        if (e instanceof gr) {
            var n = e._def,
                r = e._instance;
            return this.getCurrentData().eventStore.defs[n.defId] || (this.dispatch({
                type: "ADD_EVENTS",
                eventStore: ln({
                    def: n,
                    instance: r
                })
            }), this.triggerEventAdd(e)), e
        }
        n = this.getCurrentData();
        if (t instanceof de) o = t.internalEventSource;
        else if ("boolean" == typeof t) t && (o = ct(n.eventSources)[0]);
        else if (null != t) {
            r = this.getEventSourceById(t);
            if (!r) return console.warn('Could not find an event source with ID "' + t + '"'), null;
            o = r.internalEventSource
        }
        var o = bn(e, o, n, !1);
        if (o) {
            n = new gr(n, o.def, o.def.recurringDef ? null : o.instance);
            return this.dispatch({
                type: "ADD_EVENTS",
                eventStore: ln(o)
            }), this.triggerEventAdd(n), n
        }
        return null
    }, hr.prototype.triggerEventAdd = function(e) {
        var t = this;
        this.getCurrentData().emitter.trigger("eventAdd", {
            event: e,
            relatedEvents: [],
            revert: function() {
                t.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: mr(e)
                })
            }
        })
    }, hr.prototype.getEventById = function(e) {
        var t, n = this.getCurrentData(),
            r = n.eventStore,
            o = r.defs,
            i = r.instances;
        for (t in e = String(e), o) {
            var a = o[t];
            if (a.publicId === e) {
                if (a.recurringDef) return new gr(n, a, null);
                for (var s in i) {
                    s = i[s];
                    if (s.defId === a.defId) return new gr(n, a, s)
                }
            }
        }
        return null
    }, hr.prototype.getEvents = function() {
        var e = this.getCurrentData();
        return yr(e.eventStore, e)
    }, hr.prototype.removeAllEvents = function() {
        this.dispatch({
            type: "REMOVE_ALL_EVENTS"
        })
    }, hr.prototype.getEventSources = function() {
        var e, t = this.getCurrentData(),
            n = t.eventSources,
            r = [];
        for (e in n) r.push(new de(t, n[e]));
        return r
    }, hr.prototype.getEventSourceById = function(e) {
        var t, n = this.getCurrentData(),
            r = n.eventSources;
        for (t in e = String(e), r)
            if (r[t].publicId === e) return new de(n, r[t]);
        return null
    }, hr.prototype.addEventSource = function(e) {
        var t = this.getCurrentData();
        if (e instanceof de) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
            type: "ADD_EVENT_SOURCES",
            sources: [e.internalEventSource]
        }), e;
        e = cr(e, t);
        return e ? (this.dispatch({
            type: "ADD_EVENT_SOURCES",
            sources: [e]
        }), new de(t, e)) : null
    }, hr.prototype.removeAllEventSources = function() {
        this.dispatch({
            type: "REMOVE_ALL_EVENT_SOURCES"
        })
    }, hr.prototype.refetchEvents = function() {
        this.dispatch({
            type: "FETCH_EVENT_SOURCES",
            isRefetch: !0
        })
    }, hr.prototype.scrollToTime = function(e) {
        e = yt(e);
        e && this.trigger("_scrollRequest", {
            time: e
        })
    }, hr);

    function hr() {}
    var gr = (vr.prototype.setProp = function(e, t) {
        var n, r;
        e in Sn ? console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.") : "id" === e ? (t = En[e](t), this.mutate({
            standardProps: {
                publicId: t
            }
        })) : e in En ? (t = En[e](t), this.mutate({
            standardProps: ((n = {})[e] = t, n)
        })) : e in hn ? (r = hn[e](t), r = "color" === e ? {
            backgroundColor: t,
            borderColor: t
        } : "editable" === e ? {
            startEditable: t,
            durationEditable: t
        } : ((n = {})[e] = t, n), this.mutate({
            standardProps: {
                ui: r
            }
        })) : console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.")
    }, vr.prototype.setExtendedProp = function(e, t) {
        var n;
        this.mutate({
            extendedProps: ((n = {})[e] = t, n)
        })
    }, vr.prototype.setStart = function(e, t) {
        void 0 === t && (t = {});
        var n = this._context.dateEnv,
            e = n.createMarker(e);
        e && this._instance && (n = xn(this._instance.range.start, e, n, t.granularity), t.maintainDuration ? this.mutate({
            datesDelta: n
        }) : this.mutate({
            startDelta: n
        }))
    }, vr.prototype.setEnd = function(e, t) {
        void 0 === t && (t = {});
        var n, r = this._context.dateEnv;
        (null == e || (n = r.createMarker(e))) && this._instance && (n ? (t = xn(this._instance.range.end, n, r, t.granularity), this.mutate({
            endDelta: t
        })) : this.mutate({
            standardProps: {
                hasEnd: !1
            }
        }))
    }, vr.prototype.setDates = function(e, t, n) {
        var r, o = this._context.dateEnv,
            i = {
                allDay: (n = void 0 === n ? {} : n).allDay
            },
            e = o.createMarker(e);
        e && (null == t || (r = o.createMarker(t))) && this._instance && (t = this._instance.range, e = xn((t = !0 === n.allDay ? Tn(t) : t).start, e, o, n.granularity), r ? (r = xn(t.end, r, o, n.granularity), o = r, (n = e).years === o.years && n.months === o.months && n.days === o.days && n.milliseconds === o.milliseconds ? this.mutate({
            datesDelta: e,
            standardProps: i
        }) : this.mutate({
            startDelta: e,
            endDelta: r,
            standardProps: i
        })) : (i.hasEnd = !1, this.mutate({
            datesDelta: e,
            standardProps: i
        })))
    }, vr.prototype.moveStart = function(e) {
        e = yt(e);
        e && this.mutate({
            startDelta: e
        })
    }, vr.prototype.moveEnd = function(e) {
        e = yt(e);
        e && this.mutate({
            endDelta: e
        })
    }, vr.prototype.moveDates = function(e) {
        e = yt(e);
        e && this.mutate({
            datesDelta: e
        })
    }, vr.prototype.setAllDay = function(e, t) {
        var n = {
                allDay: e
            },
            t = (t = void 0 === t ? {} : t).maintainDuration;
        null == t && (t = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = t), this.mutate({
            standardProps: n
        })
    }, vr.prototype.formatRange = function(e) {
        var t = this._context.dateEnv,
            n = this._instance,
            e = Xt(e);
        return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, e, {
            forcedStartTzo: n.forcedStartTzo,
            forcedEndTzo: n.forcedEndTzo
        }) : t.format(n.range.start, e, {
            forcedTzo: n.forcedStartTzo
        })
    }, vr.prototype.mutate = function(e) {
        var t, n, r, o, i = this._instance;
        i && (t = this._def, n = this._context, o = ar(o = un(r = n.getCurrentData().eventStore, i.instanceId), {
            "": {
                display: "",
                startEditable: !0,
                durationEditable: !0,
                constraints: [],
                overlap: null,
                allows: [],
                backgroundColor: "",
                borderColor: "",
                textColor: "",
                classNames: []
            }
        }, e, n), e = new vr(n, t, i), this._def = o.defs[t.defId], this._instance = o.instances[i.instanceId], n.dispatch({
            type: "MERGE_EVENTS",
            eventStore: o
        }), n.emitter.trigger("eventChange", {
            oldEvent: e,
            event: this,
            relatedEvents: yr(o, n, i),
            revert: function() {
                n.dispatch({
                    type: "RESET_EVENTS",
                    eventStore: r
                })
            }
        }))
    }, vr.prototype.remove = function() {
        var e = this._context,
            t = mr(this);
        e.dispatch({
            type: "REMOVE_EVENTS",
            eventStore: t
        }), e.emitter.trigger("eventRemove", {
            event: this,
            relatedEvents: [],
            revert: function() {
                e.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: t
                })
            }
        })
    }, Object.defineProperty(vr.prototype, "source", {
        get: function() {
            var e = this._def.sourceId;
            return e ? new de(this._context, this._context.getCurrentData().eventSources[e]) : null
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "start", {
        get: function() {
            return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "end", {
        get: function() {
            return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "startStr", {
        get: function() {
            var e = this._instance;
            return e ? this._context.dateEnv.formatIso(e.range.start, {
                omitTime: this._def.allDay,
                forcedTzo: e.forcedStartTzo
            }) : ""
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "endStr", {
        get: function() {
            var e = this._instance;
            return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
                omitTime: this._def.allDay,
                forcedTzo: e.forcedEndTzo
            }) : ""
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "id", {
        get: function() {
            return this._def.publicId
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "groupId", {
        get: function() {
            return this._def.groupId
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "allDay", {
        get: function() {
            return this._def.allDay
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "title", {
        get: function() {
            return this._def.title
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "url", {
        get: function() {
            return this._def.url
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "display", {
        get: function() {
            return this._def.ui.display || "auto"
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "startEditable", {
        get: function() {
            return this._def.ui.startEditable
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "durationEditable", {
        get: function() {
            return this._def.ui.durationEditable
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "constraint", {
        get: function() {
            return this._def.ui.constraints[0] || null
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "overlap", {
        get: function() {
            return this._def.ui.overlap
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "allow", {
        get: function() {
            return this._def.ui.allows[0] || null
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "backgroundColor", {
        get: function() {
            return this._def.ui.backgroundColor
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "borderColor", {
        get: function() {
            return this._def.ui.borderColor
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "textColor", {
        get: function() {
            return this._def.ui.textColor
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "classNames", {
        get: function() {
            return this._def.ui.classNames
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(vr.prototype, "extendedProps", {
        get: function() {
            return this._def.extendedProps
        },
        enumerable: !1,
        configurable: !0
    }), vr.prototype.toPlainObject = function(e) {
        void 0 === e && (e = {});
        var t = this._def,
            n = t.ui,
            r = this.startStr,
            o = this.endStr,
            i = {};
        return t.title && (i.title = t.title), r && (i.start = r), o && (i.end = o), t.publicId && (i.id = t.publicId), t.groupId && (i.groupId = t.groupId), t.url && (i.url = t.url), n.display && "auto" !== n.display && (i.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? i.color = n.backgroundColor : (n.backgroundColor && (i.backgroundColor = n.backgroundColor), n.borderColor && (i.borderColor = n.borderColor)), n.textColor && (i.textColor = n.textColor), n.classNames.length && (i.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? P(i, t.extendedProps) : i.extendedProps = t.extendedProps), i
    }, vr.prototype.toJSON = function() {
        return this.toPlainObject()
    }, vr);

    function vr(e, t, n) {
        this._context = e, this._def = t, this._instance = n || null
    }

    function mr(e) {
        var t = e._def,
            n = e._instance;
        return {
            defs: ((e = {})[t.defId] = t, e),
            instances: n ? ((e = {})[n.instanceId] = n, e) : {}
        }
    }

    function yr(e, t, n) {
        var r, o = e.defs,
            i = e.instances,
            a = [],
            s = n ? n.instanceId : "";
        for (r in i) {
            var l = i[r],
                u = o[l.defId];
            l.instanceId !== s && a.push(new gr(t, u, l))
        }
        return a
    }
    var Er = {};
    var Sr = (Dr.prototype.getMarkerYear = function(e) {
        return e.getUTCFullYear()
    }, Dr.prototype.getMarkerMonth = function(e) {
        return e.getUTCMonth()
    }, Dr.prototype.getMarkerDay = function(e) {
        return e.getUTCDate()
    }, Dr.prototype.arrayToMarker = tt, Dr.prototype.markerToArray = et, Dr);

    function Dr() {}
    Er["gregory"] = Sr;
    var br = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

    function Cr(e) {
        var t = br.exec(e);
        if (t) {
            var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));
            if (nt(n)) {
                e = null;
                return t[13] && (e = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
                    marker: n,
                    isTimeUnspecified: !t[6],
                    timeZoneOffset: e
                }
            }
        }
        return null
    }
    var wr = (Rr.prototype.createMarker = function(e) {
        e = this.createMarkerMeta(e);
        return null === e ? null : e.marker
    }, Rr.prototype.createNowMarker = function() {
        return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : tt(Je(new Date))
    }, Rr.prototype.createMarkerMeta = function(e) {
        if ("string" == typeof e) return this.parse(e);
        var t = null;
        return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = tt(e)), null !== t && nt(t) ? {
            marker: t,
            isTimeUnspecified: !1,
            forcedTzo: null
        } : null
    }, Rr.prototype.parse = function(e) {
        var t = Cr(e);
        if (null === t) return null;
        var n = t.marker,
            e = null;
        return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : e = t.timeZoneOffset), {
            marker: n,
            isTimeUnspecified: t.isTimeUnspecified,
            forcedTzo: e
        }
    }, Rr.prototype.getYear = function(e) {
        return this.calendarSystem.getMarkerYear(e)
    }, Rr.prototype.getMonth = function(e) {
        return this.calendarSystem.getMarkerMonth(e)
    }, Rr.prototype.add = function(e, t) {
        e = this.calendarSystem.markerToArray(e);
        return e[0] += t.years, e[1] += t.months, e[2] += t.days, e[6] += t.milliseconds, this.calendarSystem.arrayToMarker(e)
    }, Rr.prototype.subtract = function(e, t) {
        e = this.calendarSystem.markerToArray(e);
        return e[0] -= t.years, e[1] -= t.months, e[2] -= t.days, e[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(e)
    }, Rr.prototype.addYears = function(e, t) {
        e = this.calendarSystem.markerToArray(e);
        return e[0] += t, this.calendarSystem.arrayToMarker(e)
    }, Rr.prototype.addMonths = function(e, t) {
        e = this.calendarSystem.markerToArray(e);
        return e[1] += t, this.calendarSystem.arrayToMarker(e)
    }, Rr.prototype.diffWholeYears = function(e, t) {
        var n = this.calendarSystem;
        return rt(e) === rt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null
    }, Rr.prototype.diffWholeMonths = function(e, t) {
        var n = this.calendarSystem;
        return rt(e) === rt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null
    }, Rr.prototype.greatestWholeUnit = function(e, t) {
        var n, r = this.diffWholeYears(e, t);
        return null !== r ? {
            unit: "year",
            value: r
        } : null !== (r = this.diffWholeMonths(e, t)) ? {
            unit: "month",
            value: r
        } : null !== (r = Ze(e, t)) ? {
            unit: "week",
            value: r
        } : null !== (r = Xe(e, t)) ? {
            unit: "day",
            value: r
        } : (n = e, We(r = (t.valueOf() - n.valueOf()) / 36e5) ? {
            unit: "hour",
            value: r
        } : (n = e, We(r = (t.valueOf() - n.valueOf()) / 6e4) ? {
            unit: "minute",
            value: r
        } : (n = e, We(r = (t.valueOf() - n.valueOf()) / 1e3) ? {
            unit: "second",
            value: r
        } : {
            unit: "millisecond",
            value: t.valueOf() - e.valueOf()
        })))
    }, Rr.prototype.countDurationsBetween = function(e, t, n) {
        var r;
        return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / (bt(n) / 365) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / (bt(n) / 30) : n.days && null !== (r = Xe(e, t)) ? r / bt(n) : (t.valueOf() - e.valueOf()) / Ct(n)
    }, Rr.prototype.startOf = function(e, t) {
        return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? Ke(e) : "hour" === t ? tt([(n = e).getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours()]) : "minute" === t ? tt([(n = e).getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes()]) : "second" === t ? tt([(e = e).getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()]) : null;
        var n
    }, Rr.prototype.startOfYear = function(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
    }, Rr.prototype.startOfMonth = function(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
    }, Rr.prototype.startOfWeek = function(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
    }, Rr.prototype.computeWeekNumber = function(e) {
        return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : (t = e, n = this.weekDow, r = this.weekDoy, o = t.getUTCFullYear(), (e = $e(t, o, n, r)) < 1 ? $e(t, o - 1, n, r) : 1 <= (r = $e(t, o + 1, n, r)) ? Math.min(e, r) : e);
        var t, n, r, o
    }, Rr.prototype.format = function(e, t, n) {
        return t.format({
            marker: e,
            timeZoneOffset: null != (n = void 0 === n ? {} : n).forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
        }, this)
    }, Rr.prototype.formatRange = function(e, t, n, r) {
        return (r = void 0 === r ? {} : r).isEndExclusive && (t = je(t, -1)), n.formatRange({
            marker: e,
            timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
        }, {
            marker: t,
            timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
        }, this, r.defaultSeparator)
    }, Rr.prototype.formatIso = function(e, t) {
        var n = null;
        return Tt(e, n = !(t = void 0 === t ? {} : t).omitTimeZoneOffset ? null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e) : n, t.omitTime)
    }, Rr.prototype.timestampToMarker = function(e) {
        return "local" === this.timeZone ? tt(Je(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? tt(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e)
    }, Rr.prototype.offsetForMarker = function(e) {
        return "local" === this.timeZone ? -Qe(et(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(et(e)) : null
    }, Rr.prototype.toDate = function(e, t) {
        return "local" === this.timeZone ? Qe(et(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(et(e)) * 60) : new Date(e.valueOf() - (t || 0))
    }, Rr);

    function Rr(e) {
        var t = this.timeZone = e.timeZone,
            n = "local" !== t && "UTC" !== t;
        e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = (n = e.calendarSystem, new Er[n]), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = (null != e.weekText ? e : e.locale.options).weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator
    }
    var Tr = [],
        _r = {
            code: "en",
            week: {
                dow: 0,
                doy: 4
            },
            direction: "ltr",
            buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "today",
                month: "month",
                week: "week",
                day: "day",
                list: "list"
            },
            weekText: "W",
            allDayText: "all-day",
            moreLinkText: "more",
            noEventsText: "No events to display"
        };

    function kr(e) {
        for (var t = 0 < e.length ? e[0].code : "en", e = Tr.concat(e), n = {
                en: _r
            }, r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            n[i.code] = i
        }
        return {
            map: n,
            defaultCode: t
        }
    }

    function xr(e, t) {
        return "object" != typeof e || Array.isArray(e) ? (r = t, t = [].concat((n = e) || []), r = function(e, t) {
            for (var n = 0; n < e.length; n += 1)
                for (var r = e[n].toLocaleLowerCase().split("-"), o = r.length; 0 < o; --o) {
                    var i = r.slice(0, o).join("-");
                    if (t[i]) return t[i]
                }
            return null
        }(t, r) || _r, Mr(n, t, r)) : Mr(e.code, [e.code], e);
        var n, r
    }

    function Mr(e, t, n) {
        var r = at([_r, n], ["buttonText"]);
        delete r.code;
        n = r.week;
        return delete r.week, {
            codeArg: e,
            codes: t,
            week: n,
            simpleNumberFormat: new Intl.NumberFormat(e),
            options: r
        }
    }

    function Pr(e) {
        var t = xr(e.locale || "en", kr([]).map);
        return new wr(P(P({
            timeZone: $t.timeZone,
            calendarSystem: "gregory"
        }, e), {
            locale: t
        }))
    }
    var Ir, Nr = {
        startTime: "09:00",
        endTime: "17:00",
        daysOfWeek: [1, 2, 3, 4, 5],
        display: "inverse-background",
        classNames: "fc-non-business",
        groupId: "_businessHours"
    };

    function Hr(e, t) {
        return sn(function(e) {
            e = !0 === e ? [{}] : Array.isArray(e) ? e.filter(function(e) {
                return e.daysOfWeek
            }) : "object" == typeof e && e ? [e] : [];
            return e = e.map(function(e) {
                return P(P({}, Nr), e)
            })
        }(e), null, t)
    }

    function Or(e, t) {
        return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
    }

    function Ar(e, t) {
        t = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom)
        };
        return t.left < t.right && t.top < t.bottom && t
    }

    function Ur(e, t) {
        return {
            left: Math.min(Math.max(e.left, t.left), t.right),
            top: Math.min(Math.max(e.top, t.top), t.bottom)
        }
    }

    function Lr(e) {
        return {
            left: (e.left + e.right) / 2,
            top: (e.top + e.bottom) / 2
        }
    }

    function Wr(e, t) {
        return {
            left: e.left - t.left,
            top: e.top - t.top
        }
    }

    function Vr() {
        return Ir = null == Ir ? function() {
            if ("undefined" == typeof document) return !0;
            var e = document.createElement("div");
            e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
            var t = 0 < e.querySelector("div").offsetHeight;
            return document.body.removeChild(e), t
        }() : Ir
    }
    var Fr = cn(),
        zr = (Br.prototype.splitProps = function(e) {
            var t, n = this,
                r = this.getKeyInfo(e),
                o = this.getKeysForEventDefs(e.eventStore),
                i = this.splitDateSelection(e.dateSelection),
                a = this.splitIndividualUi(e.eventUiBases, o),
                s = this.splitEventStore(e.eventStore, o),
                l = this.splitEventDrag(e.eventDrag),
                u = this.splitEventResize(e.eventResize),
                c = {};
            for (t in this.eventUiBuilders = lt(r, function(e, t) {
                    return n.eventUiBuilders[t] || Pt(jr)
                }), r) {
                var d = r[t],
                    p = s[t] || Fr,
                    f = this.eventUiBuilders[t];
                c[t] = {
                    businessHours: d.businessHours || e.businessHours,
                    dateSelection: i[t] || null,
                    eventStore: p,
                    eventUiBases: f(e.eventUiBases[""], d.ui, a[t]),
                    eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "",
                    eventDrag: l[t] || null,
                    eventResize: u[t] || null
                }
            }
            return c
        }, Br.prototype._splitDateSpan = function(e) {
            var t = {};
            if (e)
                for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) t[r[n]] = e;
            return t
        }, Br.prototype._getKeysForEventDefs = function(e) {
            var t = this;
            return lt(e.defs, function(e) {
                return t.getKeysForEventDef(e)
            })
        }, Br.prototype._splitEventStore = function(e, t) {
            var n, r, o = e.defs,
                i = e.instances,
                a = {};
            for (n in o)
                for (var s = 0, l = t[n]; s < l.length; s++) a[u = l[s]] || (a[u] = cn()), a[u].defs[n] = o[n];
            for (r in i)
                for (var u, c = i[r], d = 0, p = t[c.defId]; d < p.length; d++) a[u = p[d]] && (a[u].instances[r] = c);
            return a
        }, Br.prototype._splitIndividualUi = function(e, t) {
            var n, r = {};
            for (n in e)
                if (n)
                    for (var o = 0, i = t[n]; o < i.length; o++) {
                        var a = i[o];
                        r[a] || (r[a] = {}), r[a][n] = e[n]
                    }
            return r
        }, Br.prototype._splitInteraction = function(t) {
            var n = {};
            if (t) {
                var e, r = this._splitEventStore(t.affectedEvents, this._getKeysForEventDefs(t.affectedEvents)),
                    o = this._getKeysForEventDefs(t.mutatedEvents),
                    i = this._splitEventStore(t.mutatedEvents, o),
                    a = function(e) {
                        n[e] || (n[e] = {
                            affectedEvents: r[e] || Fr,
                            mutatedEvents: i[e] || Fr,
                            isEvent: t.isEvent
                        })
                    };
                for (e in r) a(e);
                for (e in i) a(e)
            }
            return n
        }, Br);

    function Br() {
        this.getKeysForEventDefs = Pt(this._getKeysForEventDefs), this.splitDateSelection = Pt(this._splitDateSpan), this.splitEventStore = Pt(this._splitEventStore), this.splitIndividualUi = Pt(this._splitIndividualUi), this.splitEventDrag = Pt(this._splitInteraction), this.splitEventResize = Pt(this._splitInteraction), this.eventUiBuilders = {}
    }

    function jr(e, t, n) {
        var r = [];
        e && r.push(e), t && r.push(t);
        r = {
            "": mn(r)
        };
        return n && P(r, n), r
    }

    function Gr(e, t, n, r) {
        return {
            dow: e.getUTCDay(),
            isDisabled: Boolean(r && !An(r.activeRange, e)),
            isOther: Boolean(r && !An(r.currentRange, e)),
            isToday: Boolean(t && An(t, e)),
            isPast: Boolean(n ? e < n : !!t && e < t.start),
            isFuture: Boolean(n ? n < e : !!t && e >= t.end)
        }
    }

    function qr(e, t) {
        var n = ["fc-day", "fc-day-" + Fe[e.dow]];
        return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n
    }

    function Yr(e, t) {
        return void 0 === t && (t = "day"), JSON.stringify({
            date: _t(e),
            type: t
        })
    }
    var Zr, Xr = null;

    function Kr() {
        return Xr = null === Xr ? function() {
            var e = document.createElement("div");
            ye(e, {
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }), e.innerHTML = "<div></div>", document.body.appendChild(e);
            var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
            return fe(e), t
        }() : Xr
    }

    function $r() {
        return Zr = Zr || function() {
            var e = document.createElement("div");
            e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
            var t = Jr(e);
            return document.body.removeChild(e), t
        }()
    }

    function Jr(e) {
        return {
            x: e.offsetHeight - e.clientHeight,
            y: e.offsetWidth - e.clientWidth
        }
    }

    function Qr(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e),
            r = parseInt(n.borderLeftWidth, 10) || 0,
            o = parseInt(n.borderRightWidth, 10) || 0,
            i = parseInt(n.borderTopWidth, 10) || 0,
            a = parseInt(n.borderBottomWidth, 10) || 0,
            s = Jr(e),
            e = s.y - r - o,
            a = {
                borderLeft: r,
                borderRight: o,
                borderTop: i,
                borderBottom: a,
                scrollbarBottom: s.x - i - a,
                scrollbarLeft: 0,
                scrollbarRight: 0
            };
        return Kr() && "rtl" === n.direction ? a.scrollbarLeft = e : a.scrollbarRight = e, t && (a.paddingLeft = parseInt(n.paddingLeft, 10) || 0, a.paddingRight = parseInt(n.paddingRight, 10) || 0, a.paddingTop = parseInt(n.paddingTop, 10) || 0, a.paddingBottom = parseInt(n.paddingBottom, 10) || 0), a
    }

    function eo(e, t, n) {
        void 0 === t && (t = !1);
        n = n ? e.getBoundingClientRect() : to(e), e = Qr(e, t), n = {
            left: n.left + e.borderLeft + e.scrollbarLeft,
            right: n.right - e.borderRight - e.scrollbarRight,
            top: n.top + e.borderTop,
            bottom: n.bottom - e.borderBottom - e.scrollbarBottom
        };
        return t && (n.left += e.paddingLeft, n.right -= e.paddingRight, n.top += e.paddingTop, n.bottom -= e.paddingBottom), n
    }

    function to(e) {
        e = e.getBoundingClientRect();
        return {
            left: e.left + window.pageXOffset,
            top: e.top + window.pageYOffset,
            right: e.right + window.pageXOffset,
            bottom: e.bottom + window.pageYOffset
        }
    }

    function no(e) {
        for (var t = []; e instanceof HTMLElement;) {
            var n = window.getComputedStyle(e);
            if ("fixed" === n.position) break;
            /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode
        }
        return t
    }

    function ro(e, t, n) {
        function r() {
            i || (i = !0, t.apply(this, arguments))
        }

        function o() {
            i || (i = !0, n && n.apply(this, arguments))
        }
        var i = !1,
            e = e(r, o);
        e && "function" == typeof e.then && e.then(r, o)
    }
    var oo = (io.prototype.setThisContext = function(e) {
        this.thisContext = e
    }, io.prototype.setOptions = function(e) {
        this.options = e
    }, io.prototype.on = function(e, t) {
        var n;
        n = this.handlers, t = t, (n[e = e] || (n[e] = [])).push(t)
    }, io.prototype.off = function(e, t) {
        var n, r;
        n = this.handlers, e = e, (r = t) ? n[e] && (n[e] = n[e].filter(function(e) {
            return e !== r
        })) : delete n[e]
    }, io.prototype.trigger = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = this.handlers[e] || [], e = this.options && this.options[e], o = 0, i = [].concat(e || [], r); o < i.length; o++) i[o].apply(this.thisContext, t)
    }, io.prototype.hasHandlers = function(e) {
        return this.handlers[e] && this.handlers[e].length || this.options && this.options[e]
    }, io);

    function io() {
        this.handlers = {}, this.thisContext = null
    }
    var ao = (so.prototype.buildElHorizontals = function(e) {
        for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
            var i = o[r].getBoundingClientRect();
            t.push(i.left - e), n.push(i.right - e)
        }
        this.lefts = t, this.rights = n
    }, so.prototype.buildElVerticals = function(e) {
        for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
            var i = o[r].getBoundingClientRect();
            t.push(i.top - e), n.push(i.bottom - e)
        }
        this.tops = t, this.bottoms = n
    }, so.prototype.leftToIndex = function(e) {
        for (var t = this.lefts, n = this.rights, r = t.length, o = 0; o < r; o += 1)
            if (e >= t[o] && e < n[o]) return o
    }, so.prototype.topToIndex = function(e) {
        for (var t = this.tops, n = this.bottoms, r = t.length, o = 0; o < r; o += 1)
            if (e >= t[o] && e < n[o]) return o
    }, so.prototype.getWidth = function(e) {
        return this.rights[e] - this.lefts[e]
    }, so.prototype.getHeight = function(e) {
        return this.bottoms[e] - this.tops[e]
    }, so);

    function so(e, t, n, r) {
        this.els = t;
        e = this.originClientRect = e.getBoundingClientRect();
        n && this.buildElHorizontals(e.left), r && this.buildElVerticals(e.top)
    }
    var lo = (uo.prototype.getMaxScrollTop = function() {
        return this.getScrollHeight() - this.getClientHeight()
    }, uo.prototype.getMaxScrollLeft = function() {
        return this.getScrollWidth() - this.getClientWidth()
    }, uo.prototype.canScrollVertically = function() {
        return 0 < this.getMaxScrollTop()
    }, uo.prototype.canScrollHorizontally = function() {
        return 0 < this.getMaxScrollLeft()
    }, uo.prototype.canScrollUp = function() {
        return 0 < this.getScrollTop()
    }, uo.prototype.canScrollDown = function() {
        return this.getScrollTop() < this.getMaxScrollTop()
    }, uo.prototype.canScrollLeft = function() {
        return 0 < this.getScrollLeft()
    }, uo.prototype.canScrollRight = function() {
        return this.getScrollLeft() < this.getMaxScrollLeft()
    }, uo);

    function uo() {}
    var co, po = (t(fo, co = lo), fo.prototype.getScrollTop = function() {
        return this.el.scrollTop
    }, fo.prototype.getScrollLeft = function() {
        return this.el.scrollLeft
    }, fo.prototype.setScrollTop = function(e) {
        this.el.scrollTop = e
    }, fo.prototype.setScrollLeft = function(e) {
        this.el.scrollLeft = e
    }, fo.prototype.getScrollWidth = function() {
        return this.el.scrollWidth
    }, fo.prototype.getScrollHeight = function() {
        return this.el.scrollHeight
    }, fo.prototype.getClientHeight = function() {
        return this.el.clientHeight
    }, fo.prototype.getClientWidth = function() {
        return this.el.clientWidth
    }, fo);

    function fo(e) {
        var t = co.call(this) || this;
        return t.el = e, t
    }
    var ho, go = (t(vo, ho = lo), vo.prototype.getScrollTop = function() {
        return window.pageYOffset
    }, vo.prototype.getScrollLeft = function() {
        return window.pageXOffset
    }, vo.prototype.setScrollTop = function(e) {
        window.scroll(window.pageXOffset, e)
    }, vo.prototype.setScrollLeft = function(e) {
        window.scroll(e, window.pageYOffset)
    }, vo.prototype.getScrollWidth = function() {
        return document.documentElement.scrollWidth
    }, vo.prototype.getScrollHeight = function() {
        return document.documentElement.scrollHeight
    }, vo.prototype.getClientHeight = function() {
        return document.documentElement.clientHeight
    }, vo.prototype.getClientWidth = function() {
        return document.documentElement.clientWidth
    }, vo);

    function vo() {
        return null !== ho && ho.apply(this, arguments) || this
    }
    var mo = (yo.prototype.setIconOverride = function(e) {
        var t, n;
        if ("object" == typeof e && e) {
            for (n in t = P({}, this.iconClasses), e) t[n] = this.applyIconOverridePrefix(e[n]);
            this.iconClasses = t
        } else !1 === e && (this.iconClasses = {})
    }, yo.prototype.applyIconOverridePrefix = function(e) {
        var t = this.iconOverridePrefix;
        return e = t && 0 !== e.indexOf(t) ? t + e : e
    }, yo.prototype.getClass = function(e) {
        return this.classes[e] || ""
    }, yo.prototype.getIconClass = function(e, t) {
        e = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e];
        return e ? this.baseIconClass + " " + e : ""
    }, yo.prototype.getCustomButtonIconClass = function(e) {
        var t;
        return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : ""
    }, yo);

    function yo(e) {
        this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
    }
    if (mo.prototype.classes = {}, mo.prototype.iconClasses = {}, mo.prototype.baseIconClass = "", mo.prototype.iconOverridePrefix = "", "undefined" == typeof FullCalendarVDom) throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
    var Eo = FullCalendarVDom.Component,
        So = FullCalendarVDom.createElement,
        Do = FullCalendarVDom.render,
        bo = FullCalendarVDom.createRef,
        Co = FullCalendarVDom.Fragment,
        wo = FullCalendarVDom.createContext,
        Ro = FullCalendarVDom.createPortal,
        To = FullCalendarVDom.flushToDom,
        _o = FullCalendarVDom.unmountComponentAtNode,
        ko = (xo.prototype.detach = function() {
            this.emitter.off("_scrollRequest", this.handleScrollRequest)
        }, xo.prototype.update = function(e) {
            e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain()
        }, xo.prototype.fireInitialScroll = function() {
            this.handleScrollRequest({
                time: this.scrollTime
            })
        }, xo.prototype.drain = function() {
            this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
        }, xo);

    function xo(e, t, n, r) {
        var o = this;
        this.execFunc = e, this.emitter = t, this.scrollTime = n, this.scrollTimeReset = r, this.handleScrollRequest = function(e) {
            o.queuedRequest = P({}, o.queuedRequest || {}, e), o.drain()
        }, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll()
    }
    var Mo = wo({});

    function Po(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function(e) {
                u.on("_resize", e)
            },
            removeResizeHandler: function(e) {
                u.off("_resize", e)
            },
            createScrollResponder: function(e) {
                return new ko(e, u, yt(n.scrollTime), n.scrollTimeReset)
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p
        }
    }
    var Io, No = (t(Ho, Io = Eo), Ho.prototype.shouldComponentUpdate = function(e, t) {
        return this.debug && console.log(pt(e, this.props), pt(t, this.state)), !ft(this.props, e, this.propEquality) || !ft(this.state, t, this.stateEquality)
    }, Ho.addPropsEquality = Lo, Ho.addStateEquality = Wo, Ho.contextType = Mo, Ho);

    function Ho() {
        return null !== Io && Io.apply(this, arguments) || this
    }
    No.prototype.propEquality = {}, No.prototype.stateEquality = {};
    var Oo, Ao = (t(Uo, Oo = No), Uo.contextType = Mo, Uo);

    function Uo() {
        return null !== Oo && Oo.apply(this, arguments) || this
    }

    function Lo(e) {
        var t = Object.create(this.prototype.propEquality);
        P(t, e), this.prototype.propEquality = t
    }

    function Wo(e) {
        var t = Object.create(this.prototype.stateEquality);
        P(t, e), this.prototype.stateEquality = t
    }

    function Vo(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t)
    }
    var Fo, zo = (t(Bo, Fo = Ao), Bo.prototype.prepareHits = function() {}, Bo.prototype.queryHit = function(e, t, n, r) {
        return null
    }, Bo.prototype.isValidSegDownEl = function(e) {
        return !this.props.eventDrag && !this.props.eventResize && !he(e, ".fc-event-mirror")
    }, Bo.prototype.isValidDateDownEl = function(e) {
        return !(he(e, ".fc-event:not(.fc-bg-event)") || he(e, ".fc-more-link") || he(e, "a[data-navlink]") || he(e, ".fc-popover"))
    }, Bo);

    function Bo() {
        var e = null !== Fo && Fo.apply(this, arguments) || this;
        return e.uid = Te(), e
    }

    function jo(e) {
        return {
            id: Te(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            isLoadingFuncs: e.isLoadingFuncs || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {}
        }
    }

    function Go(e, t) {
        var i = {},
            a = {
                reducers: [],
                isLoadingFuncs: [],
                contextInit: [],
                eventRefiners: {},
                eventDefMemberAdders: [],
                eventSourceRefiners: {},
                isDraggableTransformers: [],
                eventDragMutationMassagers: [],
                eventDefMutationAppliers: [],
                dateSelectionTransformers: [],
                datePointTransforms: [],
                dateSpanTransforms: [],
                views: {},
                viewPropsTransformers: [],
                isPropsValid: null,
                externalDefTransforms: [],
                viewContainerAppends: [],
                eventDropTransformers: [],
                componentInteractions: [],
                calendarInteractions: [],
                themeClasses: {},
                eventSourceDefs: [],
                cmdFormatter: null,
                recurringTypes: [],
                namedTimeZonedImpl: null,
                initialView: "",
                elementDraggingImpl: null,
                optionChangeHandlers: {},
                scrollGridImpl: null,
                contentTypeHandlers: {},
                listenerRefiners: {},
                optionRefiners: {},
                propSetHandlers: {}
            };

        function s(e) {
            for (var t, n = 0, r = e; n < r.length; n++) {
                var o = r[n];
                i[o.id] || (i[o.id] = !0, s(o.deps), t = o, a = {
                    reducers: (o = a).reducers.concat(t.reducers),
                    isLoadingFuncs: o.isLoadingFuncs.concat(t.isLoadingFuncs),
                    contextInit: o.contextInit.concat(t.contextInit),
                    eventRefiners: P(P({}, o.eventRefiners), t.eventRefiners),
                    eventDefMemberAdders: o.eventDefMemberAdders.concat(t.eventDefMemberAdders),
                    eventSourceRefiners: P(P({}, o.eventSourceRefiners), t.eventSourceRefiners),
                    isDraggableTransformers: o.isDraggableTransformers.concat(t.isDraggableTransformers),
                    eventDragMutationMassagers: o.eventDragMutationMassagers.concat(t.eventDragMutationMassagers),
                    eventDefMutationAppliers: o.eventDefMutationAppliers.concat(t.eventDefMutationAppliers),
                    dateSelectionTransformers: o.dateSelectionTransformers.concat(t.dateSelectionTransformers),
                    datePointTransforms: o.datePointTransforms.concat(t.datePointTransforms),
                    dateSpanTransforms: o.dateSpanTransforms.concat(t.dateSpanTransforms),
                    views: P(P({}, o.views), t.views),
                    viewPropsTransformers: o.viewPropsTransformers.concat(t.viewPropsTransformers),
                    isPropsValid: t.isPropsValid || o.isPropsValid,
                    externalDefTransforms: o.externalDefTransforms.concat(t.externalDefTransforms),
                    viewContainerAppends: o.viewContainerAppends.concat(t.viewContainerAppends),
                    eventDropTransformers: o.eventDropTransformers.concat(t.eventDropTransformers),
                    calendarInteractions: o.calendarInteractions.concat(t.calendarInteractions),
                    componentInteractions: o.componentInteractions.concat(t.componentInteractions),
                    themeClasses: P(P({}, o.themeClasses), t.themeClasses),
                    eventSourceDefs: o.eventSourceDefs.concat(t.eventSourceDefs),
                    cmdFormatter: t.cmdFormatter || o.cmdFormatter,
                    recurringTypes: o.recurringTypes.concat(t.recurringTypes),
                    namedTimeZonedImpl: t.namedTimeZonedImpl || o.namedTimeZonedImpl,
                    initialView: o.initialView || t.initialView,
                    elementDraggingImpl: o.elementDraggingImpl || t.elementDraggingImpl,
                    optionChangeHandlers: P(P({}, o.optionChangeHandlers), t.optionChangeHandlers),
                    scrollGridImpl: t.scrollGridImpl || o.scrollGridImpl,
                    contentTypeHandlers: P(P({}, o.contentTypeHandlers), t.contentTypeHandlers),
                    listenerRefiners: P(P({}, o.listenerRefiners), t.listenerRefiners),
                    optionRefiners: P(P({}, o.optionRefiners), t.optionRefiners),
                    propSetHandlers: P(P({}, o.propSetHandlers), t.propSetHandlers)
                })
            }
        }
        return e && s(e), s(t), a
    }
    var qo, Yo = (t(Zo, qo = mo), Zo);

    function Zo() {
        return null !== qo && qo.apply(this, arguments) || this
    }

    function Xo(e, t, n, r) {
        if (t[e]) return t[e];
        r = function(e, t, n, r) {
            var o = n[e],
                i = r[e],
                a = function(e) {
                    return o && null !== o[e] ? o[e] : i && null !== i[e] ? i[e] : null
                },
                s = a("component"),
                l = a("superType"),
                a = null;
            if (l) {
                if (l === e) throw new Error("Can't have a custom view type that references itself");
                a = Xo(l, t, n, r)
            }!s && a && (s = a.component);
            return s ? {
                type: e,
                component: s,
                defaults: P(P({}, a ? a.defaults : {}), o ? o.rawOptions : {}),
                overrides: P(P({}, a ? a.overrides : {}), i ? i.rawOptions : {})
            } : null
        }(e, t, n, r);
        return r && (t[e] = r), r
    }
    Yo.prototype.classes = {
        root: "fc-theme-standard",
        tableCellShaded: "fc-cell-shaded",
        buttonGroup: "fc-button-group",
        button: "fc-button fc-button-primary",
        buttonActive: "fc-button-active"
    }, Yo.prototype.baseIconClass = "fc-icon", Yo.prototype.iconClasses = {
        close: "fc-icon-x",
        prev: "fc-icon-chevron-left",
        next: "fc-icon-chevron-right",
        prevYear: "fc-icon-chevrons-left",
        nextYear: "fc-icon-chevrons-right"
    }, Yo.prototype.rtlIconClasses = {
        prev: "fc-icon-chevron-right",
        next: "fc-icon-chevron-left",
        prevYear: "fc-icon-chevrons-right",
        nextYear: "fc-icon-chevrons-left"
    }, Yo.prototype.iconOverrideOption = "buttonIcons", Yo.prototype.iconOverrideCustomButtonOption = "icon", Yo.prototype.iconOverridePrefix = "fc-icon-";
    var Ko, $o = (t(Jo, Ko = Ao), Jo.prototype.render = function() {
        var e = this,
            r = this.props,
            o = r.hookProps;
        return So(ii, {
            hookProps: o,
            didMount: r.didMount,
            willUnmount: r.willUnmount,
            elRef: this.handleRootEl
        }, function(n) {
            return So(ei, {
                hookProps: o,
                content: r.content,
                defaultContent: r.defaultContent,
                backupElRef: e.rootElRef
            }, function(e, t) {
                return r.children(n, li(r.classNames, o), e, t)
            })
        })
    }, Jo);

    function Jo() {
        var t = null !== Ko && Ko.apply(this, arguments) || this;
        return t.rootElRef = bo(), t.handleRootEl = function(e) {
            Vo(t.rootElRef, e), t.props.elRef && Vo(t.props.elRef, e)
        }, t
    }
    var Qo = wo(0);

    function ei(t) {
        return So(Qo.Consumer, null, function(e) {
            return So(ni, P({
                renderId: e
            }, t))
        })
    }
    var ti, ni = (t(ri, ti = Ao), ri.prototype.render = function() {
        return this.props.children(this.innerElRef, this.renderInnerContent())
    }, ri.prototype.componentDidMount = function() {
        this.updateCustomContent()
    }, ri.prototype.componentDidUpdate = function() {
        this.updateCustomContent()
    }, ri.prototype.componentWillUnmount = function() {
        this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy()
    }, ri.prototype.renderInnerContent = function() {
        var e = this.context.pluginHooks.contentTypeHandlers,
            t = this.props,
            n = this.customContentInfo,
            r = ui(t.content, t.hookProps),
            o = null;
        if (void 0 !== (r = void 0 === r ? ui(t.defaultContent, t.hookProps) : r)) {
            if (n) n.contentVal = r[n.contentKey];
            else if ("object" == typeof r)
                for (var i in e)
                    if (void 0 !== r[i]) {
                        var a = e[i](),
                            n = this.customContentInfo = P({
                                contentKey: i,
                                contentVal: r[i]
                            }, a);
                        break
                    } o = n ? [] : r
        }
        return o
    }, ri.prototype.updateCustomContent = function() {
        this.customContentInfo && this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal)
    }, ri);

    function ri() {
        var e = null !== ti && ti.apply(this, arguments) || this;
        return e.innerElRef = bo(), e
    }
    var oi, ii = (t(ai, oi = Ao), ai.prototype.render = function() {
        return this.props.children(this.handleRootEl)
    }, ai.prototype.componentDidMount = function() {
        var e = this.props.didMount;
        e && e(P(P({}, this.props.hookProps), {
            el: this.rootEl
        }))
    }, ai.prototype.componentWillUnmount = function() {
        var e = this.props.willUnmount;
        e && e(P(P({}, this.props.hookProps), {
            el: this.rootEl
        }))
    }, ai);

    function ai() {
        var t = null !== oi && oi.apply(this, arguments) || this;
        return t.handleRootEl = function(e) {
            t.rootEl = e, t.props.elRef && Vo(t.props.elRef, e)
        }, t
    }

    function si() {
        var n, r, o = [];
        return function(e, t) {
            return o = !r || !dt(r, t) || e !== n ? li(n = e, r = t) : o
        }
    }

    function li(e, t) {
        return fn(e = "function" == typeof e ? e(t) : e)
    }

    function ui(e, t) {
        return "function" == typeof e ? e(t, So) : e
    }
    var ci, di = (t(pi, ci = Ao), pi.prototype.render = function() {
        var t = this.props,
            e = this.context,
            n = e.options,
            e = {
                view: e.viewApi
            },
            r = this.normalizeClassNames(n.viewClassNames, e);
        return So(ii, {
            hookProps: e,
            didMount: n.viewDidMount,
            willUnmount: n.viewWillUnmount,
            elRef: t.elRef
        }, function(e) {
            return t.children(e, ["fc-" + t.viewSpec.type + "-view", "fc-view"].concat(r))
        })
    }, pi);

    function pi() {
        var e = null !== ci && ci.apply(this, arguments) || this;
        return e.normalizeClassNames = si(), e
    }

    function fi(e) {
        return lt(e, hi)
    }

    function hi(e) {
        var i, t = "function" == typeof e ? {
                component: e
            } : e,
            e = t.component;
        return t.content && (i = t, e = function(r) {
            return So(Mo.Consumer, null, function(n) {
                return So(di, {
                    viewSpec: n.viewSpec
                }, function(e, o) {
                    var t = P(P({}, r), {
                        nextDayThreshold: n.options.nextDayThreshold
                    });
                    return So($o, {
                        hookProps: t,
                        classNames: i.classNames,
                        content: i.content,
                        didMount: i.didMount,
                        willUnmount: i.willUnmount,
                        elRef: e
                    }, function(e, t, n, r) {
                        return So("div", {
                            className: o.concat(t).join(" "),
                            ref: e
                        }, r)
                    })
                })
            })
        }), {
            superType: t.type,
            component: e,
            rawOptions: t
        }
    }

    function gi(e, t, n, r) {
        var e = fi(e),
            o = fi(t.views);
        return lt(function(e, t) {
            var n, r = {};
            for (n in e) Xo(n, r, e, t);
            for (n in t) Xo(n, r, e, t);
            return r
        }(e, o), function(e) {
            return function(n, e, t, r, o) {
                var i = n.overrides.duration || n.defaults.duration || r.duration || t.duration,
                    a = null,
                    s = "",
                    l = "",
                    u = {};
                i && (a = function(e) {
                    var t = JSON.stringify(e),
                        n = vi[t];
                    void 0 === n && (n = yt(e), vi[t] = n);
                    return n
                }(i)) && (i = Rt(a), s = i.unit, 1 === i.value && (u = e[l = s] ? e[s].rawOptions : {}));
                e = function(e) {
                    var t = e.buttonText || {},
                        e = n.defaults.buttonTextKey;
                    return null != e && null != t[e] ? t[e] : null != t[n.type] ? t[n.type] : null != t[l] ? t[l] : null
                };
                return {
                    type: n.type,
                    component: n.component,
                    duration: a,
                    durationUnit: s,
                    singleUnit: l,
                    optionDefaults: n.defaults,
                    optionOverrides: P(P({}, u), n.overrides),
                    buttonTextOverride: e(r) || e(t) || n.overrides.buttonText,
                    buttonTextDefault: e(o) || n.defaults.buttonText || e($t) || n.type
                }
            }(e, o, t, n, r)
        })
    }
    var vi = {};
    var mi = (yi.prototype.buildPrev = function(e, t, n) {
        var r = this.props.dateEnv,
            e = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
        return this.build(e, -1, n)
    }, yi.prototype.buildNext = function(e, t, n) {
        var r = this.props.dateEnv,
            e = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
        return this.build(e, 1, n)
    }, yi.prototype.build = function(e, t, n) {
        void 0 === n && (n = !0);
        var r, o, i = this.props,
            a = this.buildValidRange();
        return a = this.trimHiddenDays(a), n && (r = e, e = null != (o = a).start && r < o.start ? o.start : null != o.end && r >= o.end ? new Date(o.end.valueOf() - 1) : r), n = this.buildCurrentRangeInfo(e, t), o = /^(year|month|week|day)$/.test(n.unit), r = this.buildRenderRange(this.trimHiddenDays(n.range), n.unit, o), e = r = this.trimHiddenDays(r), i.showNonCurrentDates || (e = In(e, n.range)), e = In(e = this.adjustActiveRange(e), a), t = Hn(n.range, a), {
            validRange: a,
            currentRange: n.range,
            currentRangeUnit: n.unit,
            isRangeAllDay: o,
            activeRange: e,
            renderRange: r,
            slotMinTime: i.slotMinTime,
            slotMaxTime: i.slotMaxTime,
            isValid: t,
            dateIncrement: this.buildDateIncrement(n.duration)
        }
    }, yi.prototype.buildValidRange = function() {
        var e = this.props.validRangeInput,
            e = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
        return this.refineRange(e) || {
            start: null,
            end: null
        }
    }, yi.prototype.buildCurrentRangeInfo = function(e, t) {
        var n, r = this.props,
            o = null,
            i = null,
            a = null;
        return r.duration ? (o = r.duration, i = r.durationUnit, a = this.buildRangeFromDuration(e, t, o, i)) : (n = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, t, n)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (i = Rt(o = this.getFallbackDuration()).unit, a = this.buildRangeFromDuration(e, t, o, i)), {
            duration: o,
            unit: i,
            range: a
        }
    }, yi.prototype.getFallbackDuration = function() {
        return yt({
            day: 1
        })
    }, yi.prototype.adjustActiveRange = function(e) {
        var t = this.props,
            n = t.dateEnv,
            r = t.usesMinMaxTime,
            o = t.slotMinTime,
            i = t.slotMaxTime,
            t = e.start,
            e = e.end;
        return r && (bt(o) < 0 && (t = Ke(t), t = n.add(t, o)), 1 < bt(i) && (e = Be(e = Ke(e), -1), e = n.add(e, i))), {
            start: t,
            end: e
        }
    }, yi.prototype.buildRangeFromDuration = function(e, t, n, r) {
        var o, i, a, s = this.props,
            l = s.dateEnv,
            u = s.dateAlignment;

        function c() {
            o = l.startOf(e, u), i = l.add(o, n), a = {
                start: o,
                end: i
            }
        }
        return u || (s = this.props.dateIncrement, u = s && Ct(s) < Ct(n) ? Rt(s).unit : r), bt(n) <= 1 && this.isHiddenDay(o) && (o = Ke(o = this.skipHiddenDays(o, t))), c(), this.trimHiddenDays(a) || (e = this.skipHiddenDays(e, t), c()), a
    }, yi.prototype.buildRangeFromDayCount = function(e, t, n) {
        for (var r = this.props, o = r.dateEnv, r = r.dateAlignment, i = 0, e = e, e = Ke(e = r ? o.startOf(e, r) : e), a = e = this.skipHiddenDays(e, t); a = Be(a, 1), this.isHiddenDay(a) || (i += 1), i < n;);
        return {
            start: e,
            end: a
        }
    }, yi.prototype.buildCustomVisibleRange = function(e) {
        var t = this.props,
            n = t.visibleRangeInput,
            n = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n,
            n = this.refineRange(n);
        return !n || null != n.start && null != n.end ? n : null
    }, yi.prototype.buildRenderRange = function(e, t, n) {
        return e
    }, yi.prototype.buildDateIncrement = function(e) {
        var t = this.props.dateIncrement;
        return t || ((t = this.props.dateAlignment) ? yt(1, t) : e || yt({
            days: 1
        }))
    }, yi.prototype.refineRange = function(e) {
        if (e) {
            e = (t = e, n = this.props.dateEnv, e = r = null, t.start && (r = n.createMarker(t.start)), t.end && (e = n.createMarker(t.end)), !r && !e || r && e && e < r ? null : {
                start: r,
                end: e
            });
            return e = e && _n(e)
        }
        var t, n, r;
        return null
    }, yi.prototype.initHiddenDays = function() {
        var e, t = this.props.hiddenDays || [],
            n = [],
            r = 0;
        for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1)(n[e] = -1 !== t.indexOf(e)) || (r += 1);
        if (!r) throw new Error("invalid hiddenDays");
        this.isHiddenDayHash = n
    }, yi.prototype.trimHiddenDays = function(e) {
        var t = e.start,
            e = e.end,
            t = t && this.skipHiddenDays(t),
            e = e && this.skipHiddenDays(e, -1, !0);
        return null == t || null == e || t < e ? {
            start: t,
            end: e
        } : null
    }, yi.prototype.isHiddenDay = function(e) {
        return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e]
    }, yi.prototype.skipHiddenDays = function(e, t, n) {
        for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = Be(e, t);
        return e
    }, yi);

    function yi(e) {
        this.props = e, this.nowDate = pr(e.nowInput, e.dateEnv), this.initHiddenDays()
    }

    function Ei(e, t, n) {
        t = t ? t.activeRange : null;
        return bi({}, function(e, t) {
            var n = dr(t),
                r = [].concat(e.eventSources || []),
                o = [];
            e.initialEvents && r.unshift(e.initialEvents);
            e.events && r.unshift(e.events);
            for (var i = 0, a = r; i < a.length; i++) {
                var s = cr(a[i], t, n);
                s && o.push(s)
            }
            return o
        }(e, n), t, n)
    }

    function Si(e, t, n, r) {
        var o, i = n ? n.activeRange : null;
        switch (t.type) {
            case "ADD_EVENT_SOURCES":
                return bi(e, t.sources, i, r);
            case "REMOVE_EVENT_SOURCE":
                return o = t.sourceId, st(e, function(e) {
                    return e.sourceId !== o
                });
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return n ? Ci(e, i, r) : e;
            case "FETCH_EVENT_SOURCES":
                return wi(e, t.sourceIds ? ut(t.sourceIds) : Ri(e, r), i, t.isRefetch || !1, r);
            case "RECEIVE_EVENTS":
            case "RECEIVE_EVENT_ERROR":
                return function(e, t, n, r) {
                    var o = e[t];
                    if (o && n === o.latestFetchId) return P(P({}, e), ((n = {})[t] = P(P({}, o), {
                        isFetching: !1,
                        fetchRange: r
                    }), n));
                    return e
                }(e, t.sourceId, t.fetchId, t.fetchRange);
            case "REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e
        }
    }

    function Di(e) {
        for (var t in e)
            if (e[t].isFetching) return !0;
        return !1
    }

    function bi(e, t, n, r) {
        for (var o = {}, i = 0, a = t; i < a.length; i++) {
            var s = a[i];
            o[s.sourceId] = s
        }
        return n && (o = Ci(o, n, r)), P(P({}, e), o)
    }

    function Ci(e, r, o) {
        return wi(e, st(e, function(e) {
            return n = r, Ti(t = e, e = o) ? !e.options.lazyFetching || !t.fetchRange || t.isFetching || n.start < t.fetchRange.start || n.end > t.fetchRange.end : !t.latestFetchId;
            var t, n
        }), r, !1, o)
    }

    function wi(e, t, n, r, o) {
        var i, a = {};
        for (i in e) {
            var s = e[i];
            t[i] ? a[i] = function(n, r, e, o) {
                var i = o.options,
                    a = o.calendarApi,
                    t = o.pluginHooks.eventSourceDefs[n.sourceDefId],
                    s = Te();
                return t.fetch({
                    eventSource: n,
                    range: r,
                    isRefetch: e,
                    context: o
                }, function(e) {
                    var t = e.rawEvents;
                    i.eventSourceSuccess && (t = i.eventSourceSuccess.call(a, t, e.xhr) || t), n.success && (t = n.success.call(a, t, e.xhr) || t), o.dispatch({
                        type: "RECEIVE_EVENTS",
                        sourceId: n.sourceId,
                        fetchId: s,
                        fetchRange: r,
                        rawEvents: t
                    })
                }, function(e) {
                    console.warn(e.message, e), i.eventSourceFailure && i.eventSourceFailure.call(a, e), n.failure && n.failure(e), o.dispatch({
                        type: "RECEIVE_EVENT_ERROR",
                        sourceId: n.sourceId,
                        fetchId: s,
                        fetchRange: r,
                        error: e
                    })
                }), P(P({}, n), {
                    isFetching: !0,
                    latestFetchId: s
                })
            }(s, n, r, o) : a[i] = s
        }
        return a
    }

    function Ri(e, t) {
        return st(e, function(e) {
            return Ti(e, t)
        })
    }

    function Ti(e, t) {
        return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange
    }

    function _i(e, t, n, r, o) {
        switch (t.type) {
            case "RECEIVE_EVENTS":
                return function(e, t, n, r, o, i) {
                    if (t && n === t.latestFetchId) {
                        o = sn(function(e, t, n) {
                            n = n.options.eventDataTransform, t = t ? t.eventDataTransform : null;
                            t && (e = ki(e, t));
                            n && (e = ki(e, n));
                            return e
                        }(o, t, i), t, i);
                        return r && (o = gt(o, r, i)), dn(xi(e, t.sourceId), o)
                    }
                    return e
                }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
            case "ADD_EVENTS":
                return function(e, t, n, r) {
                    n && (t = gt(t, n, r));
                    return dn(e, t)
                }(e, t.eventStore, r ? r.activeRange : null, o);
            case "RESET_EVENTS":
                return t.eventStore;
            case "MERGE_EVENTS":
                return dn(e, t.eventStore);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return r ? gt(e, r.activeRange, o) : e;
            case "REMOVE_EVENTS":
                return function(e, t) {
                    var n, r, o = e.defs,
                        i = e.instances,
                        a = {},
                        s = {};
                    for (n in o) t.defs[n] || (a[n] = o[n]);
                    for (r in i) !t.instances[r] && a[i[r].defId] && (s[r] = i[r]);
                    return {
                        defs: a,
                        instances: s
                    }
                }(e, t.eventStore);
            case "REMOVE_EVENT_SOURCE":
                return xi(e, t.sourceId);
            case "REMOVE_ALL_EVENT_SOURCES":
                return pn(e, function(e) {
                    return !e.sourceId
                });
            case "REMOVE_ALL_EVENTS":
                return cn();
            default:
                return e
        }
    }

    function ki(e, t) {
        if (t)
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r],
                    a = t(i);
                a ? n.push(a) : null == a && n.push(i)
            } else n = e;
        return n
    }

    function xi(e, t) {
        return pn(e, function(e) {
            return e.sourceId !== t
        })
    }

    function Mi(e, t, n, r, o) {
        var i = [];
        return {
            headerToolbar: e.headerToolbar ? Pi(e.headerToolbar, e, t, n, r, o, i) : null,
            footerToolbar: e.footerToolbar ? Pi(e.footerToolbar, e, t, n, r, o, i) : null,
            viewsWithButtons: i
        }
    }

    function Pi(e, t, n, r, o, i, h) {
        return lt(e, function(e) {
            return e = e, a = r, s = o, l = i, u = h, c = "rtl" === t.direction, d = t.customButtons || {}, p = n.buttonText || {}, f = t.buttonText || {}, (e ? e.split(" ") : []).map(function(e) {
                return e.split(",").map(function(e) {
                    return "title" === e ? {
                        buttonName: e
                    } : ((t = d[e]) ? (r = function(e) {
                        t.click && t.click.call(e.target, e, e.target)
                    }, (o = a.getCustomButtonIconClass(t)) || (o = a.getIconClass(e, c)) || (i = t.text)) : (n = s[e]) ? (u.push(e), r = function() {
                        l.changeView(e)
                    }, (i = n.buttonTextOverride) || (o = a.getIconClass(e, c)) || (i = n.buttonTextDefault)) : l[e] && (r = function() {
                        l[e]()
                    }, (i = p[e]) || (o = a.getIconClass(e, c)) || (i = f[e])), {
                        buttonName: e,
                        buttonClick: r,
                        buttonIcon: o,
                        buttonText: i
                    });
                    var t, n, r, o, i
                })
            });
            var a, s, l, u, c, d, p, f
        })
    }

    function Ii(e, t, n, r, o) {
        var i, a = null;
        "GET" === (e = e.toUpperCase()) ? (i = n, t = t + (-1 === t.indexOf("?") ? "?" : "&") + Ni(i)) : a = Ni(n);
        var s = new XMLHttpRequest;
        s.open(e, t, !0), "GET" !== e && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.onload = function() {
            if (200 <= s.status && s.status < 400) {
                var e = !1,
                    t = void 0;
                try {
                    t = JSON.parse(s.responseText), e = !0
                } catch (e) {}
                e ? r(t, s) : o("Failure parsing JSON", s)
            } else o("Request failed", s)
        }, s.onerror = function() {
            o("Request failed", s)
        }, s.send(a)
    }

    function Ni(e) {
        var t, n = [];
        for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
        return n.join("&")
    }

    function Hi(e, t) {
        for (var n = ct(t.getCurrentData().eventSources), r = [], o = 0, i = e; o < i.length; o++) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l += 1)
                if (n[l]._raw === a) {
                    n.splice(l, 1), s = !0;
                    break
                } s || r.push(a)
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({
                type: "REMOVE_EVENT_SOURCE",
                sourceId: d.sourceId
            })
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t.calendarApi.addEventSource(h)
        }
    }
    var Oi = [jo({
        eventSourceDefs: [{
            ignoreRange: !0,
            parseMeta: function(e) {
                return Array.isArray(e.events) ? e.events : null
            },
            fetch: function(e, t) {
                t({
                    rawEvents: e.eventSource.meta
                })
            }
        }]
    }), jo({
        eventSourceDefs: [{
            parseMeta: function(e) {
                return "function" == typeof e.events ? e.events : null
            },
            fetch: function(e, t, n) {
                var r = e.context.dateEnv;
                ro(e.eventSource.meta.bind(null, tr(e.range, r)), function(e) {
                    t({
                        rawEvents: e
                    })
                }, n)
            }
        }]
    }), jo({
        eventSourceRefiners: {
            method: String,
            extraParams: an,
            startParam: String,
            endParam: String,
            timeZoneParam: String
        },
        eventSourceDefs: [{
            parseMeta: function(e) {
                return !e.url || "json" !== e.format && e.format ? null : {
                    url: e.url,
                    format: "json",
                    method: (e.method || "GET").toUpperCase(),
                    extraParams: e.extraParams,
                    startParam: e.startParam,
                    endParam: e.endParam,
                    timeZoneParam: e.timeZoneParam
                }
            },
            fetch: function(e, n, r) {
                var t = e.eventSource.meta,
                    e = function(e, t, n) {
                        var r, o, i = n.dateEnv,
                            a = n.options,
                            s = {};
                        null == (r = e.startParam) && (r = a.startParam);
                        null == (o = e.endParam) && (o = a.endParam);
                        null == (n = e.timeZoneParam) && (n = a.timeZoneParam);
                        e = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                        P(s, e), s[r] = i.formatIso(t.start), s[o] = i.formatIso(t.end), "local" !== i.timeZone && (s[n] = i.timeZone);
                        return s
                    }(t, e.range, e.context);
                Ii(t.method, t.url, e, function(e, t) {
                    n({
                        rawEvents: e,
                        xhr: t
                    })
                }, function(e, t) {
                    r({
                        message: e,
                        xhr: t
                    })
                })
            }
        }]
    }), jo({
        recurringTypes: [{
            parse: function(e, t) {
                if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
                    var n = {
                            daysOfWeek: e.daysOfWeek || null,
                            startTime: e.startTime || null,
                            endTime: e.endTime || null,
                            startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                            endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
                        },
                        r = void 0;
                    return !(r = e.duration ? e.duration : r) && e.startTime && e.endTime && (o = e.endTime, t = e.startTime, r = {
                        years: o.years - t.years,
                        months: o.months - t.months,
                        days: o.days - t.days,
                        milliseconds: o.milliseconds - t.milliseconds
                    }), {
                        allDayGuess: Boolean(!e.startTime && !e.endTime),
                        duration: r,
                        typeData: n
                    }
                }
                var o;
                return null
            },
            expand: function(e, t, n) {
                t = In(t, {
                    start: e.startRecur,
                    end: e.endRecur
                });
                return t ? function(e, t, n, r) {
                    var o = e ? ut(e) : null,
                        i = Ke(n.start),
                        a = n.end,
                        s = [];
                    for (; i < a;) {
                        var l = void 0;
                        o && !o[i.getUTCDay()] || (l = t ? r.add(i, t) : i, s.push(l)), i = Be(i, 1)
                    }
                    return s
                }(e.daysOfWeek, e.startTime, t, n) : []
            }
        }],
        eventRefiners: {
            daysOfWeek: an,
            startTime: yt,
            endTime: yt,
            duration: yt,
            startRecur: an,
            endRecur: an
        }
    }), jo({
        optionChangeHandlers: {
            events: function(e, t) {
                Hi([e], t)
            },
            eventSources: Hi
        }
    }), jo({
        isLoadingFuncs: [function(e) {
            return Di(e.eventSources)
        }],
        contentTypeHandlers: {
            html: function() {
                return {
                    render: Ai
                }
            },
            domNodes: function() {
                return {
                    render: Ui
                }
            }
        },
        propSetHandlers: {
            dateProfile: function(e, t) {
                t.emitter.trigger("datesSet", P(P({}, tr(e.activeRange, t.dateEnv)), {
                    view: t.viewApi
                }))
            },
            eventStore: function(e, t) {
                var n = t.emitter;
                n.hasHandlers("eventsSet") && n.trigger("eventsSet", yr(e, t))
            }
        }
    })];

    function Ai(e, t) {
        e.innerHTML = t
    }

    function Ui(e, t) {
        var n = Array.prototype.slice.call(e.childNodes),
            t = Array.prototype.slice.call(t);
        if (!Mt(n, t)) {
            for (var r = 0, o = t; r < o.length; r++) {
                var i = o[r];
                e.appendChild(i)
            }
            n.forEach(fe)
        }
    }
    var Li = (Wi.prototype.request = function(e) {
        this.isDirty = !0, this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e))
    }, Wi.prototype.pause = function(e) {
        var t = this.pauseDepths;
        t[e = void 0 === e ? "" : e] = (t[e] || 0) + 1, this.clearTimeout()
    }, Wi.prototype.resume = function(e, t) {
        var n = this.pauseDepths;
        (e = void 0 === e ? "" : e) in n && (t ? delete n[e] : (--n[e], n[e] <= 0 && delete n[e]), this.tryDrain())
    }, Wi.prototype.isPaused = function() {
        return Object.keys(this.pauseDepths).length
    }, Wi.prototype.tryDrain = function() {
        if (!this.isRunning && !this.isPaused()) {
            for (this.isRunning = !0; this.isDirty;) this.isDirty = !1, this.drained();
            this.isRunning = !1
        }
    }, Wi.prototype.clear = function() {
        this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {}
    }, Wi.prototype.clearTimeout = function() {
        this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0)
    }, Wi.prototype.drained = function() {
        this.drainedOption && this.drainedOption()
    }, Wi);

    function Wi(e) {
        this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0
    }
    var Vi = (Fi.prototype.request = function(e, t) {
        this.queue.push(e), this.delayedRunner.request(t)
    }, Fi.prototype.pause = function(e) {
        this.delayedRunner.pause(e)
    }, Fi.prototype.resume = function(e, t) {
        this.delayedRunner.resume(e, t)
    }, Fi.prototype.drain = function() {
        for (var e = this.queue; e.length;) {
            for (var t, n = []; t = e.shift();) this.runTask(t), n.push(t);
            this.drained(n)
        }
    }, Fi.prototype.runTask = function(e) {
        this.runTaskOption && this.runTaskOption(e)
    }, Fi.prototype.drained = function(e) {
        this.drainedOption && this.drainedOption(e)
    }, Fi);

    function Fi(e, t) {
        this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new Li(this.drain.bind(this))
    }

    function zi(e, t, n) {
        var r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange;
        return n.formatRange(r.start, r.end, Xt(t.titleFormat || function(e) {
            var t = e.currentRangeUnit;
            if ("year" === t) return {
                year: "numeric"
            };
            if ("month" === t) return {
                year: "numeric",
                month: "long"
            };
            e = Xe(e.currentRange.start, e.currentRange.end);
            if (null !== e && 1 < e) return {
                year: "numeric",
                month: "short",
                day: "numeric"
            };
            return {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        }(e)), {
            isEndExclusive: e.isRangeAllDay,
            defaultSeparator: t.titleRangeSeparator
        })
    }
    var Bi = (ji.prototype.resetOptions = function(e, t) {
        var n = this.props;
        n.optionOverrides = t ? P(P({}, n.optionOverrides), e) : e, this.actionRunner.request({
            type: "NOTHING"
        })
    }, ji.prototype._handleAction = function(e) {
        var t = this.props,
            n = this.state,
            r = this.emitter,
            o = (d = n.dynamicOptionOverrides, "SET_OPTION" !== (g = e).type ? d : P(P({}, d), ((d = {})[g.optionName] = g.rawOptionValue, d))),
            i = this.computeOptionsData(t.optionOverrides, o, t.calendarApi),
            a = (f = n.currentViewType, f = "CHANGE_VIEW_TYPE" === (p = e).type ? p.viewType : f),
            s = this.computeCurrentViewData(a, i, t.optionOverrides, o);
        t.calendarApi.currentDataManager = this, r.setThisContext(t.calendarApi), r.setOptions(s.options);
        var l = {
                dateEnv: i.dateEnv,
                options: i.calendarOptions,
                pluginHooks: i.pluginHooks,
                calendarApi: t.calendarApi,
                dispatch: this.dispatch,
                emitter: r,
                getCurrentData: this.getCurrentData
            },
            u = n.currentDate,
            c = n.dateProfile;
        this.data && this.data.dateProfileGenerator !== s.dateProfileGenerator && (c = s.dateProfileGenerator.build(u)), h = u, c = function(e, t, n, r) {
            var o;
            switch (t.type) {
                case "CHANGE_VIEW_TYPE":
                    return r.build(t.dateMarker || n);
                case "CHANGE_DATE":
                    return r.build(t.dateMarker);
                case "PREV":
                    if ((o = r.buildPrev(e, n)).isValid) return o;
                    break;
                case "NEXT":
                    if ((o = r.buildNext(e, n)).isValid) return o
            }
            return e
        }(c, g = e, u = "CHANGE_DATE" !== g.type ? h : g.dateMarker, s.dateProfileGenerator), "PREV" !== e.type && "NEXT" !== e.type && An(c.currentRange, u) || (u = c.currentRange.start);
        for (var d = Si(n.eventSources, e, c, l), p = _i(n.eventStore, e, d, c, l), f = Di(d) && !s.options.progressiveEventRendering && n.renderableEventStore || p, h = this.buildViewUiProps(l), g = h.eventUiSingleBase, s = h.selectionConfig, h = this.buildEventUiBySource(d), v = {
                dynamicOptionOverrides: o,
                currentViewType: a,
                currentDate: u,
                dateProfile: c,
                eventSources: d,
                eventStore: p,
                renderableEventStore: f,
                selectionConfig: s,
                eventUiBases: this.buildEventUiBases(f.defs, g, h),
                businessHours: this.parseContextBusinessHours(l),
                dateSelection: function(e, t) {
                    switch (t.type) {
                        case "UNSELECT_DATES":
                            return null;
                        case "SELECT_DATES":
                            return t.selection;
                        default:
                            return e
                    }
                }(n.dateSelection, e),
                eventSelection: function(e, t) {
                    switch (t.type) {
                        case "UNSELECT_EVENT":
                            return "";
                        case "SELECT_EVENT":
                            return t.eventInstanceId;
                        default:
                            return e
                    }
                }(n.eventSelection, e),
                eventDrag: function(e, t) {
                    var n;
                    switch (t.type) {
                        case "UNSET_EVENT_DRAG":
                            return null;
                        case "SET_EVENT_DRAG":
                            return {
                                affectedEvents: (n = t.state).affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent
                            };
                        default:
                            return e
                    }
                }(n.eventDrag, e),
                eventResize: function(e, t) {
                    var n;
                    switch (t.type) {
                        case "UNSET_EVENT_RESIZE":
                            return null;
                        case "SET_EVENT_RESIZE":
                            return {
                                affectedEvents: (n = t.state).affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent
                            };
                        default:
                            return e
                    }
                }(n.eventResize, e)
            }, m = P(P({}, l), v), y = 0, E = i.pluginHooks.reducers; y < E.length; y++) {
            var S = E[y];
            P(v, S(n, e, m))
        }
        i = Ji(n, l), l = Ji(v, l);
        !i && l ? r.trigger("loading", !0) : i && !l && r.trigger("loading", !1), this.state = v, t.onAction && t.onAction(e)
    }, ji.prototype.updateData = function() {
        var n, r, o, e, t = this.props,
            i = this.state,
            a = this.data,
            s = this.computeOptionsData(t.optionOverrides, i.dynamicOptionOverrides, t.calendarApi),
            l = this.computeCurrentViewData(i.currentViewType, s, t.optionOverrides, i.dynamicOptionOverrides),
            u = this.data = P(P(P({
                viewTitle: this.buildTitle(i.dateProfile, l.options, s.dateEnv),
                calendarApi: t.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData
            }, s), l), i),
            c = s.pluginHooks.optionChangeHandlers,
            d = a && a.calendarOptions,
            p = s.calendarOptions;
        if (d && d !== p)
            for (var f in d.timeZone !== p.timeZone && (i.eventSources = u.eventSources = (e = u.eventSources, l = i.dateProfile, s = u, l = l ? l.activeRange : null, wi(e, Ri(e, s), l, !0, s)), i.eventStore = u.eventStore = (i = u.eventStore, n = a.dateEnv, r = u.dateEnv, o = i.defs, i = lt(i.instances, function(e) {
                    var t = o[e.defId];
                    return t.allDay || t.recurringDef ? e : P(P({}, e), {
                        range: {
                            start: r.createMarker(n.toDate(e.range.start, e.forcedStartTzo)),
                            end: r.createMarker(n.toDate(e.range.end, e.forcedEndTzo))
                        },
                        forcedStartTzo: r.canComputeOffset ? null : e.forcedStartTzo,
                        forcedEndTzo: r.canComputeOffset ? null : e.forcedEndTzo
                    })
                }), {
                    defs: o,
                    instances: i
                })), c) d[f] !== p[f] && c[f](p[f], u);
        t.onData && t.onData(u)
    }, ji.prototype._computeOptionsData = function(e, t, n) {
        var r = this.processRawCalendarOptions(e, t),
            o = r.refinedOptions,
            i = r.pluginHooks,
            a = r.localeDefaults,
            s = r.availableLocaleData;
        ea(r.extra);
        var l = this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, s, o.defaultRangeSeparator),
            r = this.buildViewSpecs(i.views, e, t, a),
            t = this.buildTheme(o, i);
        return {
            calendarOptions: o,
            pluginHooks: i,
            dateEnv: l,
            viewSpecs: r,
            theme: t,
            toolbarConfig: this.parseToolbars(o, e, t, r, n),
            localeDefaults: a,
            availableRawLocales: s.map
        }
    }, ji.prototype.processRawCalendarOptions = function(e, t) {
        var n, r = rn([$t, e, t]),
            o = r.locales,
            i = r.locale,
            r = this.organizeRawLocales(o),
            o = r.map,
            i = this.buildLocale(i || r.defaultCode, o).options,
            o = this.buildPluginHooks(e.plugins || [], Oi),
            a = this.currentCalendarOptionsRefiners = P(P(P(P(P({}, Kt), Jt), Qt), o.listenerRefiners), o.optionRefiners),
            s = {},
            l = rn([$t, i, e, t]),
            u = {},
            c = this.currentCalendarOptionsInput,
            d = this.currentCalendarOptionsRefined,
            p = !1;
        for (n in l) "plugins" !== n && (l[n] === c[n] || en[n] && n in c && en[n](c[n], l[n]) ? u[n] = d[n] : a[n] ? (u[n] = a[n](l[n]), p = !0) : s[n] = c[n]);
        return p && (this.currentCalendarOptionsInput = l, this.currentCalendarOptionsRefined = u), {
            rawOptions: this.currentCalendarOptionsInput,
            refinedOptions: this.currentCalendarOptionsRefined,
            pluginHooks: o,
            availableLocaleData: r,
            localeDefaults: i,
            extra: s
        }
    }, ji.prototype._computeCurrentViewData = function(e, t, n, r) {
        var o = t.viewSpecs[e];
        if (!o) throw new Error('viewType "' + e + "\" is not available. Please make sure you've loaded all neccessary plugins");
        n = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r), r = n.refinedOptions;
        return ea(n.extra), {
            viewSpec: o,
            options: r,
            dateProfileGenerator: this.buildDateProfileGenerator({
                dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
                duration: o.duration,
                durationUnit: o.durationUnit,
                usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                dateEnv: t.dateEnv,
                calendarApi: this.props.calendarApi,
                slotMinTime: r.slotMinTime,
                slotMaxTime: r.slotMaxTime,
                showNonCurrentDates: r.showNonCurrentDates,
                dayCount: r.dayCount,
                dateAlignment: r.dateAlignment,
                dateIncrement: r.dateIncrement,
                hiddenDays: r.hiddenDays,
                weekends: r.weekends,
                nowInput: r.now,
                validRangeInput: r.validRange,
                visibleRangeInput: r.visibleRange,
                monthMode: r.monthMode,
                fixedWeekCount: r.fixedWeekCount
            }),
            viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
        }
    }, ji.prototype.processRawViewOptions = function(e, t, n, r, o) {
        var i, a = rn([$t, e.optionDefaults, n, r, e.optionOverrides, o]),
            s = P(P(P(P(P(P({}, Kt), Jt), Qt), nn), t.listenerRefiners), t.optionRefiners),
            l = {},
            u = this.currentViewOptionsInput,
            c = this.currentViewOptionsRefined,
            d = !1,
            p = {};
        for (i in a) a[i] === u[i] ? l[i] = c[i] : (a[i] === this.currentCalendarOptionsInput[i] ? i in this.currentCalendarOptionsRefined && (l[i] = this.currentCalendarOptionsRefined[i]) : s[i] ? l[i] = s[i](a[i]) : p[i] = a[i], d = !0);
        return d && (this.currentViewOptionsInput = a, this.currentViewOptionsRefined = l), {
            rawOptions: this.currentViewOptionsInput,
            refinedOptions: this.currentViewOptionsRefined,
            extra: p
        }
    }, ji);

    function ji(e) {
        var n, r, o, t = this;
        this.computeOptionsData = Pt(this._computeOptionsData), this.computeCurrentViewData = Pt(this._computeCurrentViewData), this.organizeRawLocales = Pt(kr), this.buildLocale = Pt(xr), this.buildPluginHooks = (r = [], o = [], function(e, t) {
            return n && Mt(e, r) && Mt(t, o) || (n = Go(e, t)), r = e, o = t, n
        }), this.buildDateEnv = Pt(Gi), this.buildTheme = Pt(qi), this.parseToolbars = Pt(Mi), this.buildViewSpecs = Pt(gi), this.buildDateProfileGenerator = It(Yi), this.buildViewApi = Pt(Zi), this.buildViewUiProps = It($i), this.buildEventUiBySource = Pt(Xi, dt), this.buildEventUiBases = Pt(Ki), this.parseContextBusinessHours = It(Qi), this.buildTitle = Pt(zi), this.emitter = new oo, this.actionRunner = new Vi(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
            return t.data
        }, this.dispatch = function(e) {
            t.actionRunner.request(e)
        }, this.props = e, this.actionRunner.pause();
        var i = {},
            a = this.computeOptionsData(e.optionOverrides, i, e.calendarApi),
            s = a.calendarOptions.initialView || a.pluginHooks.initialView,
            l = this.computeCurrentViewData(s, a, e.optionOverrides, i);
        (e.calendarApi.currentDataManager = this).emitter.setThisContext(e.calendarApi), this.emitter.setOptions(l.options);
        var u, c, d, c = (u = a.calendarOptions, c = a.dateEnv, null != (d = u.initialDate) ? c.createMarker(d) : pr(u.now, c)),
            l = l.dateProfileGenerator.build(c);
        An(l.activeRange, c) || (c = l.currentRange.start);
        for (var p = {
                dateEnv: a.dateEnv,
                options: a.calendarOptions,
                pluginHooks: a.pluginHooks,
                calendarApi: e.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData
            }, f = 0, h = a.pluginHooks.contextInit; f < h.length; f++)(0, h[f])(p);
        for (var e = Ei(a.calendarOptions, l, p), g = {
                dynamicOptionOverrides: i,
                currentViewType: s,
                currentDate: c,
                dateProfile: l,
                businessHours: this.parseContextBusinessHours(p),
                eventSources: e,
                eventUiBases: {},
                eventStore: cn(),
                renderableEventStore: cn(),
                dateSelection: null,
                eventSelection: "",
                eventDrag: null,
                eventResize: null,
                selectionConfig: this.buildViewUiProps(p).selectionConfig
            }, v = P(P({}, p), g), m = 0, y = a.pluginHooks.reducers; m < y.length; m++) {
            var E = y[m];
            P(g, E(null, null, v))
        }
        Ji(g, p) && this.emitter.trigger("loading", !0), this.state = g, this.updateData(), this.actionRunner.resume()
    }

    function Gi(e, t, n, r, o, i, a, s) {
        a = xr(t || a.defaultCode, a.map);
        return new wr({
            calendarSystem: "gregory",
            timeZone: e,
            namedTimeZoneImpl: i.namedTimeZonedImpl,
            locale: a,
            weekNumberCalculation: n,
            firstDay: r,
            weekText: o,
            cmdFormatter: i.cmdFormatter,
            defaultSeparator: s
        })
    }

    function qi(e, t) {
        return new(t.themeClasses[e.themeSystem] || Yo)(e)
    }

    function Yi(e) {
        return new(e.dateProfileGeneratorClass || mi)(e)
    }

    function Zi(e, t, n) {
        return new sr(e, t, n)
    }

    function Xi(e) {
        return lt(e, function(e) {
            return e.ui
        })
    }

    function Ki(e, t, n) {
        var r, o = {
            "": t
        };
        for (r in e) {
            var i = e[r];
            i.sourceId && n[i.sourceId] && (o[r] = n[i.sourceId])
        }
        return o
    }

    function $i(e) {
        var t = e.options;
        return {
            eventUiSingleBase: vn({
                display: t.eventDisplay,
                editable: t.editable,
                startEditable: t.eventStartEditable,
                durationEditable: t.eventDurationEditable,
                constraint: t.eventConstraint,
                overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                allow: t.eventAllow,
                backgroundColor: t.eventBackgroundColor,
                borderColor: t.eventBorderColor,
                textColor: t.eventTextColor,
                color: t.eventColor
            }, e),
            selectionConfig: vn({
                constraint: t.selectConstraint,
                overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
                allow: t.selectAllow
            }, e)
        }
    }

    function Ji(e, t) {
        for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++)
            if ((0, r[n])(e)) return !0;
        return !1
    }

    function Qi(e) {
        return Hr(e.options.businessHours, e)
    }

    function ea(e, t) {
        for (var n in e) console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""))
    }
    var ta, na = (t(ra, ta = Eo), ra.prototype.render = function() {
        return this.props.children(this.state)
    }, ra.prototype.componentDidUpdate = function(e) {
        var t = this.props.optionOverrides;
        t !== e.optionOverrides && this.dataManager.resetOptions(t)
    }, ra);

    function ra(e) {
        var t = ta.call(this, e) || this;
        return t.handleData = function(e) {
            t.dataManager ? t.setState(e) : t.state = e
        }, t.dataManager = new Bi({
            optionOverrides: e.optionOverrides,
            calendarApi: e.calendarApi,
            onData: t.handleData
        }), t
    }

    function oa(e) {
        this.timeZoneName = e
    }
    var ia = (aa.prototype.addSegs = function(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            var o = r[n];
            this.insertEntry(o, t)
        }
        return t
    }, aa.prototype.insertEntry = function(e, t) {
        var n = this.findInsertion(e);
        return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, t)
    }, aa.prototype.isInsertionValid = function(e, t) {
        return (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) && (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt)
    }, aa.prototype.handleInvalidInsertion = function(e, t, n) {
        return this.allowReslicing && e.touchingEntry ? this.splitEntry(t, e.touchingEntry, n) : (n.push(t), 0)
    }, aa.prototype.splitEntry = function(e, t, n) {
        var r = 0,
            o = [],
            i = e.span,
            t = t.span;
        return i.start < t.start && (r += this.insertEntry({
            index: e.index,
            thickness: e.thickness,
            span: {
                start: i.start,
                end: t.start
            }
        }, o)), i.end > t.end && (r += this.insertEntry({
            index: e.index,
            thickness: e.thickness,
            span: {
                start: t.end,
                end: i.end
            }
        }, o)), r ? (n.push.apply(n, f([{
            index: e.index,
            thickness: e.thickness,
            span: da(t, i)
        }], o)), r) : (n.push(e), 0)
    }, aa.prototype.insertEntryAt = function(e, t) {
        var n = this.entriesByLevel,
            r = this.levelCoords,
            o = t.level;
        o >= r.length || r[o] > t.levelCoord ? (pa(r, o, t.levelCoord), pa(n, o, [e])) : pa(n[o], t.lateralEnd, e), this.stackCnts[la(e)] = t.stackCnt
    }, aa.prototype.findInsertion = function(e) {
        for (var t = this.levelCoords, n = this.entriesByLevel, r = this.stackCnts, o = this.strictOrder, i = t.length, a = 0, s = 0, l = 0, u = 0, c = -1, d = null, p = 0; p < i; p += 1) {
            var f = t[p];
            if (!o && f >= a + e.thickness) break;
            for (var h, g = n[p], v = fa(g, e.span.start, sa), u = l = v[0] + v[1];
                (h = g[u]) && h.span.start < e.span.end;)(o || a < f + h.thickness && a + e.thickness > f) && (a = f + h.thickness, c = p, d = h), u += 1;
            f < a && (s = p + 1)
        }
        return {
            level: s,
            levelCoord: a,
            lateralStart: l,
            lateralEnd: u,
            touchingLevel: c,
            touchingEntry: d,
            stackCnt: d ? r[la(d)] + 1 : 0
        }
    }, aa.prototype.toRects = function() {
        for (var e = this.entriesByLevel, t = this.levelCoords, n = e.length, r = [], o = 0; o < n; o += 1)
            for (var i = e[o], a = t[o], s = 0, l = i; s < l.length; s++) {
                var u = l[s];
                r.push(P(P({}, u), {
                    levelCoord: a
                }))
            }
        return r
    }, aa);

    function aa() {
        this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {}
    }

    function sa(e) {
        return e.span.end
    }

    function la(e) {
        return e.index + ":" + e.span.start
    }

    function ua(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            for (var o = r[n], i = [], a = {
                    span: o.span,
                    entries: [o]
                }, s = 0, l = t; s < l.length; s++) {
                var u = l[s];
                da(u.span, a.span) ? a = {
                    entries: u.entries.concat(a.entries),
                    span: ca(u.span, a.span)
                } : i.push(u)
            }
            i.push(a), t = i
        }
        return t
    }

    function ca(e, t) {
        return {
            start: Math.min(e.start, t.start),
            end: Math.max(e.end, t.end)
        }
    }

    function da(e, t) {
        var n = Math.max(e.start, t.start),
            t = Math.min(e.end, t.end);
        return n < t ? {
            start: n,
            end: t
        } : null
    }

    function pa(e, t, n) {
        e.splice(t, 0, n)
    }

    function fa(e, t, n) {
        var r = 0,
            o = e.length;
        if (!o || t < n(e[r])) return [0, 0];
        if (t > n(e[o - 1])) return [o, 0];
        for (; r < o;) {
            var i = Math.floor(r + (o - r) / 2),
                a = n(e[i]);
            if (t < a) o = i;
            else {
                if (!(a < t)) return [i, 1];
                r = i + 1
            }
        }
        return [r, 0]
    }
    var ha = (ga.prototype.destroy = function() {}, ga);

    function ga(e) {
        this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null
    }

    function va(e) {
        var t = {};
        return t[e.component.uid] = e, t
    }
    var ma = {},
        ya = (Ea.prototype.destroy = function() {}, Ea.prototype.setMirrorIsVisible = function(e) {}, Ea.prototype.setMirrorNeedsRevert = function(e) {}, Ea.prototype.setAutoScrollEnabled = function(e) {}, Ea);

    function Ea(e, t) {
        this.emitter = new oo
    }
    var Sa = {},
        Da = {
            startTime: yt,
            duration: yt,
            create: Boolean,
            sourceId: String
        };

    function ba(e) {
        var t = on(e, Da),
            e = t.refined,
            t = t.extra;
        return {
            startTime: e.startTime || null,
            duration: e.duration || null,
            create: null == e.create || e.create,
            sourceId: e.sourceId,
            leftoverProps: t
        }
    }
    var Ca, wa = (t(Ra, Ca = Ao), Ra.prototype.render = function() {
        var t = this,
            e = this.props.widgetGroups.map(function(e) {
                return t.renderWidgetGroup(e)
            });
        return So.apply(void 0, f(["div", {
            className: "fc-toolbar-chunk"
        }], e))
    }, Ra.prototype.renderWidgetGroup = function(e) {
        for (var t = this.props, n = this.context.theme, r = [], o = !0, i = 0, a = e; i < a.length; i++) {
            var s, l = a[i],
                u = l.buttonName,
                c = l.buttonClick,
                d = l.buttonText,
                p = l.buttonIcon;
            "title" === u ? (o = !1, r.push(So("h2", {
                className: "fc-toolbar-title"
            }, t.title))) : (s = p ? {
                "aria-label": u
            } : {}, l = ["fc-" + u + "-button", n.getClass("button")], u === t.activeButton && l.push(n.getClass("buttonActive")), u = !t.isTodayEnabled && "today" === u || !t.isPrevEnabled && "prev" === u || !t.isNextEnabled && "next" === u, r.push(So("button", P({
                disabled: u,
                className: l.join(" "),
                onClick: c,
                type: "button"
            }, s), d || (p ? So("span", {
                className: p
            }) : ""))))
        }
        if (1 < r.length) {
            e = o && n.getClass("buttonGroup") || "";
            return So.apply(void 0, f(["div", {
                className: e
            }], r))
        }
        return r[0]
    }, Ra);

    function Ra() {
        return null !== Ca && Ca.apply(this, arguments) || this
    }
    var Ta, _a = (t(ka, Ta = Ao), ka.prototype.render = function() {
        var e = this.props,
            t = e.model,
            n = e.extraClassName,
            r = !1,
            o = t.center,
            e = t.left ? (r = !0, t.left) : t.start,
            t = t.right ? (r = !0, t.right) : t.end;
        return So("div", {
            className: [n || "", "fc-toolbar", r ? "fc-toolbar-ltr" : ""].join(" ")
        }, this.renderSection("start", e || []), this.renderSection("center", o || []), this.renderSection("end", t || []))
    }, ka.prototype.renderSection = function(e, t) {
        var n = this.props;
        return So(wa, {
            key: e,
            widgetGroups: t,
            title: n.title,
            activeButton: n.activeButton,
            isTodayEnabled: n.isTodayEnabled,
            isPrevEnabled: n.isPrevEnabled,
            isNextEnabled: n.isNextEnabled
        })
    }, ka);

    function ka() {
        return null !== Ta && Ta.apply(this, arguments) || this
    }
    var xa, Ma = (t(Pa, xa = Ao), Pa.prototype.render = function() {
        var e = this.props,
            t = this.state,
            n = e.aspectRatio,
            r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
            o = "",
            i = "";
        return n ? null !== t.availableWidth ? o = t.availableWidth / n : i = 1 / n * 100 + "%" : o = e.height || "", So("div", {
            ref: this.handleEl,
            onClick: e.onClick,
            className: r.join(" "),
            style: {
                height: o,
                paddingBottom: i
            }
        }, e.children)
    }, Pa.prototype.componentDidMount = function() {
        this.context.addResizeHandler(this.handleResize)
    }, Pa.prototype.componentWillUnmount = function() {
        this.context.removeResizeHandler(this.handleResize)
    }, Pa.prototype.updateAvailableWidth = function() {
        this.el && this.props.aspectRatio && this.setState({
            availableWidth: this.el.offsetWidth
        })
    }, Pa);

    function Pa() {
        var t = null !== xa && xa.apply(this, arguments) || this;
        return t.state = {
            availableWidth: null
        }, t.handleEl = function(e) {
            t.el = e, Vo(t.props.elRef, e), t.updateAvailableWidth()
        }, t.handleResize = function() {
            t.updateAvailableWidth()
        }, t
    }
    var Ia, Na = (t(Ha, Ia = ha), Ha);

    function Ha(e) {
        var a = Ia.call(this, e) || this;
        return a.handleSegClick = function(e, t) {
            var n, r = a.component,
                o = r.context,
                i = Vn(t);
            i && r.isValidSegDownEl(e.target) && (n = (n = he(e.target, ".fc-event-forced-url")) ? n.querySelector("a[href]").href : "", o.emitter.trigger("eventClick", {
                el: t,
                event: new gr(r.context, i.eventRange.def, i.eventRange.instance),
                jsEvent: e,
                view: o.viewApi
            }), n && !e.defaultPrevented && (window.location.href = n))
        }, a.destroy = be(e.el, "click", ".fc-event", a.handleSegClick), a
    }
    var Oa, Aa = (t(Ua, Oa = ha), Ua.prototype.destroy = function() {
        this.removeHoverListeners()
    }, Ua.prototype.triggerEvent = function(e, t, n) {
        var r = this.component,
            o = r.context,
            i = Vn(n);
        t && !r.isValidSegDownEl(t.target) || o.emitter.trigger(e, {
            el: n,
            event: new gr(o, i.eventRange.def, i.eventRange.instance),
            jsEvent: t,
            view: o.viewApi
        })
    }, Ua);

    function Ua(e) {
        var t, r, o, i, n = Oa.call(this, e) || this;
        return n.handleEventElRemove = function(e) {
            e === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl)
        }, n.handleSegEnter = function(e, t) {
            Vn(t) && (n.currentSegEl = t, n.triggerEvent("eventMouseEnter", e, t))
        }, n.handleSegLeave = function(e, t) {
            n.currentSegEl && (n.currentSegEl = null, n.triggerEvent("eventMouseLeave", e, t))
        }, n.removeHoverListeners = (t = e.el, e = ".fc-event", r = n.handleSegEnter, o = n.handleSegLeave, be(t, "mouseover", e, function(e, t) {
            var n;
            t !== i && (r(e, i = t), n = function(e) {
                i = null, o(e, t), t.removeEventListener("mouseleave", n)
            }, t.addEventListener("mouseleave", n))
        })), n
    }
    var La, Wa = (t(Va, La = No), Va.prototype.render = function() {
        var e, t = this.props,
            n = t.toolbarConfig,
            r = t.options,
            o = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, pr(t.options.now, t.dateEnv), t.viewTitle),
            i = !1,
            a = "";
        t.isHeightAuto || t.forPrint ? a = "" : null != r.height ? i = !0 : null != r.contentHeight ? a = r.contentHeight : e = Math.max(r.aspectRatio, .5);
        r = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
        return So(Mo.Provider, {
            value: r
        }, n.headerToolbar && So(_a, P({
            ref: this.headerRef,
            extraClassName: "fc-header-toolbar",
            model: n.headerToolbar
        }, o)), So(Ma, {
            liquid: i,
            height: a,
            aspectRatio: e,
            onClick: this.handleNavLinkClick
        }, this.renderView(t), this.buildAppendContent()), n.footerToolbar && So(_a, P({
            ref: this.footerRef,
            extraClassName: "fc-footer-toolbar",
            model: n.footerToolbar
        }, o)))
    }, Va.prototype.componentDidMount = function() {
        var t = this.props;
        this.calendarInteractions = t.pluginHooks.calendarInteractions.map(function(e) {
            return new e(t)
        }), window.addEventListener("resize", this.handleWindowResize);
        var e, n = t.pluginHooks.propSetHandlers;
        for (e in n) n[e](t[e], t)
    }, Va.prototype.componentDidUpdate = function(e) {
        var t, n = this.props,
            r = n.pluginHooks.propSetHandlers;
        for (t in r) n[t] !== e[t] && r[t](n[t], n)
    }, Va.prototype.componentWillUnmount = function() {
        window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
        for (var e = 0, t = this.calendarInteractions; e < t.length; e++) t[e].destroy();
        this.props.emitter.trigger("_unmount")
    }, Va.prototype._handleNavLinkClick = function(e, t) {
        var n = this.props,
            r = n.dateEnv,
            o = n.options,
            i = n.calendarApi,
            n = (n = t.getAttribute("data-navlink")) ? JSON.parse(n) : {},
            t = r.createMarker(n.date),
            n = n.type,
            o = "day" === n ? o.navLinkDayClick : "week" === n ? o.navLinkWeekClick : null;
        "function" == typeof o ? o.call(i, r.toDate(t), e) : i.zoomTo(t, n = "string" == typeof o ? o : n)
    }, Va.prototype.buildAppendContent = function() {
        var t = this.props,
            e = t.pluginHooks.viewContainerAppends.map(function(e) {
                return e(t)
            });
        return So.apply(void 0, f([Co, {}], e))
    }, Va.prototype.renderView = function(e) {
        for (var t = e.pluginHooks, n = e.viewSpec, r = {
                dateProfile: e.dateProfile,
                businessHours: e.businessHours,
                eventStore: e.renderableEventStore,
                eventUiBases: e.eventUiBases,
                dateSelection: e.dateSelection,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                isHeightAuto: e.isHeightAuto,
                forPrint: e.forPrint
            }, o = 0, i = this.buildViewPropTransformers(t.viewPropsTransformers); o < i.length; o++) {
            var a = i[o];
            P(r, a.transform(r, e))
        }
        n = n.component;
        return So(n, P({}, r))
    }, Va);

    function Va() {
        var r = null !== La && La.apply(this, arguments) || this;
        return r.buildViewContext = Pt(Po), r.buildViewPropTransformers = Pt(za), r.buildToolbarProps = Pt(Fa), r.handleNavLinkClick = De("a[data-navlink]", r._handleNavLinkClick.bind(r)), r.headerRef = bo(), r.footerRef = bo(), r.interactionsStore = {}, r.registerInteractiveComponent = function(e, t) {
            var n = {
                    component: e,
                    el: (t = t).el,
                    useEventCenter: null == t.useEventCenter || t.useEventCenter,
                    isHitComboAllowed: t.isHitComboAllowed || null
                },
                t = [Na, Aa].concat(r.props.pluginHooks.componentInteractions).map(function(e) {
                    return new e(n)
                });
            r.interactionsStore[e.uid] = t, ma[e.uid] = n
        }, r.unregisterInteractiveComponent = function(e) {
            for (var t = 0, n = r.interactionsStore[e.uid]; t < n.length; t++) n[t].destroy();
            delete r.interactionsStore[e.uid], delete ma[e.uid]
        }, r.resizeRunner = new Li(function() {
            r.props.emitter.trigger("_resize", !0), r.props.emitter.trigger("windowResize", {
                view: r.props.viewApi
            })
        }), r.handleWindowResize = function(e) {
            var t = r.props.options;
            t.handleWindowResize && e.target === window && r.resizeRunner.request(t.windowResizeDelay)
        }, r
    }

    function Fa(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1),
            s = n.buildPrev(t, r, !1),
            r = n.buildNext(t, r, !1);
        return {
            title: i,
            activeButton: e.type,
            isTodayEnabled: a.isValid && !An(t.currentRange, o),
            isPrevEnabled: s.isValid,
            isNextEnabled: r.isValid
        }
    }

    function za(e) {
        return e.map(function(e) {
            return new e
        })
    }
    var Ba, ja = (t(Ga, Ba = Ao), Ga.prototype.render = function() {
        var e = this.props,
            t = e.options,
            n = this.state.forPrint,
            r = n || "auto" === t.height || "auto" === t.contentHeight,
            o = r || null == t.height ? "" : t.height,
            t = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
        return Vr() || t.push("fc-liquid-hack"), e.children(t, o, r, n)
    }, Ga.prototype.componentDidMount = function() {
        var e = this.props.emitter;
        e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint)
    }, Ga.prototype.componentWillUnmount = function() {
        var e = this.props.emitter;
        e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint)
    }, Ga);

    function Ga() {
        var e = null !== Ba && Ba.apply(this, arguments) || this;
        return e.state = {
            forPrint: !1
        }, e.handleBeforePrint = function() {
            e.setState({
                forPrint: !0
            })
        }, e.handleAfterPrint = function() {
            e.setState({
                forPrint: !1
            })
        }, e
    }

    function qa(e, t) {
        return Xt(!e || 10 < t ? {
            weekday: "short"
        } : 1 < t ? {
            weekday: "short",
            month: "numeric",
            day: "numeric",
            omitCommas: !0
        } : {
            weekday: "long"
        })
    }
    var Ya = "fc-col-header-cell";

    function Za(e) {
        return e.text
    }
    var Xa, Ka = (t($a, Xa = Ao), $a.prototype.render = function() {
        var e = this.context,
            t = e.dateEnv,
            n = e.options,
            r = e.theme,
            o = e.viewApi,
            i = this.props,
            a = i.date,
            e = i.dateProfile,
            s = Gr(a, i.todayRange, null, e),
            l = [Ya].concat(qr(s, r)),
            r = t.format(a, i.dayHeaderFormat),
            u = n.navLinks && !s.isDisabled && 1 < i.colCnt ? {
                "data-navlink": Yr(a),
                tabIndex: 0
            } : {},
            r = P(P(P({
                date: t.toDate(a),
                view: o
            }, i.extraHookProps), {
                text: r
            }), s);
        return So($o, {
            hookProps: r,
            classNames: n.dayHeaderClassNames,
            content: n.dayHeaderContent,
            defaultContent: Za,
            didMount: n.dayHeaderDidMount,
            willUnmount: n.dayHeaderWillUnmount
        }, function(e, t, n, r) {
            return So("th", P({
                ref: e,
                className: l.concat(t).join(" "),
                "data-date": s.isDisabled ? void 0 : _t(a),
                colSpan: i.colSpan
            }, i.extraDataAttrs), So("div", {
                className: "fc-scrollgrid-sync-inner"
            }, !s.isDisabled && So("a", P({
                ref: n,
                className: ["fc-col-header-cell-cushion", i.isSticky ? "fc-sticky" : ""].join(" ")
            }, u), r)))
        })
    }, $a);

    function $a() {
        return null !== Xa && Xa.apply(this, arguments) || this
    }
    var Ja, Qa = (t(es, Ja = Ao), es.prototype.render = function() {
        var o = this.props,
            e = this.context,
            t = e.dateEnv,
            n = e.theme,
            r = e.viewApi,
            i = e.options,
            a = Be(new Date(2592e5), o.dow),
            e = {
                dow: o.dow,
                isDisabled: !1,
                isFuture: !1,
                isPast: !1,
                isToday: !1,
                isOther: !1
            },
            s = [Ya].concat(qr(e, n), o.extraClassNames || []),
            t = t.format(a, o.dayHeaderFormat),
            t = P(P(P(P({
                date: a
            }, e), {
                view: r
            }), o.extraHookProps), {
                text: t
            });
        return So($o, {
            hookProps: t,
            classNames: i.dayHeaderClassNames,
            content: i.dayHeaderContent,
            defaultContent: Za,
            didMount: i.dayHeaderDidMount,
            willUnmount: i.dayHeaderWillUnmount
        }, function(e, t, n, r) {
            return So("th", P({
                ref: e,
                className: s.concat(t).join(" "),
                colSpan: o.colSpan
            }, o.extraDataAttrs), So("div", {
                className: "fc-scrollgrid-sync-inner"
            }, So("a", {
                className: ["fc-col-header-cell-cushion", o.isSticky ? "fc-sticky" : ""].join(" "),
                ref: n
            }, r)))
        })
    }, es);

    function es() {
        return null !== Ja && Ja.apply(this, arguments) || this
    }
    var ts, ns = (t(rs, ts = Eo), rs.prototype.render = function() {
        var e = this.props,
            t = this.state;
        return e.children(t.nowDate, t.todayRange)
    }, rs.prototype.componentDidMount = function() {
        this.setTimeout()
    }, rs.prototype.componentDidUpdate = function(e) {
        e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout())
    }, rs.prototype.componentWillUnmount = function() {
        this.clearTimeout()
    }, rs.prototype.computeTiming = function() {
        var e = this.props,
            t = this.context,
            n = je(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs),
            r = t.dateEnv.startOf(n, e.unit),
            e = t.dateEnv.add(r, yt(1, e.unit)),
            n = e.valueOf() - n.valueOf(),
            n = Math.min(864e5, n);
        return {
            currentState: {
                nowDate: r,
                todayRange: os(r)
            },
            nextState: {
                nowDate: e,
                todayRange: os(e)
            },
            waitMs: n
        }
    }, rs.prototype.setTimeout = function() {
        var e = this,
            t = this.computeTiming(),
            n = t.nextState,
            t = t.waitMs;
        this.timeoutId = setTimeout(function() {
            e.setState(n, function() {
                e.setTimeout()
            })
        }, t)
    }, rs.prototype.clearTimeout = function() {
        this.timeoutId && clearTimeout(this.timeoutId)
    }, rs.contextType = Mo, rs);

    function rs(e, t) {
        e = ts.call(this, e, t) || this;
        return e.initialNowDate = pr(t.options.now, t.dateEnv), e.initialNowQueriedMs = (new Date).valueOf(), e.state = e.computeTiming().currentState, e
    }

    function os(e) {
        e = Ke(e);
        return {
            start: e,
            end: Be(e, 1)
        }
    }
    var is, as = (t(ss, is = Ao), ss.prototype.render = function() {
        var e = this.context,
            t = this.props,
            n = t.dates,
            r = t.dateProfile,
            o = t.datesRepDistinctDays,
            i = t.renderIntro,
            a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
        return So(ns, {
            unit: "day"
        }, function(e, t) {
            return So("tr", null, i && i("day"), n.map(function(e) {
                return o ? So(Ka, {
                    key: e.toISOString(),
                    date: e,
                    dateProfile: r,
                    todayRange: t,
                    colCnt: n.length,
                    dayHeaderFormat: a
                }) : So(Qa, {
                    key: e.getUTCDay(),
                    dow: e.getUTCDay(),
                    dayHeaderFormat: a
                })
            }))
        })
    }, ss);

    function ss() {
        var e = null !== is && is.apply(this, arguments) || this;
        return e.createDayHeaderFormatter = Pt(ls), e
    }

    function ls(e, t, n) {
        return e || qa(t, n)
    }
    var us = (cs.prototype.sliceRange = function(e) {
        var t = this.getDateDayIndex(e.start),
            n = this.getDateDayIndex(Be(e.end, -1)),
            r = Math.max(0, t),
            e = Math.min(this.cnt - 1, n);
        return (r = Math.ceil(r)) <= (e = Math.floor(e)) ? {
            firstIndex: r,
            lastIndex: e,
            isStart: t === r,
            isEnd: n === e
        } : null
    }, cs.prototype.getDateDayIndex = function(e) {
        var t = this.indices,
            e = Math.floor(qe(this.dates[0], e));
        return e < 0 ? t[0] - 1 : e >= t.length ? t[t.length - 1] + 1 : t[e]
    }, cs);

    function cs(e, t) {
        for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r;) t.isHiddenDay(n) ? o.push(a + .5) : (o.push(a += 1), i.push(n)), n = Be(n, 1);
        this.dates = i, this.indices = o, this.cnt = i.length
    }
    var ds = (ps.prototype.buildCells = function() {
        for (var e = [], t = 0; t < this.rowCnt; t += 1) {
            for (var n = [], r = 0; r < this.colCnt; r += 1) n.push(this.buildCell(t, r));
            e.push(n)
        }
        return e
    }, ps.prototype.buildCell = function(e, t) {
        t = this.daySeries.dates[e * this.colCnt + t];
        return {
            key: t.toISOString(),
            date: t
        }
    }, ps.prototype.buildHeaderDates = function() {
        for (var e = [], t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
        return e
    }, ps.prototype.sliceRange = function(e) {
        var t = this.colCnt,
            n = this.daySeries.sliceRange(e),
            r = [];
        if (n)
            for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i;) {
                var s = Math.floor(a / t),
                    l = Math.min((s + 1) * t, i + 1);
                r.push({
                    row: s,
                    firstCol: a % t,
                    lastCol: (l - 1) % t,
                    isStart: n.isStart && a === o,
                    isEnd: n.isEnd && l - 1 === i
                }), a = l
            }
        return r
    }, ps);

    function ps(e, t) {
        var n, r, o, i = e.dates;
        if (t) {
            for (r = i[0].getUTCDay(), n = 1; n < i.length && i[n].getUTCDay() !== r; n += 1);
            o = Math.ceil(i.length / n)
        } else o = 1, n = i.length;
        this.rowCnt = o, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates()
    }
    var fs = (hs.prototype.sliceProps = function(e, t, n, r) {
        for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
        var a = e.eventUiBases,
            s = this.sliceEventStore.apply(this, f([e.eventStore, a, t, n], o));
        return {
            dateSelectionSegs: this.sliceDateSelection.apply(this, f([e.dateSelection, a, r], o)),
            businessHourSegs: this.sliceBusinessHours.apply(this, f([e.businessHours, t, n, r], o)),
            fgEventSegs: s.fg,
            bgEventSegs: s.bg,
            eventDrag: this.sliceEventDrag.apply(this, f([e.eventDrag, a, t, n], o)),
            eventResize: this.sliceEventResize.apply(this, f([e.eventResize, a, t, n], o)),
            eventSelection: e.eventSelection
        }
    }, hs.prototype.sliceNowDate = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        return this._sliceDateSpan.apply(this, f([{
            range: {
                start: e,
                end: je(e, 1)
            },
            allDay: !1
        }, {}, t], n))
    }, hs.prototype._sliceBusinessHours = function(e, t, n, r) {
        for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
        return e ? this._sliceEventStore.apply(this, f([gt(e, gs(t, Boolean(n)), r), {}, t, n], o)).bg : []
    }, hs.prototype._sliceEventStore = function(e, t, n, r) {
        for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
        if (e) {
            r = Un(e, t, gs(n, Boolean(r)), r);
            return {
                bg: this.sliceEventRanges(r.bg, o),
                fg: this.sliceEventRanges(r.fg, o)
            }
        }
        return {
            bg: [],
            fg: []
        }
    }, hs.prototype._sliceInteraction = function(e, t, n, r) {
        for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
        if (!e) return null;
        r = Un(e.mutatedEvents, t, gs(n, Boolean(r)), r);
        return {
            segs: this.sliceEventRanges(r.fg, o),
            affectedInstances: e.affectedEvents.instances,
            isEvent: e.isEvent
        }
    }, hs.prototype._sliceDateSpan = function(e, t, n) {
        for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
        if (!e) return [];
        for (var i, a, s = (i = e, a = t, {
                def: t = Rn((n = Cn({
                    editable: !1
                }, t = n)).refined, n.extra, "", i.allDay, !0, t),
                ui: zn(t, a),
                instance: ot(t.defId, i.range),
                range: i.range,
                isStart: !0,
                isEnd: !0
            }), e = this.sliceRange.apply(this, f([e.range], r)), l = 0, u = e; l < u.length; l++) u[l].eventRange = s;
        return e
    }, hs.prototype.sliceEventRanges = function(e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            n.push.apply(n, this.sliceEventRange(i, t))
        }
        return n
    }, hs.prototype.sliceEventRange = function(e, t) {
        var n = e.range;
        this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
            start: n.start,
            end: Be(n.start, 1)
        });
        for (var t = this.sliceRange.apply(this, f([n], t)), r = 0, o = t; r < o.length; r++) {
            var i = o[r];
            i.eventRange = e, i.isStart = e.isStart && i.isStart, i.isEnd = e.isEnd && i.isEnd
        }
        return t
    }, hs);

    function hs() {
        this.sliceBusinessHours = Pt(this._sliceBusinessHours), this.sliceDateSelection = Pt(this._sliceDateSpan), this.sliceEventStore = Pt(this._sliceEventStore), this.sliceEventDrag = Pt(this._sliceInteraction), this.sliceEventResize = Pt(this._sliceInteraction), this.forceDayIfListItem = !1
    }

    function gs(e, t) {
        var n = e.activeRange;
        return t ? n : {
            start: je(n.start, e.slotMinTime.milliseconds),
            end: je(n.end, e.slotMaxTime.milliseconds - 864e5)
        }
    }

    function vs(e, t, n) {
        var r, o = e.mutatedEvents.instances;
        for (r in o)
            if (!On(t.validRange, o[r].range)) return !1;
        return ys({
            eventDrag: e
        }, n)
    }

    function ms(e, t, n) {
        return !!On(t.validRange, e.range) && ys({
            dateSelection: e
        }, n)
    }

    function ys(e, t) {
        var n = t.getCurrentData(),
            e = P({
                businessHours: n.businessHours,
                dateSelection: "",
                eventStore: n.eventStore,
                eventUiBases: n.eventUiBases,
                eventSelection: "",
                eventDrag: null,
                eventResize: null
            }, e);
        return (t.pluginHooks.isPropsValid || Es)(e, t)
    }

    function Es(e, t, n, r) {
        return void 0 === n && (n = {}), !(e.eventDrag && ! function(e, t, n, r) {
            var o = t.getCurrentData(),
                i = e.eventDrag,
                a = i.mutatedEvents,
                s = a.defs,
                l = a.instances,
                u = Fn(s, i.isEvent ? e.eventUiBases : {
                    "": o.selectionConfig
                });
            r && (u = lt(u, r));
            var c, d = function(e, t) {
                    return {
                        defs: e.defs,
                        instances: st(e.instances, function(e) {
                            return !t[e.instanceId]
                        })
                    }
                }(e.eventStore, i.affectedEvents.instances),
                p = d.defs,
                f = d.instances,
                h = Fn(p, e.eventUiBases);
            for (c in l) {
                var g = l[c],
                    v = g.range,
                    m = u[g.defId],
                    y = s[g.defId];
                if (!Ss(m.constraints, v, d, e.businessHours, t)) return !1;
                var E, S = t.options.eventOverlap,
                    D = "function" == typeof S ? S : null;
                for (E in f) {
                    var b = f[E];
                    if (Hn(v, b.range)) {
                        if (!1 === h[b.defId].overlap && i.isEvent) return !1;
                        if (!1 === m.overlap) return !1;
                        if (D && !D(new gr(t, p[b.defId], b), new gr(t, y, g))) return !1
                    }
                }
                for (var C = o.eventStore, w = 0, R = m.allows; w < R.length; w++) {
                    var T = R[w],
                        _ = P(P({}, n), {
                            range: g.range,
                            allDay: y.allDay
                        }),
                        k = C.defs[y.defId],
                        x = C.instances[c],
                        M = void 0;
                    if (M = k ? new gr(t, k, x) : new gr(t, y), !T(or(_, t), M)) return !1
                }
            }
            return !0
        }(e, t, n, r)) && !(e.dateSelection && ! function(e, t, n, r) {
            var o = e.eventStore,
                i = o.defs,
                a = o.instances,
                s = e.dateSelection,
                l = s.range,
                u = t.getCurrentData().selectionConfig;
            r && (u = r(u));
            if (!Ss(u.constraints, l, o, e.businessHours, t)) return !1;
            var c, e = t.options.selectOverlap,
                d = "function" == typeof e ? e : null;
            for (c in a) {
                var p = a[c];
                if (Hn(l, p.range)) {
                    if (!1 === u.overlap) return !1;
                    if (d && !d(new gr(t, i[p.defId], p), null)) return !1
                }
            }
            for (var f = 0, h = u.allows; f < h.length; f++) {
                var g = h[f],
                    v = P(P({}, n), s);
                if (!g(or(v, t), null)) return !1
            }
            return !0
        }(e, t, n, r))
    }

    function Ss(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++)
            if (! function(e, t) {
                    for (var n = 0, r = e; n < r.length; n++)
                        if (On(r[n], t)) return !0;
                    return !1
                }(function(t, e, n, r, o) {
                    if ("businessHours" === t) return Ds(gt(r, e, o));
                    if ("string" == typeof t) return Ds(pn(n, function(e) {
                        return e.groupId === t
                    }));
                    if ("object" == typeof t && t) return Ds(gt(t, e, o));
                    return []
                }(a[i], t, n, r, o), t)) return;
        return 1
    }

    function Ds(e) {
        var t, n = e.instances,
            r = [];
        for (t in n) r.push(n[t].range);
        return r
    }
    var bs, Cs = /^(visible|hidden)$/,
        ws = (t(Rs, bs = Ao), Rs.prototype.render = function() {
            var e = this.props,
                t = e.liquid,
                n = e.liquidIsAbsolute,
                r = t && n,
                o = ["fc-scroller"];
            return t && (n ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), So("div", {
                ref: this.handleEl,
                className: o.join(" "),
                style: {
                    overflowX: e.overflowX,
                    overflowY: e.overflowY,
                    left: r && -(e.overcomeLeft || 0) || "",
                    right: r && -(e.overcomeRight || 0) || "",
                    bottom: r && -(e.overcomeBottom || 0) || "",
                    marginLeft: !r && -(e.overcomeLeft || 0) || "",
                    marginRight: !r && -(e.overcomeRight || 0) || "",
                    marginBottom: !r && -(e.overcomeBottom || 0) || "",
                    maxHeight: e.maxHeight || ""
                }
            }, e.children)
        }, Rs.prototype.needsXScrolling = function() {
            if (Cs.test(this.props.overflowX)) return !1;
            for (var e = this.el, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1)
                if (n[r].getBoundingClientRect().width > t) return !0;
            return !1
        }, Rs.prototype.needsYScrolling = function() {
            if (Cs.test(this.props.overflowY)) return !1;
            for (var e = this.el, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1)
                if (n[r].getBoundingClientRect().height > t) return !0;
            return !1
        }, Rs.prototype.getXScrollbarWidth = function() {
            return Cs.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
        }, Rs.prototype.getYScrollbarWidth = function() {
            return Cs.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
        }, Rs);

    function Rs() {
        var t = null !== bs && bs.apply(this, arguments) || this;
        return t.handleEl = function(e) {
            t.el = e, Vo(t.props.elRef, e)
        }, t
    }
    var Ts = (_s.prototype.createRef = function(t) {
        var n = this;
        return this.callbackMap[t] || (this.callbackMap[t] = function(e) {
            n.handleValue(e, String(t))
        })
    }, _s.prototype.collect = function(e, t, n) {
        return ht(this.currentMap, e, t, n)
    }, _s.prototype.getAll = function() {
        return ct(this.currentMap)
    }, _s);

    function _s(e) {
        var a = this;
        this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(e, t) {
            var n = a.depths,
                r = a.currentMap,
                o = !1,
                i = !1;
            null !== e ? (o = t in r, r[t] = e, n[t] = (n[t] || 0) + 1, i = !0) : (--n[t], n[t] || (delete r[t], delete a.callbackMap[t], o = !0)), a.masterCallback && (o && a.masterCallback(null, String(t)), i && a.masterCallback(e, String(t)))
        }
    }

    function ks(e) {
        for (var t = 0, n = 0, r = ve(e, ".fc-scrollgrid-shrink"); n < r.length; n++) var o = r[n],
            t = Math.max(t, Ve(o));
        return Math.ceil(t)
    }

    function xs(e, t) {
        return e.liquid && t.liquid
    }

    function Ms(e, t) {
        return null != t.maxHeight || xs(e, t)
    }

    function Ps(e, t, n) {
        var r = n.expandRows;
        return "function" == typeof t.content ? t.content(n) : So("table", {
            className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
            style: {
                minWidth: n.tableMinWidth,
                width: n.clientWidth,
                height: r ? n.clientHeight : ""
            }
        }, n.tableColGroupNode, So("tbody", {}, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent))
    }

    function Is(e, t) {
        return Mt(e, t, dt)
    }

    function Ns(e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++)
            for (var i = o[r], a = i.span || 1, s = 0; s < a; s += 1) n.push(So("col", {
                style: {
                    width: "shrink" === i.width ? Hs(t) : i.width || "",
                    minWidth: i.minWidth || ""
                }
            }));
        return So.apply(void 0, f(["colgroup", {}], n))
    }

    function Hs(e) {
        return null == e ? 4 : e
    }

    function Os(e) {
        for (var t = 0, n = e; t < n.length; t++)
            if ("shrink" === n[t].width) return !0;
        return !1
    }

    function As(e, t) {
        t = ["fc-scrollgrid", t.theme.getClass("table")];
        return e && t.push("fc-scrollgrid-liquid"), t
    }

    function Us(e, t) {
        var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
        return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n
    }

    function Ls(e) {
        return So("div", {
            className: "fc-scrollgrid-sticky-shim",
            style: {
                width: e.clientWidth,
                minWidth: e.tableMinWidth
            }
        })
    }

    function Ws(e) {
        var t = e.stickyHeaderDates;
        return t = null == t || "auto" === t ? "auto" === e.height || "auto" === e.viewHeight : t
    }

    function Vs(e) {
        var t = e.stickyFooterScrollbar;
        return t = null == t || "auto" === t ? "auto" === e.height || "auto" === e.viewHeight : t
    }
    var Fs, zs = (t(Bs, Fs = Ao), Bs.prototype.render = function() {
        var e = this.props,
            t = this.state,
            n = this.context,
            r = e.sections || [],
            o = this.processCols(e.cols),
            i = this.renderMicroColGroup(o, t.shrinkWidth),
            t = As(e.liquid, n);
        e.collapsibleWidth && t.push("fc-scrollgrid-collapsible");
        for (var a, s = r.length, l = 0, u = [], c = [], d = []; l < s && "header" === (a = r[l]).type;) u.push(this.renderSection(a, i)), l += 1;
        for (; l < s && "body" === (a = r[l]).type;) c.push(this.renderSection(a, i)), l += 1;
        for (; l < s && "footer" === (a = r[l]).type;) d.push(this.renderSection(a, i)), l += 1;
        n = !Vr();
        return So("table", {
            className: t.join(" "),
            style: {
                height: e.height
            }
        }, Boolean(!n && u.length) && So.apply(void 0, f(["thead", {}], u)), Boolean(!n && c.length) && So.apply(void 0, f(["tbody", {}], c)), Boolean(!n && d.length) && So.apply(void 0, f(["tfoot", {}], d)), n && So.apply(void 0, f(f(f(["tbody", {}], u), c), d)))
    }, Bs.prototype.renderSection = function(e, t) {
        return "outerContent" in e ? So(Co, {
            key: e.key
        }, e.outerContent) : So("tr", {
            key: e.key,
            className: Us(e, this.props.liquid).join(" ")
        }, this.renderChunkTd(e, t, e.chunk))
    }, Bs.prototype.renderChunkTd = function(e, t, n) {
        if ("outerContent" in n) return n.outerContent;
        var r = this.props,
            o = this.state,
            i = o.forceYScrollbars,
            a = o.scrollerClientWidths,
            s = o.scrollerClientHeights,
            l = Ms(r, e),
            o = xs(r, e),
            i = r.liquid ? i ? "scroll" : l ? "auto" : "hidden" : "visible",
            l = e.key,
            s = Ps(e, n, {
                tableColGroupNode: t,
                tableMinWidth: "",
                clientWidth: r.collapsibleWidth || void 0 === a[l] ? null : a[l],
                clientHeight: void 0 !== s[l] ? s[l] : null,
                expandRows: e.expandRows,
                syncRowHeights: !1,
                rowSyncHeights: [],
                reportRowHeightChange: function() {}
            });
        return So("td", {
            ref: n.elRef
        }, So("div", {
            className: "fc-scroller-harness" + (o ? " fc-scroller-harness-liquid" : "")
        }, So(ws, {
            ref: this.scrollerRefs.createRef(l),
            elRef: this.scrollerElRefs.createRef(l),
            overflowY: i,
            overflowX: r.liquid ? "hidden" : "visible",
            maxHeight: e.maxHeight,
            liquid: o,
            liquidIsAbsolute: !0
        }, s)))
    }, Bs.prototype._handleScrollerEl = function(e, t) {
        t = function(e, t) {
            for (var n = 0, r = e; n < r.length; n++) {
                var o = r[n];
                if (o.key === t) return o
            }
            return null
        }(this.props.sections, t);
        t && Vo(t.chunk.scrollerElRef, e)
    }, Bs.prototype.componentDidMount = function() {
        this.handleSizing(), this.context.addResizeHandler(this.handleSizing)
    }, Bs.prototype.componentDidUpdate = function() {
        this.handleSizing()
    }, Bs.prototype.componentWillUnmount = function() {
        this.context.removeResizeHandler(this.handleSizing)
    }, Bs.prototype.computeShrinkWidth = function() {
        return Os(this.props.cols) ? ks(this.scrollerElRefs.getAll()) : 0
    }, Bs.prototype.computeScrollerDims = function() {
        var e = $r(),
            t = this.scrollerRefs,
            n = this.scrollerElRefs,
            r = !1,
            o = {},
            i = {};
        for (u in t.currentMap) {
            var a = t.currentMap[u];
            if (a && a.needsYScrolling()) {
                r = !0;
                break
            }
        }
        for (var s = 0, l = this.props.sections; s < l.length; s++) {
            var u = l[s].key,
                c = n.currentMap[u];
            c && (c = c.parentNode, o[u] = Math.floor(c.getBoundingClientRect().width - (r ? e.y : 0)), i[u] = Math.floor(c.getBoundingClientRect().height))
        }
        return {
            forceYScrollbars: r,
            scrollerClientWidths: o,
            scrollerClientHeights: i
        }
    }, Bs);

    function Bs() {
        var e = null !== Fs && Fs.apply(this, arguments) || this;
        return e.processCols = Pt(function(e) {
            return e
        }, Is), e.renderMicroColGroup = Pt(Ns), e.scrollerRefs = new Ts, e.scrollerElRefs = new Ts(e._handleScrollerEl.bind(e)), e.state = {
            shrinkWidth: null,
            forceYScrollbars: !1,
            scrollerClientWidths: {},
            scrollerClientHeights: {}
        }, e.handleSizing = function() {
            e.setState(P({
                shrinkWidth: e.computeShrinkWidth()
            }, e.computeScrollerDims()))
        }, e
    }
    zs.addStateEquality({
        scrollerClientWidths: dt,
        scrollerClientHeights: dt
    });
    var js, Gs = (t(qs, js = Ao), qs.prototype.render = function() {
        var o = this.props,
            e = this.context,
            t = e.options,
            n = o.seg,
            r = n.eventRange,
            i = r.ui,
            a = {
                event: new gr(e, r.def, r.instance),
                view: e.viewApi,
                timeText: o.timeText,
                textColor: i.textColor,
                backgroundColor: i.backgroundColor,
                borderColor: i.borderColor,
                isDraggable: !o.disableDragging && Gn(n, e),
                isStartResizable: !o.disableResizing && qn(n, e),
                isEndResizable: !o.disableResizing && Yn(n),
                isMirror: Boolean(o.isDragging || o.isResizing || o.isDateSelecting),
                isStart: Boolean(n.isStart),
                isEnd: Boolean(n.isEnd),
                isPast: Boolean(o.isPast),
                isFuture: Boolean(o.isFuture),
                isToday: Boolean(o.isToday),
                isSelected: Boolean(o.isSelected),
                isDragging: Boolean(o.isDragging),
                isResizing: Boolean(o.isResizing)
            },
            s = Kn(a).concat(i.classNames);
        return So($o, {
            hookProps: a,
            classNames: t.eventClassNames,
            content: t.eventContent,
            defaultContent: o.defaultContent,
            didMount: t.eventDidMount,
            willUnmount: t.eventWillUnmount,
            elRef: this.elRef
        }, function(e, t, n, r) {
            return o.children(e, s.concat(t), n, r, a)
        })
    }, qs.prototype.componentDidMount = function() {
        Wn(this.elRef.current, this.props.seg)
    }, qs.prototype.componentDidUpdate = function(e) {
        var t = this.props.seg;
        t !== e.seg && Wn(this.elRef.current, t)
    }, qs);

    function qs() {
        var e = null !== js && js.apply(this, arguments) || this;
        return e.elRef = bo(), e
    }
    var Ys, Zs = (t(Xs, Ys = Ao), Xs.prototype.render = function() {
        var i = this.props,
            e = this.context,
            a = i.seg,
            t = e.options.eventTimeFormat || i.defaultTimeFormat,
            e = Zn(a, t, e, i.defaultDisplayEventTime, i.defaultDisplayEventEnd);
        return So(Gs, {
            seg: a,
            timeText: e,
            disableDragging: i.disableDragging,
            disableResizing: i.disableResizing,
            defaultContent: i.defaultContent || Ks,
            isDragging: i.isDragging,
            isResizing: i.isResizing,
            isDateSelecting: i.isDateSelecting,
            isSelected: i.isSelected,
            isPast: i.isPast,
            isFuture: i.isFuture,
            isToday: i.isToday
        }, function(e, t, n, r, o) {
            return So("a", P({
                className: i.extraClassNames.concat(t).join(" "),
                style: {
                    borderColor: o.borderColor,
                    backgroundColor: o.backgroundColor
                },
                ref: e
            }, function(e) {
                e = e.eventRange.def.url;
                return e ? {
                    href: e
                } : {}
            }(a)), So("div", {
                className: "fc-event-main",
                ref: n,
                style: {
                    color: o.textColor
                }
            }, r), o.isStartResizable && So("div", {
                className: "fc-event-resizer fc-event-resizer-start"
            }), o.isEndResizable && So("div", {
                className: "fc-event-resizer fc-event-resizer-end"
            }))
        })
    }, Xs);

    function Xs() {
        return null !== Ys && Ys.apply(this, arguments) || this
    }

    function Ks(e) {
        return So("div", {
            className: "fc-event-main-frame"
        }, e.timeText && So("div", {
            className: "fc-event-time"
        }, e.timeText), So("div", {
            className: "fc-event-title-container"
        }, So("div", {
            className: "fc-event-title fc-sticky"
        }, e.event.title || So(Co, null, " "))))
    }

    function $s(n) {
        return So(Mo.Consumer, null, function(e) {
            var t = e.options,
                e = {
                    isAxis: n.isAxis,
                    date: e.dateEnv.toDate(n.date),
                    view: e.viewApi
                };
            return So($o, {
                hookProps: e,
                classNames: t.nowIndicatorClassNames,
                content: t.nowIndicatorContent,
                didMount: t.nowIndicatorDidMount,
                willUnmount: t.nowIndicatorWillUnmount
            }, n.children)
        })
    }
    var Js, Qs = Xt({
            day: "numeric"
        }),
        el = (t(tl, Js = Ao), tl.prototype.render = function() {
            var e = this.props,
                t = this.context,
                n = t.options,
                t = nl({
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    showDayNumber: e.showDayNumber,
                    extraProps: e.extraHookProps,
                    viewApi: t.viewApi,
                    dateEnv: t.dateEnv
                });
            return So(ei, {
                hookProps: t,
                content: n.dayCellContent,
                defaultContent: e.defaultContent
            }, e.children)
        }, tl);

    function tl() {
        return null !== Js && Js.apply(this, arguments) || this
    }

    function nl(e) {
        var t = e.date,
            n = e.dateEnv,
            r = Gr(t, e.todayRange, null, e.dateProfile);
        return P(P(P({
            date: n.toDate(t),
            view: e.viewApi
        }, r), {
            dayNumberText: e.showDayNumber ? n.format(t, Qs) : ""
        }), e.extraProps)
    }
    var rl, ol = (t(il, rl = Ao), il.prototype.render = function() {
        var t = this.props,
            e = this.context,
            n = e.options,
            r = this.refineHookProps({
                date: t.date,
                dateProfile: t.dateProfile,
                todayRange: t.todayRange,
                showDayNumber: t.showDayNumber,
                extraProps: t.extraHookProps,
                viewApi: e.viewApi,
                dateEnv: e.dateEnv
            }),
            o = qr(r, e.theme).concat(r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r)),
            i = r.isDisabled ? {} : {
                "data-date": _t(t.date)
            };
        return So(ii, {
            hookProps: r,
            didMount: n.dayCellDidMount,
            willUnmount: n.dayCellWillUnmount,
            elRef: t.elRef
        }, function(e) {
            return t.children(e, o, i, r.isDisabled)
        })
    }, il);

    function il() {
        var e = null !== rl && rl.apply(this, arguments) || this;
        return e.refineHookProps = It(nl), e.normalizeClassNames = si(), e
    }

    function al(e) {
        return So("div", {
            className: "fc-" + e
        })
    }

    function sl(e) {
        return So(Gs, {
            defaultContent: ll,
            seg: e.seg,
            timeText: "",
            disableDragging: !0,
            disableResizing: !0,
            isDragging: !1,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: !1,
            isPast: e.isPast,
            isFuture: e.isFuture,
            isToday: e.isToday
        }, function(e, t, n, r, o) {
            return So("div", {
                ref: e,
                className: ["fc-bg-event"].concat(t).join(" "),
                style: {
                    backgroundColor: o.backgroundColor
                }
            }, r)
        })
    }

    function ll(e) {
        return e.event.title && So("div", {
            className: "fc-event-title"
        }, e.event.title)
    }

    function ul(i) {
        return So(Mo.Consumer, null, function(e) {
            var t = e.dateEnv,
                n = e.options,
                r = i.date,
                o = n.weekNumberFormat || i.defaultFormat,
                e = t.computeWeekNumber(r),
                o = t.format(r, o);
            return So($o, {
                hookProps: {
                    num: e,
                    text: o,
                    date: r
                },
                classNames: n.weekNumberClassNames,
                content: n.weekNumberContent,
                defaultContent: cl,
                didMount: n.weekNumberDidMount,
                willUnmount: n.weekNumberWillUnmount
            }, i.children)
        })
    }

    function cl(e) {
        return e.text
    }
    var dl, pl = (t(fl, dl = Ao), fl.prototype.render = function() {
        var e = this.context.theme,
            t = this.props,
            n = ["fc-popover", e.getClass("popover")].concat(t.extraClassNames || []);
        return Ro(So("div", P({
            className: n.join(" ")
        }, t.extraAttrs, {
            ref: this.handleRootEl
        }), So("div", {
            className: "fc-popover-header " + e.getClass("popoverHeader")
        }, So("span", {
            className: "fc-popover-title"
        }, t.title), So("span", {
            className: "fc-popover-close " + e.getIconClass("close"),
            onClick: this.handleCloseClick
        })), So("div", {
            className: "fc-popover-body " + e.getClass("popoverContent")
        }, t.children)), t.parentEl)
    }, fl.prototype.componentDidMount = function() {
        document.addEventListener("mousedown", this.handleDocumentMousedown), this.updateSize()
    }, fl.prototype.componentWillUnmount = function() {
        document.removeEventListener("mousedown", this.handleDocumentMousedown)
    }, fl.prototype.updateSize = function() {
        var e = this.context.isRtl,
            t = this.props,
            n = t.alignmentEl,
            r = t.alignGridTop,
            o = this.rootEl,
            i = function(e) {
                for (var t = no(e), n = e.getBoundingClientRect(), r = 0, o = t; r < o.length; r++) {
                    var i = Ar(n, o[r].getBoundingClientRect());
                    if (!i) return null;
                    n = i
                }
                return n
            }(n);
        i && (t = o.getBoundingClientRect(), n = (r ? he(n, ".fc-scrollgrid").getBoundingClientRect() : i).top, i = e ? i.right - t.width : i.left, n = Math.max(n, 10), i = Math.min(i, document.documentElement.clientWidth - 10 - t.width), i = Math.max(i, 10), t = o.offsetParent.getBoundingClientRect(), ye(o, {
            top: n - t.top,
            left: i - t.left
        }))
    }, fl);

    function fl() {
        var n = null !== dl && dl.apply(this, arguments) || this;
        return n.handleRootEl = function(e) {
            n.rootEl = e, n.props.elRef && Vo(n.props.elRef, e)
        }, n.handleDocumentMousedown = function(e) {
            var t, t = null !== (e = null === (e = (t = e).composedPath) || void 0 === e ? void 0 : e.call(t)[0]) && void 0 !== e ? e : t.target;
            n.rootEl.contains(t) || n.handleCloseClick()
        }, n.handleCloseClick = function() {
            var e = n.props.onClose;
            e && e()
        }, n
    }
    var hl, gl = (t(vl, hl = zo), vl.prototype.render = function() {
        var e = this.context,
            t = e.options,
            e = e.dateEnv,
            r = this.props,
            o = r.startDate,
            i = r.todayRange,
            a = r.dateProfile,
            s = e.format(o, t.dayPopoverFormat);
        return So(ol, {
            date: o,
            dateProfile: a,
            todayRange: i,
            elRef: this.handleRootEl
        }, function(e, t, n) {
            return So(pl, {
                elRef: e,
                title: s,
                extraClassNames: ["fc-more-popover"].concat(t),
                extraAttrs: n,
                parentEl: r.parentEl,
                alignmentEl: r.alignmentEl,
                alignGridTop: r.alignGridTop,
                onClose: r.onClose
            }, So(el, {
                date: o,
                dateProfile: a,
                todayRange: i
            }, function(e, t) {
                return t && So("div", {
                    className: "fc-more-popover-misc",
                    ref: e
                }, t)
            }), r.children)
        })
    }, vl.prototype.queryHit = function(e, t, n, r) {
        var o = this.rootEl,
            i = this.props;
        return 0 <= e && e < n && 0 <= t && t < r ? {
            dateProfile: i.dateProfile,
            dateSpan: P({
                allDay: !0,
                range: {
                    start: i.startDate,
                    end: i.endDate
                }
            }, i.extraDateSpan),
            dayEl: o,
            rect: {
                left: 0,
                top: 0,
                right: n,
                bottom: r
            },
            layer: 1
        } : null
    }, vl);

    function vl() {
        var t = null !== hl && hl.apply(this, arguments) || this;
        return t.handleRootEl = function(e) {
            (t.rootEl = e) ? t.context.registerInteractiveComponent(t, {
                el: e,
                useEventCenter: !1
            }): t.context.unregisterInteractiveComponent(t)
        }, t
    }
    var ml, yl = (t(El, ml = Ao), El.prototype.render = function() {
        var a = this,
            s = this.props;
        return So(Mo.Consumer, null, function(e) {
            var t = e.viewApi,
                n = e.options,
                r = e.calendarApi,
                o = n.moreLinkText,
                i = s.moreCnt,
                e = Dl(s),
                t = {
                    num: i,
                    shortText: "+" + i,
                    text: "function" == typeof o ? o.call(r, i) : "+" + i + " " + o,
                    view: t
                };
            return So(Co, null, Boolean(s.moreCnt) && So($o, {
                elRef: a.linkElRef,
                hookProps: t,
                classNames: n.moreLinkClassNames,
                content: n.moreLinkContent,
                defaultContent: s.defaultContent || Sl,
                didMount: n.moreLinkDidMount,
                willUnmount: n.moreLinkWillUnmount
            }, function(e, t, n, r) {
                return s.children(e, ["fc-more-link"].concat(t), n, r, a.handleClick)
            }), a.state.isPopoverOpen && So(gl, {
                startDate: e.start,
                endDate: e.end,
                dateProfile: s.dateProfile,
                todayRange: s.todayRange,
                extraDateSpan: s.extraDateSpan,
                parentEl: a.parentEl,
                alignmentEl: s.alignmentElRef.current,
                alignGridTop: s.alignGridTop,
                onClose: a.handlePopoverClose
            }, s.popoverContent()))
        })
    }, El.prototype.componentDidMount = function() {
        this.updateParentEl()
    }, El.prototype.componentDidUpdate = function() {
        this.updateParentEl()
    }, El.prototype.updateParentEl = function() {
        this.linkElRef.current && (this.parentEl = he(this.linkElRef.current, ".fc-view-harness"))
    }, El);

    function El() {
        var a = null !== ml && ml.apply(this, arguments) || this;
        return a.linkElRef = bo(), a.state = {
            isPopoverOpen: !1
        }, a.handleClick = function(e) {
            var t = a.props,
                o = a.context,
                n = o.options.moreLinkClick,
                r = Dl(t).start;

            function i(e) {
                var t = e.eventRange,
                    n = t.def,
                    r = t.instance,
                    t = t.range;
                return {
                    event: new gr(o, n, r),
                    start: o.dateEnv.toDate(t.start),
                    end: o.dateEnv.toDate(t.end),
                    isStart: e.isStart,
                    isEnd: e.isEnd
                }
            }(n = "function" == typeof n ? n({
                date: r,
                allDay: Boolean(t.allDayDate),
                allSegs: t.allSegs.map(i),
                hiddenSegs: t.hiddenSegs.map(i),
                jsEvent: e,
                view: o.viewApi
            }) : n) && "popover" !== n ? "string" == typeof n && o.calendarApi.zoomTo(r, n) : a.setState({
                isPopoverOpen: !0
            })
        }, a.handlePopoverClose = function() {
            a.setState({
                isPopoverOpen: !1
            })
        }, a
    }

    function Sl(e) {
        return e.text
    }

    function Dl(e) {
        if (e.allDayDate) return {
            start: e.allDayDate,
            end: Be(e.allDayDate, 1)
        };
        e = e.hiddenSegs;
        return {
            start: bl(e),
            end: e.reduce(wl).eventRange.range.end
        }
    }

    function bl(e) {
        return e.reduce(Cl).eventRange.range.start
    }

    function Cl(e, t) {
        return e.eventRange.range.start < t.eventRange.range.start ? e : t
    }

    function wl(e, t) {
        return e.eventRange.range.end > t.eventRange.range.end ? e : t
    }
    var Rl, Tl = (t(_l, Rl = fr), Object.defineProperty(_l.prototype, "view", {
        get: function() {
            return this.currentData.viewApi
        },
        enumerable: !1,
        configurable: !0
    }), _l.prototype.render = function() {
        var e = this.isRendering;
        e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize()
    }, _l.prototype.destroy = function() {
        this.isRendering && (this.isRendering = !1, this.renderRunner.request())
    }, _l.prototype.updateSize = function() {
        Rl.prototype.updateSize.call(this), To()
    }, _l.prototype.batchRendering = function(e) {
        this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering")
    }, _l.prototype.pauseRendering = function() {
        this.renderRunner.pause("pauseRendering")
    }, _l.prototype.resumeRendering = function() {
        this.renderRunner.resume("pauseRendering", !0)
    }, _l.prototype.resetOptions = function(e, t) {
        this.currentDataManager.resetOptions(e, t)
    }, _l.prototype.setClassNames = function(e) {
        if (!Mt(e, this.currentClassNames)) {
            for (var t = this.el.classList, n = 0, r = this.currentClassNames; n < r.length; n++) {
                var o = r[n];
                t.remove(o)
            }
            for (var i = 0, a = e; i < a.length; i++) {
                o = a[i];
                t.add(o)
            }
            this.currentClassNames = e
        }
    }, _l.prototype.setHeight = function(e) {
        Ee(this.el, "height", e)
    }, _l);

    function _l(e, t) {
        void 0 === t && (t = {});
        var i = Rl.call(this) || this;
        return i.isRendering = !1, i.isRendered = !1, i.currentClassNames = [], i.customContentRenderId = 0, i.handleAction = function(e) {
            switch (e.type) {
                case "SET_EVENT_DRAG":
                case "SET_EVENT_RESIZE":
                    i.renderRunner.tryDrain()
            }
        }, i.handleData = function(e) {
            i.currentData = e, i.renderRunner.request(e.calendarOptions.rerenderDelay)
        }, i.handleRenderRequest = function() {
            var o;
            i.isRendering ? (i.isRendered = !0, o = i.currentData, Do(So(ja, {
                options: o.calendarOptions,
                theme: o.theme,
                emitter: o.emitter
            }, function(e, t, n, r) {
                return i.setClassNames(e), i.setHeight(t), So(Qo.Provider, {
                    value: i.customContentRenderId
                }, So(Wa, P({
                    isHeightAuto: n,
                    forPrint: r
                }, o)))
            }), i.el)) : i.isRendered && (i.isRendered = !1, _o(i.el), i.setClassNames([]), i.setHeight("")), To()
        }, i.el = e, i.renderRunner = new Li(i.handleRenderRequest), new Bi({
            optionOverrides: t,
            calendarApi: i,
            onAction: i.handleAction,
            onData: i.handleData
        }), i
    }
    Sa.touchMouseIgnoreWait = 500;
    var kl = 0,
        xl = 0,
        Ml = !1,
        Pl = (Il.prototype.destroy = function() {
            this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
                passive: !0
            }), --xl || window.removeEventListener("touchmove", Nl, {
                passive: !1
            })
        }, Il.prototype.tryStart = function(e) {
            var t = this.querySubjectEl(e),
                e = e.target;
            return !(!t || this.handleSelector && !he(e, this.handleSelector)) && (this.subjectEl = t, this.isDragging = !0, !(this.wasTouchScroll = !1))
        }, Il.prototype.cleanup = function() {
            Ml = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch()
        }, Il.prototype.querySubjectEl = function(e) {
            return this.selector ? he(e.target, this.selector) : this.containerEl
        }, Il.prototype.shouldIgnoreMouse = function() {
            return kl || this.isTouchDragging
        }, Il.prototype.cancelTouchScroll = function() {
            this.isDragging && (Ml = !0)
        }, Il.prototype.initScrollWatch = function(e) {
            this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0))
        }, Il.prototype.recordCoords = function(e) {
            this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset)
        }, Il.prototype.destroyScrollWatch = function() {
            this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
        }, Il.prototype.createEventFromMouse = function(e, t) {
            var n = 0,
                r = 0;
            return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
                origEvent: e,
                isTouch: !1,
                subjectEl: this.subjectEl,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: n,
                deltaY: r
            }
        }, Il.prototype.createEventFromTouch = function(e, t) {
            var n, r = e.touches,
                o = 0,
                i = 0,
                r = r && r.length ? (n = r[0].pageX, r[0].pageY) : (n = e.pageX, e.pageY);
            return t ? (this.origPageX = n, this.origPageY = r) : (o = n - this.origPageX, i = r - this.origPageY), {
                origEvent: e,
                isTouch: !0,
                subjectEl: this.subjectEl,
                pageX: n,
                pageY: r,
                deltaX: o,
                deltaY: i
            }
        }, Il);

    function Il(e) {
        var r = this;
        this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function(e) {
            var t;
            r.shouldIgnoreMouse() || (0 !== (t = e).button || t.ctrlKey) || !r.tryStart(e) || (e = r.createEventFromMouse(e, !0), r.emitter.trigger("pointerdown", e), r.initScrollWatch(e), r.shouldIgnoreMove || document.addEventListener("mousemove", r.handleMouseMove), document.addEventListener("mouseup", r.handleMouseUp))
        }, this.handleMouseMove = function(e) {
            e = r.createEventFromMouse(e);
            r.recordCoords(e), r.emitter.trigger("pointermove", e)
        }, this.handleMouseUp = function(e) {
            document.removeEventListener("mousemove", r.handleMouseMove), document.removeEventListener("mouseup", r.handleMouseUp), r.emitter.trigger("pointerup", r.createEventFromMouse(e)), r.cleanup()
        }, this.handleTouchStart = function(e) {
            var t;
            r.tryStart(e) && (r.isTouchDragging = !0, t = r.createEventFromTouch(e, !0), r.emitter.trigger("pointerdown", t), r.initScrollWatch(t), e = e.target, r.shouldIgnoreMove || e.addEventListener("touchmove", r.handleTouchMove), e.addEventListener("touchend", r.handleTouchEnd), e.addEventListener("touchcancel", r.handleTouchEnd), window.addEventListener("scroll", r.handleTouchScroll, !0))
        }, this.handleTouchMove = function(e) {
            e = r.createEventFromTouch(e);
            r.recordCoords(e), r.emitter.trigger("pointermove", e)
        }, this.handleTouchEnd = function(e) {
            var t;
            r.isDragging && ((t = e.target).removeEventListener("touchmove", r.handleTouchMove), t.removeEventListener("touchend", r.handleTouchEnd), t.removeEventListener("touchcancel", r.handleTouchEnd), window.removeEventListener("scroll", r.handleTouchScroll, !0), r.emitter.trigger("pointerup", r.createEventFromTouch(e)), r.cleanup(), r.isTouchDragging = !1, kl += 1, setTimeout(function() {
                --kl
            }, Sa.touchMouseIgnoreWait))
        }, this.handleTouchScroll = function() {
            r.wasTouchScroll = !0
        }, this.handleScroll = function(e) {
            var t, n;
            r.shouldIgnoreMove || (t = window.pageXOffset - r.prevScrollX + r.prevPageX, n = window.pageYOffset - r.prevScrollY + r.prevPageY, r.emitter.trigger("pointermove", {
                origEvent: e,
                isTouch: r.isTouchDragging,
                subjectEl: r.subjectEl,
                pageX: t,
                pageY: n,
                deltaX: t - r.origPageX,
                deltaY: n - r.origPageY
            }))
        }, this.containerEl = e, this.emitter = new oo, e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
            passive: !0
        }), 1 === (xl += 1) && window.addEventListener("touchmove", Nl, {
            passive: !1
        })
    }

    function Nl(e) {
        Ml && e.preventDefault()
    }
    var Hl = (Ol.prototype.start = function(e, t, n) {
        this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition()
    }, Ol.prototype.handleMove = function(e, t) {
        this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition()
    }, Ol.prototype.setIsVisible = function(e) {
        e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e)
    }, Ol.prototype.stop = function(e, t) {
        function n() {
            r.cleanup(), t()
        }
        var r = this;
        e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(n, this.revertDuration) : setTimeout(n, 0)
    }, Ol.prototype.doRevertAnimation = function(e, t) {
        var n = this.mirrorEl,
            r = this.sourceEl.getBoundingClientRect();
        n.style.transition = "top " + t + "ms,left " + t + "ms", ye(n, {
            left: r.left,
            top: r.top
        }), we(n, function() {
            n.style.transition = "", e()
        })
    }, Ol.prototype.cleanup = function() {
        this.mirrorEl && (fe(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null
    }, Ol.prototype.updateElPosition = function() {
        this.sourceEl && this.isVisible && ye(this.getMirrorEl(), {
            left: this.sourceElRect.left + this.deltaX,
            top: this.sourceElRect.top + this.deltaY
        })
    }, Ol.prototype.getMirrorEl = function() {
        var e = this.sourceElRect,
            t = this.mirrorEl;
        return t || ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"), t.classList.add("fc-event-dragging"), ye(t, {
            position: "fixed",
            zIndex: this.zIndex,
            visibility: "",
            boxSizing: "border-box",
            width: e.right - e.left,
            height: e.bottom - e.top,
            right: "auto",
            bottom: "auto",
            margin: 0
        }), this.parentNode.appendChild(t)), t
    }, Ol);

    function Ol() {
        this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0
    }
    var Al, Ul = (t(Ll, Al = lo), Ll.prototype.destroy = function() {
        this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
    }, Ll.prototype.getScrollTop = function() {
        return this.scrollTop
    }, Ll.prototype.getScrollLeft = function() {
        return this.scrollLeft
    }, Ll.prototype.setScrollTop = function(e) {
        this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange())
    }, Ll.prototype.setScrollLeft = function(e) {
        this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange())
    }, Ll.prototype.getClientWidth = function() {
        return this.clientWidth
    }, Ll.prototype.getClientHeight = function() {
        return this.clientHeight
    }, Ll.prototype.getScrollWidth = function() {
        return this.scrollWidth
    }, Ll.prototype.getScrollHeight = function() {
        return this.scrollHeight
    }, Ll.prototype.handleScrollChange = function() {}, Ll);

    function Ll(e, t) {
        var n = Al.call(this) || this;
        return n.handleScroll = function() {
            n.scrollTop = n.scrollController.getScrollTop(), n.scrollLeft = n.scrollController.getScrollLeft(), n.handleScrollChange()
        }, n.scrollController = e, n.doesListening = t, n.scrollTop = n.origScrollTop = e.getScrollTop(), n.scrollLeft = n.origScrollLeft = e.getScrollLeft(), n.scrollWidth = e.getScrollWidth(), n.scrollHeight = e.getScrollHeight(), n.clientWidth = e.getClientWidth(), n.clientHeight = e.getClientHeight(), n.clientRect = n.computeClientRect(), n.doesListening && n.getEventTarget().addEventListener("scroll", n.handleScroll), n
    }
    var Wl, Vl = (t(Fl, Wl = Ul), Fl.prototype.getEventTarget = function() {
        return this.scrollController.el
    }, Fl.prototype.computeClientRect = function() {
        return eo(this.scrollController.el)
    }, Fl);

    function Fl(e, t) {
        return Wl.call(this, new po(e), t) || this
    }
    var zl, Bl = (t(jl, zl = Ul), jl.prototype.getEventTarget = function() {
        return window
    }, jl.prototype.computeClientRect = function() {
        return {
            left: this.scrollLeft,
            right: this.scrollLeft + this.clientWidth,
            top: this.scrollTop,
            bottom: this.scrollTop + this.clientHeight
        }
    }, jl.prototype.handleScrollChange = function() {
        this.clientRect = this.computeClientRect()
    }, jl);

    function jl(e) {
        return zl.call(this, new go, e) || this
    }
    var Gl = ("function" == typeof performance ? performance : Date).now,
        ql = (Yl.prototype.start = function(e, t) {
            this.isEnabled && (this.scrollCaches = this.buildCaches(), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t))
        }, Yl.prototype.handleMove = function(e, t) {
            var n, r;
            this.isEnabled && (n = e - window.pageXOffset, r = t - window.pageYOffset, e = null === this.pointerScreenY ? 0 : r - this.pointerScreenY, t = null === this.pointerScreenX ? 0 : n - this.pointerScreenX, e < 0 ? this.everMovedUp = !0 : 0 < e && (this.everMovedDown = !0), t < 0 ? this.everMovedLeft = !0 : 0 < t && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Gl())))
        }, Yl.prototype.stop = function() {
            if (this.isEnabled) {
                this.isAnimating = !1;
                for (var e = 0, t = this.scrollCaches; e < t.length; e++) t[e].destroy();
                this.scrollCaches = null
            }
        }, Yl.prototype.requestAnimation = function(e) {
            this.msSinceRequest = e, requestAnimationFrame(this.animate)
        }, Yl.prototype.handleSide = function(e, t) {
            var n = e.scrollCache,
                r = this.edgeThreshold,
                o = r - e.distance,
                i = o * o / (r * r) * this.maxVelocity * t,
                a = 1;
            switch (e.name) {
                case "left":
                    a = -1;
                case "right":
                    n.setScrollLeft(n.getScrollLeft() + i * a);
                    break;
                case "top":
                    a = -1;
                case "bottom":
                    n.setScrollTop(n.getScrollTop() + i * a)
            }
        }, Yl.prototype.computeBestEdge = function(e, t) {
            for (var n = this.edgeThreshold, r = null, o = 0, i = this.scrollCaches; o < i.length; o++) {
                var a = i[o],
                    s = a.clientRect,
                    l = e - s.left,
                    u = s.right - e,
                    c = t - s.top,
                    s = s.bottom - t;
                0 <= l && 0 <= u && 0 <= c && 0 <= s && (c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = {
                    scrollCache: a,
                    name: "top",
                    distance: c
                }), s <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > s) && (r = {
                    scrollCache: a,
                    name: "bottom",
                    distance: s
                }), l <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > l) && (r = {
                    scrollCache: a,
                    name: "left",
                    distance: l
                }), u <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > u) && (r = {
                    scrollCache: a,
                    name: "right",
                    distance: u
                }))
            }
            return r
        }, Yl.prototype.buildCaches = function() {
            return this.queryScrollEls().map(function(e) {
                return e === window ? new Bl(!1) : new Vl(e, !1)
            })
        }, Yl.prototype.queryScrollEls = function() {
            for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) {
                var r = n[t];
                "object" == typeof r ? e.push(r) : e.push.apply(e, Array.prototype.slice.call(document.querySelectorAll(r)))
            }
            return e
        }, Yl);

    function Yl() {
        var n = this;
        this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function() {
            var e, t;
            n.isAnimating && ((e = n.computeBestEdge(n.pointerScreenX + window.pageXOffset, n.pointerScreenY + window.pageYOffset)) ? (t = Gl(), n.handleSide(e, (t - n.msSinceRequest) / 1e3), n.requestAnimation(t)) : n.isAnimating = !1)
        }
    }
    var Zl, Xl = (t(Kl, Zl = ya), Kl.prototype.destroy = function() {
        this.pointer.destroy(), this.onPointerUp({})
    }, Kl.prototype.startDelay = function(e) {
        var t = this;
        "number" == typeof this.delay ? this.delayTimeoutId = setTimeout(function() {
            t.delayTimeoutId = null, t.handleDelayEnd(e)
        }, this.delay) : this.handleDelayEnd(e)
    }, Kl.prototype.handleDelayEnd = function(e) {
        this.isDelayEnded = !0, this.tryStartDrag(e)
    }, Kl.prototype.handleDistanceSurpassed = function(e) {
        this.isDistanceSurpassed = !0, this.tryStartDrag(e)
    }, Kl.prototype.tryStartDrag = function(e) {
        this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
    }, Kl.prototype.tryStopDrag = function(e) {
        this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
    }, Kl.prototype.stopDrag = function(e) {
        this.isDragging = !1, this.emitter.trigger("dragend", e)
    }, Kl.prototype.setIgnoreMove = function(e) {
        this.pointer.shouldIgnoreMove = e
    }, Kl.prototype.setMirrorIsVisible = function(e) {
        this.mirror.setIsVisible(e)
    }, Kl.prototype.setMirrorNeedsRevert = function(e) {
        this.mirrorNeedsRevert = e
    }, Kl.prototype.setAutoScrollEnabled = function(e) {
        this.autoScroller.isEnabled = e
    }, Kl);

    function Kl(e, t) {
        var n = Zl.call(this, e) || this;
        n.delay = null, n.minDistance = 0, n.touchScrollAllowed = !0, n.mirrorNeedsRevert = !1, n.isInteracting = !1, n.isDragging = !1, n.isDelayEnded = !1, n.isDistanceSurpassed = !1, n.delayTimeoutId = null, n.onPointerDown = function(e) {
            n.isDragging || (n.isInteracting = !0, n.isDelayEnded = !1, n.isDistanceSurpassed = !1, xe(document.body), Pe(document.body), e.isTouch || e.origEvent.preventDefault(), n.emitter.trigger("pointerdown", e), n.isInteracting && !n.pointer.shouldIgnoreMove && (n.mirror.setIsVisible(!1), n.mirror.start(e.subjectEl, e.pageX, e.pageY), n.startDelay(e), n.minDistance || n.handleDistanceSurpassed(e)))
        }, n.onPointerMove = function(e) {
            var t;
            n.isInteracting && (n.emitter.trigger("pointermove", e), n.isDistanceSurpassed || (t = n.minDistance) * t <= (t = e.deltaX) * t + (t = e.deltaY) * t && n.handleDistanceSurpassed(e), n.isDragging && ("scroll" !== e.origEvent.type && (n.mirror.handleMove(e.pageX, e.pageY), n.autoScroller.handleMove(e.pageX, e.pageY)), n.emitter.trigger("dragmove", e)))
        }, n.onPointerUp = function(e) {
            n.isInteracting && (n.isInteracting = !1, Me(document.body), Ie(document.body), n.emitter.trigger("pointerup", e), n.isDragging && (n.autoScroller.stop(), n.tryStopDrag(e)), n.delayTimeoutId && (clearTimeout(n.delayTimeoutId), n.delayTimeoutId = null))
        };
        e = n.pointer = new Pl(e);
        return e.emitter.on("pointerdown", n.onPointerDown), e.emitter.on("pointermove", n.onPointerMove), e.emitter.on("pointerup", n.onPointerUp), t && (e.selector = t), n.mirror = new Hl, n.autoScroller = new ql, n
    }
    var $l = (Jl.prototype.destroy = function() {
        for (var e = 0, t = this.scrollCaches; e < t.length; e++) t[e].destroy()
    }, Jl.prototype.computeLeft = function() {
        for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
            var r = n[t];
            e += r.origScrollLeft - r.getScrollLeft()
        }
        return e
    }, Jl.prototype.computeTop = function() {
        for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
            var r = n[t];
            e += r.origScrollTop - r.getScrollTop()
        }
        return e
    }, Jl.prototype.isWithinClipping = function(e, t) {
        for (var n = {
                left: e,
                top: t
            }, r = 0, o = this.scrollCaches; r < o.length; r++) {
            var i = o[r];
            if (! function(e) {
                    e = e.tagName;
                    return "HTML" === e || "BODY" === e
                }(i.getEventTarget()) && !Or(n, i.clientRect)) return !1
        }
        return !0
    }, Jl);

    function Jl(e) {
        this.origRect = to(e), this.scrollCaches = no(e).map(function(e) {
            return new Vl(e, !0)
        })
    }
    var Ql = (eu.prototype.processFirstCoord = function(e) {
        var t, n = {
                left: e.pageX,
                top: e.pageY
            },
            r = n,
            e = e.subjectEl;
        e !== document && (r = Ur(r, t = to(e)));
        e = this.initialHit = this.queryHitForOffset(r.left, r.top);
        e ? (this.useSubjectCenter && t && ((e = Ar(t, e.rect)) && (r = Lr(e))), this.coordAdjust = Wr(r, n)) : this.coordAdjust = {
            left: 0,
            top: 0
        }
    }, eu.prototype.handleMove = function(e, t) {
        var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
        !t && tu(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e))
    }, eu.prototype.prepareHits = function() {
        this.offsetTrackers = lt(this.droppableStore, function(e) {
            return e.component.prepareHits(), new $l(e.el)
        })
    }, eu.prototype.releaseHits = function() {
        var e, t = this.offsetTrackers;
        for (e in t) t[e].destroy();
        this.offsetTrackers = {}
    }, eu.prototype.queryHitForOffset = function(e, t) {
        var n, r = this.droppableStore,
            o = this.offsetTrackers,
            i = null;
        for (n in r) {
            var a, s, l, u, c, d = r[n].component,
                p = o[n];
            p && p.isWithinClipping(e, t) && (a = p.computeLeft(), l = t - (s = p.computeTop()), c = (u = p.origRect).right - u.left, p = u.bottom - u.top, 0 <= (u = e - a) && u < c && 0 <= l && l < p && ((p = d.queryHit(u, l, c, p)) && On(p.dateProfile.activeRange, p.dateSpan.range) && (!i || p.layer > i.layer) && (p.componentId = n, p.context = d.context, p.rect.left += a, p.rect.right += a, p.rect.top += s, p.rect.bottom += s, i = p)))
        }
        return i
    }, eu);

    function eu(e, t) {
        var n = this;
        this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function(e) {
            var t = n.dragging;
            n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(e), n.initialHit || !n.requireInitial ? (t.setIgnoreMove(!1), n.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
        }, this.handleDragStart = function(e) {
            n.emitter.trigger("dragstart", e), n.handleMove(e, !0)
        }, this.handleDragMove = function(e) {
            n.emitter.trigger("dragmove", e), n.handleMove(e)
        }, this.handlePointerUp = function(e) {
            n.releaseHits(), n.emitter.trigger("pointerup", e)
        }, this.handleDragEnd = function(e) {
            n.movingHit && n.emitter.trigger("hitupdate", null, !0, e), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", e)
        }, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new oo
    }

    function tu(e, t) {
        return !e && !t || Boolean(e) === Boolean(t) && er(e.dateSpan, t.dateSpan)
    }

    function nu(e, t) {
        for (var n, r, o = {}, i = 0, a = t.pluginHooks.datePointTransforms; i < a.length; i++) {
            var s = a[i];
            P(o, s(e, t))
        }
        return P(o, (n = e, {
            date: (r = t.dateEnv).toDate(n.range.start),
            dateStr: r.formatIso(n.range.start, {
                omitTime: n.allDay
            }),
            allDay: n.allDay
        })), o
    }
    var ru, ou = (t(iu, ru = ha), iu.prototype.destroy = function() {
        this.dragging.destroy()
    }, iu);

    function iu(e) {
        var o = ru.call(this, e) || this;
        o.handlePointerDown = function(e) {
            var t = o.dragging,
                e = e.origEvent.target;
            t.setIgnoreMove(!o.component.isValidDateDownEl(e))
        }, o.handleDragEnd = function(e) {
            var t, n, r = o.component;
            o.dragging.pointer.wasTouchScroll || (t = (n = o.hitDragging).initialHit, n = n.finalHit, t && n && tu(t, n) && (r = r.context, e = P(P({}, nu(t.dateSpan, r)), {
                dayEl: t.dayEl,
                jsEvent: e.origEvent,
                view: r.viewApi || r.calendarApi.view
            }), r.emitter.trigger("dateClick", e)))
        }, o.dragging = new Xl(e.el), o.dragging.autoScroller.isEnabled = !1;
        e = o.hitDragging = new Ql(o.dragging, va(e));
        return e.emitter.on("pointerdown", o.handlePointerDown), e.emitter.on("dragend", o.handleDragEnd), o
    }
    var au, su = (t(lu, au = ha), lu.prototype.destroy = function() {
        this.dragging.destroy()
    }, lu);

    function lu(e) {
        var a = au.call(this, e) || this;
        a.dragSelection = null, a.handlePointerDown = function(e) {
            var t = a.component,
                n = a.dragging,
                r = t.context.options.selectable && t.isValidDateDownEl(e.origEvent.target);
            n.setIgnoreMove(!r), n.delay = e.isTouch ? function(e) {
                var t = e.context.options,
                    e = t.selectLongPressDelay;
                null == e && (e = t.longPressDelay);
                return e
            }(t) : null
        }, a.handleDragStart = function(e) {
            a.component.context.calendarApi.unselect(e)
        }, a.handleHitUpdate = function(e, t) {
            var n, r = a.component.context,
                o = null,
                i = !1;
            e && (n = a.hitDragging.initialHit, (o = !(e.componentId === n.componentId && a.isHitComboAllowed && !a.isHitComboAllowed(n, e)) ? function(e, t, n) {
                var r = e.dateSpan,
                    o = t.dateSpan,
                    o = [r.range.start, r.range.end, o.range.start, o.range.end];
                o.sort(Le);
                for (var i = {}, a = 0, s = n; a < s.length; a++) {
                    var l = (0, s[a])(e, t);
                    if (!1 === l) return null;
                    l && P(i, l)
                }
                return i.range = {
                    start: o[0],
                    end: o[3]
                }, i.allDay = r.allDay, i
            }(n, e, r.pluginHooks.dateSelectionTransformers) : o) && ms(o, e.dateProfile, r) || (i = !0, o = null)), o ? r.dispatch({
                type: "SELECT_DATES",
                selection: o
            }) : t || r.dispatch({
                type: "UNSELECT_DATES"
            }), (i ? _e : ke)(), t || (a.dragSelection = o)
        }, a.handlePointerUp = function(e) {
            a.dragSelection && (rr(a.dragSelection, e, a.component.context), a.dragSelection = null)
        };
        var t = e.component.context.options,
            n = a.dragging = new Xl(e.el);
        n.touchScrollAllowed = !1, n.minDistance = t.selectMinDistance || 0, n.autoScroller.isEnabled = t.dragScroll;
        e = a.hitDragging = new Ql(a.dragging, va(e));
        return e.emitter.on("pointerdown", a.handlePointerDown), e.emitter.on("dragstart", a.handleDragStart), e.emitter.on("hitupdate", a.handleHitUpdate), e.emitter.on("pointerup", a.handlePointerUp), a
    }
    var uu, cu = (t(du, uu = ha), du.prototype.destroy = function() {
        this.dragging.destroy()
    }, du.prototype.displayDrag = function(e, t) {
        var n = this.component.context,
            r = this.receivingContext;
        r && r !== e && (r === n ? r.dispatch({
            type: "SET_EVENT_DRAG",
            state: {
                affectedEvents: t.affectedEvents,
                mutatedEvents: cn(),
                isEvent: !0
            }
        }) : r.dispatch({
            type: "UNSET_EVENT_DRAG"
        })), e && e.dispatch({
            type: "SET_EVENT_DRAG",
            state: t
        })
    }, du.prototype.clearDrag = function() {
        var e = this.component.context,
            t = this.receivingContext;
        t && t.dispatch({
            type: "UNSET_EVENT_DRAG"
        }), e !== t && e.dispatch({
            type: "UNSET_EVENT_DRAG"
        })
    }, du.prototype.cleanup = function() {
        this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null
    }, du.SELECTOR = ".fc-event-draggable, .fc-event-resizable", du);

    function du(e) {
        var v = uu.call(this, e) || this;
        v.subjectEl = null, v.subjectSeg = null, v.isDragging = !1, v.eventRange = null, v.relevantEvents = null, v.receivingContext = null, v.validMutation = null, v.mutatedRelevantEvents = null, v.handlePointerDown = function(e) {
            var t = e.origEvent.target,
                n = v.component,
                r = v.dragging,
                o = r.mirror,
                i = n.context.options,
                a = n.context;
            v.subjectEl = e.subjectEl;
            var s = v.subjectSeg = Vn(e.subjectEl),
                s = (v.eventRange = s.eventRange).instance.instanceId;
            v.relevantEvents = un(a.getCurrentData().eventStore, s), r.minDistance = e.isTouch ? 0 : i.eventDragMinDistance, r.delay = e.isTouch && s !== n.props.eventSelection ? function(e) {
                var t = e.context.options,
                    e = t.eventLongPressDelay;
                null == e && (e = t.longPressDelay);
                return e
            }(n) : null, i.fixedMirrorParent ? o.parentNode = i.fixedMirrorParent : o.parentNode = he(t, ".fc"), o.revertDuration = i.dragRevertDuration;
            t = n.isValidSegDownEl(t) && !he(t, ".fc-event-resizer");
            r.setIgnoreMove(!t), v.isDragging = t && e.subjectEl.classList.contains("fc-event-draggable")
        }, v.handleDragStart = function(e) {
            var t = v.component.context,
                n = v.eventRange,
                r = n.instance.instanceId;
            e.isTouch ? r !== v.component.props.eventSelection && t.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: r
            }) : t.dispatch({
                type: "UNSELECT_EVENT"
            }), v.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
                el: v.subjectEl,
                event: new gr(t, n.def, n.instance),
                jsEvent: e.origEvent,
                view: t.viewApi
            }))
        }, v.handleHitUpdate = function(e, t) {
            var n, r, o, i, a, s, l, u, c;
            v.isDragging && (n = v.relevantEvents, r = v.hitDragging.initialHit, o = v.component.context, a = i = u = null, l = {
                affectedEvents: n,
                mutatedEvents: cn(),
                isEvent: !(s = !1)
            }, e && (c = (u = e.context).options, o === u || c.editable && c.droppable ? (i = function(e, t, n) {
                var r = e.dateSpan,
                    o = t.dateSpan,
                    i = r.range.start,
                    a = o.range.start,
                    s = {};
                r.allDay !== o.allDay && (s.allDay = o.allDay, s.hasEnd = t.context.options.allDayMaintainDuration, o.allDay && (i = Ke(i)));
                a = xn(i, a, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
                a.milliseconds && (s.allDay = !1);
                for (var l = {
                        datesDelta: a,
                        standardProps: s
                    }, u = 0, c = n; u < c.length; u++)(0, c[u])(l, e, t);
                return l
            }(r, e, u.getCurrentData().pluginHooks.eventDragMutationMassagers)) && (a = ar(n, u.getCurrentData().eventUiBases, i, u), l.mutatedEvents = a, vs(l, e.dateProfile, u) || (s = !0, a = i = null, l.mutatedEvents = cn())) : u = null), v.displayDrag(u, l), (s ? _e : ke)(), t || (o === u && tu(r, e) && (i = null), v.dragging.setMirrorNeedsRevert(!i), v.dragging.setMirrorIsVisible(!e || !document.querySelector(".fc-event-mirror")), v.receivingContext = u, v.validMutation = i, v.mutatedRelevantEvents = a))
        }, v.handlePointerUp = function() {
            v.isDragging || v.cleanup()
        }, v.handleDragEnd = function(e) {
            if (v.isDragging) {
                var t = v.component.context,
                    n = t.viewApi,
                    r = v.receivingContext,
                    o = v.validMutation,
                    i = v.eventRange.def,
                    a = v.eventRange.instance,
                    s = new gr(t, i, a),
                    l = v.relevantEvents,
                    u = v.mutatedRelevantEvents,
                    c = v.hitDragging.finalHit;
                if (v.clearDrag(), t.emitter.trigger("eventDragStop", {
                        el: v.subjectEl,
                        event: s,
                        jsEvent: e.origEvent,
                        view: n
                    }), o)
                    if (r === t) {
                        var d = new gr(t, u.defs[i.defId], a ? u.instances[a.instanceId] : null);
                        t.dispatch({
                            type: "MERGE_EVENTS",
                            eventStore: u
                        });
                        for (var d = {
                                oldEvent: s,
                                event: d,
                                relatedEvents: yr(u, t, a),
                                revert: function() {
                                    t.dispatch({
                                        type: "MERGE_EVENTS",
                                        eventStore: l
                                    })
                                }
                            }, p = {}, f = 0, h = t.getCurrentData().pluginHooks.eventDropTransformers; f < h.length; f++) {
                            var g = h[f];
                            P(p, g(o, t))
                        }
                        t.emitter.trigger("eventDrop", P(P(P({}, d), p), {
                            el: e.subjectEl,
                            delta: o.datesDelta,
                            jsEvent: e.origEvent,
                            view: n
                        })), t.emitter.trigger("eventChange", d)
                    } else r && (s = {
                        event: s,
                        relatedEvents: yr(l, t, a),
                        revert: function() {
                            t.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: l
                            })
                        }
                    }, t.emitter.trigger("eventLeave", P(P({}, s), {
                        draggedEl: e.subjectEl,
                        view: n
                    })), t.dispatch({
                        type: "REMOVE_EVENTS",
                        eventStore: l
                    }), t.emitter.trigger("eventRemove", s), s = u.defs[i.defId], i = u.instances[a.instanceId], s = new gr(r, s, i), r.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: u
                    }), i = {
                        event: s,
                        relatedEvents: yr(u, r, i),
                        revert: function() {
                            r.dispatch({
                                type: "REMOVE_EVENTS",
                                eventStore: u
                            })
                        }
                    }, r.emitter.trigger("eventAdd", i), e.isTouch && r.dispatch({
                        type: "SELECT_EVENT",
                        eventInstanceId: a.instanceId
                    }), r.emitter.trigger("drop", P(P({}, nu(c.dateSpan, r)), {
                        draggedEl: e.subjectEl,
                        jsEvent: e.origEvent,
                        view: c.context.viewApi
                    })), r.emitter.trigger("eventReceive", P(P({}, i), {
                        draggedEl: e.subjectEl,
                        view: c.context.viewApi
                    })));
                else t.emitter.trigger("_noEventDrop")
            }
            v.cleanup()
        };
        var t = v.component.context.options,
            n = v.dragging = new Xl(e.el);
        n.pointer.selector = du.SELECTOR, n.touchScrollAllowed = !1, n.autoScroller.isEnabled = t.dragScroll;
        t = v.hitDragging = new Ql(v.dragging, ma);
        return t.useSubjectCenter = e.useEventCenter, t.emitter.on("pointerdown", v.handlePointerDown), t.emitter.on("dragstart", v.handleDragStart), t.emitter.on("hitupdate", v.handleHitUpdate), t.emitter.on("pointerup", v.handlePointerUp), t.emitter.on("dragend", v.handleDragEnd), v
    }
    var pu, fu = (t(hu, pu = ha), hu.prototype.destroy = function() {
        this.dragging.destroy()
    }, hu.prototype.querySegEl = function(e) {
        return he(e.subjectEl, ".fc-event")
    }, hu);

    function hu(e) {
        var d = pu.call(this, e) || this;
        d.draggingSegEl = null, d.draggingSeg = null, d.eventRange = null, d.relevantEvents = null, d.validMutation = null, d.mutatedRelevantEvents = null, d.handlePointerDown = function(e) {
            var t = d.component,
                n = Vn(d.querySegEl(e)),
                n = d.eventRange = n.eventRange;
            d.dragging.minDistance = t.context.options.eventDragMinDistance, d.dragging.setIgnoreMove(!d.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && d.component.props.eventSelection !== n.instance.instanceId)
        }, d.handleDragStart = function(e) {
            var t = d.component.context,
                n = d.eventRange;
            d.relevantEvents = un(t.getCurrentData().eventStore, d.eventRange.instance.instanceId);
            var r = d.querySegEl(e);
            d.draggingSegEl = r, d.draggingSeg = Vn(r), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
                el: r,
                event: new gr(t, n.def, n.instance),
                jsEvent: e.origEvent,
                view: t.viewApi
            })
        }, d.handleHitUpdate = function(e, t, n) {
            var r = d.component.context,
                o = d.relevantEvents,
                i = d.hitDragging.initialHit,
                a = d.eventRange.instance,
                s = null,
                l = null,
                u = !1,
                c = {
                    affectedEvents: o,
                    mutatedEvents: cn(),
                    isEvent: !0
                };
            e && (e.componentId === i.componentId && d.isHitComboAllowed && !d.isHitComboAllowed(i, e) || (s = function(e, t, n, r) {
                var o = e.context.dateEnv,
                    i = e.dateSpan.range.start,
                    t = t.dateSpan.range.start,
                    e = xn(i, t, o, e.largeUnit);
                if (n) {
                    if (o.add(r.start, e) < r.end) return {
                        startDelta: e
                    }
                } else if (o.add(r.end, e) > r.start) return {
                    endDelta: e
                };
                return null
            }(i, e, n.subjectEl.classList.contains("fc-event-resizer-start"), a.range))), s && (l = ar(o, r.getCurrentData().eventUiBases, s, r), c.mutatedEvents = l, vs(c, e.dateProfile, r) || (u = !0, c.mutatedEvents = l = s = null)), l ? r.dispatch({
                type: "SET_EVENT_RESIZE",
                state: c
            }) : r.dispatch({
                type: "UNSET_EVENT_RESIZE"
            }), (u ? _e : ke)(), t || (s && tu(i, e) && (s = null), d.validMutation = s, d.mutatedRelevantEvents = l)
        }, d.handleDragEnd = function(e) {
            var t = d.component.context,
                n = d.eventRange.def,
                r = d.eventRange.instance,
                o = new gr(t, n, r),
                i = d.relevantEvents,
                a = d.mutatedRelevantEvents;
            t.emitter.trigger("eventResizeStop", {
                el: d.draggingSegEl,
                event: o,
                jsEvent: e.origEvent,
                view: t.viewApi
            }), d.validMutation ? (n = new gr(t, a.defs[n.defId], r ? a.instances[r.instanceId] : null), t.dispatch({
                type: "MERGE_EVENTS",
                eventStore: a
            }), r = {
                oldEvent: o,
                event: n,
                relatedEvents: yr(a, t, r),
                revert: function() {
                    t.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: i
                    })
                }
            }, t.emitter.trigger("eventResize", P(P({}, r), {
                el: d.draggingSegEl,
                startDelta: d.validMutation.startDelta || yt(0),
                endDelta: d.validMutation.endDelta || yt(0),
                jsEvent: e.origEvent,
                view: t.viewApi
            })), t.emitter.trigger("eventChange", r)) : t.emitter.trigger("_noEventResize"), d.draggingSeg = null, d.relevantEvents = null, d.validMutation = null
        };
        var t = e.component,
            n = d.dragging = new Xl(e.el);
        n.pointer.selector = ".fc-event-resizer", n.touchScrollAllowed = !1, n.autoScroller.isEnabled = t.context.options.dragScroll;
        e = d.hitDragging = new Ql(d.dragging, va(e));
        return e.emitter.on("pointerdown", d.handlePointerDown), e.emitter.on("dragstart", d.handleDragStart), e.emitter.on("hitupdate", d.handleHitUpdate), e.emitter.on("dragend", d.handleDragEnd), d
    }
    var gu = (vu.prototype.destroy = function() {
        this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy()
    }, vu);

    function vu(e) {
        var o = this;
        this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function(e) {
            e.jsEvent && (o.isRecentPointerDateSelect = !0)
        }, this.onDocumentPointerDown = function(e) {
            var t = o.context.options.unselectCancel,
                e = e.origEvent.target;
            o.matchesCancel = !!he(e, t), o.matchesEvent = !!he(e, cu.SELECTOR)
        }, this.onDocumentPointerUp = function(e) {
            var t = o.context,
                n = o.documentPointer,
                r = t.getCurrentData();
            n.wasTouchScroll || (r.dateSelection && !o.isRecentPointerDateSelect && (!(n = t.options.unselectAuto) || n && o.matchesCancel || t.calendarApi.unselect(e)), r.eventSelection && !o.matchesEvent && t.dispatch({
                type: "UNSELECT_EVENT"
            })), o.isRecentPointerDateSelect = !1
        };
        var t = this.documentPointer = new Pl(document);
        t.shouldIgnoreMove = !0, t.shouldWatchScroll = !1, t.emitter.on("pointerdown", this.onDocumentPointerDown), t.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect)
    }
    var mu = {
            fixedMirrorParent: an
        },
        yu = {
            dateClick: an,
            eventDragStart: an,
            eventDragStop: an,
            eventDrop: an,
            eventResizeStart: an,
            eventResizeStop: an,
            eventResize: an,
            drop: an,
            eventReceive: an,
            eventLeave: an
        },
        Eu = (Su.prototype.buildDragMeta = function(e) {
            return "object" == typeof this.suppliedDragMeta ? ba(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? ba(this.suppliedDragMeta(e)) : function(e) {
                e = function(e, t) {
                    var n = Sa.dataAttrPrefix,
                        t = (n ? n + "-" : "") + t;
                    return e.getAttribute("data-" + t) || ""
                }(e, "event");
                return ba(e ? JSON.parse(e) : {
                    create: !1
                })
            }(e)
        }, Su.prototype.displayDrag = function(e, t) {
            var n = this.receivingContext;
            n && n !== e && n.dispatch({
                type: "UNSET_EVENT_DRAG"
            }), e && e.dispatch({
                type: "SET_EVENT_DRAG",
                state: t
            })
        }, Su.prototype.clearDrag = function() {
            this.receivingContext && this.receivingContext.dispatch({
                type: "UNSET_EVENT_DRAG"
            })
        }, Su.prototype.canDropElOnCalendar = function(e, t) {
            var n = t.options.dropAccept;
            return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(ge(e, n))
        }, Su);

    function Su(e, t) {
        var l = this;
        this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function(e) {
            l.dragMeta = l.buildDragMeta(e.subjectEl)
        }, this.handleHitUpdate = function(e, t, n) {
            var r = l.hitDragging.dragging,
                o = null,
                i = null,
                a = !1,
                s = {
                    affectedEvents: cn(),
                    mutatedEvents: cn(),
                    isEvent: l.dragMeta.create
                };
            e && (o = e.context, l.canDropElOnCalendar(n.subjectEl, o) && (i = function(e, t, n) {
                for (var r = P({}, t.leftoverProps), o = 0, i = n.pluginHooks.externalDefTransforms; o < i.length; o++) {
                    var a = i[o];
                    P(r, a(e, t))
                }
                var s = Cn(r, n),
                    l = s.refined,
                    s = s.extra,
                    l = Rn(l, s, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
                    s = e.range.start;
                e.allDay && t.startTime && (s = n.dateEnv.add(s, t.startTime));
                n = t.duration ? n.dateEnv.add(s, t.duration) : ir(e.allDay, s, n), n = ot(l.defId, {
                    start: s,
                    end: n
                });
                return {
                    def: l,
                    instance: n
                }
            }(e.dateSpan, l.dragMeta, o), s.mutatedEvents = ln(i), (a = !vs(s, e.dateProfile, o)) && (s.mutatedEvents = cn(), i = null))), l.displayDrag(o, s), r.setMirrorIsVisible(t || !i || !document.querySelector(".fc-event-mirror")), (a ? _e : ke)(), t || (r.setMirrorNeedsRevert(!i), l.receivingContext = o, l.droppableEvent = i)
        }, this.handleDragEnd = function(e) {
            var t, n, r, o, i = l.receivingContext,
                a = l.droppableEvent;
            l.clearDrag(), i && a && (n = (t = l.hitDragging.finalHit).context.viewApi, r = l.dragMeta, i.emitter.trigger("drop", P(P({}, nu(t.dateSpan, i)), {
                draggedEl: e.subjectEl,
                jsEvent: e.origEvent,
                view: n
            })), r.create && (o = ln(a), i.dispatch({
                type: "MERGE_EVENTS",
                eventStore: o
            }), e.isTouch && i.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: a.instance.instanceId
            }), i.emitter.trigger("eventReceive", {
                event: new gr(i, a.def, a.instance),
                relatedEvents: [],
                revert: function() {
                    i.dispatch({
                        type: "REMOVE_EVENTS",
                        eventStore: o
                    })
                },
                draggedEl: e.subjectEl,
                view: n
            }))), l.receivingContext = null, l.droppableEvent = null
        };
        e = this.hitDragging = new Ql(e, ma);
        e.requireInitial = !1, e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("hitupdate", this.handleHitUpdate), e.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t
    }
    Sa.dataAttrPrefix = "";
    var Du = (bu.prototype.destroy = function() {
        this.dragging.destroy()
    }, bu);

    function bu(e, t) {
        var o = this;
        void 0 === t && (t = {}), this.handlePointerDown = function(e) {
            var t = o.dragging,
                n = o.settings,
                r = n.minDistance,
                n = n.longPressDelay;
            t.minDistance = null != r ? r : e.isTouch ? 0 : $t.eventDragMinDistance, t.delay = e.isTouch ? null != n ? n : $t.longPressDelay : 0
        }, this.handleDragStart = function(e) {
            e.isTouch && o.dragging.delay && e.subjectEl.classList.contains("fc-event") && o.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")
        }, this.settings = t;
        e = this.dragging = new Xl(e);
        e.touchScrollAllowed = !1, null != t.itemSelector && (e.pointer.selector = t.itemSelector), null != t.appendTo && (e.mirror.parentNode = t.appendTo), e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), new Eu(e, t.eventData)
    }
    var Cu, wu = (t(Ru, Cu = ya), Ru.prototype.destroy = function() {
        this.pointer.destroy()
    }, Ru.prototype.setIgnoreMove = function(e) {
        this.shouldIgnoreMove = e
    }, Ru.prototype.setMirrorIsVisible = function(e) {
        e ? this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null) : (e = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null) && ((this.currentMirrorEl = e).style.visibility = "hidden")
    }, Ru);

    function Ru(e) {
        var t = Cu.call(this, e) || this;
        t.shouldIgnoreMove = !1, t.mirrorSelector = "", t.currentMirrorEl = null, t.handlePointerDown = function(e) {
            t.emitter.trigger("pointerdown", e), t.shouldIgnoreMove || t.emitter.trigger("dragstart", e)
        }, t.handlePointerMove = function(e) {
            t.shouldIgnoreMove || t.emitter.trigger("dragmove", e)
        }, t.handlePointerUp = function(e) {
            t.emitter.trigger("pointerup", e), t.shouldIgnoreMove || t.emitter.trigger("dragend", e)
        };
        e = t.pointer = new Pl(e);
        return e.emitter.on("pointerdown", t.handlePointerDown), e.emitter.on("pointermove", t.handlePointerMove), e.emitter.on("pointerup", t.handlePointerUp), t
    }
    var Tu = (_u.prototype.destroy = function() {
        this.dragging.destroy()
    }, _u);

    function _u(e, t) {
        var n = document;
        t = e === document || e instanceof Element ? (n = e, t || {}) : e || {};
        e = this.dragging = new wu(n);
        "string" == typeof t.itemSelector ? e.pointer.selector = t.itemSelector : n === document && (e.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (e.mirrorSelector = t.mirrorSelector), new Eu(e, t.eventData)
    }
    var ku, xu = jo({
            componentInteractions: [ou, su, cu, fu],
            calendarInteractions: [gu],
            elementDraggingImpl: Xl,
            optionRefiners: mu,
            listenerRefiners: yu
        }),
        Mu = (t(Pu, ku = zo), Pu.prototype.renderSimpleLayout = function(e, t) {
            var n = this.props,
                r = this.context,
                o = [],
                i = Ws(r.options);
            return e && o.push({
                type: "header",
                key: "header",
                isSticky: i,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: "fc-col-header",
                    rowContent: e
                }
            }), o.push({
                type: "body",
                key: "body",
                liquid: !0,
                chunk: {
                    content: t
                }
            }), So(di, {
                viewSpec: r.viewSpec
            }, function(e, t) {
                return So("div", {
                    ref: e,
                    className: ["fc-daygrid"].concat(t).join(" ")
                }, So(zs, {
                    liquid: !n.isHeightAuto && !n.forPrint,
                    collapsibleWidth: n.forPrint,
                    cols: [],
                    sections: o
                }))
            })
        }, Pu.prototype.renderHScrollLayout = function(e, t, n, r) {
            var o = this.context.pluginHooks.scrollGridImpl;
            if (!o) throw new Error("No ScrollGrid implementation");
            var i = this.props,
                a = this.context,
                s = !i.forPrint && Ws(a.options),
                l = !i.forPrint && Vs(a.options),
                u = [];
            return e && u.push({
                type: "header",
                key: "header",
                isSticky: s,
                chunks: [{
                    key: "main",
                    elRef: this.headerElRef,
                    tableClassName: "fc-col-header",
                    rowContent: e
                }]
            }), u.push({
                type: "body",
                key: "body",
                liquid: !0,
                chunks: [{
                    key: "main",
                    content: t
                }]
            }), l && u.push({
                type: "footer",
                key: "footer",
                isSticky: !0,
                chunks: [{
                    key: "main",
                    content: Ls
                }]
            }), So(di, {
                viewSpec: a.viewSpec
            }, function(e, t) {
                return So("div", {
                    ref: e,
                    className: ["fc-daygrid"].concat(t).join(" ")
                }, So(o, {
                    liquid: !i.isHeightAuto && !i.forPrint,
                    collapsibleWidth: i.forPrint,
                    colGroups: [{
                        cols: [{
                            span: n,
                            minWidth: r
                        }]
                    }],
                    sections: u
                }))
            })
        }, Pu);

    function Pu() {
        var e = null !== ku && ku.apply(this, arguments) || this;
        return e.headerElRef = bo(), e
    }

    function Iu(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.row].push(a)
        }
        return n
    }

    function Nu(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.firstCol].push(a)
        }
        return n
    }

    function Hu(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = {
                affectedInstances: e.affectedInstances,
                isEvent: e.isEvent,
                segs: []
            };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.row].segs.push(i)
            }
        } else
            for (var a = 0; a < t; a += 1) n[a] = null;
        return n
    }
    var Ou, Au = (t(Uu, Ou = Ao), Uu.prototype.render = function() {
        var n = this.props,
            r = this.context.options.navLinks ? {
                "data-navlink": Yr(n.date),
                tabIndex: 0
            } : {};
        return So(el, {
            date: n.date,
            dateProfile: n.dateProfile,
            todayRange: n.todayRange,
            showDayNumber: n.showDayNumber,
            extraHookProps: n.extraHookProps,
            defaultContent: Lu
        }, function(e, t) {
            return (t || n.forceDayTop) && So("div", {
                className: "fc-daygrid-day-top",
                ref: e
            }, So("a", P({
                className: "fc-daygrid-day-number"
            }, r), t || So(Co, null, " ")))
        })
    }, Uu);

    function Uu() {
        return null !== Ou && Ou.apply(this, arguments) || this
    }

    function Lu(e) {
        return e.dayNumberText
    }
    var Wu = Xt({
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: !0,
        meridiem: "narrow"
    });

    function Vu(e) {
        var t = e.eventRange.ui.display;
        return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd
    }
    var Fu, zu = (t(Bu, Fu = Ao), Bu.prototype.render = function() {
        var e = this.props;
        return So(Zs, P({}, e, {
            extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
            defaultTimeFormat: Wu,
            defaultDisplayEventEnd: e.defaultDisplayEventEnd,
            disableResizing: !e.seg.eventRange.def.allDay
        }))
    }, Bu);

    function Bu() {
        return null !== Fu && Fu.apply(this, arguments) || this
    }
    var ju, Gu = (t(qu, ju = Ao), qu.prototype.render = function() {
        var o = this.props,
            e = this.context,
            t = e.options.eventTimeFormat || Wu,
            e = Zn(o.seg, t, e, !0, o.defaultDisplayEventEnd);
        return So(Gs, {
            seg: o.seg,
            timeText: e,
            defaultContent: Yu,
            isDragging: o.isDragging,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: o.isSelected,
            isPast: o.isPast,
            isFuture: o.isFuture,
            isToday: o.isToday
        }, function(e, t, n, r) {
            return So("a", P({
                className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(t).join(" "),
                ref: e
            }, function(e) {
                e = e.eventRange.def.url;
                return e ? {
                    href: e
                } : {}
            }(o.seg)), r)
        })
    }, qu);

    function qu() {
        return null !== ju && ju.apply(this, arguments) || this
    }

    function Yu(e) {
        return So(Co, null, So("div", {
            className: "fc-daygrid-event-dot",
            style: {
                borderColor: e.borderColor || e.backgroundColor
            }
        }), e.timeText && So("div", {
            className: "fc-event-time"
        }, e.timeText), So("div", {
            className: "fc-event-title"
        }, e.event.title || So(Co, null, " ")))
    }
    var Zu, Xu = (t(Ku, Zu = Ao), Ku.prototype.render = function() {
        var r = this.props,
            e = this.compileSegs(r.singlePlacements),
            t = e.allSegs,
            e = e.invisibleSegs;
        return So(yl, {
            dateProfile: r.dateProfile,
            todayRange: r.todayRange,
            allDayDate: r.allDayDate,
            moreCnt: r.moreCnt,
            allSegs: t,
            hiddenSegs: e,
            alignmentElRef: r.alignmentElRef,
            alignGridTop: r.alignGridTop,
            extraDateSpan: r.extraDateSpan,
            popoverContent: function() {
                var n = (r.eventDrag ? r.eventDrag.affectedInstances : null) || (r.eventResize ? r.eventResize.affectedInstances : null) || {};
                return So(Co, null, t.map(function(e) {
                    var t = e.eventRange.instance.instanceId;
                    return So("div", {
                        className: "fc-daygrid-event-harness",
                        key: t,
                        style: {
                            visibility: n[t] ? "hidden" : ""
                        }
                    }, Vu(e) ? So(Gu, P({
                        seg: e,
                        isDragging: !1,
                        isSelected: t === r.eventSelection,
                        defaultDisplayEventEnd: !1
                    }, Xn(e, r.todayRange))) : So(zu, P({
                        seg: e,
                        isDragging: !1,
                        isResizing: !1,
                        isDateSelecting: !1,
                        isSelected: t === r.eventSelection,
                        defaultDisplayEventEnd: !1
                    }, Xn(e, r.todayRange))))
                }))
            }
        }, function(e, t, n, r, o) {
            return So("a", {
                ref: e,
                className: ["fc-daygrid-more-link"].concat(t).join(" "),
                onClick: o
            }, r)
        })
    }, Ku);

    function Ku() {
        var e = null !== Zu && Zu.apply(this, arguments) || this;
        return e.compileSegs = Pt($u), e
    }

    function $u(e) {
        for (var t = [], n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            t.push(i.seg), i.isVisible || n.push(i.seg)
        }
        return {
            allSegs: t,
            invisibleSegs: n
        }
    }
    var Ju, Qu = Xt({
            week: "narrow"
        }),
        ec = (t(tc, Ju = zo), tc.prototype.render = function() {
            var o = this.props,
                e = this.context,
                i = this.rootElRef,
                e = e.options,
                a = o.date,
                s = o.dateProfile,
                l = e.navLinks ? {
                    "data-navlink": Yr(a, "week"),
                    tabIndex: 0
                } : {};
            return So(ol, {
                date: a,
                dateProfile: s,
                todayRange: o.todayRange,
                showDayNumber: o.showDayNumber,
                extraHookProps: o.extraHookProps,
                elRef: this.handleRootEl
            }, function(e, t, n, r) {
                return So("td", P({
                    ref: e,
                    className: ["fc-daygrid-day"].concat(t, o.extraClassNames || []).join(" ")
                }, n, o.extraDataAttrs), So("div", {
                    className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                    ref: o.innerElRef
                }, o.showWeekNumber && So(ul, {
                    date: a,
                    defaultFormat: Qu
                }, function(e, t, n, r) {
                    return So("a", P({
                        ref: e,
                        className: ["fc-daygrid-week-number"].concat(t).join(" ")
                    }, l), r)
                }), !r && So(Au, {
                    date: a,
                    dateProfile: s,
                    showDayNumber: o.showDayNumber,
                    forceDayTop: o.forceDayTop,
                    todayRange: o.todayRange,
                    extraHookProps: o.extraHookProps
                }), So("div", {
                    className: "fc-daygrid-day-events",
                    ref: o.fgContentElRef
                }, o.fgContent, So("div", {
                    className: "fc-daygrid-day-bottom",
                    style: {
                        marginTop: o.moreMarginTop
                    }
                }, So(Xu, {
                    allDayDate: a,
                    singlePlacements: o.singlePlacements,
                    moreCnt: o.moreCnt,
                    alignmentElRef: i,
                    alignGridTop: !o.showDayNumber,
                    extraDateSpan: o.extraDateSpan,
                    dateProfile: o.dateProfile,
                    eventSelection: o.eventSelection,
                    eventDrag: o.eventDrag,
                    eventResize: o.eventResize,
                    todayRange: o.todayRange
                }))), So("div", {
                    className: "fc-daygrid-day-bg"
                }, o.bgContent)))
            })
        }, tc);

    function tc() {
        var t = null !== Ju && Ju.apply(this, arguments) || this;
        return t.rootElRef = bo(), t.handleRootEl = function(e) {
            Vo(t.rootElRef, e), Vo(t.props.elRef, e)
        }, t
    }

    function nc(e, t, n, r, o, i, a) {
        var s = new ic;
        s.allowReslicing = !0, s.strictOrder = r, !0 === t || !0 === n ? (s.maxCoord = i, s.hiddenConsumes = !0) : "number" == typeof t ? s.maxStackCnt = t : "number" == typeof n && (s.maxStackCnt = n, s.hiddenConsumes = !0);
        for (var l = [], u = [], c = 0; c < e.length; c += 1) {
            var d = o[(C = e[c]).eventRange.instance.instanceId];
            null != d ? l.push({
                index: c,
                thickness: d,
                span: {
                    start: C.firstCol,
                    end: C.lastCol + 1
                }
            }) : u.push(C)
        }
        for (var n = s.addSegs(l), s = function(e, t, n) {
                for (var r = function(e, t) {
                        for (var n = [], r = 0; r < t; r += 1) n.push([]);
                        for (var o = 0, i = e; o < i.length; o++)
                            for (var a = i[o], r = a.span.start; r < a.span.end; r += 1) n[r].push(a);
                        return n
                    }(e, n.length), o = [], i = [], a = [], s = 0; s < n.length; s += 1) {
                    for (var l = r[s], u = [], c = 0, d = 0, p = 0, f = l; p < f.length; p++) {
                        var h = f[p],
                            g = t[h.index];
                        u.push({
                            seg: rc(g, s, s + 1, n),
                            isVisible: !0,
                            isAbsolute: !1,
                            absoluteTop: 0,
                            marginTop: h.levelCoord - c
                        }), c = h.levelCoord + h.thickness
                    }
                    for (var v = [], m = d = c = 0, y = l; m < y.length; m++) {
                        var h = y[m],
                            g = t[h.index],
                            E = 1 < h.span.end - h.span.start,
                            S = h.span.start === s;
                        d += h.levelCoord - c, c = h.levelCoord + h.thickness, E ? (d += h.thickness, S && v.push({
                            seg: rc(g, h.span.start, h.span.end, n),
                            isVisible: !0,
                            isAbsolute: !0,
                            absoluteTop: h.levelCoord,
                            marginTop: 0
                        })) : S && (v.push({
                            seg: rc(g, h.span.start, h.span.end, n),
                            isVisible: !0,
                            isAbsolute: !1,
                            absoluteTop: 0,
                            marginTop: d
                        }), d = 0)
                    }
                    o.push(u), i.push(v), a.push(d)
                }
                return {
                    singleColPlacements: o,
                    multiColPlacements: i,
                    leftoverMargins: a
                }
            }(s.toRects(), e, a), p = s.singleColPlacements, f = s.multiColPlacements, h = s.leftoverMargins, g = [], v = [], m = 0, y = u; m < y.length; m++) {
            f[(C = y[m]).firstCol].push({
                seg: C,
                isVisible: !1,
                isAbsolute: !0,
                absoluteTop: 0,
                marginTop: 0
            });
            for (var E = C.firstCol; E <= C.lastCol; E += 1) p[E].push({
                seg: rc(C, E, E + 1, a),
                isVisible: !1,
                isAbsolute: !1,
                absoluteTop: 0,
                marginTop: 0
            })
        }
        for (E = 0; E < a.length; E += 1) g.push(0);
        for (var S = 0, D = n; S < D.length; S++) {
            var b = D[S],
                C = e[b.index],
                w = b.span;
            f[w.start].push({
                seg: rc(C, w.start, w.end, a),
                isVisible: !1,
                isAbsolute: !0,
                absoluteTop: 0,
                marginTop: 0
            });
            for (E = w.start; E < w.end; E += 1) g[E] += 1, p[E].push({
                seg: rc(C, E, E + 1, a),
                isVisible: !1,
                isAbsolute: !1,
                absoluteTop: 0,
                marginTop: 0
            })
        }
        for (E = 0; E < a.length; E += 1) v.push(h[E]);
        return {
            singleColPlacements: p,
            multiColPlacements: f,
            moreCnts: g,
            moreMarginTops: v
        }
    }

    function rc(e, t, n, r) {
        if (e.firstCol === t && e.lastCol === n - 1) return e;
        var o = e.eventRange,
            i = o.range,
            r = In(i, {
                start: r[t].date,
                end: Be(r[n - 1].date, 1)
            });
        return P(P({}, e), {
            firstCol: t,
            lastCol: n - 1,
            eventRange: {
                def: o.def,
                ui: P(P({}, o.ui), {
                    durationEditable: !1
                }),
                instance: o.instance,
                range: r
            },
            isStart: e.isStart && r.start.valueOf() === i.start.valueOf(),
            isEnd: e.isEnd && r.end.valueOf() === i.end.valueOf()
        })
    }
    var oc, ic = (t(ac, oc = ia), ac.prototype.addSegs = function(e) {
        for (var t = this, e = oc.prototype.addSegs.call(this, e), n = this.entriesByLevel, r = function(e) {
                return !t.forceHidden[la(e)]
            }, o = 0; o < n.length; o += 1) n[o] = n[o].filter(r);
        return e
    }, ac.prototype.handleInvalidInsertion = function(e, t, n) {
        var r = this.entriesByLevel,
            o = this.forceHidden,
            i = e.touchingLevel;
        if (this.hiddenConsumes && 0 <= i)
            for (var a = e.lateralStart; a < e.lateralEnd; a += 1) {
                var s, l, u = r[i][a];
                this.allowReslicing ? o[l = la(s = P(P({}, u), {
                    span: da(u.span, t.span)
                }))] || (o[l] = !0, r[i][a] = s, this.splitEntry(u, t, n)) : o[l = la(u)] || (o[l] = !0, n.push(u))
            }
        return oc.prototype.handleInvalidInsertion.call(this, e, t, n)
    }, ac);

    function ac() {
        var e = null !== oc && oc.apply(this, arguments) || this;
        return e.hiddenConsumes = !1, e.forceHidden = {}, e
    }
    var sc, lc = (t(uc, sc = zo), uc.prototype.render = function() {
        var o = this,
            i = this.props,
            e = this.state,
            t = this.context.options,
            n = i.cells.length,
            a = Nu(i.businessHourSegs, n),
            s = Nu(i.bgEventSegs, n),
            l = Nu(this.getHighlightSegs(), n),
            u = Nu(this.getMirrorSegs(), n),
            e = nc(Bn(i.fgEventSegs, t.eventOrder), i.dayMaxEvents, i.dayMaxEventRows, t.eventOrderStrict, e.eventInstanceHeights, e.maxContentHeight, i.cells),
            c = e.singleColPlacements,
            d = e.multiColPlacements,
            p = e.moreCnts,
            f = e.moreMarginTops,
            h = i.eventDrag && i.eventDrag.affectedInstances || i.eventResize && i.eventResize.affectedInstances || {};
        return So("tr", {
            ref: this.rootElRef
        }, i.renderIntro && i.renderIntro(), i.cells.map(function(e, t) {
            var n = o.renderFgSegs(t, (i.forPrint ? c : d)[t], i.todayRange, h),
                r = o.renderFgSegs(t, function(e, t) {
                    if (!e.length) return [];
                    var n = function(e) {
                        for (var t = {}, n = 0, r = e; n < r.length; n++)
                            for (var o = r[n], i = 0, a = o; i < a.length; i++) {
                                var s = a[i];
                                t[s.seg.eventRange.instance.instanceId] = s.absoluteTop
                            }
                        return e
                    }(t);
                    return e.map(function(e) {
                        return {
                            seg: e,
                            isVisible: !0,
                            isAbsolute: !0,
                            absoluteTop: n[e.eventRange.instance.instanceId],
                            marginTop: 0
                        }
                    })
                }(u[t], d), i.todayRange, {}, Boolean(i.eventDrag), Boolean(i.eventResize), !1);
            return So(ec, {
                key: e.key,
                elRef: o.cellElRefs.createRef(e.key),
                innerElRef: o.frameElRefs.createRef(e.key),
                dateProfile: i.dateProfile,
                date: e.date,
                showDayNumber: i.showDayNumbers,
                showWeekNumber: i.showWeekNumbers && 0 === t,
                forceDayTop: i.showWeekNumbers,
                todayRange: i.todayRange,
                eventSelection: i.eventSelection,
                eventDrag: i.eventDrag,
                eventResize: i.eventResize,
                extraHookProps: e.extraHookProps,
                extraDataAttrs: e.extraDataAttrs,
                extraClassNames: e.extraClassNames,
                extraDateSpan: e.extraDateSpan,
                moreCnt: p[t],
                moreMarginTop: f[t],
                singlePlacements: c[t],
                fgContentElRef: o.fgElRefs.createRef(e.key),
                fgContent: So(Co, null, So(Co, null, n), So(Co, null, r)),
                bgContent: So(Co, null, o.renderFillSegs(l[t], "highlight"), o.renderFillSegs(a[t], "non-business"), o.renderFillSegs(s[t], "bg-event"))
            })
        }))
    }, uc.prototype.componentDidMount = function() {
        this.updateSizing(!0)
    }, uc.prototype.componentDidUpdate = function(e, t) {
        var n = this.props;
        this.updateSizing(!dt(e, n))
    }, uc.prototype.getHighlightSegs = function() {
        var e = this.props;
        return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs
    }, uc.prototype.getMirrorSegs = function() {
        var e = this.props;
        return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
    }, uc.prototype.renderFgSegs = function(e, t, n, r, o, i, a) {
        var s = this.context,
            l = this.props.eventSelection,
            u = this.state.framePositions,
            c = 1 === this.props.cells.length,
            d = o || i || a,
            p = [];
        if (u)
            for (var f = 0, h = t; f < h.length; f++) {
                var g = h[f],
                    v = g.seg,
                    m = v.eventRange.instance.instanceId,
                    y = m + ":" + e,
                    E = g.isVisible && !r[m],
                    S = g.isAbsolute,
                    D = "",
                    b = "";
                S && (s.isRtl ? (b = 0, D = u.lefts[v.lastCol] - u.lefts[v.firstCol]) : (D = 0, b = u.rights[v.firstCol] - u.rights[v.lastCol])), p.push(So("div", {
                    className: "fc-daygrid-event-harness" + (S ? " fc-daygrid-event-harness-abs" : ""),
                    key: y,
                    ref: d ? null : this.segHarnessRefs.createRef(y),
                    style: {
                        visibility: E ? "" : "hidden",
                        marginTop: S ? "" : g.marginTop,
                        top: S ? g.absoluteTop : "",
                        left: D,
                        right: b
                    }
                }, Vu(v) ? So(Gu, P({
                    seg: v,
                    isDragging: o,
                    isSelected: m === l,
                    defaultDisplayEventEnd: c
                }, Xn(v, n))) : So(zu, P({
                    seg: v,
                    isDragging: o,
                    isResizing: i,
                    isDateSelecting: a,
                    isSelected: m === l,
                    defaultDisplayEventEnd: c
                }, Xn(v, n)))))
            }
        return p
    }, uc.prototype.renderFillSegs = function(e, t) {
        var n = this.context.isRtl,
            r = this.props.todayRange,
            o = this.state.framePositions,
            i = [];
        if (o)
            for (var a = 0, s = e; a < s.length; a++) {
                var l = s[a],
                    u = n ? {
                        right: 0,
                        left: o.lefts[l.lastCol] - o.lefts[l.firstCol]
                    } : {
                        left: 0,
                        right: o.rights[l.firstCol] - o.rights[l.lastCol]
                    };
                i.push(So("div", {
                    key: $n(l.eventRange),
                    className: "fc-daygrid-bg-harness",
                    style: u
                }, "bg-event" === t ? So(sl, P({
                    seg: l
                }, Xn(l, r))) : al(t)))
            }
        return So.apply(void 0, f([Co, {}], i))
    }, uc.prototype.updateSizing = function(e) {
        var t, n = this.props,
            r = this.frameElRefs;
        n.forPrint || null === n.clientWidth || (!e || (t = n.cells.map(function(e) {
            return r.currentMap[e.key]
        })).length && (e = this.rootElRef.current, this.setState({
            framePositions: new ao(e, t, !0, !1)
        })), n = !0 === n.dayMaxEvents || !0 === n.dayMaxEventRows, this.setState({
            eventInstanceHeights: this.queryEventInstanceHeights(),
            maxContentHeight: n ? this.computeMaxContentHeight() : null
        }))
    }, uc.prototype.queryEventInstanceHeights = function() {
        var e, t = this.segHarnessRefs.currentMap,
            n = {};
        for (e in t) {
            var r = Math.round(t[e].getBoundingClientRect().height),
                o = e.split(":")[0];
            n[o] = Math.max(n[o] || 0, r)
        }
        return n
    }, uc.prototype.computeMaxContentHeight = function() {
        var e = this.props.cells[0].key,
            t = this.cellElRefs.currentMap[e],
            e = this.fgElRefs.currentMap[e];
        return t.getBoundingClientRect().bottom - e.getBoundingClientRect().top
    }, uc.prototype.getCellEls = function() {
        var t = this.cellElRefs.currentMap;
        return this.props.cells.map(function(e) {
            return t[e.key]
        })
    }, uc);

    function uc() {
        var e = null !== sc && sc.apply(this, arguments) || this;
        return e.cellElRefs = new Ts, e.frameElRefs = new Ts, e.fgElRefs = new Ts, e.segHarnessRefs = new Ts, e.rootElRef = bo(), e.state = {
            framePositions: null,
            maxContentHeight: null,
            eventInstanceHeights: {}
        }, e
    }
    lc.addStateEquality({
        eventInstanceHeights: dt
    });
    var cc, dc = (t(pc, cc = zo), pc.prototype.render = function() {
        var r = this,
            o = this.props,
            i = o.dateProfile,
            a = o.dayMaxEventRows,
            s = o.dayMaxEvents,
            t = o.expandRows,
            l = o.cells.length,
            u = this.splitBusinessHourSegs(o.businessHourSegs, l),
            c = this.splitBgEventSegs(o.bgEventSegs, l),
            d = this.splitFgEventSegs(o.fgEventSegs, l),
            p = this.splitDateSelectionSegs(o.dateSelectionSegs, l),
            f = this.splitEventDrag(o.eventDrag, l),
            h = this.splitEventResize(o.eventResize, l),
            e = !0 === s || !0 === a;
        return e && !t && (e = !1, s = a = null), So("div", {
            className: ["fc-daygrid-body", e ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", t ? "" : "fc-daygrid-body-natural"].join(" "),
            ref: this.handleRootEl,
            style: {
                width: o.clientWidth,
                minWidth: o.tableMinWidth
            }
        }, So(ns, {
            unit: "day"
        }, function(e, n) {
            return So(Co, null, So("table", {
                className: "fc-scrollgrid-sync-table",
                style: {
                    width: o.clientWidth,
                    minWidth: o.tableMinWidth,
                    height: t ? o.clientHeight : ""
                }
            }, o.colGroupNode, So("tbody", null, o.cells.map(function(e, t) {
                return So(lc, {
                    ref: r.rowRefs.createRef(t),
                    key: e.length ? e[0].date.toISOString() : t,
                    showDayNumbers: 1 < l,
                    showWeekNumbers: o.showWeekNumbers,
                    todayRange: n,
                    dateProfile: i,
                    cells: e,
                    renderIntro: o.renderRowIntro,
                    businessHourSegs: u[t],
                    eventSelection: o.eventSelection,
                    bgEventSegs: c[t].filter(fc),
                    fgEventSegs: d[t],
                    dateSelectionSegs: p[t],
                    eventDrag: f[t],
                    eventResize: h[t],
                    dayMaxEvents: s,
                    dayMaxEventRows: a,
                    clientWidth: o.clientWidth,
                    clientHeight: o.clientHeight,
                    forPrint: o.forPrint
                })
            }))))
        }))
    }, pc.prototype.prepareHits = function() {
        this.rowPositions = new ao(this.rootEl, this.rowRefs.collect().map(function(e) {
            return e.getCellEls()[0]
        }), !1, !0), this.colPositions = new ao(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1)
    }, pc.prototype.queryHit = function(e, t) {
        var n = this.colPositions,
            r = this.rowPositions,
            o = n.leftToIndex(e),
            e = r.topToIndex(t);
        if (null == e || null == o) return null;
        t = this.props.cells[e][o];
        return {
            dateProfile: this.props.dateProfile,
            dateSpan: P({
                range: this.getCellRange(e, o),
                allDay: !0
            }, t.extraDateSpan),
            dayEl: this.getCellEl(e, o),
            rect: {
                left: n.lefts[o],
                right: n.rights[o],
                top: r.tops[e],
                bottom: r.bottoms[e]
            },
            layer: 0
        }
    }, pc.prototype.getCellEl = function(e, t) {
        return this.rowRefs.currentMap[e].getCellEls()[t]
    }, pc.prototype.getCellRange = function(e, t) {
        t = this.props.cells[e][t].date;
        return {
            start: t,
            end: Be(t, 1)
        }
    }, pc);

    function pc() {
        var t = null !== cc && cc.apply(this, arguments) || this;
        return t.splitBusinessHourSegs = Pt(Iu), t.splitBgEventSegs = Pt(Iu), t.splitFgEventSegs = Pt(Iu), t.splitDateSelectionSegs = Pt(Iu), t.splitEventDrag = Pt(Hu), t.splitEventResize = Pt(Hu), t.rowRefs = new Ts, t.handleRootEl = function(e) {
            (t.rootEl = e) ? t.context.registerInteractiveComponent(t, {
                el: e,
                isHitComboAllowed: t.props.isHitComboAllowed
            }): t.context.unregisterInteractiveComponent(t)
        }, t
    }

    function fc(e) {
        return e.eventRange.def.allDay
    }
    var hc, gc = (t(vc, hc = fs), vc.prototype.sliceRange = function(e, t) {
        return t.sliceRange(e)
    }, vc);

    function vc() {
        var e = null !== hc && hc.apply(this, arguments) || this;
        return e.forceDayIfListItem = !0, e
    }
    var mc, yc = (t(Ec, mc = zo), Ec.prototype.render = function() {
        var e = this.props,
            t = this.context;
        return So(dc, P({
            ref: this.tableRef
        }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
            dateProfile: e.dateProfile,
            cells: e.dayTableModel.cells,
            colGroupNode: e.colGroupNode,
            tableMinWidth: e.tableMinWidth,
            renderRowIntro: e.renderRowIntro,
            dayMaxEvents: e.dayMaxEvents,
            dayMaxEventRows: e.dayMaxEventRows,
            showWeekNumbers: e.showWeekNumbers,
            expandRows: e.expandRows,
            headerAlignElRef: e.headerAlignElRef,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            forPrint: e.forPrint
        }))
    }, Ec);

    function Ec() {
        var e = null !== mc && mc.apply(this, arguments) || this;
        return e.slicer = new gc, e.tableRef = bo(), e
    }
    var Sc, Dc, bc = (t(Cc, Sc = Mu), Cc.prototype.render = function() {
        var t = this,
            e = this.context,
            n = e.options,
            r = e.dateProfileGenerator,
            o = this.props,
            i = this.buildDayTableModel(o.dateProfile, r),
            e = n.dayHeaders && So(as, {
                ref: this.headerRef,
                dateProfile: o.dateProfile,
                dates: i.headerDates,
                datesRepDistinctDays: 1 === i.rowCnt
            }),
            r = function(e) {
                return So(yc, {
                    ref: t.tableRef,
                    dateProfile: o.dateProfile,
                    dayTableModel: i,
                    businessHours: o.businessHours,
                    dateSelection: o.dateSelection,
                    eventStore: o.eventStore,
                    eventUiBases: o.eventUiBases,
                    eventSelection: o.eventSelection,
                    eventDrag: o.eventDrag,
                    eventResize: o.eventResize,
                    nextDayThreshold: n.nextDayThreshold,
                    colGroupNode: e.tableColGroupNode,
                    tableMinWidth: e.tableMinWidth,
                    dayMaxEvents: n.dayMaxEvents,
                    dayMaxEventRows: n.dayMaxEventRows,
                    showWeekNumbers: n.weekNumbers,
                    expandRows: !o.isHeightAuto,
                    headerAlignElRef: t.headerElRef,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    forPrint: o.forPrint
                })
            };
        return n.dayMinWidth ? this.renderHScrollLayout(e, r, i.colCnt, n.dayMinWidth) : this.renderSimpleLayout(e, r)
    }, Cc);

    function Cc() {
        var e = null !== Sc && Sc.apply(this, arguments) || this;
        return e.buildDayTableModel = Pt(wc), e.headerRef = bo(), e.tableRef = bo(), e
    }

    function wc(e, t) {
        t = new us(e.renderRange, t);
        return new ds(t, /year|month|week/.test(e.currentRangeUnit))
    }

    function Rc() {
        return null !== Dc && Dc.apply(this, arguments) || this
    }
    var Tc, _c = jo({
            initialView: "dayGridMonth",
            views: {
                dayGrid: {
                    component: bc,
                    dateProfileGeneratorClass: (t(Rc, Dc = mi), Rc.prototype.buildRenderRange = function(e, t, n) {
                        var r = this.props.dateEnv,
                            e = Dc.prototype.buildRenderRange.call(this, e, t, n),
                            n = e.start,
                            e = e.end;
                        return /^(year|month)$/.test(t) && (n = r.startOfWeek(n), (r = r.startOfWeek(e)).valueOf() !== e.valueOf() && (e = ze(r, 1))), {
                            start: n,
                            end: e = this.props.monthMode && this.props.fixedWeekCount ? ze(e, 6 - Math.ceil(Ge(n, e))) : e
                        }
                    }, Rc)
                },
                dayGridDay: {
                    type: "dayGrid",
                    duration: {
                        days: 1
                    }
                },
                dayGridWeek: {
                    type: "dayGrid",
                    duration: {
                        weeks: 1
                    }
                },
                dayGridMonth: {
                    type: "dayGrid",
                    duration: {
                        months: 1
                    },
                    monthMode: !0,
                    fixedWeekCount: !0
                }
            }
        }),
        kc = (t(xc, Tc = zr), xc.prototype.getKeyInfo = function() {
            return {
                allDay: {},
                timed: {}
            }
        }, xc.prototype.getKeysForDateSpan = function(e) {
            return e.allDay ? ["allDay"] : ["timed"]
        }, xc.prototype.getKeysForEventDef = function(e) {
            return e.allDay ? Ln(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"]
        }, xc);

    function xc() {
        return null !== Tc && Tc.apply(this, arguments) || this
    }
    var Mc = Xt({
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: !0,
        meridiem: "short"
    });

    function Pc(o) {
        var i = ["fc-timegrid-slot", "fc-timegrid-slot-label", o.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
        return So(Mo.Consumer, null, function(e) {
            if (!o.isLabeled) return So("td", {
                className: i.join(" "),
                "data-time": o.isoTimeStr
            });
            var t = e.dateEnv,
                n = e.options,
                r = e.viewApi,
                e = null == n.slotLabelFormat ? Mc : Array.isArray(n.slotLabelFormat) ? Xt(n.slotLabelFormat[0]) : Xt(n.slotLabelFormat),
                e = {
                    level: 0,
                    time: o.time,
                    date: t.toDate(o.date),
                    view: r,
                    text: t.format(o.date, e)
                };
            return So($o, {
                hookProps: e,
                classNames: n.slotLabelClassNames,
                content: n.slotLabelContent,
                defaultContent: Ic,
                didMount: n.slotLabelDidMount,
                willUnmount: n.slotLabelWillUnmount
            }, function(e, t, n, r) {
                return So("td", {
                    ref: e,
                    className: i.concat(t).join(" "),
                    "data-time": o.isoTimeStr
                }, So("div", {
                    className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
                }, So("div", {
                    className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                    ref: n
                }, r)))
            })
        })
    }

    function Ic(e) {
        return e.text
    }
    var Nc, Hc = (t(Oc, Nc = Ao), Oc.prototype.render = function() {
        return this.props.slatMetas.map(function(e) {
            return So("tr", {
                key: e.key
            }, So(Pc, P({}, e)))
        })
    }, Oc);

    function Oc() {
        return null !== Nc && Nc.apply(this, arguments) || this
    }
    var Ac, Uc = Xt({
            week: "short"
        }),
        se = (t(Lc, Ac = zo), Lc.prototype.renderSimpleLayout = function(e, t, n) {
            var r = this.context,
                o = this.props,
                i = [],
                a = Ws(r.options);
            return e && i.push({
                type: "header",
                key: "header",
                isSticky: a,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: "fc-col-header",
                    rowContent: e
                }
            }), t && (i.push({
                type: "body",
                key: "all-day",
                chunk: {
                    content: t
                }
            }), i.push({
                type: "body",
                key: "all-day-divider",
                outerContent: So("tr", {
                    className: "fc-scrollgrid-section"
                }, So("td", {
                    className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")
                }))
            })), i.push({
                type: "body",
                key: "body",
                liquid: !0,
                expandRows: Boolean(r.options.expandRows),
                chunk: {
                    scrollerElRef: this.scrollerElRef,
                    content: n
                }
            }), So(di, {
                viewSpec: r.viewSpec,
                elRef: this.rootElRef
            }, function(e, t) {
                return So("div", {
                    className: ["fc-timegrid"].concat(t).join(" "),
                    ref: e
                }, So(zs, {
                    liquid: !o.isHeightAuto && !o.forPrint,
                    collapsibleWidth: o.forPrint,
                    cols: [{
                        width: "shrink"
                    }],
                    sections: i
                }))
            })
        }, Lc.prototype.renderHScrollLayout = function(e, t, n, r, o, i, a) {
            var s = this,
                l = this.context.pluginHooks.scrollGridImpl;
            if (!l) throw new Error("No ScrollGrid implementation");
            var u = this.context,
                c = this.props,
                d = !c.forPrint && Ws(u.options),
                p = !c.forPrint && Vs(u.options),
                f = [];
            e && f.push({
                type: "header",
                key: "header",
                isSticky: d,
                syncRowHeights: !0,
                chunks: [{
                    key: "axis",
                    rowContent: function(e) {
                        return So("tr", null, s.renderHeadAxis("day", e.rowSyncHeights[0]))
                    }
                }, {
                    key: "cols",
                    elRef: this.headerElRef,
                    tableClassName: "fc-col-header",
                    rowContent: e
                }]
            }), t && (f.push({
                type: "body",
                key: "all-day",
                syncRowHeights: !0,
                chunks: [{
                    key: "axis",
                    rowContent: function(e) {
                        return So("tr", null, s.renderTableRowAxis(e.rowSyncHeights[0]))
                    }
                }, {
                    key: "cols",
                    content: t
                }]
            }), f.push({
                key: "all-day-divider",
                type: "body",
                outerContent: So("tr", {
                    className: "fc-scrollgrid-section"
                }, So("td", {
                    colSpan: 2,
                    className: "fc-timegrid-divider " + u.theme.getClass("tableCellShaded")
                }))
            }));
            var h = u.options.nowIndicator;
            return f.push({
                type: "body",
                key: "body",
                liquid: !0,
                expandRows: Boolean(u.options.expandRows),
                chunks: [{
                    key: "axis",
                    content: function(e) {
                        return So("div", {
                            className: "fc-timegrid-axis-chunk"
                        }, So("table", {
                            style: {
                                height: e.expandRows ? e.clientHeight : ""
                            }
                        }, e.tableColGroupNode, So("tbody", null, So(Hc, {
                            slatMetas: i
                        }))), So("div", {
                            className: "fc-timegrid-now-indicator-container"
                        }, So(ns, {
                            unit: h ? "minute" : "day"
                        }, function(e) {
                            var o = h && a && a.safeComputeTop(e);
                            return "number" == typeof o ? So($s, {
                                isAxis: !0,
                                date: e
                            }, function(e, t, n, r) {
                                return So("div", {
                                    ref: e,
                                    className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),
                                    style: {
                                        top: o
                                    }
                                }, r)
                            }) : null
                        })))
                    }
                }, {
                    key: "cols",
                    scrollerElRef: this.scrollerElRef,
                    content: n
                }]
            }), p && f.push({
                key: "footer",
                type: "footer",
                isSticky: !0,
                chunks: [{
                    key: "axis",
                    content: Ls
                }, {
                    key: "cols",
                    content: Ls
                }]
            }), So(di, {
                viewSpec: u.viewSpec,
                elRef: this.rootElRef
            }, function(e, t) {
                return So("div", {
                    className: ["fc-timegrid"].concat(t).join(" "),
                    ref: e
                }, So(l, {
                    liquid: !c.isHeightAuto && !c.forPrint,
                    collapsibleWidth: !1,
                    colGroups: [{
                        width: "shrink",
                        cols: [{
                            width: "shrink"
                        }]
                    }, {
                        cols: [{
                            span: r,
                            minWidth: o
                        }]
                    }],
                    sections: f
                }))
            })
        }, Lc.prototype.getAllDayMaxEventProps = function() {
            var e = this.context.options,
                t = e.dayMaxEvents,
                e = e.dayMaxEventRows;
            return !0 !== t && !0 !== e || (t = void 0, e = 5), {
                dayMaxEvents: t,
                dayMaxEventRows: e
            }
        }, Lc);

    function Lc() {
        var a = null !== Ac && Ac.apply(this, arguments) || this;
        return a.allDaySplitter = new kc, a.headerElRef = bo(), a.rootElRef = bo(), a.scrollerElRef = bo(), a.state = {
            slatCoords: null
        }, a.handleScrollTopRequest = function(e) {
            var t = a.scrollerElRef.current;
            t && (t.scrollTop = e)
        }, a.renderHeadAxis = function(e, o) {
            void 0 === o && (o = "");
            var t = a.context.options,
                n = a.props.dateProfile.renderRange,
                r = qe(n.start, n.end),
                i = t.navLinks && 1 === r ? {
                    "data-navlink": Yr(n.start, "week"),
                    tabIndex: 0
                } : {};
            return t.weekNumbers && "day" === e ? So(ul, {
                date: n.start,
                defaultFormat: Uc
            }, function(e, t, n, r) {
                return So("th", {
                    ref: e,
                    className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(t).join(" ")
                }, So("div", {
                    className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
                    style: {
                        height: o
                    }
                }, So("a", P({
                    ref: n,
                    className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"
                }, i), r)))
            }) : So("th", {
                className: "fc-timegrid-axis"
            }, So("div", {
                className: "fc-timegrid-axis-frame",
                style: {
                    height: o
                }
            }))
        }, a.renderTableRowAxis = function(o) {
            var e = a.context,
                t = e.options,
                e = e.viewApi,
                e = {
                    text: t.allDayText,
                    view: e
                };
            return So($o, {
                hookProps: e,
                classNames: t.allDayClassNames,
                content: t.allDayContent,
                defaultContent: Wc,
                didMount: t.allDayDidMount,
                willUnmount: t.allDayWillUnmount
            }, function(e, t, n, r) {
                return So("td", {
                    ref: e,
                    className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(t).join(" ")
                }, So("div", {
                    className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (null == o ? " fc-timegrid-axis-frame-liquid" : ""),
                    style: {
                        height: o
                    }
                }, So("span", {
                    className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                    ref: n
                }, r)))
            })
        }, a.handleSlatCoords = function(e) {
            a.setState({
                slatCoords: e
            })
        }, a
    }

    function Wc(e) {
        return e.text
    }
    var Vc = (Fc.prototype.safeComputeTop = function(e) {
        var t = this.dateProfile;
        if (An(t.currentRange, e)) {
            var n = Ke(e),
                n = e.valueOf() - n.valueOf();
            if (n >= Ct(t.slotMinTime) && n < Ct(t.slotMaxTime)) return this.computeTimeTop(yt(n))
        }
        return null
    }, Fc.prototype.computeDateTop = function(e, t) {
        return t = t || Ke(e), this.computeTimeTop(yt(e.valueOf() - t.valueOf()))
    }, Fc.prototype.computeTimeTop = function(e) {
        var t = this.positions,
            n = this.dateProfile,
            r = t.els.length,
            e = (e.milliseconds - Ct(n.slotMinTime)) / Ct(this.slotDuration),
            e = Math.max(0, e);
        return e = Math.min(r, e), n = Math.floor(e), r = e - (n = Math.min(n, r - 1)), t.tops[n] + t.getHeight(n) * r
    }, Fc);

    function Fc(e, t, n) {
        this.positions = e, this.dateProfile = t, this.slotDuration = n
    }
    var zc, Bc = (t(jc, zc = Ao), jc.prototype.render = function() {
        var n = this.props,
            r = this.context,
            a = r.options,
            s = n.slatElRefs;
        return So("tbody", null, n.slatMetas.map(function(o, e) {
            var t = {
                    time: o.time,
                    date: r.dateEnv.toDate(o.date),
                    view: r.viewApi
                },
                i = ["fc-timegrid-slot", "fc-timegrid-slot-lane", o.isLabeled ? "" : "fc-timegrid-slot-minor"];
            return So("tr", {
                key: o.key,
                ref: s.createRef(o.key)
            }, n.axis && So(Pc, P({}, o)), So($o, {
                hookProps: t,
                classNames: a.slotLaneClassNames,
                content: a.slotLaneContent,
                didMount: a.slotLaneDidMount,
                willUnmount: a.slotLaneWillUnmount
            }, function(e, t, n, r) {
                return So("td", {
                    ref: e,
                    className: i.concat(t).join(" "),
                    "data-time": o.isoTimeStr
                }, r)
            }))
        }))
    }, jc);

    function jc() {
        return null !== zc && zc.apply(this, arguments) || this
    }
    var Gc, qc = (t(Yc, Gc = Ao), Yc.prototype.render = function() {
        var e = this.props,
            t = this.context;
        return So("div", {
            className: "fc-timegrid-slots",
            ref: this.rootElRef
        }, So("table", {
            className: t.theme.getClass("table"),
            style: {
                minWidth: e.tableMinWidth,
                width: e.clientWidth,
                height: e.minHeight
            }
        }, e.tableColGroupNode, So(Bc, {
            slatElRefs: this.slatElRefs,
            axis: e.axis,
            slatMetas: e.slatMetas
        })))
    }, Yc.prototype.componentDidMount = function() {
        this.updateSizing()
    }, Yc.prototype.componentDidUpdate = function() {
        this.updateSizing()
    }, Yc.prototype.componentWillUnmount = function() {
        this.props.onCoords && this.props.onCoords(null)
    }, Yc.prototype.updateSizing = function() {
        var t, e = this.context,
            n = this.props;
        n.onCoords && null !== n.clientWidth && this.rootElRef.current.offsetHeight && n.onCoords(new Vc(new ao(this.rootElRef.current, (t = this.slatElRefs.currentMap, n.slatMetas.map(function(e) {
            return t[e.key]
        })), !1, !0), this.props.dateProfile, e.options.slotDuration))
    }, Yc);

    function Yc() {
        var e = null !== Gc && Gc.apply(this, arguments) || this;
        return e.rootElRef = bo(), e.slatElRefs = new Ts, e
    }

    function Zc(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n.push([]);
        if (e)
            for (r = 0; r < e.length; r += 1) n[e[r].col].push(e[r]);
        return n
    }

    function Xc(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = {
                affectedInstances: e.affectedInstances,
                isEvent: e.isEvent,
                segs: []
            };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.col].segs.push(i)
            }
        } else
            for (var a = 0; a < t; a += 1) n[a] = null;
        return n
    }
    var Kc, $c = (t(Jc, Kc = Ao), Jc.prototype.render = function() {
        var i = this,
            a = this.props;
        return So(yl, {
            allDayDate: null,
            moreCnt: a.hiddenSegs.length,
            allSegs: a.hiddenSegs,
            hiddenSegs: a.hiddenSegs,
            alignmentElRef: this.rootElRef,
            defaultContent: Qc,
            extraDateSpan: a.extraDateSpan,
            dateProfile: a.dateProfile,
            todayRange: a.todayRange,
            popoverContent: function() {
                return vd(a.hiddenSegs, a)
            }
        }, function(t, e, n, r, o) {
            return So("a", {
                ref: function(e) {
                    Vo(t, e), Vo(i.rootElRef, e)
                },
                className: ["fc-timegrid-more-link"].concat(e).join(" "),
                style: {
                    top: a.top,
                    bottom: a.bottom
                },
                onClick: o
            }, So("div", {
                ref: n,
                className: "fc-timegrid-more-link-inner fc-sticky"
            }, r))
        })
    }, Jc);

    function Jc() {
        var e = null !== Kc && Kc.apply(this, arguments) || this;
        return e.rootElRef = bo(), e
    }

    function Qc(e) {
        return e.shortText
    }

    function ed(e, t, n) {
        var r = new ia;
        null != t && (r.strictOrder = t), null != n && (r.maxStackCnt = n);
        var o, i, a, p, f, e = ua(r.addSegs(e)),
            r = (i = (o = r).entriesByLevel, a = od(function(e, t) {
                return e + ":" + t
            }, function(e, t) {
                var n = td(function(e, t, n) {
                        for (var r = e.levelCoords, o = e.entriesByLevel, i = o[t][n], a = r[t] + i.thickness, s = r.length, l = t; l < s && r[l] < a; l += 1);
                        for (; l < s; l += 1) {
                            for (var u = o[l], c = void 0, d = fa(u, i.span.start, sa), d = d[0] + d[1], p = d;
                                (c = u[p]) && c.span.start < i.span.end;) p += 1;
                            if (d < p) return {
                                level: l,
                                lateralStart: d,
                                lateralEnd: p
                            }
                        }
                        return null
                    }(o, e, t), a),
                    t = i[e][t];
                return [P(P({}, t), {
                    nextLevelNodes: n[0]
                }), t.thickness + n[1]]
            }), td(i.length ? {
                level: 0,
                lateralStart: 0,
                lateralEnd: i[0].length
            } : null, a)[0]);
        p = 1, f = od(function(e, t, n) {
            return la(e)
        }, function(e, t, n) {
            var r = e.nextLevelNodes,
                o = e.thickness,
                i = o + n,
                o = o / i,
                a = [];
            if (r.length)
                for (var s = 0, l = r; s < l.length; s++) {
                    var u, c, d = l[s];
                    void 0 === u ? u = (c = f(d, t, i))[0] : c = f(d, u, 0), a.push(c[1])
                } else u = p;
            o *= u - t;
            return [u - o, P(P({}, e), {
                thickness: o,
                nextLevelNodes: a
            })]
        });
        var s, l, r = r.map(function(e) {
            return f(e, 0, 0)[1]
        });

        function u(e, t, n) {
            for (var r = 0, o = 0, i = e; o < i.length; o++) var a = i[o],
                r = Math.max(l(a, t, n), r);
            return r
        }
        return {
            segRects: (s = [], l = od(function(e, t, n) {
                return la(e)
            }, function(e, t, n) {
                var r = P(P({}, e), {
                    levelCoord: t,
                    stackDepth: n,
                    stackForward: 0
                });
                return s.push(r), r.stackForward = u(e.nextLevelNodes, t + e.thickness, n + 1) + 1
            }), u(r, 0, 0), s),
            hiddenGroups: e
        }
    }

    function td(e, t) {
        if (!e) return [
            [], 0
        ];
        for (var n = e.level, r = e.lateralStart, o = e.lateralEnd, i = r, a = []; i < o;) a.push(t(n, i)), i += 1;
        return a.sort(nd), [a.map(rd), a[0][1]]
    }

    function nd(e, t) {
        return t[1] - e[1]
    }

    function rd(e) {
        return e[0]
    }

    function od(r, o) {
        var i = {};
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = r.apply(void 0, e);
            return n in i ? i[n] : i[n] = o.apply(void 0, e)
        }
    }

    function id(e, t, n, r) {
        void 0 === r && (r = 0);
        var o = [];
        if (n = void 0 === n ? null : n)
            for (var i = 0; i < e.length; i += 1) {
                var a = e[i],
                    s = n.computeDateTop(a.start, t),
                    a = Math.max(s + (r || 0), n.computeDateTop(a.end, t));
                o.push({
                    start: Math.round(s),
                    end: Math.round(a)
                })
            }
        return o
    }
    var ad, sd = Xt({
            hour: "numeric",
            minute: "2-digit",
            meridiem: !1
        }),
        ld = (t(ud, ad = Ao), ud.prototype.render = function() {
            var e = ["fc-timegrid-event", "fc-v-event"];
            return this.props.isShort && e.push("fc-timegrid-event-short"), So(Zs, P({}, this.props, {
                defaultTimeFormat: sd,
                extraClassNames: e
            }))
        }, ud);

    function ud() {
        return null !== ad && ad.apply(this, arguments) || this
    }
    var cd, dd = (t(pd, cd = Ao), pd.prototype.render = function() {
        var e = this.props;
        return So(el, {
            date: e.date,
            dateProfile: e.dateProfile,
            todayRange: e.todayRange,
            extraHookProps: e.extraHookProps
        }, function(e, t) {
            return t && So("div", {
                className: "fc-timegrid-col-misc",
                ref: e
            }, t)
        })
    }, pd);

    function pd() {
        return null !== cd && cd.apply(this, arguments) || this
    }
    var fd, hd = (t(gd, fd = Ao), gd.prototype.render = function() {
        var r = this,
            o = this.props,
            e = this.context,
            i = e.options.selectMirror,
            a = o.eventDrag && o.eventDrag.segs || o.eventResize && o.eventResize.segs || i && o.dateSelectionSegs || [],
            s = o.eventDrag && o.eventDrag.affectedInstances || o.eventResize && o.eventResize.affectedInstances || {},
            l = this.sortEventSegs(o.fgEventSegs, e.options.eventOrder);
        return So(ol, {
            elRef: o.elRef,
            date: o.date,
            dateProfile: o.dateProfile,
            todayRange: o.todayRange,
            extraHookProps: o.extraHookProps
        }, function(e, t, n) {
            return So("td", P({
                ref: e,
                className: ["fc-timegrid-col"].concat(t, o.extraClassNames || []).join(" ")
            }, n, o.extraDataAttrs), So("div", {
                className: "fc-timegrid-col-frame"
            }, So("div", {
                className: "fc-timegrid-col-bg"
            }, r.renderFillSegs(o.businessHourSegs, "non-business"), r.renderFillSegs(o.bgEventSegs, "bg-event"), r.renderFillSegs(o.dateSelectionSegs, "highlight")), So("div", {
                className: "fc-timegrid-col-events"
            }, r.renderFgSegs(l, s, !1, !1, !1)), So("div", {
                className: "fc-timegrid-col-events"
            }, r.renderFgSegs(a, {}, Boolean(o.eventDrag), Boolean(o.eventResize), Boolean(i))), So("div", {
                className: "fc-timegrid-now-indicator-container"
            }, r.renderNowIndicator(o.nowIndicatorSegs)), So(dd, {
                date: o.date,
                dateProfile: o.dateProfile,
                todayRange: o.todayRange,
                extraHookProps: o.extraHookProps
            })))
        })
    }, gd.prototype.renderFgSegs = function(e, t, n, r, o) {
        var i = this.props;
        return i.forPrint ? vd(e, i) : this.renderPositionedFgSegs(e, t, n, r, o)
    }, gd.prototype.renderPositionedFgSegs = function(e, s, l, u, c) {
        var d = this,
            t = this.context.options,
            n = t.eventMaxStack,
            p = t.eventShortHeight,
            r = t.eventOrderStrict,
            o = t.eventMinHeight,
            i = this.props,
            a = i.date,
            t = i.slatCoords,
            f = i.eventSelection,
            h = i.todayRange,
            g = i.nowDate,
            v = l || u || c,
            r = function(e, t, n, r) {
                for (var o = [], i = [], a = 0; a < e.length; a += 1) {
                    var s = t[a];
                    s ? o.push({
                        index: a,
                        thickness: 1,
                        span: s
                    }) : i.push(e[a])
                }
                for (var r = (n = ed(o, n, r)).segRects, n = n.hiddenGroups, l = [], u = 0, c = r; u < c.length; u++) {
                    var d = c[u];
                    l.push({
                        seg: e[d.index],
                        rect: d
                    })
                }
                for (var p = 0, f = i; p < f.length; p++) {
                    var h = f[p];
                    l.push({
                        seg: h,
                        rect: null
                    })
                }
                return {
                    segPlacements: l,
                    hiddenGroups: n
                }
            }(e, id(e, a, t, o), r, n),
            n = r.segPlacements,
            r = r.hiddenGroups;
        return So(Co, null, this.renderHiddenGroups(r, e), n.map(function(e) {
            var t = e.seg,
                n = e.rect,
                r = t.eventRange.instance.instanceId,
                o = v || Boolean(!s[r] && n),
                i = md(n && n.span),
                a = !v && n ? d.computeSegHStyle(n) : {
                    left: 0,
                    right: 0
                },
                e = Boolean(n) && 0 < n.stackForward,
                n = Boolean(n) && n.span.end - n.span.start < p;
            return So("div", {
                className: "fc-timegrid-event-harness" + (e ? " fc-timegrid-event-harness-inset" : ""),
                key: r,
                style: P(P({
                    visibility: o ? "" : "hidden"
                }, i), a)
            }, So(ld, P({
                seg: t,
                isDragging: l,
                isResizing: u,
                isDateSelecting: c,
                isSelected: r === f,
                isShort: n
            }, Xn(t, h, g))))
        }))
    }, gd.prototype.renderHiddenGroups = function(e, r) {
        var t = this.props,
            o = t.extraDateSpan,
            i = t.dateProfile,
            a = t.todayRange,
            s = t.nowDate,
            l = t.eventSelection,
            u = t.eventDrag,
            c = t.eventResize;
        return So(Co, null, e.map(function(e) {
            var t, n = md(e.span),
                e = (e = e.entries, t = r, e.map(function(e) {
                    return t[e.index]
                }));
            return So($c, {
                key: Tt(bl(e)),
                hiddenSegs: e,
                top: n.top,
                bottom: n.bottom,
                extraDateSpan: o,
                dateProfile: i,
                todayRange: a,
                nowDate: s,
                eventSelection: l,
                eventDrag: u,
                eventResize: c
            })
        }))
    }, gd.prototype.renderFillSegs = function(n, r) {
        var o = this.props,
            e = this.context,
            e = id(n, o.date, o.slatCoords, e.options.eventMinHeight).map(function(e, t) {
                t = n[t];
                return So("div", {
                    key: $n(t.eventRange),
                    className: "fc-timegrid-bg-harness",
                    style: md(e)
                }, "bg-event" === r ? So(sl, P({
                    seg: t
                }, Xn(t, o.todayRange, o.nowDate))) : al(r))
            });
        return So(Co, null, e)
    }, gd.prototype.renderNowIndicator = function(e) {
        var t = this.props,
            i = t.slatCoords,
            a = t.date;
        return i ? e.map(function(o, e) {
            return So($s, {
                isAxis: !1,
                date: a,
                key: e
            }, function(e, t, n, r) {
                return So("div", {
                    ref: e,
                    className: ["fc-timegrid-now-indicator-line"].concat(t).join(" "),
                    style: {
                        top: i.computeDateTop(o.start, a)
                    }
                }, r)
            })
        }) : null
    }, gd.prototype.computeSegHStyle = function(e) {
        var t, n = this.context,
            r = n.isRtl,
            o = n.options.slotEventOverlap,
            i = e.levelCoord,
            n = e.levelCoord + e.thickness;
        o && (n = Math.min(1, i + 2 * (n - i)));
        n = r ? (t = 1 - n, i) : (t = i, 1 - n), n = {
            zIndex: e.stackDepth + 1,
            left: 100 * t + "%",
            right: 100 * n + "%"
        };
        return o && !e.stackForward && (n[r ? "marginLeft" : "marginRight"] = 20), n
    }, gd);

    function gd() {
        var e = null !== fd && fd.apply(this, arguments) || this;
        return e.sortEventSegs = Pt(Bn), e
    }

    function vd(e, t) {
        var n = t.todayRange,
            r = t.nowDate,
            o = t.eventSelection,
            i = t.eventDrag,
            t = t.eventResize,
            a = (i ? i.affectedInstances : null) || (t ? t.affectedInstances : null) || {};
        return So(Co, null, e.map(function(e) {
            var t = e.eventRange.instance.instanceId;
            return So("div", {
                key: t,
                style: {
                    visibility: a[t] ? "hidden" : ""
                }
            }, So(ld, P({
                seg: e,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: t === o,
                isShort: !1
            }, Xn(e, n, r))))
        }))
    }

    function md(e) {
        return e ? {
            top: e.start,
            bottom: -e.end
        } : {
            top: "",
            bottom: ""
        }
    }
    var yd, Ed = (t(Sd, yd = Ao), Sd.prototype.render = function() {
        var n = this,
            r = this.props,
            o = this.context.options.nowIndicator && r.slatCoords && r.slatCoords.safeComputeTop(r.nowDate),
            e = r.cells.length,
            i = this.splitFgEventSegs(r.fgEventSegs, e),
            a = this.splitBgEventSegs(r.bgEventSegs, e),
            s = this.splitBusinessHourSegs(r.businessHourSegs, e),
            l = this.splitNowIndicatorSegs(r.nowIndicatorSegs, e),
            u = this.splitDateSelectionSegs(r.dateSelectionSegs, e),
            c = this.splitEventDrag(r.eventDrag, e),
            d = this.splitEventResize(r.eventResize, e);
        return So("div", {
            className: "fc-timegrid-cols",
            ref: this.rootElRef
        }, So("table", {
            style: {
                minWidth: r.tableMinWidth,
                width: r.clientWidth
            }
        }, r.tableColGroupNode, So("tbody", null, So("tr", null, r.axis && So("td", {
            className: "fc-timegrid-col fc-timegrid-axis"
        }, So("div", {
            className: "fc-timegrid-col-frame"
        }, So("div", {
            className: "fc-timegrid-now-indicator-container"
        }, "number" == typeof o && So($s, {
            isAxis: !0,
            date: r.nowDate
        }, function(e, t, n, r) {
            return So("div", {
                ref: e,
                className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),
                style: {
                    top: o
                }
            }, r)
        })))), r.cells.map(function(e, t) {
            return So(hd, {
                key: e.key,
                elRef: n.cellElRefs.createRef(e.key),
                dateProfile: r.dateProfile,
                date: e.date,
                nowDate: r.nowDate,
                todayRange: r.todayRange,
                extraHookProps: e.extraHookProps,
                extraDataAttrs: e.extraDataAttrs,
                extraClassNames: e.extraClassNames,
                extraDateSpan: e.extraDateSpan,
                fgEventSegs: i[t],
                bgEventSegs: a[t],
                businessHourSegs: s[t],
                nowIndicatorSegs: l[t],
                dateSelectionSegs: u[t],
                eventDrag: c[t],
                eventResize: d[t],
                slatCoords: r.slatCoords,
                eventSelection: r.eventSelection,
                forPrint: r.forPrint
            })
        })))))
    }, Sd.prototype.componentDidMount = function() {
        this.updateCoords()
    }, Sd.prototype.componentDidUpdate = function() {
        this.updateCoords()
    }, Sd.prototype.updateCoords = function() {
        var t, e = this.props;
        e.onColCoords && null !== e.clientWidth && e.onColCoords(new ao(this.rootElRef.current, (t = this.cellElRefs.currentMap, e.cells.map(function(e) {
            return t[e.key]
        })), !0, !1))
    }, Sd);

    function Sd() {
        var e = null !== yd && yd.apply(this, arguments) || this;
        return e.splitFgEventSegs = Pt(Zc), e.splitBgEventSegs = Pt(Zc), e.splitBusinessHourSegs = Pt(Zc), e.splitNowIndicatorSegs = Pt(Zc), e.splitDateSelectionSegs = Pt(Zc), e.splitEventDrag = Pt(Xc), e.splitEventResize = Pt(Xc), e.rootElRef = bo(), e.cellElRefs = new Ts, e
    }
    var Dd, bd = (t(Cd, Dd = zo), Cd.prototype.render = function() {
        var e = this.props,
            t = this.state;
        return So("div", {
            className: "fc-timegrid-body",
            ref: this.handleRootEl,
            style: {
                width: e.clientWidth,
                minWidth: e.tableMinWidth
            }
        }, So(qc, {
            axis: e.axis,
            dateProfile: e.dateProfile,
            slatMetas: e.slatMetas,
            clientWidth: e.clientWidth,
            minHeight: e.expandRows ? e.clientHeight : "",
            tableMinWidth: e.tableMinWidth,
            tableColGroupNode: e.axis ? e.tableColGroupNode : null,
            onCoords: this.handleSlatCoords
        }), So(Ed, {
            cells: e.cells,
            axis: e.axis,
            dateProfile: e.dateProfile,
            businessHourSegs: e.businessHourSegs,
            bgEventSegs: e.bgEventSegs,
            fgEventSegs: e.fgEventSegs,
            dateSelectionSegs: e.dateSelectionSegs,
            eventSelection: e.eventSelection,
            eventDrag: e.eventDrag,
            eventResize: e.eventResize,
            todayRange: e.todayRange,
            nowDate: e.nowDate,
            nowIndicatorSegs: e.nowIndicatorSegs,
            clientWidth: e.clientWidth,
            tableMinWidth: e.tableMinWidth,
            tableColGroupNode: e.tableColGroupNode,
            slatCoords: t.slatCoords,
            onColCoords: this.handleColCoords,
            forPrint: e.forPrint
        }))
    }, Cd.prototype.componentDidMount = function() {
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
    }, Cd.prototype.componentDidUpdate = function(e) {
        this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
    }, Cd.prototype.componentWillUnmount = function() {
        this.scrollResponder.detach()
    }, Cd.prototype.queryHit = function(e, t) {
        var n = this.context,
            r = n.dateEnv,
            o = n.options,
            i = this.colCoords,
            a = this.props.dateProfile,
            s = this.state.slatCoords,
            l = this.processSlotOptions(this.props.slotDuration, o.snapDuration),
            u = l.snapDuration,
            c = l.snapsPerSlot,
            d = i.leftToIndex(e),
            n = s.positions.topToIndex(t);
        if (null == d || null == n) return null;
        o = this.props.cells[d], l = s.positions.tops[n], e = s.positions.getHeight(n), s = Math.floor((t - l) / e * c), t = this.props.cells[d].date, s = St(a.slotMinTime, Dt(u, n * c + s)), s = r.add(t, s), u = r.add(s, u);
        return {
            dateProfile: a,
            dateSpan: P({
                range: {
                    start: s,
                    end: u
                },
                allDay: !1
            }, o.extraDateSpan),
            dayEl: i.els[d],
            rect: {
                left: i.lefts[d],
                right: i.rights[d],
                top: l,
                bottom: l + e
            },
            layer: 0
        }
    }, Cd);

    function Cd() {
        var r = null !== Dd && Dd.apply(this, arguments) || this;
        return r.processSlotOptions = Pt(wd), r.state = {
            slatCoords: null
        }, r.handleRootEl = function(e) {
            e ? r.context.registerInteractiveComponent(r, {
                el: e,
                isHitComboAllowed: r.props.isHitComboAllowed
            }) : r.context.unregisterInteractiveComponent(r)
        }, r.handleScrollRequest = function(e) {
            var t = r.props.onScrollTopRequest,
                n = r.state.slatCoords;
            return !(!t || !n) && (e.time && (e = n.computeTimeTop(e.time), (e = Math.ceil(e)) && (e += 1), t(e)), !0)
        }, r.handleColCoords = function(e) {
            r.colCoords = e
        }, r.handleSlatCoords = function(e) {
            r.setState({
                slatCoords: e
            }), r.props.onSlatCoords && r.props.onSlatCoords(e)
        }, r
    }

    function wd(e, t) {
        var n = t || e,
            t = wt(e, n);
        return null === t && (n = e, t = 1), {
            snapDuration: n,
            snapsPerSlot: t
        }
    }
    var Rd, Td = (t(_d, Rd = fs), _d.prototype.sliceRange = function(e, t) {
        for (var n = [], r = 0; r < t.length; r += 1) {
            var o = In(e, t[r]);
            o && n.push({
                start: o.start,
                end: o.end,
                isStart: o.start.valueOf() === e.start.valueOf(),
                isEnd: o.end.valueOf() === e.end.valueOf(),
                col: r
            })
        }
        return n
    }, _d);

    function _d() {
        return null !== Rd && Rd.apply(this, arguments) || this
    }
    var kd, xd = (t(Md, kd = zo), Md.prototype.render = function() {
        var n = this,
            r = this.props,
            o = this.context,
            i = r.dateProfile,
            a = r.dayTableModel,
            s = o.options.nowIndicator,
            l = this.buildDayRanges(a, i, o.dateEnv);
        return So(ns, {
            unit: s ? "minute" : "day"
        }, function(e, t) {
            return So(bd, P({
                ref: n.timeColsRef
            }, n.slicer.sliceProps(r, i, null, o, l), {
                forPrint: r.forPrint,
                axis: r.axis,
                dateProfile: i,
                slatMetas: r.slatMetas,
                slotDuration: r.slotDuration,
                cells: a.cells[0],
                tableColGroupNode: r.tableColGroupNode,
                tableMinWidth: r.tableMinWidth,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                expandRows: r.expandRows,
                nowDate: e,
                nowIndicatorSegs: s && n.slicer.sliceNowDate(e, o, l),
                todayRange: t,
                onScrollTopRequest: r.onScrollTopRequest,
                onSlatCoords: r.onSlatCoords
            }))
        })
    }, Md);

    function Md() {
        var e = null !== kd && kd.apply(this, arguments) || this;
        return e.buildDayRanges = Pt(Pd), e.slicer = new Td, e.timeColsRef = bo(), e
    }

    function Pd(e, t, n) {
        for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
            var a = i[o];
            r.push({
                start: n.add(a, t.slotMinTime),
                end: n.add(a, t.slotMaxTime)
            })
        }
        return r
    }
    var Id = [{
        hours: 1
    }, {
        minutes: 30
    }, {
        minutes: 15
    }, {
        seconds: 30
    }, {
        seconds: 15
    }];

    function Nd(e, t, n, r, o) {
        for (var i = new Date(0), a = e, s = yt(0), l = n || function(e) {
                var t, n, r;
                for (t = Id.length - 1; 0 <= t; --t)
                    if (n = yt(Id[t]), null !== (r = wt(n, e)) && 1 < r) return n;
                return e
            }(r), u = []; Ct(a) < Ct(t);) {
            var c = o.add(i, a),
                d = null !== wt(s, l);
            u.push({
                date: c,
                time: a,
                key: c.toISOString(),
                isoTimeStr: kt(c),
                isLabeled: d
            }), a = St(a, r), s = St(s, r)
        }
        return u
    }
    var Hd, No = (t(Od, Hd = se), Od.prototype.render = function() {
        var t = this,
            e = this.context,
            n = e.options,
            r = e.dateEnv,
            o = e.dateProfileGenerator,
            i = this.props,
            a = i.dateProfile,
            s = this.buildTimeColsModel(a, o),
            l = this.allDaySplitter.splitProps(i),
            u = this.buildSlatMetas(a.slotMinTime, a.slotMaxTime, n.slotLabelInterval, n.slotDuration, r),
            c = n.dayMinWidth,
            d = !c,
            p = c,
            e = n.dayHeaders && So(as, {
                dates: s.headerDates,
                dateProfile: a,
                datesRepDistinctDays: !0,
                renderIntro: d ? this.renderHeadAxis : null
            }),
            o = !1 !== n.allDaySlot && function(e) {
                return So(yc, P({}, l.allDay, {
                    dateProfile: a,
                    dayTableModel: s,
                    nextDayThreshold: n.nextDayThreshold,
                    tableMinWidth: e.tableMinWidth,
                    colGroupNode: e.tableColGroupNode,
                    renderRowIntro: d ? t.renderTableRowAxis : null,
                    showWeekNumbers: !1,
                    expandRows: !1,
                    headerAlignElRef: t.headerElRef,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    forPrint: i.forPrint
                }, t.getAllDayMaxEventProps()))
            },
            r = function(e) {
                return So(xd, P({}, l.timed, {
                    dayTableModel: s,
                    dateProfile: a,
                    axis: d,
                    slotDuration: n.slotDuration,
                    slatMetas: u,
                    forPrint: i.forPrint,
                    tableColGroupNode: e.tableColGroupNode,
                    tableMinWidth: e.tableMinWidth,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    onSlatCoords: t.handleSlatCoords,
                    expandRows: e.expandRows,
                    onScrollTopRequest: t.handleScrollTopRequest
                }))
            };
        return p ? this.renderHScrollLayout(e, o, r, s.colCnt, c, u, this.state.slatCoords) : this.renderSimpleLayout(e, o, r)
    }, Od);

    function Od() {
        var e = null !== Hd && Hd.apply(this, arguments) || this;
        return e.buildTimeColsModel = Pt(Ad), e.buildSlatMetas = Pt(Nd), e
    }

    function Ad(e, t) {
        t = new us(e.renderRange, t);
        return new ds(t, !1)
    }
    var Ud, Ul = jo({
            initialView: "timeGridWeek",
            optionRefiners: {
                allDaySlot: Boolean
            },
            views: {
                timeGrid: {
                    component: No,
                    usesMinMaxTime: !0,
                    allDaySlot: !0,
                    slotDuration: "00:30:00",
                    slotEventOverlap: !0
                },
                timeGridDay: {
                    type: "timeGrid",
                    duration: {
                        days: 1
                    }
                },
                timeGridWeek: {
                    type: "timeGrid",
                    duration: {
                        weeks: 1
                    }
                }
            }
        }),
        Ld = (t(Wd, Ud = Ao), Wd.prototype.render = function() {
            var e = this.props,
                o = e.dayDate,
                t = e.todayRange,
                n = this.context,
                i = n.theme,
                r = n.dateEnv,
                a = n.options,
                s = n.viewApi,
                l = Gr(o, t),
                e = a.listDayFormat ? r.format(o, a.listDayFormat) : "",
                n = a.listDaySideFormat ? r.format(o, a.listDaySideFormat) : "",
                t = a.navLinks ? Yr(o) : null,
                t = P({
                    date: r.toDate(o),
                    view: s,
                    text: e,
                    sideText: n,
                    navLinkData: t
                }, l),
                u = ["fc-list-day"].concat(qr(l, i));
            return So($o, {
                hookProps: t,
                classNames: a.dayHeaderClassNames,
                content: a.dayHeaderContent,
                defaultContent: Vd,
                didMount: a.dayHeaderDidMount,
                willUnmount: a.dayHeaderWillUnmount
            }, function(e, t, n, r) {
                return So("tr", {
                    ref: e,
                    className: u.concat(t).join(" "),
                    "data-date": _t(o)
                }, So("th", {
                    colSpan: 3
                }, So("div", {
                    className: "fc-list-day-cushion " + i.getClass("tableCellShaded"),
                    ref: n
                }, r)))
            })
        }, Wd);

    function Wd() {
        return null !== Ud && Ud.apply(this, arguments) || this
    }

    function Vd(e) {
        var t = e.navLinkData ? {
            "data-navlink": e.navLinkData,
            tabIndex: 0
        } : {};
        return So(Co, null, e.text && So("a", P({
            className: "fc-list-day-text"
        }, t), e.text), e.sideText && So("a", P({
            className: "fc-list-day-side-text"
        }, t), e.sideText))
    }
    var Fd, zd = Xt({
            hour: "numeric",
            minute: "2-digit",
            meridiem: "short"
        }),
        Bd = (t(jd, Fd = Ao), jd.prototype.render = function() {
            var e = this.props,
                i = this.context,
                a = e.seg,
                s = i.options.eventTimeFormat || zd;
            return So(Gs, {
                seg: a,
                timeText: "",
                disableDragging: !0,
                disableResizing: !0,
                defaultContent: Gd,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday,
                isSelected: e.isSelected,
                isDragging: e.isDragging,
                isResizing: e.isResizing,
                isDateSelecting: e.isDateSelecting
            }, function(e, t, n, r, o) {
                return So("tr", {
                    className: ["fc-list-event", o.event.url ? "fc-event-forced-url" : ""].concat(t).join(" "),
                    ref: e
                }, function(e, t, n) {
                    var r = n.options;
                    if (!1 === r.displayEventTime) return null;
                    var o = e.eventRange.def,
                        i = e.eventRange.instance,
                        a = !1,
                        s = void 0;
                    o.allDay ? a = !0 : kn(e.eventRange.range) ? e.isStart ? s = Zn(e, t, n, null, null, i.range.start, e.end) : e.isEnd ? s = Zn(e, t, n, null, null, e.start, i.range.end) : a = !0 : s = Zn(e, t, n);
                    if (a) {
                        n = {
                            text: n.options.allDayText,
                            view: n.viewApi
                        };
                        return So($o, {
                            hookProps: n,
                            classNames: r.allDayClassNames,
                            content: r.allDayContent,
                            defaultContent: qd,
                            didMount: r.allDayDidMount,
                            willUnmount: r.allDayWillUnmount
                        }, function(e, t, n, r) {
                            return So("td", {
                                className: ["fc-list-event-time"].concat(t).join(" "),
                                ref: e
                            }, r)
                        })
                    }
                    return So("td", {
                        className: "fc-list-event-time"
                    }, s)
                }(a, s, i), So("td", {
                    className: "fc-list-event-graphic"
                }, So("span", {
                    className: "fc-list-event-dot",
                    style: {
                        borderColor: o.borderColor || o.backgroundColor
                    }
                })), So("td", {
                    className: "fc-list-event-title",
                    ref: n
                }, r))
            })
        }, jd);

    function jd() {
        return null !== Fd && Fd.apply(this, arguments) || this
    }

    function Gd(e) {
        var t = e.event,
            e = t.url;
        return So("a", P({}, e ? {
            href: e
        } : {}), t.title)
    }

    function qd(e) {
        return e.text
    }
    var Yd, ou = (t(Zd, Yd = zo), Zd.prototype.render = function() {
        var n = this,
            r = this.props,
            e = this.context,
            o = ["fc-list", e.theme.getClass("table"), !1 !== e.options.stickyHeaderDates ? "fc-list-sticky" : ""],
            t = this.computeDateVars(r.dateProfile),
            i = t.dayDates,
            t = t.dayRanges,
            a = this.eventStoreToSegs(r.eventStore, r.eventUiBases, t);
        return So(di, {
            viewSpec: e.viewSpec,
            elRef: this.setRootEl
        }, function(e, t) {
            return So("div", {
                ref: e,
                className: o.concat(t).join(" ")
            }, So(ws, {
                liquid: !r.isHeightAuto,
                overflowX: r.isHeightAuto ? "visible" : "hidden",
                overflowY: r.isHeightAuto ? "visible" : "auto"
            }, 0 < a.length ? n.renderSegList(a, i) : n.renderEmptyMessage()))
        })
    }, Zd.prototype.renderEmptyMessage = function() {
        var e = this.context,
            t = e.options,
            e = e.viewApi,
            e = {
                text: t.noEventsText,
                view: e
            };
        return So($o, {
            hookProps: e,
            classNames: t.noEventsClassNames,
            content: t.noEventsContent,
            defaultContent: Xd,
            didMount: t.noEventsDidMount,
            willUnmount: t.noEventsWillUnmount
        }, function(e, t, n, r) {
            return So("div", {
                className: ["fc-list-empty"].concat(t).join(" "),
                ref: e
            }, So("div", {
                className: "fc-list-empty-cushion",
                ref: n
            }, r))
        })
    }, Zd.prototype.renderSegList = function(e, u) {
        var t = this.context,
            c = t.theme,
            d = t.options,
            p = function(e) {
                var t, n, r = [];
                for (t = 0; t < e.length; t += 1) n = e[t], (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                return r
            }(e);
        return So(ns, {
            unit: "day"
        }, function(e, t) {
            for (var n = [], r = 0; r < p.length; r += 1)
                if (i = p[r]) {
                    var o = u[r].toISOString();
                    n.push(So(Ld, {
                        key: o,
                        dayDate: u[r],
                        todayRange: t
                    }));
                    for (var i, a = 0, s = i = Bn(i, d.eventOrder); a < s.length; a++) {
                        var l = s[a];
                        n.push(So(Bd, P({
                            key: o + ":" + l.eventRange.instance.instanceId,
                            seg: l,
                            isDragging: !1,
                            isResizing: !1,
                            isDateSelecting: !1,
                            isSelected: !1
                        }, Xn(l, t, e))))
                    }
                } return So("table", {
                className: "fc-list-table " + c.getClass("table")
            }, So("tbody", null, n))
        })
    }, Zd.prototype._eventStoreToSegs = function(e, t, n) {
        return this.eventRangesToSegs(Un(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n)
    }, Zd.prototype.eventRangesToSegs = function(e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            n.push.apply(n, this.eventRangeToSegs(i, t))
        }
        return n
    }, Zd.prototype.eventRangeToSegs = function(e, t) {
        for (var n, r, o = this.context.dateEnv, i = this.context.options.nextDayThreshold, a = e.range, s = e.def.allDay, l = [], u = 0; u < t.length; u += 1)
            if ((n = In(a, t[u])) && (r = {
                    component: this,
                    eventRange: e,
                    start: n.start,
                    end: n.end,
                    isStart: e.isStart && n.start.valueOf() === a.start.valueOf(),
                    isEnd: e.isEnd && n.end.valueOf() === a.end.valueOf(),
                    dayIndex: u
                }, l.push(r), !r.isEnd && !s && u + 1 < t.length && a.end < o.add(t[u + 1].start, i))) {
                r.end = a.end, r.isEnd = !0;
                break
            } return l
    }, Zd);

    function Zd() {
        var t = null !== Yd && Yd.apply(this, arguments) || this;
        return t.computeDateVars = Pt(Kd), t.eventStoreToSegs = Pt(t._eventStoreToSegs), t.setRootEl = function(e) {
            e ? t.context.registerInteractiveComponent(t, {
                el: e
            }) : t.context.unregisterInteractiveComponent(t)
        }, t
    }

    function Xd(e) {
        return e.text
    }

    function Kd(e) {
        for (var t = Ke(e.renderRange.start), n = e.renderRange.end, r = [], o = []; t < n;) r.push(t), o.push({
            start: t,
            end: Be(t, 1)
        }), t = Be(t, 1);
        return {
            dayDates: r,
            dayRanges: o
        }
    }

    function $d(e) {
        return !1 === e ? null : Xt(e)
    }
    var Jd, su = jo({
            optionRefiners: {
                listDayFormat: $d,
                listDaySideFormat: $d,
                noEventsClassNames: an,
                noEventsContent: an,
                noEventsDidMount: an,
                noEventsWillUnmount: an
            },
            views: {
                list: {
                    component: ou,
                    buttonTextKey: "list",
                    listDayFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                listDay: {
                    type: "list",
                    duration: {
                        days: 1
                    },
                    listDayFormat: {
                        weekday: "long"
                    }
                },
                listWeek: {
                    type: "list",
                    duration: {
                        weeks: 1
                    },
                    listDayFormat: {
                        weekday: "long"
                    },
                    listDaySideFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                listMonth: {
                    type: "list",
                    duration: {
                        month: 1
                    },
                    listDaySideFormat: {
                        weekday: "long"
                    }
                },
                listYear: {
                    type: "list",
                    duration: {
                        year: 1
                    },
                    listDaySideFormat: {
                        weekday: "long"
                    }
                }
            }
        }),
        fu = (t(Qd, Jd = mo), Qd);

    function Qd() {
        return null !== Jd && Jd.apply(this, arguments) || this
    }
    fu.prototype.classes = {
        root: "fc-theme-bootstrap",
        table: "table-bordered",
        tableCellShaded: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body"
    }, fu.prototype.baseIconClass = "fa", fu.prototype.iconClasses = {
        close: "fa-times",
        prev: "fa-chevron-left",
        next: "fa-chevron-right",
        prevYear: "fa-angle-double-left",
        nextYear: "fa-angle-double-right"
    }, fu.prototype.rtlIconClasses = {
        prev: "fa-chevron-right",
        next: "fa-chevron-left",
        prevYear: "fa-angle-double-right",
        nextYear: "fa-angle-double-left"
    }, fu.prototype.iconOverrideOption = "bootstrapFontAwesome", fu.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome", fu.prototype.iconOverridePrefix = "fa-";
    gu = jo({
        themeClasses: {
            bootstrap: fu
        }
    }), mu = {
        googleCalendarApiKey: String
    }, yu = {
        googleCalendarApiKey: String,
        googleCalendarId: String,
        googleCalendarApiBase: String,
        extraParams: an
    };
    yu = jo({
        eventSourceDefs: [{
            parseMeta: function(e) {
                var t = e.googleCalendarId;
                return (t = !t && e.url ? function(e) {
                    var t;
                    if (/^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e)) return e;
                    if ((t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e))) return decodeURIComponent(t[1]);
                    return null
                }(e.url) : t) ? {
                    googleCalendarId: t,
                    googleCalendarApiKey: e.googleCalendarApiKey,
                    googleCalendarApiBase: e.googleCalendarApiBase,
                    extraParams: e.extraParams
                } : null
            },
            fetch: function(e, r, o) {
                var i, t = e.context,
                    n = t.dateEnv,
                    a = t.options,
                    s = e.eventSource.meta,
                    t = s.googleCalendarApiKey || a.googleCalendarApiKey;
                t ? (a = function(e) {
                    var t = e.googleCalendarApiBase;
                    t = t || "https://www.googleapis.com/calendar/v3/calendars";
                    return t + "/" + encodeURIComponent(e.googleCalendarId) + "/events"
                }(s), s = "function" == typeof(s = s.extraParams) ? s() : s, Ii("GET", a, i = function(e, t, n, r) {
                    var o;
                    e = r.canComputeOffset ? (o = r.formatIso(e.start), r.formatIso(e.end)) : (o = Be(e.start, -1).toISOString(), Be(e.end, 1).toISOString());
                    e = P(P({}, n || {}), {
                        key: t,
                        timeMin: o,
                        timeMax: e,
                        singleEvents: !0,
                        maxResults: 9999
                    }), "local" !== r.timeZone && (e.timeZone = r.timeZone);
                    return e
                }(e.range, t, s, n), function(e, t) {
                    var n;
                    e.error ? o({
                        message: "Google Calendar API: " + e.error.message,
                        errors: e.error.errors,
                        xhr: t
                    }) : r({
                        rawEvents: (e = e.items, n = i.timeZone, e.map(function(e) {
                            return function(e, t) {
                                var n = e.htmlLink || null;
                                n && t && (n = function(e, r) {
                                    return e.replace(/(\?.*?)?(#|$)/, function(e, t, n) {
                                        return (t ? t + "&" : "?") + r + n
                                    })
                                }(n, "ctz=" + t));
                                return {
                                    id: e.id,
                                    title: e.summary,
                                    start: e.start.dateTime || e.start.date,
                                    end: e.end.dateTime || e.end.date,
                                    url: n,
                                    location: e.location,
                                    description: e.description,
                                    attachments: e.attachments || [],
                                    extendedProps: (e.extendedProperties || {}).shared || {}
                                }
                            }(e, n)
                        })),
                        xhr: t
                    })
                }, function(e, t) {
                    o({
                        message: e,
                        xhr: t
                    })
                })) : o({
                    message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"
                })
            }
        }],
        optionRefiners: mu,
        eventSourceRefiners: yu
    });
    return Oi.push(xu, _c, Ul, su, gu, yu), e.BASE_OPTION_DEFAULTS = $t, e.BASE_OPTION_REFINERS = Kt, e.BaseComponent = Ao, e.BgEvent = sl, e.BootstrapTheme = fu, e.Calendar = Tl, e.CalendarApi = fr, e.CalendarContent = Wa, e.CalendarDataManager = Bi, e.CalendarDataProvider = na, e.CalendarRoot = ja, e.Component = Eo, e.ContentHook = ei, e.CustomContentRenderContext = Qo, e.DateComponent = zo, e.DateEnv = wr, e.DateProfileGenerator = mi, e.DayCellContent = el, e.DayCellRoot = ol, e.DayGridView = bc, e.DayHeader = as, e.DaySeriesModel = us, e.DayTable = yc, e.DayTableModel = ds, e.DayTableSlicer = gc, e.DayTimeCols = xd, e.DayTimeColsSlicer = Td, e.DayTimeColsView = No, e.DelayedRunner = Li, e.Draggable = Du, e.ElementDragging = ya, e.ElementScrollController = po, e.Emitter = oo, e.EventApi = gr, e.EventRoot = Gs, e.EventSourceApi = de, e.FeaturefulElementDragging = Xl, e.Fragment = Co, e.Interaction = ha, e.ListView = ou, e.MoreLinkRoot = yl, e.MountHook = ii, e.NamedTimeZoneImpl = oa, e.NowIndicatorRoot = $s, e.NowTimer = ns, e.PointerDragging = Pl, e.PositionCache = ao, e.RefMap = Ts, e.RenderHook = $o, e.ScrollController = lo, e.ScrollResponder = ko, e.Scroller = ws, e.SegHierarchy = ia, e.SimpleScrollGrid = zs, e.Slicer = fs, e.Splitter = zr, e.StandardEvent = Zs, e.Table = dc, e.TableDateCell = Ka, e.TableDowCell = Qa, e.TableView = Mu, e.Theme = mo, e.ThirdPartyDraggable = Tu, e.TimeCols = bd, e.TimeColsSlatsCoords = Vc, e.TimeColsView = se, e.ViewApi = sr, e.ViewContextType = Mo, e.ViewRoot = di, e.WeekNumberRoot = ul, e.WindowScrollController = go, e.addDays = Be, e.addDurations = St, e.addMs = je, e.addWeeks = ze, e.allowContextMenu = Ie, e.allowSelection = Me, e.applyMutationToEventStore = ar, e.applyStyle = ye, e.applyStyleProp = Ee, e.asCleanDays = function(e) {
        return e.years || e.months || e.milliseconds ? 0 : e.days
    }, e.asRoughMinutes = function(e) {
        return Ct(e) / 6e4
    }, e.asRoughMs = Ct, e.asRoughSeconds = function(e) {
        return Ct(e) / 1e3
    }, e.binarySearch = fa, e.buildClassNameNormalizer = si, e.buildDayRanges = Pd, e.buildDayTableModel = wc, e.buildEntryKey = la, e.buildEventApis = yr, e.buildEventRangeKey = $n, e.buildHashFromArray = function(e, t) {
        for (var n = {}, r = 0; r < e.length; r += 1) {
            var o = t(e[r], r);
            n[o[0]] = o[1]
        }
        return n
    }, e.buildIsoString = Tt, e.buildNavLinkData = Yr, e.buildSegCompareObj = jn, e.buildSegTimeText = Zn, e.buildSlatMetas = Nd, e.buildTimeColsModel = Ad, e.collectFromHash = ht, e.combineEventUis = mn, e.compareByFieldSpec = Oe, e.compareByFieldSpecs = He, e.compareNumbers = Le, e.compareObjs = ft, e.computeEarliestSegStart = bl, e.computeEdges = Qr, e.computeFallbackHeaderFormat = qa, e.computeHeightAndMargins = function(e) {
        return e.getBoundingClientRect().height + function(e) {
            e = window.getComputedStyle(e);
            return parseInt(e.marginTop, 10) + parseInt(e.marginBottom, 10)
        }(e)
    }, e.computeInnerRect = eo, e.computeRect = to, e.computeSegDraggable = Gn, e.computeSegEndResizable = Yn, e.computeSegStartResizable = qn, e.computeShrinkWidth = ks, e.computeSmallestCellWidth = Ve, e.computeVisibleDayRange = _n, e.config = Sa, e.constrainPoint = Ur, e.createContext = wo, e.createDuration = yt, e.createElement = So, e.createEmptyEventStore = cn, e.createEventInstance = ot, e.createEventUi = vn, e.createFormatter = Xt, e.createPlugin = jo, e.createPortal = Ro, e.createRef = bo, e.diffDates = xn, e.diffDayAndTime = Ye, e.diffDays = qe, e.diffPoints = Wr, e.diffWeeks = Ge, e.diffWholeDays = Xe, e.diffWholeWeeks = Ze, e.disableCursor = _e, e.elementClosest = he, e.elementMatches = ge, e.enableCursor = ke, e.eventTupleToStore = ln, e.filterEventStoreDefs = pn, e.filterHash = st, e.findDirectChildren = function(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
            for (var i = n[o].children, a = 0; a < i.length; a += 1) {
                var s = i[a];
                t && !ge(s, t) || r.push(s)
            }
        return r
    }, e.findElements = ve, e.flexibleCompare = Ae, e.flushToDom = To, e.formatDate = function(e, t) {
        var n = Pr(t = void 0 === t ? {} : t),
            t = Xt(t);
        return (e = n.createMarkerMeta(e)) ? n.format(e.marker, t, {
            forcedTzo: e.forcedTzo
        }) : ""
    }, e.formatDayString = _t, e.formatIsoTimeString = kt, e.formatRange = function(e, t, n) {
        var r = Pr("object" == typeof n && n ? n : {}),
            o = Xt(n),
            e = r.createMarkerMeta(e),
            t = r.createMarkerMeta(t);
        return e && t ? r.formatRange(e.marker, t.marker, o, {
            forcedStartTzo: e.forcedTzo,
            forcedEndTzo: t.forcedTzo,
            isEndExclusive: n.isEndExclusive,
            defaultSeparator: $t.defaultRangeSeparator
        }) : ""
    }, e.getAllowYScrolling = Ms, e.getCanVGrowWithinCell = Vr, e.getClippingParents = no, e.getDateMeta = Gr, e.getDayClassNames = qr, e.getDefaultEventEnd = ir, e.getElSeg = Vn, e.getEntrySpanEnd = sa, e.getEventClassNames = Kn, e.getIsRtlScrollbarOnLeft = Kr, e.getRectCenter = Lr, e.getRelevantEvents = un, e.getScrollGridClassNames = As, e.getScrollbarWidths = $r, e.getSectionClassNames = Us, e.getSectionHasLiquidHeight = xs, e.getSegMeta = Xn, e.getSlotClassNames = function(e, t) {
        var n = ["fc-slot", "fc-slot-" + Fe[e.dow]];
        return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n
    }, e.getStickyFooterScrollbar = Vs, e.getStickyHeaderDates = Ws, e.getUnequalProps = pt, e.globalLocales = Tr, e.globalPlugins = Oi, e.greatestDurationDenominator = Rt, e.groupIntersectingEntries = ua, e.guid = Te, e.hasBgRendering = Ln, e.hasShrinkWidth = Os, e.identity = an, e.interactionSettingsStore = ma, e.interactionSettingsToStore = va, e.intersectRanges = In, e.intersectRects = Ar, e.intersectSpans = da, e.isArraysEqual = Mt, e.isColPropsEqual = Is, e.isDateSelectionValid = ms, e.isDateSpansEqual = er, e.isInt = We, e.isInteractionValid = vs, e.isMultiDayRange = kn, e.isPropsEqual = dt, e.isPropsValid = Es, e.isValidDate = nt, e.joinSpans = ca, e.listenBySelector = be, e.mapHash = lt, e.memoize = Pt, e.memoizeArraylike = function(i, a, s) {
        var l = this,
            u = [],
            c = [];
        return function(e) {
            for (var t, n = u.length, r = e.length, o = 0; o < n; o += 1) e[o] ? Mt(u[o], e[o]) || (s && s(c[o]), t = i.apply(l, e[o]), a && a(t, c[o]) || (c[o] = t)) : s && s(c[o]);
            for (; o < r; o += 1) c[o] = i.apply(l, e[o]);
            return u = e, c.splice(r), c
        }
    }, e.memoizeHashlike = function(o, i, a) {
        var s = this,
            l = {},
            u = {};
        return function(e) {
            var t, n, r = {};
            for (t in e) u[t] ? Mt(l[t], e[t]) ? r[t] = u[t] : (a && a(u[t]), n = o.apply(s, e[t]), r[t] = i && i(n, u[t]) ? u[t] : n) : r[t] = o.apply(s, e[t]);
            return l = e, u = r
        }
    }, e.memoizeObjArg = It, e.mergeEventStores = dn, e.multiplyDuration = Dt, e.padStart = Ue, e.parseBusinessHours = Hr, e.parseClassNames = fn, e.parseDragMeta = ba, e.parseEventDef = Rn, e.parseFieldSpecs = Ne, e.parseMarker = Cr, e.pointInsideRect = Or, e.preventContextMenu = Pe, e.preventDefault = Se, e.preventSelection = xe, e.rangeContainsMarker = An, e.rangeContainsRange = On, e.rangesEqual = Nn, e.rangesIntersect = Hn, e.refineEventDef = Cn, e.refineProps = on, e.removeElement = fe, e.removeExact = function(e, t) {
        for (var n = 0, r = 0; r < e.length;) e[r] === t ? (e.splice(r, 1), n += 1) : r += 1;
        return n
    }, e.render = Do, e.renderChunkContent = Ps, e.renderFill = al, e.renderMicroColGroup = Ns, e.renderScrollShim = Ls, e.requestJson = Ii, e.sanitizeShrinkWidth = Hs, e.setElSeg = Wn, e.setRef = Vo, e.sliceEventStore = Un, e.sliceEvents = function(e, t) {
        return Un(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg
    }, e.sortEventSegs = Bn, e.startOfDay = Ke, e.translateRect = function(e, t, n) {
        return {
            left: e.left + t,
            right: e.right + t,
            top: e.top + n,
            bottom: e.bottom + n
        }
    }, e.triggerDateSelect = rr, e.unmountComponentAtNode = _o, e.unpromisify = ro, e.version = "5.8.0", e.whenTransitionDone = we, e.wholeDivideDurations = wt, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});