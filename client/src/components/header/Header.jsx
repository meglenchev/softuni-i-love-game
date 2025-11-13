import { NavLink } from "react-router";

export function Header() {
    return (
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
    )
}