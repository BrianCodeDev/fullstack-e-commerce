const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const PORT = 5000;
const server = http.createServer(app);
const io = socketIo(server);
app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb+srv://coffee:Blue1088!@coffee.uvzn1x4.mongodb.net/?retryWrites=true&w=majority&appName=coffee', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String, // Add imageUrl field for storing image path
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

// Multer configuration for handling image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save uploaded images to 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with current timestamp + original extension
  }
});

const upload = multer({ storage });

app.post('/api/posts', upload.single('image'), async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({
    title,
    content,
    imageUrl: req.file ? req.file.path : '' // Save image path if uploaded
  });
  await newPost.save();

  // Emit an event to all connected clients when a new post is created
  io.emit('newPost', newPost);

  res.json(newPost);
});

app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.delete('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    // Emit an event to all connected clients when a post is deleted
    io.emit('deletePost', id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A client connected');

  // Example of handling disconnect event
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
