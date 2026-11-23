# Maratón de series - React + Express + MongoDB Atlas

Aplicación acumulativa SOFT-12. **Los datos ahora persisten en MongoDB Atlas** a través de Express.

## Estructura

- `cliente/`: Vite + React + Bootstrap; consulta GET, agrega POST, modifica PATCH y elimina DELETE.
- `servidor/`: Express 5 + MongoDB (driver oficial), módulos `miembros` y `series` por capas.
- `mongo-practicas/`: tres ejercicios guiados (Atlas/miembros/series), y preparación segura para el modelo final del API.
- `series-js/`: laboratorio **independiente** sobre TVmaze y JSONPlaceholder, no depende del backend Express.
- `tests/`: pruebas de los primeros laboratorios React/JavaScript.

## Antes de ejecutar

1. Crear un clúster Free en MongoDB Atlas, usuario de base y autorización de IP.
2. Usar los Playgrounds MongoDB de `mongo-practicas/`. No mezclar los datos del ejercicio inicial (_id numérico) con el modelo final (_id y miembroId ObjectId).
3. Preparar o migrar los datos con `mongo-practicas/03-preparar-modelo-api.mongodb.js` **después** de leer `mongo-practicas/README.md`.
4. Copiar `servidor/.env.example` a `servidor/.env` y poner **su** URL real de MongoDB Atlas. Copiar `cliente/.env.example` a `cliente/.env`.

## Ejecutar desde dos terminales

```bash
cd maraton-series/servidor
npm install
npm run test
npm run dev
```

```bash
cd maraton-series/cliente
npm install
npm run build
npm run dev
```

El cliente abre en `http://localhost:5173`; el API en `http://localhost:3000/api`.
Pruebe `GET /api/miembros` y `GET /api/series` desde `servidor/requests.http` con REST Client.

**Seguridad:** nunca subir `.env` ni contraseñas. Subir solo `.env.example`.
**Alcance:** aquí se completan las etapas Express + MongoDB + React/API. Router y `servidor-net` se integran en una ronda distinta cuando se proporcionen sus consignas.
