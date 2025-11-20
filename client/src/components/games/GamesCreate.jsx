import { useState } from "react";

export function GamesCreate() {
    let initialGameData = {
        title: '',
        genre: '',
        players: '',
        date: '',
        imageUrl: '',
        summary: ''
    }

    const [game, setGame] = useState(initialGameData);

    const createGameDataHandler = (e) => {
        setGame((game) => ({
            ...game,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="add-page">
            <form id="add-new-game">
                <div className="container">

                    <h1>Add New Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input 
                            type="text" 
                            id="gameName" 
                            name="title" 
                            value={game.title} 
                            onChange={createGameDataHandler} 
                            placeholder="Enter game title..." 
                        />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input 
                            type="text" 
                            id="genre" 
                            name="genre" 
                            value={game.genre} 
                            onChange={createGameDataHandler} 
                            placeholder="Enter game genre..." 
                            />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input 
                            type="number" 
                            id="activePlayers" 
                            name="players" 
                            value={game.players} 
                            onChange={createGameDataHandler} 
                            min="0" 
                            placeholder="0" 
                        />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input 
                            type="date" 
                            id="releaseDate" 
                            name="date" 
                            value={game.date}
                            onChange={createGameDataHandler}
                        />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input 
                            type="text" 
                            id="imageUrl" 
                            name="imageUrl" 
                            value={game.imageUrl} 
                            onChange={createGameDataHandler}
                            placeholder="Enter image URL..." 
                        />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea 
                            name="summary" 
                            value={game.summary} 
                            onChange={createGameDataHandler}
                            id="summary" 
                            rows="5" 
                            placeholder="Write a brief summary..."
                        ></textarea>
                    </div>

                    <input className="btn submit" type="submit" value="ADD GAME" />
                </div>
            </form>
        </section>
    )
}