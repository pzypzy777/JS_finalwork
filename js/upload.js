!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(self, function () {
  return (function () {
    var e = {
        90: function (e) {
          e.exports = (function () {
            "use strict";
            var e = {
                612: function (e, t, n) {
                  function r(e) {
                    return (r =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          })(e);
                  }
                  function o(e, t) {
                    return !t || ("object" !== r(t) && "function" != typeof t)
                      ? (function (e) {
                          if (void 0 === e)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          return e;
                        })(e)
                      : t;
                  }
                  function i(e) {
                    var t = "function" == typeof Map ? new Map() : void 0;
                    return (i = function (e) {
                      if (
                        null === e ||
                        ((n = e),
                        -1 ===
                          Function.toString.call(n).indexOf("[native code]"))
                      )
                        return e;
                      var n;
                      if ("function" != typeof e)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r);
                      }
                      function r() {
                        return u(e, arguments, s(this).constructor);
                      }
                      return (
                        (r.prototype = Object.create(e.prototype, {
                          constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                        c(r, e)
                      );
                    })(e);
                  }
                  function u(e, t, n) {
                    return (u = a()
                      ? Reflect.construct
                      : function (e, t, n) {
                          var r = [null];
                          r.push.apply(r, t);
                          var o = new (Function.bind.apply(e, r))();
                          return n && c(o, n.prototype), o;
                        }).apply(null, arguments);
                  }
                  function a() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Date.prototype.toString.call(
                          Reflect.construct(Date, [], function () {})
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  }
                  function c(e, t) {
                    return (c =
                      Object.setPrototypeOf ||
                      function (e, t) {
                        return (e.__proto__ = t), e;
                      })(e, t);
                  }
                  function s(e) {
                    return (s = Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                        })(e);
                  }
                  n.r(t),
                    n.d(t, {
                      AccountFeaturesPreset: function () {
                        return l;
                      },
                      AccountQuotasPreset: function () {
                        return f;
                      },
                      ApiError: function () {
                        return P;
                      },
                      ApiKeyType: function () {
                        return p;
                      },
                      FilesService: function () {
                        return x;
                      },
                      FreeTrialPackageId: function () {
                        return d;
                      },
                      FreeUploadPlanId: function () {
                        return h;
                      },
                      OpenAPI: function () {
                        return E;
                      },
                      PaidUploadPlanId: function () {
                        return y;
                      },
                      PublicKeyFingerprintHashAlgorithm: function () {
                        return v;
                      },
                      TemplateIcon: function () {
                        return b;
                      },
                      TransformationCacheStatus: function () {
                        return m;
                      },
                      UserRoleType: function () {
                        return g;
                      },
                      request: function () {
                        return R;
                      },
                    });
                  var l,
                    f,
                    p,
                    d,
                    h,
                    y,
                    v,
                    b,
                    m,
                    g,
                    P = (function (e) {
                      !(function (e, t) {
                        if ("function" != typeof t && null !== t)
                          throw new TypeError(
                            "Super expression must either be null or a function"
                          );
                        (e.prototype = Object.create(t && t.prototype, {
                          constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          t && c(e, t);
                      })(i, e);
                      var t,
                        n,
                        r =
                          ((t = i),
                          (n = a()),
                          function () {
                            var e,
                              r = s(t);
                            if (n) {
                              var i = s(this).constructor;
                              e = Reflect.construct(r, arguments, i);
                            } else e = r.apply(this, arguments);
                            return o(this, e);
                          });
                      function i(e, t) {
                        var n;
                        return (
                          (function (e, t) {
                            if (!(e instanceof t))
                              throw new TypeError(
                                "Cannot call a class as a function"
                              );
                          })(this, i),
                          ((n = r.call(this, t)).url = e.url),
                          (n.status = e.status),
                          (n.statusText = e.statusText),
                          (n.body = e.body),
                          n
                        );
                      }
                      return i;
                    })(i(Error)),
                    E = {
                      BASE: "/",
                      VERSION: "0.1.1259",
                      WITH_CREDENTIALS: !1,
                      TOKEN: void 0,
                      USERNAME: void 0,
                      PASSWORD: void 0,
                      HEADERS: void 0,
                    };
                  function A(e) {
                    return function () {
                      for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      try {
                        return Promise.resolve(e.apply(this, t));
                      } catch (e) {
                        return Promise.reject(e);
                      }
                    };
                  }
                  function S(e, t, n) {
                    return n
                      ? t
                        ? t(e)
                        : e
                      : ((e && e.then) || (e = Promise.resolve(e)),
                        t ? e.then(t) : e);
                  }
                  function I(e) {
                    return null != e;
                  }
                  function T(e) {
                    return "string" == typeof e;
                  }
                  function w(e) {
                    return T(e) && "" !== e;
                  }
                  function O(e) {
                    return e instanceof Blob;
                  }
                  !(function (e) {
                    (e.FREE_TRIAL = "freeTrial"),
                      (e.FREE = "free"),
                      (e.BASIC = "basic"),
                      (e.PRO = "pro"),
                      (e.BUSINESS = "business");
                  })(l || (l = {})),
                    (function (e) {
                      (e._10 = "10"),
                        (e._50 = "50"),
                        (e._100 = "100"),
                        (e._150 = "150"),
                        (e._200 = "200"),
                        (e._250 = "250"),
                        (e._300 = "300"),
                        (e._500 = "500"),
                        (e._750 = "750"),
                        (e._1024 = "1024"),
                        (e.FREE_TRIAL = "freeTrial"),
                        (e.FREE = "free");
                    })(f || (f = {})),
                    (function (e) {
                      (e.PUBLIC = "public"), (e.SECRET = "secret");
                    })(p || (p = {})),
                    (function (e) {
                      (e.GB10TRIAL = "gb10Trial"),
                        (e.GB50TRIAL = "gb50Trial"),
                        (e.GB300TRIAL = "gb300Trial");
                    })(d || (d = {})),
                    (function (e) {
                      (e.GB10TRIAL = "gb10Trial"),
                        (e.GB50TRIAL = "gb50Trial"),
                        (e.GB300TRIAL = "gb300Trial");
                    })(h || (h = {})),
                    (function (e) {
                      (e.GB10 = "gb10"), (e.GB50 = "gb50"), (e.GB300 = "gb300");
                    })(y || (y = {})),
                    (function (e) {
                      e.SHA256 = "sha256";
                    })(v || (v = {})),
                    (function (e) {
                      (e.VIDEO_WATERMARK = "VideoWatermark"),
                        (e.VIDEO_TRIM = "VideoTrim"),
                        (e.VIDEO_TRANSCODE = "VideoTranscode"),
                        (e.VIDEO_THUMBNAILS = "VideoThumbnails"),
                        (e.VIDEO_RESIZE = "VideoResize"),
                        (e.VIDEO_QUALITY = "VideoQuality"),
                        (e.ANTI_VIRUS = "AntiVirus"),
                        (e.ARCHIVE_COMPRESS = "ArchiveCompress"),
                        (e.ARCHIVE_EXTRACT = "ArchiveExtract"),
                        (e.CUSTOM_CODE = "CustomCode"),
                        (e.IMAGE_WATERMARK = "ImageWatermark"),
                        (e.IMAGE_RESIZE = "ImageResize"),
                        (e.IMAGE_CROP = "ImageCrop"),
                        (e.IMAGE_CONVERT = "ImageConvert"),
                        (e.IMAGE_QUALITY = "ImageQuality"),
                        (e.IMAGE_EXIF = "ImageExif");
                    })(b || (b = {})),
                    (function (e) {
                      (e.OK = "ok"), (e.DELETING = "deleting");
                    })(m || (m = {})),
                    (function (e) {
                      (e.ACCOUNT_ADMIN = "AccountAdmin"),
                        (e.ACCOUNT_OBSERVER = "AccountObserver"),
                        (e.SYSTEM_ADMIN = "SystemAdmin"),
                        (e.SYSTEM_OBSERVER = "SystemObserver");
                    })(g || (g = {}));
                  var R = A(function (e) {
                      var t = (function (e) {
                        var t,
                          n,
                          r = e.path.replace(/[:]/g, "_"),
                          o = "".concat(E.BASE).concat(r);
                        return e.query
                          ? "".concat(o).concat(
                              ((t = e.query),
                              (n = []),
                              Object.keys(t).forEach(function (e) {
                                var r = t[e];
                                I(r) &&
                                  (Array.isArray(r)
                                    ? r.forEach(function (t) {
                                        n.push(
                                          ""
                                            .concat(encodeURIComponent(e), "=")
                                            .concat(
                                              encodeURIComponent(String(t))
                                            )
                                        );
                                      })
                                    : n.push(
                                        ""
                                          .concat(encodeURIComponent(e), "=")
                                          .concat(encodeURIComponent(String(r)))
                                      ));
                              }),
                              n.length > 0 ? "?".concat(n.join("&")) : "")
                            )
                          : o;
                      })(e);
                      return S(j(e, t), function (n) {
                        var r,
                          o = (function (e) {
                            try {
                              var t = e.getResponseHeader("Content-Type");
                              if (t)
                                return t
                                  .toLowerCase()
                                  .startsWith("application/json")
                                  ? JSON.parse(e.responseText)
                                  : e.responseText;
                            } catch (e) {
                              console.error(e);
                            }
                            return null;
                          })(n),
                          i = (function (e, t) {
                            if (t) {
                              var n = e.getResponseHeader(t);
                              if (T(n)) return n;
                            }
                            return null;
                          })(n, e.responseHeader),
                          u = {
                            url: t,
                            ok: ((r = n.status), r >= 200 && r < 300),
                            status: n.status,
                            statusText: n.statusText,
                            body: i || o,
                          };
                        return (
                          (function (e, t) {
                            var n = Object.assign(
                              {
                                400: "Bad Request",
                                401: "Unauthorized",
                                403: "Forbidden",
                                404: "Not Found",
                                500: "Internal Server Error",
                                502: "Bad Gateway",
                                503: "Service Unavailable",
                              },
                              e.errors
                            )[t.status];
                            if (n) throw new P(t, n);
                            if (!t.ok) throw new P(t, "Generic Error");
                          })(e, u),
                          u
                        );
                      });
                    }),
                    j = A(function (e, t) {
                      var n = new XMLHttpRequest();
                      return (
                        n.open(e.method, t, !0),
                        (n.withCredentials = E.WITH_CREDENTIALS),
                        S(k(e), function (t) {
                          return (
                            t.forEach(function (e, t) {
                              n.setRequestHeader(t, e);
                            }),
                            new Promise(function (t) {
                              (n.onreadystatechange = function () {
                                n.readyState === XMLHttpRequest.DONE && t(n);
                              }),
                                n.send(
                                  (function (e) {
                                    return e.formData
                                      ? ((t = e.formData),
                                        (n = new FormData()),
                                        Object.keys(t).forEach(function (e) {
                                          var r = t[e];
                                          I(r) && n.append(e, r);
                                        }),
                                        n)
                                      : e.body
                                      ? T(e.body) || O(e.body)
                                        ? e.body
                                        : JSON.stringify(e.body)
                                      : void 0;
                                    var t, n;
                                  })(e)
                                );
                            })
                          );
                        })
                      );
                    }),
                    k = A(function (e) {
                      return S(U(e, E.TOKEN), function (t) {
                        return S(U(e, E.USERNAME), function (n) {
                          return S(U(e, E.PASSWORD), function (r) {
                            return S(U(e, E.HEADERS), function (o) {
                              var i = new Headers(
                                Object.assign(
                                  Object.assign(
                                    { Accept: "application/json" },
                                    o
                                  ),
                                  e.headers
                                )
                              );
                              if (
                                (w(t) &&
                                  i.append(
                                    "Authorization",
                                    "Bearer ".concat(t)
                                  ),
                                w(n) && w(r))
                              ) {
                                var u = btoa("".concat(n, ":").concat(r));
                                i.append("Authorization", "Basic ".concat(u));
                              }
                              return (
                                e.body &&
                                  (O(e.body)
                                    ? i.append(
                                        "Content-Type",
                                        e.body.type ||
                                          "application/octet-stream"
                                      )
                                    : T(e.body)
                                    ? i.append("Content-Type", "text/plain")
                                    : i.append(
                                        "Content-Type",
                                        "application/json"
                                      )),
                                i
                              );
                            });
                          });
                        });
                      });
                    }),
                    U = A(function (e, t) {
                      return "function" == typeof t ? t(e) : t;
                    });
                  function _(e, t, n) {
                    return n
                      ? t
                        ? t(e)
                        : e
                      : ((e && e.then) || (e = Promise.resolve(e)),
                        t ? e.then(t) : e);
                  }
                  var x = (function () {
                    function e() {
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                    }
                    var t;
                    return (
                      (t = [
                        {
                          key: "beginMultipartUpload",
                          value: function (e) {
                            try {
                              return _(
                                R({
                                  method: "POST",
                                  path: "/v1/files",
                                  body: e,
                                  errors: { 401: "Unauthenticated." },
                                }),
                                function (e) {
                                  return e.body;
                                }
                              );
                            } catch (e) {
                              return Promise.reject(e);
                            }
                          },
                        },
                        {
                          key: "completeUploadPart",
                          value: function (e, t, n) {
                            try {
                              return _(
                                R({
                                  method: "PUT",
                                  path: "/v1/files/"
                                    .concat(e, "/upload_parts/")
                                    .concat(t),
                                  body: n,
                                  errors: {
                                    401: "Unauthenticated.",
                                    403: "Unauthorized.",
                                    404: "File or upload part not found.",
                                  },
                                }),
                                function (e) {
                                  return e.body;
                                }
                              );
                            } catch (e) {
                              return Promise.reject(e);
                            }
                          },
                        },
                        {
                          key: "getUploadPart",
                          value: function (e, t) {
                            try {
                              return _(
                                R({
                                  method: "GET",
                                  path: "/v1/files/"
                                    .concat(e, "/upload_parts/")
                                    .concat(t),
                                  errors: {
                                    401: "Unauthenticated.",
                                    403: "Unauthorized.",
                                    404: "File or upload part not found.",
                                  },
                                }),
                                function (e) {
                                  return e.body;
                                }
                              );
                            } catch (e) {
                              return Promise.reject(e);
                            }
                          },
                        },
                        {
                          key: "getUploadParts",
                          value: function (e) {
                            try {
                              return _(
                                R({
                                  method: "GET",
                                  path: "/v1/files/".concat(e, "/upload_parts"),
                                  errors: {
                                    401: "Unauthenticated.",
                                    403: "Unauthorized.",
                                    404: "File not found.",
                                  },
                                }),
                                function (e) {
                                  return e.body;
                                }
                              );
                            } catch (e) {
                              return Promise.reject(e);
                            }
                          },
                        },
                      ]) &&
                        (function (e, t) {
                          for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1),
                              (r.configurable = !0),
                              "value" in r && (r.writable = !0),
                              Object.defineProperty(e, r.key, r);
                          }
                        })(e, t),
                      e
                    );
                  })();
                },
              },
              t = {};
            function n(r) {
              if (t[r]) return t[r].exports;
              var o = (t[r] = { exports: {} });
              return e[r](o, o.exports, n), o.exports;
            }
            return (
              (n.d = function (e, t) {
                for (var r in t)
                  n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              n(612)
            );
          })();
        },
        707: function (e, t, n) {
          "use strict";
          function r(e) {
            return (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function o(e, t) {
            if (t && ("object" === r(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return i(e);
          }
          function i(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function u(e) {
            var t = "function" == typeof Map ? new Map() : void 0;
            return (u = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
              }
              function r() {
                return a(e, arguments, l(this).constructor);
              }
              return (
                (r.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                s(r, e)
              );
            })(e);
          }
          function a(e, t, n) {
            return (a = c()
              ? Reflect.construct
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && s(o, n.prototype), o;
                }).apply(null, arguments);
          }
          function c() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          }
          function s(e, t) {
            return (s =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function l(e) {
            return (l = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          n.r(t),
            n.d(t, {
              Upload: function () {
                return L;
              },
              UploadError: function () {
                return R;
              },
            });
          var f = (function (e) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  t && s(e, t);
              })(a, e);
              var t,
                n,
                r,
                u =
                  ((t = a),
                  (n = c()),
                  function () {
                    var e,
                      r = l(t);
                    if (n) {
                      var i = l(this).constructor;
                      e = Reflect.construct(r, arguments, i);
                    } else e = r.apply(this, arguments);
                    return o(this, e);
                  });
              function a(e) {
                var t;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, a),
                  (t = u.call(this, e)),
                  Object.setPrototypeOf(i(t), a.prototype),
                  t
                );
              }
              return (
                (r = a),
                Object.defineProperty(r, "prototype", { writable: !1 }),
                r
              );
            })(u(Error)),
            p = n(90);
          function d() {}
          function h(e, t, n) {
            if (!e.s) {
              if (n instanceof y) {
                if (!n.s) return void (n.o = h.bind(null, e, t));
                1 & t && (t = n.s), (n = n.v);
              }
              if (n && n.then)
                return void n.then(h.bind(null, e, t), h.bind(null, e, 2));
              (e.s = t), (e.v = n);
              var r = e.o;
              r && r(e);
            }
          }
          var y = (function () {
            function e() {}
            return (
              (e.prototype.then = function (t, n) {
                var r = new e(),
                  o = this.s;
                if (o) {
                  var i = 1 & o ? t : n;
                  if (i) {
                    try {
                      h(r, 1, i(this.v));
                    } catch (e) {
                      h(r, 2, e);
                    }
                    return r;
                  }
                  return this;
                }
                return (
                  (this.o = function (e) {
                    try {
                      var o = e.v;
                      1 & e.s
                        ? h(r, 1, t ? t(o) : o)
                        : n
                        ? h(r, 1, n(o))
                        : h(r, 2, o);
                    } catch (e) {
                      h(r, 2, e);
                    }
                  }),
                  r
                );
              }),
              e
            );
          })();
          function v(e) {
            return e instanceof y && 1 & e.s;
          }
          function b(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          var m,
            g = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.mutex = void 0),
                  (this.resolver = void 0);
              }
              var t, n;
              return (
                (t = e),
                (n = [
                  {
                    key: "safe",
                    value: function (e) {
                      try {
                        var t = this;
                        return (
                          (n = t.acquire()),
                          (r = function () {
                            return (function (e, t) {
                              try {
                                var n = e();
                              } catch (e) {
                                return t(!0, e);
                              }
                              return n && n.then
                                ? n.then(t.bind(null, !1), t.bind(null, !0))
                                : t(!1, n);
                            })(e, function (e, n) {
                              return (
                                t.release(),
                                (function (e, t) {
                                  if (e) throw t;
                                  return t;
                                })(e, n)
                              );
                            });
                          }),
                          (n && n.then) || (n = Promise.resolve(n)),
                          r ? n.then(r) : n
                        );
                      } catch (e) {
                        return Promise.reject(e);
                      }
                      var n, r;
                    },
                  },
                  {
                    key: "acquire",
                    value: function () {
                      try {
                        var e = this;
                        return (
                          (t = (function (e, t, n) {
                            for (var r; ; ) {
                              var o = e();
                              if ((v(o) && (o = o.v), !o)) return u;
                              if (o.then) {
                                r = 0;
                                break;
                              }
                              var i,
                                u = n();
                              if (u && u.then) {
                                if (!v(u)) {
                                  r = 1;
                                  break;
                                }
                                u = u.s;
                              }
                            }
                            var a = new y(),
                              c = h.bind(null, a, 2);
                            return (
                              (0 === r
                                ? o.then(l)
                                : 1 === r
                                ? u.then(s)
                                : i.then(f)
                              ).then(void 0, c),
                              a
                            );
                            function s(t) {
                              u = t;
                              do {
                                if (!(o = e()) || (v(o) && !o.v))
                                  return void h(a, 1, u);
                                if (o.then)
                                  return void o.then(l).then(void 0, c);
                                v((u = n())) && (u = u.v);
                              } while (!u || !u.then);
                              u.then(s).then(void 0, c);
                            }
                            function l(e) {
                              e
                                ? (u = n()) && u.then
                                  ? u.then(s).then(void 0, c)
                                  : s(u)
                                : h(a, 1, u);
                            }
                            function f() {
                              (o = e())
                                ? o.then
                                  ? o.then(l).then(void 0, c)
                                  : l(o)
                                : h(a, 1, u);
                            }
                          })(
                            function () {
                              return void 0 !== e.mutex;
                            },
                            0,
                            function () {
                              return (function (e, t) {
                                return e && e.then
                                  ? e.then(d)
                                  : Promise.resolve();
                              })(e.mutex);
                            }
                          )),
                          (n = function () {
                            e.mutex = new Promise(function (t) {
                              e.resolver = t;
                            });
                          }),
                          t && t.then ? t.then(n) : n()
                        );
                      } catch (e) {
                        return Promise.reject(e);
                      }
                      var t, n;
                    },
                  },
                  {
                    key: "release",
                    value: function () {
                      if (void 0 === this.resolver)
                        throw new Error(
                          "Unable to release mutex: already released."
                        );
                      this.resolver(),
                        (this.resolver = void 0),
                        (this.mutex = void 0);
                    },
                  },
                ]) && b(t.prototype, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
              );
            })();
          !(function (e) {
            e.is = function (e) {
              return void 0 !== e.slice;
            };
          })(m || (m = {}));
          var P = n(493);
          function E(e) {
            return (E =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function A(e, t) {
            if (t && ("object" === E(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e);
          }
          function S(e) {
            var t = "function" == typeof Map ? new Map() : void 0;
            return (S = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
              }
              function r() {
                return I(e, arguments, O(this).constructor);
              }
              return (
                (r.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                w(r, e)
              );
            })(e);
          }
          function I(e, t, n) {
            return (I = T()
              ? Reflect.construct
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && w(o, n.prototype), o;
                }).apply(null, arguments);
          }
          function T() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          }
          function w(e, t) {
            return (w =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function O(e) {
            return (O = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          var R = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && w(e, t);
            })(i, e);
            var t,
              n,
              r,
              o =
                ((t = i),
                (n = T()),
                function () {
                  var e,
                    r = O(t);
                  if (n) {
                    var o = O(this).constructor;
                    e = Reflect.construct(r, arguments, o);
                  } else e = r.apply(this, arguments);
                  return A(this, e);
                });
            function i(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                ((t = o.call(this, e.error.message)).errorCode = e.error.code),
                (t.details = e.error.details),
                t
              );
            }
            return (
              (r = i),
              Object.defineProperty(r, "prototype", { writable: !1 }),
              r
            );
          })(S(Error));
          function j(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          function k() {}
          function U(e, t) {
            if (!t) return e && e.then ? e.then(k) : Promise.resolve();
          }
          function _(e, t, n) {
            return n
              ? t
                ? t(e)
                : e
              : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
          }
          function x(e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              try {
                return Promise.resolve(e.apply(this, t));
              } catch (e) {
                return Promise.reject(e);
              }
            };
          }
          function M(e, t) {
            try {
              var n = e();
            } catch (e) {
              return t(e);
            }
            return n && n.then ? n.then(void 0, t) : n;
          }
          function C(e, t, n) {
            if (n) return t ? t(e()) : e();
            try {
              var r = Promise.resolve(e());
              return t ? r.then(t) : r;
            } catch (e) {
              return Promise.reject(e);
            }
          }
          function F(e, t) {
            if (e) throw t;
            return t;
          }
          function D(e, t) {
            try {
              var n = e();
            } catch (e) {
              return t(!0, e);
            }
            return n && n.then
              ? n.then(t.bind(null, !1), t.bind(null, !0))
              : t(!1, n);
          }
          function B(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          var L = (function () {
            function e(t) {
              var n, r, o, i, u, a, c, s, l;
              if (
                ((function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (this.config = t),
                (this.accountIdLength = 7),
                (this.specialApiKeyAccountId = "W142hJk"),
                (this.specialApiKeys = ["free", "demo"]),
                (this.apiKeyPrefix = "public_"),
                (this.maxUploadConcurrency = 5),
                (this.refreshBeforeExpirySeconds = 20),
                (this.onProgressInterval = 100),
                (this.retryAuthAfterErrorSeconds = 5),
                (this.accessTokenPathBase = "/api/v1/access_tokens/"),
                (this.authMutex = new g()),
                (this.lastAuthSession = void 0),
                void 0 === (null != t ? t : void 0))
              )
                throw new Error(
                  "[upload-js] Please provide a configuration object to the constructor."
                );
              if (
                (!0 === t.debug &&
                  console.log(
                    "[upload-js] Initialized with API key '".concat(
                      t.apiKey,
                      "'"
                    )
                  ),
                (this.apiUrl =
                  null !==
                    (r =
                      null === (n = t.internal) || void 0 === n
                        ? void 0
                        : n.apiUrl) && void 0 !== r
                    ? r
                    : "https://api.upload.io"),
                (this.cdnUrl =
                  null !==
                    (i =
                      null === (o = t.internal) || void 0 === o
                        ? void 0
                        : o.cdnUrl) && void 0 !== i
                    ? i
                    : "https://upcdn.io"),
                (this.authenticateWithApiKey =
                  null ===
                    (a =
                      null === (u = t.internal) || void 0 === u
                        ? void 0
                        : u.authenticateWithApiKey) ||
                  void 0 === a ||
                  a),
                (this.headers =
                  null === (c = t.internal) || void 0 === c
                    ? void 0
                    : c.headers),
                (this.debugMode = !0 === t.debug),
                void 0 ===
                  (null !== (s = t.apiKey) && void 0 !== s ? s : void 0))
              )
                throw new Error(
                  "[upload-js] Please provide an API key via the 'apiKey' config parameter."
                );
              if (t.apiKey.trim() !== t.apiKey)
                throw new Error(
                  "[upload-js] Please enter a valid API key: whitespace was detected in your API key, please remove it and try again."
                );
              if (
                !1 ===
                (null === (l = t.internal) || void 0 === l
                  ? void 0
                  : l.authenticateWithApiKey)
              )
                this.accountId = t.internal.accountId;
              else if (this.specialApiKeys.includes(t.apiKey))
                this.accountId = this.specialApiKeyAccountId;
              else {
                if (!t.apiKey.startsWith(this.apiKeyPrefix))
                  throw new Error(
                    '[upload-js] Please enter a valid API key: it must begin with "'.concat(
                      this.apiKeyPrefix,
                      '".'
                    )
                  );
                if (
                  ((this.accountId = t.apiKey.substr(
                    this.apiKeyPrefix.length,
                    this.accountIdLength
                  )),
                  this.accountId.length !== this.accountIdLength)
                )
                  throw new Error(
                    "[upload-js] Please enter a valid API key: it must be at least "
                      .concat(
                        this.apiKeyPrefix.length + this.accountIdLength,
                        " characters long, but the API key you provided is "
                      )
                      .concat(
                        this.apiKeyPrefix.length + this.accountId.length,
                        "."
                      )
                  );
              }
            }
            var t, n;
            return (
              (t = e),
              (n = [
                {
                  key: "beginAuthSession",
                  value: function (e, t) {
                    try {
                      var n = this;
                      return _(n.endAuthSession(), function () {
                        var r = {
                          accessToken: void 0,
                          accessTokenRefreshHandle: void 0,
                          isActive: !0,
                        };
                        return (
                          (n.lastAuthSession = r),
                          U(n.refreshAccessToken(e, t, r))
                        );
                      });
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "endAuthSession",
                  value: function () {
                    try {
                      var e = this;
                      return U(
                        e.authMutex.safe(
                          x(function () {
                            if (void 0 !== e.lastAuthSession) {
                              var t = e.lastAuthSession;
                              return (
                                (e.lastAuthSession = void 0),
                                void 0 !== t.accessTokenRefreshHandle &&
                                  clearTimeout(t.accessTokenRefreshHandle),
                                (t.isActive = !1),
                                U(e.deleteAccessToken())
                              );
                            }
                          })
                        )
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "createFileInputHandler",
                  value: function (e) {
                    var t = this;
                    return function (n) {
                      var r = n.target;
                      if (void 0 === r.files || null === r.files)
                        throw new Error(
                          "No property 'files' on input element: ensure 'createFileInputHandler' is set to the 'onchange' attribute on an input of type 'file'."
                        );
                      if (void 0 === r.files[0])
                        throw new Error("No file selected.");
                      t.uploadFile(
                        Object.assign(Object.assign({}, e), {
                          file: r.files[0],
                        })
                      ).then(e.onUploaded, function (t) {
                        void 0 !== e.onError
                          ? e.onError(t)
                          : console.error(
                              "Cannot upload file. To remove this console message, handle the error explicitly by providing an 'onError' parameter: upload.createFileInputHandler({onUploaded, onError})",
                              t
                            );
                      });
                    };
                  },
                },
                {
                  key: "uploadFile",
                  value: function (e) {
                    try {
                      var t,
                        n = this,
                        r = [],
                        o = function (e) {
                          r.push(e);
                        },
                        i = function () {
                          return r.forEach(function (e) {
                            return e();
                          });
                        },
                        u = m.is(e) ? { file: e } : e;
                      return (
                        void 0 !== u.onBegin && u.onBegin({ cancel: i }),
                        M(
                          function () {
                            return _(n.beginFileUpload(u.file, u, o));
                          },
                          function (e) {
                            if ((i(), e instanceof p.ApiError)) {
                              var n = e.body;
                              if (
                                "string" ==
                                typeof (null ===
                                  (t = null == n ? void 0 : n.error) ||
                                void 0 === t
                                  ? void 0
                                  : t.code)
                              )
                                throw new R(n);
                            }
                            throw e;
                          }
                        )
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "url",
                  value: function (e, t) {
                    var n = "".concat(this.cdnUrl, "/").concat(e);
                    return void 0 === t ? n : "".concat(n, "/").concat(t);
                  },
                },
                {
                  key: "withProgressReporting",
                  value: function (e, t, n) {
                    try {
                      var r,
                        o = new Promise(function (e) {
                          r = e;
                        }),
                        i = !0,
                        u = function () {
                          i && (r(), clearInterval(a), (i = !1));
                        },
                        a = setInterval(function () {
                          return t(u);
                        }, e);
                      return D(
                        function () {
                          return C(n, function (e) {
                            return _(o, function () {
                              return e;
                            });
                          });
                        },
                        function (e, t) {
                          return u(), F(e, t);
                        }
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "beginFileUpload",
                  value: function (e, t, n) {
                    try {
                      var r = this,
                        o = (0, P.ProgressSmoother)({
                          maxValue: e.size,
                          teardownTime: 1e3,
                          minDelayUntilFirstValue: 2e3,
                          valueIncreaseDelta: 204800,
                          valueIncreaseRatePerSecond: 51200,
                          averageTimeBetweenValues: 1e3,
                        });
                      return _(
                        r.withProgressReporting(
                          r.onProgressInterval,
                          function (n) {
                            if (void 0 === t.onProgress) n();
                            else {
                              var r = o.smoothedValue(),
                                i = e.size;
                              r === i && n(),
                                t.onProgress({
                                  bytesSent: r,
                                  bytesTotal: i,
                                  progress: Math.round((r / i) * 100),
                                });
                            }
                          },
                          x(function () {
                            var i,
                              u = {
                                accountId: r.accountId,
                                fileSize: e.size,
                                fileName: e.name,
                                mime: r.normalizeMimeType(e.type),
                                tags: (null !== (i = t.tags) && void 0 !== i
                                  ? i
                                  : []
                                ).map(function (e) {
                                  return "string" == typeof e
                                    ? { name: e, searchable: !0 }
                                    : e;
                                }),
                              };
                            return (
                              r.debug(
                                "Initiating file upload. Params = ".concat(
                                  JSON.stringify(u)
                                )
                              ),
                              r.preflight(),
                              _(
                                p.FilesService.beginMultipartUpload(u),
                                function (t) {
                                  var i = t.uploadParts.count > 1;
                                  r.debug(
                                    "Initiated file upload. Metadata = ".concat(
                                      JSON.stringify(t)
                                    )
                                  );
                                  var a,
                                    c,
                                    s =
                                      ((a = 0),
                                      function () {
                                        if (a !== t.uploadParts.count - 1)
                                          return ++a;
                                      }),
                                    l = [t.uploadParts.first],
                                    f = x(function (e) {
                                      var n = l.pop();
                                      if (void 0 !== n)
                                        return (
                                          r.debug(
                                            "Dequeued part ".concat(
                                              n.uploadPartIndex,
                                              "."
                                            ),
                                            e
                                          ),
                                          n
                                        );
                                      var o = s();
                                      if (void 0 !== o)
                                        return (
                                          r.preflight(),
                                          r.debug(
                                            "Fetching metadata for part ".concat(
                                              o,
                                              "."
                                            ),
                                            e
                                          ),
                                          p.FilesService.getUploadPart(
                                            t.file.fileId,
                                            o
                                          )
                                        );
                                      r.debug("No parts remaining.", e);
                                    }),
                                    d = [],
                                    h = function u(a) {
                                      return _(f(a), function (c) {
                                        return (function (s) {
                                          var l = (function () {
                                            if (void 0 !== c) {
                                              var s = 0;
                                              return _(
                                                r.uploadPart(
                                                  e,
                                                  t.file,
                                                  i,
                                                  c,
                                                  function (e) {
                                                    var t = e.bytesSent;
                                                    void 0 === d[a]
                                                      ? (d[a] = t)
                                                      : ((d[a] -= s),
                                                        (d[a] += t)),
                                                      (s = t);
                                                    var n = d.reduce(function (
                                                      e,
                                                      t
                                                    ) {
                                                      return e + t;
                                                    });
                                                    o.setValue(n);
                                                  },
                                                  n,
                                                  a
                                                ),
                                                function () {
                                                  return U(u(a));
                                                }
                                              );
                                            }
                                          })();
                                          if (l && l.then) return l.then(k);
                                        })();
                                      });
                                    };
                                  return _(
                                    Promise.all(
                                      ((c = Array(
                                        r.maxUploadConcurrency
                                      ).keys()),
                                      (function (e) {
                                        if (Array.isArray(e)) return j(e);
                                      })(c) ||
                                        (function (e) {
                                          if (
                                            ("undefined" != typeof Symbol &&
                                              null != e[Symbol.iterator]) ||
                                            null != e["@@iterator"]
                                          )
                                            return Array.from(e);
                                        })(c) ||
                                        (function (e, t) {
                                          if (e) {
                                            if ("string" == typeof e)
                                              return j(e, t);
                                            var n = Object.prototype.toString
                                              .call(e)
                                              .slice(8, -1);
                                            return (
                                              "Object" === n &&
                                                e.constructor &&
                                                (n = e.constructor.name),
                                              "Map" === n || "Set" === n
                                                ? Array.from(e)
                                                : "Arguments" === n ||
                                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                    n
                                                  )
                                                ? j(e, t)
                                                : void 0
                                            );
                                          }
                                        })(c) ||
                                        (function () {
                                          throw new TypeError(
                                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                          );
                                        })()).map(function (e) {
                                        return _(h(e));
                                      })
                                    ),
                                    function () {
                                      var n = {
                                        accountId: u.accountId,
                                        file: e,
                                        fileId: t.file.fileId,
                                        fileSize: t.file.size,
                                        fileUrl: r.url(t.file.fileId),
                                        tags: t.file.tags,
                                        mime: t.file.mime,
                                        suggestedOptimization:
                                          void 0 ===
                                          t.suggestedOptimizationUrlSlug
                                            ? void 0
                                            : {
                                                transformationSlug:
                                                  t.suggestedOptimizationUrlSlug,
                                                transformationUrl: r.url(
                                                  t.file.fileId,
                                                  t.suggestedOptimizationUrlSlug
                                                ),
                                              },
                                      };
                                      return (
                                        r.debug(
                                          "FileLike upload completed. FileLike = ".concat(
                                            JSON.stringify(n)
                                          )
                                        ),
                                        n
                                      );
                                    }
                                  );
                                }
                              )
                            );
                          })
                        )
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "debug",
                  value: function (e, t) {
                    this.debugMode &&
                      console.log(
                        "[upload-js] "
                          .concat(e)
                          .concat(
                            void 0 !== t ? " (Worker ".concat(t, ")") : ""
                          )
                      );
                  },
                },
                {
                  key: "error",
                  value: function (e) {
                    console.error("[upload-js] ".concat(e));
                  },
                },
                {
                  key: "normalizeMimeType",
                  value: function (e) {
                    var t = e.toLowerCase();
                    return /^[a-z0-9]+\/[a-z0-9+\-._]+$/.test(t) ? t : void 0;
                  },
                },
                {
                  key: "preflight",
                  value: function () {
                    var e,
                      t = this;
                    (p.OpenAPI.BASE = this.apiUrl),
                      this.authenticateWithApiKey
                        ? ((p.OpenAPI.WITH_CREDENTIALS = !0),
                          (p.OpenAPI.USERNAME = "apikey"),
                          (p.OpenAPI.PASSWORD = this.config.apiKey))
                        : ((p.OpenAPI.WITH_CREDENTIALS = !1),
                          delete p.OpenAPI.USERNAME,
                          delete p.OpenAPI.PASSWORD);
                    var n = this.headers,
                      r =
                        null === (e = this.lastAuthSession) || void 0 === e
                          ? void 0
                          : e.accessToken;
                    void 0 !== n || void 0 !== r
                      ? (p.OpenAPI.HEADERS = x(function () {
                          var e;
                          return _(
                            void 0 === n ? {} : n(),
                            function (n) {
                              var r =
                                null === (e = t.lastAuthSession) || void 0 === e
                                  ? void 0
                                  : e.accessToken;
                              return Object.assign(
                                Object.assign({}, n),
                                void 0 === r ? {} : { "authorization-user": r }
                              );
                            },
                            void 0 === n
                          );
                        }))
                      : delete p.OpenAPI.HEADERS;
                  },
                },
                {
                  key: "preflightExternalApi",
                  value: function (e, t) {
                    (p.OpenAPI.BASE = e),
                      (p.OpenAPI.WITH_CREDENTIALS = t),
                      delete p.OpenAPI.USERNAME,
                      delete p.OpenAPI.PASSWORD,
                      delete p.OpenAPI.HEADERS;
                  },
                },
                {
                  key: "putUploadPart",
                  value: function (e, t, n, r, o, i) {
                    try {
                      var u = new XMLHttpRequest(),
                        a = !0;
                      return (
                        i(function () {
                          a && u.abort();
                        }),
                        D(
                          function () {
                            return _(
                              new Promise(function (i, a) {
                                u.upload.addEventListener(
                                  "progress",
                                  function (e) {
                                    e.lengthComputable &&
                                      o({
                                        bytesSent: e.loaded,
                                        bytesTotal: e.total,
                                      });
                                  },
                                  !1
                                ),
                                  u.addEventListener("load", function () {
                                    if (
                                      (o({
                                        bytesSent: r.size,
                                        bytesTotal: r.size,
                                      }),
                                      2 === Math.floor(u.status / 100))
                                    ) {
                                      var e = u.getResponseHeader("etag");
                                      null == e
                                        ? a(
                                            new Error(
                                              "FileLike upload error: no etag header in upload response."
                                            )
                                          )
                                        : i({ etag: e });
                                    } else a(new Error("FileLike upload error: status code ".concat(u.status)));
                                  }),
                                  (u.onabort = function () {
                                    return a(
                                      new f("FileLike upload cancelled.")
                                    );
                                  }),
                                  (u.onerror = function () {
                                    return a(
                                      new Error("FileLike upload error.")
                                    );
                                  }),
                                  (u.ontimeout = function () {
                                    return a(
                                      new Error("FileLike upload timeout.")
                                    );
                                  }),
                                  u.open("PUT", e),
                                  n ||
                                    (u.setRequestHeader("content-type", t.mime),
                                    null !== t.name &&
                                      u.setRequestHeader(
                                        "content-disposition",
                                        'inline; filename="'
                                          .concat(
                                            encodeURIComponent(t.name),
                                            "\"; filename*=UTF-8''"
                                          )
                                          .concat(encodeURIComponent(t.name))
                                      )),
                                  u.send(r);
                              })
                            );
                          },
                          function (e, t) {
                            return (a = !1), F(e, t);
                          }
                        )
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "uploadPart",
                  value: function (e, t, n, r, o, i, u) {
                    try {
                      var a = this,
                        c =
                          -1 === r.range.inclusiveEnd
                            ? new Blob()
                            : e.slice(
                                r.range.inclusiveStart,
                                r.range.inclusiveEnd + 1
                              );
                      return (
                        a.debug(
                          "Uploading part ".concat(r.uploadPartIndex, "."),
                          u
                        ),
                        _(
                          a.putUploadPart(r.uploadUrl, t, n, c, o, i),
                          function (e) {
                            var t = e.etag;
                            return (
                              a.preflight(),
                              _(
                                p.FilesService.completeUploadPart(
                                  r.fileId,
                                  r.uploadPartIndex,
                                  { etag: t }
                                ),
                                function () {
                                  a.debug(
                                    "Uploaded part ".concat(
                                      r.uploadPartIndex,
                                      "."
                                    ),
                                    u
                                  );
                                }
                              )
                            );
                          }
                        )
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "accessTokenPath",
                  value: function () {
                    return ""
                      .concat(this.cdnUrl)
                      .concat(this.accessTokenPathBase)
                      .concat(this.accountId);
                  },
                },
                {
                  key: "deleteAccessToken",
                  value: function () {
                    try {
                      return U(
                        this.deleteNoResponse(this.accessTokenPath(), {}, !0)
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "refreshAccessToken",
                  value: function (e, t, n) {
                    try {
                      var r = this;
                      return (function (e) {
                        if (e && e.then) return e.then(k);
                      })(
                        M(
                          function () {
                            return U(
                              r.authMutex.safe(
                                x(function () {
                                  if (n.isActive) {
                                    var o = r.getText;
                                    return C(t, function (i) {
                                      return _(o.call(r, e, i), function (o) {
                                        var i = r.handleApiError;
                                        return _(
                                          r.putJsonGetJson(
                                            r.accessTokenPath(),
                                            {},
                                            { accessToken: o },
                                            !0
                                          ),
                                          function (o) {
                                            var u = i.call(r, o);
                                            (n.accessToken = u.accessToken),
                                              (n.accessTokenRefreshHandle =
                                                window.setTimeout(function () {
                                                  r.refreshAccessToken(
                                                    e,
                                                    t,
                                                    n
                                                  ).then(
                                                    function () {},
                                                    function (e) {
                                                      return r.error(
                                                        "Permanent error when refreshing access token: ".concat(
                                                          e
                                                        )
                                                      );
                                                    }
                                                  );
                                                }, Math.max(
                                                  0,
                                                  1e3 *
                                                    (u.ttlSeconds -
                                                      r.refreshBeforeExpirySeconds)
                                                )));
                                          }
                                        );
                                      });
                                    });
                                  }
                                })
                              )
                            );
                          },
                          function (o) {
                            return (
                              r.debug(
                                "Error when refreshing access token: ".concat(o)
                              ),
                              _(
                                new Promise(function (e) {
                                  return setTimeout(
                                    e,
                                    1e3 * r.retryAuthAfterErrorSeconds
                                  );
                                }),
                                function () {
                                  return U(r.refreshAccessToken(e, t, n));
                                }
                              )
                            );
                          }
                        )
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "putJsonGetJson",
                  value: function (e, t, n, r) {
                    try {
                      return _(
                        this.nonUploadApiRequest(
                          { method: "PUT", path: e, headers: t, body: n },
                          r
                        ),
                        function (e) {
                          return e.body;
                        }
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "getText",
                  value: function (e, t) {
                    try {
                      return _(
                        this.nonUploadApiRequest(
                          { method: "GET", path: e, headers: t },
                          !1
                        ),
                        function (e) {
                          return e.body;
                        }
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "deleteNoResponse",
                  value: function (e, t, n) {
                    try {
                      return U(
                        this.nonUploadApiRequest(
                          { method: "DELETE", path: e, headers: t },
                          n
                        )
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
                {
                  key: "handleApiError",
                  value: function (e) {
                    var t = e;
                    if (void 0 !== t.error)
                      throw new Error(
                        "[upload-js] "
                          .concat(t.error.message, ". (Code: ")
                          .concat(t.error.code, ")")
                      );
                    return e;
                  },
                },
                {
                  key: "nonUploadApiRequest",
                  value: function (e, t) {
                    try {
                      return (
                        this.preflightExternalApi(e.path, t),
                        _(
                          (0, p.request)(
                            Object.assign(Object.assign({}, e), { path: "" })
                          )
                        )
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  },
                },
              ]) && B(t.prototype, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e
            );
          })();
        },
        493: function (e) {
          e.exports = (function () {
            "use strict";
            var e = {
                881: function (e, t, n) {
                  function r(e) {
                    var t,
                      n,
                      r,
                      o =
                        null !== (t = e.minDelayUntilFirstValue) && void 0 !== t
                          ? t
                          : 0,
                      i = null !== (n = e.teardownTime) && void 0 !== n ? n : 0,
                      u = e.valueIncreaseRatePerSecond,
                      a = e.averageTimeBetweenValues,
                      c = e.maxValue,
                      s = e.valueIncreaseDelta,
                      l = Date.now(),
                      f = 0,
                      p = 0;
                    function d(e) {
                      return e.value === c;
                    }
                    function h(e, t, n) {
                      var r = (function (e, t) {
                        return 1 - Math.exp(-(e - t) / (3.5 * a));
                      })(t, n);
                      return r * e + (1 - r) * p;
                    }
                    function y(e) {
                      return (
                        (t = null != e ? e : Date.now()),
                        (n =
                          void 0 !== r
                            ? (function (e, t) {
                                if (d(e)) {
                                  var n = Math.max(1e3, i),
                                    r = (t - e.time) / n,
                                    o = (a = Math.min(1, r)) * a,
                                    u = e.value - p;
                                  return p + u * o;
                                }
                                var a;
                                return h(e.value, t, l);
                              })(r, t)
                            : (function (e) {
                                var t = Math.min(s, 0.33 * c),
                                  n = (e - l) / (o + (t / u) * 1e3);
                                return Math.min(1, n) * t;
                              })(t)) > f && (f = n),
                        f
                      );
                      var t, n;
                    }
                    return {
                      setValue: function (e, t) {
                        if (void 0 !== r) {
                          if (d(r)) return;
                          (p = h(r.value, r.time, l)), (l = r.time);
                        }
                        r = {
                          time: null != t ? t : Date.now(),
                          value: Math.min(e, c),
                        };
                      },
                      smoothedValue: y,
                      smoothedFactor: function (e) {
                        return y(e) / c;
                      },
                    };
                  }
                  n.r(t),
                    n.d(t, {
                      ProgressSmoother: function () {
                        return r;
                      },
                    });
                },
              },
              t = {};
            function n(r) {
              if (t[r]) return t[r].exports;
              var o = (t[r] = { exports: {} });
              return e[r](o, o.exports, n), o.exports;
            }
            return (
              (n.d = function (e, t) {
                for (var r in t)
                  n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              n(881)
            );
          })();
        },
      },
      t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { exports: {} });
      return e[r](o, o.exports, n), o.exports;
    }
    return (
      (n.d = function (e, t) {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      n(707)
    );
  })();
});
