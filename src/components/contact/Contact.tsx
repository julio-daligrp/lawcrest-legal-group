import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import { MapPin, Clock, Mail, Phone, Instagram, MessageCircle, CheckCircle2, Send } from 'lucide-react';

const PRACTICE_AREAS = [
  'Derecho Inmobiliario y Registral',
  'Litigios Civiles y Comerciales',
  'Derecho Corporativo y Comercial',
  'Contratos & Due Diligence',
  'Cobros y Recuperación de Créditos',
  'Asesoría a Empresas e Inversionistas',
  'Otra consulta',
];

/** Información oficial de contacto y ubicación de la firma. */
const COMPANY_INFO = {
  address:
    'Av. Alemania, Plaza Comercial The Garden, Locales L-2 y L-4, Los Corales, Bávaro–Punta Cana, República Dominicana.',
  phoneDisplay: '809-817-0128',
  phoneTel: 'tel:+18098170128',
  email: 'contacto@lawcrestlegalgroup.com',
  instagramHandle: '@lawcrestlegalgroup',
  instagramUrl: 'https://www.instagram.com/lawcrestlegalgroup',
  mapQuery:
    'Plaza Comercial The Garden, Av. Alemania, Los Corales, Bávaro, Punta Cana, República Dominicana',
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  area: '',
  message: '',
};

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [consent, setConsent] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const whatsappHref = WHATSAPP_CONFIG.getUrl();
  const isExternalWhatsapp = whatsappHref.startsWith('http');
  const contactHref = isExternalWhatsapp
    ? whatsappHref
    : whatsappHref.startsWith('#')
      ? '/contacto'
      : whatsappHref;

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    COMPANY_INFO.mapQuery
  )}&z=16&output=embed`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Por favor complete los campos obligatorios: nombre, correo y mensaje.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Por favor indique un correo electrónico válido.');
      return;
    }
    if (!consent) {
      setError('Debe aceptar el aviso de confidencialidad para continuar.');
      return;
    }

    // Sin backend configurado: aquí se conectaría el envío real del formulario.
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setConsent(false);
    setError('');
    setSubmitted(false);
  };

  const inputClasses =
    'w-full bg-[#FFFFFF] border border-[#062446]/15 text-[#062446] placeholder-[#062446]/35 ' +
    'font-sans text-sm px-4 py-3.5 min-h-[48px] transition-colors duration-200 ' +
    'focus:outline-none focus:border-[#C89A32] focus:ring-1 focus:ring-[#C89A32]/60';

  const labelClasses =
    'block font-sans font-semibold text-[11px] tracking-[0.16em] uppercase text-[#062446]/70 mb-2';

  return (
    <section
      id="contacto"
      aria-label="Formulario de contacto - Lawcrest Legal Group"
      className="relative w-full bg-[#FFFFFF] text-[#062446] py-20 sm:py-24 lg:py-28 scroll-mt-20 border-b border-[#062446]/8 overflow-hidden"
    >
      {/* Textura geométrica sutil de fondo */}
      <div
        className="pointer-events-none absolute right-0 top-0 w-96 h-96 opacity-[0.05] overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="20" y="20" width="260" height="260" stroke="#C89A32" strokeWidth="1" />
          <line x1="20" y1="280" x2="280" y2="20" stroke="#C89A32" strokeWidth="0.8" />
          <line x1="20" y1="150" x2="280" y2="150" stroke="#C89A32" strokeWidth="0.8" />
        </svg>
      </div>

      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* COLUMNA IZQUIERDA: Información de contacto */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
              <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#173C68] uppercase">
                CONTACTO
              </span>
            </div>

            <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[42px] leading-[1.18] tracking-tight mb-5 [text-wrap:balance]">
              Conversemos sobre su caso.
            </h2>

            <p className="font-sans font-normal text-[#062446]/75 text-sm sm:text-base leading-relaxed mb-10">
              Complete el formulario y un miembro de nuestro equipo se pondrá en contacto con usted
              para coordinar una consulta. Sus datos serán tratados con estricta confidencialidad.
            </p>

            <ul className="space-y-5 pt-8 border-t border-[#062446]/10">
              <li className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#C89A32] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans font-semibold text-[11px] tracking-[0.16em] uppercase text-[#062446]/60 mb-1">
                    Ubicación principal
                  </span>
                  <span className="font-sans text-sm text-[#062446]/85 leading-relaxed">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#C89A32] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans font-semibold text-[11px] tracking-[0.16em] uppercase text-[#062446]/60 mb-1">
                    Teléfono
                  </span>
                  <a
                    href={COMPANY_INFO.phoneTel}
                    className="font-sans text-sm text-[#062446]/85 hover:text-[#C89A32] transition-colors duration-200"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#C89A32] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans font-semibold text-[11px] tracking-[0.16em] uppercase text-[#062446]/60 mb-1">
                    Correo electrónico
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-sans text-sm text-[#062446]/85 hover:text-[#C89A32] transition-colors duration-200 break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Instagram className="w-5 h-5 text-[#C89A32] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans font-semibold text-[11px] tracking-[0.16em] uppercase text-[#062446]/60 mb-1">
                    Redes sociales
                  </span>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-[#062446]/85 hover:text-[#C89A32] transition-colors duration-200"
                  >
                    {COMPANY_INFO.instagramHandle}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#C89A32] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans font-semibold text-[11px] tracking-[0.16em] uppercase text-[#062446]/60 mb-1">
                    Atención al cliente
                  </span>
                  <span className="font-sans text-sm text-[#062446]/85">Lunes a viernes: 9:00 AM – 6:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <MessageCircle className="w-5 h-5 text-[#C89A32] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans font-semibold text-[11px] tracking-[0.16em] uppercase text-[#062446]/60 mb-1">
                    Consulta directa
                  </span>
                  {isExternalWhatsapp ? (
                    <a
                      href={contactHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-[#C89A32] hover:text-[#062446] transition-colors duration-200"
                    >
                      Escribir por WhatsApp
                    </a>
                  ) : (
                    <Link
                      to={contactHref}
                      className="font-sans text-sm text-[#C89A32] hover:text-[#062446] transition-colors duration-200"
                    >
                      Escribir por WhatsApp
                    </Link>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#F7F7F5] border border-[#062446]/10 p-6 sm:p-8 lg:p-10 shadow-xl">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <CheckCircle2 className="w-14 h-14 text-[#C89A32] mb-5" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#062446] font-medium tracking-tight mb-3">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="font-sans text-sm text-[#062446]/75 leading-relaxed max-w-md mb-8">
                    Gracias por contactar a Lawcrest Legal Group. Hemos recibido su consulta y le
                    responderemos a la brevedad al correo indicado.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center font-sans font-semibold text-xs tracking-wider uppercase px-7 py-3.5 min-h-[46px] rounded-[2px] text-[#062446] bg-transparent border border-[#C89A32] hover:bg-[#C89A32]/15 transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClasses}>
                        Nombre completo <span className="text-[#C89A32]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Su nombre"
                        autoComplete="name"
                        required
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Correo electrónico <span className="text-[#C89A32]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                        autoComplete="email"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Teléfono <span className="text-[#062446]/40 normal-case tracking-normal">(opcional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 809 000 0000"
                        autoComplete="tel"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="area" className={labelClasses}>
                        Área de interés
                      </label>
                      <select
                        id="area"
                        name="area"
                        value={form.area}
                        onChange={handleChange}
                        className={`${inputClasses} cursor-pointer`}
                      >
                        <option value="">Seleccione un área</option>
                        {PRACTICE_AREAS.map((area) => (
                          <option key={area} value={area} className="bg-[#FFFFFF] text-[#062446]">
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Mensaje <span className="text-[#C89A32]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describa brevemente su consulta o situación legal."
                      required
                      className={`${inputClasses} resize-y min-h-[140px]`}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (error) setError('');
                      }}
                      className="mt-1 w-4 h-4 shrink-0 accent-[#C89A32] cursor-pointer"
                    />
                    <label htmlFor="consent" className="font-sans text-xs text-[#062446]/70 leading-relaxed cursor-pointer">
                      He leído y acepto que mis datos sean tratados conforme al{' '}
                      <Link
                        to="/confidencialidad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C89A32] underline underline-offset-2 hover:text-[#062446] transition-colors whitespace-nowrap"
                      >
                        aviso de confidencialidad
                      </Link>{' '}
                      de Lawcrest Legal Group. <span className="text-[#C89A32]">*</span>
                    </label>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="p-3.5 bg-[#C89A32]/10 border border-[#C89A32]/50 font-sans text-xs text-[#062446]"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="
                      w-full inline-flex items-center justify-center gap-2.5
                      font-sans font-semibold text-xs sm:text-sm tracking-widest uppercase
                      px-8 py-4 min-h-[52px] rounded-[2px]
                      text-[#031A39] bg-[#C89A32]
                      hover:bg-[#D8B65A] active:bg-[#C89A32]
                      border border-[#D8B65A]
                      transition-all duration-200 ease-out cursor-pointer
                      shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#C89A32]
                    "
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar consulta</span>
                  </button>

                  <p className="font-sans text-[11px] text-[#062446]/45 text-center leading-relaxed">
                    Los campos marcados con <span className="text-[#C89A32]">*</span> son obligatorios.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Mapa de la oficina a ancho completo */}
        <div className="mt-12 overflow-hidden border border-[#062446]/10 bg-[#F7F7F5]">
          <iframe
            title="Mapa de Lawcrest Legal Group en Bávaro–Punta Cana"
            src={mapSrc}
            className="w-full h-64 sm:h-80 border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
};