// utils/revisarId.js: valida identificadores MongoDB recibidos por URL.
import { ObjectId } from 'mongodb'
import { HttpError } from './HttpError.js'
export function revisarId(id) {
  if (typeof id !== 'string' || !/^[a-fA-F0-9]{24}$/.test(id) || !ObjectId.isValid(id)) {
    throw new HttpError(400, 'ID_INVALIDO', 'El identificador no es válido.')
  }
}
