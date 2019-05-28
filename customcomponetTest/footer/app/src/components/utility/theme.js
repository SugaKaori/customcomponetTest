"use strict";
exports.__esModule = true;
var css_tag_1 = require("lit-element/lib/css-tag");
var theme = {};
theme.palette = {
    main: ['#000000'],
    base: ['#FFFFFF'],
    accent: ['#A6843C', '#DAA520', '#E8C265', '#FFDD87', '#FFE4A5'],
    grayscale: [
        '#000000',
        '#222222',
        '#333333',
        '#525252',
        '#777777',
        '#999999',
        '#C9C9C9',
        '#E5E5E5',
        '#EEEEEE',
        '#FFFFFF',
    ],
    opacity: ['0', '0.25', '0.5', '0.75', '1']
};
theme.fonts = {
    family_ja: "'Hiragino Kaku Gothic Pro', '\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 Pro W3', '\u30E1\u30A4\u30EA\u30AA', Meiryo, '\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF', sans-serif",
    family_en: "Arial, Helvetica, sans-serif",
    family_ch: "'LiHei Pro', \u5FAE\u8EDF\u6B63\u9ED1\u9AD4, 'Microsoft JhengHei', Arial, Verdana, 'Trebuchet MS', sans-serif",
    size_base: '10px',
    size_xs: '11px',
    size_s: '13px',
    size_m: '16px',
    size_l: '24px',
    size_xl: '30px',
    height_base: 1,
    height_s: 1.2,
    height_m: 1.4,
    height_l: 1.6
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
    minWidth: '1280px'
};
theme.rotate = {
    up: 'transform: rotate(0)',
    right: 'transform: rotate(90deg)',
    down: 'transform: rotate(180deg)',
    left: 'transform: rotate(-90deg)'
};
exports.rotate = function (name) {
    return css_tag_1.unsafeCSS(theme.rotate[name]);
};
exports.palette = function (name, index) {
    return css_tag_1.unsafeCSS(theme.palette[name][index]);
};
exports.font = function (name) {
    return css_tag_1.unsafeCSS(theme.fonts[name]);
};
exports.size = function (name) {
    return css_tag_1.unsafeCSS(theme.sizes[name]);
};
exports.switchProp = function (key, obj) {
    return css_tag_1.unsafeCSS(obj[key]);
};
exports.withProp = function (key, func) {
    return css_tag_1.unsafeCSS(func(key));
};
exports.ifProp = function (bool, func) {
    if (bool) {
        return css_tag_1.unsafeCSS(func);
    }
};
exports["default"] = theme;
