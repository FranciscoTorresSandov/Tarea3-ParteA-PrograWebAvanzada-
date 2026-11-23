const tours = [
  { id: 1, nombre: 'Volcán Arenal', descripcion: 'Caminata por senderos de lava y aguas termales.', precio: 85, imagen: 'https://picsum.photos/seed/arenal/600/400' },
  { id: 2, nombre: 'Manuel Antonio', descripcion: 'Playas de arena blanca y monos cariblancos.', precio: 70, imagen: 'https://picsum.photos/seed/manuelantonio/600/400' },
  { id: 3, nombre: 'Monteverde', descripcion: 'Puentes colgantes sobre el bosque nuboso.', precio: 95, imagen: 'https://picsum.photos/seed/monteverde/600/400' },
  { id: 4, nombre: 'Río Celeste', descripcion: 'Senderos de bosque tropical y aguas de intenso color celeste.', precio: 80, imagen: 'https://picsum.photos/seed/rioceleste/600/400' },
]
export default function ListaTours() {
  return (
    <section id="tours" className="py-5" aria-labelledby="titulo-tours">
      <div className="container">
        <h2 id="titulo-tours" className="text-center mb-4">Nuestros tours</h2>
        <div className="row g-4">
          {tours.map(tour => (
            <div className="col-12 col-md-6 col-lg-4" key={tour.id}>
              <article className="card card-tour h-100 shadow-sm">
                <img src={tour.imagen} className="card-img-top" alt={`Paisaje de ${tour.nombre}`} />
                <div className="card-body d-flex flex-column">
                  <h3 className="h5 card-title">{tour.nombre}</h3>
                  <p className="card-text">{tour.descripcion}</p>
                  <p className="precio mt-auto">${tour.precio}</p>
                  <a href="#reservas" className="btn btn-success" aria-label={`Reservar tour ${tour.nombre}`}>Reservar</a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
