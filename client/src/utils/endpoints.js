export const endPoints = {
    allGames: 'http://localhost:3030/jsonstore/games?sortBy=_createdOn%20desc', 
    details: (gameId) => `http://localhost:3030/jsonstore/games/${gameId}`,
}