import {useState} from 'react'
import {GENEROS} from '../../data/series.js'
import {validarSerie} from '../../utils/validarSerie.js'
const VACIO = {titulo: '', genero: '', temporadas: '', miembroId: ''}
function FormularioSerie({miembros, onAgregar}) {
  const [datos, setDatos] = useState(VACIO)
  const [errores, setErrores] = useState({})
  const [errorGeneral, setErrorGeneral] = useState('')
  const [guardando, setGuardando] = useState(false)
  function cambiar(evento) {
    const {name, value} = evento.target
    setDatos(actuales => ({...actuales, [name]: value}))
    setErrores(actuales => ({...actuales, [name]: undefined}))
  }
  async function enviar(evento) {
    evento.preventDefault()
    if (guardando) return
    setErrorGeneral('')
    const enviarDatos = {...datos, titulo: datos.titulo.trim(), temporadas: Number(datos.temporadas)}
    const nuevosErrores = validarSerie(enviarDatos)
    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length > 0) return
    setGuardando(true)
    try {
      await onAgregar(enviarDatos)
      setDatos(VACIO)
      setErrores({})
    } catch (err) {
      if (err.detalles) setErrores(err.detalles)
      else setErrorGeneral(err.message)
    } finally { setGuardando(false) }
  }
  const clase = (nombre, tipo='form-control') => `${tipo}${errores[nombre] ? ' is-invalid' : ''}`
  return <form onSubmit={enviar} noValidate>
    {errorGeneral && <div className="alert alert-danger" role="alert">{errorGeneral}</div>}
    <div className="mb-3">
      <label htmlFor="titulo" className="form-label">Título</label>
      <input id="titulo" name="titulo" value={datos.titulo} onChange={cambiar} className={clase('titulo')} />
      {errores.titulo && <div className="invalid-feedback">{errores.titulo}</div>}
    </div>
    <div className="mb-3">
      <label htmlFor="genero" className="form-label">Género</label>
      <select id="genero" name="genero" value={datos.genero} onChange={cambiar} className={clase('genero','form-select')}>
        <option value="">Elija…</option>{GENEROS.map(g => <option key={g} value={g}>{g}</option>)}
      </select>
      {errores.genero && <div className="invalid-feedback">{errores.genero}</div>}
    </div>
    <div className="mb-3">
      <label htmlFor="temporadas" className="form-label">Temporadas</label>
      <input id="temporadas" name="temporadas" type="number" min="1" max="30"
        value={datos.temporadas} onChange={cambiar} className={clase('temporadas')} />
      {errores.temporadas && <div className="invalid-feedback">{errores.temporadas}</div>}
    </div>
    <div className="mb-3">
      <label htmlFor="miembroId" className="form-label">Propuesta por</label>
      <select id="miembroId" name="miembroId" value={datos.miembroId} onChange={cambiar}
        className={clase('miembroId', 'form-select')}>
        <option value="">Elija…</option>
        {miembros.map(m => <option key={m._id} value={m._id}>{m.nombre}</option>)}
      </select>
      {errores.miembroId && <div className="invalid-feedback">{errores.miembroId}</div>}
    </div>
    <button type="submit" className="btn btn-primary" disabled={guardando}>
      {guardando ? 'Guardando…' : 'Agregar serie'}
    </button>
  </form>
}
export default FormularioSerie
