import PaginaRegistro from './paginas/PaginaRegistro.jsx';
import PaginaConsulta from './paginas/PaginaConsulta.jsx';

// La consigna pide ambas páginas en una sola pantalla, una debajo de la otra.
export default function App() {
  return (
    <main className="contenedor">
      <PaginaRegistro />
      <PaginaConsulta />
    </main>
  );
}
