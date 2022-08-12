(function (m, A) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = A(require('react')))
    : typeof define == 'function' && define.amd
    ? define(['react'], A)
    : ((m = typeof globalThis < 'u' ? globalThis : m || self),
      (m['@winshare/button'] = A(m.React)));
})(this, function (m) {
  'use strict';
  const Q = ((v) => (v && typeof v == 'object' && 'default' in v ? v : { default: v }))(m);
  var U = { exports: {} },
    S = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ee;
  function Se() {
    if (ee) return S;
    ee = 1;
    var v = Q.default,
      j = Symbol.for('react.element'),
      B = Symbol.for('react.fragment'),
      T = Object.prototype.hasOwnProperty,
      I = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      $ = { key: !0, ref: !0, __self: !0, __source: !0 };
    function k(_, l, O) {
      var p,
        b = {},
        E = null,
        W = null;
      O !== void 0 && (E = '' + O),
        l.key !== void 0 && (E = '' + l.key),
        l.ref !== void 0 && (W = l.ref);
      for (p in l) T.call(l, p) && !$.hasOwnProperty(p) && (b[p] = l[p]);
      if (_ && _.defaultProps)
        for (p in ((l = _.defaultProps), l)) b[p] === void 0 && (b[p] = l[p]);
      return { $$typeof: j, type: _, key: E, ref: W, props: b, _owner: I.current };
    }
    return (S.Fragment = B), (S.jsx = k), (S.jsxs = k), S;
  }
  var x = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var re;
  function xe() {
    return (
      re ||
        ((re = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            var v = Q.default,
              j = Symbol.for('react.element'),
              B = Symbol.for('react.portal'),
              T = Symbol.for('react.fragment'),
              I = Symbol.for('react.strict_mode'),
              $ = Symbol.for('react.profiler'),
              k = Symbol.for('react.provider'),
              _ = Symbol.for('react.context'),
              l = Symbol.for('react.forward_ref'),
              O = Symbol.for('react.suspense'),
              p = Symbol.for('react.suspense_list'),
              b = Symbol.for('react.memo'),
              E = Symbol.for('react.lazy'),
              W = Symbol.for('react.offscreen'),
              ne = Symbol.iterator,
              ke = '@@iterator';
            function De(e) {
              if (e === null || typeof e != 'object') return null;
              var r = (ne && e[ne]) || e[ke];
              return typeof r == 'function' ? r : null;
            }
            var C = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function c(e) {
              {
                for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                  t[n - 1] = arguments[n];
                Fe('error', e, t);
              }
            }
            function Fe(e, r, t) {
              {
                var n = C.ReactDebugCurrentFrame,
                  o = n.getStackAddendum();
                o !== '' && ((r += '%s'), (t = t.concat([o])));
                var u = t.map(function (i) {
                  return String(i);
                });
                u.unshift('Warning: ' + r), Function.prototype.apply.call(console[e], console, u);
              }
            }
            var Ae = !1,
              Ie = !1,
              $e = !1,
              We = !1,
              Ye = !1,
              ae;
            ae = Symbol.for('react.module.reference');
            function Le(e) {
              return !!(
                typeof e == 'string' ||
                typeof e == 'function' ||
                e === T ||
                e === $ ||
                Ye ||
                e === I ||
                e === O ||
                e === p ||
                We ||
                e === W ||
                Ae ||
                Ie ||
                $e ||
                (typeof e == 'object' &&
                  e !== null &&
                  (e.$$typeof === E ||
                    e.$$typeof === b ||
                    e.$$typeof === k ||
                    e.$$typeof === _ ||
                    e.$$typeof === l ||
                    e.$$typeof === ae ||
                    e.getModuleId !== void 0))
              );
            }
            function Ne(e, r, t) {
              var n = e.displayName;
              if (n) return n;
              var o = r.displayName || r.name || '';
              return o !== '' ? t + '(' + o + ')' : t;
            }
            function ie(e) {
              return e.displayName || 'Context';
            }
            function g(e) {
              if (e == null) return null;
              if (
                (typeof e.tag == 'number' &&
                  c(
                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                  ),
                typeof e == 'function')
              )
                return e.displayName || e.name || null;
              if (typeof e == 'string') return e;
              switch (e) {
                case T:
                  return 'Fragment';
                case B:
                  return 'Portal';
                case $:
                  return 'Profiler';
                case I:
                  return 'StrictMode';
                case O:
                  return 'Suspense';
                case p:
                  return 'SuspenseList';
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case _:
                    var r = e;
                    return ie(r) + '.Consumer';
                  case k:
                    var t = e;
                    return ie(t._context) + '.Provider';
                  case l:
                    return Ne(e, e.render, 'ForwardRef');
                  case b:
                    var n = e.displayName || null;
                    return n !== null ? n : g(e.type) || 'Memo';
                  case E: {
                    var o = e,
                      u = o._payload,
                      i = o._init;
                    try {
                      return g(i(u));
                    } catch {
                      return null;
                    }
                  }
                }
              return null;
            }
            var R = Object.assign,
              D = 0,
              oe,
              ue,
              se,
              fe,
              le,
              ce,
              de;
            function ve() {}
            ve.__reactDisabledLog = !0;
            function Ve() {
              {
                if (D === 0) {
                  (oe = console.log),
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
                D++;
              }
            }
            function Me() {
              {
                if ((D--, D === 0)) {
                  var e = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: R({}, e, { value: oe }),
                    info: R({}, e, { value: ue }),
                    warn: R({}, e, { value: se }),
                    error: R({}, e, { value: fe }),
                    group: R({}, e, { value: le }),
                    groupCollapsed: R({}, e, { value: ce }),
                    groupEnd: R({}, e, { value: de }),
                  });
                }
                D < 0 &&
                  c('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
              }
            }
            var q = C.ReactCurrentDispatcher,
              J;
            function Y(e, r, t) {
              {
                if (J === void 0)
                  try {
                    throw Error();
                  } catch (o) {
                    var n = o.stack.trim().match(/\n( *(at )?)/);
                    J = (n && n[1]) || '';
                  }
                return (
                  `
` +
                  J +
                  e
                );
              }
            }
            var G = !1,
              L;
            {
              var Ue = typeof WeakMap == 'function' ? WeakMap : Map;
              L = new Ue();
            }
            function pe(e, r) {
              if (!e || G) return '';
              {
                var t = L.get(e);
                if (t !== void 0) return t;
              }
              var n;
              G = !0;
              var o = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var u;
              (u = q.current), (q.current = null), Ve();
              try {
                if (r) {
                  var i = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(i.prototype, 'props', {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == 'object' && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(i, []);
                    } catch (y) {
                      n = y;
                    }
                    Reflect.construct(e, [], i);
                  } else {
                    try {
                      i.call();
                    } catch (y) {
                      n = y;
                    }
                    e.call(i.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (y) {
                    n = y;
                  }
                  e();
                }
              } catch (y) {
                if (y && n && typeof y.stack == 'string') {
                  for (
                    var a = y.stack.split(`
`),
                      d = n.stack.split(`
`),
                      s = a.length - 1,
                      f = d.length - 1;
                    s >= 1 && f >= 0 && a[s] !== d[f];

                  )
                    f--;
                  for (; s >= 1 && f >= 0; s--, f--)
                    if (a[s] !== d[f]) {
                      if (s !== 1 || f !== 1)
                        do
                          if ((s--, f--, f < 0 || a[s] !== d[f])) {
                            var h =
                              `
` + a[s].replace(' at new ', ' at ');
                            return (
                              e.displayName &&
                                h.includes('<anonymous>') &&
                                (h = h.replace('<anonymous>', e.displayName)),
                              typeof e == 'function' && L.set(e, h),
                              h
                            );
                          }
                        while (s >= 1 && f >= 0);
                      break;
                    }
                }
              } finally {
                (G = !1), (q.current = u), Me(), (Error.prepareStackTrace = o);
              }
              var P = e ? e.displayName || e.name : '',
                Pe = P ? Y(P) : '';
              return typeof e == 'function' && L.set(e, Pe), Pe;
            }
            function Be(e, r, t) {
              return pe(e, !1);
            }
            function qe(e) {
              var r = e.prototype;
              return !!(r && r.isReactComponent);
            }
            function N(e, r, t) {
              if (e == null) return '';
              if (typeof e == 'function') return pe(e, qe(e));
              if (typeof e == 'string') return Y(e);
              switch (e) {
                case O:
                  return Y('Suspense');
                case p:
                  return Y('SuspenseList');
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case l:
                    return Be(e.render);
                  case b:
                    return N(e.type, r, t);
                  case E: {
                    var n = e,
                      o = n._payload,
                      u = n._init;
                    try {
                      return N(u(o), r, t);
                    } catch {}
                  }
                }
              return '';
            }
            var V = Object.prototype.hasOwnProperty,
              he = {},
              be = C.ReactDebugCurrentFrame;
            function M(e) {
              if (e) {
                var r = e._owner,
                  t = N(e.type, e._source, r ? r.type : null);
                be.setExtraStackFrame(t);
              } else be.setExtraStackFrame(null);
            }
            function Je(e, r, t, n, o) {
              {
                var u = Function.call.bind(V);
                for (var i in e)
                  if (u(e, i)) {
                    var a = void 0;
                    try {
                      if (typeof e[i] != 'function') {
                        var d = Error(
                          (n || 'React class') +
                            ': ' +
                            t +
                            ' type `' +
                            i +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof e[i] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                        );
                        throw ((d.name = 'Invariant Violation'), d);
                      }
                      a = e[i](r, i, n, t, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                    } catch (s) {
                      a = s;
                    }
                    a &&
                      !(a instanceof Error) &&
                      (M(o),
                      c(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        n || 'React class',
                        t,
                        i,
                        typeof a,
                      ),
                      M(null)),
                      a instanceof Error &&
                        !(a.message in he) &&
                        ((he[a.message] = !0),
                        M(o),
                        c('Failed %s type: %s', t, a.message),
                        M(null));
                  }
              }
            }
            var Ge = Array.isArray;
            function z(e) {
              return Ge(e);
            }
            function ze(e) {
              {
                var r = typeof Symbol == 'function' && Symbol.toStringTag,
                  t = (r && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
                return t;
              }
            }
            function Ke(e) {
              try {
                return ge(e), !1;
              } catch {
                return !0;
              }
            }
            function ge(e) {
              return '' + e;
            }
            function ye(e) {
              if (Ke(e))
                return (
                  c(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    ze(e),
                  ),
                  ge(e)
                );
            }
            var F = C.ReactCurrentOwner,
              He = { key: !0, ref: !0, __self: !0, __source: !0 },
              _e,
              Ee,
              K;
            K = {};
            function Xe(e) {
              if (V.call(e, 'ref')) {
                var r = Object.getOwnPropertyDescriptor(e, 'ref').get;
                if (r && r.isReactWarning) return !1;
              }
              return e.ref !== void 0;
            }
            function Ze(e) {
              if (V.call(e, 'key')) {
                var r = Object.getOwnPropertyDescriptor(e, 'key').get;
                if (r && r.isReactWarning) return !1;
              }
              return e.key !== void 0;
            }
            function Qe(e, r) {
              if (typeof e.ref == 'string' && F.current && r && F.current.stateNode !== r) {
                var t = g(F.current.type);
                K[t] ||
                  (c(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    g(F.current.type),
                    e.ref,
                  ),
                  (K[t] = !0));
              }
            }
            function er(e, r) {
              {
                var t = function () {
                  _e ||
                    ((_e = !0),
                    c(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ));
                };
                (t.isReactWarning = !0),
                  Object.defineProperty(e, 'key', { get: t, configurable: !0 });
              }
            }
            function rr(e, r) {
              {
                var t = function () {
                  Ee ||
                    ((Ee = !0),
                    c(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ));
                };
                (t.isReactWarning = !0),
                  Object.defineProperty(e, 'ref', { get: t, configurable: !0 });
              }
            }
            var tr = function (e, r, t, n, o, u, i) {
              var a = { $$typeof: j, type: e, key: r, ref: t, props: i, _owner: u };
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
                  value: o,
                }),
                Object.freeze && (Object.freeze(a.props), Object.freeze(a)),
                a
              );
            };
            function nr(e, r, t, n, o) {
              {
                var u,
                  i = {},
                  a = null,
                  d = null;
                t !== void 0 && (ye(t), (a = '' + t)),
                  Ze(r) && (ye(r.key), (a = '' + r.key)),
                  Xe(r) && ((d = r.ref), Qe(r, o));
                for (u in r) V.call(r, u) && !He.hasOwnProperty(u) && (i[u] = r[u]);
                if (e && e.defaultProps) {
                  var s = e.defaultProps;
                  for (u in s) i[u] === void 0 && (i[u] = s[u]);
                }
                if (a || d) {
                  var f = typeof e == 'function' ? e.displayName || e.name || 'Unknown' : e;
                  a && er(i, f), d && rr(i, f);
                }
                return tr(e, a, d, o, n, F.current, i);
              }
            }
            var H = C.ReactCurrentOwner,
              Re = C.ReactDebugCurrentFrame;
            function w(e) {
              if (e) {
                var r = e._owner,
                  t = N(e.type, e._source, r ? r.type : null);
                Re.setExtraStackFrame(t);
              } else Re.setExtraStackFrame(null);
            }
            var X;
            X = !1;
            function Z(e) {
              return typeof e == 'object' && e !== null && e.$$typeof === j;
            }
            function me() {
              {
                if (H.current) {
                  var e = g(H.current.type);
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
            function ar(e) {
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
                var r = me();
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
                  e._owner !== H.current &&
                  (n = ' It was passed a child from ' + g(e._owner.type) + '.'),
                  w(e),
                  c(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    t,
                    n,
                  ),
                  w(null);
              }
            }
            function Ce(e, r) {
              {
                if (typeof e != 'object') return;
                if (z(e))
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    Z(n) && Oe(n, r);
                  }
                else if (Z(e)) e._store && (e._store.validated = !0);
                else if (e) {
                  var o = De(e);
                  if (typeof o == 'function' && o !== e.entries)
                    for (var u = o.call(e), i; !(i = u.next()).done; ) Z(i.value) && Oe(i.value, r);
                }
              }
            }
            function or(e) {
              {
                var r = e.type;
                if (r == null || typeof r == 'string') return;
                var t;
                if (typeof r == 'function') t = r.propTypes;
                else if (typeof r == 'object' && (r.$$typeof === l || r.$$typeof === b))
                  t = r.propTypes;
                else return;
                if (t) {
                  var n = g(r);
                  Je(t, e.props, 'prop', n, e);
                } else if (r.PropTypes !== void 0 && !X) {
                  X = !0;
                  var o = g(r);
                  c(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    o || 'Unknown',
                  );
                }
                typeof r.getDefaultProps == 'function' &&
                  !r.getDefaultProps.isReactClassApproved &&
                  c(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
                  );
              }
            }
            function ur(e) {
              {
                for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
                  var n = r[t];
                  if (n !== 'children' && n !== 'key') {
                    w(e),
                      c(
                        'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                        n,
                      ),
                      w(null);
                    break;
                  }
                }
                e.ref !== null &&
                  (w(e), c('Invalid attribute `ref` supplied to `React.Fragment`.'), w(null));
              }
            }
            function we(e, r, t, n, o, u) {
              {
                var i = Le(e);
                if (!i) {
                  var a = '';
                  (e === void 0 ||
                    (typeof e == 'object' && e !== null && Object.keys(e).length === 0)) &&
                    (a +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var d = ar(o);
                  d ? (a += d) : (a += me());
                  var s;
                  e === null
                    ? (s = 'null')
                    : z(e)
                    ? (s = 'array')
                    : e !== void 0 && e.$$typeof === j
                    ? ((s = '<' + (g(e.type) || 'Unknown') + ' />'),
                      (a = ' Did you accidentally export a JSX literal instead of a component?'))
                    : (s = typeof e),
                    c(
                      'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                      s,
                      a,
                    );
                }
                var f = nr(e, r, t, o, u);
                if (f == null) return f;
                if (i) {
                  var h = r.children;
                  if (h !== void 0)
                    if (n)
                      if (z(h)) {
                        for (var P = 0; P < h.length; P++) Ce(h[P], e);
                        Object.freeze && Object.freeze(h);
                      } else
                        c(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                        );
                    else Ce(h, e);
                }
                return e === T ? ur(f) : or(f), f;
              }
            }
            function sr(e, r, t) {
              return we(e, r, t, !0);
            }
            function fr(e, r, t) {
              return we(e, r, t, !1);
            }
            var lr = fr,
              cr = sr;
            (x.Fragment = T), (x.jsx = lr), (x.jsxs = cr);
          })()),
      x
    );
  }
  (function (v) {
    process.env.NODE_ENV === 'production' ? (v.exports = Se()) : (v.exports = xe());
  })(U);
  const te = U.exports.jsx,
    je = U.exports.jsxs;
  return ({ text: v }) =>
    je('div', {
      children: [te('p', { children: '\u6D4B\u8BD5\u6309\u94AE' }), te('button', { children: v })],
    });
});
