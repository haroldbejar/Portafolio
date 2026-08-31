# Guía Maestra — Portafolio Harold Bejarano
### Arquitectura técnica + Sistema de diseño + Plan de implementación paso a paso

Este documento consolida y amplía el archivo original `arquitectura-portafolio-harold-bejarano.md` incorporando el análisis del diseño de referencia (`propuestaportafolio.png`). Está pensado para ser usado como instrucción única y completa para OpenCode (o cualquier agente de codificación con IA).

---

## 1. Propósito del proyecto

Construir un sitio de portafolio profesional para **Harold Bejarano**, Full Stack Developer, orientado a:

1. Atraer **clientes** que necesiten desarrollo de software a medida.
2. Servir como **carta de presentación** en procesos de búsqueda de empleo remoto.
3. Reforzar la **marca personal** (LinkedIn, GitHub) con una presencia técnica creíble.

El sitio no debe sentirse como una hoja de vida. Debe transmitir capacidad real de diseñar y construir soluciones de software empresarial.

> **Nota importante sobre el diseño de referencia**: la imagen `propuestaportafolio.png` es una **maqueta visual** generada como referencia de layout, jerarquía y estilo. Las fotos (rostro, escritorio, capturas de pantalla de "GateX", "ERP", "Natillera" y "Microservicios .NET") son *placeholders ilustrativos* y **no deben usarse como assets finales**. En producción, Harold reemplazará:
> - La foto del hero (imagen de él trabajando o una alternativa profesional).
> - Las capturas de cada proyecto (screenshots reales de GateX/AccessControl, ERP, Natillera, microservicios).
>
> La implementación debe construirse de modo que **el layout, proporciones y componentes se vean exactamente igual**, pero con rutas de imagen fácilmente reemplazables (ver sección 7).

---

## 2. Stack tecnológico

### Obligatorio
- React 18+ con **TypeScript**
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (iconografía)

### Recomendado
- ESLint + Prettier
- `clsx` (o `tailwind-merge`) para clases condicionales
- Vitest + Testing Library (smoke tests de componentes clave)

### Explícitamente fuera de alcance en v1
- Backend propio, base de datos, autenticación
- Redux u otro state manager global (React Query/Context es innecesario aquí; no hay datos remotos)
- Librerías de animación pesadas (Framer Motion) salvo necesidad real — usar transiciones nativas de Tailwind/CSS primero

La v1 es un **frontend estático**, desplegable en cualquier hosting de archivos estáticos.

---

## 3. Sistema de diseño (extraído del mockup)

Esta sección traduce el diseño visual en tokens reutilizables, para que el resultado final coincida con la referencia incluso cuando cambien las imágenes.

### 3.1 Paleta de colores

Colores aproximados muestreados directamente del mockup (ajustar ±5% si al implementar se ve desviado):

| Token | Uso | Valor aprox. |
|---|---|---|
| `--color-bg-base` | Fondo general de la página | `#050914` (casi negro, azul muy oscuro) |
| `--color-bg-surface` | Fondo de tarjetas (proyectos, servicios) | `#0B111F` |
| `--color-bg-surface-alt` | Fondo de la tarjeta CTA de servicios (más clara) | `#111827` |
| `--color-border` | Bordes sutiles de tarjetas y separadores | `#1E2536` (con opacidad ~40-60%) |
| `--color-accent-primary` | Botón principal, enlaces, labels superiores, iconos destacados | `#3B4FE0` (azul-índigo vibrante) |
| `--color-accent-primary-hover` | Hover de botón principal | Un tono ~10% más claro |
| `--color-text-primary` | Titulares y texto principal | `#F5F7FA` (blanco casi puro) |
| `--color-text-secondary` | Párrafos descriptivos, subtítulos | `#9AA3B5` (gris azulado) |
| `--color-badge-bg` | Fondo de badges de tecnología | `#0F1522` con borde `#232B3D` |

En Tailwind, definir estos como colores custom en `tailwind.config.js` (`bg-base`, `bg-surface`, `accent`, `text-secondary`, etc.) en vez de usar grises genéricos de Tailwind — así se mantiene consistencia total con el mockup.

> El documento original mencionaba "acentos en azul y/o violeta". En el mockup real **el acento dominante es azul-índigo**; no se observa violeta como color independiente. Usar un solo acento (azul) evita que el sitio se vea disperso — mantener esta decisión salvo que Harold indique lo contrario.

### 3.2 Tipografía

- Fuente sans-serif moderna tipo **Inter** (o `system-ui` como fallback) — es la que mejor reproduce el peso y espaciado observado en headings y body text del mockup.
- Jerarquía observada:
  - H1 (Hero): ~40-44px, bold (700), line-height ajustado (~1.1)
  - H2 (títulos de sección: "Soluciones que generan impacto", "Servicios"): ~28-32px, bold
  - Label superior de sección ("HOLA, SOY HAROLD", "PROYECTOS DESTACADOS"): ~12-13px, uppercase, letter-spacing amplio, color de acento
  - Body/descripciones: ~15-16px, color secundario, line-height ~1.6
  - Nombre en cards de proyecto/servicio: ~17-18px, semibold

### 3.3 Componentes visuales clave (mapeados 1:1 con el mockup)

| Componente | Detalles observados |
|---|---|
| **Header** | Sticky, fondo igual al de la página (no una barra distinta), logo `HB` en cuadrado con gradiente azul, nombre + subtítulo apilados, nav horizontal centrada-derecha, subrayado azul bajo el link activo ("Inicio"), botón CTA sólido azul a la derecha |
| **Hero** | Layout 2 columnas (60/40): texto+CTAs a la izquierda, imagen a la derecha con overlay de un diagrama de arquitectura simplificado (React Frontend → API Gateway → SQL Server/MySQL/MongoDB) superpuesto sobre la foto — esto es un detalle de diseño distintivo, no decorativo, y comunica la propuesta técnica |
| **Botones** | Primario: fondo azul sólido, texto blanco, ícono flecha/chat a la derecha, bordes redondeados (~8px). Secundario: mismo tamaño, fondo transparente, borde blanco/gris tenue |
| **Badges de tecnología** | Fondo oscuro translúcido, borde sutil, ícono + texto, esquinas redondeadas (pill o rounded-md), en fila horizontal con wrap |
| **Tarjetas de proyecto** | Imagen de portada (aspect ratio ~16:10) arriba, luego título, descripción corta (2 líneas), badges de tecnología, enlace "Ver proyecto →" en azul. Fondo de tarjeta apenas más claro que el fondo general, borde sutil de 1px |
| **Tarjetas de servicio** | Grid 3 columnas (desktop), ícono con fondo circular/cuadrado azul tenue, título bold, descripción corta — sin bordes de tarjeta visibles, más minimalista que las de proyecto |
| **Tarjeta CTA de servicios** ("¿Tienes un proyecto en mente?") | Fondo ligeramente más claro que el resto para diferenciarla, checklist con ícono check en verde/azul, botón sólido al final |
| **Sección "Sobre mí"** | 3 columnas: texto+botón / bloque de 3 estadísticas con íconos / grid de logos de tecnologías |
| **Footer** | Simple, 3-4 columnas: identidad (logo+nombre), contacto (email, whatsapp), redes sociales (iconos circulares), línea de copyright centrada abajo con año dinámico |

### 3.4 Espaciado y layout

- Contenedor máximo ancho (`max-w-7xl` o similar), padding lateral generoso (`px-6 md:px-8`)
- Separación vertical amplia entre secciones (~96-120px en desktop, ~64px en mobile)
- Grid de proyectos: 4 columnas en desktop (`lg:grid-cols-4`), 2 en tablet, 1 en mobile
- Grid de servicios: 3 columnas en desktop, 1 en mobile

### 3.5 Lo que el diseño **no** tiene (para no sobre-construir)

- No hay modo claro — es 100% dark theme. No es necesario implementar un toggle de tema en v1.
- No hay animaciones complejas visibles en la estática; usar solo fade-in/slide sutil al hacer scroll y transiciones de hover.
- No hay testimonios de clientes ni logos de empresas — no inventar esa sección.

---

## 4. Principios de arquitectura de código

1. Separar páginas, componentes, datos y assets.
2. Ningún componente debe superar ~150-200 líneas; dividir por responsabilidad.
3. Los datos de proyectos, servicios, tecnologías y perfil viven en `src/data/`, nunca hardcodeados en componentes.
4. Componentes reutilizables para: botones, badges, títulos de sección, tarjetas.
5. Toda imagen debe poder reemplazarse cambiando solo una ruta en `src/data/`, sin tocar JSX.
6. Si una imagen no existe todavía, renderizar un placeholder visual (no romper el layout ni mostrar el ícono roto del navegador).
7. No usar imágenes de aplicaciones de terceros como si fueran proyectos reales — donde falte una captura real, usar un placeholder identificable (p. ej. un bloque con el nombre del proyecto y "captura próximamente").

---

## 5. Estructura del proyecto

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── hero/hero-developer.jpg
│   │   ├── projects/
│   │   │   ├── gatex/{cover.png, screen-01.png, architecture.png}
│   │   │   ├── erp/{cover.png, ...}
│   │   │   ├── natillera/{cover.png, ...}
│   │   │   └── microservices/{cover.png, ...}
│   │   └── og/og-cover.jpg
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── layout/{Header.tsx, Footer.tsx, Container.tsx}
│   │   ├── ui/{Button.tsx, SectionLabel.tsx, SectionTitle.tsx, Badge.tsx, Card.tsx, TechBadge.tsx, PlaceholderImage.tsx}
│   │   ├── sections/{Hero.tsx, FeaturedProjects.tsx, Services.tsx, About.tsx, ContactCTA.tsx}
│   │   └── projects/{ProjectCard.tsx, ProjectHero.tsx, ProjectGallery.tsx, ProjectArchitecture.tsx}
│   │
│   ├── data/{profile.ts, projects.ts, services.ts, technologies.ts, contact.ts}
│   ├── pages/{HomePage.tsx, ProjectsPage.tsx, ProjectDetailPage.tsx, NotFoundPage.tsx}
│   ├── types/project.ts
│   ├── lib/ (helpers: formatYear, seo helpers)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 6. Rutas

```text
/                       Página principal
/proyectos              Listado de proyectos
/proyectos/:slug        Detalle de un proyecto (gatex, erp, natillera, microservicios-dotnet)
```

Navegación interna con scroll suave hacia anchors (`#servicios`, `#sobre-mi`, `#contacto`) desde el header cuando el usuario está en `/`.

---

## 7. Estrategia de imágenes reemplazables

Punto crítico dado que hoy no existen las imágenes finales:

1. Cada imagen se referencia **solo por ruta string** en `src/data/*.ts`, nunca importada directamente en el componente.
2. Componente `PlaceholderImage` que recibe `src`, `alt`, `aspectRatio`; internamente usa `onError` para mostrar un placeholder con el nombre del proyecto/sección si la imagen no carga — así el sitio nunca se ve roto mientras Harold no haya subido las fotos reales.
3. Mantener siempre la misma relación de aspecto placeholder ↔ imagen real para que el reemplazo no descuadre el layout (16:10 para portadas de proyecto, 4:3 o similar para el hero).
4. Documentar en el `README.md` exactamente qué archivo va en cada ruta (lista simple, una línea por imagen esperada).

---

## 8. Modelo de datos

```ts
export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem?: string;
  solution?: string;
  features: string[];
  technologies: string[];
  coverImage: string;
  gallery?: string[];
  architectureImage?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
}
```

```ts
export const profile = {
  name: "Harold Bejarano",
  role: "Full Stack Developer",
  email: "",
  whatsapp: "",
  linkedin: "",
  github: "",
  resumeUrl: "" // PDF de CV, para el botón de descarga (ver sección 12)
};
```

Los 4 proyectos iniciales (GateX, ERP, Natillera, Microservicios .NET) van en `src/data/projects.ts` con textos marcados `...` donde falte contenido real, exactamente como en el documento original.

> **Antes de escribir contenido definitivo**: decidir el nombre final del proyecto de control de acceso. En el mockup aparece como "GateX", pero en el desarrollo real de Harold este proyecto se conoce como **AccessControl**, con nombres de marca alternativos evaluados (Entryx, Zentry, Lynkora). Usar el mismo nombre en el portafolio y en el repositorio/LinkedIn evita inconsistencia frente a un cliente o reclutador que investigue más.

---

## 9. Especificación sección por sección (con datos reales a validar)

### 9.1 Header
Logo `HB`, nombre, subtítulo "Full Stack Developer", nav (Inicio/Proyectos/Servicios/Sobre mí/Contacto), CTA "Hablemos de tu proyecto". Sticky, colapsa a menú hamburguesa en mobile con panel accesible (cierre por botón, `Escape`, click fuera).

### 9.2 Hero
- Label: `HOLA, SOY HAROLD`
- Título: `Desarrollo soluciones de software que impulsan tu negocio`
- Texto: `Desarrollador Full Stack con más de 9 años de experiencia creando aplicaciones web y sistemas empresariales a medida.`
- ⚠️ **Verificar antes de publicar**: el mockup muestra "más de 9 años de experiencia" — este dato debe confirmarse como cifra real de Harold antes de quedar fijo en el copy, siguiendo la misma regla anti-invención del documento original.
- Botones: `Ver mis proyectos`, `Hablemos de tu proyecto`
- Badges: .NET 9, React, TypeScript, SQL Server, MySQL, Docker
- Imagen: foto profesional de Harold (placeholder hasta entrega final) + overlay de diagrama simplificado (React Frontend → API Gateway → SQL Server/MySQL/MongoDB) como en el mockup — este overlay puede construirse con SVG/HTML propio, no depende de la foto final.

### 9.3 Proyectos destacados
4 tarjetas (GateX/AccessControl, ERP, Natillera, Microservicios .NET) con imagen, título, descripción corta, badges de tecnología, "Ver proyecto →". Rutas de imagen configurables como en sección 7.

### 9.4 Servicios
6 tarjetas sin bordes marcados, ícono + título + descripción corta:
- Aplicaciones Web Empresariales
- APIs y Microservicios
- Modernización de Sistemas
- Frontend Moderno
- Bases de Datos
- DevOps y Despliegues

Tarjeta CTA lateral "¿Tienes un proyecto en mente?" con checklist (Asesoría gratuita / Soluciones a la medida / Entregas iterativas) y botón "Hablemos".

### 9.5 Sobre mí
Mensaje principal: `Apasionado por crear soluciones que conectan tecnología y negocio.` + párrafo corto + botón "Conoce más sobre mí" (puede llevar a una sección expandida o página propia si el contenido crece).

⚠️ **Verificar antes de publicar** (regla ya definida en el documento original, aplicada aquí a los datos concretos del mockup):
- "9+ años de experiencia" → confirmar cifra exacta.
- "20+ Proyectos completados" → **no publicar si no es un número verificable**; si no se puede confirmar, quitar la métrica o reemplazarla por algo cualitativo ("Proyectos empresariales y personales") en vez de un número inventado.
- "100% Comprometido con la calidad" → esta es una afirmación de valores, no una métrica cuantitativa, así que no requiere verificación numérica.

Grid de tecnologías: .NET, React, TypeScript, SQL Server, MySQL, Node/otros, Docker, GitHub, AWS, Azure — ajustar esta lista a lo que Harold realmente domina (el doc original ya lista esto en la sección de tecnologías; usar esa lista como fuente de verdad, no la del mockup si difieren).

### 9.6 Contacto / CTA final
Botón `Hablemos de tu proyecto` con `mailto:` o enlace de WhatsApp. Preparado para integrar Formspree/EmailJS a futuro sin rediseñar el componente.

### 9.7 Footer
Logo HB, nombre, rol, email, WhatsApp, redes (LinkedIn, GitHub, y la tercera red que se vea en el mockup — confirmar si es Instagram o X/Twitter antes de fijar el ícono), copyright con año dinámico (`new Date().getFullYear()`, nunca hardcodeado).

---

## 10. Mejoras recomendadas sobre el mockup/documento original

Estas son adiciones que no rompen el diseño ni la arquitectura pero aumentan el valor del sitio, dado que Harold busca tanto clientes como empleo remoto y quiere construir marca personal:

1. **Botón de descarga de CV (PDF)** — agregar como acción secundaria en el header o en "Sobre mí", sin competir visualmente con el CTA principal de "Hablemos de tu proyecto".
2. **Versión en inglés (ES/EN)** — un objeto simple de textos por idioma es suficiente en v1; no requiere una librería de i18n pesada. Importante por la búsqueda de trabajo remoto internacional.
3. **SEO técnico**: `sitemap.xml`, `robots.txt`, JSON-LD `Person`/`ProfessionalService`, imagen Open Graph real (`/public/images/og/og-cover.jpg`) para que el link se vea bien al compartirse en LinkedIn.
4. **Analítica ligera** (Plausible o GA4) para saber si el sitio genera tráfico real.
5. **Deploy concreto**: definir Vercel, Netlify o GitHub Pages + un workflow de GitHub Actions (Harold ya tiene experiencia con GitHub Actions en AccessControl, se puede reutilizar ese conocimiento).
6. **Tests de humo** (Vitest + Testing Library) sobre `ProjectCard` y `ContactCTA` como red de seguridad mínima.

Estas mejoras son opcionales frente al mockup, pero se recomienda incluir al menos 1, 2 y 3 desde la Fase 1 porque son mucho más baratas de construir ahora que de agregar después.

---

## 11. Accesibilidad, rendimiento y SEO básico

- HTML semántico, un solo `h1` por página, jerarquía correcta de encabezados.
- `alt` descriptivo en todas las imágenes (especialmente relevante mientras se usan placeholders).
- Navegación por teclado, foco visible, contraste suficiente (validar que el gris `#9AA3B5` sobre `#050914` cumpla WCAG AA para texto secundario).
- `prefers-reduced-motion` respetado en cualquier animación.
- Lazy loading de imágenes fuera del viewport; formatos modernos (WebP/AVIF) una vez existan las capturas reales.
- Título y meta description específicos por página/proyecto (ej. `GateX — Control de Acceso | Harold Bejarano`).

---

## 12. Plan de implementación paso a paso

### Fase 1 — Base del proyecto
1. Crear proyecto Vite + React + TypeScript.
2. Configurar Tailwind y definir los tokens de color/tipografía de la sección 3 en `tailwind.config.js`.
3. Configurar React Router con las 3 rutas de la sección 6.
4. Crear estructura de carpetas completa (sección 5).
5. Construir `Header` y `Footer` (layout general) usando los tokens de diseño — validar que ya se vean fieles al mockup antes de continuar.

### Fase 2 — Datos
1. Crear `types/project.ts`.
2. Crear `data/profile.ts`, `data/contact.ts`.
3. Crear `data/projects.ts` con los 4 proyectos (contenido `...` donde falte texto real).
4. Crear `data/services.ts`, `data/technologies.ts`.

### Fase 3 — Página principal
1. Hero (incluyendo el overlay de diagrama de arquitectura sobre la imagen).
2. Proyectos destacados.
3. Servicios (grid + tarjeta CTA).
4. Sobre mí (texto + estadísticas + tecnologías).
5. Footer ya construido en Fase 1, integrar datos reales de `profile.ts`.

### Fase 4 — Proyectos
1. Página de listado (`/proyectos`).
2. Página de detalle dinámica (`/proyectos/:slug`).
3. Galería y sección de arquitectura (opcional, solo si el proyecto lo amerita).
4. Manejo de slug inválido → `NotFoundPage`.

### Fase 5 — Calidad y pulido
1. Responsive completo (mobile/tablet/desktop) contra los breakpoints estándar de Tailwind.
2. Accesibilidad (sección 11).
3. SEO básico + mejoras de la sección 10 (sitemap, OG image, JSON-LD).
4. Placeholders de imagen verificados: el sitio no debe romperse sin las imágenes finales.
5. Revisión visual final comparando cada sección contra el mockup, pixel por pixel donde sea posible.
6. Limpieza de código, eliminación de imports/props no usados.

### Fase 6 (opcional, si Harold decide incluirlas ahora)
1. Toggle de idioma ES/EN.
2. Botón de descarga de CV.
3. Deploy real + dominio + analítica.

---

## 13. Criterios de aceptación

- [ ] La aplicación compila sin errores.
- [ ] El layout de la página principal replica fielmente el mockup (colores, tipografía, espaciados, componentes).
- [ ] Navegación funcional entre rutas y anchors.
- [ ] Los proyectos se cargan desde `data/projects.ts`, no hardcodeados en JSX.
- [ ] Cada proyecto tiene su propia URL (`/proyectos/:slug`).
- [ ] Las imágenes son reemplazables cambiando solo una ruta, y el sitio no se rompe si faltan.
- [ ] Responsive correcto en mobile y desktop.
- [ ] No hay métricas ni datos inventados sin marcar como "pendiente de verificar".
- [ ] Datos de contacto centralizados en `data/profile.ts` / `data/contact.ts`.
- [ ] Código tipado, organizado, sin componentes gigantes.
- [ ] SEO básico (title, description, OG) implementado por página.

---

## 14. Contenido pendiente de Harold

1. Nombre final del proyecto de control de acceso (GateX vs. AccessControl/Entryx/Zentry/Lynkora).
2. Foto real para el Hero.
3. Capturas reales: GateX/AccessControl, ERP (si es reutilizable), Natillera, microservicios .NET.
4. Cifras reales de "años de experiencia" y, si aplica, número de proyectos verificable.
5. Datos definitivos de contacto (email, WhatsApp, LinkedIn, GitHub) y confirmación de la tercera red social del footer.
6. Textos definitivos de "problema/solución" por proyecto.
7. Decisión de dominio y plataforma de despliegue.
8. Decisión sobre si incluir CV descargable y/o versión en inglés desde la v1.
