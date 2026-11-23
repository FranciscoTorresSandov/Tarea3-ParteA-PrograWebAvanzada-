import {ESTADOS} from '../../data/series.js'
function Filtros({miembros, estado, miembro, onCambiarEstado, onCambiarMiembro}) {
  return <div className="row g-3">
    <div className="col-sm-6">
      <label htmlFor="filtro-estado" className="form-label">Estado</label>
      <select id="filtro-estado" className="form-select" value={estado} onChange={e => onCambiarEstado(e.target.value)}>
        <option value="Todos">Todos</option>
        {ESTADOS.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
      </select>
    </div>
    <div className="col-sm-6">
      <label htmlFor="filtro-miembro" className="form-label">Propuesta por</label>
      <select id="filtro-miembro" className="form-select" value={miembro} onChange={e => onCambiarMiembro(e.target.value)}>
        <option value="Todos">Todos</option>
        {miembros.map(opcion => <option key={opcion._id} value={opcion.nombre}>{opcion.nombre}</option>)}
      </select>
    </div>
  </div>
}
export default Filtros
