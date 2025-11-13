import { useEffect, useState } from "react"
import { endPoints } from "../utils/endpoints.js";
import { Game } from "./Game.jsx";

export function GameCatalog() {
    const [allGames, setAllGames] = useState({});

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const res = await fetch(endPoints.allGames, { signal: abortController.signal });

                const gamesData = await res.json();
                setAllGames(Object.entries(gamesData));

            } catch (err) {
                throw new Error(err.message);
            }
        })();

        return () => {
            abortController.abort();
        }
    }, [])

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            {allGames.length > 0 ? (
                <div className="catalog-container">
                    {allGames.map(game => <Game
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