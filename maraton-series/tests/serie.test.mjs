import test from 'node:test'
import assert from 'node:assert/strict'
import { seriesIniciales, ESTADOS } from './fixtures/seriesOriginal.js'
import { siguienteEstado, claseEstado } from '../cliente/src/utils/series.js'
import { validarSerie } from '../cliente/src/utils/validarSerie.js'

test('datos base y conteos iniciales según la consigna', () => {
  assert.equal(seriesIniciales.length, 5)
  assert.deepEqual(ESTADOS.map(estado => seriesIniciales.filter(s => s.estado === estado).length), [2,1,2])
})
test('transición cíclica de estados', () => {
  assert.equal(siguienteEstado('Por ver'), 'Viendo')
  assert.equal(siguienteEstado('Viendo'), 'Vista')
  assert.equal(siguienteEstado('Vista'), 'Por ver')
  assert.equal(claseEstado('Por ver'), 'estado-por-ver')
})
test('avanzar y quitar sin mutación de fuente', () => {
  const prev = seriesIniciales
  const updated = prev.map(s => s.id===3 ? {...s, estado:siguienteEstado(s.estado)} : s)
  assert.equal(updated.find(s=>s.id===3).estado, 'Viendo')
  assert.equal(prev.find(s=>s.id===3).estado,'Por ver')
  const removed=updated.filter(s=>s.id!==1)
  assert.equal(removed.length,4)
  assert.equal(updated.length,5)
})
test('filtros se combinan y el resumen considera toda la lista', () => {
  const estado='Por ver',miembro='Ana'
  const visibles=seriesIniciales.filter(s =>
     (estado==='Todos'||s.estado===estado)&&(miembro==='Todos'||s.miembro===miembro))
  assert.deepEqual(visibles.map(s=>s.titulo),['Planeta Tierra'])
  assert.deepEqual(ESTADOS.map(e=>seriesIniciales.filter(s=>s.estado===e).length),[2,1,2])
})
test('validación por los cuatro campos con rangos', () => {
  const errores=validarSerie({titulo:'S',genero:'',temporadas:'40',miembroId:''})
  assert.deepEqual(Object.keys(errores).sort(),['genero','miembroId','temporadas','titulo'])
  assert.deepEqual(validarSerie({titulo:'Severance',genero:'Drama',temporadas:2,miembroId:'650000000000000000000000'}),{})
  assert.ok(validarSerie({titulo:'Correcta',genero:'Drama',temporadas:'1.5',miembroId:'650000000000000000000000'}).temporadas)
})
