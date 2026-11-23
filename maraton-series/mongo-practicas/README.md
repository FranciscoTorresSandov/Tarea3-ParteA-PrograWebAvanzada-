# MongoDB Atlas - Playgrounds y preparación de datos

**Solo se requiere MongoDB Atlas (nube), la extensión MongoDB for VS Code y una conexión válida.** No hace falta instalar `mongod` local.

## Orden y alcance

1. `00-prueba.mongodb.js` - crear y borrar la base temporal `prueba` (seleccione bloques individualmente).
2. `01-miembros.mongodb.js` - índice único, cuatro miembros, CRUD y pruebas de error. Los ejemplos de inserción/actualización están comentados para evitar ejecuciones accidentales; descomente y ejecute el bloque que corresponda.
3. `01-series.mongodb.js` - laboratorio inicial con `_id` numérico y `miembro` texto. **No es el modelo definitivo**; solo para practicar CRUD.
4. `03-preparar-modelo-api.mongodb.js` - conversión del modelo de práctica al modelo del API: `_id:ObjectId`, `miembroId:ObjectId`, `calificaciones:[]` y validación JSON Schema. No borra la base ni sus miembros.

## Precauciones

- En Atlas use proyecto `soft12`, base `maraton`, y usuario dedicado. Autorice únicamente la IP necesaria.
- **No ejecute el Playground completo repetidamente**: utilice «Run Selected Lines» para prácticas y compruebe los resultados. El preparador final es re-ejecutable para los datos conocidos, pero revise antes si agregó series propias.
- Si ya tiene un modelo final con `ObjectId` y datos reales, haga una copia de respaldo antes de migrar. No utilice `db.series.drop()` ni `db.dropDatabase()` en la base `maraton`.
- En el experimento de miembros, el docente cambia temporalmente Diego a «Diego Mora»; el API mostrará ese nombre a menos que lo restaure.
- El diseño final del `$jsonSchema` se reconstruyó desde el contrato de las etapas 4-6 porque no se adjuntó el laboratorio de diseño del modelo final. Compruebe con su consigna docente si exige otros campos o restricciones.
- Para evitar errores `Document failed validation`, el tipo de `temporadas` debe ser **int**, no texto, y `miembroId` un **ObjectId**.

## Comprobar

```js
use('maraton')
db.miembros.countDocuments()      // 4 para datos de ejemplo
db.series.countDocuments()        // 5 antes de crear/eliminar otras series
db.series.findOne()               // _id:ObjectId, miembroId:ObjectId
```

**No suba credenciales ni exports privados de su base al repositorio.**
