// Los conteos se calculan en App; este componente solo los presenta.
function Resumen({ conteos }) {
  return (
    <div className="row g-3 text-center">
      {conteos.map((conteo) => (
        <div className="col-4" key={conteo.estado}>
          <div className="resumen-numero">{conteo.cantidad}</div>
          <small className="text-secondary">{conteo.estado}</small>
        </div>
      ))}
    </div>
  )
}
export default Resumen
