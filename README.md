# Tarea 3 · Parte A — Laboratorios de Programación Web Avanzada

**Estudiante:** Francisco Torres Sandoval  
**Universidad:** Universidad CENFOTEC · Escuela de Software  
**Curso:** SOFT-12 — Programación Web Avanzada  
**Sección:** SCV2 · III cuatrimestre de 2026  
**Modalidad:** trabajo individual

## Descripción

Este repositorio reúne mis prácticas individuales de desarrollo web y el proyecto acumulativo **Maratón de series**. El propósito es aplicar HTML, CSS, JavaScript, React, componentes, propiedades, estado, formularios, consumo de APIs REST y persistencia de datos mediante Node.js, Express y MongoDB. También se conservan los ejercicios de SQL Server realizados como prácticas independientes.

El Maratón permite visualizar una lista de series, filtrarla por estado o miembro, consultar un resumen, agregar series, avanzar su estado y eliminarlas. El cliente React utiliza el backend Express; el backend guarda y recupera información de MongoDB.

> **Alcance de esta copia (23 de noviembre de 2026):** el ZIP revisado contiene el cliente React y el servidor Express/MongoDB. **No incluye** el directorio ejecutable `maraton-series/servidor-net/` ni la implementación de React Router de la etapa 10. Se conservan documentos y capturas históricas de esos laboratorios, pero las imágenes no sustituyen al código requerido por la consigna. La sección «Pendientes de integración» explica qué verificar antes de la entrega/defensa.

## Estructura del proyecto

```text
Tarea 3/
├── README.md                            # Presentación general, instalación y ejecución
├── .gitignore                           # Exclusiones para el control de versiones
├── docs/
│   ├── laboratorios.md                  # Bitácora consolidada; requiere completar las 20 secciones
│   ├── INDICE_EVIDENCIAS.md             # Guía de las capturas conservadas
│   ├── capturas/                         # 31 archivos PNG de evidencia histórica
│   ├── laboratorios-mongo-backend.md     # Índice de los doce PDF de prácticas de backend
│   ├── laboratorios-sql-router/         # Documentos React Router, EF Core y Subastas
│   └── maraton-series-backend/          # Doce documentos de prácticas y ARQUITECTURA.md
├── maraton-series/
│   ├── cliente/                          # React 19 + Vite 7 + Bootstrap 5
│   │   ├── src/
│   │   │   ├── api/                     # Funciones de acceso al API
│   │   │   ├── componentes/             # Filtros, formulario, lista, tarjetas y resumen
│   │   │   ├── data/                    # Estados de series
│   │   │   ├── utils/                   # Validación y transiciones de estado
│   │   │   ├── App.jsx
│   │   │   └── main.jsx
│   │   ├── .env.example
│   │   └── package.json
│   ├── servidor/                         # API REST Express 5 y MongoDB
│   │   ├── src/
│   │   │   ├── config/                  # Variables de entorno y conexión
│   │   │   ├── miembros/                # Rutas, controlador, servicio, repositorio
│   │   │   ├── series/                  # CRUD, reglas y persistencia
│   │   │   └── middlewares/             # Gestión de errores
│   │   ├── tests/                       # Pruebas de validación
│   │   ├── requests.http                # Peticiones de ejemplo
│   │   ├── .env.example
│   │   └── package.json
│   ├── mongo-practicas/                 # Playgrounds y preparación del modelo de MongoDB
│   ├── series-js/                       # Ejercicio JS de consumo de APIs externas
│   ├── tests/                           # Pruebas JavaScript del Maratón
│   └── *.pdf                            # Informes de etapas anteriores
└── proyectos-base/
    ├── Laboratorio Pura Vida Tours/      # Migración HTML/JS a React
    ├── Registro de solicitudes HTML a React/
    ├── sql-subastas/                    # Scripts SQL independientes
    ├── Practica*/ y Práctica*/          # Maquetación y CSS
    └── Laboratorio_*.pdf                # Materiales y respuestas de otras prácticas
```

**Nota:** `servidor-net/` forma parte de la estructura exigida por la consigna, pero no existe en esta copia. No se afirma que los archivos PDF sean equivalentes a una implementación .NET ejecutable.

## Tecnologías

| Área | Tecnologías y recursos presentes |
|---|---|
| Interfaz | HTML, CSS, JavaScript, React 19, Vite 7, Bootstrap 5 |
| API | Node.js, Express 5, CORS, JSON y API REST |
| Base de datos del Maratón | MongoDB y controlador oficial `mongodb` (sin Mongoose) |
| Pruebas | Módulo `node:test` y aserciones integradas |
| SQL complementario | Scripts de SQL Server de la práctica de subastas |
| Documentación | Markdown, PDF y capturas PNG |

## Preparación del entorno

Se necesita **Node.js** compatible con Vite 7 (preferiblemente Node 22.12+ o Node 24 LTS), npm, acceso a **MongoDB Atlas** y, opcionalmente, VS Code con las extensiones **MongoDB for VS Code** y **REST Client**. Para ejecutar los ejercicios SQL, se necesita una instancia de SQL Server y un cliente como la extensión **SQL Server (mssql)** de VS Code.

Comprobar Node.js:

```powershell
node --version
npm --version
```

### 1. Preparar MongoDB

1. Crear o utilizar una base de pruebas `maraton` en MongoDB Atlas.
2. Configurar las colecciones `miembros` y `series`, usando el modelo definitivo con `_id` y `miembroId` de tipo `ObjectId`.
3. Leer [`maraton-series/mongo-practicas/README.md`](maraton-series/mongo-practicas/README.md) antes de ejecutar los Playgrounds. El modelo inicial de práctica utiliza identificadores diferentes y **no debe mezclarse** con el modelo final.
4. Configurar los permisos de conexión y el usuario de la base en Atlas. No usar credenciales reales en documentos versionados.

### 2. Iniciar Express (terminal 1)

Desde PowerShell, situarse en la carpeta de la tarea y ejecutar:

```powershell
cd '.\maraton-series\servidor'
Copy-Item .env.example .env
notepad .env
npm install
npm run dev
```

Editar `.env` con la URI de Atlas **propia** y válida. Las variables disponibles en la plantilla son `PORT`, `MONGODB_URI`, `DB_NAME` y `CLIENT_ORIGIN`.

La API utiliza por defecto **`http://localhost:3000`** y expone:

| Método | Ruta | Propósito |
|---|---|---|
| GET | `/api/miembros` | Listar los miembros disponibles |
| GET | `/api/series` | Listar las series guardadas |
| POST | `/api/series` | Crear una serie tras validar los datos |
| PATCH | `/api/series/:id/estado` | Modificar el estado de una serie |
| DELETE | `/api/series/:id` | Eliminar una serie |

El archivo [`maraton-series/servidor/requests.http`](maraton-series/servidor/requests.http) incluye ejemplos de solicitudes. Algunos identificadores de las pruebas deben reemplazarse por IDs reales de la base de datos.

### 3. Iniciar React (terminal 2)

En otra terminal de PowerShell, desde la raíz de la tarea:

```powershell
cd '.\maraton-series\cliente'
Copy-Item .env.example .env
npm install
npm run dev
```

La variable `VITE_API_URL` debe apuntar a `http://localhost:3000/api`. Abrir **`http://localhost:5173`** en el navegador. El servidor Express debe estar en ejecución y conectado a MongoDB para que el cliente cargue los datos.

Para comprobar la compilación del cliente en Windows:

```powershell
npm run build
```

### 4. Verificar el flujo de la aplicación

1. Abrir el cliente y confirmar que se carguen miembros y series desde la API.
2. Aplicar filtros y comprobar los conteos del resumen.
3. Crear una serie desde el formulario; revisar la respuesta HTTP del backend.
4. Cambiar el estado y verificar que se mantenga al recargar.
5. Eliminar una serie de prueba y comprobar que desaparezca de MongoDB.

El recorrido básico es: **formulario o botón React → `src/api/seriesApi.js` → ruta Express → controlador → servicio → repositorio → MongoDB → respuesta HTTP → actualización de `useState`**. Los cambios en React se reflejan después de que el servidor confirma las operaciones.

## Pruebas automatizadas

Desde `maraton-series`:

```powershell
node --test tests/*.test.mjs
```

Desde `maraton-series/servidor`:

```powershell
npm test
```

En la revisión del ZIP recibido el **23/11/2026**, se ejecutaron las pruebas sin una base de datos externa: **8/8 pruebas del Maratón y 9/9 del backend pasaron**. Estas verificaciones cubren validaciones, transformaciones, estado y funciones aisladas; **no certifican** el funcionamiento end-to-end de MongoDB Atlas ni la interfaz en un navegador.

## Prácticas complementarias incluidas

- **Fundamentos HTML y CSS:** semántica, maquetación, especificidad, herencia y diseño adaptable, en `proyectos-base/`.
- **Bootstrap, Sass y React introductorio:** ejercicios guiados y adaptación de HTML/JavaScript a componentes React.
- **Pura Vida Tours y Registro de solicitudes:** proyectos con HTML/JS y versiones React cuando se dispone de sus fuentes.
- **Consumo de APIs con JavaScript:** `maraton-series/series-js/`, con servicios externos de ejemplo.
- **MongoDB y backend REST:** Playgrounds, consultas y operaciones HTTP del Maratón.
- **SQL Server — Subastas:** `proyectos-base/sql-subastas/` contiene `01-crear.sql`, `02-datos.sql` y `03-pruebas.sql`. **Cuidado:** el primero puede eliminar una base `Subastas` ya existente; utilizar exclusivamente una instancia de laboratorio.

## Documentación y capturas

- [`docs/laboratorios.md`](docs/laboratorios.md): bitácora que **todavía necesita completar la organización por los 20 laboratorios de la rúbrica**; la versión recibida solo concatenaba tres documentos Markdown.
- [`docs/INDICE_EVIDENCIAS.md`](docs/INDICE_EVIDENCIAS.md): correspondencia entre laboratorios y las imágenes históricas disponibles.
- [`docs/capturas/`](docs/capturas/): **31 capturas PNG originales** presentes en la copia revisada.
- [`docs/laboratorios-mongo-backend.md`](docs/laboratorios-mongo-backend.md): enlaces a las doce fichas PDF de las etapas de MongoDB, Express y React.
- [`docs/maraton-series-backend/ARQUITECTURA.md`](docs/maraton-series-backend/ARQUITECTURA.md): descripción del flujo de petición y modelo de datos del backend.
- [`docs/laboratorios-sql-router/`](docs/laboratorios-sql-router/): informes de prácticas de React Router, EF Core y SQL Server.

Las capturas documentan ejecuciones **históricas**, no pruebas realizadas de nuevo al preparar este README.

## Pendientes de integración según la consigna

La Parte A exige, además de la funcionalidad presente:

1. **React Router:** varias páginas, una ruta de detalle con `:id` y filtros persistidos en la dirección. El código de esta copia no contiene la dependencia ni las rutas correspondientes.
2. **ASP.NET Core + EF Core + SQL Server:** carpeta `maraton-series/servidor-net/`, entidades, migraciones y las rutas `GET /api/miembros` y `GET /api/series`, con el formato JSON correspondiente a Express. Esta carpeta está ausente en el ZIP revisado.
3. **Bitácora por laboratorio:** completar en `docs/laboratorios.md` las 20 secciones, cada una con su captura, «Explique el recorrido», «Reflexiona» y experimentos, cuando corresponda.

Para la defensa, ambos servidores, la base de datos y el cliente deben poder arrancar en el entorno local una vez que se integre lo faltante. El historial Git y la etiqueta `tarea-3` deben comprobarse en el repositorio real: un ZIP no permite verificar commits ni etiquetas.

## Buenas prácticas para Git

Este proyecto incluye `.gitignore` para omitir `node_modules/`, `dist/`, `bin/`, `obj/`, archivos `.env` y otros artefactos locales. Se conservan los `.env.example`, `package.json`, `package-lock.json`, código, documentación y evidencias necesarias.

**Autor de esta entrega individual:** Francisco Torres Sandoval.
