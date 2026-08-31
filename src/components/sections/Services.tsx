import { services } from "../../data/services";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-[--color-bg-surface]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionLabel>SERVICIOS</SectionLabel>
        <SectionTitle>Lo que ofrezco</SectionTitle>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-4 rounded-xl bg-[--color-bg-surface-alt] transition-colors hover:bg-[--color-bg-surface]"
            >
              <div className="w-12 h-12 rounded bg-[--color-bg-surface] flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[--color-accent-primary]"
                >
                  <path d="M12 0l-5.129 15.386H9.056l.917-2.75 4.71 4.368 4.042-3.688 4.71 4.367h6.617l-.678 2.034-5.13-15.386zM7.918 5.7l-1.988 5.964 5.59 1.544-4.178 2.368 1.078 5.016H14.07l-4.04 2.368-1.078-5.016-4.178-2.368 5.59-1.544zm7.77 12.048H5.083l.625-1.428 1.755-5.065h2.96l1.755 5.065.625 1.428z" />
                </svg>
              </div>
              <h3 className="text-[--color-text-primary] font-semibold text-sm mb-2">
                {service.title}
              </h3>
              <p className="text-[--color-text-secondary] text-xs leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-[--border]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[--color-text-secondary] text-sm">
                ¿Tienes un proyecto en mente?
              </p>
              <p className="text-[--color-text-primary] font-medium text-sm">
                Checklist:
              </p>
              <ul className="text-[--color-text-secondary] text-xs space-y-1">
                <li className="flex items-start gap-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path d="M9 18 L15 12 L9 6 L3 12 L9 18 Z" />
                  </svg>
                  <span>Asesoría gratuita</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path d="M9 18 L15 12 L9 6 L3 12 L9 18 Z" />
                  </svg>
                  <span>Soluciones a la medida</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path d="M9 18 L15 12 L9 6 L3 12 L9 18 Z" />
                  </svg>
                  <span>Entregas iterativas</span>
                </li>
              </ul>
            </div>
            <Button
              variant="primary"
              className="pt-2 pb-3 w-auto"
              onClick={() => (window.location.href = "#contacto")}
            >
              Hablemos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
