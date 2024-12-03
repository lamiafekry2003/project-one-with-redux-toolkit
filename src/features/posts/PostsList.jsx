
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, addPost } from "./postsSlice";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { deletePost } from "../../network/postsApis";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const initialValues = {
    title: "",
    body: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(50, "Title must be 50 characters or less")
      .required("Title is required"),
    body: Yup.string()
      .min(10, "Body must be at least 10 characters")
      .required("Body is required"),
  });

  const handleDelete = (id) => {
    dispatch(deletePost(id))
      .then(() => toast.success("Post deleted successfully"))
      .catch(() => toast.error("Failed to delete post"));
  };
  const onSubmit = (values, { resetForm }) => {
    dispatch(addPost(values)).then(() => {
      toast.success("Post added successfully");
      resetForm(); 
    });
  };

  return (
    <>
      <div className="posts-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
                {posts &&
  posts.map((post) => (
    <div className="card post-item" key={post.id}>
      <div className="card-body">
        <h5>
          {post.id} - {post.title}
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="postControlButtons">
          <Link to={`/post/${post.id}`} className="btn btn-info">
            View Details
          </Link>
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faEdit} /> Update
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </div>
    </div>
  ))}
            </div>

            
            <div className="col-lg-4">
              <h3 className="mb-3">Add a New Post</h3>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="add-post-form">
                    {/* Title Field */}
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <Field
                        type="text"
                        id="title"
                        name="title"
                        className="form-control mb-2"
                        placeholder="Enter title"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                   
                    <div className="form-group">
                      <label htmlFor="body">Body</label>
                      <Field
                        as="textarea"
                        id="body"
                        name="body"
                        className="form-control mb-2"
                        placeholder="Enter body"
                        rows="4"
                      />
                      <ErrorMessage
                        name="body"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={isSubmitting}
                    >
                      <FontAwesomeIcon icon={faPlus} /> Add Post
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default PostsList;
