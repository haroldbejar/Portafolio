import { Button } from "../ui/Button";
import Container from "../layout/Container";

const ContactCTA = () => {
  return (
    <section id="contacto" className="py-20 bg-[--color-bg-surface-alt]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contenido - Izquierda */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-text-primary] mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-[--color-text-secondary] text-lg mb-8">
              Te ayudaré a transformar tus ideas en soluciones de software de
              calidad. Conversemos sobre tu proyecto.
            </p>

            {/* Checklist */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[--color-accent-primary] flex-shrink-0 mt-1"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[--color-text-primary] font-medium">
                  Asesoría gratuita
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[--color-accent-primary] flex-shrink-0 mt-1"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[--color-text-primary] font-medium">
                  Soluciones a la medida
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[--color-accent-primary] flex-shrink-0 mt-1"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[--color-text-primary] font-medium">
                  Entregas iterativas
                </span>
              </li>
            </ul>
          </div>

          {/* Botón - Derecha */}
          <div className="flex items-center justify-center md:justify-end">
            <Button
              variant="primary"
              className="text-lg px-8 py-4"
              onClick={() =>
                (window.location.href = "mailto:harold@bejarano.dev")
              }
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
