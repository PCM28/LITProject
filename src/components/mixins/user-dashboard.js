import { LitElement, html, css } from 'lit';
import { AutenticacionMixin } from "./authentication-mixin";
import { CargaDatosMixin } from "./cargadatos-mixin";

class UserDashboard extends AutenticacionMixin(CargaDatosMixin(LitElement)) {//Este sería el login page
    static properties = {
        datos: { type: Object }
    }
    
    constructor() {
        super();
        this.datos = {};
    }

    connectedCallback() {
        super.connectedCallback();
        this.conectado();
        if( this.usuarioAutenticado ) {//Lógica del componente login-component
            this.cargadorDatos();//Devuelve true si es correcto las credenciales o false en caso de ser incorrecto
        }    
    }
    // Línea 26: renderiza home-page, en caso que la línea 18 sea true o redirige a login-page, en caso de ser false
    render() {
        return html`
            <div>
                ${ this.datos.mensaje ? html`<p>${ this.datos.mensaje }</p>` : html`<p>Cargando...</p>` }
            </div>
        `;
    }
}
customElements.define('user-dashboard', UserDashboard);
