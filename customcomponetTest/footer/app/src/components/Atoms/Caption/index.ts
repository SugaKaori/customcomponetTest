import { switchProp, font, size, palette, ifProp } from './../../utility/theme';
import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('footer-caption')
class Caption extends LitElement {

    @property({type: String}) element:string = "h1"
    @property({type: Boolean}) invert:boolean = true
    @property({type: Boolean}) center:boolean = true

    render() {
        return html`
            ${(() => {
                switch(this.element) {
                    case 'h1': {
                        return html`
                            <h1 class="captionElement"><slot></slot></h1>
                        `
                    }
                    case 'h2': {
                        return html`
                            <h2 class="captionElement"><slot></slot></h2>
                        `
                    }
                    case 'h3': {
                        return html`
                            <h3 class="captionElement"><slot></slot></h3>
                        `
                    }
                    case 'h4': {
                        return html`
                            <h4 class="captionElement"><slot></slot></h4>
                        `
                    }
                    case 'h5': {
                        return html`
                            <h5 class="captionElement"><slot></slot></h5>
                        `
                    }
                }
            })()}
            <style>
                h1.footer-caption {
                    font-size: ${font('size_xl')};
                }
                h2.footer-caption {
                    font-size: ${font('size_l')};
                }
                h3.footer-caption {
                    padding-left: ${size('space_xs')};
                    border-left: 2px solid ${palette('accent', 2)};
                    font-size: ${font('size_m')};
                }
                h4.footer-caption {
                    padding-left: ${size('space_xs')};
                    border-left: 2px solid ${palette('accent', 2)};
                    font-size: ${font('size_s')};
                }
                h5.footer-caption {
                    padding-left: ${size('space_xs')};
                    border-left: 2px solid ${palette('accent', 2)};
                    font-size: ${font('size_xs')};
                }
                .footer-caption {
                    padding: 0;
                    color: ${palette('grayscale', 1)};
                    font-weight: normal;
                    line-height: ${font('height_s')};
                    ${ifProp(this.invert,
                        css`
                            color: ${palette('grayscale', 9)};
                            ${switchProp(this.element, {
                                h3: css`
                                    border-color: ${palette('accent', 2)};
                                `,
                                h4: css`
                                    border-color: ${palette('accent', 2)};
                                `,
                                h5: css`
                                    border-color: ${palette('accent', 2)};
                                `,
                            })}
                        `
                    )}
                    ${ifProp(this.center,
                        css`
                            text-align: center;
                        `
    )};
                }
            </style>
        `
    }
}