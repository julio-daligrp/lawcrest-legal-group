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

/** Página de Confidencialidad: tratamiento de datos personales y privacidad. */
export const ConfidentialityPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Confidencialidad"
        description="Cómo recopilamos, utilizamos y protegemos la información personal que comparte con Lawcrest Legal Group."
        breadcrumb="Confidencialidad"
      />

      <LegalArticle lastUpdated="13 de octubre de 2026">
        <LegalSection title="1. Responsable del tratamiento">
          <LegalParagraph>
            Lawcrest Legal Group, firma legal boutique con sede en Bávaro–Punta Cana, República
            Dominicana, es responsable del tratamiento de los datos personales recopilados a
            través del Sitio, en los términos de la Ley No. 172-13 sobre Protección de Datos
            Personales de la República Dominicana y demás normativa aplicable.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="2. Datos que recopilamos">
          <LegalList
            items={[
              'Datos que usted nos proporciona: nombre completo, correo electrónico, teléfono, área de interés y el contenido del mensaje enviado mediante el formulario de contacto.',
              'Suscripción al boletín: correo electrónico cuando se suscribe al boletín legal informativo.',
              'Datos de navegación: información técnica básica, como tipo de dispositivo, navegador y páginas visitadas, con fines estadísticos y de mejora del Sitio.',
            ]}
          />
        </LegalSection>

        <LegalSection title="3. Finalidad del tratamiento">
          <LegalList
            items={[
              'Atender y responder sus consultas y solicitudes de información.',
              'Coordinar y prestar los servicios legales solicitados.',
              'Enviar información jurídica y novedades, únicamente cuando usted lo haya autorizado.',
              'Cumplir con obligaciones legales y proteger los intereses legítimos de la firma.',
            ]}
          />
        </LegalSection>

        <LegalSection title="4. Base legal">
          <LegalParagraph>
            El tratamiento se sustenta en su consentimiento, manifestado al completar los
            formularios del Sitio, así como en la ejecución de gestiones precontractuales o
            contractuales solicitadas por usted y en el cumplimiento de obligaciones legales
            aplicables.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="5. Confidencialidad profesional">
          <LegalParagraph>
            En virtud del secreto profesional, la información y documentación que comparta con la
            firma en el marco de una consulta o encargo será tratada con estricta confidencialidad
            y únicamente para las finalidades para las cuales fue aportada.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="6. Conservación de los datos">
          <LegalParagraph>
            Los datos personales serán conservados únicamente durante el tiempo necesario para
            cumplir las finalidades descritas o durante el plazo exigido por la legislación
            aplicable, tras lo cual serán eliminados o anonimizados.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="7. Derechos del interesado">
          <LegalParagraph>
            De conformidad con la Ley No. 172-13, usted puede ejercer los derechos de acceso,
            rectificación, cancelación o eliminación y oposición respecto de sus datos personales,
            así como solicitar información sobre el tratamiento realizado, escribiendo a la firma
            a través de la página de contacto e identificándose debidamente.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="8. Seguridad de la información">
          <LegalParagraph>
            Lawcrest Legal Group adopta medidas técnicas y organizativas adecuadas para proteger
            los datos personales frente a accesos no autorizados, pérdida, alteración o
            divulgación.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="9. Cambios y contacto">
          <LegalParagraph>
            Esta política puede ser actualizada periódicamente; la versión vigente será la
            publicada en esta página. Para cualquier consulta sobre el tratamiento de sus datos
            personales puede contactar a la firma a través de la página de contacto.
          </LegalParagraph>

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