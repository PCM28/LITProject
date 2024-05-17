export const SaludadorMixin = (Superclass) => class extends Superclass {
    saludar() {
        console.log("Heyy!!");
    }

    saludar2() {
        console.log("Whaaatss uuupp!");
    }
}