import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "gatex",
    title: "GateX",
    shortDescription: "Sistema de control de acceso integral",
    description:
      "GateX es una solución diseñada para gestionar accesos, permisos y auditoría en entornos empresariales con alto volumen de usuarios y reglas de seguridad complejas. La plataforma centraliza la lógica de autorización y brinda trazabilidad completa de cada operación.",
    problem:
      "Las organizaciones necesitaban controlar accesos de forma segura sin depender de procesos manuales y fragmentados, lo que generaba errores, brechas de seguridad y poca visibilidad operativa.",
    solution:
      "Se desarrolló una solución modular con autenticación robusta, control por roles y un historial completo de auditoría para mejorar la seguridad y la operación diaria.",
    features: [
      "Control de acceso por rol",
      "Validación en dos factores",
      "Registro de auditoría",
    ],
    technologies: [".NET 9", "React", "TypeScript", "SQL Server", "Docker"],
    coverImage: "/projects/gatex/cover.PNG",
    gallery: ["/projects/gatex/screen-01.PNG", "/projects/gatex/screen-02.PNG"],
    architectureImage: "/projects/gatex/architecture.jfif",
    demoUrl: "#",
    repositoryUrl: "#",
    featured: true,
  },
  {
    id: "2",
    slug: "erp",
    title: "ERP",
    shortDescription: "Sistema de gestión empresarial",
    description:
      "ERP fue desarrollado para unificar procesos de negocio clave como inventario, ventas, finanzas y reportes ejecutivos en una sola plataforma. El resultado fue una operación más clara, ágil y preparada para crecer.",
    problem:
      "La empresa contaba con múltiples herramientas desconectadas, lo que provocaba retrasos, errores de información y poca confiabilidad en la toma de decisiones.",
    solution:
      "Se consolidó la administración operativa en un sistema centralizado con dashboards y procesos automatizados para mejorar la trazabilidad y la productividad del negocio.",
    features: [
      "Módulo de inventario",
      "Facturación electrónica",
      "Reportes ejecutivos",
    ],
    technologies: [".NET 9", "React", "TypeScript", "SQL Server", "Azure"],
    coverImage: "/projects/erp/cover.jfif",
    gallery: ["/projects/erp/screen-01.jfif"],
    architectureImage: "/projects/erp/architecture.jfif",
    demoUrl: "#",
    repositoryUrl: "#",
    featured: true,
  },
  {
    id: "3",
    slug: "natillera",
    title: "Natillera",
    shortDescription:
      "Plataforma para la gestión de grupos de ahorro colectivo",
    description:
      "Natillera es una plataforma para gestionar grupos de ahorro colectivo conformados por familiares, amigos o miembros de una comunidad. Permite organizar aportes programados, registrar movimientos, consultar saldos y dar seguimiento transparente a las actividades financieras del grupo.",
    problem:
      "La administración manual de los aportes, saldos y movimientos dificultaba el seguimiento del ahorro colectivo y podía generar errores o poca claridad entre los integrantes del grupo.",
    solution:
      "Se implementó una plataforma con flujos claros para registrar integrantes, controlar aportes periódicos, consultar saldos y mantener un historial transparente de las operaciones del grupo.",
    features: [
      "Registro de integrantes",
      "Control de aportes periódicos",
      "Historial de movimientos",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    coverImage: "/projects/natillera/cover.jfif",
    gallery: ["/projects/natillera/screen-01.jfif"],
    architectureImage: "/projects/natillera/architecture.jfif",
    demoUrl: "#",
    repositoryUrl: "#",
    featured: true,
  },
  {
    id: "4",
    slug: "microservicios-dotnet",
    title: "Microservicios .NET",
    shortDescription: "Arquitectura de microservicios escalables",
    description:
      "Esta solución de arquitectura microservicios busca separar responsabilidades y mejorar la escalabilidad de sistemas con alta demanda y crecimiento continuo. La estructura modular facilita mantenimiento, despliegues seguros y evolución del producto.",
    problem:
      "El sistema crecía en complejidad y el modelo monolítico hacía más lenta la entrega, la escalabilidad y el mantenimiento continuo de cada área funcional.",
    solution:
      "Se transformó la plataforma hacia una arquitectura modular con servicios desacoplados, gateways y automatización para soportar crecimiento y despliegues continuos.",
    features: ["API Gateway", "Service Discovery", "CI/CD automatizado"],
    technologies: [
      ".NET 9",
      "React",
      "TypeScript",
      "SQL Server",
      "Docker",
      "Azure Kubernetes Service",
    ],
    coverImage: "/projects/microservicios-dotnet/cover.jfif",
    gallery: ["/projects/microservicios-dotnet/screen-01.jfif"],
    architectureImage: "/projects/microservicios-dotnet/architecture.jfif",
    demoUrl: "#",
    repositoryUrl: "#",
    featured: false,
  },
];
