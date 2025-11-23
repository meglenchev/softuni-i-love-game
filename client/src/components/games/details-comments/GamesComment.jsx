export function GamesComment({comment, author}) {
    return (
        <li className="comment">
            <p>{author}: {comment}</p>
        </li>
    )
}