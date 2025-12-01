import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";

export function Logout() {
    const { logOutHandler } = useContext(UserContext);
    const navigate = useNavigate();

    logOutHandler()
        .then(() => navigate('/'))
        .catch(() => {
            alert('Problem with logout')
            navigate('/');
        })

    return null;
}