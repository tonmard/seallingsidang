// server.js

const express = require('express');
const { fetchDataAndSendNotificationsUltrasonic } = require('./send_notif_ultrasonic.js');
const { fetchDataAndSendNotificationsPressure } = require('./send_notif_pressure.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/send_notifications_ultrasonic', async (req, res) => {
  try {
    await fetchDataAndSendNotificationsUltrasonic();
    res.status(200).send('Ultrasonic notifications sent successfully.');
  } catch (error) {
    console.error('Error sending ultrasonic notifications:', error.message, error.stack);
    res.status(500).send('Error sending ultrasonic notifications.');
  }
});

app.post('/api/send_notifications_pressure', async (req, res) => {
  try {
    await fetchDataAndSendNotificationsPressure();
    res.status(200).send('Pressure notifications sent successfully.');
  } catch (error) {
    console.error('Error sending pressure notifications:', error.message, error.stack);
    res.status(500).send('Error sending pressure notifications.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
