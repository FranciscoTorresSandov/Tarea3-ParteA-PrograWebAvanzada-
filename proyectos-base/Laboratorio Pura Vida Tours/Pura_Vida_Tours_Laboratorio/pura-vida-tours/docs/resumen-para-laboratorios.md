# Laboratorio: De HTML, Bootstrap y JavaScript a React

**Proyecto:** Pura Vida Tours. **Categoría:** `proyectos-base/` (introducción a React).

## Objetivo

Construir la misma interfaz de tours con JavaScript/DOM y migrarla a componentes de React + Vite.

## Tabla «Explique el recorrido»

| Paso | Parte HTML/JS | Parte React |
|---|---|---|
| Entrada | `index.html` + `js/app.js` | `index.html` → `src/main.jsx` → `src/App.jsx` |
| Menú | `crearMenu` busca `#lista-menu` y usa `forEach` para añadir enlaces | `Navbar.jsx` utiliza `enlacesMenu.map` |
| Tours | `crearCards` genera columnas y tarjetas con el DOM | `ListaTours.jsx` crea las tarjetas con `map` y `key` |
| Reservas | `crearTabla` genera las filas y badges según el estado | `TablaReservas.jsx` produce las filas desde los datos locales |
| Salida | Navegador muestra 4 tours y 6 reservas | App muestra los mismos datos más contacto y testimonios |

## Experimentos y observaciones

1. Al agregar Río Celeste al arreglo local, se crea una cuarta tarjeta sin escribir otra tarjeta manualmente.
2. Al agregar reservas Pendiente/Cancelada, las clases de badge reflejan ambos estados.
3. La variante React reemplaza el DOM manual con composición de componentes y `map`.
4. Cambiar la variable `--verde-principal` actualiza la identidad verde del menú y el pie.

## Reflexiones

Respuestas desarrolladas en `docs/Laboratorio_HTML_Bootstrap_JS_a_React_COMPLETADO.pdf` (sección 6).

## Evidencia

**Pendiente:** la consigna solicita capturas de escritorio y móvil. No se agregaron al PDF por instrucción del estudiante.
