import type { App } from 'vue';
import HkustMenu from './hkust-menu';
import type { InstallOptions } from './utils/config';
declare const version = "0.0.0";
declare const locale: (l: import("./locale").Language) => void;
export { HkustMenu, version, locale, };
declare const _default: {
    version: string;
    install: (app: App<any>, opt: InstallOptions) => void;
};
export default _default;
