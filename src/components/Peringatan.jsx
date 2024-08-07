import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { waves } from "../constants";

const Peringatan = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendData = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setMessage('');
      setSuccessMessage('Email tidak valid. Silakan masukkan email yang benar.');
      return;
    }

    setLoading(true);
    const data = { email };

    try {
      const response = await fetch('https://sealling.iot4environment.com/admin/send_notif.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const text = await response.text();
      console.log('Raw response:', text);

      if (text === 'Gagal mendaftarkan email') {
        setSuccessMessage('Gagal mendaftarkan email');
        setMessage('');
      } else {
        setMessage('Email berhasil terdaftar');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setMessage('Error sending data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const triggerEmailNotifications = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
      });

      if (response.ok) {
        console.log(`${url} notifications sent successfully.`);
      } else {
        console.error(`Error sending ${url} notifications:`, await response.text());
      }
    } catch (error) {
      console.error(`Error triggering ${url} notifications:`, error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Triggering email notifications');
      triggerEmailNotifications('https://sealling.iot4environment.com/api/send_notifications_ultrasonic');
      triggerEmailNotifications('https://sealling.iot4environment.com/api/send_notifications_pressure');
    }, 60000); // 1 menit

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="w-full py-10 bg-white px-6">
      <div className="max-w-md md:w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden animated">
        <div className="md:justify-center">
          <div className="md:justify-center">
            <img
              className="h-48 w-full object-cover"
              src={waves}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-6">
            <h1 className="block mt-1 font-serif text-2xl md:text-3xl my-6 font-medium text-center text-slate-900">
              Dapatkan Peringatan Dini!
              <p className="text-slate-600 text-xs pl-4 p-1">
                Daftarkan dirimu dan dapatkan fitur peringatan dini sekarang.
              </p>
            </h1>
            {message && <p className="text-green-600 text-center mt-2">{message}</p>}
            {successMessage && <p className="text-red-600 text-center mt-2">{successMessage}</p>}
            {loading && <p className="text-blue-600 text-center mt-2">Loading...</p>}
            <form onSubmit={sendData}>
              <label className="block">
                <span className="block text-sm font-normal pl-4 p-1 text-slate-900">
                  Email:
                </span>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-sm text-black border border-black rounded-full p-2 pl-4 outline-none"
                    placeholder="Masukan email anda"
                  />
                </div>
                <p className="text-slate-600 text-xs pl-4 p-1">
                  *Pastikan email yang anda masukan sudah benar.
                </p>
              </label>
              <button type="submit" className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white bg-slate-900 text-white h-10 mt-5 rounded-full font-medium mx-auto">
                Kirim
              </button>
              <button onClick={handleGoHome} type="button" className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white bg-slate-900 text-white h-10 mt-5 rounded-full font-medium mx-auto">
                Go to Home
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peringatan;
