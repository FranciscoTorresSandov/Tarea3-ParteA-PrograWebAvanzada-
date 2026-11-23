// series/series.routes.js: prefijo /api/series establecido en app.js.
import { Router } from 'express'
import * as controlador from './series.controller.js'
export const seriesRouter = Router()
seriesRouter.get('/', controlador.listar)
seriesRouter.post('/', controlador.crear)
seriesRouter.patch('/:id/estado', controlador.cambiarEstado)
seriesRouter.delete('/:id', controlador.eliminar)
