import { Routes, Route } from "react-router"
import { Header } from "./components/header/Header.jsx"
import { Footer } from "./components/footer/Footer.jsx"
import { Home } from "./components/home/Home.jsx"
import { GamesCatalog } from "./components/games/GamesCatalog.jsx"
import { GamesDetails } from "./components/games/GamesDetails.jsx"
import { GamesCreate } from "./components/games/GamesCreate.jsx"
import { Login } from "./components/users/Login.jsx"
import { Register } from "./components/users/Register.jsx"

export function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/games/catalog' element={<GamesCatalog />} />
				<Route path='/games/:gameId/details' element={<GamesDetails />} />
				<Route path='/games/create' element={<GamesCreate />} />
				<Route path="/users">
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
			</Routes>
			<Footer />
		</>
	)
}
