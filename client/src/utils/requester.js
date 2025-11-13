async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-type'] = 'application/json',
            options.body = JSON.stringify(data)
    }

    try {
        const res = await fetch(url, options, {})

        if (!res.ok) {
            const err = await res.json();
            alert(err.message);

            throw err;
        }

        return res.json()
    } catch (err) {
        alert(err.message);
    }
}

export const get = (url) => requester('GET', url);
export const post = (url, data) => requester('POST', url, data);
export const put = (url, data) => requester('PUT', url, data);
export const del = (url) => requester('DELETE', url);