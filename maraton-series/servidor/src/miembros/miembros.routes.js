// miembros/miembros.routes.js: rutas HTTP del recurso miembros.
import { Router } from 'express'
import * as controlador from './miembros.controller.js'
export const miembrosRouter = Router()
miembrosRouter.get('/', controlador.listar)
