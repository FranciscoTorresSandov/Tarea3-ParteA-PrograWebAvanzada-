# Índice de evidencias — Parte A

Este índice describe **capturas históricas que ya están en `docs/capturas/` del repositorio**. Se verificaron sus nombres y descripciones a partir del índice existente en GitHub; no son fotografías recién tomadas ni imágenes artificiales de pruebas.

## Captura principal para cada laboratorio

| Sección de `docs/laboratorios.md` | Archivo PNG original | Qué demuestra |
|---|---|---|
| 01 · React: montaje | [`base_01_mi_primera_app.png`](capturas/base_01_mi_primera_app.png) | Interfaz original en React. |
| 02 · Pura Vida React | [`base_02_pura_vida_componentes.png`](capturas/base_02_pura_vida_componentes.png) | Página con componentes turísticos. |
| 03 · Props y children | [`base_03_props_children_estado.png`](capturas/base_03_props_children_estado.png) | Props y contenido anidado con render. |
| 04 · Eventos y useState | [`base_03_props_children_estado.png`](capturas/base_03_props_children_estado.png) | Contador visible tras interacción. |
| 05 · Maratón: montaje | [`react_01_lista.png`](capturas/react_01_lista.png) | Estado acumulativo del cliente con datos de Atlas. |
| 06 · Componentes del tablero | [`react_01_lista.png`](capturas/react_01_lista.png) | Lista de tarjetas y resumen. |
| 07 · useState / inmutabilidad | [`react_03_patch_200_atlas.png`](capturas/react_03_patch_200_atlas.png) | Acción confirmada PATCH 200. |
| 08 · Variable vs. estado | [`base_04_variable_y_estado.png`](capturas/base_04_variable_y_estado.png) | Demostración React de variable vs. estado. |
| 09 · Filtros y resumen | [`router_03_filtros_url_atlas.png`](capturas/router_03_filtros_url_atlas.png) | Filtros persistentes en la URL. |
| 10 · Formulario controlado | [`react_07_formulario_api_400.png`](capturas/react_07_formulario_api_400.png) | Error real por campos desde API. |
| 11 · API escuchando | [`atlas_04_registro_arranque.png`](capturas/atlas_04_registro_arranque.png) | Registro histórico de arranque abierto en VS Code. |
| 12 · Conexión MongoDB | [`atlas_03_base_y_colecciones.png`](capturas/atlas_03_base_y_colecciones.png) | Base y colecciones Atlas. |
| 13 · GET miembros | [`api_01_miembros_200_atlas.png`](capturas/api_01_miembros_200_atlas.png) | HTTP GET /api/miembros, 200. |
| 14 · POST series | [`api_02_post_201_atlas.png`](capturas/api_02_post_201_atlas.png) | HTTP POST /api/series, 201. |
| 15 · PATCH / DELETE | [`react_04_patch_delete_atlas.png`](capturas/react_04_patch_delete_atlas.png) | PATCH 200 y DELETE 204 desde navegador. |
| 16 · React lee API | [`react_02_get_atlas_red.png`](capturas/react_02_get_atlas_red.png) | GET de miembros y series, pestaña Red. |
| 17 · Formulario POST | [`react_07_formulario_api_400.png`](capturas/react_07_formulario_api_400.png) | Errores del POST mostrados bajo campos. |
| 18 · Cambiar/quitar React | [`react_05_dos_pestanas_404.png`](capturas/react_05_dos_pestanas_404.png) | Segundo DELETE 404 desde pestaña desactualizada. |
| 19 · Router | [`router_02_detalle_cancelacion_atlas.png`](capturas/router_02_detalle_cancelacion_atlas.png) | Detalle y limpieza de petición. |
| 20 · EF Core / SQL Server | [`sql_02_get_series_200.png`](capturas/sql_02_get_series_200.png) | GET .NET /api/series, 200. |

## Capturas adicionales de resultados reales

| Archivo | Caso |
|---|---|
| [`api_03_validacion_400_atlas.png`](capturas/api_03_validacion_400_atlas.png) | POST inválido 400, mensajes por campo. |
| [`api_04_no_encontrada_404_atlas.png`](capturas/api_04_no_encontrada_404_atlas.png) | Recurso no encontrado 404. |
| [`api_05_id_invalido_400_atlas.png`](capturas/api_05_id_invalido_400_atlas.png) | ObjectId inválido 400. |
| [`atlas_05_documentos.png`](capturas/atlas_05_documentos.png) | Documentos almacenados y contador en Atlas. |
| [`react_06_error_cors_5174.png`](capturas/react_06_error_cors_5174.png) | Error CORS real al cambiar el origen del navegador. |
| [`react_08_post_cuerpo_invalido.png`](capturas/react_08_post_cuerpo_invalido.png) | Payload POST inválido; no confundirlo con un POST 201. |
| [`react_09_persistencia_severance.png`](capturas/react_09_persistencia_severance.png) | Persistencia de Severance tras recargar. |
| [`router_01_detalle.png`](capturas/router_01_detalle.png) | Detalle inicial conectado a MongoDB local. |
| [`sql_01_tablas.png`](capturas/sql_01_tablas.png) | Tablas SQL creadas por migración. |
| [`sql_03_favoritos_consulta6.png`](capturas/sql_03_favoritos_consulta6.png) | Relaciones de géneros favoritos. |
| [`sql_04_join_consulta3.png`](capturas/sql_04_join_consulta3.png) | JOIN de series, géneros y miembros. |
| [`sql_05_registro_restricciones.png`](capturas/sql_05_registro_restricciones.png) | Registro histórico de errores de integridad SQL. |

## Límites de estas evidencias

- Varias secciones comparten la misma captura **porque el Maratón es acumulativo**; esto no acredita una captura individual para cada estado intermedio.
- `atlas_04_registro_arranque.png` y `sql_05_registro_restricciones.png` son capturas de **archivos de registro** abiertos en VS Code, no terminales corriendo.
- Las dos imágenes de configuración Atlas (`atlas_01_acceso_red.png`, `atlas_02_usuario.png`) quedan conservadas en `docs/capturas/`, pero el paquete de *resultados de pruebas* las omite deliberadamente.
- No constan capturas independientes para las prácticas complementarias de Bootstrap/Sass/Registro/TVmaze/Subastas; capturarlas realmente al ejecutar en el equipo antes de atribuir resultados.

## Otras dos capturas de configuración (no pruebas funcionales)

- [`atlas_01_acceso_red.png`](capturas/atlas_01_acceso_red.png): configuración de acceso de red en MongoDB Atlas. La regla amplia mostrada es ilustrativa; se recomienda restringirla en un entorno real.
- [`atlas_02_usuario.png`](capturas/atlas_02_usuario.png): existencia de usuario de base en Atlas sin publicar contraseñas.

**Total de archivos PNG preservados:** 31. Las capturas históricas no demuestran por sí solas que todas las etapas ejecutables estén presentes en esta copia.
