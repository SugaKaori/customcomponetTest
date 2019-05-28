import { LitElement, html, customElement, property, css } from 'lit-element';
import { withProp, switchProp, size, palette, ifProp, font } from '../../utility/theme';
import hexToRgba from '../../utility/rgba';

@customElement('footer-text')
class Text extends LitElement {

    @property({type: String}) scale:string = 's'
    @property({type: Object}) color:object = {palette: 'grayscale', index: 0}
    @property({type: Boolean}) hoverColor:boolean = true
    @property({type: String}) linespace:string = 'm'
    @property({type: Boolean}) clamp:boolean = false

    render() {
        return html`
            <span class="footer-text">
                <slot></slot>
            </span>
            <style>
                .footer-text {
                    padding: ${size('space_nothing')};
                    color: ${withProp(this.color, color => {
                        if (typeof color.alpha === 'number') {
                            return hexToRgba(palette(color.palette, color.index), palette('opacity', color.alpha));
                        }
                        return palette(color.palette, color.index);
                    })};
                    ${ifProp(this.hoverColor, props => {
                        const {hoverColor} = props;

                        const paletteColor: (string | any) = hoverColor.alpha
                            ? hexToRgba(palette(hoverColor.palette, hoverColor.index), palette('opacity', hoverColor.alpha))
                            : palette(hoverColor.palette, hoverColor.index);

                        return css`
                            :hover {
                                color: ${paletteColor(props)};
                            }
                        `;
                    })};
                    ${switchProp(this.linespace, {
                        base: css`
                            line-height: ${font('height_base')};
                        `,
                        s: css`
                            line-height: ${font('height_s')};
                        `,
                        m: css`
                            line-height: ${font('height_m')};
                        `,
                        l: css`
                            line-height: ${font('height_l')};
                        `,
                    })};
                    ${switchProp(this.scale, {
                        base: css`
                            font-size: ${font('size_base')};
                        `,
                        xs: css`
                            font-size: ${font('size_xs')};
                        `,
                        s: css`
                            font-size: ${font('size_s')};
                        `,
                        m: css`
                            font-size: ${font('size_m')};
                        `,
                        l: css`
                            font-size: ${font('size_l')};
                        `,
                        xl: css`
                            font-size: ${font('size_xl')};
                        `,
                    })};
                    a {
                        opacity: ${palette('opacity', 2)};
                        &:hover {
                            opacity: ${palette('opacity', 3)};
                        }
                    }
                    ${ifProp(
                        this.clamp,
                        css`
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        `
                    )};
                }
            </style>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'footer-text': Text
    }
}