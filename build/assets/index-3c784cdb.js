function bc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Ls(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var zs = { exports: {} },
  wl = {},
  js = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr = Symbol.for("react.element"),
  ed = Symbol.for("react.portal"),
  td = Symbol.for("react.fragment"),
  nd = Symbol.for("react.strict_mode"),
  rd = Symbol.for("react.profiler"),
  ld = Symbol.for("react.provider"),
  od = Symbol.for("react.context"),
  id = Symbol.for("react.forward_ref"),
  ud = Symbol.for("react.suspense"),
  sd = Symbol.for("react.memo"),
  ad = Symbol.for("react.lazy"),
  su = Symbol.iterator;
function cd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (su && e[su]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ts = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Os = Object.assign,
  Is = {};
function gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Is),
    (this.updater = n || Ts);
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ms() {}
Ms.prototype = gn.prototype;
function ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Is),
    (this.updater = n || Ts);
}
var ci = (ai.prototype = new Ms());
ci.constructor = ai;
Os(ci, gn.prototype);
ci.isPureReactComponent = !0;
var au = Array.isArray,
  Ds = Object.prototype.hasOwnProperty,
  di = { current: null },
  Us = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ds.call(t, r) && !Us.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: cr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: di.current,
  };
}
function dd(e, t) {
  return {
    $$typeof: cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function fi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function fd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cu = /\/+/g;
function Ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fd("" + e.key)
    : t.toString(36);
}
function Or(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cr:
          case ed:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Ul(i, 0) : r),
      au(l)
        ? ((n = ""),
          e != null && (n = e.replace(cu, "$&/") + "/"),
          Or(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (fi(l) &&
            (l = dd(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(cu, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), au(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ul(o, u);
      i += Or(o, t, n, s, l);
    }
  else if (((s = cd(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ul(o, u++)), (i += Or(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Or(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function pd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Ir = { transition: null },
  hd = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Ir,
    ReactCurrentOwner: di,
  };
O.Children = {
  map: vr,
  forEach: function (e, t, n) {
    vr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!fi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
O.Component = gn;
O.Fragment = td;
O.Profiler = rd;
O.PureComponent = ai;
O.StrictMode = nd;
O.Suspense = ud;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hd;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Os({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = di.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ds.call(t, s) &&
        !Us.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: cr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: od,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ld, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Fs;
O.createFactory = function (e) {
  var t = Fs.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: id, render: e };
};
O.isValidElement = fi;
O.lazy = function (e) {
  return { $$typeof: ad, _payload: { _status: -1, _result: e }, _init: pd };
};
O.memo = function (e, t) {
  return { $$typeof: sd, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Ir.transition;
  Ir.transition = {};
  try {
    e();
  } finally {
    Ir.transition = t;
  }
};
O.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ce.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
O.useId = function () {
  return ce.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return ce.current.useRef(e);
};
O.useState = function (e) {
  return ce.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return ce.current.useTransition();
};
O.version = "18.2.0";
js.exports = O;
var k = js.exports;
const md = Ls(k),
  vd = bc({ __proto__: null, default: md }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd = k,
  gd = Symbol.for("react.element"),
  wd = Symbol.for("react.fragment"),
  Sd = Object.prototype.hasOwnProperty,
  kd = yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xd = { key: !0, ref: !0, __self: !0, __source: !0 };
function $s(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Sd.call(t, r) && !xd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: gd,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: kd.current,
  };
}
wl.Fragment = wd;
wl.jsx = $s;
wl.jsxs = $s;
zs.exports = wl;
var C = zs.exports,
  fo = {},
  Bs = { exports: {} },
  xe = {},
  As = { exports: {} },
  Ws = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, z) {
    var j = E.length;
    E.push(z);
    e: for (; 0 < j; ) {
      var B = (j - 1) >>> 1,
        X = E[B];
      if (0 < l(X, z)) (E[B] = z), (E[j] = X), (j = B);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var z = E[0],
      j = E.pop();
    if (j !== z) {
      E[0] = j;
      e: for (var B = 0, X = E.length, Cn = X >>> 1; B < Cn; ) {
        var Nt = 2 * (B + 1) - 1,
          Dl = E[Nt],
          Pt = Nt + 1,
          mr = E[Pt];
        if (0 > l(Dl, j))
          Pt < X && 0 > l(mr, Dl)
            ? ((E[B] = mr), (E[Pt] = j), (B = Pt))
            : ((E[B] = Dl), (E[Nt] = j), (B = Nt));
        else if (Pt < X && 0 > l(mr, j)) (E[B] = mr), (E[Pt] = j), (B = Pt);
        else break e;
      }
    }
    return z;
  }
  function l(E, z) {
    var j = E.sortIndex - z.sortIndex;
    return j !== 0 ? j : E.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    m = null,
    h = 3,
    w = !1,
    g = !1,
    y = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(E) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= E)
        r(a), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(a);
    }
  }
  function v(E) {
    if (((y = !1), f(E), !g))
      if (n(s) !== null) (g = !0), Ct(x);
      else {
        var z = n(a);
        z !== null && _t(v, z.startTime - E);
      }
  }
  function x(E, z) {
    (g = !1), y && ((y = !1), d(R), (R = -1)), (w = !0);
    var j = h;
    try {
      for (
        f(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (E && !fe()));

      ) {
        var B = m.callback;
        if (typeof B == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var X = B(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof X == "function" ? (m.callback = X) : m === n(s) && r(s),
            f(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Cn = !0;
      else {
        var Nt = n(a);
        Nt !== null && _t(v, Nt.startTime - z), (Cn = !1);
      }
      return Cn;
    } finally {
      (m = null), (h = j), (w = !1);
    }
  }
  var P = !1,
    N = null,
    R = -1,
    $ = 5,
    T = -1;
  function fe() {
    return !(e.unstable_now() - T < $);
  }
  function et() {
    if (N !== null) {
      var E = e.unstable_now();
      T = E;
      var z = !0;
      try {
        z = N(!0, E);
      } finally {
        z ? Vt() : ((P = !1), (N = null));
      }
    } else P = !1;
  }
  var Vt;
  if (typeof c == "function")
    Vt = function () {
      c(et);
    };
  else if (typeof MessageChannel < "u") {
    var re = new MessageChannel(),
      Ue = re.port2;
    (re.port1.onmessage = et),
      (Vt = function () {
        Ue.postMessage(null);
      });
  } else
    Vt = function () {
      L(et, 0);
    };
  function Ct(E) {
    (N = E), P || ((P = !0), Vt());
  }
  function _t(E, z) {
    R = L(function () {
      E(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || w || ((g = !0), Ct(x));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : ($ = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = h;
      }
      var j = h;
      h = z;
      try {
        return E();
      } finally {
        h = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var j = h;
      h = E;
      try {
        return z();
      } finally {
        h = j;
      }
    }),
    (e.unstable_scheduleCallback = function (E, z, j) {
      var B = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? B + j : B))
          : (j = B),
        E)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = j + X),
        (E = {
          id: p++,
          callback: z,
          priorityLevel: E,
          startTime: j,
          expirationTime: X,
          sortIndex: -1,
        }),
        j > B
          ? ((E.sortIndex = j),
            t(a, E),
            n(s) === null &&
              E === n(a) &&
              (y ? (d(R), (R = -1)) : (y = !0), _t(v, j - B)))
          : ((E.sortIndex = X), t(s, E), g || w || ((g = !0), Ct(x))),
        E
      );
    }),
    (e.unstable_shouldYield = fe),
    (e.unstable_wrapCallback = function (E) {
      var z = h;
      return function () {
        var j = h;
        h = z;
        try {
          return E.apply(this, arguments);
        } finally {
          h = j;
        }
      };
    });
})(Ws);
As.exports = Ws;
var Ed = As.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vs = k,
  ke = Ed;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Hs = new Set(),
  Kn = {};
function Bt(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Hs.add(t[e]);
}
var Ge = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  po = Object.prototype.hasOwnProperty,
  Cd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  du = {},
  fu = {};
function _d(e) {
  return po.call(fu, e)
    ? !0
    : po.call(du, e)
    ? !1
    : Cd.test(e)
    ? (fu[e] = !0)
    : ((du[e] = !0), !1);
}
function Nd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pd(e, t, n, r) {
  if (t === null || typeof t > "u" || Nd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function de(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pi = /[\-:]([a-z])/g;
function hi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pi, hi);
    ne[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pi, hi);
    ne[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(pi, hi);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new de(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mi(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pd(t, n, l, r) && (n = null),
    r || l === null
      ? _d(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = Vs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yr = Symbol.for("react.element"),
  Kt = Symbol.for("react.portal"),
  Yt = Symbol.for("react.fragment"),
  vi = Symbol.for("react.strict_mode"),
  ho = Symbol.for("react.profiler"),
  Qs = Symbol.for("react.provider"),
  Ks = Symbol.for("react.context"),
  yi = Symbol.for("react.forward_ref"),
  mo = Symbol.for("react.suspense"),
  vo = Symbol.for("react.suspense_list"),
  gi = Symbol.for("react.memo"),
  nt = Symbol.for("react.lazy"),
  Ys = Symbol.for("react.offscreen"),
  pu = Symbol.iterator;
function _n(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pu && e[pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Fl;
function On(e) {
  if (Fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fl = (t && t[1]) || "";
    }
  return (
    `
` +
    Fl +
    e
  );
}
var $l = !1;
function Bl(e, t) {
  if (!e || $l) return "";
  $l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    ($l = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function Rd(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bl(e.type, !1)), e;
    case 11:
      return (e = Bl(e.type.render, !1)), e;
    case 1:
      return (e = Bl(e.type, !0)), e;
    default:
      return "";
  }
}
function yo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yt:
      return "Fragment";
    case Kt:
      return "Portal";
    case ho:
      return "Profiler";
    case vi:
      return "StrictMode";
    case mo:
      return "Suspense";
    case vo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ks:
        return (e.displayName || "Context") + ".Consumer";
      case Qs:
        return (e._context.displayName || "Context") + ".Provider";
      case yi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case gi:
        return (
          (t = e.displayName || null), t !== null ? t : yo(e.type) || "Memo"
        );
      case nt:
        (t = e._payload), (e = e._init);
        try {
          return yo(e(t));
        } catch {}
    }
  return null;
}
function Ld(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return yo(t);
    case 8:
      return t === vi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Xs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function zd(e) {
  var t = Xs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function gr(e) {
  e._valueTracker || (e._valueTracker = zd(e));
}
function Gs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Xs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function go(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Js(e, t) {
  (t = t.checked), t != null && mi(e, "checked", t, !1);
}
function wo(e, t) {
  Js(e, t);
  var n = gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? So(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && So(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function So(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
function ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ko(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (In(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gt(n) };
}
function Zs(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function yu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? qs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wr,
  bs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wr = wr || document.createElement("div"),
          wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Un = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Un).forEach(function (e) {
  jd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Un[t] = Un[e]);
  });
});
function ea(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Un.hasOwnProperty(e) && Un[e])
    ? ("" + t).trim()
    : t + "px";
}
function ta(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ea(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Td = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Eo(e, t) {
  if (t) {
    if (Td[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Co(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _o = null;
function wi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var No = null,
  on = null,
  un = null;
function gu(e) {
  if ((e = pr(e))) {
    if (typeof No != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Cl(t)), No(e.stateNode, e.type, t));
  }
}
function na(e) {
  on ? (un ? un.push(e) : (un = [e])) : (on = e);
}
function ra() {
  if (on) {
    var e = on,
      t = un;
    if (((un = on = null), gu(e), t)) for (e = 0; e < t.length; e++) gu(t[e]);
  }
}
function la(e, t) {
  return e(t);
}
function oa() {}
var Al = !1;
function ia(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return la(e, t, n);
  } finally {
    (Al = !1), (on !== null || un !== null) && (oa(), ra());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Po = !1;
if (Ge)
  try {
    var Nn = {};
    Object.defineProperty(Nn, "passive", {
      get: function () {
        Po = !0;
      },
    }),
      window.addEventListener("test", Nn, Nn),
      window.removeEventListener("test", Nn, Nn);
  } catch {
    Po = !1;
  }
function Od(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var Fn = !1,
  Kr = null,
  Yr = !1,
  Ro = null,
  Id = {
    onError: function (e) {
      (Fn = !0), (Kr = e);
    },
  };
function Md(e, t, n, r, l, o, i, u, s) {
  (Fn = !1), (Kr = null), Od.apply(Id, arguments);
}
function Dd(e, t, n, r, l, o, i, u, s) {
  if ((Md.apply(this, arguments), Fn)) {
    if (Fn) {
      var a = Kr;
      (Fn = !1), (Kr = null);
    } else throw Error(S(198));
    Yr || ((Yr = !0), (Ro = a));
  }
}
function At(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ua(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function wu(e) {
  if (At(e) !== e) throw Error(S(188));
}
function Ud(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = At(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return wu(l), e;
        if (o === r) return wu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function sa(e) {
  return (e = Ud(e)), e !== null ? aa(e) : null;
}
function aa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = aa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ca = ke.unstable_scheduleCallback,
  Su = ke.unstable_cancelCallback,
  Fd = ke.unstable_shouldYield,
  $d = ke.unstable_requestPaint,
  K = ke.unstable_now,
  Bd = ke.unstable_getCurrentPriorityLevel,
  Si = ke.unstable_ImmediatePriority,
  da = ke.unstable_UserBlockingPriority,
  Xr = ke.unstable_NormalPriority,
  Ad = ke.unstable_LowPriority,
  fa = ke.unstable_IdlePriority,
  Sl = null,
  Ae = null;
function Wd(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : Qd,
  Vd = Math.log,
  Hd = Math.LN2;
function Qd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vd(e) / Hd) | 0)) | 0;
}
var Sr = 64,
  kr = 4194304;
function Mn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Mn(u)) : ((o &= i), o !== 0 && (r = Mn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Mn(i)) : o !== 0 && (r = Mn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Kd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Yd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ie(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Kd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Lo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pa() {
  var e = Sr;
  return (Sr <<= 1), !(Sr & 4194240) && (Sr = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function Xd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ki(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function ha(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ma,
  xi,
  va,
  ya,
  ga,
  zo = !1,
  xr = [],
  at = null,
  ct = null,
  dt = null,
  Gn = new Map(),
  Jn = new Map(),
  lt = [],
  Gd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ku(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      at = null;
      break;
    case "dragenter":
    case "dragleave":
      ct = null;
      break;
    case "mouseover":
    case "mouseout":
      dt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jn.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = pr(t)), t !== null && xi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Jd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (at = Pn(at, e, t, n, r, l)), !0;
    case "dragenter":
      return (ct = Pn(ct, e, t, n, r, l)), !0;
    case "mouseover":
      return (dt = Pn(dt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Gn.set(o, Pn(Gn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Jn.set(o, Pn(Jn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function wa(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = At(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ua(n)), t !== null)) {
          (e.blockedOn = t),
            ga(e.priority, function () {
              va(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_o = r), n.target.dispatchEvent(r), (_o = null);
    } else return (t = pr(n)), t !== null && xi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xu(e, t, n) {
  Mr(e) && n.delete(t);
}
function Zd() {
  (zo = !1),
    at !== null && Mr(at) && (at = null),
    ct !== null && Mr(ct) && (ct = null),
    dt !== null && Mr(dt) && (dt = null),
    Gn.forEach(xu),
    Jn.forEach(xu);
}
function Rn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zo ||
      ((zo = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Zd)));
}
function Zn(e) {
  function t(l) {
    return Rn(l, e);
  }
  if (0 < xr.length) {
    Rn(xr[0], e);
    for (var n = 1; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    at !== null && Rn(at, e),
      ct !== null && Rn(ct, e),
      dt !== null && Rn(dt, e),
      Gn.forEach(t),
      Jn.forEach(t),
      n = 0;
    n < lt.length;
    n++
  )
    (r = lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < lt.length && ((n = lt[0]), n.blockedOn === null); )
    wa(n), n.blockedOn === null && lt.shift();
}
var sn = be.ReactCurrentBatchConfig,
  Jr = !0;
function qd(e, t, n, r) {
  var l = M,
    o = sn.transition;
  sn.transition = null;
  try {
    (M = 1), Ei(e, t, n, r);
  } finally {
    (M = l), (sn.transition = o);
  }
}
function bd(e, t, n, r) {
  var l = M,
    o = sn.transition;
  sn.transition = null;
  try {
    (M = 4), Ei(e, t, n, r);
  } finally {
    (M = l), (sn.transition = o);
  }
}
function Ei(e, t, n, r) {
  if (Jr) {
    var l = jo(e, t, n, r);
    if (l === null) ql(e, t, r, Zr, n), ku(e, r);
    else if (Jd(l, e, t, n, r)) r.stopPropagation();
    else if ((ku(e, r), t & 4 && -1 < Gd.indexOf(e))) {
      for (; l !== null; ) {
        var o = pr(l);
        if (
          (o !== null && ma(o),
          (o = jo(e, t, n, r)),
          o === null && ql(e, t, r, Zr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ql(e, t, r, null, n);
  }
}
var Zr = null;
function jo(e, t, n, r) {
  if (((Zr = null), (e = wi(r)), (e = zt(e)), e !== null))
    if (((t = At(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ua(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zr = e), null;
}
function Sa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Bd()) {
        case Si:
          return 1;
        case da:
          return 4;
        case Xr:
        case Ad:
          return 16;
        case fa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null,
  Ci = null,
  Dr = null;
function ka() {
  if (Dr) return Dr;
  var e,
    t = Ci,
    n = t.length,
    r,
    l = "value" in it ? it.value : it.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ur(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Er() {
  return !0;
}
function Eu() {
  return !1;
}
function Ee(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Er
        : Eu),
      (this.isPropagationStopped = Eu),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Er));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Er));
      },
      persist: function () {},
      isPersistent: Er,
    }),
    t
  );
}
var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _i = Ee(wn),
  fr = H({}, wn, { view: 0, detail: 0 }),
  ef = Ee(fr),
  Vl,
  Hl,
  Ln,
  kl = H({}, fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ni,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ln &&
            (Ln && e.type === "mousemove"
              ? ((Vl = e.screenX - Ln.screenX), (Hl = e.screenY - Ln.screenY))
              : (Hl = Vl = 0),
            (Ln = e)),
          Vl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Hl;
    },
  }),
  Cu = Ee(kl),
  tf = H({}, kl, { dataTransfer: 0 }),
  nf = Ee(tf),
  rf = H({}, fr, { relatedTarget: 0 }),
  Ql = Ee(rf),
  lf = H({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  of = Ee(lf),
  uf = H({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sf = Ee(uf),
  af = H({}, wn, { data: 0 }),
  _u = Ee(af),
  cf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  df = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ff = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ff[e]) ? !!t[e] : !1;
}
function Ni() {
  return pf;
}
var hf = H({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = cf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? df[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ni,
    charCode: function (e) {
      return e.type === "keypress" ? Ur(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ur(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  mf = Ee(hf),
  vf = H({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Nu = Ee(vf),
  yf = H({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ni,
  }),
  gf = Ee(yf),
  wf = H({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sf = Ee(wf),
  kf = H({}, kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xf = Ee(kf),
  Ef = [9, 13, 27, 32],
  Pi = Ge && "CompositionEvent" in window,
  $n = null;
Ge && "documentMode" in document && ($n = document.documentMode);
var Cf = Ge && "TextEvent" in window && !$n,
  xa = Ge && (!Pi || ($n && 8 < $n && 11 >= $n)),
  Pu = String.fromCharCode(32),
  Ru = !1;
function Ea(e, t) {
  switch (e) {
    case "keyup":
      return Ef.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ca(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xt = !1;
function _f(e, t) {
  switch (e) {
    case "compositionend":
      return Ca(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ru = !0), Pu);
    case "textInput":
      return (e = t.data), e === Pu && Ru ? null : e;
    default:
      return null;
  }
}
function Nf(e, t) {
  if (Xt)
    return e === "compositionend" || (!Pi && Ea(e, t))
      ? ((e = ka()), (Dr = Ci = it = null), (Xt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pf[e.type] : t === "textarea";
}
function _a(e, t, n, r) {
  na(r),
    (t = qr(t, "onChange")),
    0 < t.length &&
      ((n = new _i("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Bn = null,
  qn = null;
function Rf(e) {
  Da(e, 0);
}
function xl(e) {
  var t = Zt(e);
  if (Gs(t)) return e;
}
function Lf(e, t) {
  if (e === "change") return t;
}
var Na = !1;
if (Ge) {
  var Kl;
  if (Ge) {
    var Yl = "oninput" in document;
    if (!Yl) {
      var zu = document.createElement("div");
      zu.setAttribute("oninput", "return;"),
        (Yl = typeof zu.oninput == "function");
    }
    Kl = Yl;
  } else Kl = !1;
  Na = Kl && (!document.documentMode || 9 < document.documentMode);
}
function ju() {
  Bn && (Bn.detachEvent("onpropertychange", Pa), (qn = Bn = null));
}
function Pa(e) {
  if (e.propertyName === "value" && xl(qn)) {
    var t = [];
    _a(t, qn, e, wi(e)), ia(Rf, t);
  }
}
function zf(e, t, n) {
  e === "focusin"
    ? (ju(), (Bn = t), (qn = n), Bn.attachEvent("onpropertychange", Pa))
    : e === "focusout" && ju();
}
function jf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xl(qn);
}
function Tf(e, t) {
  if (e === "click") return xl(t);
}
function Of(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function If(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : If;
function bn(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!po.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function Tu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ou(e, t) {
  var n = Tu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Tu(n);
  }
}
function Ra(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ra(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function La() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function Ri(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Mf(e) {
  var t = La(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ra(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ri(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Ou(n, o));
        var i = Ou(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Df = Ge && "documentMode" in document && 11 >= document.documentMode,
  Gt = null,
  To = null,
  An = null,
  Oo = !1;
function Iu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Oo ||
    Gt == null ||
    Gt !== Qr(r) ||
    ((r = Gt),
    "selectionStart" in r && Ri(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (An && bn(An, r)) ||
      ((An = r),
      (r = qr(To, "onSelect")),
      0 < r.length &&
        ((t = new _i("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gt))));
}
function Cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jt = {
    animationend: Cr("Animation", "AnimationEnd"),
    animationiteration: Cr("Animation", "AnimationIteration"),
    animationstart: Cr("Animation", "AnimationStart"),
    transitionend: Cr("Transition", "TransitionEnd"),
  },
  Xl = {},
  za = {};
Ge &&
  ((za = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jt.animationend.animation,
    delete Jt.animationiteration.animation,
    delete Jt.animationstart.animation),
  "TransitionEvent" in window || delete Jt.transitionend.transition);
function El(e) {
  if (Xl[e]) return Xl[e];
  if (!Jt[e]) return e;
  var t = Jt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in za) return (Xl[e] = t[n]);
  return e;
}
var ja = El("animationend"),
  Ta = El("animationiteration"),
  Oa = El("animationstart"),
  Ia = El("transitionend"),
  Ma = new Map(),
  Mu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function St(e, t) {
  Ma.set(e, t), Bt(t, [e]);
}
for (var Gl = 0; Gl < Mu.length; Gl++) {
  var Jl = Mu[Gl],
    Uf = Jl.toLowerCase(),
    Ff = Jl[0].toUpperCase() + Jl.slice(1);
  St(Uf, "on" + Ff);
}
St(ja, "onAnimationEnd");
St(Ta, "onAnimationIteration");
St(Oa, "onAnimationStart");
St("dblclick", "onDoubleClick");
St("focusin", "onFocus");
St("focusout", "onBlur");
St(Ia, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
Bt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Bt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Bt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Bt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function Du(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Dd(r, t, void 0, e), (e.currentTarget = null);
}
function Da(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Du(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Du(l, u, a), (o = s);
        }
    }
  }
  if (Yr) throw ((e = Ro), (Yr = !1), (Ro = null), e);
}
function U(e, t) {
  var n = t[Fo];
  n === void 0 && (n = t[Fo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ua(t, e, 2, !1), n.add(r));
}
function Zl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ua(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[_r]) {
    (e[_r] = !0),
      Hs.forEach(function (n) {
        n !== "selectionchange" && ($f.has(n) || Zl(n, !1, e), Zl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || ((t[_r] = !0), Zl("selectionchange", !1, t));
  }
}
function Ua(e, t, n, r) {
  switch (Sa(t)) {
    case 1:
      var l = qd;
      break;
    case 4:
      l = bd;
      break;
    default:
      l = Ei;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Po ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ql(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = zt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ia(function () {
    var a = o,
      p = wi(n),
      m = [];
    e: {
      var h = Ma.get(e);
      if (h !== void 0) {
        var w = _i,
          g = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = mf;
            break;
          case "focusin":
            (g = "focus"), (w = Ql);
            break;
          case "focusout":
            (g = "blur"), (w = Ql);
            break;
          case "beforeblur":
          case "afterblur":
            w = Ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Cu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = nf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = gf;
            break;
          case ja:
          case Ta:
          case Oa:
            w = of;
            break;
          case Ia:
            w = Sf;
            break;
          case "scroll":
            w = ef;
            break;
          case "wheel":
            w = xf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = sf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Nu;
        }
        var y = (t & 4) !== 0,
          L = !y && e === "scroll",
          d = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              d !== null && ((v = Xn(c, d)), v != null && y.push(tr(c, v, f)))),
            L)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((h = new w(h, g, null, n, p)), m.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          h &&
            n !== _o &&
            (g = n.relatedTarget || n.fromElement) &&
            (zt(g) || g[Je]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = a),
              (g = g ? zt(g) : null),
              g !== null &&
                ((L = At(g)), g !== L || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = a)),
          w !== g)
        ) {
          if (
            ((y = Cu),
            (v = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Nu),
              (v = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (L = w == null ? h : Zt(w)),
            (f = g == null ? h : Zt(g)),
            (h = new y(v, c + "leave", w, n, p)),
            (h.target = L),
            (h.relatedTarget = f),
            (v = null),
            zt(p) === a &&
              ((y = new y(d, c + "enter", g, n, p)),
              (y.target = f),
              (y.relatedTarget = L),
              (v = y)),
            (L = v),
            w && g)
          )
            t: {
              for (y = w, d = g, c = 0, f = y; f; f = Ht(f)) c++;
              for (f = 0, v = d; v; v = Ht(v)) f++;
              for (; 0 < c - f; ) (y = Ht(y)), c--;
              for (; 0 < f - c; ) (d = Ht(d)), f--;
              for (; c--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = Ht(y)), (d = Ht(d));
              }
              y = null;
            }
          else y = null;
          w !== null && Uu(m, h, w, y, !1),
            g !== null && L !== null && Uu(m, L, g, y, !0);
        }
      }
      e: {
        if (
          ((h = a ? Zt(a) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === "select" || (w === "input" && h.type === "file"))
        )
          var x = Lf;
        else if (Lu(h))
          if (Na) x = Of;
          else {
            x = jf;
            var P = zf;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (x = Tf);
        if (x && (x = x(e, a))) {
          _a(m, x, n, p);
          break e;
        }
        P && P(e, h, a),
          e === "focusout" &&
            (P = h._wrapperState) &&
            P.controlled &&
            h.type === "number" &&
            So(h, "number", h.value);
      }
      switch (((P = a ? Zt(a) : window), e)) {
        case "focusin":
          (Lu(P) || P.contentEditable === "true") &&
            ((Gt = P), (To = a), (An = null));
          break;
        case "focusout":
          An = To = Gt = null;
          break;
        case "mousedown":
          Oo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Oo = !1), Iu(m, n, p);
          break;
        case "selectionchange":
          if (Df) break;
        case "keydown":
        case "keyup":
          Iu(m, n, p);
      }
      var N;
      if (Pi)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Xt
          ? Ea(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (xa &&
          n.locale !== "ko" &&
          (Xt || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Xt && (N = ka())
            : ((it = p),
              (Ci = "value" in it ? it.value : it.textContent),
              (Xt = !0))),
        (P = qr(a, R)),
        0 < P.length &&
          ((R = new _u(R, e, null, n, p)),
          m.push({ event: R, listeners: P }),
          N ? (R.data = N) : ((N = Ca(n)), N !== null && (R.data = N)))),
        (N = Cf ? _f(e, n) : Nf(e, n)) &&
          ((a = qr(a, "onBeforeInput")),
          0 < a.length &&
            ((p = new _u("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: a }),
            (p.data = N)));
    }
    Da(m, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Xn(e, n)),
      o != null && r.unshift(tr(e, o, l)),
      (o = Xn(e, t)),
      o != null && r.push(tr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Xn(n, o)), s != null && i.unshift(tr(n, s, u)))
        : l || ((s = Xn(n, o)), s != null && i.push(tr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Bf = /\r\n?/g,
  Af = /\u0000|\uFFFD/g;
function Fu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bf,
      `
`,
    )
    .replace(Af, "");
}
function Nr(e, t, n) {
  if (((t = Fu(t)), Fu(e) !== t && n)) throw Error(S(425));
}
function br() {}
var Io = null,
  Mo = null;
function Do(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Uo = typeof setTimeout == "function" ? setTimeout : void 0,
  Wf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $u = typeof Promise == "function" ? Promise : void 0,
  Vf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $u < "u"
      ? function (e) {
          return $u.resolve(null).then(e).catch(Hf);
        }
      : Uo;
function Hf(e) {
  setTimeout(function () {
    throw e;
  });
}
function bl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Zn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Zn(t);
}
function ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Bu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sn = Math.random().toString(36).slice(2),
  Be = "__reactFiber$" + Sn,
  nr = "__reactProps$" + Sn,
  Je = "__reactContainer$" + Sn,
  Fo = "__reactEvents$" + Sn,
  Qf = "__reactListeners$" + Sn,
  Kf = "__reactHandles$" + Sn;
function zt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Je] || n[Be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bu(e); e !== null; ) {
          if ((n = e[Be])) return n;
          e = Bu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pr(e) {
  return (
    (e = e[Be] || e[Je]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Cl(e) {
  return e[nr] || null;
}
var $o = [],
  qt = -1;
function kt(e) {
  return { current: e };
}
function F(e) {
  0 > qt || ((e.current = $o[qt]), ($o[qt] = null), qt--);
}
function D(e, t) {
  qt++, ($o[qt] = e.current), (e.current = t);
}
var wt = {},
  ue = kt(wt),
  me = kt(!1),
  Mt = wt;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function el() {
  F(me), F(ue);
}
function Au(e, t, n) {
  if (ue.current !== wt) throw Error(S(168));
  D(ue, t), D(me, n);
}
function Fa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Ld(e) || "Unknown", l));
  return H({}, n, r);
}
function tl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wt),
    (Mt = ue.current),
    D(ue, e),
    D(me, me.current),
    !0
  );
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = Fa(e, t, Mt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(me),
      F(ue),
      D(ue, e))
    : F(me),
    D(me, n);
}
var Qe = null,
  _l = !1,
  eo = !1;
function $a(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function Yf(e) {
  (_l = !0), $a(e);
}
function xt() {
  if (!eo && Qe !== null) {
    eo = !0;
    var e = 0,
      t = M;
    try {
      var n = Qe;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Qe = null), (_l = !1);
    } catch (l) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), ca(Si, xt), l);
    } finally {
      (M = t), (eo = !1);
    }
  }
  return null;
}
var bt = [],
  en = 0,
  nl = null,
  rl = 0,
  Ce = [],
  _e = 0,
  Dt = null,
  Ke = 1,
  Ye = "";
function Rt(e, t) {
  (bt[en++] = rl), (bt[en++] = nl), (nl = e), (rl = t);
}
function Ba(e, t, n) {
  (Ce[_e++] = Ke), (Ce[_e++] = Ye), (Ce[_e++] = Dt), (Dt = e);
  var r = Ke;
  e = Ye;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ke = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Ye = o + e);
  } else (Ke = (1 << o) | (n << l) | r), (Ye = e);
}
function Li(e) {
  e.return !== null && (Rt(e, 1), Ba(e, 1, 0));
}
function zi(e) {
  for (; e === nl; )
    (nl = bt[--en]), (bt[en] = null), (rl = bt[--en]), (bt[en] = null);
  for (; e === Dt; )
    (Dt = Ce[--_e]),
      (Ce[_e] = null),
      (Ye = Ce[--_e]),
      (Ce[_e] = null),
      (Ke = Ce[--_e]),
      (Ce[_e] = null);
}
var Se = null,
  we = null,
  A = !1,
  Oe = null;
function Aa(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (we = ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dt !== null ? { id: Ke, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Bo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ao(e) {
  if (A) {
    var t = we;
    if (t) {
      var n = t;
      if (!Vu(e, t)) {
        if (Bo(e)) throw Error(S(418));
        t = ft(n.nextSibling);
        var r = Se;
        t && Vu(e, t)
          ? Aa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (Se = e));
      }
    } else {
      if (Bo(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (Se = e);
    }
  }
}
function Hu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function Pr(e) {
  if (e !== Se) return !1;
  if (!A) return Hu(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Do(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Bo(e)) throw (Wa(), Error(S(418)));
    for (; t; ) Aa(e, t), (t = ft(t.nextSibling));
  }
  if ((Hu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = Se ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Wa() {
  for (var e = we; e; ) e = ft(e.nextSibling);
}
function pn() {
  (we = Se = null), (A = !1);
}
function ji(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Xf = be.ReactCurrentBatchConfig;
function je(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ll = kt(null),
  ol = null,
  tn = null,
  Ti = null;
function Oi() {
  Ti = tn = ol = null;
}
function Ii(e) {
  var t = ll.current;
  F(ll), (e._currentValue = t);
}
function Wo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function an(e, t) {
  (ol = e),
    (Ti = tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Re(e) {
  var t = e._currentValue;
  if (Ti !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tn === null)) {
      if (ol === null) throw Error(S(308));
      (tn = e), (ol.dependencies = { lanes: 0, firstContext: e });
    } else tn = tn.next = e;
  return t;
}
var jt = null;
function Mi(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function Va(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Mi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var rt = !1;
function Di(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ha(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Xe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Mi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function Fr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ki(e, n);
  }
}
function Qu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function il(e, t, n, r) {
  var l = e.updateQueue;
  rt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (p = a = s = null), (u = o);
    do {
      var h = u.lane,
        w = u.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            y = u;
          switch (((h = t), (w = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                m = g.call(w, m, h);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (h = typeof g == "function" ? g.call(w, m, h) : g),
                h == null)
              )
                break e;
              m = H({}, m, h);
              break e;
            case 2:
              rt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (w = {
          eventTime: w,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = w), (s = m)) : (p = p.next = w),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Ft |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Ku(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var Qa = new Vs.Component().refs;
function Vo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Nl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? At(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = mt(e),
      o = Xe(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = pt(e, o, l)),
      t !== null && (Me(t, e, l, r), Fr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = mt(e),
      o = Xe(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = pt(e, o, l)),
      t !== null && (Me(t, e, l, r), Fr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = mt(e),
      l = Xe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = pt(e, l, r)),
      t !== null && (Me(t, e, r, n), Fr(t, e, r));
  },
};
function Yu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(l, o)
      : !0
  );
}
function Ka(e, t, n) {
  var r = !1,
    l = wt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Re(o))
      : ((l = ve(t) ? Mt : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? fn(e, l) : wt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Nl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Xu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
}
function Ho(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Qa), Di(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Re(o))
    : ((o = ve(t) ? Mt : ue.current), (l.context = fn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Vo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Nl.enqueueReplaceState(l, l.state, null),
      il(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Qa && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Rr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Gu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ya(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = vt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, f, v) {
    return c === null || c.tag !== 6
      ? ((c = uo(f, d.mode, v)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function s(d, c, f, v) {
    var x = f.type;
    return x === Yt
      ? p(d, c, f.props.children, v, f.key)
      : c !== null &&
        (c.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === nt &&
            Gu(x) === c.type))
      ? ((v = l(c, f.props)), (v.ref = zn(d, c, f)), (v.return = d), v)
      : ((v = Hr(f.type, f.key, f.props, null, d.mode, v)),
        (v.ref = zn(d, c, f)),
        (v.return = d),
        v);
  }
  function a(d, c, f, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = so(f, d.mode, v)), (c.return = d), c)
      : ((c = l(c, f.children || [])), (c.return = d), c);
  }
  function p(d, c, f, v, x) {
    return c === null || c.tag !== 7
      ? ((c = It(f, d.mode, v, x)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function m(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = uo("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case yr:
          return (
            (f = Hr(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = zn(d, null, c)),
            (f.return = d),
            f
          );
        case Kt:
          return (c = so(c, d.mode, f)), (c.return = d), c;
        case nt:
          var v = c._init;
          return m(d, v(c._payload), f);
      }
      if (In(c) || _n(c))
        return (c = It(c, d.mode, f, null)), (c.return = d), c;
      Rr(d, c);
    }
    return null;
  }
  function h(d, c, f, v) {
    var x = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return x !== null ? null : u(d, c, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case yr:
          return f.key === x ? s(d, c, f, v) : null;
        case Kt:
          return f.key === x ? a(d, c, f, v) : null;
        case nt:
          return (x = f._init), h(d, c, x(f._payload), v);
      }
      if (In(f) || _n(f)) return x !== null ? null : p(d, c, f, v, null);
      Rr(d, f);
    }
    return null;
  }
  function w(d, c, f, v, x) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (d = d.get(f) || null), u(c, d, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case yr:
          return (d = d.get(v.key === null ? f : v.key) || null), s(c, d, v, x);
        case Kt:
          return (d = d.get(v.key === null ? f : v.key) || null), a(c, d, v, x);
        case nt:
          var P = v._init;
          return w(d, c, f, P(v._payload), x);
      }
      if (In(v) || _n(v)) return (d = d.get(f) || null), p(c, d, v, x, null);
      Rr(c, v);
    }
    return null;
  }
  function g(d, c, f, v) {
    for (
      var x = null, P = null, N = c, R = (c = 0), $ = null;
      N !== null && R < f.length;
      R++
    ) {
      N.index > R ? (($ = N), (N = null)) : ($ = N.sibling);
      var T = h(d, N, f[R], v);
      if (T === null) {
        N === null && (N = $);
        break;
      }
      e && N && T.alternate === null && t(d, N),
        (c = o(T, c, R)),
        P === null ? (x = T) : (P.sibling = T),
        (P = T),
        (N = $);
    }
    if (R === f.length) return n(d, N), A && Rt(d, R), x;
    if (N === null) {
      for (; R < f.length; R++)
        (N = m(d, f[R], v)),
          N !== null &&
            ((c = o(N, c, R)), P === null ? (x = N) : (P.sibling = N), (P = N));
      return A && Rt(d, R), x;
    }
    for (N = r(d, N); R < f.length; R++)
      ($ = w(N, d, R, f[R], v)),
        $ !== null &&
          (e && $.alternate !== null && N.delete($.key === null ? R : $.key),
          (c = o($, c, R)),
          P === null ? (x = $) : (P.sibling = $),
          (P = $));
    return (
      e &&
        N.forEach(function (fe) {
          return t(d, fe);
        }),
      A && Rt(d, R),
      x
    );
  }
  function y(d, c, f, v) {
    var x = _n(f);
    if (typeof x != "function") throw Error(S(150));
    if (((f = x.call(f)), f == null)) throw Error(S(151));
    for (
      var P = (x = null), N = c, R = (c = 0), $ = null, T = f.next();
      N !== null && !T.done;
      R++, T = f.next()
    ) {
      N.index > R ? (($ = N), (N = null)) : ($ = N.sibling);
      var fe = h(d, N, T.value, v);
      if (fe === null) {
        N === null && (N = $);
        break;
      }
      e && N && fe.alternate === null && t(d, N),
        (c = o(fe, c, R)),
        P === null ? (x = fe) : (P.sibling = fe),
        (P = fe),
        (N = $);
    }
    if (T.done) return n(d, N), A && Rt(d, R), x;
    if (N === null) {
      for (; !T.done; R++, T = f.next())
        (T = m(d, T.value, v)),
          T !== null &&
            ((c = o(T, c, R)), P === null ? (x = T) : (P.sibling = T), (P = T));
      return A && Rt(d, R), x;
    }
    for (N = r(d, N); !T.done; R++, T = f.next())
      (T = w(N, d, R, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && N.delete(T.key === null ? R : T.key),
          (c = o(T, c, R)),
          P === null ? (x = T) : (P.sibling = T),
          (P = T));
    return (
      e &&
        N.forEach(function (et) {
          return t(d, et);
        }),
      A && Rt(d, R),
      x
    );
  }
  function L(d, c, f, v) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Yt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case yr:
          e: {
            for (var x = f.key, P = c; P !== null; ) {
              if (P.key === x) {
                if (((x = f.type), x === Yt)) {
                  if (P.tag === 7) {
                    n(d, P.sibling),
                      (c = l(P, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  P.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === nt &&
                    Gu(x) === P.type)
                ) {
                  n(d, P.sibling),
                    (c = l(P, f.props)),
                    (c.ref = zn(d, P, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            f.type === Yt
              ? ((c = It(f.props.children, d.mode, v, f.key)),
                (c.return = d),
                (d = c))
              : ((v = Hr(f.type, f.key, f.props, null, d.mode, v)),
                (v.ref = zn(d, c, f)),
                (v.return = d),
                (d = v));
          }
          return i(d);
        case Kt:
          e: {
            for (P = f.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = so(f, d.mode, v)), (c.return = d), (d = c);
          }
          return i(d);
        case nt:
          return (P = f._init), L(d, c, P(f._payload), v);
      }
      if (In(f)) return g(d, c, f, v);
      if (_n(f)) return y(d, c, f, v);
      Rr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = uo(f, d.mode, v)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return L;
}
var hn = Ya(!0),
  Xa = Ya(!1),
  hr = {},
  We = kt(hr),
  rr = kt(hr),
  lr = kt(hr);
function Tt(e) {
  if (e === hr) throw Error(S(174));
  return e;
}
function Ui(e, t) {
  switch ((D(lr, t), D(rr, e), D(We, hr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xo(t, e));
  }
  F(We), D(We, t);
}
function mn() {
  F(We), F(rr), F(lr);
}
function Ga(e) {
  Tt(lr.current);
  var t = Tt(We.current),
    n = xo(t, e.type);
  t !== n && (D(rr, e), D(We, n));
}
function Fi(e) {
  rr.current === e && (F(We), F(rr));
}
var W = kt(0);
function ul(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var to = [];
function $i() {
  for (var e = 0; e < to.length; e++)
    to[e]._workInProgressVersionPrimary = null;
  to.length = 0;
}
var $r = be.ReactCurrentDispatcher,
  no = be.ReactCurrentBatchConfig,
  Ut = 0,
  V = null,
  J = null,
  q = null,
  sl = !1,
  Wn = !1,
  or = 0,
  Gf = 0;
function le() {
  throw Error(S(321));
}
function Bi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function Ai(e, t, n, r, l, o) {
  if (
    ((Ut = o),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($r.current = e === null || e.memoizedState === null ? bf : ep),
    (e = n(r, l)),
    Wn)
  ) {
    o = 0;
    do {
      if (((Wn = !1), (or = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (q = J = null),
        (t.updateQueue = null),
        ($r.current = tp),
        (e = n(r, l));
    } while (Wn);
  }
  if (
    (($r.current = al),
    (t = J !== null && J.next !== null),
    (Ut = 0),
    (q = J = V = null),
    (sl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Wi() {
  var e = or !== 0;
  return (or = 0), e;
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (V.memoizedState = q = e) : (q = q.next = e), q;
}
function Le() {
  if (J === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = q === null ? V.memoizedState : q.next;
  if (t !== null) (q = t), (J = e);
  else {
    if (e === null) throw Error(S(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      q === null ? (V.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ro(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var p = a.lane;
      if ((Ut & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var m = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (V.lanes |= p),
          (Ft |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      De(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (V.lanes |= o), (Ft |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function lo(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    De(o, t.memoizedState) || (he = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ja() {}
function Za(e, t) {
  var n = V,
    r = Le(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    Vi(ec.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, ba.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(S(349));
    Ut & 30 || qa(n, t, l);
  }
  return l;
}
function qa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ba(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), tc(t) && nc(e);
}
function ec(e, t, n) {
  return n(function () {
    tc(t) && nc(e);
  });
}
function tc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function nc(e) {
  var t = Ze(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Ju(e) {
  var t = $e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ir,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qf.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function rc() {
  return Le().memoizedState;
}
function Br(e, t, n, r) {
  var l = $e();
  (V.flags |= e),
    (l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && Bi(r, i.deps))) {
      l.memoizedState = ur(t, n, o, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = ur(1 | t, n, o, r));
}
function Zu(e, t) {
  return Br(8390656, 8, e, t);
}
function Vi(e, t) {
  return Pl(2048, 8, e, t);
}
function lc(e, t) {
  return Pl(4, 2, e, t);
}
function oc(e, t) {
  return Pl(4, 4, e, t);
}
function ic(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function uc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pl(4, 4, ic.bind(null, t, e), n)
  );
}
function Hi() {}
function sc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ac(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cc(e, t, n) {
  return Ut & 21
    ? (De(n, t) || ((n = pa()), (V.lanes |= n), (Ft |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function Jf(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = no.transition;
  no.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (no.transition = r);
  }
}
function dc() {
  return Le().memoizedState;
}
function Zf(e, t, n) {
  var r = mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fc(e))
  )
    pc(t, n);
  else if (((n = Va(e, t, n, r)), n !== null)) {
    var l = ae();
    Me(n, e, r, l), hc(n, t, r);
  }
}
function qf(e, t, n) {
  var r = mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fc(e)) pc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Mi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Va(e, t, l, r)),
      n !== null && ((l = ae()), Me(n, e, r, l), hc(n, t, r));
  }
}
function fc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function pc(e, t) {
  Wn = sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ki(e, n);
  }
}
var al = {
    readContext: Re,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  bf = {
    readContext: Re,
    useCallback: function (e, t) {
      return ($e().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Re,
    useEffect: Zu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Br(4194308, 4, ic.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Br(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Br(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zf.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ju,
    useDebugValue: Hi,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = Ju(!1),
        t = e[0];
      return (e = Jf.bind(null, e[1])), ($e().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = $e();
      if (A) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(S(349));
        Ut & 30 || qa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Zu(ec.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ur(9, ba.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = b.identifierPrefix;
      if (A) {
        var n = Ye,
          r = Ke;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Gf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ep = {
    readContext: Re,
    useCallback: sc,
    useContext: Re,
    useEffect: Vi,
    useImperativeHandle: uc,
    useInsertionEffect: lc,
    useLayoutEffect: oc,
    useMemo: ac,
    useReducer: ro,
    useRef: rc,
    useState: function () {
      return ro(ir);
    },
    useDebugValue: Hi,
    useDeferredValue: function (e) {
      var t = Le();
      return cc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = ro(ir)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ja,
    useSyncExternalStore: Za,
    useId: dc,
    unstable_isNewReconciler: !1,
  },
  tp = {
    readContext: Re,
    useCallback: sc,
    useContext: Re,
    useEffect: Vi,
    useImperativeHandle: uc,
    useInsertionEffect: lc,
    useLayoutEffect: oc,
    useMemo: ac,
    useReducer: lo,
    useRef: rc,
    useState: function () {
      return lo(ir);
    },
    useDebugValue: Hi,
    useDeferredValue: function (e) {
      var t = Le();
      return J === null ? (t.memoizedState = e) : cc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = lo(ir)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ja,
    useSyncExternalStore: Za,
    useId: dc,
    unstable_isNewReconciler: !1,
  };
function vn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Rd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function oo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var np = typeof WeakMap == "function" ? WeakMap : Map;
function mc(e, t, n) {
  (n = Xe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      dl || ((dl = !0), (ti = r)), Qo(e, t);
    }),
    n
  );
}
function vc(e, t, n) {
  (n = Xe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Qo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Qo(e, t),
          typeof r != "function" &&
            (ht === null ? (ht = new Set([this])) : ht.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function qu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new np();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = vp.bind(null, e, t, n)), t.then(e, e));
}
function bu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function es(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xe(-1, 1)), (t.tag = 2), pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rp = be.ReactCurrentOwner,
  he = !1;
function se(e, t, n, r) {
  t.child = e === null ? Xa(t, null, n, r) : hn(t, e.child, n, r);
}
function ts(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    an(t, l),
    (r = Ai(e, t, n, r, o, l)),
    (n = Wi()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : (A && n && Li(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function ns(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !qi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), yc(e, t, o, r, l))
      : ((e = Hr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(i, r) && e.ref === t.ref)
    )
      return qe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = vt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (bn(o, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), qe(e, t, l);
  }
  return Ko(e, t, n, r, l);
}
function gc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(rn, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(rn, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(rn, ge),
        (ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(rn, ge),
      (ge |= r);
  return se(e, t, l, n), t.child;
}
function wc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ko(e, t, n, r, l) {
  var o = ve(n) ? Mt : ue.current;
  return (
    (o = fn(t, o)),
    an(t, l),
    (n = Ai(e, t, n, r, o, l)),
    (r = Wi()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : (A && r && Li(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function rs(e, t, n, r, l) {
  if (ve(n)) {
    var o = !0;
    tl(t);
  } else o = !1;
  if ((an(t, l), t.stateNode === null))
    Ar(e, t), Ka(t, n, r), Ho(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Re(a))
      : ((a = ve(n) ? Mt : ue.current), (a = fn(t, a)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Xu(t, i, r, a)),
      (rt = !1);
    var h = t.memoizedState;
    (i.state = h),
      il(t, r, i, l),
      (s = t.memoizedState),
      u !== r || h !== s || me.current || rt
        ? (typeof p == "function" && (Vo(t, n, p, r), (s = t.memoizedState)),
          (u = rt || Yu(t, n, u, r, h, s, a))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ha(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : je(t.type, u)),
      (i.props = a),
      (m = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Re(s))
        : ((s = ve(n) ? Mt : ue.current), (s = fn(t, s)));
    var w = n.getDerivedStateFromProps;
    (p =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || h !== s) && Xu(t, i, r, s)),
      (rt = !1),
      (h = t.memoizedState),
      (i.state = h),
      il(t, r, i, l);
    var g = t.memoizedState;
    u !== m || h !== g || me.current || rt
      ? (typeof w == "function" && (Vo(t, n, w, r), (g = t.memoizedState)),
        (a = rt || Yu(t, n, a, r, h, g, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, g, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, g, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Yo(e, t, n, r, o, l);
}
function Yo(e, t, n, r, l, o) {
  wc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Wu(t, n, !1), qe(e, t, o);
  (r = t.stateNode), (rp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = hn(t, e.child, null, o)), (t.child = hn(t, null, u, o)))
      : se(e, t, u, o),
    (t.memoizedState = r.state),
    l && Wu(t, n, !0),
    t.child
  );
}
function Sc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Au(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Au(e, t.context, !1),
    Ui(e, t.containerInfo);
}
function ls(e, t, n, r, l) {
  return pn(), ji(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var Xo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Go(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kc(e, t, n) {
  var r = t.pendingProps,
    l = W.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(W, l & 1),
    e === null)
  )
    return (
      Ao(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = zl(i, r, 0, null)),
              (e = It(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Go(n)),
              (t.memoizedState = Xo),
              e)
            : Qi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return lp(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = vt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = vt(u, o)) : ((o = It(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Go(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = vt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qi(e, t) {
  return (
    (t = zl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lr(e, t, n, r) {
  return (
    r !== null && ji(r),
    hn(t, e.child, null, n),
    (e = Qi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = oo(Error(S(422)))), Lr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = zl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = It(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && hn(t, e.child, null, i),
        (t.child.memoizedState = Go(i)),
        (t.memoizedState = Xo),
        o);
  if (!(t.mode & 1)) return Lr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(S(419))), (r = oo(o, r, void 0)), Lr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), he || u)) {
    if (((r = b), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ze(e, l), Me(r, e, l, -1));
    }
    return Zi(), (r = oo(Error(S(421)))), Lr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (we = ft(l.nextSibling)),
      (Se = t),
      (A = !0),
      (Oe = null),
      e !== null &&
        ((Ce[_e++] = Ke),
        (Ce[_e++] = Ye),
        (Ce[_e++] = Dt),
        (Ke = e.id),
        (Ye = e.overflow),
        (Dt = t)),
      (t = Qi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function os(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wo(e.return, t, n);
}
function io(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function xc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && os(e, n, t);
        else if (e.tag === 19) os(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ul(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          io(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ul(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        io(t, !0, n, null, o);
        break;
      case "together":
        io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ar(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ft |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function op(e, t, n) {
  switch (t.tag) {
    case 3:
      Sc(t), pn();
      break;
    case 5:
      Ga(t);
      break;
    case 1:
      ve(t.type) && tl(t);
      break;
    case 4:
      Ui(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(ll, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? kc(e, t, n)
          : (D(W, W.current & 1),
            (e = qe(e, t, n)),
            e !== null ? e.sibling : null);
      D(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gc(e, t, n);
  }
  return qe(e, t, n);
}
var Ec, Jo, Cc, _c;
Ec = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Jo = function () {};
Cc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Tt(We.current);
    var o = null;
    switch (n) {
      case "input":
        (l = go(e, l)), (r = go(e, r)), (o = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ko(e, l)), (r = ko(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = br);
    }
    Eo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Kn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Kn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && U("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
_c = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jn(e, t) {
  if (!A)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ip(e, t, n) {
  var r = t.pendingProps;
  switch ((zi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return ve(t.type) && el(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mn(),
        F(me),
        F(ue),
        $i(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (li(Oe), (Oe = null)))),
        Jo(e, t),
        oe(t),
        null
      );
    case 5:
      Fi(t);
      var l = Tt(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return oe(t), null;
        }
        if (((e = Tt(We.current)), Pr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Be] = t), (r[nr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dn.length; l++) U(Dn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              hu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              vu(r, o), U("invalid", r);
          }
          Eo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Kn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              gr(r), mu(r, o, !0);
              break;
            case "textarea":
              gr(r), yu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = qs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Be] = t),
            (e[nr] = r),
            Ec(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Co(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++) U(Dn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                hu(e, r), (l = go(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                vu(e, r), (l = ko(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            Eo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? ta(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && bs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Yn(e, s)
                    : typeof s == "number" && Yn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Kn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && U("scroll", e)
                      : s != null && mi(e, o, s, i));
              }
            switch (n) {
              case "input":
                gr(e), mu(e, r, !1);
                break;
              case "textarea":
                gr(e), yu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ln(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = br);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) _c(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Tt(lr.current)), Tt(We.current), Pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (o = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (F(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && we !== null && t.mode & 1 && !(t.flags & 128))
          Wa(), pn(), (t.flags |= 98560), (o = !1);
        else if (((o = Pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[Be] = t;
          } else
            pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else Oe !== null && (li(Oe), (Oe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? Z === 0 && (Z = 3) : Zi())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        mn(), Jo(e, t), e === null && er(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Ii(t.type._context), oe(t), null;
    case 17:
      return ve(t.type) && el(), oe(t), null;
    case 19:
      if ((F(W), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) jn(o, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ul(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    jn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > yn &&
            ((t.flags |= 128), (r = !0), jn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ul(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !A)
            )
              return oe(t), null;
          } else
            2 * K() - o.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = W.current),
          D(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        Ji(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function up(e, t) {
  switch ((zi(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && el(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mn(),
        F(me),
        F(ue),
        $i(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fi(t), null;
    case 13:
      if ((F(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(W), null;
    case 4:
      return mn(), null;
    case 10:
      return Ii(t.type._context), null;
    case 22:
    case 23:
      return Ji(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1,
  ie = !1,
  sp = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function Zo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var is = !1;
function ap(e, t) {
  if (((Io = Jr), (e = La()), Ri(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (h = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++a === l && (u = i),
                h === o && ++p === r && (s = i),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Mo = { focusedElem: e, selectionRange: n }, Jr = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    L = g.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : je(t.type, y),
                      L,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (v) {
          Q(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (g = is), (is = !1), g;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Zo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Rl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function qo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Nc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Nc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Be], delete t[nr], delete t[Fo], delete t[Qf], delete t[Kf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Pc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function us(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bo(e, t, n), e = e.sibling; e !== null; ) bo(e, t, n), (e = e.sibling);
}
function ei(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ei(e, t, n), e = e.sibling; e !== null; ) ei(e, t, n), (e = e.sibling);
}
var ee = null,
  Te = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) Rc(e, t, n), (n = n.sibling);
}
function Rc(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(Sl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || nn(n, t);
    case 6:
      var r = ee,
        l = Te;
      (ee = null),
        tt(e, t, n),
        (ee = r),
        (Te = l),
        ee !== null &&
          (Te
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Te
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? bl(e.parentNode, n)
              : e.nodeType === 1 && bl(e, n),
            Zn(e))
          : bl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Te),
        (ee = n.stateNode.containerInfo),
        (Te = !0),
        tt(e, t, n),
        (ee = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Zo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Q(n, t, u);
        }
      tt(e, t, n);
      break;
    case 21:
      tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), tt(e, t, n), (ie = r))
        : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function ss(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sp()),
      t.forEach(function (r) {
        var l = gp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (Te = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (Te = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(S(160));
        Rc(o, i, l), (ee = null), (Te = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        Q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Lc(t, e), (t = t.sibling);
}
function Lc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Fe(e), r & 4)) {
        try {
          Vn(3, e, e.return), Rl(3, e);
        } catch (y) {
          Q(e, e.return, y);
        }
        try {
          Vn(5, e, e.return);
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 1:
      ze(t, e), Fe(e), r & 512 && n !== null && nn(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Fe(e),
        r & 512 && n !== null && nn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Js(l, o),
              Co(u, i);
            var a = Co(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                m = s[i + 1];
              p === "style"
                ? ta(l, m)
                : p === "dangerouslySetInnerHTML"
                ? bs(l, m)
                : p === "children"
                ? Yn(l, m)
                : mi(l, p, m, a);
            }
            switch (u) {
              case "input":
                wo(l, o);
                break;
              case "textarea":
                Zs(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? ln(l, !!o.multiple, w, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ln(l, !!o.multiple, o.defaultValue, !0)
                      : ln(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[nr] = o;
          } catch (y) {
            Q(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zn(t.containerInfo);
        } catch (y) {
          Q(e, e.return, y);
        }
      break;
    case 4:
      ze(t, e), Fe(e);
      break;
    case 13:
      ze(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Xi = K())),
        r & 4 && ss(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || p), ze(t, e), (ie = a)) : ze(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (_ = e, p = e.child; p !== null; ) {
            for (m = _ = p; _ !== null; ) {
              switch (((h = _), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, h, h.return);
                  break;
                case 1:
                  nn(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      Q(r, n, y);
                    }
                  }
                  break;
                case 5:
                  nn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    cs(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (_ = w)) : cs(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (l = m.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ea("display", i)));
              } catch (y) {
                Q(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
              } catch (y) {
                Q(e, e.return, y);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Fe(e), r & 4 && ss(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yn(l, ""), (r.flags &= -33));
          var o = us(e);
          ei(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = us(e);
          bo(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cp(e, t, n) {
  (_ = e), zc(e);
}
function zc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || zr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = zr;
        var a = ie;
        if (((zr = i), (ie = s) && !a))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ds(l)
                : s !== null
                ? ((s.return = i), (_ = s))
                : ds(l);
        for (; o !== null; ) (_ = o), zc(o), (o = o.sibling);
        (_ = l), (zr = u), (ie = a);
      }
      as(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : as(e);
  }
}
function as(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Rl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Ku(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ku(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && Zn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        ie || (t.flags & 512 && qo(t));
      } catch (h) {
        Q(t, t.return, h);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function cs(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ds(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Rl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var o = t.return;
          try {
            qo(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            qo(t);
          } catch (s) {
            Q(t, i, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var dp = Math.ceil,
  cl = be.ReactCurrentDispatcher,
  Ki = be.ReactCurrentOwner,
  Pe = be.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  G = null,
  te = 0,
  ge = 0,
  rn = kt(0),
  Z = 0,
  sr = null,
  Ft = 0,
  Ll = 0,
  Yi = 0,
  Hn = null,
  pe = null,
  Xi = 0,
  yn = 1 / 0,
  He = null,
  dl = !1,
  ti = null,
  ht = null,
  jr = !1,
  ut = null,
  fl = 0,
  Qn = 0,
  ni = null,
  Wr = -1,
  Vr = 0;
function ae() {
  return I & 6 ? K() : Wr !== -1 ? Wr : (Wr = K());
}
function mt(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Xf.transition !== null
      ? (Vr === 0 && (Vr = pa()), Vr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sa(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (ni = null), Error(S(185)));
  dr(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (Ll |= n), Z === 4 && ot(e, te)),
      ye(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((yn = K() + 500), _l && xt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Yd(e, t);
  var r = Gr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && Su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Su(n), t === 1))
      e.tag === 0 ? Yf(fs.bind(null, e)) : $a(fs.bind(null, e)),
        Vf(function () {
          !(I & 6) && xt();
        }),
        (n = null);
    else {
      switch (ha(r)) {
        case 1:
          n = Si;
          break;
        case 4:
          n = da;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = fa;
          break;
        default:
          n = Xr;
      }
      n = Fc(n, jc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function jc(e, t) {
  if (((Wr = -1), (Vr = 0), I & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = Gr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = Oc();
    (b !== e || te !== t) && ((He = null), (yn = K() + 500), Ot(e, t));
    do
      try {
        hp();
        break;
      } catch (u) {
        Tc(e, u);
      }
    while (1);
    Oi(),
      (cl.current = o),
      (I = l),
      G !== null ? (t = 0) : ((b = null), (te = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Lo(e)), l !== 0 && ((r = l), (t = ri(e, l)))), t === 1)
    )
      throw ((n = sr), Ot(e, 0), ot(e, r), ye(e, K()), n);
    if (t === 6) ot(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !fp(l) &&
          ((t = pl(e, r)),
          t === 2 && ((o = Lo(e)), o !== 0 && ((r = o), (t = ri(e, o)))),
          t === 1))
      )
        throw ((n = sr), Ot(e, 0), ot(e, r), ye(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Lt(e, pe, He);
          break;
        case 3:
          if (
            (ot(e, r), (r & 130023424) === r && ((t = Xi + 500 - K()), 10 < t))
          ) {
            if (Gr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Uo(Lt.bind(null, e, pe, He), t);
            break;
          }
          Lt(e, pe, He);
          break;
        case 4:
          if ((ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * dp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Uo(Lt.bind(null, e, pe, He), r);
            break;
          }
          Lt(e, pe, He);
          break;
        case 5:
          Lt(e, pe, He);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === n ? jc.bind(null, e) : null;
}
function ri(e, t) {
  var n = Hn;
  return (
    e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256),
    (e = pl(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && li(t)),
    e
  );
}
function li(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function fp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ot(e, t) {
  for (
    t &= ~Yi,
      t &= ~Ll,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function fs(e) {
  if (I & 6) throw Error(S(327));
  cn();
  var t = Gr(e, 0);
  if (!(t & 1)) return ye(e, K()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lo(e);
    r !== 0 && ((t = r), (n = ri(e, r)));
  }
  if (n === 1) throw ((n = sr), Ot(e, 0), ot(e, t), ye(e, K()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Lt(e, pe, He),
    ye(e, K()),
    null
  );
}
function Gi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((yn = K() + 500), _l && xt());
  }
}
function $t(e) {
  ut !== null && ut.tag === 0 && !(I & 6) && cn();
  var t = I;
  I |= 1;
  var n = Pe.transition,
    r = M;
  try {
    if (((Pe.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Pe.transition = n), (I = t), !(I & 6) && xt();
  }
}
function Ji() {
  (ge = rn.current), F(rn);
}
function Ot(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wf(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((zi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && el();
          break;
        case 3:
          mn(), F(me), F(ue), $i();
          break;
        case 5:
          Fi(r);
          break;
        case 4:
          mn();
          break;
        case 13:
          F(W);
          break;
        case 19:
          F(W);
          break;
        case 10:
          Ii(r.type._context);
          break;
        case 22:
        case 23:
          Ji();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (G = e = vt(e.current, null)),
    (te = ge = t),
    (Z = 0),
    (sr = null),
    (Yi = Ll = Ft = 0),
    (pe = Hn = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    jt = null;
  }
  return e;
}
function Tc(e, t) {
  do {
    var n = G;
    try {
      if ((Oi(), ($r.current = al), sl)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        sl = !1;
      }
      if (
        ((Ut = 0),
        (q = J = V = null),
        (Wn = !1),
        (or = 0),
        (Ki.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (sr = t), (G = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            p = u,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var w = bu(i);
          if (w !== null) {
            (w.flags &= -257),
              es(w, i, u, o, t),
              w.mode & 1 && qu(o, a, t),
              (t = w),
              (s = a);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              qu(o, a, t), Zi();
              break e;
            }
            s = Error(S(426));
          }
        } else if (A && u.mode & 1) {
          var L = bu(i);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              es(L, i, u, o, t),
              ji(vn(s, u));
            break e;
          }
        }
        (o = s = vn(s, u)),
          Z !== 4 && (Z = 2),
          Hn === null ? (Hn = [o]) : Hn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = mc(o, s, t);
              Qu(o, d);
              break e;
            case 1:
              u = s;
              var c = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (ht === null || !ht.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = vc(o, u, t);
                Qu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Mc(n);
    } catch (x) {
      (t = x), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Oc() {
  var e = cl.current;
  return (cl.current = al), e === null ? al : e;
}
function Zi() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    b === null || (!(Ft & 268435455) && !(Ll & 268435455)) || ot(b, te);
}
function pl(e, t) {
  var n = I;
  I |= 2;
  var r = Oc();
  (b !== e || te !== t) && ((He = null), Ot(e, t));
  do
    try {
      pp();
      break;
    } catch (l) {
      Tc(e, l);
    }
  while (1);
  if ((Oi(), (I = n), (cl.current = r), G !== null)) throw Error(S(261));
  return (b = null), (te = 0), Z;
}
function pp() {
  for (; G !== null; ) Ic(G);
}
function hp() {
  for (; G !== null && !Fd(); ) Ic(G);
}
function Ic(e) {
  var t = Uc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mc(e) : (G = t),
    (Ki.current = null);
}
function Mc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = up(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (G = null);
        return;
      }
    } else if (((n = ip(n, t, ge)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Lt(e, t, n) {
  var r = M,
    l = Pe.transition;
  try {
    (Pe.transition = null), (M = 1), mp(e, t, n, r);
  } finally {
    (Pe.transition = l), (M = r);
  }
  return null;
}
function mp(e, t, n, r) {
  do cn();
  while (ut !== null);
  if (I & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Xd(e, o),
    e === b && ((G = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jr ||
      ((jr = !0),
      Fc(Xr, function () {
        return cn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Pe.transition), (Pe.transition = null);
    var i = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Ki.current = null),
      ap(e, n),
      Lc(n, e),
      Mf(Mo),
      (Jr = !!Io),
      (Mo = Io = null),
      (e.current = n),
      cp(n),
      $d(),
      (I = u),
      (M = i),
      (Pe.transition = o);
  } else e.current = n;
  if (
    (jr && ((jr = !1), (ut = e), (fl = l)),
    (o = e.pendingLanes),
    o === 0 && (ht = null),
    Wd(n.stateNode),
    ye(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (dl) throw ((dl = !1), (e = ti), (ti = null), e);
  return (
    fl & 1 && e.tag !== 0 && cn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ni ? Qn++ : ((Qn = 0), (ni = e))) : (Qn = 0),
    xt(),
    null
  );
}
function cn() {
  if (ut !== null) {
    var e = ha(fl),
      t = Pe.transition,
      n = M;
    try {
      if (((Pe.transition = null), (M = 16 > e ? 16 : e), ut === null))
        var r = !1;
      else {
        if (((e = ut), (ut = null), (fl = 0), I & 6)) throw Error(S(331));
        var l = I;
        for (I |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var p = _;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, p, o);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (_ = m);
                  else
                    for (; _ !== null; ) {
                      p = _;
                      var h = p.sibling,
                        w = p.return;
                      if ((Nc(p), p === a)) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = w), (_ = h);
                        break;
                      }
                      _ = w;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var L = y.sibling;
                    (y.sibling = null), (y = L);
                  } while (y !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (_ = d);
                break e;
              }
              _ = o.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          i = _;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) (f.return = i), (_ = f);
          else
            e: for (i = c; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rl(9, u);
                  }
                } catch (x) {
                  Q(u, u.return, x);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (_ = v);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((I = l), xt(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
        )
          try {
            Ae.onPostCommitFiberRoot(Sl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Pe.transition = t);
    }
  }
  return !1;
}
function ps(e, t, n) {
  (t = vn(n, t)),
    (t = mc(e, t, 1)),
    (e = pt(e, t, 1)),
    (t = ae()),
    e !== null && (dr(e, 1, t), ye(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) ps(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ps(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ht === null || !ht.has(r)))
        ) {
          (e = vn(n, e)),
            (e = vc(t, e, 1)),
            (t = pt(t, e, 1)),
            (e = ae()),
            t !== null && (dr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (Z === 4 || (Z === 3 && (te & 130023424) === te && 500 > K() - Xi)
        ? Ot(e, 0)
        : (Yi |= n)),
    ye(e, t);
}
function Dc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kr), (kr <<= 1), !(kr & 130023424) && (kr = 4194304))
      : (t = 1));
  var n = ae();
  (e = Ze(e, t)), e !== null && (dr(e, t, n), ye(e, n));
}
function yp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dc(e, n);
}
function gp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Dc(e, n);
}
var Uc;
Uc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), op(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), A && t.flags & 1048576 && Ba(t, rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ar(e, t), (e = t.pendingProps);
      var l = fn(t, ue.current);
      an(t, n), (l = Ai(null, t, r, e, l, n));
      var o = Wi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((o = !0), tl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Di(t),
            (l.updater = Nl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ho(t, r, e, n),
            (t = Yo(null, t, r, !0, o, n)))
          : ((t.tag = 0), A && o && Li(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ar(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Sp(r)),
          (e = je(r, e)),
          l)
        ) {
          case 0:
            t = Ko(null, t, r, e, n);
            break e;
          case 1:
            t = rs(null, t, r, e, n);
            break e;
          case 11:
            t = ts(null, t, r, e, n);
            break e;
          case 14:
            t = ns(null, t, r, je(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : je(r, l)),
        Ko(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : je(r, l)),
        rs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Sc(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ha(e, t),
          il(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = vn(Error(S(423)), t)), (t = ls(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = vn(Error(S(424)), t)), (t = ls(e, t, r, n, l));
            break e;
          } else
            for (
              we = ft(t.stateNode.containerInfo.firstChild),
                Se = t,
                A = !0,
                Oe = null,
                n = Xa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pn(), r === l)) {
            t = qe(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ga(t),
        e === null && Ao(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Do(r, l) ? (i = null) : o !== null && Do(r, o) && (t.flags |= 32),
        wc(e, t),
        se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ao(t), null;
    case 13:
      return kc(e, t, n);
    case 4:
      return (
        Ui(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : je(r, l)),
        ts(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(ll, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (De(o.value, i)) {
            if (o.children === l.children && !me.current) {
              t = qe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Xe(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Wo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(S(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Wo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        an(t, n),
        (l = Re(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = je(r, t.pendingProps)),
        (l = je(r.type, l)),
        ns(e, t, r, l, n)
      );
    case 15:
      return yc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : je(r, l)),
        Ar(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), tl(t)) : (e = !1),
        an(t, n),
        Ka(t, r, l),
        Ho(t, r, l, n),
        Yo(null, t, r, !0, e, n)
      );
    case 19:
      return xc(e, t, n);
    case 22:
      return gc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Fc(e, t) {
  return ca(e, t);
}
function wp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ne(e, t, n, r) {
  return new wp(e, t, n, r);
}
function qi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sp(e) {
  if (typeof e == "function") return qi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === yi)) return 11;
    if (e === gi) return 14;
  }
  return 2;
}
function vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Hr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) qi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Yt:
        return It(n.children, l, o, t);
      case vi:
        (i = 8), (l |= 8);
        break;
      case ho:
        return (
          (e = Ne(12, n, t, l | 2)), (e.elementType = ho), (e.lanes = o), e
        );
      case mo:
        return (e = Ne(13, n, t, l)), (e.elementType = mo), (e.lanes = o), e;
      case vo:
        return (e = Ne(19, n, t, l)), (e.elementType = vo), (e.lanes = o), e;
      case Ys:
        return zl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qs:
              i = 10;
              break e;
            case Ks:
              i = 9;
              break e;
            case yi:
              i = 11;
              break e;
            case gi:
              i = 14;
              break e;
            case nt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ne(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function It(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function zl(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = Ys),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function uo(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function so(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wl(0)),
    (this.expirationTimes = Wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function bi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new kp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ne(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Di(o),
    e
  );
}
function xp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function $c(e) {
  if (!e) return wt;
  e = e._reactInternals;
  e: {
    if (At(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Fa(e, n, t);
  }
  return t;
}
function Bc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = bi(n, r, !0, e, l, o, i, u, s)),
    (e.context = $c(null)),
    (n = e.current),
    (r = ae()),
    (l = mt(n)),
    (o = Xe(r, l)),
    (o.callback = t ?? null),
    pt(n, o, l),
    (e.current.lanes = l),
    dr(e, l, r),
    ye(e, r),
    e
  );
}
function jl(e, t, n, r) {
  var l = t.current,
    o = ae(),
    i = mt(l);
  return (
    (n = $c(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pt(l, t, i)),
    e !== null && (Me(e, l, i, o), Fr(e, l, i)),
    i
  );
}
function hl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function eu(e, t) {
  hs(e, t), (e = e.alternate) && hs(e, t);
}
function Ep() {
  return null;
}
var Ac =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function tu(e) {
  this._internalRoot = e;
}
Tl.prototype.render = tu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  jl(e, t, null, null);
};
Tl.prototype.unmount = tu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function () {
      jl(null, e, null, null);
    }),
      (t[Je] = null);
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ya();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++);
    lt.splice(n, 0, e), n === 0 && wa(e);
  }
};
function nu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ms() {}
function Cp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = hl(i);
        o.call(a);
      };
    }
    var i = Bc(t, r, e, 0, null, !1, !1, "", ms);
    return (
      (e._reactRootContainer = i),
      (e[Je] = i.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = hl(s);
      u.call(a);
    };
  }
  var s = bi(e, 0, !1, null, null, !1, !1, "", ms);
  return (
    (e._reactRootContainer = s),
    (e[Je] = s.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      jl(t, s, n, r);
    }),
    s
  );
}
function Il(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = hl(i);
        u.call(s);
      };
    }
    jl(t, i, e, l);
  } else i = Cp(n, t, e, l, r);
  return hl(i);
}
ma = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 &&
          (ki(t, n | 1), ye(t, K()), !(I & 6) && ((yn = K() + 500), xt()));
      }
      break;
    case 13:
      $t(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = ae();
          Me(r, e, 1, l);
        }
      }),
        eu(e, 1);
  }
};
xi = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = ae();
      Me(t, e, 134217728, n);
    }
    eu(e, 134217728);
  }
};
va = function (e) {
  if (e.tag === 13) {
    var t = mt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = ae();
      Me(n, e, t, r);
    }
    eu(e, t);
  }
};
ya = function () {
  return M;
};
ga = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
No = function (e, t, n) {
  switch (t) {
    case "input":
      if ((wo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Cl(r);
            if (!l) throw Error(S(90));
            Gs(r), wo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Zs(e, n);
      break;
    case "select":
      (t = n.value), t != null && ln(e, !!n.multiple, t, !1);
  }
};
la = Gi;
oa = $t;
var _p = { usingClientEntryPoint: !1, Events: [pr, Zt, Cl, na, ra, Gi] },
  Tn = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Np = {
    bundleType: Tn.bundleType,
    version: Tn.version,
    rendererPackageName: Tn.rendererPackageName,
    rendererConfig: Tn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: be.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || Ep,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber)
    try {
      (Sl = Tr.inject(Np)), (Ae = Tr);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nu(t)) throw Error(S(200));
  return xp(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!nu(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = Ac;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = bi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Je] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new tu(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = sa(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return $t(e);
};
xe.hydrate = function (e, t, n) {
  if (!Ol(t)) throw Error(S(200));
  return Il(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!nu(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Ac;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Bc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Je] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Tl(t);
};
xe.render = function (e, t, n) {
  if (!Ol(t)) throw Error(S(200));
  return Il(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!Ol(e)) throw Error(S(40));
  return e._reactRootContainer
    ? ($t(function () {
        Il(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Je] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = Gi;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ol(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Il(e, t, n, !1, r);
};
xe.version = "18.2.0-next-9e3b772b8-20220608";
function Wc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc);
    } catch (e) {
      console.error(e);
    }
}
Wc(), (Bs.exports = xe);
var Pp = Bs.exports,
  vs = Pp;
(fo.createRoot = vs.createRoot), (fo.hydrateRoot = vs.hydrateRoot);
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ar() {
  return (
    (ar = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ar.apply(this, arguments)
  );
}
var st;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(st || (st = {}));
const ys = "popstate";
function Rp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return oi(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : ml(l);
  }
  return zp(t, n, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ru(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Lp() {
  return Math.random().toString(36).substr(2, 8);
}
function gs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function oi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ar(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? kn(t) : t,
      { state: n, key: (t && t.key) || r || Lp() },
    )
  );
}
function ml(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function kn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function zp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = st.Pop,
    s = null,
    a = p();
  a == null && ((a = 0), i.replaceState(ar({}, i.state, { idx: a }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    u = st.Pop;
    let L = p(),
      d = L == null ? null : L - a;
    (a = L), s && s({ action: u, location: y.location, delta: d });
  }
  function h(L, d) {
    u = st.Push;
    let c = oi(y.location, L, d);
    n && n(c, L), (a = p() + 1);
    let f = gs(c, a),
      v = y.createHref(c);
    try {
      i.pushState(f, "", v);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      l.location.assign(v);
    }
    o && s && s({ action: u, location: y.location, delta: 1 });
  }
  function w(L, d) {
    u = st.Replace;
    let c = oi(y.location, L, d);
    n && n(c, L), (a = p());
    let f = gs(c, a),
      v = y.createHref(c);
    i.replaceState(f, "", v),
      o && s && s({ action: u, location: y.location, delta: 0 });
  }
  function g(L) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof L == "string" ? L : ml(L);
    return (
      Y(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          c,
      ),
      new URL(c, d)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(L) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ys, m),
        (s = L),
        () => {
          l.removeEventListener(ys, m), (s = null);
        }
      );
    },
    createHref(L) {
      return t(l, L);
    },
    createURL: g,
    encodeLocation(L) {
      let d = g(L);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: h,
    replace: w,
    go(L) {
      return i.go(L);
    },
  };
  return y;
}
var ws;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ws || (ws = {}));
function jp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? kn(t) : t,
    l = lu(r.pathname || "/", n);
  if (l == null) return null;
  let o = Vc(e);
  Tp(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Ap(o[u], Hp(l));
  return i;
}
function Vc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (Y(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = yt([r, s.relativePath]),
      p = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (Y(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".'),
      ),
      Vc(o.children, t, p, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: $p(a, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of Hc(o.path)) l(o, i, s);
    }),
    t
  );
}
function Hc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Hc(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Tp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Bp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Op = /^:\w+$/,
  Ip = 3,
  Mp = 2,
  Dp = 1,
  Up = 10,
  Fp = -2,
  Ss = (e) => e === "*";
function $p(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ss) && (r += Fp),
    t && (r += Mp),
    n
      .filter((l) => !Ss(l))
      .reduce((l, o) => l + (Op.test(o) ? Ip : o === "" ? Dp : Up), r)
  );
}
function Bp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ap(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      p = Wp(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a,
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let m = u.route;
    o.push({
      params: r,
      pathname: yt([l, p.pathname]),
      pathnameBase: Xp(yt([l, p.pathnameBase])),
      route: m,
    }),
      p.pathnameBase !== "/" && (l = yt([l, p.pathnameBase]));
  }
  return o;
}
function Wp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Vp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, p, m) => {
      if (p === "*") {
        let h = u[m] || "";
        i = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (a[p] = Qp(u[m] || "", p)), a;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Vp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ru(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Hp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ru(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Qp(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      ru(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function lu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Kp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? kn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Yp(n, t)) : t,
    search: Gp(r),
    hash: Jp(l),
  };
}
function Yp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ao(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ou(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function iu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = kn(e))
    : ((l = ar({}, e)),
      Y(
        !l.pathname || !l.pathname.includes("?"),
        ao("?", "pathname", "search", l),
      ),
      Y(
        !l.pathname || !l.pathname.includes("#"),
        ao("#", "pathname", "hash", l),
      ),
      Y(!l.search || !l.search.includes("#"), ao("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let m = t.length - 1;
    if (i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (m -= 1);
      l.pathname = h.join("/");
    }
    u = m >= 0 ? t[m] : "/";
  }
  let s = Kp(l, u),
    a = i && i !== "/" && i.endsWith("/"),
    p = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || p) && (s.pathname += "/"), s;
}
const yt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Xp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Gp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Jp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Zp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Qc = ["post", "put", "patch", "delete"];
new Set(Qc);
const qp = ["get", ...Qc];
new Set(qp);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vl() {
  return (
    (vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vl.apply(this, arguments)
  );
}
const uu = k.createContext(null),
  bp = k.createContext(null),
  xn = k.createContext(null),
  Ml = k.createContext(null),
  Et = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Kc = k.createContext(null);
function eh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  En() || Y(!1);
  let { basename: r, navigator: l } = k.useContext(xn),
    { hash: o, pathname: i, search: u } = Gc(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : yt([r, i])),
    l.createHref({ pathname: s, search: u, hash: o })
  );
}
function En() {
  return k.useContext(Ml) != null;
}
function Wt() {
  return En() || Y(!1), k.useContext(Ml).location;
}
function Yc(e) {
  k.useContext(xn).static || k.useLayoutEffect(e);
}
function Xc() {
  let { isDataRoute: e } = k.useContext(Et);
  return e ? ph() : th();
}
function th() {
  En() || Y(!1);
  let e = k.useContext(uu),
    { basename: t, navigator: n } = k.useContext(xn),
    { matches: r } = k.useContext(Et),
    { pathname: l } = Wt(),
    o = JSON.stringify(ou(r).map((s) => s.pathnameBase)),
    i = k.useRef(!1);
  return (
    Yc(() => {
      i.current = !0;
    }),
    k.useCallback(
      function (s, a) {
        if ((a === void 0 && (a = {}), !i.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let p = iu(s, JSON.parse(o), l, a.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : yt([t, p.pathname])),
          (a.replace ? n.replace : n.push)(p, a.state, a);
      },
      [t, n, o, l, e],
    )
  );
}
function Gc(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = k.useContext(Et),
    { pathname: l } = Wt(),
    o = JSON.stringify(ou(r).map((i) => i.pathnameBase));
  return k.useMemo(() => iu(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function nh(e, t) {
  return rh(e, t);
}
function rh(e, t, n) {
  En() || Y(!1);
  let { navigator: r } = k.useContext(xn),
    { matches: l } = k.useContext(Et),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Wt(),
    a;
  if (t) {
    var p;
    let y = typeof t == "string" ? kn(t) : t;
    u === "/" || ((p = y.pathname) != null && p.startsWith(u)) || Y(!1),
      (a = y);
  } else a = s;
  let m = a.pathname || "/",
    h = u === "/" ? m : m.slice(u.length) || "/",
    w = jp(e, { pathname: h }),
    g = sh(
      w &&
        w.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: yt([
              u,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? u
                : yt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          }),
        ),
      l,
      n,
    );
  return t && g
    ? k.createElement(
        Ml.Provider,
        {
          value: {
            location: vl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              a,
            ),
            navigationType: st.Pop,
          },
        },
        g,
      )
    : g;
}
function lh() {
  let e = fh(),
    t = Zp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: l }, n) : null,
    o,
  );
}
const oh = k.createElement(lh, null);
class ih extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? k.createElement(
          Et.Provider,
          { value: this.props.routeContext },
          k.createElement(Kc.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function uh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(uu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Et.Provider, { value: t }, r)
  );
}
function sh(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (s) => s.route.id && (i == null ? void 0 : i[s.route.id]),
    );
    u >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, s, a) => {
    let p = s.route.id ? (i == null ? void 0 : i[s.route.id]) : null,
      m = null;
    n && (m = s.route.errorElement || oh);
    let h = t.concat(o.slice(0, a + 1)),
      w = () => {
        let g;
        return (
          p
            ? (g = m)
            : s.route.Component
            ? (g = k.createElement(s.route.Component, null))
            : s.route.element
            ? (g = s.route.element)
            : (g = u),
          k.createElement(uh, {
            match: s,
            routeContext: { outlet: u, matches: h, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? k.createElement(ih, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: p,
          children: w(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : w();
  }, null);
}
var Jc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Jc || {}),
  yl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(yl || {});
function ah(e) {
  let t = k.useContext(uu);
  return t || Y(!1), t;
}
function ch(e) {
  let t = k.useContext(bp);
  return t || Y(!1), t;
}
function dh(e) {
  let t = k.useContext(Et);
  return t || Y(!1), t;
}
function Zc(e) {
  let t = dh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Y(!1), n.route.id;
}
function fh() {
  var e;
  let t = k.useContext(Kc),
    n = ch(yl.UseRouteError),
    r = Zc(yl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function ph() {
  let { router: e } = ah(Jc.UseNavigateStable),
    t = Zc(yl.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Yc(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, vl({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
function ks(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  En() || Y(!1);
  let { matches: o } = k.useContext(Et),
    { pathname: i } = Wt(),
    u = Xc(),
    s = iu(
      t,
      ou(o).map((p) => p.pathnameBase),
      i,
      l === "path",
    ),
    a = JSON.stringify(s);
  return (
    k.useEffect(
      () => u(JSON.parse(a), { replace: n, state: r, relative: l }),
      [u, a, l, n, r],
    ),
    null
  );
}
function Qt(e) {
  Y(!1);
}
function hh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = st.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  En() && Y(!1);
  let u = t.replace(/^\/*/, "/"),
    s = k.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = kn(r));
  let {
      pathname: a = "/",
      search: p = "",
      hash: m = "",
      state: h = null,
      key: w = "default",
    } = r,
    g = k.useMemo(() => {
      let y = lu(a, u);
      return y == null
        ? null
        : {
            location: { pathname: y, search: p, hash: m, state: h, key: w },
            navigationType: l,
          };
    }, [u, a, p, m, h, w, l]);
  return g == null
    ? null
    : k.createElement(
        xn.Provider,
        { value: s },
        k.createElement(Ml.Provider, { children: n, value: g }),
      );
}
function mh(e) {
  let { children: t, location: n } = e;
  return nh(ii(t), n);
}
new Promise(() => {});
function ii(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === k.Fragment) {
        n.push.apply(n, ii(r.props.children, o));
        return;
      }
      r.type !== Qt && Y(!1), !r.props.index || !r.props.children || Y(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = ii(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ui() {
  return (
    (ui = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ui.apply(this, arguments)
  );
}
function vh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function yh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function gh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !yh(e);
}
const wh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Sh = "startTransition",
  xs = vd[Sh];
function kh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = k.useRef();
  o.current == null && (o.current = Rp({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = k.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    p = k.useCallback(
      (m) => {
        a && xs ? xs(() => s(m)) : s(m);
      },
      [s, a],
    );
  return (
    k.useLayoutEffect(() => i.listen(p), [i, p]),
    k.createElement(hh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
    })
  );
}
const xh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Eh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  si = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: s,
        to: a,
        preventScrollReset: p,
      } = t,
      m = vh(t, wh),
      { basename: h } = k.useContext(xn),
      w,
      g = !1;
    if (typeof a == "string" && Eh.test(a) && ((w = a), xh))
      try {
        let c = new URL(window.location.href),
          f = a.startsWith("//") ? new URL(c.protocol + a) : new URL(a),
          v = lu(f.pathname, h);
        f.origin === c.origin && v != null
          ? (a = v + f.search + f.hash)
          : (g = !0);
      } catch {}
    let y = eh(a, { relative: l }),
      L = Ch(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: p,
        relative: l,
      });
    function d(c) {
      r && r(c), c.defaultPrevented || L(c);
    }
    return k.createElement(
      "a",
      ui({}, m, { href: w || y, onClick: g || o ? r : d, ref: n, target: s }),
    );
  });
var Es;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Es || (Es = {}));
var Cs;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Cs || (Cs = {}));
function Ch(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = Xc(),
    s = Wt(),
    a = Gc(e, { relative: i });
  return k.useCallback(
    (p) => {
      if (gh(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : ml(s) === ml(a);
        u(e, { replace: m, state: l, preventScrollReset: o, relative: i });
      }
    },
    [s, u, a, r, l, n, e, o, i],
  );
}
const gl = [
    {
      user: "600-97684",
      level: "9",
      orders: "69",
      events: [
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "late",
        "order",
        "order",
        "order",
        "order",
        "order",
        "late",
        "order",
        "order",
        "late",
        "order",
        "late",
        "order",
        "late",
        "order",
        "late",
        "order",
        "late",
        "order",
        "late",
        "order",
        "order",
      ],
    },
    {
      user: "333-30107",
      level: "0",
      orders: "8",
      events: [
        "order",
        "order",
        "order",
        "ntd",
        "order",
        "order",
        "ntd",
        "ntd",
        "ntd",
        "order",
        "order",
        "ntd",
        "ntd",
        "order",
        "ntd",
        "ntd",
      ],
    },
    {
      user: "480-11012",
      level: "5",
      orders: "63",
      events: [
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "ntd",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "ntd",
        "order",
        "order",
        "ntd",
        "ntd",
        "order",
        "order",
        "order",
        "order",
        "ntd",
      ],
    },
    {
      user: "780-97718",
      level: "1",
      orders: "14",
      events: [
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "ntd",
        "ntd",
        "ntd",
      ],
    },
    {
      user: "333-01320",
      level: "9",
      orders: "94",
      events: [
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "ntd",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "late",
        "order",
        "order",
        "order",
        "order",
        "order",
        "late",
        "order",
        "late",
      ],
    },
    {
      user: "505-14946",
      level: "6",
      orders: "61",
      events: [
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "ntd",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "ntd",
        "ntd",
      ],
    },
    {
      user: "360-23297",
      level: "0",
      orders: "8",
      events: [
        "order",
        "order",
        "order",
        "order",
        "order",
        "order",
        "ntd",
        "ntd",
        "ntd",
        "order",
        "order",
        "ntd",
        "ntd",
      ],
    },
  ],
  _h = (e) => {
    const t = k.useRef(),
      n = () => {
        let s = 20;
        e.changeRating("order", s, "", !0);
      },
      r = () => {
        e.setShowLateCount((s) => s + 1), e.changeRating("late", 50, "", !0);
      },
      l = () => {
        e.changeRating("ntd", 50, "", !0);
      },
      o = () => {
        e.changeRating("clear");
      },
      i = (s) => {
        s.key === "Enter" &&
          (e.changeRating("input", 0, t.current.value), (t.current.value = ""));
      };
    let u;
    return (
      k.useEffect(() => {
        if (e.data.isExample && e.data.currId)
          return (
            gl[e.data.currId].events.forEach((s, a) => {
              u = setTimeout(() => {
                if (e.data.leave) return null;
                s === "order" ? n() : s === "late" ? r() : s === "ntd" && l();
              }, a * 50);
            }),
            () => {
              clearTimeout(u);
            }
          );
      }, []),
      C.jsx("div", {
        className: "options_navigation",
        children:
          !e.data.isExample &&
          C.jsxs(C.Fragment, {
            children: [
              C.jsx("div", { className: "title", children: "Действия:" }),
              C.jsxs("div", {
                className: "buttons_block",
                children: [
                  C.jsx("button", {
                    onClick: () => n(),
                    children: "+ 1 заказ",
                  }),
                  C.jsx("button", {
                    onClick: () => r(),
                    children: "Опоздание",
                  }),
                  C.jsx("button", { onClick: () => l(), children: "НТД" }),
                  C.jsx("button", {
                    onClick: () => o(),
                    children: "Очистить данные",
                  }),
                  C.jsx("input", {
                    className: "input",
                    ref: t,
                    placeholder: "Введите рейтинг",
                    onKeyDown: () => i(event),
                    type: "text",
                  }),
                ],
              }),
            ],
          }),
      })
    );
  },
  Nh = "_actionList_1qyhi_1",
  Ph = "_action_list_1qyhi_7",
  co = { actionList: Nh, action_list: Ph },
  Rh = "_action_item_y8pno_1",
  Lh = { action_item: Rh },
  zh = ({ item: { idx: e, type: t, rate: n, well: r } }) =>
    C.jsxs("div", {
      className: Lh.action_item,
      children: [
        C.jsxs("div", { children: [e, ". ", t] }),
        n && C.jsxs("div", { children: [r, " ", n, " рейтинг"] }),
      ],
    }),
  jh = ({ actionList: e }) =>
    C.jsxs("div", {
      className: co.actionList,
      children: [
        C.jsx("div", {
          className: co.header,
          children: "Действия пользователя:",
        }),
        C.jsx("div", {
          className: co.action_list,
          children:
            e.length > 0 &&
            e.map((t, n) =>
              C.jsx(
                zh,
                {
                  item: {
                    idx: n + 1,
                    type: t.action,
                    rate: t.points,
                    well: t.well,
                  },
                },
                n,
              ),
            ),
        }),
      ],
    });
function _s({ isExample: e }) {
  const [t, n] = k.useState(500),
    [r, l] = k.useState(0),
    [o, i] = k.useState(0),
    [u, s] = k.useState(0),
    [a, p] = k.useState(0),
    [m, h] = k.useState(),
    [w, g] = k.useState([]),
    [y, L] = k.useState(),
    [d, c] = k.useState(0),
    [f, v] = k.useState(500),
    x = k.useRef(),
    [P, N] = k.useState(0),
    [R, $] = k.useState(!1),
    T = Wt(),
    fe = (re, Ue, Ct, _t) => {
      switch (re) {
        case "input":
          Ct > 1e3 ? n(1e3) : Ct < 0 ? n(0) : n(Ct);
          break;
        case "order":
          p(0),
            l((E) => {
              let z = E + 1;
              return (
                z >= 6
                  ? ((Ue = 10), n((j) => (j + 10 > 1e3 ? 1e3 : j + 10)))
                  : t + Ue <= 1e3
                  ? n((j) => j + Ue)
                  : n(1e3),
                h({ action: re, points: Ue, well: "+" }),
                z
              );
            });
          break;
        case "ntd":
        case "late":
          if (
            (re == "late" &&
              i((E) => {
                let z = E + 1;
                return (
                  z == 3 &&
                    ((z = 0),
                    h(() => ({ action: re, points: 50, well: "-" })),
                    n((j) => j - 50)),
                  z
                );
              }),
            o >= 2 && re == "late")
          ) {
            _t && h({ action: re, points: 50, well: "-" }), i(0);
            break;
          } else
            o < 2 && re == "late"
              ? _t && h({ action: re })
              : re == "ntd" &&
                p((E) => {
                  let z = E + 1;
                  return (
                    (Ue = z * 50),
                    t - Ue >= 0
                      ? n((j) => {
                          let B = j - Ue;
                          return c((X) => X + 1), B < 0 ? 0 : B;
                        })
                      : n(0),
                    _t && h({ action: re, points: Ue, well: "-" }),
                    z
                  );
                });
          break;
        case "clear":
          g([]), n(500), l(0), i(0), p(0), s(0), N(() => 0), v(500);
          break;
      }
      et();
    },
    et = () => {
      x.current.style.left = `${t / 10}%`;
    };
  return (
    k.useEffect(() => {
      if (w.length) {
        const re = [...w, m];
        g(re);
      } else m && g([m]);
    }, [m, h]),
    k.useEffect(() => {
      et();
    }),
    k.useEffect(() => {
      t > f &&
        (v(() => t),
        t >= 600 && P < 600 && N(() => 600),
        t === 700 && P < 1300 && N(() => 1300),
        t === 800 && P < 2100 && N(() => 2100),
        t === 900 && P < 3e3 && N(() => 3e3),
        t === 1e3 && N(() => 4e3));
    }, [t]),
    k.useEffect(() => {
      fe("clear"), $(!0);
    }, [T]),
    k.useEffect(() => {
      $(!1);
    }, []),
    (() => {
      y || (T.pathname.split("/")[2] && L(T.pathname.split("/")[2]));
    })(),
    C.jsxs("div", {
      children: [
        C.jsx("div", {
          children:
            t < 200 && C.jsx("div", { children: "Внимание, низкий рейтинг" }),
        }),
        C.jsx("div", {
          className: "rating_block",
          children: C.jsxs("div", {
            className: "rating_line",
            children: [
              C.jsxs("div", {
                className: "rating_value",
                children: [t, " Rate"],
              }),
              C.jsx("div", { ref: x, className: "rating_line_inner" }),
            ],
          }),
        }),
        C.jsxs("div", {
          className: "profile_params",
          children: [
            C.jsxs("div", {
              className: "profile_block",
              children: [
                C.jsxs("div", {
                  className: "title",
                  children: ["Данные профиля ", e && y && gl[y].user, ":"],
                }),
                C.jsxs("div", {
                  className: "profile_item",
                  children: [
                    "Уровень",
                    C.jsx("span", {
                      className: "level_element",
                      children: Math.floor(t / 100),
                    }),
                  ],
                }),
                C.jsxs("div", {
                  className: "profile_item",
                  children: ["Заказов выполнено: ", r],
                }),
                C.jsxs("div", {
                  className: "profile_item",
                  children: ["Опозданий всего: ", u],
                }),
                C.jsxs("div", {
                  className: "profile_item",
                  children: ["НТД: ", d],
                }),
                C.jsxs("div", {
                  className: "profile_item",
                  children: ["Максимальный рейтинг: ", f],
                }),
                C.jsxs("div", {
                  className: "profile_item",
                  children: ["Бонус: ", P],
                }),
              ],
            }),
            C.jsx("div", {
              className: "actions_block",
              children: C.jsx(jh, { actionList: w }),
            }),
          ],
        }),
        C.jsx(_h, {
          changeRating: fe,
          setNoshowstreak: p,
          setErrorStreak: i,
          setShowLateCount: s,
          setOrdersCount: l,
          data: {
            noShowStreak: a,
            errorStreak: o,
            ordersCount: r,
            showLateCount: u,
            rating: t,
            isExample: e,
            currId: y,
            leave: R,
          },
        }),
      ],
    })
  );
}
const Th = "_header_19ec8_1",
  Oh = "_nav_19ec8_4",
  Ih = "_nav_list_19ec8_4",
  Mh = "_nav_item_19ec8_12",
  Dh = "_active_19ec8_28",
  Ve = { header: Th, nav: Oh, nav_list: Ih, nav_item: Mh, active: Dh };
var qc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], l = 0; l < arguments.length; l++) {
        var o = arguments[l];
        if (o) {
          var i = typeof o;
          if (i === "string" || i === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var u = n.apply(null, o);
              u && r.push(u);
            }
          } else if (i === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var s in o) t.call(o, s) && o[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(qc);
var Uh = qc.exports;
const Ns = Ls(Uh);
function Fh() {
  let e = Wt();
  return C.jsx("header", {
    className: Ve.header,
    children: C.jsx("nav", {
      className: Ve.nav,
      children: C.jsxs("ul", {
        className: Ve.nav_list,
        children: [
          C.jsx("li", {
            className: Ve.nav_list,
            children: C.jsx(si, {
              to: "/examples",
              className: Ns(Ve.nav_item, {
                [Ve.active]: e.pathname === "/examples",
              }),
              children: "Примеры",
            }),
          }),
          C.jsx("li", {
            className: Ve.nav_list,
            children: C.jsx(si, {
              to: "/sandbox",
              className: Ns(Ve.nav_item, {
                [Ve.active]: e.pathname === "/sandbox",
              }),
              children: "Песочница",
            }),
          }),
        ],
      }),
    }),
  });
}
const $h = "_exampleCard_hs7x8_1",
  Bh = "_card_header_hs7x8_17",
  Ah = "_card_parameters_hs7x8_26",
  Ps = { exampleCard: $h, card_header: Bh, card_parameters: Ah };
function Wh({ props: e }) {
  return C.jsx("div", {
    className: Ps.exampleCard,
    children: C.jsxs("div", {
      className: Ps.card_header,
      children: [
        C.jsx("div", { children: e.user }),
        C.jsxs("div", { children: ["заказов: ", e.orders] }),
        C.jsxs("div", { children: ["уровень: ", e.level] }),
      ],
    }),
  });
}
const Vh = "_cards_1u2is_1",
  Hh = "_card_1u2is_1",
  Rs = { cards: Vh, card: Hh };
function Qh() {
  return C.jsx("div", {
    children: C.jsx("div", {
      className: Rs.cards,
      children:
        gl &&
        gl.map((e, t) =>
          C.jsx(
            si,
            {
              className: Rs.card,
              to: `/examples/${t}`,
              children: C.jsx(Wh, {
                props: { user: e.user, level: e.level, orders: e.orders },
              }),
            },
            t,
          ),
        ),
    }),
  });
}
function Kh() {
  return C.jsxs("div", {
    className: "App",
    children: [
      C.jsx(Fh, {}),
      C.jsx("div", {
        className: "pages",
        children: C.jsxs(mh, {
          children: [
            C.jsx(Qt, { path: "/", element: C.jsx(ks, { to: "/examples" }) }),
            C.jsx(Qt, {
              path: "/examples/:id",
              element: C.jsx(_s, { isExample: { isExample: !0 } }),
            }),
            C.jsx(Qt, {
              path: "/rating-test",
              element: C.jsx(ks, { to: "/examples" }),
            }),
            C.jsx(Qt, { path: "/sandbox", element: C.jsx(_s, {}) }),
            C.jsx(Qt, { path: "/examples", element: C.jsx(Qh, {}) }),
          ],
        }),
      }),
    ],
  });
}
fo.createRoot(document.getElementById("root")).render(
  C.jsx(kh, { children: C.jsx(Kh, {}) }),
);
