import Te from 'react';
var Oe = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function (y) {
  (function () {
    var R = {}.hasOwnProperty;
    function b() {
      for (var v = [], E = 0; E < arguments.length; E++) {
        var c = arguments[E];
        if (!!c) {
          var g = typeof c;
          if (g === 'string' || g === 'number') v.push(c);
          else if (Array.isArray(c)) {
            if (c.length) {
              var _ = b.apply(null, c);
              _ && v.push(_);
            }
          } else if (g === 'object')
            if (c.toString === Object.prototype.toString)
              for (var l in c) R.call(c, l) && c[l] && v.push(l);
            else v.push(c.toString());
        }
      }
      return v.join(' ');
    }
    y.exports ? ((b.default = b), (y.exports = b)) : (window.classNames = b);
  })();
})(Oe);
const ur = Oe.exports;
var we = { exports: {} },
  A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function sr() {
  if (_e) return A;
  _e = 1;
  var y = Te,
    R = Symbol.for('react.element'),
    b = Symbol.for('react.fragment'),
    v = Object.prototype.hasOwnProperty,
    E = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(_, l, P) {
    var h,
      T = {},
      S = null,
      I = null;
    P !== void 0 && (S = '' + P),
      l.key !== void 0 && (S = '' + l.key),
      l.ref !== void 0 && (I = l.ref);
    for (h in l) v.call(l, h) && !c.hasOwnProperty(h) && (T[h] = l[h]);
    if (_ && _.defaultProps) for (h in ((l = _.defaultProps), l)) T[h] === void 0 && (T[h] = l[h]);
    return { $$typeof: R, type: _, key: S, ref: I, props: T, _owner: E.current };
  }
  return (A.Fragment = b), (A.jsx = g), (A.jsxs = g), A;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function fr() {
  return (
    Re ||
      ((Re = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          var y = Te,
            R = Symbol.for('react.element'),
            b = Symbol.for('react.portal'),
            v = Symbol.for('react.fragment'),
            E = Symbol.for('react.strict_mode'),
            c = Symbol.for('react.profiler'),
            g = Symbol.for('react.provider'),
            _ = Symbol.for('react.context'),
            l = Symbol.for('react.forward_ref'),
            P = Symbol.for('react.suspense'),
            h = Symbol.for('react.suspense_list'),
            T = Symbol.for('react.memo'),
            S = Symbol.for('react.lazy'),
            I = Symbol.for('react.offscreen'),
            H = Symbol.iterator,
            Se = '@@iterator';
          function Ce(e) {
            if (e === null || typeof e != 'object') return null;
            var r = (H && e[H]) || e[Se];
            return typeof r == 'function' ? r : null;
          }
          var x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function d(e) {
            {
              for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                t[n - 1] = arguments[n];
              Pe('error', e, t);
            }
          }
          function Pe(e, r, t) {
            {
              var n = x.ReactDebugCurrentFrame,
                i = n.getStackAddendum();
              i !== '' && ((r += '%s'), (t = t.concat([i])));
              var u = t.map(function (o) {
                return String(o);
              });
              u.unshift('Warning: ' + r), Function.prototype.apply.call(console[e], console, u);
            }
          }
          var xe = !1,
            je = !1,
            ke = !1,
            De = !1,
            Fe = !1,
            X;
          X = Symbol.for('react.module.reference');
          function Ae(e) {
            return !!(
              typeof e == 'string' ||
              typeof e == 'function' ||
              e === v ||
              e === c ||
              Fe ||
              e === E ||
              e === P ||
              e === h ||
              De ||
              e === I ||
              xe ||
              je ||
              ke ||
              (typeof e == 'object' &&
                e !== null &&
                (e.$$typeof === S ||
                  e.$$typeof === T ||
                  e.$$typeof === g ||
                  e.$$typeof === _ ||
                  e.$$typeof === l ||
                  e.$$typeof === X ||
                  e.getModuleId !== void 0))
            );
          }
          function $e(e, r, t) {
            var n = e.displayName;
            if (n) return n;
            var i = r.displayName || r.name || '';
            return i !== '' ? t + '(' + i + ')' : t;
          }
          function Z(e) {
            return e.displayName || 'Context';
          }
          function O(e) {
            if (e == null) return null;
            if (
              (typeof e.tag == 'number' &&
                d(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                ),
              typeof e == 'function')
            )
              return e.displayName || e.name || null;
            if (typeof e == 'string') return e;
            switch (e) {
              case v:
                return 'Fragment';
              case b:
                return 'Portal';
              case c:
                return 'Profiler';
              case E:
                return 'StrictMode';
              case P:
                return 'Suspense';
              case h:
                return 'SuspenseList';
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case _:
                  var r = e;
                  return Z(r) + '.Consumer';
                case g:
                  var t = e;
                  return Z(t._context) + '.Provider';
                case l:
                  return $e(e, e.render, 'ForwardRef');
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
            D = 0,
            Q,
            ee,
            re,
            te,
            ne,
            ae,
            oe;
          function ie() {}
          ie.__reactDisabledLog = !0;
          function Ie() {
            {
              if (D === 0) {
                (Q = console.log),
                  (ee = console.info),
                  (re = console.warn),
                  (te = console.error),
                  (ne = console.group),
                  (ae = console.groupCollapsed),
                  (oe = console.groupEnd);
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  value: ie,
                  writable: !0,
                };
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
          function We() {
            {
              if ((D--, D === 0)) {
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: C({}, e, {
                    value: Q,
                  }),
                  info: C({}, e, {
                    value: ee,
                  }),
                  warn: C({}, e, {
                    value: re,
                  }),
                  error: C({}, e, {
                    value: te,
                  }),
                  group: C({}, e, {
                    value: ne,
                  }),
                  groupCollapsed: C({}, e, {
                    value: ae,
                  }),
                  groupEnd: C({}, e, {
                    value: oe,
                  }),
                });
              }
              D < 0 &&
                d('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
            }
          }
          var M = x.ReactCurrentDispatcher,
            U;
          function W(e, r, t) {
            {
              if (U === void 0)
                try {
                  throw Error();
                } catch (i) {
                  var n = i.stack.trim().match(/\n( *(at )?)/);
                  U = (n && n[1]) || '';
                }
              return (
                `
` +
                U +
                e
              );
            }
          }
          var B = !1,
            N;
          {
            var Ne = typeof WeakMap == 'function' ? WeakMap : Map;
            N = new Ne();
          }
          function ue(e, r) {
            if (!e || B) return '';
            {
              var t = N.get(e);
              if (t !== void 0) return t;
            }
            var n;
            B = !0;
            var i = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var u;
            (u = M.current), (M.current = null), Ie();
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
                    p = n.stack.split(`
`),
                    s = a.length - 1,
                    f = p.length - 1;
                  s >= 1 && f >= 0 && a[s] !== p[f];

                )
                  f--;
                for (; s >= 1 && f >= 0; s--, f--)
                  if (a[s] !== p[f]) {
                    if (s !== 1 || f !== 1)
                      do
                        if ((s--, f--, f < 0 || a[s] !== p[f])) {
                          var m =
                            `
` + a[s].replace(' at new ', ' at ');
                          return (
                            e.displayName &&
                              m.includes('<anonymous>') &&
                              (m = m.replace('<anonymous>', e.displayName)),
                            typeof e == 'function' && N.set(e, m),
                            m
                          );
                        }
                      while (s >= 1 && f >= 0);
                    break;
                  }
              }
            } finally {
              (B = !1), (M.current = u), We(), (Error.prepareStackTrace = i);
            }
            var k = e ? e.displayName || e.name : '',
              ge = k ? W(k) : '';
            return typeof e == 'function' && N.set(e, ge), ge;
          }
          function Ye(e, r, t) {
            return ue(e, !1);
          }
          function Le(e) {
            var r = e.prototype;
            return !!(r && r.isReactComponent);
          }
          function Y(e, r, t) {
            if (e == null) return '';
            if (typeof e == 'function') return ue(e, Le(e));
            if (typeof e == 'string') return W(e);
            switch (e) {
              case P:
                return W('Suspense');
              case h:
                return W('SuspenseList');
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case l:
                  return Ye(e.render);
                case T:
                  return Y(e.type, r, t);
                case S: {
                  var n = e,
                    i = n._payload,
                    u = n._init;
                  try {
                    return Y(u(i), r, t);
                  } catch {}
                }
              }
            return '';
          }
          var L = Object.prototype.hasOwnProperty,
            se = {},
            fe = x.ReactDebugCurrentFrame;
          function V(e) {
            if (e) {
              var r = e._owner,
                t = Y(e.type, e._source, r ? r.type : null);
              fe.setExtraStackFrame(t);
            } else fe.setExtraStackFrame(null);
          }
          function Ve(e, r, t, n, i) {
            {
              var u = Function.call.bind(L);
              for (var o in e)
                if (u(e, o)) {
                  var a = void 0;
                  try {
                    if (typeof e[o] != 'function') {
                      var p = Error(
                        (n || 'React class') +
                          ': ' +
                          t +
                          ' type `' +
                          o +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof e[o] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                      );
                      throw ((p.name = 'Invariant Violation'), p);
                    }
                    a = e[o](r, o, n, t, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                  } catch (s) {
                    a = s;
                  }
                  a &&
                    !(a instanceof Error) &&
                    (V(i),
                    d(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      n || 'React class',
                      t,
                      o,
                      typeof a,
                    ),
                    V(null)),
                    a instanceof Error &&
                      !(a.message in se) &&
                      ((se[a.message] = !0), V(i), d('Failed %s type: %s', t, a.message), V(null));
                }
            }
          }
          var Me = Array.isArray;
          function q(e) {
            return Me(e);
          }
          function Ue(e) {
            {
              var r = typeof Symbol == 'function' && Symbol.toStringTag,
                t = (r && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
              return t;
            }
          }
          function Be(e) {
            try {
              return le(e), !1;
            } catch {
              return !0;
            }
          }
          function le(e) {
            return '' + e;
          }
          function ce(e) {
            if (Be(e))
              return (
                d(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  Ue(e),
                ),
                le(e)
              );
          }
          var F = x.ReactCurrentOwner,
            qe = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            ve,
            de,
            z;
          z = {};
          function ze(e) {
            if (L.call(e, 'ref')) {
              var r = Object.getOwnPropertyDescriptor(e, 'ref').get;
              if (r && r.isReactWarning) return !1;
            }
            return e.ref !== void 0;
          }
          function Je(e) {
            if (L.call(e, 'key')) {
              var r = Object.getOwnPropertyDescriptor(e, 'key').get;
              if (r && r.isReactWarning) return !1;
            }
            return e.key !== void 0;
          }
          function Ge(e, r) {
            if (typeof e.ref == 'string' && F.current && r && F.current.stateNode !== r) {
              var t = O(F.current.type);
              z[t] ||
                (d(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  O(F.current.type),
                  e.ref,
                ),
                (z[t] = !0));
            }
          }
          function Ke(e, r) {
            {
              var t = function () {
                ve ||
                  ((ve = !0),
                  d(
                    '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    r,
                  ));
              };
              (t.isReactWarning = !0),
                Object.defineProperty(e, 'key', {
                  get: t,
                  configurable: !0,
                });
            }
          }
          function He(e, r) {
            {
              var t = function () {
                de ||
                  ((de = !0),
                  d(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    r,
                  ));
              };
              (t.isReactWarning = !0),
                Object.defineProperty(e, 'ref', {
                  get: t,
                  configurable: !0,
                });
            }
          }
          var Xe = function (e, r, t, n, i, u, o) {
            var a = {
              $$typeof: R,
              type: e,
              key: r,
              ref: t,
              props: o,
              _owner: u,
            };
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
          function Ze(e, r, t, n, i) {
            {
              var u,
                o = {},
                a = null,
                p = null;
              t !== void 0 && (ce(t), (a = '' + t)),
                Je(r) && (ce(r.key), (a = '' + r.key)),
                ze(r) && ((p = r.ref), Ge(r, i));
              for (u in r) L.call(r, u) && !qe.hasOwnProperty(u) && (o[u] = r[u]);
              if (e && e.defaultProps) {
                var s = e.defaultProps;
                for (u in s) o[u] === void 0 && (o[u] = s[u]);
              }
              if (a || p) {
                var f = typeof e == 'function' ? e.displayName || e.name || 'Unknown' : e;
                a && Ke(o, f), p && He(o, f);
              }
              return Xe(e, a, p, i, n, F.current, o);
            }
          }
          var J = x.ReactCurrentOwner,
            pe = x.ReactDebugCurrentFrame;
          function j(e) {
            if (e) {
              var r = e._owner,
                t = Y(e.type, e._source, r ? r.type : null);
              pe.setExtraStackFrame(t);
            } else pe.setExtraStackFrame(null);
          }
          var G;
          G = !1;
          function K(e) {
            return typeof e == 'object' && e !== null && e.$$typeof === R;
          }
          function he() {
            {
              if (J.current) {
                var e = O(J.current.type);
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
          function Qe(e) {
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
          var be = {};
          function er(e) {
            {
              var r = he();
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
          function me(e, r) {
            {
              if (!e._store || e._store.validated || e.key != null) return;
              e._store.validated = !0;
              var t = er(r);
              if (be[t]) return;
              be[t] = !0;
              var n = '';
              e &&
                e._owner &&
                e._owner !== J.current &&
                (n = ' It was passed a child from ' + O(e._owner.type) + '.'),
                j(e),
                d(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  t,
                  n,
                ),
                j(null);
            }
          }
          function ye(e, r) {
            {
              if (typeof e != 'object') return;
              if (q(e))
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  K(n) && me(n, r);
                }
              else if (K(e)) e._store && (e._store.validated = !0);
              else if (e) {
                var i = Ce(e);
                if (typeof i == 'function' && i !== e.entries)
                  for (var u = i.call(e), o; !(o = u.next()).done; ) K(o.value) && me(o.value, r);
              }
            }
          }
          function rr(e) {
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
                Ve(t, e.props, 'prop', n, e);
              } else if (r.PropTypes !== void 0 && !G) {
                G = !0;
                var i = O(r);
                d(
                  'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                  i || 'Unknown',
                );
              }
              typeof r.getDefaultProps == 'function' &&
                !r.getDefaultProps.isReactClassApproved &&
                d(
                  'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
                );
            }
          }
          function tr(e) {
            {
              for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
                var n = r[t];
                if (n !== 'children' && n !== 'key') {
                  j(e),
                    d(
                      'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                      n,
                    ),
                    j(null);
                  break;
                }
              }
              e.ref !== null &&
                (j(e), d('Invalid attribute `ref` supplied to `React.Fragment`.'), j(null));
            }
          }
          function Ee(e, r, t, n, i, u) {
            {
              var o = Ae(e);
              if (!o) {
                var a = '';
                (e === void 0 ||
                  (typeof e == 'object' && e !== null && Object.keys(e).length === 0)) &&
                  (a +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var p = Qe(i);
                p ? (a += p) : (a += he());
                var s;
                e === null
                  ? (s = 'null')
                  : q(e)
                  ? (s = 'array')
                  : e !== void 0 && e.$$typeof === R
                  ? ((s = '<' + (O(e.type) || 'Unknown') + ' />'),
                    (a = ' Did you accidentally export a JSX literal instead of a component?'))
                  : (s = typeof e),
                  d(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    s,
                    a,
                  );
              }
              var f = Ze(e, r, t, i, u);
              if (f == null) return f;
              if (o) {
                var m = r.children;
                if (m !== void 0)
                  if (n)
                    if (q(m)) {
                      for (var k = 0; k < m.length; k++) ye(m[k], e);
                      Object.freeze && Object.freeze(m);
                    } else
                      d(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                      );
                  else ye(m, e);
              }
              return e === v ? tr(f) : rr(f), f;
            }
          }
          function nr(e, r, t) {
            return Ee(e, r, t, !0);
          }
          function ar(e, r, t) {
            return Ee(e, r, t, !1);
          }
          var or = ar,
            ir = nr;
          ($.Fragment = v), ($.jsx = or), ($.jsxs = ir);
        })()),
    $
  );
}
(function (y) {
  process.env.NODE_ENV === 'production' ? (y.exports = sr()) : (y.exports = fr());
})(we);
const lr = we.exports.jsx,
  vr = (y) => {
    const {
        children: R,
        size: b = 'middle',
        shape: v = 'round',
        type: E = 'default',
        className: c,
      } = y,
      g = ur(
        {
          [`btn-shape-${v}`]: v,
          [`btn-type-${E}`]: E,
          [`btn-size-${b}`]: b,
        },
        c,
      );
    return /* @__PURE__ */ lr('button', {
      className: g,
      children: R,
    });
  };
export { vr as default };
