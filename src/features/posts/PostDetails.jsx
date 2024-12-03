import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

const PostDetails = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);
  const post = posts.find((post) => post.id === parseInt(id)); 

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts()); 
    }
  }, [dispatch, posts]);

  if (!post) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="post-details-container">
      <div className="container">
        <h2>Post Details</h2>
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Post ID: {post.id}</h5>
            <h3 className="card-title">Title: {post.title}</h3>
            <p className="card-text">{post.body}</p>
            <Link to="/" className="btn btn-primary">
              Back to Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
