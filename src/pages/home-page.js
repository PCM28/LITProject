import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

import { AutenticacionMixin } from '../components/mixins/authentication-mixin.js';

import '@dile/dile-nav/dile-nav.js';
import '@dile/dile-menu-hamburger/dile-menu-hamburger.js';
import '@dile/dile-button/dile-button.js';
import "../layouts/auth-layout.js";


export class HomePage extends AutenticacionMixin(LitElement) {
    // 
    connectedCallback() {
        super.connectedCallback();
        if(!this.isAuthenticated) {
            Router.go("/login");
        } 
    }
    // 

    static styles = [
        css`
            :host {
                width: 100%;
                --dile-nav-background-color: var(--primary-color, #464444);
            }

            h1, p{
                color:#000
            }
        `
    ];

    settings(){
        alert("Open Ticket");
    }

    logOut(){
        localStorage.removeItem("authenticated");
        Router.go("/login");
    }

    render() {
        return html`
        <auth-layout>
            <dile-nav slot=header menu="right">
                <h2 slot="title">Home Page</h2>
                <dile-menu-hamburger slot="menu">
                    <nav slot="menu">
                        <p><dile-button @click="${this.settings}">Seetings</dile-button></p>
                        <p><dile-button @click="${this.logOut}">Log Out</dile-button></p>
                    </nav>
                </dile-menu-hamburger>
                <span slot="actions">Create</span>
            </dile-nav>
            <p slot=footer>All @rights reserved 2024</p>
        </auth-layout>
        `;
    }
}
customElements.define('home-page', HomePage);
