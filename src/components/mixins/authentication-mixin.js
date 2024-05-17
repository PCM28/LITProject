export const AutenticacionMixin = (Superclass) => class extends Superclass {
   
    isAuthenticated() {
        return localStorage.getItem('authenticated') === 'true';
      }
}