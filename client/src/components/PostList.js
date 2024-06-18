import React, { useEffect, useState } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPaperPlane, faTrashCan, faEye } from '@fortawesome/free-solid-svg-icons';

const socket = socketIOClient('http://localhost:5000');

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();

    socket.on('newPost', (newPost) => {
      // Update posts with the new post added at the beginning
      setPosts([newPost, ...posts]);
    });

    socket.on('deletePost', (deletedPostId) => {
      // Remove the deleted post from the posts array
      setPosts(posts.filter(post => post._id !== deletedPostId));
    });

    return () => {
      // Disconnect socket when component unmounts
      socket.disconnect();
    };
  }, []); // Dependency array should be empty to run once on mount

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`);
      // Update posts after successful deletion
      setPosts(posts.filter(post => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (loading) {
    return <p style={{color: 'white', textAlign: 'center'}}>Loading posts...</p>;
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post._id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.imageUrl && (
            <img
              src={`http://localhost:5000/${post.imageUrl}`}
              alt={post.title}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
          <div className='gap-one display-flex center'>
          <button onClick={() => handleDeletePost(post._id)}><FontAwesomeIcon icon={faPenToSquare} /> Edit</button>
          <button onClick={() => handleDeletePost(post._id)}><FontAwesomeIcon icon={faPaperPlane} /> Share</button>
          <button onClick={() => handleDeletePost(post._id)}><FontAwesomeIcon icon={faEye} /> View</button>
          <button onClick={() => handleDeletePost(post._id)}><FontAwesomeIcon icon={faTrashCan} /> Delete</button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default PostList;
