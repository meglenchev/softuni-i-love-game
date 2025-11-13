import { Routes, Route, NavLink } from "react-router"
import { Home } from "./components/Home.jsx"
import { GameCatalog } from "./games/GamesCatalog.jsx"
import { GameDetails } from "./games/GameDetails.jsx"

export function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink className={'home'} to="/"> <img src="/images/logo.png" alt="logo" /> </NavLink>
          <NavLink to="/game/catalog">Catalog</NavLink>

          <div id="user">
            <NavLink to="/game/add">Add Game</NavLink>
            <NavLink to="/user/logout">Logout</NavLink>
          </div>

          <div id="guest">
            <NavLink to="/user/login">Login</NavLink>
            <NavLink to="/user/register">Register</NavLink>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/catalog' element={<GameCatalog />} />
        <Route path='/game/:id/details' element={<GameDetails />} />
      </Routes>
    </>
  )
}
