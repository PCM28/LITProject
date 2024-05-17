import { LitElement, html, css } from 'lit';
import { SaludadorMixin } from './saludar-mixin';

export class UsoMixin extends SaludadorMixin(LitElement) {
    render() {
        return html`<button @click="${this.saludar}">Saludar</button>`;
    }
}
customElements.define('uso-mixin', UsoMixin);
