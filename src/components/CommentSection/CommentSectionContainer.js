// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // Add state for the comments
  const [state, setState] = useState(props.comments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {state.map(item => {
        return(
          <div>
            <Comment comment={item} />
          </div>
        )
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
