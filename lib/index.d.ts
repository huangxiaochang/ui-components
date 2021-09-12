import type { App } from 'vue';
import HkustMenu from './hkust-menu';
import HkustMenuItem from './hkust-menu-item';
import HkustSubmenu from './hkust-submenu';
import HkustOverlay from './hkust-overlay';
import HkustSearch from './hkust-search';
import type { InstallOptions } from './utils/config';
declare const version = "0.0.1";
declare const locale: (l: import("./locale").Language) => void;
export { HkustMenu, HkustMenuItem, HkustSubmenu, HkustOverlay, HkustSearch, version, locale, };
declare const _default: {
    version: string;
    install: (app: App<any>, opt: InstallOptions) => void;
};
export default _default;