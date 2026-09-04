import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[--color-bg-base] pb-16 pt-14 md:pb-20 md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,79,224,0.16),_transparent_32%)]" />

      <Container className="relative">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionLabel>HOLA, SOY HAROLD</SectionLabel>

            <h1 className="mb-6 max-w-xl text-4xl font-black leading-[0.96] tracking-[-0.06em] text-[--color-text-primary] md:text-5xl lg:text-6xl">
              Desarrollo software que convierte ideas en resultados reales.
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-8 text-[--color-text-secondary]">
              Desarrollador Full Stack con más de 9 años de experiencia creando
              plataformas web, sistemas empresariales y soluciones escalables
              para negocios que quieren crecer con tecnología.
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              <Badge className="text-xs">.NET 9</Badge>
              <Badge className="text-xs">React</Badge>
              <Badge className="text-xs">TypeScript</Badge>
              <Badge className="text-xs">SQL Server</Badge>
              <Badge className="text-xs">MySQL</Badge>
              <Badge className="text-xs">Docker</Badge>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" href="/proyectos">
                Ver mis proyectos
              </Button>
              <Button variant="secondary" href="/#contacto">
                Hablemos de tu proyecto
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-12 top-10 h-28 w-28 rounded-full bg-[--accent-primary]/20 blur-3xl" />
            <div className="absolute -right-8 bottom-6 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-[rgba(148,163,184,0.18)] bg-[linear-gradient(180deg,_rgba(17,24,39,0.9),_rgba(8,12,20,0.96))] p-3 shadow-[0_30px_80px_rgba(15,23,42,0.9)]">
              <PlaceholderImage
                src="/images/hero/hero-developer.jfif"
                alt="Harold Bejarano - Desarrollador Full Stack"
                aspectRatio="4-3"
                className="rounded-[22px] border border-white/5"
              />

              <div className="absolute left-8 top-8 rounded-2xl border border-white/10 bg-[rgba(10,14,22,0.8)] px-4 py-3 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[--color-text-secondary]">
                  Experiencia
                </p>
                <p className="mt-2 text-2xl font-bold tracking-[-0.06em] text-white">
                  9+ años
                </p>
              </div>

              <div className="absolute bottom-8 right-8 w-52 rounded-2xl border border-white/10 bg-[rgba(10,14,22,0.82)] p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[--color-text-secondary]">
                    Proyectos
                  </span>
                  <span className="rounded-full bg-[rgba(59,79,224,0.18)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[--color-accent-primary]">
                    12+
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                  <span className="text-[--color-text-secondary]">Enfoque</span>
                  <span className="font-semibold text-white">Full Stack</span>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-[--color-accent-primary]/15 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
