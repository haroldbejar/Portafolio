import { services } from "../../data/services";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";

const serviceImages: Record<string, string> = {
  "1": "/images/services/web-enterprise.svg",
  "2": "/images/services/api-microservices.svg",
  "3": "/images/services/modernization.svg",
  "4": "/images/services/modern-frontend.svg",
  "5": "/images/services/databases.svg",
  "6": "/images/services/devops-cloud.svg",
};

const Services = () => {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[--color-bg-surface] py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,79,224,0.08),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>SERVICIOS</SectionLabel>
          <SectionTitle>
            Construyo la solución que tu negocio necesita
          </SectionTitle>
          <p className="max-w-xl text-base leading-7 text-[--color-text-secondary]">
            Desde la estrategia técnica hasta el despliegue, convierto problemas
            complejos en productos digitales claros, mantenibles y escalables.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(17,24,39,0.58)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(59,79,224,0.4)] hover:bg-[rgba(17,24,39,0.9)]"
            >
              <div className="relative aspect-[2.4/1] overflow-hidden border-b border-white/5 bg-[--color-bg-base]">
                <img
                  src={serviceImages[service.id]}
                  alt={`Referencia visual: ${service.title}`}
                  className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b111f] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[rgba(5,9,20,0.7)] text-xs font-bold text-[--color-accent-primary] backdrop-blur-sm">
                  0{service.id}
                </span>
                <span className="absolute bottom-3 right-4 text-xl font-light text-white/50 transition-colors group-hover:text-[--color-accent-primary]">
                  ↗
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-base font-semibold text-[--color-text-primary]">
                  {service.title}
                </h3>
                <p className="text-sm leading-6 text-[--color-text-secondary]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-[--border] pt-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-[--color-text-secondary]">
                ¿Tienes un proyecto en mente?
              </p>
              <p className="mt-1 text-lg font-semibold text-[--color-text-primary]">
                Empecemos con una conversación clara.
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[--color-text-secondary]">
                <span>Asesoría inicial</span>
                <span>Soluciones a medida</span>
                <span>Entregas iterativas</span>
              </div>
            </div>
            <Button
              variant="primary"
              className="w-auto"
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
