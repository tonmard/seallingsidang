const fetch = require('node-fetch');

const sendLog = async (log) => {
  console.log(`Sending log: ${log}`);
  try {
    await fetch('https://sealling.iot4environment.com/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ log })
    });
  } catch (error) {
    console.error('Error sending log:', error.message);
  }
};

module.exports = { sendLog };
