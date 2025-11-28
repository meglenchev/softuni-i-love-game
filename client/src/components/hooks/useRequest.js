import { BASE_URL } from "../../utils/endpoints.js";

export function useRequest() {
    const request = async (url, method, data) => {
        let opttions = {}

        if (method) {
            opttions.method = method;
        }

        if (data) {
            opttions.headers = {
                'content-type': 'aplication/json',
            }

            opttions.body = JSON.stringify(data);
        }

        const res = await fetch(`${BASE_URL}${url}`, opttions);

        if (!res.ok) {
            throw res.statusText;
        }

        const result = await res.json();

        return result;
    }

    return {
        request
    }
}