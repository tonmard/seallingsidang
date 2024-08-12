const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { sendNotificationsUltrasonic, sendNotificationsSubmersible } = require('./notification_service');
const { sendLog } = require('./log_service');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors({
  origin: 'https://sealling.iot4environment.com/', // Pastikan domain frontend Anda diset dengan benar
  credentials: true
}));

// Parse incoming JSON requests
app.use(express.json());

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
      console.log(r.route.path);
    }
  });
});

app.post('/api/send_notifications_ultrasonic', async (req, res) => {
  console.log("Received request to send ultrasonic notifications");
  try {
    await sendNotificationsUltrasonic();
    res.status(200).json({ message: 'Ultrasonic notifications sent successfully.' });
  } catch (error) {
    console.error('Error sending ultrasonic notifications:', error.message, error.stack);
    sendLog(`Error sending ultrasonic notifications: ${error.message}`);
    res.status(500).json({ message: 'Error sending ultrasonic notifications.' });
  }
});

app.post('/api/send_notifications_submersible', async (req, res) => {
  console.log("Received request to send submersible notifications");
  try {
    await sendNotificationsSubmersible();
    res.status(200).json({ message: 'Submersible notifications sent successfully.' });
  } catch (error) {
    console.error('Error sending submersible notifications:', error.message, error.stack);
    sendLog(`Error sending submersible notifications: ${error.message}`);
    res.status(500).json({ message: 'Error sending submersible notifications.' });
  }
});


// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

// Test isolated route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Test successful!' });
});
