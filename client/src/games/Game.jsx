import { NavLink } from "react-router";

export function Game({
    id,
    imageUrl, 
    title, 
    genre
}) {
    return (
        <div className="game">
            <img src={imageUrl} alt={title} />
            <div className="details-overlay">
                <p className="name">{title}</p>
                <p className="genre">{genre}</p>
                <NavLink to={`/game/${id}/details`} className="details-button">Details</NavLink>
            </div>
        </div>
    )
}