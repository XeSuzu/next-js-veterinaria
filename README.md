# 🐾 PawCare - Sistema de Gestión Veterinaria

<div align="center">

**Transforma la gestión de tu clínica veterinaria con una solución moderna, intuitiva y completa**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13.4+-000000?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3+-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## 📋 Contenido

- [🚀 Características principales](#-características-principales)
- [🛠️ Tecnologías utilizadas](#️-tecnologías-utilizadas)
- [🔧 Instalación y configuración](#-instalación-y-configuración)
- [📜 Scripts disponibles](#-scripts-disponibles)
- [📂 Estructura del proyecto](#-estructura-del-proyecto)
- [⚙️ Funciones esenciales](#️-funciones-esenciales)
- [🎨 Personalización](#-personalización)
- [👥 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)
- [📞 Soporte](#-soporte)

---

## 🚀 Características principales

- **📊 Dashboard intuitivo**: Panel de control completo con métricas y estadísticas clave.
- **🐶 Gestión de pacientes**: Registros detallados de mascotas con historial médico completo.
- **📅 Citas inteligentes**: Sistema avanzado de programación con recordatorios automáticos.
- **💊 Tratamientos y medicamentos**: Control de tratamientos, vacunas y medicación.
- **👨‍⚕️ Gestión de personal**: Administra perfiles de veterinarios y personal.
- **💰 Facturación integrada**: Genera y gestiona facturas y pagos de forma sencilla.
- **📱 Portal del cliente**: Acceso para propietarios de mascotas a sus datos y citas.
- **🌓 Temas claro y oscuro**: Personaliza la interfaz según tus preferencias.
- **📊 Reportes analíticos**: Genera informes detallados para mejorar tu negocio.
- **🔔 Notificaciones**: Sistema de alertas para citas, tratamientos y más.

---

---

## 🛠️ Tecnologías utilizadas

PawCare está construido con tecnologías modernas para garantizar rendimiento, escalabilidad y una experiencia de usuario excepcional:

- **📘 Framework**: [Next.js](https://nextjs.org/) (App Router) - Para renderizado híbrido y routing avanzado
- **🎨 Estilos**: [Tailwind CSS](https://tailwindcss.com/) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Desarrollo rápido con CSS utilitario
- **🧩 Componentes**: [Radix UI](https://www.radix-ui.com/) + Componentes personalizados - Accesibles y altamente personalizables
- **📐 Tipado**: [TypeScript](https://www.typescriptlang.org/) - Para un desarrollo seguro y escalable
- **🔄 Estado**: [React Context API](https://reactjs.org/docs/context.html) - Gestión de estado sin complicaciones
- **📊 Validación**: [Zod](https://github.com/colinhacks/zod) - Validación de esquemas con TypeScript
- **🧰 Utilidades**: [clsx](https://github.com/lukeed/clsx) para manejo de clases condicionales
- **🔍 Íconos**: [Lucide Icons](https://lucide.dev/) - Iconos modernos y personalizables

---

## 🔧 Instalación y configuración

Sigue estos pasos para instalar y configurar PawCare en tu entorno de desarrollo local:

```bash
# Clona el repositorio
git clone <URL_DEL_REPOSITORIO>
cd pawcare

# Instala las dependencias
npm install

# Configura las variables de entorno
cp .env.example .env.local
# Edita el archivo .env.local con tus configuraciones

# Inicia el servidor de desarrollo
npm run dev
```

Visita http://localhost:3000 en tu navegador para ver la aplicación en funcionamiento.

---

## 📜 Scripts disponibles

PawCare incluye varios scripts NPM para facilitar el desarrollo y despliegue:

```bash
# Inicia el servidor de desarrollo
npm run dev

# Genera una versión de producción optimizada
npm run build

# Inicia el servidor en modo producción
npm run start

# Ejecuta el linter para verificar errores de código
npm run lint
```

---

## 📂 Estructura del proyecto

```plaintext
/pawcare/
├── app/
│   ├── auth/               # Páginas de autenticación (login, registro)
│   ├── client-portal/      # Portal del cliente
│   ├── dashboard/          # Panel de administración
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/             # Componentes reutilizables
│   ├── ui/                 # Componentes de interfaz de usuario
│   ├── dashboard/          # Componentes específicos del dashboard
│   ├── forms/              # Componentes de formularios
│   ├── dashboard-layout.tsx
│   └── settings-dialog.tsx
├── lib/
│   ├── utils.ts            # Funciones utilitarias
│   ├── api.ts              # Funciones de API
│   └── hooks/              # Custom hooks
├── public/                 # Archivos estáticos (imágenes, íconos, etc.)
├── styles/                 # Estilos adicionales
├── types/                  # Definiciones de tipos TypeScript
├── tailwind.config.ts      # Configuración de Tailwind CSS
├── postcss.config.mjs      # Configuración de PostCSS
├── next.config.mjs         # Configuración de Next.js
└── README.md               # Documentación del proyecto
```

---

## ⚙️ Funciones esenciales

PawCare incluye utilidades clave para el proyecto. Por ejemplo, la función `cn` combina clases dinámicas de Tailwind CSS de manera eficiente:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Esta función permite manejar clases condicionales de forma simple:

- Combina múltiples clases dinámicamente
- Resuelve conflictos entre clases de Tailwind automáticamente
- Simplifica la creación de componentes personalizables

---

## 🎨 Personalización

### Temas personalizables

Con soporte para temas claro y oscuro, PawCare se adapta a las preferencias de los usuarios:

```typescript
// Configuración de Tailwind CSS
theme: {
  extend: {
    colors: {
      border: "var(--border)",
      background: "var(--background)",
      // Más variables de color...
    }
  }
}
```

### Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto para configurar las variables necesarias:

```
DATABASE_URL=tu_url_de_base_de_datos
API_KEY=tu_clave_api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 👥 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas, mejoras o encuentras errores, no dudes en abrir un issue o enviar un pull request.

### Responsable del proyecto

[Nombre del Responsable] - mantiene y coordina el desarrollo de PawCare.

### Proceso para contribuir

1. Haz fork del repositorio
2. Crea una rama para tu feature (git checkout -b feature/amazing-feature)
3. Realiza tus cambios y haz commit (git commit -m 'Add amazing feature')
4. Push a la rama (git push origin feature/amazing-feature)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 📞 Soporte

¿Tienes preguntas o necesitas ayuda? No dudes en contactarme. ¡Esperamos que PawCare mejore el control digital de tu clínica veterinaria!

- 📧 Email: janneralexandergg@gmail.com

---

<div align="center"> <p> <a href="https://github.com/XeSuzu"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /> </a> <a href=""> <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /> </a> </p> <p>Hecho con ❤️ por el equipo de PawCare</p> </div>
