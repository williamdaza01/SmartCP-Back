// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const envPath = path.join(__dirname, './src/utils/.env');
dotenv.config({ path: envPath });

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middlewares
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'SmartCP-DB'
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Routes
const router = require('./src/Routers/router');
app.use('/api', router);
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'template.html');
  
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('El archivo no pudo ser encontrado');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
  app
}
