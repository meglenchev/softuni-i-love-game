export const endPoints = {
    allGames: 'http://localhost:3030/jsonstore/games?sortBy=_createdOn%20desc', 
    details: (id) => `http://localhost:3030/jsonstore/games/${id}`,
}