import type { Dictionary } from '../types';
import { nav } from './nav';
import { hero } from './hero';
import { services } from './services';
import { realestate } from './realestate';
import { about } from './about';
import { whyus } from './whyus';
import { corporate } from './corporate';
import { firm } from './firm';
import { testimonials } from './testimonials';
import { blog } from './blog';
import { contact } from './contact';
import { footer } from './footer';
import { chatbot } from './chatbot';
import { legal } from './legal';
import { ui } from './ui';
import { pages } from './pages';

/** Diccionario completo del sitio (unión de todas las partes). */
export const dictionary: Dictionary = {
  ...nav,
  ...hero,
  ...services,
  ...realestate,
  ...about,
  ...whyus,
  ...corporate,
  ...firm,
  ...testimonials,
  ...blog,
  ...contact,
  ...footer,
  ...chatbot,
  ...legal,
  ...ui,
  ...pages,
};
