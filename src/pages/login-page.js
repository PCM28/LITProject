import { LitElement, html, css, nothing } from 'lit';
import { AutenticacionMixin } from "../components/mixins/authentication-mixin.js";
import { Router } from '@vaadin/router';

import "../components/login-component.js";
import "../components/alert-component.js";
import "../layouts/public-layout.js";


export class LoginPage extends AutenticacionMixin(LitElement) {

    constructor(){
        super();
        this.alertType = "";
        this.alertMessage = "";
    }

    static get properties() {
        return {
            alertType: { type: String },
            alertMessage: { type: String }
        }
    }

    // firstUpdated() {//Se ejecuta la primera vez que se vea, a la escucha de una de estos 2 eventos
    //     this.addEventListener("login-success", this.handleLoginSuccess.bind(this));
    //     this.addEventListener("login-error", this.handleLoginError.bind(this));
    // } Si se quita el componente de la página seguirá los listeners ahí, usando connected y disconnect callback, se quitán junto con el componente

    handleLoginSuccess(event){
        const { email } = event.detail;
        this.alertType = "success";
        this.alertMessage = `login success ${email}`;
        Router.go("/home");
    }

    handleLoginError(event){
        const { error } = event.detail;
        this.alertType = "error";
        this.alertMessage = `login failed ${error || ""}`;
        Router.go("/login");
    }
     
    connectedCallback(){
        super.connectedCallback();
        this.addEventListener("login-success", this.handleLoginSuccess.bind(this));
        this.addEventListener("login-error", this.handleLoginError.bind(this));
    }

    disconnectedCallback(){
        this.removeEventListener("login-success", this.handleLoginSuccess.bind(this));
        this.removeEventListener("login-error", this.handleLoginError.bind(this));
        super.disconnectedCallback();
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                justify-items: center;
                width: 100%;
            }
        `
    ];

    render() {
        return html`
            <public-layout>
                <login-component></login-component>
                ${this.alertType
                    ? html` <alert-component .type=${this.alertType} .message=${this.alertMessage}></alert-component>`
                    : nothing
                }
            </public-layout>
            
        `;
    }
}
customElements.define('login-page', LoginPage);
