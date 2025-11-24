import { useEffect, useState } from "react";
import { endPoints } from "../../../utils/endpoints.js";
import { useParams } from "react-router";

export function DetailsComments({ refresh }) {
    const { gameId } = useParams();
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        async function getGameComments() {
            try {
                const res = await fetch(endPoints.comments(gameId), { signal: abortController.signal });

                if (res.headers.get("content-type")) {
                    const commentData = await res.json();

                    const comments = Object.values(commentData).filter(comment => comment.gameId === gameId);

                    setAllComments(Object.values(comments));
                }

            } catch (err) {
                throw new Error(err.message);
            }
        }

        getGameComments();

        return () => {
            abortController.abort();
        }
    }, [gameId, refresh])

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            {allComments.length 
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