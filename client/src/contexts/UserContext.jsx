import { createContext, useContext, useState } from "react";
import { useRequest } from "../components/hooks/useRequest.js";
import { endPoints } from "../utils/endpoints.js";

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        _id: '',
        accessToken: '', 
        username: '', 
    },
    onLogin() { },
    logOutHandler() { }
})

export function UserProvider({
    children,
}) {
    const [user, setUser] = useState({});
    const { request } = useRequest();

    const loginHandler = (user) => {
        setUser(user);
    };

    const logOutHandler = async () => {
          return request(endPoints.logout, 'GET', null, { accessToken: user.accessToken })
             .finally(() => setUser(null));
    };

    const contextValue = {
        user,
        isAuthenticated: !!user?.accessToken,
        onLogin: loginHandler,
        logOutHandler
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    const contextData = useContext(UserContext);

    return contextData;
}

export default UserContext;