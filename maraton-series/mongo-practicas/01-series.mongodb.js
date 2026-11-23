// Laboratorio inicial de CRUD en MongoDB, ANTES del modelo relacional del API.
// ATENCIÓN: el ejercicio original usa _id numérico y miembro como texto.
// NO ejecute los insert de esta práctica si ya migró al modelo final ObjectId + miembroId.
// Seleccione los bloques marcados con // y descoméntelos en VS Code.

// Paso 2 - Insertar las cinco series originales (solo una vez, modelo inicial)
// use('maraton')
// db.series.insertMany([
//  {_id: 1, titulo: 'Dark', genero: 'Ciencia ficción', temporadas: 3, estado: 'Vista', miembro: 'Ana'},
//  {_id: 2, titulo: 'The Office', genero: 'Comedia', temporadas: 9, estado: 'Viendo', miembro: 'Luis'},
//  {_id: 3, titulo: 'Arcane', genero: 'Animación', temporadas: 2, estado: 'Por ver', miembro: 'Sofía'},
//  {_id: 4, titulo: 'Chernobyl', genero: 'Drama', temporadas: 1, estado: 'Vista', miembro: 'Diego'},
//  {_id: 5, titulo: 'Planeta Tierra', genero: 'Documental', temporadas: 3, estado: 'Por ver', miembro: 'Ana'},
// ])

// Paso 3 - Consulta y orden
// use('maraton')
// db.series.find()
// db.series.find({}, {titulo: 1, estado: 1, _id: 0}).sort({titulo: 1})

// Paso 4 - Filtros
// use('maraton')
// db.series.find({estado: 'Vista'})
// db.series.find({estado: 'Por ver', miembro: 'Ana'})
// db.series.find({temporadas: {$gt: 2}})

// Paso 5 - Conteos (2, 1, 2 antes de cambios)
// use('maraton')
// db.series.countDocuments({estado: 'Por ver'})
// db.series.countDocuments({estado: 'Viendo'})
// db.series.countDocuments({estado: 'Vista'})
// db.series.aggregate([{$group: {_id: '$estado', cantidad: {$sum: 1}}}])

// Pasos 6-8 - Cambios DESTRUCTIVOS del ejercicio; seleccionar solo si procede
// use('maraton')
// db.series.updateOne({_id: 3}, {$set: {estado: 'Viendo'}})
// db.series.insertOne({_id: 6, titulo: 'Severance', genero: 'Drama', temporadas: 2, estado: 'Por ver', miembro: 'Luis'})
// db.series.deleteOne({_id: 4})

// Paso 9 - Demostración del problema de duplicar nombre en varias series:
// db.series.updateMany({miembro: 'Ana'}, {$set: {miembro: 'Ana María'}})
// Solución final: miembroId:ObjectId y $lookup, implementados en el API.
