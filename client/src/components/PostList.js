import React, { useEffect, useState } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPaperPlane, faTrashCan, faEye } from '@fortawesome/free-solid-svg-icons';
import EditPostForm from './EditPostForm';  // Import the EditPostForm component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const socket = socketIOClient('http://localhost:5000');

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState(null);  // State to track the post being edited
  const [audioLoaded, setAudioLoaded] = useState(false); // State to track if audio is loaded

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

    // Cleanup function
    return () => {
      socket.disconnect(); // Disconnect socket when component unmounts
    };
  }, [posts]); // Dependency array includes posts to update socket listeners

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`);
      // Update posts after successful deletion
      setPosts(posts.filter(post => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEditPost = (updatedPost) => {
    setPosts(posts.map(post => (post._id === updatedPost._id ? updatedPost : post)));
    setEditingPost(null);  // Close the edit form
  };

  const generateShareLink = (postId) => {
    return `${window.location.origin}/post/${postId}`;
  };

  const handleSharePost = (postId) => {
    const shareLink = generateShareLink(postId);
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        alert('Share link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Error copying share link:', error);
      });
  };

  const handleAudioLoad = () => {
    setAudioLoaded(true);
  };

  // Function to start playing audio
  const startAudio = () => {
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
      bgMusic.volume = 0.02; // Adjust as needed for very low volume
      bgMusic.play();
    }
  };

  if (loading) {
    return <p style={{ color: 'white', textAlign: 'center' }}>Loading posts...</p>;
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
            <button onClick={() => setEditingPost(post)}><FontAwesomeIcon icon={faPenToSquare} /> Edit</button>
            <button onClick={() => handleSharePost(post._id)}><FontAwesomeIcon icon={faPaperPlane} /> Share</button>
            <Link to={`/post/${post._id}`} className="view-button">
              <button><FontAwesomeIcon icon={faEye} /> View</button>
            </Link>
            <button onClick={() => handleDeletePost(post._id)}><FontAwesomeIcon icon={faTrashCan} /> Delete</button>
          </div>
        </div>
      ))}

      {editingPost && (
        <EditPostForm
          post={editingPost}
          onEdit={handleEditPost}
          onClose={() => setEditingPost(null)}
        />
      )}

      {/* Audio element for background music */}
      <audio id="bgMusic" loop onLoadedData={handleAudioLoad}>
        <source src="8-Bit Fantasy & Adventure Music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Button to start audio on user interaction */}
      {!audioLoaded && (
        <button onClick={startAudio} style={{ display: 'none' }}>Start Audio</button>
      )}
    </div>
  );
};

export default PostList;
