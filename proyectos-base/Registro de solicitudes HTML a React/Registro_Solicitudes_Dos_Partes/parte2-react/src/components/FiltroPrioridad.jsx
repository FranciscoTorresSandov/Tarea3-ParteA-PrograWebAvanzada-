// Control visual: este ejercicio de React todavía no implementa el filtrado.
export default function FiltroPrioridad() {
  return (
    <div className="campo">
      <label htmlFor="filtroPrioridad">Filtrar por prioridad</label>
      <select id="filtroPrioridad" defaultValue="">
        <option value="">Todas</option>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
    </div>
  );
}
