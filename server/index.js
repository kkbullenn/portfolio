const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Add routes here
app.get('/', (req, res) => res.send('API is running!'));

const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);


// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
//  .catch(err => console.error(err));