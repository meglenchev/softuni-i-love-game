import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/endpoints.js";

export function useFetch(url, initialState, gameId, refresh) {
    const [data, setData] = useState(initialState);
    const [isPanding, setIsPanding] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${BASE_URL}${url}`, { signal: abortController.signal })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.text);
                }

                return res.json();
            })
            .then(result => {
                setData(result)
            })
            .catch(err => {
                throw new Error(err);
            })
            .finally(() => {
                setIsPanding(false)
            })

        return () => {
            abortController.abort();
        }
    }, [url, gameId, refresh])

    return { data, isPanding };
}