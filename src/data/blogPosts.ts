import blogImgRealEstate from '@/src/assets/images/lawcrest_blog_real_estate_1791473791752.jpg';
import blogImgRealEstate600 from '@/src/assets/images/lawcrest_blog_real_estate-600.jpg';
import blogImgCorporate from '@/src/assets/images/lawcrest_blog_corporate_1791473820154.jpg';
import blogImgCorporate600 from '@/src/assets/images/lawcrest_blog_corporate-600.jpg';
import blogImgContracts from '@/src/assets/images/lawcrest_blog_contracts_1791473845675.jpg';
import blogImgContracts600 from '@/src/assets/images/lawcrest_blog_contracts-600.jpg';

export interface BlogPost {
  /** Identificador usado en la URL del artículo (slug). */
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  image: string;
  image600: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'adquisicion-inmobiliaria-punta-cana',
    category: 'Derecho Inmobiliario',
    date: 'Octubre 2026',
    readTime: '5 min de lectura',
    title: 'Claves jurídicas para la adquisición segura de inmuebles en Punta Cana',
    excerpt:
      'Aspectos esenciales de debida diligencia registral, verificación de cargas y formalidades notariales indispensables antes de suscribir promesas de compraventa en República Dominicana.',
    keyTakeaways: [
      'Certificación de estado jurídico del inmueble emitida por el Registro de Títulos.',
      'Verificación del cumplimiento de cargas impositivas ante la DGII.',
      'Revisión minuciosa de cláusulas de penalidad y plazos de entrega en proyectos en desarrollo.',
    ],
    content: [
      'La inversión inmobiliaria en la zona turística y residencial de Bávaro y Punta Cana continúa posicionándose como uno de los destinos más atractivos de la región del Caribe. No obstante, garantizar la solidez jurídica de cada operación requiere una investigación legal previa rigurosa.',
      'El proceso de debida diligencia legal inmobiliaria no se limita a constatar la existencia física del inmueble. Implica comprobar la titularidad legítima en el Registro de Títulos competente, la inexistencia de gravámenes, hipotecas o litigios en curso, así como la correspondencia exacta entre la designación catastral y el plano aprobado.',
      'Asimismo, para compradores extranjeros e inversionistas institucionales, es indispensable estructurar de forma adecuada el régimen fiscal aplicable, aprovechando los incentivos previstos por la normativa dominicana cuando aplique, y asegurando contratos redactados con equilibrio y salvaguardas claras.',
    ],
    image: blogImgRealEstate,
    image600: blogImgRealEstate600,
  },
  {
    id: 'inversion-extranjera-sociedades-rd',
    category: 'Derecho Corporativo',
    date: 'Septiembre 2026',
    readTime: '6 min de lectura',
    title: 'Estructuración societaria para inversionistas extranjeros en República Dominicana',
    excerpt:
      'Ventajas y consideraciones estratégicas para constituir sociedades de responsabilidad limitada (SRL) o sociedades anónimas simplificadas (SAS) al operar en el país.',
    keyTakeaways: [
      'Igualdad de derechos y garantías para inversionistas extranjeros según la Ley 16-95.',
      'Elección estratégica entre SRL y SAS según la estructura de gobierno corporativo.',
      'Cumplimiento continuo en materia de beneficiario final y registro mercantil.',
    ],
    content: [
      'El marco normativo de la República Dominicana consagra el principio de no discriminación, garantizando a los inversionistas extranjeros los mismos derechos y deberes que a los nacionales para la realización de actividades comerciales y la adquisición de activos.',
      'La elección del vehículo societario adecuado representa el primer paso para proteger el patrimonio y facilitar la gobernanza de la empresa. Las Sociedades de Responsabilidad Limitada (SRL) ofrecen simplicidad operativa y protección patrimonial idónea para negocios familiares y proyectos medianos, mientras que las Sociedades Anónimas Simplificadas (SAS) otorgan mayor flexibilidad estatutaria para asociaciones con múltiples inversionistas.',
      'En Lawcrest Legal Group asesoramos en la constitución ágil de entidades comerciales, redacción de pactos de accionistas y cumplimiento normativo integral ante las autoridades locales.',
    ],
    image: blogImgCorporate,
    image600: blogImgCorporate600,
  },
  {
    id: 'debida-diligencia-contratos-comerciales',
    category: 'Contratos & Estrategia',
    date: 'Septiembre 2026',
    readTime: '4 min de lectura',
    title: 'Mitigación de riesgos en contratos comerciales y acuerdos de desarrollo',
    excerpt:
      'Cómo diseñar contratos preventivos que anticipen escenarios de conflicto, definan mecanismos de resolución de disputas y resguarden el flujo de inversiones.',
    keyTakeaways: [
      'Definición precisa de hitos de cumplimiento y garantías de ejecución.',
      'Inclusión de cláusulas de fuerza mayor adaptadas a la realidad del mercado.',
      'Mecanismos ágiles de mediación y arbitraje para resolución efectiva de disputas.',
    ],
    content: [
      'Un contrato bien diseñado no debe redactarse pensando únicamente en la concreción del negocio, sino previendo con claridad los mecanismos de solución ante imprevistos o incumplimientos.',
      'En los acuerdos vinculados al desarrollo de proyectos, contrataciones de obra y alianzas estratégicas, la ambigüedad en los plazos, penalidades o condiciones resolutorias suele ser el detonante de litigios prolongados. La prevención legal permite ahorrar recursos y preservar las relaciones comerciales.',
      'Acompañamos a nuestros clientes en la redacción, análisis y negociación de instrumentos contractuales blindados, velando por que cada acuerdo refleje con exactitud la voluntad de las partes bajo estricto apego a la ley dominicana.',
    ],
    image: blogImgContracts,
    image600: blogImgContracts600,
  },
];

/** Devuelve un artículo por su slug (id) o `undefined` si no existe. */
export const getBlogPostById = (id: string): BlogPost | undefined =>
  BLOG_POSTS.find((post) => post.id === id);
