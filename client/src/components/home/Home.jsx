import { useEffect, useState } from "react"
import { endPoints } from "../../utils/endpoints.js"
import { Games } from "../games/catalog/Games.jsx";

export function Home() {
    const [games, setdGames] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const res = await fetch(endPoints.allGames, {signal: abortController.signal});

                const gamesData = await res.json();
                
                const allGames = Object.entries(gamesData);
                
                setdGames(allGames.sort((a, b) => b[1]._createdOn - a[1]._createdOn).slice(0, 3));

            } catch (err) {
                throw new Error(err.message);
            }
        })();

        return () => {
            abortController.abort();
        }
    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in </h3>
                <img id="logo-left" src="./images/logo.png" alt="logo" />
            </div>

            <div id="home-page">
                <h1>Latest Games</h1>
                <div id="latest-wrap">
                    <div className="home-container">
                        {games.length > 0 ?
                            (games.map(game => <Games
                                key={game.at(0)}
                                id={game.at(0)}
                                imageUrl={game.at(1).imageUrl}
                                title={game.at(1).title}
                                genre={game.at(1).genre}
                            />))
                            : <p className="no-articles">No games yet</p>}

                    </div>
                </div>
            </div>
        </section>
    )
}