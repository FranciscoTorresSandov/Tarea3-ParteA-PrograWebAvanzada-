const testimonios = [
  { id: 1, cliente: 'Lucía Ramírez', comentario: 'Una experiencia excelente en el Volcán Arenal.' },
  { id: 2, cliente: 'Jorge Calderón', comentario: 'La visita a Monteverde fue inolvidable.' },
  { id: 3, cliente: 'Paola Méndez', comentario: 'El tour de Manuel Antonio estuvo muy bien organizado.' },
]
export default function Testimonios() {
  return (
    <section id="testimonios" className="py-5 bg-light" aria-labelledby="titulo-testimonios">
      <div className="container">
        <h2 id="titulo-testimonios" className="text-center mb-4">Lo que dicen nuestros clientes</h2>
        <div className="row g-4">
          {testimonios.map(t => (
            <div className="col-12 col-md-4" key={t.id}>
              <article className="card h-100 shadow-sm">
                <div className="card-body">
                  <p className="card-text">“{t.comentario}”</p>
                  <p className="fw-bold mb-0">{t.cliente}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
