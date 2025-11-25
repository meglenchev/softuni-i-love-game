import { useEffect, useState } from "react";

export function useFetch(url, initialState, gameId) {
    const [data, setData] = useState(initialState);
    const [isPanding, setIsPanding] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
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
    }, [url, gameId])

    return { data, isPanding };
}