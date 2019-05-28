import { LitElement, html, css, customElement, property } from 'lit-element';
import {palette, withProp, ifProp} from '../../utility/theme';
import hexToRgba from '../../utility/rgba';

@customElement('footer-anchor')
class Anchor extends LitElement {

    @property({type : String}) to:string = ''
    @property({type : String}) target:string = '_self'
    @property({type : String}) props:boolean = true
    @property({type : Object}) color:object = {palette: 'grayscale', index: 0}

    render() {
        return html`
            <a
                class='footer-anchor'
                href=${this.to}
                target=${this.target}
                @click=${this.handleClick}
            >
                <slot></slot>
            </a>
            <style>
                .footer-anchor {
                    text-decoration: none;
                    color: ${withProp(this.color, color => {
                        if (typeof color.alpha === 'number') {
                            return hexToRgba(palette(color.palette, color.index), palette('opacity', color.alpha));
                        }
                        return palette(color.palette, color.index);
                    })};
                }
                ${ifProp(this.props,
                    css`
                        .footer-anchor:hover {
                            text-decoration: underline;
                        }
                    `)};
            </style>
        `
    }
    handleClick(e) {
        console.log("anchor click!")
        e.preventDefault();
        // if (window.history) {
        //     window.history.pushState
        // }
    }
}