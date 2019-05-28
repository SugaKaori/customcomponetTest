import { LitElement, html, customElement, property, css } from 'lit-element';
import { switchProp, size } from '../../utility/theme';

@customElement('footer-layout')
class Layout extends LitElement {

    @property({type: String}) spaceTop:string = 'nothing'
    @property({type: String}) spaceBottom:string = 'nothing'

    render() {
        return html`
            <div class='footer-layout'></div>
            <style>
                .footer-layout {
                    box-sizing: border-box;
                    width: 1256px;
                    margin: 0 auto;
                    padding: ${size(`space_nothing`)} ${size(`space_m`)};
                    ${switchProp(this.spaceTop, {
                        nothing: css`
                            padding-top: ${size(`space_nothing`)};
                            `,
                        xxs: css`
                            padding-top: ${size(`space_xxs`)};
                        `,
                        xs: css`
                            padding-top: ${size(`space_xs`)};
                        `,
                        s: css`
                            padding-top: ${size(`space_s`)};
                        `,
                        m: css`
                            padding-top: ${size(`space_m`)};
                        `,
                        l: css`
                            padding-top: ${size(`space_l`)};
                        `,
                        xl: css`
                            padding-top: ${size(`space_xl`)};
                        `,
                        xxl: css`
                            padding-top: ${size(`space_xxl`)};
                        `,
                        xxxl: css`
                            padding-top: ${size(`space_xxxl`)};
                        `,
                    })}
                    ${switchProp('spaceBottom', {
                        nothing:    css`
                            padding-bottom: ${size(`space_nothing`)};
                        `,
                        xxs: css`
                            padding-bottom: ${size(`space_xxs`)};
                        `,
                        xs: css`
                            padding-bottom: ${size(`space_xs`)};
                        `,
                        s: css`
                            padding-bottom: ${size(`space_s`)};
                        `,
                        m: css`
                            padding-bottom: ${size(`space_m`)};
                        `,
                        l: css`
                            padding-bottom: ${size(`space_l`)};
                        `,
                        xl: css`
                            padding-bottom: ${size(`space_xl`)};
                        `,
                        xxl: css`
                            padding-bottom: ${size(`space_xxl`)};
                        `,
                        xxxl: css`
                            padding-bottom: ${size(`space_xxxl`)};
                        `,
                    })};
                }
            </style>
        `
    }
}