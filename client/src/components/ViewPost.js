import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewPost = () => {
  const { id } = useParams(); // Fetch the 'id' parameter from the URL
  const [post, setPost] = useState(null); // State to hold the post data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`); // Fetch data from API based on id
        setPost(response.data); // Update state with fetched post data
        setLoading(false); // Update loading state to false after data is fetched
      } catch (error) {
        console.error('Error fetching post:', error); // Log error if fetching fails
        setLoading(false); // Update loading state even if there's an error
      }
    };

    fetchPost(); // Call fetchPost function when component mounts or 'id' changes
  }, [id]); // Dependency array ensures useEffect runs when 'id' changes

  if (loading) {
    return <p>Loading post...</p>; // Display loading message while fetching data
  }

  if (!post) {
    return <p>Post not found</p>; // Display message if post is not found
  }

  return (
    <div>
      <h1>{post.title}</h1> {/* Display post title */}
      <p>{post.content}</p> {/* Display post content */}
      {post.imageUrl && ( // Check if post has imageUrl and display image if available
        <img
          src={`http://localhost:5000/${post.imageUrl}`}
          alt={post.title}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
    </div>
  );
};

export default ViewPost;
