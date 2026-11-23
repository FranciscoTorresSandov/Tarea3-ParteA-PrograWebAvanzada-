import { buscarSeries, enviarPropuesta } from './api.js'
import { mostrarCargando, mostrarError, mostrarVacio, mostrarResultados, mostrarAlerta } from './render.js'

const formBusqueda = document.getElementById('form-busqueda')
const campoBusqueda = document.getElementById('texto-busqueda')

formBusqueda.addEventListener('submit', async (event) => {
  event.preventDefault()
  const texto = campoBusqueda.value.trim()
  if (!texto) return
  mostrarCargando()
  try {
    const series = await buscarSeries(texto)
    if (series.length) mostrarResultados(series)
    else mostrarVacio(texto)
  } catch (error) {
    console.error(error)
    mostrarError('No se pudo completar la búsqueda. Revise su conexión e intente de nuevo.')
  }
})

const formPropuesta = document.getElementById('form-propuesta')
const botonPropuesta = document.getElementById('boton-propuesta')
formPropuesta.addEventListener('submit', async (event) => {
  event.preventDefault()
  const propuesta = {
    titulo: formPropuesta.elements.namedItem('titulo').value.trim(),
    correo: formPropuesta.elements.namedItem('correo').value.trim(),
    motivo: formPropuesta.elements.namedItem('motivo').value.trim(),
  }
  botonPropuesta.disabled = true
  try {
    const respuesta = await enviarPropuesta(propuesta)
    mostrarAlerta('success', 'Propuesta registrada con el número ' + respuesta.id + '.')
    formPropuesta.reset()
  } catch (error) {
    console.error(error)
    mostrarAlerta('danger', 'No se pudo enviar la propuesta. Intente de nuevo.')
  } finally {
    botonPropuesta.disabled = false
  }
})
