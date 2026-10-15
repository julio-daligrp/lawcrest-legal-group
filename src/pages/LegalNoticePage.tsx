import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { ArrowRight } from 'lucide-react';
import {
  LegalArticle,
  LegalSection,
  LegalParagraph,
  LegalList,
} from '@/src/components/legal/LegalArticle';

/** Página de Aviso Legal: condiciones generales de uso del sitio. */
export const LegalNoticePage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Aviso Legal"
        description="Condiciones generales e información sobre el uso del sitio web de Lawcrest Legal Group."
        breadcrumb="Aviso Legal"
      />

      <LegalArticle lastUpdated="13 de octubre de 2026">
        <LegalSection title="1. Identificación del titular">
          <LegalParagraph>
            Lawcrest Legal Group es una firma legal boutique con sede en Bávaro–Punta Cana,
            República Dominicana, dedicada a la asesoría y representación jurídica de personas,
            empresas e inversionistas. El presente sitio web (en adelante, “el Sitio”) es operado
            por Lawcrest Legal Group.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="2. Contenido meramente informativo">
          <LegalParagraph>
            La información publicada en el Sitio —incluidos textos, artículos, criterios y
            materiales— tiene carácter general, educativo e informativo. No constituye asesoría
            legal, opinión jurídica, recomendación profesional ni ofrecimiento de servicios
            respecto de un caso concreto. Antes de adoptar decisiones con relevancia legal, le
            recomendamos contactar directamente con un abogado de la firma.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="3. No constituye relación abogado-cliente">
          <LegalParagraph>
            El acceso y uso del Sitio no crea entre el usuario y Lawcrest Legal Group una relación
            de abogado-cliente ni ninguna otra relación profesional. Del mismo modo, el envío de
            información mediante los formularios del Sitio no da lugar a dicha relación hasta que
            la firma evalúe el asunto, verifique posibles conflictos de interés y confirme
            formalmente la aceptación del encargo.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="4. Propiedad intelectual">
          <LegalParagraph>
            Todos los contenidos del Sitio —textos, gráficos, logotipos, iconografía, diseño y
            estructura— son titularidad de Lawcrest Legal Group o de sus licenciantes y están
            protegidos por las leyes de propiedad intelectual de la República Dominicana. Queda
            prohibida su reproducción, distribución o modificación, total o parcial, sin
            autorización previa y por escrito de la firma.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="5. Enlaces a terceros">
          <LegalParagraph>
            El Sitio puede contener enlaces o referencias a sitios web de terceros. Lawcrest Legal
            Group no controla ni asume responsabilidad alguna sobre el contenido, las políticas de
            privacidad o las prácticas de dichos sitios. La inclusión de un enlace no implica
            aprobación ni recomendación por parte de la firma.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="6. Limitación de responsabilidad">
          <LegalParagraph>
            Lawcrest Legal Group pone el máximo cuidado en la información publicada, pero no
            garantiza su exhaustividad, exactitud ni actualización en todo momento. La firma no
            será responsable por los daños o perjuicios derivados del uso de la información del
            Sitio, de la imposibilidad de acceso al mismo, ni de interrupciones o errores de
            carácter técnico.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="7. Legislación aplicable">
          <LegalParagraph>
            El presente Aviso Legal se rige por las leyes de la República Dominicana. Toda
            controversia relacionada con el uso del Sitio será sometida a la jurisdicción de los
            tribunales competentes de la República Dominicana.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="8. Actualización y contacto">
          <LegalParagraph>
            Lawcrest Legal Group puede modificar el presente Aviso Legal en cualquier momento; la
            versión vigente será la publicada en esta página. Para cualquier consulta relacionada
            con este aviso, puede ponerse en contacto con la firma a través de la página de
            contacto.
          </LegalParagraph>
          <LegalList items={['El contenido del Sitio no sustituye una consulta legal personalizada.']} />

          <div className="mt-8 pt-8 border-t border-[#062446]/10">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 font-sans font-medium text-xs sm:text-sm tracking-widest uppercase px-7 py-3.5 min-h-[46px] rounded-[2px] text-[#FFFFFF] bg-[#062446] border border-[#C89A32]/60 hover:border-[#D8B65A] hover:bg-[#031A39] transition-colors cursor-pointer group"
            >
              <span>Contactar a la firma</span>
              <ArrowRight className="w-4 h-4 text-[#D8B65A] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </LegalSection>
      </LegalArticle>
    </>
  );
};