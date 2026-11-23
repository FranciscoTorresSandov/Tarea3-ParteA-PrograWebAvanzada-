export default function SeccionContacto() {
  return (
    <section id="contacto" className="py-5" aria-labelledby="titulo-contacto">
      <div className="container" style={{ maxWidth: '720px' }}>
        <h2 id="titulo-contacto" className="text-center mb-4">Contacto</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input id="nombre" name="nombre" type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input id="correo" name="correo" type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea id="mensaje" name="mensaje" className="form-control" rows="4" required />
          </div>
          <p className="form-text">Formulario demostrativo: todavía no envía datos a un servidor.</p>
          <button type="button" className="btn btn-success">Enviar (demo)</button>
        </form>
      </div>
    </section>
  )
}
