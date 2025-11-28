export const BASE_URL = 'http://localhost:3030';

export const endPoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    allGames: 'http://localhost:3030/jsonstore/games?sortBy=_createdOn%20desc', 
    post: 'http://localhost:3030/jsonstore/games',
    addComment: 'http://localhost:3030/jsonstore/comments',
    comments: (gameId) => `http://localhost:3030/jsonstore/comments?where=gameId%3D%22${gameId}%22`,
    details: (gameId) => `http://localhost:3030/jsonstore/games/${gameId}`,
}