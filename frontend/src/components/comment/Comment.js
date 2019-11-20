import React from "react";

function Comment({comment, onDeleteClick,onClick}) {
    const [body, setBody] = React.useState("");
    const [isCommentDisplayed, setIsCommentDisplayed] = React.useState(false);

    return (
        <div className="card mt-3">
            <div className="card-body">
                <p>
                   {comment.body}
                </p>

                <button className="btn btn-primary ml-2" onClick={() => setIsCommentDisplayed(true)}>Comment</button>

                {
                isCommentDisplayed?
                <textarea
                   className="form-control"
                   value={body}
                   onClick={e => setBody(e.target.value)} /> : <span> </span>
                }
                <button className="btn btn-primary" onClick={() => isCommentDisplayed}>Submit</button>
                <button className="btn btn-primary ml-2" onClick={() => onDeleteClick}>Delete Comment</button>


            </div>
        </div>
    );
}
