import { Routes, Route } from "react-router"
import { Header } from "./components/header/Header.jsx"
import { Footer } from "./components/footer/Footer.jsx"
import { Home } from "./components/home/Home.jsx"
import { GamesCatalog } from "./components/games/GamesCatalog.jsx"
import { GamesDetails } from "./components/games/GamesDetails.jsx"
import { GamesCreate } from "./components/games/GamesCreate.jsx"

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games/catalog' element={<GamesCatalog />} />
        <Route path='/games/:gameId/details' element={<GamesDetails />} />
        <Route path='/games/create' element={<GamesCreate />} />
      </Routes>
      <Footer />
    </>
  )
}
