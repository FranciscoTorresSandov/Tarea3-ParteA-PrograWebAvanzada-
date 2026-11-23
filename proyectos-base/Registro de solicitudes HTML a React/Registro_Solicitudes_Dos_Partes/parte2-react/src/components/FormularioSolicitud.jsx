// La Parte 2 exige solo trasladar el formulario a JSX, sin registrar solicitudes.
export default function FormularioSolicitud() {
  return (
    <form id="formSolicitud" noValidate>
      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="Ej. Ana Rodríguez" />
        <span className="error" id="errorNombre"></span>
      </div>
      <div className="campo">
        <label htmlFor="departamento">Departamento</label>
        <select id="departamento" defaultValue="">
          <option value="">Seleccione un departamento</option>
          <option value="Administración">Administración</option>
          <option value="Finanzas">Finanzas</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Ventas">Ventas</option>
        </select>
        <span className="error" id="errorDepartamento"></span>
      </div>
      <div className="campo">
        <label htmlFor="tipoProblema">Tipo de problema</label>
        <select id="tipoProblema" defaultValue="">
          <option value="">Seleccione un problema</option>
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Red">Red</option>
          <option value="Acceso">Acceso</option>
          <option value="Otro">Otro</option>
        </select>
        <span className="error" id="errorTipo"></span>
      </div>
      <div className="campo">
        <label htmlFor="prioridad">Prioridad</label>
        <select id="prioridad" defaultValue="">
          <option value="">Seleccione una prioridad</option>
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
        <span className="error" id="errorPrioridad"></span>
      </div>
      <div className="campo">
        <label htmlFor="descripcion">Descripción</label>
        <textarea id="descripcion" rows="4" placeholder="Describa brevemente el problema"></textarea>
        <span className="error" id="errorDescripcion"></span>
      </div>
      <button type="button">Registrar solicitud</button>
    </form>
  );
}
