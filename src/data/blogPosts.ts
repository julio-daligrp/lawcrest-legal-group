import blogImgRealEstate from '@/src/assets/images/lawcrest_blog_real_estate_1791473791752.jpg';
import blogImgRealEstate600 from '@/src/assets/images/lawcrest_blog_real_estate-600.jpg';
import blogImgCorporate from '@/src/assets/images/lawcrest_blog_corporate_1791473820154.jpg';
import blogImgCorporate600 from '@/src/assets/images/lawcrest_blog_corporate-600.jpg';
import blogImgContracts from '@/src/assets/images/lawcrest_blog_contracts_1791473845675.jpg';
import blogImgContracts600 from '@/src/assets/images/lawcrest_blog_contracts-600.jpg';

export interface BlogPost {
  /** Identificador usado en la URL del artículo (slug). */
  id: string;
  /** Clave del diccionario para la categoría del artículo. */
  categoryKey: string;
  /** Clave del diccionario para la fecha de publicación. */
  dateKey: string;
  /** Clave del diccionario para el tiempo de lectura. */
  readTimeKey: string;
  /** Clave del diccionario para el título del artículo. */
  titleKey: string;
  /** Clave del diccionario para el extracto del artículo. */
  excerptKey: string;
  /** Claves del diccionario para los párrafos del artículo. */
  contentKeys: string[];
  /** Claves del diccionario para los aspectos clave del artículo. */
  keyTakeawaysKeys: string[];
  image: string;
  image600: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'adquisicion-inmobiliaria-punta-cana',
    categoryKey: 'blog.post.adquisicion-inmobiliaria-punta-cana.category',
    dateKey: 'blog.post.adquisicion-inmobiliaria-punta-cana.date',
    readTimeKey: 'blog.post.adquisicion-inmobiliaria-punta-cana.readTime',
    titleKey: 'blog.post.adquisicion-inmobiliaria-punta-cana.title',
    excerptKey: 'blog.post.adquisicion-inmobiliaria-punta-cana.excerpt',
    keyTakeawaysKeys: [
      'blog.post.adquisicion-inmobiliaria-punta-cana.takeaway1',
      'blog.post.adquisicion-inmobiliaria-punta-cana.takeaway2',
      'blog.post.adquisicion-inmobiliaria-punta-cana.takeaway3',
    ],
    contentKeys: [
      'blog.post.adquisicion-inmobiliaria-punta-cana.content1',
      'blog.post.adquisicion-inmobiliaria-punta-cana.content2',
      'blog.post.adquisicion-inmobiliaria-punta-cana.content3',
    ],
    image: blogImgRealEstate,
    image600: blogImgRealEstate600,
  },
  {
    id: 'inversion-extranjera-sociedades-rd',
    categoryKey: 'blog.post.inversion-extranjera-sociedades-rd.category',
    dateKey: 'blog.post.inversion-extranjera-sociedades-rd.date',
    readTimeKey: 'blog.post.inversion-extranjera-sociedades-rd.readTime',
    titleKey: 'blog.post.inversion-extranjera-sociedades-rd.title',
    excerptKey: 'blog.post.inversion-extranjera-sociedades-rd.excerpt',
    keyTakeawaysKeys: [
      'blog.post.inversion-extranjera-sociedades-rd.takeaway1',
      'blog.post.inversion-extranjera-sociedades-rd.takeaway2',
      'blog.post.inversion-extranjera-sociedades-rd.takeaway3',
    ],
    contentKeys: [
      'blog.post.inversion-extranjera-sociedades-rd.content1',
      'blog.post.inversion-extranjera-sociedades-rd.content2',
      'blog.post.inversion-extranjera-sociedades-rd.content3',
    ],
    image: blogImgCorporate,
    image600: blogImgCorporate600,
  },
  {
    id: 'debida-diligencia-contratos-comerciales',
    categoryKey: 'blog.post.debida-diligencia-contratos-comerciales.category',
    dateKey: 'blog.post.debida-diligencia-contratos-comerciales.date',
    readTimeKey: 'blog.post.debida-diligencia-contratos-comerciales.readTime',
    titleKey: 'blog.post.debida-diligencia-contratos-comerciales.title',
    excerptKey: 'blog.post.debida-diligencia-contratos-comerciales.excerpt',
    keyTakeawaysKeys: [
      'blog.post.debida-diligencia-contratos-comerciales.takeaway1',
      'blog.post.debida-diligencia-contratos-comerciales.takeaway2',
      'blog.post.debida-diligencia-contratos-comerciales.takeaway3',
    ],
    contentKeys: [
      'blog.post.debida-diligencia-contratos-comerciales.content1',
      'blog.post.debida-diligencia-contratos-comerciales.content2',
      'blog.post.debida-diligencia-contratos-comerciales.content3',
    ],
    image: blogImgContracts,
    image600: blogImgContracts600,
  },
];

/** Devuelve un artículo por su slug (id) o `undefined` si no existe. */
export const getBlogPostById = (id: string): BlogPost | undefined =>
  BLOG_POSTS.find((post) => post.id === id);
