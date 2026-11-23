// Preparación NO DESTRUCTIVA del modelo requerido por Express /api/series.
// IMPORTANTE: lea README.md antes de ejecutar el archivo.
// 1) Guarde copia de su base si contiene datos que necesita conservar.
// 2) Ejecute el script una sola vez; es re-ejecutable para los datos de ejemplo.
// 3) No elimina colecciones ni reemplaza una serie válida existente.
use('maraton')

// Crear índice y los miembros que faltan, conservando los ObjectId ya existentes.
db.miembros.createIndex({correo: 1}, {unique: true})
const miembrosIniciales = [
  {nombre: 'Ana', correo: 'ana@club.com', generosFavoritos: ['Ciencia ficción','Documental'], registro: new Date('2026-08-01')},
  {nombre: 'Luis', correo: 'luis@club.com', generosFavoritos: ['Comedia'], registro: new Date('2026-08-03')},
  {nombre: 'Sofía', correo: 'sofia@club.com', generosFavoritos: ['Animación','Drama'], registro: new Date('2026-08-10')},
  {nombre: 'Diego', correo: 'diego@club.com', generosFavoritos: ['Drama'], registro: new Date('2026-09-02')},
]
for (const miembro of miembrosIniciales) {
  db.miembros.updateOne({correo: miembro.correo}, {$setOnInsert: miembro}, {upsert: true})
}
if (!db.getCollectionNames().includes('series')) db.createCollection('series')

// Normalizar nombres de miembros presentes en la práctica original.
const correoPorNombre = {
  'Ana': 'ana@club.com', 'Ana María': 'ana@club.com',
  'Luis': 'luis@club.com', 'Sofía': 'sofia@club.com',
  'Diego': 'diego@club.com', 'Diego Mora': 'diego@club.com',
}
// Convertir solo series heredadas (miembro en texto o _id numérico) a ObjectId / miembroId.
const heredadas = db.series.find({$or: [{miembroId: {$exists: false}}, {_id: {$type: 'int'}}, {_id: {$type: 'double'}}]}).toArray()
for (const antigua of heredadas) {
  const correo = correoPorNombre[antigua.miembro]
  if (!correo) throw new Error(`Miembro sin correspondencia: ${antigua.miembro}`)
  const miembro = db.miembros.findOne({correo})
  if (!miembro) throw new Error(`No existe el miembro de ${antigua.titulo}`)
  // Evitar una segunda copia al volver a ejecutar el script tras una interrupción.
  const repetida = db.series.findOne({titulo: antigua.titulo, miembroId: miembro._id})
  if (!repetida) {
    db.series.insertOne({
      titulo: antigua.titulo, genero: antigua.genero,
      temporadas: antigua.temporadas, estado: antigua.estado,
      miembroId: miembro._id, calificaciones: [],
    })
  }
  // Solo se elimina el documento ANTIGUO después de confirmar la inserción o coincidencia.
  db.series.deleteOne({_id: antigua._id})
}
// Si no se habían ejecutado las prácticas con series numéricas, poblar las cinco iniciales.
const seriesIniciales = [
  {titulo: 'Dark', genero: 'Ciencia ficción', temporadas: 3, estado: 'Vista', correo: 'ana@club.com'},
  {titulo: 'The Office', genero: 'Comedia', temporadas: 9, estado: 'Viendo', correo: 'luis@club.com'},
  {titulo: 'Arcane', genero: 'Animación', temporadas: 2, estado: 'Por ver', correo: 'sofia@club.com'},
  {titulo: 'Chernobyl', genero: 'Drama', temporadas: 1, estado: 'Vista', correo: 'diego@club.com'},
  {titulo: 'Planeta Tierra', genero: 'Documental', temporadas: 3, estado: 'Por ver', correo: 'ana@club.com'},
]
for (const serie of seriesIniciales) {
  const miembro = db.miembros.findOne({correo: serie.correo})
  if (!miembro) throw new Error(`No existe ${serie.correo}`)
  const yaExiste = db.series.findOne({titulo: serie.titulo, miembroId: miembro._id})
  if (!yaExiste) db.series.insertOne({
    titulo: serie.titulo, genero: serie.genero, temporadas: serie.temporadas,
    estado: serie.estado, miembroId: miembro._id, calificaciones: [],
  })
}

// Validación final de la colección series. Para un modelo nuevo con ObjectId / miembroId.
const modelo = {
  $jsonSchema: {
    bsonType: 'object',
    required: ['titulo', 'genero', 'temporadas', 'estado', 'miembroId', 'calificaciones'],
    properties: {
      _id: {bsonType: 'objectId'},
      titulo: {bsonType: 'string', minLength: 2},
      genero: {enum: ['Drama','Comedia','Ciencia ficción','Animación','Documental']},
      temporadas: {bsonType: 'int', minimum: 1, maximum: 30},
      estado: {enum: ['Por ver','Viendo','Vista']},
      miembroId: {bsonType: 'objectId'},
      calificaciones: {bsonType: 'array'},
    },
  },
}
db.runCommand({collMod: 'series', validator: modelo, validationAction: 'error', validationLevel: 'strict'})

// Comprobación: no debe quedar ninguna serie con _id numérico o sin miembroId.
db.series.aggregate([
  {$lookup: {from: 'miembros', localField: 'miembroId', foreignField: '_id', as: 'miembro'}},
  {$unwind: '$miembro'},
  {$project: {titulo: 1, estado: 1, miembro: '$miembro.nombre'}},
])
