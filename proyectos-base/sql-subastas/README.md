# Coleccionistas y subastas — SQL Server (SOFT-12)

Este proyecto es **independiente** del Maratón de series. No copiar estos SQL dentro de
`maraton-series/servidor-net/sql/`: esa carpeta usa otra base (`Maraton`) y EF Core Code First.
La consigna de Subastas prepara una base Database First que podría usarse en otro laboratorio.

## Herramientas (Windows)

1. Instalar **Microsoft SQL Server 2025 Express** de
   https://www.microsoft.com/en-us/download/details.aspx?id=108836.
   Elegir Basic y confirmar el nombre de instancia (`SQLEXPRESS`).
2. Instalar **VS Code** y extensión **SQL Server (mssql)** de Microsoft.
3. Conectarse desde VS Code: servidor `localhost\SQLEXPRESS`, autenticación Windows,
   marcar **Trust server certificate** únicamente en el entorno de práctica local.
4. Probar con `SELECT @@VERSION;`.

## Orden de ejecución

1. `01-crear.sql` — crea la base `Subastas` y **7 tablas**; destruye una base `Subastas`
   anterior y todos sus datos. NO ejecutar contra una base que quieras conservar.
2. `02-datos.sql` — inserta registros de ejemplo. Ejecutar **una sola vez** y solamente
   después de recrear la base; usa IDs 1, 2, 3... del esquema recién generado.
3. `03-pruebas.sql` — ejecutar sus SELECT; **seleccionar y ejecutar por separado** las
   pruebas 3–6, porque provocan errores intencionales. La prueba de puja 100 debe
   aceptarse y luego eliminarse como evidencia de una regla que requiere validación del API.

## Resultado esperado

| Tabla | Filas |
|---|---:|
| Coleccionistas | 3 |
| Categorias | 4 |
| Articulos | 3 |
| ArticuloCategorias | 4 |
| ArticuloFotos | 3 |
| Subastas | 2 |
| Pujas | 4 |

La guía original configura una subasta `Activa` con fecha final 2026-11-20: el dato es
estático para el laboratorio, aunque ya haya pasado esa fecha; no se actualiza por reloj.

**Limitación de verificación:** se recuperó el código del DOCX original y se inspeccionó
su integridad, pero no se ejecutaron las consultas contra SQL Server en este entorno.

## Reglas de negocio

- RN-1: correo único — `UQ_Coleccionistas_Correo`, validado por SQL Server.
- RN-2: la puja debe superar el mayor precio y el precio base — pendiente de lógica del API.
- RN-3: el dueño no puede pujar en su subasta — pendiente de lógica del API.
- RN-4: la subasta cerrada no admite pujas — pendiente de lógica del API.
- RN-5: conservación válida — `CK_Articulos_Conservacion`, validado por SQL Server.

No se implementa EF Core para Subastas en esta ronda: el documento solo solicita la
base, los datos y los tres scripts SQL.
