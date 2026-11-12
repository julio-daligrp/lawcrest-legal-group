import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import { useI18n } from '@/src/i18n';
import { MessageCircle, X, Send, RotateCcw, Scale } from 'lucide-react';

type ServiceKind = 'consulta' | 'asesoria' | 'otro' | 'directo';

interface Option {
  id: string;
  /** Clave del diccionario para la etiqueta de la opción. */
  labelKey: string;
}

interface ChatMessage {
  id: number;
  from: 'bot' | 'user';
  text: string;
  options?: Option[];
}

type Step = 'greeting' | 'name' | 'area' | 'desc' | 'done';

const GREETING_OPTIONS: Option[] = [
  { id: 'consulta', labelKey: 'chatbot.option.consulta' },
  { id: 'asesoria', labelKey: 'chatbot.option.asesoria' },
  { id: 'otro', labelKey: 'chatbot.option.otro' },
  { id: 'directo', labelKey: 'chatbot.option.directo' },
];

const AREA_OPTIONS: Option[] = [
  { id: 'inmobiliario', labelKey: 'chatbot.area.inmobiliario' },
  { id: 'litigios', labelKey: 'chatbot.area.litigios' },
  { id: 'corporativo', labelKey: 'chatbot.area.corporativo' },
  { id: 'contratos', labelKey: 'chatbot.area.contratos' },
  { id: 'empresas', labelKey: 'chatbot.area.empresas' },
  { id: 'otra', labelKey: 'chatbot.area.otra' },
];

/**
 * Chatbot flotante de Lawcrest Legal Group.
 * Guía al visitante hacia la solicitud de una consulta o asesoría legal
 * y redirige la petición al WhatsApp oficial de la firma.
 */
export const Chatbot: React.FC = () => {
  const { t, link } = useI18n();
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
        text: t('chatbot.greeting'),
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
          text: t('chatbot.greeting'),
          options: GREETING_OPTIONS,
        },
      ]);
    }
    setOpen((v) => !v);
  };

  /** Cierra la conversación y prepara el mensaje de WhatsApp final. */
  const finish = () => {
    setStep('done');
    say(t('chatbot.ready'));
  };

  const handleOption = (opt: Option) => {
    sayUser(t(opt.labelKey));

    switch (step) {
      case 'greeting': {
        if (opt.id === 'directo') {
          setData((d) => ({ ...d, service: 'directo' }));
          finish();
        } else {
          setData((d) => ({ ...d, service: opt.id as ServiceKind }));
          setStep('name');
          say(t('chatbot.askName'));
        }
        break;
      }
      case 'area': {
        if (opt.id === 'omitir') {
          setStep('desc');
          say(t('chatbot.askDescOptional'));
        } else {
          setData((d) => ({ ...d, area: opt.id }));
          setStep('desc');
          say(t('chatbot.askDesc'));
        }
        break;
      }
      case 'desc': {
        if (opt.id === 'omitir') {
          sayUser(t('chatbot.skipDescription'));
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
        say(t('chatbot.askNameRequired'));
        return;
      }
      setData((d) => ({ ...d, name: text }));
      sayUser(text);
      setInput('');
      setStep('area');
      say(
        t('chatbot.thanksName').replace('{name}', text.split(' ')[0]),
        AREA_OPTIONS
      );
    } else if (step === 'desc') {
      if (text) {
        setData((d) => ({ ...d, desc: text }));
        sayUser(text);
      } else {
        sayUser(t('chatbot.skipDescription'));
      }
      setInput('');
      finish();
    }
  };

  const handleOmit = () => {
    if (step === 'name') {
      sayUser(t('chatbot.preferSkip'));
      setStep('area');
      say(t('chatbot.askArea'), AREA_OPTIONS);
    } else if (step === 'desc') {
      sayUser(t('chatbot.skipDescription'));
      setInput('');
      finish();
    }
  };

  const composeWhatsAppText = (): string => {
    if (data.service === 'directo') {
      return t('chatbot.whatsappMessage');
    }
    const who = data.name
      ? t('chatbot.whatsappHello').replace('{name}', data.name)
      : t('chatbot.whatsappHelloAnonymous');
    const need =
      data.service === 'consulta'
        ? t('chatbot.whatsappNeedConsulta')
        : data.service === 'asesoria'
          ? t('chatbot.whatsappNeedAsesoria')
          : t('chatbot.whatsappNeedOtro');
    const areaOption = AREA_OPTIONS.find((o) => o.id === data.area);
    const area = areaOption
      ? ` ${t('chatbot.whatsappAreaLabel')}: ${t(areaOption.labelKey)}.`
      : '';
    const desc = data.desc ? ` ${t('chatbot.whatsappDetailLabel')}: ${data.desc}` : '';
    return `${who} ${need}${area}${desc}`;
  };

  const whatsappTarget = (() => {
    const num = (WHATSAPP_CONFIG.phoneNumber || '').replace(/[^\d]/g, '');
    if (!num) return link('/contacto');
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
          aria-label={t('chatbot.ariaLabel')}
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
                  {t('chatbot.subtitle')}
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label={t('chatbot.close')}
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
                        {t(o.labelKey)}
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
                  placeholder={step === 'name' ? t('chatbot.placeholderName') : t('chatbot.placeholderDesc')}
                  aria-label={step === 'name' ? t('chatbot.ariaName') : t('chatbot.ariaDescription')}
                  className="flex-1 min-w-0 border border-[#062446]/20 bg-white text-[#062446] text-sm px-3 py-2.5 rounded-lg placeholder-[#062446]/40 focus:outline-none focus:border-[#C89A32] focus:ring-1 focus:ring-[#C89A32]/50"
                />
                <button
                  onClick={handleSend}
                  aria-label={t('chatbot.send')}
                  className="w-10 h-10 shrink-0 rounded-lg bg-[#C89A32] hover:bg-[#D8B65A] text-[#031A39] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleOmit}
                className="text-[10px] uppercase tracking-widest font-semibold text-[#062446]/50 hover:text-[#C89A32] transition-colors cursor-pointer"
              >
                {t('chatbot.skipStep')}
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
                  <span>{t('chatbot.whatsappCta')}</span>
                </a>
              ) : (
                <Link to={whatsappTarget} className={ctaClasses}>
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('chatbot.contactCta')}</span>
                </Link>
              )}
              <button
                onClick={reset}
                className="w-full inline-flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold text-[#062446]/50 hover:text-[#C89A32] transition-colors py-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{t('chatbot.restart')}</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Botón flotante */}
      <button
        onClick={openChat}
        aria-label={open ? t('chatbot.close') : t('chatbot.open')}
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