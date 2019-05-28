import { LitElement, html, customElement, property, css } from 'lit-element';
import { withProp, switchProp, size, palette, ifProp, font } from '../../utility/theme';
import '../Text'
import '../Icon'

const iconScales = {
    base: 'small',
    xs: 'small',
    s: 'medium',
    m: 'medium',
    l: 'large',
    xl: 'large',
};

const getIconHeight = props => {
    // const {textScale, linespace} = props;
    // const fontSize = font(`size_${textScale}`)(props);
    // const lineHeight = font(`height_${linespace}`)(props);

    // return `${fontSize} * ${lineHeight}`;
};

@customElement('footer-texticon')
class TextIcon extends LitElement {
    render() {
        return html`
            <span class="footer-texticon">
                <footer-icon></footer-icon>
                <footer-text scale="m" ?hoverColor='$(false)'></footer-text>
            </span>
            <style>
                .footer-texticon {
                    display: flex;
                    align-items: center;
                    height: calc(${getIconHeight});
                    .footer-icon {
                        margin-right: ${size('space_xxxs')};
                    }
                    .footer-text {
                        display: flex;
                        align-items: center;
                    }
                }
            </style>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'footer-texticon': TextIcon
    }
}