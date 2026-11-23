// miembros/miembros.repository.js: única capa de acceso a la colección miembros.
import { ObjectId } from 'mongodb'
import { obtenerDb } from '../config/db.js'
const coleccion = () => obtenerDb().collection('miembros')
export async function listar() {
  return coleccion().find({}, {projection: {_id: 1, nombre: 1}}).sort({nombre: 1}).toArray()
}
export async function buscarPorId(id) {
  return coleccion().findOne({_id: new ObjectId(id)}, {projection: {nombre: 1}})
}
