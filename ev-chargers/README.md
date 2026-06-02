# EV Chargers

Plataforma Web para la gestión y localización de puntos de carga para vehículos eléctricos. Este proyecto ofrece una interfaz intuitiva para encontrar estaciones de carga, visualizar información detallada y gestionar servicios relacionados.

## Características Principales

- **Mapa Interactivo**: Visualización de puntos de carga integrando servicios de geolocalización.
- **Búsqueda y Listados**: Acceso rápido a la información de estaciones disponibles.
- **Gestión de Usuarios**: Sistema de registro e inicio de sesión seguro.
- **Integración de Pagos**: Módulo de pagos integrado mediante Stripe para transacciones.
- **Interfaz Moderna**: Diseño adaptable y estilizado utilizando Tailwind CSS y Bootstrap.

## Tecnologías

El desarrollo se ha realizado utilizando un stack tecnológico moderno y eficiente:

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Estilos**: Tailwind CSS, PostCSS, Bootstrap
- **Mapas**: React Google Maps API, Leaflet
- **Pagos**: Stripe SDK (@stripe/react-stripe-js)
- **Routing**: React Router DOM

## Instalación y Despliegue

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Instalar dependencias**:
   Navega al directorio del proyecto y ejecuta:
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo**:
   Para visualizar la aplicación en modo local:
   ```bash
   npm run dev
   ```

3. **Construcción para producción**:
   Para generar los archivos estáticos optimizados:
   ```bash
   npm run build
   ```

## Estructura del Proyecto

El código fuente se organiza principalmente en la carpeta `src`:
- `/components`: Componentes reutilizables de la interfaz (Header, Body, Mapas).
- `/modales`: Componentes para ventanas modales (Login, Registro, Pagos).
- `App.tsx`: Componente raíz y configuración de rutas.
- `main.tsx`: Punto de entrada de la aplicación.

## Scripts

- `dev`: Inicia Vite en modo desarrollo con HMR.
- `build`: Compila el proyecto utilizando TypeScript y Vite.
- `lint`: Ejecuta ESLint para verificar la calidad del código.
- `preview`: Sirve la aplicación construida localmente para pruebas.
