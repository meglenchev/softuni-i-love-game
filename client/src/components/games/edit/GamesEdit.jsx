import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router";
import { BASE_URL, endPoints } from "../../../utils/endpoints.js";
import { validate } from "../utils/createGameValidation.js";
import UserContext from "../../../contexts/UserContext.jsx";
import { useForm } from "../../hooks/useForm.js";

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

    const submitEditGameHandler = async (formValues) => {

        const errors = validate(formValues);

        if (Object.keys(errors).length > 0) {
            const errorsMessage = Object.values(errors);

            return alert(errorsMessage.at(0));;
        }


        (async () => {
            try {
                const res = await fetch(
                    `${BASE_URL}${endPoints.details(gameId)}`,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json',
                            'X-Authorization': user.accessToken,
                        },
                        body: JSON.stringify(formValues)
                    }
                );

                await res.json();

            } catch (err) {
                throw new Error(err.message);
            }
        })();

        navigate(`/games/${gameId}/details`);
    }

    const { propertiesRegister, formAction, setFormValues } = useForm(submitEditGameHandler, initialGameData);

    const { gameId } = useParams();
    const { user } = useContext(UserContext);

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const res = await fetch(`${BASE_URL}${endPoints.details(gameId)}`, { signal: abortController.signal });

                const gameData = await res.json();

                setFormValues(gameData);
            } catch (err) {
                throw new Error(err.message);
            }
        })();

        return () => {
            abortController.abort();
        }
    }, [gameId, setFormValues])

    return (
        <section id="edit-page">
            <form id="add-new-game" action={formAction}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input
                            type="text"
                            id="gameName"
                            {...propertiesRegister('title')}
                            placeholder="Enter game title..."
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            {...propertiesRegister('genre')}
                            placeholder="Enter game genre..."
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input
                            type="number"
                            id="activePlayers"
                            {...propertiesRegister('players')}
                            min={0}
                            placeholder={0}
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input
                            type="date"
                            id="releaseDate"
                            {...propertiesRegister('date')}
                        />
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            {...propertiesRegister('imageUrl')}
                            placeholder="Enter image URL..."
                        />
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea
                            id="summary"
                            {...propertiesRegister('summary')}
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