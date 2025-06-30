const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/contact');
//const contactRoutes = require('./routes/contactRoutes');  // Adjust path if needed

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolioDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
//app.use(contactRoutes);


app.post('/api/message', async (req, res) => {
  try {
    const { name, contact, address, email, message } = req.body;
    console.log(name);

    // Map frontend field names to backend schema fields
    const newContact = new Contact({
      name,
      phoneNo: contact,  // Saving 'contact' field as 'phoneNo' in MongoDB
      address,
      email,
      message
    });

    await newContact.save();
    res.status(201).json({ success: true, message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ success: false, message: 'Server error. Try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});