import { Ref, ComputedRef } from 'vue';
import { Emitter } from 'mitt';
export interface MenuProps {
    mode?: string | 'vertical' | 'horizontal';
    collapse?: boolean;
    backgroundColor?: string;
    defaultOpeneds?: unknown[];
    defaultActive?: string;
    uniqueOpened?: boolean;
    router?: boolean;
    textColor?: string;
    activeTextColor?: string;
    hoverBackgroundColor?: string;
    popperAppendToBody?: boolean;
    menuTrigger?: string;
    offset?: number;
    placement?: string;
    showTimeout: number;
    hideTimeout: number;
}
export interface RegisterMenuItem {
    index: string;
    indexPath: ComputedRef<string[]>;
    active: ComputedRef<boolean>;
}
export interface RootMenuData {
    openedMenus: unknown[];
    items: any;
    submenus: any;
    activeIndex: string;
    isMenuPopup: boolean;
}
export interface RootMenuProvider {
    props: Readonly<Partial<MenuProps>>;
    rootMenuEmit: Emitter['emit'];
    rootMenuOn: Emitter['on'];
    openedMenus: Ref<RootMenuData['openedMenus']>;
    items: Ref<RootMenuData['items']>;
    submenus: Ref<RootMenuData['submenus']>;
    activeIndex: Ref<RootMenuData['activeIndex']>;
    isMenuPopup: Ref<RootMenuData['isMenuPopup']>;
    methods: {
        addMenuItem: (item: RegisterMenuItem) => void;
        removeMenuItem: (item: RegisterMenuItem) => void;
        addSubMenu: (item: RegisterMenuItem) => void;
        removeSubMenu: (item: RegisterMenuItem) => void;
        openMenu: (index: string, indexPath: Ref<string[]>) => void;
        closeMenu: (index: string) => void;
    };
    popperAppendToBody?: boolean;
}
export interface MenuItemProps {
    disabled?: boolean;
    index: string;
    route?: string | Record<string, unknown>;
    popperAppendToBody?: boolean;
}
export interface SubmenuProps {
    popperAppendToBody?: boolean;
    index: string;
    popperClass?: string;
    showIcon?: boolean;
    backgroundColor?: string;
    disabled?: boolean;
    offset?: number;
    placement?: string;
    showTimeout?: number;
    hideTimeout?: number;
}
export interface SubMenuProvider {
    addSubMenu: (item: RegisterMenuItem) => void;
    removeSubMenu: (item: RegisterMenuItem) => void;
    handleMouseleave?: (deepDispatch: boolean) => void;
}
