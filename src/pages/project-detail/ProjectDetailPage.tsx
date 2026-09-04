import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../../components/ui/Badge";

import { SectionLabel } from "../../components/ui/SectionLabel";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { PlaceholderImage } from "../../components/ui/PlaceholderImage";
import { projects } from "../../data/projects";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projectIndex >= 0 ? projects[projectIndex] : null;

  useEffect(() => {
    document.title = project
      ? `${project.title} | Harold Bejarano`
      : "Proyecto no encontrado | Harold Bejarano";
  }, [project]);

  if (!project) {
    return <div className="p-8 text-center">Proyecto no encontrado</div>;
  }

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex >= 0 && projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  return (
    <section className="relative overflow-hidden bg-[--color-bg-base] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,79,224,0.1),_transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/proyectos"
            className="inline-flex min-h-11 items-center text-sm text-[--color-text-secondary] hover:text-[--color-accent-primary]"
          >
            <span aria-hidden="true">←</span>&nbsp; Volver a proyectos
          </Link>

          <div className="flex flex-wrap gap-3">
            {previousProject && (
              <Link
                to={`/proyectos/${previousProject.slug}`}
                className="inline-flex min-h-11 items-center text-sm text-[--color-text-secondary] hover:text-[--color-accent-primary]"
              >
                Proyecto anterior
              </Link>
            )}
            {nextProject && (
              <Link
                to={`/proyectos/${nextProject.slug}`}
                className="inline-flex min-h-11 items-center text-sm text-[--color-text-secondary] hover:text-[--color-accent-primary]"
              >
                Siguiente proyecto →
              </Link>
            )}
          </div>
        </div>

        <SectionLabel>CASO DE ESTUDIO</SectionLabel>
        <SectionTitle>{project.title}</SectionTitle>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <PlaceholderImage
              src={project.coverImage}
              alt={project.title}
              aspectRatio="16-10"
              className="aspect-[16/10] rounded-xl"
            />

            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[--color-text-primary]">
                  Galería
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.gallery.map((image, index) => (
                    <PlaceholderImage
                      key={`${project.slug}-gallery-${index}`}
                      src={image}
                      alt={`${project.title} vista ${index + 1}`}
                      aspectRatio="4-3"
                      className="rounded-xl"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <p className="mb-4 text-sm uppercase tracking-[0.16em] text-[--color-accent-primary]">
              {project.shortDescription}
            </p>

            <div>
              <h3 className="mb-4 text-2xl font-bold tracking-[-0.04em] text-[--color-text-primary]">
                Descripción
              </h3>
              <p className="text-[--color-text-secondary] leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.problem && (
              <div className="mb-6">
                <h4 className="text-[--color-text-primary] font-semibold mb-3">
                  Problema
                </h4>
                <p className="text-[--color-text-secondary]">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div>
                <h4 className="text-[--color-text-primary] font-semibold mb-3">
                  Solución
                </h4>
                <p className="text-[--color-text-secondary]">
                  {project.solution}
                </p>
              </div>
            )}

            <div>
              <h4 className="text-[--color-text-primary] font-semibold mb-3">
                Características
              </h4>
              <ul className="text-[--color-text-secondary] space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mt-1 flex-shrink-0 text-[--color-accent-primary]"
                    >
                      <path d="M9 18 L15 12 L9 6 L3 12 L9 18 Z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[--color-text-primary] font-semibold mb-3">
                Tecnologías
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {project.architectureImage && (
          <div className="mt-12">
            <h3 className="mb-4 text-xl font-semibold text-[--color-text-primary]">
              Arquitectura
            </h3>
            <PlaceholderImage
              src={project.architectureImage}
              alt={`${project.title} arquitectura`}
              aspectRatio="16-10"
              className="rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailPage;
