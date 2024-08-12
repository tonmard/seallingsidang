//peringatan.jsx

import React, { useState, useEffect } from "react";
import { waves } from "../constants";

const Peringatan = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendData = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setMessage('Email tidak valid. Silakan coba lagi.');
      return;
    }

    const data = { email };

    try {
      console.log('Sending data to server:', data);
      const response = await fetch('https://sealling.iot4environment.com/admin/send_notif.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const text = await response.text();
      console.log('Raw response:', text);

      if (response.ok) {
        setSuccessMessage('Pemberitahuan berhasil dikirim!');
        setMessage('');
      } else {
        setMessage('Gagal mengirim pemberitahuan. Silakan coba lagi.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setMessage('Terjadi kesalahan. Silakan coba lagi.');
      setSuccessMessage('');
    }
  };

  const triggerEmailNotifications = async (url) => {
    try {
      console.log(`Triggering email notifications for ${url}`);
      const response = await fetch(url, { method: 'POST' });

      if (!response.ok) {
        console.error(`Request failed with status: ${response.status}`);
        const errorText = await response.text();
        console.error('Error response:', errorText);
        setMessage('Gagal mengirim pemberitahuan. Silakan coba lagi.');
        setSuccessMessage('');
        return;
      }

      const contentType = response.headers.get('Content-Type');
      console.log('Content-Type:', contentType);

      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();
        console.log('JSON response:', responseData);
        setMessage(responseData.message || 'Pemberitahuan berhasil dikirim!');
        setSuccessMessage('Pemberitahuan berhasil dikirim!');
      } else if (contentType && contentType.includes('text/html')) {
        console.log('Received HTML response. Checking for potential issues...');
        const text = await response.text();
        console.log('HTML response:', text);
        setMessage('Server mengembalikan halaman HTML, periksa API server.');
        setSuccessMessage('');
      } else {
        const text = await response.text();
        console.log('Text response:', text);
        setMessage('Pemberitahuan berhasil dikirim!');
        setSuccessMessage('Pemberitahuan berhasil dikirim!');
      }
    } catch (error) {
      console.error('Error triggering notifications:', error);
      setMessage('Terjadi kesalahan. Silakan coba lagi.');
      setSuccessMessage('');
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      triggerEmailNotifications('https://sealling.iot4environment.com/api/send_notifications_ultrasonic');
      triggerEmailNotifications('https://sealling.iot4environment.com/api/send_notifications_submersible');
    }, 60000); // Mengirimkan request setiap 60 detik

    return () => clearInterval(intervalId); // Bersihkan interval saat komponen dibongkar
  }, []);

  const handleGoHome = () => {
    window.location.href = '/';
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
            {message && <p className="text-red-600 text-center mt-2">{message}</p>}
            {successMessage && <p className="text-green-600 text-center mt-2">{successMessage}</p>}
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
              <button
                type="submit"
                className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white bg-slate-900 text-white h-10 mt-5 rounded-full font-medium mx-auto"
              >
                Kirim
              </button>
              <button
                onClick={handleGoHome}
                className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white bg-slate-900 text-white h-10 mt-5 rounded-full font-medium mx-auto"
              >
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
