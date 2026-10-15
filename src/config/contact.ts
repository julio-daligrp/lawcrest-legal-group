/**
 * Lawcrest Legal Group - Configuración de Canales de Contacto
 * Fácilmente editable cuando se disponga del número telefónico definitivo.
 */

export const WHATSAPP_CONFIG = {
  /**
   * Número de WhatsApp oficial con código de país.
   * República Dominicana: +1 809 / 829 / 849 (ej: '18090000000')
   */
  phoneNumber: '18098170128', 
  
  /**
   * Mensaje predeterminado de bienvenida para clientes que inician consulta.
   */
  defaultMessage: 'Hola, deseo solicitar una consulta legal con Lawcrest Legal Group.',

  /**
   * Generador de URL de WhatsApp o fallback a la página de contacto si no hay número asignado.
   */
  getUrl: function (): string {
    if (!this.phoneNumber || this.phoneNumber.trim() === '') {
      return '/contacto';
    }
    const cleanNumber = this.phoneNumber.replace(/[^\d]/g, '');
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  },
};
