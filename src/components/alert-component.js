import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {
    
    static get properties() {
        return {
            type: { type: String },
            message: { type: String } 
        };
    }

    static styles = [
        css`
            :host {
                display: block;
                padding: 8px;
                margin: 8px 0;
                border-radius: 4px;
            }
            .alert{
                padding: 8px;
                border-radius: 4px;
                color:#fff;
                text-align: center;
                background-color: var(--color-primary, blue);
            }

            .error{
                background-color: var(--color-error, red);
            }

            .success{
                background-color: var(--color-success, green);
            }
        `
    ];

    render() {
        return html`
        <div class="alert ${this.type}">
            ${this.message}
        </div>
        `;
    }
}
customElements.define('alert-component', AlertComponent);
