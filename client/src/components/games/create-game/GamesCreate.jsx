import { validate } from "../utils/createGameValidation.js";
import { endPoints } from "../../../utils/endpoints.js";
import { useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm.js";
import { useRequest } from "../../hooks/useRequest.js";

let initialGameData = {
    title: '',
    genre: '',
    players: '',
    date: '',
    imageUrl: '',
    summary: ''
}

export function GamesCreate() {
    const navigate = useNavigate();
    const { request } = useRequest();

    const submitGameHandler = async (formValues) => {
        const errors = validate(formValues);

        if (Object.keys(errors).length > 0) {
            const errorsMessage = Object.values(errors);

            return alert(errorsMessage.at(0));;
        }

        formValues._createdOn = Date.now();

        await request(endPoints.postGame, 'POST', formValues)

        navigate('/');
    }

    const { propertiesRegister, formAction } = useForm(submitGameHandler, initialGameData);

    return (
        <section id="add-page">
            <form id="add-new-game" action={formAction}>
                <div className="container">

                    <h1>Add New Game</h1>

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
                            min="0"
                            placeholder="0"
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
                            {...propertiesRegister('summary')}
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