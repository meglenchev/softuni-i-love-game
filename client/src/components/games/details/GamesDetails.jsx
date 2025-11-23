import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router";
import { endPoints } from "../../../utils/endpoints.js";
import { CreateComment } from "../create-comment/CreateComment.jsx";
import { DetailsComments } from "../details-comments/DetailsComments.jsx";

export function GamesDetails() {
    const navigate = useNavigate();
    const [gameDetails, setGameDetails] = useState({});
    const { gameId } = useParams();

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const res = await fetch(endPoints.details(gameId), { signal: abortController.signal });

                const gameData = await res.json();
                setGameDetails(gameData)

            } catch (err) {
                throw new Error(err.message);
            }
        })();

        return () => {
            abortController.abort();
        }
    }, [gameId])

    const deleteGameHandler = async () => {
        const isConfirm = confirm(`Are you sure you want to delete ${gameDetails.title}?`);

        if (!isConfirm) {
            return;
        }

        try {
            await fetch(endPoints.details(gameId), {
                method: 'DELETE',
            });

            navigate('/');

        } catch (err) {
            alert(`Unable to delete game: ${err.message}`)
        }
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="header-and-image">
                    <img className="game-img" src={gameDetails.imageUrl} alt={gameDetails.title} />
                    <div className="meta-info">
                        <h1 className="game-name">{gameDetails.title}</h1>
                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">{gameDetails.genre}</span>
                        </p>
                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">{gameDetails.players}</span>
                        </p>
                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">{gameDetails.date}</span>
                        </p>
                    </div>
                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">{gameDetails.summary}</p>
                    </div>
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <NavLink to={`/games/${gameId}/edit`} className="button">Edit</NavLink>
                    <button className="button" onClick={deleteGameHandler}>Delete</button>
                </div>
                <DetailsComments />
            </div>
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <CreateComment />
        </section>

    )
}