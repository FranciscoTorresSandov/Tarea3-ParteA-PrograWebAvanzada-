// api/seriesApi.js: todas las operaciones HTTP del cliente React.
const URL_API = import.meta.env.VITE_API_URL
if (!URL_API) console.warn('Falta VITE_API_URL en cliente/.env')
async function pedir(ruta, metodo = 'GET', datos) {
  const opciones = {method: metodo}
  if (datos !== undefined) {
    opciones.headers = {'Content-Type': 'application/json'}
    opciones.body = JSON.stringify(datos)
  }
  let respuesta
  try {
    respuesta = await fetch(`${URL_API}${ruta}`, opciones)
  } catch {
    throw new Error('No se pudo conectar con el API. ¿Está encendido el servidor?')
  }
  // Una respuesta 204 no tiene JSON. Parsearla provocaría un error falso.
  if (respuesta.status === 204) return null
  let cuerpo
  try { cuerpo = await respuesta.json() }
  catch { throw new Error('El API devolvió una respuesta no válida.') }
  if (!respuesta.ok) {
    const error = new Error(cuerpo?.error?.mensaje ?? `Error HTTP ${respuesta.status}`)
    error.detalles = cuerpo?.error?.detalles
    throw error
  }
  return cuerpo
}
export function obtenerSeries() { return pedir('/series') }
export function obtenerMiembros() { return pedir('/miembros') }
export function crearSerie(datos) { return pedir('/series', 'POST', datos) }
export function cambiarEstadoSerie(id, estado) { return pedir(`/series/${id}/estado`, 'PATCH', {estado}) }
export function eliminarSerie(id) { return pedir(`/series/${id}`, 'DELETE') }
