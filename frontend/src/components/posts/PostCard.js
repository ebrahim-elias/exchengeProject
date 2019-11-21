import React from "react";
import CommentSection from "../comment/CommentSection"

function PostCard({post, onDeleteClick,onClick,onSubmit}) {
        const handleSubmit = () => {
            onSubmit({body: body});
             setBody("");
            };
    const [body, setBody] = React.useState("");
    const [isCommentDisplayed, setIsCommentDisplayed] = React.useState(false);

    return (
        <div className="card mt-3">
            <div className="card-body">
                <p>
                   {post.body}
                </p>

                <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
                <button className="btn btn-primary ml-2" onClick={() => setIsCommentDisplayed(true)}>Comment</button>
                <CommentSection post = {post}></CommentSection>
                {
                isCommentDisplayed?
                <div>
                <textarea
                    className="form-control"
                    value={body}
                    onChange={e => setBody(e.target.value)} />
                    <button className="btn btn-primary" onClick={() => handleSubmit()}>Submit</button>
                </div>  :<span></span>
                }
           </div>
        </div>
    );
}

export default PostCard;