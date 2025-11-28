import { useContext, useState } from "react";
import { endPoints } from "../../../utils/endpoints.js";
import { useParams } from "react-router";
import { UserContext } from "../../../contexts/UserContext.js";

const initialComment = {
    gameId: '',
    comment: ''
}

export function CreateComment({ onCreate }) {
    const { user } = useContext(UserContext);
    const { gameId } = useParams();
    const [comment, setComment] = useState(initialComment);

    const createCommentHandler = (e) => {
        setComment((comment) => ({
            ...comment,
            [e.target.name]: e.target.value,
            gameId: gameId,
            author: user.email
        }))
    }

    const submitCommentHandler = (e) => {
        e.preventDefault();

        if (!comment.comment) {
            return alert('Comment is required!');
        }

        (async () => {
            try {
                await fetch(
                    endPoints.addComment,
                    {
                        method: 'post',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(comment)
                    });

                setComment(initialComment);
                onCreate();

            } catch (err) {
                throw new Error(err.message);
            }
        })();
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={submitCommentHandler}>
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    value={comment.comment}
                    onChange={createCommentHandler}
                />
                <input className="btn submit" type="submit" defaultValue="Add Comment" />
            </form>
        </article>
    )
}