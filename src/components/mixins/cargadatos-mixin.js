export const CargaDatosMixin = (Superclass) => class extends Superclass {
    cargarDatos() {
        console.log("Cargando datos...");
        setTimeout(() => {
            this.datos = { mensaje: "Datos cargados con éxito" };
            console.log(this.datos.mensaje);
            this.requestUpdate();
        }, 1000);
    }
};