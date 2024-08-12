const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const { sendLog } = require('./log_service');
dotenv.config();

let lastStatus = { ultrasonic: null, submersible: null };

const fetchWithTimeout = async (url, options = {}, timeout = 10000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    const redirected = response.url !== url;
    if (redirected) {
      console.error(`Request was redirected to ${response.url}`);
    }
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

const fetchEmails = async () => {
  console.log('Fetching emails');
  try {
    const response = await fetchWithTimeout('https://sealling.iot4environment.com/admin/send_notif.php');
    if (!response.ok) {
      throw new Error(`Error fetching emails: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Emails fetched:', data.result);
    return data.result.map(item => item.email);
  } catch (error) {
    sendLog(`Error fetching emails: ${error.message}`);
    throw error;
  }
};

const fetchSensorData = async (sensorType) => {
  console.log(`Fetching sensor data for ${sensorType}`);
  try {
    const response = await fetchWithTimeout(`https://sealling.iot4environment.com/admin/data_${sensorType}.php`);
    if (!response.ok) {
      throw new Error(`Error fetching sensor data: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`${sensorType} sensor data fetched:`, data.result);
    return { status: data.result[0].status, date: data.result[0].date };
  } catch (error) {
    sendLog(`Error fetching sensor data for ${sensorType}: ${error.message}`);
    throw error;
  }
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendEmail = (email, status, date) => {
  console.log(`Sending email to ${email} with status ${status} and date ${date}`);
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: `Peringatan sensor dengan status ${status} pada ${date}`,
    text: `Status saat ini: ${status}\nWaktu terdeteksi: ${date}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      sendLog(`Error sending email to ${email}: ${error.message}`);
      sendLog(`Error stack: ${error.stack}`);
    } else {
      sendLog(`Email sent to ${email}: ${info.response}`);
    }
  });
};

const sendNotifications = async (sensorType) => {
  try {
    const emails = await fetchEmails();
    const { status, date } = await fetchSensorData(sensorType);

    if (['Bahaya', 'Siaga'].includes(status) && (lastStatus[sensorType] !== status)) {
      emails.forEach(email => sendEmail(email, status, date));
      lastStatus[sensorType] = status;
      sendLog(`Notifications sent for ${sensorType} with status ${status}.`);
    } else {
      sendLog(`No notifications sent for ${sensorType} with status ${status}.`);
    }
  } catch (err) {
    sendLog(`Error sending notifications for ${sensorType}: ${err}`);
  }
};

const sendNotificationsUltrasonic = async () => {
  await sendNotifications('ultrasonic');
};

const sendNotificationsSubmersible = async () => {
  await sendNotifications('submersible');
};

module.exports = { sendNotificationsUltrasonic, sendNotificationsSubmersible };

// Test SMTP connection
transporter.verify((error, success) => {
  if (error) {
    sendLog(`SMTP connection error: ${error}`);
  } else {
    sendLog('SMTP server is ready to take our messages');
  }
});
