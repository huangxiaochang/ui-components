'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var HkustMenu = require('./hkust-');
var locale$1 = require('./le');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var HkustMenu__default = /*#__PURE__*/_interopDefaultLegacy(HkustMenu);

const version$1 = '0.0.0';

const version = version$1;
const locale = locale$1.use;
const defaultConfig = {
    size: '',
    zIndex: 2000,
};
const components = [
    HkustMenu__default['default'],
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
exports.default = index;
exports.locale = locale;
exports.version = version;
