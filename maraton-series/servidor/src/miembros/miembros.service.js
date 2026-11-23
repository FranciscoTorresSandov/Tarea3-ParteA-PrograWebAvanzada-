// miembros/miembros.service.js: operaciones del dominio miembros.
import * as repositorio from './miembros.repository.js'
export async function listar() { return repositorio.listar() }
export async function existe(id) { return (await repositorio.buscarPorId(id)) !== null }
