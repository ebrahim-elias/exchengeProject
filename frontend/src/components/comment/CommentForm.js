import React from "react";

function CommentForm({onSubmit,onDeleteClick}) {
    const [body, setBody] = React.useState("");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onSubmit({body: body});

        // Clear the input field
        setBody("");
    };

    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            value={body}
                            onChange={e => setBody(e.target.value)} /> : <span> </span>
                             }

                            <button className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;