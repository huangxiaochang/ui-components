(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("hkust/locale/zh-cn", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.HkustUI.lang = global.HkustUI.lang || {};
    global.HkustUI.lang.zhCn = mod.exports.default;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'zh-cn',
    hkust: {
      demo: '用例'
    }
  };
  _exports.default = _default;
});