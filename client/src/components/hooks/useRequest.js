import { useContext } from "react";
import { BASE_URL } from "../../utils/endpoints.js";
import UserContext from "../../contexts/UserContext.jsx";

export function useRequest() {
    const { user, isAuthenticated } = useContext(UserContext);

    const request = async (url, method, data, config = {}) => {
        let options = {}

        if (method) {
            options.method = method;
        }

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            }

            options.body = JSON.stringify(data);
        }

        if (config.accessToken || isAuthenticated) {
            options.headers = {
                ...options.headers,
                'X-Authorization': config.accessToken || user.accessToken,
            }
        }

        const res = await fetch(`${BASE_URL}${url}`, options);

        if (!res.ok) {
            throw res.statusText;
        }

        if (res.status === 204) {
            return {};
        }

        const result = await res.json();

        return result;
    }

    return {
        request
    }
}