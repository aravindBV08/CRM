const express = require('express');
const cors = require('cors');
const path = require("path")
const history = require('connect-history-api-fallback');
const app = express();
app.use(cors());
app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

// Route all other requests to serve 'index.html' for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Start server
const PORT = process.env.PORT || 8050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});