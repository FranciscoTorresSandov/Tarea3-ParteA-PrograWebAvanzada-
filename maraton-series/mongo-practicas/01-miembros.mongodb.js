// Laboratorio: colección miembros en MongoDB Atlas.
// Importante: seleccione un bloque cada vez. No vuelva a insertar los 4 miembros.
// Paso 2 - Índice único (puede ejecutarse varias veces sin duplicar el índice)
use('maraton')
db.miembros.createIndex({correo: 1}, {unique: true})

// Paso 3 - SOLO UNA VEZ: insertar cuatro miembros con ObjectId automático.
// use('maraton')
// db.miembros.insertMany([
//  {nombre: 'Ana', correo: 'ana@club.com', generosFavoritos: ['Ciencia ficción', 'Documental'], registro: new Date('2026-08-01')},
//  {nombre: 'Luis', correo: 'luis@club.com', generosFavoritos: ['Comedia'], registro: new Date('2026-08-03')},
//  {nombre: 'Sofía', correo: 'sofia@club.com', generosFavoritos: ['Animación','Drama'], registro: new Date('2026-08-10')},
//  {nombre: 'Diego', correo: 'diego@club.com', generosFavoritos: ['Drama'], registro: new Date('2026-09-02')},
// ])

// Paso 4 - Probar E11000 (fallo deliberado): DESCOMENTAR SOLO PARA LA PRUEBA.
// use('maraton')
// db.miembros.insertOne({nombre: 'Otra Ana', correo: 'ana@club.com'})

// Paso 5 - Leer, proyectar y ordenar
// use('maraton')
// db.miembros.find()
// db.miembros.find({}, {nombre: 1, correo: 1, _id: 0}).sort({nombre: 1})
// db.miembros.findOne({correo: 'sofia@club.com'})

// Paso 6 - Filtros y conteos
// use('maraton')
// db.miembros.find({generosFavoritos: 'Drama'}, {nombre: 1, _id: 0})
// db.miembros.find({registro: {$gte: new Date('2026-08-05')}}, {nombre: 1, _id: 0})
// db.miembros.countDocuments()

// Paso 7 - Actualizar: el segundo cambia el nombre de Diego (considere restaurarlo después).
// use('maraton')
// db.miembros.updateOne({correo: 'luis@club.com'}, {$addToSet: {generosFavoritos: 'Drama'}})
// db.miembros.updateOne({correo: 'diego@club.com'}, {$set: {nombre: 'Diego Mora'}})
// Para restaurar si necesita exactamente Diego en la UI:
// db.miembros.updateOne({correo: 'diego@club.com'}, {$set: {nombre: 'Diego'}})

// Paso 8 - Insertar y eliminar SOLO el miembro temporal
// use('maraton')
// db.miembros.insertOne({nombre: 'Prueba', correo: 'prueba@club.com', generosFavoritos: [], registro: new Date()})
// db.miembros.deleteOne({correo: 'prueba@club.com'})
// Paso 9: db.miembros.countDocuments() debe ser 4.
