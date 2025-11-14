import { NavLink } from "react-router";

export function Games({
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
                <NavLink to={`/games/${id}/details`} className="details-button">Details</NavLink>
            </div>
        </div>
    )
}