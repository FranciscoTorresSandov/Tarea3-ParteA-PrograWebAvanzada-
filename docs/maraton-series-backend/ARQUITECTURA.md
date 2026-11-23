# Arquitectura del Maratón de series — etapa final

## Separación por procesos y capas

```mermaid
flowchart TD
  U[Usuario en el navegador] --> R[React y Vite :5173]
  R -->|fetch GET POST PATCH DELETE| A[Express :3000]
  A --> RT[Routers]
  RT --> C[Controllers]
  C --> S[Services: validación y reglas]
  S --> REP[Repositories: driver MongoDB]
  REP --> DB[(MongoDB Atlas / base maraton)]
  DB --> REP --> S --> C --> A --> R
```

## Flujo de creación de una serie

```mermaid
sequenceDiagram
  participant F as FormularioSerie
  participant R as React App
  participant API as Express
  participant DB as MongoDB
  F->>F: Validar campos
  F->>R: onAgregar(datos con miembroId)
  R->>API: POST /api/series
  API->>API: validarSerie y existe(miembroId)
  API->>DB: insertOne({estado: Por ver, miembroId:ObjectId})
  DB-->>API: insertedId
  API->>DB: aggregate con $lookup
  DB-->>API: Serie con nombre de miembro
  API-->>R: 201 serie creada
  R->>R: setSeries(actuales => [...actuales, creada])
  R-->>F: Confirmación
  F->>F: Limpiar y reactivar formulario
```

## Modelo de datos definitivo

```mermaid
erDiagram
  MIEMBROS ||--o{ SERIES : "miembroId referencia _id"
  MIEMBROS {
    ObjectId _id PK
    string nombre
    string correo UK
    stringArray generosFavoritos
    date registro
  }
  SERIES {
    ObjectId _id PK
    string titulo
    string genero
    int temporadas
    string estado
    ObjectId miembroId FK
    array calificaciones
  }
```

**Precaución:** el laboratorio inicial de `01-series.mongodb.js` utiliza IDs numéricos y miembro en texto. La migración al modelo del API se realiza en `03-preparar-modelo-api.mongodb.js`. Esta implementación no usa Mongoose: sigue el **driver oficial `mongodb`** solicitado por el docente.
