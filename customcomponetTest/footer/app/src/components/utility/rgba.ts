import themeDefault from './theme';

const props = {
    theme: themeDefault,
};

const hexToRgb = hex => {
    const color = typeof hex === 'function' ? hex(props) : hex;
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        color.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
    );
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};
const rgba = (hex, alpha) => {
    const color = hexToRgb(hex);
    const opacity = typeof alpha === 'function' ? alpha(props) : alpha;
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
};

export default rgba;
