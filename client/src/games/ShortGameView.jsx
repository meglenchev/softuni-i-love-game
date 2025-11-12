export function ShortGameView({
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
                <button className="details-button">Details</button>
            </div>
        </div>
    )
}