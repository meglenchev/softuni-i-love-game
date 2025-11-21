export async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-type'] = 'application/json',
        
        options.body = JSON.stringify(data)
    }

    const res = await fetch(url, options)

    if (!res.ok) {
        const err = await res.json();
        
        alert(err.message);

        throw err;
    }

    return res.json();
}

// import { endPoints } from "./endpoints.js";

// async function requester(method, url, data) {
//     const options = {
//         method,
//         headers: {}
//     }

//     if (data) {
//         options.headers['Content-type'] = 'application/json',
//         options.body = JSON.stringify(data)
//     }

//     try {
//         const res = await fetch(url, options)

//         if (!res.ok) {
//             const err = await res.json();
            
//             alert(err.message);

//             throw err;
//         }

//         return res.json()
//     } catch (err) {
//         alert(err.message);
//     }
// }

// export async function allGames() {
//     return requester('GET', endPoints.allGames);
// }

// export async function itemDelete(id) {
//     return requester('DELETE', endPoints.details(id));
// }

// export async function getDetails(id) {
//     return requester('GET', endPoints.details(id),);
// }

// export async function editGames(id, data) {
//     return requester('PUT', endPoints.details(id), data);
// }

// export async function addGames(data) {
//     return requester('POST', endPoints.post, data);
// }