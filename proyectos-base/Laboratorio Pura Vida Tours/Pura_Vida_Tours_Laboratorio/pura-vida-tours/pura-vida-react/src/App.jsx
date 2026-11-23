import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ListaTours from './components/ListaTours.jsx'
import TablaReservas from './components/TablaReservas.jsx'
import Testimonios from './components/Testimonios.jsx'
import SeccionContacto from './components/SeccionContacto.jsx'
import Footer from './components/Footer.jsx'
export default function App() {
  return <>
    <Navbar />
    <Hero />
    <main>
      <ListaTours />
      <TablaReservas />
      <Testimonios />
      <SeccionContacto />
    </main>
    <Footer />
  </>
}
