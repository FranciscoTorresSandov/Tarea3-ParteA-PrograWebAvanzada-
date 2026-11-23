import test from 'node:test'
import assert from 'node:assert/strict'
import {validarSerie, validarEstado} from '../src/series/series.validacion.js'
import {revisarId} from '../src/utils/revisarId.js'
import {HttpError} from '../src/utils/HttpError.js'
const ejemplo = {titulo: 'Severance', genero: 'Drama', temporadas: 2, miembroId: '650000000000000000000000'}
test('serie válida: cero errores', () => assert.deepEqual(validarSerie(ejemplo), {}))
test('título vacío: error por campo', () => assert.ok(validarSerie({...ejemplo, titulo: 'S'}).titulo))
test('género fuera de catálogo: error', () => assert.ok(validarSerie({...ejemplo, genero: 'Terror'}).genero))
test('temporadas texto: error', () => assert.ok(validarSerie({...ejemplo, temporadas: '2'}).temporadas))
test('ID de miembro incorrecto: error', () => assert.ok(validarSerie({...ejemplo, miembroId: '123'}).miembroId))
test('estado permitido', () => assert.deepEqual(validarEstado({estado: 'Viendo'}), {}))
test('estado inválido', () => assert.ok(validarEstado({estado: 'Abandonada'}).estado))
test('ID de ruta incorrecto: HttpError 400', () => assert.throws(() => revisarId('abc'), e => e instanceof HttpError && e.estado === 400))
test('ID de ruta correcto', () => assert.doesNotThrow(() => revisarId('650000000000000000000000')))
