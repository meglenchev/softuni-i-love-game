export const BASE_URL = 'http://localhost:3030';

export const endPoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    allGames: '/data/games?sortBy=_createdOn%20desc', 
    postGame: '/data/games',
    addComment: '/data/comments',
    comments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    details: (gameId) => `/data/games/${gameId}`,
}