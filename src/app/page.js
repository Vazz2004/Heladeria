import Baner from './ui/baner'
import Card from './ui/card.jsx'
import MyCarousel from './ui/carrusel'
import Logos from './ui/logos'
import Nav from './ui/nav'

export default function Home() {
  return (
    <main>
      <Nav />
      <MyCarousel />
      <Card />
      <Logos />
      <Baner />
    </main>
  )
}
