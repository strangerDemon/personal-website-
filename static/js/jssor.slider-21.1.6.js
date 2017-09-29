﻿/*! Jssor */
var $JssorDebug$ = new function() {
    this.$DebugMode = true;
    this.$Log = function(c, d) {
      var a = window.console || {},
        b = this.$DebugMode;
      if (b && a.log) a.log(c);
      else b && d && alert(c);
    };
    this.$Error = function(b, d) {
      var c = window.console || {},
        a = this.$DebugMode;
      if (a && c.error) c.error(b);
      else a && alert(b);
      if (a) throw d || new Error(b);
    };
    this.$Fail = function(a) {
      throw new Error(a);
    };
    this.$Assert = function(b, c) {
      var a = this.$DebugMode;
      if (a) if (!b) throw new Error("Assert failed " + c || "");
    };
    this.$Trace = function(c) {
      var a = window.console || {},
        b = this.$DebugMode;
      b && a.log && a.log(c);
    };
    this.$Execute = function(b) {
      var a = this.$DebugMode;
      a && b();
    };
    this.$LiveStamp = function(c, d) {
      var b = this.$DebugMode;
      if (b) {
        var a = document.createElement("DIV");
        a.setAttribute("id", d);
        c.$Live = a;
      }
    };
    this.$C_AbstractProperty = function() {
      throw new Error(
        "The property is abstract, it should be implemented by subclass."
      );
    };
    this.$C_AbstractMethod = function() {
      throw new Error(
        "The method is abstract, it should be implemented by subclass."
      );
    };
    function a(b) {
      if (b.constructor === a.caller)
        throw new Error("Cannot create instance of an abstract class.");
    }
    this.$C_AbstractClass = a;
  }(),
  $JssorEasing$ = (window.$JssorEasing$ = {
    $EaseSwing: function(a) {
      return -Math.cos(a * Math.PI) / 2 + 0.5;
    },
    $EaseLinear: function(a) {
      return a;
    },
    $EaseInQuad: function(a) {
      return a * a;
    },
    $EaseOutQuad: function(a) {
      return -a * (a - 2);
    },
    $EaseInOutQuad: function(a) {
      return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1);
    },
    $EaseInCubic: function(a) {
      return a * a * a;
    },
    $EaseOutCubic: function(a) {
      return (a -= 1) * a * a + 1;
    },
    $EaseInOutCubic: function(a) {
      return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2);
    },
    $EaseInQuart: function(a) {
      return a * a * a * a;
    },
    $EaseOutQuart: function(a) {
      return -((a -= 1) * a * a * a - 1);
    },
    $EaseInOutQuart: function(a) {
      return (a *= 2) < 1
        ? 1 / 2 * a * a * a * a
        : -1 / 2 * ((a -= 2) * a * a * a - 2);
    },
    $EaseInQuint: function(a) {
      return a * a * a * a * a;
    },
    $EaseOutQuint: function(a) {
      return (a -= 1) * a * a * a * a + 1;
    },
    $EaseInOutQuint: function(a) {
      return (a *= 2) < 1
        ? 1 / 2 * a * a * a * a * a
        : 1 / 2 * ((a -= 2) * a * a * a * a + 2);
    },
    $EaseInSine: function(a) {
      return 1 - Math.cos(Math.PI / 2 * a);
    },
    $EaseOutSine: function(a) {
      return Math.sin(Math.PI / 2 * a);
    },
    $EaseInOutSine: function(a) {
      return -1 / 2 * (Math.cos(Math.PI * a) - 1);
    },
    $EaseInExpo: function(a) {
      return a == 0 ? 0 : Math.pow(2, 10 * (a - 1));
    },
    $EaseOutExpo: function(a) {
      return a == 1 ? 1 : -Math.pow(2, -10 * a) + 1;
    },
    $EaseInOutExpo: function(a) {
      return a == 0 || a == 1
        ? a
        : (a *= 2) < 1
          ? 1 / 2 * Math.pow(2, 10 * (a - 1))
          : 1 / 2 * (-Math.pow(2, -10 * --a) + 2);
    },
    $EaseInCirc: function(a) {
      return -(Math.sqrt(1 - a * a) - 1);
    },
    $EaseOutCirc: function(a) {
      return Math.sqrt(1 - (a -= 1) * a);
    },
    $EaseInOutCirc: function(a) {
      return (a *= 2) < 1
        ? -1 / 2 * (Math.sqrt(1 - a * a) - 1)
        : 1 / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1);
    },
    $EaseInElastic: function(a) {
      if (!a || a == 1) return a;
      var b = 0.3,
        c = 0.075;
      return -(
        Math.pow(2, 10 * (a -= 1)) * Math.sin((a - c) * 2 * Math.PI / b)
      );
    },
    $EaseOutElastic: function(a) {
      if (!a || a == 1) return a;
      var b = 0.3,
        c = 0.075;
      return Math.pow(2, -10 * a) * Math.sin((a - c) * 2 * Math.PI / b) + 1;
    },
    $EaseInOutElastic: function(a) {
      if (!a || a == 1) return a;
      var b = 0.45,
        c = 0.1125;
      return (a *= 2) < 1
        ? -0.5 *
          Math.pow(2, 10 * (a -= 1)) *
          Math.sin((a - c) * 2 * Math.PI / b)
        : Math.pow(2, -10 * (a -= 1)) *
            Math.sin((a - c) * 2 * Math.PI / b) *
            0.5 +
          1;
    },
    $EaseInBack: function(a) {
      var b = 1.70158;
      return a * a * ((b + 1) * a - b);
    },
    $EaseOutBack: function(a) {
      var b = 1.70158;
      return (a -= 1) * a * ((b + 1) * a + b) + 1;
    },
    $EaseInOutBack: function(a) {
      var b = 1.70158;
      return (a *= 2) < 1
        ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b)
        : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
    },
    $EaseInBounce: function(a) {
      return 1 - $JssorEasing$.$EaseOutBounce(1 - a);
    },
    $EaseOutBounce: function(a) {
      return a < 1 / 2.75
        ? 7.5625 * a * a
        : a < 2 / 2.75
          ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
          : a < 2.5 / 2.75
            ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
            : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
    },
    $EaseInOutBounce: function(a) {
      return a < 1 / 2
        ? $JssorEasing$.$EaseInBounce(a * 2) * 0.5
        : $JssorEasing$.$EaseOutBounce(a * 2 - 1) * 0.5 + 0.5;
    },
    $EaseGoBack: function(a) {
      return 1 - Math.abs(2 - 1);
    },
    $EaseInWave: function(a) {
      return 1 - Math.cos(a * Math.PI * 2);
    },
    $EaseOutWave: function(a) {
      return Math.sin(a * Math.PI * 2);
    },
    $EaseOutJump: function(a) {
      return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a);
    },
    $EaseInJump: function(a) {
      return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a;
    }
  }),
  $Jease$ = (window.$Jease$ = {
    $Swing: $JssorEasing$.$EaseSwing,
    $Linear: $JssorEasing$.$EaseLinear,
    $InQuad: $JssorEasing$.$EaseInQuad,
    $OutQuad: $JssorEasing$.$EaseOutQuad,
    $InOutQuad: $JssorEasing$.$EaseInOutQuad,
    $InCubic: $JssorEasing$.$EaseInCubic,
    $OutCubic: $JssorEasing$.$EaseOutCubic,
    $InOutCubic: $JssorEasing$.$EaseInOutCubic,
    $InQuart: $JssorEasing$.$EaseInQuart,
    $OutQuart: $JssorEasing$.$EaseOutQuart,
    $InOutQuart: $JssorEasing$.$EaseInOutQuart,
    $InQuint: $JssorEasing$.$EaseInQuint,
    $OutQuint: $JssorEasing$.$EaseOutQuint,
    $InOutQuint: $JssorEasing$.$EaseInOutQuint,
    $InSine: $JssorEasing$.$EaseInSine,
    $OutSine: $JssorEasing$.$EaseOutSine,
    $InOutSine: $JssorEasing$.$EaseInOutSine,
    $InExpo: $JssorEasing$.$EaseInExpo,
    $OutExpo: $JssorEasing$.$EaseOutExpo,
    $InOutExpo: $JssorEasing$.$EaseInOutExpo,
    $InCirc: $JssorEasing$.$EaseInCirc,
    $OutCirc: $JssorEasing$.$EaseOutCirc,
    $InOutCirc: $JssorEasing$.$EaseInOutCirc,
    $InElastic: $JssorEasing$.$EaseInElastic,
    $OutElastic: $JssorEasing$.$EaseOutElastic,
    $InOutElastic: $JssorEasing$.$EaseInOutElastic,
    $InBack: $JssorEasing$.$EaseInBack,
    $OutBack: $JssorEasing$.$EaseOutBack,
    $InOutBack: $JssorEasing$.$EaseInOutBack,
    $InBounce: $JssorEasing$.$EaseInBounce,
    $OutBounce: $JssorEasing$.$EaseOutBounce,
    $InOutBounce: $JssorEasing$.$EaseInOutBounce,
    $GoBack: $JssorEasing$.$EaseGoBack,
    $InWave: $JssorEasing$.$EaseInWave,
    $OutWave: $JssorEasing$.$EaseOutWave,
    $OutJump: $JssorEasing$.$EaseOutJump,
    $InJump: $JssorEasing$.$EaseInJump
  }),
  $JssorDirection$ = (window.$JssorDirection$ = {
    $TO_LEFT: 1,
    $TO_RIGHT: 2,
    $TO_TOP: 4,
    $TO_BOTTOM: 8,
    $HORIZONTAL: 3,
    $VERTICAL: 12,
    $GetDirectionHorizontal: function(a) {
      return a & 3;
    },
    $GetDirectionVertical: function(a) {
      return a & 12;
    },
    $IsHorizontal: function(a) {
      return a & 3;
    },
    $IsVertical: function(a) {
      return a & 12;
    }
  }),
  $JssorKeyCode$ = {
    $BACKSPACE: 8,
    $COMMA: 188,
    $DELETE: 46,
    $DOWN: 40,
    $END: 35,
    $ENTER: 13,
    $ESCAPE: 27,
    $HOME: 36,
    $LEFT: 37,
    $NUMPAD_ADD: 107,
    $NUMPAD_DECIMAL: 110,
    $NUMPAD_DIVIDE: 111,
    $NUMPAD_ENTER: 108,
    $NUMPAD_MULTIPLY: 106,
    $NUMPAD_SUBTRACT: 109,
    $PAGE_DOWN: 34,
    $PAGE_UP: 33,
    $PERIOD: 190,
    $RIGHT: 39,
    $SPACE: 32,
    $TAB: 9,
    $UP: 38
  },
  $JssorServices$ = (window.$JssorServices$ = {}),
  $Jssor$ = (window.$Jssor$ = new function() {
    var b = this,
      rb = /\S+/g,
      B = 1,
      Z = 2,
      db = 3,
      cb = 4,
      hb = 5,
      C,
      j = 0,
      c = 0,
      k = 0,
      q = 0,
      r = 0,
      u = navigator,
      mb = u.appName,
      f = u.userAgent,
      p = document.documentElement,
      h = parseFloat;
    function zb() {
      if (!C) {
        C = {
          $Touchable: "ontouchstart" in window || "createTouch" in document
        };
        var a;
        if (u.pointerEnabled || (a = u.msPointerEnabled))
          C.$TouchActionAttr = a ? "msTouchAction" : "touchAction";
      }
      return C;
    }
    function m(l) {
      if (!j) {
        j = -1;
        if (
          mb == "Microsoft Internet Explorer" &&
          !!window.attachEvent &&
          !!window.ActiveXObject
        ) {
          var g = f.indexOf("MSIE");
          j = B;
          k = h(
            f.substring(g + 5, f.indexOf(";", g))
          ); /*@cc_on q=@_jscript_version@*/
          c = document.documentMode || k;
        } else if (mb == "Netscape" && !!window.addEventListener) {
          var e = f.indexOf("Firefox"),
            b = f.indexOf("Safari"),
            i = f.indexOf("Chrome"),
            d = f.indexOf("AppleWebKit");
          if (e >= 0) {
            j = Z;
            c = h(f.substring(e + 8));
          } else if (b >= 0) {
            var m = f.substring(0, b).lastIndexOf("/");
            j = i >= 0 ? cb : db;
            c = h(f.substring(m + 1, b));
          } else {
            var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(f);
            if (a) {
              j = B;
              c = k = h(a[1]);
            }
          }
          if (d >= 0) r = h(f.substring(d + 12));
        } else {
          var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(f);
          if (a) {
            j = hb;
            c = h(a[2]);
          }
        }
      }
      return l == j;
    }
    function i() {
      return m(B);
    }
    function J() {
      return i() && (c < 6 || document.compatMode == "BackCompat");
    }
    function sb() {
      return m(Z);
    }
    function bb() {
      return m(db);
    }
    function vb() {
      return m(cb);
    }
    function gb() {
      return m(hb);
    }
    function W() {
      return bb() && r > 534 && r < 535;
    }
    function y() {
      m();
      return r > 537 || c > 42 || (j == B && c >= 11);
    }
    function H() {
      return i() && c < 9;
    }
    function X(a) {
      var b, c;
      return function(f) {
        if (!b) {
          b = true;
          var d = a.substr(0, 1).toUpperCase() + a.substr(1);
          e([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, e) {
            var b = a;
            if (e) b = g + d;
            if (f.style[b] != undefined) return (c = b);
          });
        }
        return c;
      };
    }
    function V(b) {
      var a;
      return function(c) {
        a = a || X(b)(c) || b;
        return a;
      };
    }
    var D = V("transform");
    function lb(a) {
      return {}.toString.call(a);
    }
    var ib = {};
    e(
      [
        "Boolean",
        "Number",
        "String",
        "Function",
        "Array",
        "Date",
        "RegExp",
        "Object"
      ],
      function(a) {
        ib["[object " + a + "]"] = a.toLowerCase();
      }
    );
    function e(b, d) {
      var a, c;
      if (lb(b) == "[object Array]") {
        for (a = 0; a < b.length; a++) if ((c = d(b[a], a, b))) return c;
      } else for (a in b) if ((c = d(b[a], a, b))) return c;
    }
    function w(a) {
      return a == null ? String(a) : ib[lb(a)] || "object";
    }
    function jb(a) {
      for (var b in a) return true;
    }
    function s(a) {
      try {
        return (
          w(a) == "object" &&
          !a.nodeType &&
          a != a.window &&
          (!a.constructor ||
            {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
        );
      } catch (b) {}
    }
    function g(a, b) {
      return { x: a, y: b };
    }
    function pb(b, a) {
      setTimeout(b, a || 0);
    }
    function t(b, d, c) {
      var a = !b || b == "inherit" ? "" : b;
      e(d, function(c) {
        var b = c.exec(a);
        if (b) {
          var d = a.substr(0, b.index),
            e = a.substr(b.index + b[0].length + 1, a.length - 1);
          a = d + e;
        }
      });
      a = c + (!a.indexOf(" ") ? "" : " ") + a;
      return a;
    }
    function K(b, a) {
      if (c < 9) b.style.filter = a;
    }
    b.$Device = zb;
    b.$IsBrowserIE = i;
    b.$IsBrowserIeQuirks = J;
    b.$IsBrowserFireFox = sb;
    b.$IsBrowserSafari = bb;
    b.$IsBrowserChrome = vb;
    b.$IsBrowserOpera = gb;
    b.$IsBrowserBadTransform = W;
    b.$IsBrowser3dSafe = y;
    b.$IsBrowserIe9Earlier = H;
    b.$GetTransformProperty = X("transform");
    b.$BrowserVersion = function() {
      return c;
    };
    b.$BrowserEngineVersion = function() {
      return k || c;
    };
    b.$WebKitVersion = function() {
      m();
      return r;
    };
    b.$Delay = pb;
    b.$Inherit = function(a, b) {
      b.call(a);
      return v({}, a);
    };
    function R(a) {
      a.constructor === R.caller &&
        a.$Construct &&
        a.$Construct.apply(a, R.caller.arguments);
    }
    b.$Construct = R;
    b.$GetElement = function(a) {
      if (b.$IsString(a)) a = document.getElementById(a);
      return a;
    };
    function l(a) {
      return a || window.event;
    }
    b.$GetEvent = l;
    b.$EvtSrc = function(c) {
      c = l(c);
      var a = c.target || c.srcElement || document;
      if (a.nodeType == 3) a = b.$ParentNode(a);
      return a;
    };
    b.$EvtTarget = function(a) {
      a = l(a);
      return a.relatedTarget || a.toElement;
    };
    b.$EvtWhich = function(a) {
      a = l(a);
      return a.which || [0, 1, 3, 0, 2][a.button] || a.charCode || a.keyCode;
    };
    b.$MousePosition = function(a) {
      a = l(a);
      return { x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0 };
    };
    b.$PageScroll = function() {
      var a = document.body;
      return {
        x:
          (window.pageXOffset || p.scrollLeft || a.scrollLeft || 0) -
          (p.clientLeft || a.clientLeft || 0),
        y:
          (window.pageYOffset || p.scrollTop || a.scrollTop || 0) -
          (p.clientTop || a.clientTop || 0)
      };
    };
    b.$WindowSize = function() {
      var a = document.body;
      return {
        x: a.clientWidth || p.clientWidth,
        y: a.clientHeight || p.clientHeight
      };
    };
    function x(c, d, a) {
      if (a !== undefined) c.style[d] = a == undefined ? "" : a;
      else {
        var b = c.currentStyle || c.style;
        a = b[d];
        if (a == "" && window.getComputedStyle) {
          b = c.ownerDocument.defaultView.getComputedStyle(c, null);
          b && (a = b.getPropertyValue(d) || b[d]);
        }
        return a;
      }
    }
    function T(b, c, a, d) {
      if (a !== undefined) {
        if (a == null) a = "";
        else d && (a += "px");
        x(b, c, a);
      } else return h(x(b, c));
    }
    function Ab(b, c, a) {
      return T(b, c, a, true);
    }
    function d(c, a) {
      var d = a ? T : x,
        b;
      if (a & 4) b = V(c);
      return function(e, f) {
        return d(e, b ? b(e) : c, f, a & 2);
      };
    }
    function ub(b) {
      if (i() && k < 9) {
        var a = /opacity=([^)]*)/.exec(b.style.filter || "");
        return a ? h(a[1]) / 100 : 1;
      } else return h(b.style.opacity || "1");
    }
    function wb(b, a, e) {
      if (i() && k < 9) {
        var g = b.style.filter || "",
          h = new RegExp(/[\s]*alpha\([^\)]*\)/g),
          d = Math.round(100 * a),
          c = "";
        if (d < 100 || e) c = "alpha(opacity=" + d + ") ";
        var f = t(g, [h], c);
        K(b, f);
      } else b.style.opacity = a == 1 ? "" : Math.round(a * 100) / 100;
    }
    var E = {
      $Rotate: ["rotate"],
      $RotateX: ["rotateX"],
      $RotateY: ["rotateY"],
      $SkewX: ["skewX"],
      $SkewY: ["skewY"]
    };
    if (!y())
      E = v(E, {
        $ScaleX: ["scaleX", 2],
        $ScaleY: ["scaleY", 2],
        $TranslateZ: ["translateZ", 1]
      });
    function F(d, a) {
      var b = "";
      if (a) {
        if (i() && c && c < 10) {
          delete a.$RotateX;
          delete a.$RotateY;
          delete a.$TranslateZ;
        }
        $Jssor$.$Each(a, function(d, c) {
          var a = E[c];
          if (a) {
            var e = a[1] || 0;
            if (G[c] != d)
              b += " " + a[0] + "(" + d + ["deg", "px", ""][e] + ")";
          }
        });
        if (y()) {
          if (a.$TranslateX || a.$TranslateY || a.$TranslateZ)
            b +=
              " translate3d(" +
              (a.$TranslateX || 0) +
              "px," +
              (a.$TranslateY || 0) +
              "px," +
              (a.$TranslateZ || 0) +
              "px)";
          if (a.$ScaleX == undefined) a.$ScaleX = 1;
          if (a.$ScaleY == undefined) a.$ScaleY = 1;
          if (a.$ScaleX != 1 || a.$ScaleY != 1)
            b += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)";
        }
      }
      d.style[D(d)] = b;
    }
    b.$CssTransformOrigin = d("transformOrigin", 4);
    b.$CssBackfaceVisibility = d("backfaceVisibility", 4);
    b.$CssTransformStyle = d("transformStyle", 4);
    b.$CssPerspective = d("perspective", 6);
    b.$CssPerspectiveOrigin = d("perspectiveOrigin", 4);
    b.$CssScale = function(a, b) {
      if ((i() && k < 9) || (k < 10 && J())) a.style.zoom = b == 1 ? "" : b;
      else {
        var c = D(a),
          f = "scale(" + b + ")",
          e = a.style[c],
          g = new RegExp(/[\s]*scale\(.*?\)/g),
          d = t(e, [g], f);
        a.style[c] = d;
      }
    };
    var fb = 0,
      ab = 0;
    b.$WindowResizeFilter = function(b, a) {
      return H()
        ? function() {
            var f = true,
              c = J() ? b.document.body : b.document.documentElement;
            if (c) {
              var e = c.offsetWidth - fb,
                d = c.offsetHeight - ab;
              if (e || d) {
                fb += e;
                ab += d;
              } else f = false;
            }
            f && a();
          }
        : a;
    };
    b.$MouseOverOutFilter = function(c, a) {
      $JssorDebug$.$Execute(function() {
        if (!a) throw new Error('Null reference, parameter "target".');
      });
      return function(d) {
        d = l(d);
        var f = d.type,
          e =
            d.relatedTarget || (f == "mouseout" ? d.toElement : d.fromElement);
        (!e || (e !== a && !b.$IsChild(a, e))) && c(d);
      };
    };
    b.$AddEvent = function(a, e, c, d) {
      a = b.$GetElement(a);
      $JssorDebug$.$Execute(function() {
        !a && $JssorDebug$.$Fail("Parameter 'elmt' not specified.");
        !c && $JssorDebug$.$Fail("Parameter 'handler' not specified.");
        !a.addEventListener &&
          !a.attachEvent &&
          $JssorDebug$.$Fail(
            "Unable to attach event handler, no known technique."
          );
      });
      if (a.addEventListener) {
        e == "mousewheel" && a.addEventListener("DOMMouseScroll", c, d);
        a.addEventListener(e, c, d);
      } else if (a.attachEvent) {
        a.attachEvent("on" + e, c);
        d && a.setCapture && a.setCapture();
      }
    };
    b.$RemoveEvent = function(a, d, e, c) {
      a = b.$GetElement(a);
      if (a.removeEventListener) {
        d == "mousewheel" && a.removeEventListener("DOMMouseScroll", e, c);
        a.removeEventListener(d, e, c);
      } else if (a.detachEvent) {
        a.detachEvent("on" + d, e);
        c && a.releaseCapture && a.releaseCapture();
      }
    };
    b.$FireEvent = function(b, c) {
      $JssorDebug$.$Execute(function() {
        !document.createEvent &&
          !document.createEventObject &&
          $JssorDebug$.$Fail("Unable to fire event, no known technique.");
        !b.dispatchEvent &&
          !b.fireEvent &&
          $JssorDebug$.$Fail("Unable to fire event, no known technique.");
      });
      var a;
      if (document.createEvent) {
        a = document.createEvent("HTMLEvents");
        a.initEvent(c, false, false);
        b.dispatchEvent(a);
      } else {
        var d = "on" + c;
        a = document.createEventObject();
        b.fireEvent(d, a);
      }
    };
    b.$CancelEvent = function(a) {
      a = l(a);
      a.preventDefault && a.preventDefault();
      a.cancel = true;
      a.returnValue = false;
    };
    b.$StopEvent = function(a) {
      a = l(a);
      a.stopPropagation && a.stopPropagation();
      a.cancelBubble = true;
    };
    b.$CreateCallback = function(d, c) {
      var a = [].slice.call(arguments, 2),
        b = function() {
          var b = a.concat([].slice.call(arguments, 0));
          return c.apply(d, b);
        };
      return b;
    };
    b.$InnerText = function(a, c) {
      if (c == undefined) return a.textContent || a.innerText;
      var d = document.createTextNode(c);
      b.$Empty(a);
      a.appendChild(d);
    };
    b.$InnerHtml = function(a, b) {
      if (b == undefined) return a.innerHTML;
      a.innerHTML = b;
    };
    b.$GetClientRect = function(b) {
      var a = b.getBoundingClientRect();
      return { x: a.left, y: a.top, w: a.right - a.left, h: a.bottom - a.top };
    };
    b.$ClearInnerHtml = function(a) {
      a.innerHTML = "";
    };
    b.$EncodeHtml = function(c) {
      var a = b.$CreateDiv();
      b.$InnerText(a, c);
      return b.$InnerHtml(a);
    };
    b.$DecodeHtml = function(c) {
      var a = b.$CreateDiv();
      b.$InnerHtml(a, c);
      return b.$InnerText(a);
    };
    b.$SelectElement = function(c) {
      var b;
      if (window.getSelection) b = window.getSelection();
      var a = null;
      if (document.createRange) {
        a = document.createRange();
        a.selectNode(c);
      } else {
        a = document.body.createTextRange();
        a.moveToElementText(c);
        a.select();
      }
      b && b.addRange(a);
    };
    b.$DeselectElements = function() {
      if (document.selection) document.selection.empty();
      else window.getSelection && window.getSelection().removeAllRanges();
    };
    b.$Children = function(d, c) {
      for (var b = [], a = d.firstChild; a; a = a.nextSibling)
        (c || a.nodeType == 1) && b.push(a);
      return b;
    };
    function kb(a, c, e, b) {
      b = b || "u";
      for (a = a ? a.firstChild : null; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          if (O(a, b) == c) return a;
          if (!e) {
            var d = kb(a, c, e, b);
            if (d) return d;
          }
        }
    }
    b.$FindChild = kb;
    function M(a, d, f, b) {
      b = b || "u";
      var c = [];
      for (a = a ? a.firstChild : null; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          O(a, b) == d && c.push(a);
          if (!f) {
            var e = M(a, d, f, b);
            if (e.length) c = c.concat(e);
          }
        }
      return c;
    }
    b.$FindChildren = M;
    function eb(a, c, d) {
      for (a = a ? a.firstChild : null; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          if (a.tagName == c) return a;
          if (!d) {
            var b = eb(a, c, d);
            if (b) return b;
          }
        }
    }
    b.$FindChildByTag = eb;
    function Y(a, c, e) {
      var b = [];
      for (a = a ? a.firstChild : null; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          (!c || a.tagName == c) && b.push(a);
          if (!e) {
            var d = Y(a, c, e);
            if (d.length) b = b.concat(d);
          }
        }
      return b;
    }
    b.$FindChildrenByTag = Y;
    b.$GetElementsByTag = function(b, a) {
      return b.getElementsByTagName(a);
    };
    function v() {
      var e = arguments,
        d,
        c,
        b,
        a,
        g = 1 & e[0],
        f = 1 + g;
      d = e[f - 1] || {};
      for (; f < e.length; f++)
        if ((c = e[f]))
          for (b in c) {
            a = c[b];
            if (a !== undefined) {
              a = c[b];
              var h = d[b];
              d[b] = g && (s(h) || s(a)) ? v(g, {}, h, a) : a;
            }
          }
      return d;
    }
    b.$Extend = v;
    function S(g, f) {
      $JssorDebug$.$Assert(f);
      var d = {},
        c,
        a,
        b;
      for (c in g) {
        a = g[c];
        b = f[c];
        if (a !== b) {
          var e;
          if (s(a) && s(b)) {
            a = S(a, b);
            e = !jb(a);
          }
          !e && (d[c] = a);
        }
      }
      return d;
    }
    b.$Unextend = S;
    b.$IsFunction = function(a) {
      return w(a) == "function";
    };
    b.$IsArray = function(a) {
      return w(a) == "array";
    };
    b.$IsString = function(a) {
      return w(a) == "string";
    };
    b.$IsNumeric = function(a) {
      return !isNaN(h(a)) && isFinite(a);
    };
    b.$Type = w;
    b.$Each = e;
    b.$IsNotEmpty = jb;
    b.$IsPlainObject = s;
    function L(a) {
      return document.createElement(a);
    }
    b.$CreateElement = L;
    b.$CreateDiv = function() {
      return L("DIV");
    };
    b.$CreateSpan = function() {
      return L("SPAN");
    };
    b.$EmptyFunction = function() {};
    function P(b, c, a) {
      if (a == undefined) return b.getAttribute(c);
      b.setAttribute(c, a);
    }
    function O(a, b) {
      return P(a, b) || P(a, "data-" + b);
    }
    b.$Attribute = P;
    b.$AttributeEx = O;
    function o(b, a) {
      if (a == undefined) return b.className;
      b.className = a;
    }
    b.$ClassName = o;
    function ob(b) {
      var a = {};
      e(b, function(b) {
        a[b] = b;
      });
      return a;
    }
    function yb(b) {
      var a = [];
      e(b, function(b) {
        a.push(b);
      });
      return a;
    }
    function qb(b, a) {
      return b.match(a || rb);
    }
    function I(b, a) {
      return ob(qb(b || "", a));
    }
    b.$ToHash = ob;
    b.$FromHash = yb;
    b.$Split = qb;
    function U(b, c) {
      var a = "";
      e(c, function(c) {
        a && (a += b);
        a += c;
      });
      return a;
    }
    function A(a, c, b) {
      o(a, U(" ", v(S(I(o(a)), I(c)), I(b))));
    }
    b.$Join = U;
    b.$AddClass = function(b, a) {
      A(b, null, a);
    };
    b.$RemoveClass = A;
    b.$ReplaceClass = A;
    b.$ParentNode = function(a) {
      return a.parentNode;
    };
    b.$HideElement = function(a) {
      b.$CssDisplay(a, "none");
    };
    b.$EnableElement = function(a, c) {
      if (c) b.$Attribute(a, "disabled", true);
      else b.$RemoveAttribute(a, "disabled");
    };
    b.$HideElements = function(c) {
      for (var a = 0; a < c.length; a++) b.$HideElement(c[a]);
    };
    b.$ShowElement = function(a, c) {
      b.$CssDisplay(a, c ? "none" : "");
    };
    b.$ShowElements = function(c, d) {
      for (var a = 0; a < c.length; a++) b.$ShowElement(c[a], d);
    };
    b.$RemoveAttribute = function(b, a) {
      b.removeAttribute(a);
    };
    b.$CanClearClip = function() {
      return i() && c < 10;
    };
    b.$SetStyleClip = function(b, a) {
      if (a)
        b.style.clip =
          "rect(" +
          Math.round(a.$Top || a.$MoveY || 0) +
          "px " +
          Math.round(a.$Right) +
          "px " +
          Math.round(a.$Bottom) +
          "px " +
          Math.round(a.$Left || a.$MoveX || 0) +
          "px)";
      else if (a !== undefined) {
        var e = b.style.cssText,
          d = [
            new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),
            new RegExp(/[\s]*cliptop: .*?[;]?/i),
            new RegExp(/[\s]*clipright: .*?[;]?/i),
            new RegExp(/[\s]*clipbottom: .*?[;]?/i),
            new RegExp(/[\s]*clipleft: .*?[;]?/i)
          ],
          c = t(e, d, "");
        $Jssor$.$CssCssText(b, c);
      }
    };
    b.$GetNow = function() {
      return +new Date();
    };
    b.$AppendChild = function(b, a) {
      b.appendChild(a);
    };
    b.$AppendChildren = function(c, a) {
      e(a, function(a) {
        b.$AppendChild(c, a);
      });
    };
    b.$InsertBefore = function(b, a, c) {
      (c || a.parentNode).insertBefore(b, a);
    };
    b.$InsertAfter = function(c, a, d) {
      b.$InsertBefore(c, a.nextSibling, d || a.parentNode);
    };
    b.$InsertAdjacentHtml = function(b, a, c) {
      b.insertAdjacentHTML(a, c);
    };
    b.$RemoveElement = function(b, a) {
      a = a || b.parentNode;
      a && a.removeChild(b);
    };
    b.$RemoveElements = function(a, c) {
      e(a, function(a) {
        b.$RemoveElement(a, c);
      });
    };
    b.$Empty = function(a) {
      b.$RemoveElements(b.$Children(a, true), a);
    };
    b.$CenterElement = function(a, c) {
      var d = b.$ParentNode(a);
      c & 1 && b.$CssLeft(a, (b.$CssWidth(d) - b.$CssWidth(a)) / 2);
      c & 2 && b.$CssTop(a, (b.$CssHeight(d) - b.$CssHeight(a)) / 2);
    };
    b.$ParseInt = function(b, a) {
      return parseInt(b, a || 10);
    };
    b.$ParseFloat = h;
    b.$IsChild = function(b, a) {
      var c = document.body;
      while (a && b !== a && c !== a)
        try {
          a = a.parentNode;
        } catch (d) {
          return false;
        }
      return b === a;
    };
    function Q(e, d, c) {
      var a = e.cloneNode(!d);
      !c && b.$RemoveAttribute(a, "id");
      return a;
    }
    b.$CloneNode = Q;
    b.$LoadImage = function(f, g) {
      var a = new Image();
      function d(f, c) {
        b.$RemoveEvent(a, "load", d);
        b.$RemoveEvent(a, "abort", e);
        b.$RemoveEvent(a, "error", e);
        g && g(a, c);
      }
      function e(a) {
        d(a, true);
      }
      if ((gb() && c < 11.6) || !f) d(!f);
      else {
        b.$AddEvent(a, "load", d);
        b.$AddEvent(a, "abort", e);
        b.$AddEvent(a, "error", e);
        a.src = f;
      }
    };
    b.$LoadImages = function(f, a, g) {
      var d = f.length + 1;
      function c(b) {
        d--;
        if (a && b && b.src == a.src) a = b;
        !d && g && g(a);
      }
      e(f, function(a) {
        b.$LoadImage(a.src, c);
      });
      c();
    };
    b.$BuildElement = function(a, f, h, g) {
      if (g) a = Q(a);
      var b = M(a, f);
      if (!b.length) b = $Jssor$.$GetElementsByTag(a, f);
      for (var e = b.length - 1; e > -1; e--) {
        var c = b[e],
          d = Q(h);
        o(d, o(c));
        $Jssor$.$CssCssText(d, c.style.cssText);
        $Jssor$.$InsertBefore(d, c);
        $Jssor$.$RemoveElement(c);
      }
      return a;
    };
    function xb(a) {
      var j = this,
        m = "",
        p = ["av", "pv", "ds", "dn"],
        f = [],
        n,
        i = 0,
        g = 0,
        d = 0;
      function h() {
        A(a, n, f[d || i || g & 2 || g]);
        $Jssor$.$Css(a, "pointer-events", d ? "none" : "");
      }
      function c() {
        i = 0;
        h();
        b.$RemoveEvent(document, "mouseup", c);
        b.$RemoveEvent(document, "touchend", c);
        b.$RemoveEvent(document, "touchcancel", c);
      }
      function l(a) {
        if (d) b.$CancelEvent(a);
        else {
          i = 4;
          h();
          b.$AddEvent(document, "mouseup", c);
          b.$AddEvent(document, "touchend", c);
          b.$AddEvent(document, "touchcancel", c);
        }
      }
      j.$Selected = function(a) {
        if (a === undefined) return g;
        g = a & 2 || a & 1;
        h();
      };
      j.$Enable = function(a) {
        if (a === undefined) return !d;
        d = a ? 0 : 3;
        h();
      };
      j.$Elmt = a = b.$GetElement(a);
      var k = $Jssor$.$Split(o(a));
      if (k) m = k.shift();
      e(p, function(a) {
        f.push(m + a);
      });
      n = U(" ", f);
      f.unshift("");
      b.$AddEvent(a, "mousedown", l);
      b.$AddEvent(a, "touchstart", l);
    }
    b.$Buttonize = function(a) {
      return new xb(a);
    };
    b.$Css = x;
    b.$CssN = T;
    b.$CssP = Ab;
    b.$CssOverflow = d("overflow");
    b.$CssTop = d("top", 2);
    b.$CssLeft = d("left", 2);
    b.$CssWidth = d("width", 2);
    b.$CssHeight = d("height", 2);
    b.$CssMarginLeft = d("marginLeft", 2);
    b.$CssMarginTop = d("marginTop", 2);
    b.$CssPosition = d("position");
    b.$CssDisplay = d("display");
    b.$CssZIndex = d("zIndex", 1);
    b.$CssFloat = function(b, a) {
      return x(b, i() ? "styleFloat" : "cssFloat", a);
    };
    b.$CssOpacity = function(b, a, c) {
      if (a != undefined) wb(b, a, c);
      else return ub(b);
    };
    b.$CssCssText = function(a, b) {
      if (b != undefined) a.style.cssText = b;
      else return a.style.cssText;
    };
    var N = {
      $Opacity: b.$CssOpacity,
      $Top: b.$CssTop,
      $Left: b.$CssLeft,
      $Width: b.$CssWidth,
      $Height: b.$CssHeight,
      $Position: b.$CssPosition,
      $Display: b.$CssDisplay,
      $ZIndex: b.$CssZIndex
    };
    b.$GetStyles = function(c, b) {
      var a = {};
      e(b, function(d, b) {
        if (N[b]) a[b] = N[b](c);
      });
      return a;
    };
    function n(h, k) {
      var f = H(),
        c = y(),
        d = W(),
        i = D(h);
      function j(b, c, a) {
        var d = b.$TransformPoint(g(-c / 2, -a / 2)),
          e = b.$TransformPoint(g(c / 2, -a / 2)),
          f = b.$TransformPoint(g(c / 2, a / 2)),
          h = b.$TransformPoint(g(-c / 2, a / 2));
        b.$TransformPoint(g(300, 300));
        return g(
          Math.min(d.x, e.x, f.x, h.x) + c / 2,
          Math.min(d.y, e.y, f.y, h.y) + a / 2
        );
      }
      function a(e, a) {
        a = a || {};
        var m = a.$TranslateZ || 0,
          o = (a.$RotateX || 0) % 360,
          p = (a.$RotateY || 0) % 360,
          v = (a.$Rotate || 0) % 360,
          k = a.$ScaleX,
          l = a.$ScaleY,
          g = a.$ScaleZ;
        if (k == undefined) k = 1;
        if (l == undefined) l = 1;
        if (g == undefined) g = 1;
        if (f) {
          m = 0;
          o = 0;
          p = 0;
          g = 0;
        }
        var d = new tb(a.$TranslateX, a.$TranslateY, m);
        d.$RotateX(o);
        d.$RotateY(p);
        d.$RotateZ(v);
        d.$Skew(a.$SkewX, a.$SkewY);
        d.$Scale(k, l, g);
        if (c) {
          d.$Move(a.$MoveX, a.$MoveY);
          e.style[i] = d.$Format3d();
        } else if (!q || q < 9) {
          var n = "",
            h = { x: 0, y: 0 };
          if (a.$OriginalWidth) h = j(d, a.$OriginalWidth, a.$OriginalHeight);
          b.$CssMarginTop(e, h.y);
          b.$CssMarginLeft(e, h.x);
          n = d.$Format2d();
          var s = e.style.filter,
            u = new RegExp(
              /[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g
            ),
            r = t(s, [u], n);
          K(e, r);
        }
      }
      n = function(g, f) {
        f = f || {};
        var i = f.$MoveX,
          j = f.$MoveY,
          h;
        e(N, function(a, b) {
          h = f[b];
          h !== undefined && a(g, h);
        });
        b.$SetStyleClip(g, f.$Clip);
        if (!c) {
          i != undefined && b.$CssLeft(g, (f.$OriginalX || 0) + i);
          j != undefined && b.$CssTop(g, (f.$OriginalY || 0) + j);
        }
        if (f.$Transform)
          if (d) pb(b.$CreateCallback(null, F, g, f));
          else a(g, f);
      };
      b.$SetStyleTransform = F;
      if (d) b.$SetStyleTransform = n;
      if (f) b.$SetStyleTransform = a;
      else if (!c) a = F;
      b.$SetStyles = n;
      n(h, k);
    }
    b.$SetStyleTransform = n;
    b.$SetStyles = n;
    function tb(h, i, m) {
      var c = this,
        b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, h || 0, i || 0, m || 0, 1],
        g = Math.sin,
        f = Math.cos,
        j = Math.tan;
      function e(a) {
        return a * Math.PI / 180;
      }
      function l(a, b) {
        return { x: a, y: b };
      }
      function k(
        b,
        c,
        f,
        g,
        i,
        l,
        n,
        o,
        q,
        t,
        u,
        w,
        y,
        A,
        C,
        F,
        a,
        d,
        e,
        h,
        j,
        k,
        m,
        p,
        r,
        s,
        v,
        x,
        z,
        B,
        D,
        E
      ) {
        return [
          b * a + c * j + f * r + g * z,
          b * d + c * k + f * s + g * B,
          b * e + c * m + f * v + g * D,
          b * h + c * p + f * x + g * E,
          i * a + l * j + n * r + o * z,
          i * d + l * k + n * s + o * B,
          i * e + l * m + n * v + o * D,
          i * h + l * p + n * x + o * E,
          q * a + t * j + u * r + w * z,
          q * d + t * k + u * s + w * B,
          q * e + t * m + u * v + w * D,
          q * h + t * p + u * x + w * E,
          y * a + A * j + C * r + F * z,
          y * d + A * k + C * s + F * B,
          y * e + A * m + C * v + F * D,
          y * h + A * p + C * x + F * E
        ];
      }
      function d(c, a) {
        return k.apply(null, (a || b).concat(c));
      }
      c.$Matrix = function() {
        return b;
      };
      c.$Scale = function(a, c, e) {
        if (a != 1 || c != 1 || e != 1)
          b = d([a, 0, 0, 0, 0, c, 0, 0, 0, 0, e, 0, 0, 0, 0, 1]);
      };
      c.$Translate = function(a, c, e) {
        if (a || c || e)
          b = d([
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            a || 0,
            c || 0,
            e || 0,
            1
          ]);
      };
      c.$Move = function(a, c, d) {
        b[12] += a || 0;
        b[13] += c || 0;
        b[14] += d || 0;
      };
      c.$RotateX = function(c) {
        if (c) {
          a = e(c);
          var h = f(a),
            i = g(a);
          b = d([1, 0, 0, 0, 0, h, i, 0, 0, -i, h, 0, 0, 0, 0, 1]);
        }
      };
      c.$RotateY = function(c) {
        if (c) {
          a = e(c);
          var h = f(a),
            i = g(a);
          b = d([h, 0, -i, 0, 0, 1, 0, 0, i, 0, h, 0, 0, 0, 0, 1]);
        }
      };
      c.$RotateZ = function(c) {
        if (c) {
          a = e(c);
          var h = f(a),
            i = g(a);
          b = d([h, i, 0, 0, -i, h, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        }
      };
      c.$Skew = function(a, c) {
        if (a || c) {
          h = e(a);
          i = e(c);
          b = d([1, j(i), 0, 0, j(h), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        }
      };
      c.$TransformPoint = function(c) {
        var a = d(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
        return l(a[12], a[13]);
      };
      c.$Format3d = function() {
        return "matrix3d(" + b.join(",") + ")";
      };
      c.$Format2d = function() {
        return (
          "progid:DXImageTransform.Microsoft.Matrix(M11=" +
          b[0] +
          ", M12=" +
          b[4] +
          ", M21=" +
          b[1] +
          ", M22=" +
          b[5] +
          ", SizingMethod='auto expand')"
        );
      };
    }
    new function() {
      var a = this;
      function b(d, g) {
        for (
          var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0;
          c < i;
          c++
        )
          for (var k = (f[c] = []), b = 0; b < h; b++) {
            for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
            k[b] = e;
          }
        return f;
      }
      a.$ScaleX = function(b, c) {
        return a.$ScaleXY(b, c, 0);
      };
      a.$ScaleY = function(b, c) {
        return a.$ScaleXY(b, 0, c);
      };
      a.$ScaleXY = function(a, c, d) {
        return b(a, [[c, 0], [0, d]]);
      };
      a.$TransformPoint = function(d, c) {
        var a = b(d, [[c.x], [c.y]]);
        return g(a[0][0], a[1][0]);
      };
    }();
    var G = {
      $OriginalX: 0,
      $OriginalY: 0,
      $MoveX: 0,
      $MoveY: 0,
      $Zoom: 1,
      $ScaleX: 1,
      $ScaleY: 1,
      $Rotate: 0,
      $RotateX: 0,
      $RotateY: 0,
      $TranslateX: 0,
      $TranslateY: 0,
      $TranslateZ: 0,
      $SkewX: 0,
      $SkewY: 0
    };
    b.$FormatEasings = function(a) {
      var b = a || {};
      if (a)
        if ($Jssor$.$IsFunction(a)) b = { $Default: b };
        else if ($Jssor$.$IsFunction(a.$Clip)) b.$Clip = { $Default: a.$Clip };
      return b;
    };
    function nb(d, a) {
      var c = {};
      e(d, function(d, e) {
        var f = d;
        if (a[e] != undefined)
          if (b.$IsNumeric(d)) f = d + a[e];
          else f = nb(d, a[e]);
        c[e] = f;
      });
      return c;
    }
    b.$AddDif = nb;
    b.$Cast = function(f, g, r, k, t, u, i) {
      var a = g;
      if (f) {
        a = {};
        for (var c in g) {
          var v = u[c] || 1,
            q = t[c] || [0, 1],
            b = (r - q[0]) / q[1];
          b = Math.min(Math.max(b, 0), 1);
          b = b * v;
          var o = Math.floor(b);
          if (b != o) b -= o;
          var d = k.$Default || $JssorEasing$.$EaseSwing,
            e,
            w = f[c],
            h = g[c];
          if ($Jssor$.$IsNumeric(h)) {
            d = k[c] || d;
            var s = d(b);
            e = w + h * s;
          } else {
            $JssorDebug$.$Execute(function() {
              !$Jssor$.$IsPlainObject(h) &&
                $JssorDebug$.$Log("jssor cast, wrong difStyles");
            });
            e = $Jssor$.$Extend({ $Offset: {} }, f[c]);
            var p = k[c] || {};
            $Jssor$.$Each(h.$Offset || h, function(g, a) {
              d = p[a] || p.$Default || d;
              var f = d(b),
                c = g * f;
              e.$Offset[a] = c;
              e[a] += c;
            });
          }
          a[c] = e;
        }
        var n = $Jssor$.$Each(g, function(b, a) {
          return G[a] != undefined;
        });
        n &&
          $Jssor$.$Each(G, function(c, b) {
            if (a[b] == undefined && f[b] !== undefined) a[b] = f[b];
          });
        if (n) {
          if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom;
          a.$OriginalWidth = i.$OriginalWidth;
          a.$OriginalHeight = i.$OriginalHeight;
          a.$Transform = true;
        }
      }
      if (g.$Clip && i.$Move) {
        var j = a.$Clip.$Offset,
          m = (j.$Top || 0) + (j.$Bottom || 0),
          l = (j.$Left || 0) + (j.$Right || 0);
        a.$Left = (a.$Left || 0) + l;
        a.$Top = (a.$Top || 0) + m;
        a.$Clip.$Left -= l;
        a.$Clip.$Right -= l;
        a.$Clip.$Top -= m;
        a.$Clip.$Bottom -= m;
      }
      if (
        a.$Clip &&
        $Jssor$.$CanClearClip() &&
        !a.$Clip.$Top &&
        !a.$Clip.$Left &&
        !a.$Clip.$MoveY &&
        !a.$Clip.$MoveX &&
        a.$Clip.$Right == i.$OriginalWidth &&
        a.$Clip.$Bottom == i.$OriginalHeight
      )
        a.$Clip = null;
      return a;
    };
  }());
function $JssorObject$() {
  var a = this,
    c = [],
    b = [];
  function g(a, b) {
    $JssorDebug$.$Execute(function() {
      if (a == undefined || a == null)
        throw new Error("param 'eventName' is null or empty.");
      if (typeof b != "function") throw "param 'handler' must be a function.";
      $Jssor$.$Each(c, function(c) {
        if (c.$EventName == a && c.$Handler === b)
          throw new Error(
            "The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice."
          );
      });
    });
    c.push({ $EventName: a, $Handler: b });
  }
  function f(a, b) {
    $JssorDebug$.$Execute(function() {
      if (a == undefined || a == null)
        throw new Error("param 'eventName' is null or empty.");
      if (typeof b != "function") throw "param 'handler' must be a function.";
    });
    $Jssor$.$Each(c, function(d, e) {
      d.$EventName == a && d.$Handler === b && c.splice(e, 1);
    });
  }
  function e() {
    c = [];
  }
  function d() {
    $Jssor$.$Each(b, function(a) {
      $Jssor$.$RemoveEvent(a.$Obj, a.$EventName, a.$Handler);
    });
    b = [];
  }
  a.$Listen = function(d, a, c, e) {
    $JssorDebug$.$Execute(function() {
      if (!d) throw new Error("param 'obj' is null or empty.");
      if (a == undefined || a == null)
        throw new Error("param 'eventName' is null or empty.");
      if (typeof c != "function") throw "param 'handler' must be a function.";
      $Jssor$.$Each(b, function(b) {
        if (b.$Obj === d && b.$EventName == a && b.$Handler === c)
          throw new Error(
            "The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice."
          );
      });
    });
    $Jssor$.$AddEvent(d, a, c, e);
    b.push({ $Obj: d, $EventName: a, $Handler: c });
  };
  a.$Unlisten = function(d, a, c) {
    $JssorDebug$.$Execute(function() {
      if (!d) throw new Error("param 'obj' is null or empty.");
      if (a == undefined || a == null)
        throw new Error("param 'eventName' is null or empty.");
      if (typeof c != "function") throw "param 'handler' must be a function.";
    });
    $Jssor$.$Each(b, function(e, f) {
      if (e.$Obj === d && e.$EventName == a && e.$Handler === c) {
        $Jssor$.$RemoveEvent(d, a, c);
        b.splice(f, 1);
      }
    });
  };
  a.$UnlistenAll = d;
  a.$On = a.addEventListener = g;
  a.$Off = a.removeEventListener = f;
  a.$TriggerEvent = function(a) {
    var b = [].slice.call(arguments, 1);
    $Jssor$.$Each(c, function(c) {
      c.$EventName == a && c.$Handler.apply(window, b);
    });
  };
  a.$Destroy = function() {
    d();
    e();
    for (var b in a) delete a[b];
  };
  $JssorDebug$.$C_AbstractClass(a);
}
var $JssorAnimator$ = (window.$JssorAnimator$ = function(t, x, d, G, D, v) {
  t = t || 0;
  var a = this,
    k,
    I,
    h,
    i,
    q,
    u = 0,
    C,
    E,
    B,
    w,
    s = 0,
    e = 0,
    g = 0,
    y,
    f,
    m,
    c,
    b,
    j,
    n = [],
    r;
  function J(a) {
    c += a;
    b += a;
    f += a;
    m += a;
    e += a;
    g += a;
    s += a;
  }
  function p(m) {
    var h = m;
    if (j && (h >= b || h <= c)) h = ((h - c) % j + j) % j + c;
    if (!y || q || e != h) {
      var i = Math.min(h, b);
      i = Math.max(i, c);
      if (!y || q || i != g) {
        if (v) {
          var k = (i - f) / (x || 1);
          if (d.$Reverse) k = 1 - k;
          var l = $Jssor$.$Cast(D, v, k, C, B, E, d);
          if (r)
            $Jssor$.$Each(l, function(b, a) {
              r[a] && r[a](G, b);
            });
          else $Jssor$.$SetStyles(G, l);
        }
        a.$OnInnerOffsetChange(g - f, i - f);
        g = i;
        $Jssor$.$Each(n, function(b, c) {
          var a = m < e ? n[n.length - c - 1] : b;
          a.$GoToPosition(g - s);
        });
        var p = e,
          o = g;
        e = h;
        y = true;
        a.$OnPositionChange(p, o);
      }
    }
  }
  function z(a, d, e) {
    $JssorDebug$.$Execute(function() {
      d !== 0 &&
        d !== 1 &&
        $JssorDebug$.$Fail(
          "Argument out of range, the value of 'combineMode' should be either 0 or 1."
        );
    });
    d && a.$Shift(b);
    if (!e) {
      c = Math.min(c, a.$GetPosition_OuterBegin() + s);
      b = Math.max(b, a.$GetPosition_OuterEnd() + s);
    }
    n.push(a);
  }
  var l =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  if ($Jssor$.$IsBrowserSafari() && $Jssor$.$BrowserVersion() < 7) l = null;
  l =
    l ||
    function(a) {
      $Jssor$.$Delay(a, d.$Interval);
    };
  function F() {
    if (k) {
      var b = $Jssor$.$GetNow(),
        c = Math.min(b - u, d.$IntervalMax),
        a = e + c * i;
      u = b;
      if (a * i >= h * i) a = h;
      p(a);
      if (!q && a * i >= h * i) H(w);
      else l(F);
    }
  }
  function o(d, f, g) {
    if (!k) {
      k = true;
      q = g;
      w = f;
      d = Math.max(d, c);
      d = Math.min(d, b);
      h = d;
      i = h < e ? -1 : 1;
      a.$OnStart();
      u = $Jssor$.$GetNow();
      l(F);
    }
  }
  function H(b) {
    if (k) {
      q = k = w = false;
      a.$OnStop();
      b && b();
    }
  }
  a.$Play = function(a, c, d) {
    o(a ? e + a : b, c, d);
  };
  a.$PlayToPosition = o;
  a.$PlayToBegin = function(a, b) {
    o(c, a, b);
  };
  a.$PlayToEnd = function(a, c) {
    o(b, a, c);
  };
  a.$Stop = H;
  a.$Continue = function(a) {
    o(a);
  };
  a.$GetPosition = function() {
    return e;
  };
  a.$GetPlayToPosition = function() {
    return h;
  };
  a.$GetPosition_Display = function() {
    return g;
  };
  a.$GoToPosition = p;
  a.$GoToBegin = function() {
    p(c, true);
  };
  a.$GoToEnd = function() {
    p(b, true);
  };
  a.$Move = function(a) {
    p(e + a);
  };
  a.$CombineMode = function() {
    return I;
  };
  a.$GetDuration = function() {
    return x;
  };
  a.$IsPlaying = function() {
    return k;
  };
  a.$IsOnTheWay = function() {
    return e > f && e <= m;
  };
  a.$SetLoopLength = function(a) {
    j = a;
  };
  a.$Shift = J;
  a.$Join = z;
  a.$Combine = function(a, b) {
    z(a, 0, b);
  };
  a.$Chain = function(a) {
    z(a, 1);
  };
  a.$Expand = function(a) {
    b += a;
  };
  a.$GetPosition_InnerBegin = function() {
    return f;
  };
  a.$GetPosition_InnerEnd = function() {
    return m;
  };
  a.$GetPosition_OuterBegin = function() {
    return c;
  };
  a.$GetPosition_OuterEnd = function() {
    return b;
  };
  a.$OnPositionChange = a.$OnStart = a.$OnStop = a.$OnInnerOffsetChange =
    $Jssor$.$EmptyFunction;
  a.$Version = $Jssor$.$GetNow();
  $JssorDebug$.$Execute(function() {
    a.$NestedAnimators = n;
    a.$FromStyles = D;
    a.$DifStyles = v;
  });
  d = $Jssor$.$Extend({ $Interval: 16, $IntervalMax: 50 }, d);
  $JssorDebug$.$Execute(function() {
    d = $Jssor$.$Extend({ $LoopLength: undefined, $Easing: undefined }, d);
  });
  j = d.$LoopLength;
  r = d.$Setter;
  c = f = t;
  b = m = t + x;
  E = d.$Round || {};
  B = d.$During || {};
  C = $Jssor$.$FormatEasings(d.$Easing);
});
function $JssorPlayerClass$() {
  var b = this,
    a = [];
  function c(a) {
    var f = this,
      c,
      b = [];
    function d(f) {
      var e = $Jssor$.$EvtSrc(f);
      c = e.pInstance;
      $Jssor$.$RemoveEvent(e, "dataavailable", d);
      $Jssor$.$Each(b, function(a) {
        a != c && a.$Remove();
      });
      a.pTagName = c.tagName;
      b = null;
    }
    function e(c) {
      var e;
      if (!c.pInstance) {
        var f = $Jssor$.$AttributeEx(c, "pHandler");
        if ($JssorPlayer$[f]) {
          $Jssor$.$AddEvent(c, "dataavailable", d);
          e = new $JssorPlayer$[f](a, c);
          b.push(e);
          $JssorDebug$.$Execute(function() {
            $Jssor$.$Type(e.$Remove) != "function" &&
              $JssorDebug$.$Fail(
                "'pRemove' interface not implemented for player handler '" +
                  f +
                  "'."
              );
          });
        }
      }
      return e;
    }
    f.$InitPlayerController = function() {
      if (!a.pInstance && !e(a)) {
        var b = $Jssor$.$Children(a);
        $Jssor$.$Each(b, function(a) {
          e(a);
        });
      }
    };
  }
  b.$EVT_SWITCH = 21;
  b.$FetchPlayers = function(b) {
    b = b || document.body;
    var d = $Jssor$.$FindChildren(b, "player");
    $Jssor$.$Each(d, function(b) {
      if (!a[b.pId]) {
        b.pId = a.length;
        a.push(new c(b));
      }
      var d = a[b.pId];
      d.$InitPlayerController();
    });
  };
}
var $JssorSlideshowFormations$ = (window.$JssorSlideshowFormations$ = new function() {
    var f = this,
      b = 0,
      a = 1,
      d = 2,
      c = 3,
      q = 1,
      p = 2,
      r = 4,
      o = 8,
      u = 256,
      v = 512,
      t = 1024,
      s = 2048,
      h = s + q,
      g = s + p,
      m = v + q,
      k = v + p,
      l = u + r,
      i = u + o,
      j = t + r,
      n = t + o;
    function w(a) {
      return (a & p) == p;
    }
    function x(a) {
      return (a & r) == r;
    }
    function e(b, a, c) {
      c.push(a);
      b[a] = b[a] || [];
      b[a].push(c);
    }
    f.$FormationStraight = function(n) {
      for (
        var d = n.$Cols,
          f = n.$Rows,
          s = n.$Assembly,
          t = n.$Count,
          r = [],
          a = 0,
          b = 0,
          p = d - 1,
          q = f - 1,
          o = t - 1,
          c,
          b = 0;
        b < f;
        b++
      )
        for (a = 0; a < d; a++) {
          switch (s) {
            case h:
              c = o - (a * f + (q - b));
              break;
            case j:
              c = o - (b * d + (p - a));
              break;
            case m:
              c = o - (a * f + b);
            case l:
              c = o - (b * d + a);
              break;
            case g:
              c = a * f + b;
              break;
            case i:
              c = b * d + (p - a);
              break;
            case k:
              c = a * f + (q - b);
              break;
            default:
              c = b * d + a;
          }
          e(r, c, [b, a]);
        }
      return r;
    };
    f.$FormationSwirl = function(p) {
      var w = p.$Cols,
        x = p.$Rows,
        A = p.$Assembly,
        v = p.$Count,
        z = [],
        y = [],
        t = 0,
        f = 0,
        n = 0,
        q = w - 1,
        r = x - 1,
        s,
        o,
        u = 0;
      switch (A) {
        case h:
          f = q;
          n = 0;
          o = [d, a, c, b];
          break;
        case j:
          f = 0;
          n = r;
          o = [b, c, a, d];
          break;
        case m:
          f = q;
          n = r;
          o = [c, a, d, b];
          break;
        case l:
          f = q;
          n = r;
          o = [a, c, b, d];
          break;
        case g:
          f = 0;
          n = 0;
          o = [d, b, c, a];
          break;
        case i:
          f = q;
          n = 0;
          o = [a, d, b, c];
          break;
        case k:
          f = 0;
          n = r;
          o = [c, b, d, a];
          break;
        default:
          f = 0;
          n = 0;
          o = [b, d, a, c];
      }
      t = 0;
      while (t < v) {
        s = n + "," + f;
        if (f >= 0 && f < w && n >= 0 && n < x && !y[s]) {
          y[s] = true;
          e(z, t++, [n, f]);
        } else
          switch (o[u++ % o.length]) {
            case b:
              f--;
              break;
            case d:
              n--;
              break;
            case a:
              f++;
              break;
            case c:
              n++;
          }
        switch (o[u % o.length]) {
          case b:
            f++;
            break;
          case d:
            n++;
            break;
          case a:
            f--;
            break;
          case c:
            n--;
        }
      }
      return z;
    };
    f.$FormationZigZag = function(p) {
      var w = p.$Cols,
        x = p.$Rows,
        z = p.$Assembly,
        v = p.$Count,
        t = [],
        u = 0,
        f = 0,
        n = 0,
        q = w - 1,
        r = x - 1,
        y,
        o,
        s = 0;
      switch (z) {
        case h:
          f = q;
          n = 0;
          o = [d, a, c, a];
          break;
        case j:
          f = 0;
          n = r;
          o = [b, c, a, c];
          break;
        case m:
          f = q;
          n = r;
          o = [c, a, d, a];
          break;
        case l:
          f = q;
          n = r;
          o = [a, c, b, c];
          break;
        case g:
          f = 0;
          n = 0;
          o = [d, b, c, b];
          break;
        case i:
          f = q;
          n = 0;
          o = [a, d, b, d];
          break;
        case k:
          f = 0;
          n = r;
          o = [c, b, d, b];
          break;
        default:
          f = 0;
          n = 0;
          o = [b, d, a, d];
      }
      u = 0;
      while (u < v) {
        y = n + "," + f;
        if (f >= 0 && f < w && n >= 0 && n < x && typeof t[y] == "undefined") {
          e(t, u++, [n, f]);
          switch (o[s % o.length]) {
            case b:
              f++;
              break;
            case d:
              n++;
              break;
            case a:
              f--;
              break;
            case c:
              n--;
          }
        } else {
          switch (o[s++ % o.length]) {
            case b:
              f--;
              break;
            case d:
              n--;
              break;
            case a:
              f++;
              break;
            case c:
              n++;
          }
          switch (o[s++ % o.length]) {
            case b:
              f++;
              break;
            case d:
              n++;
              break;
            case a:
              f--;
              break;
            case c:
              n--;
          }
        }
      }
      return t;
    };
    f.$FormationStraightStairs = function(q) {
      var u = q.$Cols,
        v = q.$Rows,
        f = q.$Assembly,
        t = q.$Count,
        r = [],
        s = 0,
        c = 0,
        d = 0,
        o = u - 1,
        p = v - 1,
        z = t - 1;
      switch (f) {
        case h:
        case k:
        case m:
        case g:
          var a = 0,
            b = 0;
          break;
        case i:
        case j:
        case l:
        case n:
          var a = o,
            b = 0;
          break;
        default:
          f = n;
          var a = o,
            b = 0;
      }
      c = a;
      d = b;
      while (s < t) {
        if (x(f) || w(f)) e(r, z - s++, [d, c]);
        else e(r, s++, [d, c]);
        switch (f) {
          case h:
          case k:
            c--;
            d++;
            break;
          case m:
          case g:
            c++;
            d--;
            break;
          case i:
          case j:
            c--;
            d--;
            break;
          case n:
          case l:
          default:
            c++;
            d++;
        }
        if (c < 0 || d < 0 || c > o || d > p) {
          switch (f) {
            case h:
            case k:
              a++;
              break;
            case i:
            case j:
            case m:
            case g:
              b++;
              break;
            case n:
            case l:
            default:
              a--;
          }
          if (a < 0 || b < 0 || a > o || b > p) {
            switch (f) {
              case h:
              case k:
                a = o;
                b++;
                break;
              case m:
              case g:
                b = p;
                a++;
                break;
              case i:
              case j:
                b = p;
                a--;
                break;
              case n:
              case l:
              default:
                a = 0;
                b++;
            }
            if (b > p) b = p;
            else if (b < 0) b = 0;
            else if (a > o) a = o;
            else if (a < 0) a = 0;
          }
          d = b;
          c = a;
        }
      }
      return r;
    };
    f.$FormationSquare = function(h) {
      var a = h.$Cols || 1,
        b = h.$Rows || 1,
        i = [],
        c,
        d,
        f,
        g,
        j;
      f = a < b ? (b - a) / 2 : 0;
      g = a > b ? (a - b) / 2 : 0;
      j = Math.round(Math.max(a / 2, b / 2)) + 1;
      for (c = 0; c < a; c++)
        for (d = 0; d < b; d++)
          e(i, j - Math.min(c + 1 + f, d + 1 + g, a - c + f, b - d + g), [
            d,
            c
          ]);
      return i;
    };
    f.$FormationRectangle = function(f) {
      var c = f.$Cols || 1,
        d = f.$Rows || 1,
        g = [],
        a,
        b,
        h;
      h = Math.round(Math.min(c / 2, d / 2)) + 1;
      for (a = 0; a < c; a++)
        for (b = 0; b < d; b++)
          e(g, h - Math.min(a + 1, b + 1, c - a, d - b), [b, a]);
      return g;
    };
    f.$FormationRandom = function(c) {
      for (var d = [], a, b = 0; b < c.$Rows; b++)
        for (a = 0; a < c.$Cols; a++)
          e(d, Math.ceil(1e5 * Math.random()) % 13, [b, a]);
      return d;
    };
    f.$FormationCircle = function(c) {
      for (
        var d = c.$Cols || 1,
          f = c.$Rows || 1,
          g = [],
          a,
          h = d / 2 - 0.5,
          i = f / 2 - 0.5,
          b = 0;
        b < d;
        b++
      )
        for (a = 0; a < f; a++)
          e(g, Math.round(Math.sqrt(Math.pow(b - h, 2) + Math.pow(a - i, 2))), [
            a,
            b
          ]);
      return g;
    };
    f.$FormationCross = function(c) {
      for (
        var d = c.$Cols || 1,
          f = c.$Rows || 1,
          g = [],
          a,
          h = d / 2 - 0.5,
          i = f / 2 - 0.5,
          b = 0;
        b < d;
        b++
      )
        for (a = 0; a < f; a++)
          e(g, Math.round(Math.min(Math.abs(b - h), Math.abs(a - i))), [a, b]);
      return g;
    };
    f.$FormationRectangleCross = function(f) {
      for (
        var g = f.$Cols || 1,
          h = f.$Rows || 1,
          i = [],
          a,
          c = g / 2 - 0.5,
          d = h / 2 - 0.5,
          j = Math.max(c, d) + 1,
          b = 0;
        b < g;
        b++
      )
        for (a = 0; a < h; a++)
          e(
            i,
            Math.round(j - Math.max(c - Math.abs(b - c), d - Math.abs(a - d))) -
              1,
            [a, b]
          );
      return i;
    };
  }()),
  $JssorSlideshowRunner$ = (window.$JssorSlideshowRunner$ = function(
    f,
    j,
    h,
    l,
    q
  ) {
    var c = this,
      m,
      b,
      a,
      p = 0,
      o = l.$TransitionsOrder,
      i,
      d = 8;
    function k(a) {
      if (a.$Top) a.$MoveY = a.$Top;
      if (a.$Left) a.$MoveX = a.$Left;
      $Jssor$.$Each(a, function(a) {
        $Jssor$.$IsPlainObject(a) && k(a);
      });
    }
    function e(c, b) {
      var a = {
        $Interval: b,
        $Duration: 1,
        $Delay: 0,
        $Cols: 1,
        $Rows: 1,
        $Opacity: 0,
        $Zoom: 0,
        $Clip: 0,
        $Move: false,
        $SlideOut: false,
        $Reverse: false,
        $Formation: $JssorSlideshowFormations$.$FormationRandom,
        $Assembly: 1032,
        $ChessMode: { $Column: 0, $Row: 0 },
        $Easing: $JssorEasing$.$EaseSwing,
        $Round: {},
        $Blocks: [],
        $During: {}
      };
      $Jssor$.$Extend(a, c);
      k(a);
      a.$Count = a.$Cols * a.$Rows;
      a.$Easing = $Jssor$.$FormatEasings(a.$Easing);
      a.$FramesCount = Math.ceil(a.$Duration / a.$Interval);
      a.$GetBlocks = function(c, b) {
        c /= a.$Cols;
        b /= a.$Rows;
        var f = c + "x" + b;
        if (!a.$Blocks[f]) {
          a.$Blocks[f] = { $Width: c, $Height: b };
          for (var d = 0; d < a.$Cols; d++)
            for (var e = 0; e < a.$Rows; e++)
              a.$Blocks[f][e + "," + d] = {
                $Top: e * b,
                $Right: d * c + c,
                $Bottom: e * b + b,
                $Left: d * c
              };
        }
        return a.$Blocks[f];
      };
      if (a.$Brother) {
        a.$Brother = e(a.$Brother, b);
        a.$SlideOut = true;
      }
      return a;
    }
    function g(w, e, a, r, j, h) {
      var u = this,
        p,
        q = {},
        f = {},
        i = [],
        c,
        b,
        n,
        l = a.$ChessMode.$Column || 0,
        m = a.$ChessMode.$Row || 0,
        d = a.$GetBlocks(j, h),
        k = x(a),
        y = k.length - 1,
        o = a.$Duration + a.$Delay * y,
        s = r + o,
        g = a.$SlideOut,
        t;
      s += 50;
      function x(a) {
        var b = a.$Formation(a);
        return a.$Reverse ? b.reverse() : b;
      }
      u.$EndTime = s;
      u.$ShowFrame = function(b) {
        b -= r;
        var c = b < o;
        if (c || t) {
          t = c;
          if (!g) b = o - b;
          var d = Math.ceil(b / a.$Interval);
          $Jssor$.$Each(f, function(a, c) {
            var b = Math.max(d, a.$Min);
            b = Math.min(b, a.length - 1);
            if (a.$LastFrameIndex != b) {
              if (!a.$LastFrameIndex && !g) $Jssor$.$ShowElement(i[c]);
              else b == a.$Max && g && $Jssor$.$HideElement(i[c]);
              a.$LastFrameIndex = b;
              $Jssor$.$SetStyles(i[c], a[b]);
            }
          });
        }
      };
      e = $Jssor$.$CloneNode(e);
      $Jssor$.$SetStyleTransform(e, null);
      if ($Jssor$.$IsBrowserIe9Earlier()) {
        var z = !e["no-image"],
          v = $Jssor$.$FindChildrenByTag(e);
        $Jssor$.$Each(v, function(a) {
          (z || a["jssor-slider"]) &&
            $Jssor$.$CssOpacity(a, $Jssor$.$CssOpacity(a), true);
        });
      }
      $Jssor$.$Each(k, function(e, i) {
        $Jssor$.$Each(e, function(C) {
          var G = C[0],
            F = C[1],
            r = G + "," + F,
            k = false,
            o = false,
            t = false;
          if (l && F % 2) {
            if (l & 3) k = !k;
            if (l & 12) o = !o;
            if (l & 16) t = !t;
          }
          if (m && G % 2) {
            if (m & 3) k = !k;
            if (m & 12) o = !o;
            if (m & 16) t = !t;
          }
          a.$Top = a.$Top || a.$Clip & 4;
          a.$Bottom = a.$Bottom || a.$Clip & 8;
          a.$Left = a.$Left || a.$Clip & 1;
          a.$Right = a.$Right || a.$Clip & 2;
          var y = o ? a.$Bottom : a.$Top,
            v = o ? a.$Top : a.$Bottom,
            x = k ? a.$Right : a.$Left,
            w = k ? a.$Left : a.$Right;
          a.$Clip = y || v || x || w;
          n = {};
          b = { $MoveY: 0, $MoveX: 0, $Opacity: 1, $Width: j, $Height: h };
          c = $Jssor$.$Extend({}, b);
          p = $Jssor$.$Extend({}, d[r]);
          if (a.$Opacity) b.$Opacity = 2 - a.$Opacity;
          if (a.$ZIndex) {
            b.$ZIndex = a.$ZIndex;
            c.$ZIndex = 0;
          }
          var E = a.$Cols * a.$Rows > 1 || a.$Clip;
          if (a.$Zoom || a.$Rotate) {
            var D = true;
            if ($Jssor$.$IsBrowserIe9Earlier())
              if (a.$Cols * a.$Rows > 1) D = false;
              else E = false;
            if (D) {
              b.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
              c.$Zoom = 1;
              if ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera())
                b.$Zoom = Math.min(b.$Zoom, 2);
              var J = a.$Rotate || 0;
              b.$Rotate = J * 360 * (t ? -1 : 1);
              c.$Rotate = 0;
            }
          }
          if (E) {
            var e = (p.$Offset = {});
            if (a.$Clip) {
              var s = a.$ScaleClip || 1;
              if (y && v) {
                e.$Top = d.$Height / 2 * s;
                e.$Bottom = -e.$Top;
              } else if (y) e.$Bottom = -d.$Height * s;
              else if (v) e.$Top = d.$Height * s;
              if (x && w) {
                e.$Left = d.$Width / 2 * s;
                e.$Right = -e.$Left;
              } else if (x) e.$Right = -d.$Width * s;
              else if (w) e.$Left = d.$Width * s;
            }
            n.$Clip = p;
            c.$Clip = d[r];
          }
          var H = k ? 1 : -1,
            I = o ? 1 : -1;
          if (a.x) b.$MoveX += j * a.x * H;
          if (a.y) b.$MoveY += h * a.y * I;
          $Jssor$.$Each(b, function(a, b) {
            if ($Jssor$.$IsNumeric(a)) if (a != c[b]) n[b] = a - c[b];
          });
          q[r] = g ? c : b;
          var z = a.$FramesCount,
            u = Math.round(i * a.$Delay / a.$Interval);
          f[r] = new Array(u);
          f[r].$Min = u;
          f[r].$Max = u + z - 1;
          for (var B = 0; B <= z; B++) {
            var A = $Jssor$.$Cast(c, n, B / z, a.$Easing, a.$During, a.$Round, {
              $Move: a.$Move,
              $OriginalWidth: j,
              $OriginalHeight: h
            });
            A.$ZIndex = A.$ZIndex || 1;
            f[r].push(A);
          }
        });
      });
      k.reverse();
      $Jssor$.$Each(k, function(a) {
        $Jssor$.$Each(a, function(b) {
          var f = b[0],
            d = b[1],
            c = f + "," + d,
            a = e;
          if (d || f) a = $Jssor$.$CloneNode(e);
          $Jssor$.$SetStyles(a, q[c]);
          $Jssor$.$CssOverflow(a, "hidden");
          $Jssor$.$CssPosition(a, "absolute");
          w.$AddClipElement(a);
          i[c] = a;
          $Jssor$.$ShowElement(a, !g);
        });
      });
    }
    function n() {
      var c = this,
        e = 0;
      $JssorAnimator$.call(c, 0, m);
      c.$OnPositionChange = function(f, c) {
        if (c - e > d) {
          e = c;
          a && a.$ShowFrame(c);
          b && b.$ShowFrame(c);
        }
      };
      c.$Transition = i;
    }
    c.$GetTransition = function() {
      var a = 0,
        b = l.$Transitions,
        c = b.length;
      if (o) a = p++ % c;
      else a = Math.floor(Math.random() * c);
      b[a] && (b[a].$Index = a);
      return b[a];
    };
    c.$Initialize = function(x, y, p, q, k) {
      $JssorDebug$.$Execute(function() {
        b && $JssorDebug$.$Fail("slideshow runner has not been cleared.");
      });
      i = k;
      k = e(k, d);
      var o = q.$Item,
        n = p.$Item;
      o["no-image"] = !q.$Image;
      n["no-image"] = !p.$Image;
      var t = o,
        u = n,
        w = k,
        l = k.$Brother || e({}, d);
      if (!k.$SlideOut) {
        t = n;
        u = o;
      }
      var v = l.$Shift || 0;
      b = new g(f, u, l, Math.max(v - l.$Interval, 0), j, h);
      a = new g(f, t, w, Math.max(l.$Interval - v, 0), j, h);
      b.$ShowFrame(0);
      a.$ShowFrame(0);
      m = Math.max(b.$EndTime, a.$EndTime);
      c.$Index = x;
    };
    c.$Clear = function() {
      f.$Clear();
      b = null;
      a = null;
    };
    c.$GetProcessor = function() {
      var b = null;
      if (a) b = new n();
      return b;
    };
    if (
      $Jssor$.$IsBrowserIe9Earlier() ||
      $Jssor$.$IsBrowserOpera() ||
      (q && $Jssor$.$WebKitVersion() < 537)
    )
      d = 16;
    $JssorObject$.call(c);
    $JssorAnimator$.call(c, -1e7, 1e7);
  }),
  $JssorSlider$ = (window.$JssorSlider$ = function(c, Xb) {
    var b = this;
    function uc() {
      var a = this;
      $JssorAnimator$.call(a, -1e8, 2e8);
      a.$GetCurrentSlideInfo = function() {
        var b = a.$GetPosition_Display(),
          c = Math.floor(b),
          e = f(c),
          d = b - Math.floor(b);
        return { $Index: e, $VirtualIndex: c, $Position: d };
      };
      a.$OnPositionChange = function(c, a) {
        var d = Math.floor(a);
        if (d != a && a > c) d++;
        Ob(d, true);
        b.$TriggerEvent($JssorSlider$.$EVT_POSITION_CHANGE, f(a), f(c), a, c);
      };
    }
    function tc() {
      var a = this;
      $JssorAnimator$.call(a, 0, 0, { $LoopLength: d });
      $Jssor$.$Each(o, function(b) {
        p & 1 && b.$SetLoopLength(d);
        a.$Chain(b);
        b.$Shift(U / Ub);
      });
    }
    function sc() {
      var a = this,
        b = ob.$Elmt;
      $JssorAnimator$.call(
        a,
        -1,
        2,
        {
          $Easing: $JssorEasing$.$EaseLinear,
          $Setter: { $Position: Tb },
          $LoopLength: d
        },
        b,
        { $Position: 1 },
        { $Position: -2 }
      );
      a.$Wrapper = b;
      $JssorDebug$.$Execute(function() {
        $Jssor$.$Attribute(ob.$Elmt, "debug-id", "slide_container");
      });
    }
    function gc(m, l) {
      var c = this,
        g,
        h,
        j,
        k,
        d;
      $JssorAnimator$.call(c, -1e8, 2e8, { $IntervalMax: 100 });
      c.$OnStart = function() {
        D = true;
        I = null;
        b.$TriggerEvent(
          $JssorSlider$.$EVT_SWIPE_START,
          f(i.$GetPosition()),
          i.$GetPosition()
        );
      };
      c.$OnStop = function() {
        D = false;
        k = false;
        var a = i.$GetCurrentSlideInfo();
        b.$TriggerEvent(
          $JssorSlider$.$EVT_SWIPE_END,
          f(i.$GetPosition()),
          i.$GetPosition()
        );
        !a.$Position && wc(a.$VirtualIndex, e);
      };
      c.$OnPositionChange = function(f, e) {
        var b;
        if (k) b = d;
        else {
          b = h;
          if (j) {
            var c = e / j;
            b = a.$SlideEasing(c) * (h - g) + g;
          }
        }
        i.$GoToPosition(b);
      };
      c.$PlayCarousel = function(a, d, b, e) {
        $JssorDebug$.$Execute(function() {
          c.$IsPlaying() &&
            $JssorDebug$.$Fail("The carousel is already playing.");
        });
        g = a;
        h = d;
        j = b;
        i.$GoToPosition(a);
        c.$GoToPosition(0);
        c.$PlayToPosition(b, e);
      };
      c.$StandBy = function(a) {
        k = true;
        d = a;
        c.$Play(a, null, true);
      };
      c.$SetStandByPosition = function(a) {
        d = a;
      };
      c.$MoveCarouselTo = function(a) {
        i.$GoToPosition(a);
      };
      i = new uc();
      i.$Combine(m);
      i.$Combine(l);
    }
    function hc() {
      var b = this,
        a = Rb();
      $Jssor$.$CssZIndex(a, 0);
      $Jssor$.$Css(a, "pointerEvents", "none");
      b.$Elmt = a;
      b.$AddClipElement = function(b) {
        $Jssor$.$AppendChild(a, b);
        $Jssor$.$ShowElement(a);
      };
      b.$Clear = function() {
        $Jssor$.$HideElement(a);
        $Jssor$.$Empty(a);
      };
    }
    function qc(j, g) {
      var c = this,
        q,
        u,
        r,
        i,
        w = [],
        t,
        z,
        Q,
        F,
        K,
        C,
        k,
        s,
        n,
        O;
      $JssorAnimator$.call(c, -h, h + 1, { $SlideItemAnimator: true });
      function A(a) {
        q && q.$Revert();
        P(j, a, 0);
        C = true;
        q = new v.$Class(
          j,
          v,
          $Jssor$.$ParseFloat($Jssor$.$AttributeEx(j, "idle")) || fc
        );
        $JssorDebug$.$LiveStamp(q, "caption_slider_" + Fb);
        $JssorDebug$.$Execute(function() {
          Fb++;
        });
        q.$GoToPosition(0);
      }
      function T() {
        q.$Version < v.$Version && A();
      }
      function H(l, n, k) {
        if (!F) {
          F = true;
          if (i && k) {
            var e = k.width,
              d = k.height,
              j = e,
              h = d;
            if (e && d && a.$FillMode) {
              if (a.$FillMode & 3 && (!(a.$FillMode & 4) || e > y || d > x)) {
                var f = false,
                  m = y / x * d / e;
                if (a.$FillMode & 1) f = m > 1;
                else if (a.$FillMode & 2) f = m < 1;
                j = f ? e * x / d : y;
                h = f ? x : d * y / e;
              }
              $Jssor$.$CssWidth(i, j);
              $Jssor$.$CssHeight(i, h);
              $Jssor$.$CssTop(i, (x - h) / 2);
              $Jssor$.$CssLeft(i, (y - j) / 2);
            }
            $Jssor$.$CssPosition(i, "absolute");
            b.$TriggerEvent($JssorSlider$.$EVT_LOAD_END, g);
          }
        }
        $Jssor$.$HideElement(n);
        l && l(c);
      }
      function R(b, d, h, i) {
        if (i == I && e == g && E)
          if (!vc) {
            var a = f(b);
            m.$Initialize(a, g, d, c, h);
            d.$HideContentForSlideshow();
            L.$Shift(a - L.$GetPosition_OuterBegin() - 1);
            L.$GoToPosition(a);
            l.$PlayCarousel(b, b, 0);
          }
      }
      function V(b) {
        if (b == I && e == g) {
          if (!k) {
            var a = null;
            if (m)
              if (m.$Index == g) a = m.$GetProcessor();
              else m.$Clear();
            T();
            k = new oc(j, g, a, q);
            k.$SetPlayer(n);
          }
          !k.$IsPlaying() && k.$Replay();
        }
      }
      function D(b, e, j) {
        if (b == g) {
          if (b != e) o[e] && o[e].$ParkOut();
          else !j && k && k.$AdjustIdleOnPark();
          n && n.$Enable();
          var l = (I = $Jssor$.$GetNow());
          c.$LoadImage($Jssor$.$CreateCallback(null, V, l));
        } else {
          var i = Math.min(g, b),
            f = Math.max(g, b),
            p = Math.min(f - i, i + d - f),
            m = h + a.$LazyLoading - 1;
          (!K || p <= m) && c.$LoadImage();
        }
      }
      function W() {
        if (e == g && k) {
          k.$Stop();
          n && n.$Quit();
          n && n.$Disable();
          k.$OpenSlideshowPanel();
        }
      }
      function X() {
        e == g && k && k.$Stop();
      }
      function U(a) {
        !B && b.$TriggerEvent($JssorSlider$.$EVT_CLICK, g, a);
      }
      function J() {
        n = s.pInstance;
        k && k.$SetPlayer(n);
      }
      c.$LoadImage = function(c, a) {
        a = a || r;
        if (w.length && !F) {
          $Jssor$.$ShowElement(a);
          if (!Q) {
            Q = true;
            b.$TriggerEvent($JssorSlider$.$EVT_LOAD_START, g);
            $Jssor$.$Each(w, function(a) {
              if (!$Jssor$.$Attribute(a, "src")) {
                a.src = $Jssor$.$AttributeEx(a, "src2");
                $Jssor$.$CssDisplay(a, a["display-origin"]);
              }
            });
          }
          $Jssor$.$LoadImages(w, i, $Jssor$.$CreateCallback(null, H, c, a));
        } else H(c, a);
      };
      c.$GoForNextSlide = function() {
        var j = g;
        if (a.$AutoPlaySteps < 0) j -= d;
        var b = j + a.$AutoPlaySteps * mc;
        if (p & 2) b = f(b);
        if (!(p & 1) && !S) b = Math.max(0, Math.min(b, d - h));
        if (b != g) {
          if (m) {
            var e = m.$GetTransition(d);
            if (e) {
              var k = (I = $Jssor$.$GetNow()),
                i = o[f(b)];
              return i.$LoadImage(
                $Jssor$.$CreateCallback(null, R, b, i, e, k),
                r
              );
            }
          }
          cb(b);
        } else if (a.$Loop) {
          c.$ParkOut();
          D(g, g);
        }
      };
      c.$TryActivate = function() {
        D(g, g, true);
      };
      c.$ParkOut = function() {
        n && n.$Quit();
        n && n.$Disable();
        c.$UnhideContentForSlideshow();
        k && k.$Abort();
        k = null;
        A();
      };
      c.$StampSlideItemElements = function(a) {
        a = O + "_" + a;
        $JssorDebug$.$Execute(function() {
          i && $Jssor$.$Attribute(i, "debug-id", a + "_slide_item_image_id");
          $Jssor$.$Attribute(j, "debug-id", a + "_slide_item_item_id");
        });
        $JssorDebug$.$Execute(function() {
          $Jssor$.$Attribute(u, "debug-id", a + "_slide_item_wrapper_id");
        });
        $JssorDebug$.$Execute(function() {
          $Jssor$.$Attribute(r, "debug-id", a + "_loading_container_id");
        });
      };
      c.$HideContentForSlideshow = function() {
        $Jssor$.$HideElement(j);
      };
      c.$UnhideContentForSlideshow = function() {
        $Jssor$.$ShowElement(j);
      };
      c.$EnablePlayer = function() {
        n && n.$Enable();
      };
      function P(a, b, c) {
        $JssorDebug$.$Execute(function() {
          $Jssor$.$Attribute(a, "jssor-slider") &&
            $JssorDebug$.$Log("Child slider found.");
        });
        if ($Jssor$.$Attribute(a, "jssor-slider")) return;
        if (!C) {
          if (a.tagName == "IMG") {
            w.push(a);
            if (!$Jssor$.$Attribute(a, "src")) {
              K = true;
              a["display-origin"] = $Jssor$.$CssDisplay(a);
              $Jssor$.$HideElement(a);
            }
          }
          $Jssor$.$IsBrowserIe9Earlier() &&
            $Jssor$.$CssZIndex(a, ($Jssor$.$CssZIndex(a) || 0) + 1);
        }
        var d = $Jssor$.$Children(a);
        $Jssor$.$Each(d, function(d) {
          var f = d.tagName,
            g = $Jssor$.$AttributeEx(d, "u");
          if (g == "player" && !s) {
            s = d;
            if (s.pInstance) J();
            else $Jssor$.$AddEvent(s, "dataavailable", J);
          }
          if (g == "caption") {
            if (b) {
              $Jssor$.$CssTransformOrigin(d, $Jssor$.$AttributeEx(d, "to"));
              $Jssor$.$CssBackfaceVisibility(d, $Jssor$.$AttributeEx(d, "bf"));
              $Jssor$.$AttributeEx(d, "3d") &&
                $Jssor$.$CssTransformStyle(d, "preserve-3d");
            } else if (!$Jssor$.$IsBrowserIE()) {
              var e = $Jssor$.$CloneNode(d, false, true);
              $Jssor$.$InsertBefore(e, d, a);
              $Jssor$.$RemoveElement(d, a);
              d = e;
              b = true;
            }
          } else if (!C && !c && !i) {
            if (f == "A") {
              if ($Jssor$.$AttributeEx(d, "u") == "image") {
                i = $Jssor$.$FindChildByTag(d, "IMG");
                $JssorDebug$.$Execute(function() {
                  !i &&
                    $JssorDebug$.$Error(
                      "slide html code definition error, no 'IMG' found in a 'image with link' slide.\r\n" +
                        a.outerHTML
                    );
                });
              } else i = $Jssor$.$FindChild(d, "image", true);
              if (i) {
                t = d;
                $Jssor$.$CssDisplay(t, "block");
                $Jssor$.$SetStyles(t, M);
                z = $Jssor$.$CloneNode(t, true);
                $Jssor$.$CssPosition(t, "relative");
                $Jssor$.$CssOpacity(z, 0);
                $Jssor$.$Css(z, "backgroundColor", "#000");
              }
            } else if (f == "IMG" && $Jssor$.$AttributeEx(d, "u") == "image")
              i = d;
            if (i) {
              i.border = 0;
              $Jssor$.$SetStyles(i, M);
            }
          }
          P(d, b, c + 1);
        });
      }
      c.$OnInnerOffsetChange = function(c, b) {
        var a = h - b;
        Tb(u, a);
      };
      c.$Index = g;
      $JssorObject$.call(c);
      $Jssor$.$CssPerspective(j, $Jssor$.$AttributeEx(j, "p"));
      $Jssor$.$CssPerspectiveOrigin(j, $Jssor$.$AttributeEx(j, "po"));
      var G = $Jssor$.$FindChild(j, "thumb", true);
      if (G) {
        c.$Thumb = $Jssor$.$CloneNode(G);
        $Jssor$.$HideElement(G);
      }
      $Jssor$.$ShowElement(j);
      r = $Jssor$.$CloneNode(N);
      $Jssor$.$CssZIndex(r, 1e3);
      $Jssor$.$AddEvent(j, "click", U);
      A(true);
      c.$Image = i;
      c.$Link = z;
      c.$Item = j;
      c.$Wrapper = u = j;
      $Jssor$.$AppendChild(u, r);
      b.$On(203, D);
      b.$On(28, X);
      b.$On(24, W);
      $JssorDebug$.$Execute(function() {
        O = ec++;
      });
      $JssorDebug$.$Execute(function() {
        $Jssor$.$Attribute(u, "debug-id", "slide-" + g);
      });
    }
    function oc(y, f, l, p) {
      var a = this,
        j = 0,
        u = 0,
        g,
        h,
        d,
        c,
        i,
        t,
        s,
        k = o[f];
      $JssorAnimator$.call(a, 0, 0);
      function v() {
        $Jssor$.$Empty(C);
        Vb && i && k.$Link && $Jssor$.$AppendChild(C, k.$Link);
        $Jssor$.$ShowElement(C, !i && k.$Image);
      }
      function w() {
        a.$Replay();
      }
      function x(b) {
        s = b;
        a.$Stop();
        a.$Replay();
      }
      a.$Replay = function() {
        var l = a.$GetPosition_Display();
        if (!n && !D && !s && e == f) {
          if (!l) {
            if (g && !i) {
              i = true;
              a.$OpenSlideshowPanel(true);
              b.$TriggerEvent(
                $JssorSlider$.$EVT_SLIDESHOW_START,
                f,
                j,
                u,
                g,
                c
              );
            }
            v();
          }
          var m,
            p = $JssorSlider$.$EVT_STATE_CHANGE;
          if (l != c)
            if (l == d) m = c;
            else if (l == h) m = d;
            else if (!l) m = h;
            else m = a.$GetPlayToPosition();
          b.$TriggerEvent(p, f, l, j, h, d, c);
          var o = E && (!q || r);
          if (l == c) ((d != c && !(q & 12)) || o) && k.$GoForNextSlide();
          else (o || l != d) && a.$PlayToPosition(m, w);
        }
      };
      a.$AdjustIdleOnPark = function() {
        d == c && d == a.$GetPosition_Display() && a.$GoToPosition(h);
      };
      a.$Abort = function() {
        m && m.$Index == f && m.$Clear();
        var e = a.$GetPosition_Display();
        e < c &&
          b.$TriggerEvent(
            $JssorSlider$.$EVT_STATE_CHANGE,
            f,
            -e - 1,
            j,
            h,
            d,
            c
          );
      };
      a.$OpenSlideshowPanel = function(a) {
        l &&
          $Jssor$.$CssOverflow(W, a && l.$Transition.$Outside ? "" : "hidden");
      };
      a.$OnInnerOffsetChange = function(e, a) {
        if (i && a >= g) {
          i = false;
          v();
          k.$UnhideContentForSlideshow();
          m.$Clear();
          b.$TriggerEvent($JssorSlider$.$EVT_SLIDESHOW_END, f, j, u, g, c);
        }
        b.$TriggerEvent($JssorSlider$.$EVT_PROGRESS_CHANGE, f, a, j, h, d, c);
      };
      a.$SetPlayer = function(a) {
        if (a && !t) {
          t = a;
          a.$On($JssorPlayer$.$EVT_SWITCH, x);
        }
      };
      l && a.$Chain(l);
      g = a.$GetPosition_OuterEnd();
      a.$Chain(p);
      h = g + p.$IdleBegin;
      d = g + p.$IdleEnd;
      c = a.$GetPosition_OuterEnd();
    }
    function Db(a, b, c) {
      $Jssor$.$CssLeft(a, b);
      $Jssor$.$CssTop(a, c);
    }
    function Tb(c, b) {
      var a = j > 0 ? j : G,
        d = sb * b * (a & 1),
        e = tb * b * ((a >> 1) & 1);
      Db(c, d, e);
    }
    function Kb() {
      gb = D;
      Bb = l.$GetPlayToPosition();
      s = i.$GetPosition();
    }
    function Yb() {
      Kb();
      if (n || (!r && q & 12)) {
        l.$Stop();
        b.$TriggerEvent($JssorSlider$.$EVT_FREEZE);
      }
    }
    function Wb(f) {
      if (!n && (r || !(q & 12)) && !l.$IsPlaying()) {
        var c = i.$GetPosition(),
          b = Math.ceil(s);
        if (f && Math.abs(t) >= a.$MinDragOffsetToSlide) {
          b = Math.ceil(c);
          b += T;
        }
        if (!(p & 1)) b = Math.min(d - h, Math.max(b, 0));
        var e = Math.abs(b - c);
        e = 1 - Math.pow(1 - e, 5);
        if (!B && gb) l.$Continue(Bb);
        else if (c == b) {
          lb.$EnablePlayer();
          lb.$TryActivate();
        } else l.$PlayCarousel(c, b, e * Pb);
      }
    }
    function Ab(a) {
      !$Jssor$.$AttributeEx($Jssor$.$EvtSrc(a), "nodrag") &&
        $Jssor$.$CancelEvent(a);
    }
    function kc(a) {
      Sb(a, 1);
    }
    function Sb(a, c) {
      a = $Jssor$.$GetEvent(a);
      var g = $Jssor$.$EvtSrc(a);
      if (
        !z &&
        !$Jssor$.$AttributeEx(g, "nodrag") &&
        lc() &&
        (!c || a.touches.length == 1)
      ) {
        n = true;
        rb = false;
        I = null;
        $Jssor$.$AddEvent(document, c ? "touchmove" : "mousemove", vb);
        $Jssor$.$GetNow();
        B = 0;
        Yb();
        if (!gb) j = 0;
        if (c) {
          var e = a.touches[0];
          mb = e.clientX;
          nb = e.clientY;
        } else {
          var d = $Jssor$.$MousePosition(a);
          mb = d.x;
          nb = d.y;
        }
        t = 0;
        R = 0;
        T = 0;
        b.$TriggerEvent($JssorSlider$.$EVT_DRAG_START, f(s), s, a);
      }
    }
    function vb(b) {
      if (n) {
        b = $Jssor$.$GetEvent(b);
        var c;
        if (b.type != "mousemove") {
          var o = b.touches[0];
          c = { x: o.clientX, y: o.clientY };
        } else c = $Jssor$.$MousePosition(b);
        if (c) {
          var k = c.x - mb,
            m = c.y - nb;
          if (Math.floor(s) != s) j = j || G & z;
          if ((k || m) && !j) {
            if (z == 3)
              if (Math.abs(m) > Math.abs(k)) j = 2;
              else j = 1;
            else j = z;
            if (Y && j == 1 && Math.abs(m) - Math.abs(k) > 3) rb = true;
          }
          if (j) {
            var a = m,
              i = tb;
            if (j == 1) {
              a = k;
              i = sb;
            }
            if (!(p & 1)) {
              if (a > 0) {
                var f = i * e,
                  g = a - f;
                if (g > 0) a = f + Math.sqrt(g) * 5;
              }
              if (a < 0) {
                var f = i * (d - h - e),
                  g = -a - f;
                if (g > 0) a = -f - Math.sqrt(g) * 5;
              }
            }
            if (t - R < -2) T = 0;
            else if (t - R > 2) T = -1;
            R = t;
            t = a;
            kb = s - t / i / (Q || 1);
            if (t && j && !rb) {
              $Jssor$.$CancelEvent(b);
              if (!D) l.$StandBy(kb);
              else l.$SetStandByPosition(kb);
            }
          }
        }
      }
    }
    function bb() {
      ic();
      if (n) {
        n = false;
        $Jssor$.$GetNow();
        $Jssor$.$RemoveEvent(document, "mousemove", vb);
        $Jssor$.$RemoveEvent(document, "touchmove", vb);
        B = t;
        l.$Stop();
        var a = i.$GetPosition();
        b.$TriggerEvent($JssorSlider$.$EVT_DRAG_END, f(a), a, f(s), s);
        q & 12 && Kb();
        Wb(true);
      }
    }
    function cc(b) {
      if (B) {
        $Jssor$.$StopEvent(b);
        var a = $Jssor$.$EvtSrc(b);
        while (a && g !== a) {
          a.tagName == "A" && $Jssor$.$CancelEvent(b);
          try {
            a = a.parentNode;
          } catch (c) {
            break;
          }
        }
      }
    }
    function Cb(a) {
      o[e];
      e = f(a);
      lb = o[e];
      Ob(a);
      return e;
    }
    function wc(a, c) {
      j = 0;
      Cb(a);
      b.$TriggerEvent($JssorSlider$.$EVT_PARK, f(a), c);
    }
    function Ob(a, b) {
      pb = a;
      $Jssor$.$Each(J, function(c) {
        c.$SetCurrentIndex(f(a), a, b);
      });
    }
    function lc() {
      var b = $JssorSlider$.$DragRegistry || 0,
        a = P;
      if (Y) a & 1 && (a &= 1);
      $JssorSlider$.$DragRegistry |= a;
      return (z = a & ~b);
    }
    function ic() {
      if (z) {
        $JssorSlider$.$DragRegistry &= ~P;
        z = 0;
      }
    }
    function Rb() {
      var a = $Jssor$.$CreateDiv();
      $Jssor$.$SetStyles(a, M);
      $Jssor$.$CssPosition(a, "absolute");
      return a;
    }
    function f(a) {
      return (a % d + d) % d;
    }
    function dc(b, c) {
      if (c)
        if (!p) {
          b = Math.min(Math.max(b + pb, 0), d - h);
          c = false;
        } else if (p & 2) {
          b = f(b + pb);
          c = false;
        }
      cb(b, a.$SlideDuration, c);
    }
    function qb() {
      $Jssor$.$Each(J, function(a) {
        a.$Show(a.$Options.$ChanceToShow <= r);
      });
    }
    function ac() {
      if (!r) {
        r = 1;
        qb();
        if (!n) {
          q & 12 && Wb();
          q & 3 && o[e].$TryActivate();
        }
      }
    }
    function Zb() {
      if (r) {
        r = 0;
        qb();
        n || !(q & 12) || Yb();
      }
    }
    function bc() {
      M = { $Width: y, $Height: x, $Top: 0, $Left: 0 };
      $Jssor$.$Each(K, function(a) {
        $Jssor$.$SetStyles(a, M);
        $Jssor$.$CssPosition(a, "absolute");
        $Jssor$.$CssOverflow(a, "hidden");
        $Jssor$.$HideElement(a);
      });
      $Jssor$.$SetStyles(N, M);
    }
    function ab(b, a) {
      cb(b, a, true);
    }
    function cb(g, e, k) {
      if (Mb && ((!n && (r || !(q & 12))) || a.$NaviQuitDrag)) {
        D = true;
        n = false;
        l.$Stop();
        if (e == undefined) e = Pb;
        var c = xb.$GetPosition_Display(),
          b = g;
        if (k) {
          b = c + g;
          if (g > 0) b = Math.ceil(b);
          else b = Math.floor(b);
        }
        if (p & 2) b = f(b);
        if (!(p & 1)) b = Math.max(0, Math.min(b, d - h));
        var j = (b - c) % d;
        b = c + j;
        var i = c == b ? 0 : e * Math.abs(j);
        i = Math.min(i, e * h * 1.5);
        l.$PlayCarousel(c, b, i || 1);
      }
    }
    b.$PlayTo = cb;
    b.$GoTo = function(a) {
      i.$GoToPosition(Cb(a));
    };
    b.$Next = function() {
      ab(1);
    };
    b.$Prev = function() {
      ab(-1);
    };
    b.$Pause = function() {
      E = false;
    };
    b.$Play = function() {
      if (!E) {
        E = true;
        o[e] && o[e].$TryActivate();
      }
    };
    b.$SetSlideshowTransitions = function(b) {
      $JssorDebug$.$Execute(function() {
        (!b || !b.length) &&
          $JssorDebug$.$Error(
            "Can not set slideshow transitions, no transitions specified."
          );
      });
      a.$SlideshowOptions.$Transitions = b;
    };
    b.$SetCaptionTransitions = function(a) {
      $JssorDebug$.$Execute(function() {
        (!a || !a.length) &&
          $JssorDebug$.$Error(
            "Can not set caption transitions, no transitions specified"
          );
      });
      v.$Transitions = a;
      v.$Version = $Jssor$.$GetNow();
    };
    b.$SlidesCount = function() {
      return K.length;
    };
    b.$CurrentIndex = function() {
      return e;
    };
    b.$IsAutoPlaying = function() {
      return E;
    };
    b.$IsDragging = function() {
      return n;
    };
    b.$IsSliding = function() {
      return D;
    };
    b.$IsMouseOver = function() {
      return !r;
    };
    b.$LastDragSucceded = function() {
      return B;
    };
    function O() {
      return $Jssor$.$CssWidth(k || c);
    }
    function X() {
      return $Jssor$.$CssHeight(k || c);
    }
    b.$OriginalWidth = b.$GetOriginalWidth = O;
    b.$OriginalHeight = b.$GetOriginalHeight = X;
    function zb(d, e) {
      if (d == undefined) return $Jssor$.$CssWidth(c);
      if (!k) {
        $JssorDebug$.$Execute(function() {
          var b = $Jssor$.$Css(c, "width"),
            a = $Jssor$.$Css(c, "height"),
            e = $Jssor$.$CssP(c, "width"),
            d = $Jssor$.$CssP(c, "height");
          (!b || b.indexOf("px") == -1) &&
            $JssorDebug$.$Fail(
              "Cannot scale jssor slider, 'width' of 'outer container' not specified. Please specify 'width' in pixel. e.g. 'width: 600px;'"
            );
          (!a || a.indexOf("px") == -1) &&
            $JssorDebug$.$Fail(
              "Cannot scale jssor slider, 'height' of 'outer container' not specified. Please specify 'height' in pixel. e.g. 'height: 300px;'"
            );
          b.indexOf("%") != -1 &&
            $JssorDebug$.$Fail(
              "Cannot scale jssor slider, 'width' of 'outer container' not valid. Please specify 'width' in pixel. e.g. 'width: 600px;'"
            );
          a.indexOf("%") != -1 &&
            $JssorDebug$.$Fail(
              "Cannot scale jssor slider, 'height' of 'outer container' not valid. Please specify 'height' in pixel. e.g. 'height: 300px;'"
            );
          !e &&
            $JssorDebug$.$Fail(
              "Cannot scale jssor slider, 'width' of 'outer container' not valid. 'width' of 'outer container' should be positive number. e.g. 'width: 600px;'"
            );
          !d &&
            $JssorDebug$.$Fail(
              "Cannot scale jssor slider, 'height' of 'outer container' not valid. 'height' of 'outer container' should be positive number. e.g. 'height: 300px;'"
            );
        });
        var a = $Jssor$.$CreateDiv(document);
        $Jssor$.$ClassName(a, $Jssor$.$ClassName(c));
        $Jssor$.$CssCssText(a, $Jssor$.$CssCssText(c));
        $Jssor$.$CssDisplay(a, "block");
        $Jssor$.$CssPosition(a, "relative");
        $Jssor$.$CssTop(a, 0);
        $Jssor$.$CssLeft(a, 0);
        $Jssor$.$CssOverflow(a, "visible");
        k = $Jssor$.$CreateDiv(document);
        $Jssor$.$CssPosition(k, "absolute");
        $Jssor$.$CssTop(k, 0);
        $Jssor$.$CssLeft(k, 0);
        $Jssor$.$CssWidth(k, $Jssor$.$CssWidth(c));
        $Jssor$.$CssHeight(k, $Jssor$.$CssHeight(c));
        $Jssor$.$CssTransformOrigin(k, "0 0");
        $Jssor$.$AppendChild(k, a);
        var h = $Jssor$.$Children(c);
        $Jssor$.$AppendChild(c, k);
        $Jssor$.$Css(c, "backgroundImage", "");
        $Jssor$.$Each(h, function(b) {
          $Jssor$.$AppendChild($Jssor$.$AttributeEx(b, "noscale") ? c : a, b);
          $Jssor$.$AttributeEx(b, "autocenter") && Eb.push(b);
        });
      }
      $JssorDebug$.$Execute(function() {
        (!d || d < 0) &&
          $JssorDebug$.$Fail(
            "'$ScaleWidth' error, 'dimension' should be positive value."
          );
      });
      $JssorDebug$.$Execute(function() {
        if (!Gb) Gb = b.$Elmt.scrollWidth;
      });
      Q = d / (e ? $Jssor$.$CssHeight : $Jssor$.$CssWidth)(k);
      $Jssor$.$CssScale(k, Q);
      var g = e ? Q * O() : d,
        f = e ? d : Q * X();
      $Jssor$.$CssWidth(c, g);
      $Jssor$.$CssHeight(c, f);
      $Jssor$.$Each(Eb, function(a) {
        var b = $Jssor$.$ParseInt($Jssor$.$AttributeEx(a, "autocenter"));
        $Jssor$.$CenterElement(a, b);
      });
    }
    b.$ScaleHeight = b.$GetScaleHeight = function(a) {
      if (a == undefined) return $Jssor$.$CssHeight(c);
      zb(a, true);
    };
    b.$ScaleWidth = b.$SetScaleWidth = b.$GetScaleWidth = zb;
    b.$GetVirtualIndex = function(a) {
      var c = Math.ceil(f(U / Ub)),
        b = f(a - e + c);
      if (b > h) {
        if (a - e > d / 2) a -= d;
        else if (a - e <= -d / 2) a += d;
      } else a = e + b - c;
      return a;
    };
    $JssorObject$.call(b);
    $JssorDebug$.$Execute(function() {
      var a = $Jssor$.$GetElement(c);
      !a && $JssorDebug$.$Fail("Outer container '" + c + "' not found.");
    });
    b.$Elmt = c = $Jssor$.$GetElement(c);
    var Gb,
      Fb = 1,
      a = $Jssor$.$Extend(
        {
          $FillMode: 0,
          $LazyLoading: 1,
          $ArrowKeyNavigation: 1,
          $StartIndex: 0,
          $AutoPlay: false,
          $Loop: 1,
          $HWA: true,
          $NaviQuitDrag: true,
          $AutoPlaySteps: 1,
          $AutoPlayInterval: 3e3,
          $PauseOnHover: 1,
          $SlideDuration: 500,
          $SlideEasing: $JssorEasing$.$EaseOutQuad,
          $MinDragOffsetToSlide: 20,
          $SlideSpacing: 0,
          $Cols: 1,
          $Align: 0,
          $UISearchMode: 1,
          $PlayOrientation: 1,
          $DragOrientation: 1
        },
        Xb
      );
    a.$HWA = a.$HWA && $Jssor$.$IsBrowser3dSafe();
    if (a.$Idle != undefined) a.$AutoPlayInterval = a.$Idle;
    if (a.$ParkingPosition != undefined) a.$Align = a.$ParkingPosition;
    $JssorDebug$.$Execute(function() {
      a = $Jssor$.$Extend(
        {
          $SlideWidth: undefined,
          $SlideHeight: undefined,
          $SlideshowOptions: undefined,
          $CaptionSliderOptions: undefined,
          $BulletNavigatorOptions: undefined,
          $ArrowNavigatorOptions: undefined,
          $ThumbnailNavigatorOptions: undefined
        },
        a
      );
    });
    var G = a.$PlayOrientation & 3,
      mc = (a.$PlayOrientation & 4) / -4 || 1,
      w = a.$SlideshowOptions,
      v = $Jssor$.$Extend(
        {
          $Class: $JssorCaptionSliderBase$,
          $PlayInMode: 1,
          $PlayOutMode: 1,
          $HWA: a.$HWA
        },
        a.$CaptionSliderOptions
      );
    v.$Transitions = v.$Transitions || v.$CaptionTransitions;
    var F = a.$BulletNavigatorOptions,
      u = a.$ArrowNavigatorOptions,
      A = a.$ThumbnailNavigatorOptions;
    $JssorDebug$.$Execute(function() {
      w &&
        !w.$Class &&
        $JssorDebug$.$Fail(
          "Option $SlideshowOptions error, class not specified."
        );
    });
    $JssorDebug$.$Execute(function() {
      a.$CaptionSliderOptions &&
        !a.$CaptionSliderOptions.$Class &&
        $JssorDebug$.$Fail(
          "Option $CaptionSliderOptions error, class not specified."
        );
    });
    $JssorDebug$.$Execute(function() {
      F &&
        !F.$Class &&
        $JssorDebug$.$Fail(
          "Option $BulletNavigatorOptions error, class not specified."
        );
    });
    $JssorDebug$.$Execute(function() {
      u &&
        !u.$Class &&
        $JssorDebug$.$Fail(
          "Option $ArrowNavigatorOptions error, class not specified."
        );
    });
    $JssorDebug$.$Execute(function() {
      A &&
        !A.$Class &&
        $JssorDebug$.$Fail(
          "Option $ThumbnailNavigatorOptions error, class not specified."
        );
    });
    var H = !a.$UISearchMode,
      k,
      g = $Jssor$.$FindChild(c, "slides", H),
      N = $Jssor$.$FindChild(c, "loading", H) || $Jssor$.$CreateDiv(document),
      fb = $Jssor$.$FindChild(c, "navigator", H),
      wb = $Jssor$.$FindChild(c, "arrowleft", H),
      ub = $Jssor$.$FindChild(c, "arrowright", H),
      eb = $Jssor$.$FindChild(c, "thumbnavigator", H);
    $JssorDebug$.$Execute(function() {
      if (fb && !F)
        throw new Error(
          "Bullet navigator container defined but $BulletNavigatorOptions not specified."
        );
      if ((wb || ub) && !u)
        throw new Error(
          "arrowleft or arrowright defined, but $ArrowNavigatorOptions not specified."
        );
      if (eb && !A)
        throw new Error(
          "Thumbnail navigator container defined, but $ThumbnailNavigatorOptions not specified."
        );
    });
    var ib = $Jssor$.$CssWidth(g),
      hb = $Jssor$.$CssHeight(g);
    $JssorDebug$.$Execute(function() {
      isNaN(ib) &&
        $JssorDebug$.$Fail(
          "Width of slides container wrong specification, it should be specified in pixel (like style='width: 600px;')."
        );
      ib == undefined &&
        $JssorDebug$.$Fail(
          "Width of slides container not specified, it should be specified in pixel (like style='width: 600px;')."
        );
      isNaN(hb) &&
        $JssorDebug$.$Fail(
          "Height of slides container wrong specification, it should be specified in pixel (like style='height: 300px;')."
        );
      hb == undefined &&
        $JssorDebug$.$Fail(
          "Height of slides container not specified, it should be specified in pixel (like style='height: 300px;')."
        );
      var c = $Jssor$.$CssOverflow(g),
        a = $Jssor$.$Css(g, "overflowX"),
        b = $Jssor$.$Css(g, "overflowY");
      c != "hidden" &&
        (a != "hidden" || b != "hidden") &&
        $JssorDebug$.$Fail(
          "Overflow of slides container wrong specification, it should be specified as 'hidden' (style='overflow:hidden;')."
        );
    });
    $JssorDebug$.$Execute(function() {
      !$Jssor$.$IsNumeric(a.$Cols) &&
        $JssorDebug$.$Fail(
          "Option $Cols error, it should be a numeric value and greater than or equal to 1."
        );
      a.$Cols < 1 &&
        $JssorDebug$.$Fail(
          "Option $Cols error, it should be greater than or equal to 1."
        );
      a.$Cols > 1 &&
        a.$DragOrientation &&
        a.$DragOrientation != G &&
        $JssorDebug$.$Fail(
          "Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $Cols is greater than 1."
        );
      !$Jssor$.$IsNumeric(a.$Align) &&
        $JssorDebug$.$Fail(
          "Option $Align error, it should be a numeric value."
        );
      a.$Align &&
        a.$DragOrientation &&
        a.$DragOrientation != G &&
        $JssorDebug$.$Fail(
          "Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $Align is not equal to 0."
        );
    });
    var M,
      K = [],
      nc = $Jssor$.$Children(g);
    $Jssor$.$Each(nc, function(a) {
      if (a.tagName == "DIV" && !$Jssor$.$AttributeEx(a, "u")) K.push(a);
      else
        $Jssor$.$IsBrowserIe9Earlier() &&
          $Jssor$.$CssZIndex(a, ($Jssor$.$CssZIndex(a) || 0) + 1);
    });
    var ec = 0,
      e = -1,
      pb,
      lb,
      d = K.length,
      y = a.$SlideWidth || ib,
      x = a.$SlideHeight || hb,
      Qb = a.$SlideSpacing,
      sb = y + Qb,
      tb = x + Qb,
      Ub = G & 1 ? sb : tb,
      h = Math.min(a.$Cols, d),
      W,
      j,
      z,
      rb,
      J = [],
      Lb,
      Nb,
      Jb,
      Vb,
      vc,
      E,
      q = a.$PauseOnHover,
      fc = a.$AutoPlayInterval,
      Pb = a.$SlideDuration,
      jb,
      S,
      U,
      Mb = h < d,
      p = Mb ? a.$Loop : 0,
      P,
      B,
      r = 1,
      D,
      n,
      I,
      mb = 0,
      nb = 0,
      t,
      R,
      T,
      xb,
      i,
      L,
      l,
      ob = new hc(),
      Q,
      Eb = [];
    if (d) {
      if (a.$HWA)
        Db = function(a, b, c) {
          $Jssor$.$SetStyleTransform(a, { $TranslateX: b, $TranslateY: c });
        };
      E = a.$AutoPlay;
      b.$Options = Xb;
      bc();
      $Jssor$.$Attribute(c, "jssor-slider", true);
      $Jssor$.$CssZIndex(g, $Jssor$.$CssZIndex(g) || 0);
      $Jssor$.$CssPosition(g, "absolute");
      W = $Jssor$.$CloneNode(g, true);
      $Jssor$.$InsertBefore(W, g);
      if (w) {
        Vb = w.$ShowLink;
        jb = w.$Class;
        $JssorDebug$.$Execute(function() {
          (!w.$Transitions || !w.$Transitions.length) &&
            $JssorDebug$.$Error(
              "Invalid '$SlideshowOptions', no '$Transitions' specified."
            );
        });
        S =
          h == 1 &&
          d > 1 &&
          jb &&
          (!$Jssor$.$IsBrowserIE() || $Jssor$.$BrowserVersion() >= 8);
      }
      U = S || h >= d || !(p & 1) ? 0 : a.$Align;
      P = (h > 1 || U ? G : -1) & a.$DragOrientation;
      var V = g,
        o = [],
        m,
        C,
        yb = $Jssor$.$Device(),
        Y = yb.$Touchable,
        s,
        gb,
        Bb,
        kb;
      yb.$TouchActionAttr &&
        $Jssor$.$Css(
          V,
          yb.$TouchActionAttr,
          [null, "pan-y", "pan-x", "none"][P] || ""
        );
      L = new sc();
      if (S) m = new jb(ob, y, x, w, Y);
      $Jssor$.$AppendChild(W, L.$Wrapper);
      $Jssor$.$CssOverflow(g, "hidden");
      C = Rb();
      $Jssor$.$Css(C, "backgroundColor", "#000");
      $Jssor$.$CssOpacity(C, 0);
      $Jssor$.$InsertBefore(C, V.firstChild, V);
      for (var db = 0; db < K.length; db++) {
        var pc = K[db],
          rc = new qc(pc, db);
        o.push(rc);
      }
      $Jssor$.$HideElement(N);
      $JssorDebug$.$Execute(function() {
        $Jssor$.$Attribute(N, "debug-id", "loading-container");
      });
      xb = new tc();
      l = new gc(xb, L);
      $JssorDebug$.$Execute(function() {
        $Jssor$.$Attribute(V, "debug-id", "slide-board");
      });
      $Jssor$.$AddEvent(g, "click", cc, true);
      $Jssor$.$AddEvent(c, "mouseout", $Jssor$.$MouseOverOutFilter(ac, c));
      $Jssor$.$AddEvent(c, "mouseover", $Jssor$.$MouseOverOutFilter(Zb, c));
      if (P) {
        $Jssor$.$AddEvent(g, "mousedown", Sb);
        $Jssor$.$AddEvent(g, "touchstart", kc);
        $Jssor$.$AddEvent(g, "dragstart", Ab);
        $Jssor$.$AddEvent(g, "selectstart", Ab);
        $Jssor$.$AddEvent(document, "mouseup", bb);
        $Jssor$.$AddEvent(document, "touchend", bb);
        $Jssor$.$AddEvent(document, "touchcancel", bb);
        $Jssor$.$AddEvent(window, "blur", bb);
      }
      q &= Y ? 10 : 5;
      if (fb && F) {
        Lb = new F.$Class(fb, F, O(), X());
        J.push(Lb);
      }
      if (u && wb && ub) {
        u.$Loop = p;
        u.$Cols = h;
        Nb = new u.$Class(wb, ub, u, O(), X());
        J.push(Nb);
      }
      if (eb && A) {
        A.$StartIndex = a.$StartIndex;
        Jb = new A.$Class(eb, A);
        J.push(Jb);
      }
      $Jssor$.$Each(J, function(a) {
        a.$Reset(d, o, N);
        a.$On($JssorNavigatorEvents$.$NAVIGATIONREQUEST, dc);
      });
      $Jssor$.$Css(c, "visibility", "visible");
      zb(O());
      qb();
      a.$ArrowKeyNavigation &&
        $Jssor$.$AddEvent(document, "keydown", function(b) {
          if (b.keyCode == 37) ab(-a.$ArrowKeyNavigation);
          else b.keyCode == 39 && ab(a.$ArrowKeyNavigation);
        });
      var Z = a.$StartIndex;
      if (!(p & 1)) Z = Math.max(0, Math.min(Z, d - h));
      l.$PlayCarousel(Z, Z, 0);
    }
  });
$JssorSlider$.$EVT_CLICK = 21;
$JssorSlider$.$EVT_DRAG_START = 22;
$JssorSlider$.$EVT_DRAG_END = 23;
$JssorSlider$.$EVT_SWIPE_START = 24;
$JssorSlider$.$EVT_SWIPE_END = 25;
$JssorSlider$.$EVT_LOAD_START = 26;
$JssorSlider$.$EVT_LOAD_END = 27;
$JssorSlider$.$EVT_FREEZE = 28;
$JssorSlider$.$EVT_POSITION_CHANGE = 202;
$JssorSlider$.$EVT_PARK = 203;
$JssorSlider$.$EVT_SLIDESHOW_START = 206;
$JssorSlider$.$EVT_SLIDESHOW_END = 207;
$JssorSlider$.$EVT_PROGRESS_CHANGE = 208;
$JssorSlider$.$EVT_STATE_CHANGE = 209;
var $JssorNavigatorEvents$ = {
    $NAVIGATIONREQUEST: 1,
    $INDEXCHANGE: 2,
    $RESET: 3
  },
  $JssorBulletNavigator$ = (window.$JssorBulletNavigator$ = function(b, v) {
    var d = this;
    $JssorObject$.call(d);
    b = $Jssor$.$GetElement(b);
    var l,
      t,
      s,
      k,
      g = 0,
      a,
      h,
      f,
      p,
      q,
      e,
      c,
      j,
      i,
      u = [],
      r = [];
    function o(a) {
      a != -1 && r[a].$Selected(a == g);
    }
    function m(a) {
      d.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, a * h);
    }
    d.$Elmt = b;
    d.$GetCurrentIndex = function() {
      return k;
    };
    d.$SetCurrentIndex = function(a) {
      if (a != k) {
        var c = g,
          b = Math.floor(a / h);
        g = b;
        k = a;
        o(c);
        o(b);
      }
    };
    d.$Show = function(a) {
      $Jssor$.$ShowElement(b, a);
    };
    var n;
    d.$Reset = function(A) {
      if (!n) {
        l = Math.ceil(A / h);
        g = 0;
        var v = j + p,
          x = i + q,
          o = Math.ceil(l / f) - 1;
        t = j + v * (!e ? o : f - 1);
        s = i + x * (e ? o : f - 1);
        $Jssor$.$CssWidth(b, t);
        $Jssor$.$CssHeight(b, s);
        for (var d = 0; d < l; d++) {
          var z = $Jssor$.$CreateSpan();
          $Jssor$.$InnerText(z, d + 1);
          var k = $Jssor$.$BuildElement(c, "numbertemplate", z, true);
          $Jssor$.$CssPosition(k, "absolute");
          var y = d % (o + 1);
          $Jssor$.$CssLeft(k, !e ? v * y : (d % f) * v);
          $Jssor$.$CssTop(k, e ? x * y : Math.floor(d / (o + 1)) * x);
          $Jssor$.$AppendChild(b, k);
          u[d] = k;
          a.$ActionMode & 1 &&
            $Jssor$.$AddEvent(k, "click", $Jssor$.$CreateCallback(null, m, d));
          a.$ActionMode & 2 &&
            $Jssor$.$AddEvent(
              k,
              "mouseover",
              $Jssor$.$MouseOverOutFilter(
                $Jssor$.$CreateCallback(null, m, d),
                k
              )
            );
          r[d] = $Jssor$.$Buttonize(k);
        }
        n = true;
      }
    };
    d.$Options = a = $Jssor$.$Extend(
      { $SpacingX: 10, $SpacingY: 10, $Orientation: 1, $ActionMode: 1 },
      v
    );
    $JssorDebug$.$Execute(function() {
      a = $Jssor$.$Extend({ $Steps: undefined, $Rows: undefined }, a);
    });
    c = $Jssor$.$FindChild(b, "prototype");
    $JssorDebug$.$Execute(function() {
      !c && $JssorDebug$.$Fail("Navigator item prototype not defined.");
      isNaN($Jssor$.$CssWidth(c)) &&
        $JssorDebug$.$Fail(
          "Width of 'navigator item prototype' not specified."
        );
      isNaN($Jssor$.$CssHeight(c)) &&
        $JssorDebug$.$Fail(
          "Height of 'navigator item prototype' not specified."
        );
    });
    j = $Jssor$.$CssWidth(c);
    i = $Jssor$.$CssHeight(c);
    $Jssor$.$RemoveElement(c, b);
    h = a.$Steps || 1;
    f = a.$Rows || 1;
    p = a.$SpacingX;
    q = a.$SpacingY;
    e = a.$Orientation - 1;
    a.$Scale == false && $Jssor$.$Attribute(b, "noscale", true);
    a.$AutoCenter && $Jssor$.$Attribute(b, "autocenter", a.$AutoCenter);
  }),
  $JssorArrowNavigator$ = (window.$JssorArrowNavigator$ = function(a, b, f) {
    var c = this;
    $JssorObject$.call(c);
    $JssorDebug$.$Execute(function() {
      !a &&
        $JssorDebug$.$Fail(
          "Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowleft' not defined. Define 'arrowleft' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation."
        );
      !b &&
        $JssorDebug$.$Fail(
          "Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowright' not defined. Define 'arrowright' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation."
        );
      isNaN($Jssor$.$CssWidth(a)) &&
        $JssorDebug$.$Fail("Width of 'arrow left' not specified.");
      isNaN($Jssor$.$CssWidth(b)) &&
        $JssorDebug$.$Fail("Width of 'arrow right' not specified.");
      isNaN($Jssor$.$CssHeight(a)) &&
        $JssorDebug$.$Fail("Height of 'arrow left' not specified.");
      isNaN($Jssor$.$CssHeight(b)) &&
        $JssorDebug$.$Fail("Height of 'arrow right' not specified.");
    });
    var l, k, d, e, g;
    $Jssor$.$CssWidth(a);
    $Jssor$.$CssHeight(a);
    function h(a) {
      c.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, a, true);
    }
    function j(c) {
      $Jssor$.$ShowElement(a, c || (!f.$Loop && d == 0));
      $Jssor$.$ShowElement(b, c || (!f.$Loop && d >= k - f.$Cols));
      l = c;
    }
    c.$GetCurrentIndex = function() {
      return d;
    };
    c.$SetCurrentIndex = function(b, a, c) {
      if (c) d = a;
      else {
        d = b;
        j(l);
      }
    };
    c.$Show = j;
    var i;
    c.$Reset = function(c) {
      k = c;
      d = 0;
      if (!i) {
        $Jssor$.$AddEvent(a, "click", $Jssor$.$CreateCallback(null, h, -g));
        $Jssor$.$AddEvent(b, "click", $Jssor$.$CreateCallback(null, h, g));
        $Jssor$.$Buttonize(a);
        $Jssor$.$Buttonize(b);
        i = true;
      }
    };
    c.$Options = e = $Jssor$.$Extend({ $Steps: 1 }, f);
    g = e.$Steps;
    if (e.$Scale == false) {
      $Jssor$.$Attribute(a, "noscale", true);
      $Jssor$.$Attribute(b, "noscale", true);
    }
    if (e.$AutoCenter) {
      $Jssor$.$Attribute(a, "autocenter", e.$AutoCenter);
      $Jssor$.$Attribute(b, "autocenter", e.$AutoCenter);
    }
  }),
  $JssorThumbnailNavigator$ = (window.$JssorThumbnailNavigator$ = function(
    d,
    t
  ) {
    var e = this,
      r,
      h,
      a,
      n = [],
      p,
      o,
      b,
      i,
      j,
      m,
      l,
      g,
      k,
      c,
      f;
    $JssorObject$.call(e);
    d = $Jssor$.$GetElement(d);
    function s(m, d) {
      var g = this,
        c,
        l,
        j;
      function n() {
        l.$Selected(h == d);
      }
      function i(g) {
        if (g || !k.$LastDragSucceded()) {
          var a = b - d % b,
            c = k.$GetVirtualIndex((d + a) / b - 1),
            f = c * b + b - a;
          e.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, f);
        }
      }
      $JssorDebug$.$Execute(function() {
        g.$Wrapper = undefined;
      });
      g.$Index = d;
      g.$Highlight = n;
      j = m.$Thumb || m.$Image || $Jssor$.$CreateDiv();
      g.$Wrapper = c = $Jssor$.$BuildElement(f, "thumbnailtemplate", j, true);
      l = $Jssor$.$Buttonize(c);
      a.$ActionMode & 1 &&
        $Jssor$.$AddEvent(c, "click", $Jssor$.$CreateCallback(null, i, 0));
      a.$ActionMode & 2 &&
        $Jssor$.$AddEvent(
          c,
          "mouseover",
          $Jssor$.$MouseOverOutFilter($Jssor$.$CreateCallback(null, i, 1), c)
        );
    }
    e.$GetCurrentIndex = function() {
      return h;
    };
    e.$SetCurrentIndex = function(c, d, e) {
      var a = h;
      h = c;
      a != -1 && n[a].$Highlight();
      n[c].$Highlight();
      !e && k.$PlayTo(k.$GetVirtualIndex(Math.floor(d / b)));
    };
    e.$Show = function(a) {
      $Jssor$.$ShowElement(d, a);
    };
    var q;
    e.$Reset = function(A, y) {
      if (!q) {
        r = A;
        Math.ceil(r / b);
        h = -1;
        g = Math.min(g, y.length);
        var e = a.$Orientation & 1,
          v = m + (m + i) * (b - 1) * (1 - e),
          t = l + (l + j) * (b - 1) * e,
          x = v + (v + i) * (g - 1) * e,
          w = t + (t + j) * (g - 1) * (1 - e);
        $Jssor$.$CssPosition(c, "absolute");
        $Jssor$.$CssOverflow(c, "hidden");
        a.$AutoCenter & 1 && $Jssor$.$CssLeft(c, (p - x) / 2);
        a.$AutoCenter & 2 && $Jssor$.$CssTop(c, (o - w) / 2);
        $Jssor$.$CssWidth(c, x);
        $Jssor$.$CssHeight(c, w);
        var f = [];
        $Jssor$.$Each(y, function(o, g) {
          var h = new s(o, g),
            d = h.$Wrapper,
            a = Math.floor(g / b),
            k = g % b;
          $Jssor$.$CssLeft(d, (m + i) * k * (1 - e));
          $Jssor$.$CssTop(d, (l + j) * k * e);
          if (!f[a]) {
            f[a] = $Jssor$.$CreateDiv();
            $Jssor$.$AppendChild(c, f[a]);
          }
          $Jssor$.$AppendChild(f[a], d);
          n.push(h);
        });
        var z = $Jssor$.$Extend(
          {
            $AutoPlay: false,
            $NaviQuitDrag: false,
            $SlideWidth: v,
            $SlideHeight: t,
            $SlideSpacing: i * e + j * (1 - e),
            $MinDragOffsetToSlide: 12,
            $SlideDuration: 200,
            $PauseOnHover: 1,
            $PlayOrientation: a.$Orientation,
            $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation
          },
          a
        );
        k = new $JssorSlider$(d, z);
        q = true;
      }
    };
    e.$Options = a = $Jssor$.$Extend(
      {
        $SpacingX: 0,
        $SpacingY: 0,
        $Cols: 1,
        $Orientation: 1,
        $AutoCenter: 3,
        $ActionMode: 1
      },
      t
    );
    $JssorDebug$.$Execute(function() {
      a = $Jssor$.$Extend(
        { $Rows: undefined, $Width: undefined, $Height: undefined },
        a
      );
    });
    p = $Jssor$.$CssWidth(d);
    o = $Jssor$.$CssHeight(d);
    $JssorDebug$.$Execute(function() {
      !p &&
        $JssorDebug$.$Fail(
          "width of 'thumbnavigator' container not specified."
        );
      !o &&
        $JssorDebug$.$Fail(
          "height of 'thumbnavigator' container not specified."
        );
    });
    c = $Jssor$.$FindChild(d, "slides", true);
    f = $Jssor$.$FindChild(c, "prototype");
    $JssorDebug$.$Execute(function() {
      !f && $JssorDebug$.$Fail("prototype of 'thumbnavigator' not defined.");
    });
    m = $Jssor$.$CssWidth(f);
    l = $Jssor$.$CssHeight(f);
    $Jssor$.$RemoveElement(f, c);
    b = a.$Rows || 1;
    i = a.$SpacingX;
    j = a.$SpacingY;
    g = a.$Cols;
    a.$Scale == false && $Jssor$.$Attribute(d, "noscale", true);
  });
function $JssorCaptionSliderBase$(d, c, b) {
  var a = this;
  $JssorAnimator$.call(a, 0, b);
  a.$Revert = $Jssor$.$EmptyFunction;
  a.$IdleBegin = 0;
  a.$IdleEnd = b;
}
var $JssorCaptionSlideo$ = (window.$JssorCaptionSlideo$ = function(j, c, i) {
  $JssorDebug$.$Execute(function() {
    if (!c.$Transitions)
      $JssorDebug$.$Error(
        "'$CaptionSlideoOptions' option error, '$CaptionSlideoOptions.$Transitions' not specified."
      );
    else
      !$Jssor$.$IsArray(c.$Transitions) &&
        $JssorDebug$.$Error(
          "'$CaptionSlideoOptions' option error, '$CaptionSlideoOptions.$Transitions' is not an array."
        );
  });
  var a = this,
    k,
    e = {},
    f = c.$Transitions,
    b = new $JssorAnimator$(0, 0);
  $JssorAnimator$.call(a, 0, 0);
  function g(c, b) {
    var a = {};
    $Jssor$.$Each(c, function(c, f) {
      var d = e[f];
      if (d) {
        if ($Jssor$.$IsPlainObject(c)) c = g(c, b || f == "e");
        else if (b) if ($Jssor$.$IsNumeric(c)) c = k[c];
        a[d] = c;
      }
    });
    return a;
  }
  function h(d, b) {
    var a = [],
      c = $Jssor$.$Children(d);
    $Jssor$.$Each(c, function(c) {
      var i = $Jssor$.$AttributeEx(c, "u") == "caption";
      if (i) {
        var d = $Jssor$.$AttributeEx(c, "t"),
          g = f[$Jssor$.$ParseInt(d)] || f[d],
          e = { $Elmt: c, $Transition: g };
        a.push(e);
      }
      if (b < 5) a = a.concat(h(c, b + 1));
    });
    return a;
  }
  function n(c, d, a) {
    $Jssor$.$Each(d, function(f) {
      var d = $Jssor$.$Extend(true, {}, g(f)),
        e = $Jssor$.$FormatEasings(d.$Easing);
      delete d.$Easing;
      if (d.$Left) {
        d.$MoveX = d.$Left;
        e.$MoveX = e.$Left;
        delete d.$Left;
      }
      if (d.$Top) {
        d.$MoveY = d.$Top;
        e.$MoveY = e.$Top;
        delete d.$Top;
      }
      var i = {
          $Easing: e,
          $OriginalWidth: a.$Width,
          $OriginalHeight: a.$Height
        },
        h = new $JssorAnimator$(f.b, f.d, i, c, a, d);
      $JssorDebug$.$Execute(function() {
        h.$CaptionAnimator = true;
      });
      b.$Combine(h);
      a = $Jssor$.$AddDif(a, d);
    });
    return a;
  }
  function m(a) {
    $Jssor$.$Each(a, function(a, f) {
      $JssorDebug$.$Execute(function() {
        if (a.length) {
          var g = $Jssor$.$CssTop(a.$Elmt),
            e = $Jssor$.$CssLeft(a.$Elmt),
            d = $Jssor$.$CssWidth(a.$Elmt),
            c = $Jssor$.$CssHeight(a.$Elmt),
            b = null;
          if (isNaN(g)) b = "style 'top' not specified";
          else if (isNaN(e)) b = "style 'left' not specified";
          else if (isNaN(d)) b = "style 'width' not specified";
          else if (isNaN(c)) b = "style 'height' not specified";
          if (b)
            throw new Error(
              "Caption " +
                (f + 1) +
                " definition error, " +
                b +
                ".\r\n" +
                a.$Elmt.outerHTML
            );
        }
      });
      var b = a.$Elmt,
        e = $Jssor$.$CssWidth(b),
        d = $Jssor$.$CssHeight(b),
        c = {
          $Left: $Jssor$.$CssLeft(b),
          $Top: $Jssor$.$CssTop(b),
          $MoveX: 0,
          $MoveY: 0,
          $Opacity: 1,
          $ZIndex: $Jssor$.$CssZIndex(b) || 0,
          $Rotate: 0,
          $RotateX: 0,
          $RotateY: 0,
          $ScaleX: 1,
          $ScaleY: 1,
          $TranslateX: 0,
          $TranslateY: 0,
          $TranslateZ: 0,
          $SkewX: 0,
          $SkewY: 0,
          $Width: e,
          $Height: d,
          $Clip: { $Top: 0, $Right: e, $Bottom: d, $Left: 0 }
        };
      c.$OriginalX = c.$Left;
      c.$OriginalY = c.$Top;
      n(b, a.$Transition, c);
    });
  }
  function p(f, e, g) {
    var d = f.b - e;
    if (d) {
      var c = new $JssorAnimator$(e, d);
      $JssorDebug$.$Execute(function() {
        c.$TrunckedAnimator = true;
      });
      c.$Combine(b, true);
      c.$Shift(g);
      a.$Combine(c);
    }
    a.$Expand(f.d);
    return d;
  }
  function o(e) {
    var c = b.$GetPosition_OuterBegin(),
      d = 0;
    $Jssor$.$Each(e, function(b, e) {
      b = $Jssor$.$Extend({ d: i }, b);
      p(b, c, d);
      c = b.b;
      d += b.d;
      if (!e || b.t == 2) {
        a.$IdleBegin = c;
        a.$IdleEnd = c + b.d;
      }
    });
  }
  a.$Revert = function() {
    a.$GoToPosition(-1, true);
  };
  $JssorDebug$.$Execute(function() {
    a.$CaptionSlider = true;
    b.$InnerAnimator = true;
  });
  k = [
    $Jease$.$Swing,
    $Jease$.$Linear,
    $Jease$.$InQuad,
    $Jease$.$OutQuad,
    $Jease$.$InOutQuad,
    $Jease$.$InCubic,
    $Jease$.$OutCubic,
    $Jease$.$InOutCubic,
    $Jease$.$InQuart,
    $Jease$.$OutQuart,
    $Jease$.$InOutQuart,
    $Jease$.$InQuint,
    $Jease$.$OutQuint,
    $Jease$.$InOutQuint,
    $Jease$.$InSine,
    $Jease$.$OutSine,
    $Jease$.$InOutSine,
    $Jease$.$InExpo,
    $Jease$.$OutExpo,
    $Jease$.$InOutExpo,
    $Jease$.$InCirc,
    $Jease$.$OutCirc,
    $Jease$.$InOutCirc,
    $Jease$.$InElastic,
    $Jease$.$OutElastic,
    $Jease$.$InOutElastic,
    $Jease$.$InBack,
    $Jease$.$OutBack,
    $Jease$.$InOutBack,
    $Jease$.$InBounce,
    $Jease$.$OutBounce,
    $Jease$.$InOutBounce,
    $Jease$.$GoBack,
    $Jease$.$InWave,
    $Jease$.$OutWave,
    $Jease$.$OutJump,
    $Jease$.$InJump
  ];
  var q = {
    $Top: "y",
    $Left: "x",
    $Bottom: "m",
    $Right: "t",
    $Rotate: "r",
    $RotateX: "rX",
    $RotateY: "rY",
    $ScaleX: "sX",
    $ScaleY: "sY",
    $TranslateX: "tX",
    $TranslateY: "tY",
    $TranslateZ: "tZ",
    $SkewX: "kX",
    $SkewY: "kY",
    $Opacity: "o",
    $Easing: "e",
    $ZIndex: "i",
    $Clip: "c"
  };
  $Jssor$.$Each(q, function(b, a) {
    e[b] = a;
  });
  m(h(j, 1));
  b.$GoToPosition(-1);
  var l = c.$Breaks || [],
    d = [].concat(l[$Jssor$.$ParseInt($Jssor$.$AttributeEx(j, "b"))] || []);
  d.push({ b: b.$GetPosition_OuterEnd(), d: d.length ? 0 : i });
  o(d);
  a.$GoToPosition(-1);
});
