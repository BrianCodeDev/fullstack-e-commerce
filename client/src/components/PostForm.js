import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ onNewPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onNewPost(response.data);
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error("There was an error creating the post!", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)} required
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
