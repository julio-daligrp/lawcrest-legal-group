import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import { MessageCircle, X, Send, RotateCcw, Scale } from 'lucide-react';

type ServiceKind = 'consulta' | 'asesoria' | 'otro' | 'directo';

interface Option {
  id: string;
  label: string;
}

interface ChatMessage {
  id: number;
  from: 'bot' | 'user';
  text: string;
  options?: Option[];
}

type Step = 'greeting' | 'name' | 'area' | 'desc' | 'done';

const GREETING_OPTIONS: Option[] = [
  { id: 'consulta', label: 'Solicitar una consulta legal' },
  { id: 'asesoria', label: 'Solicitar una asesoría legal' },
  { id: 'otro', label: 'Información sobre otro servicio' },
  { id: 'directo', label: 'Hablar por WhatsApp ahora' },
];

const AREA_OPTIONS: Option[] = [
  { id: 'inmobiliario', label: 'Derecho Inmobiliario y Registral' },
  { id: 'litigios', label: 'Litigios Civiles y Comerciales' },
  { id: 'corporativo', label: 'Derecho Corporativo y Comercial' },
  { id: 'contratos', label: 'Contratos & Due Diligence' },
  { id: 'empresas', label: 'Asesoría a Empresas e Inversionistas' },
  { id: 'otra', label: 'Otra consulta' },
];

/**
 * Chatbot flotante de Lawcrest Legal Group.
 * Guía al visitante hacia la solicitud de una consulta o asesoría legal
 * y redirige la petición al WhatsApp oficial de la firma.
 */
export const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<Step>('greeting');
  const [input, setInput] = useState('');
  const [data, setData] = useState<{
    service: ServiceKind | '';
    name: string;
    area: string;
    desc: string;
  }>({ service: '', name: '', area: '', desc: '' });

  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextId = () => ++idRef.current;

  const say = (text: string, options?: Option[]) => {
    setMessages((prev) => [...prev, { id: nextId(), from: 'bot', text, options }]);
  };

  const sayUser = (text: string) => {
    setMessages((prev) => [...prev, { id: nextId(), from: 'user', text }]);
  };

  const reset = () => {
    setData({ service: '', name: '', area: '', desc: '' });
    setStep('greeting');
    setInput('');
    setMessages([
      {
        id: nextId(),
        from: 'bot',
        text: 'Hola 👋 Soy el asistente virtual de Lawcrest Legal Group. ¿En qué podemos ayudarle?',
        options: GREETING_OPTIONS,
      },
    ]);
  };

  const openChat = () => {
    if (!open && messages.length === 0) {
      setMessages([
        {
          id: nextId(),
          from: 'bot',
          text: 'Hola 👋 Soy el asistente virtual de Lawcrest Legal Group. ¿En qué podemos ayudarle?',
          options: GREETING_OPTIONS,
        },
      ]);
    }
    setOpen((v) => !v);
  };

  /** Cierra la conversación y prepara el mensaje de WhatsApp final. */
  const finish = () => {
    setStep('done');
    say(
      '¡Listo! Su solicitud está preparada. Toque el botón para continuar por WhatsApp y un miembro de nuestro equipo atenderá su mensaje de inmediato.'
    );
  };

  const handleOption = (opt: Option) => {
    sayUser(opt.label);

    switch (step) {
      case 'greeting': {
        if (opt.id === 'directo') {
          setData((d) => ({ ...d, service: 'directo' }));
          finish();
        } else {
          setData((d) => ({ ...d, service: opt.id as ServiceKind }));
          setStep('name');
          say(
            '¡Encantados de ayudarle! Para canalizar mejor su solicitud, ¿me indica su nombre?'
          );
        }
        break;
      }
      case 'area': {
        if (opt.id === 'omitir') {
          setStep('desc');
          say(
            'Perfecto. Si lo desea, describa brevemente su consulta para anticipar su atención. (opcional)'
          );
        } else {
          setData((d) => ({ ...d, area: opt.label }));
          setStep('desc');
          say(
            'Gracias. Finalmente, ¿podría describir brevemente su consulta para preparar su atención? (opcional)'
          );
        }
        break;
      }
      case 'desc': {
        if (opt.id === 'omitir') {
          sayUser('Omitir descripción');
          finish();
        }
        break;
      }
      default:
        break;
    }
  };

  const handleSend = () => {
    const text = input.trim();

    if (step === 'name') {
      if (!text) {
        say('¿Me indica su nombre para poder llamarle?');
        return;
      }
      setData((d) => ({ ...d, name: text }));
      sayUser(text);
      setInput('');
      setStep('area');
      say(`Gracias, ${text.split(' ')[0]}. ¿Con qué área se relaciona su consulta?`, AREA_OPTIONS);
    } else if (step === 'desc') {
      if (text) {
        setData((d) => ({ ...d, desc: text }));
        sayUser(text);
      } else {
        sayUser('Omitir descripción');
      }
      setInput('');
      finish();
    }
  };

  const handleOmit = () => {
    if (step === 'name') {
      sayUser('Prefiero omitir');
      setStep('area');
      say('Sin problema. ¿Con qué área se relaciona su consulta?', AREA_OPTIONS);
    } else if (step === 'desc') {
      sayUser('Omitir descripción');
      setInput('');
      finish();
    }
  };

  const composeWhatsAppText = (): string => {
    if (data.service === 'directo') {
      return WHATSAPP_CONFIG.defaultMessage;
    }
    const who = data.name ? `Hola, soy ${data.name}.` : 'Hola.';
    const need =
      data.service === 'consulta'
        ? 'Deseo solicitar una consulta legal.'
        : data.service === 'asesoria'
          ? 'Deseo solicitar una asesoría legal.'
          : 'Deseo información sobre un servicio legal.';
    const area = data.area ? ` Área: ${data.area}.` : '';
    const desc = data.desc ? ` Detalle: ${data.desc}` : '';
    return `${who} ${need}${area}${desc}`;
  };

  const whatsappTarget = (() => {
    const num = (WHATSAPP_CONFIG.phoneNumber || '').replace(/[^\d]/g, '');
    if (!num) return '/contacto';
    return `https://wa.me/${num}?text=${encodeURIComponent(composeWhatsAppText())}`;
  })();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const ctaClasses =
    'w-full inline-flex items-center justify-center gap-2 font-sans font-semibold ' +
    'text-xs tracking-widest uppercase px-4 py-3 rounded-lg ' +
    'text-[#031A39] bg-[#C89A32] border border-[#D8B65A] hover:bg-[#D8B65A] ' +
    'transition-colors duration-200 cursor-pointer';

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Asistente virtual de Lawcrest Legal Group"
          className="w-[min(92vw,380px)] max-h-[min(72vh,560px)] flex flex-col overflow-hidden rounded-2xl border border-[#062446]/10 bg-white shadow-2xl"
        >
          {/* Encabezado del chat */}
          <div className="bg-[#062446] px-4 py-3.5 flex items-center justify-between gap-2 shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#C89A32] flex items-center justify-center shrink-0">
                <Scale className="w-4 h-4 text-[#031A39]" />
              </span>
              <div>
                <p className="font-serif text-sm sm:text-base text-white font-medium leading-tight">
                  Lawcrest Legal Group
                </p>
                <p className="text-[10px] text-[#D8B65A] uppercase tracking-widest">
                  Asistente virtual
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mensajes */}
          <div
            ref={scrollRef}
            role="log"
            aria-live="polite"
            className="flex-1 overflow-y-auto bg-[#F7F7F5] px-4 py-4 space-y-3"
          >
            {messages.map((m) => (
              <div key={m.id} className="flex flex-col">
                {m.text && (
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                      m.from === 'bot'
                        ? 'self-start bg-white border border-[#062446]/10 rounded-lg rounded-tl-none text-[#062446]'
                        : 'self-end bg-[#062446] rounded-lg rounded-tr-none text-white'
                    }`}
                  >
                    {m.text}
                  </div>
                )}
                {m.options && (
                  <div className="mt-2 space-y-1.5 w-full max-w-[95%]">
                    {m.options.map((o) => (
                      <button
                        key={o.id}
                        onClick={() => handleOption(o)}
                        className="w-full text-left font-sans text-xs text-[#062446] border border-[#062446]/20 bg-white hover:border-[#C89A32] hover:text-[#C89A32] px-3 py-2 rounded-lg transition-colors duration-150 cursor-pointer"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Entrada de datos */}
          {(step === 'name' || step === 'desc') && (
            <div className="shrink-0 border-t border-[#062446]/10 bg-white px-3 py-3 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  placeholder={step === 'name' ? 'Escriba su nombre...' : 'Describa su consulta (opcional)...'}
                  aria-label={step === 'name' ? 'Su nombre' : 'Descripción de su consulta'}
                  className="flex-1 min-w-0 border border-[#062446]/20 bg-white text-[#062446] text-sm px-3 py-2.5 rounded-lg placeholder-[#062446]/40 focus:outline-none focus:border-[#C89A32] focus:ring-1 focus:ring-[#C89A32]/50"
                />
                <button
                  onClick={handleSend}
                  aria-label="Enviar mensaje"
                  className="w-10 h-10 shrink-0 rounded-lg bg-[#C89A32] hover:bg-[#D8B65A] text-[#031A39] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleOmit}
                className="text-[10px] uppercase tracking-widest font-semibold text-[#062446]/50 hover:text-[#C89A32] transition-colors cursor-pointer"
              >
                Omitir este paso
              </button>
            </div>
          )}

          {/* CTA final: redirección a WhatsApp */}
          {step === 'done' && (
            <div className="shrink-0 border-t border-[#062446]/10 bg-white px-3 py-3 space-y-2">
              {whatsappTarget.startsWith('http') ? (
                <a
                  href={whatsappTarget}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaClasses}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar por WhatsApp</span>
                </a>
              ) : (
                <Link to={whatsappTarget} className={ctaClasses}>
                  <MessageCircle className="w-4 h-4" />
                  <span>Ir a la página de contacto</span>
                </Link>
              )}
              <button
                onClick={reset}
                className="w-full inline-flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold text-[#062446]/50 hover:text-[#C89A32] transition-colors py-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reiniciar conversación</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Botón flotante */}
      <button
        onClick={openChat}
        aria-label={open ? 'Cerrar chat' : 'Abrir chat con Lawcrest'}
        aria-expanded={open}
        className="relative w-14 h-14 rounded-full bg-[#062446] border border-[#C89A32] text-[#D8B65A] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!open && (
          <span
            className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#C89A32] border-2 border-[#062446]"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
};