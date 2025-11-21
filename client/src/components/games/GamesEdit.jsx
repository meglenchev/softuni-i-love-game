import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import { endPoints } from "../../utils/endpoints.js";
import { validate } from "./utils/createGameValidation.js";

let initialGameData = {
    title: '',
    genre: '',
    players: '',
    date: '',
    imageUrl: '',
    summary: ''
}

export function GamesEdit() {
    const navigate = useNavigate();
    const [game, setGame] = useState(initialGameData);
    const { gameId } = useParams();

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const res = await fetch(endPoints.details(gameId), { signal: abortController.signal });

                const gameData = await res.json();

                setGame(gameData);
            } catch (err) {
                throw new Error(err.message);
            }
        })();

        return () => {
            abortController.abort();
        }
    }, [gameId])

    const editGameDataHandler = (e) => {
        setGame((game) => ({
            ...game,
            [e.target.name]: e.target.value
        }))
    }

    const submitEditGameHandler = async (e) => {
        e.preventDefault();

        if (Object.keys(validate(game)).length > 0) {
            const errorsMessage = Object.values(validate(game));

            alert(errorsMessage.at(0));

            return;
        }

        (async () => {
            try {
                const res = await fetch(
                    endPoints.details(gameId),
                    {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(game)
                    }
                );

                const response = await res.json();

                console.log(response)

            } catch (err) {
                throw new Error(err.message);
            }
        })();

        setGame(initialGameData);

        navigate(`/games/${gameId}/details`);
    }

    return (
        <section id="edit-page">
            <form id="add-new-game" onSubmit={submitEditGameHandler}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input
                            type="text"
                            id="gameName"
                            name="title"
                            value={game.title}
                            onChange={editGameDataHandler}
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
                            onChange={editGameDataHandler}
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
                            onChange={editGameDataHandler}
                            min={0}
                            placeholder={0}
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input
                            type="date"
                            id="releaseDate"
                            name="date"
                            value={game.date}
                            onChange={editGameDataHandler}
                        />
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={game.imageUrl}
                            onChange={editGameDataHandler}
                            placeholder="Enter image URL..."
                        />
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea
                            id="summary"
                            name="summary"
                            value={game.summary}
                            onChange={editGameDataHandler}
                            rows={5}
                            placeholder="Write a brief summary..."
                        />
                    </div>
                    <input className="btn submit" type="submit" defaultValue="EDIT GAME" />
                </div>
            </form>
        </section>
    )
}