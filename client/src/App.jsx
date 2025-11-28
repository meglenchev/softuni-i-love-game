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
import { useState } from "react"
import { UserContext } from "./contexts/UserContext.js"
import { Logout } from "./components/users/Logout.jsx"

export function App() {
	const [user, setUser] = useState({});

	const loginHandler = (user) => {
		setUser(user);
	};

	const logOutHandler = () => {
		setUser({});
	};

	const contextValue = {
		user,
		isAuthenticated: !!user?.accessToken,
		onLogin: loginHandler,
		onLogout: logOutHandler
	}

	return (
		<UserContext.Provider value={contextValue}>
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
		</UserContext.Provider>
	)
}
