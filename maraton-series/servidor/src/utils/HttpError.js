// utils/HttpError.js: error HTTP de aplicación con detalles opcionales.
export class HttpError extends Error {
  constructor(estado, codigo, mensaje, detalles) {
    super(mensaje)
    this.estado = estado
    this.codigo = codigo
    this.detalles = detalles
  }
}
