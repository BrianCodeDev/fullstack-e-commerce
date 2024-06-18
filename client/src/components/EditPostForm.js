import React, { useState } from 'react';
import axios from 'axios';

const EditPostForm = ({ post, onEdit, onClose }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [image, setImage] = useState(null);

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const response = await axios.put(`http://localhost:5000/api/posts/${post._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onEdit(response.data);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <form onSubmit={handleEdit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">Update Post</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditPostForm;
