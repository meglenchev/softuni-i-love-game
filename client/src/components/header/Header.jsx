import { NavLink } from "react-router";

export function Header() {
    return (
        <header>
            <nav>
                <NavLink className={'home'} to="/"> <img src="/images/logo.png" alt="logo" /> </NavLink>
                <NavLink to="/games/catalog">Catalog</NavLink>

                <div id="user">
                    <NavLink to="/games/create">Add Game</NavLink>
                    <NavLink to="/user/logout">Logout</NavLink>
                </div>

                <div id="guest">
                    <NavLink to="/users/login">Login</NavLink>
                    <NavLink to="/users/register">Register</NavLink>
                </div>
            </nav>
        </header>
    )
}