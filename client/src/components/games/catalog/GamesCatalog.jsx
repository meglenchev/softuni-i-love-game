import { Games } from "./Games.jsx";
import { endPoints } from "../../../utils/endpoints.js";
import { useFetch } from "../../hooks/useFetch.js";

export function GamesCatalog() {
    const { data, isPanding } = useFetch(endPoints.allGames, {})

    const allGames = Object.entries(data);

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            {isPanding
                ? <h3 className="no-articles" style={{ color: 'white' }}>Loading...</h3>
                : allGames.length > 0 ? (
                    <div className="catalog-container">
                        {allGames.map(game => <Games
                            key={game.at(0)}
                            id={game.at(0)}
                            imageUrl={game.at(1).imageUrl}
                            title={game.at(1).title}
                            genre={game.at(1).genre}
                        />)}
                    </div>
                )
                    : <h3 className="no-articles">No Added Games Yet</h3>}
        </section>
    )
}