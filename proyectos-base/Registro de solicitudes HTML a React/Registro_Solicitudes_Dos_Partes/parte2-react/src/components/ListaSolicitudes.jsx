// Componente visual compartido: el filtrado y registro se añadirán en otra lección.
export default function ListaSolicitudes() {
  return (
    <section className="tarjeta resultados">
      <div className="titulo-lista">
        <div>
          <span className="etiqueta">Registros</span>
          <h2>Solicitudes registradas</h2>
        </div>
        <span className="contador">0 solicitudes</span>
      </div>
      <div className="listaSolicitudes">
        <p className="sin-datos">No existen solicitudes registradas.</p>
      </div>
    </section>
  );
}
