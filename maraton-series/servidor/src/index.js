// index.js: conectar MongoDB antes de abrir el puerto.
import { config } from './config/env.js'
import { conectar } from './config/db.js'
import { app } from './app.js'
await conectar()
app.listen(config.puerto, () => console.log(`API escuchando en http://localhost:${config.puerto}`))
