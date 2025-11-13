import { Routes, Route } from "react-router"
import { Home } from "./components/home/Home.jsx"
import { GameCatalog } from "./components/games/GamesCatalog.jsx"
import { GameDetails } from "./components/games/GameDetails.jsx"
import { Header } from "./components/header/Header.jsx"
import { Footer } from "./components/footer/Footer.jsx"

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/catalog' element={<GameCatalog />} />
        <Route path='/game/:id/details' element={<GameDetails />} />
      </Routes>
      <Footer />
    </>
  )
}
