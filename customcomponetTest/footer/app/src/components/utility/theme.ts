import { unsafeCSS } from 'lit-element/lib/css-tag';

const theme :any = {};

theme.palette = {
    main: ['#000000'],
    base: ['#FFFFFF'],
    accent: ['#A6843C', '#DAA520', '#E8C265', '#FFDD87', '#FFE4A5'],
    grayscale: [
        '#000000', // 0
        '#222222', // 1
        '#333333', // 2
        '#525252', // 3
        '#777777', // 4
        '#999999', // 5
        '#C9C9C9', // 6
        '#E5E5E5', // 7
        '#EEEEEE', // 8
        '#FFFFFF', // 9
    ],
    opacity: ['0', '0.25', '0.5', '0.75', '1'],
};

theme.fonts = {
    family_ja: `'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', sans-serif`,
    family_en: `Arial, Helvetica, sans-serif`,
    family_ch: `'LiHei Pro', 微軟正黑體, 'Microsoft JhengHei', Arial, Verdana, 'Trebuchet MS', sans-serif`,

    size_base: '10px',
    size_xs: '11px',
    size_s: '13px',
    size_m: '16px',
    size_l: '24px',
    size_xl: '30px',

    height_base: 1,
    height_s: 1.2,
    height_m: 1.4,
    height_l: 1.6,
};

theme.sizes = {
    space_nothing: '0px',
    space_xxxs: '2px',
    space_xxs: '4px',
    space_xs: '8px',
    space_s: '16px',
    space_m: '24px',
    space_l: '32px',
    space_xl: '48px',
    space_xxl: '64px',
    space_xxxl: '80px',
    space_xxxxl: '160px',
    // TODO:背景ジャックを加味していないサイズのため変更する可能性大（サイトの最小幅）
    minWidth: '1280px',
};

theme.rotate = {
    up: 'transform: rotate(0)',
    right: 'transform: rotate(90deg)',
    down: 'transform: rotate(180deg)',
    left: 'transform: rotate(-90deg)'
}

export const rotate = (name:string) => {
    return unsafeCSS(theme.rotate[name])
}

export const palette = (name:string, index:number) => {
    return unsafeCSS(theme.palette[name][index])
}

export const font = (name:string) => {
    return unsafeCSS(theme.fonts[name])
}

export const size = (name:string) => {
    return unsafeCSS(theme.sizes[name])
}

export const switchProp = (key, obj) => {
    return unsafeCSS(obj[key]);
}

export const withProp = (key, func) => {
    return unsafeCSS(func(key));
}

export const ifProp = (bool: boolean, func) => {
    if (bool) {
        return unsafeCSS(func);
    }
}

export default theme;
