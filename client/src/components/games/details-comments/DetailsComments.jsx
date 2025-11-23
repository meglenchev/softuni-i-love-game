import { useEffect, useState } from "react";
import { endPoints } from "../../../utils/endpoints.js";
import { GamesComment } from "./GamesComment.jsx";
import { useParams } from "react-router";

export function DetailsComments() {
    const { gameId } = useParams();
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const res = await fetch(endPoints.comments(gameId), { signal: abortController.signal });

                if (res.headers.get("content-type")) {
                    const commentData = await res.json();

                    setAllComments(Object.values(commentData));
                }

            } catch (err) {
                throw new Error(err.message);
            }
        })();

        return () => {
            abortController.abort();
        }
    }, [gameId])

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            {allComments.length ? (
                <ul>
                    {allComments.map(comment => <GamesComment
                        key={comment._id}
                        comment={comment.comment}
                    />)}
                </ul>
            )
                : <p className="no-comment">No comments.</p>}
        </div>
    )
}