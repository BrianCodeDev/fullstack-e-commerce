import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import ViewPost from './components/ViewPost';

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
    <Router>
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
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
          <Route path="/post/:id" element={<ViewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
