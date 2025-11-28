import { createContext } from "react";

export const UserContext = createContext({
    user: {},
    isAuthenticated: false,
    onLogin() {},
    onLogout() {}
})