import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { BLOG_POSTS } from '@/src/data/blogPosts';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <section
      id="blog"
      aria-label="Artículos y Actualidad Jurídica - Lawcrest Legal Group"
      className="relative w-full bg-[#FFFFFF] text-[#062446] py-20 sm:py-24 lg:py-28 border-b border-[#062446]/8 scroll-mt-20 overflow-hidden"
    >
      <Container size="default">
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
            <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#173C68] uppercase">
              ACTUALIDAD JURÍDICA & CRITERIOS
            </span>
          </div>

          <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[44px] leading-[1.16] tracking-tight mb-4 [text-wrap:balance]">
            Análisis y perspectivas legales para decisiones informadas
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal">
            Compartimos criterios jurídicos sobre el entorno inmobiliario, corporativo y de inversión en República Dominicana.
          </p>
        </div>

        {/* CUADRÍCULA DE ARTÍCULOS (Sin marcos decorativos, fotos limpias de alta resolución) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-[#F7F7F5] border border-[#062446]/10 flex flex-col justify-between group hover:border-[#C89A32]/60 transition-colors duration-200 shadow-2xs hover:shadow-xs"
            >
              <div>
                {/* Imagen del artículo: limpia y sin marcos */}
                <Link
                  to={`/blog/${post.id}`}
                  className="relative block overflow-hidden aspect-[16/9] w-full bg-[#031A39]"
                  aria-label={`Leer artículo: ${post.title}`}
                >
                  <img
                    src={post.image}
                    srcSet={`${post.image600} 600w, ${post.image} 1200w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 bg-[#062446]/90 text-[10px] font-sans font-semibold tracking-widest text-[#D8B65A] uppercase">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Contenido del artículo */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-[11px] font-sans text-[#062446]/60 mb-3 select-none">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C89A32]" />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C89A32]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#062446] tracking-tight mb-3 group-hover:text-[#C89A32] transition-colors duration-200 leading-snug">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#062446]/75 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Botón de lectura */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-wider text-[#062446] uppercase group-hover:text-[#C89A32] transition-colors duration-200 cursor-pointer"
                >
                  <span>Leer artículo</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
