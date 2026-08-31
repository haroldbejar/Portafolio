import { Badge } from "../ui/Badge";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { technologies } from "../../data/technologies";

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-[--color-bg-base]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionLabel>SOBRE MÍ</SectionLabel>
        <SectionTitle>Harold Bejarano</SectionTitle>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          <div>
            <p className="text-[--color-text-secondary] text-sm uppercase tracking-wider mb-4">
              Apasionado por crear soluciones que conectan tecnología y negocio
            </p>
            <p className="text-[--color-text-secondary] text-lg leading-relaxed">
              Desarrollador Full Stack con más de 9 años de experiencia creando
              aplicaciones web y sistemas empresariales a medida. Me especializo
              en construir soluciones completas que conectan tecnología y
              negocio, ayudando a empresas a alcanzar sus objetivos a través de
              software de calidad.
            </p>
            <Button variant="secondary" className="mt-6">
              Conoce más sobre mí
            </Button>
          </div>

          <div>
            <h4 className="text-[--color-text-primary] font-semibold text-sm mb-4">
              Tecnologías
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[--color-text-primary] font-semibold text-sm mb-4">
              Experiencia
            </h4>
            <ul className="text-[--color-text-secondary] text-sm space-y-2">
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-1 flex-shrink-0"
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
                  className="mt-1 flex-shrink-0"
                >
                  <path d="M9 18 L15 12 L9 6 L3 12 L9 18 Z" />
                </svg>
                <span>20+ proyectos completados</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-1 flex-shrink-0"
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
