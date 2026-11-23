// Validación de interfaz. El servidor vuelve a validar antes de guardar.
export function validarSerie(datos) {
  const errores = {}
  if (typeof datos.titulo !== 'string' || datos.titulo.trim().length < 2)
    errores.titulo = 'Escriba un título de al menos 2 caracteres.'
  if (!datos.genero) errores.genero = 'Elija un género.'
  if (!Number.isInteger(Number(datos.temporadas)) || Number(datos.temporadas) < 1 || Number(datos.temporadas) > 30)
    errores.temporadas = 'Indique un número entero entre 1 y 30.'
  if (!datos.miembroId) errores.miembroId = 'Indique quién propone la serie.'
  return errores
}
