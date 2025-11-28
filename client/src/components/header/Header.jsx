import { useContext } from "react";
import { NavLink } from "react-router";
import { UserContext } from "../../contexts/UserContext.js";

export function Header() {
    const { isAuthenticated } = useContext(UserContext);

    return (
        <header>
            <nav>
                <NavLink className={'home'} to="/"> <img src="/images/logo.png" alt="logo" /> </NavLink>
                <NavLink to="/games/catalog">Catalog</NavLink>
                {!isAuthenticated
                    ? <div id="guest">
                        <NavLink to="/users/login">Login</NavLink>
                        <NavLink to="/users/register">Register</NavLink>
                    </div>
                    : <div id="user">
                        <NavLink to="/games/create">Add Game</NavLink>
                        <NavLink to="/user/logout">Logout</NavLink>
                    </div>
                }
            </nav>
        </header>
    )
}