import { Routes, Route } from "react-router"
import { Header } from "./components/header/Header.jsx"
import { Footer } from "./components/footer/Footer.jsx"
import { Home } from "./components/home/Home.jsx"
import { Login } from "./components/users/Login.jsx"
import { Register } from "./components/users/Register.jsx"
import { GamesCatalog } from "./components/games/catalog/GamesCatalog.jsx"
import { GamesDetails } from "./components/games/details/GamesDetails.jsx"
import { GamesCreate } from "./components/games/create-game/GamesCreate.jsx"
import { GamesEdit } from "./components/games/edit/GamesEdit.jsx"
import { Logout } from "./components/users/Logout.jsx"

export function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/games/catalog' element={<GamesCatalog />} />
				<Route path='/games/:gameId/details' element={<GamesDetails />} />
				<Route path='/games/create' element={<GamesCreate />} />
				<Route path="/games/:gameId/edit" element={<GamesEdit />} />
				<Route path="/users">
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
				<Route path="/users/logout" element={<Logout />} />
			</Routes>
			<Footer />
		</>
	)
}
