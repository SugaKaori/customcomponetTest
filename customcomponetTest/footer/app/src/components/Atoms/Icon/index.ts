import { LitElement, html, customElement, property, css } from 'lit-element';
import { rotate } from '../../utility/theme';
import convertToAbsolutePath from '../../utility/convert-absolute-path';

const iconImagePath = {
    arrow: `${convertToAbsolutePath('/static/images/ico/ico_arrow.svg')}`,
    error: `${convertToAbsolutePath('/static/images/ico/ico_error.svg')}`,
    info: `${convertToAbsolutePath('/static/images/ico/ico_info.svg')}`,
    close: `${convertToAbsolutePath('/static/images/ico/ico_close.svg')}`,
    incomplete: `${convertToAbsolutePath('/static/images/ico/ico_incomplete.svg')}`,
    search: `${convertToAbsolutePath('/static/images/ico/ico_search.svg')}`,
    twitter: `${convertToAbsolutePath('/static/images/ico/ico_twitter.svg')}`,
    apple: `${convertToAbsolutePath('/static/images/ico/ico_apple.svg')}`,
    windows: `${convertToAbsolutePath('/static/images/ico/ico_windows.svg')}`,
    android: `${convertToAbsolutePath('/static/images/ico/ico_android.svg')}`,
    externallink: `${convertToAbsolutePath('/static/images/ico/ico_externallink.svg')}`,
    pause: `${convertToAbsolutePath('/static/images/ico/ico_pause.svg')}`,
    complete: `${convertToAbsolutePath('/static/images/ico/ico_complete.svg')}`,
    start: `${convertToAbsolutePath('/static/images/ico/ico_start.svg')}`,
};

const iconImagePathInvert = {
    arrow: `${convertToAbsolutePath('/static/images/ico/ico_arrow_white.svg')}`,
    search: `${convertToAbsolutePath('/static/images/ico/ico_search_white.svg')}`,
    twitter: `${convertToAbsolutePath('/static/images/ico/ico_twitter_white.svg')}`,
    apple: `${convertToAbsolutePath('/static/images/ico/ico_apple_white.svg')}`,
    windows: `${convertToAbsolutePath('/static/images/ico/ico_windows_white.svg')}`,
    android: `${convertToAbsolutePath('/static/images/ico/ico_android_white.svg')}`,
    externallink: `${convertToAbsolutePath('/static/images/ico/ico_externallink_white.svg')}`,
};

const commonScale = {
    small: 14,
    medium: 17,
    large: 28,
};

@customElement('footer-icon')
class Icon extends LitElement {

    @property({type: String}) alt:string = ''
    @property({type: String}) scale:string = 'large'
    @property({type: String}) rotate:string = 'up'
    @property({type: Boolean}) invert:boolean = false
    @property({type: String}) iconName:string = ''

    render() {
        return html`
            <div class='footer-icon'>
                <img
                    src=${this.invert ? iconImagePathInvert[this.iconName] : iconImagePath[this.iconName]}
                    alt=${this.alt}
                    />
            </div>
            <style>
                .footer-icon {
                    ${rotate(this.rotate)};
                    img {
                        width: ${commonScale[this.scale]};
                        height: ${commonScale[this.scale]};
                    }
                }
            </style>
        `
    }
}