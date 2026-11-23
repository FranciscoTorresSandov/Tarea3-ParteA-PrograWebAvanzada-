// app.js: middleware CORS, JSON, routers y errores en ese orden.
import express from 'express'
import cors from 'cors'
import { config } from './config/env.js'
import { miembrosRouter } from './miembros/miembros.routes.js'
import { seriesRouter } from './series/series.routes.js'
import { rutaNoEncontrada, manejarErrores } from './middlewares/errores.js'
export const app = express()
app.use(cors({origin: config.origenCliente}))
app.use(express.json())
app.use('/api/miembros', miembrosRouter)
app.use('/api/series', seriesRouter)
app.use(rutaNoEncontrada)
app.use(manejarErrores)
