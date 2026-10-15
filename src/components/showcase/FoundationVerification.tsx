import React, { useState } from 'react';
import {
  Container,
  Section,
  Heading,
  Text,
  Button,
  Divider,
  Grid,
} from '@/src/components/ui';
import { COLORS } from '@/src/theme/tokens';

export const FoundationVerification: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [lastClicked, setLastClicked] = useState<string>('Ninguno');

  const handleButtonClick = (name: string) => {
    setClickCount((prev) => prev + 1);
    setLastClicked(name);
  };

  return (
    <main id="inicio" className="min-h-screen bg-[#F7F7F5] text-[#062446] font-sans">
      {/* Top Identification Bar - Minimal System Tag */}
      <div className="border-b border-[#062446]/10 bg-[#FFFFFF] py-4 px-4 sm:px-8">
        <Container size="default">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base text-[#062446] tracking-wider">
                LAWCREST LEGAL GROUP
              </span>
              <span className="text-[#062446]/40">|</span>
              <span className="text-[#062446]/70 uppercase tracking-widest text-[11px]">
                Bávaro–Punta Cana
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#062446]/60">
              <span className="inline-block w-2 h-2 rounded-full bg-[#C89A32]" />
              <span className="font-medium text-[11px] tracking-wide">
                Fase 2: Header Oficial & Sistema de Navegación
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Verification Container */}
      <Section variant="warm-white" spacing="md">
        <Container size="default">
          {/* Header of Test Screen */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <Text variant="caption" color="gold" className="mb-2">
              Arquitectura Base del Proyecto
            </Text>
            <Heading level="h1" variant="navy-deep" hasAccentBar className="mb-4">
              Header & Sistema Base de Diseño
            </Heading>
            <Text variant="lead" color="secondary" className="mt-4">
              Header oficial de Lawcrest Legal Group integrado sobre el sistema base.
              Pruebe el comportamiento sticky haciendo scroll, la navegación en desktop y móvil, y las transiciones doradas.
            </Text>
          </div>

          <Divider variant="subtle" />

          {/* Identidad Cromática */}
          <div id="prueba-colores" className="my-12 sm:my-16 scroll-mt-28">
            <div className="mb-6">
              <Text variant="caption" color="gold" className="mb-1">
                Identidad Cromática
              </Text>
              <Heading level="h3" variant="navy-main">
                Paleta de Colores Oficial
              </Heading>
              <Text variant="small" color="muted" className="mt-1">
                Azules marinos predominantes con acentos dorados exclusivos y neutros cálidos.
              </Text>
            </div>

            <Grid cols={3} gap="md">
              {/* Azules */}
              <div className="bg-[#FFFFFF] p-5 border border-[#062446]/10 rounded-[2px] shadow-xs">
                <Text variant="caption" color="muted" className="mb-3">
                  Azules Predominantes
                </Text>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-[2px] border border-[#062446]/20 shadow-inner shrink-0"
                      style={{ backgroundColor: COLORS.navy.main }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#062446]">Azul Marino Principal</p>
                      <p className="text-xs font-mono text-[#062446]/70">#062446</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-[2px] border border-[#062446]/20 shadow-inner shrink-0"
                      style={{ backgroundColor: COLORS.navy.deep }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#062446]">Azul Profundo</p>
                      <p className="text-xs font-mono text-[#062446]/70">#031A39</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-[2px] border border-[#062446]/20 shadow-inner shrink-0"
                      style={{ backgroundColor: COLORS.navy.secondary }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#062446]">Azul Secundario</p>
                      <p className="text-xs font-mono text-[#062446]/70">#173C68</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dorados */}
              <div className="bg-[#FFFFFF] p-5 border border-[#062446]/10 rounded-[2px] shadow-xs">
                <Text variant="caption" color="gold" className="mb-3">
                  Dorados (Solo Acentos)
                </Text>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-[2px] border border-[#062446]/10 shadow-inner shrink-0"
                      style={{ backgroundColor: COLORS.gold.main }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#062446]">Dorado Principal</p>
                      <p className="text-xs font-mono text-[#062446]/70">#C89A32</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-[2px] border border-[#062446]/10 shadow-inner shrink-0"
                      style={{ backgroundColor: COLORS.gold.secondary }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#062446]">Dorado Secundario</p>
                      <p className="text-xs font-mono text-[#062446]/70">#D8B65A</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neutros */}
              <div className="bg-[#FFFFFF] p-5 border border-[#062446]/10 rounded-[2px] shadow-xs">
                <Text variant="caption" color="muted" className="mb-3">
                  Neutros Base
                </Text>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-[2px] border border-[#062446]/15 shadow-inner shrink-0"
                      style={{ backgroundColor: COLORS.neutral.warmWhite }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#062446]">Blanco Cálido</p>
                      <p className="text-xs font-mono text-[#062446]/70">#F7F7F5</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-[2px] border border-[#062446]/15 shadow-inner shrink-0"
                      style={{ backgroundColor: COLORS.neutral.white }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#062446]">Blanco Puro</p>
                      <p className="text-xs font-mono text-[#062446]/70">#FFFFFF</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </div>

          <Divider variant="subtle" />

          {/* Test 2: Tipografía */}
          <div id="prueba-tipografia" className="my-12 sm:my-16 scroll-mt-28">
            <div className="mb-6">
              <Text variant="caption" color="gold" className="mb-1">
                Tipografía Institucional
              </Text>
              <Heading level="h3" variant="navy-main">
                Jerarquía Tipográfica
              </Heading>
              <Text variant="small" color="muted" className="mt-1">
                Combinación dual: Serif editorial (Cormorant Garamond) para títulos + Sans-serif moderna (Plus Jakarta Sans) para textos.
              </Text>
            </div>

            <div className="bg-[#FFFFFF] p-6 sm:p-8 border border-[#062446]/10 rounded-[2px] space-y-6">
              <div className="border-b border-[#062446]/10 pb-4">
                <span className="text-[11px] font-mono text-[#062446]/50 uppercase tracking-widest block mb-1">
                  H1 / Display Serif (Cormorant Garamond)
                </span>
                <Heading level="h1" variant="navy-deep">
                  Seguridad Jurídica y Excelencia Corporativa
                </Heading>
              </div>

              <div className="border-b border-[#062446]/10 pb-4">
                <span className="text-[11px] font-mono text-[#062446]/50 uppercase tracking-widest block mb-1">
                  H2 / Título de Sección
                </span>
                <Heading level="h2" variant="navy-main">
                  Firma Legal Boutique en República Dominicana
                </Heading>
              </div>

              <div className="border-b border-[#062446]/10 pb-4">
                <span className="text-[11px] font-mono text-[#062446]/50 uppercase tracking-widest block mb-1">
                  H3 / Subtítulo Destacado
                </span>
                <Heading level="h3" variant="navy-main">
                  Asesoría Estratégica para Inversionistas y Empresas
                </Heading>
              </div>

              <div className="border-b border-[#062446]/10 pb-4">
                <span className="text-[11px] font-mono text-[#062446]/50 uppercase tracking-widest block mb-1">
                  Body Lead / Sans-serif (Plus Jakarta Sans)
                </span>
                <Text variant="lead" color="secondary">
                  Texto de introducción o destacado con espaciado generoso, legibilidad óptima y tono sobrio y profesional.
                </Text>
              </div>

              <div className="border-b border-[#062446]/10 pb-4">
                <span className="text-[11px] font-mono text-[#062446]/50 uppercase tracking-widest block mb-1">
                  Body Standard / Sans-serif
                </span>
                <Text variant="body" color="primary">
                  Cuerpo de texto estándar diseñado con ritmo vertical preciso. Cumple estrictamente con los estándares de contraste y confort visual en pantallas de alta densidad.
                </Text>
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#062446]/50 uppercase tracking-widest block mb-1">
                  Small & Caption Text
                </span>
                <div className="flex flex-wrap items-center gap-6">
                  <Text variant="small" color="muted">
                    Texto complementario, notas legales y referencias.
                  </Text>
                  <Text variant="caption" color="gold">
                    Etiqueta de navegación / Categoría
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <Divider variant="subtle" />

          {/* Test 3: Botones Base */}
          <div id="prueba-botones" className="my-12 sm:my-16 scroll-mt-28">
            <div className="mb-6">
              <Text variant="caption" color="gold" className="mb-1">
                Componentes Interactivos
              </Text>
              <Heading level="h3" variant="navy-main">
                Botones Base y Estados Interactivos
              </Heading>
              <Text variant="small" color="muted" className="mt-1">
                Estilo Primary (azul marino con detalle dorado) y Secondary (transparente con borde dorado), sin redondez excesiva.
              </Text>
            </div>

            <div className="space-y-6">
              {/* Botones sobre fondo claro */}
              <div className="bg-[#FFFFFF] p-6 sm:p-8 border border-[#062446]/10 rounded-[2px]">
                <Text variant="caption" color="muted" className="mb-4">
                  Variantes en Fondo Claro (Superficie Estándar)
                </Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleButtonClick('Primary (Medium)')}
                  >
                    Botón Primary
                  </Button>

                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => handleButtonClick('Secondary (Medium)')}
                  >
                    Botón Secondary
                  </Button>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleButtonClick('Primary (Small)')}
                  >
                    Primary Pequeño
                  </Button>

                  <Button
                    variant="ghost"
                    size="md"
                    onClick={() => handleButtonClick('Ghost')}
                  >
                    Acción Ghost
                  </Button>
                </div>
              </div>

              {/* Botones sobre fondo oscuro (Azul Profundo) */}
              <div className="bg-[#031A39] p-6 sm:p-8 rounded-[2px] border border-[#173C68]">
                <Text variant="caption" className="text-[#D8B65A] mb-4">
                  Variantes en Fondo Oscuro (Azul Profundo #031A39)
                </Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    className="border-[#C89A32]"
                    onClick={() => handleButtonClick('Primary Dark Canvas')}
                  >
                    Botón en Superficie Oscura
                  </Button>

                  <Button
                    variant="outline-on-dark"
                    size="md"
                    onClick={() => handleButtonClick('Outline on Dark')}
                  >
                    Borde Dorado Secundario
                  </Button>
                </div>
              </div>

              {/* Interactive State Feedback Monitor */}
              <div className="p-4 bg-[#FFFFFF] border border-[#C89A32]/30 rounded-[2px] flex items-center justify-between text-xs">
                <span className="text-[#062446]/80">
                  Estado de interacción:&nbsp;
                  <strong className="text-[#062446]">{lastClicked}</strong>
                </span>
                <span className="font-mono text-[#C89A32] font-semibold">
                  Clicks registrados: {clickCount}
                </span>
              </div>
            </div>
          </div>

          <Divider variant="subtle" />

          {/* Sistema Responsive, Container y Espaciado */}
          <div id="prueba-responsive" className="my-12 sm:my-16 scroll-mt-28">
            <div className="mb-6">
              <Text variant="caption" color="gold" className="mb-1">
                Arquitectura Responsive
              </Text>
              <Heading level="h3" variant="navy-main">
                Sistema Responsive, Contenedor y Espaciado
              </Heading>
              <Text variant="small" color="muted" className="mt-1">
                El grid adapta columnas fluidamente de 1 columna en móvil a 2 en tablet y 4 en desktop. Margen y ancho máximo limitados a 1240px.
              </Text>
            </div>

            <Grid cols={4} gap="md">
              <div className="bg-[#FFFFFF] p-5 border border-[#062446]/10 rounded-[2px]">
                <span className="text-xs font-mono text-[#C89A32] font-semibold block mb-1">
                  Móvil
                </span>
                <p className="text-sm font-medium text-[#062446]">Vista Móvil</p>
                <p className="text-xs text-[#062446]/60 mt-1">
                  Se apila verticalmente a pantalla completa con márgenes seguros.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-5 border border-[#062446]/10 rounded-[2px]">
                <span className="text-xs font-mono text-[#C89A32] font-semibold block mb-1">
                  Tablet
                </span>
                <p className="text-sm font-medium text-[#062446]">Vista Tablet</p>
                <p className="text-xs text-[#062446]/60 mt-1">
                  Breakpoint md: divide en 2 columnas proporcionadas.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-5 border border-[#062446]/10 rounded-[2px]">
                <span className="text-xs font-mono text-[#C89A32] font-semibold block mb-1">
                  Desktop
                </span>
                <p className="text-sm font-medium text-[#062446]">Vista Desktop</p>
                <p className="text-xs text-[#062446]/60 mt-1">
                  Breakpoint lg: divide en 4 columnas con gutter armónico.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-5 border border-[#062446]/10 rounded-[2px]">
                <span className="text-xs font-mono text-[#C89A32] font-semibold block mb-1">
                  Contenedor
                </span>
                <p className="text-sm font-medium text-[#062446]">Max-Width 1240px</p>
                <p className="text-xs text-[#062446]/60 mt-1">
                  Contenedor centrado sin desbordes horizontales.
                </p>
              </div>
            </Grid>
          </div>

          {/* Technical Readiness Confirmation Card */}
          <div id="contacto" className="mt-16 p-6 sm:p-8 bg-[#062446] text-[#FFFFFF] rounded-[2px] border border-[#C89A32]/40 scroll-mt-28">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-xs tracking-widest uppercase text-[#D8B65A] block mb-1 font-medium">
                  Estado de la Base del Proyecto
                </span>
                <h4 className="text-lg sm:text-xl font-serif text-white">
                  Base visual, técnica y componentes listos para construir secciones
                </h4>
                <p className="text-xs sm:text-sm text-white/70 mt-1 font-sans">
                  No se han generado secciones de contenido anticipadas (Header, Hero, Servicios o Footer permanecen deshabilitados según las instrucciones).
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#031A39] border border-[#C89A32]/60 text-xs font-mono text-[#D8B65A] rounded-[2px]">
                  <span className="w-2 h-2 rounded-full bg-[#C89A32] animate-pulse" />
                  Base Configurada
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};
