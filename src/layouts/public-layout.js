import { LitElement, html, css } from 'lit';

export class PublicLayout extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                align-items: center;
                justify-items: center;
                justify-content: center;
                padding: 16px;
                height: 100vh;
                width: 100%;
            }
        `
    ];

    render() {
        return html`<div>
            <slot></slot>
        </div>`;
    }
}
customElements.define('public-layout', PublicLayout);
