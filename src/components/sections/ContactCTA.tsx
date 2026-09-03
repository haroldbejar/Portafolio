import { Button } from "../ui/Button";
import Container from "../layout/Container";
import { contact } from "../../data/contact";

const ContactCTA = () => {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[--color-bg-surface-alt] py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,79,224,0.2),_transparent_38%)]" />
      <Container>
        <div className="relative grid items-center gap-10 rounded-3xl border border-[rgba(255,255,255,0.1)] bg-[rgba(5,9,20,0.42)] p-6 md:grid-cols-[1.35fr_0.65fr] md:p-10">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[--color-accent-primary]">
              CONTACTO
            </p>
            <h2 className="mb-5 max-w-xl text-3xl font-bold leading-tight tracking-[-0.05em] text-[--color-text-primary] md:text-4xl">
              ¿Tienes una idea? Hagámosla realidad.
            </h2>
            <p className="mb-8 max-w-lg text-base leading-7 text-[--color-text-secondary]">
              Te ayudaré a transformar tus ideas en soluciones de software de
              calidad. Conversemos sobre tu proyecto.
            </p>

            <ul className="grid gap-4 sm:grid-cols-3">
              <li className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[--color-accent-primary] flex-shrink-0 mt-1"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm font-medium text-[--color-text-primary]">
                  Asesoría gratuita
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[--color-accent-primary] flex-shrink-0 mt-1"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm font-medium text-[--color-text-primary]">
                  Soluciones a la medida
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[--color-accent-primary] flex-shrink-0 mt-1"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm font-medium text-[--color-text-primary]">
                  Entregas iterativas
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <span className="text-xs text-[--color-text-secondary]">
              Respuesta inicial en 24-48 horas
            </span>
            <Button
              variant="primary"
              className="w-full text-base md:w-auto"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent("Consulta sobre desarrollo de software")}&body=${encodeURIComponent("Hola Harold, me gustaría conversar sobre un proyecto de software.")}`}
            >
              Hablemos de tu proyecto
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
