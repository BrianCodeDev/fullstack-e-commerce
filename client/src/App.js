import React, { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
    closeCreatePostModal();
  };

  const toggleCreatePostModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeCreatePostModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App App-container">
      <h1>Blog App</h1>
      <div className='center'>
        <button onClick={toggleCreatePostModal}>Create a post</button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeCreatePostModal}>&times;</span>
            <PostForm onNewPost={handleNewPost} />
          </div>
        </div>
      )}
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
