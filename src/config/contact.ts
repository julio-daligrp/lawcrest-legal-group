/**
 * Lawcrest Legal Group - Configuración de Canales de Contacto
 * Fácilmente editable cuando se disponga del número definitivo.
 */

export const WHATSAPP_CONFIG = {
  /**
   * Número de WhatsApp oficial con código de país.
   * República Dominicana: +1 809 / 829 / 849 (ej: '18090000000')
   */
  phoneNumber: '18098170128',

  /**
   * Mensaje de bienvenida predeterminado (si no se indica uno localizado).
   */
  defaultMessage: 'Hello, I would like to request a legal consultation with Lawcrest Legal Group.',

  /**
   * Generador de URL de WhatsApp o fallback a la página de contacto si no hay número asignado.
   * @param message Mensaje localizado que se precarga en la conversación.
   */
  getUrl: function (message?: string): string {
    if (!this.phoneNumber || this.phoneNumber.trim() === '') {
      return '/contacto';
    }
    const cleanNumber = this.phoneNumber.replace(/[^\d]/g, '');
    const encodedMessage = encodeURIComponent(message || this.defaultMessage);
    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  },
};
