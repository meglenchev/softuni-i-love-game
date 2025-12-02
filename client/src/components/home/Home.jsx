import { endPoints } from "../../utils/endpoints.js"
import { Games } from "../games/catalog/Games.jsx";
import { useFetch } from "../hooks/useFetch.js";

export function Home() {
    const { data, isPanding } = useFetch(endPoints.allGames, {})

    //const gameData = Object.entries(data).sort((a, b) => b[1]._createdOn - a[1]._createdOn).slice(0, 3);
    const gameData = Object.entries(data).slice(0, 3);

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
                        {isPanding
                            ? <h3 className="no-articles" style={{ color: 'white' }}>Loading...</h3>
                            : gameData.length > 0 
                                ? (gameData.map(game => <Games
                                    key={game.at(1)._id}
                                    id={game.at(1)._id}
                                    imageUrl={game.at(1).imageUrl}
                                    title={game.at(1).title}
                                    genre={game.at(1).genre}
                                />))
                                : <p className="no-articles">No games yet!</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}