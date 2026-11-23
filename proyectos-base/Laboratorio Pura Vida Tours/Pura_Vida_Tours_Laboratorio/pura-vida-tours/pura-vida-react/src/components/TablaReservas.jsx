const reservas = [
  { id: 1, cliente: 'Ana Mora', tour: 'Volcán Arenal', fecha: '2026-11-02', personas: 2, estado: 'Confirmada' },
  { id: 2, cliente: 'Luis Rojas', tour: 'Monteverde', fecha: '2026-11-05', personas: 4, estado: 'Pendiente' },
  { id: 3, cliente: 'María Solano', tour: 'Manuel Antonio', fecha: '2026-11-09', personas: 3, estado: 'Confirmada' },
  { id: 4, cliente: 'Carlos Vega', tour: 'Volcán Arenal', fecha: '2026-11-12', personas: 1, estado: 'Cancelada' },
  { id: 5, cliente: 'Sofía Castro', tour: 'Río Celeste', fecha: '2026-11-20', personas: 2, estado: 'Pendiente' },
  { id: 6, cliente: 'Diego Pérez', tour: 'Monteverde', fecha: '2026-11-25', personas: 3, estado: 'Cancelada' },
]
function obtenerColorEstado(estado) {
  if (estado === 'Confirmada') return 'bg-success'
  if (estado === 'Pendiente') return 'bg-warning text-dark'
  return 'bg-danger'
}
export default function TablaReservas() {
  return (
    <section id="reservas" className="py-5 bg-light" aria-labelledby="titulo-reservas">
      <div className="container">
        <h2 id="titulo-reservas" className="text-center mb-4">Próximas reservas</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark"><tr>
              <th scope="col">#</th><th scope="col">Cliente</th><th scope="col">Tour</th>
              <th scope="col">Fecha</th><th scope="col">Personas</th><th scope="col">Estado</th>
            </tr></thead>
            <tbody>
              {reservas.map(reserva => (
                <tr key={reserva.id}>
                  <td>{reserva.id}</td><td>{reserva.cliente}</td><td>{reserva.tour}</td>
                  <td>{reserva.fecha}</td><td>{reserva.personas}</td>
                  <td><span className={`badge ${obtenerColorEstado(reserva.estado)}`}>{reserva.estado}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
