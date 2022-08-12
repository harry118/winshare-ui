(function (P, W) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = W(require('react')))
    : typeof define == 'function' && define.amd
    ? define(['react'], W)
    : ((P = typeof globalThis < 'u' ? globalThis : P || self),
      (P['@winshare/button'] = W(P.React)));
})(this, function (P) {
  'use strict';
  const Z = ((d) => (d && typeof d == 'object' && 'default' in d ? d : { default: d }))(P);
  var Q = { exports: {} };
  /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function (
    d,
  ) {
    (function () {
      var R = {}.hasOwnProperty;
      function y() {
        for (var v = [], _ = 0; _ < arguments.length; _++) {
          var c = arguments[_];
          if (!!c) {
            var E = typeof c;
            if (E === 'string' || E === 'number') v.push(c);
            else if (Array.isArray(c)) {
              if (c.length) {
                var g = y.apply(null, c);
                g && v.push(g);
              }
            } else if (E === 'object')
              if (c.toString === Object.prototype.toString)
                for (var l in c) R.call(c, l) && c[l] && v.push(l);
              else v.push(c.toString());
          }
        }
        return v.join(' ');
      }
      d.exports ? ((y.default = y), (d.exports = y)) : (window.classNames = y);
    })();
  })(Q);
  const Pe = Q.exports,
    vr = '';
  var ee = { exports: {} },
    F = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var re;
  function xe() {
    if (re) return F;
    re = 1;
    var d = Z.default,
      R = Symbol.for('react.element'),
      y = Symbol.for('react.fragment'),
      v = Object.prototype.hasOwnProperty,
      _ = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      c = { key: !0, ref: !0, __self: !0, __source: !0 };
    function E(g, l, x) {
      var b,
        T = {},
        S = null,
        N = null;
      x !== void 0 && (S = '' + x),
        l.key !== void 0 && (S = '' + l.key),
        l.ref !== void 0 && (N = l.ref);
      for (b in l) v.call(l, b) && !c.hasOwnProperty(b) && (T[b] = l[b]);
      if (g && g.defaultProps)
        for (b in ((l = g.defaultProps), l)) T[b] === void 0 && (T[b] = l[b]);
      return { $$typeof: R, type: g, key: S, ref: N, props: T, _owner: _.current };
    }
    return (F.Fragment = y), (F.jsx = E), (F.jsxs = E), F;
  }
  var A = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var te;
  function je() {
    return (
      te ||
        ((te = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            var d = Z.default,
              R = Symbol.for('react.element'),
              y = Symbol.for('react.portal'),
              v = Symbol.for('react.fragment'),
              _ = Symbol.for('react.strict_mode'),
              c = Symbol.for('react.profiler'),
              E = Symbol.for('react.provider'),
              g = Symbol.for('react.context'),
              l = Symbol.for('react.forward_ref'),
              x = Symbol.for('react.suspense'),
              b = Symbol.for('react.suspense_list'),
              T = Symbol.for('react.memo'),
              S = Symbol.for('react.lazy'),
              N = Symbol.for('react.offscreen'),
              ne = Symbol.iterator,
              De = '@@iterator';
            function Fe(e) {
              if (e === null || typeof e != 'object') return null;
              var r = (ne && e[ne]) || e[De];
              return typeof r == 'function' ? r : null;
            }
            var j = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function p(e) {
              {
                for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                  t[n - 1] = arguments[n];
                Ae('error', e, t);
              }
            }
            function Ae(e, r, t) {
              {
                var n = j.ReactDebugCurrentFrame,
                  i = n.getStackAddendum();
                i !== '' && ((r += '%s'), (t = t.concat([i])));
                var u = t.map(function (o) {
                  return String(o);
                });
                u.unshift('Warning: ' + r), Function.prototype.apply.call(console[e], console, u);
              }
            }
            var $e = !1,
              Ie = !1,
              We = !1,
              Ne = !1,
              Ye = !1,
              ae;
            ae = Symbol.for('react.module.reference');
            function Le(e) {
              return !!(
                typeof e == 'string' ||
                typeof e == 'function' ||
                e === v ||
                e === c ||
                Ye ||
                e === _ ||
                e === x ||
                e === b ||
                Ne ||
                e === N ||
                $e ||
                Ie ||
                We ||
                (typeof e == 'object' &&
                  e !== null &&
                  (e.$$typeof === S ||
                    e.$$typeof === T ||
                    e.$$typeof === E ||
                    e.$$typeof === g ||
                    e.$$typeof === l ||
                    e.$$typeof === ae ||
                    e.getModuleId !== void 0))
              );
            }
            function Ve(e, r, t) {
              var n = e.displayName;
              if (n) return n;
              var i = r.displayName || r.name || '';
              return i !== '' ? t + '(' + i + ')' : t;
            }
            function oe(e) {
              return e.displayName || 'Context';
            }
            function O(e) {
              if (e == null) return null;
              if (
                (typeof e.tag == 'number' &&
                  p(
                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                  ),
                typeof e == 'function')
              )
                return e.displayName || e.name || null;
              if (typeof e == 'string') return e;
              switch (e) {
                case v:
                  return 'Fragment';
                case y:
                  return 'Portal';
                case c:
                  return 'Profiler';
                case _:
                  return 'StrictMode';
                case x:
                  return 'Suspense';
                case b:
                  return 'SuspenseList';
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case g:
                    var r = e;
                    return oe(r) + '.Consumer';
                  case E:
                    var t = e;
                    return oe(t._context) + '.Provider';
                  case l:
                    return Ve(e, e.render, 'ForwardRef');
                  case T:
                    var n = e.displayName || null;
                    return n !== null ? n : O(e.type) || 'Memo';
                  case S: {
                    var i = e,
                      u = i._payload,
                      o = i._init;
                    try {
                      return O(o(u));
                    } catch {
                      return null;
                    }
                  }
                }
              return null;
            }
            var C = Object.assign,
              $ = 0,
              ie,
              ue,
              se,
              fe,
              le,
              ce,
              de;
            function ve() {}
            ve.__reactDisabledLog = !0;
            function Me() {
              {
                if ($ === 0) {
                  (ie = console.log),
                    (ue = console.info),
                    (se = console.warn),
                    (fe = console.error),
                    (le = console.group),
                    (ce = console.groupCollapsed),
                    (de = console.groupEnd);
                  var e = { configurable: !0, enumerable: !0, value: ve, writable: !0 };
                  Object.defineProperties(console, {
                    info: e,
                    log: e,
                    warn: e,
                    error: e,
                    group: e,
                    groupCollapsed: e,
                    groupEnd: e,
                  });
                }
                $++;
              }
            }
            function Ue() {
              {
                if (($--, $ === 0)) {
                  var e = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: C({}, e, { value: ie }),
                    info: C({}, e, { value: ue }),
                    warn: C({}, e, { value: se }),
                    error: C({}, e, { value: fe }),
                    group: C({}, e, { value: le }),
                    groupCollapsed: C({}, e, { value: ce }),
                    groupEnd: C({}, e, { value: de }),
                  });
                }
                $ < 0 &&
                  p('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
              }
            }
            var B = j.ReactCurrentDispatcher,
              q;
            function Y(e, r, t) {
              {
                if (q === void 0)
                  try {
                    throw Error();
                  } catch (i) {
                    var n = i.stack.trim().match(/\n( *(at )?)/);
                    q = (n && n[1]) || '';
                  }
                return (
                  `
` +
                  q +
                  e
                );
              }
            }
            var z = !1,
              L;
            {
              var Be = typeof WeakMap == 'function' ? WeakMap : Map;
              L = new Be();
            }
            function pe(e, r) {
              if (!e || z) return '';
              {
                var t = L.get(e);
                if (t !== void 0) return t;
              }
              var n;
              z = !0;
              var i = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var u;
              (u = B.current), (B.current = null), Me();
              try {
                if (r) {
                  var o = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(o.prototype, 'props', {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == 'object' && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(o, []);
                    } catch (w) {
                      n = w;
                    }
                    Reflect.construct(e, [], o);
                  } else {
                    try {
                      o.call();
                    } catch (w) {
                      n = w;
                    }
                    e.call(o.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (w) {
                    n = w;
                  }
                  e();
                }
              } catch (w) {
                if (w && n && typeof w.stack == 'string') {
                  for (
                    var a = w.stack.split(`
`),
                      h = n.stack.split(`
`),
                      s = a.length - 1,
                      f = h.length - 1;
                    s >= 1 && f >= 0 && a[s] !== h[f];

                  )
                    f--;
                  for (; s >= 1 && f >= 0; s--, f--)
                    if (a[s] !== h[f]) {
                      if (s !== 1 || f !== 1)
                        do
                          if ((s--, f--, f < 0 || a[s] !== h[f])) {
                            var m =
                              `
` + a[s].replace(' at new ', ' at ');
                            return (
                              e.displayName &&
                                m.includes('<anonymous>') &&
                                (m = m.replace('<anonymous>', e.displayName)),
                              typeof e == 'function' && L.set(e, m),
                              m
                            );
                          }
                        while (s >= 1 && f >= 0);
                      break;
                    }
                }
              } finally {
                (z = !1), (B.current = u), Ue(), (Error.prepareStackTrace = i);
              }
              var D = e ? e.displayName || e.name : '',
                Ce = D ? Y(D) : '';
              return typeof e == 'function' && L.set(e, Ce), Ce;
            }
            function qe(e, r, t) {
              return pe(e, !1);
            }
            function ze(e) {
              var r = e.prototype;
              return !!(r && r.isReactComponent);
            }
            function V(e, r, t) {
              if (e == null) return '';
              if (typeof e == 'function') return pe(e, ze(e));
              if (typeof e == 'string') return Y(e);
              switch (e) {
                case x:
                  return Y('Suspense');
                case b:
                  return Y('SuspenseList');
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case l:
                    return qe(e.render);
                  case T:
                    return V(e.type, r, t);
                  case S: {
                    var n = e,
                      i = n._payload,
                      u = n._init;
                    try {
                      return V(u(i), r, t);
                    } catch {}
                  }
                }
              return '';
            }
            var M = Object.prototype.hasOwnProperty,
              he = {},
              be = j.ReactDebugCurrentFrame;
            function U(e) {
              if (e) {
                var r = e._owner,
                  t = V(e.type, e._source, r ? r.type : null);
                be.setExtraStackFrame(t);
              } else be.setExtraStackFrame(null);
            }
            function Je(e, r, t, n, i) {
              {
                var u = Function.call.bind(M);
                for (var o in e)
                  if (u(e, o)) {
                    var a = void 0;
                    try {
                      if (typeof e[o] != 'function') {
                        var h = Error(
                          (n || 'React class') +
                            ': ' +
                            t +
                            ' type `' +
                            o +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof e[o] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                        );
                        throw ((h.name = 'Invariant Violation'), h);
                      }
                      a = e[o](r, o, n, t, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                    } catch (s) {
                      a = s;
                    }
                    a &&
                      !(a instanceof Error) &&
                      (U(i),
                      p(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        n || 'React class',
                        t,
                        o,
                        typeof a,
                      ),
                      U(null)),
                      a instanceof Error &&
                        !(a.message in he) &&
                        ((he[a.message] = !0),
                        U(i),
                        p('Failed %s type: %s', t, a.message),
                        U(null));
                  }
              }
            }
            var Ge = Array.isArray;
            function J(e) {
              return Ge(e);
            }
            function Ke(e) {
              {
                var r = typeof Symbol == 'function' && Symbol.toStringTag,
                  t = (r && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
                return t;
              }
            }
            function He(e) {
              try {
                return ye(e), !1;
              } catch {
                return !0;
              }
            }
            function ye(e) {
              return '' + e;
            }
            function me(e) {
              if (He(e))
                return (
                  p(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    Ke(e),
                  ),
                  ye(e)
                );
            }
            var I = j.ReactCurrentOwner,
              Xe = { key: !0, ref: !0, __self: !0, __source: !0 },
              _e,
              Ee,
              G;
            G = {};
            function Ze(e) {
              if (M.call(e, 'ref')) {
                var r = Object.getOwnPropertyDescriptor(e, 'ref').get;
                if (r && r.isReactWarning) return !1;
              }
              return e.ref !== void 0;
            }
            function Qe(e) {
              if (M.call(e, 'key')) {
                var r = Object.getOwnPropertyDescriptor(e, 'key').get;
                if (r && r.isReactWarning) return !1;
              }
              return e.key !== void 0;
            }
            function er(e, r) {
              if (typeof e.ref == 'string' && I.current && r && I.current.stateNode !== r) {
                var t = O(I.current.type);
                G[t] ||
                  (p(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    O(I.current.type),
                    e.ref,
                  ),
                  (G[t] = !0));
              }
            }
            function rr(e, r) {
              {
                var t = function () {
                  _e ||
                    ((_e = !0),
                    p(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ));
                };
                (t.isReactWarning = !0),
                  Object.defineProperty(e, 'key', { get: t, configurable: !0 });
              }
            }
            function tr(e, r) {
              {
                var t = function () {
                  Ee ||
                    ((Ee = !0),
                    p(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ));
                };
                (t.isReactWarning = !0),
                  Object.defineProperty(e, 'ref', { get: t, configurable: !0 });
              }
            }
            var nr = function (e, r, t, n, i, u, o) {
              var a = { $$typeof: R, type: e, key: r, ref: t, props: o, _owner: u };
              return (
                (a._store = {}),
                Object.defineProperty(a._store, 'validated', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: !1,
                }),
                Object.defineProperty(a, '_self', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: n,
                }),
                Object.defineProperty(a, '_source', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: i,
                }),
                Object.freeze && (Object.freeze(a.props), Object.freeze(a)),
                a
              );
            };
            function ar(e, r, t, n, i) {
              {
                var u,
                  o = {},
                  a = null,
                  h = null;
                t !== void 0 && (me(t), (a = '' + t)),
                  Qe(r) && (me(r.key), (a = '' + r.key)),
                  Ze(r) && ((h = r.ref), er(r, i));
                for (u in r) M.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
                if (e && e.defaultProps) {
                  var s = e.defaultProps;
                  for (u in s) o[u] === void 0 && (o[u] = s[u]);
                }
                if (a || h) {
                  var f = typeof e == 'function' ? e.displayName || e.name || 'Unknown' : e;
                  a && rr(o, f), h && tr(o, f);
                }
                return nr(e, a, h, i, n, I.current, o);
              }
            }
            var K = j.ReactCurrentOwner,
              ge = j.ReactDebugCurrentFrame;
            function k(e) {
              if (e) {
                var r = e._owner,
                  t = V(e.type, e._source, r ? r.type : null);
                ge.setExtraStackFrame(t);
              } else ge.setExtraStackFrame(null);
            }
            var H;
            H = !1;
            function X(e) {
              return typeof e == 'object' && e !== null && e.$$typeof === R;
            }
            function Re() {
              {
                if (K.current) {
                  var e = O(K.current.type);
                  if (e)
                    return (
                      `

Check the render method of \`` +
                      e +
                      '`.'
                    );
                }
                return '';
              }
            }
            function or(e) {
              {
                if (e !== void 0) {
                  var r = e.fileName.replace(/^.*[\\\/]/, ''),
                    t = e.lineNumber;
                  return (
                    `

Check your code at ` +
                    r +
                    ':' +
                    t +
                    '.'
                  );
                }
                return '';
              }
            }
            var Te = {};
            function ir(e) {
              {
                var r = Re();
                if (!r) {
                  var t = typeof e == 'string' ? e : e.displayName || e.name;
                  t &&
                    (r =
                      `

Check the top-level render call using <` +
                      t +
                      '>.');
                }
                return r;
              }
            }
            function Oe(e, r) {
              {
                if (!e._store || e._store.validated || e.key != null) return;
                e._store.validated = !0;
                var t = ir(r);
                if (Te[t]) return;
                Te[t] = !0;
                var n = '';
                e &&
                  e._owner &&
                  e._owner !== K.current &&
                  (n = ' It was passed a child from ' + O(e._owner.type) + '.'),
                  k(e),
                  p(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    t,
                    n,
                  ),
                  k(null);
              }
            }
            function we(e, r) {
              {
                if (typeof e != 'object') return;
                if (J(e))
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    X(n) && Oe(n, r);
                  }
                else if (X(e)) e._store && (e._store.validated = !0);
                else if (e) {
                  var i = Fe(e);
                  if (typeof i == 'function' && i !== e.entries)
                    for (var u = i.call(e), o; !(o = u.next()).done; ) X(o.value) && Oe(o.value, r);
                }
              }
            }
            function ur(e) {
              {
                var r = e.type;
                if (r == null || typeof r == 'string') return;
                var t;
                if (typeof r == 'function') t = r.propTypes;
                else if (typeof r == 'object' && (r.$$typeof === l || r.$$typeof === T))
                  t = r.propTypes;
                else return;
                if (t) {
                  var n = O(r);
                  Je(t, e.props, 'prop', n, e);
                } else if (r.PropTypes !== void 0 && !H) {
                  H = !0;
                  var i = O(r);
                  p(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    i || 'Unknown',
                  );
                }
                typeof r.getDefaultProps == 'function' &&
                  !r.getDefaultProps.isReactClassApproved &&
                  p(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
                  );
              }
            }
            function sr(e) {
              {
                for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
                  var n = r[t];
                  if (n !== 'children' && n !== 'key') {
                    k(e),
                      p(
                        'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                        n,
                      ),
                      k(null);
                    break;
                  }
                }
                e.ref !== null &&
                  (k(e), p('Invalid attribute `ref` supplied to `React.Fragment`.'), k(null));
              }
            }
            function Se(e, r, t, n, i, u) {
              {
                var o = Le(e);
                if (!o) {
                  var a = '';
                  (e === void 0 ||
                    (typeof e == 'object' && e !== null && Object.keys(e).length === 0)) &&
                    (a +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var h = or(i);
                  h ? (a += h) : (a += Re());
                  var s;
                  e === null
                    ? (s = 'null')
                    : J(e)
                    ? (s = 'array')
                    : e !== void 0 && e.$$typeof === R
                    ? ((s = '<' + (O(e.type) || 'Unknown') + ' />'),
                      (a = ' Did you accidentally export a JSX literal instead of a component?'))
                    : (s = typeof e),
                    p(
                      'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                      s,
                      a,
                    );
                }
                var f = ar(e, r, t, i, u);
                if (f == null) return f;
                if (o) {
                  var m = r.children;
                  if (m !== void 0)
                    if (n)
                      if (J(m)) {
                        for (var D = 0; D < m.length; D++) we(m[D], e);
                        Object.freeze && Object.freeze(m);
                      } else
                        p(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                        );
                    else we(m, e);
                }
                return e === v ? sr(f) : ur(f), f;
              }
            }
            function fr(e, r, t) {
              return Se(e, r, t, !0);
            }
            function lr(e, r, t) {
              return Se(e, r, t, !1);
            }
            var cr = lr,
              dr = fr;
            (A.Fragment = v), (A.jsx = cr), (A.jsxs = dr);
          })()),
      A
    );
  }
  (function (d) {
    process.env.NODE_ENV === 'production' ? (d.exports = xe()) : (d.exports = je());
  })(ee);
  const ke = ee.exports.jsx;
  return (d) => {
    const {
        children: R,
        size: y = 'middle',
        shape: v = 'round',
        type: _ = 'default',
        className: c,
      } = d,
      E = Pe({ [`btn-shape-${v}`]: v, [`btn-type-${_}`]: _, [`btn-size-${y}`]: y }, c);
    return ke('button', { className: E, children: R });
  };
});
