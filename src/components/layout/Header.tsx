import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goToSection = (section?: string) => {
    if (!section) return;

    setMenuOpen(false);
    navigate("/");
    window.setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Servicios", section: "servicios" },
    { label: "Sobre mí", section: "sobre-mi" },
    { label: "Contacto", section: "contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(5,9,20,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link to="/" className="flex items-center gap-3 text-decoration-none">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[--accent-primary] text-sm font-bold text-white shadow-[0_10px_25px_rgba(59,79,224,0.45)]">
            HB
          </div>
          <span className="text-lg font-semibold tracking-[-0.04em] text-[--color-text-primary]">
            Harold Bejarano
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                to={item.href}
                className="relative text-sm font-medium text-[--color-text-secondary] transition-colors hover:text-[--color-accent-primary] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[--accent-primary] after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={() => goToSection(item.section)}
                className="relative text-sm font-medium text-[--color-text-secondary] transition-colors hover:text-[--color-accent-primary] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[--accent-primary] after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {item.label}
              </button>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goToSection("contacto")}
            className="hidden items-center justify-center rounded-xl bg-[--accent-primary] px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(59,79,224,0.35)] transition-all hover:bg-[--color-accent-primary-hover] sm:inline-flex"
          >
            Hablemos de tu proyecto
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[--border] bg-[rgba(17,24,39,0.5)] text-lg text-[--color-text-primary] md:hidden"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[--border] bg-[rgba(5,9,20,0.96)] px-6 py-4 md:hidden">
          {navItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                to={item.href}
                className="block rounded-lg px-2 py-2 text-[--color-text-secondary] transition-colors hover:bg-[rgba(59,79,224,0.08)] hover:text-[--color-accent-primary]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={() => goToSection(item.section)}
                className="block w-full rounded-lg px-2 py-2 text-left text-[--color-text-secondary] transition-colors hover:bg-[rgba(59,79,224,0.08)] hover:text-[--color-accent-primary]"
              >
                {item.label}
              </button>
            ),
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
