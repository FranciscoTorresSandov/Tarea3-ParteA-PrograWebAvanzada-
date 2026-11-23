// Capa de acceso a datos, sin manipulación del DOM.
const URL_BUSQUEDA = 'https://api.tvmaze.com/search/shows?q='
const URL_PROPUESTAS = 'https://jsonplaceholder.typicode.com/posts'

export async function buscarSeries(texto) {
  const respuesta = await fetch(URL_BUSQUEDA + encodeURIComponent(texto))
  if (!respuesta.ok) throw new Error('La API respondió con el código ' + respuesta.status)
  const datos = await respuesta.json()
  return datos.map((resultado) => resultado.show)
}

export async function enviarPropuesta(propuesta) {
  const respuesta = await fetch(URL_PROPUESTAS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(propuesta),
  })
  if (!respuesta.ok) throw new Error('El servidor respondió con el código ' + respuesta.status)
  return respuesta.json()
}
