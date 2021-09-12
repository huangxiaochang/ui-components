import { MenuProps } from './menu-type';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    defaultActive: {
        type: StringConstructor;
        default: string;
    };
    router: BooleanConstructor;
    defaultOpeneds: ArrayConstructor;
    collapse: BooleanConstructor;
    textColor: {
        type: StringConstructor;
    };
    activeTextColor: {
        type: StringConstructor;
    };
    backgroundColor: {
        type: StringConstructor;
    };
    hoverBackgroundColor: {
        type: StringConstructor;
    };
    uniqueOpened: BooleanConstructor;
    menuTrigger: {
        type: StringConstructor;
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    placement: StringConstructor;
    showTimeout: NumberConstructor;
    hideTimeout: NumberConstructor;
    collapseTransition: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: MenuProps;
    open: (index: unknown) => void;
    close: (index: unknown) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open" | "select")[], "close" | "open" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode?: unknown;
    defaultActive?: unknown;
    router?: unknown;
    defaultOpeneds?: unknown;
    collapse?: unknown;
    textColor?: unknown;
    activeTextColor?: unknown;
    backgroundColor?: unknown;
    hoverBackgroundColor?: unknown;
    uniqueOpened?: unknown;
    menuTrigger?: unknown;
    offset?: unknown;
    placement?: unknown;
    showTimeout?: unknown;
    hideTimeout?: unknown;
    collapseTransition?: unknown;
} & {
    mode: string;
    defaultActive: string;
    router: boolean;
    collapse: boolean;
    uniqueOpened: boolean;
    menuTrigger: string;
    offset: number;
    collapseTransition: boolean;
} & {
    defaultOpeneds?: unknown[];
    textColor?: string;
    activeTextColor?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    placement?: string;
    showTimeout?: number;
    hideTimeout?: number;
}>, {
    mode: string;
    defaultActive: string;
    router: boolean;
    collapse: boolean;
    uniqueOpened: boolean;
    menuTrigger: string;
    offset: number;
    collapseTransition: boolean;
}>;
export default _default;
