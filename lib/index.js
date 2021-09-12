'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var HkustMenu = require('./hkust-');
var HkustMenuItem = require('./hkust--item');
var HkustSubmenu = require('./hkust-enu');
var HkustOverlay = require('./hkust-lay');
var HkustSearch = require('./hkust-ch');
var locale$1 = require('./le');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var HkustMenu__default = /*#__PURE__*/_interopDefaultLegacy(HkustMenu);
var HkustMenuItem__default = /*#__PURE__*/_interopDefaultLegacy(HkustMenuItem);
var HkustSubmenu__default = /*#__PURE__*/_interopDefaultLegacy(HkustSubmenu);
var HkustOverlay__default = /*#__PURE__*/_interopDefaultLegacy(HkustOverlay);
var HkustSearch__default = /*#__PURE__*/_interopDefaultLegacy(HkustSearch);

const version$1 = '0.0.1';

const version = version$1;
const locale = locale$1.use;
const defaultConfig = {
    size: '',
    zIndex: 2000,
};
const components = [
    HkustMenu__default['default'],
    HkustMenuItem__default['default'],
    HkustSubmenu__default['default'],
    HkustOverlay__default['default'],
    HkustSearch__default['default'],
];
const install = (app, opt) => {
    const option = Object.assign(defaultConfig, opt);
    locale(option.locale);
    if (option.i18n) {
        locale$1.i18n(option.i18n);
    }
    components.forEach(component => {
        app.component(component.name, component);
    });
};
var index = {
    version,
    install,
};

Object.defineProperty(exports, 'HkustMenu', {
  enumerable: true,
  get: function () {
    return HkustMenu__default['default'];
  }
});
Object.defineProperty(exports, 'HkustMenuItem', {
  enumerable: true,
  get: function () {
    return HkustMenuItem__default['default'];
  }
});
Object.defineProperty(exports, 'HkustSubmenu', {
  enumerable: true,
  get: function () {
    return HkustSubmenu__default['default'];
  }
});
Object.defineProperty(exports, 'HkustOverlay', {
  enumerable: true,
  get: function () {
    return HkustOverlay__default['default'];
  }
});
Object.defineProperty(exports, 'HkustSearch', {
  enumerable: true,
  get: function () {
    return HkustSearch__default['default'];
  }
});
exports.default = index;
exports.locale = locale;
exports.version = version;
