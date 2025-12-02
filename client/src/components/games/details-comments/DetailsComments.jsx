import { BASE_URL, endPoints } from "../../../utils/endpoints.js";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch.js";

export function DetailsComments({ refresh }) {
    const { gameId } = useParams();

    const { data, isPanding } = useFetch(endPoints.comments(gameId), {}, gameId, refresh);

    const allComments = Object.values(data).filter(comment => comment.gameId === gameId);

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            {isPanding
                ? <h3 className="no-articles" style={{ color: 'white' }}>Loading...</h3>
                : allComments.length
                    ? (
                        <ul>
                            {allComments.map(comment => (
                                <li key={comment._id} className="comment">
                                    <p>{comment.author}: {comment.comment}</p>
                                </li>
                            ))}
                        </ul>
                    )
                    : <p className="no-comment">No comments.</p>}
        </div>
    )
}