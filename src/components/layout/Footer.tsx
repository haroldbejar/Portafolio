import { contact } from "../../data/contact";

const Footer = () => {
  const year = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#050914] px-6 pb-6 pt-14 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[--accent-primary] text-sm font-bold text-white shadow-[0_10px_25px_rgba(59,79,224,0.35)]">
              HB
            </div>
            <span className="text-lg font-semibold tracking-[-0.04em] text-[--color-text-primary]">
              Harold Bejarano
            </span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[--color-text-secondary]">
            Full Stack Developer apasionado por crear soluciones que conectan
            tecnología y negocio.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[--color-text-primary]">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm text-[--color-text-secondary]">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 transition-colors hover:text-[--color-accent-primary]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[--border] bg-[rgba(17,24,39,0.5)] text-[--color-accent-primary] transition-colors group-hover:border-[--color-accent-primary]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span className="min-w-0 truncate">{contact.email}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-[--color-accent-primary]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[--border] bg-[rgba(17,24,39,0.5)] text-[--color-accent-primary] transition-colors group-hover:border-[--color-accent-primary]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12 2a9 9 0 0 0-7.76 13.56L3 22l6.63-1.18A9 9 0 1 0 12 2Zm0 16.36a7.34 7.34 0 0 1-3.74-1.02l-.27-.16-3.93.7.73-3.82-.18-.29A7.36 7.36 0 1 1 12 18.36Zm4.03-5.5c-.22-.11-1.29-.64-1.49-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.05-.11-.5-1.2-.69-1.64-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.85s.8 2.15.91 2.3c.11.15 1.56 2.38 3.78 3.34.53.23.94.36 1.26.46.53.17 1.01.15 1.39.09.43-.06 1.29-.53 1.47-1.04.18-.51.18-.95.13-1.04-.06-.09-.2-.14-.42-.25Z" />
                  </svg>
                </span>
                <span>{contact.whatsapp}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[--color-text-primary]">
            Redes Sociales
          </h4>
          <div className="grid gap-3 sm:grid-cols-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-11 items-center gap-3 rounded-xl border border-[--border] bg-[rgba(17,24,39,0.5)] px-3 text-[--color-text-primary] transition-colors hover:border-[--accent-primary] hover:bg-[--accent-primary]"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3zm-1.5 1.4h3V18h-3V9.9zm5.05 0h2.88v1.11h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2 3.61 4.61V18h-3v-16.5c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V18h-3V9.9z" />
              </svg>
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-11 items-center gap-3 rounded-xl border border-[--border] bg-[rgba(17,24,39,0.5)] px-3 text-[--color-text-primary] transition-colors hover:border-[--accent-primary] hover:bg-[--accent-primary]"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M12 .5A12 12 0 0 0 8.21 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.46-2.37 1.22-3.2-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.83 1.22 1.9 1.22 3.2 0 4.58-2.82 5.6-5.5 5.9.43.36.81 1.08.81 2.18v3.23c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
              <span className="text-xs font-medium">GitHub</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-11 items-center gap-3 rounded-xl border border-[--border] bg-[rgba(17,24,39,0.5)] px-3 text-[--color-text-primary] transition-colors hover:border-[--accent-primary] hover:bg-[--accent-primary]"
              aria-label="WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M12 2a9 9 0 0 0-7.76 13.56L3 22l6.63-1.18A9 9 0 1 0 12 2Zm0 16.36a7.34 7.34 0 0 1-3.74-1.02l-.27-.16-3.93.7.73-3.82-.18-.29A7.36 7.36 0 1 1 12 18.36Zm4.03-5.5c-.22-.11-1.29-.64-1.49-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.05-.11-.5-1.2-.69-1.64-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.85s.8 2.15.91 2.3c.11.15 1.56 2.38 3.78 3.34.53.23.94.36 1.26.46.53.17 1.01.15 1.39.09.43-.06 1.29-.53 1.47-1.04.18-.51.18-.95.13-1.04-.06-.09-.2-.14-.42-.25Z" />
              </svg>
              <span className="text-xs font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-[--border] pt-6 text-center text-xs text-[--color-text-secondary]">
        <p>&copy; {year} Harold Bejarano. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
