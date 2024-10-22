!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function() {
  "use strict";
  function t() {
      return Cn.apply(null, arguments)
  }
  function e(t) {
      Cn = t
  }
  function n(t) {
      return "[object Array]" === Object.prototype.toString.call(t)
  }
  function i(t) {
      return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
  }
  function r(t, e) {
      var n, i = [];
      for (n = 0; n < t.length; ++n)
          i.push(e(t[n], n));
      return i
  }
  function s(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
  }
  function a(t, e) {
      for (var n in e)
          s(e, n) && (t[n] = e[n]);
      return s(e, "toString") && (t.toString = e.toString),
      s(e, "valueOf") && (t.valueOf = e.valueOf),
      t
  }
  function o(t, e, n, i) {
      return Tt(t, e, n, i, !0).utc()
  }
  function u() {
      return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1
      }
  }
  function d(t) {
      return null == t._pf && (t._pf = u()),
      t._pf
  }
  function l(t) {
      if (null == t._isValid) {
          var e = d(t);
          t._isValid = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.nullInput && !e.invalidFormat && !e.userInvalidated,
          t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
      }
      return t._isValid
  }
  function c(t) {
      var e = o(0 / 0);
      return null != t ? a(d(e), t) : d(e).userInvalidated = !0,
      e
  }
  function f(t, e) {
      var n, i, r;
      if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject),
      "undefined" != typeof e._i && (t._i = e._i),
      "undefined" != typeof e._f && (t._f = e._f),
      "undefined" != typeof e._l && (t._l = e._l),
      "undefined" != typeof e._strict && (t._strict = e._strict),
      "undefined" != typeof e._tzm && (t._tzm = e._tzm),
      "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC),
      "undefined" != typeof e._offset && (t._offset = e._offset),
      "undefined" != typeof e._pf && (t._pf = d(e)),
      "undefined" != typeof e._locale && (t._locale = e._locale),
      Gn.length > 0)
          for (n in Gn)
              i = Gn[n],
              r = e[i],
              "undefined" != typeof r && (t[i] = r);
      return t
  }
  function h(e) {
      f(this, e),
      this._d = new Date(+e._d),
      Fn === !1 && (Fn = !0,
      t.updateOffset(this),
      Fn = !1)
  }
  function m(t) {
      return t instanceof h || null != t && null != t._isAMomentObject
  }
  function _(t) {
      var e = +t
        , n = 0;
      return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)),
      n
  }
  function y(t, e, n) {
      var i, r = Math.min(t.length, e.length), s = Math.abs(t.length - e.length), a = 0;
      for (i = 0; r > i; i++)
          (n && t[i] !== e[i] || !n && _(t[i]) !== _(e[i])) && a++;
      return a + s
  }
  function p() {}
  function g(t) {
      return t ? t.toLowerCase().replace("_", "-") : t
  }
  function D(t) {
      for (var e, n, i, r, s = 0; s < t.length; ) {
          for (r = g(t[s]).split("-"),
          e = r.length,
          n = g(t[s + 1]),
          n = n ? n.split("-") : null; e > 0; ) {
              if (i = v(r.slice(0, e).join("-")))
                  return i;
              if (n && n.length >= e && y(r, n, !0) >= e - 1)
                  break;
              e--
          }
          s++
      }
      return null
  }
  function v(t) {
      var e = null;
      if (!Pn[t] && "undefined" != typeof module && module && module.exports)
          try {
              e = Wn._abbr,
              require("./locale/" + t),
              M(e)
          } catch (n) {}
      return Pn[t]
  }
  function M(t, e) {
      var n;
      return t && (n = "undefined" == typeof e ? w(t) : Y(t, e),
      n && (Wn = n)),
      Wn._abbr
  }
  function Y(t, e) {
      return null !== e ? (e.abbr = t,
      Pn[t] || (Pn[t] = new p),
      Pn[t].set(e),
      M(t),
      Pn[t]) : (delete Pn[t],
      null)
  }
  function w(t) {
      var e;
      if (t && t._locale && t._locale._abbr && (t = t._locale._abbr),
      !t)
          return Wn;
      if (!n(t)) {
          if (e = v(t))
              return e;
          t = [t]
      }
      return D(t)
  }
  function k(t, e) {
      var n = t.toLowerCase();
      Ln[n] = Ln[n + "s"] = Ln[e] = t
  }
  function T(t) {
      return "string" == typeof t ? Ln[t] || Ln[t.toLowerCase()] : void 0
  }
  function S(t) {
      var e, n, i = {};
      for (n in t)
          s(t, n) && (e = T(n),
          e && (i[e] = t[n]));
      return i
  }
  function b(e, n) {
      return function(i) {
          return null != i ? (U(this, e, i),
          t.updateOffset(this, n),
          this) : O(this, e)
      }
  }
  function O(t, e) {
      return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
  }
  function U(t, e, n) {
      return t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
  }
  function C(t, e) {
      var n;
      if ("object" == typeof t)
          for (n in t)
              this.set(n, t[n]);
      else if (t = T(t),
      "function" == typeof this[t])
          return this[t](e);
      return this
  }
  function W(t, e, n) {
      for (var i = "" + Math.abs(t), r = t >= 0; i.length < e; )
          i = "0" + i;
      return (r ? n ? "+" : "" : "-") + i
  }
  function G(t, e, n, i) {
      var r = i;
      "string" == typeof i && (r = function() {
          return this[i]()
      }
      ),
      t && (An[t] = r),
      e && (An[e[0]] = function() {
          return W(r.apply(this, arguments), e[1], e[2])
      }
      ),
      n && (An[n] = function() {
          return this.localeData().ordinal(r.apply(this, arguments), t)
      }
      )
  }
  function F(t) {
      return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
  }
  function P(t) {
      var e, n, i = t.match(xn);
      for (e = 0,
      n = i.length; n > e; e++)
          i[e] = An[i[e]] ? An[i[e]] : F(i[e]);
      return function(r) {
          var s = "";
          for (e = 0; n > e; e++)
              s += i[e]instanceof Function ? i[e].call(r, t) : i[e];
          return s
      }
  }
  function L(t, e) {
      return t.isValid() ? (e = x(e, t.localeData()),
      In[e] || (In[e] = P(e)),
      In[e](t)) : t.localeData().invalidDate()
  }
  function x(t, e) {
      function n(t) {
          return e.longDateFormat(t) || t
      }
      var i = 5;
      for (Hn.lastIndex = 0; i >= 0 && Hn.test(t); )
          t = t.replace(Hn, n),
          Hn.lastIndex = 0,
          i -= 1;
      return t
  }
  function H(t, e, n) {
      ti[t] = "function" == typeof e ? e : function(t) {
          return t && n ? n : e
      }
  }
  function I(t, e) {
      return s(ti, t) ? ti[t](e._strict, e._locale) : new RegExp(A(t))
  }
  function A(t) {
      return t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
          return e || n || i || r
      }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }
  function z(t, e) {
      var n, i = e;
      for ("string" == typeof t && (t = [t]),
      "number" == typeof e && (i = function(t, n) {
          n[e] = _(t)
      }
      ),
      n = 0; n < t.length; n++)
          ei[t[n]] = i
  }
  function Z(t, e) {
      z(t, function(t, n, i, r) {
          i._w = i._w || {},
          e(t, i._w, i, r)
      })
  }
  function E(t, e, n) {
      null != e && s(ei, t) && ei[t](e, n._a, n, t)
  }
  function j(t, e) {
      return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
  }
  function N(t) {
      return this._months[t.month()]
  }
  function V(t) {
      return this._monthsShort[t.month()]
  }
  function q(t, e, n) {
      var i, r, s;
      for (this._monthsParse || (this._monthsParse = [],
      this._longMonthsParse = [],
      this._shortMonthsParse = []),
      i = 0; 12 > i; i++) {
          if (r = o([2e3, i]),
          n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$","i"),
          this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$","i")),
          n || this._monthsParse[i] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
          this._monthsParse[i] = new RegExp(s.replace(".", ""),"i")),
          n && "MMMM" === e && this._longMonthsParse[i].test(t))
              return i;
          if (n && "MMM" === e && this._shortMonthsParse[i].test(t))
              return i;
          if (!n && this._monthsParse[i].test(t))
              return i
      }
  }
  function J(t, e) {
      var n;
      return "string" == typeof e && (e = t.localeData().monthsParse(e),
      "number" != typeof e) ? t : (n = Math.min(t.date(), j(t.year(), e)),
      t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
      t)
  }
  function $(e) {
      return null != e ? (J(this, e),
      t.updateOffset(this, !0),
      this) : O(this, "Month")
  }
  function R() {
      return j(this.year(), this.month())
  }
  function B(t) {
      var e, n = t._a;
      return n && -2 === d(t).overflow && (e = n[ii] < 0 || n[ii] > 11 ? ii : n[ri] < 1 || n[ri] > j(n[ni], n[ii]) ? ri : n[si] < 0 || n[si] > 24 || 24 === n[si] && (0 !== n[ai] || 0 !== n[oi] || 0 !== n[ui]) ? si : n[ai] < 0 || n[ai] > 59 ? ai : n[oi] < 0 || n[oi] > 59 ? oi : n[ui] < 0 || n[ui] > 999 ? ui : -1,
      d(t)._overflowDayOfYear && (ni > e || e > ri) && (e = ri),
      d(t).overflow = e),
      t
  }
  function Q(e) {
      t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
  }
  function X(t, e) {
      var n = !0
        , i = t + "\n" + (new Error).stack;
      return a(function() {
          return n && (Q(i),
          n = !1),
          e.apply(this, arguments)
      }, e)
  }
  function K(t, e) {
      ci[t] || (Q(e),
      ci[t] = !0)
  }
  function tt(t) {
      var e, n, i = t._i, r = fi.exec(i);
      if (r) {
          for (d(t).iso = !0,
          e = 0,
          n = hi.length; n > e; e++)
              if (hi[e][1].exec(i)) {
                  t._f = hi[e][0] + (r[6] || " ");
                  break
              }
          for (e = 0,
          n = mi.length; n > e; e++)
              if (mi[e][1].exec(i)) {
                  t._f += mi[e][0];
                  break
              }
          i.match(Qn) && (t._f += "Z"),
          Dt(t)
      } else
          t._isValid = !1
  }
  function et(e) {
      var n = _i.exec(e._i);
      return null !== n ? void (e._d = new Date(+n[1])) : (tt(e),
      void (e._isValid === !1 && (delete e._isValid,
      t.createFromInputFallback(e))))
  }
  function nt(t, e, n, i, r, s, a) {
      var o = new Date(t,e,n,i,r,s,a);
      return 1970 > t && o.setFullYear(t),
      o
  }
  function it(t) {
      var e = new Date(Date.UTC.apply(null, arguments));
      return 1970 > t && e.setUTCFullYear(t),
      e
  }
  function rt(t) {
      return st(t) ? 366 : 365
  }
  function st(t) {
      return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
  }
  function at() {
      return st(this.year())
  }
  function ot(t, e, n) {
      var i, r = n - e, s = n - t.day();
      return s > r && (s -= 7),
      r - 7 > s && (s += 7),
      i = St(t).add(s, "d"),
      {
          week: Math.ceil(i.dayOfYear() / 7),
          year: i.year()
      }
  }
  function ut(t) {
      return ot(t, this._week.dow, this._week.doy).week
  }
  function dt() {
      return this._week.dow
  }
  function lt() {
      return this._week.doy
  }
  function ct(t) {
      var e = this.localeData().week(this);
      return null == t ? e : this.add(7 * (t - e), "d")
  }
  function ft(t) {
      var e = ot(this, 1, 4).week;
      return null == t ? e : this.add(7 * (t - e), "d")
  }
  function ht(t, e, n, i, r) {
      var s, a, o = it(t, 0, 1).getUTCDay();
      return o = 0 === o ? 7 : o,
      n = null != n ? n : r,
      s = r - o + (o > i ? 7 : 0) - (r > o ? 7 : 0),
      a = 7 * (e - 1) + (n - r) + s + 1,
      {
          year: a > 0 ? t : t - 1,
          dayOfYear: a > 0 ? a : rt(t - 1) + a
      }
  }
  function mt(t) {
      var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
      return null == t ? e : this.add(t - e, "d")
  }
  function _t(t, e, n) {
      return null != t ? t : null != e ? e : n
  }
  function yt(t) {
      var e = new Date;
      return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
  }
  function pt(t) {
      var e, n, i, r, s = [];
      if (!t._d) {
          for (i = yt(t),
          t._w && null == t._a[ri] && null == t._a[ii] && gt(t),
          t._dayOfYear && (r = _t(t._a[ni], i[ni]),
          t._dayOfYear > rt(r) && (d(t)._overflowDayOfYear = !0),
          n = it(r, 0, t._dayOfYear),
          t._a[ii] = n.getUTCMonth(),
          t._a[ri] = n.getUTCDate()),
          e = 0; 3 > e && null == t._a[e]; ++e)
              t._a[e] = s[e] = i[e];
          for (; 7 > e; e++)
              t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
          24 === t._a[si] && 0 === t._a[ai] && 0 === t._a[oi] && 0 === t._a[ui] && (t._nextDay = !0,
          t._a[si] = 0),
          t._d = (t._useUTC ? it : nt).apply(null, s),
          null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
          t._nextDay && (t._a[si] = 24)
      }
  }
  function gt(t) {
      var e, n, i, r, s, a, o;
      e = t._w,
      null != e.GG || null != e.W || null != e.E ? (s = 1,
      a = 4,
      n = _t(e.GG, t._a[ni], ot(St(), 1, 4).year),
      i = _t(e.W, 1),
      r = _t(e.E, 1)) : (s = t._locale._week.dow,
      a = t._locale._week.doy,
      n = _t(e.gg, t._a[ni], ot(St(), s, a).year),
      i = _t(e.w, 1),
      null != e.d ? (r = e.d,
      s > r && ++i) : r = null != e.e ? e.e + s : s),
      o = ht(n, i, r, a, s),
      t._a[ni] = o.year,
      t._dayOfYear = o.dayOfYear
  }
  function Dt(e) {
      if (e._f === t.ISO_8601)
          return void tt(e);
      e._a = [],
      d(e).empty = !0;
      var n, i, r, s, a, o = "" + e._i, u = o.length, l = 0;
      for (r = x(e._f, e._locale).match(xn) || [],
      n = 0; n < r.length; n++)
          s = r[n],
          i = (o.match(I(s, e)) || [])[0],
          i && (a = o.substr(0, o.indexOf(i)),
          a.length > 0 && d(e).unusedInput.push(a),
          o = o.slice(o.indexOf(i) + i.length),
          l += i.length),
          An[s] ? (i ? d(e).empty = !1 : d(e).unusedTokens.push(s),
          E(s, i, e)) : e._strict && !i && d(e).unusedTokens.push(s);
      d(e).charsLeftOver = u - l,
      o.length > 0 && d(e).unusedInput.push(o),
      d(e).bigHour === !0 && e._a[si] <= 12 && e._a[si] > 0 && (d(e).bigHour = void 0),
      e._a[si] = vt(e._locale, e._a[si], e._meridiem),
      pt(e),
      B(e)
  }
  function vt(t, e, n) {
      var i;
      return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n),
      i && 12 > e && (e += 12),
      i || 12 !== e || (e = 0),
      e) : e
  }
  function Mt(t) {
      var e, n, i, r, s;
      if (0 === t._f.length)
          return d(t).invalidFormat = !0,
          void (t._d = new Date(0 / 0));
      for (r = 0; r < t._f.length; r++)
          s = 0,
          e = f({}, t),
          null != t._useUTC && (e._useUTC = t._useUTC),
          e._f = t._f[r],
          Dt(e),
          l(e) && (s += d(e).charsLeftOver,
          s += 10 * d(e).unusedTokens.length,
          d(e).score = s,
          (null == i || i > s) && (i = s,
          n = e));
      a(t, n || e)
  }
  function Yt(t) {
      if (!t._d) {
          var e = S(t._i);
          t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond],
          pt(t)
      }
  }
  function wt(t) {
      var e, r = t._i, s = t._f;
      return t._locale = t._locale || w(t._l),
      null === r || void 0 === s && "" === r ? c({
          nullInput: !0
      }) : ("string" == typeof r && (t._i = r = t._locale.preparse(r)),
      m(r) ? new h(B(r)) : (n(s) ? Mt(t) : s ? Dt(t) : i(r) ? t._d = r : kt(t),
      e = new h(B(t)),
      e._nextDay && (e.add(1, "d"),
      e._nextDay = void 0),
      e))
  }
  function kt(e) {
      var s = e._i;
      void 0 === s ? e._d = new Date : i(s) ? e._d = new Date(+s) : "string" == typeof s ? et(e) : n(s) ? (e._a = r(s.slice(0), function(t) {
          return parseInt(t, 10)
      }),
      pt(e)) : "object" == typeof s ? Yt(e) : "number" == typeof s ? e._d = new Date(s) : t.createFromInputFallback(e)
  }
  function Tt(t, e, n, i, r) {
      var s = {};
      return "boolean" == typeof n && (i = n,
      n = void 0),
      s._isAMomentObject = !0,
      s._useUTC = s._isUTC = r,
      s._l = n,
      s._i = t,
      s._f = e,
      s._strict = i,
      wt(s)
  }
  function St(t, e, n, i) {
      return Tt(t, e, n, i, !1)
  }
  function bt(t, e) {
      var i, r;
      if (1 === e.length && n(e[0]) && (e = e[0]),
      !e.length)
          return St();
      for (i = e[0],
      r = 1; r < e.length; ++r)
          e[r][t](i) && (i = e[r]);
      return i
  }
  function Ot() {
      var t = [].slice.call(arguments, 0);
      return bt("isBefore", t)
  }
  function Ut() {
      var t = [].slice.call(arguments, 0);
      return bt("isAfter", t)
  }
  function Ct(t) {
      var e = S(t)
        , n = e.year || 0
        , i = e.quarter || 0
        , r = e.month || 0
        , s = e.week || 0
        , a = e.day || 0
        , o = e.hour || 0
        , u = e.minute || 0
        , d = e.second || 0
        , l = e.millisecond || 0;
      this._milliseconds = +l + 1e3 * d + 6e4 * u + 36e5 * o,
      this._days = +a + 7 * s,
      this._months = +r + 3 * i + 12 * n,
      this._data = {},
      this._locale = w(),
      this._bubble()
  }
  function Wt(t) {
      return t instanceof Ct
  }
  function Gt(t, e) {
      G(t, 0, 0, function() {
          var t = this.utcOffset()
            , n = "+";
          return 0 > t && (t = -t,
          n = "-"),
          n + W(~~(t / 60), 2) + e + W(~~t % 60, 2)
      })
  }
  function Ft(t) {
      var e = (t || "").match(Qn) || []
        , n = e[e.length - 1] || []
        , i = (n + "").match(vi) || ["-", 0, 0]
        , r = +(60 * i[1]) + _(i[2]);
      return "+" === i[0] ? r : -r
  }
  function Pt(e, n) {
      var r, s;
      return n._isUTC ? (r = n.clone(),
      s = (m(e) || i(e) ? +e : +St(e)) - +r,
      r._d.setTime(+r._d + s),
      t.updateOffset(r, !1),
      r) : St(e).local()
  }
  function Lt(t) {
      return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
  }
  function xt(e, n) {
      var i, r = this._offset || 0;
      return null != e ? ("string" == typeof e && (e = Ft(e)),
      Math.abs(e) < 16 && (e = 60 * e),
      !this._isUTC && n && (i = Lt(this)),
      this._offset = e,
      this._isUTC = !0,
      null != i && this.add(i, "m"),
      r !== e && (!n || this._changeInProgress ? Xt(this, Jt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
      t.updateOffset(this, !0),
      this._changeInProgress = null)),
      this) : this._isUTC ? r : Lt(this)
  }
  function Ht(t, e) {
      return null != t ? ("string" != typeof t && (t = -t),
      this.utcOffset(t, e),
      this) : -this.utcOffset()
  }
  function It(t) {
      return this.utcOffset(0, t)
  }
  function At(t) {
      return this._isUTC && (this.utcOffset(0, t),
      this._isUTC = !1,
      t && this.subtract(Lt(this), "m")),
      this
  }
  function zt() {
      return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ft(this._i)),
      this
  }
  function Zt(t) {
      return t = t ? St(t).utcOffset() : 0,
      (this.utcOffset() - t) % 60 === 0
  }
  function Et() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }
  function jt() {
      if (this._a) {
          var t = this._isUTC ? o(this._a) : St(this._a);
          return this.isValid() && y(this._a, t.toArray()) > 0
      }
      return !1
  }
  function Nt() {
      return !this._isUTC
  }
  function Vt() {
      return this._isUTC
  }
  function qt() {
      return this._isUTC && 0 === this._offset
  }
  function Jt(t, e) {
      var n, i, r, a = t, o = null;
      return Wt(t) ? a = {
          ms: t._milliseconds,
          d: t._days,
          M: t._months
      } : "number" == typeof t ? (a = {},
      e ? a[e] = t : a.milliseconds = t) : (o = Mi.exec(t)) ? (n = "-" === o[1] ? -1 : 1,
      a = {
          y: 0,
          d: _(o[ri]) * n,
          h: _(o[si]) * n,
          m: _(o[ai]) * n,
          s: _(o[oi]) * n,
          ms: _(o[ui]) * n
      }) : (o = Yi.exec(t)) ? (n = "-" === o[1] ? -1 : 1,
      a = {
          y: $t(o[2], n),
          M: $t(o[3], n),
          d: $t(o[4], n),
          h: $t(o[5], n),
          m: $t(o[6], n),
          s: $t(o[7], n),
          w: $t(o[8], n)
      }) : null == a ? a = {} : "object" == typeof a && ("from"in a || "to"in a) && (r = Bt(St(a.from), St(a.to)),
      a = {},
      a.ms = r.milliseconds,
      a.M = r.months),
      i = new Ct(a),
      Wt(t) && s(t, "_locale") && (i._locale = t._locale),
      i
  }
  function $t(t, e) {
      var n = t && parseFloat(t.replace(",", "."));
      return (isNaN(n) ? 0 : n) * e
  }
  function Rt(t, e) {
      var n = {
          milliseconds: 0,
          months: 0
      };
      return n.months = e.month() - t.month() + 12 * (e.year() - t.year()),
      t.clone().add(n.months, "M").isAfter(e) && --n.months,
      n.milliseconds = +e - +t.clone().add(n.months, "M"),
      n
  }
  function Bt(t, e) {
      var n;
      return e = Pt(e, t),
      t.isBefore(e) ? n = Rt(t, e) : (n = Rt(e, t),
      n.milliseconds = -n.milliseconds,
      n.months = -n.months),
      n
  }
  function Qt(t, e) {
      return function(n, i) {
          var r, s;
          return null === i || isNaN(+i) || (K(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."),
          s = n,
          n = i,
          i = s),
          n = "string" == typeof n ? +n : n,
          r = Jt(n, i),
          Xt(this, r, t),
          this
      }
  }
  function Xt(e, n, i, r) {
      var s = n._milliseconds
        , a = n._days
        , o = n._months;
      r = null == r ? !0 : r,
      s && e._d.setTime(+e._d + s * i),
      a && U(e, "Date", O(e, "Date") + a * i),
      o && J(e, O(e, "Month") + o * i),
      r && t.updateOffset(e, a || o)
  }
  function Kt(t) {
      var e = t || St()
        , n = Pt(e, this).startOf("day")
        , i = this.diff(n, "days", !0)
        , r = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
      return this.format(this.localeData().calendar(r, this, St(e)))
  }
  function te() {
      return new h(this)
  }
  function ee(t, e) {
      var n;
      return e = T("undefined" != typeof e ? e : "millisecond"),
      "millisecond" === e ? (t = m(t) ? t : St(t),
      +this > +t) : (n = m(t) ? +t : +St(t),
      n < +this.clone().startOf(e))
  }
  function ne(t, e) {
      var n;
      return e = T("undefined" != typeof e ? e : "millisecond"),
      "millisecond" === e ? (t = m(t) ? t : St(t),
      +t > +this) : (n = m(t) ? +t : +St(t),
      +this.clone().endOf(e) < n)
  }
  function ie(t, e, n) {
      return this.isAfter(t, n) && this.isBefore(e, n)
  }
  function re(t, e) {
      var n;
      return e = T(e || "millisecond"),
      "millisecond" === e ? (t = m(t) ? t : St(t),
      +this === +t) : (n = +St(t),
      +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
  }
  function se(t) {
      return 0 > t ? Math.ceil(t) : Math.floor(t)
  }
  function ae(t, e, n) {
      var i, r, s = Pt(t, this), a = 6e4 * (s.utcOffset() - this.utcOffset());
      return e = T(e),
      "year" === e || "month" === e || "quarter" === e ? (r = oe(this, s),
      "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (i = this - s,
      r = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - a) / 864e5 : "week" === e ? (i - a) / 6048e5 : i),
      n ? r : se(r)
  }
  function oe(t, e) {
      var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()), s = t.clone().add(r, "months");
      return 0 > e - s ? (n = t.clone().add(r - 1, "months"),
      i = (e - s) / (s - n)) : (n = t.clone().add(r + 1, "months"),
      i = (e - s) / (n - s)),
      -(r + i)
  }
  function ue() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
  }
  function de() {
      var t = this.clone().utc();
      return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : L(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : L(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
  }
  function le(e) {
      var n = L(this, e || t.defaultFormat);
      return this.localeData().postformat(n)
  }
  function ce(t, e) {
      return this.isValid() ? Jt({
          to: this,
          from: t
      }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
  }
  function fe(t) {
      return this.from(St(), t)
  }
  function he(t, e) {
      return this.isValid() ? Jt({
          from: this,
          to: t
      }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
  }
  function me(t) {
      return this.to(St(), t)
  }
  function _e(t) {
      var e;
      return void 0 === t ? this._locale._abbr : (e = w(t),
      null != e && (this._locale = e),
      this)
  }
  function ye() {
      return this._locale
  }
  function pe(t) {
      switch (t = T(t)) {
      case "year":
          this.month(0);
      case "quarter":
      case "month":
          this.date(1);
      case "week":
      case "isoWeek":
      case "day":
          this.hours(0);
      case "hour":
          this.minutes(0);
      case "minute":
          this.seconds(0);
      case "second":
          this.milliseconds(0)
      }
      return "week" === t && this.weekday(0),
      "isoWeek" === t && this.isoWeekday(1),
      "quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
      this
  }
  function ge(t) {
      return t = T(t),
      void 0 === t || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
  }
  function De() {
      return +this._d - 6e4 * (this._offset || 0)
  }
  function ve() {
      return Math.floor(+this / 1e3)
  }
  function Me() {
      return this._offset ? new Date(+this) : this._d
  }
  function Ye() {
      var t = this;
      return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
  }
  function we() {
      return l(this)
  }
  function ke() {
      return a({}, d(this))
  }
  function Te() {
      return d(this).overflow
  }
  function Se(t, e) {
      G(0, [t, t.length], 0, e)
  }
  function be(t, e, n) {
      return ot(St([t, 11, 31 + e - n]), e, n).week
  }
  function Oe(t) {
      var e = ot(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
      return null == t ? e : this.add(t - e, "y")
  }
  function Ue(t) {
      var e = ot(this, 1, 4).year;
      return null == t ? e : this.add(t - e, "y")
  }
  function Ce() {
      return be(this.year(), 1, 4)
  }
  function We() {
      var t = this.localeData()._week;
      return be(this.year(), t.dow, t.doy)
  }
  function Ge(t) {
      return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
  }
  function Fe(t, e) {
      if ("string" == typeof t)
          if (isNaN(t)) {
              if (t = e.weekdaysParse(t),
              "number" != typeof t)
                  return null
          } else
              t = parseInt(t, 10);
      return t
  }
  function Pe(t) {
      return this._weekdays[t.day()]
  }
  function Le(t) {
      return this._weekdaysShort[t.day()]
  }
  function xe(t) {
      return this._weekdaysMin[t.day()]
  }
  function He(t) {
      var e, n, i;
      for (this._weekdaysParse || (this._weekdaysParse = []),
      e = 0; 7 > e; e++)
          if (this._weekdaysParse[e] || (n = St([2e3, 1]).day(e),
          i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""),
          this._weekdaysParse[e] = new RegExp(i.replace(".", ""),"i")),
          this._weekdaysParse[e].test(t))
              return e
  }
  function Ie(t) {
      var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != t ? (t = Fe(t, this.localeData()),
      this.add(t - e, "d")) : e
  }
  function Ae(t) {
      var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == t ? e : this.add(t - e, "d")
  }
  function ze(t) {
      return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
  }
  function Ze(t, e) {
      G(t, 0, 0, function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), e)
      })
  }
  function Ee(t, e) {
      return e._meridiemParse
  }
  function je(t) {
      return "p" === (t + "").toLowerCase().charAt(0)
  }
  function Ne(t, e, n) {
      return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
  }
  function Ve(t) {
      G(0, [t, 3], 0, "millisecond")
  }
  function qe() {
      return this._isUTC ? "UTC" : ""
  }
  function Je() {
      return this._isUTC ? "Coordinated Universal Time" : ""
  }
  function $e(t) {
      return St(1e3 * t)
  }
  function Re() {
      return St.apply(null, arguments).parseZone()
  }
  function Be(t, e, n) {
      var i = this._calendar[t];
      return "function" == typeof i ? i.call(e, n) : i
  }
  function Qe(t) {
      var e = this._longDateFormat[t];
      return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
          return t.slice(1)
      }),
      this._longDateFormat[t] = e),
      e
  }
  function Xe() {
      return this._invalidDate
  }
  function Ke(t) {
      return this._ordinal.replace("%d", t)
  }
  function tn(t) {
      return t
  }
  function en(t, e, n, i) {
      var r = this._relativeTime[n];
      return "function" == typeof r ? r(t, e, n, i) : r.replace(/%d/i, t)
  }
  function nn(t, e) {
      var n = this._relativeTime[t > 0 ? "future" : "past"];
      return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
  }
  function rn(t) {
      var e, n;
      for (n in t)
          e = t[n],
          "function" == typeof e ? this[n] = e : this["_" + n] = e;
      this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
  }
  function sn(t, e, n, i) {
      var r = w()
        , s = o().set(i, e);
      return r[n](s, t)
  }
  function an(t, e, n, i, r) {
      if ("number" == typeof t && (e = t,
      t = void 0),
      t = t || "",
      null != e)
          return sn(t, e, n, r);
      var s, a = [];
      for (s = 0; i > s; s++)
          a[s] = sn(t, s, n, r);
      return a
  }
  function on(t, e) {
      return an(t, e, "months", 12, "month")
  }
  function un(t, e) {
      return an(t, e, "monthsShort", 12, "month")
  }
  function dn(t, e) {
      return an(t, e, "weekdays", 7, "day")
  }
  function ln(t, e) {
      return an(t, e, "weekdaysShort", 7, "day")
  }
  function cn(t, e) {
      return an(t, e, "weekdaysMin", 7, "day")
  }
  function fn() {
      var t = this._data;
      return this._milliseconds = Ni(this._milliseconds),
      this._days = Ni(this._days),
      this._months = Ni(this._months),
      t.milliseconds = Ni(t.milliseconds),
      t.seconds = Ni(t.seconds),
      t.minutes = Ni(t.minutes),
      t.hours = Ni(t.hours),
      t.months = Ni(t.months),
      t.years = Ni(t.years),
      this
  }
  function hn(t, e, n, i) {
      var r = Jt(e, n);
      return t._milliseconds += i * r._milliseconds,
      t._days += i * r._days,
      t._months += i * r._months,
      t._bubble()
  }
  function mn(t, e) {
      return hn(this, t, e, 1)
  }
  function _n(t, e) {
      return hn(this, t, e, -1)
  }
  function yn() {
      var t, e, n, i = this._milliseconds, r = this._days, s = this._months, a = this._data, o = 0;
      return a.milliseconds = i % 1e3,
      t = se(i / 1e3),
      a.seconds = t % 60,
      e = se(t / 60),
      a.minutes = e % 60,
      n = se(e / 60),
      a.hours = n % 24,
      r += se(n / 24),
      o = se(pn(r)),
      r -= se(gn(o)),
      s += se(r / 30),
      r %= 30,
      o += se(s / 12),
      s %= 12,
      a.days = r,
      a.months = s,
      a.years = o,
      this
  }
  function pn(t) {
      return 400 * t / 146097
  }
  function gn(t) {
      return 146097 * t / 400
  }
  function Dn(t) {
      var e, n, i = this._milliseconds;
      if (t = T(t),
      "month" === t || "year" === t)
          return e = this._days + i / 864e5,
          n = this._months + 12 * pn(e),
          "month" === t ? n : n / 12;
      switch (e = this._days + Math.round(gn(this._months / 12)),
      t) {
      case "week":
          return e / 7 + i / 6048e5;
      case "day":
          return e + i / 864e5;
      case "hour":
          return 24 * e + i / 36e5;
      case "minute":
          return 1440 * e + i / 6e4;
      case "second":
          return 86400 * e + i / 1e3;
      case "millisecond":
          return Math.floor(864e5 * e) + i;
      default:
          throw new Error("Unknown unit " + t)
      }
  }
  function vn() {
      return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12)
  }
  function Mn(t) {
      return function() {
          return this.as(t)
      }
  }
  function Yn(t) {
      return t = T(t),
      this[t + "s"]()
  }
  function wn(t) {
      return function() {
          return this._data[t]
      }
  }
  function kn() {
      return se(this.days() / 7)
  }
  function Tn(t, e, n, i, r) {
      return r.relativeTime(e || 1, !!n, t, i)
  }
  function Sn(t, e, n) {
      var i = Jt(t).abs()
        , r = ar(i.as("s"))
        , s = ar(i.as("m"))
        , a = ar(i.as("h"))
        , o = ar(i.as("d"))
        , u = ar(i.as("M"))
        , d = ar(i.as("y"))
        , l = r < or.s && ["s", r] || 1 === s && ["m"] || s < or.m && ["mm", s] || 1 === a && ["h"] || a < or.h && ["hh", a] || 1 === o && ["d"] || o < or.d && ["dd", o] || 1 === u && ["M"] || u < or.M && ["MM", u] || 1 === d && ["y"] || ["yy", d];
      return l[2] = e,
      l[3] = +t > 0,
      l[4] = n,
      Tn.apply(null, l)
  }
  function bn(t, e) {
      return void 0 === or[t] ? !1 : void 0 === e ? or[t] : (or[t] = e,
      !0)
  }
  function On(t) {
      var e = this.localeData()
        , n = Sn(this, !t, e);
      return t && (n = e.pastFuture(+this, n)),
      e.postformat(n)
  }
  function Un() {
      var t = ur(this.years())
        , e = ur(this.months())
        , n = ur(this.days())
        , i = ur(this.hours())
        , r = ur(this.minutes())
        , s = ur(this.seconds() + this.milliseconds() / 1e3)
        , a = this.asSeconds();
      return a ? (0 > a ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (i || r || s ? "T" : "") + (i ? i + "H" : "") + (r ? r + "M" : "") + (s ? s + "S" : "") : "P0D"
  }
  var Cn, Wn, Gn = t.momentProperties = [], Fn = !1, Pn = {}, Ln = {}, xn = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Hn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, In = {}, An = {}, zn = /\d/, Zn = /\d\d/, En = /\d{3}/, jn = /\d{4}/, Nn = /[+-]?\d{6}/, Vn = /\d\d?/, qn = /\d{1,3}/, Jn = /\d{1,4}/, $n = /[+-]?\d{1,6}/, Rn = /\d+/, Bn = /[+-]?\d+/, Qn = /Z|[+-]\d\d:?\d\d/gi, Xn = /[+-]?\d+(\.\d{1,3})?/, Kn = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ti = {}, ei = {}, ni = 0, ii = 1, ri = 2, si = 3, ai = 4, oi = 5, ui = 6;
  G("M", ["MM", 2], "Mo", function() {
      return this.month() + 1
  }),
  G("MMM", 0, 0, function(t) {
      return this.localeData().monthsShort(this, t)
  }),
  G("MMMM", 0, 0, function(t) {
      return this.localeData().months(this, t)
  }),
  k("month", "M"),
  H("M", Vn),
  H("MM", Vn, Zn),
  H("MMM", Kn),
  H("MMMM", Kn),
  z(["M", "MM"], function(t, e) {
      e[ii] = _(t) - 1
  }),
  z(["MMM", "MMMM"], function(t, e, n, i) {
      var r = n._locale.monthsParse(t, i, n._strict);
      null != r ? e[ii] = r : d(n).invalidMonth = t
  });
  var di = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    , li = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
    , ci = {};
  t.suppressDeprecationWarnings = !1;
  var fi = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
    , hi = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]]
    , mi = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]]
    , _i = /^\/?Date\((\-?\d+)/i;
  t.createFromInputFallback = X("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
      t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
  }),
  G(0, ["YY", 2], 0, function() {
      return this.year() % 100
  }),
  G(0, ["YYYY", 4], 0, "year"),
  G(0, ["YYYYY", 5], 0, "year"),
  G(0, ["YYYYYY", 6, !0], 0, "year"),
  k("year", "y"),
  H("Y", Bn),
  H("YY", Vn, Zn),
  H("YYYY", Jn, jn),
  H("YYYYY", $n, Nn),
  H("YYYYYY", $n, Nn),
  z(["YYYY", "YYYYY", "YYYYYY"], ni),
  z("YY", function(e, n) {
      n[ni] = t.parseTwoDigitYear(e)
  }),
  t.parseTwoDigitYear = function(t) {
      return _(t) + (_(t) > 68 ? 1900 : 2e3)
  }
  ;
  var yi = b("FullYear", !1);
  G("w", ["ww", 2], "wo", "week"),
  G("W", ["WW", 2], "Wo", "isoWeek"),
  k("week", "w"),
  k("isoWeek", "W"),
  H("w", Vn),
  H("ww", Vn, Zn),
  H("W", Vn),
  H("WW", Vn, Zn),
  Z(["w", "ww", "W", "WW"], function(t, e, n, i) {
      e[i.substr(0, 1)] = _(t)
  });
  var pi = {
      dow: 0,
      doy: 6
  };
  G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
  k("dayOfYear", "DDD"),
  H("DDD", qn),
  H("DDDD", En),
  z(["DDD", "DDDD"], function(t, e, n) {
      n._dayOfYear = _(t)
  }),
  t.ISO_8601 = function() {}
  ;
  var gi = X("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
      var t = St.apply(null, arguments);
      return this > t ? this : t
  })
    , Di = X("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
      var t = St.apply(null, arguments);
      return t > this ? this : t
  });
  Gt("Z", ":"),
  Gt("ZZ", ""),
  H("Z", Qn),
  H("ZZ", Qn),
  z(["Z", "ZZ"], function(t, e, n) {
      n._useUTC = !0,
      n._tzm = Ft(t)
  });
  var vi = /([\+\-]|\d\d)/gi;
  t.updateOffset = function() {}
  ;
  var Mi = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/
    , Yi = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
  Jt.fn = Ct.prototype;
  var wi = Qt(1, "add")
    , ki = Qt(-1, "subtract");
  t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  var Ti = X("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
      return void 0 === t ? this.localeData() : this.locale(t)
  });
  G(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100
  }),
  G(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100
  }),
  Se("gggg", "weekYear"),
  Se("ggggg", "weekYear"),
  Se("GGGG", "isoWeekYear"),
  Se("GGGGG", "isoWeekYear"),
  k("weekYear", "gg"),
  k("isoWeekYear", "GG"),
  H("G", Bn),
  H("g", Bn),
  H("GG", Vn, Zn),
  H("gg", Vn, Zn),
  H("GGGG", Jn, jn),
  H("gggg", Jn, jn),
  H("GGGGG", $n, Nn),
  H("ggggg", $n, Nn),
  Z(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
      e[i.substr(0, 2)] = _(t)
  }),
  Z(["gg", "GG"], function(e, n, i, r) {
      n[r] = t.parseTwoDigitYear(e)
  }),
  G("Q", 0, 0, "quarter"),
  k("quarter", "Q"),
  H("Q", zn),
  z("Q", function(t, e) {
      e[ii] = 3 * (_(t) - 1)
  }),
  G("D", ["DD", 2], "Do", "date"),
  k("date", "D"),
  H("D", Vn),
  H("DD", Vn, Zn),
  H("Do", function(t, e) {
      return t ? e._ordinalParse : e._ordinalParseLenient
  }),
  z(["D", "DD"], ri),
  z("Do", function(t, e) {
      e[ri] = _(t.match(Vn)[0], 10)
  });
  var Si = b("Date", !0);
  G("d", 0, "do", "day"),
  G("dd", 0, 0, function(t) {
      return this.localeData().weekdaysMin(this, t)
  }),
  G("ddd", 0, 0, function(t) {
      return this.localeData().weekdaysShort(this, t)
  }),
  G("dddd", 0, 0, function(t) {
      return this.localeData().weekdays(this, t)
  }),
  G("e", 0, 0, "weekday"),
  G("E", 0, 0, "isoWeekday"),
  k("day", "d"),
  k("weekday", "e"),
  k("isoWeekday", "E"),
  H("d", Vn),
  H("e", Vn),
  H("E", Vn),
  H("dd", Kn),
  H("ddd", Kn),
  H("dddd", Kn),
  Z(["dd", "ddd", "dddd"], function(t, e, n) {
      var i = n._locale.weekdaysParse(t);
      null != i ? e.d = i : d(n).invalidWeekday = t
  }),
  Z(["d", "e", "E"], function(t, e, n, i) {
      e[i] = _(t)
  });
  var bi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
    , Oi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
    , Ui = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  G("H", ["HH", 2], 0, "hour"),
  G("h", ["hh", 2], 0, function() {
      return this.hours() % 12 || 12
  }),
  Ze("a", !0),
  Ze("A", !1),
  k("hour", "h"),
  H("a", Ee),
  H("A", Ee),
  H("H", Vn),
  H("h", Vn),
  H("HH", Vn, Zn),
  H("hh", Vn, Zn),
  z(["H", "HH"], si),
  z(["a", "A"], function(t, e, n) {
      n._isPm = n._locale.isPM(t),
      n._meridiem = t
  }),
  z(["h", "hh"], function(t, e, n) {
      e[si] = _(t),
      d(n).bigHour = !0
  });
  var Ci = /[ap]\.?m?\.?/i
    , Wi = b("Hours", !0);
  G("m", ["mm", 2], 0, "minute"),
  k("minute", "m"),
  H("m", Vn),
  H("mm", Vn, Zn),
  z(["m", "mm"], ai);
  var Gi = b("Minutes", !1);
  G("s", ["ss", 2], 0, "second"),
  k("second", "s"),
  H("s", Vn),
  H("ss", Vn, Zn),
  z(["s", "ss"], oi);
  var Fi = b("Seconds", !1);
  G("S", 0, 0, function() {
      return ~~(this.millisecond() / 100)
  }),
  G(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10)
  }),
  Ve("SSS"),
  Ve("SSSS"),
  k("millisecond", "ms"),
  H("S", qn, zn),
  H("SS", qn, Zn),
  H("SSS", qn, En),
  H("SSSS", Rn),
  z(["S", "SS", "SSS", "SSSS"], function(t, e) {
      e[ui] = _(1e3 * ("0." + t))
  });
  var Pi = b("Milliseconds", !1);
  G("z", 0, 0, "zoneAbbr"),
  G("zz", 0, 0, "zoneName");
  var Li = h.prototype;
  Li.add = wi,
  Li.calendar = Kt,
  Li.clone = te,
  Li.diff = ae,
  Li.endOf = ge,
  Li.format = le,
  Li.from = ce,
  Li.fromNow = fe,
  Li.to = he,
  Li.toNow = me,
  Li.get = C,
  Li.invalidAt = Te,
  Li.isAfter = ee,
  Li.isBefore = ne,
  Li.isBetween = ie,
  Li.isSame = re,
  Li.isValid = we,
  Li.lang = Ti,
  Li.locale = _e,
  Li.localeData = ye,
  Li.max = Di,
  Li.min = gi,
  Li.parsingFlags = ke,
  Li.set = C,
  Li.startOf = pe,
  Li.subtract = ki,
  Li.toArray = Ye,
  Li.toDate = Me,
  Li.toISOString = de,
  Li.toJSON = de,
  Li.toString = ue,
  Li.unix = ve,
  Li.valueOf = De,
  Li.year = yi,
  Li.isLeapYear = at,
  Li.weekYear = Oe,
  Li.isoWeekYear = Ue,
  Li.quarter = Li.quarters = Ge,
  Li.month = $,
  Li.daysInMonth = R,
  Li.week = Li.weeks = ct,
  Li.isoWeek = Li.isoWeeks = ft,
  Li.weeksInYear = We,
  Li.isoWeeksInYear = Ce,
  Li.date = Si,
  Li.day = Li.days = Ie,
  Li.weekday = Ae,
  Li.isoWeekday = ze,
  Li.dayOfYear = mt,
  Li.hour = Li.hours = Wi,
  Li.minute = Li.minutes = Gi,
  Li.second = Li.seconds = Fi,
  Li.millisecond = Li.milliseconds = Pi,
  Li.utcOffset = xt,
  Li.utc = It,
  Li.local = At,
  Li.parseZone = zt,
  Li.hasAlignedHourOffset = Zt,
  Li.isDST = Et,
  Li.isDSTShifted = jt,
  Li.isLocal = Nt,
  Li.isUtcOffset = Vt,
  Li.isUtc = qt,
  Li.isUTC = qt,
  Li.zoneAbbr = qe,
  Li.zoneName = Je,
  Li.dates = X("dates accessor is deprecated. Use date instead.", Si),
  Li.months = X("months accessor is deprecated. Use month instead", $),
  Li.years = X("years accessor is deprecated. Use year instead", yi),
  Li.zone = X("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Ht);
  var xi = Li
    , Hi = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
  }
    , Ii = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY LT",
      LLLL: "dddd, MMMM D, YYYY LT"
  }
    , Ai = "Invalid date"
    , zi = "%d"
    , Zi = /\d{1,2}/
    , Ei = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
  }
    , ji = p.prototype;
  ji._calendar = Hi,
  ji.calendar = Be,
  ji._longDateFormat = Ii,
  ji.longDateFormat = Qe,
  ji._invalidDate = Ai,
  ji.invalidDate = Xe,
  ji._ordinal = zi,
  ji.ordinal = Ke,
  ji._ordinalParse = Zi,
  ji.preparse = tn,
  ji.postformat = tn,
  ji._relativeTime = Ei,
  ji.relativeTime = en,
  ji.pastFuture = nn,
  ji.set = rn,
  ji.months = N,
  ji._months = di,
  ji.monthsShort = V,
  ji._monthsShort = li,
  ji.monthsParse = q,
  ji.week = ut,
  ji._week = pi,
  ji.firstDayOfYear = lt,
  ji.firstDayOfWeek = dt,
  ji.weekdays = Pe,
  ji._weekdays = bi,
  ji.weekdaysMin = xe,
  ji._weekdaysMin = Ui,
  ji.weekdaysShort = Le,
  ji._weekdaysShort = Oi,
  ji.weekdaysParse = He,
  ji.isPM = je,
  ji._meridiemParse = Ci,
  ji.meridiem = Ne,
  M("en", {
      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(t) {
          var e = t % 10
            , n = 1 === _(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
          return t + n
      }
  }),
  t.lang = X("moment.lang is deprecated. Use moment.locale instead.", M),
  t.langData = X("moment.langData is deprecated. Use moment.localeData instead.", w);
  var Ni = Math.abs
    , Vi = Mn("ms")
    , qi = Mn("s")
    , Ji = Mn("m")
    , $i = Mn("h")
    , Ri = Mn("d")
    , Bi = Mn("w")
    , Qi = Mn("M")
    , Xi = Mn("y")
    , Ki = wn("milliseconds")
    , tr = wn("seconds")
    , er = wn("minutes")
    , nr = wn("hours")
    , ir = wn("days")
    , rr = wn("months")
    , sr = wn("years")
    , ar = Math.round
    , or = {
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      M: 11
  }
    , ur = Math.abs
    , dr = Ct.prototype;
  dr.abs = fn,
  dr.add = mn,
  dr.subtract = _n,
  dr.as = Dn,
  dr.asMilliseconds = Vi,
  dr.asSeconds = qi,
  dr.asMinutes = Ji,
  dr.asHours = $i,
  dr.asDays = Ri,
  dr.asWeeks = Bi,
  dr.asMonths = Qi,
  dr.asYears = Xi,
  dr.valueOf = vn,
  dr._bubble = yn,
  dr.get = Yn,
  dr.milliseconds = Ki,
  dr.seconds = tr,
  dr.minutes = er,
  dr.hours = nr,
  dr.days = ir,
  dr.weeks = kn,
  dr.months = rr,
  dr.years = sr,
  dr.humanize = On,
  dr.toISOString = Un,
  dr.toString = Un,
  dr.toJSON = Un,
  dr.locale = _e,
  dr.localeData = ye,
  dr.toIsoString = X("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Un),
  dr.lang = Ti,
  G("X", 0, 0, "unix"),
  G("x", 0, 0, "valueOf"),
  H("x", Bn),
  H("X", Xn),
  z("X", function(t, e, n) {
      n._d = new Date(1e3 * parseFloat(t, 10))
  }),
  z("x", function(t, e, n) {
      n._d = new Date(_(t))
  }),
  t.version = "2.10.3",
  e(St),
  t.fn = xi,
  t.min = Ot,
  t.max = Ut,
  t.utc = o,
  t.unix = $e,
  t.months = on,
  t.isDate = i,
  t.locale = M,
  t.invalid = c,
  t.duration = Jt,
  t.isMoment = m,
  t.weekdays = dn,
  t.parseZone = Re,
  t.localeData = w,
  t.isDuration = Wt,
  t.monthsShort = un,
  t.weekdaysMin = cn,
  t.defineLocale = Y,
  t.weekdaysShort = ln,
  t.normalizeUnits = T,
  t.relativeTimeThreshold = bn;
  var lr = t;
  return lr
});
