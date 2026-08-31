const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#050914", padding: "48px 24px 24px" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-end-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded bg-[--accent-primary] flex items-center justify-center text-sm font-bold text-white">
              HB
            </div>
            <span className="text-[--color-text-primary] font-bold text-lg">
              Harold Bejarano
            </span>
          </div>
          <p className="text-[--color-text-secondary] text-sm">
            Full Stack Developer apasionado por crear soluciones que conectan
            tecnología y negocio.
          </p>
        </div>

        <div>
          <h4 className="text-[--color-text-primary] font-semibold text-sm mb-4">
            Contacto
          </h4>
          <ul className="space-y-2 text-[--color-text-secondary] text-sm">
            <li>
              <a
                href="mailto:harold@bejarano.dev"
                className="underline hover:opacity-80"
              >
                harold@bejarano.dev
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/52XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[--color-text-primary] font-semibold text-sm mb-4">
            Redes Sociales
          </h4>
          <div className="flex gap-3">
            <a
              href="https://linkedin.com/in/harold-bejarano"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-[--color-bg-surface] flex items-center justify-center hover:bg-[--accent-primary] transition-colors text-[--color-text-primary]"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3zm-1.5 1.4h3V18h-3V9.9zm5.05 0h2.88v1.11h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2 3.61 4.61V18h-3v-16.5c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V18h-3V9.9z" />
              </svg>
            </a>
            <a
              href="https://github.com/haroldbejarano"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-[--color-bg-surface] flex items-center justify-center hover:bg-[--accent-primary] transition-colors text-[--color-text-primary]"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 .5A12 12 0 0 0 8.21 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.46-2.37 1.22-3.2-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.83 1.22 1.9 1.22 3.2 0 4.58-2.82 5.6-5.5 5.9.43.36.81 1.08.81 2.18v3.23c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[--border] text-center text-[--color-text-secondary] text-sm">
        <p>&copy; {year} Harold Bejarano. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
