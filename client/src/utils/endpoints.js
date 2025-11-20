export const endPoints = {
    allGames: 'http://localhost:3030/jsonstore/games?sortBy=_createdOn%20desc', 
    post: 'http://localhost:3030/jsonstore/games',
    details: (gameId) => `http://localhost:3030/jsonstore/games/${gameId}`,
}