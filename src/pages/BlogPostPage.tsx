import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { BLOG_POSTS, getBlogPostById } from '@/src/data/blogPosts';
import { useDocumentTitle } from '@/src/hooks/useDocumentTitle';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import { ChevronRight, ArrowLeft, ArrowRight, Calendar, Clock, Bookmark } from 'lucide-react';

/** Página de un artículo del blog (/blog/:slug). */
export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostById(slug) : undefined;

  useDocumentTitle(
    post ? `${post.title} | Lawcrest Legal Group` : 'Artículo no encontrado | Lawcrest Legal Group',
  );

  const whatsappHref = WHATSAPP_CONFIG.getUrl();
  const isExternalWhatsapp = whatsappHref.startsWith('http');
  const contactHref = isExternalWhatsapp
    ? whatsappHref
    : whatsappHref.startsWith('#')
      ? '/contacto'
      : whatsappHref;

  if (!post) {
    return (
      <section
        aria-label="Artículo no encontrado"
        className="relative w-full bg-[#F7F7F5] text-[#062446] min-h-[60vh] flex items-center py-24 sm:py-32"
      >
        <Container size="narrow" className="text-center">
          <span className="font-serif text-[#C89A32] text-5xl sm:text-6xl leading-none block mb-6 select-none">
            404
          </span>
          <h1 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl leading-tight tracking-tight mb-4 [text-wrap:balance]">
            No encontramos este artículo
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#062446]/70 leading-relaxed max-w-lg mx-auto mb-10">
            El artículo que busca no existe o pudo haber cambiado de dirección.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center gap-2 font-sans font-medium text-xs sm:text-sm tracking-widest uppercase px-7 py-3.5 min-h-[46px] rounded-[2px] text-[#FFFFFF] bg-[#062446] border border-[#C89A32]/60 hover:border-[#D8B65A] hover:bg-[#031A39] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al blog</span>
          </Link>
        </Container>
      </section>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((item) => item.id !== post.id);

  return (
    <article>
      {/* ENCABEZADO DEL ARTÍCULO */}
      <header
        aria-label={`${post.title} - Lawcrest Legal Group`}
        className="relative w-full bg-[#031A39] text-[#FFFFFF] pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 border-b border-[#173C68] overflow-hidden"
      >
        <div
          className="pointer-events-none absolute -top-32 right-0 w-[560px] h-[560px] rounded-full bg-[#C89A32]/6 blur-3xl"
          aria-hidden="true"
        />

        <Container size="default" className="relative z-10">
          {/* Ruta de navegación */}
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center flex-wrap gap-2 text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-white/50 mb-6"
          >
            <Link to="/" className="hover:text-[#D8B65A] transition-colors duration-200">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C89A32] shrink-0" aria-hidden="true" />
            <Link to="/blog" className="hover:text-[#D8B65A] transition-colors duration-200">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C89A32] shrink-0" aria-hidden="true" />
            <span className="text-[#D8B65A]">{post.category}</span>
          </nav>

          {/* Metadatos */}
          <div className="flex items-center flex-wrap gap-4 text-[11px] sm:text-xs font-sans text-white/70 mb-5">
            <span className="inline-block px-2.5 py-1 bg-[#062446]/70 border border-[#C89A32]/40 text-[10px] font-semibold tracking-widest text-[#D8B65A] uppercase">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C89A32]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C89A32]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif font-normal text-white text-3xl sm:text-4xl lg:text-[50px] leading-[1.14] tracking-tight mb-5 max-w-4xl [text-wrap:balance]">
            {post.title}
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl italic">
            {post.excerpt}
          </p>
        </Container>
      </header>

      {/* CUERPO DEL ARTÍCULO */}
      <div className="relative w-full bg-[#FFFFFF] text-[#062446] py-12 sm:py-16 lg:py-20">
        <Container size="narrow">
          {/* Imagen principal */}
          <div className="relative overflow-hidden aspect-[16/9] w-full mb-10 sm:mb-12 bg-[#031A39]">
            <img
              src={post.image}
              srcSet={`${post.image600} 600w, ${post.image} 1200w`}
              sizes="(max-width: 1024px) 100vw, 896px"
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Aspectos clave */}
          <div className="p-5 sm:p-6 bg-[#F7F7F5] border-l-2 border-l-[#C89A32] mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Bookmark className="w-4 h-4 text-[#C89A32]" />
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[#062446]">
                Aspectos Clave a Considerar
              </span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#062446]/80">
              {post.keyTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C89A32] font-bold leading-none mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contenido */}
          <div className="space-y-5 font-sans text-sm sm:text-base text-[#062446]/85 leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Llamado a la acción */}
          <div className="mt-12 p-5 sm:p-6 border-t border-[#062446]/10 bg-[#F7F7F5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="block font-serif text-base sm:text-lg text-[#062446] font-medium">
                ¿Desea asesoría legal sobre este tema?
              </span>
              <span className="block font-sans text-xs text-[#062446]/60 mt-0.5">
                Lawcrest Legal Group · Bávaro · Punta Cana
              </span>
            </div>
            {isExternalWhatsapp ? (
              <a
                href={contactHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-sans font-semibold text-xs tracking-wider uppercase px-6 py-3 bg-[#062446] text-white hover:bg-[#031A39] border border-[#C89A32] transition-colors cursor-pointer text-center"
              >
                Consultar sobre este caso
              </a>
            ) : (
              <Link
                to={contactHref}
                className="inline-flex items-center justify-center font-sans font-semibold text-xs tracking-wider uppercase px-6 py-3 bg-[#062446] text-white hover:bg-[#031A39] border border-[#C89A32] transition-colors cursor-pointer text-center"
              >
                Consultar sobre este caso
              </Link>
            )}
          </div>

          {/* Volver */}
          <div className="mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-wider text-[#062446] uppercase hover:text-[#C89A32] transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al blog</span>
            </Link>
          </div>
        </Container>
      </div>

      {/* ARTÍCULOS RELACIONADOS */}
      {relatedPosts.length > 0 && (
        <section
          aria-label="Otros artículos del blog"
          className="relative w-full bg-[#F7F7F5] text-[#062446] py-16 sm:py-20 border-t border-[#062446]/8"
        >
          <Container size="default">
            <div className="flex items-center gap-2.5 mb-8">
              <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
              <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#173C68] uppercase">
                OTROS ARTÍCULOS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.id}`}
                  className="group flex flex-col sm:flex-row gap-5 bg-[#FFFFFF] border border-[#062446]/10 hover:border-[#C89A32]/60 transition-colors duration-200 p-5"
                >
                  <div className="relative overflow-hidden aspect-[16/9] sm:aspect-square sm:w-40 shrink-0 bg-[#031A39]">
                    <img
                      src={item.image600}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-sans font-semibold tracking-widest text-[#C89A32] uppercase mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#062446] tracking-tight mb-2 group-hover:text-[#C89A32] transition-colors duration-200 leading-snug">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-wider text-[#062446] uppercase">
                      Leer artículo
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
};
