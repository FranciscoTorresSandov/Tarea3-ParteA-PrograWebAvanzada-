# API Express de Maratón de series

## Instalación

```bash
npm install
cp .env.example .env
# Editar MONGODB_URI con los valores reales, sin subir .env
npm test
npm run dev
```

API en http://localhost:3000/api, cliente permitido http://localhost:5173. Requiere la base `maraton` de MongoDB Atlas con `miembros` y `series` preparadas.

## Contratos

| Método | Ruta | Éxito | Errores previstos |
|---|---|---|---|
| GET | /api/miembros | 200, arreglo `{_id,nombre}` | 500 inesperado |
| GET | /api/series | 200, arreglo con `miembro` desde `$lookup` | 500 inesperado |
| POST | /api/series | 201, serie completa | 400 DATOS_INVALIDOS / JSON_INVALIDO |
| PATCH | /api/series/:id/estado | 200, serie actualizada | 400 ID_INVALIDO/DATOS_INVALIDOS, 404 NO_ENCONTRADA |
| DELETE | /api/series/:id | 204, sin cuerpo | 400 ID_INVALIDO, 404 NO_ENCONTRADA |

`requests.http` contiene 14 peticiones: antes de las solicitudes 6 y 9, sustituya los IDs de ejemplo.

## Capas

`app.js` → `routes` → `controller` → `service` → `repository` → `MongoDB`. El campo `miembroId` se guarda como ObjectId. La UI solo recibe campos públicos.

## Seguridad

`.env` contiene credenciales de Atlas y está ignorado por Git. No agregue contraseñas ni URIs reales a README, cliente o tests. Los errores 500 tienen mensaje genérico.
