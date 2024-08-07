const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
dotenv.config();

// Function to fetch email data
const fetchDataEmail = async () => {
  const timeout = 5000; // batas waktu 5 detik
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch('https://sealling.iot4environment.com/admin/send_notif.php', {
      signal: controller.signal
    });
    clearTimeout(id); // Menghapus batas waktu jika respon berhasil

    if (!response.ok) {
      throw new Error(`Gagal mengambil data_email.php: ${response.statusText}`);
    }

    const data = await response.json();
    if (data && Array.isArray(data.result) && data.result.length > 0) {
      const emails = data.result.map(item => item.email);
      return emails;
    } else {
      throw new Error('Data yang diterima dari API Email kosong atau tidak dalam format yang diharapkan');
    }
  } catch (err) {
    if (err.name === 'AbortError') {
      console.error('Kesalahan mengambil data email: Permintaan melebihi batas waktu');
    } else {
      console.error('Kesalahan mengambil data email:', err.message);
    }
    throw err; // Melempar ulang kesalahan agar bisa ditangani oleh Promise.all atau handler lainnya
  }
};

// Function to fetch status and date data
const fetchDataStatusDate = async () => {
  try {
    const response = await fetch('https://sealling.iot4environment.com/admin/data_ultrasonic.php');
    const data = await response.json();
    if (data && Array.isArray(data.result) && data.result.length > 0) {
      const statusData = data.result.slice(-1).map(item => item.status);
      const dateData = data.result.slice(-1).map(item => item.date);
      return { statusData, dateData };
    } else {
      throw new Error('Data received from Status and Date API is empty or not in expected format');
    }
  } catch (err) {
    console.error('Error fetching status and date data:', err);
    throw err; // Rethrow error to be caught by Promise.all
  }
};

// Konfigurasi transporter untuk nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendNotification = (statusData, dateData, emails, lastStatusData, lastDateData) => {
  const dangerousStatus = ['Bahaya', 'Siaga'];

  if (Array.isArray(emails) && emails.length > 0) {
    for (let i = 0; i < statusData.length; i++) {
      const status = statusData[i];
      const date = dateData[i];
      const email = emails[i];

      if (email && typeof email === 'string' && email.trim() !== '') {
        if (dangerousStatus.includes(status) && (lastStatusData[i] !== status || lastDateData[i] !== date)) {
          const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: `Peringatan sensor ultrasonic dengan ${status} pada ${date}`,
            text: `Status saat ini: ${status}\nWaktu terdeteksi: ${date}`
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(`Error sending email to ${email}:`, error.message);
              console.error('Timestamp:', new Date().toISOString());
            } else {
              console.log('Email sent:', info.response);
              lastStatusData[i] = status;
              lastDateData[i] = date;
            }
          });
        }
      } else {
        console.error('Invalid email: email is undefined or empty');
        console.error('Timestamp:', new Date().toISOString());
      }
    }
  } else {
    console.error('Invalid or empty emails array:', emails);
    console.error('Timestamp:', new Date().toISOString());
  }
};

const fetchDataAndSendNotificationsUltrasonic = async () => {
  let lastStatusData = [];
  let lastDateData = [];

  try {
    const [emails, { statusData, dateData }] = await Promise.all([fetchDataEmail(), fetchDataStatusDate()]);

    if (!emails || !statusData || !dateData) {
      throw new Error('One or more data sets are undefined or empty');
    }

    console.log('Email Data:', emails);
    console.log('Status Data:', statusData);
    console.log('Date Data:', dateData);

    sendNotification(statusData, dateData, emails, lastStatusData, lastDateData);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

// Example of handling errors
const handleError = () => {
  if (error) {
    console.error('Error:', error);
  }
};

fetchDataAndSendNotificationsUltrasonic();

module.exports = { fetchDataAndSendNotificationsUltrasonic };
