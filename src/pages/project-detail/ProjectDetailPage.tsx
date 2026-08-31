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

  if (!project) {
    return <div className="p-8 text-center">Proyecto no encontrado</div>;
  }

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex >= 0 && projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  return (
    <section className="py-24 bg-[--color-bg-base]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/proyectos"
            className="text-[--color-text-secondary] hover:text-[--color-accent-primary]"
          >
            ← Volver a proyectos
          </Link>

          <div className="flex gap-3">
            {previousProject && (
              <Link
                to={`/proyectos/${previousProject.slug}`}
                className="text-sm text-[--color-text-secondary] hover:text-[--color-accent-primary]"
              >
                Proyecto anterior
              </Link>
            )}
            {nextProject && (
              <Link
                to={`/proyectos/${nextProject.slug}`}
                className="text-sm text-[--color-text-secondary] hover:text-[--color-accent-primary]"
              >
                Siguiente proyecto →
              </Link>
            )}
          </div>
        </div>

        <SectionLabel>{project.title}</SectionLabel>
        <SectionTitle>{project.title}</SectionTitle>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <PlaceholderImage
              src={project.coverImage}
              alt={project.title}
              aspectRatio="16-10"
              className="aspect-[16/10] rounded-xl"
            />

            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h3 className="text-[--color-text-primary] text-xl font-semibold mb-4">
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
            <p className="text-[--color-text-secondary] text-sm uppercase tracking-wider mb-4">
              {project.shortDescription}
            </p>

            <div>
              <h3 className="text-[--color-text-primary] text-2xl font-bold mb-4">
                Descripción
              </h3>
              <p className="text-[--color-text-secondary] leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.problem && (
              <div className="mb-6">
                <h4 className="text-[--color-text-primary] font-semibold mb-3">
                  Problem
                </h4>
                <p className="text-[--color-text-secondary]">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div>
                <h4 className="text-[--color-text-primary] font-semibold mb-3">
                  Solution
                </h4>
                <p className="text-[--color-text-secondary]">
                  {project.solution}
                </p>
              </div>
            )}

            <div>
              <h4 className="text-[--color-text-primary] font-semibold mb-3">
                Features
              </h4>
              <ul className="text-[--color-text-secondary] space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mt-1 flex-shrink-0"
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
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-[--color-text-primary] font-semibold mb-3">
                Links
              </h4>
              <div className="flex flex-col gap-3 sm:flex-row">
                {project.demoUrl && project.demoUrl !== "#" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-md border border-[--border] px-4 py-2 text-sm font-medium text-[--color-text-primary] hover:bg-[--color-bg-surface-alt]"
                  >
                    Ver en vivo →
                  </a>
                )}

                {project.repositoryUrl && project.repositoryUrl !== "#" && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-md border border-[--border] px-4 py-2 text-sm font-medium text-[--color-text-primary] hover:bg-[--color-bg-surface-alt]"
                  >
                    Código fuente →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {project.architectureImage && (
          <div className="mt-12">
            <h3 className="text-[--color-text-primary] text-xl font-semibold mb-4">
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
