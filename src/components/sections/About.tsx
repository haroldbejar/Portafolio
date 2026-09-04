import { Badge } from "../ui/Badge";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import { technologies } from "../../data/technologies";

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-[--color-bg-base] py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.06),_transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>SOBRE MÍ</SectionLabel>
          <SectionTitle>Experiencia técnica con mirada de negocio</SectionTitle>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_0.8fr_0.8fr]">
          <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(17,24,39,0.42)] p-6 md:p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[--color-accent-primary]">
              Apasionado por crear soluciones que conectan tecnología y negocio
            </p>
            <p className="text-base leading-8 text-[--color-text-secondary]">
              Desarrollador Full Stack con más de 9 años de experiencia creando
              aplicaciones web y sistemas empresariales a medida. Me especializo
              en construir soluciones completas que conectan tecnología y
              negocio, ayudando a empresas a alcanzar sus objetivos a través de
              software de calidad.
            </p>
            <div className="mt-8 flex items-end justify-between border-t border-[--border] pt-5">
              <span className="text-4xl font-bold tracking-[-0.06em] text-[--color-text-primary]">
                9+
              </span>
              <span className="max-w-24 text-right text-xs leading-5 text-[--color-text-secondary]">
                años creando productos digitales
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(17,24,39,0.28)] p-6">
            <h4 className="mb-5 text-sm font-semibold text-[--color-text-primary]">
              Tecnologías
            </h4>
            <div className="flex flex-wrap content-start gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(17,24,39,0.28)] p-6">
            <h4 className="mb-5 text-sm font-semibold text-[--color-text-primary]">
              Experiencia
            </h4>
            <ul className="space-y-4 text-sm text-[--color-text-secondary]">
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-1 flex-shrink-0 text-[--color-accent-primary]"
                >
                  <path d="M12 0l-5.129 15.386H9.056l.917-2.75 4.71 4.368 4.042-3.688 4.71 4.367h6.617l-.678 2.034-5.13-15.386zM7.918 5.7l-1.988 5.964 5.59 1.544-4.178 2.368 1.078 5.016H14.07l-4.04 2.368-1.078-5.016-4.178-2.368 5.59-1.544zm7.77 12.048H5.083l.625-1.428 1.755-5.065h2.96l1.755 5.065.625 1.428z" />
                </svg>
                <span>9+ años de experiencia</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-1 flex-shrink-0 text-[--color-accent-primary]"
                >
                  <path d="M9 18 L15 12 L9 6 L3 12 L9 18 Z" />
                </svg>
                <span>12+ proyectos completados</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-1 flex-shrink-0 text-[--color-accent-primary]"
                >
                  <path d="M9 18 L15 12 L9 6 L3 12 L9 18 Z" />
                </svg>
                <span>100% comprometido con la calidad</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
