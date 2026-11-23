// Laboratorio: MongoDB Atlas + MongoDB for VS Code.
// EJECUTE LOS BLOQUES UNO POR UNO, NO TODO EL ARCHIVO DOS VECES.
// Paso 8: crear un documento temporal
use('prueba')
db.saludos.insertOne({mensaje: 'Hola desde VS Code', fecha: new Date()})

// Paso 9: leerlo
use('prueba')
db.saludos.find()

// Paso 11: eliminación de la base TEMPORAL.
// Es destructivo: solo ejecutar con la base prueba seleccionada.
// use('prueba')
// db.dropDatabase()
