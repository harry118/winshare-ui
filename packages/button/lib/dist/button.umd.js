(function (m, A) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = A(require('react')))
    : typeof define == 'function' && define.amd
    ? define(['react'], A)
    : ((m = typeof globalThis < 'u' ? globalThis : m || self),
      (m['@winshare/button'] = A(m.React)));
})(this, function (m) {
  'use strict';
  const Z = ((v) => (v && typeof v == 'object' && 'default' in v ? v : { default: v }))(m);
  var Q = { exports: {} },
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
  function Pe() {
    if (ee) return S;
    ee = 1;
    var v = Z.default,
      j = Symbol.for('react.element'),
      U = Symbol.for('react.fragment'),
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
    return (S.Fragment = U), (S.jsx = k), (S.jsxs = k), S;
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
  function Se() {
    return (
      re ||
        ((re = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            var v = Z.default,
              j = Symbol.for('react.element'),
              U = Symbol.for('react.portal'),
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
              te = Symbol.iterator,
              je = '@@iterator';
            function ke(e) {
              if (e === null || typeof e != 'object') return null;
              var r = (te && e[te]) || e[je];
              return typeof r == 'function' ? r : null;
            }
            var C = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function c(e) {
              {
                for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                  t[n - 1] = arguments[n];
                De('error', e, t);
              }
            }
            function De(e, r, t) {
              {
                var n = C.ReactDebugCurrentFrame,
                  i = n.getStackAddendum();
                i !== '' && ((r += '%s'), (t = t.concat([i])));
                var u = t.map(function (o) {
                  return String(o);
                });
                u.unshift('Warning: ' + r), Function.prototype.apply.call(console[e], console, u);
              }
            }
            var Fe = !1,
              Ae = !1,
              Ie = !1,
              $e = !1,
              We = !1,
              ne;
            ne = Symbol.for('react.module.reference');
            function Ye(e) {
              return !!(
                typeof e == 'string' ||
                typeof e == 'function' ||
                e === T ||
                e === $ ||
                We ||
                e === I ||
                e === O ||
                e === p ||
                $e ||
                e === W ||
                Fe ||
                Ae ||
                Ie ||
                (typeof e == 'object' &&
                  e !== null &&
                  (e.$$typeof === E ||
                    e.$$typeof === b ||
                    e.$$typeof === k ||
                    e.$$typeof === _ ||
                    e.$$typeof === l ||
                    e.$$typeof === ne ||
                    e.getModuleId !== void 0))
              );
            }
            function Le(e, r, t) {
              var n = e.displayName;
              if (n) return n;
              var i = r.displayName || r.name || '';
              return i !== '' ? t + '(' + i + ')' : t;
            }
            function ae(e) {
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
                case U:
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
                    return ae(r) + '.Consumer';
                  case k:
                    var t = e;
                    return ae(t._context) + '.Provider';
                  case l:
                    return Le(e, e.render, 'ForwardRef');
                  case b:
                    var n = e.displayName || null;
                    return n !== null ? n : g(e.type) || 'Memo';
                  case E: {
                    var i = e,
                      u = i._payload,
                      o = i._init;
                    try {
                      return g(o(u));
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
              ie,
              ue,
              se,
              fe,
              le,
              ce;
            function de() {}
            de.__reactDisabledLog = !0;
            function Ne() {
              {
                if (D === 0) {
                  (oe = console.log),
                    (ie = console.info),
                    (ue = console.warn),
                    (se = console.error),
                    (fe = console.group),
                    (le = console.groupCollapsed),
                    (ce = console.groupEnd);
                  var e = { configurable: !0, enumerable: !0, value: de, writable: !0 };
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
            function Ve() {
              {
                if ((D--, D === 0)) {
                  var e = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: R({}, e, { value: oe }),
                    info: R({}, e, { value: ie }),
                    warn: R({}, e, { value: ue }),
                    error: R({}, e, { value: se }),
                    group: R({}, e, { value: fe }),
                    groupCollapsed: R({}, e, { value: le }),
                    groupEnd: R({}, e, { value: ce }),
                  });
                }
                D < 0 &&
                  c('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
              }
            }
            var B = C.ReactCurrentDispatcher,
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
            var J = !1,
              L;
            {
              var Me = typeof WeakMap == 'function' ? WeakMap : Map;
              L = new Me();
            }
            function ve(e, r) {
              if (!e || J) return '';
              {
                var t = L.get(e);
                if (t !== void 0) return t;
              }
              var n;
              J = !0;
              var i = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var u;
              (u = B.current), (B.current = null), Ne();
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
                    } catch (y) {
                      n = y;
                    }
                    Reflect.construct(e, [], o);
                  } else {
                    try {
                      o.call();
                    } catch (y) {
                      n = y;
                    }
                    e.call(o.prototype);
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
                (J = !1), (B.current = u), Ve(), (Error.prepareStackTrace = i);
              }
              var P = e ? e.displayName || e.name : '',
                we = P ? Y(P) : '';
              return typeof e == 'function' && L.set(e, we), we;
            }
            function Ue(e, r, t) {
              return ve(e, !1);
            }
            function Be(e) {
              var r = e.prototype;
              return !!(r && r.isReactComponent);
            }
            function N(e, r, t) {
              if (e == null) return '';
              if (typeof e == 'function') return ve(e, Be(e));
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
                    return Ue(e.render);
                  case b:
                    return N(e.type, r, t);
                  case E: {
                    var n = e,
                      i = n._payload,
                      u = n._init;
                    try {
                      return N(u(i), r, t);
                    } catch {}
                  }
                }
              return '';
            }
            var V = Object.prototype.hasOwnProperty,
              pe = {},
              he = C.ReactDebugCurrentFrame;
            function M(e) {
              if (e) {
                var r = e._owner,
                  t = N(e.type, e._source, r ? r.type : null);
                he.setExtraStackFrame(t);
              } else he.setExtraStackFrame(null);
            }
            function qe(e, r, t, n, i) {
              {
                var u = Function.call.bind(V);
                for (var o in e)
                  if (u(e, o)) {
                    var a = void 0;
                    try {
                      if (typeof e[o] != 'function') {
                        var d = Error(
                          (n || 'React class') +
                            ': ' +
                            t +
                            ' type `' +
                            o +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof e[o] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                        );
                        throw ((d.name = 'Invariant Violation'), d);
                      }
                      a = e[o](r, o, n, t, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                    } catch (s) {
                      a = s;
                    }
                    a &&
                      !(a instanceof Error) &&
                      (M(i),
                      c(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        n || 'React class',
                        t,
                        o,
                        typeof a,
                      ),
                      M(null)),
                      a instanceof Error &&
                        !(a.message in pe) &&
                        ((pe[a.message] = !0),
                        M(i),
                        c('Failed %s type: %s', t, a.message),
                        M(null));
                  }
              }
            }
            var Je = Array.isArray;
            function G(e) {
              return Je(e);
            }
            function Ge(e) {
              {
                var r = typeof Symbol == 'function' && Symbol.toStringTag,
                  t = (r && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
                return t;
              }
            }
            function ze(e) {
              try {
                return be(e), !1;
              } catch {
                return !0;
              }
            }
            function be(e) {
              return '' + e;
            }
            function ge(e) {
              if (ze(e))
                return (
                  c(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    Ge(e),
                  ),
                  be(e)
                );
            }
            var F = C.ReactCurrentOwner,
              Ke = { key: !0, ref: !0, __self: !0, __source: !0 },
              ye,
              _e,
              z;
            z = {};
            function He(e) {
              if (V.call(e, 'ref')) {
                var r = Object.getOwnPropertyDescriptor(e, 'ref').get;
                if (r && r.isReactWarning) return !1;
              }
              return e.ref !== void 0;
            }
            function Xe(e) {
              if (V.call(e, 'key')) {
                var r = Object.getOwnPropertyDescriptor(e, 'key').get;
                if (r && r.isReactWarning) return !1;
              }
              return e.key !== void 0;
            }
            function Ze(e, r) {
              if (typeof e.ref == 'string' && F.current && r && F.current.stateNode !== r) {
                var t = g(F.current.type);
                z[t] ||
                  (c(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    g(F.current.type),
                    e.ref,
                  ),
                  (z[t] = !0));
              }
            }
            function Qe(e, r) {
              {
                var t = function () {
                  ye ||
                    ((ye = !0),
                    c(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ));
                };
                (t.isReactWarning = !0),
                  Object.defineProperty(e, 'key', { get: t, configurable: !0 });
              }
            }
            function er(e, r) {
              {
                var t = function () {
                  _e ||
                    ((_e = !0),
                    c(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ));
                };
                (t.isReactWarning = !0),
                  Object.defineProperty(e, 'ref', { get: t, configurable: !0 });
              }
            }
            var rr = function (e, r, t, n, i, u, o) {
              var a = { $$typeof: j, type: e, key: r, ref: t, props: o, _owner: u };
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
            function tr(e, r, t, n, i) {
              {
                var u,
                  o = {},
                  a = null,
                  d = null;
                t !== void 0 && (ge(t), (a = '' + t)),
                  Xe(r) && (ge(r.key), (a = '' + r.key)),
                  He(r) && ((d = r.ref), Ze(r, i));
                for (u in r) V.call(r, u) && !Ke.hasOwnProperty(u) && (o[u] = r[u]);
                if (e && e.defaultProps) {
                  var s = e.defaultProps;
                  for (u in s) o[u] === void 0 && (o[u] = s[u]);
                }
                if (a || d) {
                  var f = typeof e == 'function' ? e.displayName || e.name || 'Unknown' : e;
                  a && Qe(o, f), d && er(o, f);
                }
                return rr(e, a, d, i, n, F.current, o);
              }
            }
            var K = C.ReactCurrentOwner,
              Ee = C.ReactDebugCurrentFrame;
            function w(e) {
              if (e) {
                var r = e._owner,
                  t = N(e.type, e._source, r ? r.type : null);
                Ee.setExtraStackFrame(t);
              } else Ee.setExtraStackFrame(null);
            }
            var H;
            H = !1;
            function X(e) {
              return typeof e == 'object' && e !== null && e.$$typeof === j;
            }
            function Re() {
              {
                if (K.current) {
                  var e = g(K.current.type);
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
            function nr(e) {
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
            var me = {};
            function ar(e) {
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
            function Te(e, r) {
              {
                if (!e._store || e._store.validated || e.key != null) return;
                e._store.validated = !0;
                var t = ar(r);
                if (me[t]) return;
                me[t] = !0;
                var n = '';
                e &&
                  e._owner &&
                  e._owner !== K.current &&
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
            function Oe(e, r) {
              {
                if (typeof e != 'object') return;
                if (G(e))
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    X(n) && Te(n, r);
                  }
                else if (X(e)) e._store && (e._store.validated = !0);
                else if (e) {
                  var i = ke(e);
                  if (typeof i == 'function' && i !== e.entries)
                    for (var u = i.call(e), o; !(o = u.next()).done; ) X(o.value) && Te(o.value, r);
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
                  qe(t, e.props, 'prop', n, e);
                } else if (r.PropTypes !== void 0 && !H) {
                  H = !0;
                  var i = g(r);
                  c(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    i || 'Unknown',
                  );
                }
                typeof r.getDefaultProps == 'function' &&
                  !r.getDefaultProps.isReactClassApproved &&
                  c(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
                  );
              }
            }
            function ir(e) {
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
            function Ce(e, r, t, n, i, u) {
              {
                var o = Ye(e);
                if (!o) {
                  var a = '';
                  (e === void 0 ||
                    (typeof e == 'object' && e !== null && Object.keys(e).length === 0)) &&
                    (a +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var d = nr(i);
                  d ? (a += d) : (a += Re());
                  var s;
                  e === null
                    ? (s = 'null')
                    : G(e)
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
                var f = tr(e, r, t, i, u);
                if (f == null) return f;
                if (o) {
                  var h = r.children;
                  if (h !== void 0)
                    if (n)
                      if (G(h)) {
                        for (var P = 0; P < h.length; P++) Oe(h[P], e);
                        Object.freeze && Object.freeze(h);
                      } else
                        c(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                        );
                    else Oe(h, e);
                }
                return e === T ? ir(f) : or(f), f;
              }
            }
            function ur(e, r, t) {
              return Ce(e, r, t, !0);
            }
            function sr(e, r, t) {
              return Ce(e, r, t, !1);
            }
            var fr = sr,
              lr = ur;
            (x.Fragment = T), (x.jsx = fr), (x.jsxs = lr);
          })()),
      x
    );
  }
  (function (v) {
    process.env.NODE_ENV === 'production' ? (v.exports = Pe()) : (v.exports = Se());
  })(Q);
  const xe = Q.exports.jsx;
  return ({ text: v }) => xe('button', { children: v });
});
