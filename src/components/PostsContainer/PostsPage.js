//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import CommentSectionContainer from '../CommentSection/CommentSectionContainer'

// pass the data from App.js down as props then map through the data
const PostsPage = ({ data }) => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {data.map(element => {
        return(
          <div>
            <Post post={element} />
          </div>
        )
      })}
    </div>
  );
};

export default PostsPage;

