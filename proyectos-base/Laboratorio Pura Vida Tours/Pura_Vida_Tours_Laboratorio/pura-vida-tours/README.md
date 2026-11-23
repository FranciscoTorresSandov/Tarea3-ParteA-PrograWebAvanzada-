# Pura Vida Tours - Laboratorio HTML, Bootstrap, JavaScript y React

Laboratorio del curso SOFT-12. Incluye dos implementaciones del mismo catálogo de tours: una con JavaScript y el DOM, y otra con componentes de React y Vite. **Incluye los cinco ejercicios de extensión** de la guía.

## Parte 1 - HTML

Abrir `pura-vida-html/index.html` con Live Server o un servidor HTTP local. El proyecto necesita conexión a Internet para Bootstrap desde CDN y las imágenes ilustrativas.

## Parte 2 - React

```bash
cd pura-vida-react
npm install
npm run dev
```

Usar la URL que presente Vite (habitualmente http://localhost:5173). Para comprobar la compilación:

```bash
npm run build
```

`node_modules/` y `dist/` no se versionan ni se incluyen en esta entrega.

## Consideraciones

- Versión base: 4 enlaces, 3 tours y 4 reservas.
- Extensiones: Río Celeste, dos reservas adicionales, formulario de contacto, tres testimonios y color de marca configurable.
- El formulario es de presentación: **no envía información**, ya que el laboratorio no incluye backend ni eventos de React.
- Los botones “Reservar” desplazan a la sección de reservas, no crean registros.
- La guía original solicita capturas; se omiten del PDF por preferencia de entrega y deberán aportarse aparte si la evaluación las exige.
